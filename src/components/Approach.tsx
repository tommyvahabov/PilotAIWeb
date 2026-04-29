const principles = [
  {
    number: "01",
    title: "Ship narrow",
    body: "We pick small, well-defined problems and ship the whole product end-to-end. No abandoned features.",
  },
  {
    number: "02",
    title: "Design like it matters",
    body: "Interfaces people pay for need to feel that way. Typography, motion, micro-detail — we sweat all of it.",
  },
  {
    number: "03",
    title: "Build for overlooked markets",
    body: "The most interesting work is happening outside Silicon Valley. We build for users in Central Asia, MENA, and beyond.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="relative px-4 py-24 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="reveal-up mb-14 max-w-2xl">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            [ 02 ] &nbsp; Approach
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl">
            How we <em className="italic text-accent-text">build.</em>
          </h2>
        </div>

        <div className="grid gap-10 border-t border-card-border sm:grid-cols-3 sm:gap-8">
          {principles.map((p, i) => (
            <div
              key={p.number}
              className={`reveal-up pt-8 ${
                i === 1 ? "reveal-delay-100" : i === 2 ? "reveal-delay-200" : ""
              }`}
            >
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                {p.number}
              </p>
              <h3 className="mb-3 font-serif text-2xl">{p.title}</h3>
              <p className="text-sm leading-relaxed text-muted-strong">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
