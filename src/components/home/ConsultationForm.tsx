
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CalendlyWidget from "@/components/services/CalendlyWidget";

const ConsultationForm = () => {
  const [activeTab, setActiveTab] = useState("details");

  return (
    <section id="consultation" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Request a Consultation</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Schedule a free consultation with MOSIVANT experts using our online booking system.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-5">
              <div className="p-8 bg-black text-white md:col-span-2">
                <h3 className="text-2xl font-bold mb-6">How It Works</h3>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="bg-coral rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 mt-1">1</div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Choose a Service</h4>
                      <p className="text-gray-300">Select the type of consultation you need with our experts.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-coral rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 mt-1">2</div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Select a Time</h4>
                      <p className="text-gray-300">Browse available slots and choose a time that works for you.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-coral rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 mt-1">3</div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Confirm Details</h4>
                      <p className="text-gray-300">Fill in your information and we'll send you a confirmation.</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-8 pt-8 border-t border-gray-700">
                  <div className="flex items-center mb-4">
                    <Calendar className="mr-3 text-lemon" />
                    <span>Available Monday-Friday, 9am-5pm</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-3 text-lemon" />
                    <span>15-minute initial consultation</span>
                  </div>
                </div>
              </div>

              <div className="p-6 md:col-span-3">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid grid-cols-1 mb-6">
                    <TabsTrigger value="details">Book Your Consultation</TabsTrigger>
                  </TabsList>
                  <TabsContent value="details" className="space-y-4">
                    <div className="w-full min-h-[650px]">
                      <CalendlyWidget 
                        url="https://cal.com/faisal-qureshi-k3bw4r/15min" 
                        styles={{ height: "650px" }}
                      />
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;
