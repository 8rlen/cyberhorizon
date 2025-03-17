
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Lock, 
  Unlock, 
  Shield, 
  Key, 
  Zap,
  AlertTriangle,
  CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface CodeBreakerProps {
  className?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
}

const CodeBreaker: React.FC<CodeBreakerProps> = ({ 
  className,
  difficulty = 'medium'
}) => {
  const [sequence, setSequence] = useState<number[]>([]);
  const [userSequence, setUserSequence] = useState<number[]>([]);
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'success' | 'failed'>('idle');
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [level, setLevel] = useState<number>(1);
  const [hint, setHint] = useState<string>("");
  const [score, setScore] = useState<number>(0);

  // Set difficulty parameters
  const getDifficultySettings = () => {
    switch(difficulty) {
      case 'easy':
        return { sequenceLength: 3, timeLimit: 15 };
      case 'hard':
        return { sequenceLength: 6, timeLimit: 12 };
      case 'medium':
      default:
        return { sequenceLength: 4, timeLimit: 15 };
    }
  };

  const { sequenceLength, timeLimit } = getDifficultySettings();

  // Generate a new sequence
  const generateSequence = () => {
    const newSequence = Array.from(
      { length: sequenceLength + Math.floor(level / 2) }, 
      () => Math.floor(Math.random() * 4)
    );
    setSequence(newSequence);
    return newSequence;
  };

  // Start a new game
  const startGame = () => {
    setGameState('playing');
    setUserSequence([]);
    generateSequence();
    setTimeLeft(timeLimit);
    setHint("");
  };

  // Handle button click
  const handleButtonClick = (value: number) => {
    if (gameState !== 'playing') return;

    const newUserSequence = [...userSequence, value];
    setUserSequence(newUserSequence);

    // Check if the user's sequence is correct so far
    for (let i = 0; i < newUserSequence.length; i++) {
      if (newUserSequence[i] !== sequence[i]) {
        setGameState('failed');
        setHint(`The correct sequence was: ${sequence.join(' → ')}`);
        return;
      }
    }

    // Check if the user has completed the sequence
    if (newUserSequence.length === sequence.length) {
      setGameState('success');
      setScore(score + (level * 10));
      setLevel(level + 1);
    }
  };

  // Timer effect
  useEffect(() => {
    if (gameState !== 'playing') return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setGameState('failed');
          setHint(`Time's up! The correct sequence was: ${sequence.join(' → ')}`);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState, sequence]);

  // Button configurations
  const buttons = [
    { color: 'bg-purple-500 hover:bg-purple-600', icon: <Shield className="h-6 w-6" /> },
    { color: 'bg-indigo-500 hover:bg-indigo-600', icon: <Lock className="h-6 w-6" /> },
    { color: 'bg-pink-500 hover:bg-pink-600', icon: <Key className="h-6 w-6" /> },
    { color: 'bg-violet-500 hover:bg-violet-600', icon: <Zap className="h-6 w-6" /> },
  ];

  return (
    <div className={cn("code-breaker relative", className)}>
      <Card className="border-primary/20 bg-card/80 backdrop-blur">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              {gameState === 'playing' ? (
                <Lock className="text-primary h-6 w-6 animate-pulse" />
              ) : gameState === 'success' ? (
                <Unlock className="text-green-500 h-6 w-6" />
              ) : (
                <Lock className="text-primary h-6 w-6" />
              )}
              <h3 className="text-lg font-semibold">Cyber Security Lock</h3>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-sm font-medium bg-secondary/20 px-2 py-1 rounded">
                Level: {level}
              </div>
              <div className="text-sm font-medium bg-secondary/20 px-2 py-1 rounded">
                Score: {score}
              </div>
              {gameState === 'playing' && (
                <div className={cn(
                  "text-sm font-medium px-2 py-1 rounded",
                  timeLeft <= 5 ? "bg-red-500/20 text-red-500 animate-pulse" : "bg-secondary/20"
                )}>
                  {timeLeft}s
                </div>
              )}
            </div>
          </div>

          <div className="text-center my-4">
            {gameState === 'idle' && (
              <p className="text-muted-foreground">Crack the security code by repeating the correct sequence.</p>
            )}
            {gameState === 'playing' && (
              <p className="text-primary font-medium">Memorize and repeat the pattern!</p>
            )}
            {gameState === 'success' && (
              <div className="flex items-center justify-center gap-2 text-green-500">
                <CheckCircle2 className="h-5 w-5" />
                <p className="font-medium">Security breach successful!</p>
              </div>
            )}
            {gameState === 'failed' && (
              <div className="flex items-center justify-center gap-2 text-red-500">
                <AlertTriangle className="h-5 w-5" />
                <p className="font-medium">Security breach failed!</p>
              </div>
            )}
          </div>

          {/* Memory sequence display */}
          <div className="flex justify-center gap-2 mb-6">
            {Array.from({ length: sequenceLength + Math.floor(level / 2) }).map((_, index) => (
              <div 
                key={index}
                className={cn(
                  "w-3 h-3 rounded-full",
                  index < userSequence.length 
                    ? "bg-primary" 
                    : "bg-primary/20"
                )}
              />
            ))}
          </div>

          {/* Buttons grid */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {buttons.map((button, index) => (
              <Button
                key={index}
                className={cn(
                  "h-16 flex items-center justify-center transition-all", 
                  button.color,
                  gameState === 'playing' ? "transform hover:scale-105" : "opacity-70"
                )}
                disabled={gameState !== 'playing'}
                onClick={() => handleButtonClick(index)}
              >
                {button.icon}
              </Button>
            ))}
          </div>

          {/* Hint message */}
          {hint && (
            <Alert className="mb-4 bg-background/50">
              <AlertDescription>
                {hint}
              </AlertDescription>
            </Alert>
          )}

          {/* Game controls */}
          <div className="flex justify-center mt-2">
            {gameState === 'idle' || gameState === 'failed' || gameState === 'success' ? (
              <Button 
                onClick={startGame}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              >
                {gameState === 'idle' ? 'Start Hacking' : 'Try Again'}
              </Button>
            ) : null}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CodeBreaker;
