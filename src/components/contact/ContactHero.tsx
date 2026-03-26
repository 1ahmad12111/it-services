import React from "react";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";
import { CAL_BOOKING_URL } from "@/lib/cal";

const ContactHero = () => {
  return (
    <section className="bg-black py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-lemon mb-8">
            Have a question or need assistance? Reach out to our team via phone, email, or connect with us on LinkedIn.
          </p>
          <Button
            className="bg-gradient-to-r from-coral to-coral/90 hover:from-coral/90 hover:to-coral text-black px-8 py-7 text-lg shadow-xl shadow-black/30 transition-all duration-300 hover:translate-y-[-2px] font-medium rounded-xl border border-coral/20"
            asChild
          >
            <a href={CAL_BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Book a Call <CalendarDays className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
