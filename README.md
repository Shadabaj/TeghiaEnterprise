# Teghia Enterprise — Interior Renovation & Civil Works

A responsive marketing website for Teghia Enterprise, showcasing interior renovation, modular fit-outs, civil repairs, waterproofing, painting, and commercial office work in Kharghar and Navi Mumbai.

## Website

The site is configured to deploy from this repository to GitHub Pages:

**https://shadabaj.github.io/TeghiaEnterprise/**

The URL becomes available after the first successful GitHub Actions deployment finishes.

## Features

- Service catalog and service-detail dialogs
- Renovation project/case-study cards and detail dialogs
- BOQ (bill of quantities) estimate calculator
- Site-inspection inquiry flow
- Direct-call and WhatsApp contact actions
- Neighborhood coverage information
- Reviews, FAQ, and responsive mobile navigation

## Technology

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Lucide icons and Motion
- GitHub Actions and GitHub Pages for static hosting

## Run locally

Prerequisites: Node.js 22.12 or later (Node 22 LTS recommended) and npm.

~~~bash
npm install
npm run dev
~~~

Open the URL printed by Vite (the project defaults to port 3000).

## Build and preview

~~~bash
npm run build
npm run preview
~~~

The production output is written to `dist/`.

## Deployment

Every push to `main` triggers the workflow in `.github/workflows/deploy.yml`. The workflow installs dependencies, builds the Vite site with the GitHub Pages base path, and deploys `dist/` to GitHub Pages. You can also start a deployment manually from the repository's **Actions** tab.

## Configuration and security

The current site is a static frontend. Keep private API keys and other secrets out of browser code and public environment files. The existing `.env.example` is only a placeholder from the development environment; no real key should be committed. If server-side Gemini or other API functionality is added later, implement it behind a trusted server endpoint and configure secrets in the hosting provider rather than in the frontend bundle.

## Content review before advertising the site

Review the phone number, address, founder information, rating/review claims, warranty claims, project metrics, and case-study details in `src/data/contractorData.ts` before promoting the live URL. Publish only claims and images that Teghia Enterprise is authorized to use.

## License

No license file is currently included. Add an explicit license before inviting others to reuse or redistribute the code.
