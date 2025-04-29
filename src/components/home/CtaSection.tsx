
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-consulting-800 to-consulting-900 rounded-2xl p-10 md:p-16 text-white shadow-xl max-w-6xl mx-auto relative overflow-hidden">
          {/* Abstract background elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-consulting-400 blur-[80px]" />
            <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-consulting-200 blur-[100px]" />
          </div>
          
          <div className="relative z-10">
            <div className="text-center md:text-left md:max-w-2xl mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Accelerate Your Digital Transformation?</h2>
              <p className="text-xl text-consulting-100 mb-4">
                Partner with us to unlock new opportunities for growth, innovation, and operational excellence.
              </p>
              <p className="text-lg text-consulting-200">
                Schedule a consultation with our experts to explore how we can help you achieve your business objectives.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Button className="bg-white text-consulting-800 hover:bg-gray-100 px-8 py-6 text-lg">
                Schedule a Consultation
              </Button>
              <Button variant="outline" className="bg-transparent border-white hover:bg-white/10 text-white px-8 py-6 text-lg">
                Explore Our Solutions <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
