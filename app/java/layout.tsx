import { DesktopSidebarNav } from "@/components/desktop-sidebar-nav";

function JavaLayout({ children }) {
    return (
        // <DocsConfigContextProvider>
        <main className="flex justify-center w-full bg-background">
            <aside className="flex-shrink-0 w-20rem">
                <DesktopSidebarNav />
            </aside>
            <main className="relative max-h-full flex-1 max-w-full overflow-y-auto">
                {children}
            </main>
        </main>
        // </DocsConfigContextProvider>
    );
}

export default JavaLayout;
