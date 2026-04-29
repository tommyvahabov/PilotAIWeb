const stats = [
  { value: "150,000+", label: "Learners" },
  { value: "2", label: "Products live" },
  { value: "UK · UZ", label: "Markets" },
  { value: "2025", label: "Founded" },
];

export default function Stats() {
  return (
    <section className="relative border-t border-card-border px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <dl className="reveal-up grid grid-cols-2 divide-card-border sm:grid-cols-4 sm:divide-x">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-b border-card-border py-8 sm:border-b-0 sm:px-6 sm:first:pl-0 sm:last:pr-0"
            >
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                {stat.label}
              </dt>
              <dd className="mt-3 font-serif text-3xl leading-none text-foreground sm:text-4xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
