
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send, Info } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import ContactFormSuccess from "./ContactFormSuccess";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({
        title: "Missing information",
        description: "Please fill out all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Log form data for development purposes
      console.log("Contact form submitted:", {
        name,
        email,
        subject: subject || "General Inquiry",
        message,
        timestamp: new Date().toISOString()
      });
      
      // Show next steps message
      toast({
        title: "Form completed",
        description: "Please choose an option below to send your message.",
      });
      
      setSubmitted(true);
    } catch (error) {
      console.error("Error processing form:", error);
      toast({
        title: "Error processing form",
        description: "Please try again or contact us directly via phone.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const resetForm = () => {
    setSubmitted(false);
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };
  
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 flex items-start">
          <Info className="text-blue-500 mr-2 mt-0.5 shrink-0" size={16} />
          <p className="text-sm text-blue-700">
            This form will help you prepare your message. After completing the form, 
            you'll need to select one of the provided options to send your message directly.
          </p>
        </div>
        
        {submitted ? (
          <ContactFormSuccess 
            name={name}
            email={email}
            subject={subject}
            message={message}
            onReset={resetForm}
          />
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name *
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject *
              </label>
              <Select 
                value={subject} 
                onValueChange={setSubject}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Inquiry</SelectItem>
                  <SelectItem value="service">Service Information</SelectItem>
                  <SelectItem value="quote">Request a Quote</SelectItem>
                  <SelectItem value="support">Technical Support</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Your Message *
              </label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Please provide details about your inquiry..."
                rows={6}
                required
              />
            </div>

            <div>
              <Button 
                type="submit" 
                className="w-full bg-consulting-600 hover:bg-consulting-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2 h-5 w-5" />
                    Continue
                  </span>
                )}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
