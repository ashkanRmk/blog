import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://astro-nano-demo.vercel.app",
  integrations: [mdx(), sitemap(), tailwind()],
  redirects: {
    "/ig": "https://instagram.com/happy_developer",
    "/yt": "https://youtube.com/happy_developer",
    "/tlg": "https://t.me/happydeveloper_tlg",
  },
});
