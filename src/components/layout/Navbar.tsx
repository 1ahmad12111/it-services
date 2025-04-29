
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MenuIcon, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="font-heading text-xl font-bold text-consulting-800">
                TechConsult
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-1">
            <ul className="flex space-x-8 mr-8">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="font-medium text-gray-600 hover:text-consulting-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button 
              className="bg-consulting-600 hover:bg-consulting-700" 
              size="sm"
            >
              Schedule Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-500 hover:text-consulting-600 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X size={24} />
              ) : (
                <MenuIcon size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-100">
            <ul className="space-y-4 pb-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="block font-medium text-gray-600 hover:text-consulting-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
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
        )}
      </div>
    </nav>
  );
};

export default Navbar;
