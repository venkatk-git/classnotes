export const docsConfig = {
    javaDocs: [
        {
            title: "Introduction",
            items: [
                {
                    title: "Introduction to Java",
                    href: "/java/introduction-to-java",
                    items: [],
                },
                {
                    title: "Setting up Java environment",
                    href: "/java/setting-up-java-environment",
                    items: [],
                },
                {
                    title: "Basic syntax and data types",
                    href: "/java/basic-syntax-and-data-types",
                    items: [],
                },
            ],
        },
        {
            title: "Object Oriented Programming",
            items: [
                {
                    title: "Classes and Objects",
                    href: "/java/classes-and-objects",
                    items: [],
                },
            ],
        },
    ],
};

export type SideBarDocsType = typeof docsConfig;
