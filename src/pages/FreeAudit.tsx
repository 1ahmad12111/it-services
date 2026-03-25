import React from "react";
import {
  CheckCircle2,
  Clock3,
  Gauge,
  MonitorSmartphone,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  TriangleAlert,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SEOMetaTags from "@/components/common/SEOMetaTags";
import { Button } from "@/components/ui/button";

const auditItems = [
  {
    title: "Page Speed Analysis",
    description: "How fast your site loads vs competitors.",
    icon: Gauge,
  },
  {
    title: "Mobile Experience Review",
    description: "How your site performs on phones.",
    icon: MonitorSmartphone,
  },
  {
    title: "SEO Health Check",
    description: "Visibility issues hurting your Google ranking.",
    icon: SearchCheck,
  },
  {
    title: "Conversion Blockers",
    description: "UI/UX issues losing you customers.",
    icon: TriangleAlert,
  },
];

const steps = [
  {
    title: "Step 1: Book a 15-min call",
    icon: Clock3,
  },
  {
    title: "Step 2: We run a full audit live on the call",
    icon: Sparkles,
  },
  {
    title: "Step 3: You get a report with prioritized fixes and costs",
    icon: CheckCircle2,
  },
];

const faqs = [
  {
    question: "Is this really free?",
    answer:
      "Yes. No strings attached. We believe in earning trust before earning business.",
  },
  {
    question: "What happens after the audit?",
    answer:
      "You get the report to keep. If you want help implementing fixes, we can discuss that separately.",
  },
  {
    question: "How long does it take?",
    answer: "15 minutes for the call. Report delivered same day.",
  },
];

const calLink = "https://cal.com/faisal-qureshi-k3bw4r/15min";

const FreeAudit = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOMetaTags
        title="Free Website Audit | Mosivant"
        description="Get a free 15-minute website performance audit from Mosivant and uncover speed, mobile, SEO, and conversion issues."
        keywords="free website audit, performance audit, mobile UX audit, SEO health check, conversion optimization"
        canonicalUrl="https://gomosivant.com/free-audit"
      />
      <Navbar />

      <main className="flex-grow">
        <section className="relative bg-slate-900 text-white pt-28 pb-20 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-coral/20 blur-[90px]" />
            <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-coral/15 blur-[80px]" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <p className="inline-flex items-center px-4 py-1.5 rounded-full bg-coral text-black text-sm font-semibold mb-6">
                Free Website Audit
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Is Your Website Costing You Customers?
              </h1>
              <p className="text-lg md:text-xl text-lemon leading-relaxed max-w-3xl mx-auto mb-8">
                Get a free 15-minute performance audit. We will show you exactly what is slowing
                you down and how to fix it.
              </p>
              <Button
                asChild
                className="bg-coral hover:bg-coral/90 text-black px-8 py-6 text-base md:text-lg"
              >
                <a href={calLink} target="_blank" rel="noopener noreferrer">
                  Book Your Free Audit
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What You Get</h2>
              <p className="text-lg text-gray-600">
                A focused breakdown of what is helping and hurting your website performance.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
              {auditItems.map((item) => {
                const ItemIcon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="h-11 w-11 rounded-lg bg-coral/10 flex items-center justify-center mb-4">
                      <ItemIcon className="h-5 w-5 text-coral" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
              {steps.map((step) => {
                const StepIcon = step.icon;

                return (
                  <article
                    key={step.title}
                    className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-center"
                  >
                    <div className="h-12 w-12 rounded-full bg-coral/10 mx-auto mb-4 flex items-center justify-center">
                      <StepIcon className="h-5 w-5 text-coral" />
                    </div>
                    <p className="text-gray-900 font-semibold">{step.title}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-8 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto border border-slate-700 rounded-xl px-6 py-5 text-center text-white">
              <p className="text-base md:text-lg font-medium">
                50+ projects delivered <span className="text-coral px-3">|</span> 100% completion
                rate <span className="text-coral px-3">|</span> React &amp; TypeScript certified
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-5">
                {faqs.map((faq) => (
                  <article key={faq.question} className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-coral mb-2">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-slate-900 rounded-2xl text-center px-6 py-12 md:px-10">
              <div className="h-12 w-12 rounded-full bg-coral/20 mx-auto mb-5 flex items-center justify-center">
                <ShieldCheck className="h-6 w-6 text-coral" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Find Out What is Holding Your Website Back?
              </h2>
              <Button
                asChild
                className="mt-4 bg-coral hover:bg-coral/90 text-black px-8 py-6 text-base md:text-lg"
              >
                <a href={calLink} target="_blank" rel="noopener noreferrer">
                  Book Free Audit Now
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FreeAudit;
