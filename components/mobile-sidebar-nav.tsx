"use client";

import React from "react";
import { docsConfig } from "@/config/docs";
import { siteConfig } from "@/config/site";
import Link from "next/link";

import { SidebarNav } from "./sidebar-nav";
import { Search } from "./search-docs";
import { Icons } from "./icons";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
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
                        className="w-10 px-0 ml-[-0.8rem] text-foreground/60 hover:text-accent-foreground"
                    >
                        <Menu className="w-6 h-6 hover:cursor-pointer" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="p-0 max-w-[250px]">
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
                </SheetContent>
            </Sheet>
        </div>
    );
}
