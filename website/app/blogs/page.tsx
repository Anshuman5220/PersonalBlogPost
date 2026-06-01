import Link from "next/link";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

function formatDate(date: string) {
  return dateFormatter.format(new Date(`${date}T00:00:00`));
}

const blogs = [
  {
    slug: "2026-04-12-agentic-ai-enterprise-playbook",
    title: "Agentic AI in the Enterprise: A Practical Playbook",
    excerpt:
      "A field guide for taking AI systems from sandbox demos to trusted production with governance, observability, and clear success metrics.",
    category: "Agentic AI",
    readTime: "8 min read",
    date: "2026-04-12",
  },
  {
    slug: "2026-04-05-how-to-launch-internal-copilots-without-chaos",
    title: "How to Launch Internal Copilots Without Chaos",
    excerpt:
      "A practical rollout model for internal copilots covering scope, risk controls, feedback loops, and operating ownership.",
    category: "Enterprise AI",
    readTime: "7 min read",
    date: "2026-04-05",
  },
  {
    slug: "2026-03-25-rag-evaluation-checklist-for-enterprise-teams",
    title: "RAG Evaluation Checklist for Enterprise Teams",
    excerpt:
      "Use this checklist to validate retrieval quality, reduce hallucinations, and set measurable release gates before scale-up.",
    category: "RAG",
    readTime: "6 min read",
    date: "2026-03-25",
  },
];

export default function BlogsPage() {
  const blogsByDate = [...blogs].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const themes = ["Agent Systems", "RAG", "Evaluation", "Enterprise Rollout"];

  return (
    <div className="page-shell">
      <div className="page-backdrop" />

      <main className="page-main">
        <section className="glass-card page-section page-hero reveal-up">
          <p className="page-hero-eyebrow">BLOG</p>
          <h1 className="page-hero-title">Essays, playbooks, and field notes on enterprise AI</h1>
          <p className="page-hero-subtitle">
            The long-form side of the site: practical writing from implementation work, organized for repeat reading instead of feed-chasing.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {themes.map((theme) => (
              <span key={theme} className="chip">{theme}</span>
            ))}
          </div>
        </section>

        <section className="glass-card page-section">
          <article className="blog-card featured-blog-card">
            <div className="flex items-center justify-between gap-2">
              <span className="chip">{blogsByDate[0].category}</span>
              <span className="text-xs text-slate-500">{blogsByDate[0].readTime}</span>
            </div>
            <h2 className="mt-3 text-2xl font-semibold text-[#1f3353]">{blogsByDate[0].title}</h2>
            <p className="mt-2 text-xs text-slate-500">{formatDate(blogsByDate[0].date)}</p>
            <p className="mt-2 text-sm leading-7 text-slate-700">{blogsByDate[0].excerpt}</p>
            <Link href={`/blogs/${blogsByDate[0].slug}`} className="mt-4 inline-flex text-sm font-semibold text-[#2b4670] transition hover:text-[#8a6725]">
              Read featured post →
            </Link>
          </article>

          <div className="cta-row mt-6">
            <Link className="cta-primary" href={`/blogs/${blogsByDate[0].slug}`}>Read featured article</Link>
            <Link className="cta-secondary" href="/projects">Browse case studies</Link>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {blogsByDate.slice(1).map((blog) => (
              <article key={blog.slug} className="blog-card">
                <div className="flex items-center justify-between gap-2">
                  <span className="chip">{blog.category}</span>
                  <span className="text-xs text-slate-500">{blog.readTime}</span>
                </div>
                <h2 className="mt-3 text-base font-semibold text-[#1f3353]">{blog.title}</h2>
                <p className="mt-1 text-xs text-slate-500">{formatDate(blog.date)}</p>
                <p className="mt-2 text-sm leading-7 text-slate-700">{blog.excerpt}</p>
                <Link href={`/blogs/${blog.slug}`} className="mt-3 inline-flex text-sm font-semibold text-[#2b4670] transition hover:text-[#8a6725]">
                  Read post →
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-[1.4rem] border border-[#b7c7e2] bg-white/85 p-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-[0.14em] text-[#8a6725]">INDEX BY DATE</p>
                <h2 className="mt-2 font-serif text-2xl text-[#1f3353]">Readable, chronological post links</h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-slate-600">
                Each post now uses a date-first slug so the archive reads clearly and the URL carries publication context.
              </p>
            </div>

            <div className="mt-6 divide-y divide-[#d5dfef]">
              {blogsByDate.map((blog) => (
                <article key={`${blog.slug}-index`} className="grid gap-3 py-4 md:grid-cols-[10rem_1fr] md:items-start">
                  <p className="text-sm font-semibold text-[#415675]">{formatDate(blog.date)}</p>
                  <div>
                    <Link href={`/blogs/${blog.slug}`} className="text-base font-semibold text-[#1f3353] transition hover:text-[#8a6725] md:text-lg">
                      {blog.title}
                    </Link>
                    <p className="mt-1 text-sm leading-7 text-slate-700">{blog.excerpt}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.12em] text-slate-500">{blog.category} · {blog.readTime}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-[1.4rem] border border-[#d9ba6a4a] bg-[linear-gradient(135deg,rgba(255,249,236,0.96),rgba(247,251,255,0.92))] p-6">
            <p className="text-xs font-semibold tracking-[0.14em] text-[#8a6725]">Keep exploring</p>
            <h2 className="mt-2 font-serif text-2xl text-[#1f3353]">Move from essays into concrete work.</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700 md:text-base">
              The blog holds the thinking. The case studies show how those ideas turn into real implementations and measured outcomes.
            </p>
            <div className="cta-row mt-5">
              <Link className="cta-primary" href="/projects">See case studies</Link>
              <Link className="cta-secondary" href="/about">About the author</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
