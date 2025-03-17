
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import Sidebar from "./Sidebar";

export const AppLayout = () => {
  const isMobile = useIsMobile();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
        
        <main className="flex-1 overflow-x-hidden">
          <div className="relative">
            {isMobile && (
              <div className="fixed top-4 left-4 z-50">
                <SidebarTrigger onClick={() => setMobileOpen(!mobileOpen)} />
              </div>
            )}
            <div className="p-6 md:p-8 pt-16 md:pt-8 min-h-screen">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AppLayout;
