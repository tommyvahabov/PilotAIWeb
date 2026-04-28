"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const products = [
  {
    name: "QuizPilot",
    tagline: "Learn smarter, not harder",
    description:
      "Telegram-based quiz platform with AI-powered question generation, spaced repetition, and integrated payments.",
    status: "Live",
    image: "/quizpilot-logo.png",
    color: "from-blue-500/10 to-blue-600/5",
  },
  {
    name: "AutoPilot",
    tagline: "Your AI-powered copilot",
    description:
      "Smart automation platform that streamlines workflows and repetitive tasks using intelligent AI agents.",
    status: "Coming Soon",
    image: "/autopilot-logo.png",
    color: "from-amber-500/10 to-orange-600/5",
  },
];

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
              <div className="relative p-7">
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
                <p className="text-sm leading-relaxed text-muted">
                  {product.description}
                </p>
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
