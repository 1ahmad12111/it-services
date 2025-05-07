
import React, { useEffect, lazy, Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ClientsSection from "@/components/home/ClientsSection";
import SEOMetaTags from "@/components/common/SEOMetaTags";

// Lazy load components that aren't needed immediately
const ServiceOverview = lazy(() => import("@/components/home/ServiceOverview"));
const WhyChooseUs = lazy(() => import("@/components/home/WhyChooseUs"));
const Testimonials = lazy(() => import("@/components/home/Testimonials"));
const CtaSection = lazy(() => import("@/components/home/CtaSection"));
const ConsultationForm = lazy(() => import("@/components/home/ConsultationForm"));
const InsightsSection = lazy(() => import("@/components/home/InsightsSection"));
const LiveChat = lazy(() => import("@/components/services/LiveChat"));

// Loading fallback
const LoadingFallback = () => (
  <div className="w-full py-12 flex justify-center items-center">
    <div className="animate-pulse flex space-x-4">
      <div className="rounded-full bg-gray-200 h-12 w-12"></div>
      <div className="flex-1 space-y-4 py-1">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      </div>
    </div>
  </div>
);

const Index = () => {
  // Adds observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Select elements to animate on scroll
    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observer.observe(element);
    });

    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEOMetaTags 
        title="Mosivant - IT Solutions & Consulting"
        description="Mosivant delivers cutting-edge IT consulting, software development, and digital transformation solutions to help businesses thrive in the digital age."
        keywords="IT consulting, software development, website development, IT support, digital transformation"
      />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ClientsSection />
        <Suspense fallback={<LoadingFallback />}>
          <div className="animate-on-scroll opacity-0">
            <ServiceOverview />
          </div>
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <div className="animate-on-scroll opacity-0">
            <WhyChooseUs />
          </div>
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <div className="animate-on-scroll opacity-0">
            <InsightsSection />
          </div>
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <div className="animate-on-scroll opacity-0">
            <Testimonials />
          </div>
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <div className="animate-on-scroll opacity-0">
            <CtaSection />
          </div>
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <div className="animate-on-scroll opacity-0">
            <ConsultationForm />
          </div>
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <LiveChat />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
