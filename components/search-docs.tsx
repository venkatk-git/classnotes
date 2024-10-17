"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "./ui/command";
import { DialogTitle } from "./ui/dialog";
import { docsConfig } from "@/config/docs";
import { useRouter } from "next/navigation";
import { BookOpenText, BookText } from "lucide-react";

export function Search() {
    const router = useRouter();
    const [open, setOpen] = React.useState(false);

    // Ctrl + K => Open command menu
    React.useEffect(() => {
        function down(e: KeyboardEvent) {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen(true);
            }
        }

        document.addEventListener("keydown", down);

        return () => document.removeEventListener("keydown", down);
    }, [open]);

    function navigateCommand(link: string) {
        setOpen(false);
        router.push(link);
    }

    return (
        <>
            <Button
                variant="outline"
                className={cn(
                    "relative h-8 w-full mr-2 justify-start rounded-[0.5rem] bg-accent text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64 border-0"
                )}
                onClick={() => setOpen(true)}
            >
                <span className="hidden lg:inline-flex">
                    Search documentation...
                </span>
                <span className="w-14 inline-block lg:hidden">Search...</span>
                <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded dark:bg-gray-700 shadow-sm px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                    <span className="text-xs">⌘</span>K
                </kbd>
            </Button>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <DialogTitle asChild>
                    <span className="sr-only">Search in documentation</span>
                </DialogTitle>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No results found :(</CommandEmpty>
                    <CommandGroup heading="Links">
                        <CommandItem
                            value="Java"
                            onSelect={() => navigateCommand("/java")}
                        >
                            <BookText className="mr-2 h-4 w-4" />
                            Java
                        </CommandItem>
                    </CommandGroup>
                    {docsConfig.javaDocs.map((group) => (
                        <CommandGroup key={group.title} heading={group.title}>
                            {group.items.map((item) => (
                                <CommandItem
                                    key={item.href}
                                    value={item.title}
                                    onSelect={() => navigateCommand(item.href)}
                                >
                                    <BookOpenText className="mr-2 h-4 w-4" />
                                    <span>{item.title}</span>
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    ))}
                </CommandList>
            </CommandDialog>
        </>
    );
}
