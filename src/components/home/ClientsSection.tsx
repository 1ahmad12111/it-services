
import React from "react";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CheckCircle } from "lucide-react";

const clients = [
  {
    name: "Acme Corp",
    logo: "https://via.placeholder.com/180x90?text=Acme",
    industry: "Manufacturing"
  },
  {
    name: "Global Finance",
    logo: "https://via.placeholder.com/180x90?text=Global",
    industry: "Banking"
  },
  {
    name: "MediHealth",
    logo: "https://via.placeholder.com/180x90?text=Medi",
    industry: "Healthcare"
  },
  {
    name: "TechSphere",
    logo: "https://via.placeholder.com/180x90?text=Tech",
    industry: "Technology"
  },
  {
    name: "RetailPlus",
    logo: "https://via.placeholder.com/180x90?text=Retail",
    industry: "Retail"
  },
  {
    name: "EnergyX",
    logo: "https://via.placeholder.com/180x90?text=Energy",
    industry: "Energy"
  },
  {
    name: "LogiTech",
    logo: "https://via.placeholder.com/180x90?text=Logi",
    industry: "Logistics"
  },
  {
    name: "EduSmart",
    logo: "https://via.placeholder.com/180x90?text=Edu",
    industry: "Education"
  }
];

const achievements = [
  { number: "250+", label: "Enterprise Clients" },
  { number: "45+", label: "Countries Served" },
  { number: "500+", label: "IT Consultants" },
  { number: "98%", label: "Client Retention" }
];

const ClientsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in">Trusted by Leading Enterprises</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-200">
            We partner with forward-thinking organizations to drive innovation and digital excellence across industries
          </p>
        </div>

        <div className="max-w-7xl mx-auto opacity-0 animate-fade-in animate-delay-300 mb-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {clients.map((client, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4 pl-4">
                  <div className="border border-gray-100 p-6 rounded-lg h-full flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:border-consulting-100 group bg-white">
                    <div className="h-20 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                      <img src={client.logo} alt={`${client.name} logo`} className="max-h-full" />
                    </div>
                    <h3 className="font-semibold text-lg text-gray-800">{client.name}</h3>
                    <p className="text-sm text-gray-500">{client.industry}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex justify-end gap-2 mt-8">
              <CarouselPrevious className="relative left-0 right-0 translate-y-0 bg-consulting-600 text-white hover:bg-consulting-700 hover:text-white" />
              <CarouselNext className="relative left-0 right-0 translate-y-0 bg-consulting-600 text-white hover:bg-consulting-700 hover:text-white" />
            </div>
          </Carousel>
        </div>

        {/* Statistics and achievements section */}
        <div className="py-12 bg-gray-50 rounded-2xl shadow-sm my-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto px-4">
            {achievements.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-consulting-700 mb-2">{item.number}</div>
                <div className="text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Separator className="mb-12" />
          <p className="text-lg font-medium text-gray-700 mb-8">Industry Recognition and Certifications</p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="p-4 flex items-center">
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <img src="https://via.placeholder.com/120x60?text=Award1" alt="Industry award" />
              </div>
            </div>
            <div className="p-4 flex items-center">
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <img src="https://via.placeholder.com/120x60?text=Cert1" alt="Certification" />
              </div>
            </div>
            <div className="p-4 flex items-center">
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <img src="https://via.placeholder.com/120x60?text=Award2" alt="Industry award" />
              </div>
            </div>
            <div className="p-4 flex items-center">
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <img src="https://via.placeholder.com/120x60?text=Cert2" alt="Certification" />
              </div>
            </div>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <div className="flex items-center text-consulting-700">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>ISO 27001 Certified</span>
            </div>
            <div className="flex items-center text-consulting-700">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>CMMI Level 5</span>
            </div>
            <div className="flex items-center text-consulting-700">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>SOC 2 Compliant</span>
            </div>
            <div className="flex items-center text-consulting-700">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>GDPR Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
