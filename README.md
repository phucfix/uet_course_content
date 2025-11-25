# uet_course_content

## Overview
Static site for UET course content built with Hugo. Deployed automatically to GitHub Pages from `main`.

## Tech
- **Hugo** (static site generator)
- **Tailwind CSS** via CDN

## Repository layout
- `content/` course content (Markdown)
- `layouts/` Hugo templates
- `public/` build output (CI artifact only; not committed)
- `.github/workflows/hugo.yml` GitHub Actions workflow

## Local development
From the repository root:
```bash
hugo server -D
```
Open the URL shown (usually http://localhost:1313). The `-D` flag includes drafts.


## Writing content
- Weeks: `content/courses/<course>/weeks/<week>/_index.md`
- Problem sets: `content/courses/<course>/psets/<pset>.md`
- Notes: `content/courses/<course>/notes/<note>.md`
- Section landing pages use `_index.md`.

### Front matter example
```yaml
---
title: "Week 1"
description: "Intro and C"
draft: false
image: "/img/courses/cs.jpg" # optional
type: "notes" # or "psets", "week-with-sidebar", etc.
url: "/courses/cs50/weeks/1/notes/"
---
```

### Markdown syntax
- **Headings:** `#`, `##`, `###` etc.
- **Bold:** `**bold**`
- **Italic:** `*italic*`
- **Lists:**
	- Unordered: `- item`
	- Ordered: `1. item`
- **Links:** `[text](url)`
- **Images:** `![alt](url)`
- **Code block:**
	```python
	print("Hello World")
	```
- **Table:**
	| Name   | Value |
	|--------|-------|
	| Item 1 | 123   |
	| Item 2 | 456   |

### Hugo shortcodes
- **YouTube embed:**
	`{{< youtube id="dQw4w9WgXcQ" >}}`
- **Collapsible section:**
	```markdown
	<details>
		<summary>Show more</summary>
		Content here
	</details>
	```

### Tips
- Use `description` in front matter for summary text.
- Use `image` for course thumbnails.
- Use `type` to control layout (notes, psets, week-with-sidebar, etc).
- Use shortcodes for video, collapsible, etc.


## Collaboration workflow
- **Branching**: create feature branches from `main`, e.g. `feat/<short-name>` or `fix/<short-name>`.
- **Commits**: concise imperative messages.
- **PRs**: open a PR to `main`. Request at least one review. Ensure the site builds locally before requesting review.
- **Content reviews**: check links, headings, and code blocks render.

## Deployment (GitHub Pages)
- GitHub Actions builds Hugo and deploys to Pages on pushes to `main`.
- Production URL: `https://phucfix.github.io/uet_course_content/`
- Workflow file: `.github/workflows/hugo.yml` builds with:
```bash
hugo -D -b "https://phucfix.github.io/uet_course_content/"
```
- In GitHub → Settings → Pages: Source = GitHub Actions.

## Troubleshooting
- If links look broken on Pages, verify the base URL matches `https://phucfix.github.io/uet_course_content/` (we pass it with `-b` in CI).
- Clear your browser cache or force refresh after a deploy.

## Requirements
- Hugo (latest) for local dev: https://gohugo.io/getting-started/installing/
## CS50-like theme (lightweight)

