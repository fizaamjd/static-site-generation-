# Next.js Static Generation

A Next.js Pages Router exercise that reads local Markdown at build time and exports a static website.

[![Verify](https://github.com/fizaamjd/static-site-generation-/actions/workflows/verify.yml/badge.svg)](https://github.com/fizaamjd/static-site-generation-/actions/workflows/verify.yml)

## Overview

getStaticProps loads posts/hello-world.md through lib/posts.js. The Pages Router renders that data into an exportable page. No database or application server is required to serve the generated out directory.

## Getting started

```sh
git clone https://github.com/fizaamjd/static-site-generation-.git
cd static-site-generation-
npm ci
npm run build
```

## Development and publishing

Use `npm run dev` locally. `npm run build` writes `out/` using Next.js static export. Edit `posts/hello-world.md` to change the sample content. Markdown is trusted repository content, not untrusted user input. Generated `.next/` caches and `out/` output are excluded from source control.

## Maintenance

- [Architecture](docs/architecture.md)
- [Configuration](docs/configuration.md)
- [Verification](docs/testing.md)
- [Contributing](CONTRIBUTING.md)
- [Security](SECURITY.md)
- [Support](SUPPORT.md)
- [License scope](docs/license-scope.md)

Original coursework history and contributors are preserved.
