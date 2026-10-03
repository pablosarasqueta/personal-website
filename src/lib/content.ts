import { getCollection, getEntry, type CollectionEntry, type CollectionKey } from "astro:content";
import { toLocale } from "./i18n";

type OrderedKey = Exclude<CollectionKey, "pages">;
type IndexSections = NonNullable<CollectionEntry<"pages">["data"]["sections"]>;

export async function getOrderedCollection<C extends OrderedKey>(name: C, locale: string | undefined) {
    const entries = await getCollection(name, ({ data }) => data.locale === toLocale(locale));
    return entries.sort((a, b) => a.data.order - b.data.order);
}

export async function getPage(locale: string | undefined, route: string) {
    const id = `${toLocale(locale)}/${route}`;
    const page = await getEntry("pages", id);
    if (!page) throw new Error(`Missing pages/${id} entry: create src/content/pages/${id}.json`);
    return page.data;
}

export async function getSection<K extends keyof IndexSections>(locale: string | undefined, name: K) {
    const { sections } = await getPage(locale, "index");
    if (!sections) throw new Error(`Missing sections in pages/${toLocale(locale)}/index entry`);
    return sections[name];
}
