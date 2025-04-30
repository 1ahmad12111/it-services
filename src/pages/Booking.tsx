
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CalendlyWidget from "@/components/services/CalendlyWidget";

const Booking = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-consulting-800">Schedule a Consultation</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Select a convenient time for your free consultation with one of our IT experts. We're looking forward to discussing how we can help your business grow.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <CalendlyWidget 
                url="https://calendly.com/demo/30min" 
                styles={{ height: "750px" }} 
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
