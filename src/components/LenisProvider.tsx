import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { setGlobalLenis } from '@/hooks/use-lenis';

interface LenisProviderProps {
  children: React.ReactNode;
}

export const LenisProvider = ({ children }: LenisProviderProps) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis with highly optimized settings for smooth scrolling
    lenisRef.current = new Lenis({
      duration: 0.8, // Reduced animation duration for snappier feel
      easing: (t) => 1 - Math.pow(1 - t, 3), // Simpler cubic easing for better performance
      direction: 'vertical', // Scroll direction
      gestureDirection: 'vertical', // Gesture direction
      smooth: true, // Enable smooth scrolling
      mouseMultiplier: 0.8, // Reduced mouse wheel sensitivity for smoother control
      smoothTouch: false, // Disable smooth scrolling on touch devices for better performance
      touchMultiplier: 1.5, // Reduced touch sensitivity
      infinite: false, // Disable infinite scroll
      autoRaf: true, // Automatically handle RAF
      rafPriority: 1, // Higher RAF priority for smoother animation
      syncTouch: false, // Disable touch sync for better performance
      normalizeWheel: true, // Normalize wheel events for consistent behavior
      wheelMultiplier: 1, // Standard wheel multiplier
      touchInertiaMultiplier: 50, // Touch inertia for natural feel
    });

    // Get the Lenis instance for potential external access
    const lenis = lenisRef.current;
    
    // Set the global Lenis instance
    setGlobalLenis(lenis);

    // Optimized scroll event listener with throttling for better performance
    let ticking = false;
    lenis.on('scroll', (e) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Add any custom scroll handling here if needed
          // This is throttled to run only once per frame for better performance
          ticking = false;
        });
        ticking = true;
      }
    });

    // Cleanup function
    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
        setGlobalLenis(null);
      }
    };
  }, []);

  return <>{children}</>;
};
