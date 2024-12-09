import React from "react";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            {/* <DocsConfigContextProvider javaDocs={javaDocs}> */}
            {children}
            {/* </DocsConfigContextProvider> */}
        </ThemeProvider>
    );
}
