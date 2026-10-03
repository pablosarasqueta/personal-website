import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { file, glob } from "astro/loaders";
import { LOCALES } from "./lib/i18n";

// Content Collections (Astro 5+): typed, Zod-validated content.
//
// Canonical pattern: per-route page-level copy (title, description, heading,
// noindex) lives in the `pages` collection, NOT in the route's frontmatter.
// One JSON per locale and route at src/content/pages/<locale>/<route>.json,
// schema-validated by Zod; the page reads it with
// getEntry("pages", "<locale>/<route>") and passes the fields straight to BaseLayout.

const heading = z.object({ title: z.string() });

const indexSections = z.object({
    header: z.object({
        name: z.string(),
        navLabel: z.string(),
        email: z.string(),
        linkedin: z.string(),
        cv: z.string(),
        languageLabel: z.string(),
        themeLabel: z.string(),
    }),
    hero: z.object({
        titleLead: z.string(),
        titleAccent: z.string(),
        intro: z.string(),
        email: z.string(),
        cv: z.string(),
        factsLabel: z.string(),
    }),
    explorandogs: heading.extend({
        meta: z.string(),
        intro: z.array(z.string()),
        routeLabel: z.string(),
        guide: z.object({
            title: z.string(),
            text: z.string(),
            link: z.string(),
            cardBrand: z.string(),
            cardPages: z.string(),
            cardTitle: z.string(),
            cardCity: z.string(),
            cardFooter: z.string(),
        }),
        closingLead: z.string(),
        closing: z.string(),
    }),
    hitDeporte: heading.extend({ age: z.string(), ageCaption: z.string(), intro: z.array(z.string()) }),
    why: heading.extend({ intro: z.string() }),
    experience: heading.extend({
        columns: z.object({ role: z.string(), company: z.string(), dates: z.string() }),
        ownBadge: z.string(),
    }),
    education: heading,
    languages: heading,
    skills: heading,
    contact: heading.extend({
        intro: z.string(),
        email: z.string(),
        linkedin: z.string(),
        cv: z.string(),
        footer: z.string(),
        backToTop: z.string(),
    }),
});

const pages = defineCollection({
    loader: glob({
        pattern: "**/*.json",
        base: "./src/content/pages",
        generateId: ({ entry }) => entry.replace(/\.json$/, ""),
    }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        ogDescription: z.string().optional(),
        noindex: z.boolean().optional(),
        sections: indexSections.optional(),
        notFound: z
            .object({
                titleLead: z.string(),
                home: z.string(),
            })
            .optional(),
    }),
});

// file() does not guarantee array order, so each item gets its position as `order`.
const localizedFile = (path: string) =>
    file(path, {
        parser: text =>
            Object.entries(JSON.parse(text) as Record<string, { id: string }[]>).flatMap(([locale, items]) =>
                items.map((item, order) => ({ ...item, id: `${locale}/${item.id}`, locale, order })),
            ),
    });
const localized = { locale: z.enum(LOCALES), order: z.number() };

const facts = defineCollection({
    loader: localizedFile("./src/content/facts.json"),
    schema: z.object({ ...localized, label: z.string(), value: z.string() }),
});

const stops = defineCollection({
    loader: localizedFile("./src/content/stops.json"),
    schema: z.object({ ...localized, tag: z.string(), title: z.string(), body: z.string() }),
});

const why = defineCollection({
    loader: localizedFile("./src/content/why.json"),
    schema: z.object({ ...localized, title: z.string(), text: z.string() }),
});

const jobs = defineCollection({
    loader: localizedFile("./src/content/jobs.json"),
    schema: z.object({
        ...localized,
        role: z.string(),
        company: z.string(),
        dates: z.string(),
        own: z.boolean().default(false),
    }),
});

const education = defineCollection({
    loader: localizedFile("./src/content/education.json"),
    schema: z.object({ ...localized, title: z.string(), meta: z.string(), description: z.string() }),
});

const languages = defineCollection({
    loader: localizedFile("./src/content/languages.json"),
    schema: z.object({ ...localized, name: z.string(), level: z.string() }),
});

const skills = defineCollection({
    loader: localizedFile("./src/content/skills.json"),
    schema: z.object({ ...localized, title: z.string(), items: z.array(z.string()) }),
});

export const collections = { pages, facts, stops, why, jobs, education, languages, skills };
