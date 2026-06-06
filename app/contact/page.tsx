'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Linkedin, Github, Send, MapPin, ArrowLeft, CheckCircle, Clock } from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { personalInfo } from '@/lib/data';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate sending (connect to Formspree / EmailJS / API in production)
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSent(true);
  };

  const contactMethods = [
    {
      label:    'Email',
      value:    personalInfo.email,
      href:     `mailto:${personalInfo.email}`,
      icon:     Mail,
      color:    '#3B82F6',
      bg:       'rgba(59,130,246,0.1)',
      border:   'rgba(59,130,246,0.25)',
      subtext:  'Fastest response',
    },
    {
      label:    'LinkedIn',
      value:    'kartikey-kumar-tripathi',
      href:     personalInfo.linkedin,
      icon:     Linkedin,
      color:    '#0A66C2',
      bg:       'rgba(10,102,194,0.1)',
      border:   'rgba(10,102,194,0.3)',
      subtext:  'Connect professionally',
    },
    {
      label:    'GitHub',
      value:    'github.com/tripathik9559',
      href:     personalInfo.github,
      icon:     Github,
      color:    '#E2E8F0',
      bg:       'rgba(255,255,255,0.05)',
      border:   'rgba(255,255,255,0.12)',
      subtext:  'Explore my code',
    },
  ];

  return (
    <MainLayout>
      <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>

        {/* ── Page Hero ── */}
        <div
          className="relative px-8 xl:px-14 pt-12 pb-16 overflow-hidden"
          style={{ borderBottom: '1px solid rgba(59,130,246,0.08)' }}
        >
          <div className="absolute inset-0 grid-bg pointer-events-none" style={{ opacity: 0.5 }} />
          {/* Glow */}
          <div
            className="absolute pointer-events-none"
            style={{
              bottom: '-20%', right: '-5%',
              width: '50%', height: '160%',
              background: 'radial-gradient(ellipse, rgba(59,130,246,0.12) 0%, transparent 65%)',
            }}
          />

          {/* Animated paper plane */}
          <div
            className="paper-plane absolute pointer-events-none hidden xl:block"
            style={{ right: '8%', top: '10%' }}
            aria-hidden="true"
          >
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M105 15L15 52.5L48 60L57 93L105 15Z"
                stroke="#3B82F6"
                strokeWidth="1.5"
                strokeLinejoin="round"
                fill="rgba(59,130,246,0.08)"
              />
              <path
                d="M48 60L66 78"
                stroke="#3B82F6"
                strokeWidth="1"
                strokeDasharray="4 4"
                opacity="0.5"
              />
              {/* Dashed trail */}
              <path
                d="M90 5 Q70 25 50 15"
                stroke="#06B6D4"
                strokeWidth="1"
                strokeDasharray="3 5"
                fill="none"
                opacity="0.3"
              />
            </svg>
          </div>

          <div className="relative" style={{ zIndex: 1 }}>
            <Link href="/" className="btn-ghost inline-flex items-center gap-2 mb-6 text-sm">
              <ArrowLeft size={13} /> Back to Home
            </Link>
            <AnimatedSection>
              <span className="section-tag mb-4">Let's Connect</span>
              <h1
                className="font-syne font-bold mt-3 mb-3"
                style={{ fontSize: 'clamp(2.2rem,4vw,3.5rem)', letterSpacing: '-0.02em', color: '#F0F4FF' }}
              >
                Let&apos;s Build Something{' '}
                <span className="gradient-text">Amazing.</span>
              </h1>
              <p className="font-outfit text-base max-w-xl" style={{ color: '#64748B' }}>
                Open to opportunities, collaborations, AI projects, and software development roles.
                Whether you have a project idea or just want to say hi — I'd love to hear from you.
              </p>
            </AnimatedSection>

            {/* Response time badge */}
            <AnimatedSection delay={150} className="mt-5 flex flex-wrap gap-3">
              <div
                className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)' }}
              >
                <div className="avail-dot" />
                <span className="font-outfit text-xs" style={{ color: '#10B981' }}>Available for opportunities</span>
              </div>
              <div
                className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)' }}
              >
                <Clock size={11} style={{ color: '#60A5FA' }} />
                <span className="font-outfit text-xs" style={{ color: '#60A5FA' }}>Usually replies within 24h</span>
              </div>
              <div
                className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <MapPin size={11} style={{ color: '#94A3B8' }} />
                <span className="font-outfit text-xs" style={{ color: '#94A3B8' }}>Lucknow, India · Remote OK</span>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* ── Main Content ── */}
        <div className="px-8 xl:px-14 2xl:px-20 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl">

            {/* ── Left: Contact Cards ── */}
            <div>
              <AnimatedSection className="mb-8" direction="left">
                <h2 className="font-syne font-bold text-xl mb-2" style={{ color: '#F0F4FF' }}>
                  Reach Out Directly
                </h2>
                <p className="font-outfit text-sm" style={{ color: '#64748B' }}>
                  Pick your preferred channel — I'm active on all of them.
                </p>
              </AnimatedSection>

              <div className="space-y-4">
                {contactMethods.map((method, i) => {
                  const Icon = method.icon;
                  return (
                    <AnimatedSection key={method.label} delay={i * 100} direction="left">
                      <a
                        href={method.href}
                        target={method.href.startsWith('mailto') ? undefined : '_blank'}
                        rel="noopener noreferrer"
                        className="contact-card group"
                      >
                        {/* Icon */}
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                          style={{
                            background: method.bg,
                            border: `1px solid ${method.border}`,
                            boxShadow: `0 0 20px ${method.bg}`,
                          }}
                        >
                          <Icon size={20} style={{ color: method.color }} />
                        </div>
                        {/* Text */}
                        <div className="flex-1 min-w-0">
                          <p
                            className="font-syne font-semibold text-sm mb-0.5"
                            style={{ color: '#F0F4FF' }}
                          >
                            {method.label}
                          </p>
                          <p
                            className="font-outfit text-sm truncate"
                            style={{ color: '#64748B' }}
                          >
                            {method.value}
                          </p>
                          <p className="font-outfit text-xs mt-0.5" style={{ color: '#334155' }}>
                            {method.subtext}
                          </p>
                        </div>
                        <Send
                          size={14}
                          className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1 group-hover:translate-x-0"
                          style={{ color: method.color }}
                        />
                      </a>
                    </AnimatedSection>
                  );
                })}
              </div>

              {/* What I'm open to */}
              <AnimatedSection delay={350} direction="left" className="mt-8">
                <div
                  className="rounded-xl p-6"
                  style={{
                    background: 'rgba(12,18,32,0.6)',
                    border: '1px solid rgba(59,130,246,0.1)',
                  }}
                >
                  <h3 className="font-syne font-semibold text-base mb-4" style={{ color: '#F0F4FF' }}>
                    What I'm Open To
                  </h3>
                  <div className="space-y-2">
                    {[
                      'Internship or full-time engineering roles',
                      'AI / GenAI project collaborations',
                      'Freelance software development',
                      'Open source contributions',
                      'Technical discussions & mentorship',
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <div
                          className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0"
                          style={{ background: 'rgba(59,130,246,0.15)' }}
                        >
                          <CheckCircle size={10} style={{ color: '#60A5FA' }} />
                        </div>
                        <span className="font-outfit text-sm" style={{ color: '#64748B' }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* ── Right: Contact Form ── */}
            <AnimatedSection direction="right" delay={100}>
              <div
                className="rounded-2xl p-8"
                style={{
                  background: 'rgba(12,18,32,0.75)',
                  border: '1px solid rgba(59,130,246,0.12)',
                }}
              >
                {sent ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{
                        background: 'rgba(16,185,129,0.12)',
                        border: '2px solid rgba(16,185,129,0.4)',
                        boxShadow: '0 0 30px rgba(16,185,129,0.2)',
                      }}
                    >
                      <CheckCircle size={28} style={{ color: '#10B981' }} />
                    </div>
                    <h3 className="font-syne font-bold text-xl" style={{ color: '#F0F4FF' }}>
                      Message Sent!
                    </h3>
                    <p className="font-outfit text-sm max-w-xs" style={{ color: '#64748B' }}>
                      Thanks for reaching out. I'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                      className="btn-ghost text-sm mt-2"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-syne font-bold text-xl mb-6" style={{ color: '#F0F4FF' }}>
                      Send a Message
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Name + Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="font-outfit text-xs mb-1.5 block" style={{ color: '#64748B' }}>
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder="John Doe"
                            className="w-full px-3 py-2.5 rounded-lg font-outfit text-sm outline-none transition-all"
                            style={{
                              background: 'rgba(255,255,255,0.04)',
                              border: '1px solid rgba(59,130,246,0.15)',
                              color: '#F0F4FF',
                            }}
                            onFocus={(e) => { e.target.style.borderColor = 'rgba(59,130,246,0.5)'; }}
                            onBlur={(e) => { e.target.style.borderColor = 'rgba(59,130,246,0.15)'; }}
                          />
                        </div>
                        <div>
                          <label className="font-outfit text-xs mb-1.5 block" style={{ color: '#64748B' }}>
                            Your Email *
                          </label>
                          <input
                            type="email"
                            required
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="john@company.com"
                            className="w-full px-3 py-2.5 rounded-lg font-outfit text-sm outline-none transition-all"
                            style={{
                              background: 'rgba(255,255,255,0.04)',
                              border: '1px solid rgba(59,130,246,0.15)',
                              color: '#F0F4FF',
                            }}
                            onFocus={(e) => { e.target.style.borderColor = 'rgba(59,130,246,0.5)'; }}
                            onBlur={(e) => { e.target.style.borderColor = 'rgba(59,130,246,0.15)'; }}
                          />
                        </div>
                      </div>

                      {/* Subject */}
                      <div>
                        <label className="font-outfit text-xs mb-1.5 block" style={{ color: '#64748B' }}>
                          Subject *
                        </label>
                        <input
                          type="text"
                          required
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          placeholder="Internship opportunity / Project collaboration / ..."
                          className="w-full px-3 py-2.5 rounded-lg font-outfit text-sm outline-none transition-all"
                          style={{
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(59,130,246,0.15)',
                            color: '#F0F4FF',
                          }}
                          onFocus={(e) => { e.target.style.borderColor = 'rgba(59,130,246,0.5)'; }}
                          onBlur={(e) => { e.target.style.borderColor = 'rgba(59,130,246,0.15)'; }}
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label className="font-outfit text-xs mb-1.5 block" style={{ color: '#64748B' }}>
                          Message *
                        </label>
                        <textarea
                          required
                          rows={5}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="Tell me about your project, opportunity, or just say hi..."
                          className="w-full px-3 py-2.5 rounded-lg font-outfit text-sm outline-none transition-all resize-none"
                          style={{
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(59,130,246,0.15)',
                            color: '#F0F4FF',
                          }}
                          onFocus={(e) => { e.target.style.borderColor = 'rgba(59,130,246,0.5)'; }}
                          onBlur={(e) => { e.target.style.borderColor = 'rgba(59,130,246,0.15)'; }}
                        />
                      </div>

                      {/* Note */}
                      <p className="font-outfit text-xs" style={{ color: '#334155' }}>
                        💡 Form is a placeholder UI. Wire up to Formspree / EmailJS / API for live sending.
                      </p>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary w-full justify-center py-3"
                        style={{ opacity: loading ? 0.7 : 1 }}
                      >
                        {loading ? (
                          <>
                            <span
                              className="w-4 h-4 rounded-full border-2 animate-spin"
                              style={{ borderColor: '#fff3', borderTopColor: '#fff' }}
                            />
                            Sending…
                          </>
                        ) : (
                          <>
                            <Send size={15} />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
