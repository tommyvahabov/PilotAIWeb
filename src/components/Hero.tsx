function ProductPreview() {
  return (
    <div className="reveal-up reveal-delay-500 relative mx-auto w-full max-w-[20rem] sm:max-w-md lg:max-w-none">
      <div className="relative overflow-hidden rounded-lg border border-card-border bg-card shadow-xl shadow-foreground/5">
        <div className="flex items-center justify-between border-b border-card-border p-5">
          <div>
            <p className="text-xs font-medium uppercase text-muted">
              Product cockpit
            </p>
            <p className="font-serif text-xl">Pilot AI Systems</p>
          </div>
          <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600">
            Live
          </span>
        </div>

        <div className="divide-y divide-card-border">
          <div className="bg-cool-soft/80 p-5">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-card-border bg-card shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/quizpilot-logo.svg"
                  alt=""
                  width={44}
                  height={44}
                  className="block h-full w-full object-contain"
                />
              </div>
              <div className="min-w-0">
                <p className="font-medium">QuizPilot</p>
                <p className="text-xs text-muted-strong">Document to study set</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-2.5 w-full rounded-full bg-cool/20" />
              <div className="h-2.5 w-4/5 rounded-full bg-cool/15" />
              <div className="flex gap-2 pt-1">
                <span className="rounded-full bg-card px-2.5 py-1 text-[11px] font-medium text-cool">
                  Quizzes
                </span>
                <span className="rounded-full bg-card px-2.5 py-1 text-[11px] font-medium text-cool">
                  Flashcards
                </span>
              </div>
            </div>
          </div>

          <div className="bg-warm-bg/80 p-5">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-card-border bg-card shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/avtopilot-logo.png"
                  alt=""
                  width={44}
                  height={44}
                  className="block h-full w-full object-contain"
                />
              </div>
              <div className="min-w-0">
                <p className="font-medium">AvtoPilot</p>
                <p className="text-xs text-muted-strong">Driving theory coach</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              {["Mistakes", "Sprints", "Mocks"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-card-border bg-card px-2 py-2 text-[11px] font-medium text-accent-text"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:flex lg:min-h-[100svh] lg:items-center lg:pt-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #78716C 0.5px, transparent 0.5px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)] items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.82fr)]">
        <div className="min-w-0 text-center lg:text-left">
          <div className="reveal-up reveal-delay-200 mb-7 flex items-center justify-center gap-3 lg:justify-start">
            <span className="h-px w-8 bg-foreground/30" />
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-strong sm:text-xs">
              Pilot AI Systems · London
            </span>
          </div>

          <h1 className="reveal-up reveal-delay-350 mx-auto mb-7 max-w-[20rem] text-balance font-serif text-[2.5rem] leading-[1.04] sm:max-w-3xl sm:text-6xl lg:mx-0 lg:text-7xl">
            AI-native software for how the world{" "}
            <em className="italic text-accent-text">learns.</em>
          </h1>

          <p className="reveal-up reveal-delay-500 mx-auto mb-9 max-w-[18rem] text-base leading-relaxed text-muted-strong sm:max-w-xl sm:text-lg lg:mx-0">
            We design and build focused AI products for global education
            markets. A small team, shipping with care, for learners big
            platforms overlook.
          </p>

          <div className="reveal-up reveal-delay-650 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="https://t.me/quizpilot_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-12 w-full max-w-[14rem] items-center justify-center gap-2 rounded-full bg-foreground px-7 text-sm font-medium text-background transition-all hover:shadow-xl hover:shadow-foreground/10 sm:w-auto sm:max-w-none"
            >
              Try QuizPilot
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#products"
              className="flex min-h-12 w-full max-w-[14rem] items-center justify-center rounded-full border border-card-border bg-background/70 px-7 text-center text-sm font-medium text-foreground transition-all hover:border-foreground/20 hover:bg-card sm:w-auto sm:max-w-none"
            >
              Compare products
            </a>
          </div>

        </div>

        <ProductPreview />
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
