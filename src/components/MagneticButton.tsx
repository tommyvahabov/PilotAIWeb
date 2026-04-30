"use client";

import { ReactNode, useEffect, useRef } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  href: string;
  target?: string;
  rel?: string;
  radius?: number;
  maxTranslate?: number;
};

export default function MagneticButton({
  children,
  className = "",
  href,
  target,
  rel,
  radius = 80,
  maxTranslate = 6,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let active = false;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);

      if (dist > radius) {
        if (active) {
          active = false;
          cancelAnimationFrame(raf);
          raf = requestAnimationFrame(() => {
            el.style.transform = "";
          });
        }
        return;
      }

      active = true;
      const strength = 1 - dist / radius;
      const tx = (dx / radius) * maxTranslate * strength;
      const ty = (dy / radius) * maxTranslate * strength;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate(${tx}px, ${ty}px)`;
      });
    };

    const onLeave = () => {
      active = false;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = "";
      });
    };

    document.addEventListener("mousemove", onMove);
    window.addEventListener("blur", onLeave);

    return () => {
      document.removeEventListener("mousemove", onMove);
      window.removeEventListener("blur", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [radius, maxTranslate]);

  return (
    <a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      className={`magnetic-cta ${className}`}
    >
      {children}
    </a>
  );
}
