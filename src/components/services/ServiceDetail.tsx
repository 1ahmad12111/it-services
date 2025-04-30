
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Globe, ShieldCheck, Server } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

interface ServiceDetailProps {
  service: {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    icon: string;
  };
  isReversed?: boolean;
}

const ServiceDetail = ({ service, isReversed = false }: ServiceDetailProps) => {
  // Map the icon string to the corresponding component
  const IconComponent = () => {
    switch (service.icon) {
      case "Globe":
        return <Globe className="h-12 w-12 text-consulting-600" />;
      case "Code":
        return <Code className="h-12 w-12 text-consulting-600" />;
      case "Database":
        return <Database className="h-12 w-12 text-consulting-600" />;
      case "ShieldCheck":
        return <ShieldCheck className="h-12 w-12 text-consulting-600" />;
      case "Server":
        return <Server className="h-12 w-12 text-consulting-600" />;
      default:
        return <Globe className="h-12 w-12 text-consulting-600" />;
    }
  };

  return (
    <div
      id={service.id}
      className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${
        isReversed ? "md:grid-flow-dense" : ""
      }`}
    >
      <div className={isReversed ? "md:col-start-2" : ""}>
        <div className="bg-consulting-50 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6">
          <IconComponent />
        </div>
        <h2 className="text-3xl font-bold mb-3">{service.title}</h2>
        <p className="text-xl text-gray-600 mb-4">{service.subtitle}</p>
        <p className="text-gray-700 mb-6">{service.description}</p>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Key Features</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="mr-2 mt-1 text-consulting-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            className="bg-consulting-600 hover:bg-consulting-700 text-white"
            asChild
          >
            <RouterLink to={`/booking`}>
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </RouterLink>
          </Button>
          {/* Removed "Request a Consultation" button */}
        </div>
      </div>
      
      <div className={`rounded-xl overflow-hidden shadow-xl ${isReversed ? "md:col-start-1" : ""}`}>
        <img
          src={`https://images.unsplash.com/photo-${isReversed ? '1486312338219-ce68d2c6f44d' : '1498050108023-c5249f4df085'}?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
          alt={service.title}
          className="w-full h-full object-cover aspect-square md:aspect-[4/3] rounded-xl"
        />
      </div>
    </div>
  );
};

export default ServiceDetail;
