import { DesktopSidebarNav } from "@/components/desktop-sidebar-nav";
import { MobileSidebarNav } from "@/components/mobile-sidebar-nav";
import { DocsHeader } from "@/components/docs-header";

function JavaLayout({ children }) {
    return (
        <div className="flex justify-center w-full bg-background max-h-screen">
            <aside>
                <DesktopSidebarNav />
            </aside>
            <main className="px-4 flex flex-col flex-1 max-h-full overflow-y-scroll">
                <header className="flex gap-4">
                    <MobileSidebarNav />
                    <DocsHeader />
                </header>
                {children}
            </main>
        </div>
    );
}

export default JavaLayout;
