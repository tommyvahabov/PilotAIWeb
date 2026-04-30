"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  label: string;
  value: string;
  numeric?: { target: number; suffix?: string };
};

const stats: Stat[] = [
  { label: "Learners", value: "150,000+", numeric: { target: 150000, suffix: "+" } },
  { label: "Products live", value: "2", numeric: { target: 2 } },
  { label: "Markets", value: "UK · UZ" },
  { label: "Founded", value: "2025", numeric: { target: 2025 } },
];

const DURATION = 1400;
// cubic-bezier(0.22, 1, 0.36, 1) eased manually as easeOutCubic-ish
const ease = (t: number) => 1 - Math.pow(1 - t, 3);

function format(n: number) {
  return n.toLocaleString("en-US");
}

function CountUpNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(format(target) + suffix);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / DURATION, 1);
          const v = Math.floor(target * ease(t));
          setDisplay(format(v) + (t === 1 ? suffix : ""));
          if (t < 1) requestAnimationFrame(tick);
          else setDisplay(format(target) + suffix);
        };
        requestAnimationFrame(tick);
      },
      { rootMargin: "-10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix]);

  return <span ref={ref} className="tabular-nums">{display}</span>;
}

export default function Stats() {
  return (
    <section className="relative border-t border-card-border px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <dl className="grid grid-cols-2 divide-card-border sm:grid-cols-4 sm:divide-x">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-b border-card-border py-8 sm:border-b-0 sm:px-6 sm:first:pl-0 sm:last:pr-0"
            >
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                {stat.label}
              </dt>
              <dd className="mt-3 font-serif text-3xl leading-none text-foreground sm:text-4xl">
                {stat.numeric ? (
                  <CountUpNumber target={stat.numeric.target} suffix={stat.numeric.suffix} />
                ) : (
                  stat.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
