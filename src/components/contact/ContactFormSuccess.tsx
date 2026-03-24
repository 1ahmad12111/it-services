
import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

interface ContactFormSuccessProps {
  onReset: () => void;
}

const ContactFormSuccess = ({ onReset }: ContactFormSuccessProps) => {
  return (
    <div className="text-center py-12">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 text-green-500 mb-6">
        <CheckCircle size={32} />
      </div>
      <h3 className="text-2xl font-bold mb-2">Thank you for reaching out!</h3>
      <p className="text-gray-600 mb-6">
        We will get back to you within 24 hours.
      </p>
      <Button
        variant="outline"
        onClick={onReset}
      >
        Send Another Message
      </Button>
    </div>
  );
};

export default ContactFormSuccess;
