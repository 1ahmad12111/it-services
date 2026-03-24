
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
  
  // Load the HubSpot script
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
    
    return () => {
      // No need to remove the script as it should be available globally once loaded
    };
  }, [toast]);
  
  // This effect will run once the script is loaded to process the form
  useEffect(() => {
    if (!scriptLoaded || !formContainerRef.current) return;
    
    // Insert CSS to hide all rich text within iframe before it renders
    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
      iframe[data-hubspot="true"] {
        opacity: 0;
        transition: opacity 0.3s ease;
      }
    `;
    document.head.appendChild(styleTag);
    
    // Function to process iframes when they appear
    const processIframes = () => {
      const iframesInContainer = document.querySelectorAll('iframe[data-hubspot="true"]');
      
      if (iframesInContainer && iframesInContainer.length > 0) {
        iframesInContainer.forEach(iframe => {
          const iframeElement = iframe as HTMLIFrameElement;
          
          // Wait for iframe content to load
          if (iframeElement.contentDocument && iframeElement.contentDocument.readyState === 'complete') {
            processIframeContent(iframeElement);
          } else {
            iframeElement.onload = () => {
              processIframeContent(iframeElement);
            };
          }
        });
      }
    };
    
    // Function to modify iframe content once loaded
    const processIframeContent = (iframe: HTMLIFrameElement) => {
      try {
        // Access iframe document
        const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
        if (!iframeDoc) return;
        
        // Find and remove rich text elements
        const richTextElements = iframeDoc.querySelectorAll('.hs-richtext');
        richTextElements.forEach(el => {
          el.remove();
        });
        
        // Also hide any HubSpot branding
        const brandingElements = iframeDoc.querySelectorAll('a[href^="https://app.hubspot.com/"]');
        brandingElements.forEach(el => {
          el.remove();
        });
        
        // Make iframe visible now that content has been modified
        iframe.style.opacity = '1';
        
      } catch (err) {
        console.error('Error modifying iframe content:', err);
      }
    };
    
    // Create observer to watch for iframe insertion
    const observer = new MutationObserver(() => {
      processIframes();
    });
    
    observer.observe(formContainerRef.current, {
      childList: true,
      subtree: true,
      attributes: true
    });
    
    // Initial check in case iframes already exist
    setTimeout(processIframes, 500);
    
    return () => {
      observer.disconnect();
      if (styleTag.parentNode) {
        styleTag.parentNode.removeChild(styleTag);
      }
    };
  }, [scriptLoaded]);

  return (
    <div className={`space-y-4 ${className}`}>
      {!hideTitle && (
        <div className="space-y-2">
          <h3 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
            Get Dev Insights That Actually Help
          </h3>
          <p className={darkMode ? "text-white/85" : "text-gray-600"}>
            Weekly tips on React, TypeScript, and scaling your tech stack. No spam.
          </p>
        </div>
      )}

      <div 
        ref={formContainerRef} 
        className={`hs-form-frame ${darkMode ? "hs-form-dark" : "hs-form-light"} rounded-md overflow-hidden`} 
        data-region="na2" 
        data-form-id="98e2fe9c-4e88-4be7-b886-6f73a286e4b6" 
        data-portal-id="242666894"
      >
        {/* HubSpot form will be rendered here */}
      </div>
      
      {/* Style the form */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Global styles for HubSpot forms */
        .hs-form-frame .hs-form {
          font-family: var(--font-sans, 'Inter', sans-serif) !important;
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
      `}} />
    </div>
  );
};

export default NewsletterSubscribe;
