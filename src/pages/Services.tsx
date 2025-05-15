
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import ServiceDetail from "@/components/services/ServiceDetail";
import ConsultationForm from "@/components/home/ConsultationForm";
import LiveChat from "@/components/services/LiveChat";
import PaymentInfo from "@/components/services/PaymentInfo";
import { Toaster } from "@/components/ui/toaster";

const Services = () => {
  // Data for detailed service offerings
  const servicesData = [{
    id: "website-development",
    title: "Website Development",
    subtitle: "Creating powerful, responsive websites that drive business growth",
    description: "Our expert web development team builds custom, high-performance websites that elevate your brand, engage your audience, and convert visitors into customers. Using the latest technologies and best practices, we deliver solutions that are both beautiful and functional.",
    features: ["Custom website design and development", "E-commerce solutions", "Content management systems", "Website maintenance and support", "SEO optimization", "Performance optimization"],
    icon: "Globe"
  }, {
    id: "software-development",
    title: "Software Development",
    subtitle: "Custom software solutions tailored to your business needs",
    description: "We build scalable, secure, and high-performance software solutions that address your specific business challenges. Our development team follows industry best practices to deliver reliable applications that drive efficiency and innovation.",
    features: ["Custom application development", "Enterprise software solutions", "API development and integration", "Mobile app development", "Cloud-native applications", "Legacy system modernization"],
    icon: "Code"
  }, {
    id: "it-support",
    title: "IT Support",
    subtitle: "Reliable technical support to keep your business running smoothly",
    description: "Our responsive IT support services ensure your technology infrastructure runs efficiently and securely. We provide proactive monitoring and maintenance to prevent issues before they impact your business, and rapid response when problems arise.",
    features: ["24/7 helpdesk support", "Network monitoring and management", "Security management", "Data backup and recovery", "Hardware and software troubleshooting", "IT infrastructure maintenance"],
    icon: "ShieldCheck"
  }, {
    id: "it-consulting",
    title: "IT Consulting",
    subtitle: "Strategic technology guidance to drive business transformation",
    description: "Our IT consultants work with you to develop technology strategies that align with your business goals. We help you leverage emerging technologies to improve efficiency, reduce costs, and create competitive advantages in your market.",
    features: ["IT strategy development", "Digital transformation planning", "Technology roadmap creation", "IT audit and assessment", "Vendor selection and management", "Project management and implementation"],
    icon: "Database"
  }];
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-black">
        {/* Services Hero Section - Updated to match About page hero styling */}
        <section id="services-top" className="py-20 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our IT Consulting Services</h1>
              <p className="text-xl text-lemon mb-8 leading-relaxed">
                End-to-end digital solutions designed to drive growth, innovation, and operational excellence
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid gap-16">
              {servicesData.map((service, index) => <ServiceDetail key={service.id} service={service} isReversed={index % 2 !== 0} />)}
            </div>

            <div className="mt-16 text-center">
              <Button className="bg-coral hover:bg-coral/90 text-black px-8 py-6 text-lg flex items-center gap-2 mx-auto" onClick={scrollToTop}>
                Back to Top <ArrowUp size={20} />
              </Button>
            </div>
          </div>
        </section>

        {/* Payment Information Section */}
        <PaymentInfo />

        {/* Consultation Form Section */}
        <ConsultationForm />

        {/* Live chat component */}
        <LiveChat />
      </main>
      <Footer />
      <Toaster />
    </div>;
};

export default Services;
