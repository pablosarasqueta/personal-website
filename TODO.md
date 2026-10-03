# TODO

Pending setup tasks for this fresh template. Delete each line once done.

## Assets (not shipped with the template, create these)

- [ ] `public/imgs/favicon/favicon.ico`
- [ ] `public/imgs/favicon/favicon.png`

## Code


## Client scripts (when you need them)

There is **no `src/scripts/main.ts` catch-all**. Create a domain module per need
(`src/scripts/animations.ts`, `src/scripts/forms.ts`, ...) and import it from
the component's own `<script>`. See `/astro-implement` for details.

## Icons (when you need them)

`astro-icon` is installed but ships no icon data. For each Iconify set you use,
install its package, e.g. `npm i @iconify-json/bi`, then `<Icon name="bi:github" />`.
Alternatively drop local SVGs into `src/icons/` and use `<Icon name="my-icon" />`.
