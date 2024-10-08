import { DesktopSidebarNav } from "@/components/desktop-sidebar-nav";
import { MobileSidebarNav } from "@/components/mobile-sidebar-nav";
import { DocsHeader } from "@/components/docs-header";

function JavaLayout({ children }) {
    return (
        <div className="flex w-full bg-background max-h-screen">
            <aside>
                <DesktopSidebarNav />
                <MobileSidebarNav />
            </aside>
            <main className="px-4 flex flex-col flex-1 max-h-full overflow-y-scroll">
                <DocsHeader />
                {children}
            </main>
        </div>
    );
}

export default JavaLayout;
