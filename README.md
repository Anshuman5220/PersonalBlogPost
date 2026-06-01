## Overview

PersonalBlogPost is the root repository for a personal website built with Next.js.
The live site content is implemented inside the `website/` app and is centered on
long-form writing, applied AI case studies, and consulting-focused pages.

The current website positions Anshuman Bhadauria around agentic AI, RAG systems,
enterprise copilots, evaluation, and voice AI. The homepage currently redirects
visitors to the blog archive.

## What the Website Contains

* A blog archive with date-based slugs for published posts
* Individual long-form posts on agentic AI, enterprise rollout, and RAG evaluation
* A case studies section backed by structured project data in `website/lib/projects.ts`
* An about page with career history and focus areas
* A consulting page describing service offerings, engagement model, and contact CTA
* Shared site chrome including navigation, footer links, and theme toggle support

## Tech Stack

* Next.js 16 with the App Router
* React 19
* TypeScript 5
* Tailwind CSS 4
* ESLint for linting

## Project Structure

```text
PersonalBlogPost/
├── README.md
└── website/
		├── app/
		│   ├── about/
		│   ├── blogs/
		│   ├── components/
		│   ├── consulting/
		│   ├── projects/
		│   ├── globals.css
		│   ├── layout.tsx
		│   └── page.tsx
		├── lib/
		│   └── projects.ts
		└── package.json
```

## Main Routes

* `/` redirects to `/blogs`
* `/blogs` lists featured and recent writing
* `/blogs/<date>-<slug>` serves individual blog posts
* `/projects` presents applied AI case studies
* `/about` introduces the author and career path
* `/consulting` outlines consulting services and engagement flow

## Local Development

Run the site from the `website/` directory:

```bash
cd website
npm install
npm run dev
```

Useful scripts:

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Content Notes

Blog pages currently use explicit route folders under `website/app/blogs/`.
Project content is easier to scale because the case study cards read from a shared
TypeScript data source in `website/lib/projects.ts`.

If you want to expand the site, the clearest next content surfaces are additional
blog entries, deeper project writeups, and completion of the newsletter area.
