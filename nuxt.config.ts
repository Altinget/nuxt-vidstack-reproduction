import { vite as vidstack } from "vidstack/plugins";

export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    plugins: [vidstack()],
    vue: {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("media-"),
        },
      },
    },

    // DONT MERGE THIS. Only for testing
    build: {
      minify: false,
    },
  },
});
