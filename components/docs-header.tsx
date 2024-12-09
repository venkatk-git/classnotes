"use client";

import useDocsConfigContext from "@/hooks/useDocsConfigContext";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface DockHeaderProps {
    next: string;
    prev: string;
}

export function DocsHeader({ next, prev }: DockHeaderProps) {
    // const javaDocs = useDocsConfigContext();

    // console.log(javaDocs);

    return (
        <header className="container flex h-14 max-w-screen-2xl items-center">
            <nav className="flex w-full items-center justify-end gap-6 sm:justify-between space-x-2 text-foreground/60 font-semibold">
                {prev !== "" && (
                    <Link
                        href={prev}
                        rel="norefferrer"
                        className="flex items-center gap-1 hover:text-accent-foreground"
                    >
                        <ChevronLeft className="w-4 h-4" />
                        <span className="text-sm">Prev</span>
                    </Link>
                )}
                {next !== "" && (
                    <Link
                        href={prev}
                        rel="norefferrer"
                        className="flex items-center gap-1 hover:text-accent-foreground"
                    >
                        <span className="text-sm">Next</span>
                        <ChevronRight className="w-4 h-4 mb-[-2px]" />
                    </Link>
                )}
            </nav>
        </header>
    );
}
