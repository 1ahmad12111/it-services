
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MenuIcon, X, ChevronDown } from "lucide-react";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const solutions = [
  {
    title: "Digital Transformation",
    description: "End-to-end digital solutions to transform your business",
    href: "/services/digital-transformation",
  },
  {
    title: "Cloud Services",
    description: "Scalable cloud solutions for business agility",
    href: "/services/cloud-services",
  },
  {
    title: "AI & Automation",
    description: "Intelligent automation to enhance productivity",
    href: "/services/ai-automation",
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive security solutions for your IT infrastructure",
    href: "/services/cybersecurity",
  },
];

const industries = [
  { name: "Banking & Finance", href: "/industries/banking" },
  { name: "Healthcare", href: "/industries/healthcare" },
  { name: "Manufacturing", href: "/industries/manufacturing" },
  { name: "Retail", href: "/industries/retail" },
  { name: "Technology", href: "/industries/technology" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
          <div className="hidden lg:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-600 hover:text-consulting-600">Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] md:w-[500px] lg:w-[600px] gap-3 p-4 md:grid-cols-2">
                      {solutions.map((solution) => (
                        <li key={solution.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={solution.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-consulting-50 hover:text-consulting-600"
                            >
                              <div className="text-sm font-medium leading-none">{solution.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                                {solution.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-600 hover:text-consulting-600">Industries</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      {industries.map((industry) => (
                        <li key={industry.name}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={industry.href}
                              className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-consulting-50 hover:text-consulting-600"
                            >
                              {industry.name}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/about" className="font-medium text-gray-600 hover:text-consulting-600 transition-colors py-2 px-4">
                    About
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/insights" className="font-medium text-gray-600 hover:text-consulting-600 transition-colors py-2 px-4">
                    Insights
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/careers" className="font-medium text-gray-600 hover:text-consulting-600 transition-colors py-2 px-4">
                    Careers
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/contact" className="font-medium text-gray-600 hover:text-consulting-600 transition-colors py-2 px-4">
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Button 
              className="bg-consulting-600 hover:bg-consulting-700 ml-4" 
              size="sm"
            >
              Schedule Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
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
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/insights"
                  className="block font-medium text-gray-600 hover:text-consulting-600 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="block font-medium text-gray-600 hover:text-consulting-600 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block font-medium text-gray-600 hover:text-consulting-600 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
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
        )}
      </div>
    </nav>
  );
};

export default Navbar;
