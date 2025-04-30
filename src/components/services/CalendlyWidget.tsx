
import React, { useEffect } from "react";

interface CalendlyWidgetProps {
  url: string;
  styles?: React.CSSProperties;
}

const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({ url, styles = {} }) => {
  useEffect(() => {
    // Add Calendly script to the document
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div 
      className="calendly-inline-widget" 
      data-url={url}
      style={{ 
        minWidth: "320px", 
        height: "700px",
        ...styles 
      }} 
    />
  );
};

export default CalendlyWidget;
