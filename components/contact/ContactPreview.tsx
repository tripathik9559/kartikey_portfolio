'use client';

import Link from 'next/link';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { personalInfo } from '@/lib/data';

export default function ContactPreview() {
  return (
    <section
      id="contact"
      className="px-8 xl:px-14 2xl:px-20 py-20"
      style={{ borderTop: '1px solid rgba(59,130,246,0.07)' }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: CTA text */}
        <AnimatedSection direction="left">
          <span className="section-tag mb-4">Let's Connect</span>
          <h2 className="section-title text-4xl lg:text-5xl mt-3 mb-4">
            Let&apos;s Build Something{' '}
            <span className="gradient-text">Amazing.</span>
          </h2>
          <p className="font-outfit text-base leading-relaxed mb-8" style={{ color: '#64748B' }}>
            Open to opportunities, collaborations, AI projects, and software development roles.
            Whether you have a project in mind or just want to connect — reach out.
          </p>

          <Link href="/contact" className="btn-primary text-base py-3 px-6">
            <Send size={16} />
            Get In Touch
          </Link>
        </AnimatedSection>

        {/* Right: Contact cards */}
        <AnimatedSection direction="right" delay={150}>
          <div className="space-y-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="contact-card group"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.25)' }}
              >
                <Mail size={18} style={{ color: '#60A5FA' }} />
              </div>
              <div>
                <p className="font-syne font-semibold text-sm" style={{ color: '#F0F4FF' }}>Email</p>
                <p className="font-outfit text-sm" style={{ color: '#64748B' }}>
                  {personalInfo.email}
                </p>
              </div>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card group"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(10,102,194,0.12)', border: '1px solid rgba(10,102,194,0.3)' }}
              >
                <Linkedin size={18} style={{ color: '#0A66C2' }} />
              </div>
              <div>
                <p className="font-syne font-semibold text-sm" style={{ color: '#F0F4FF' }}>LinkedIn</p>
                <p className="font-outfit text-sm" style={{ color: '#64748B' }}>
                  kartikey-kumar-tripathi
                </p>
              </div>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card group"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <Github size={18} style={{ color: '#E2E8F0' }} />
              </div>
              <div>
                <p className="font-syne font-semibold text-sm" style={{ color: '#F0F4FF' }}>GitHub</p>
                <p className="font-outfit text-sm" style={{ color: '#64748B' }}>
                  github.com/tripathik9559
                </p>
              </div>
            </a>
          </div>
        </AnimatedSection>
      </div>

      {/* Animated paper plane decoration */}
      <div
        className="hidden xl:block absolute pointer-events-none"
        style={{ right: '5%', bottom: '8%', zIndex: 0 }}
        aria-hidden="true"
      >
        <div className="paper-plane">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ opacity: 0.15 }}
          >
            <path
              d="M70 10L10 35L32 40L38 62L70 10Z"
              stroke="#3B82F6"
              strokeWidth="2"
              strokeLinejoin="round"
              fill="rgba(59,130,246,0.1)"
            />
            <path d="M32 40L44 52" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="3 3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
