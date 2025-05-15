
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CalendlyWidget from "@/components/services/CalendlyWidget";
import { useIsMobile } from "@/hooks/use-mobile";

const Booking = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6 md:mb-8">
              <h1 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-consulting-800">Schedule a Consultation</h1>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                Select a convenient time for your free consultation with one of our IT experts. We're looking forward to discussing how we can help your business grow.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
              <CalendlyWidget 
                url="https://cal.com/faisal-qureshi-k3bw4r/15min" 
                styles={{ height: isMobile ? "600px" : "750px" }} 
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
