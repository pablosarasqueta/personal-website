# Pablo Sarasqueta's website

My personal website: **[pablosarasqueta.com](https://pablosarasqueta.com)**

It's a profile page to help me find a job as an **SDR / BDR** (sales) in Dublin. It explains who I am, my experience,
how I sold with Explorandogs and how to get in touch. It's available in **three languages**: English (the main one),
Spanish and French.

## What's on the site

From top to bottom:

1. **Introduction**: headline, who I am and quick facts (where I live, what I'm looking for, certificates…).
2. **Explorandogs**: the story of how I found customers and sold to them, told as a step-by-step journey, with the travel
   guide as a PDF.
3. **Why me**: the reasons to hire me.
4. **Experience**: my jobs.
5. **HitDeporte**: my first company, at 15.
6. **Skills**, **education** and **languages**.
7. **Contact**: email, LinkedIn and CV as a PDF.

In the top right corner visitors can switch language and toggle between light and dark mode.

## Where each text lives

All the texts are in the `src/content` folder. Each file holds the text in all three languages, under `"en"`, `"es"` and
`"fr"`. **If you change something, change it in all three languages.**

| I want to change…                                      | File                                                           |
| ------------------------------------------------------ | -------------------------------------------------------------- |
| Page titles and sentences, and what shows up on Google | `src/content/pages/en/index.json` (and the `es`, `fr` folders) |
| Quick facts in the introduction                        | `src/content/facts.json`                                       |
| The steps of the Explorandogs journey                  | `src/content/stops.json`                                       |
| The "Why me" reasons                                   | `src/content/why.json`                                         |
| Jobs                                                   | `src/content/jobs.json`                                        |
| Skills                                                 | `src/content/skills.json`                                      |
| Education and certificates                             | `src/content/education.json`                                   |
| Languages                                              | `src/content/languages.json`                                   |
| The error page ("this page doesn't exist")             | `src/content/pages/en/404.json` (and `es`, `fr`)               |

Files that can be downloaded from the site (they're in the `public` folder):

- **CV**: `Pablo-Sarasqueta-Sales-CV.pdf`. To update it, replace it with the new one **using the same file name**.
- **Explorandogs Rome guide**: `explorandogs-rome-travel-guide.pdf`.
- **Image shown when the link is shared** (WhatsApp, LinkedIn…): `imgs/favicon/og-image.png`.

> When editing a text file, only change what's inside the quotes to the right of the colon. Don't delete quotes, commas
> or braces: if one goes missing, the site stops working.

## The easiest way to make changes

Ask Claude in plain language, for example:

- _"Add my new job at X as Y since March 2027, in all three languages."_
- _"Change the headline to this: …"_
- _"I've put a new CV on the desktop, replace the one on the site."_
- _"Show me the site on my computer so I can see how it looks."_
- _"Publish the changes."_

Claude already knows how the site is built and follows its rules.

## How it gets published

The site is hosted on **Hostinger**. Changes don't go live on their own: the site has to be **built** (Claude does this
and it creates a folder called `dist`) and **the contents of that folder uploaded** to Hostinger, using the File Manager,
inside `public_html`.

Changes are also saved on **GitHub**, which works as a backup and history: if something goes wrong, you can go back to
an earlier version. Every time something is saved there, GitHub automatically checks that the site still works and
flags any errors.

## Google

- The site is verified in **Google Search Console** (the file `public/google06bcc5188a3fefbb.html` is for that: **don't
  delete it**).
- The texts for each language include the title and description shown in Google results.
