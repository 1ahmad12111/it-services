
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Globe, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: <Globe className="h-10 w-10 text-consulting-600" />,
    title: "Website Development",
    description: "Custom, responsive websites that reflect your brand and meet your business objectives.",
    link: "/services/website-development"
  },
  {
    icon: <Code className="h-10 w-10 text-consulting-600" />,
    title: "Software Development",
    description: "Tailored software solutions designed to streamline your business processes and operations.",
    link: "/services/software-development"
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-consulting-600" />,
    title: "IT Support",
    description: "Reliable technical support and maintenance to keep your systems running smoothly.",
    link: "/services/it-support"
  },
  {
    icon: <Database className="h-10 w-10 text-consulting-600" />,
    title: "IT Consulting",
    description: "Strategic technology guidance to help you make informed decisions and achieve your goals.",
    link: "/services/it-consulting"
  }
];

const ServiceOverview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive IT solutions designed to help your business grow and succeed in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-t-4 border-t-consulting-600 h-full">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col justify-between h-full">
                <CardDescription className="text-gray-600 mb-6">
                  {service.description}
                </CardDescription>
                <Button variant="ghost" className="text-consulting-600 hover:text-consulting-800 hover:bg-consulting-50 p-0 justify-start">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
