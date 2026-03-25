import React from "react";
import { Link } from "react-router-dom";
import { Check, Clock3 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SEOMetaTags from "@/components/common/SEOMetaTags";
import { Button } from "@/components/ui/button";

type PricingTier = {
  name: string;
  price: string;
  bestFor: string;
  includes: string[];
  timeline: string;
  ctaLabel: string;
  ctaLink: string;
  isRecommended?: boolean;
};

const tiers: PricingTier[] = [
  {
    name: "Starter",
    price: "Starting from $2,500",
    bestFor: "Founders who need a high-converting web presence fast",
    includes: [
      "Conversion-focused landing page or 3-page site",
      "Mobile-first build and speed optimization",
      "Core SEO and analytics setup",
      "2 revision rounds and launch support",
    ],
    timeline: "7 to 14 days",
    ctaLabel: "Start Starter Plan",
    ctaLink: "/contact",
  },
  {
    name: "Growth",
    price: "Starting from $5,000",
    bestFor: "Teams ready to ship dashboards, portals, or internal tools",
    includes: [
      "Custom React app built around your workflow",
      "API integrations with your existing stack",
      "Role-based access and secure auth setup",
      "Analytics and event tracking",
      "3 revision rounds with weekly demos",
    ],
    timeline: "3 to 6 weeks",
    ctaLabel: "Book Growth Scope Call",
    ctaLink: "/contact",
    isRecommended: true,
  },
  {
    name: "Enterprise",
    price: "Custom pricing",
    bestFor: "Complex SaaS products with multiple teams and systems",
    includes: [
      "Full product architecture and implementation",
      "Complex workflows and system integrations",
      "Security, compliance, and deployment planning",
      "Dedicated delivery lead and sprint planning",
      "Ongoing optimization and support options",
      "Priority response for business-critical issues",
    ],
    timeline: "8+ weeks",
    ctaLabel: "Book Enterprise Consultation",
    ctaLink: "/booking",
  },
];

const faqs = [
  {
    question: "Do you offer payment plans?",
    answer: "Yes. Most projects are split into milestone payments, and plans above $5,000 can use staged billing.",
  },
  {
    question: "What if I need changes after delivery?",
    answer: "Each plan includes revision rounds. After that, we scope additional work clearly before any extra billing.",
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer: "Yes. Ongoing support starts at $500 per month for maintenance, fixes, and small improvements.",
  },
  {
    question: "Can I start small and scale up?",
    answer: "Yes. Many clients begin with Starter, validate ROI, then expand into Growth or Enterprise.",
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOMetaTags
        title="Pricing — Transparent Web Development Packages | Mosivant"
        description="Outcome-focused pricing for websites, dashboards, and SaaS builds. Projects start at $2,500 with clear scope, timeline, and milestones."
        keywords="mosivant pricing, web development pricing, react app pricing, enterprise software pricing"
        canonicalUrl="https://www.gomosivant.com/pricing"
      />
      <Navbar />

      <main className="flex-grow">
        <section className="relative bg-slate-900 text-white pt-28 pb-20 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-coral/20 blur-[90px]" />
            <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-coral/15 blur-[80px]" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <p className="inline-flex items-center px-4 py-1.5 rounded-full bg-coral text-black text-sm font-semibold mb-6">
                Flexible Engagements
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Pricing</h1>
              <p className="text-lg md:text-xl text-lemon leading-relaxed">
                Choose the speed and scope you need. Every plan includes a clear timeline, direct communication, and defined deliverables.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-3 items-stretch">
              {tiers.map((tier) => (
                <article
                  key={tier.name}
                  className={`relative bg-white rounded-xl shadow-sm transition-shadow hover:shadow-md p-6 md:p-8 flex flex-col ${
                    tier.isRecommended
                      ? "border-2 border-coral"
                      : "border border-gray-200"
                  }`}
                >
                  {tier.isRecommended && (
                    <span className="absolute -top-3 left-6 inline-flex rounded-full bg-coral px-3 py-1 text-xs font-semibold text-black">
                      Most Popular
                    </span>
                  )}

                  <h2 className="text-2xl font-bold text-gray-900 mb-3">{tier.name}</h2>
                  <p className="text-2xl font-semibold text-coral mb-2">{tier.price}</p>
                  <p className="text-gray-700 mb-6">
                    <span className="font-semibold text-gray-900">Best for:</span> {tier.bestFor}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900 mb-3">Includes</h3>
                    <ul className="space-y-2 text-gray-700">
                      {tier.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check className="h-4 w-4 mt-1 text-coral shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-medium text-gray-700 bg-gray-100 px-3 py-2 rounded-lg w-fit mb-6">
                    <Clock3 className="h-4 w-4 text-coral" />
                    Timeline: {tier.timeline}
                  </div>

                  <Button
                    asChild
                    className="mt-auto bg-coral hover:bg-coral/90 text-black"
                  >
                    <Link to={tier.ctaLink}>{tier.ctaLabel}</Link>
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                <p className="text-lg text-gray-600">
                  Still deciding? Start here, then book a quick call and we will map your best-fit plan in 15 minutes.
                </p>
              </div>

              <div className="space-y-6">
                {faqs.map((faq) => (
                  <div key={faq.question} className="bg-gray-50 border border-gray-200 p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-3 text-coral">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 text-center">
                <Button asChild className="bg-coral hover:bg-coral/90 text-black">
                  <Link to="/booking">Book a Free 15-Minute Pricing Call</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
