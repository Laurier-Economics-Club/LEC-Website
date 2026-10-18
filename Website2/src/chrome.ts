/** Shared header and footer for every page. */

export type PageId =
  | "home"
  | "about"
  | "programs"
  | "events"
  | "research"
  | "market"
  | "join"
  | "team"

const navItems: Array<{ id: PageId; href: string; label: string }> = [
  { id: "about", href: "/about.html", label: "About" },
  { id: "programs", href: "/programs.html", label: "Programs" },
  { id: "events", href: "/events.html", label: "Events" },
  { id: "research", href: "/research.html", label: "Research" },
  { id: "market", href: "/market.html", label: "Market" },
  { id: "team", href: "/team.html", label: "Team" },
  { id: "join", href: "/join.html", label: "Join" },
]

function currentPage(): PageId {
  const path = window.location.pathname.replace(/\/$/, "") || "/"
  if (path.endsWith("/about.html") || path.endsWith("/about")) return "about"
  if (path.endsWith("/programs.html") || path.endsWith("/programs")) return "programs"
  if (path.endsWith("/events.html") || path.endsWith("/events")) return "events"
  if (path.endsWith("/research.html") || path.endsWith("/research")) return "research"
  if (path.endsWith("/market.html") || path.endsWith("/market")) return "market"
  if (path.endsWith("/join.html") || path.endsWith("/join")) return "join"
  if (path.endsWith("/team.html") || path.endsWith("/team")) return "team"
  return "home"
}

export function mountChrome(): void {
  const page = currentPage()
  const headerHost = document.querySelector("[data-chrome='header']")
  const footerHost = document.querySelector("[data-chrome='footer']")

  if (headerHost) {
    headerHost.outerHTML = `
  <header class="site-header" id="site-header">
    <div class="site-header__inner">
      <a class="brand" href="/" aria-label="Laurier Economics Club home">
        <span class="brand__mark" aria-hidden="true">LEC</span>
        <span class="brand__name">Laurier Economics Club</span>
      </a>
      <nav class="nav" id="site-nav" aria-label="Primary">
        <ul class="nav__list" id="nav-menu">
          ${navItems
            .map(
              (item) => `
            <li>
              <a class="nav__link${item.id === page ? " is-active" : ""}" href="${item.href}"${
                item.id === page ? ' aria-current="page"' : ""
              }>${item.label}</a>
            </li>`,
            )
            .join("")}
          <li class="nav__cta-item">
            <a class="nav__cta" href="/events.html">Upcoming Events</a>
          </li>
        </ul>
      </nav>
      <a class="header-cta" href="/events.html">Upcoming Events</a>
      <button class="menu-toggle" id="hamburger" type="button" aria-label="Open menu" aria-controls="nav-menu" aria-expanded="false">
        <span class="menu-toggle__lines" aria-hidden="true"></span>
      </button>
    </div>
  </header>`
  }

  if (footerHost) {
    footerHost.outerHTML = `
  <footer class="footer">
    <div class="footer__grid">
      <div>
        <p class="footer__brand">LEC</p>
        <p>Laurier Economics Club<br>Est. 2008 · Lazaridis School<br>Waterloo, Ontario</p>
      </div>
      <div>
        <p class="meta-label meta-label--gold">On campus</p>
        <p>Affiliated with Lazaridis Students’ Society <span class="handle">@lazsoc</span></p>
        <p><a href="mailto:lec@wlu.ca">lec@wlu.ca</a></p>
      </div>
      <div>
        <p class="meta-label meta-label--gold">Index</p>
        <ul class="footer__links">
          <li><a href="/about.html">About</a></li>
          <li><a href="/programs.html">Programs</a></li>
          <li><a href="/events.html">Events</a></li>
          <li><a href="/research.html">Research</a></li>
          <li><a href="/team.html">Team</a></li>
          <li><a href="/join.html">Join</a></li>
        </ul>
      </div>
      <div>
        <p class="meta-label meta-label--gold">Signals</p>
        <ul class="footer__social" aria-label="Social links">
          <li>
            <a href="https://www.instagram.com/lauriereconclub/" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
              <span>@lauriereconclub</span>
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@lauriereconomicsclub" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" fill="currentColor">
                <path d="M16.6 2h-3.2v12.35a2.55 2.55 0 1 1-1.8-2.44V8.8a5.75 5.75 0 1 0 4.55 5.62V7.55A6.9 6.9 0 0 0 20 8.9V5.55A6.9 6.9 0 0 1 16.6 2Z"/>
              </svg>
              <span>@lauriereconomicsclub</span>
            </a>
          </li>
          <li>
            <a href="https://linktr.ee/lauriereconclub" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" fill="currentColor">
                <path d="M13.5 3.2a1.5 1.5 0 0 0-3 0v6.38L7.6 6.68a1.5 1.5 0 1 0-2.12 2.12L8.38 11.7H3.2a1.5 1.5 0 0 0 0 3h5.18l-2.9 2.9a1.5 1.5 0 1 0 2.12 2.12l2.9-2.9V22.8a1.5 1.5 0 0 0 3 0v-5.98l2.9 2.9a1.5 1.5 0 1 0 2.12-2.12l-2.9-2.9h5.18a1.5 1.5 0 0 0 0-3h-5.18l2.9-2.9a1.5 1.5 0 1 0-2.12-2.12l-2.9 2.9V3.2Z"/>
              </svg>
              <span>lauriereconclub</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer__base">
      <p>© <span id="year"></span> Laurier Economics Club</p>
      <p class="mono">Waterloo · Lazaridis</p>
    </div>
  </footer>

  <button class="to-top" id="back-to-top" type="button" aria-label="Back to top">
    <span aria-hidden="true">↑</span>
  </button>`
  }
}
