import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import metaTags from "astro-meta-tags";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), metaTags(), robotsTxt()]
});