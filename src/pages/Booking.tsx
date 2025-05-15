
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CalendlyWidget from "@/components/services/CalendlyWidget";
import { useIsMobile } from "@/hooks/use-mobile";
import SEOMetaTags from "@/components/common/SEOMetaTags";

const Booking = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex flex-col">
      <SEOMetaTags 
        title="Book a Consultation - Mosivant"
        description="Schedule a free consultation with our IT experts at Mosivant. Choose a time that works for you."
      />
      <Navbar />
      <main className="flex-grow py-12 md:py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h1 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-coral">
                Schedule a Free Consultation
              </h1>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                Select a convenient time for your free 15-minute consultation with one of our IT experts. 
                We're looking forward to discussing how we can help your business grow.
              </p>
            </div>
            
            <div className="relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-coral/5 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-lemon/5 rounded-full -ml-32 -mb-32"></div>
              
              <div className="p-4 md:p-6 relative">
                <div className="w-full min-h-[650px] md:min-h-[750px]">
                  <CalendlyWidget 
                    url="https://cal.com/faisal-qureshi-k3bw4r/15min" 
                    styles={{ 
                      height: isMobile ? "650px" : "750px",
                      borderRadius: "12px",
                    }} 
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="p-4 bg-coral/5 rounded-lg inline-block">
                <p className="text-sm md:text-base text-gray-600">
                  Having trouble scheduling? <a href="/contact" className="text-coral font-medium hover:underline">Contact us</a> directly and we'll set up a time to talk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
