import { allOs } from "@/.contentlayer/generated";
import { Divider } from "@/components/divider";
import { MDXContent } from "@/components/mdx-components";
import { MobileSidebarNav } from "@/components/mobile-sidebar-nav";
import { Paginator } from "@/components/paginator";

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Prerequisites from "@/components/markdown/prerequisites";
import { docsConfig } from "@/config/docs";
interface OsDocPageProps {
    params: { slug: string[] };
}

/**
 * This function gets the document from the params
 *
 * @param param0
 * @returns
 */
async function getDocFromParams({ params }: OsDocPageProps) {
    const slug = params.slug?.join("/") || " ";
    const doc = allOs.find((doc) => doc.slugAsParams === slug);

    if (!doc) {
        return null;
    }

    return doc;
}

/**
 * This function generates the metadata for the OsDocPage
 *
 * @param params
 * @returns
 */

export async function generateMetadata({
    params,
}: OsDocPageProps): Promise<Metadata> {
    const OsDoc = await getDocFromParams({ params });

    if (!OsDoc) {
        return {};
    }

    return {
        title: OsDoc.title,
        description: OsDoc.description,
        openGraph: {
            title: OsDoc.title,
            description: OsDoc.description,
        },
    };
}

/**
 * This function generates the static paths for the OsDocPage
 *
 * @returns
 */
export async function generateStaticParams(): Promise<
    OsDocPageProps["params"][]
> {
    return allOs.map((doc) => ({
        slug: doc.slugAsParams.split("/"),
    }));
}

/**
 * This is the main component for the OsDocPage
 *
 * @param params
 * @returns
 */
export default async function OsDocPage({ params }: OsDocPageProps) {
    const OsDoc = await getDocFromParams({ params });

    if (!OsDoc) {
        return notFound();
    }

    console.log(docsConfig.react_docs);

    return (
        <div className="relative px-4 md:px-6 lg:px-8 flex overflow-auto max-w-6xl mx-auto">
            <main className="flex flex-col order-1 z-10 h-full">
                <header className="sticky top-0 bg-background z-50 lg:relative flex gap-4">
                    <MobileSidebarNav />
                    <Paginator next="#" prev="#" />
                </header>
                <header className="sm:flex sm:items-center sm:justify-between mb-4">
                    <div className="flex-1 min-w-0 flex flex-col gap-1">
                        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
                            {OsDoc.title}
                        </h1>
                        <h3 className="text-muted-foreground font-medium">
                            Author - {OsDoc.author}
                        </h3>
                        <h4 className="text-foreground italic">
                            About this article - {OsDoc.description}
                        </h4>
                    </div>
                </header>
                <Prerequisites prerequisitesSlugs={OsDoc.prerequisites} />
                <Divider />
                <article className="markdown">
                    <MDXContent code={OsDoc.body.code} />
                </article>
                <footer>
                    <Paginator next="#" prev="#" />
                </footer>
            </main>
        </div>
    );
}
