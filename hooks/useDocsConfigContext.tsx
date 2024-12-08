import { DocsConfigContext } from "@/context/DocsConfigContextProvider";
import { useContext } from "react";

export default function useDocsConfigContext() {
    const context = useContext(DocsConfigContext);

    if (!context) {
        throw new Error("Docs Config Context unavailable");
    }

    return context;
}
