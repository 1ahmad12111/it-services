
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactCards from "@/components/contact/ContactCards";
import ContactForm from "@/components/contact/ContactForm";
import ContactFAQ from "@/components/contact/ContactFAQ";
import SEOMetaTags from "@/components/common/SEOMetaTags";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOMetaTags
        title="Contact Mosivant — Free 15-Min Project Scope Call"
        description="Book a free 15-minute scope call to discuss your web app or dashboard project. We respond within 24 hours. No commitment required."
        keywords="contact Mosivant, book web dev consultation, free project scope call, hire React developers, web app estimate"
        canonicalUrl="https://www.gomosivant.com/contact"
        ogImage="https://www.gomosivant.com/og-home.png"
      />
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
