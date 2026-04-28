"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 pb-28 pt-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-foreground px-8 py-16 text-center sm:px-16"
        >
          {/* Subtle warm glow on dark card */}
          <div className="pointer-events-none absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-accent/15 blur-[100px]" />

          <h2 className="relative mb-4 font-serif text-3xl tracking-tight text-background sm:text-4xl">
            Let&apos;s build something together
          </h2>
          <p className="relative mx-auto mb-10 max-w-md text-sm leading-relaxed text-background/60">
            Have a question, partnership idea, or just want to say hello?
            We&apos;d love to hear from you.
          </p>

          <div className="relative flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:hello@pilotai.systems"
              className="rounded-full bg-background px-8 py-3.5 text-sm font-medium text-foreground transition-all hover:bg-background/90 hover:shadow-lg"
            >
              hello@pilotai.systems
            </a>
            <a
              href="https://t.me/pilotai"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-background/20 px-8 py-3.5 text-sm font-medium text-background transition-all hover:bg-background/10"
            >
              Telegram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
