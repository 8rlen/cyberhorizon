
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface ThreeSceneProps {
  className?: string;
  interactive?: boolean;
}

const ThreeScene: React.FC<ThreeSceneProps> = ({ 
  className, 
  interactive = false 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const shapesRef = useRef<THREE.Mesh[]>([]);
  const frameIdRef = useRef<number>(0);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const isMouseDownRef = useRef<boolean>(false);

  // Initialize the scene
  useEffect(() => {
    if (!containerRef.current) return;

    // Create scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Create camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 10;
    cameraRef.current = camera;

    // Create renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Create shapes
    const shapes: THREE.Mesh[] = [];

    // Create cube meshes with different colors and positions
    const colors = [0x9b87f5, 0x7e69ab, 0x6e59a5, 0xd6bcfa];
    const geometries = [
      new THREE.IcosahedronGeometry(0.8, 0),
      new THREE.TetrahedronGeometry(0.7, 0),
      new THREE.OctahedronGeometry(0.7, 0)
    ];
    
    for (let i = 0; i < 20; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = new THREE.MeshPhongMaterial({ 
        color: colors[Math.floor(Math.random() * colors.length)],
        transparent: true,
        opacity: 0.8,
        shininess: 100
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      
      // Random positions within a sphere
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 4 + Math.random() * 3;
      
      mesh.position.x = radius * Math.sin(phi) * Math.cos(theta);
      mesh.position.y = radius * Math.sin(phi) * Math.sin(theta);
      mesh.position.z = radius * Math.cos(phi);
      
      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;
      mesh.scale.multiplyScalar(0.5 + Math.random() * 0.5);
      
      scene.add(mesh);
      shapes.push(mesh);
    }
    
    shapesRef.current = shapes;

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      
      rendererRef.current.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    if (interactive) {
      // Mouse move handler
      const handleMouseMove = (event: MouseEvent) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        
        mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      };

      // Mouse down/up handlers
      const handleMouseDown = () => {
        isMouseDownRef.current = true;
      };
      
      const handleMouseUp = () => {
        isMouseDownRef.current = false;
      };

      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('mouseup', handleMouseUp);
        
        cancelAnimationFrame(frameIdRef.current);
        
        if (rendererRef.current && containerRef.current) {
          containerRef.current.removeChild(rendererRef.current.domElement);
        }
        
        // Dispose all geometries and materials
        shapesRef.current.forEach(mesh => {
          mesh.geometry.dispose();
          if (mesh.material instanceof THREE.Material) {
            mesh.material.dispose();
          }
        });
      };
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameIdRef.current);
      
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      // Dispose all geometries and materials
      shapesRef.current.forEach(mesh => {
        mesh.geometry.dispose();
        if (mesh.material instanceof THREE.Material) {
          mesh.material.dispose();
        }
      });
    };
  }, [interactive]);

  // Animation loop
  useEffect(() => {
    const animate = () => {
      if (!sceneRef.current || !cameraRef.current || !rendererRef.current) return;
      
      // Rotate each shape slightly
      shapesRef.current.forEach((shape, i) => {
        const speed = 0.001 + (i % 3) * 0.001;
        shape.rotation.x += speed;
        shape.rotation.y += speed * 0.8;
        
        // If interactive, apply attraction to mouse
        if (interactive && isMouseDownRef.current) {
          // Create a force based on mouse position
          const force = new THREE.Vector3(
            mouseRef.current.x * 0.1,
            mouseRef.current.y * 0.1,
            0
          );
          
          // Apply force to shape position
          shape.position.add(force);
          
          // Limit distance from center
          if (shape.position.length() > 10) {
            shape.position.normalize().multiplyScalar(10);
          }
        }
      });
      
      // Slightly rotate camera based on mouse position if interactive
      if (interactive && !isMouseDownRef.current) {
        cameraRef.current.position.x += (mouseRef.current.x * 2 - cameraRef.current.position.x) * 0.01;
        cameraRef.current.position.y += (mouseRef.current.y * 2 - cameraRef.current.position.y) * 0.01;
        cameraRef.current.lookAt(new THREE.Vector3(0, 0, 0));
      }
      
      rendererRef.current.render(sceneRef.current, cameraRef.current);
      frameIdRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(frameIdRef.current);
    };
  }, [interactive]);

  return (
    <div 
      ref={containerRef} 
      className={`three-scene-container ${interactive ? 'interactive' : ''} ${className || ''}`}
    >
      <div className="three-scene-overlay" />
    </div>
  );
};

export default ThreeScene;
