# Kartikey Kumar Tripathi — Premium Portfolio

A premium AI-startup-dashboard-style portfolio built with **Next.js 14 + TypeScript + Tailwind CSS**.

---

## ✨ Features

- **3-Column Dashboard Layout** — Fixed sidebar + scrollable main + live insights panel
- **Orbit Animation** — Profile image with orbiting tech icons & glowing rings
- **Canvas Particle Field** — Animated particles drifting in the hero background
- **Cursor Glow** — Radial blue glow follows the mouse
- **Project Case Studies** — Full detail pages with problem / solution / architecture
- **Skills Grid** — Category cards with learning journey timeline
- **Searchable Archive** — Filter & sort all projects by name, tech, category, year
- **Contact Page** — Contact cards + animated form + paper plane
- **Mobile Menu** — Full-screen overlay navigation
- **Scroll Reveal** — Sections animate in as they enter the viewport

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

---

## 📁 Project Structure

```
app/
  page.tsx                   # Homepage (hero + about + projects + skills + archive + contact)
  layout.tsx                 # Root layout with Google Fonts
  globals.css                # All custom CSS — animations, design tokens, layout
  not-found.tsx              # 404 page
  projects/[slug]/page.tsx   # Dynamic project case study pages
  skills/page.tsx            # Full skills page
  archive/page.tsx           # Searchable project archive
  contact/page.tsx           # Contact page with form

components/
  layout/
    Sidebar.tsx              # Fixed left sidebar — logo, nav, social, resume
    RightPanel.tsx           # Fixed right insights panel — metrics, timeline, GitHub
    MainLayout.tsx           # 3-column shell + mobile menu
  home/
    HeroSection.tsx          # Full-screen hero with orbit + particles + CTAs
    OrbitAnimation.tsx       # Profile image with orbiting tech icons
    ParticleField.tsx        # Canvas-based particle background
    AboutSection.tsx         # About section — bio + capability cards
    FeaturedProjects.tsx     # Featured project cards
  skills/
    SkillsPreview.tsx        # Skills preview on homepage
  projects/
    ArchivePreview.tsx       # Archive table preview on homepage
  contact/
    ContactPreview.tsx       # Contact CTA section on homepage
  ui/
    AnimatedSection.tsx      # Scroll-reveal wrapper component
    CursorGlow.tsx           # Mouse-following glow effect

lib/
  data.ts                    # All portfolio content — projects, skills, timeline
```

---

## 🎨 Customisation Guide

### 1. Update Personal Info
Edit `lib/data.ts` → `personalInfo` object:
```ts
export const personalInfo = {
  name: 'Your Name',
  email: 'your@email.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourprofile',
  // ...
};
```

### 2. Add / Edit Projects
Edit `lib/data.ts` → `projects` array. Each project has:
- `slug` — URL path (`/projects/your-slug`)
- `title`, `tagline`, `description`, `longDescription`
- `status` — `'Completed'` | `'In Progress'` | `'Planning'`
- `techStack` — array of strings
- `github`, `liveDemo` — links
- `problem`, `solution`, `architecture` — case study content
- `challenges`, `learnings`, `features`, `metrics`

### 3. Add Profile Photo
Replace the placeholder in `components/home/OrbitAnimation.tsx`:
```tsx
// Remove the <User> icon + "Add Photo" span
// Add:
<Image
  src="/profile.jpg"
  alt="Kartikey Kumar Tripathi"
  fill
  className="rounded-full object-cover"
  style={{ objectPosition: 'top' }}
/>
```
Place `profile.jpg` in `/public/`.

### 4. Add Resume PDF
1. Place `resume.pdf` in `/public/`
2. In `components/layout/Sidebar.tsx`, replace the alert:
```tsx
// Change:
onClick={() => alert('Resume will be added soon!')}
// To:
href="/resume.pdf"
target="_blank"
```

### 5. Add Project Screenshots
In `app/projects/[slug]/page.tsx`, replace the screenshot placeholders with:
```tsx
<Image src="/screenshots/project-name-1.png" alt="..." fill className="object-cover" />
```

### 6. Connect Contact Form
In `app/contact/page.tsx`, replace the fake `handleSubmit` with:
```ts
// Option A — Formspree
const res = await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
});

// Option B — EmailJS
// npm install @emailjs/browser
```

### 7. Add Architecture Diagrams
In each project detail page, replace the dashed placeholder boxes with:
```tsx
<Image src={`/diagrams/${project.slug}-arch.png`} alt="Architecture" ... />
```

---

## 🎨 Design System

| Token             | Value           |
|-------------------|-----------------|
| Background        | `#070B14`       |
| Card bg           | `rgba(15,22,42,0.8)` |
| Primary blue      | `#3B82F6`       |
| Cyan accent       | `#06B6D4`       |
| Violet accent     | `#8B5CF6`       |
| Text primary      | `#F0F4FF`       |
| Text secondary    | `#94A3B8`       |
| Text dim          | `#4B5E7A`       |
| Heading font      | Syne            |
| Body font         | Outfit          |
| Code font         | JetBrains Mono  |

---

## 📦 Build for Production

```bash
npm run build
npm run start
```

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

---

## 🔧 Tech Stack

| Layer      | Technology          |
|------------|---------------------|
| Framework  | Next.js 14 (App Router) |
| Language   | TypeScript          |
| Styling    | Tailwind CSS 3      |
| Icons      | Lucide React        |
| Fonts      | Google Fonts (Syne, Outfit, JetBrains Mono) |
| Animation  | CSS Keyframes + IntersectionObserver |

---

## 📝 License

MIT — feel free to use and adapt.

---

Built with ❤️ for **Kartikey Kumar Tripathi** | GenAI Engineer & Software Developer
