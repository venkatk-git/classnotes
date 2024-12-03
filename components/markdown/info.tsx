import { CalloutClassNames, CalloutsTypes } from "@/lib/tailwind.utils";
import { cn } from "@/lib/utils";
import React from "react";

interface InfoProps {
    type: "note" | "tip";
    children: React.ReactNode;
}

export default function Info({ type, children }: InfoProps) {
    const IconName = CalloutsTypes[type].icon;
    const IconClassName = CalloutsTypes[type].className;

    return (
        <div
            className={cn(
                "bg-blue-50 dark:bg-blue-700 dark:bg-opacity-25 rounded-md p-4 mb-4 flex callout"
            )}
        >
            <div className="flex-shrink-0 mt-[1px]">
                <IconName className={cn(IconClassName, "w-4 h-4")} />
            </div>
            <div className="ml-3 flex-1 flex flex-col">
                <span
                    className={cn(
                        CalloutClassNames.h3[type],
                        "text-sm leading-5 font-medium my-0"
                    )}
                >
                    {CalloutsTypes[type].name}
                </span>
                <div
                    className={cn(
                        CalloutClassNames.content[type],
                        "text-sm leading-5 no-y-margin"
                    )}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}
