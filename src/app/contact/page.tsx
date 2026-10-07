import { Mail } from "lucide-react"

import { Container } from "@/components/container"
import { PageHeader } from "@/components/page-header"
import { InstagramIcon, LinkedInIcon } from "@/components/social-icons"
import { BlurFade } from "@/components/ui/blur-fade"
import { site } from "@/content/site"
import { pageMetadata } from "@/lib/seo"

const channels = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    external: false,
    icon: <Mail className="size-5" aria-hidden="true" />,
  },
  {
    label: "Instagram",
    value: site.social.instagramHandle,
    href: site.social.instagram,
    external: true,
    icon: <InstagramIcon className="size-5" />,
  },
  {
    label: "LinkedIn",
    value: "Laurier Economics Club",
    href: site.social.linkedin,
    external: true,
    icon: <LinkedInIcon className="size-5" />,
  },
]

export const metadata = pageMetadata("Contact", site.seo.contact, "/contact")

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="Contact"
        description="Questions about events, sponsorship, or joining the exec team can go to the club email or social accounts."
      />
      <Container className="grid gap-4 py-12 sm:grid-cols-3 sm:py-16">
        {channels.map((channel, index) => (
          <BlurFade key={channel.label} inView delay={index * 0.05}>
            <a
              href={channel.href}
              {...(channel.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="flex h-full flex-col gap-3 rounded-xl border bg-card p-5 transition-colors hover:bg-muted"
            >
              <span className="text-primary">{channel.icon}</span>
              <span className="text-sm text-muted-foreground">
                {channel.label}
              </span>
              <span className="font-medium">{channel.value}</span>
            </a>
          </BlurFade>
        ))}
      </Container>
    </>
  )
}
