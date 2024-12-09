"use client";

import { TopicInfo } from "@/types/types";
import React from "react";

export const DocsConfigContext = React.createContext<Map<
    string,
    TopicInfo
> | null>(null);

interface DocsConfigContextProviderProps {
    children: React.ReactNode;
    javaDocs: Map<string, TopicInfo>;
}

export default function DocsConfigContextProvider({
    children,
    javaDocs,
}: DocsConfigContextProviderProps) {
    return (
        <DocsConfigContext.Provider value={javaDocs}>
            {children}
        </DocsConfigContext.Provider>
    );
}
