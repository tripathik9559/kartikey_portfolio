'use client';

import Link from 'next/link';
import { Download, Mail, Github, Linkedin, ChevronDown, Zap } from 'lucide-react';
import ParticleField from './ParticleField';
import { personalInfo } from '@/lib/data';

const techChips = [
  { label: 'Python',      color: '#3776AB' },
  { label: 'Django',      color: '#44B78B' },
  { label: 'FastAPI',     color: '#009688' },
  { label: 'PostgreSQL',  color: '#336791' },
  { label: 'Docker',      color: '#2496ED' },
  { label: 'Redis',       color: '#DC382D' },
  { label: 'Node.js',     color: '#339933' },
  { label: 'GenAI',       color: '#10A37F' },
];

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden w-full"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 grid-bg pointer-events-none"
        style={{ zIndex: 0, opacity: 1 }}
      />

      {/* Radial hero glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-20%', left: '30%',
          width: '70%', height: '80%',
          background:
            'radial-gradient(ellipse at center, rgba(59,130,246,0.18) 0%, rgba(6,182,212,0.08) 40%, transparent 70%)',
          zIndex: 0,
        }}
      />

      {/* Particle field */}
      <div className="absolute inset-0" style={{ zIndex: 1 }}>
        <ParticleField />
      </div>

      {/* ── Main hero content ── */}
      <div
        className="relative flex-1 flex items-center pt-16"
        style={{ zIndex: 2, minHeight: '90vh' }}
      >
        <div className="w-full px-8 xl:px-14 2xl:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── LEFT: Text + CTAs ── */}
          <div className="flex flex-col gap-6">
            {/* Role badge */}
            <div className="section-tag w-fit animate-fade-up">
              <Zap size={10} />
              GenAI Engineer & Software Developer
            </div>

            {/* Name */}
            <div className="animate-fade-up" style={{ animationDelay: '80ms' }}>
              <h1
                className="font-syne leading-none tracking-tight"
                style={{ fontSize: 'clamp(2.8rem, 5vw, 4.2rem)', lineHeight: 1.05 }}
              >
                <span style={{ color: '#F0F4FF', display: 'block' }}>Kartikey</span>
                <span className="gradient-text" style={{ display: 'block' }}>Kumar</span>
                <span style={{ color: '#F0F4FF', display: 'block' }}>Tripathi</span>
              </h1>
            </div>

            {/* Tagline */}
            <p
              className="font-outfit text-base leading-relaxed max-w-lg animate-fade-up"
              style={{ color: '#64748B', animationDelay: '160ms' }}
            >
              Building{' '}
              <span style={{ color: '#60A5FA' }}>AI Applications</span>,{' '}
              <span style={{ color: '#22D3EE' }}>Intelligent Systems</span>, and{' '}
              <span style={{ color: '#A78BFA' }}>Scalable Software Solutions</span>{' '}
              that solve real-world problems.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap gap-3 animate-fade-up"
              style={{ animationDelay: '240ms' }}
            >
              <a
                href="/resume.pdf"
                download="Kartikey_Kumar_Tripathi_Resume.pdf"
                className="btn-primary"
              >
                <Download size={15} />
                Download Resume
              </a>
              <Link href="/contact" className="btn-secondary">
                <Mail size={15} />
                Contact Me
              </Link>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <Github size={14} />
                GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <Linkedin size={14} />
                LinkedIn
              </a>
            </div>

            {/* Tech stack chips */}
            <div className="animate-fade-up" style={{ animationDelay: '320ms' }}>
              <p
                className="font-outfit text-xs uppercase tracking-widest mb-3"
                style={{ color: '#334155', letterSpacing: '0.12em' }}
              >
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {techChips.map((t) => (
                  <span
                    key={t.label}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-outfit transition-all duration-200 hover:scale-105"
                    style={{
                      background: `${t.color}18`,
                      border: `1px solid ${t.color}40`,
                      color: t.color,
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: t.color, boxShadow: `0 0 4px ${t.color}` }}
                    />
                    {t.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className="flex items-center gap-3 animate-fade-up" style={{ animationDelay: '400ms' }}>
              <div
                className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                style={{
                  background: 'rgba(16,185,129,0.08)',
                  border: '1px solid rgba(16,185,129,0.25)',
                }}
              >
                <div className="avail-dot" />
                <span className="font-outfit text-xs" style={{ color: '#10B981' }}>
                  Available for Roles
                </span>
              </div>
              <span className="font-outfit text-xs" style={{ color: '#334155' }}>
                📍 Lucknow, India
              </span>
            </div>
          </div>

          {/* ── RIGHT: Premium Hero Portrait ── */}
          <div
            className="flex items-center justify-center animate-fade-up"
            style={{ animationDelay: '200ms' }}
          >
            <div className="hero-portrait-wrapper">
              {/* Outer ambient glow rings */}
              <div className="hero-glow-ring hero-glow-ring-1" />
              <div className="hero-glow-ring hero-glow-ring-2" />

              {/* Portrait frame */}
              <div className="hero-portrait-frame">
                <div className="hero-portrait-inner">
                  {/* Scan line overlay */}
                  <div className="scan-overlay" style={{ borderRadius: '20px' }} />

                  {/* Actual photo */}
                  <img
                    src="/photo.jpg"
                    alt="Kartikey Kumar Tripathi"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top center',
                      borderRadius: '20px',
                      position: 'relative',
                      zIndex: 10,
                      display: 'block',
                    }}
                    onError={(e) => {
                      const img = e.currentTarget;
                      img.style.display = 'none';
                      const fallback = img.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />

                  {/* Fallback initials */}
                  <div style={{
                    display: 'none',
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '20px',
                    background: 'linear-gradient(135deg, rgba(59,130,246,0.25), rgba(6,182,212,0.15))',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    zIndex: 10,
                  }}>
                    <span className="font-syne font-bold" style={{ fontSize: '4rem', color: '#60A5FA' }}>KK</span>
                    <span className="font-outfit text-sm mt-2" style={{ color: '#60A5FA', opacity: 0.6 }}>Add photo.jpg to /public</span>
                  </div>

                  {/* Inner light gradient */}
                  <div style={{
                    position: 'absolute', inset: 0, borderRadius: '20px', zIndex: 11, pointerEvents: 'none',
                    background: 'linear-gradient(to bottom, transparent 60%, rgba(7,11,20,0.85) 100%)',
                  }} />

                  {/* Corner accent lines */}
                  <div className="hero-corner hero-corner-tl" />
                  <div className="hero-corner hero-corner-tr" />
                  <div className="hero-corner hero-corner-bl" />
                  <div className="hero-corner hero-corner-br" />
                </div>

                {/* Name label at bottom */}
                <div className="hero-portrait-label">
                  <span className="font-syne font-bold text-sm" style={{ color: '#F0F4FF' }}>Kartikey Kumar Tripathi</span>
                  <span className="font-outfit text-xs" style={{ color: '#60A5FA' }}>GenAI Engineer · Backend Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stat cards strip at bottom ── */}
      <div
        className="relative px-8 xl:px-14 2xl:px-20 pb-10"
        style={{ zIndex: 2 }}
      >
        <div className="grid grid-cols-3 gap-4 max-w-2xl">
          {[
            { value: '1+',    label: 'Internship',   sublabel: 'Experience',    color: '#60A5FA' },
            { value: '10+',   label: 'Projects',     sublabel: 'Built',         color: '#22D3EE' },
            { value: '∞',     label: 'Always',       sublabel: 'Learning',      color: '#A78BFA' },
          ].map((s) => (
            <div
              key={s.label}
              className="glass-card-static p-5 flex flex-col"
              style={{ background: 'rgba(12,18,32,0.85)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <span
                className="font-syne font-bold text-3xl leading-none mb-1.5"
                style={{ color: s.color, textShadow: `0 0 20px ${s.color}60` }}
              >
                {s.value}
              </span>
              <span
                className="font-outfit text-sm font-semibold"
                style={{ color: '#CBD5E1' }}
              >
                {s.label}
              </span>
              <span className="font-outfit text-xs mt-0.5" style={{ color: '#64748B' }}>
                {s.sublabel}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce"
        style={{ zIndex: 2 }}
      >
        <span className="font-outfit text-xs" style={{ color: '#334155' }}>
          Scroll
        </span>
        <ChevronDown size={16} style={{ color: '#334155' }} />
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, transparent, var(--bg-primary))',
          zIndex: 3,
        }}
      />
    </section>
  );
}
