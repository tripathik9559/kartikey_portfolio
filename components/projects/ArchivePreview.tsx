'use client';

import Link from 'next/link';
import { Github, ArrowRight, ExternalLink } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { archiveProjects } from '@/lib/data';

export default function ArchivePreview() {
  const preview = archiveProjects.slice(0, 6);

  return (
    <section
      id="archive"
      className="px-8 xl:px-14 2xl:px-20 py-20"
      style={{ borderTop: '1px solid rgba(59,130,246,0.07)' }}
    >
      <AnimatedSection className="flex items-end justify-between mb-10">
        <div>
          <span className="section-tag mb-4">Project Archive</span>
          <h2 className="section-title text-4xl lg:text-5xl mt-3">All Projects</h2>
        </div>
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://github.com/tripathik9559"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost items-center gap-2"
          >
            <Github size={13} />
            All on GitHub
            <ExternalLink size={11} />
          </a>
          <Link href="/archive" className="btn-ghost items-center gap-2">
            Full Archive
            <ArrowRight size={13} />
          </Link>
        </div>
      </AnimatedSection>

      {/* Table */}
      <AnimatedSection delay={100}>
        <div
          className="rounded-xl overflow-hidden"
          style={{ border: '1px solid rgba(59,130,246,0.1)' }}
        >
          <table className="archive-table">
            <thead>
              <tr>
                <th style={{ paddingLeft: 20 }}>Project Name</th>
                <th>Tech Stack</th>
                <th className="hidden sm:table-cell">Year</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {preview.map((proj, i) => (
                <tr key={proj.name} className="group">
                  <td style={{ paddingLeft: 20 }}>
                    <span
                      className="font-outfit font-medium text-sm group-hover:text-blue-400 transition-colors"
                      style={{ color: '#CBD5E1' }}
                    >
                      {proj.name}
                    </span>
                  </td>
                  <td>
                    <span className="font-mono text-xs" style={{ color: '#475569' }}>
                      {proj.stack}
                    </span>
                  </td>
                  <td className="hidden sm:table-cell">
                    <span className="font-mono text-xs" style={{ color: '#334155' }}>
                      {proj.year}
                    </span>
                  </td>
                  <td className="pr-4">
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity btn-ghost text-xs py-1"
                    >
                      <Github size={12} />
                      GitHub
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimatedSection>

      {archiveProjects.length > 6 && (
        <div className="mt-4 text-center">
          <Link href="/archive" className="btn-ghost text-sm">
            +{archiveProjects.length - 6} more projects →
          </Link>
        </div>
      )}
    </section>
  );
}
