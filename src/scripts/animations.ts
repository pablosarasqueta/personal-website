import { animate, cubicBezier } from "animejs";

export function riseIn() {
    if (!window.matchMedia("(prefers-reduced-motion: no-preference)").matches) return;
    document.querySelectorAll<HTMLElement>("[data-rise]").forEach(el =>
        animate(el, {
            opacity: [0, 1],
            translateY: [18, 0],
            duration: 800,
            delay: Number(el.dataset.rise),
            ease: cubicBezier(0.2, 0.7, 0.2, 1),
        }),
    );
}
