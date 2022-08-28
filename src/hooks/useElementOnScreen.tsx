import React, { useEffect, useRef, useState } from "react";

const useElementOnScreen = (options: any) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callback: IntersectionObserverCallback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    }

  }, [containerRef, options]);

  return [containerRef, isVisible];
}

export default useElementOnScreen;