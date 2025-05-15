
import React from "react";
import { Phone, Mail, MapPin, Linkedin } from "lucide-react";

const ContactCards = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
      {/* Contact Card - Phone */}
      <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-coral/10 text-coral mb-6">
          <Phone size={28} />
        </div>
        <h3 className="text-xl font-bold mb-2">Call Us</h3>
        <p className="text-gray-600 mb-4">Our team is available to help during business hours</p>
        <a href="tel:+18189257116" className="text-coral font-medium hover:underline">
          +1 (818)-925-7116
        </a>
      </div>

      {/* Contact Card - Email */}
      <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-coral/10 text-coral mb-6">
          <Mail size={28} />
        </div>
        <h3 className="text-xl font-bold mb-2">Email Us</h3>
        <p className="text-gray-600 mb-4">Send us an email and we'll respond within 24 hours</p>
        <a href="mailto:info@gomosivant.com" className="text-coral font-medium hover:underline">
          info@gomosivant.com
        </a>
      </div>

      {/* Contact Card - LinkedIn */}
      <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-coral/10 text-coral mb-6">
          <Linkedin size={28} />
        </div>
        <h3 className="text-xl font-bold mb-2">Connect with Us</h3>
        <p className="text-gray-600 mb-4">Follow us on LinkedIn for updates and news</p>
        <a 
          href="https://www.linkedin.com/company/mosivant-consulting-opc-private-limited" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-coral font-medium hover:underline"
        >
          Mosivant on LinkedIn
        </a>
      </div>
    </div>
  );
};

export default ContactCards;
