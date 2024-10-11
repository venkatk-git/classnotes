import { allJavas } from "@/.contentlayer/generated";
import { Divider } from "@/components/divider";
import { MDXContent } from "@/components/mdx-components";

import { notFound } from "next/navigation";
import type { Metadata } from "next";

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

    return (
        <main className="flex flex-col">
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
            <div className="markdown">
                <MDXContent code={javaDoc.body.code} />
            </div>
        </main>
    );
}
