import { getWindow } from '@/utils';
import { useEffect, useState } from 'react';

const breakpoint = 640;

const useIsMobile = () => {
  const checkForDevice = () =>
    typeof window !== 'undefined' && window.innerWidth < breakpoint;

  const [isMobile, setIsMobile] = useState(checkForDevice());

  useEffect(() => {
    const handlePageResized = () => {
      setIsMobile(checkForDevice());
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handlePageResized);
      window.addEventListener('orientationchange', handlePageResized);
      window.addEventListener('load', handlePageResized);
      window.addEventListener('reload', handlePageResized);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handlePageResized);
        window.removeEventListener('orientationchange', handlePageResized);
        window.removeEventListener('load', handlePageResized);
        window.removeEventListener('reload', handlePageResized);
      }
    };
  }, []);

  return {
    isMobile,
  };
};

export default useIsMobile;
