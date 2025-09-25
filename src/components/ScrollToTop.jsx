import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Multiple methods to ensure scroll to top works
    const scrollToTop = () => {
      // Method 1: Standard scrollTo
      window.scrollTo(0, 0);
      
      // Method 2: Fallback for document element
      document.documentElement.scrollTop = 0;
      
      // Method 3: Fallback for body element
      document.body.scrollTop = 0;
    };

    // Execute immediately
    scrollToTop();
    
    // Also execute after a small delay to handle any async rendering
    const timeoutId = setTimeout(scrollToTop, 10);
    
    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}
