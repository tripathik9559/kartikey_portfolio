import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import SkillsPreview from '@/components/skills/SkillsPreview';
import ArchivePreview from '@/components/projects/ArchivePreview';
import ContactPreview from '@/components/contact/ContactPreview';
import CursorGlow from '@/components/ui/CursorGlow';

export default function HomePage() {
  return (
    <MainLayout>
      <CursorGlow />

      {/* Hero */}
      <HeroSection />

      {/* About */}
      <AboutSection />

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* Skills Grid Preview */}
      <SkillsPreview />

      {/* Archive Preview */}
      <ArchivePreview />

      {/* Contact CTA */}
      <ContactPreview />

      {/* Desktop Footer */}
      <footer
        className="hidden lg:flex items-center justify-between px-8 xl:px-14 py-5"
        style={{ borderTop: '1px solid rgba(59,130,246,0.08)' }}
      >
        <p className="font-outfit text-xs" style={{ color: '#334155' }}>
          © 2024 Kartikey Kumar Tripathi. All rights reserved.
        </p>
        <a
          href="#top"
          className="font-outfit text-xs hover:text-blue-400 transition-colors"
          style={{ color: '#475569' }}
        >
          Back to Top ↑
        </a>
      </footer>
    </MainLayout>
  );
}
