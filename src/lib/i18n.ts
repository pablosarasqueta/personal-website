export const LOCALES = ["en", "es", "fr"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";
export const SECONDARY_LOCALES = LOCALES.filter(l => l !== DEFAULT_LOCALE);

export const LOCALE_LABELS: Record<Locale, string> = {
    en: "English",
    es: "Español",
    fr: "Français",
};

export const isLocale = (value: string | undefined): value is Locale => LOCALES.includes(value as Locale);

export const toLocale = (value: string | undefined): Locale => (isLocale(value) ? value : DEFAULT_LOCALE);

export const localeHref = (locale: Locale): string => (locale === DEFAULT_LOCALE ? "/" : `/${locale}/`);

export const localeAlternates = (): { hreflang: string; href: string }[] => [
    ...LOCALES.map(locale => ({ hreflang: locale, href: localeHref(locale) })),
    { hreflang: "x-default", href: localeHref(DEFAULT_LOCALE) },
];
