
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
        title="Contact Us | Mosivant"
        description="Get in touch with Mosivant Consulting. We're here to help with your technology consulting needs."
        keywords="contact, IT consulting, technology services, Mosivant contact"
        canonicalUrl="https://gomosivant.com/contact"
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

