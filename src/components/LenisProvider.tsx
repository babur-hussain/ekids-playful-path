import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { setGlobalLenis } from '@/hooks/use-lenis';

interface LenisProviderProps {
  children: React.ReactNode;
}

export const LenisProvider = ({ children }: LenisProviderProps) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis with optimized settings for smooth scrolling
    lenisRef.current = new Lenis({
      duration: 1.2, // Animation duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
      direction: 'vertical', // Scroll direction
      gestureDirection: 'vertical', // Gesture direction
      smooth: true, // Enable smooth scrolling
      mouseMultiplier: 1, // Mouse wheel sensitivity
      smoothTouch: false, // Disable smooth scrolling on touch devices for better performance
      touchMultiplier: 2, // Touch sensitivity
      infinite: false, // Disable infinite scroll
      autoRaf: true, // Automatically handle RAF
      rafPriority: 0, // RAF priority
      syncTouch: false, // Disable touch sync for better performance
    });

    // Get the Lenis instance for potential external access
    const lenis = lenisRef.current;
    
    // Set the global Lenis instance
    setGlobalLenis(lenis);

    // Optional: Add scroll event listener for debugging or additional functionality
    lenis.on('scroll', (e) => {
      // You can add custom scroll handling here if needed
      // console.log('Scroll event:', e);
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
