'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  Home, User, FolderOpen, Layers, Archive,
  Mail, Github, Linkedin, Download, Sun, Moon,
} from 'lucide-react';
import { navItems, personalInfo } from '@/lib/data';

const iconMap: Record<string, LucideIcon> = {
  home: Home, user: User, folder: FolderOpen,
  layers: Layers, archive: Archive, mail: Mail,
};

export default function Sidebar() {
  const pathname = usePathname();
  const [dark, setDark] = useState(true);

  // Init theme from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved === 'light') {
      setDark(false);
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('portfolio-theme', 'light');
    }
  };

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    const seg = href.replace('/#', '/');
    return pathname.startsWith(seg) && seg !== '/';
  };

  return (
    <aside className="sidebar-col flex flex-col h-full">
      {/* Logo */}
      <div className="px-5 pt-6 pb-4">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-syne font-bold text-sm"
            style={{ background: 'linear-gradient(135deg,#3B82F6,#1D4ED8)', boxShadow: '0 0 16px rgba(59,130,246,0.4)' }}>
            KKT
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-syne font-bold text-sm tracking-wide" style={{ color: '#F0F4FF' }}>Kartikey</span>
            <span className="font-outfit text-xs" style={{ color: '#4B5E7A' }}>Portfolio</span>
          </div>
        </Link>
      </div>

      <div className="mx-4 mb-4" style={{ height: 1, background: 'rgba(59,130,246,0.1)' }} />

      {/* Navigation */}
      <nav className="flex-1 px-3 space-y-0.5">
        {navItems.map((item) => {
          const Icon = iconMap[item.icon] ?? Home;
          const active = isActive(item.href);
          return (
            <Link key={item.label} href={item.href}
              className={`nav-link ${active ? 'active' : ''}`}>
              <Icon size={15} className="flex-shrink-0" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="px-4 pb-5 space-y-3">
        <a href="/resume.pdf" download="Kartikey_Kumar_Tripathi_Resume.pdf"
          className="btn-primary w-full justify-center text-sm py-2.5">
          <Download size={14} />
          Resume
        </a>

        <div className="flex items-center justify-between px-1">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
            className="p-2 rounded-lg transition-all hover:bg-blue-500/10" style={{ color: '#94A3B8' }} title="GitHub">
            <Github size={16} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
            className="p-2 rounded-lg transition-all hover:bg-blue-500/10" style={{ color: '#94A3B8' }} title="LinkedIn">
            <Linkedin size={16} />
          </a>
          <a href={`mailto:${personalInfo.email}`}
            className="p-2 rounded-lg transition-all hover:bg-blue-500/10" style={{ color: '#94A3B8' }} title="Email">
            <Mail size={16} />
          </a>
          <button onClick={toggleTheme}
            className="p-2 rounded-lg transition-all hover:bg-blue-500/10" style={{ color: '#94A3B8' }}>
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        <div className="flex items-center gap-2 px-3 py-2 rounded-lg"
          style={{ background: 'rgba(16,185,129,0.07)', border: '1px solid rgba(16,185,129,0.2)' }}>
          <div className="avail-dot" />
          <span className="font-outfit text-xs" style={{ color: '#10B981' }}>Available for Roles</span>
        </div>
      </div>
    </aside>
  );
}
