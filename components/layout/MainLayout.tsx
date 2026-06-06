'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Download } from 'lucide-react';
import Link from 'next/link';
import Sidebar from './Sidebar';
import RightPanel from './RightPanel';
import { navItems, personalInfo } from '@/lib/data';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      {/* Desktop 3-col layout */}
      <div className="app-shell hidden lg:grid">
        <Sidebar />
        <main className="main-col">{children}</main>
        <RightPanel />
      </div>

      {/* Mobile layout */}
      <div className="lg:hidden">
        {/* Mobile top bar */}
        <header
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 transition-all duration-300"
          style={{
            background: scrolled ? 'rgba(7,11,20,0.95)' : 'transparent',
            backdropFilter: scrolled ? 'blur(20px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(59,130,246,0.1)' : 'none',
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-syne font-bold text-xs"
              style={{
                background: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
                boxShadow: '0 0 12px rgba(59,130,246,0.4)',
              }}
            >
              KKT
            </div>
            <span className="font-syne font-bold text-sm" style={{ color: '#F0F4FF' }}>
              Kartikey K.T.
            </span>
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="p-2 rounded-lg transition-all"
            style={{ color: '#94A3B8', background: 'rgba(255,255,255,0.05)' }}
          >
            <Menu size={20} />
          </button>
        </header>

        {/* Mobile Full-screen Menu */}
        <div
          className={`mobile-menu ${menuOpen ? 'open' : ''}`}
          style={{ zIndex: 200 }}
        >
          {/* Close button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-5 right-5 p-2 rounded-lg"
            style={{ color: '#94A3B8', background: 'rgba(255,255,255,0.07)' }}
          >
            <X size={22} />
          </button>

          {/* Logo in menu */}
          <div className="mb-10">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-syne font-bold text-xl mx-auto mb-3"
              style={{
                background: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
                boxShadow: '0 0 30px rgba(59,130,246,0.5)',
              }}
            >
              KKT
            </div>
            <p className="text-center font-outfit text-sm" style={{ color: '#64748B' }}>
              GenAI Engineer & Software Developer
            </p>
          </div>

          {/* Nav links */}
          <div className="space-y-2 w-64">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block text-center py-3 px-6 rounded-xl font-syne font-medium text-base transition-all"
                style={{
                  color: '#94A3B8',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Social + Resume */}
          <div className="mt-8 flex flex-col items-center gap-4">
            <a
              href="/resume.pdf"
              download="Kartikey_Kumar_Tripathi_Resume.pdf"
              className="btn-primary"
              onClick={() => setMenuOpen(false)}
            >
              <Download size={14} />
              Download Resume
            </a>
            <div className="flex gap-4">
              {[
                { href: personalInfo.github, Icon: Github },
                { href: personalInfo.linkedin, Icon: Linkedin },
                { href: `mailto:${personalInfo.email}`, Icon: Mail },
              ].map(({ href, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl transition-all"
                  style={{
                    color: '#94A3B8',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile main content */}
        <main className="pt-16" style={{ overflowX: 'hidden', width: '100%' }}>{children}</main>

        {/* Mobile footer */}
        <footer
          className="py-6 px-4 text-center"
          style={{ borderTop: '1px solid rgba(59,130,246,0.1)' }}
        >
          <p className="font-outfit text-sm" style={{ color: '#4B5E7A' }}>
            © 2024 Kartikey Kumar Tripathi. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}
