import { DesktopSidebarNav } from "@/components/desktop-sidebar-nav";
import { MobileSidebarNav } from "@/components/mobile-sidebar-nav";
import { DocsHeader } from "@/components/docs-header";

function JavaLayout({}) {
    return (
        <div className="flex w-full bg-background">
            <DesktopSidebarNav />
            <MobileSidebarNav />
            <DocsHeader />
        </div>
    );
}

export default JavaLayout;
