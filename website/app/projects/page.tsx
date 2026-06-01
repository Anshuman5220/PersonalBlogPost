import { aiProjects } from "@/lib/projects";

export default function ProjectsPage() {
  const totalMetrics = aiProjects.reduce((count, project) => count + project.metrics.length, 0);

  return (
    <div className="page-shell">
      <div className="page-backdrop" />

      <main className="page-main">
        <section className="glass-card page-section page-hero reveal-up">
          <p className="premium-ribbon">Selected builds and implementation notes</p>
          <p className="page-hero-eyebrow">CASE STUDIES</p>
          <h1 className="page-hero-title">A small library of applied AI work</h1>
          <p className="page-hero-subtitle">
            A cleaner overview of projects, short writeups, and public code references where repository links are available.
          </p>

          <div className="project-signal-grid mt-5">
            <article className="project-signal-card">
              <p className="project-signal-label">Collection</p>
              <p className="project-signal-value">Applied AI builds and implementation notes</p>
            </article>
            <article className="project-signal-card">
              <p className="project-signal-label">Signals</p>
              <p className="project-signal-value">{totalMetrics}+ measurable impact signals</p>
            </article>
            <article className="project-signal-card">
              <p className="project-signal-label">Tiles</p>
              <p className="project-signal-value">{aiProjects.length} projects in this collection</p>
            </article>
          </div>
        </section>

        <section className="glass-card page-section">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {aiProjects.map((project) => {
              const hasRepositoryUrl = Boolean(project.repositoryUrl);

              return (
              <article key={project.id} className="project-card project-card-premium flex h-full flex-col">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-xs font-semibold tracking-[0.14em] text-[#8a6725]">{project.stage}</p>
                    <span className="project-industry-pill">{project.industry}</span>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#4f6485]">{project.timeline}</span>
                </div>

                <h2 className="mt-3 text-xl font-semibold text-[#1f3353]">{project.title}</h2>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#4f6485]">{project.teamModel}</p>

                <p className="mt-4 text-sm leading-7 text-slate-700">{project.writeup[0]}</p>

                <div className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
                  <p><span className="font-semibold text-[#415675]">Problem:</span> {project.problem}</p>
                  <p><span className="font-semibold text-[#415675]">Build:</span> {project.summary}</p>
                  <p><span className="font-semibold text-[#415675]">Impact:</span> {project.impact}</p>
                </div>

                <div className="project-metric-list mt-4">
                  {project.metrics.slice(0, 3).map((metric) => (
                    <p key={metric} className="project-metric-inline">{metric}</p>
                  ))}
                </div>

                <div className="mt-4 rounded-2xl border border-[#d7e0ef] bg-white/80 p-4">
                  <p className="text-xs font-semibold tracking-[0.14em] text-[#8a6725]">Key Outcomes</p>
                  <div className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                    {project.outcomes.map((outcome) => (
                      <p key={outcome}>{outcome}</p>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.architectureFocus.map((tag) => (
                    <span key={tag} className="chip">{tag}</span>
                  ))}
                  {project.stack.map((tag) => (
                    <span key={tag} className="chip">{tag}</span>
                  ))}
                </div>

                <p className="project-quick-fit mt-4">Context -&gt; {project.bestFor}</p>

                {hasRepositoryUrl ? (
                  <div className="cta-row mt-5">
                    <a className="cta-primary" href={project.repositoryUrl} target="_blank" rel="noreferrer">
                      View on GitHub
                    </a>
                  </div>
                ) : null}
              </article>
              );
            })}
          </div>

          <section className="project-fit-grid mt-6" aria-label="How to read these case studies">
            <article className="project-fit-card">
              <p className="project-fit-title">Compact overview</p>
              <p className="project-fit-copy">Each tile gives the project context, the build summary, and the outcome without turning the page into a wall of text.</p>
            </article>
            <article className="project-fit-card">
              <p className="project-fit-title">Public code when available</p>
              <p className="project-fit-copy">Repository buttons appear only when a public GitHub link is available, so the page avoids dead-end placeholders.</p>
            </article>
            <article className="project-fit-card">
              <p className="project-fit-title">Room to grow</p>
              <p className="project-fit-copy">The underlying data still supports fuller notes, so each tile can deepen as you publish more detailed project writeups.</p>
            </article>
          </section>

          <div className="cta-row mt-6">
            <a className="cta-primary" href="/blogs">Read related essays</a>
            <a className="cta-secondary" href="/about">About the author</a>
          </div>
          <p className="mt-3 text-xs text-slate-600">
            These case studies are meant to document patterns, decisions, and outcomes from applied AI work.
          </p>
        </section>
      </main>
    </div>
  );
}
