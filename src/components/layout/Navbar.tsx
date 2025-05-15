
import React, { useState, useEffect } from "react";
import { MenuIcon } from "lucide-react";
import Logo from "./navbar/Logo";
import MobileMenu from "./navbar/MobileMenu";
import DesktopMenuItems from "./navbar/DesktopMenuItems";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`py-3 fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-300 ${
        scrolled 
          ? "bg-slate-900/95 backdrop-blur-md shadow-md" 
          : "bg-transparent"
      }`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <Logo />

            {/* Desktop menu */}
            <div className="hidden lg:flex items-center space-x-6">
              <DesktopMenuItems />
              <Button 
                className="bg-coral hover:bg-coral/90 text-white rounded-md font-bold border border-black shadow-button" 
                size="default"
                asChild
              >
                <Link to="/booking">
                  Schedule Consultation
                </Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={toggleMobileMenu}
                className="text-white bg-coral hover:bg-coral/90 focus:outline-none focus:ring-2 focus:ring-white rounded-md p-2"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                <MenuIcon size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Add spacing to prevent content from being hidden under fixed navbar */}
      <div className="h-16"></div>

      {/* Mobile Menu - Completely separate from the flow */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};

export default Navbar;
