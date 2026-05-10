# Chirag Agarwal Portfolio

Premium personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Features
- Dark mode-first modern UI
- Sticky navbar and smooth scrolling
- Section reveal animations and loading animation
- Resume-driven content model (`lib/resume-data.ts`)
- Fully responsive layout
- SEO metadata

## Getting Started
1. Install dependencies
   ```bash
   npm install
   ```
2. Run development server
   ```bash
   npm run dev
   ```
3. Build for production
   ```bash
   npm run build
   npm run start
   ```

## Customization
- Update all resume/profile content in `lib/resume-data.ts`.
- Replace hero image placeholder in `app/page.tsx`.
- Add your resume file under `public/` and link it in hero CTA.

## Contact Form Email Setup
Create `.env.local`:
```bash
EMAIL_USER=yourgmail@gmail.com
EMAIL_PASS=your_google_app_password
CONTACT_TO=yourgmail@gmail.com
```
Then restart `npm run dev`.

## Profile Photo
- Save your uploaded photo as `public/profile.jpg`.
- The hero now renders it with professional crop, top focus, and gradient overlay.
