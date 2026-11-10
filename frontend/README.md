# Frontend

This directory contains the React and TypeScript frontend for the production platform.

The frontend uses Vite for local development and production builds. Production builds create static files in `dist/` for deployment.

## Requirements

* Node.js
* npm

## Install Dependencies

From the `frontend/` directory:

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Vite starts a local development server and prints the local URL in the terminal.

## Lint

```bash
npm run lint
```

## Build for Production

```bash
npm run build
```

The production build is created in `frontend/dist/`.

## Deploy to Cloudflare Workers

Use these settings for the connected `my-platform` Worker:

| Setting | Value |
| --- | --- |
| Root directory | `frontend` |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |

The `wrangler.jsonc` file sets the Worker name to `my-platform` and serves the built files from `dist/`.

Cloudflare stores preview build settings separately from production settings. For preview branches, set the root directory to `frontend`, the build command to `npm run build`, and the preview command to `npx wrangler preview`. Apply these settings to existing previews as well as the defaults for future previews. The Wrangler file does not set the directory used by Cloudflare's dependency installation step.

To deploy locally from `frontend/`, build first and then deploy:

```bash
npm run build
npx wrangler deploy
```
