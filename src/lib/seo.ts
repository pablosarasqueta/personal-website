// SEO helpers: central place for site constants and JSON-LD / structured-data builders.

export const SITE_URL = "https://pablosarasqueta.com";
export const SITE_NAME = "Pablo Sarasqueta";
export const THEME_COLOR = "#f3f5f4";
export const OG_IMAGE = "/imgs/favicon/og-image.png";

export const EMAIL = "pablosarasqueta@gmail.com";
export const EMAIL_URL = `mailto:${EMAIL}`;
export const EMAIL_ROLE_URL = `${EMAIL_URL}?subject=SDR%2FBDR%20role`;
export const LINKEDIN_URL = "https://www.linkedin.com/in/pablo-s-055528440";
export const CV_URL = "/Pablo-Sarasqueta-Sales-CV.pdf";

const PERSON_ID = `${SITE_URL}/#person`;

interface ProfilePageInput {
    url: string;
    lang: string;
    title: string;
    description: string;
    jobTitle: string;
    knowsAbout: string[];
}

export function profilePageSchema({ url, lang, title, description, jobTitle, knowsAbout }: ProfilePageInput) {
    return {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "@id": url,
        url,
        name: title,
        description,
        inLanguage: lang,
        mainEntity: {
            "@type": "Person",
            "@id": PERSON_ID,
            name: SITE_NAME,
            givenName: "Pablo",
            familyName: "Sarasqueta",
            url: SITE_URL,
            image: new URL(OG_IMAGE, SITE_URL).href,
            email: EMAIL,
            jobTitle,
            description,
            sameAs: [LINKEDIN_URL],
            address: { "@type": "PostalAddress", addressLocality: "Dublin", addressCountry: "IE" },
            knowsLanguage: ["es", "eu", "en", "fr"],
            knowsAbout,
            alumniOf: [
                { "@type": "EducationalOrganization", name: "Foro Europeo Escuela de Negocios de Navarra" },
                { "@type": "EducationalOrganization", name: "HEC Paris" },
            ],
            hasCredential: {
                "@type": "EducationalOccupationalCredential",
                name: "IBM Sales Representative Professional Certificate",
                credentialCategory: "certificate",
                recognizedBy: { "@type": "Organization", name: "IBM" },
            },
        },
    };
}
