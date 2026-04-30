export default function Contact() {
  return (
    <section id="contact" className="relative bg-foreground px-4 py-20 text-background sm:px-6 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-background/70">
            Contact
          </p>
          <h2 className="mb-4 max-w-2xl font-serif text-3xl sm:text-4xl">
            Get in <em className="italic text-accent-light">touch.</em>
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-background/80">
            Use our products to study, prep, or learn — or talk to the team directly.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <a
            href="mailto:support@pilotaisystems.com"
            className="cta-primary inline-flex min-h-12 max-w-full items-center justify-center rounded-full bg-background px-7 text-sm font-semibold text-foreground hover:bg-background/90"
          >
            support@pilotaisystems.com
          </a>
          <a
            href="https://t.me/rahmonberdivahabov"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-secondary inline-flex min-h-12 items-center justify-center rounded-full border border-background/25 px-7 text-sm font-semibold text-background hover:bg-background/10"
          >
            @rahmonberdivahabov
          </a>
        </div>
      </div>
    </section>
  );
}
