import { SideBarDocsType } from "@/config/docs";
import Link from "next/link";

interface SidebarNavProps {
    docs: SideBarDocsType;
}

export function SidebarNav({ docs }: SidebarNavProps) {
    const items = docs?.sidebarNav;

    return (
        <div className="p-4 flex flex-col gap-4 bg-gray-100 dark:bg-gray-900/45 border border-border border-x-0 min-w-[320px]">
            {items?.map((navItems, index) => (
                <div key={`sidebar-nav-item-${index}`} className="text-sm">
                    <h4 className="font-semibold inline-block text-accent-foreground mb-1">
                        {navItems.title}
                    </h4>
                    <Items items={navItems.items} />
                </div>
            ))}
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
