
import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/34880202-0804-4af2-a75d-b60725da0d26.png" 
                alt="MOSIVANT logo"
                className="h-8 w-auto mr-2"
              />
              <div>
                <h3 className="text-xl font-bold">MOSIVANT</h3>
                <p className="text-xs text-gray-400">CONSULTING (OPC) PRIVATE LIMITED</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Professional IT consulting services tailored to your business needs.
            </p>
            <div className="flex space-x-4">
              {/* Only LinkedIn Icon */}
              <a
                href="https://www.linkedin.com/company/mosivant-consulting-opc-private-limited"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-consulting-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-consulting-400 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-consulting-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-consulting-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-consulting-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-consulting-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/company/mosivant-consulting-opc-private-limited" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-consulting-400 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-consulting-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  1153 Lantern Trail Ave, Unit 101<br />
                  Columbus, OH 43228
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-consulting-400 flex-shrink-0" />
                <a href="tel:+18189257116" className="text-gray-300 hover:text-consulting-400 transition-colors">
                  +1 (818)-925-7116
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-consulting-400 flex-shrink-0" />
                <a href="mailto:info@gomosivant.com" className="text-gray-300 hover:text-consulting-400 transition-colors">
                  info@gomosivant.com
                </a>
              </li>
              <li className="flex items-center">
                <Linkedin size={20} className="mr-3 text-consulting-400 flex-shrink-0" />
                <a 
                  href="https://www.linkedin.com/company/mosivant-consulting-opc-private-limited" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-consulting-400 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} MOSIVANT CONSULTING (OPC) PRIVATE LIMITED. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
