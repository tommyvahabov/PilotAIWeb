"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "4+", label: "Products" },
  { value: "AI", label: "Powered" },
  { value: "24/7", label: "Available" },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Built to make{" "}
              <span className="gradient-text">intelligence accessible</span>
            </h2>
            <p className="mb-6 text-muted leading-relaxed">
              Pilot AI Systems is on a mission to democratize artificial
              intelligence. We believe that smart tools shouldn&apos;t be
              reserved for large corporations — they should be available to
              every student, creator, and professional.
            </p>
            <p className="text-muted leading-relaxed">
              From quiz generation and exam preparation to automated
              presentations and workflow optimization, every product we build
              starts with a simple question: how can AI make this easier?
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-3 gap-6"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center rounded-2xl border border-card-border bg-card p-6 text-center"
              >
                <span className="mb-1 text-3xl font-bold text-accent-light">
                  {stat.value}
                </span>
                <span className="text-xs text-muted">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
