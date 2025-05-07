
import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactCards = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
      {/* Contact Card - Phone */}
      <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-consulting-50 text-consulting-600 mb-6">
          <Phone size={28} />
        </div>
        <h3 className="text-xl font-bold mb-2">Call Us</h3>
        <p className="text-gray-600 mb-4">Our team is available to help during business hours</p>
        <a href="tel:+18189257116" className="text-consulting-600 font-medium hover:underline">
          +1 (818)-925-7116
        </a>
      </div>

      {/* Contact Card - Email */}
      <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-consulting-50 text-consulting-600 mb-6">
          <Mail size={28} />
        </div>
        <h3 className="text-xl font-bold mb-2">Email Us</h3>
        <p className="text-gray-600 mb-4">Send us an email and we'll respond within 24 hours</p>
        <a href="mailto:info@gomosivant.com" className="text-consulting-600 font-medium hover:underline">
          info@gomosivant.com
        </a>
      </div>

      {/* Contact Card - Office */}
      <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-consulting-50 text-consulting-600 mb-6">
          <MapPin size={28} />
        </div>
        <h3 className="text-xl font-bold mb-2">Visit Us</h3>
        <p className="text-gray-600 mb-4">Our office is centrally located in Columbus</p>
        <address className="not-italic text-consulting-600 font-medium">
          1153 Lantern Trail Ave, Unit 101<br />
          Columbus, OH 43228
        </address>
      </div>
    </div>
  );
};

export default ContactCards;
