import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SEOMetaTags from "@/components/common/SEOMetaTags";
import { Button } from "@/components/ui/button";
import {
  ClipboardList,
  UserRound,
  Code2,
  Wrench,
  Megaphone,
  ShieldCheck,
  LineChart,
  ArrowRight,
  CheckCircle2,
  ArrowRightLeft,
} from "lucide-react";

const agentTeam = [
  {
    name: "Edith",
    role: "PM/Orchestrator",
    description: "Plans, dispatches, monitors",
    icon: ClipboardList,
  },
  {
    name: "Dhruv",
    role: "Senior Dev",
    description: "Architecture, complex features",
    icon: Code2,
  },
  {
    name: "Justin",
    role: "Junior Dev",
    description: "Bug fixes, tests, docs",
    icon: Wrench,
  },
  {
    name: "Zaid",
    role: "Marketing",
    description: "Content, outreach, SEO",
    icon: Megaphone,
  },
  {
    name: "Jessica",
    role: "QA",
    description: "Every line reviewed before shipping",
    icon: ShieldCheck,
  },
  {
    name: "Warren",
    role: "Finance",
    description: "Market analysis, cost optimization",
    icon: LineChart,
  },
];

const pipeline = [
  { label: "Task", icon: ClipboardList },
  { label: "Assign", icon: UserRound },
  { label: "Build", icon: Code2 },
  { label: "QA Review", icon: ShieldCheck },
  { label: "Ship", icon: ArrowRightLeft },
];

const outcomes = [
  "3x faster than traditional teams",
  "24/7 development (overnight employee)",
  "Every commit QA-reviewed",
  "Real-time dashboard tracking",
];

const HowWeBuild = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEOMetaTags
        title="How We Build | Mosivant"
        description="How Mosivant builds software with an AI-powered agent team and human quality control."
        keywords="Mosivant process, AI-powered development, software delivery, QA reviewed"
        canonicalUrl="https://www.gomosivant.com/how-we-build"
      />
      <Navbar />

      <section className="pt-32 pb-20 px-4 bg-zinc-950">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            How We Build - AI-Powered Development, Human Quality
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto">
            We run an AI-powered team with clear ownership, fast handoffs, and strict QA gates so
            you get reliable software delivery at startup speed.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Agent Team</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agentTeam.map((member) => (
              <article
                key={member.name}
                className="p-6 bg-zinc-950 rounded-xl border border-zinc-800 hover:border-lemon/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-lemon/10 flex items-center justify-center mb-4">
                  <member.icon className="h-6 w-6 text-lemon" />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-lemon font-semibold mb-2">{member.role}</p>
                <p className="text-zinc-400 text-sm">{member.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-zinc-950">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Pipeline</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {pipeline.map((step, index) => (
              <div key={step.label} className="flex items-center gap-4 md:block">
                <div className="flex-1 p-5 bg-black rounded-xl border border-zinc-800 text-center">
                  <step.icon className="h-8 w-8 text-lemon mx-auto mb-3" />
                  <p className="font-bold">{step.label}</p>
                </div>
                {index < pipeline.length - 1 && (
                  <ArrowRight className="h-5 w-5 text-zinc-500 shrink-0 md:hidden" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why This Matters</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {outcomes.map((item) => (
              <div key={item} className="flex items-start gap-3 p-5 bg-zinc-950 border border-zinc-800 rounded-xl">
                <CheckCircle2 className="h-5 w-5 text-lemon mt-0.5 shrink-0" />
                <p className="text-zinc-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-zinc-950">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">See it in action - Book a Call</h2>
          <Button
            className="bg-lemon hover:bg-lemon-light text-black font-bold rounded-md border border-black shadow-button"
            size="lg"
            asChild
          >
            <a
              href="https://cal.com/faisal-qureshi-k3bw4r/15min"
              target="_blank"
              rel="noreferrer"
            >
              See it in action - Book a Call <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowWeBuild;
