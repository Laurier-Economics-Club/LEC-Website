import eventsFile from "@/content/events.json"
import sponsorsFile from "@/content/sponsors.json"
import teamFile from "@/content/team.json"

/**
 * Shapes of the JSON files in src/content.
 * The _comment field in each file is for editors and is not used here.
 */

export type ClubEvent = {
  title: string
  /** YYYY-MM-DD */
  date: string
  time: string
  location: string
  description: string
  link?: string
  image?: string
}

export type TeamMember = {
  name: string
  role: string
  program: string
  year: string
  image: string
  linkedin?: string
}

export type Sponsor = {
  name: string
  logo: string
  url: string
}

export const events = eventsFile.events as ClubEvent[]
export const team = teamFile.members as TeamMember[]
export const sponsors = sponsorsFile.sponsors as Sponsor[]

/** Formats a YYYY-MM-DD date without shifting the calendar day. */
export function formatEventDate(isoDate: string) {
  const [year, month, day] = isoDate.split("-").map(Number)

  return new Intl.DateTimeFormat("en-CA", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(year, month - 1, day))
}

export function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("")
}
