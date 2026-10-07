import Link from "next/link"

import { Container } from "@/components/container"
import { InstagramIcon, LinkedInIcon } from "@/components/social-icons"
import { Separator } from "@/components/ui/separator"
import { site } from "@/content/site"
import { navItems } from "@/lib/nav"

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t">
      <Container className="grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="font-semibold">{site.name}</p>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            {site.tagline}
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-col gap-2 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="w-fit text-muted-foreground hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col gap-2 text-sm">
          <a
            href={`mailto:${site.email}`}
            className="w-fit text-muted-foreground hover:text-foreground"
          >
            {site.email}
          </a>
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <InstagramIcon className="size-4" />
            Instagram
          </a>
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <LinkedInIcon className="size-4" />
            LinkedIn
          </a>
        </div>
      </Container>
      <Separator />
      <Container className="py-4">
        <p className="text-xs text-muted-foreground">{site.disclaimer}</p>
      </Container>
    </footer>
  )
}
