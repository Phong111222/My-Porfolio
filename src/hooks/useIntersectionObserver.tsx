import { useEffect, useRef } from 'react';

const useIntersectionObserver = <TRef extends Element>(
  options: IntersectionObserverInit,
  func: IntersectionObserverCallback
) => {
  const ref = useRef<TRef>(null);

  useEffect(() => {
    const intersection = new IntersectionObserver(func, options);

    ref.current && intersection.observe(ref.current);

    return () => {
      ref.current && intersection.unobserve(ref.current);
    };
  }, [options]);

  return {
    ref,
  };
};

export default useIntersectionObserver;
