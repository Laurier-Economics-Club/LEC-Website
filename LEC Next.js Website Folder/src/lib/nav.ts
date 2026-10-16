/** Pages shown in the navbar and footer. Paths match the folders in src/app. */
export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/team", label: "Team" },
  { href: "/join", label: "Join" },
  { href: "/contact", label: "Contact" },
] as const

export const mainNavItems = navItems.filter((item) => item.href !== "/")
