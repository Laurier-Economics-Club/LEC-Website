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
        <ul class="footer__links">
          <li><a href="https://www.instagram.com/lauriereconclub/" target="_blank" rel="noopener noreferrer">Instagram · @lauriereconclub</a></li>
          <li><a href="https://www.tiktok.com/@lauriereconomicsclub" target="_blank" rel="noopener noreferrer">TikTok · @lauriereconomicsclub</a></li>
          <li><a href="https://linktr.ee/lauriereconclub" target="_blank" rel="noopener noreferrer">linktr.ee/lauriereconclub</a></li>
          <li><a href="https://lazsoc.ca/shop/events" target="_blank" rel="noopener noreferrer">Buy tickets · LazSoc</a></li>
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
