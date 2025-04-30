
import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

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
              {/* Social Media Icons */}
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-consulting-600 transition-colors"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-consulting-600 transition-colors"
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-consulting-600 transition-colors"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
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
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-consulting-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  123 Tech Street, Suite 456<br />
                  San Francisco, CA 94105
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-consulting-400 flex-shrink-0" />
                <a href="tel:+14155550123" className="text-gray-300 hover:text-consulting-400 transition-colors">
                  (415) 555-0123
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-consulting-400 flex-shrink-0" />
                <a href="mailto:info@mosivant.com" className="text-gray-300 hover:text-consulting-400 transition-colors">
                  info@mosivant.com
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
