
import { useEffect } from 'react';

/**
 * A hook that enables smooth scrolling behavior for the entire application
 * with optimizations to prevent visual artifacts
 */
export function useSmoothScroll() {
  useEffect(() => {
    // Store original scroll position
    let lastScrollPosition = window.scrollY;
    
    // Flag to track if we're in a programmatic scroll
    let isScrolling = false;
    
    // Handle programmatic scrolling
    const handleProgrammaticScroll = () => {
      isScrolling = true;
      // Reset the flag after animation completes
      setTimeout(() => {
        isScrolling = false;
      }, 100);
    };
    
    // Override the native scrollTo methods to track programmatic scrolling
    const originalScrollTo = window.scrollTo;
    window.scrollTo = function() {
      handleProgrammaticScroll();
      return originalScrollTo.apply(this, arguments);
    };

    // Clean up by restoring original functions
    return () => {
      window.scrollTo = originalScrollTo;
    };
  }, []);
}

export default useSmoothScroll;
