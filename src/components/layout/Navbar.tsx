
import React, { useState, useEffect } from "react";
import { MenuIcon, X } from "lucide-react";
import Logo from "./navbar/Logo";
import MobileMenu from "./navbar/MobileMenu";
import DesktopMenuItems from "./navbar/DesktopMenuItems";
import ThemeToggle from "@/components/theme/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Link as RouterLink } from "react-router-dom";

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
    <nav className={`py-4 sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white/90 backdrop-blur-md shadow-md" 
        : "bg-transparent border-b border-gray-100"
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Logo />

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <DesktopMenuItems />
            <div className="flex items-center gap-4">
              <Button 
                className="bg-coral text-black hover:bg-coral/90 hover:text-black font-bold shadow-md" 
                size="sm"
                asChild
              >
                <RouterLink to="/booking">
                  Schedule Consultation
                </RouterLink>
              </Button>
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={toggleMobileMenu}
              className="ml-4 text-foreground hover:text-coral focus:outline-none"
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
        <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      </div>
    </nav>
  );
};

export default Navbar;
