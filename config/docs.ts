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
    react_docs: [
        {
            title: "React Interview Questions",
            items: [
                {
                    title: "The Virtual DOM in React",
                    href: "/react/virtual-dom",
                    items: [],
                    next: "/react/state_management",
                    prev: "",
                },
                {
                    title: "State Management in React",
                    href: "/react/state_management",
                    items: [],
                    next: "/react/hooks",
                    prev: "/react/virtual-dom",
                },
                {
                    title: "React Hooks",
                    href: "/react/hooks",
                    items: [],
                    next: "/react/custom_hooks",
                    prev: "/react/state_management",
                },
                {
                    title: "Custom Hooks",
                    href: "/react/custom_hooks",
                    items: [],
                    next: "/react/routing",
                    prev: "/react/react-hooks",
                },
                {
                    title: "Routing in React",
                    href: "/react/routing",
                    items: [],
                    next: "/react/life_cycle_methods",
                    prev: "/react/custome_hooks",
                },
                {
                    title: "Life Cycle Methods",
                    href: "/react/life_cycle_methods",
                    items: [],
                    next: "/react/lazy_loading",
                    prev: "/react/routing",
                },
                {
                    title: "Lazy Loading",
                    href: "/react/lazy_loading",
                    items: [],
                    next: "/react/",
                    prev: "/react/life_cycle_methods",
                },
                {
                    title: "Higher Order Components",
                    href: "/react/higher_order_components",
                    items: [],
                    next: "/react/error_boundaries",
                    prev: "/react/life_cycle_methods",
                },
                {
                    title: "Async Tasks in React",
                    href: "/react/async_tasks",
                    items: [],
                    next: "/react/error_boundaries",
                    prev: "/react/life_cycle_methods",
                },
            ],
        },
    ],
};

export type SideBarDocsType = typeof docsConfig;
