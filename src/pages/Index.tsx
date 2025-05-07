
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ClientsSection from "@/components/home/ClientsSection";
import ServiceOverview from "@/components/home/ServiceOverview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import CtaSection from "@/components/home/CtaSection";
import ConsultationForm from "@/components/home/ConsultationForm";
import InsightsSection from "@/components/home/InsightsSection";
import LiveChat from "@/components/services/LiveChat";
import SEOMetaTags from "@/components/common/SEOMetaTags";

const Index = () => {
  // Adds observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Select elements to animate on scroll
    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observer.observe(element);
    });

    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEOMetaTags 
        title="Mosivant - IT Solutions & Consulting"
        description="Mosivant delivers cutting-edge IT consulting, software development, and digital transformation solutions to help businesses thrive in the digital age."
        keywords="IT consulting, software development, website development, IT support, digital transformation"
      />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ClientsSection />
        <div className="animate-on-scroll opacity-0">
          <ServiceOverview />
        </div>
        <div className="animate-on-scroll opacity-0">
          <WhyChooseUs />
        </div>
        <div className="animate-on-scroll opacity-0">
          <InsightsSection />
        </div>
        <div className="animate-on-scroll opacity-0">
          <Testimonials />
        </div>
        <div className="animate-on-scroll opacity-0">
          <CtaSection />
        </div>
        <div className="animate-on-scroll opacity-0">
          <ConsultationForm />
        </div>
        <LiveChat />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
