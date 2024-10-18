export const siteConfig = {
    name: "ClassNotes",
    url: "http://localhost:3000",
    author: "Venkat",
    ogImage: "",
    description: "This is a documentation of my own BYTS classnotes",
    links: {
        github: "https://github.com/venkatk-git/classnotes",
        personalSite: "https://venkat-dev.vercel.app",
    },
};

export const javaInfo = {
    name: "Java",
    description:
        "A free collection of curated, high-quality Java notes designed to guide for starters.",
};

export type SiteConfig = typeof siteConfig;
export type JavaInfo = typeof javaInfo;
