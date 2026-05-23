# Salt 'N' Pepper — Exact Clone (React + Vite + Tailwind)

An exact, pixel-identical clone of snpsalon.in. Each React route renders the site's
own original HTML, CSS, JavaScript and images, so the layout matches the live site
exactly — nothing about the design is changed. React Router drives navigation and URLs.

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run preview
```

## Routes
/ · /about-us · /services · /teams · /gallery · /contact-us

## How it works
- public/pages/*.html  — the original pages (images set to load eagerly, URLs localised)
- public/wp-content/, public/wp-includes/ — the site's original CSS, JS, fonts, images
- src/components/SiteFrame.jsx — renders the matching original page for each route
- Internal nav links use target="_top" so clicking them updates the React route + URL
