import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();
const GA_SCRIPT_ID = "ga4-gtag-script";
const GA_INLINE_SCRIPT_ID = "ga4-gtag-inline-script";

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (!measurementId) {
      return;
    }

    if (!document.getElementById(GA_SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = GA_SCRIPT_ID;
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      document.head.appendChild(script);
    }

    if (!document.getElementById(GA_INLINE_SCRIPT_ID)) {
      const inlineScript = document.createElement("script");
      inlineScript.id = GA_INLINE_SCRIPT_ID;
      inlineScript.textContent = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = window.gtag || gtag;
        gtag('js', new Date());
        gtag('config', '${measurementId}', { send_page_view: false });
      `;
      document.head.appendChild(inlineScript);
    }

    if (typeof window.gtag !== "function") {
      window.dataLayer = window.dataLayer || [];
      window.gtag = (...args: unknown[]) => {
        window.dataLayer.push(args);
      };
      window.gtag("js", new Date());
      window.gtag("config", measurementId, { send_page_view: false });
    }
  }, []);

  useEffect(() => {
    if (!measurementId || typeof window.gtag !== "function") {
      return;
    }

    window.gtag("config", measurementId, {
      page_path: `${location.pathname}${location.search}${location.hash}`,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location]);

  return null;
};

export default GoogleAnalytics;
