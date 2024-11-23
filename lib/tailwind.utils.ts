import { InfoIcon, ScrollText, CircleX, TriangleAlert } from "lucide-react";

export const CalloutsTypes = {
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

export const CalloutClassNames = {
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
