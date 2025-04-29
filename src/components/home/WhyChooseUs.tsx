
import React from "react";
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Expert Team",
    description: "Our team consists of highly skilled IT professionals with extensive industry experience."
  },
  {
    title: "Tailored Solutions",
    description: "We create customized technology solutions based on your specific business needs."
  },
  {
    title: "Innovative Approach",
    description: "We stay ahead of the curve with cutting-edge technologies and methodologies."
  },
  {
    title: "Ongoing Support",
    description: "We provide continuous assistance to ensure your tech infrastructure runs smoothly."
  },
  {
    title: "Data Security",
    description: "We implement robust security measures to protect your sensitive information."
  },
  {
    title: "Cost-Effective",
    description: "Our solutions are designed to maximize ROI while minimizing unnecessary expenses."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600">
              We're committed to providing exceptional IT services that drive tangible results for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-start p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <CheckCircle className="text-consulting-600 h-6 w-6 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
