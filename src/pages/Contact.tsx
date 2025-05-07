
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactCards from "@/components/contact/ContactCards";
import ContactForm from "@/components/contact/ContactForm";
import ContactFAQ from "@/components/contact/ContactFAQ";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <ContactHero />

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <ContactCards />

            {/* Contact Form */}
            <ContactForm />
          </div>
        </section>

        {/* FAQ Section */}
        <ContactFAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
