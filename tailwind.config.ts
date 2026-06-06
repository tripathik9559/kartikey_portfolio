import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        space: {
          950: '#020408',
          900: '#070B14',
          850: '#0A0F1E',
          800: '#0D1525',
          750: '#111C30',
          700: '#142035',
          600: '#1A2847',
        },
        brand: {
          blue: '#3B82F6',
          'blue-glow': '#60A5FA',
          'blue-dim': '#1D4ED8',
          cyan: '#06B6D4',
          'cyan-light': '#22D3EE',
          indigo: '#6366F1',
          violet: '#8B5CF6',
        },
      },
      fontFamily: {
        syne: ['var(--font-syne)', 'sans-serif'],
        outfit: ['var(--font-outfit)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      animation: {
        'orbit-cw': 'orbit-cw 10s linear infinite',
        'orbit-ccw': 'orbit-ccw 14s linear infinite',
        'orbit-slow': 'orbit-cw 18s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'gradient-x': 'gradient-x 4s ease infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'fade-up': 'fade-up 0.6s ease-out',
        'slide-in-left': 'slide-in-left 0.5s ease-out',
        'slide-in-right': 'slide-in-right 0.5s ease-out',
        'spin-slow': 'spin 8s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'particle-drift': 'particle-drift 20s linear infinite',
        'bar-fill': 'bar-fill 1.5s ease-out forwards',
        'blink': 'blink 1.4s ease-in-out infinite',
        'scan-line': 'scan-line 4s linear infinite',
      },
      keyframes: {
        'orbit-cw': {
          from: { transform: 'rotate(0deg) translateX(155px) rotate(0deg)' },
          to: { transform: 'rotate(360deg) translateX(155px) rotate(-360deg)' },
        },
        'orbit-ccw': {
          from: { transform: 'rotate(0deg) translateX(110px) rotate(0deg)' },
          to: { transform: 'rotate(-360deg) translateX(110px) rotate(360deg)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          from: { opacity: '0', transform: 'translateX(-24px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          from: { opacity: '0', transform: 'translateX(24px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        'particle-drift': {
          '0%': { transform: 'translateY(0) translateX(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-120vh) translateX(40px)', opacity: '0' },
        },
        'bar-fill': {
          from: { width: '0%' },
          to: { width: 'var(--target-width)' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)`,
        'hero-gradient': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59,130,246,0.25) 0%, transparent 60%)',
        'glow-blue': 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)',
        'glow-cyan': 'radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 70%)',
        'card-gradient': 'linear-gradient(135deg, rgba(15,22,42,0.9) 0%, rgba(10,15,30,0.9) 100%)',
        'name-gradient': 'linear-gradient(135deg, #60A5FA 0%, #22D3EE 45%, #818CF8 100%)',
        'btn-gradient': 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(59,130,246,0.4), 0 0 60px rgba(59,130,246,0.15)',
        'glow-blue-sm': '0 0 10px rgba(59,130,246,0.3)',
        'glow-cyan': '0 0 20px rgba(6,182,212,0.4)',
        'card': '0 4px 24px rgba(0,0,0,0.4), 0 1px 0 rgba(59,130,246,0.1) inset',
        'card-hover': '0 8px 40px rgba(0,0,0,0.5), 0 0 30px rgba(59,130,246,0.2)',
        'sidebar': '4px 0 30px rgba(0,0,0,0.4)',
        'panel': '-4px 0 30px rgba(0,0,0,0.4)',
      },
      backdropBlur: {
        xs: '2px',
      },
      screens: {
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
};

export default config;
