export const docsConfig = {
    javaDocs: [
        {
            title: "Introduction",
            items: [
                {
                    title: "Introduction to Java",
                    href: "/java/introduction-to-java",
                    items: [],
                    next: "/java/installing-and-setting-up-java",
                    prev: "",
                },
                {
                    title: "Installing and Setting Up Java",
                    href: "/java/installing-and-setting-up-java",
                    items: [],
                    next: "/java/basic-syntax-and-data-types",
                    prev: "/java/introduction-to-java",
                },
                {
                    title: "Basic syntax and data types",
                    href: "/java/basic-syntax-and-data-types",
                    items: [],
                    next: "",
                    prev: "/java/installing-and-setting-up-java",
                },
            ],
        },
        {
            title: "Object Oriented Programming",
            items: [
                {
                    title: "Introduction to Object Oriented Programming",
                    href: "/java/classes-and-objects",
                    items: [],
                    next: "",
                    prev: "",
                },
            ],
        },
    ],
};

export type SideBarDocsType = typeof docsConfig;
