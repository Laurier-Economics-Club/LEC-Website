import { resolve } from "node:path"
import { defineConfig } from "vite"

export default defineConfig({
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "dist",
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        programs: resolve(__dirname, "programs.html"),
        events: resolve(__dirname, "events.html"),
        research: resolve(__dirname, "research.html"),
        market: resolve(__dirname, "market.html"),
        join: resolve(__dirname, "join.html"),
        team: resolve(__dirname, "team.html"),
      },
    },
  },
})
