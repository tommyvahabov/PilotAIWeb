"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-muted">
            Have a question, partnership idea, or want to learn more about our
            products? We&apos;d love to hear from you.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:hello@pilotai.systems"
              className="rounded-full bg-accent px-8 py-3 text-sm font-medium text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25"
            >
              hello@pilotai.systems
            </a>
            <a
              href="https://t.me/pilotai"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-card-border px-8 py-3 text-sm font-medium text-foreground transition-all hover:border-muted hover:bg-card"
            >
              Telegram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
