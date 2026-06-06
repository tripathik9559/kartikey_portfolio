'use client';

import Link from 'next/link';
import { Github, ExternalLink, ArrowRight, Monitor, Cpu, Palette } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { projects } from '@/lib/data';

const projectIcons = [Monitor, Cpu, Palette];

const statusColors: Record<string, string> = {
  Completed:   'badge-completed',
  'In Progress': 'badge-progress',
  Planning:    'badge-planning',
};

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="px-8 xl:px-14 2xl:px-20 py-20"
      style={{ borderTop: '1px solid rgba(59,130,246,0.07)' }}
    >
      {/* Header */}
      <AnimatedSection className="flex items-end justify-between mb-12">
        <div>
          <span className="section-tag mb-4">Featured Projects</span>
          <h2 className="section-title text-4xl lg:text-5xl mt-3">
            Selected Work
          </h2>
          <p className="font-outfit text-sm mt-2" style={{ color: '#475569' }}>
            Click any project to view the full case study
          </p>
        </div>
        <Link
          href="/archive"
          className="btn-ghost hidden sm:inline-flex items-center gap-2"
        >
          View All
          <ArrowRight size={13} />
        </Link>
      </AnimatedSection>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.filter((p) => p.featured).map((project, idx) => {
          const Icon = projectIcons[idx] ?? Monitor;
          return (
            <AnimatedSection key={project.slug} delay={idx * 120} direction="up">
              <div className="project-card h-full flex flex-col group">

                {/* Screenshot / Banner */}
                <div
                  className="relative overflow-hidden"
                  style={{ height: 180 }}
                >
                  {/* Gradient banner fallback — always present behind image */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        idx === 0
                          ? 'linear-gradient(135deg,#0D1525 0%,#1E3A5F 100%)'
                          : idx === 1
                          ? 'linear-gradient(135deg,#0D1525 0%,#1A1535 100%)'
                          : 'linear-gradient(135deg,#0D1525 0%,#1A2535 100%)',
                    }}
                  />

                  {/* Actual project preview image — place in public/screenshots/{slug}-preview.png */}
                  <img
                    src={`/screenshots/${project.slug}-preview.png`}
                    alt={project.title}
                    className="project-img-zoom absolute inset-0 w-full h-full object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />

                  {/* Grid overlay inside banner */}
                  <div
                    className="absolute inset-0 grid-bg opacity-30"
                    style={{ backgroundSize: '30px 30px' }}
                  />

                  {/* Center icon — shown when no image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: 'rgba(59,130,246,0.12)',
                        border: '1px solid rgba(59,130,246,0.25)',
                        boxShadow: '0 0 30px rgba(59,130,246,0.15)',
                      }}
                    >
                      <Icon size={28} style={{ color: '#60A5FA' }} />
                    </div>
                  </div>

                  {/* Status badge — top right */}
                  <div className="absolute top-3 right-3">
                    <span className={`badge ${statusColors[project.status]}`}>
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{
                          background:
                            project.status === 'Completed'  ? '#10B981'
                            : project.status === 'In Progress' ? '#F59E0B'
                            : '#818CF8',
                        }}
                      />
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-5 gap-3">
                  <div>
                    <h3
                      className="font-syne font-bold text-base mb-1.5 group-hover:text-blue-400 transition-colors"
                      style={{ color: '#F0F4FF' }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="font-outfit text-sm leading-relaxed"
                      style={{ color: '#64748B' }}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Tech chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span key={tech} className="skill-pill text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span
                        className="text-xs px-2 py-0.5 rounded"
                        style={{ color: '#475569' }}
                      >
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action buttons — single row, no wrap */}
                  <div className="flex items-center gap-1.5 pt-2 mt-auto" style={{ flexWrap: 'nowrap', minWidth: 0 }}>
                    {project.liveDemo ? (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost py-1.5 flex-shrink-0"
                        style={{ fontSize: 11, padding: '6px 10px', whiteSpace: 'nowrap' }}
                      >
                        <ExternalLink size={11} />
                        Live
                      </a>
                    ) : (
                      <span
                        className="font-outfit flex-shrink-0"
                        style={{
                          fontSize: 11, padding: '6px 10px', borderRadius: 8,
                          color: '#334155', background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.06)', whiteSpace: 'nowrap',
                        }}
                      >
                        Soon
                      </span>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost py-1.5 flex-shrink-0"
                      style={{ fontSize: 11, padding: '6px 10px', whiteSpace: 'nowrap' }}
                    >
                      <Github size={11} />
                      GitHub
                    </a>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="btn-ghost py-1.5 flex-shrink-0"
                      style={{ fontSize: 11, padding: '6px 10px', marginLeft: 'auto', whiteSpace: 'nowrap' }}
                    >
                      Details
                      <ArrowRight size={11} />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>

      {/* Mobile "view all" */}
      <div className="mt-8 flex justify-center sm:hidden">
        <Link href="/archive" className="btn-secondary">
          View All Projects
          <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}
