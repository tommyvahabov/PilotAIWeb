"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <div className="mb-10 rounded-3xl border border-card-border bg-warm-bg p-10 sm:p-14">
            <blockquote className="mb-6 font-serif text-2xl leading-snug tracking-tight sm:text-3xl">
              &ldquo;Smart tools shouldn&apos;t be reserved for large
              corporations — they should be available to{" "}
              <span className="gradient-text">every student, creator, and professional.</span>&rdquo;
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-card-border" />
              <span className="text-xs font-medium uppercase tracking-widest text-muted">
                Our philosophy
              </span>
              <div className="h-px flex-1 bg-card-border" />
            </div>
          </div>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-3">
          {[
            {
              title: "AI-first",
              desc: "Every product starts with artificial intelligence at its core, not as an afterthought.",
            },
            {
              title: "For real people",
              desc: "We build tools for students, teachers, and professionals — not just developers.",
            },
            {
              title: "Ship fast",
              desc: "From idea to production in weeks. We believe in learning from real users, fast.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-card-border bg-card p-6"
            >
              <h3 className="mb-2 font-serif text-lg">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
