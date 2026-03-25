
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import ScrollToTop from "./components/common/ScrollToTop";
import GoogleAnalytics from "./components/common/GoogleAnalytics";
import useSmoothScroll from "./hooks/use-smooth-scroll";

const queryClient = new QueryClient();
const Index = lazy(() => import("./pages/Index"));
const Services = lazy(() => import("./pages/Services"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const Contact = lazy(() => import("./pages/Contact"));
const Booking = lazy(() => import("./pages/Booking"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const Pricing = lazy(() => import("./pages/Pricing"));
const FreeAudit = lazy(() => import("./pages/FreeAudit"));

// Theme initialization component
const ThemeInitializer = () => {
  useEffect(() => {
    // Check for user preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
  
  return null;
};

const AppContent = () => {
  // Apply smooth scrolling behavior app-wide
  useSmoothScroll();
  
  return (
    <>
      <ThemeInitializer />
      <GoogleAnalytics />
      <ScrollToTop />
      <Toaster />
      <Sonner position="top-center" />
      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center">Loading...</div>
        }
      >
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/free-audit" element={<FreeAudit />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AppContent />
      </TooltipProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

export default App;
