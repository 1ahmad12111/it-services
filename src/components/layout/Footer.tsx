
import React from "react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-positivus-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <div>
            <div className="inline-block bg-positivus-green px-4 py-2 rounded-md mb-6">
              <h3 className="text-xl font-bold text-positivus-dark">Contact us:</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="mr-3 text-positivus-green flex-shrink-0" />
                <p className="text-white">Email: <a href="mailto:info@gomosivant.com" className="hover:text-positivus-green transition-colors">info@gomosivant.com</a></p>
              </div>
              
              <div className="flex items-center">
                <Phone className="mr-3 text-positivus-green flex-shrink-0" />
                <p className="text-white">Phone: <a href="tel:+18189257116" className="hover:text-positivus-green transition-colors">+1 (818)-925-7116</a></p>
              </div>
              
              <div className="flex items-start">
                <MapPin className="mr-3 text-positivus-green flex-shrink-0 mt-1" />
                <p className="text-white">
                  Address: 1153 Lantern Trail Ave, Unit 101<br />
                  Columbus, OH 43228
                </p>
              </div>
            </div>
          </div>
          
          {/* Newsletter Subscription */}
          <div className="bg-gray-800/50 rounded-xl p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full md:w-auto flex-1 h-14 px-4 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-positivus-green"
              />
              <Button className="bg-positivus-green text-positivus-dark hover:bg-positivus-green/90 font-bold py-6 px-6 rounded-lg w-full md:w-auto">
                Subscribe to news
              </Button>
            </div>
          </div>
        </div>
        
        <Separator className="bg-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">© {currentYear} MOSIVANT CONSULTING (OPC) PRIVATE LIMITED. All Rights Reserved.</p>
          
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-positivus-green transition-colors">
              Privacy Policy
            </Link>
            <a 
              href="https://www.linkedin.com/company/mosivant-consulting-opc-private-limited" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-positivus-green transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
