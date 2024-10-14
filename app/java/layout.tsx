import { DesktopSidebarNav } from "@/components/desktop-sidebar-nav";

function JavaLayout({ children }) {
    return (
        <main className="flex justify-center w-full bg-background">
            <aside className="flex-shrink-0 order-1 w-20rem">
                <DesktopSidebarNav />
            </aside>
            <main className="relative px-4 max-h-full flex-1 max-w-full overflow-y-auto order-2">
                {children}
            </main>
        </main>
    );
}

export default JavaLayout;
