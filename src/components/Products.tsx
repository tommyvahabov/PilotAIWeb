"use client";

import { motion } from "framer-motion";

const products = [
  {
    name: "QuizPilot",
    description:
      "Telegram-based quiz platform with AI-powered question generation, spaced repetition, and integrated payments for educators and learners.",
    status: "Live",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    name: "AutoPilot",
    description:
      "Smart automation platform that streamlines workflows and repetitive tasks using AI agents — saving time for teams and individuals.",
    status: "Coming Soon",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
      </svg>
    ),
  },
  {
    name: "Presenton",
    description:
      "AI-powered presentation service that transforms documents into polished slide decks in seconds — deployed and serving users on Railway.",
    status: "Live",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    name: "Haydovchilik",
    description:
      "Driving exam preparation app with FSRS-based spaced repetition, helping learners master traffic rules and pass their exams confidently.",
    status: "Live",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polygon points="10 8 16 12 10 16 10 8" />
      </svg>
    ),
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12 },
  }),
};

export default function Products() {
  return (
    <section id="products" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Our <span className="gradient-text">Products</span>
          </h2>
          <p className="mx-auto max-w-xl text-muted">
            From education to automation, our suite of AI-powered tools is
            designed to simplify complex tasks and unlock potential.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="group rounded-2xl border border-card-border bg-card p-8 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent-light transition-colors group-hover:bg-accent/20">
                  {product.icon}
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    product.status === "Live"
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "bg-amber-500/10 text-amber-400"
                  }`}
                >
                  {product.status}
                </span>
              </div>
              <h3 className="mb-2 text-xl font-semibold">{product.name}</h3>
              <p className="text-sm leading-relaxed text-muted">
                {product.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
