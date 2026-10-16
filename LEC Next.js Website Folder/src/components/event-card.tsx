import { ArrowUpRight, Clock, MapPin } from "lucide-react"
import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { MagicCard } from "@/components/ui/magic-card"
import type { ClubEvent } from "@/lib/content"
import { formatEventDate } from "@/lib/content"

export function EventCard({
  event,
  highlighted = false,
}: {
  event: ClubEvent
  highlighted?: boolean
}) {
  const body = (
    <>
      {event.image ? (
        <div className="relative aspect-video">
          <Image
            src={event.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
            unoptimized={event.image.endsWith(".svg")}
          />
        </div>
      ) : null}
      <CardHeader>
        <Badge variant="secondary" className="bg-gold/20 text-gold-foreground">
          {formatEventDate(event.date)}
        </Badge>
        <h3 className="text-base font-medium">{event.title}</h3>
        <p className="flex flex-col gap-1 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-3.5" aria-hidden="true" />
            {event.time}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-3.5" aria-hidden="true" />
            {event.location}
          </span>
        </p>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm leading-6 text-muted-foreground">
          {event.description}
        </p>
      </CardContent>
      {event.link ? (
        <CardFooter>
          <a
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            More information
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </a>
        </CardFooter>
      ) : null}
    </>
  )

  if (highlighted) {
    return (
      <MagicCard
        className="h-full rounded-xl"
        gradientFrom="#4F2683"
        gradientTo="#F2A900"
        gradientColor="#4F2683"
        gradientOpacity={0.12}
      >
        <div className="flex h-full flex-col">{body}</div>
      </MagicCard>
    )
  }

  return <Card className="h-full">{body}</Card>
}
