
import React, { useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";

interface NewsletterSubscribeProps {
  buttonText?: string;
  placeholder?: string;
  darkMode?: boolean;
  className?: string;
}

const NewsletterSubscribe = ({
  darkMode = false,
  className = "",
}: NewsletterSubscribeProps) => {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  useEffect(() => {
    // Add HubSpot script only if not already loaded
    if (!document.querySelector('script[src="https://js-na2.hsforms.net/forms/embed/242666894.js"]')) {
      const script = document.createElement('script');
      script.src = "https://js-na2.hsforms.net/forms/embed/242666894.js";
      script.defer = true;
      script.onload = () => {
        console.log("HubSpot script loaded");
      };
      script.onerror = () => {
        console.error("Error loading HubSpot script");
        toast({
          title: "Error",
          description: "Failed to load newsletter form. Please try again later.",
          variant: "destructive",
        });
      };
      document.head.appendChild(script);
    }
    
    // Clean up script when component unmounts
    return () => {
      // No need to remove the script as it should be available globally once loaded
    };
  }, [toast]);

  return (
    <div className={`space-y-4 ${className}`}>
      <div 
        ref={formContainerRef} 
        className={`hs-form-frame ${darkMode ? "hs-form-dark" : ""}`} 
        data-region="na2" 
        data-form-id="98e2fe9c-4e88-4be7-b886-6f73a286e4b6" 
        data-portal-id="242666894"
      >
        {/* HubSpot form will be rendered here */}
      </div>
      
      <style jsx>{`
        /* Additional styles to make HubSpot forms match your site design */
        :global(.hs-form-dark .hs-form-field label) {
          color: white !important;
        }
        
        :global(.hs-form-dark .hs-form-field input) {
          background-color: rgba(255, 255, 255, 0.1) !important;
          border-color: rgba(255, 255, 255, 0.2) !important;
          color: white !important;
        }
        
        :global(.hs-form-dark .hs-submit .hs-button) {
          background-color: white !important;
          color: #1a365d !important;
        }
      `}</style>
    </div>
  );
};

export default NewsletterSubscribe;
