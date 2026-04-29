export default function Contact() {
  return (
    <section id="contact" className="relative bg-foreground px-4 py-20 text-background sm:px-6 lg:py-24">
      <div className="reveal-up mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase text-background/70">
            Contact
          </p>
          <h2 className="mb-4 max-w-2xl font-serif text-3xl sm:text-4xl">
            Bring a focused AI product or partnership idea to the table.
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-background/80">
            For support, partnerships, or product conversations, reach the Pilot
            AI Systems team directly.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <a
            href="mailto:support@pilotaisystems.com"
            className="inline-flex min-h-12 max-w-full items-center justify-center rounded-full bg-background px-7 text-sm font-semibold text-foreground transition-all hover:bg-background/90"
          >
            support@pilotaisystems.com
          </a>
          <a
            href="https://t.me/rahmonberdivahabov"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-background/25 px-7 text-sm font-semibold text-background transition-all hover:bg-background/10"
          >
            @rahmonberdivahabov
          </a>
        </div>
      </div>
    </section>
  );
}
