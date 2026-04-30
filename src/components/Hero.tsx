import MagneticButton from "./MagneticButton";

const headline = ["AI-native", "software", "for", "how", "the", "world"];
const accentWord = "learns.";

function ProductPreview() {
  return (
    <div className="hero-cockpit relative mx-auto w-full max-w-[20rem] sm:max-w-md lg:max-w-none">
      <div className="relative overflow-hidden rounded-lg border border-card-border bg-card shadow-xl shadow-foreground/5">
        <div className="flex items-center justify-between border-b border-card-border p-5">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              Today · In production
            </p>
            <p className="mt-1 font-serif text-xl">Pilot AI Systems</p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600">
            <span className="relative flex h-2 w-2 items-center justify-center">
              <span className="radar-ring absolute h-2 w-2 rounded-full bg-emerald-500" />
              <span className="radar-ring radar-ring--delayed absolute h-2 w-2 rounded-full bg-emerald-500" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
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
                <p className="text-xs text-muted-strong">Your Study Copilot</p>
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <p className="font-serif text-3xl tabular-nums leading-none text-foreground">
                124K
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                Learners
              </p>
            </div>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-cool">
              PDF · DOCX · Topic → 13 languages
            </p>
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
                <p className="text-xs text-muted-strong">Driving theory exam practice</p>
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <p className="font-serif text-3xl tabular-nums leading-none text-foreground">
                34K
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                Learners
              </p>
            </div>
            <p className="mt-3 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-accent-text">
              <svg viewBox="0 0 24 24" className="h-2.5 w-2.5" fill="currentColor" aria-hidden="true">
                <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              #1 in Education · UZ App Store
            </p>
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
          <div className="mb-7 flex items-center justify-center gap-3 lg:justify-start">
            <span className="hero-rule h-px w-8 bg-foreground/30" />
            <span className="hero-eyebrow-text font-mono text-[11px] uppercase tracking-[0.18em] text-muted-strong sm:text-xs">
              Pilot AI Systems · London
            </span>
          </div>

          <h1 className="mx-auto mb-7 max-w-[20rem] text-balance font-serif text-[2.5rem] leading-[1.04] sm:max-w-3xl sm:text-6xl lg:mx-0 lg:text-7xl">
            {headline.map((word, i) => (
              <span key={`${word}-${i}`} className="inline-block overflow-hidden align-baseline">
                <span className={`hero-word hero-word-${i + 1}`}>
                  {word}
                </span>
                {i < headline.length - 1 ? " " : " "}
              </span>
            ))}
            <span className="inline-block overflow-hidden align-baseline">
              <em className="hero-word-accent italic">{accentWord}</em>
            </span>
          </h1>

          <p className="hero-late mx-auto mb-9 max-w-[18rem] text-base leading-relaxed text-muted-strong sm:max-w-xl sm:text-lg lg:mx-0">
            We design and build focused AI products for global education
            markets. A small team, shipping with care, for learners big
            platforms overlook.
          </p>

          <div className="hero-late flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <MagneticButton
              href="https://t.me/quizpilot_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary group flex min-h-12 w-full max-w-[14rem] items-center justify-center gap-2 rounded-full bg-foreground px-7 text-sm font-medium text-background hover:shadow-xl hover:shadow-foreground/10 sm:w-auto sm:max-w-none"
            >
              Try QuizPilot
              <svg
                className="h-4 w-4 transition-transform duration-250 ease-out group-hover:translate-x-0.5"
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
            </MagneticButton>
            <a
              href="#products"
              className="cta-secondary flex min-h-12 w-full max-w-[14rem] items-center justify-center rounded-full border border-card-border bg-background/70 px-7 text-center text-sm font-medium text-foreground hover:border-foreground/20 hover:bg-card sm:w-auto sm:max-w-none"
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
