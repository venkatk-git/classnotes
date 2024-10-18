"use client";

import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Icons } from "./icons";
import { SidebarNav } from "./sidebar-nav";
import { docsConfig } from "@/config/docs";
import { Search } from "./search-docs";
import { usePathname } from "next/navigation";

export function DesktopSidebarNav() {
    const pathname = usePathname();

    if (pathname === "/java") {
        return null;
    }

    return (
        <aside className="sticky top-0 hidden lg:inline-block border-r border-border h-dvh max-h-screen">
            <div className="p-3 m-4 mt-3 flex flex-col items-center space-y-4">
                <Link href="/" rel="norefferrer">
                    <div className="mr-2 flex items-center space-x-2">
                        <Icons.logo className="w-8 h-8" />
                        <span className="font-bold text-lg">
                            {siteConfig.name}
                        </span>
                    </div>
                </Link>
                <Search />
            </div>
            <SidebarNav docs={docsConfig} />
        </aside>
    );
}
