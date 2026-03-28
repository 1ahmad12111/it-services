
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart2, Layers, LayoutDashboard, ShoppingCart, Wrench, Zap } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

const services = [
  {
    icon: <LayoutDashboard className="h-10 w-10 text-black" />,
    title: "Custom Dashboards",
    description: "Real-time ops dashboards that replace weekly spreadsheet exports. Your team gets one source of truth — KPIs, live data, and role-based views built for how you actually work.",
    link: "/services#dashboard-development"
  },
  {
    icon: <Zap className="h-10 w-10 text-black" />,
    title: "SaaS MVPs",
    description: "From idea to working product in 4–6 weeks. We scope it tight, build it fast, and ship something real users can actually test — not a prototype that lives in Figma forever.",
    link: "/services#saas-development"
  },
  {
    icon: <Layers className="h-10 w-10 text-black" />,
    title: "Internal Tools",
    description: "CRM add-ons, admin portals, workflow automation, approval systems. If your team is doing things manually that a custom tool could handle in seconds, we can build it.",
    link: "/services#internal-tools"
  },
  {
    icon: <ShoppingCart className="h-10 w-10 text-black" />,
    title: "E-commerce & Storefronts",
    description: "Custom Shopify themes, headless storefronts, or full-stack product platforms. Checkout optimization, product filtering, loyalty systems — built to convert, not just look nice.",
    link: "/services#ecommerce"
  },
  {
    icon: <BarChart2 className="h-10 w-10 text-black" />,
    title: "Analytics & Reporting",
    description: "Connect your data sources and surface what matters. We integrate with APIs, databases, and third-party tools so leaders can make decisions from one screen — not five tabs.",
    link: "/services#analytics"
  },
  {
    icon: <Wrench className="h-10 w-10 text-black" />,
    title: "Rescue & Rebuild",
    description: "Inherited a broken codebase? Stuck with a vendor who went silent? We audit what's there, fix what's fixable, and tell you honestly what needs to be rebuilt from scratch.",
    link: "/services#rescue"
  }
];

const ServiceOverview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">What We Build</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            React and TypeScript, start to finish. Every project is scoped, fixed-price, and shipped on time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-none shadow-md h-full bg-white">
              <CardHeader>
                <div className="p-2 rounded-full bg-lemon inline-flex mb-4 w-16 h-16 justify-center items-center">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-black">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col justify-between h-full">
                <CardDescription className="text-gray-600 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* View All Services button */}
        <div className="mt-12 text-center">
          <Button 
            className="bg-coral text-black hover:bg-coral/90 font-bold px-8 py-6 text-lg"
            size="lg"
            asChild
          >
            <RouterLink to="/services">
              See How We Work <ArrowRight className="ml-2 h-5 w-5" />
            </RouterLink>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
