import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { Container } from "@/components/container"
import { UpcomingPreview } from "@/components/event-lists"
import { BlurFade } from "@/components/ui/blur-fade"
import { buttonVariants } from "@/components/ui/button"
import { DotPattern } from "@/components/ui/dot-pattern"
import { Marquee } from "@/components/ui/marquee"
import { NumberTicker } from "@/components/ui/number-ticker"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { site } from "@/content/site"
import { sponsors } from "@/lib/content"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
}

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b">
        <DotPattern
          className="text-primary/20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
          width={22}
          height={22}
          cr={1}
        />
        <Container className="relative py-16 sm:py-24">
          <BlurFade>
            <p className="text-sm font-medium tracking-wide text-primary">
              {site.university}
            </p>
            <span className="mt-4 block h-1 w-12 rounded-full bg-gold" />
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              {site.name}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
              {site.tagline}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ShimmerButton
                href="/join"
                background="#4F2683"
                shimmerColor="#F2A900"
                className="h-11 px-6 text-sm font-medium"
              >
                Join the club
              </ShimmerButton>
              <Link
                href="/events"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-11 px-5",
                )}
              >
                Upcoming events
              </Link>
            </div>
          </BlurFade>
        </Container>
      </section>

      <section className="border-b">
        <Container className="grid gap-8 py-12 sm:grid-cols-3 sm:py-16">
          {site.stats.map((stat, index) => (
            <BlurFade key={stat.label} inView delay={index * 0.08}>
              <p className="text-4xl font-semibold tracking-tight text-primary">
                <NumberTicker value={stat.value} className="text-primary" />
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </BlurFade>
          ))}
        </Container>
      </section>

      <section className="border-b">
        <Container className="py-14 sm:py-16">
          <BlurFade inView>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Upcoming events
                </h2>
                <p className="mt-2 max-w-xl text-muted-foreground">
                  The next three events on the calendar.
                </p>
              </div>
              <Link
                href="/events"
                className="text-sm font-medium text-primary hover:underline"
              >
                View all events
              </Link>
            </div>
          </BlurFade>
          <div className="mt-8">
            <UpcomingPreview />
          </div>
        </Container>
      </section>

      {sponsors.length > 0 ? (
        <section className="border-b">
          <Container className="py-14 sm:py-16">
            <BlurFade inView>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Sponsors and partners
              </h2>
              <p className="mt-2 text-muted-foreground">
                Organizations that support the club.
              </p>
            </BlurFade>
          </Container>
          <Marquee pauseOnHover className="[--duration:45s] [--gap:2.5rem]">
            {sponsors.map((sponsor) => (
              <a
                key={sponsor.name}
                href={sponsor.url}
                aria-label={sponsor.name}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-16 items-center px-2"
              >
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={180}
                  height={60}
                  unoptimized={sponsor.logo.endsWith(".svg")}
                  className="h-12 w-auto object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0"
                />
              </a>
            ))}
          </Marquee>
        </section>
      ) : null}

      <section>
        <Container className="py-16 sm:py-20">
          <BlurFade inView>
            <div className="rounded-2xl border bg-card px-6 py-10 sm:px-10">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Join the club
              </h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                {site.join.intro}
              </p>
              <div className="mt-6">
                <ShimmerButton
                  href="/join"
                  background="#4F2683"
                  shimmerColor="#F2A900"
                  className="h-11 px-6 text-sm font-medium"
                >
                  How to join
                </ShimmerButton>
              </div>
            </div>
          </BlurFade>
        </Container>
      </section>
    </>
  )
}
