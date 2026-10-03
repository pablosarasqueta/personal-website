import { DEFAULT_LOCALE, isLocale, localeHref } from "../lib/i18n";

const STORAGE_KEY = "pablosarasqueta-lang";

const storedLocale = (): string | null => {
    try {
        return localStorage.getItem(STORAGE_KEY);
    } catch {
        return null;
    }
};

export const rememberLocale = (locale: string): void => {
    if (!isLocale(locale)) return;
    try {
        localStorage.setItem(STORAGE_KEY, locale);
    } catch {}
};

export const redirectToPreferredLocale = (currentLocale: string): void => {
    if (currentLocale !== DEFAULT_LOCALE || storedLocale()) return;
    const detected = (navigator.languages ?? [navigator.language]).map(l => l.slice(0, 2).toLowerCase()).find(isLocale);
    if (!detected || detected === currentLocale) return;
    window.location.replace(localeHref(detected));
};
