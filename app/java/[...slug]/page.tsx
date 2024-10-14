import { allJavas } from "@/.contentlayer/generated";
import { Divider } from "@/components/divider";
import { MDXContent } from "@/components/mdx-components";
import { MobileSidebarNav } from "@/components/mobile-sidebar-nav";
import { DocsHeader } from "@/components/docs-header";

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTableOfContents } from "@/lib/toc";
import { TOC } from "@/components/toc";

interface JavaDocPageProps {
    params: { slug: string[] };
}

async function getDocFromParams({ params }: JavaDocPageProps) {
    const slug = params.slug?.join("/") || " ";
    const java = allJavas.find((java) => java.slugAsParams === slug);

    if (!java) {
        return null;
    }

    return java;
}

export async function generateMetadata({
    params,
}: JavaDocPageProps): Promise<Metadata> {
    const javaDoc = await getDocFromParams({ params });

    if (!javaDoc) {
        return {};
    }

    return {
        title: javaDoc.title,
        description: javaDoc.description,
        openGraph: {
            title: javaDoc.title,
            description: javaDoc.description,
        },
    };
}

export async function generateStaticParams(): Promise<
    JavaDocPageProps["params"][]
> {
    return allJavas.map((java) => ({
        slug: java.slugAsParams.split("/"),
    }));
}

export default async function JavaDocPage({ params }: JavaDocPageProps) {
    const javaDoc = await getDocFromParams({ params });

    if (!javaDoc) {
        return notFound();
    }

    const toc = await getTableOfContents(javaDoc.body.raw);

    return (
        <div className="relative flex overflow-auto">
            <aside className="hidden 2xl:inline-block order-2 mx-6 mt-48 flex-shrink-0 w-64">
                <div className="sticky">
                    <h2 className="uppercase dark:text-gray-300 font-bold mb-2 text-sm tracking-wider">
                        Table of contents
                    </h2>
                    <TOC toc={toc} />
                </div>
            </aside>
            <main className="flex flex-col order-1 z-10 h-full">
                <header className="sticky top-0 bg-background z-50 lg:relative flex gap-4">
                    <MobileSidebarNav />
                    <DocsHeader />
                </header>
                <header className="sm:flex sm:items-center sm:justify-between md-4">
                    <div className="flex-1 min-w-0 flex flex-col gap-1">
                        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
                            {javaDoc.title}
                        </h1>
                        <h3 className="text-muted-foreground font-medium">
                            Author - {javaDoc.author}
                        </h3>
                        <h4 className="text-foreground italic">
                            About this article - {javaDoc.description}
                        </h4>
                    </div>
                </header>
                <Divider />
                <div className=" 2xl:hidden">
                    <div className="sticky">
                        <h2 className="uppercase dark:text-gray-300 font-bold mb-2 text-sm tracking-wider">
                            Table of contents
                        </h2>
                        <TOC toc={toc} />
                    </div>
                    <Divider />
                </div>
                <article className="markdown">
                    <MDXContent code={javaDoc.body.code} />
                </article>
            </main>
        </div>
    );
}
