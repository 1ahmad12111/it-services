
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
    } else if (!isOpen && bodyRef.current) {
      // Reset body styles
      bodyRef.current.style.position = '';
      bodyRef.current.style.top = '';
      bodyRef.current.style.width = '';
      bodyRef.current.style.overflow = '';
      
      // Restore scroll position
      window.scrollTo(0, scrollY.current);
    }
    
    // Cleanup function - runs when component unmounts
    return () => {
      if (bodyRef.current && bodyRef.current.style.position === 'fixed') {
        bodyRef.current.style.position = '';
        bodyRef.current.style.top = '';
        bodyRef.current.style.width = '';
        bodyRef.current.style.overflow = '';
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
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[998] touch-none lg:hidden" 
        onClick={onClose} 
        aria-hidden="true"
      />
      
      {/* Menu container */}
      <div className="lg:hidden fixed inset-0 z-[999] bg-slate-900 flex flex-col overflow-hidden">
        {/* Menu header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-slate-900/95 backdrop-blur-sm">
          <div className="text-lg font-semibold text-white">Menu</div>
          <button
            onClick={onClose}
            className="p-2 text-white hover:text-coral rounded-full focus:outline-none focus:ring-2 focus:ring-coral"
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
                  `px-4 py-5 text-lg font-medium border-b border-slate-800 ${
                    isActive ? "text-coral font-semibold" : "text-white"
                  }`
                }
                end
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          
          {/* Call to action button - sticky to bottom */}
          <div className="mt-auto p-5 sticky bottom-0 bg-slate-900/95 backdrop-blur-sm border-t border-slate-800">
            <Button 
              className="w-full bg-coral text-black hover:bg-coral/90 py-6 text-lg font-bold"
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
