# Diego Portfolio

Personal landing page showcasing my professional profile, tech stack, current projects, and contact channels.

## Overview

This project is a personal landing page built with React, TypeScript, and Vite. It has no backend or external API connections; its content is static and managed through local components and configuration files.

The page is designed to:

- present my professional identity
- showcase my experience and areas of expertise
- highlight technologies and tools
- share active projects and ongoing learning
- make it easy to get in touch through social media and email

## Tech Stack

- React 19
- TypeScript
- Vite
- CSS Modules / component-level CSS
- Framer Motion for animations
- i18next for internationalization
- React Icons and Lucide React for icons

## Key Features

- Modern design focused on a personal landing page
- Clear sections: hero, about, highlights, stack, building, learning, and contact
- Navigation using internal anchors
- Language support with JSON translation files
- Subtle animations to enhance the user experience
- No backend dependencies or authentication

## Project Structure

```bash
src/
├── App.tsx
├── components/
│   └── Header/
├── data/
│   ├── learning.ts
│   └── projects.ts
├── i18n/
│   ├── en.json
│   ├── es.json
│   └── index.ts
├── sections/
│   ├── About/
│   ├── Building/
│   ├── Contact/
│   ├── Hero/
│   ├── Highlights/
│   ├── Learning/
│   └── Stack/
├── assets/
│   ├── icons/
│   └── images/
├── index.css
└── main.tsx
```

## Requirements

- Node.js 18 or later
- npm or pnpm

## Installation

```bash
npm install
```

## Available Scripts

```bash
npm run dev
```
Starts the Vite development server.

```bash
npm run build
```
Creates a production build.

```bash
npm run preview
```
Serves the local production build so you can review it.

```bash
npm run lint
```
Runs ESLint to check the code.

## Managing Content

The landing page content is located in:

- translation files in [src/i18n](src/i18n)
- structured data in [src/data](src/data)
- page sections in [src/sections](src/sections)

This makes it possible to update text, projects, courses, and social links without a backend.

## Important Note

This is a static landing page for professional presentation. It does not include data-submitting forms, database connections, or server-side services. Information is rendered directly on the frontend.

## Deployment

The site can be deployed to any static hosting service, such as:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

Publish the production build generated in the `dist` directory.

## Releases

Releases are managed by [Release Please](https://github.com/googleapis/release-please). When changes reach `main`, it opens or updates a release pull request based on Conventional Commit messages (`feat:`, `fix:`, etc.). Merge that release pull request to create the GitHub release and version tag.

The initial release is pinned to `1.0.0` using `release-as` in `release-please-config.json`. Remove that option from the initial release pull request before merging it; subsequent releases will then be versioned from Conventional Commits. Regular pull requests are grouped into a release pull request rather than published immediately.

In the repository settings, enable **Allow GitHub Actions to create and approve pull requests** under **Settings → Actions → General** so the workflow can open the release pull request.
