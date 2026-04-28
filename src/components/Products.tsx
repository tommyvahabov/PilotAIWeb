"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Platform = "telegram" | "appstore" | "playstore";

const products: {
  name: string;
  tagline: string;
  description: string;
  status: "Live" | "Coming Soon";
  image: string;
  color: string;
  platforms: { type: Platform; href: string }[];
}[] = [
  {
    name: "QuizPilot",
    tagline: "Turn any document into a study tool",
    description:
      "Drop in a PDF, DOCX, or spreadsheet and QuizPilot generates AI-powered quizzes, flashcards, and slides in seconds. Built for students and teachers, with multilingual support and group-quiz mode.",
    status: "Live",
    image: "/quizpilot-logo.png",
    color: "from-blue-500/10 to-blue-600/5",
    platforms: [
      { type: "telegram", href: "https://t.me/quizpilot_bot" },
      { type: "appstore", href: "https://apps.apple.com/us/app/quizpilot-your-study-copilot/id6760037594" },
    ],
  },
  {
    name: "AvtoPilot",
    tagline: "Pass your driving exam, faster",
    description:
      "Spaced-repetition coach for the Uzbekistan driver's license theory test. Daily sprints, mistake-killer mode, and full mock exams — in Uzbek, Russian, and English.",
    status: "Live",
    image: "/avtopilot-logo.png",
    color: "from-amber-500/10 to-orange-600/5",
    platforms: [
      { type: "telegram", href: "https://t.me/AvtoPilotQuiz_bot" },
      { type: "appstore", href: "https://apps.apple.com/gb/app/avtopilot-prava-oling/id6759839061" },
      { type: "playstore", href: "https://play.google.com/store/apps/details?id=com.avtopilot.app" },
    ],
  },
];

const platformLabel: Record<Platform, string> = {
  telegram: "Telegram",
  appstore: "App Store",
  playstore: "Google Play",
};

function PlatformIcon({ type }: { type: Platform }) {
  if (type === "telegram") {
    return (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
        <path d="M21.94 4.51c.27-1.06-.69-1.96-1.7-1.55L2.4 9.96c-1.13.45-1.06 2.07.1 2.42l3.97 1.21 1.51 4.99c.16.52.81.69 1.2.32l2.32-2.16 4.07 3c.66.49 1.6.13 1.78-.66l3.59-14.57zM8.92 14.06l-.78 3.74-1.05-3.43 9.93-7.13-8.1 6.82z" />
      </svg>
    );
  }
  if (type === "appstore") {
    return (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
        <path d="M17.05 12.04c-.03-2.79 2.28-4.13 2.39-4.2-1.3-1.9-3.33-2.16-4.05-2.19-1.72-.18-3.36 1.01-4.24 1.01-.88 0-2.22-.99-3.66-.96-1.88.03-3.62 1.09-4.59 2.78-1.96 3.39-.5 8.42 1.41 11.18.93 1.35 2.05 2.86 3.49 2.81 1.4-.06 1.93-.91 3.62-.91s2.17.91 3.65.88c1.51-.03 2.46-1.37 3.38-2.73 1.07-1.56 1.51-3.07 1.54-3.15-.03-.01-2.95-1.13-2.98-4.52zM14.46 4.13c.78-.94 1.3-2.25 1.16-3.55-1.12.05-2.47.74-3.27 1.69-.72.83-1.35 2.16-1.18 3.43 1.25.1 2.52-.63 3.29-1.57z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
      <path d="M3.61 1.81c-.31.32-.49.81-.49 1.45v17.48c0 .64.18 1.13.49 1.45l.06.06 9.78-9.78v-.18L3.67 1.75l-.06.06zm13.06 13.06l-3.26-3.26v-.36l3.26-3.26.07.04 3.86 2.19c1.1.62 1.1 1.65 0 2.27l-3.86 2.19-.07.04zm-.6.59L5.95 5.74l.61-.61 9.83 5.62-.32.71zm0 1.08l.32.71-9.83 5.62-.61-.61 10.12-5.72z" />
    </svg>
  );
}

export default function Products() {
  return (
    <section id="products" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="mb-3 font-serif text-3xl tracking-tight sm:text-4xl">
            What we&apos;re building
          </h2>
          <p className="max-w-lg text-muted">
            AI-powered tools designed for real people solving real problems.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-card-border bg-card transition-all hover:shadow-lg hover:shadow-foreground/5"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 transition-opacity group-hover:opacity-100`} />
              <div className="relative flex h-full flex-col p-7">
                <div className="mb-5 flex items-start justify-between">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={64}
                    height={64}
                    className="rounded-2xl shadow-sm"
                  />
                  <span
                    className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${
                      product.status === "Live"
                        ? "bg-emerald-500/10 text-emerald-600"
                        : "bg-amber-500/10 text-amber-600"
                    }`}
                  >
                    {product.status}
                  </span>
                </div>
                <h3 className="mb-1 font-serif text-xl">{product.name}</h3>
                <p className="mb-3 text-sm font-medium text-accent">{product.tagline}</p>
                <p className="mb-5 text-sm leading-relaxed text-muted">
                  {product.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {product.platforms.map((p) => (
                    <a
                      key={p.type}
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-card-border bg-warm-bg px-3 py-1.5 text-xs font-medium text-foreground/80 transition-all hover:border-foreground/20 hover:bg-card hover:text-foreground"
                    >
                      <PlatformIcon type={p.type} />
                      {platformLabel[p.type]}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center text-sm text-muted"
        >
          More products in the pipeline. Stay tuned.
        </motion.p>
      </div>
    </section>
  );
}
