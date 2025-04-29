
import React from "react";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const clients = [
  {
    name: "Acme Corp",
    logo: "https://via.placeholder.com/150x80?text=Acme",
    industry: "Manufacturing"
  },
  {
    name: "Global Finance",
    logo: "https://via.placeholder.com/150x80?text=Global",
    industry: "Banking"
  },
  {
    name: "MediHealth",
    logo: "https://via.placeholder.com/150x80?text=Medi",
    industry: "Healthcare"
  },
  {
    name: "TechSphere",
    logo: "https://via.placeholder.com/150x80?text=Tech",
    industry: "Technology"
  },
  {
    name: "RetailPlus",
    logo: "https://via.placeholder.com/150x80?text=Retail",
    industry: "Retail"
  },
  {
    name: "EnergyX",
    logo: "https://via.placeholder.com/150x80?text=Energy",
    industry: "Energy"
  },
];

const ClientsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Leading Enterprises</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We partner with forward-thinking organizations to drive innovation and digital excellence
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {clients.map((client, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="border p-6 rounded-lg h-full flex flex-col items-center justify-center transition-shadow hover:shadow-md">
                    <div className="h-20 flex items-center justify-center mb-4">
                      <img src={client.logo} alt={`${client.name} logo`} className="max-h-full" />
                    </div>
                    <h3 className="font-semibold text-lg">{client.name}</h3>
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

        <div className="mt-16 text-center">
          <Separator className="mb-8" />
          <p className="text-lg font-medium text-gray-700 mb-6">Industry Recognition and Certifications</p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="p-4">
              <img src="https://via.placeholder.com/120x60?text=Award1" alt="Industry award" />
            </div>
            <div className="p-4">
              <img src="https://via.placeholder.com/120x60?text=Cert1" alt="Certification" />
            </div>
            <div className="p-4">
              <img src="https://via.placeholder.com/120x60?text=Award2" alt="Industry award" />
            </div>
            <div className="p-4">
              <img src="https://via.placeholder.com/120x60?text=Cert2" alt="Certification" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
