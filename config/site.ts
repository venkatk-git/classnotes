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
        "The topics listed below are just a starting point for learning Java. You might encounter concepts not covered here, or organized differently. If you prefer video tutorials, check out our free beginner-friendly Java course!",
};

export type SiteConfig = typeof siteConfig;
export type JavaInfo = typeof javaInfo;
