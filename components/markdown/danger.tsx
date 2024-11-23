import { CalloutsTypes, CalloutClassNames } from "@/lib/tailwind.utils";
import { cn } from "@/lib/utils";

interface DangerProps {
    children: React.ReactNode;
}

export default function Danger({ children }: DangerProps) {
    const IconName = CalloutsTypes.danger.icon;
    const IconClassName = CalloutsTypes.danger.className;

    return (
        <div
            className={cn(
                "dark:bg-opacity-25 rounded-md p-4 mb-4 flex",
                CalloutClassNames.wrapper.danger
            )}
        >
            <div className="flex-shrink-0 mt-[1px]">
                <IconName className={cn(IconClassName, "w-4 h-4")} />
            </div>
            <div className="ml-3 flex-1 flex flex-col">
                <h3
                    className={cn(
                        CalloutClassNames.h3.danger,
                        "text-sm leading-5 font-medium my-0"
                    )}
                >
                    {CalloutsTypes.danger.name}
                </h3>
                <div
                    className={cn(
                        CalloutClassNames.content.danger,
                        "text-sm leading-5 mt-2 no-y-margin"
                    )}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}
