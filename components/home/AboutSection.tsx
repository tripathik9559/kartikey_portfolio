'use client';

import { Code2, Brain, Server, Award } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { personalInfo, stats, experience } from '@/lib/data';

const capabilityCards = [
  {
    icon: Server,
    title: 'Backend Development',
    description:
      'Building production Django and FastAPI backends with PostgreSQL, Redis, Docker, and Gunicorn. Deployed real apps on Render and Railway Cloud.',
    tags: ['Django', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
    color: '#3B82F6',
    glow: 'rgba(59,130,246,0.15)',
  },
  {
    icon: Brain,
    title: 'Generative AI (Learning)',
    description:
      'Exploring LLM applications, RAG pipelines, AI agents with LangChain, and OpenAI API integrations — building towards intelligent autonomous systems.',
    tags: ['LLM Apps', 'RAG Systems', 'AI Agents', 'LangChain', 'OpenAI APIs'],
    color: '#10A37F',
    glow: 'rgba(16,163,127,0.15)',
  },
  {
    icon: Code2,
    title: 'Software Engineering',
    description:
      'Strong CS fundamentals: DSA, OOP, DBMS, OS, Computer Networks, SDLC. Writes clean, debuggable, and maintainable production code.',
    tags: ['Python', 'Node.js', 'Git', 'DSA', 'OOP', 'SDLC'],
    color: '#8B5CF6',
    glow: 'rgba(139,92,246,0.15)',
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="px-8 xl:px-14 2xl:px-20 py-20"
      style={{ borderTop: '1px solid rgba(59,130,246,0.07)' }}
    >
      <AnimatedSection className="mb-12">
        <span className="section-tag mb-4">About</span>
        <h2 className="section-title text-4xl lg:text-5xl mt-3">Who I Am</h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* ── Left: Bio + Internship + Stats ── */}
        <AnimatedSection direction="left" delay={100}>
          <div className="space-y-5">
            {personalInfo.bio.map((para, i) => (
              <p key={i} className="font-outfit text-base leading-relaxed" style={{ color: '#64748B' }}>
                {para}
              </p>
            ))}

            <blockquote
              className="pl-4 py-1 font-outfit text-sm italic"
              style={{ borderLeft: '3px solid rgba(59,130,246,0.5)', color: '#60A5FA' }}
            >
              "Received Best Project recognition during my internship at Softpro India — March to November 2024."
            </blockquote>
          </div>

          {/* Internship highlight card */}
          <div
            className="mt-6 rounded-xl p-4 flex items-start gap-4"
            style={{ background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.18)' }}
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(245,158,11,0.12)' }}
            >
              <Award size={16} style={{ color: '#FBBF24' }} />
            </div>
            <div>
              <p className="font-syne font-semibold text-sm mb-0.5" style={{ color: '#F0F4FF' }}>
                🏆 Best Project Award
              </p>
              <p className="font-outfit text-xs" style={{ color: '#FBBF24' }}>
                {experience[0].company}
              </p>
              <p className="font-outfit text-xs mt-0.5" style={{ color: '#64748B' }}>
                {experience[0].period} · Backend development, Python, SQL automation
              </p>
            </div>
          </div>

          {/* Real stat strip */}
          <div className="grid grid-cols-3 gap-3 mt-6">
            {stats.map((s) => (
              <div key={s.label} className="glass-card p-4 text-center" style={{ background: 'rgba(12,18,32,0.85)', border: '1px solid rgba(59,130,246,0.15)' }}>
                <span className="font-syne font-bold text-2xl block mb-1" style={{ color: '#60A5FA', textShadow: '0 0 16px rgba(96,165,250,0.5)' }}>
                  {s.value}
                </span>
                <span className="font-outfit text-sm font-semibold block" style={{ color: '#CBD5E1' }}>
                  {s.label}
                </span>
                <span className="font-outfit text-xs block mt-0.5" style={{ color: '#64748B' }}>
                  {s.sublabel}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* ── Right: Capability Cards ── */}
        <AnimatedSection direction="right" delay={200}>
          <div className="space-y-4">
            {capabilityCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="glass-card p-5 cursor-default group"
                  style={{ position: 'relative', overflow: 'hidden' }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"
                    style={{ background: card.glow }}
                  />
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: `${card.color}18`, border: `1px solid ${card.color}35` }}
                      >
                        <Icon size={18} style={{ color: card.color }} />
                      </div>
                      <div>
                        <h3 className="font-syne font-semibold text-base mb-1" style={{ color: '#F0F4FF' }}>
                          {card.title}
                        </h3>
                        <p className="font-outfit text-sm leading-relaxed" style={{ color: '#64748B' }}>
                          {card.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 ml-14">
                      {card.tags.map((tag) => (
                        <span key={tag} className="skill-pill text-xs px-2 py-0.5">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
