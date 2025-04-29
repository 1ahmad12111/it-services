
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden mt-4 pt-4 border-t border-gray-100">
      <ul className="space-y-4 pb-4">
        <li className="py-2">
          <div className="flex justify-between items-center" onClick={() => {}}>
            <span className="font-medium text-gray-600">Services</span>
            <ChevronDown size={16} />
          </div>
        </li>
        <li className="py-2">
          <div className="flex justify-between items-center" onClick={() => {}}>
            <span className="font-medium text-gray-600">Industries</span>
            <ChevronDown size={16} />
          </div>
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
            to="/insights"
            className="block font-medium text-gray-600 hover:text-consulting-600 py-2"
            onClick={onClose}
          >
            Insights
          </Link>
        </li>
        <li>
          <Link
            to="/careers"
            className="block font-medium text-gray-600 hover:text-consulting-600 py-2"
            onClick={onClose}
          >
            Careers
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
          >
            Schedule Consultation
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
