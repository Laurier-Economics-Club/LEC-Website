import Link from "next/link"

import { Container } from "@/components/container"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function NotFound() {
  return (
    <Container className="py-24">
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-3 text-muted-foreground">
        That page is not on this site.
      </p>
      <Link href="/" className={cn(buttonVariants(), "mt-6")}>
        Back to home
      </Link>
    </Container>
  )
}
