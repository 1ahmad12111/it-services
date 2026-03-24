
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CheckCircle, Award } from "lucide-react";

const clients = [
  {
    name: "TechForward",
    initials: "TF",
    color: "bg-coral",
    industry: "Technology"
  },
  {
    name: "Global Finance Partners",
    initials: "GF",
    color: "bg-blue-500",
    industry: "Finance"
  },
  {
    name: "MediHealth Solutions",
    initials: "MH",
    color: "bg-green-500",
    industry: "Healthcare"
  },
  {
    name: "EcoSustain",
    initials: "ES",
    color: "bg-emerald-500",
    industry: "Energy"
  },
  {
    name: "IndustriaX",
    initials: "IX",
    color: "bg-gray-700",
    industry: "Manufacturing"
  },
  {
    name: "EduSphere",
    initials: "ED",
    color: "bg-purple-500",
    industry: "Education"
  },
  {
    name: "LogiTech Express",
    initials: "LE",
    color: "bg-orange-500",
    industry: "Logistics"
  },
  {
    name: "RetailNext",
    initials: "RN",
    color: "bg-pink-500",
    industry: "Retail"
  }
];

const achievements = [
  {
    number: "50+",
    label: "Projects Delivered",
    icon: "users"
  },
  {
    number: "15+",
    label: "Technologies Mastered",
    icon: "globe"
  },
  {
    number: "4+",
    label: "Years of Excellence",
    icon: "briefcase"
  },
  {
    number: "100%",
    label: "Project Completion",
    icon: "heart"
  }
];

const ClientsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4 border border-gray-200">Our Partners</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 opacity-0 animate-fade-in">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-coral to-coral/80">
              Trusted by Leading Enterprises
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-200">
            MOSIVANT partners with forward-thinking organizations to drive innovation and digital excellence across industries
          </p>
        </div>

        <div className="max-w-7xl mx-auto opacity-0 animate-fade-in animate-delay-300 mb-20">
          <Carousel
            opts={{
              align: "start",
              loop: true
            }}
            className="w-full"
          >
            <CarouselContent>
              {clients.map((client, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4 pl-4">
                  <div className="bg-white border-0 p-8 rounded-2xl h-full flex flex-col items-center justify-center transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] group">
                    <div className="h-20 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                      <div className={`h-16 w-16 ${client.color} rounded-full flex items-center justify-center`}>
                        <span className="text-white text-xl font-bold">{client.initials}</span>
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg text-gray-800">{client.name}</h3>
                    <p className="text-sm text-coral font-medium mt-1">{client.industry}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex justify-end gap-2 mt-8">
              <CarouselPrevious className="relative left-0 right-0 translate-y-0 bg-coral text-white hover:bg-coral/90 hover:text-white border-0 shadow-lg" />
              <CarouselNext className="relative left-0 right-0 translate-y-0 bg-coral text-white hover:bg-coral/90 hover:text-white border-0 shadow-lg" />
            </div>
          </Carousel>
        </div>

        {/* Statistics and achievements section */}
        <div className="py-16 bg-black rounded-3xl shadow-xl my-20 transform hover:scale-[1.01] transition-all duration-500">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-8">
            {achievements.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-3 flex items-center justify-center">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-lemon to-lemon/80">{item.number}</span>
                </div>
                <div className="text-gray-300 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Separator className="mb-16" />
          <p className="text-xl font-medium text-gray-700 mb-10">Certifications & Expertise</p>
          <div className="flex flex-wrap justify-center gap-10 items-center">
            <div className="p-4 flex items-center">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-0 transform hover:translate-y-[-5px] transition-all duration-300">
                <Award className="h-10 w-10 text-coral mb-3 mx-auto" />
                <div className="text-sm font-medium text-gray-600">React Certified</div>
              </div>
            </div>
            <div className="p-4 flex items-center">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-0 transform hover:translate-y-[-5px] transition-all duration-300">
                <Award className="h-10 w-10 text-coral mb-3 mx-auto" />
                <div className="text-sm font-medium text-gray-600">TypeScript Expert</div>
              </div>
            </div>
            <div className="p-4 flex items-center">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-0 transform hover:translate-y-[-5px] transition-all duration-300">
                <Award className="h-10 w-10 text-coral mb-3 mx-auto" />
                <div className="text-sm font-medium text-gray-600">AWS Cloud Practitioner</div>
              </div>
            </div>
            <div className="p-4 flex items-center">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-0 transform hover:translate-y-[-5px] transition-all duration-300">
                <Award className="h-10 w-10 text-coral mb-3 mx-auto" />
                <div className="text-sm font-medium text-gray-600">JavaScript Certified</div>
              </div>
            </div>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 mt-16">
            <div className="flex items-center text-black bg-lemon px-4 py-2 rounded-full shadow-sm">
              <CheckCircle className="h-5 w-5 mr-2 text-black" />
              <span className="font-medium">React Certified</span>
            </div>
            <div className="flex items-center text-black bg-lemon px-4 py-2 rounded-full shadow-sm">
              <CheckCircle className="h-5 w-5 mr-2 text-black" />
              <span className="font-medium">TypeScript Expert</span>
            </div>
            <div className="flex items-center text-black bg-lemon px-4 py-2 rounded-full shadow-sm">
              <CheckCircle className="h-5 w-5 mr-2 text-black" />
              <span className="font-medium">AWS Cloud Practitioner</span>
            </div>
            <div className="flex items-center text-black bg-lemon px-4 py-2 rounded-full shadow-sm">
              <CheckCircle className="h-5 w-5 mr-2 text-black" />
              <span className="font-medium">JavaScript Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
