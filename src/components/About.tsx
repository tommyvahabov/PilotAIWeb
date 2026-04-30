const meta = [
  { label: "Location", value: "London" },
  { label: "Founded", value: "2025" },
  { label: "Team", value: "Small, remote" },
  { label: "Focus", value: "Edtech AI" },
];

export default function About() {
  return (
    <section id="about" className="relative border-y border-card-border bg-card px-4 py-24 sm:px-6 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            [ 03 ] &nbsp; The Company
          </p>
          <h2 className="mb-8 font-serif text-3xl sm:text-4xl">
            An independent AI product company, <em className="italic text-accent-text">shipping with care.</em>
          </h2>

          <dl className="border-y border-card-border">
            {meta.map((item) => (
              <div
                key={item.label}
                className="flex items-baseline justify-between gap-4 border-b border-card-border py-4 last:border-b-0"
              >
                <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  {item.label}
                </dt>
                <dd className="text-sm font-medium text-foreground">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="space-y-6 text-base leading-relaxed text-muted-strong sm:text-lg">
          <p>
            Pilot AI Systems is an independent product company building AI-native software
            for learners. We work in the spaces large platforms ignore —{" "}
            <em className="italic text-accent-text">overlooked markets, narrow problems, real outcomes.</em>
          </p>
          <p>
            We&apos;re a small team that prefers to ship the whole product, not a
            prototype. Every interface, every flow, every edge — sweated until it
            feels like something{" "}
            <em className="italic text-accent-text">you&apos;d pay for.</em>
          </p>
        </div>
      </div>
    </section>
  );
}
