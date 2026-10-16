import { Container } from "@/components/container"
import { AllEvents } from "@/components/event-lists"
import { PageHeader } from "@/components/page-header"
import { site } from "@/content/site"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata("Events", site.seo.events, "/events")

export default function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Calendar"
        title="Events"
        description="Upcoming events are listed first. After an event's date passes, it moves to the past list on its own."
      />
      <Container className="py-12 sm:py-16">
        <AllEvents />
      </Container>
    </>
  )
}
