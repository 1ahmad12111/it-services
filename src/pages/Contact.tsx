
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
        title="Contact Mosivant — Book a Free 15-Minute Scope Call"
        description="Get in touch for a free project consultation. We respond within 24 hours."
        keywords="contact, IT consulting, technology services, Mosivant contact"
        canonicalUrl="https://www.gomosivant.com/contact"
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
