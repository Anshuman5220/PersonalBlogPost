import Link from "next/link";

const offerings = [
  {
    title: "Agentic AI Strategy and Architecture",
    detail:
      "Define the operating model, architecture, and governance rails for enterprise agentic systems.",
  },
  {
    title: "RAG and Knowledge Systems",
    detail:
      "Design retrieval pipelines, indexing strategy, and evaluation loops for grounded copilots.",
  },
  {
    title: "AI Copilot Build and Scale",
    detail:
      "Ship copilots with role-based workflows, observability, and guardrails for adoption at scale.",
  },
  {
    title: "Evaluation and Safety Engineering",
    detail:
      "Implement evaluation frameworks for quality, reliability, policy compliance, and continuous improvement.",
  },
];

const outcomes = [
  "Accelerated delivery from prototype to production",
  "Higher answer quality and reduced hallucination risk",
  "Improved operational efficiency in complex workflows",
  "Governed AI deployments aligned with enterprise standards",
];

const engagementModel = [
  {
    step: "01",
    title: "Discovery Sprint",
    detail:
      "Map use cases, constraints, data readiness, and ROI priorities with business and technical stakeholders.",
  },
  {
    step: "02",
    title: "Pilot Build",
    detail:
      "Develop a focused pilot with measurable success criteria, rapid iteration cycles, and transparent evaluation.",
  },
  {
    step: "03",
    title: "Enterprise Rollout",
    detail:
      "Operationalize architecture, governance, observability, and handoff to internal teams for sustained value.",
  },
];

export default function ConsultingPage() {
  return (
    <div className="page-shell">
      <div className="page-backdrop" />

      <main className="page-main">

        {/* Hero */}
        <section className="glass-card page-section page-hero reveal-up">
          <p className="page-hero-eyebrow">CONSULTING</p>
          <h1 className="page-hero-title">AI Consulting for Enterprise Teams</h1>
          <p className="page-hero-subtitle">
            I partner with product and engineering teams to ship AI systems that create value quickly and safely.
          </p>
          <div className="mt-6">
            <a
              className="rounded-full bg-[#d9ba6a] px-5 py-2.5 text-sm font-semibold text-[#1a2238] transition hover:-translate-y-0.5 hover:bg-[#e2c67f]"
              href="mailto:anshumanatwork@gmail.com"
            >
              Book an Intro Call
            </a>
          </div>
        </section>

        {/* Offerings */}
        <section className="glass-card page-section">
          <h2 className="section-title">What I Help With</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
            Engagements are outcome-first, production-minded, and built to scale.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {offerings.map((item) => (
              <article key={item.title} className="pitch-card">
                <h3 className="text-base font-semibold text-[#8a6725] md:text-lg">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Outcomes + Industries */}
        <section className="glass-card page-section">
          <h2 className="section-title">Outcomes and Context</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <article className="pitch-card">
              <h3 className="text-base font-semibold text-[#8a6725] md:text-lg">Business Outcomes</h3>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
                {outcomes.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#d9ba6a]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="pitch-card">
              <h3 className="text-base font-semibold text-[#8a6725] md:text-lg">Industries and Context</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                Experience across technology, e-commerce, mobility, telecom, and financial services with
                production constraints and enterprise stakeholders in mind.
              </p>
            </article>
          </div>
        </section>

        {/* Engagement model */}
        <section className="glass-card page-section">
          <h2 className="section-title">How Engagements Work</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {engagementModel.map((item) => (
              <article key={item.step} className="pitch-card">
                <p className="text-xs font-semibold tracking-[0.2em] text-[#d9ba6a]">{item.step}</p>
                <h3 className="mt-2 text-base font-semibold text-[#8a6725] md:text-lg">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="glass-card page-section">
          <h2 className="section-title">Ready to talk?</h2>
          <p className="mt-3 max-w-2xl text-base leading-8 text-slate-700">
            If you have a high-value use case or a prototype that needs to reach production,
            I am happy to help you shape the next step.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="rounded-full bg-[#d9ba6a] px-5 py-2.5 text-sm font-semibold text-[#1a2238] transition hover:-translate-y-0.5 hover:bg-[#e2c67f]"
              href="mailto:anshumanatwork@gmail.com"
            >
              Start the Conversation
            </a>
            <Link
              className="rounded-full border border-[#7f93b8] px-5 py-2.5 text-sm font-semibold text-[#243a5d] transition hover:-translate-y-0.5 hover:border-[#d9ba6a99]"
              href="/projects"
            >
              See case studies
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
