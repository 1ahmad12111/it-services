
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-consulting-700 to-consulting-800 rounded-2xl p-10 md:p-16 text-white shadow-xl max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business with Technology?</h2>
            <p className="text-xl text-consulting-100 max-w-2xl mx-auto">
              Schedule a consultation with our experts today and discover how our IT solutions can help your business thrive.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-consulting-800 hover:bg-gray-100 px-8 py-6 text-lg">
              Schedule a Consultation
            </Button>
            <Button variant="outline" className="bg-transparent border-white hover:bg-white/10 text-white px-8 py-6 text-lg">
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
