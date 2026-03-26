
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ClientsSection from "@/components/home/ClientsSection";
import ServiceOverview from "@/components/home/ServiceOverview";
import PortfolioSection from "@/components/home/PortfolioSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import LeadMagnet from "@/components/home/LeadMagnet";
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
        title="Mosivant | Ship Dashboards & Web Apps in 3–6 Weeks"
        description="Mosivant builds custom dashboards and web apps that drive revenue and save team hours. 50+ projects, 100% completion. Book a free scope call today."
        keywords="custom dashboard development, web app agency, React TypeScript developers, SaaS MVP builder, ship fast web apps"
        ogImage="https://www.gomosivant.com/og-home.png"
        canonicalUrl="https://www.gomosivant.com/"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Mosivant",
          url: "https://www.gomosivant.com",
          logo: "https://www.gomosivant.com/og-home.png",
          description: "Mosivant builds custom dashboards and web apps for growing businesses. Ship in 3–6 weeks with founder-led delivery.",
          foundingDate: "2022",
          sameAs: ["https://twitter.com/mosivant"],
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "sales",
            url: "https://www.gomosivant.com/contact",
          },
        }}
      />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ClientsSection />
        <div className="animate-on-scroll opacity-0">
          <ServiceOverview />
        </div>
        <div className="animate-on-scroll opacity-0">
          <PortfolioSection />
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
          <LeadMagnet />
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
