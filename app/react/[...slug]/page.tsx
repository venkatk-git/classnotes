import { allReacts } from "@/.contentlayer/generated";
import { Divider } from "@/components/divider";
import { MDXContent } from "@/components/mdx-components";
import { MobileSidebarNav } from "@/components/mobile-sidebar-nav";
import { Paginator } from "@/components/paginator";

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Prerequisites from "@/components/markdown/prerequisites";

interface ReactDocPageProps {
    params: { slug: string[] };
}

async function getDocFromParams({ params }: ReactDocPageProps) {
    const slug = params.slug?.join("/") || " ";
    const doc = allReacts.find((doc) => doc.slugAsParams === slug);

    if (!doc) {
        return null;
    }

    return doc;
}

export async function generateMetadata({
    params,
}: ReactDocPageProps): Promise<Metadata> {
    const reactDoc = await getDocFromParams({ params });

    if (!reactDoc) {
        return {};
    }

    return {
        title: reactDoc.title,
        description: reactDoc.description,
        openGraph: {
            title: reactDoc.title,
            description: reactDoc.description,
        },
    };
}

export async function generateStaticParams(): Promise<
    ReactDocPageProps["params"][]
> {
    return allReacts.map((java) => ({
        slug: java.slugAsParams.split("/"),
    }));
}

export default async function ReactDocPage({ params }: ReactDocPageProps) {
    const reactDoc = await getDocFromParams({ params });

    if (!reactDoc) {
        return notFound();
    }

    return (
        <div className="relative px-4 md:px-6 lg:px-8 flex overflow-auto max-w-6xl mx-auto">
            <main className="flex flex-col order-1 z-10 h-full">
                <header className="sticky top-0 bg-background z-50 lg:relative flex gap-4">
                    <MobileSidebarNav />
                    <Paginator
                        next={reactDoc.next || "#"}
                        prev={reactDoc.previous || "#"}
                    />
                </header>
                <header className="sm:flex sm:items-center sm:justify-between mb-4">
                    <div className="flex-1 min-w-0 flex flex-col gap-1">
                        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
                            {reactDoc.title}
                        </h1>
                        <h3 className="text-muted-foreground font-medium">
                            Author - {reactDoc.author}
                        </h3>
                        <h4 className="text-foreground italic">
                            About this article - {reactDoc.description}
                        </h4>
                    </div>
                </header>
                <Prerequisites
                    prerequisitesSlugs={reactDoc.prerequisites || []}
                />
                <Divider />
                <article className="markdown">
                    {reactDoc.body.code ? (
                        <MDXContent code={reactDoc.body.code} />
                    ) : (
                        <p>No content available.</p>
                    )}
                </article>
                <footer>
                    <Paginator next="#" prev="#" />
                </footer>
            </main>
        </div>
    );
}
