import React from "react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-positivus-dark text-white rounded-lg px-0 my-0 py-0 mx-[80px]">
      <div className="container mx-auto px-4 max-w-5xl"> {/* Added max-width constraint */}
        <div className="flex justify-between items-start mb-12">
          {/* Logo */}
          <div className="mb-8 lg:mb-0">
            <div className="flex items-center mb-4">
              <span className="text-white text-3xl font-bold">
            </span>
            </div>
          </div>
          
          {/* Social Media - LinkedIn only, smaller */}
          <div className="flex">
            <a href="https://www.linkedin.com/company/mosivant-consulting-opc-private-limited" target="_blank" rel="noopener noreferrer" className="bg-white rounded-full p-1 hover:bg-positivus-green transition-colors">
              <Linkedin size={12} className="text-positivus-dark" />
            </a>
          </div>
        </div>
        
        {/* Contact Information */}
        <div className="mb-8">
          <div className="inline-block bg-positivus-green px-4 py-2 rounded-md mb-6">
            <h3 className="text-xl font-bold text-positivus-dark">Contact us:</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center">
              <Mail className="mr-3 text-white flex-shrink-0" size={16} />
              <p className="text-white">Email: <a href="mailto:info@gomosivant.com" className="hover:text-positivus-green transition-colors">info@gomosivant.com</a></p>
            </div>
            
            <div className="flex items-center">
              <Phone className="mr-3 text-white flex-shrink-0" size={16} />
              <p className="text-white">Phone: <a href="tel:+18189257116" className="hover:text-positivus-green transition-colors">+1 (818)-925-7116</a></p>
            </div>
            
            <div className="flex items-start">
              <MapPin className="mr-3 text-white flex-shrink-0 mt-1" size={16} />
              <p className="text-white">
                Address: 1153 Lantern Trail Ave, Unit 101<br />
                Columbus, OH 43228
              </p>
            </div>
          </div>
        </div>
        
        <Separator className="bg-gray-700 my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">© {currentYear} Mosivant. All Rights Reserved.</p>
          
          <div className="flex flex-wrap gap-6 items-center">
            <Link to="/about" className="text-gray-400 hover:text-positivus-green transition-colors">
              About us
            </Link>
            <Link to="/services" className="text-gray-400 hover:text-positivus-green transition-colors">
              Services
            </Link>
            <Link to="/blog" className="text-gray-400 hover:text-positivus-green transition-colors">
              Blog
            </Link>
            <Link to="/privacy-policy" className="text-gray-400 hover:text-positivus-green transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;