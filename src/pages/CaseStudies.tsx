import React from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  AlertTriangle,
  Clock3,
  HeartPulse,
  ShoppingCart,
  Truck,
  TrendingUp,
  Wrench,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SEOMetaTags from "@/components/common/SEOMetaTags";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    title: "E-Commerce Platform Rebuild",
    client: "A mid-size retail company",
    timeline: "6 weeks",
    icon: ShoppingCart,
    challenge:
      "Legacy PHP storefront had slow load times and poor mobile performance, leading to customer drop-off.",
    solution:
      "Rebuilt the platform in React + TypeScript with a modern UX and Stripe integration for streamlined checkout.",
    results: [
      "40% faster page load times",
      "25% increase in mobile conversion rate",
    ],
  },
  {
    title: "SaaS Dashboard for Logistics Startup",
    client: "An early-stage logistics company",
    timeline: "8 weeks",
    icon: Truck,
    challenge:
      "Operations team lacked a centralized, real-time view of fleet movement and delivery status.",
    solution:
      "Built a custom React + Node.js dashboard with WebSocket-based live updates and role-specific views.",
    results: [
      "Real-time fleet visibility across operations",
      "80% reduction in manual tracking effort",
    ],
  },
  {
    title: "Healthcare Portal Modernization",
    client: "A regional healthcare provider",
    timeline: "10 weeks",
    icon: HeartPulse,
    challenge:
      "Patient portal was outdated, hard to use, and did not meet accessibility expectations.",
    solution:
      "Rebuilt in React with WCAG 2.1 AA accessibility standards and integrated with the existing EHR system.",
    results: [
      "35% increase in patient satisfaction",
      "50% reduction in support tickets",
    ],
  },
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOMetaTags
        title="Case Studies | Mosivant"
        description="See how Mosivant delivers measurable outcomes through modern web and software engineering engagements."
        keywords="case studies, React development, dashboard development, ecommerce modernization, healthcare portal"
        canonicalUrl="https://gomosivant.com/case-studies"
      />
      <Navbar />

      <main className="flex-grow">
        <section className="relative bg-slate-900 text-white pt-28 pb-20 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-14 left-10 h-72 w-72 rounded-full bg-coral/20 blur-[90px]" />
            <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-coral/15 blur-[80px]" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <p className="inline-flex items-center px-4 py-1.5 rounded-full bg-coral text-black text-sm font-semibold mb-6">
                Client Outcomes
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
              <p className="text-lg md:text-xl text-lemon leading-relaxed">
                Three anonymized engagements showing how focused engineering execution translates to clear business impact.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid gap-8">
              {caseStudies.map((study) => {
                const StudyIcon = study.icon;

                return (
                  <article
                    key={study.title}
                    className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="p-6 md:p-8 border-b border-gray-100 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="h-10 w-10 rounded-lg bg-coral/10 flex items-center justify-center">
                            <StudyIcon className="h-5 w-5 text-coral" />
                          </div>
                          <h2 className="text-2xl font-bold text-gray-900">{study.title}</h2>
                        </div>
                        <p className="text-gray-700">
                          <span className="font-semibold text-gray-900">Client:</span> {study.client}
                        </p>
                      </div>

                      <div className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 bg-gray-100 px-3 py-2 rounded-lg">
                        <Clock3 className="h-4 w-4 text-coral" />
                        Timeline: {study.timeline}
                      </div>
                    </div>

                    <div className="p-6 md:p-8 grid md:grid-cols-3 gap-6">
                      <div className="rounded-lg border border-gray-200 p-5">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5 text-coral" />
                          Challenge
                        </h3>
                        <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
                      </div>

                      <div className="rounded-lg border border-gray-200 p-5">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <Wrench className="h-5 w-5 text-coral" />
                          Solution
                        </h3>
                        <p className="text-gray-700 leading-relaxed">{study.solution}</p>
                      </div>

                      <div className="rounded-lg border border-gray-200 p-5">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <TrendingUp className="h-5 w-5 text-coral" />
                          Results
                        </h3>
                        <ul className="space-y-2 text-gray-700">
                          {study.results.map((result) => (
                            <li key={result} className="flex items-start gap-2">
                              <Activity className="h-4 w-4 text-coral mt-1 shrink-0" />
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-12 text-center bg-slate-900 text-white rounded-xl p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Build Your Next Success Story?</h3>
              <p className="text-gray-200 max-w-2xl mx-auto mb-6">
                Tell us what you are building, what is blocking growth, and where you need technical depth.
              </p>
              <Button asChild className="bg-coral hover:bg-coral/90 text-black px-8 py-6 text-base">
                <Link to="/contact">Start a Project Conversation</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudies;
