
import React, { useEffect, useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface NewsletterSubscribeProps {
  buttonText?: string;
  placeholder?: string;
  darkMode?: boolean;
  className?: string;
  hideTitle?: boolean;
}

const NewsletterSubscribe = ({
  darkMode = false,
  className = "",
  hideTitle = false,
}: NewsletterSubscribeProps) => {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const [scriptLoaded, setScriptLoaded] = useState(false);
  
  useEffect(() => {
    // Add HubSpot script only if not already loaded
    if (!document.querySelector('script[src="https://js-na2.hsforms.net/forms/embed/242666894.js"]')) {
      const script = document.createElement('script');
      script.src = "https://js-na2.hsforms.net/forms/embed/242666894.js";
      script.defer = true;
      script.onload = () => {
        console.log("HubSpot script loaded");
        setScriptLoaded(true);
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
    } else {
      setScriptLoaded(true);
    }
    
    // Clean up script when component unmounts
    return () => {
      // No need to remove the script as it should be available globally once loaded
    };
  }, [toast]);
  
  // Observer to detect when form is fully loaded and hide duplicate elements
  useEffect(() => {
    if (!scriptLoaded || !formContainerRef.current) return;
    
    // Use MutationObserver to detect when HubSpot form is fully rendered
    const observer = new MutationObserver((mutations) => {
      // Look for the duplicate headers and descriptions
      const titleElements = formContainerRef.current?.querySelectorAll('.hs-richtext h1, .hs-richtext p');
      if (titleElements && titleElements.length > 0) {
        titleElements.forEach(el => {
          if (hideTitle) {
            (el as HTMLElement).style.display = 'none';
          }
        });
        
        // Once we've handled the elements, disconnect the observer
        observer.disconnect();
      }
    });
    
    // Start observing
    observer.observe(formContainerRef.current, {
      childList: true,
      subtree: true
    });
    
    return () => observer.disconnect();
  }, [scriptLoaded, hideTitle]);

  return (
    <div className={`space-y-4 ${className}`}>
      <div 
        ref={formContainerRef} 
        className={`hs-form-frame ${darkMode ? "hs-form-dark" : "hs-form-light"} rounded-md overflow-hidden`} 
        data-region="na2" 
        data-form-id="98e2fe9c-4e88-4be7-b886-6f73a286e4b6" 
        data-portal-id="242666894"
      >
        {/* HubSpot form will be rendered here */}
      </div>
      
      {/* Use style jsx global to style the HubSpot form */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Global styles for HubSpot forms */
        .hs-form-frame .hs-form {
          font-family: var(--font-sans, 'Inter', sans-serif) !important;
        }
        
        /* Hide duplicate title and description if hideTitle is true */
        .hs-form-frame .hs-richtext {
          display: ${hideTitle ? 'none !important' : 'block'};
        }
        
        .hs-form-frame .hs-form-field label {
          font-family: var(--font-sans, 'Inter', sans-serif) !important;
          font-weight: 500 !important;
          margin-bottom: 0.5rem !important;
        }
        
        .hs-form-frame .hs-form-field input,
        .hs-form-frame .hs-form-field select,
        .hs-form-frame .hs-form-field textarea {
          width: 100% !important;
          padding: 0.75rem 1rem !important;
          border-radius: 0.375rem !important;
          border: 1px solid rgba(0, 0, 0, 0.1) !important;
          font-size: 0.875rem !important;
          transition: all 0.2s ease !important;
          margin-bottom: 1rem !important;
        }
        
        .hs-form-frame .hs-form-field input:focus,
        .hs-form-frame .hs-form-field select:focus,
        .hs-form-frame .hs-form-field textarea:focus {
          outline: none !important;
          border-color: rgba(23, 192, 200, 0.5) !important;
          box-shadow: 0 0 0 2px rgba(23, 192, 200, 0.25) !important;
        }
        
        .hs-form-frame .hs-submit .hs-button {
          width: 100% !important;
          padding: 0.75rem 1.5rem !important;
          background-color: #17c0c8 !important;
          color: white !important;
          border: none !important;
          border-radius: 0.375rem !important;
          font-weight: 500 !important;
          font-size: 0.875rem !important;
          cursor: pointer !important;
          transition: all 0.2s ease !important;
          text-align: center !important;
        }
        
        .hs-form-frame .hs-submit .hs-button:hover {
          background-color: #0d98a5 !important;
        }

        /* Remove HubSpot branding */
        .hs-form-frame .hs-richtext p:last-child {
          display: none !important;
        }
        
        /* Dark mode styles */
        .hs-form-dark .hs-form-field label {
          color: rgba(255, 255, 255, 0.9) !important;
        }
        
        .hs-form-dark .hs-form-field input,
        .hs-form-dark .hs-form-field select,
        .hs-form-dark .hs-form-field textarea {
          background-color: rgba(255, 255, 255, 0.1) !important;
          border-color: rgba(255, 255, 255, 0.2) !important;
          color: white !important;
        }
        
        .hs-form-dark .hs-form-field input::placeholder {
          color: rgba(255, 255, 255, 0.6) !important;
        }
        
        .hs-form-dark .hs-submit .hs-button {
          background-color: white !important;
          color: #13616c !important;
        }
        
        .hs-form-dark .hs-submit .hs-button:hover {
          background-color: rgba(255, 255, 255, 0.9) !important;
        }
        
        /* Light mode styles */
        .hs-form-light .hs-form-field label {
          color: rgba(0, 0, 0, 0.8) !important;
        }
        
        .hs-form-light .hs-submit .hs-button {
          background-color: #17c0c8 !important;
          color: white !important;
        }
        
        .hs-form-light .hs-submit .hs-button:hover {
          background-color: #0d98a5 !important;
        }

        /* Error messages */
        .hs-form-frame .hs-error-msgs {
          color: #ea384c !important;
          font-size: 0.75rem !important;
          margin-top: -0.5rem !important;
          margin-bottom: 0.5rem !important;
          padding: 0 !important;
          list-style-type: none !important;
        }

        /* Fix duplicate header text */
        .hs-form-frame .hs-form-field .hs-richtext h1,
        .hs-form-frame .hs-form-field .hs-richtext h2,
        .hs-form-frame .hs-form-field .hs-richtext h3,
        .hs-form-frame .hs-form-field .hs-richtext h4,
        .hs-form-frame .hs-form-field .hs-richtext h5,
        .hs-form-frame .hs-form-field .hs-richtext h6,
        .hs-form-frame .hs-form-field .hs-richtext p {
          display: ${hideTitle ? 'none !important' : 'block'};
        }
      `}} />
    </div>
  );
};

export default NewsletterSubscribe;
