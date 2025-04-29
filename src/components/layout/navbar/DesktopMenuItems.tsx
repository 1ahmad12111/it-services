
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";

// Data for menu items
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

const DesktopMenuItems = () => {
  return (
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
  );
};

export default DesktopMenuItems;
