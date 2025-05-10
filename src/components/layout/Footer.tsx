
import React from "react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-positivus-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between mb-12">
          {/* Logo and Navigation */}
          <div className="mb-8 lg:mb-0">
            <div className="flex items-center mb-8">
              <span className="text-white text-3xl font-bold mr-2">◆</span>
              <span className="text-white text-3xl font-bold">Positivus</span>
            </div>
            
            <div className="hidden lg:flex space-x-8">
              <Link to="/about" className="text-white hover:text-positivus-green transition-colors">
                About us
              </Link>
              <Link to="/services" className="text-white hover:text-positivus-green transition-colors">
                Services
              </Link>
              <Link to="/use-cases" className="text-white hover:text-positivus-green transition-colors">
                Use Cases
              </Link>
              <Link to="/pricing" className="text-white hover:text-positivus-green transition-colors">
                Pricing
              </Link>
              <Link to="/blog" className="text-white hover:text-positivus-green transition-colors">
                Blog
              </Link>
            </div>
          </div>
          
          {/* Social Media */}
          <div className="flex space-x-4 mb-8 lg:mb-0">
            <a 
              href="https://www.linkedin.com/company/mosivant-consulting-opc-private-limited" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-full p-2 hover:bg-positivus-green transition-colors"
            >
              <Linkedin size={20} className="text-positivus-dark" />
            </a>
            <a 
              href="https://www.facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-full p-2 hover:bg-positivus-green transition-colors"
            >
              <Facebook size={20} className="text-positivus-dark" />
            </a>
            <a 
              href="https://www.twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-full p-2 hover:bg-positivus-green transition-colors"
            >
              <Twitter size={20} className="text-positivus-dark" />
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="inline-block bg-positivus-green px-4 py-2 rounded-md mb-6">
              <h3 className="text-xl font-bold text-positivus-dark">Contact us:</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="mr-3 text-white flex-shrink-0" />
                <p className="text-white">Email: <a href="mailto:info@gomosivant.com" className="hover:text-positivus-green transition-colors">info@gomosivant.com</a></p>
              </div>
              
              <div className="flex items-center">
                <Phone className="mr-3 text-white flex-shrink-0" />
                <p className="text-white">Phone: <a href="tel:+18189257116" className="hover:text-positivus-green transition-colors">+1 (818)-925-7116</a></p>
              </div>
              
              <div className="flex items-start">
                <MapPin className="mr-3 text-white flex-shrink-0 mt-1" />
                <p className="text-white">
                  Address: 1153 Lantern Trail Ave, Unit 101<br />
                  Columbus, OH 43228
                </p>
              </div>
            </div>
          </div>
          
          {/* Newsletter Subscription */}
          <div className="bg-gray-800/50 rounded-xl p-8">
            <div className="flex flex-col space-y-4">
              <Input 
                type="email" 
                placeholder="Email" 
                className="h-14 px-4 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-positivus-green"
              />
              <Button className="bg-positivus-green text-positivus-dark hover:bg-positivus-green/90 font-bold py-6 px-6 rounded-lg w-full md:w-auto">
                Subscribe to news
              </Button>
            </div>
          </div>
        </div>
        
        <Separator className="bg-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">© {currentYear} Positivus. All Rights Reserved.</p>
          
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-positivus-green transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
