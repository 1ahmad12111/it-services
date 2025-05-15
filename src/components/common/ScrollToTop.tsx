
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component that will scroll the window to the top
 * whenever the pathname in the URL changes.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Use 'instant' instead of 'smooth' to avoid conflicts with other animations
    });
  }, [pathname]);
  
  return null; // This component doesn't render anything
};

export default ScrollToTop;
