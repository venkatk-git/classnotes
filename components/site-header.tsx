import { siteConfig } from "@/config/site";
import { Icons } from "./icons";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { ModeToggle } from "./mode-toggle";

export function SiteHeader() {
    return (
        <header className="sticky top-0 px-8 w-full border-b border-border bg-background/95 dark:bg-gray-900 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 max-w-screen-2xl items-center">
                <MainNav />
                <div className="flex flex-1 items-center justify-end space-x-2">
                    <nav className="flex items-center space-x-2">
                        <Button
                            variant="outline"
                            className={cn(
                                "relative h-8 w-full mr-2 justify-start rounded-[0.5rem] bg-accent text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64 border-0"
                            )}
                        >
                            <span className="hidden lg:inline-flex">
                                Search documentation...
                            </span>
                            <span className="w-24 inline-flex lg:hidden">
                                Search...
                            </span>
                            <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded dark:bg-gray-700 shadow-sm px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                                <span className="text-xs">⌘</span>K
                            </kbd>
                        </Button>
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
