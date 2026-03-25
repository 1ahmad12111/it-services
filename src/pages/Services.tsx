
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import ServiceDetail from "@/components/services/ServiceDetail";
import ConsultationForm from "@/components/home/ConsultationForm";
import LiveChat from "@/components/services/LiveChat";
import PaymentInfo from "@/components/services/PaymentInfo";
import { Toaster } from "@/components/ui/toaster";
import SEOMetaTags from "@/components/common/SEOMetaTags";
import { Link as RouterLink } from "react-router-dom";

const Services = () => {
  // Data for detailed service offerings
  const servicesData = [{
    id: "website-development",
    title: "Website Development",
    subtitle: "Turn more visitors into booked calls in the next 30 days.",
    description: "Your site should sell while you sleep. We build conversion-first pages with clear messaging, clean mobile UX, and fast load times so your traffic becomes pipeline.",
    features: ["Launch in 2 to 4 weeks", "Messaging and offer positioning", "Conversion-focused page structure", "On-page SEO and analytics setup", "Speed optimization for mobile and desktop", "Post-launch support for smooth handoff"],
    ctaLabel: "Start My Website Project",
    ctaLink: "/contact",
    icon: "Globe"
  }, {
    id: "software-development",
    title: "Software Development",
    subtitle: "Ship your dashboard or internal tool in 3 to 8 weeks.",
    description: "We scope tightly, build fast, and demo every week. You get a product your team can use immediately, without a six-month build cycle or bloated agency process.",
    features: ["Fixed-scope delivery with weekly milestones", "Admin dashboards and client portals", "Workflow automation for operations teams", "Integrations with your existing tools", "QA, launch, and production support", "Clear documentation for long-term ownership"],
    ctaLabel: "Book a Scope Call",
    ctaLink: "/booking",
    icon: "Code"
  }, {
    id: "it-support",
    title: "IT Support",
    subtitle: "Keep your team productive with fast, practical support.",
    description: "Downtime kills momentum. We handle troubleshooting, system stability, and recurring tech issues so your team can focus on sales, delivery, and growth.",
    features: ["Response windows you can plan around", "Priority fixes for business-critical issues", "Monitoring and preventive maintenance", "Security and backup checks", "Hardware and software troubleshooting", "Monthly support summary with next actions"],
    ctaLabel: "Talk to Support Team",
    ctaLink: "/contact",
    icon: "ShieldCheck"
  }, {
    id: "it-consulting",
    title: "IT Consulting",
    subtitle: "Get a 90-day tech roadmap your team can execute.",
    description: "If your systems feel patched together, we fix the plan first. You get a clear priority list, budget ranges, and an execution path tied to business outcomes.",
    features: ["Current-state audit in plain language", "90-day roadmap with effort estimates", "Tool and vendor recommendations", "Cost and risk tradeoff guidance", "Execution planning with your internal team", "Leadership-ready summary for decisions"],
    ctaLabel: "Get My 90-Day Roadmap",
    ctaLink: "/booking",
    icon: "Database"
  }];
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return <div className="min-h-screen flex flex-col">
      <SEOMetaTags
        title="Mosivant Services | Websites, Dashboards, and IT Support That Ship Fast"
        description="Outcome-focused services for growing teams: launch websites in 2 to 4 weeks, dashboards in 3 to 8 weeks, and get a clear 90-day roadmap."
        canonicalUrl="https://www.gomosivant.com/services"
      />
      <Navbar />
      <main className="flex-grow bg-black">
        {/* Services Hero Section - Updated to match About page hero styling */}
        <section id="services-top" className="py-20 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Services Built for Measurable Growth</h1>
              <p className="text-xl text-lemon mb-8 leading-relaxed">
                Pick the outcome you need next: more leads, faster operations, or a product shipped on a real timeline.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-coral hover:bg-coral/90 text-black" asChild>
                  <a href="#consultation">Book a Free Strategy Call</a>
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                  <RouterLink to="/pricing">See Pricing</RouterLink>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid gap-16">
              {servicesData.map((service, index) => <ServiceDetail key={service.id} service={service} isReversed={index % 2 !== 0} />)}
            </div>

            <div className="mt-16 text-center">
              <Button className="bg-coral hover:bg-coral/90 text-black px-8 py-6 text-lg flex items-center gap-2 mx-auto" onClick={scrollToTop}>
                Back to Top <ArrowUp size={20} />
              </Button>
            </div>
          </div>
        </section>

        {/* Payment Information Section */}
        <PaymentInfo />

        {/* Consultation Form Section */}
        <ConsultationForm />

        {/* Live chat component */}
        <LiveChat />
      </main>
      <Footer />
      <Toaster />
    </div>;
};

export default Services;
