import { siteConfig } from "@/config/site";
import { Icons } from "./icons";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { ModeToggle } from "./mode-toggle";
import { Search } from "./search-docs";

export function SiteHeader() {
    return (
        <header className="sticky top-0 px-4 md:px-6 lg:px-8 w-full bg-background/95 dark:bg-gray-900 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
            <div className="container flex h-16 max-w-7xl items-center mx-auto">
                <MainNav />
                <div className="flex flex-1 items-center justify-end space-x-2 lg:ml-6">
                    <nav className="flex items-center space-x-2">
                        <div className="hidden xs:flex">
                            <Search />
                        </div>
                        <Link
                            href={siteConfig.links.github}
                            target="_blank"
                            rel="norefferrer"
                        >
                            <div
                                className={cn(
                                    buttonVariants({ variant: "ghost" }),
                                    "w-10 px-0 hidden sm:inline-flex"
                                )}
                            >
                                <Icons.github className="w-4 h-4" />
                                <span className="sr-only">GitHub</span>
                            </div>
                        </Link>
                        <ModeToggle />
                        <MobileNav />
                    </nav>
                </div>
            </div>
        </header>
    );
}
