import { DesktopSidebarNav } from "@/components/desktop-sidebar-nav";
import { MobileSidebarNav } from "@/components/mobile-sidebar-nav";
import { DocsHeader } from "@/components/docs-header";

function JavaLayout({ children }) {
    return (
        <main className="flex justify-center w-full bg-background">
            <aside className="flex-shrink-0 order-1 w-20rem">
                <DesktopSidebarNav />
            </aside>
            <main className="px-4 flex flex-col flex-1 max-h-full max-w-full overflow-y-auto order-2">
                <header className="sticky top-0 bg-background z-50 lg:relative flex gap-4">
                    <MobileSidebarNav />
                    <DocsHeader />
                </header>
                {children}
            </main>
            <aside className="hidden lg:inline-block order-3 mx-6 mt-48 flex-shrink-0 w-64">
                Table Of Content
            </aside>
        </main>
    );
}

export default JavaLayout;
