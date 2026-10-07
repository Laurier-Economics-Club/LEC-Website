import { connection } from "next/server"
import { Suspense } from "react"

import { EventCard } from "@/components/event-card"
import { events, type ClubEvent } from "@/lib/content"

/**
 * Upcoming versus past uses today's date in Toronto.
 * `connection()` is required so Next.js does not try to freeze "today"
 * into the static page. Editors do not need to move events by hand.
 */
async function eventsByDate() {
  await connection()

  const today = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Toronto",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date())

  const upcoming = events
    .filter((event) => event.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date))
  const past = events
    .filter((event) => event.date < today)
    .sort((a, b) => b.date.localeCompare(a.date))

  return { upcoming, past }
}

function EventGrid({
  items,
  highlighted = false,
}: {
  items: ClubEvent[]
  highlighted?: boolean
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((event) => (
        <EventCard key={`${event.date}-${event.title}`} event={event} highlighted={highlighted} />
      ))}
    </div>
  )
}

function EventSkeleton({ count }: { count: number }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-hidden="true">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="h-56 animate-pulse rounded-xl bg-muted" />
      ))}
    </div>
  )
}

async function UpcomingPreviewList() {
  const { upcoming } = await eventsByDate()
  const nextEvents = upcoming.slice(0, 3)

  if (nextEvents.length === 0) {
    return (
      <p className="text-muted-foreground">
        No upcoming events yet. Check back soon.
      </p>
    )
  }

  return <EventGrid items={nextEvents} highlighted />
}

export function UpcomingPreview() {
  return (
    <Suspense fallback={<EventSkeleton count={3} />}>
      <UpcomingPreviewList />
    </Suspense>
  )
}

async function AllEventsList() {
  const { upcoming, past } = await eventsByDate()

  return (
    <div className="flex flex-col gap-12">
      <section>
        <h2 className="text-2xl font-semibold tracking-tight">Upcoming</h2>
        <div className="mt-6">
          {upcoming.length > 0 ? (
            <EventGrid items={upcoming} />
          ) : (
            <p className="text-muted-foreground">
              Nothing is scheduled right now. Past events are listed below.
            </p>
          )}
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold tracking-tight">Past</h2>
        <div className="mt-6">
          {past.length > 0 ? (
            <EventGrid items={past} />
          ) : (
            <p className="text-muted-foreground">No past events yet.</p>
          )}
        </div>
      </section>
    </div>
  )
}

export function AllEvents() {
  return (
    <Suspense fallback={<EventSkeleton count={3} />}>
      <AllEventsList />
    </Suspense>
  )
}
