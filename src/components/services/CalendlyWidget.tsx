
import React, { useEffect, useRef } from "react";

// Type definition for the component props
interface CalendlyWidgetProps {
  url: string;
  styles?: React.CSSProperties;
  prefill?: {
    name?: string;
    email?: string;
    customAnswers?: {
      [key: string]: string;
    };
  };
}

const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({ url, styles = {}, prefill }) => {
  const calRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Remove any existing Cal.com script to avoid conflicts
    const existingScript = document.querySelector('script[src="https://cal.com/embed.js"]');
    if (existingScript) {
      document.body.removeChild(existingScript);
    }
    
    // Add Cal.com script to the document
    const script = document.createElement("script");
    script.src = "https://cal.com/embed.js";
    script.async = true;
    script.onload = () => {
      // Force re-initialization after script loads
      if (calRef.current) {
        // This helps Cal.com detect and initialize the widget
        window.dispatchEvent(new Event('resize'));
        console.log("Cal.com script loaded successfully");
      }
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [url]); // Re-run when URL changes

  // Create URL with prefill data if provided
  const getCalUrl = () => {
    if (!prefill) return url;
    
    const queryParams = new URLSearchParams();
    
    if (prefill.name) {
      queryParams.append("name", prefill.name);
    }
    
    if (prefill.email) {
      queryParams.append("email", prefill.email);
    }
    
    if (prefill.customAnswers) {
      Object.entries(prefill.customAnswers).forEach(([key, value]) => {
        queryParams.append(`a1=${key}`, value);
      });
    }
    
    const paramString = queryParams.toString();
    if (paramString) {
      return `${url}&${paramString}`;
    }
    
    return url;
  };

  const finalUrl = getCalUrl();
  // Clean URL (remove any http/https prefix for data-cal-link)
  const calLink = finalUrl.replace(/https?:\/\/(cal\.com\/)?/i, '');

  return (
    <div
      ref={calRef}
      className="cal-inline-widget w-full"
      data-cal-link={calLink}
      data-cal-ui-embed="true"
      style={{ minWidth: "320px", ...styles }}
    ></div>
  );
};

export default CalendlyWidget;
