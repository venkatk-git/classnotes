import { DocsHeader } from "@/components/docs-header";
import { SidebarNav } from "@/components/sidebar-nav";
import { docsConfig } from "@/config/docs";

function JavaLayout() {
    return (
        <div className="flex flex-col lg:flex-row-reverse">
            <DocsHeader />
            <div className="">
                <SidebarNav docs={docsConfig} />
            </div>
        </div>
    );
}

export default JavaLayout;
