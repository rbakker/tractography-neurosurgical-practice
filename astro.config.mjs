import { defineConfig } from "astro/config";
import tailwind from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwind()]
  },
  srcDir: "src",
  server: { port: 4321 },
  site: 'https://rbakker.github.io',
  base: '/tractography-neurosurgical-practice'
});
