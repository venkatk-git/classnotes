import { allJavas } from "@/.contentlayer/generated";
import { Divider } from "@/components/divider";
import { MDXContent } from "@/components/mdx-components";
import { MobileSidebarNav } from "@/components/mobile-sidebar-nav";
import { Paginator } from "@/components/paginator";

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Prerequisites from "@/components/markdown/prerequisites";
import { docsConfig } from "@/config/docs";
interface JavaDocPageProps {
    params: { slug: string[] };
}

/**
 * This function gets the document from the params
 *
 * @param param0
 * @returns
 */
async function getDocFromParams({ params }: JavaDocPageProps) {
    const slug = params.slug?.join("/") || " ";
    const java = allJavas.find((java) => java.slugAsParams === slug);

    if (!java) {
        return null;
    }

    return java;
}

/**
 * This function generates the metadata for the JavaDocPage
 *
 * @param params
 * @returns
 */

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

/**
 * This is the main component for the JavaDocPage
 *
 * @param params
 * @returns
 */
export default async function JavaDocPage({ params }: JavaDocPageProps) {
    const javaDoc = await getDocFromParams({ params });

    if (!javaDoc) {
        return notFound();
    }

    console.log(docsConfig.javaDocs);

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
                <Prerequisites prerequisitesSlugs={javaDoc.prerequisites} />
                <Divider />
                <article className="markdown">
                    <MDXContent code={javaDoc.body.code} />
                </article>
                <footer>
                    <Paginator next="#" prev="#" />
                </footer>
            </main>
        </div>
    );
}
