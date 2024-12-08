"use client";

import { docsConfig, SideBarDocsType } from "@/config/docs";
import { TopicInfo } from "@/types/types";
import React from "react";

export async function getStaticProps() {
    const { javaDocs } = createDocsProvider(docsConfig);
    return {
        props: { javaDocs },
    };
}

export const DocsConfigContext = React.createContext<Map<
    string,
    TopicInfo
> | null>(null);

interface DocsConfigContextProvider {
    children: React.ReactNode;
    props: {
        javaDocs: Map<string, TopicInfo>;
    };
}

export default function DocsConfigContextProvider({
    children,
    props,
}: DocsConfigContextProvider) {
    const { javaDocs } = props;

    return (
        <DocsConfigContext.Provider value={javaDocs}>
            <Component props={...props} />
        </DocsConfigContext.Provider>
    );
}

function createDocsProvider(docsConfig: SideBarDocsType) {
    const javaDocs = new Map<string, TopicInfo>();

    docsConfig.javaDocs.map((chapter) => {
        chapter.items.map((topic) => {
            javaDocs.set(topic.title, topic);
        });
    });

    return { javaDocs };
}
