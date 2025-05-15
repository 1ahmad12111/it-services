
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Globe, ShieldCheck, Smartphone, Server } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

const services = [
  {
    icon: <Globe className="h-10 w-10 text-black" />,
    title: "Digital Transformation",
    description: "End-to-end digital solutions that help organizations reimagine their business models and customer experiences.",
    link: "/services#website-development"
  },
  {
    icon: <Server className="h-10 w-10 text-black" />,
    title: "Cloud Services",
    description: "Scalable, secure cloud solutions that enable business agility and drive operational efficiency.",
    link: "/services#it-consulting"
  },
  {
    icon: <Code className="h-10 w-10 text-black" />,
    title: "Software Engineering",
    description: "Custom software development with modern tech stacks designed to address your unique business challenges.",
    link: "/services#software-development"
  },
  {
    icon: <Database className="h-10 w-10 text-black" />,
    title: "Data & Analytics",
    description: "Turn your data into actionable insights with our advanced analytics and AI-powered solutions.",
    link: "/services#it-consulting"
  },
  {
    icon: <Smartphone className="h-10 w-10 text-black" />,
    title: "Experience Design",
    description: "Human-centered design approach that creates meaningful digital experiences for your customers.",
    link: "/services#website-development"
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-black" />,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and ensure business continuity.",
    link: "/services#it-support"
  }
];

const ServiceOverview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Our Solutions Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end digital solutions designed to drive growth, innovation and operational excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-none shadow-md h-full bg-white">
              <CardHeader>
                <div className="p-2 rounded-full bg-lemon inline-flex mb-4 w-16 h-16 justify-center items-center">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-black">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col justify-between h-full">
                <CardDescription className="text-gray-600 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* View All Services button */}
        <div className="mt-12 text-center">
          <Button 
            className="bg-coral text-black hover:bg-coral/90 font-bold px-8 py-6 text-lg"
            size="lg"
            asChild
          >
            <RouterLink to="/services">
              View All Services <ArrowRight className="ml-2 h-5 w-5" />
            </RouterLink>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
