const header = document.getElementById("site-header");
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("site-nav");
const backToTop = document.getElementById("back-to-top");
const yearEl = document.getElementById("year");
const navLinks = document.querySelectorAll<HTMLAnchorElement>(".nav__link");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

function closeMenu(): void {
  hamburger?.classList.remove("active");
  nav?.classList.remove("is-open");
  header?.classList.remove("is-open");
  document.body.classList.remove("nav-open");
  hamburger?.setAttribute("aria-expanded", "false");
  hamburger?.setAttribute("aria-label", "Open menu");
}

function openMenu(): void {
  hamburger?.classList.add("active");
  nav?.classList.add("is-open");
  header?.classList.add("is-open");
  document.body.classList.add("nav-open");
  hamburger?.setAttribute("aria-expanded", "true");
  hamburger?.setAttribute("aria-label", "Close menu");
}

hamburger?.addEventListener("click", () => {
  const expanded = hamburger.getAttribute("aria-expanded") === "true";
  if (expanded) {
    closeMenu();
  } else {
    openMenu();
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => closeMenu());
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    closeMenu();
  }
});

document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const href = anchor.getAttribute("href");
    if (!href || href === "#") return;
    const target = document.querySelector(href);
    if (!target) return;
    event.preventDefault();
    const offset = header ? header.offsetHeight : 0;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: prefersReducedMotion ? "auto" : "smooth" });
  });
});

const sections = document.querySelectorAll<HTMLElement>("section[id]");

function highlightNav(): void {
  const y = window.scrollY;
  const offset = (header?.offsetHeight ?? 0) + 48;
  sections.forEach((section) => {
    const top = section.offsetTop - offset;
    const bottom = top + section.offsetHeight;
    const id = section.id;
    const link = document.querySelector<HTMLAnchorElement>(`.nav__link[href="#${id}"]`);
    if (!link) return;
    if (y >= top && y < bottom) {
      navLinks.forEach((item) => item.classList.remove("is-active"));
      link.classList.add("is-active");
    }
  });
}

function onScroll(): void {
  const y = window.scrollY;
  header?.classList.toggle("is-scrolled", y > 24);
  backToTop?.classList.toggle("is-visible", y > window.innerHeight * 0.7);
  highlightNav();
}

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

backToTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
});

if (!prefersReducedMotion) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
  );

  document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
} else {
  document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-in"));
}

const PLOT = {
  left: 56,
  right: 440,
  top: 28,
  bottom: 312,
};

function xOfQ(q: number): number {
  return PLOT.left + (q / 100) * (PLOT.right - PLOT.left);
}

function yOfP(p: number): number {
  return PLOT.bottom - (p / 25) * (PLOT.bottom - PLOT.top);
}

function demandQ(p: number): number {
  return 100 - 4 * p;
}

function supplyQ(p: number): number {
  return 4 * p - 20;
}

function linePath(points: Array<[number, number]>): string {
  return points.map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x} ${y}`).join(" ");
}

function initMarket(): void {
  const slider = document.getElementById("price-slider") as HTMLInputElement | null;
  const demandLine = document.getElementById("demand-line");
  const supplyLine = document.getElementById("supply-line");
  const priceLine = document.getElementById("price-line");
  const demandDot = document.getElementById("demand-dot");
  const supplyDot = document.getElementById("supply-dot");
  const gapBand = document.getElementById("gap-band");
  const priceEl = document.getElementById("market-price");
  const qdEl = document.getElementById("market-qd");
  const qsEl = document.getElementById("market-qs");
  const statusEl = document.getElementById("market-status");
  const grid = document.getElementById("market-grid");

  if (
    !slider ||
    !demandLine ||
    !supplyLine ||
    !priceLine ||
    !demandDot ||
    !supplyDot ||
    !gapBand ||
    !priceEl ||
    !qdEl ||
    !qsEl ||
    !statusEl ||
    !grid
  ) {
    return;
  }

  const demandPts: Array<[number, number]> = [];
  const supplyPts: Array<[number, number]> = [];
  for (let p = 6; p <= 22; p += 0.5) {
    demandPts.push([xOfQ(demandQ(p)), yOfP(p)]);
    supplyPts.push([xOfQ(supplyQ(p)), yOfP(p)]);
  }
  demandLine.setAttribute("d", linePath(demandPts));
  supplyLine.setAttribute("d", linePath(supplyPts));

  const eqP = 15;
  const eqQ = demandQ(eqP);
  const eqMark = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  eqMark.setAttribute("cx", String(xOfQ(eqQ)));
  eqMark.setAttribute("cy", String(yOfP(eqP)));
  eqMark.setAttribute("r", "3.5");
  eqMark.setAttribute("fill", "#F5F2E9");
  grid.appendChild(eqMark);

  const eqLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
  eqLabel.textContent = "E";
  eqLabel.setAttribute("x", String(xOfQ(eqQ) + 8));
  eqLabel.setAttribute("y", String(yOfP(eqP) - 8));
  eqLabel.setAttribute("fill", "#F5F2E9");
  eqLabel.setAttribute("font-size", "11");
  eqLabel.setAttribute("font-family", "IBM Plex Mono, monospace");
  grid.appendChild(eqLabel);

  const render = (): void => {
    const p = Number(slider.value);
    const qd = Math.max(0, demandQ(p));
    const qs = Math.max(0, supplyQ(p));
    const y = yOfP(p);
    const xD = xOfQ(qd);
    const xS = xOfQ(qs);

    priceLine.setAttribute("y1", String(y));
    priceLine.setAttribute("y2", String(y));
    demandDot.setAttribute("cx", String(xD));
    demandDot.setAttribute("cy", String(y));
    supplyDot.setAttribute("cx", String(xS));
    supplyDot.setAttribute("cy", String(y));

    gapBand.replaceChildren();
    const gap = Math.abs(xS - xD);
    if (gap > 4) {
      const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      rect.setAttribute("x", String(Math.min(xD, xS)));
      rect.setAttribute("y", String(y - 7));
      rect.setAttribute("width", String(gap));
      rect.setAttribute("height", "14");
      rect.setAttribute("fill", p < 15 ? "rgba(216,183,106,0.22)" : "rgba(168,184,165,0.22)");
      gapBand.appendChild(rect);
    }

    priceEl.textContent = p.toFixed(1);
    qdEl.textContent = qd.toFixed(1);
    qsEl.textContent = qs.toFixed(1);

    const diff = Math.abs(qd - qs);
    if (diff < 0.8) {
      statusEl.textContent = "Equilibrium";
    } else if (qd > qs) {
      statusEl.textContent = "Shortage";
    } else {
      statusEl.textContent = "Surplus";
    }

    slider.setAttribute("aria-valuenow", String(p));
    slider.setAttribute("aria-valuetext", `Price ${p.toFixed(1)}, quantity demanded ${qd.toFixed(1)}, quantity supplied ${qs.toFixed(1)}`);
  };

  slider.addEventListener("input", render);
  render();
}

initMarket();
