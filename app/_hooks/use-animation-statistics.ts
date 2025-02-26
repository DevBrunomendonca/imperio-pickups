import { useEffect, useRef, useState } from "react";

export interface CouterPros {
  endValue: number;
  start: boolean;
  className?: string;
}

export const useAnimationCounter = ({
  endValue,
  start,
  className,
}: CouterPros) => {
  const [count, setCount] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!start) return;

    let startValue = 0;
    const duration = 10000;
    const increment = Math.ceil(endValue / (duration / 16));

    const timer = setInterval(() => {
      startValue += increment;
      if (startValue >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(startValue);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [endValue, start]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return { count, sectionRef, isVisible, setIsVisible, className };
};
