
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CalendlyWidget from "@/components/services/CalendlyWidget";

const ConsultationForm = () => {
  const [activeTab, setActiveTab] = useState("details");
  
  return (
    <section id="consultation" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Schedule a Free Consultation</h2>
            <p className="text-lg text-gray-600">
              Take the first step towards optimizing your IT infrastructure. Book a no-obligation consultation with our experts.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full grid grid-cols-2 bg-gray-100">
                <TabsTrigger value="details" className="py-3 flex items-center justify-center gap-2">
                  <Calendar size={18} />
                  <span>Schedule a Call</span>
                </TabsTrigger>
                <TabsTrigger value="calendar" className="py-3 flex items-center justify-center gap-2">
                  <Clock size={18} />
                  <span>Quick Booking</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="details" className="p-6 space-y-4">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">Tell us about your project</h3>
                  <p className="text-gray-600 mb-4">Fill in some details so we can better prepare for our call</p>
                  
                  <Button
                    onClick={() => setActiveTab("calendar")}
                    className="bg-coral hover:bg-coral/90 text-black mt-4"
                    size="lg"
                  >
                    Continue to Booking
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="calendar" className="p-0 overflow-hidden">
                <div className="p-6 bg-white">
                  <CalendlyWidget 
                    url="https://cal.com/faisal-qureshi-k3bw4r/15min" 
                    styles={{ height: "650px" }}
                    prefill={{
                      name: "",
                      email: ""
                    }}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;
