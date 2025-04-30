
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  // Close mobile menu when clicking outside or pressing Escape
  useEffect(() => {
    if (!isOpen) return;
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    
    const handleClickOutside = (e: MouseEvent) => {
      // This will be handled by the parent component's click handler
      // Just adding it here for completeness
    };
    
    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);
    
    // Prevent scrolling when menu is open
    document.body.style.overflow = "hidden";
    
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden bg-white">
      <div className="h-full flex flex-col p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <nav className="flex-1">
          <ul className="space-y-6 text-xl">
            <li>
              <Link
                to="/services"
                className="block font-medium text-gray-800 hover:text-consulting-600 py-2"
                onClick={onClose}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block font-medium text-gray-800 hover:text-consulting-600 py-2"
                onClick={onClose}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="block font-medium text-gray-800 hover:text-consulting-600 py-2"
                onClick={onClose}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block font-medium text-gray-800 hover:text-consulting-600 py-2"
                onClick={onClose}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className="mt-auto pt-6 border-t border-gray-100">
          <Button 
            className="w-full py-6 bg-consulting-600 hover:bg-consulting-700 text-lg" 
            asChild
          >
            <Link to="/booking" onClick={onClose}>
              Schedule Consultation
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
