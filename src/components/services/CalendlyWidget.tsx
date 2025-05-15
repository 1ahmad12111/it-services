
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
        "hideEventTypeDetails": false,
        "layout": "month_view",
        "styles": {
          "branding": {
            "brandColor": "#ea384c",
          },
        },
        "theme": "light"
      });
    })();
  }, []);

  return (
    <div className="w-full scrollbar-hide rounded-lg overflow-hidden bg-white shadow-inner">
      <Cal
        namespace="15min"
        calLink={calLink}
        style={{
          width: "100%",
          height: styles.height || "100%",
          minHeight: "650px",
          overflow: "auto",
          borderRadius: styles.borderRadius || "8px",
          border: "none",
        }}
        config={{
          layout: "month_view",
          name: prefill?.name,
          email: prefill?.email,
          ...prefill?.customAnswers
        }}
      />
    </div>
  );
};

export default CalendlyWidget;
