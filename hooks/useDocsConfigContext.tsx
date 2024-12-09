"use client";

import { DocsConfigContext } from "@/context/DocsConfigContextProvider";
import { useContext } from "react";

export default function useDocsConfigContext() {
    const context = useContext(DocsConfigContext);

    console.log("here");

    if (!context) {
        throw new Error("Docs Config Context unavailable");
    }

    return context;
}
