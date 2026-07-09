# Shubh Rathore Portfolio

Personal portfolio website for **Shubh Rathore**, a backend developer focused on scalable APIs, production systems, real-time backends, and blockchain integrations.

Live site: [https://0xshubh.me](https://0xshubh.me)

## Tech Stack

- [Next.js](https://nextjs.org/) 16
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- Next.js App Router
- Dynamic Open Graph image generation

## Features

- Responsive portfolio landing page
- Dark/light theme toggle
- Smooth scrolling navigation
- Active section highlighting
- Projects filtering by category
- SEO metadata, sitemap, and robots.txt
- Custom Open Graph image
- Mailto-based contact form

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
npm run dev
```

Start the local development server.

```bash
npm run build
```

Create a production build.

```bash
npm run start
```

Start the production server after building.

```bash
npm run lint
```

Run ESLint checks.

## Project Structure

```txt
src/app/
├── components/       # Portfolio UI sections and reusable components
├── data/             # Portfolio content, skills, projects, and links
├── globals.css       # Global styles, theme variables, and animations
├── layout.tsx        # Metadata, fonts, theme bootstrap, and root layout
├── page.tsx          # Main portfolio page
├── opengraph-image.tsx
├── robots.ts
└── sitemap.ts
```

## Updating Portfolio Content

Most portfolio content is managed in:

```txt
src/app/data/portfolio.ts
```

Update this file to edit:

- Skills
- Experience
- Projects
- Navigation links
- Resume URL

## Deployment

The site is configured for the custom domain:

```txt
0xshubh.me
```

SEO metadata, sitemap, robots.txt, and Open Graph branding use:

```txt
https://0xshubh.me
```
