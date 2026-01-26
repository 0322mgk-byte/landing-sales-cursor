"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface NumberTickerProps {
  from?: number;
  target: number;
  autoStart?: boolean;
  transition?: {
    duration?: number;
    type?: string;
    ease?: string;
  };
  onComplete?: () => void;
  onStart?: () => void;
  className?: string;
  decimalPlaces?: number;
  suffix?: string;
  prefix?: string;
}

const NumberTicker = ({
  from = 0,
  target,
  autoStart = true,
  transition = { duration: 2, type: "spring", ease: "easeOut" },
  onComplete,
  onStart,
  className = "",
  decimalPlaces = 0,
  suffix = "",
  prefix = "",
}: NumberTickerProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(from);
  const springValue = useSpring(motionValue, {
    duration: (transition.duration || 2) * 1000,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (isInView && autoStart && !hasStarted) {
      setHasStarted(true);
      onStart?.();
      motionValue.set(target);
    }
  }, [isInView, autoStart, hasStarted, motionValue, target, onStart]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        const formattedValue = decimalPlaces > 0
          ? latest.toFixed(decimalPlaces)
          : Math.round(latest).toString();
        ref.current.textContent = `${prefix}${formattedValue}${suffix}`;
      }
      if (Math.abs(latest - target) < 0.01) {
        onComplete?.();
      }
    });

    return () => unsubscribe();
  }, [springValue, target, decimalPlaces, suffix, prefix, onComplete]);

  return (
    <span ref={ref} className={className}>
      {prefix}{from}{suffix}
    </span>
  );
};

export default NumberTicker;
