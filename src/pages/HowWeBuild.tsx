
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SEOMetaTags from "@/components/common/SEOMetaTags";
import { Link } from "react-router-dom";
import {
  Brain,
  ClipboardList,
  Code2,
  ShieldCheck,
  Megaphone,
  Rocket,
  Zap,
  Clock,
  BadgeCheck,
  ArrowRight,
  Users,
  Bot,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const workflowSteps = [
  {
    step: "01",
    title: "Plan",
    description:
      "Every project starts with a clear scope. We break your requirements into tasks, define acceptance criteria, and build a roadmap — all before a single line of code.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Assign",
    description:
      "Tasks are routed to specialized AI agents — frontend, backend, QA, DevOps — each with deep context on your codebase and standards.",
    icon: Users,
  },
  {
    step: "03",
    title: "Build",
    description:
      "Agents write production-ready code in parallel, following your style guides and best practices. Human engineers review every pull request.",
    icon: Code2,
  },
  {
    step: "04",
    title: "QA",
    description:
      "Automated testing agents run unit, integration, and visual regression tests. Nothing ships without passing the full test suite.",
    icon: ShieldCheck,
  },
  {
    step: "05",
    title: "Ship",
    description:
      "Approved code is deployed through CI/CD pipelines. You get a live preview, a changelog, and full transparency into every change.",
    icon: Rocket,
  },
];

const agentRoles = [
  {
    name: "Architect",
    description:
      "Designs system architecture, breaks projects into tasks, and ensures technical decisions align with your goals.",
    icon: Brain,
  },
  {
    name: "Frontend Dev",
    description:
      "Builds pixel-perfect UIs with React, TypeScript, and Tailwind — responsive, accessible, and performant.",
    icon: Code2,
  },
  {
    name: "Backend Dev",
    description:
      "Implements APIs, database schemas, and business logic with a focus on security and scalability.",
    icon: Bot,
  },
  {
    name: "QA Engineer",
    description:
      "Writes and runs tests, catches regressions, and validates that every feature meets acceptance criteria.",
    icon: ShieldCheck,
  },
  {
    name: "DevOps",
    description:
      "Manages CI/CD pipelines, infrastructure, and deployments so your app is always live and reliable.",
    icon: Rocket,
  },
  {
    name: "Marketing",
    description:
      "Creates SEO-optimized content, landing pages, and blog posts that drive traffic and conversions.",
    icon: Megaphone,
  },
];

const benefits = [
  {
    title: "10x Faster Delivery",
    description:
      "Parallel agent workflows compress weeks of work into days. You get working software faster, with fewer bottlenecks.",
    icon: Zap,
  },
  {
    title: "Consistent Quality",
    description:
      "Every line of code follows the same standards. No variance between developers, no knowledge silos, no style drift.",
    icon: BadgeCheck,
  },
  {
    title: "24/7 Productivity",
    description:
      "Agents don't take breaks. Your project moves forward around the clock — overnight builds, weekend deploys, continuous progress.",
    icon: Clock,
  },
  {
    title: "Human Oversight",
    description:
      "AI writes the code, humans steer the ship. Every PR is reviewed, every decision is validated, every deployment is approved.",
    icon: Users,
  },
];

const HowWeBuild = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEOMetaTags
        title="How We Build | Mosivant"
        description="Discover how Mosivant uses AI coding agents to deliver software faster, with higher quality, and at lower cost than traditional dev shops."
        keywords="AI development, AI coding agents, software development, fast delivery, Mosivant"
        canonicalUrl="https://www.gomosivant.com/how-we-build"
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-zinc-950">
        <div className="container mx-auto max-w-5xl text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold uppercase tracking-wider text-black bg-lemon rounded-full">
            Our Process
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            How We Build
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-10">
            We pair specialized AI coding agents with human engineers to deliver
            production-ready software — faster, cheaper, and more consistently
            than any traditional dev shop.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-lemon hover:bg-lemon-light text-black font-bold rounded-md border border-black shadow-button"
              size="lg"
              asChild
            >
              <Link to="/booking">
                Book a Call <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              className="border-zinc-700 text-white hover:bg-zinc-800 rounded-md font-bold"
              size="lg"
              asChild
            >
              <Link to="/case-studies">See Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* The Mosivant Method */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Mosivant Method
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              A repeatable, transparent workflow that turns your requirements
              into deployed software — fast.
            </p>
          </div>

          <div className="space-y-8">
            {workflowSteps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start gap-6 p-6 bg-zinc-950 rounded-xl border border-zinc-800 hover:border-lemon/30 transition-colors"
              >
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-lemon/10 rounded-lg">
                  <step.icon className="h-7 w-7 text-lemon" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-lemon uppercase tracking-wider">
                      Step {step.step}
                    </span>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-zinc-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Agent Team */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Agent Team
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Each agent is a specialist — trained on best practices, your
              codebase conventions, and your project context.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agentRoles.map((agent, index) => (
              <div
                key={index}
                className="p-6 bg-black rounded-xl border border-zinc-800 hover:border-lemon/30 transition-colors"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-lemon/10 rounded-lg mb-4">
                  <agent.icon className="h-6 w-6 text-lemon" />
                </div>
                <h3 className="text-lg font-bold mb-2">{agent.name}</h3>
                <p className="text-zinc-400 text-sm">{agent.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Matters For You */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why This Matters For You
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              AI agents aren't a gimmick — they're a structural advantage that
              directly impacts your timeline, budget, and product quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-zinc-950 rounded-xl border border-zinc-800"
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-lemon/10 rounded-lg">
                  <benefit.icon className="h-6 w-6 text-lemon" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-zinc-400 text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Comparison */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Traditional Shop vs. Mosivant
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Same project. Same scope. Wildly different timelines.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional */}
            <div className="p-8 bg-black rounded-xl border border-zinc-800">
              <h3 className="text-xl font-bold mb-6 text-zinc-400">
                Traditional Dev Shop
              </h3>
              <ul className="space-y-4 text-sm">
                {[
                  "Week 1–2: Requirements gathering & scoping",
                  "Week 3–4: Design mockups & revisions",
                  "Week 5–8: Development sprints",
                  "Week 9–10: QA & bug fixes",
                  "Week 11–12: Deployment & handoff",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-zinc-600 flex-shrink-0" />
                    <span className="text-zinc-500">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-zinc-800">
                <p className="text-zinc-500 text-sm">Total timeline</p>
                <p className="text-2xl font-bold text-zinc-400">
                  10–12 weeks
                </p>
              </div>
            </div>

            {/* Mosivant */}
            <div className="p-8 bg-black rounded-xl border border-lemon/40">
              <h3 className="text-xl font-bold mb-6 text-lemon">
                Mosivant
              </h3>
              <ul className="space-y-4 text-sm">
                {[
                  "Day 1: Scope, plan, assign to agents",
                  "Day 2–3: Parallel build across frontend, backend, infra",
                  "Day 4: Automated QA + human review",
                  "Day 5: Deploy to staging, collect feedback",
                  "Day 6–7: Iterate and ship to production",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-lemon flex-shrink-0" />
                    <span className="text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-lemon/20">
                <p className="text-zinc-400 text-sm">Total timeline</p>
                <p className="text-2xl font-bold text-lemon">1–2 weeks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to build faster?
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
            Book a free consultation and see how our AI-powered team can deliver
            your next project in a fraction of the time.
          </p>
          <Button
            className="bg-lemon hover:bg-lemon-light text-black font-bold rounded-md border border-black shadow-button"
            size="lg"
            asChild
          >
            <Link to="/booking">
              Book a Call <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowWeBuild;
