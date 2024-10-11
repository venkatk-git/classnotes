"use client";

import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Icons } from "./icons";
import { SidebarNav } from "./sidebar-nav";
import { docsConfig } from "@/config/docs";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

export function MobileSidebarNav() {
    const [open, setOpen] = React.useState(false);
    return (
        <div className="inline-block lg:hidden pt-2">
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Button
                        variant="ghost"
                        onClick={() => setOpen(true)}
                        className="w-10 px-0 text-foreground/60 hover:text-accent-foreground"
                    >
                        <Menu className="w-6 h-6 hover:cursor-pointer" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="p-0 max-w-[250px]">
                    <div className="p-3 m-4 mt-0 flex justify-center">
                        <Link href="/" rel="norefferrer">
                            <div className="mr-6 flex items-center space-x-2">
                                <Icons.logo className="w-6 h-6 " />
                                <span className="font-bold">
                                    {siteConfig.name}
                                </span>
                            </div>
                        </Link>
                    </div>
                    <SidebarNav docs={docsConfig} />
                </SheetContent>
            </Sheet>
        </div>
    );
}
