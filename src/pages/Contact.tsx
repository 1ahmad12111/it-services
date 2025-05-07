
import React from "react";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
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
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

// Initialize EmailJS with your User ID (this should ideally be in an environment variable)
// In production, we would use environment variables for these values
const EMAILJS_USER_ID = "YOUR_USER_ID"; // Replace this with your actual EmailJS User ID
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID"; // Replace this with your actual EmailJS Service ID
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // Replace this with your actual EmailJS Template ID

// Initialize EmailJS
emailjs.init(EMAILJS_USER_ID);

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
        to_email: "info@gomosivant.com", // The recipient email address
      };

      if (process.env.NODE_ENV === 'production' || EMAILJS_USER_ID !== "YOUR_USER_ID") {
        // In production or with proper API keys, use EmailJS
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          EMAILJS_USER_ID
        );
        console.log("Email sent successfully!");
      } else {
        // In development without API keys, simulate sending
        console.log("Development mode or missing API keys - simulating email send");
        console.log("Email would be sent with:", templateParams);
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1500));
      }
      
      toast({
        title: "Message sent",
        description: "We'll get back to you as soon as possible.",
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Failed to send email:", error);
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly via phone.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-consulting-800 to-consulting-900 py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-consulting-100">
                Have a question or need assistance? Reach out to our team and we'll get back to you promptly.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              {/* Contact Card - Phone */}
              <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-consulting-50 text-consulting-600 mb-6">
                  <Phone size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">Our team is available to help during business hours</p>
                <a href="tel:+18189257116" className="text-consulting-600 font-medium hover:underline">
                  +1 (818)-925-7116
                </a>
              </div>

              {/* Contact Card - Email */}
              <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-consulting-50 text-consulting-600 mb-6">
                  <Mail size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">Send us an email and we'll respond within 24 hours</p>
                <a href="mailto:info@gomosivant.com" className="text-consulting-600 font-medium hover:underline">
                  info@gomosivant.com
                </a>
              </div>

              {/* Contact Card - Office */}
              <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-consulting-50 text-consulting-600 mb-6">
                  <MapPin size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                <p className="text-gray-600 mb-4">Our office is centrally located in Columbus</p>
                <address className="not-italic text-consulting-600 font-medium">
                  1153 Lantern Trail Ave, Unit 101<br />
                  Columbus, OH 43228
                </address>
              </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 text-green-500 mb-6">
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Received!</h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for contacting us. We'll respond to your inquiry as soon as possible.
                    </p>
                    <Button 
                      variant="outline"
                      onClick={() => {
                        setSubmitted(false);
                        setName("");
                        setEmail("");
                        setSubject("");
                        setMessage("");
                      }}
                    >
                      Send Another Message
                    </Button>
                  </div>
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
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <Send className="mr-2 h-5 w-5" />
                            Send Message
                          </span>
                        )}
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                <p className="text-xl text-gray-600">
                  Find answers to common questions about our services and process
                </p>
              </div>

              <div className="space-y-6">
                {/* FAQ Item 1 */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3">What are your typical business hours?</h3>
                  <p className="text-gray-600">
                    Our team is available Monday through Friday from 9:00 AM to 5:00 PM Pacific Time. 
                    For urgent matters, we offer emergency support outside of regular business hours.
                  </p>
                </div>

                {/* FAQ Item 2 */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3">How quickly can you respond to a service request?</h3>
                  <p className="text-gray-600">
                    We typically respond to all inquiries within 24 hours during business days. 
                    For existing clients with support contracts, we offer faster response times based on the severity of the issue.
                  </p>
                </div>

                {/* FAQ Item 3 */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3">Do you offer remote consultations?</h3>
                  <p className="text-gray-600">
                    Yes, we provide remote consultations via video conferencing tools. This allows us to serve clients globally 
                    while maintaining the same level of quality and expertise as in-person meetings.
                  </p>
                </div>

                {/* FAQ Item 4 */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3">What is your project onboarding process?</h3>
                  <p className="text-gray-600">
                    Our onboarding process begins with an initial consultation to understand your needs, followed by a 
                    detailed proposal and project plan. Once approved, we assign a dedicated team to your project and 
                    establish regular communication channels and progress reports.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
