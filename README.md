# Breeze

A minimal, clean Astro theme for personal websites and blogs.

Built with [Astro 5](https://astro.build), [Tailwind CSS v4](https://tailwindcss.com), and TypeScript.

[中文文档 / Chinese Documentation](./README.zh-CN.md)

## Features

- Dark / Light mode with smooth toggle
- Full-text search (Pagefind, Cmd+K)
- RSS feed and sitemap
- Artalk comments (optional)
- Umami analytics (optional)
- Content collections (posts, projects, categories, tags, friends)
- Table of contents for posts
- Expressive Code syntax highlighting
- View Transitions
- Responsive design
- OKLch color system with easy hue customization

## Quick Start

```bash
# Clone the repository
git clone https://github.com/your-username/astro-theme-breeze.git my-site
cd my-site

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

## Configuration

All site configuration is in `src/config/site.ts`. This is the only file you need to edit to personalize the theme.

| Section | Description |
|---------|-------------|
| `meta` | Site title, description, author, logo, language |
| `navigation` | Navigation menu items with subtitle labels |
| `social` | Social links (GitHub, Email, etc.) |
| `hero` | Homepage greeting, description, info cards |
| `footer` | Copyright and credit text |
| `comments` | Artalk comments configuration |
| `features` | Toggle search, RSS |
| `tools` | Tools/Stack page data |
| `labels` | All UI text labels (for i18n) |

Also update `astro.config.mjs` to set your `site` URL.

## Content

### Blog Posts

Add Markdown or MDX files to `src/content/posts/`:

```yaml
---
title: My First Post
createdAt: 2025-01-01
category: technology
tags: [astro, tutorial]
summary: A brief description of the post.
---
```

### About Page

Edit `src/content/pages/about.md` — pure Markdown, no component knowledge needed.

### Projects

Add to `src/content/projects/` with frontmatter: `title`, `description`, `tech`, `link`, `status`.

### Categories & Tags

Edit `src/content/miscs/categories.json` and `src/content/miscs/tags.json`.

### Friends

Edit `src/content/miscs/friends.json` with `name`, `description`, `link`, `avatar`.

## Theme Colors

Edit `src/styles/theme.css`. All colors use OKLch with a consistent hue value (default: 165).

To change the color palette, find-and-replace the hue number:

- `165` = Sage Green (default)
- `250` = Ocean Blue
- `280` = Lavender Purple
- `330` = Rose Pink
- `30` = Warm Orange

## Comments (Artalk)

1. Set up an [Artalk](https://artalk.js.org) server
2. In `src/config/site.ts`, set `comments.enabled: true` and `comments.artalk.server` to your server URL
3. To disable comments, set `comments.enabled: false`

## Analytics (Umami)

1. Copy `.env.example` to `.env`
2. Set `UMAMI_URL` and `UMAMI_WEBSITE_ID`

## Deploy

Works with any static hosting: Vercel, Netlify, Cloudflare Pages, etc.

```bash
pnpm build
```

The output is in `dist/`.

## License

MIT
