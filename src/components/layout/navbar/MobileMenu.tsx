
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { navItems } from "./NavbarData";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  // Don't render anything if the menu is closed
  if (!isOpen) return null;

  // Lock/unlock body scroll when menu opens/closes
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      
      // Apply styles to lock the body
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      
      return () => {
        // Remove the styles and restore scroll position on cleanup
        const scrollY = parseInt((document.body.style.top || '0').replace('px', '')) * -1;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        
        // Use setTimeout to ensure styles are applied before scrolling
        setTimeout(() => {
          window.scrollTo(0, scrollY);
        }, 0);
      };
    }
  }, [isOpen]);

  return (
    <>
      {/* Backdrop for menu */}
      <div className="fixed inset-0 bg-black/50 z-[998] lg:hidden" onClick={onClose} aria-hidden="true"></div>
      
      {/* Menu content */}
      <div className="lg:hidden fixed inset-0 z-[999] bg-white dark:bg-gray-900 flex flex-col">
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100 dark:border-gray-800">
          <div className="text-lg font-semibold">Menu</div>
          <button
            onClick={onClose}
            className="p-2 text-foreground hover:text-coral"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="flex flex-col flex-1 overflow-y-auto">
          <nav className="flex flex-col space-y-1 p-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `px-4 py-4 text-lg font-medium border-b border-gray-100 dark:border-gray-800 ${
                    isActive ? "text-coral font-semibold" : "text-foreground"
                  }`
                }
                end
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          
          <div className="mt-auto p-4">
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
