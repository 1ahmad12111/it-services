
import React, { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Minus, Plus } from "lucide-react";

interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    id: "step-1",
    number: "01",
    title: "Consultation",
    description: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
  },
  {
    id: "step-2",
    number: "02",
    title: "Research and Strategy Development",
    description: "Our team conducts thorough research on your industry, competitors, and target market to develop a comprehensive strategy tailored to your specific business needs and goals."
  },
  {
    id: "step-3",
    number: "03",
    title: "Implementation",
    description: "Once the strategy is approved, our team begins implementing the solutions using best practices and cutting-edge technologies to ensure optimal results for your business."
  },
  {
    id: "step-4",
    number: "04",
    title: "Monitoring and Optimization",
    description: "We continuously monitor key performance indicators and make data-driven adjustments to optimize results, ensuring your technology solutions perform at their highest potential."
  },
  {
    id: "step-5",
    number: "05",
    title: "Reporting and Communication",
    description: "Transparent reporting and regular communication keep you informed about progress, results, and any strategic adjustments needed to achieve and exceed your business objectives."
  },
  {
    id: "step-6",
    number: "06",
    title: "Continual Improvement",
    description: "Technology and markets evolve, so we continuously refine our approach based on performance data, emerging technologies, and changing market conditions to ensure long-term success."
  }
];

const WorkingProcess = () => {
  const [openStep, setOpenStep] = useState<string>("step-1");

  return (
    <section className="py-16 bg-positivus-light">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <div className="inline-block bg-positivus-green px-4 py-2 rounded-md mb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-positivus-dark">Our Working Process</h2>
            </div>
            <p className="text-lg text-positivus-dark">Step-by-Step Guide to Achieving Your Business Goals</p>
          </div>

          <Accordion
            type="single"
            collapsible
            value={openStep}
            onValueChange={setOpenStep}
            className="space-y-4"
          >
            {processSteps.map((step) => (
              <AccordionItem
                key={step.id}
                value={step.id}
                className={`rounded-xl border ${
                  openStep === step.id
                    ? "bg-positivus-green border-positivus-green"
                    : "bg-white border-gray-200"
                } overflow-hidden`}
              >
                <AccordionTrigger className="px-8 py-6 hover:no-underline">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-6">
                      <span className="text-3xl md:text-4xl font-bold">
                        {step.number}
                      </span>
                      <h3 className="text-xl md:text-2xl font-medium text-left">
                        {step.title}
                      </h3>
                    </div>
                    <div className="rounded-full w-10 h-10 flex items-center justify-center border border-positivus-dark">
                      {openStep === step.id ? (
                        <Minus className="h-5 w-5" />
                      ) : (
                        <Plus className="h-5 w-5" />
                      )}
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 pt-0 text-base">
                  <div className="ml-16 border-t border-positivus-dark/20 pt-4">
                    <p>{step.description}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
