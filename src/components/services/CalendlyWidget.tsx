
import React, { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

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
  // Extract the calLink from the URL
  const calLink = url.replace(/https?:\/\/(cal\.com\/)?/i, '');
  
  useEffect(() => {
    (async function() {
      const cal = await getCalApi({"namespace":"15min"});
      cal("ui", {
        "hideEventTypeDetails": true,
        "layout": "month_view"
      });
    })();
  }, []);

  return (
    <Cal
      namespace="15min"
      calLink={calLink}
      style={{
        width: "100%", 
        height: styles.height || "100%", 
        overflow: "scroll",
        borderRadius: "8px"
      }}
      config={{
        layout: "month_view",
        name: prefill?.name,
        email: prefill?.email,
        ...prefill?.customAnswers
      }}
    />
  );
};

export default CalendlyWidget;
