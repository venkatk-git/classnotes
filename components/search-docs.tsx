import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export function Search() {
    return (
        <Button
            variant="outline"
            className={cn(
                "relative h-8 w-full mr-2 justify-start hidden xs:flex rounded-[0.5rem] bg-accent text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64 border-0"
            )}
        >
            <span className="hidden lg:inline-flex">
                Search documentation...
            </span>
            <span className="w-14 inline-block lg:hidden">Search...</span>
            <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded dark:bg-gray-700 shadow-sm px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                <span className="text-xs">⌘</span>K
            </kbd>
        </Button>
    );
}
