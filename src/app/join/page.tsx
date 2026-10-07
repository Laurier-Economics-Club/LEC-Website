import { Container } from "@/components/container"
import { PageHeader } from "@/components/page-header"
import { InstagramIcon } from "@/components/social-icons"
import { BlurFade } from "@/components/ui/blur-fade"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { site } from "@/content/site"
import { pageMetadata } from "@/lib/seo"
import { cn } from "@/lib/utils"

export const metadata = pageMetadata("Join", site.seo.join, "/join")

export default function JoinPage() {
  return (
    <>
      <PageHeader
        eyebrow="Membership"
        title="Join the club"
        description={site.join.intro}
      />
      <Container className="grid gap-10 py-12 sm:py-16 lg:grid-cols-[1.4fr_0.8fr]">
        <ol className="flex flex-col gap-4">
          {site.join.steps.map((step, index) => (
            <BlurFade key={step.title} inView delay={index * 0.05}>
              <li className="flex gap-4 rounded-xl border p-5">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-laurier text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <div>
                  <h2 className="font-medium">{step.title}</h2>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </li>
            </BlurFade>
          ))}
        </ol>

        <BlurFade inView>
          <Card>
            <CardHeader>
              <h2 className="text-base font-medium">What you get</h2>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-col gap-2 text-sm leading-6 text-muted-foreground">
                {site.join.perks.map((perk) => (
                  <li key={perk} className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={site.joinFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ size: "lg" }), "h-11")}
                >
                  Open the membership form
                </a>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-11",
                  )}
                >
                  <InstagramIcon className="size-4" />
                  Instagram {site.social.instagramHandle}
                </a>
                <p className="text-xs leading-5 text-muted-foreground">
                  The form opens on Google Forms. This site does not collect
                  your answers.
                </p>
              </div>
            </CardContent>
          </Card>
        </BlurFade>
      </Container>
    </>
  )
}
