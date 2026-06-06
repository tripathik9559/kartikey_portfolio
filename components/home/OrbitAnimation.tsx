'use client';

import { techStackIcons } from '@/lib/data';

const orbitClasses = ['icon-orbit-1', 'icon-orbit-2', 'icon-orbit-3', 'icon-orbit-4', 'icon-orbit-5'];

export default function OrbitAnimation() {
  return (
    <div className="orbit-wrapper select-none" aria-hidden="true">

      {/* Ambient glow */}
      <div className="absolute inset-0 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle at 50% 50%, rgba(59,130,246,0.12) 0%, rgba(6,182,212,0.06) 40%, transparent 70%)' }} />

      {/* Outer orbit ring */}
      <div className="orbit-ring orbit-ring-outer"
        style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%) rotateX(70deg)', width: 340, height: 340 }} />

      {/* Inner orbit ring */}
      <div className="orbit-ring orbit-ring-inner"
        style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%) rotateX(70deg)', width: 240, height: 240 }} />

      {/* Outer orbit icons (3) */}
      {techStackIcons.slice(0, 3).map((icon, i) => (
        <div key={icon.title} className={`orbit-icon ${orbitClasses[i]}`} title={icon.title}>
          <div className="tech-badge w-10 h-10 text-xs font-syne font-bold"
            style={{ background: `${icon.color}22`, borderColor: `${icon.color}55`, color: icon.color, boxShadow: `0 0 12px rgba(${icon.glow},0.4)` }}>
            {icon.label}
          </div>
        </div>
      ))}

      {/* Inner orbit icons (2) */}
      {techStackIcons.slice(3).map((icon, i) => (
        <div key={icon.title} className={`orbit-icon ${orbitClasses[3 + i]}`} title={icon.title}>
          <div className="tech-badge w-9 h-9 text-xs font-syne font-bold"
            style={{ background: `${icon.color}22`, borderColor: `${icon.color}55`, color: icon.color, boxShadow: `0 0 12px rgba(${icon.glow},0.3)` }}>
            {icon.label}
          </div>
        </div>
      ))}

      {/* ✅ Profile Photo — center */}
      <div className="profile-placeholder z-10">
        <div className="scan-overlay" />

        {/* Photo — public/photo.jpg */}
        <img
          src="/photo.jpg"
          alt="Kartikey Kumar Tripathi"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top center',
            borderRadius: '50%',
            position: 'relative',
            zIndex: 10,
          }}
          onError={(e) => {
            // Agar photo.jpg na mile toh initials dikhao
            const img = e.currentTarget;
            img.style.display = 'none';
            const fallback = img.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = 'flex';
          }}
        />

        {/* Fallback — sirf tab dikhega jab photo.jpg na mile */}
        <div style={{
          display: 'none',
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(6,182,212,0.15))',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          zIndex: 10,
        }}>
          <span className="font-syne font-bold text-3xl" style={{ color: '#60A5FA' }}>KK</span>
          <span className="font-outfit text-xs mt-1" style={{ color: '#60A5FA', opacity: 0.6 }}>Add photo.jpg</span>
        </div>

        {/* Inner glow */}
        <div className="absolute inset-0 rounded-full"
          style={{ background: 'radial-gradient(circle at 35% 35%, rgba(96,165,250,0.15) 0%, transparent 60%)', zIndex: 11, pointerEvents: 'none' }} />
      </div>

      {/* Orbit path sparkle dots */}
      {[0, 60, 120, 180, 240, 300].map((deg) => {
        const r = 170;
        const rad = (deg * Math.PI) / 180;
        const x = Math.cos(rad) * r;
        const y = Math.sin(rad) * r * 0.3;
        return (
          <div key={deg} className="absolute rounded-full"
            style={{ width: 3, height: 3, background: '#60A5FA', opacity: 0.35,
              top: '50%', left: '50%',
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              boxShadow: '0 0 4px #60A5FA' }} />
        );
      })}
    </div>
  );
}
