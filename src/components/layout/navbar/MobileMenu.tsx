
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

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden fixed inset-0 z-50 bg-white dark:bg-gray-900">
      <div className="flex flex-col h-full overflow-y-auto pt-16 pb-20 px-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-foreground hover:text-coral"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
        
        <div className="flex flex-col space-y-4 mt-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                `px-4 py-3 text-lg font-medium border-b border-gray-100 ${
                  isActive ? "text-coral font-semibold" : "text-foreground"
                }`
              }
              end
            >
              {item.label}
            </NavLink>
          ))}
          <div className="mt-6 pt-6">
            <Button 
              className="w-full bg-coral text-black hover:bg-coral/90"
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
    </div>
  );
};

export default MobileMenu;
