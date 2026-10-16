import { Container } from "@/components/container"
import { PageHeader } from "@/components/page-header"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { BlurFade } from "@/components/ui/blur-fade"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { LinkedInIcon } from "@/components/social-icons"
import { site } from "@/content/site"
import { initials, team } from "@/lib/content"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata("Team", site.seo.team, "/team")

export default function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Executives"
        title="The team"
        description="The students who run the club this year. The names and photos below are placeholders."
      />
      <Container className="py-12 sm:py-16">
        {team.length === 0 ? (
          <p className="text-muted-foreground">
            The executive list is empty. Add members in src/content/team.json.
          </p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <BlurFade key={member.name} inView delay={index * 0.04}>
                <Card className="h-full">
                  <CardHeader className="items-center text-center">
                    <Avatar className="size-24">
                      <AvatarImage src={member.image} alt="" />
                      <AvatarFallback>{initials(member.name)}</AvatarFallback>
                    </Avatar>
                    <h2 className="text-base font-medium">{member.name}</h2>
                    <Badge variant="secondary">{member.role}</Badge>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center gap-3 text-center">
                    <p className="text-sm text-muted-foreground">
                      {member.program} · {member.year}
                    </p>
                    {member.linkedin ? (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                      >
                        <LinkedInIcon className="size-3.5" />
                        LinkedIn
                      </a>
                    ) : null}
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        )}
      </Container>
    </>
  )
}
