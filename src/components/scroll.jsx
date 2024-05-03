import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top whenever the pathname changes
  }, [pathname]);

  return null; // This component doesn't render any visible content
}

export default ScrollToTop;