# Laurier Economics Club (Website2)

Vite multi-page site. The home page is the hero only. Every navbar item is its own page.

## Pages

- `/` — Home (hero)
- `/about.html` — About
- `/programs.html` — Programs
- `/events.html` — Events
- `/market.html` — Classroom market model
- `/join.html` — Join
- `/team.html` — Team (portfolio sections with circular portraits)

## Run locally

Use Homebrew Node (Vite 8 needs a recent Node):

```bash
cd Website2
export PATH="/opt/homebrew/bin:$PATH"
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://127.0.0.1:3000).

## Edit content

HTML files at the project root hold page copy. Shared header/footer live in `src/chrome.ts`. Styles are in `src/styles.css`.
