'use client';

import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { ArrowRight, Code, Layers, Database, Wrench, BookOpen, Sparkles } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { skills } from '@/lib/data';

const categoryMeta: Record<string, { Icon: LucideIcon; color: string }> = {
  'Programming Languages':     { Icon: Code,     color: '#3B82F6' },
  'Frameworks & Technologies': { Icon: Layers,   color: '#06B6D4' },
  'Databases':                 { Icon: Database, color: '#8B5CF6' },
  'Tools & Platforms':         { Icon: Wrench,   color: '#10B981' },
  'Core CS Concepts':          { Icon: BookOpen, color: '#F59E0B' },
  'AI & GenAI (Learning)':     { Icon: Sparkles, color: '#EC4899' },
};

export default function SkillsPreview() {
  const previewCategories = Object.entries(skills).slice(0, 4);

  return (
    <section id="skills" className="px-8 xl:px-14 2xl:px-20 py-20"
      style={{ borderTop: '1px solid rgba(59,130,246,0.07)' }}>
      <AnimatedSection className="flex items-end justify-between mb-12">
        <div>
          <span className="section-tag mb-4">Skills & Technologies</span>
          <h2 className="section-title text-4xl lg:text-5xl mt-3">What I Work With</h2>
          <p className="font-outfit text-sm mt-2" style={{ color: '#475569' }}>
            From resume — real skills, no exaggeration.
          </p>
        </div>
        <Link href="/skills" className="btn-ghost hidden sm:inline-flex items-center gap-2">
          All Skills <ArrowRight size={13} />
        </Link>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {previewCategories.map(([category, data], i) => {
          const meta = categoryMeta[category];
          const Icon = meta?.Icon ?? Code;
          const color = meta?.color ?? data.color;
          return (
            <AnimatedSection key={category} delay={i * 80} direction="up">
              <div className="skill-card h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: `${color}18`, border: `1px solid ${color}30` }}>
                    <Icon size={16} style={{ color }} />
                  </div>
                  <span className="font-syne font-semibold text-sm" style={{ color: '#F0F4FF' }}>{category}</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  {data.items.map((skill) => (
                    <div key={skill} className="flex items-center gap-2 py-0.5">
                      <span className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: color, boxShadow: `0 0 4px ${color}` }} />
                      <span className="font-outfit text-sm" style={{ color: '#94A3B8' }}>{skill}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 h-px rounded"
                  style={{ background: `linear-gradient(90deg,${color}60,transparent)` }} />
              </div>
            </AnimatedSection>
          );
        })}
      </div>

      <div className="mt-6 flex justify-center sm:hidden">
        <Link href="/skills" className="btn-secondary">View All Skills <ArrowRight size={14} /></Link>
      </div>
    </section>
  );
}
