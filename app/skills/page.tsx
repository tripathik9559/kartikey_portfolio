import type { LucideIcon } from 'lucide-react';
import { Code, Layers, Database, Wrench, BookOpen, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { skills, certifications, education, experience } from '@/lib/data';

type SkillCategory = { icon: string; color: string; glow: string; items: string[] };

const iconMap: Record<string, LucideIcon> = {
  code: Code, layers: Layers, database: Database,
  wrench: Wrench, brain: BookOpen, sparkles: Sparkles,
};

const categoryMeta: Record<string, { lucide: LucideIcon; accent: string }> = {
  'Programming Languages':     { lucide: Code,     accent: '#3B82F6' },
  'Frameworks & Technologies': { lucide: Layers,   accent: '#06B6D4' },
  'Databases':                 { lucide: Database, accent: '#8B5CF6' },
  'Tools & Platforms':         { lucide: Wrench,   accent: '#10B981' },
  'Core CS Concepts':          { lucide: BookOpen, accent: '#F59E0B' },
  'AI & GenAI (Learning)':     { lucide: Sparkles, accent: '#EC4899' },
};

const learningJourney = [
  { year: '2023', title: 'Python & Programming Fundamentals', desc: 'Core Python, OOP, problem solving, data structures and software development fundamentals.' },
  { year: '2023', title: 'Django Backend Development',        desc: 'Built backend applications using Django, REST APIs, authentication systems and database integration.' },
  { year: '2024', title: 'Database & Backend Engineering',    desc: 'Worked with PostgreSQL, MySQL, API design, optimization, deployment and production backend concepts.' },
  { year: '2024', title: 'Internship & Real-World Development', desc: 'Collaborated on software projects, debugging, testing, automation and backend development during internship.' },
  { year: '2025', title: 'AI & Intelligent Systems', desc: 'Built my first basic AI/ML project —  — which sparked a genuine interest in intelligent systems and made me realize this is the direction I want to grow in.' },
  { year: '2026', title: 'Generative AI Engineering', desc: 'That experience led me to intentionally choose GenAI engineering as my career path. Now actively building with LLMs, RAG pipelines, LangChain and OpenAI APIs to create AI-powered software.' },
];

export default function SkillsPage() {
  const categories = Object.entries(skills) as [string, SkillCategory][];

  return (
    <MainLayout>
      <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>

        {/* ── Hero ── */}
        <div className="relative px-8 xl:px-14 pt-12 pb-14 overflow-hidden"
          style={{ borderBottom: '1px solid rgba(59,130,246,0.08)' }}>
          <div className="absolute inset-0 grid-bg pointer-events-none" style={{ opacity: 0.6 }} />
          <div className="absolute pointer-events-none" style={{
            top: '-40%', right: '-10%', width: '60%', height: '200%',
            background: 'radial-gradient(ellipse,rgba(59,130,246,0.1) 0%,transparent 65%)',
          }} />
          <div className="relative" style={{ zIndex: 1 }}>
            <AnimatedSection>
              <span className="section-tag mb-4">Skills & Technologies</span>
              <h1 className="font-syne font-bold mt-3 mb-3"
                style={{ fontSize: 'clamp(2.2rem,4vw,3.2rem)', letterSpacing: '-0.02em', color: '#F0F4FF' }}>
                What I Work With
              </h1>
              <p className="font-outfit text-base max-w-xl" style={{ color: '#64748B' }}>
                Real skills from my resume — built through internships, academic projects, and self-directed learning.
                No exaggerated expertise, just honest proficiency levels.
              </p>
            </AnimatedSection>
          </div>
        </div>

        <div className="px-8 xl:px-14 2xl:px-20 py-14 space-y-16">

          {/* ── All 6 Skill Categories ── */}
          <div>
            <AnimatedSection className="mb-8">
              <h2 className="font-syne font-bold text-2xl mb-1" style={{ color: '#F0F4FF' }}>Technology Stack</h2>
              <p className="font-outfit text-sm" style={{ color: '#475569' }}>
                {categories.length} categories · {categories.reduce((n, [, d]) => n + d.items.length, 0)} total skills
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {categories.map(([category, data], i) => {
                const meta = categoryMeta[category];
                const Icon = meta?.lucide ?? iconMap[data.icon] ?? Code;
                const color = meta?.accent ?? data.color;
                return (
                  <AnimatedSection key={category} delay={i * 80} direction="up">
                    <div className="rounded-2xl p-6 h-full group transition-all duration-300 cursor-default"
                      style={{
                        background: 'rgba(12,18,32,0.75)',
                        border: '1px solid rgba(59,130,246,0.1)',
                        position: 'relative', overflow: 'hidden',
                      }}>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"
                        style={{ background: data.glow }} />
                      <div className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: `linear-gradient(90deg,transparent,${color},transparent)` }} />

                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-5">
                          <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                            style={{ background: `${color}18`, border: `1.5px solid ${color}30` }}>
                            <Icon size={18} style={{ color }} />
                          </div>
                          <div>
                            <h3 className="font-syne font-bold text-sm" style={{ color: '#F0F4FF' }}>{category}</h3>
                            <p className="font-outfit text-xs" style={{ color: '#475569' }}>{data.items.length} skills</p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {data.items.map((skill) => (
                            <span key={skill}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-outfit transition-all duration-200 hover:scale-105 cursor-default"
                              style={{ background: `${color}12`, border: `1px solid ${color}22`, color: '#94A3B8' }}>
                              <span className="w-1 h-1 rounded-full flex-shrink-0"
                                style={{ background: color, boxShadow: `0 0 4px ${color}` }} />
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>

          {/* ── Learning Journey ── */}
          <div>
            <AnimatedSection className="mb-8">
              <h2 className="font-syne font-bold text-2xl mb-1" style={{ color: '#F0F4FF' }}>Learning Journey</h2>
              <p className="font-outfit text-sm" style={{ color: '#475569' }}>
                How I progressed from first-year student to building production systems.
              </p>
            </AnimatedSection>

            <div className="relative">
              <div className="absolute left-5 top-2 bottom-2" style={{
                width: 1, background: 'linear-gradient(180deg,rgba(59,130,246,0.5) 0%,rgba(59,130,246,0.05) 100%)',
              }} />
              <div className="space-y-5">
                {learningJourney.map((item, i) => (
                  <AnimatedSection key={item.year + item.title} delay={i * 80} direction="left">
                    <div className="flex gap-5 items-start">
                      <div className="relative flex-shrink-0" style={{ width: 40 }}>
                        <div className="w-10 h-10 rounded-full flex items-center justify-center"
                          style={{ background: 'rgba(59,130,246,0.1)', border: '2px solid rgba(59,130,246,0.35)', boxShadow: '0 0 10px rgba(59,130,246,0.2)' }}>
                          <span className="font-mono font-bold text-xs" style={{ color: '#60A5FA' }}>
                            {String(i + 1).padStart(2, '0')}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 rounded-xl p-4"
                        style={{ background: 'rgba(12,18,32,0.6)', border: '1px solid rgba(59,130,246,0.08)' }}>
                        <div className="flex items-center gap-3 mb-1.5">
                          <span className="font-mono text-xs px-2 py-0.5 rounded"
                            style={{ background: 'rgba(59,130,246,0.1)', color: '#60A5FA', border: '1px solid rgba(59,130,246,0.2)' }}>
                            {item.year}
                          </span>
                          <h3 className="font-syne font-semibold text-base" style={{ color: '#F0F4FF' }}>{item.title}</h3>
                        </div>
                        <p className="font-outfit text-sm" style={{ color: '#64748B' }}>{item.desc}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>

          {/* ── Education & Certifications ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            <AnimatedSection direction="left">
              <h2 className="font-syne font-bold text-xl mb-5" style={{ color: '#F0F4FF' }}>Education</h2>
              <div className="space-y-3">
                {education.map((edu, i) => (
                  <div key={i} className="rounded-xl p-5"
                    style={{ background: 'rgba(12,18,32,0.7)', border: '1px solid rgba(59,130,246,0.1)' }}>
                    <p className="font-syne font-semibold text-sm mb-0.5" style={{ color: '#F0F4FF' }}>{edu.degree}</p>
                    <p className="font-outfit text-xs mb-1" style={{ color: '#60A5FA' }}>{edu.school}</p>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs" style={{ color: '#475569' }}>{edu.period}</span>
                      <span className="font-outfit text-xs px-2 py-0.5 rounded"
                        style={{ background: 'rgba(59,130,246,0.08)', color: '#60A5FA', border: '1px solid rgba(59,130,246,0.15)' }}>
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={100}>
              <h2 className="font-syne font-bold text-xl mb-5" style={{ color: '#F0F4FF' }}>Experience & Certs</h2>
              <div className="space-y-3">
                {experience.map((exp, i) => (
                  <div key={i} className="rounded-xl p-5"
                    style={{ background: 'rgba(16,185,129,0.05)', border: '1px solid rgba(16,185,129,0.18)' }}>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <p className="font-syne font-semibold text-sm" style={{ color: '#F0F4FF' }}>{exp.role}</p>
                        <p className="font-outfit text-xs mt-0.5" style={{ color: '#34D399' }}>{exp.company}</p>
                      </div>
                      {exp.award && (
                        <span className="text-xs px-2 py-0.5 rounded-full font-outfit flex-shrink-0"
                          style={{ background: 'rgba(245,158,11,0.12)', color: '#FBBF24', border: '1px solid rgba(245,158,11,0.25)' }}>
                          🏆 Best Project
                        </span>
                      )}
                    </div>
                    <p className="font-mono text-xs mb-3" style={{ color: '#475569' }}>{exp.period}</p>
                    <ul className="space-y-1.5">
                      {exp.bullets.slice(0, 3).map((b, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                            style={{ background: '#34D399' }} />
                          <span className="font-outfit text-xs leading-relaxed" style={{ color: '#64748B' }}>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                {certifications.map((cert, i) => (
                  <div key={i} className="rounded-xl p-5"
                    style={{ background: 'rgba(245,158,11,0.05)', border: '1px solid rgba(245,158,11,0.18)' }}>
                    <p className="font-syne font-semibold text-sm mb-0.5" style={{ color: '#F0F4FF' }}>{cert.title}</p>
                    <p className="font-outfit text-xs mb-1" style={{ color: '#FBBF24' }}>{cert.issuer}</p>
                    <p className="font-mono text-xs" style={{ color: '#475569' }}>{cert.period}</p>
                    <p className="font-outfit text-xs mt-2" style={{ color: '#64748B' }}>{cert.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* ── Currently Exploring ── */}
          <AnimatedSection>
            <div className="rounded-2xl p-8 relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg,rgba(59,130,246,0.08),rgba(6,182,212,0.05))', border: '1px solid rgba(59,130,246,0.15)' }}>
              <div className="absolute inset-0 grid-bg pointer-events-none" style={{ opacity: 0.3, backgroundSize: '30px 30px' }} />
              <div className="relative z-10 flex items-start justify-between gap-8 flex-wrap">
                <div>
                  <div className="section-tag mb-3">Currently Exploring</div>
                  <h3 className="font-syne font-bold text-xl mb-2" style={{ color: '#F0F4FF' }}>
                    Generative AI Engineering
                  </h3>
                  <p className="font-outfit text-sm max-w-lg" style={{ color: '#64748B' }}>
                    Learning LLM applications, prompt engineering, RAG pipelines, LangChain, OpenAI APIs and AI-powered software systems.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-wrap gap-2">
                    {['LangChain', 'OpenAI APIs', 'Prompt Engineering', 'RAG', 'Vector Databases', 'LLM Applications'].map((tag) => (
                      <span key={tag} className="px-3 py-1.5 rounded-lg text-sm font-outfit"
                        style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)', color: '#93C5FD' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href="/contact" className="btn-primary text-sm self-start">
                    Let&apos;s Build Together <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </MainLayout>
  );
}
