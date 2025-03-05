"use client";
import Link from "next/link";
import { Icons } from "./icons";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function MainNav() {
    const pathname = usePathname();

    return (
        <nav className="flex items-center space-x-4 lg:space-x-6">
            <Link href="/" rel="norefferrer">
                <div className="mr-2 flex items-center space-x-2">
                    <Icons.logo className="w-6 h-6 " />
                    <span className="font-bold">{siteConfig.name}</span>
                </div>
            </Link>
            <Link
                className={cn(
                    "text-md font-medium transition-colors hover:text-primary hidden sm:inline-block",
                    pathname === "/java"
                        ? "text-foreground"
                        : "text-foreground/60"
                )}
                href="/java"
            >
                Java
            </Link>
            <Link
                className={cn(
                    "text-md font-medium transition-colors hover:text-primary hidden sm:inline-block",
                    pathname === "/react"
                        ? "text-foreground"
                        : "text-foreground/60"
                )}
                href="/react"
            >
                React
            </Link>
            <Link
                className={cn(
                    "text-md font-medium transition-colors hover:text-primary hidden sm:inline-block",
                    pathname === "/os"
                        ? "text-foreground"
                        : "text-foreground/60"
                )}
                href="/os"
            >
                Operating Systems
            </Link>
        </nav>
    );
}
