'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Github, Search, ExternalLink, ArrowLeft, Filter } from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { projects, extendedProjects } from '@/lib/data';

// Combine all projects for the archive
const allArchiveItems = [
  ...projects.map((p) => ({
    name: p.title,
    stack: (p.techStack ?? []).join(', '),
    year: p.year,
    github: p.github,
    category: p.category,
    featured: true,
    slug: p.slug,
  })),
  ...extendedProjects.map((p) => ({
    name: p.title,
    stack: (p.tech ?? p.techStack ?? []).join(', '),
    year: p.year,
    github: p.github,
    category: p.category,
    featured: false,
    slug: p.slug,
  })),
];

const CATEGORIES = ['All', 'Full-Stack', 'AI/ML', 'Computer Vision', 'Data Analysis', 'Frontend'];

export default function ArchivePage() {
  const [query,    setQuery]    = useState('');
  const [category, setCategory] = useState('All');
  const [sortBy,   setSortBy]   = useState<'year' | 'name'>('year');
  const [sortDir,  setSortDir]  = useState<'desc' | 'asc'>('desc');

  const filtered = useMemo(() => {
    let list = [...allArchiveItems];

    // Filter by search
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.stack.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    // Filter by category
    if (category !== 'All') {
      list = list.filter((p) => p.category === category);
    }

    // Sort
    list.sort((a, b) => {
      if (sortBy === 'year') {
        return sortDir === 'desc' ? b.year - a.year : a.year - b.year;
      }
      const cmp = a.name.localeCompare(b.name);
      return sortDir === 'desc' ? -cmp : cmp;
    });

    return list;
  }, [query, category, sortBy, sortDir]);

  const toggleSort = (field: 'year' | 'name') => {
    if (sortBy === field) setSortDir((d) => (d === 'desc' ? 'asc' : 'desc'));
    else { setSortBy(field); setSortDir('desc'); }
  };

  return (
    <MainLayout>
      <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>

        {/* ── Page Hero ── */}
        <div
          className="relative px-8 xl:px-14 pt-12 pb-14 overflow-hidden"
          style={{ borderBottom: '1px solid rgba(59,130,246,0.08)' }}
        >
          <div className="absolute inset-0 grid-bg pointer-events-none" style={{ opacity: 0.5 }} />
          <div
            className="absolute pointer-events-none"
            style={{
              top: '-40%', left: '-10%',
              width: '50%', height: '200%',
              background: 'radial-gradient(ellipse, rgba(139,92,246,0.08) 0%, transparent 65%)',
            }}
          />
          <div className="relative" style={{ zIndex: 1 }}>
            <Link href="/" className="btn-ghost inline-flex items-center gap-2 mb-6 text-sm">
              <ArrowLeft size={13} /> Back to Home
            </Link>
            <AnimatedSection>
              <span className="section-tag mb-4">Project Archive</span>
              <h1
                className="font-syne font-bold mt-3 mb-3"
                style={{ fontSize: 'clamp(2.2rem,4vw,3.5rem)', letterSpacing: '-0.02em', color: '#F0F4FF' }}
              >
                All Projects
              </h1>
              <p className="font-outfit text-base max-w-xl" style={{ color: '#64748B' }}>
                Every project I've built — from full-stack platforms and AI systems to data analysis tools and frontend experiments.
              </p>
            </AnimatedSection>
          </div>
        </div>

        <div className="px-8 xl:px-14 2xl:px-20 py-10">

          {/* ── Controls ── */}
          <AnimatedSection className="mb-8">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">

              {/* Search */}
              <div
                className="relative flex-1 max-w-sm"
              >
                <Search
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                  style={{ color: '#475569' }}
                />
                <input
                  type="text"
                  placeholder="Search projects or tech..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 rounded-lg font-outfit text-sm outline-none transition-all"
                  style={{
                    background: 'rgba(12,18,32,0.8)',
                    border: '1px solid rgba(59,130,246,0.15)',
                    color: '#F0F4FF',
                    caretColor: '#60A5FA',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(59,130,246,0.45)';
                    e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.08)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(59,130,246,0.15)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Category filter */}
              <div className="flex items-center gap-1.5 flex-wrap">
                <Filter size={13} style={{ color: '#475569' }} />
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className="px-3 py-1.5 rounded-lg text-xs font-outfit transition-all duration-200"
                    style={{
                      background: category === cat ? 'rgba(59,130,246,0.15)' : 'rgba(255,255,255,0.03)',
                      border: category === cat ? '1px solid rgba(59,130,246,0.4)' : '1px solid rgba(255,255,255,0.06)',
                      color: category === cat ? '#60A5FA' : '#64748B',
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Result count */}
            <p className="font-outfit text-xs mt-3" style={{ color: '#334155' }}>
              Showing <span style={{ color: '#60A5FA' }}>{filtered.length}</span> of {allArchiveItems.length} projects
            </p>
          </AnimatedSection>

          {/* ── Table ── */}
          <AnimatedSection delay={100}>
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: '1px solid rgba(59,130,246,0.1)' }}
            >
              <table className="archive-table">
                <thead>
                  <tr>
                    <th style={{ paddingLeft: 20, width: '35%' }}>
                      <button
                        onClick={() => toggleSort('name')}
                        className="flex items-center gap-1 hover:text-blue-400 transition-colors"
                        style={{ color: 'inherit', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit', letterSpacing: 'inherit', textTransform: 'inherit', fontWeight: 'inherit' }}
                      >
                        Project Name
                        {sortBy === 'name' && <span style={{ color: '#60A5FA' }}>{sortDir === 'desc' ? ' ↓' : ' ↑'}</span>}
                      </button>
                    </th>
                    <th style={{ width: '35%' }}>Tech Stack</th>
                    <th className="hidden sm:table-cell" style={{ width: '10%' }}>Category</th>
                    <th style={{ width: '10%' }}>
                      <button
                        onClick={() => toggleSort('year')}
                        className="flex items-center gap-1 hover:text-blue-400 transition-colors"
                        style={{ color: 'inherit', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit', letterSpacing: 'inherit', textTransform: 'inherit', fontWeight: 'inherit' }}
                      >
                        Year
                        {sortBy === 'year' && <span style={{ color: '#60A5FA' }}>{sortDir === 'desc' ? ' ↓' : ' ↑'}</span>}
                      </button>
                    </th>
                    <th style={{ width: '10%' }} />
                  </tr>
                </thead>
                <tbody>
                  {filtered.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="text-center py-12">
                        <p className="font-outfit text-sm" style={{ color: '#334155' }}>
                          No projects match your search.
                        </p>
                      </td>
                    </tr>
                  ) : (
                    filtered.map((proj) => (
                      <tr key={proj.name} className="group">
                        <td style={{ paddingLeft: 20 }}>
                          <div className="flex items-center gap-2">
                            {proj.featured && (
                              <span
                                className="text-xs px-1.5 py-0.5 rounded font-outfit flex-shrink-0"
                                style={{
                                  background: 'rgba(59,130,246,0.1)',
                                  color: '#60A5FA',
                                  border: '1px solid rgba(59,130,246,0.2)',
                                  fontSize: 10,
                                }}
                              >
                                Featured
                              </span>
                            )}
                            {proj.slug ? (
                              <Link
                                href={`/projects/${proj.slug}`}
                                className="font-outfit font-medium text-sm transition-colors hover:text-blue-400"
                                style={{ color: '#CBD5E1' }}
                              >
                                {proj.name}
                              </Link>
                            ) : (
                              <span
                                className="font-outfit font-medium text-sm group-hover:text-blue-400 transition-colors"
                                style={{ color: '#CBD5E1' }}
                              >
                                {proj.name}
                              </span>
                            )}
                          </div>
                        </td>
                        <td>
                          <span className="font-mono text-xs" style={{ color: '#475569' }}>
                            {proj.stack.length > 45 ? proj.stack.slice(0, 45) + '…' : proj.stack}
                          </span>
                        </td>
                        <td className="hidden sm:table-cell">
                          <span
                            className="text-xs px-2 py-0.5 rounded-full font-outfit"
                            style={{
                              background: 'rgba(255,255,255,0.04)',
                              border: '1px solid rgba(255,255,255,0.07)',
                              color: '#475569',
                              whiteSpace: 'nowrap',
                              display: 'inline-block',
                            }}
                          >
                            {proj.category}
                          </span>
                        </td>
                        <td>
                          <span className="font-mono text-xs" style={{ color: '#334155' }}>
                            {proj.year}
                          </span>
                        </td>
                        <td className="pr-4">
                          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <a
                              href={proj.github ?? '#'}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-ghost text-xs py-1 px-2"
                              title="GitHub"
                            >
                              <Github size={12} />
                            </a>
                            {proj.slug && (
                              <Link
                                href={`/projects/${proj.slug}`}
                                className="btn-ghost text-xs py-1 px-2"
                                title="Case study"
                              >
                                <ExternalLink size={12} />
                              </Link>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </AnimatedSection>

          {/* GitHub CTA */}
          <AnimatedSection delay={200} className="mt-10">
            <div
              className="flex items-center justify-between p-5 rounded-xl"
              style={{
                background: 'rgba(12,18,32,0.6)',
                border: '1px solid rgba(59,130,246,0.1)',
              }}
            >
              <div>
                <p className="font-syne font-semibold text-sm mb-0.5" style={{ color: '#F0F4FF' }}>
                  More on GitHub
                </p>
                <p className="font-outfit text-xs" style={{ color: '#475569' }}>
                  Explore all repositories, contributions, and open source work.
                </p>
              </div>
              <a
                href="https://github.com/tripathik9559"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
              >
                <Github size={14} />
                View GitHub
                <ExternalLink size={12} />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </MainLayout>
  );
}
