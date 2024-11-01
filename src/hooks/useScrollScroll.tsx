"use client";

import { RefObject, useState, useEffect } from "react";

interface ScrollScaleOptions {
  initialScale: number;
  finalScale: number;
  rootMargin?: string;
  ref: RefObject<HTMLElement>;
  thresholdSteps?: number;
}

const useScrollScale = ({
  initialScale = 1,
  finalScale = 2,
  rootMargin = "-50px 0px -100px 0px",
  ref,
  thresholdSteps = 11,
}: ScrollScaleOptions): number => {
  const [scale, setScale] = useState<number>(initialScale);

  useEffect(() => {
    const elementToObserve = ref.current;
    const thresholdArray = Array.from(
      { length: thresholdSteps },
      (_, i) => i / (thresholdSteps - 1)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const visibilityRatio = entry.intersectionRatio;
            const newScale =
              initialScale + visibilityRatio * (finalScale - initialScale);
            setScale(newScale);
          } else {
            setScale(initialScale);
          }
        });
      },
      {
        threshold: thresholdArray,
        rootMargin,
      }
    );

    if (elementToObserve) {
      observer.observe(elementToObserve);
    }

    return () => {
      if (elementToObserve) {
        observer.unobserve(elementToObserve);
      }
      observer.disconnect();
    };
  }, [initialScale, finalScale, rootMargin, ref, thresholdSteps]);

  return scale;
};

export default useScrollScale;
