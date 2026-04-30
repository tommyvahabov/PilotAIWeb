type Platform = "telegram" | "appstore" | "playstore";

type Product = {
  name: string;
  tagline: string;
  description: string;
  bestFor: string;
  status: "Live" | "Coming Soon";
  accolade?: string;
  image: string;
  tone: "blue" | "amber";
  primaryAction: { label: string; href: string };
  features: string[];
  details: { label: string; value: string }[];
  platforms: { type: Platform; href: string }[];
};

const products: Product[] = [
  {
    name: "QuizPilot",
    tagline: "Turn documents into study sets",
    description:
      "Upload a PDF or DOCX, or type any topic — AI generates quizzes, flashcards, and slides in seconds, with an explanation for every answer.",
    bestFor: "Students, teachers, and teams that need quick, personalised study material from any source.",
    status: "Live",
    image: "/quizpilot-logo.svg",
    tone: "blue",
    primaryAction: { label: "Try QuizPilot", href: "https://t.me/quizpilot_bot" },
    features: [
      "AI quizzes from documents or topics",
      "SuperFocus mode — spaced repetition for wrong answers",
      "Group Quiz — live competition with leaderboard",
    ],
    details: [
      { label: "Input", value: "PDF, DOCX, topic" },
      { label: "Modes", value: "Quiz, cards, slides" },
      { label: "Languages", value: "13 supported" },
    ],
    platforms: [
      { type: "telegram", href: "https://t.me/quizpilot_bot" },
      { type: "appstore", href: "https://apps.apple.com/us/app/quizpilot-your-study-copilot/id6760037594" },
    ],
  },
  {
    name: "AvtoPilot",
    tagline: "Driving theory exam practice",
    description:
      "An AI-driven exam-prep coach for Uzbekistan's driving theory test — with weak-question repetition, live multiplayer battles, and daily sprints.",
    bestFor: "Learners preparing for Uzbekistan's driving theory test in Uzbek or Russian.",
    status: "Live",
    accolade: "#1 in Education · UZ App Store",
    image: "/avtopilot-logo.png",
    tone: "amber",
    primaryAction: { label: "Start AvtoPilot", href: "https://t.me/AvtoPilotQuiz_bot" },
    features: [
      "AI-driven weak-question repetition",
      "Battle mode — live 5-player competition",
      "1,220+ questions, 122 official tickets",
    ],
    details: [
      { label: "Exam", value: "Driving theory" },
      { label: "Practice", value: "Sprints, mocks, battle" },
      { label: "Languages", value: "Uzbek, Russian" },
    ],
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

const toneStyles = {
  blue: {
    panel: "bg-cool-soft",
    text: "text-cool",
    border: "border-cool/15",
  },
  amber: {
    panel: "bg-warm-bg",
    text: "text-accent-text",
    border: "border-accent/20",
  },
};

function PlatformIcon({ type }: { type: Platform }) {
  if (type === "telegram") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    );
  }
  if (type === "appstore") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M8.8086 14.9194l6.1107-11.0368c.0837-.1513.1682-.302.2437-.4584.0685-.142.1267-.2854.1646-.4403.0803-.3259.0588-.6656-.066-.9767-.1238-.3095-.3417-.5678-.6201-.7355a1.4175 1.4175 0 0 0-.921-.1924c-.3207.043-.6135.1935-.8443.4288-.1094.1118-.1996.2361-.2832.369-.092.1463-.175.2979-.259.4492l-.3864.6979-.3865-.6979c-.0837-.1515-.1667-.303-.2587-.4492-.0837-.1329-.1739-.2572-.2835-.369-.2305-.2353-.5233-.3857-.844-.429a1.4181 1.4181 0 0 0-.921.1926c-.2784.1677-.4964.426-.6203.7355-.1246.311-.1461.6508-.066.9767.038.155.0962.2984.1648.4403.0753.1564.1598.307.2437.4584l1.248 2.2543-4.8625 8.7825H2.0295c-.1676 0-.3351-.0007-.5026.0092-.1522.009-.3004.0284-.448.0714-.3108.0906-.5822.2798-.7783.548-.195.2665-.3006.5929-.3006.9279 0 .3352.1057.6612.3006.9277.196.2683.4675.4575.7782.548.1477.043.296.0623.4481.0715.1675.01.335.009.5026.009h13.0974c.0171-.0357.059-.1294.1-.2697.415-1.4151-.6156-2.843-2.0347-2.843zM3.113 18.5418l-.7922 1.5008c-.0818.1553-.1644.31-.2384.4705-.067.1458-.124.293-.1611.452-.0785.3346-.0576.6834.0645 1.0029.1212.3175.3346.583.607.7549.2727.172.5891.2416.9013.1975.3139-.044.6005-.1986.8263-.4402.1072-.1148.1954-.2424.2772-.3787.0902-.1503.1714-.3059.2535-.4612L6 19.4636c-.0896-.149-.9473-1.4704-2.887-.9218m20.5861-3.0056a1.4707 1.4707 0 0 0-.779-.5407c-.1476-.0425-.2961-.0616-.4483-.0705-.1678-.0099-.3352-.0091-.503-.0091H18.648l-4.3891-7.817c-.6655.7005-.9632 1.485-1.0773 2.1976-.1655 1.0333.0367 2.0934.546 3.0004l5.2741 9.3933c.084.1494.167.299.2591.4435.0837.131.1739.2537.2836.364.231.2323.5238.3809.8449.4232.3192.0424.643-.0244.9217-.1899.2784-.1653.4968-.4204.621-.7257.1246-.3072.146-.6425.0658-.9641-.0381-.1529-.0962-.2945-.165-.4346-.0753-.1543-.1598-.303-.2438-.4524l-1.216-2.1662h1.596c.1677 0 .3351.0009.5029-.009.1522-.009.3007-.028.4483-.0705a1.4707 1.4707 0 0 0 .779-.5407A1.5386 1.5386 0 0 0 24 16.452a1.539 1.539 0 0 0-.3009-.9158Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="mt-0.5 h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function Products() {
  return (
    <section id="products" className="relative px-4 py-24 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            [ 01 ] &nbsp; Products
          </p>
          <h2 className="mb-4 font-serif text-3xl sm:text-4xl">
            Two products. <em className="italic text-accent-text">One company.</em>
          </h2>
          <p className="text-base leading-relaxed text-muted-strong">
            Each product is built around a specific learning job, with live distribution
            through the channels users already open every day.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {products.map((product, i) => {
            const tone = toneStyles[product.tone];

            return (
              <article
                key={product.name}
                className="product-card flex h-full flex-col overflow-hidden rounded-lg border border-card-border bg-card shadow-sm shadow-foreground/5"
              >
                <div className={`border-b ${tone.border} ${tone.panel} p-6`}>
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div className="flex min-w-0 items-center gap-4">
                      <div className="product-card-logo flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-card-border bg-card shadow-sm">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={product.image}
                          alt=""
                          width={64}
                          height={64}
                          className="block h-full w-full object-contain"
                        />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-serif text-2xl">{product.name}</h3>
                        <p className={`mt-1 text-sm font-semibold ${tone.text}`}>
                          {product.tagline}
                        </p>
                      </div>
                    </div>
                    <span className="shrink-0 rounded-full bg-card px-3 py-1 text-xs font-semibold text-emerald-700">
                      {product.status}
                    </span>
                  </div>

                  <p className="max-w-xl text-sm leading-relaxed text-muted-strong">
                    {product.description}
                  </p>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  {product.accolade && (
                    <div className="mb-6 inline-flex w-fit items-center gap-1.5 rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 text-[11px] font-semibold text-accent-text">
                      <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor" aria-hidden="true">
                        <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                      {product.accolade}
                    </div>
                  )}

                  <div className="mb-6">
                    <p className="mb-3 text-xs font-semibold uppercase text-muted">
                      Best for
                    </p>
                    <p className="text-sm leading-relaxed text-foreground">
                      {product.bestFor}
                    </p>
                  </div>

                  <ul className="mb-6 space-y-3 text-sm text-muted-strong">
                    {product.features.map((feature) => (
                      <li key={feature} className={`flex gap-3 ${tone.text}`}>
                        <CheckIcon />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <dl className="mb-6 grid border-y border-card-border sm:grid-cols-3 sm:divide-x sm:divide-card-border">
                    {product.details.map((detail) => (
                      <div key={detail.label} className="py-4 sm:px-4 sm:first:pl-0 sm:last:pr-0">
                        <dt className="text-xs font-semibold uppercase text-muted">
                          {detail.label}
                        </dt>
                        <dd className="mt-1 text-sm font-medium text-foreground">
                          {detail.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-auto space-y-4">
                    <a
                      href={product.primaryAction.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-primary inline-flex min-h-12 w-full items-center justify-center rounded-full bg-foreground px-6 text-sm font-semibold text-background hover:bg-foreground/85 hover:shadow-lg hover:shadow-foreground/10"
                    >
                      {product.primaryAction.label}
                    </a>

                    <div className="flex flex-wrap gap-2">
                      {product.platforms.map((p) => (
                        <a
                          key={p.type}
                          href={p.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-secondary inline-flex min-h-11 items-center gap-2 rounded-full border border-card-border bg-warm-bg px-4 text-sm font-medium text-foreground hover:border-foreground/20 hover:bg-card"
                        >
                          <PlatformIcon type={p.type} />
                          {platformLabel[p.type]}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
