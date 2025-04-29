
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CalendarIntegration from "@/components/services/CalendarIntegration";

const ConsultationForm = () => {
  const [activeTab, setActiveTab] = useState("details");

  return (
    <section id="consultation" className="py-16 bg-consulting-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Request a Consultation</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fill out the form below to schedule a free consultation with our IT experts.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-5">
              <div className="p-8 bg-consulting-800 text-white md:col-span-2">
                <h3 className="text-2xl font-bold mb-6">How It Works</h3>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="bg-consulting-600 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 mt-1">1</div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Submit Your Details</h4>
                      <p className="text-consulting-200">Complete the consultation request form with your information and requirements.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-consulting-600 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 mt-1">2</div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Schedule a Meeting</h4>
                      <p className="text-consulting-200">Choose a convenient date and time for your consultation using our calendar system.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-consulting-600 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 mt-1">3</div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Receive Custom Solutions</h4>
                      <p className="text-consulting-200">Get personalized IT recommendations tailored to your business needs.</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-8 pt-8 border-t border-consulting-700">
                  <div className="flex items-center mb-4">
                    <Calendar className="mr-3 text-consulting-400" />
                    <span>Available Monday-Friday, 9am-5pm</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-3 text-consulting-400" />
                    <span>30-minute initial consultation</span>
                  </div>
                </div>
              </div>

              <div className="p-6 md:col-span-3">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid grid-cols-1 mb-6">
                    <TabsTrigger value="details">Book Your Consultation</TabsTrigger>
                  </TabsList>
                  <TabsContent value="details" className="space-y-4">
                    <CalendarIntegration />
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
