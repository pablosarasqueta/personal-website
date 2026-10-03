import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

export default defineConfig({
    site: "https://pablosarasqueta.com",
    output: "static",
    i18n: {
        defaultLocale: "en",
        locales: ["en", "es", "fr"],
        routing: {
            prefixDefaultLocale: false,
        },
    },
    integrations: [
        icon(),
        sitemap({
            filter: page => !page.endsWith("/404/"),
            i18n: { defaultLocale: "en", locales: { en: "en", es: "es", fr: "fr" } },
        }),
    ],
    vite: {
        plugins: [tailwindcss()],
    },
});
