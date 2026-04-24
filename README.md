# Fakhry Portfolio Static

A new standalone portfolio build for Fakhry Aldaya, created in a separate folder so the previous portfolio remains untouched for comparison.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static export-ready configuration for Hostinger shared hosting

## Local development

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Build and export

1. Create the production build and static export:

```bash
npm run build
```

Because `output: "export"` is enabled in `next.config.mjs`, the build generates a static site in the `out/` folder.

2. If you prefer an explicit export command, this project also includes:

```bash
npm run export
```

This runs the same static export-friendly build and also outputs to `out/`.

## Deploy to Hostinger

1. Run `npm run build`.
2. After the build completes, open the generated `out/` folder.
3. Upload the contents of `out/` to your Hostinger `public_html` directory.
4. If you are deploying into a subdirectory instead of the domain root, update `next.config.mjs` with the correct `basePath` and `assetPrefix` first.
5. Make sure old Hostinger files that should not be served are removed from `public_html` before uploading the new export.

## Content and media editing

- Main editable content lives in `content/site.ts`, `content/projects.ts`, `content/skills.ts`, and `content/experience.ts`.
- Project media folders are prepared under `public/assets/projects/`.
- Add screenshots or videos to the matching project folder, then update the `media` arrays in `content/projects.ts`.

Prepared media folders:

- `public/assets/projects/netsentinel/`
- `public/assets/projects/au-facilities/`
- `public/assets/projects/desktop-automation/`
- `public/assets/projects/prompt-forge/`
- `public/assets/projects/sub-branch-chat/`

## CV download support

The UI already includes a CV button with graceful fallback.

To enable direct download:

1. Add the PDF file at `public/resume/Fakhry-Aldaya-CV.pdf`
2. Change `siteConfig.cv.available` to `true` in `content/site.ts`

## SEO notes

- Metadata is defined per page.
- `app/robots.ts` and `app/sitemap.ts` are included.
- `public/og-cover.svg` is included as a placeholder Open Graph image.

If you later have a final production domain, update any metadata URLs or sharing assets as needed.
