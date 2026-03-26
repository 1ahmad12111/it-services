import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type PortfolioProject = {
  name: string;
  description: string;
  techStack: string[];
  visual: string;
  gradient: string;
};

const projects: PortfolioProject[] = [
  {
    name: "Logistics SaaS Dashboard",
    description:
      "Unified dispatch, fleet, and SLA metrics into one live operations cockpit to replace manual weekly reporting.",
    techStack: ["React", "TypeScript", "PostgreSQL", "WebSockets"],
    visual: "🚚",
    gradient: "from-coral/90 via-coral/70 to-amber-300/80",
  },
  {
    name: "DTC Ecommerce Analytics",
    description:
      "Connected channel profitability, CAC/LTV, and inventory alerts so growth and ops teams could plan from one source.",
    techStack: ["Next.js", "Node.js", "Shopify API", "Chart.js"],
    visual: "📊",
    gradient: "from-slate-800 via-slate-700 to-slate-500",
  },
  {
    name: "Healthcare Scheduling Platform",
    description:
      "Built a scheduling workflow with reminder automations and open-slot visibility that cut no-shows across clinics.",
    techStack: ["React", "Express", "Twilio", "FullCalendar"],
    visual: "🏥",
    gradient: "from-emerald-700 via-teal-600 to-cyan-500",
  },
  {
    name: "Clinical Reminder Automation",
    description:
      "Added escalation logic for cancellations and follow-ups so front-desk teams spent less time on manual outreach.",
    techStack: ["TypeScript", "SendGrid", "Docker", "AWS"],
    visual: "⏱️",
    gradient: "from-indigo-700 via-blue-600 to-sky-500",
  },
];

const PortfolioSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-black">Our Work</h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              A quick look at delivery outcomes across logistics, ecommerce, and healthcare platforms.
            </p>
          </div>
          <Button asChild variant="outline" className="border-coral text-coral hover:bg-coral/5">
            <Link to="/case-studies">
              View Full Case Studies <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <Card
              key={project.name}
              className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow flex flex-col"
            >
              <div
                aria-hidden="true"
                className={`h-28 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-4xl`}
              >
                {project.visual}
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-black leading-tight">{project.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-full bg-black/5 px-3 py-1 text-xs font-medium text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="ghost" className="p-0 text-coral hover:text-coral/80 hover:bg-transparent" asChild>
                  <Link to="/case-studies">
                    Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
