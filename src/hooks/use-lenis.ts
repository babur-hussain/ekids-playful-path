import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

// Global Lenis instance reference
let globalLenis: Lenis | null = null;

export const useLenis = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Get the global Lenis instance
    lenisRef.current = globalLenis;
  }, []);

  return lenisRef.current;
};

// Function to set the global Lenis instance (called from LenisProvider)
export const setGlobalLenis = (lenis: Lenis | null) => {
  globalLenis = lenis;
};

// Utility functions for common Lenis operations
export const scrollTo = (target: string | number | HTMLElement, options?: any) => {
  if (globalLenis) {
    globalLenis.scrollTo(target, options);
  }
};

export const scrollToTop = (options?: any) => {
  if (globalLenis) {
    globalLenis.scrollTo(0, options);
  }
};

export const scrollToBottom = (options?: any) => {
  if (globalLenis) {
    globalLenis.scrollTo(document.body.scrollHeight, options);
  }
};
