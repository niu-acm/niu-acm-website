# NIU ACM Website

The homepage for the NIU Association for Computing Machinery.


## Development
**Pre-Requisites**:

You can use either of following two methods, but direct installation is better if you're new.
- Directly install [Bun](https://bun.sh/docs/installation) (preferred)
- Install the [Nix Package Manager](https://nixos.org/), enable [Nix Flakes](https://nixos.wiki/wiki/flakes), and enter the development environment with `nix develop`

**Getting Started**:
```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/page.tsx`. The page auto-updates as you edit the file.


## Verifying Static Builds
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
