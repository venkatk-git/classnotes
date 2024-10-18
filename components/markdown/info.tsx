import { cn } from "@/lib/utils";
import { CircleX, InfoIcon, ScrollText, TriangleAlert } from "lucide-react";
import React from "react";

interface InfoProps {
    type: "note" | "tip" | "warning" | "danger";
    children: React.ReactNode;
}

const Type = {
    tip: {
        icon: InfoIcon,
        className: "text-blue-400",
        name: "Pro tip",
    },
    note: {
        icon: ScrollText,
        className: "text-blue-400",
        name: "Note",
    },
    danger: {
        icon: CircleX,
        className: "text-red-400",
        name: "Danger",
    },
    warning: {
        icon: TriangleAlert,
        className: "text-yellow-400 dark:text-yellow-500",
        name: "Warning",
    },
};

const ClassNames = {
    wrapper: {
        tip: "bg-blue-50 dark:bg-blue-700",
        note: "bg-blue-50 dark:bg-blue-700",
        danger: "bg-red-50 dark:bg-red-700",
        warning: "bg-yellow-50 dark:bg-yellow-700",
    },
    h3: {
        tip: "text-blue-800 dark:text-blue-100",
        note: "text-blue-800 dark:text-blue-100",
        danger: "text-red-800 dark:text-red-100",
        warning: "text-yellow-800 dark:text-yellow-200",
    },
    content: {
        tip: "text-blue-700 dark:text-blue-300",
        note: "text-blue-700 dark:text-blue-300",
        danger: "text-red-700 dark:text-red-300",
        warning: "text-yellow-700 dark:text-yellow-300",
    },
};

export function Info({ type, children }: InfoProps) {
    const IconName = Type[type].icon;
    const IconClassName = Type[type].className;

    return (
        <div
            className={cn(
                ClassNames.wrapper[type],
                "dark:bg-opacity-25 rounded-md p-4 mb-4 flex"
            )}
        >
            <div className="flex-shrink-0 mt-[1px]">
                <IconName className={cn(IconClassName, "w-4 h-4")} />
            </div>
            <div className="ml-3 flex-1 flex flex-col">
                <h3
                    className={cn(
                        ClassNames.h3[type],
                        "text-sm leading-5 font-medium my-0"
                    )}
                >
                    {Type[type].name}
                </h3>
                <div
                    className={cn(
                        ClassNames.content[type],
                        "text-sm leading-5 mt-2 no-y-margin"
                    )}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}
