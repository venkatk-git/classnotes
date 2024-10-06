"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export function ModeToggle() {
    const { setTheme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="w-10 px-4">
                    <Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] dark:rotate-0 dark:scale-100 transition-all rotate-90 scale-0" />
                    <span className="sr-only">Toggle Theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="end"
                className="flex flex-col bg-white dark:bg-accent shadow-lg border rounded-sm px-1 py-1 w-28"
            >
                <DropdownMenuItem
                    className="px-3 py-1 cursor-pointer outline-none hover:bg-gray-100 dark:hover:bg-gray-700 rounded-sm"
                    onClick={() => setTheme("light")}
                >
                    Light
                </DropdownMenuItem>

                <DropdownMenuItem
                    className="px-3 py-1 cursor-pointer outline-none hover:bg-gray-100 dark:hover:bg-gray-700 rounded-sm"
                    onClick={() => setTheme("dark")}
                >
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem
                    className="px-3 py-1 cursor-pointer outline-none hover:bg-gray-100 dark:hover:bg-gray-700 rounded-sm"
                    onClick={() => setTheme("system")}
                >
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
