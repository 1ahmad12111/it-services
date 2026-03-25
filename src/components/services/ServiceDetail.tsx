import React from "react";
import { generateServiceImage } from "@/utils/blogImages";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Globe, ShieldCheck, Server } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

interface ServiceDetailProps {
  service: {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    ctaLabel: string;
    ctaLink: string;
    icon: string;
  };
  isReversed?: boolean;
}

const ServiceDetail = ({ service, isReversed = false }: ServiceDetailProps) => {
  const isMobile = useIsMobile();

  const IconComponent = () => {
    switch (service.icon) {
      case "Globe": return <Globe className="h-12 w-12 text-black" />;
      case "Code": return <Code className="h-12 w-12 text-black" />;
      case "Database": return <Database className="h-12 w-12 text-black" />;
      case "ShieldCheck": return <ShieldCheck className="h-12 w-12 text-black" />;
      case "Server": return <Server className="h-12 w-12 text-black" />;
      default: return <Globe className="h-12 w-12 text-black" />;
    }
  };

  const contentCol = (
    <div className="min-w-0">
      <div className="bg-lemon p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6">
        <IconComponent />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold mb-3">{service.title}</h2>
      <p className="text-lg md:text-xl text-gray-600 mb-4">{service.subtitle}</p>
      <p className="text-gray-700 mb-6">{service.description}</p>
      <div className="mb-8">
        <h3 className="text-lg md:text-xl font-semibold mb-4">What You Get</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" className="h-5 w-5 mt-0.5 text-coral shrink-0">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <Button className="bg-coral hover:bg-coral/90 text-black" asChild>
        <RouterLink to={service.ctaLink}>
          {service.ctaLabel} <ArrowRight className="ml-2 h-4 w-4" />
        </RouterLink>
      </Button>
    </div>
  );

  const imageCol = (
    <div className="min-w-0 w-full rounded-xl overflow-hidden shadow-xl mt-6 md:mt-0">
      <div className="aspect-[4/3] w-full">
        <img
          src={generateServiceImage(service.title, isReversed)}
          alt={service.title}
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );

  return (
    <div id={service.id} className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
      {isReversed && !isMobile ? (
        <>{imageCol}{contentCol}</>
      ) : (
        <>{contentCol}{imageCol}</>
      )}
    </div>
  );
};

export default ServiceDetail;
