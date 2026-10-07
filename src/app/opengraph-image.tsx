import { ImageResponse } from "next/og"

import { site } from "@/content/site"

export const alt = site.name
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#4F2683",
          color: "white",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#F2A900" }}>
          {site.university}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 68,
            fontWeight: 700,
            marginTop: 20,
            lineHeight: 1.1,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            marginTop: 24,
            maxWidth: 860,
            lineHeight: 1.4,
          }}
        >
          {site.tagline}
        </div>
      </div>
    ),
    { ...size },
  )
}
