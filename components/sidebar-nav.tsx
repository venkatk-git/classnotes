"use client";
import { SideBarDocsType } from "@/config/docs";
import Link from "next/link";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "./ui/accordion";
import React from "react";
import { usePathname } from "next/navigation";

interface SidebarNavProps {
    docs: SideBarDocsType;
}

export function SidebarNav({ docs }: SidebarNavProps) {
    const pathname = usePathname();
    let items;
    switch (pathname.split("/")[1]) {
        case "react":
            items = docs.react_docs;
            break;
        case "java":
            items = docs.javaDocs;
            break;
        case "os":
            items = docs.os_questions;
            break;
        default:
            items = docs.javaDocs;
            break;
    }

    const [openItems, setOpenItems] = React.useState([]);

    React.useEffect(() => {
        setOpenItems(items?.map((item) => item.title));
    }, [items]);

    return (
        <div className="flex flex-col gap-4 sm:min-w-[320px] h-[70dvh] overflow-y-auto">
            <Accordion
                type="multiple"
                value={openItems}
                onValueChange={setOpenItems}
            >
                {items?.map((navItems, index) => (
                    <AccordionItem
                        value={navItems.title}
                        key={`sidebar-nav-item-${index}`}
                        className="text-sm bg-gray-100 dark:bg-gray-900/45 border border-border border-x-0"
                    >
                        <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-gray-200 dark:hover:bg-gray-900">
                            <h4 className="font-semibold inline-block text-accent-foreground mb-1 text-left">
                                {navItems.title}
                            </h4>
                        </AccordionTrigger>
                        <AccordionContent className="pb-2">
                            <Items items={navItems.items} />
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}

function Items({ items }) {
    return (
        <div className="flex flex-col gap-1">
            {items?.map((item, index: number) => (
                <Link
                    key={index}
                    href={item.href}
                    className="px-4 flex flex-col py-2 hover:bg-gray-200 dark:hover:bg-gray-900 text-accent-foreground/80 hover:text-accent-foreground"
                >
                    <h4 className="inline-block font-medium">{item.title}</h4>
                </Link>
            ))}
        </div>
    );
}
