
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden mt-4 pt-4 border-t border-gray-100">
      <ul className="space-y-4 pb-4">
        <li>
          <Link
            to="/services"
            className="block font-medium text-gray-600 hover:text-consulting-600 py-2"
            onClick={onClose}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="block font-medium text-gray-600 hover:text-consulting-600 py-2"
            onClick={onClose}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            className="block font-medium text-gray-600 hover:text-consulting-600 py-2"
            onClick={onClose}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="block font-medium text-gray-600 hover:text-consulting-600 py-2"
            onClick={onClose}
          >
            Contact
          </Link>
        </li>
        <li>
          <Button 
            className="w-full mt-2 bg-consulting-600 hover:bg-consulting-700" 
            size="sm"
            asChild
          >
            <Link to="/booking" onClick={onClose}>
              Schedule Consultation
            </Link>
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
