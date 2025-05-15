
import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { navItems } from "./NavbarData";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const bodyRef = useRef<HTMLElement | null>(null);
  const scrollY = useRef(0);

  // Handle body scroll locking
  useEffect(() => {
    bodyRef.current = document.body;
    
    if (isOpen && bodyRef.current) {
      // Store current scroll position
      scrollY.current = window.scrollY;
      
      // Apply fixed position to body to prevent scrolling
      bodyRef.current.style.position = 'fixed';
      bodyRef.current.style.top = `-${scrollY.current}px`;
      bodyRef.current.style.width = '100%';
      bodyRef.current.style.overflow = 'hidden';
    }
    
    // Cleanup function - always runs when component unmounts or when isOpen changes
    return () => {
      if (bodyRef.current && bodyRef.current.style.position === 'fixed') {
        // Reset body styles
        bodyRef.current.style.position = '';
        bodyRef.current.style.top = '';
        bodyRef.current.style.width = '';
        bodyRef.current.style.overflow = '';
        
        // Restore scroll position
        window.scrollTo(0, scrollY.current);
      }
    };
  }, [isOpen]);

  // Don't render anything if menu is closed
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[998] touch-none lg:hidden" 
        onClick={onClose} 
        aria-hidden="true"
      />
      
      {/* Menu container */}
      <div className="lg:hidden fixed inset-0 z-[999] bg-background flex flex-col overflow-hidden">
        {/* Menu header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-gray-800 bg-background/90 backdrop-blur-sm">
          <div className="text-lg font-semibold">Menu</div>
          <button
            onClick={onClose}
            className="p-2 text-foreground hover:text-coral rounded-full focus:outline-none focus:ring-2 focus:ring-coral"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Menu content - scrollable area */}
        <div className="flex flex-col flex-1 overflow-y-auto touch-pan-y overscroll-contain pb-safe">
          <nav className="flex flex-col p-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `px-4 py-5 text-lg font-medium border-b border-gray-100 dark:border-gray-800 ${
                    isActive ? "text-coral font-semibold" : "text-foreground"
                  }`
                }
                end
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          
          {/* Call to action button - sticky to bottom */}
          <div className="mt-auto p-5 sticky bottom-0 bg-background/95 backdrop-blur-sm border-t border-gray-100 dark:border-gray-800">
            <Button 
              className="w-full bg-coral text-black hover:bg-coral/90 py-6 text-lg"
              onClick={onClose}
              asChild
            >
              <NavLink to="/booking">
                Schedule Consultation
              </NavLink>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
