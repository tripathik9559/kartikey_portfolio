'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  Github, Target, TrendingUp, Sparkles,
  BookOpen, MapPin, Award, ExternalLink, Code2,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import {
  currentFocus, careerTimeline, learningProgress,
  personalInfo, experience, certifications,
} from '@/lib/data';
import {
  fetchGitHubUser, fetchGitHubRepos, topLanguages, LANG_COLORS,
} from '@/lib/github';
import type { GitHubUser, GitHubRepo } from '@/lib/github';

/* ─── tiny section header ─── */
function PanelSection({ icon: Icon, title, color = '#60A5FA' }: { icon: LucideIcon; title: string; color?: string }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <div className="w-6 h-6 rounded-md flex items-center justify-center"
        style={{ background: `${color}20` }}>
        <Icon size={12} style={{ color }} />
      </div>
      <span className="font-syne font-semibold text-xs" style={{ color: '#F0F4FF' }}>{title}</span>
    </div>
  );
}

export default function RightPanel() {
  const [time, setTime]     = useState('');
  const [ghUser, setGhUser] = useState<GitHubUser | null>(null);
  const [ghRepos, setGhRepos] = useState<GitHubRepo[]>([]);
  const [ghLoading, setGhLoading] = useState(true);

  /* clock */
  useEffect(() => {
    const tick = () =>
      setTime(new Date().toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: true,
      }));
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);

  /* real GitHub data */
  const loadGitHub = useCallback(async () => {
    setGhLoading(true);
    const [user, repos] = await Promise.all([fetchGitHubUser(), fetchGitHubRepos()]);
    setGhUser(user);
    setGhRepos(repos);
    setGhLoading(false);
  }, []);

  useEffect(() => { loadGitHub(); }, [loadGitHub]);

  const langs    = topLanguages(ghRepos);
  const stars    = ghRepos.reduce((s, r) => s + r.stargazers_count, 0);
  const repoCount = ghUser?.public_repos ?? (ghRepos.length > 0 ? ghRepos.length : null);

  return (
    <aside className="panel-col flex flex-col">
      {/* ── Header ── */}
      <div className="px-4 pt-6 pb-3">
        <div className="flex items-center justify-between mb-1">
          <span className="font-syne font-semibold text-sm" style={{ color: '#F0F4FF' }}>Insights</span>
          <div className="flex items-center gap-1.5">
            <div className="avail-dot" style={{ width: 6, height: 6 }} />
            <span className="text-xs font-outfit" style={{ color: '#10B981' }}>Open to work</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <MapPin size={11} style={{ color: '#4B5E7A' }} />
          <span className="text-xs font-outfit" style={{ color: '#4B5E7A' }}>
            Lucknow, IN · {time || '—'}
          </span>
        </div>
      </div>
      <div className="mx-4 mb-3" style={{ height: 1, background: 'rgba(59,130,246,0.1)' }} />

      {/* ── Scrollable body ── */}
      <div className="flex-1 overflow-y-auto px-4 pb-6 space-y-3">

        {/* Current Focus */}
        <div className="insight-card">
          <PanelSection icon={Target} title="Current Focus" />
          <p className="font-outfit font-semibold text-sm mb-1" style={{ color: '#60A5FA' }}>
            {currentFocus.title}
          </p>
          <p className="font-outfit text-xs leading-relaxed mb-3" style={{ color: '#64748B' }}>
            {currentFocus.description}
          </p>
          <div className="flex flex-wrap gap-1">
            {currentFocus.tags.map((t) => (
              <span key={t} className="text-xs px-2 py-0.5 rounded font-outfit"
                style={{ background: 'rgba(59,130,246,0.1)', color: '#93C5FD', border: '1px solid rgba(59,130,246,0.2)' }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* GitHub — real API data */}
        <div className="insight-card">
          <div className="flex items-center justify-between mb-3">
            <PanelSection icon={Github} title="GitHub" />
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs font-outfit hover:text-blue-400 transition-colors -mt-3"
              style={{ color: '#4B5E7A' }}>
              View <ExternalLink size={9} />
            </a>
          </div>

          {ghLoading ? (
            <div className="space-y-2">
              {[1, 2].map((i) => (
                <div key={i} className="h-8 rounded-lg animate-pulse"
                  style={{ background: 'rgba(255,255,255,0.04)' }} />
              ))}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-2 mb-3">
                {repoCount !== null && (
                  <div className="rounded-lg p-2.5 text-center"
                    style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.15)' }}>
                    <p className="font-syne font-bold text-lg" style={{ color: '#60A5FA' }}>{repoCount}</p>
                    <p className="font-outfit text-xs" style={{ color: '#4B5E7A' }}>Repos</p>
                  </div>
                )}
                {stars > 0 && (
                  <div className="rounded-lg p-2.5 text-center"
                    style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.15)' }}>
                    <p className="font-syne font-bold text-lg" style={{ color: '#FBBF24' }}>{stars}</p>
                    <p className="font-outfit text-xs" style={{ color: '#4B5E7A' }}>Stars</p>
                  </div>
                )}
              </div>

              {/* Top languages from real repos */}
              {langs.length > 0 && (
                <div>
                  <p className="font-outfit text-xs mb-2" style={{ color: '#334155' }}>
                    Top Languages
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {langs.map(({ lang, count }) => (
                      <span key={lang} className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-outfit"
                        style={{
                          background: `${LANG_COLORS[lang] ?? '#60A5FA'}15`,
                          border: `1px solid ${LANG_COLORS[lang] ?? '#60A5FA'}30`,
                          color: LANG_COLORS[lang] ?? '#60A5FA',
                        }}>
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: LANG_COLORS[lang] ?? '#60A5FA' }} />
                        {lang} · {count}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Recent repos */}
              {ghRepos.slice(0, 3).map((repo) => (
                <a key={repo.id} href={repo.html_url} target="_blank" rel="noopener noreferrer"
                  className="flex items-start gap-2 mt-2 p-2 rounded-lg group transition-all"
                  style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}>
                  <Code2 size={11} className="flex-shrink-0 mt-0.5" style={{ color: '#334155' }} />
                  <div className="min-w-0">
                    <p className="font-outfit text-xs font-medium truncate group-hover:text-blue-400 transition-colors"
                      style={{ color: '#94A3B8' }}>
                      {repo.name}
                    </p>
                    {repo.language && (
                      <p className="font-outfit text-xs" style={{ color: '#334155' }}>{repo.language}</p>
                    )}
                  </div>
                </a>
              ))}
            </>
          )}
        </div>

        {/* Internship */}
        <div className="insight-card" style={{ background: 'rgba(16,185,129,0.04)', borderColor: 'rgba(16,185,129,0.15)' }}>
          <PanelSection icon={Award} title="Internship" color="#34D399" />
          {experience.map((exp) => (
            <div key={exp.company}>
              <p className="font-syne font-semibold text-xs mb-0.5" style={{ color: '#F0F4FF' }}>{exp.role}</p>
              <p className="font-outfit text-xs mb-1" style={{ color: '#34D399' }}>{exp.company}</p>
              <p className="font-outfit text-xs mb-2" style={{ color: '#4B5E7A' }}>{exp.period}</p>
              {exp.award && (
                <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-outfit"
                  style={{ background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.25)', color: '#FBBF24' }}>
                  🏆 {exp.award}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Career Timeline */}
        <div className="insight-card">
          <PanelSection icon={TrendingUp} title="Career Timeline" />
          <div className="space-y-0">
            {careerTimeline.map((item, i) => (
              <div key={i} className="flex gap-3">
                <div className="flex flex-col items-center" style={{ width: 18 }}>
                  <div className="w-2 h-2 rounded-full flex-shrink-0 mt-1"
                    style={{ background: item.color, boxShadow: `0 0 6px ${item.color}` }} />
                  {i < careerTimeline.length - 1 && (
                    <div className="flex-1 mt-1" style={{
                      width: 1, minHeight: 20,
                      background: 'linear-gradient(180deg,rgba(59,130,246,0.3),transparent)',
                    }} />
                  )}
                </div>
                <div className="pb-3 flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="font-mono flex-shrink-0" style={{ color: item.color, fontSize: 10 }}>{item.year}</span>
                    <span className="font-syne font-semibold text-xs truncate" style={{ color: '#F0F4FF' }}>{item.title}</span>
                  </div>
                  <p className="font-outfit leading-snug" style={{ color: '#475569', fontSize: 11 }}>{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Depth */}
        <div className="insight-card">
          <PanelSection icon={BookOpen} title="Skill Depth" />
          <div className="space-y-2.5">
            {learningProgress.map((item) => (
              <div key={item.skill}>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-outfit text-xs" style={{ color: '#94A3B8' }}>{item.skill}</span>
                  <span className="font-mono text-xs" style={{ color: item.color }}>{item.pct}%</span>
                </div>
                <div className="rounded-full overflow-hidden" style={{ height: 3, background: 'rgba(255,255,255,0.06)' }}>
                  <div className="h-full rounded-full transition-all duration-1000"
                    style={{ width: `${item.pct}%`, background: `linear-gradient(90deg,${item.color},${item.color}99)`,
                      boxShadow: `0 0 6px ${item.color}60` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certification */}
        <div className="insight-card">
          <PanelSection icon={Award} title="Certification" color="#FBBF24" />
          {certifications.map((cert) => (
            <div key={cert.title}>
              <p className="font-outfit font-medium text-xs mb-0.5" style={{ color: '#F0F4FF' }}>{cert.title}</p>
              <p className="font-outfit text-xs" style={{ color: '#FBBF24' }}>{cert.issuer}</p>
              <p className="font-outfit text-xs mt-0.5" style={{ color: '#4B5E7A' }}>{cert.period}</p>
            </div>
          ))}
        </div>

        {/* Availability */}
        <div className="insight-card" style={{ background: 'rgba(16,185,129,0.05)', borderColor: 'rgba(16,185,129,0.2)' }}>
          <div className="flex items-center gap-2 mb-2">
            <div className="avail-dot" />
            <span className="font-syne font-semibold text-xs" style={{ color: '#10B981' }}>Availability</span>
          </div>
          <p className="font-outfit text-xs leading-relaxed" style={{ color: '#64748B' }}>
            Actively looking for <span style={{ color: '#10B981' }}>internship & full-time</span> opportunities in backend and AI engineering.
          </p>
          <div className="flex flex-wrap gap-1 mt-2">
            {['Internship', 'Full-Time', 'Remote OK', 'Hybrid OK'].map((t) => (
              <span key={t} className="text-xs px-2 py-0.5 rounded font-outfit"
                style={{ background: 'rgba(16,185,129,0.1)', color: '#10B981', border: '1px solid rgba(16,185,129,0.2)' }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Quick Facts */}
        <div className="insight-card">
          <PanelSection icon={Sparkles} title="Quick Facts" color="#A78BFA" />
          <div className="grid grid-cols-2 gap-2">
            {[
              { label: 'CGPA',       value: '7.3',       color: '#A78BFA' },
              { label: 'Internship', value: '1 ✓',       color: '#34D399' },
              { label: 'Graduated', value: '2026',        color: '#FBBF24' },
              { label: 'Languages', value: 'EN + HI',    color: '#60A5FA' },
            ].map((s) => (
              <div key={s.label} className="rounded-lg p-2.5 text-center"
                style={{ background: `${s.color}10`, border: `1px solid ${s.color}25` }}>
                <p className="font-syne font-bold text-sm" style={{ color: s.color, textShadow: `0 0 10px ${s.color}60` }}>{s.value}</p>
                <p className="font-outfit text-xs mt-0.5" style={{ color: '#94A3B8' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </aside>
  );
}
