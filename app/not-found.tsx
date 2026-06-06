import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';

export default function NotFound() {
  return (
    <MainLayout>
      <div
        className="flex flex-col items-center justify-center min-h-screen px-8 text-center"
        style={{ background: 'var(--bg-primary)' }}
      >
        <p
          className="font-mono text-7xl font-bold mb-4"
          style={{ color: 'rgba(59,130,246,0.15)', letterSpacing: '-0.04em' }}
        >
          404
        </p>
        <h1 className="font-syne font-bold text-2xl mb-3" style={{ color: '#F0F4FF' }}>
          Page Not Found
        </h1>
        <p className="font-outfit text-sm mb-8 max-w-sm" style={{ color: '#64748B' }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/" className="btn-primary">
          ← Back to Home
        </Link>
      </div>
    </MainLayout>
  );
}
