import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export function DocsHeader() {
    return (
        <div className="container px-4 flex h-14 max-w-screen-2xl items-center">
            <nav className="flex w-full items-center justify-end gap-6 sm:justify-between space-x-2 text-foreground/60 font-medium">
                <Link
                    href="#"
                    rel="norefferrer"
                    className="flex items-center gap-1"
                >
                    <ChevronLeft className="w-4 h-4" />
                    <span className="text-sm">Prev</span>
                </Link>
                <Link
                    href="#"
                    rel="norefferrer"
                    className="flex items-center gap-1"
                >
                    <span className="text-sm">Next</span>
                    <ChevronRight className="w-4 h-4 mb-[-2px]" />
                </Link>
            </nav>
        </div>
    );
}
