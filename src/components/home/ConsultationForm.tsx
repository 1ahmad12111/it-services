
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Calendar, Clock } from "lucide-react";
import { toast } from "sonner";

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, service: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Consultation request submitted successfully! We'll contact you shortly.", {
      description: "Check your email for confirmation details.",
    });
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

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
                      <p className="text-consulting-200">Our team will contact you to arrange a convenient time for the consultation.</p>
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

              <div className="p-8 md:col-span-3">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="(123) 456-7890"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="service">Service Interested In</Label>
                      <Select value={formData.service} onValueChange={handleSelectChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="website-development">Website Development</SelectItem>
                          <SelectItem value="software-development">Software Development</SelectItem>
                          <SelectItem value="it-support">IT Support</SelectItem>
                          <SelectItem value="it-consulting">IT Consulting</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="message">Project Description & Goals</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project and what you're looking to achieve..."
                        value={formData.message}
                        onChange={handleChange}
                        className="min-h-[120px]"
                      />
                    </div>
                  </div>
                  <Button type="submit" className="mt-6 w-full bg-consulting-600 hover:bg-consulting-700">
                    Submit Request
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;
