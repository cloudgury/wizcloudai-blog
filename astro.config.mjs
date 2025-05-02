// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://cloudgury.github.io",
  base: "/wizcloudai-blog",
  integrations: [mdx(), sitemap()],
});
