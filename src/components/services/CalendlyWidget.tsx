
import React, { useEffect } from "react";

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
  useEffect(() => {
    // Add Cal.com script to the document
    const script = document.createElement("script");
    script.src = "https://cal.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

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

  return (
    <div
      className="cal-inline-widget w-full"
      data-cal-link={finalUrl}
      data-cal-ui-embed="true"
      style={{ minWidth: "320px", ...styles }}
    ></div>
  );
};

export default CalendlyWidget;
