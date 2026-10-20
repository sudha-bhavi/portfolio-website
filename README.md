# Sudharani Bhavi | Portfolio

Personal portfolio for a Senior .NET engineer working in healthcare IT.
**Live site:** https://sudhabhavi-portfolio.netlify.app/

## Stack

React 19 · Vite · Tailwind CSS v4 · Nginx (Docker) · Netlify

## Features

- Responsive single-page layout with sticky navigation and scroll-reveal animations
- Experience timeline, filterable project cards, grouped skills, contact section
- Downloadable one-page resume (`public/Sudharani_Bhavi_Resume.pdf`)
- SEO: page title, meta description, Open Graph and JSON-LD structured data
- Content lives in one file, `src/data.js`, so updates don't touch the components

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve the production build
```

## Run with Docker

```bash
docker build -t portfolio .
docker run -p 8080:80 portfolio   # http://localhost:8080
```

The image is a two-stage build: Node compiles the app, Nginx serves the static files
with gzip, long-lived asset caching, security headers and an SPA fallback.

## Deploy

Netlify builds from `main` using `npm run build` and publishes `dist/`.

## Project structure

```
src/
  data.js            all site content
  components/        Navbar, Hero, Experience, Projects, Skills, Contact, Footer
  index.css          Tailwind import and a few custom effects
public/              favicon, resume PDF, social preview image
```
