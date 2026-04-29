# Vova's Tennis Academy Egypt

![App Preview](https://imgix.cosmicjs.com/b48a4a30-43a6-11f1-9f85-e7af420a77a5-autopilot-photo-1545809074-59472b3f5ecc-1777451869773.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern multi-site tennis academy website for Egypt, showcasing locations, coaches, and training programs.

## Features
- 🏟️ Multiple location pages with facilities and hours
- 👨‍🏫 Coach profiles with bios and specialties
- 🎾 Training programs with pricing and schedules
- 📱 Fully responsive design
- ⚡ Server-side rendering with Next.js 16
- 🎨 Modern tennis-themed UI with Tailwind CSS

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69f1c2d85d00ec9dea6fee1d&clone_repository=69f1c4125d00ec9dea6fee6d)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for: Multi Site for Tennis Academy in Egypt"

### Code Generation Prompt

> Build a Next.js application for a website called "Vova's Project". The content is managed in Cosmic CMS with the following object types: locations, coaches, programs. Create a beautiful, modern, responsive design with a homepage and pages for each content type. User instructions: Multi Site for Tennis Academy in Egypt

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Cosmic SDK

## Getting Started

### Prerequisites
- Bun or Node.js 18+
- A Cosmic account with bucket configured

### Installation
```bash
bun install
bun run dev
```

## Cosmic SDK Examples

```typescript
// Fetch all locations
const { objects } = await cosmic.objects
  .find({ type: 'locations' })
  .depth(1)

// Fetch coaches with location data
const { objects } = await cosmic.objects
  .find({ type: 'coaches' })
  .depth(1)
```

## Cosmic CMS Integration
Uses object types: `locations`, `coaches`, `programs` with full metadata support including images via imgix.

## Deployment Options
- Vercel (recommended)
- Netlify

Set environment variables: `COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, `COSMIC_WRITE_KEY`
<!-- README_END -->