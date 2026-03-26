
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/about/HeroSection";
import StorySection from "@/components/about/StorySection";
import JourneySection from "@/components/about/JourneySection";
import CoreValuesSection from "@/components/about/CoreValuesSection";
import CertificationsSection from "@/components/about/CertificationsSection";
import CtaSection from "@/components/about/CtaSection";
import SEOMetaTags from "@/components/common/SEOMetaTags";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOMetaTags
        title="About Mosivant | Founder-Led Dev Team, 50+ Projects Shipped"
        description="Founded in 2022, Mosivant helps businesses ship web products faster with founder-led delivery. 50+ projects, 100% completion rate. Meet the team."
        keywords="about Mosivant, founder-led web agency, Faisal developer, React TypeScript team, web development company"
        canonicalUrl="https://www.gomosivant.com/about"
        ogImage="https://www.gomosivant.com/og-home.png"
      />
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <StorySection />
        <JourneySection />
        <CoreValuesSection />
        <CertificationsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
