import { Container } from "@/components/container"
import { PageHeader } from "@/components/page-header"
import { BlurFade } from "@/components/ui/blur-fade"
import { site } from "@/content/site"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata("About", site.seo.about, "/about")

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow={site.university}
        title="About the club"
        description={site.about.intro}
      />
      <Container className="flex flex-col gap-10 py-12 sm:py-16">
        {site.about.sections.map((section, index) => (
          <BlurFade key={section.title} inView delay={index * 0.05}>
            <section className="max-w-3xl">
              <h2 className="text-2xl font-semibold tracking-tight">
                {section.title}
              </h2>
              <div className="mt-3 flex flex-col gap-3">
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-base leading-7 text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          </BlurFade>
        ))}
      </Container>
    </>
  )
}
