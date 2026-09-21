# leah-portfolio — Astro

Static portfolio. Zero JS by default; the only client-side React island is the
GPT story demo (`client:visible`). Scroll effects are a single vanilla
`<script>` in `ScrollFX.astro` — no animation library.

## Run

Requires pnpm 9+ (`corepack enable pnpm` if you don't have it).

```bash
pnpm install
cp .env.example .env
pnpm dev             # http://localhost:4321
pnpm build           # -> dist/
pnpm preview
```

## Environment

```text
PUBLIC_API_URL=https://your-fastapi-domain.com
```

Local dev points at `http://localhost:8000` (uvicorn). If unset, the demo shows
a "not configured" message instead of failing.

## Adding a project

Drop a Markdown file in `src/content/projects/`. Frontmatter is validated by the
schema in `src/content/config.ts`; the Markdown body renders under **Notes** on
the detail page. Set `demo: true` to attach the live generator and the
`Live demo` badge. `order` controls position in the rail and list.

## Where things live

| Path | What |
| --- | --- |
| `src/data/site.ts` | Name, links, education, experience, skills, Now, counters |
| `src/content/projects/*.md` | One file per project |
| `src/components/ScrollFX.astro` | Nav blur, hero parallax, pinned horizontal rail, counters, reveals |
| `src/components/StoryGenerator.tsx` | The only React island — calls `POST /generate` |
| `src/styles/global.css` | Tokens + shared primitives (`.section`, `.rows`, `.chip`, `.btn`) |

## Deploy

Static output — Vercel, Netlify or Cloudflare Pages with no adapter. Build
command `pnpm build`, output directory `dist`; hosts detect pnpm from
`pnpm-lock.yaml`. Set `PUBLIC_API_URL` in the host's env vars. The FastAPI service deploys separately
(Docker) and must allow your production origin in its CORS list.
