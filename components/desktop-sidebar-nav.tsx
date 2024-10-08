import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Icons } from "./icons";
import { SidebarNav } from "./sidebar-nav";
import { docsConfig } from "@/config/docs";

export function DesktopSidebarNav() {
    return (
        <aside className="hidden lg:inline-block min-w-[250px] border-r border-border h-dvh">
            <div className="p-4 m-4 mt-3 flex justify-center">
                <Link href="/" rel="norefferrer">
                    <div className="mr-2 flex items-center space-x-2">
                        <Icons.logo className="w-8 h-8" />
                        <span className="font-bold text-lg">
                            {siteConfig.name}
                        </span>
                    </div>
                </Link>
            </div>
            <SidebarNav docs={docsConfig} />
        </aside>
    );
}
