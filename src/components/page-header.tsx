import { BlurFade } from "@/components/ui/blur-fade"
import { Container } from "@/components/container"

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string
  title: string
  description: string
}) {
  return (
    <header className="border-b">
      <Container className="py-12 sm:py-16">
        <BlurFade>
          {eyebrow ? (
            <p className="text-sm font-medium text-primary">{eyebrow}</p>
          ) : null}
          <h1 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
            {description}
          </p>
        </BlurFade>
      </Container>
    </header>
  )
}
