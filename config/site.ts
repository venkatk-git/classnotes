export const siteConfig = {
    name: "ClassNotes",
    url: "http://localhost:3000",
    author: "Venkat",
    ogImage: "",
    description: "This is a documentation of my own BYTS classnotes",
    links: {
        github: "https://github.com/venkatk-git/classnotes",
        personalSite: "https://v3nkat-dev.vercel.app",
    },
};

export const javaInfo = {
    name: "Java",
    description:
        "The topics listed below are just a starting point for learning Java. You might encounter concepts not covered here, or organized differently. If you prefer video tutorials, check out our free beginner-friendly Java course!",
};

export const reactInfo = {
    name: "React",
    description:
        "The topics listed below are just a starting point for learning React. You might encounter concepts not covered here, or organized differently. If you prefer video tutorials, check out our free beginner-friendly React course!",
};

export const osInfo = {
    name: "Operating Systems",
    description:
        "The topics listed below are just a starting point for learning Operating Systems. You might encounter concepts not covered here, or organized differently. If you prefer video tutorials, check out our free beginner-friendly Operating Systems course!",
};

export type SiteConfig = typeof siteConfig;
export type JavaInfo = typeof javaInfo;
export type ReactInfo = typeof reactInfo;
