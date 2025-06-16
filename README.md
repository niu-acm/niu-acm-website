# NIU ACM Website

The homepage for the NIU Association for Computing Machinery.

## Development
First, run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Verifying That The Site Functions Built Statically
Build the site with Bun, which outputs to `out/`:
```bash
bun run build
```

Test the static version at `https://localhost:3000`:
```bash
bunx serve out/
```

*Please note that deployment is handled automatically on each push to `main`, so there's no need to build and publish this yourself ^^*

## Resources
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.