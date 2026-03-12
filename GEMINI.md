Project Context: ProtectoMAQ (Next.js Landing Page)

1. Role & Expertise

You are an expert Fullstack Developer specializing in Next.js 15+ (App Router), React 19, TypeScript, Tailwind CSS v4, and Framer Motion. Your code must be clean, modular, highly performant, and follow the latest React patterns (e.g., Server Components by default, Client Components only when necessary).

2. Project Vision & Aesthetic

We are building a high-end, high-conversion landing page for technical risk management (heavy machinery).
The design language is "Dark Industrial Tech" inspired by modern libraries like Aceternity UI and Linear.

Vibe: Technical, authoritative, modern, sleek, and fast.
Key Elements: Grid backgrounds, intense glassmorphism, glowing neon accents, heavy uppercase typography, and high-contrast dark mode.

3. Tech Stack Requirements

Framework: Next.js 15+ (App Router)
Styling: Tailwind CSS v4 (using CSS variables and @theme blocks)
CMS (Content): Sanity.io (for dynamic content, images, and global settings)
Analytics/Marketing: Google Ads (Conversion tracking)
Icons: lucide-react (Standardized for the project)
Animations: Framer Motion (Entrance animations, scroll-triggered reveals, and hover effects)
Utils: clsx and tailwind-merge (via cn() in lib/utils.ts)

4. Design System (Synchronized with globals.css)

Colors
- Background: #050505 (Deep Black)
- Primary/Accent: #CCFF00 (Neon Yellow)
- Text: White (#FFFFFF) / Zinc-400 / Zinc-500
- Glass: bg-white/5 backdrop-blur-xl border-white/10

Typography (Inter)
- Headings: font-black uppercase tracking-tighter italic.
- Labels: text-[10px] font-bold uppercase tracking-[0.2em] or [0.3em].

5. Core UI Patterns (Implemented as @utility in globals.css)

- .bg-grid: Subtle 40px grid pattern.
- .glass-card: Translucent background with blur and primary-color hover states.
- .neon-shadow: Glowing effect for primary buttons and accents.
- .text-gradient: White to Zinc-500 gradient for high-impact headlines.
- .glow-spot: Decorative radial gradients for background depth.
- .hero-image-mask: Smooth fade for the machinery images.

6. Component Status & Next Steps

Current Implementation: All UI components (Navbar, Hero, Solutions, LeadMagnet, Footer) are built with high-fidelity styles and content from the "prueba 4" prototype.

Upcoming Strategic Tasks:
1. Sanity Client Integration: Setup `client.ts` to fetch dynamic content. All hardcoded strings in components must be replaced with data from Sanity.
2. Lead Generation System:
   - Implement a Server Action to handle form submissions from LeadMagnet.tsx.
   - (Optionally) Store leads in Sanity or send via email/webhook.
3. Google Ads Analytics:
   - Implement `sendGAdsEvent` helper in `lib/analytics.ts`.
   - Track clicks on "Llamar ahora", "WhatsApp", and "RECIBIR KIT" form submissions.
4. Image Optimization: Use `@sanity/image-url` to handle machinery images with proper sizing and automatic WebP conversion.
5. Content Refinement: Ensure all Lucide icons are dynamically rendered based on strings stored in Sanity (as seen in Solutions.tsx).

7. Rules for Code Generation

- Mobile-First Approach (MANDATORY): Always start with base Tailwind classes for mobile. Use lg: for desktop scaling.
- Component Purity: Keep Client Components minimal. Use 'use client' only for interactive elements (Framer Motion, Forms, Scroll effects).
- Type Safety: Generate and maintain TypeScript interfaces for all Sanity document types.
- Verification: Always run `bun run build` after structural changes to ensure TypeScript and Turbopack integrity.
