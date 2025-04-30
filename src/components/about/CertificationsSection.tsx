
import React from "react";
import { CheckCircle } from "lucide-react";

const certifications = [
  "Microsoft Gold Partner", 
  "AWS Advanced Consulting Partner", 
  "Google Cloud Partner", 
  "Cisco Premier Partner", 
  "ISO 27001 Certified", 
  "CMMI Level 5", 
  "Apple Consultants Network", 
  "CompTIA"
];

const CertificationsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Certifications & Partnerships</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                  <CheckCircle className="w-8 h-8 text-consulting-500" />
                </div>
                <p className="text-center font-medium text-gray-800">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
