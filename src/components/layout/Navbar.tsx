
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
      <nav className={`py-4 sticky top-0 z-[100] transition-all duration-300 ${
        scrolled 
          ? "bg-background/95 backdrop-blur-md shadow-md dark:bg-background/95" 
          : "bg-transparent border-b border-gray-100 dark:border-gray-800"
      }`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <Logo />

            {/* Desktop menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <DesktopMenuItems />
              <div className="flex items-center gap-4">
                <Button 
                  className="bg-coral text-black hover:bg-coral/90 rounded-md" 
                  size="sm"
                  asChild
                >
                  <Link to="/booking">
                    Schedule Consultation
                  </Link>
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={toggleMobileMenu}
                className="text-foreground hover:text-coral focus:outline-none"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                <MenuIcon size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Completely separate from the flow */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};

export default Navbar;
