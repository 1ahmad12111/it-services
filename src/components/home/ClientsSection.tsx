
import React from "react";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CheckCircle, Trophy, Award, Shield } from "lucide-react";

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
  { number: "250+", label: "Enterprise Clients", icon: "users" },
  { number: "45+", label: "Countries Served", icon: "globe" },
  { number: "500+", label: "IT Consultants", icon: "briefcase" },
  { number: "98%", label: "Client Retention", icon: "heart" }
];

const ClientsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-consulting-50 text-consulting-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4 border border-consulting-100">Our Partners</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 opacity-0 animate-fade-in">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-consulting-700 to-consulting-500">
              Trusted by Leading Enterprises
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-200">
            We partner with forward-thinking organizations to drive innovation and digital excellence across industries
          </p>
        </div>

        <div className="max-w-7xl mx-auto opacity-0 animate-fade-in animate-delay-300 mb-20">
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
                  <div className="bg-white border-0 p-8 rounded-2xl h-full flex flex-col items-center justify-center transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] group">
                    <div className="h-20 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                      <img src={client.logo} alt={`${client.name} logo`} className="max-h-full" />
                    </div>
                    <h3 className="font-semibold text-lg text-gray-800">{client.name}</h3>
                    <p className="text-sm text-consulting-600 font-medium mt-1">{client.industry}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex justify-end gap-2 mt-8">
              <CarouselPrevious className="relative left-0 right-0 translate-y-0 bg-consulting-600 text-white hover:bg-consulting-700 hover:text-white border-0 shadow-lg" />
              <CarouselNext className="relative left-0 right-0 translate-y-0 bg-consulting-600 text-white hover:bg-consulting-700 hover:text-white border-0 shadow-lg" />
            </div>
          </Carousel>
        </div>

        {/* Statistics and achievements section */}
        <div className="py-16 bg-gradient-to-r from-consulting-900 to-consulting-800 rounded-3xl shadow-xl my-20 transform hover:scale-[1.01] transition-all duration-500">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-8">
            {achievements.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-3 flex items-center justify-center">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-consulting-200 to-consulting-400">{item.number}</span>
                </div>
                <div className="text-consulting-100 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Separator className="mb-16" />
          <p className="text-xl font-medium text-gray-700 mb-10">Industry Recognition and Certifications</p>
          <div className="flex flex-wrap justify-center gap-10 items-center">
            <div className="p-4 flex items-center">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-0 transform hover:translate-y-[-5px] transition-all duration-300">
                <Trophy className="h-10 w-10 text-consulting-600 mb-3 mx-auto" />
                <div className="text-sm font-medium text-gray-600">Innovation Award</div>
              </div>
            </div>
            <div className="p-4 flex items-center">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-0 transform hover:translate-y-[-5px] transition-all duration-300">
                <Shield className="h-10 w-10 text-consulting-600 mb-3 mx-auto" />
                <div className="text-sm font-medium text-gray-600">Security Excellence</div>
              </div>
            </div>
            <div className="p-4 flex items-center">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-0 transform hover:translate-y-[-5px] transition-all duration-300">
                <Award className="h-10 w-10 text-consulting-600 mb-3 mx-auto" />
                <div className="text-sm font-medium text-gray-600">Industry Leader</div>
              </div>
            </div>
            <div className="p-4 flex items-center">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-0 transform hover:translate-y-[-5px] transition-all duration-300">
                <Award className="h-10 w-10 text-consulting-600 mb-3 mx-auto" />
                <div className="text-sm font-medium text-gray-600">Best in Class</div>
              </div>
            </div>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 mt-16">
            <div className="flex items-center text-consulting-700 bg-consulting-50 px-4 py-2 rounded-full shadow-sm">
              <CheckCircle className="h-5 w-5 mr-2 text-consulting-600" />
              <span className="font-medium">ISO 27001 Certified</span>
            </div>
            <div className="flex items-center text-consulting-700 bg-consulting-50 px-4 py-2 rounded-full shadow-sm">
              <CheckCircle className="h-5 w-5 mr-2 text-consulting-600" />
              <span className="font-medium">CMMI Level 5</span>
            </div>
            <div className="flex items-center text-consulting-700 bg-consulting-50 px-4 py-2 rounded-full shadow-sm">
              <CheckCircle className="h-5 w-5 mr-2 text-consulting-600" />
              <span className="font-medium">SOC 2 Compliant</span>
            </div>
            <div className="flex items-center text-consulting-700 bg-consulting-50 px-4 py-2 rounded-full shadow-sm">
              <CheckCircle className="h-5 w-5 mr-2 text-consulting-600" />
              <span className="font-medium">GDPR Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
