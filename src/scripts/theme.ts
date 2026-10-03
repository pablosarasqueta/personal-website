export const THEME_STORAGE_KEY = "pablosarasqueta-theme";

export const toggleTheme = (): void => {
    const dark = document.body.classList.toggle("dark");
    try {
        localStorage.setItem(THEME_STORAGE_KEY, dark ? "dark" : "light");
    } catch {}
};
