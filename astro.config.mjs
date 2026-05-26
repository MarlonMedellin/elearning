// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { execSync } from "child_process";

import cloudflare from "@astrojs/cloudflare";

// Get git hash for versioning
let gitHash = "N/A";
try {
  gitHash = execSync("git rev-parse --short HEAD").toString().trim();
} catch (e) {
  console.warn("Could not get git hash");
}

// https://astro.build/config
export default defineConfig({
  site: "https://lacapilla.edu.co",
  integrations: [icon(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
    define: {
      "import.meta.env.PUBLIC_GIT_HASH": JSON.stringify(gitHash),
    },
  },

  adapter: cloudflare()
});