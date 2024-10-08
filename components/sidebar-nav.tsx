import { SideBarDocsType } from "@/config/docs";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Icons } from "./icons";

interface SidebarNavProps {
    docs: SideBarDocsType;
}

export function SidebarNav({ docs }: SidebarNavProps) {
    const items = docs?.sidebarNav;

    return (
        <div className="min-w-[250px] border-r border-border max-h-dvh">
            <div className="p-4 m-4 mt-0 flex justify-center">
                <Link href="/" rel="norefferrer">
                    <div className="mr-2 flex items-center space-x-2">
                        <Icons.logo className="w-6 h-6 " />
                        <span className="font-bold">{siteConfig.name}</span>
                    </div>
                </Link>
            </div>
            <div className="p-4 flex flex-col gap-4 bg-gray-100 dark:bg-gray-900/45 border border-border border-x-0">
                {items?.map((navItems, index) => (
                    <div key={`sidebar-nav-item-${index}`} className="text-sm">
                        <h4 className="font-semibold inline-block text-accent-foreground mb-1">
                            {navItems.title}
                        </h4>
                        <Items items={navItems.items} />
                    </div>
                ))}
            </div>
        </div>
    );
}

function Items({ items }) {
    return (
        <div className="flex flex-col gap-1">
            {items?.map((item, index: number) => (
                <Link key={index} href={item.href} className="flex flex-col">
                    <h4 className="inline-block text-accent-foreground/80 hover:text-white font-medium">
                        {item.title}
                    </h4>
                </Link>
            ))}
        </div>
    );
}
