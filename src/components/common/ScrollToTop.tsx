
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component that will scroll the window to the top
 * whenever the pathname in the URL changes.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Use requestAnimationFrame to ensure the scroll happens after the browser has completed any pending layout calculations
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' // Use 'instant' instead of 'smooth' to avoid conflicts with other animations
      });
    };

    // Use requestAnimationFrame to handle the scroll on the next available frame
    // This helps avoid visual artifacts during navigation
    requestAnimationFrame(scrollToTop);
  }, [pathname]);
  
  return null; // This component doesn't render anything
};

export default ScrollToTop;
