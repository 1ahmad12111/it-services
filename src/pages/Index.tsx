
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ServiceOverview from "@/components/home/ServiceOverview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import CtaSection from "@/components/home/CtaSection";
import ConsultationForm from "@/components/home/ConsultationForm";
import ClientsSection from "@/components/home/ClientsSection";
import InsightsSection from "@/components/home/InsightsSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ClientsSection />
        <ServiceOverview />
        <WhyChooseUs />
        <InsightsSection />
        <Testimonials />
        <CtaSection />
        <ConsultationForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
