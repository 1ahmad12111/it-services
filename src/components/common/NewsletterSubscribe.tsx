
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

interface NewsletterSubscribeProps {
  buttonText?: string;
  placeholder?: string;
  darkMode?: boolean;
  className?: string;
}

const NewsletterSubscribe = ({
  buttonText = "Subscribe",
  placeholder = "Your email address",
  darkMode = false,
  className = "",
}: NewsletterSubscribeProps) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const submitToHubSpot = async (email: string) => {
    const portalId = "YOUR_HUBSPOT_PORTAL_ID"; // Replace with your actual HubSpot Portal ID
    const formId = "YOUR_HUBSPOT_FORM_ID"; // Replace with your actual HubSpot Form ID
    
    const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;
    
    const data = {
      fields: [
        {
          name: "email",
          value: email
        }
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title
      }
    };
    
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      
      return await response.json();
    } catch (error) {
      console.error("Error submitting to HubSpot:", error);
      throw error;
    }
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    if (!validateEmail(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      console.log("Subscribing email:", email);
      
      // Submit to HubSpot
      await submitToHubSpot(email);
      
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter!",
      });
      
      setEmail("");
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
      toast({
        title: "Subscription failed",
        description: "There was an error subscribing to the newsletter. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubscribe} className={`space-y-4 ${className}`}>
      <Input
        type="email"
        placeholder={placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={darkMode ? "bg-white/10 border-white/20 text-white placeholder:text-gray-300" : ""}
        disabled={isLoading}
      />
      <Button 
        type="submit" 
        className={`w-full ${darkMode ? "bg-white text-consulting-800 hover:bg-gray-100" : ""}`}
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : (
          buttonText
        )}
      </Button>
    </form>
  );
};

export default NewsletterSubscribe;
