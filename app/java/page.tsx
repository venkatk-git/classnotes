import { DocsHeader } from "@/components/docs-header";
import { SidebarNav } from "@/components/sidebar-nav";
import { docsConfig } from "@/config/docs";

function JavaLayout() {
    return (
        <div className="flex flex-col  px-8">
            <DocsHeader />
            <SidebarNav docs={docsConfig} />
        </div>
    );
}

export default JavaLayout;
