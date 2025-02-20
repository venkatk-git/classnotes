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
    patterns: [
        {
            title: "Creational Patterns",
            items: [
                {
                    title: "Strategy Pattern",
                    href: "/java/strategy-pattern",
                    items: [],
                    next: "",
                    prev: "",
                },
                {
                    title: "Observer Pattern",
                    href: "/java/observer-pattern",
                    items: [],
                    next: "",
                    prev: "",
                },
                {
                    title: "Decorator Pattern",
                    href: "/java/decorator-pattern",
                    items: [],
                    next: "",
                    prev: "",
                },
                {
                    title: "Factory Pattern",
                    href: "/java/factory-pattern",
                    items: [],
                    next: "",
                    prev: "",
                },
                {
                    title: "Singleton Pattern",
                    href: "/java/singlet-pattern",
                    items: [],
                    next: "",
                    prev: "",
                },
                {
                    title: "Singleton Pattern",
                    href: "/java/singlet-pattern",
                    items: [],
                    next: "",
                    prev: "",
                },
            ],
        },
    ],
};

export type SideBarDocsType = typeof docsConfig;
