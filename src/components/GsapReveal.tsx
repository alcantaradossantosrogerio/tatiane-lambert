"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin safely for SSR
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type AnimationType = "fade" | "fade-up" | "fade-left" | "fade-right" | "scale-up" | "stagger-items";

export default function GsapReveal({
  children,
  type = "fade-up",
  duration = 1.2,
  delay = 0,
  stagger = 0.15,
  startTrigger = "top 85%",
  className = "",
}: {
  children: React.ReactNode;
  type?: AnimationType;
  duration?: number;
  delay?: number;
  stagger?: number;
  startTrigger?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current) return;

    const el = ref.current;
    let anim: gsap.core.Tween | gsap.core.Timeline;

    // Target configuration with ScrollTrigger
    const targetVars: gsap.TweenVars = {
      opacity: 1,
      duration,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: startTrigger,
        toggleActions: "play none none none",
      },
    };

    if (type === "fade") {
      gsap.set(el, { opacity: 0 });
    } else if (type === "fade-up") {
      gsap.set(el, { y: 50, opacity: 0 });
      targetVars.y = 0;
    } else if (type === "fade-left") {
      gsap.set(el, { x: -50, opacity: 0 });
      targetVars.x = 0;
    } else if (type === "fade-right") {
      gsap.set(el, { x: 50, opacity: 0 });
      targetVars.x = 0;
    } else if (type === "scale-up") {
      gsap.set(el, { scale: 0.96, opacity: 0 });
      targetVars.scale = 1;
    } else if (type === "stagger-items") {
      const childrenElements = Array.from(el.children);
      gsap.set(childrenElements, { y: 40, opacity: 0 });
      
      const tween = gsap.to(childrenElements, {
        y: 0,
        opacity: 1,
        duration: duration,
        stagger: stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: startTrigger,
          toggleActions: "play none none none",
        }
      });
      
      return () => {
        tween.scrollTrigger?.kill();
      };
    }

    const tween = gsap.to(el, targetVars);
    return () => {
      tween.scrollTrigger?.kill();
    };
  }, [type, duration, delay, stagger, startTrigger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
