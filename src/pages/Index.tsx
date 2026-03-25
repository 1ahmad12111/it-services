
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ClientsSection from "@/components/home/ClientsSection";
import ServiceOverview from "@/components/home/ServiceOverview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import CtaSection from "@/components/home/CtaSection";
import InsightsSection from "@/components/home/InsightsSection";
import WorkingProcess from "@/components/home/WorkingProcess";
import LiveChat from "@/components/services/LiveChat";
import SEOMetaTags from "@/components/common/SEOMetaTags";

const Index = () => {
  // Adds observer for scroll animations
  useEffect(() => {
    // Use a small timeout to ensure DOM is fully ready
    const timeoutId = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Add a small delay to make animations smoother
              requestAnimationFrame(() => {
                entry.target.classList.add("animate-fade-in");
              });
              observer.unobserve(entry.target);
            }
          });
        },
        { 
          threshold: 0.1,
          // Add rootMargin to start animation slightly before element comes into view
          rootMargin: '10px'
        }
      );

      // Select elements to animate on scroll
      document.querySelectorAll(".animate-on-scroll").forEach((element) => {
        observer.observe(element);
      });

      return () => {
        document.querySelectorAll(".animate-on-scroll").forEach((element) => {
          observer.unobserve(element);
        });
        observer.disconnect();
      };
    }, 100); // Small timeout to ensure DOM is ready

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEOMetaTags 
        title="Mosivant — React & TypeScript Web Apps for Growing Businesses"
        description="Custom dashboards, web apps, and SaaS tools built by a team that ships fast. 50+ projects delivered. React, TypeScript, Node.js specialists."
        keywords="IT consulting, software development, website development, IT support, digital transformation"
        ogImage="https://www.gomosivant.com/og-home.png"
        canonicalUrl="https://www.gomosivant.com/"
      />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ClientsSection />
        <div className="animate-on-scroll opacity-0">
          <ServiceOverview />
        </div>
        <div className="animate-on-scroll opacity-0">
          <WorkingProcess />
        </div>
        <div className="animate-on-scroll opacity-0">
          <WhyChooseUs />
        </div>
        <div className="animate-on-scroll opacity-0">
          <InsightsSection />
        </div>
        <div className="animate-on-scroll opacity-0">
          <Testimonials />
        </div>
        <div className="animate-on-scroll opacity-0">
          <CtaSection />
        </div>
        <LiveChat />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
