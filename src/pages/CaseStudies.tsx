import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  Activity,
  AlertTriangle,
  Clock3,
  DollarSign,
  Quote,
  ShoppingCart,
  Stethoscope,
  Truck,
  TrendingUp,
  Wrench,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SEOMetaTags from "@/components/common/SEOMetaTags";
import { Button } from "@/components/ui/button";

type CaseStudy = {
  title: string;
  client: string;
  clientContext: string;
  timeline: string;
  investment: string;
  icon: React.ComponentType<{ className?: string }>;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
  quote: string;
  quoteAttribution: string;
};

const caseStudies: CaseStudy[] = [
  {
    title: "Logistics SaaS Dashboard: From Manual Reporting to Real-Time Ops",
    client: "Northstar Route Labs",
    clientContext: "Mid-stage logistics startup, 30-person team",
    timeline: "4 weeks",
    investment: "$6,500",
    icon: Truck,
    challenge:
      "Operations data lived across telematics, dispatch, CRM, billing, and spreadsheets. Leadership spent ~8 hours each week stitching reports, and decisions were delayed by stale metrics and conflicting definitions.",
    solution:
      "Built a custom React operations dashboard with live fleet tracking, SLA visibility, lane-level performance, and role-based KPI views. Added a TypeScript API normalization layer plus automated daily/weekly report digests.",
    results: [
      "8 hours/week saved by eliminating manual reporting",
      "23% faster delivery decisions in ops reviews",
      "Team-wide adoption in 2 weeks",
      "Single KPI source reduced metric disputes",
    ],
    techStack: [
      "React",
      "TypeScript",
      "TanStack Query",
      "Recharts",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "WebSockets",
      "AWS",
    ],
    quote:
      "Before this build, every Monday felt like detective work. Now we open one dashboard and make decisions in minutes, not hours.",
    quoteAttribution: "Head of Operations, Northstar Route Labs",
  },
  {
    title: "DTC E-commerce Analytics: Reduced Waste and Improved Inventory Planning",
    client: "Veloura Skin",
    clientContext: "Fast-growing DTC skincare brand, ~$1M ARR",
    timeline: "3 weeks",
    investment: "$5,800",
    icon: ShoppingCart,
    challenge:
      "Growth, finance, and operations teams were running on conflicting reports across Shopify, Meta, Google Ads, and warehouse data. Channel profitability and inventory risk were hard to trust.",
    solution:
      "Delivered a unified analytics dashboard with channel-level CAC payback, cohort LTV, margin-aware reporting, low-stock alerts, and drill-down views from KPI to campaign/SKU. Implemented role-based access for sensitive finance metrics.",
    results: [
      "Saved $4,000/month in wasted ad spend",
      "40% reduction in stockouts",
      "Replaced fragmented spreadsheet reporting",
      "Faster weekly planning across growth and operations",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Shopify API",
      "Meta Marketing API",
      "Google Ads API",
      "Chart.js",
      "Vercel",
    ],
    quote:
      "We finally had one number for CAC and one number for LTV. That clarity alone paid for the project faster than we expected.",
    quoteAttribution: "Growth Lead, Veloura Skin",
  },
  {
    title: "Healthcare Operations Platform: No-Shows Down from 18% to 7%",
    client: "BrightOak Dental Group",
    clientContext: "4 clinic locations with shared provider schedules",
    timeline: "5 weeks",
    investment: "$7,200",
    icon: Stethoscope,
    challenge:
      "Appointments, reminders, and clinic workflows were disconnected. No-show rates were at 18%, provider utilization was uneven, and front-desk teams were overloaded by manual follow-ups.",
    solution:
      "Built a scheduling and operations dashboard unifying appointments, reminders, cancellations, and provider calendars. Added automated SMS/email reminders, escalation logic, utilization analytics, and real-time open-slot alerts.",
    results: [
      "No-shows reduced from 18% to 7%",
      "31% increase in provider utilization",
      "2 hours/day saved for front-desk teams",
      "Better cross-location staffing decisions",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Twilio",
      "SendGrid",
      "FullCalendar",
      "Docker",
      "AWS",
    ],
    quote:
      "This gave our team breathing room. We stopped firefighting the schedule and started running the clinics with intention.",
    quoteAttribution: "Operations Manager, BrightOak Dental Group",
  },
];

const CaseStudies = () => {
  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Mosivant Case Studies",
    itemListElement: caseStudies.map((study, index) => ({
      "@type": "CreativeWork",
      position: index + 1,
      name: study.title,
      about: study.client,
      description: study.challenge,
      keywords: study.techStack.join(", "),
    })),
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEOMetaTags
        title="Case Studies — Real Results from Custom Web Development | Mosivant"
        description="See how we helped a logistics startup save 8h/week, a DTC brand cut $4,000/month in wasted ad spend, and a healthcare clinic drop no-shows by 60%."
        keywords="Mosivant case studies, logistics dashboard, ecommerce analytics dashboard, healthcare scheduling software, React TypeScript agency"
        canonicalUrl="https://www.gomosivant.com/case-studies"
        ogType="article"
        ogImage="https://www.gomosivant.com/og-home.png"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(caseStudySchema)}</script>
      </Helmet>
      <Navbar />

      <main className="flex-grow">
        <section className="relative bg-slate-900 text-white pt-28 pb-20 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-14 left-10 h-72 w-72 rounded-full bg-coral/20 blur-[90px]" />
            <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-coral/15 blur-[80px]" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <p className="inline-flex items-center px-4 py-1.5 rounded-full bg-coral text-black text-sm font-semibold mb-6">
                Proven Client Outcomes
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Real Case Studies. Real Business Impact.</h1>
              <p className="text-lg md:text-xl text-lemon leading-relaxed">
                Each engagement below shows what changed, what we built, and the measurable results delivered within weeks.
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
                    <div className="p-6 md:p-8 border-b border-gray-100">
                      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4 mb-4">
                        <div>
                          <div className="flex items-start gap-3 mb-2">
                            <div className="h-10 w-10 rounded-lg bg-coral/10 flex items-center justify-center shrink-0 mt-1">
                              <StudyIcon className="h-5 w-5 text-coral" />
                            </div>
                            <div>
                              <h2 className="text-2xl font-bold text-gray-900">{study.title}</h2>
                              <p className="text-gray-700 mt-1">
                                <span className="font-semibold text-gray-900">Client:</span> {study.client}
                              </p>
                              <p className="text-sm text-gray-600">{study.clientContext}</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <div className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 bg-gray-100 px-3 py-2 rounded-lg">
                            <Clock3 className="h-4 w-4 text-coral" />
                            Timeline: {study.timeline}
                          </div>
                          <div className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 bg-gray-100 px-3 py-2 rounded-lg">
                            <DollarSign className="h-4 w-4 text-coral" />
                            Investment: {study.investment}
                          </div>
                        </div>
                      </div>

                      <div className="bg-slate-900 text-white rounded-lg p-4 md:p-5">
                        <p className="flex items-start gap-2 leading-relaxed text-gray-100">
                          <Quote className="h-5 w-5 text-coral mt-0.5 shrink-0" />
                          <span>{study.quote}</span>
                        </p>
                        <p className="text-sm text-lemon mt-3">{study.quoteAttribution}</p>
                      </div>
                    </div>

                    <div className="p-6 md:p-8 grid xl:grid-cols-3 gap-6">
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

                    <div className="px-6 pb-6 md:px-8 md:pb-8">
                      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">Tech Stack</h3>
                      <div className="flex flex-wrap gap-2">
                        {study.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-sm text-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-12 text-center bg-slate-900 text-white rounded-xl p-8 md:p-10 border-2 border-coral/40">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Want results like these? Book a free 15-min scope call</h3>
              <p className="text-gray-200 max-w-2xl mx-auto mb-6">
                Bring your current bottleneck, data stack, or workflow issue. We will map an implementation plan with timeline and budget range.
              </p>
              <Button asChild className="bg-coral hover:bg-coral/90 text-black px-8 py-6 text-base font-semibold">
                <Link to="/contact">Book Your Free Scope Call</Link>
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
