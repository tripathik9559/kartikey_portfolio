import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  Github, ExternalLink, ArrowLeft, CheckCircle,
  AlertCircle, Lightbulb, GitBranch, Database,
  Clock, Tag, User2, Layers, Zap, ArrowRight, Users2,
} from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';
import { projects, extendedProjects } from '@/lib/data';

const allProjects = [...projects, ...extendedProjects];

interface PageProps { params: { slug: string } }

export function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PageProps) {
  const p = allProjects.find((x) => x.slug === params.slug);
  if (!p) return {};
  return { title: `${p.title} — Kartikey Kumar Tripathi`, description: p.description };
}

const STATUS_COLOR: Record<string, string> = {
  Completed:    '#10B981',
  'In Progress': '#F59E0B',
  Planning:     '#818CF8',
};
const STATUS_BG: Record<string, string> = {
  Completed:    'rgba(16,185,129,0.1)',
  'In Progress': 'rgba(245,158,11,0.1)',
  Planning:     'rgba(129,140,248,0.1)',
};

export default function ProjectDetailPage({ params }: PageProps) {
  const project = allProjects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const sc = STATUS_COLOR[project.status];
  const sb = STATUS_BG[project.status];
  const nextProject = allProjects[(allProjects.indexOf(project) + 1) % allProjects.length];

  return (
    <MainLayout>
      <article style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>

        {/* ══════════════════════════════
            HERO BANNER
        ══════════════════════════════ */}
        <div className="relative overflow-hidden" style={{ minHeight: 380 }}>
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg,#070B14 0%,#0D1525 60%,#070B14 100%)' }} />
          <div className="absolute inset-0 grid-bg" style={{ backgroundSize: '40px 40px', opacity: 0.8 }} />
          {/* Glow orb */}
          <div className="absolute pointer-events-none"
            style={{ top: '-30%', left: '25%', width: '55%', height: '140%',
              background: 'radial-gradient(ellipse,rgba(59,130,246,0.18) 0%,transparent 70%)' }} />

          <div className="relative px-8 xl:px-14 pt-10 pb-16" style={{ zIndex: 1 }}>
            {/* Breadcrumb */}
            <Link href="/#projects" className="btn-ghost inline-flex items-center gap-2 mb-8 text-sm">
              <ArrowLeft size={13} /> Back to Projects
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
              {/* Left — main info */}
              <div className="lg:col-span-3">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="section-tag">{project.category}</span>
                  <span className="badge" style={{ background: sb, border: `1px solid ${sc}40`, color: sc }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: sc }} />
                    {project.status}
                  </span>
                </div>

                <h1 className="font-syne font-bold mb-3"
                  style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', lineHeight: 1.1,
                    color: '#F0F4FF', letterSpacing: '-0.02em' }}>
                  {project.title}
                </h1>
                <p className="font-outfit text-base max-w-xl mb-6" style={{ color: '#64748B' }}>
                  {project.tagline}
                </p>

                <div className="flex flex-wrap gap-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    <Github size={15} /> GitHub Repository
                  </a>
                  {project.liveDemo ? (
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                      <ExternalLink size={15} /> Live Demo
                    </a>
                  ) : (
                    <span className="btn-secondary opacity-40 cursor-not-allowed" style={{ pointerEvents: 'none' }}>
                      <ExternalLink size={15} /> Live Demo (Soon)
                    </span>
                  )}
                </div>
              </div>

              {/* Right — quick meta card */}
              <div className="lg:col-span-2">
                <div className="rounded-2xl p-5 space-y-4"
                  style={{ background: 'rgba(12,18,32,0.8)', border: '1px solid rgba(59,130,246,0.12)' }}>
                  {[
                    { icon: User2,   label: 'My Role',   value: project.role },
                    { icon: Clock,   label: 'Year',      value: String(project.year) },
                    { icon: Tag,     label: 'Category',  value: project.category },
                    { icon: Layers,  label: 'Status',    value: project.status },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: 'rgba(59,130,246,0.1)' }}>
                        <Icon size={13} style={{ color: '#60A5FA' }} />
                      </div>
                      <div>
                        <p className="font-outfit text-xs mb-0.5" style={{ color: '#475569' }}>{label}</p>
                        <p className="font-outfit text-sm font-medium" style={{ color: '#CBD5E1' }}>{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════
            MAIN CONTENT
        ══════════════════════════════ */}
        <div className="px-8 xl:px-14 2xl:px-20 py-12">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">

            {/* ── Primary column (2/3) ── */}
            <div className="xl:col-span-2 space-y-12">

              {/* Overview */}
              <section>
                <SectionHeading icon={Zap} title="Project Overview" color="#60A5FA" />
                <p className="font-outfit text-base leading-relaxed" style={{ color: '#64748B' }}>
                  {project.longDescription}
                </p>
              </section>

              {/* Problem & Solution */}
              <section>
                <SectionHeading icon={AlertCircle} title="Problem & Solution" color="#F87171" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-xl p-5"
                    style={{ background: 'rgba(248,113,113,0.05)', border: '1px solid rgba(248,113,113,0.15)' }}>
                    <div className="flex items-center gap-2 mb-3">
                      <AlertCircle size={14} style={{ color: '#F87171' }} />
                      <span className="font-syne font-semibold text-sm" style={{ color: '#F0F4FF' }}>The Problem</span>
                    </div>
                    <p className="font-outfit text-sm leading-relaxed" style={{ color: '#64748B' }}>
                      {project.problem}
                    </p>
                  </div>
                  <div className="rounded-xl p-5"
                    style={{ background: 'rgba(52,211,153,0.05)', border: '1px solid rgba(52,211,153,0.15)' }}>
                    <div className="flex items-center gap-2 mb-3">
                      <Lightbulb size={14} style={{ color: '#34D399' }} />
                      <span className="font-syne font-semibold text-sm" style={{ color: '#F0F4FF' }}>The Solution</span>
                    </div>
                    <p className="font-outfit text-sm leading-relaxed" style={{ color: '#64748B' }}>
                      {project.solution}
                    </p>
                  </div>
                </div>
              </section>

              {/* My Contribution */}
              {project.contribution && project.contribution.length > 0 && (
                <section>
                  <SectionHeading icon={Users2} title="My Contribution" color="#22D3EE" />
                  <div className="space-y-2.5 mb-4">
                    {(project.contribution ?? []).map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl"
                        style={{ background: 'rgba(6,182,212,0.05)', border: '1px solid rgba(6,182,212,0.12)' }}>
                        <CheckCircle size={13} className="flex-shrink-0 mt-0.5" style={{ color: '#22D3EE' }} />
                        <span className="font-outfit text-sm leading-relaxed" style={{ color: '#94A3B8' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                  {project.contributionNote && (
                    <div className="flex items-start gap-3 p-3.5 rounded-xl"
                      style={{ background: 'rgba(245,158,11,0.05)', border: '1px solid rgba(245,158,11,0.15)' }}>
                      <AlertCircle size={13} className="flex-shrink-0 mt-0.5" style={{ color: '#FBBF24' }} />
                      <span className="font-outfit text-xs leading-relaxed italic" style={{ color: '#94A3B8' }}>
                        {project.contributionNote}
                      </span>
                    </div>
                  )}
                </section>
              )}

              {/* Architecture */}
              <section>
                <SectionHeading icon={GitBranch} title="Architecture & Design" color="#A78BFA" />
                <p className="font-outfit text-sm leading-relaxed mb-5" style={{ color: '#64748B' }}>
                  {project.architecture}
                </p>
                {/* Architecture diagram — generated SVG */}
                <div className="rounded-2xl overflow-hidden"
                  style={{ border: '1px solid rgba(139,92,246,0.25)' }}>
                  <img
                    src={`/diagrams/${project.slug}-arch.svg`}
                    alt={`${project.title} Architecture Diagram`}
                    style={{ width: '100%', display: 'block' }}
                  />
                </div>
              </section>

              {/* Challenges */}
              <section>
                <SectionHeading icon={AlertCircle} title="Technical Challenges" color="#FBBF24" />
                <div className="space-y-3">
                  {(project.challenges ?? []).map((challenge, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl"
                      style={{ background: 'rgba(245,158,11,0.05)', border: '1px solid rgba(245,158,11,0.12)' }}>
                      <span className="font-mono text-sm font-bold flex-shrink-0 mt-0.5"
                        style={{ color: '#FBBF24' }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="font-outfit text-sm leading-relaxed" style={{ color: '#94A3B8' }}>{challenge}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Learnings */}
              <section>
                <SectionHeading icon={Lightbulb} title="Key Learnings" color="#60A5FA" />
                <div className="space-y-3">
                  {(project.learnings ?? []).map((learning, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl"
                      style={{ background: 'rgba(59,130,246,0.05)', border: '1px solid rgba(59,130,246,0.1)' }}>
                      <ArrowRight size={14} className="flex-shrink-0 mt-0.5" style={{ color: '#60A5FA' }} />
                      <p className="font-outfit text-sm leading-relaxed" style={{ color: '#94A3B8' }}>{learning}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Screenshots — only for featured projects */}
              {project.featured && (
              <section>
                <SectionHeading icon={Layers} title="Screenshots" color="#06B6D4" />
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[1, 2, 3].map((n) => (
                    <div
                    key={n}
                    className="rounded-xl overflow-hidden aspect-video"
                    >
                      <img
                      src={`/screenshots/${project.slug}-${n}.png`}
                      alt={`${project.title} Screenshot ${n}`}
                      className="w-full h-full object-cover"
                      />
                      </div>
                    ))}
                </div>
              </section>
              )}

            </div>

            {/* ── Sidebar column (1/3) ── */}
            <div className="space-y-6">

              {/* Tech stack deep-dive */}
              <div className="rounded-2xl p-5 sticky top-6"
                style={{ background: 'rgba(12,18,32,0.8)', border: '1px solid rgba(59,130,246,0.1)' }}>
                <h3 className="font-syne font-bold text-sm mb-4" style={{ color: '#F0F4FF' }}>Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {(project.techStack ?? (project as any).tech ?? []).map((tech: string) => (
                    <span key={tech} className="skill-pill text-xs">{tech}</span>
                  ))}
                </div>

                <div className="mt-5 pt-4" style={{ borderTop: '1px solid rgba(59,130,246,0.08)' }}>
                  <h3 className="font-syne font-bold text-sm mb-3" style={{ color: '#F0F4FF' }}>Key Features</h3>
                  <div className="space-y-2">
                    {(project.features ?? []).map((f) => (
                      <div key={f} className="flex items-start gap-2">
                        <CheckCircle size={12} className="flex-shrink-0 mt-0.5" style={{ color: '#34D399' }} />
                        <span className="font-outfit text-xs leading-relaxed" style={{ color: '#64748B' }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="mt-5 pt-4" style={{ borderTop: '1px solid rgba(59,130,246,0.08)' }}>
                  <h3 className="font-syne font-bold text-sm mb-3" style={{ color: '#F0F4FF' }}>Metrics</h3>
                  <div className="space-y-2">
                    {(project.metrics ?? []).map((m) => (
                      <div key={m.label} className="flex items-center justify-between py-1.5 px-3 rounded-lg"
                        style={{ background: 'rgba(255,255,255,0.03)' }}>
                        <span className="font-outfit text-xs" style={{ color: '#475569' }}>{m.label}</span>
                        <span className="font-mono text-xs font-bold" style={{ color: '#60A5FA' }}>{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Database section */}
                <div className="mt-5 pt-4" style={{ borderTop: '1px solid rgba(59,130,246,0.08)' }}>
                  <div className="flex items-center gap-2 mb-3">
                    <Database size={13} style={{ color: '#22D3EE' }} />
                    <h3 className="font-syne font-bold text-sm" style={{ color: '#F0F4FF' }}>Database</h3>
                  </div>
                  <div className="rounded-xl overflow-hidden"
                    style={{ border: '1px solid rgba(6,182,212,0.2)' }}>
                    <img
                      src={`/diagrams/${project.slug}-er.svg`}
                      alt={`${project.title} ER Diagram`}
                      style={{ width: '100%', display: 'block' }}
                    />
                  </div>
                </div>

                {/* Links */}
                <div className="mt-5 pt-4 space-y-2" style={{ borderTop: '1px solid rgba(59,130,246,0.08)' }}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center text-sm">
                    <Github size={14} /> View on GitHub
                  </a>
                  {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn-secondary w-full justify-center text-sm">
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* ── Next Project ── */}
          <div className="mt-14 pt-10" style={{ borderTop: '1px solid rgba(59,130,246,0.08)' }}>
            <div className="flex items-center justify-between">
              <Link href="/#projects" className="btn-ghost items-center gap-2">
                <ArrowLeft size={14} /> All Projects
              </Link>
              <Link href={`/projects/${nextProject.slug}`}
                className="flex items-center gap-3 px-5 py-3 rounded-xl group transition-all"
                style={{ background: 'rgba(12,18,32,0.7)', border: '1px solid rgba(59,130,246,0.1)' }}>
                <div className="text-right">
                  <p className="font-outfit text-xs mb-0.5" style={{ color: '#475569' }}>Next Project</p>
                  <p className="font-syne font-semibold text-sm group-hover:text-blue-400 transition-colors"
                    style={{ color: '#F0F4FF' }}>
                    {nextProject.title}
                  </p>
                </div>
                <ArrowRight size={16} style={{ color: '#60A5FA' }} />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </MainLayout>
  );
}

/* ─── reusable section heading ─── */
function SectionHeading({ icon: Icon, title, color }: { icon: typeof AlertCircle; title: string; color: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-8 h-8 rounded-lg flex items-center justify-center"
        style={{ background: `${color}18`, border: `1px solid ${color}35` }}>
        <Icon size={15} style={{ color }} />
      </div>
      <h2 className="font-syne font-bold text-xl" style={{ color: '#F0F4FF' }}>{title}</h2>
    </div>
  );
}