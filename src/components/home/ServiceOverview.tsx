
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Globe, ShieldCheck, Smartphone, Server } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

const services = [
  {
    icon: <Globe className="h-10 w-10 text-consulting-600" />,
    title: "Digital Transformation",
    description: "End-to-end digital solutions that help organizations reimagine their business models and customer experiences.",
    link: "/services/digital-transformation"
  },
  {
    icon: <Server className="h-10 w-10 text-consulting-600" />,
    title: "Cloud Services",
    description: "Scalable, secure cloud solutions that enable business agility and drive operational efficiency.",
    link: "/services/cloud-services"
  },
  {
    icon: <Code className="h-10 w-10 text-consulting-600" />,
    title: "Software Engineering",
    description: "Custom software development with modern tech stacks designed to address your unique business challenges.",
    link: "/services/software-engineering"
  },
  {
    icon: <Database className="h-10 w-10 text-consulting-600" />,
    title: "Data & Analytics",
    description: "Turn your data into actionable insights with our advanced analytics and AI-powered solutions.",
    link: "/services/data-analytics"
  },
  {
    icon: <Smartphone className="h-10 w-10 text-consulting-600" />,
    title: "Experience Design",
    description: "Human-centered design approach that creates meaningful digital experiences for your customers.",
    link: "/services/experience-design"
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-consulting-600" />,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and ensure business continuity.",
    link: "/services/cybersecurity"
  }
];

const ServiceOverview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Solutions Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end digital solutions designed to drive growth, innovation and operational excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-none shadow-md h-full">
              <CardHeader>
                <div className="p-2 rounded-full bg-consulting-50 inline-flex mb-4 w-16 h-16 justify-center items-center">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col justify-between h-full">
                <CardDescription className="text-gray-600 mb-6 text-base">
                  {service.description}
                </CardDescription>
                <Button variant="ghost" className="text-consulting-600 hover:text-consulting-800 hover:bg-consulting-50 p-0 justify-start">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* View All Services button */}
        <div className="mt-12 text-center">
          <Button 
            className="bg-consulting-600 hover:bg-consulting-700 text-white px-8 py-6 text-lg"
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
