
import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Mail, Download } from "lucide-react";

interface ContactFormSuccessProps {
  name: string;
  email: string;
  subject: string;
  message: string;
  onReset: () => void;
}

const ContactFormSuccess = ({
  name,
  email,
  subject,
  message,
  onReset
}: ContactFormSuccessProps) => {
  
  // Generate mailto link with form data
  const generateMailtoLink = () => {
    const recipient = "info@gomosivant.com";
    const subjectLine = `Contact Form: ${subject || "General Inquiry"}`;
    const body = `Name: ${name}
Email: ${email}
Subject: ${subject || "General Inquiry"}

Message:
${message}

This message was sent from the contact form on your website.`;

    return `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(body)}`;
  };

  // Generate downloadable text file with form data
  const generateTextFile = () => {
    const content = `Contact Form Submission
====================
Date: ${new Date().toLocaleString()}

FROM: ${name} (${email})
SUBJECT: ${subject || "General Inquiry"}

MESSAGE:
${message}

====================
This message was generated from the contact form on your website.`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `contact-form-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
  
  return (
    <div className="text-center py-12">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 text-green-500 mb-6">
        <CheckCircle size={32} />
      </div>
      <h3 className="text-2xl font-bold mb-2">Your message is ready!</h3>
      <p className="text-gray-600 mb-6">
        To complete your submission, please choose one of the following options:
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          variant="outline"
          className="rounded-none"
          onClick={onReset}
        >
          Send Another Message
        </Button>
        <Button
          variant="default"
          onClick={() => window.location.href = generateMailtoLink()}
          className="bg-red-500 text-black hover:bg-red-600 rounded-none"
        >
          <Mail size={16} className="mr-2" />
          Open in Email App
        </Button>
        <Button 
          variant="secondary"
          onClick={generateTextFile}
          className="bg-red-500 text-black hover:bg-red-600 rounded-none"
        >
          <Download size={16} className="mr-2" />
          Download as Text
        </Button>
      </div>
    </div>
  );
};

export default ContactFormSuccess;
