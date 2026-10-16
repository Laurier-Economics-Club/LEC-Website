/**
 * Club-wide text, links, and stats.
 *
 * Future execs: edit the values in this file. You do not need to change
 * any page components. After the change is pushed to the main branch,
 * Vercel republishes https://lauriereconomicsclub.com.
 *
 * TODO: Search this folder for "TODO" and replace every placeholder
 * before the site goes live. There are no API keys in this file.
 * If the club ever needs a secret, put it in a Vercel environment
 * variable. Do not paste it here.
 */

export const site = {
  name: "Laurier Economics Club",
  shortName: "LEC",
  university: "Wilfrid Laurier University",

  /** One sentence under the club name on the home page. */
  tagline:
    "Connecting Laurier students with economics, careers, and each other.",

  /** Used for Google and for link previews when someone shares the site. */
  description:
    "The Laurier Economics Club is a student club at Wilfrid Laurier University for anyone curious about economics, policy, and careers.",

  /** Live site address. Also used for search-engine links. */
  url: "https://lauriereconomicsclub.com",

  // TODO: Replace with the club's real email address.
  email: "economicsclub@wlu.ca",

  social: {
    // TODO: Replace with the club's real Instagram and LinkedIn.
    instagram: "https://instagram.com/TODO",
    instagramHandle: "@TODO",
    linkedin: "https://www.linkedin.com/company/TODO",
  },

  /**
   * Membership sign-up lives on Google Forms (or a similar external form).
   * This website does not collect or store responses.
   * TODO: Paste the real form link.
   */
  joinFormUrl: "https://forms.gle/TODO",

  /** Shown in the footer. */
  disclaimer:
    "A student club at Wilfrid Laurier University. This is not an official university website.",

  /**
   * Home page counters. `value` must be a number.
   * TODO: Update these each year.
   */
  stats: [
    { label: "Members", value: 80 },
    { label: "Events per year", value: 12 },
    { label: "Years running", value: 5 },
  ],

  /** Short descriptions used in the browser tab and link previews. */
  seo: {
    about:
      "Who the Laurier Economics Club is, what the club does, and what members get out of it.",
    events: "Upcoming and past events from the Laurier Economics Club.",
    team: "The Laurier Economics Club executive team.",
    join: "How to join the Laurier Economics Club.",
    contact: "Email, Instagram, and LinkedIn for the Laurier Economics Club.",
  },

  about: {
    intro:
      "We are a student club for anyone at Laurier who wants to talk about economics outside of class. You do not need to be an economics major.",
    sections: [
      {
        title: "Who we are",
        paragraphs: [
          "The Laurier Economics Club is run by students at Wilfrid Laurier University. Members come from economics and from other programs.",
          "TODO: Replace this placeholder with a short history of the club and who it is for.",
        ],
      },
      {
        title: "What we do",
        paragraphs: [
          "Through the year we host speaker nights, workshops, case competitions, and socials. Events are a chance to meet classmates, alumni, and people working in economics and related fields.",
          "TODO: Replace this with the kinds of events the club actually runs.",
        ],
      },
      {
        title: "What members get",
        paragraphs: [
          "Members hear about events first, can join case teams, and get a group of people to learn with. There are no grades and no prerequisites.",
          "TODO: Add anything else members receive, such as a newsletter or a mentorship program.",
        ],
      },
    ],
  },

  join: {
    intro:
      "Membership is open to every Laurier student. TODO: Confirm whether there is a fee, then update this sentence.",
    steps: [
      {
        title: "Fill out the form",
        description:
          "The form is hosted on Google Forms. This website does not store your answers.",
      },
      {
        title: "Follow us on Instagram",
        description: "Event reminders and photos are posted there.",
      },
      {
        title: "Come to an event",
        description:
          "You can attend most events even before your form is processed.",
      },
    ],
    perks: [
      "Invites to speaker nights, workshops, and socials",
      "A chance to compete in case competitions",
      "A community of students interested in economics",
    ],
  },
}
