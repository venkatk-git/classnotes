"use client";

import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import Link, { LinkProps } from "next/link";
import { Icons } from "./icons";
import { siteConfig } from "@/config/site";

export function MobileNav() {
    const [open, setOpen] = React.useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="outline"
                    className="w-10 px-2 sm:hidden bg-inherit border-0"
                >
                    <Menu className="w-5 h-5" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent
                side="right"
                className="bg-accent text-accent-foreground"
            >
                <MobileLink
                    href="/"
                    className="flex items-center"
                    onOpenChange={setOpen}
                >
                    <Icons.logo className="mr-2 w-5 h-5" />
                    <span className="font-bold">{siteConfig.name}</span>
                </MobileLink>
                <div className="flex flex-col gap-3 mt-3">
                    <MobileLink href="/java" onOpenChange={setOpen}>
                        Java
                    </MobileLink>
                    <MobileLink href="/react" onOpenChange={setOpen}>
                        React
                    </MobileLink>
                    <MobileLink href="/os" onOpenChange={setOpen}>
                        Operating Systems
                    </MobileLink>
                    <MobileLink href="/java" onOpenChange={setOpen}>
                        About
                    </MobileLink>
                    <MobileLink href="/java" onOpenChange={setOpen}>
                        Contact
                    </MobileLink>
                    <Link
                        href={siteConfig.links.github}
                        target="_blank"
                        rel="norefferrer"
                    >
                        GitHub
                    </Link>
                    <Link
                        href={siteConfig.links.personalSite}
                        target="_blank"
                        rel="norefferrer"
                    >
                        {siteConfig.author}
                    </Link>
                </div>
            </SheetContent>
        </Sheet>
    );
}

interface MobileLinkProps extends LinkProps {
    children: React.ReactNode;
    onOpenChange: (open: boolean) => void;
    className?: string;
}

function MobileLink({
    href,
    onOpenChange,
    className,
    children,
    ...props
}: MobileLinkProps) {
    const router = useRouter();

    return (
        <Link
            href={href}
            onClick={() => {
                router.push(href.toString());
                onOpenChange(false);
            }}
            className={className}
            {...props}
        >
            {children}
        </Link>
    );
}
