import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: {
    preset: "cloudflare-module",
    cloudflare: {
      wrangler: { name: "sitedeploy2" },
    },
  },
  tanstackStart: {
    server: { entry: "server" },
  },
});
