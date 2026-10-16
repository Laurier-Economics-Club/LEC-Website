# Laurier Economics Club website

This is the club website for [lauriereconomicsclub.com](https://lauriereconomicsclub.com). It is a simple site with no database and no login. Almost every change an executive needs to make is in the `src/content` folder.

The names, photos, events, and links in the repo right now are placeholders. Search that folder for `TODO` and replace them before you treat the site as finished.

## Change something and publish it

The live site updates when a change is on the **main** branch.

1. On GitHub, open the file you want to change (paths are listed below).
2. Click the pencil icon to edit it.
3. Make the change. Keep the quotes and commas. JSON is picky: a missing comma will stop the site from building.
4. Commit the change **to the main branch**.
5. Wait a minute or two, then refresh [lauriereconomicsclub.com](https://lauriereconomicsclub.com).

Vercel builds the site for you. You do not run a deploy command. A change on any other branch does not update the live site until it is merged into main.

### Connect Vercel the first time

If the domain is not live yet, a club member with access to the GitHub repo and the domain does this once:

1. Go to [vercel.com](https://vercel.com) and import this GitHub repository.
2. Leave the framework as Next.js. There are no environment variables to add.
3. Set the production branch to `main`.
4. After the first deploy, add the domain `lauriereconomicsclub.com` in the Vercel project settings and follow Vercel’s instructions at the domain registrar.

After that, pushing to main is enough.

## Files you edit

| What you want to change | File |
| --- | --- |
| Club name, tagline, email, Instagram, LinkedIn, join form, stats, about text, join text | `src/content/site.ts` |
| Events | `src/content/events.json` |
| Executive team | `src/content/team.json` |
| Sponsors | `src/content/sponsors.json` |
| Photos and logos | `public/images/team`, `public/images/events`, `public/images/sponsors` |

Do not put passwords, API keys, or other secrets in these files. This site does not need any. If that ever changes, add the secret in the Vercel project settings as an environment variable. Never commit a `.env` file.

## Add an event

Open `src/content/events.json`. Copy one object inside `"events"` and change the values. `date` must look like `2026-10-21` (year-month-day). The site files that date under **Upcoming** until the day passes in Toronto time, then it moves to **Past** on its own. You do not move it by hand.

`link` and `image` are optional. Delete those two lines if you do not have them.

Put a photo in `public/images/events`, then set `image` to a path that starts with `/images/events/`.

```json
{
  "title": "Industry Networking Night",
  "date": "2026-10-21",
  "time": "6:00–8:00 p.m.",
  "location": "Lazaridis Hall",
  "description": "Meet alumni and employers for a short evening of conversations.",
  "link": "https://example.com/event-details",
  "image": "/images/events/networking-night.jpg"
}
```

To remove an event, delete its whole `{ ... }` block, including the comma after it if it is not the last event.

## Add or remove an executive

Open `src/content/team.json`. Each person is one object in `"members"`.

Put their photo in `public/images/team`. Square photos look best. `linkedin` is optional. Delete that line if they do not have one.

```json
{
  "name": "Jordan Hale",
  "role": "President",
  "program": "Economics",
  "year": "Year 4",
  "image": "/images/team/jordan-hale.jpg",
  "linkedin": "https://www.linkedin.com/in/their-profile"
}
```

To remove someone, delete their object. The current names and photos are placeholders.

## Add or remove a sponsor

Open `src/content/sponsors.json`. Put the logo in `public/images/sponsors`. A wide logo on a plain background works best.

```json
{
  "name": "Sponsor Name",
  "logo": "/images/sponsors/sponsor-name.png",
  "url": "https://sponsor-website.com"
}
```

Delete an object to remove a sponsor. If you delete every sponsor, the sponsors row disappears from the home page.

## Change the club name, email, or social links

Open `src/content/site.ts`.

- `name` and `tagline` are the home page heading and the sentence under it.
- `email` is the address on the contact page and in the footer.
- `social.instagram`, `social.instagramHandle`, and `social.linkedin` are the social links.
- `joinFormUrl` is the Google Form (or other form) linked from the Join page. The website does not store form answers.
- `stats` are the three numbers on the home page. `value` must be a number, without quotes.
- `about` and `join` are the paragraphs on those pages.

Example of the stats block:

```ts
stats: [
  { label: "Members", value: 80 },
  { label: "Events per year", value: 12 },
  { label: "Years running", value: 5 },
],
```

## Preview on your own computer

You need [Node.js](https://nodejs.org/) installed. In the project folder:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Stop the preview with Ctrl+C.

`npm run build` checks that the site still builds before you push.
