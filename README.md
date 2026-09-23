# Muhammad Javed Portfolio Starter

A complete editable single-page developer portfolio inspired by the structure and feel of the reference portfolio, but using original code, content placeholders, and replacement artwork.

## Stack
- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Edit your content
Most portfolio content lives in:
`src/data/portfolio.ts`

Change name, title, email, social links, stats, skills, experience, projects, and awards there.

## Replace project images
Put your screenshots in:
`public/images/projects/`

Then update the `image` property in `src/data/portfolio.ts`.

## Add your resume
1. Put your PDF in `public/resume/`, e.g. `Muhammad-Umar-Zahid-Resume.pdf`.
2. Change the resume hrefs in `src/components/Portfolio.tsx` from `/resume/REPLACE-WITH-YOUR-RESUME.txt` to `/resume/Muhammad-Umar-Zahid-Resume.pdf`.

## Deploy to Vercel
1. Push this project to GitHub.
2. Sign in to Vercel.
3. Import the GitHub repository.
4. Keep the default Next.js settings and deploy.
5. Every push to `main` automatically redeploys.

## Important asset note
The original images from the reference developer's website are not redistributed in this starter. The included SVG thumbnails are original placeholders designed for this project. Replace them with screenshots/assets you own or have permission to use.
