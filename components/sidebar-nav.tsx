import { SideBarDocsType } from "@/config/docs";

interface SidebarNavProps {
    docs: SideBarDocsType;
}

export function SidebarNav({ docs }: SidebarNavProps) {
    return (
        <div>
            {docs.sidebarNav.map((doc, index) => (
                <div key={index}>{doc.title}</div>
            ))}
        </div>
    );
}
