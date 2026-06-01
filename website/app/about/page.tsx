import Image from "next/image";

const careerPath = [
  {
    company: "Accenture",
    role: "Data Analyst",
    period: "Jan 2014 - Feb 2016",
    location: "India",
    summary:
      "Built analytics dashboards, automated workflows, and cross-geo data insights for pharma and insurance initiatives.",
  },
  {
    company: "Subex",
    role: "Analytics Consultant and Data Scientist",
    period: "Mar 2016 - Mar 2018",
    location: "Bengaluru and Nairobi",
    summary:
      "Developed ML models, big-data profilers, and KPI systems across telecom use cases including anomaly detection and forecasting.",
  },
  {
    company: "Citi",
    role: "Data Scientist",
    period: "Oct 2018 - May 2021",
    location: "Bengaluru",
    summary:
      "Delivered predictive analytics and hyper-personalization frameworks for collections, retention, and branch network optimization.",
  },
  {
    company: "Gojek",
    role: "Senior Data Scientist",
    period: "Jun 2021 - Jan 2024",
    location: "Bengaluru",
    summary:
      "Shipped recommendation, ranking, and sentiment systems that improved discovery, conversion, and customer engagement metrics.",
  },
  {
    company: "Flipkart",
    role: "Senior Data Scientist",
    period: "Jan 2024 - Oct 2024",
    location: "Bengaluru",
    summary:
      "Fine-tuned multimodal foundation models for product understanding, visual search, and catalog enrichment at e-commerce scale.",
  },
  {
    company: "Microsoft",
    role: "Senior Data Scientist 2",
    period: "Feb 2025 - Present",
    location: "Bengaluru",
    summary:
      "Leading enterprise Agentic AI systems, copilots, and voice bots from prototyping to governed production deployment.",
  },
];

export default function AboutPage() {
  return (
    <div className="page-shell">
      <div className="page-backdrop" />

      <main className="page-main">
        <section className="glass-card page-section reveal-up">
          <p className="page-hero-eyebrow">ABOUT</p>
          <h1 className="section-title mt-3">Anshuman Bhadauria</h1>
          <p className="mt-3 max-w-3xl text-base leading-8 text-slate-700 md:text-lg">
            Senior Data Scientist at Microsoft with 12+ years across enterprise AI, e-commerce, fintech, telecom, and mobility.
          </p>
          <div className="mt-5 grid gap-7 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="max-w-3xl text-base leading-8 text-slate-700">
                I am based in Bengaluru and currently work at Microsoft as a Senior Data Scientist.
                My work focuses on Agentic AI, RAG systems, enterprise copilots, and voice agents —
                taking ideas from early prototypes through to production.
              </p>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-700">
                Before Microsoft I built recommendation and search systems at Flipkart and Gojek,
                predictive analytics at Citi, and ML products at Subex. I started my career as a
                data analyst at Accenture.
              </p>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-700">
                I enjoy working on hard problems, mentoring teams, and shipping things that are actually used.
              </p>
            </div>

            <aside className="rounded-2xl border border-[#b7c7e2] bg-white/80 p-5">
              <div className="mb-4 mx-auto w-full max-w-[17rem] overflow-hidden rounded-full border border-[#d9ba6a66] bg-[#edf2fb] p-1">
                <div className="relative aspect-square w-full overflow-hidden rounded-full">
                  <Image
                    src="/anshuman-bhadauria.png"
                    alt="Portrait of Anshuman Bhadauria"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 272px, 272px"
                  />
                </div>
              </div>
              <h2 className="mb-3 text-sm font-semibold tracking-[0.14em] text-[#8a6725]">FOCUS AREAS</h2>
              <ul className="space-y-2 text-sm leading-6 text-slate-700">
                <li>Agentic AI Systems</li>
                <li>RAG and Retrieval Quality</li>
                <li>Enterprise Copilots and Voice Agents</li>
                <li>Evaluation and Safety Engineering</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="glass-card page-section">
          <h2 className="section-title">Career Journey</h2>
          <p className="mt-3 text-sm text-slate-600">
            A visual path from foundational analytics to enterprise Agentic AI leadership.
          </p>

          <div className="career-graph mt-6">
            {careerPath.map((item, index) => (
              <div key={`${item.company}-${item.period}`} className="career-node-wrap">
                <div className="career-node" aria-hidden="true" />
                <p className="career-label">{item.company}</p>
                {index < careerPath.length - 1 ? <div className="career-link" aria-hidden="true" /> : null}
              </div>
            ))}
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {careerPath.map((item) => (
              <article key={`${item.company}-${item.period}-card`} className="career-card">
                <h3 className="text-lg font-semibold text-[#8a6725]">{item.company}</h3>
                <p className="text-sm text-slate-600">{item.role}</p>
                <p className="text-xs tracking-wide text-slate-500">{item.period} | {item.location}</p>
                <p className="mt-2 text-sm leading-7 text-slate-700">{item.summary}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
