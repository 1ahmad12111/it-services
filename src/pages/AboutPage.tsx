
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
        title="About Mosivant | Founder-Led Team, 50+ Projects, 100% Completion"
        description="Mosivant was founded by Faisal in 2022 to help growing businesses ship web products faster. Founder-led delivery, 50+ projects shipped, 100% completion."
        canonicalUrl="https://www.gomosivant.com/about"
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
