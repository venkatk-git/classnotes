import { allJavas } from "contentlayer/generated";
import { MDXContent } from "@/components/mdx-components";
import { Divider } from "@/components/divider";

export default function JavaPage() {
    const page = allJavas.find((doc) => doc.slugAsParams === "complete-rec");
    return (
        <main className="flex flex-col">
            <header className="sm:flex sm:items-center sm:justify-between md-4">
                <div className="flex-1 min-w-0 flex flex-col gap-1">
                    <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
                        {page.title}
                    </h1>
                    <h3 className="text-muted-foreground font-medium">
                        Author - {page.author}
                    </h3>
                    <h4 className="text-foreground italic">
                        About this article - {page.description}
                    </h4>
                </div>
            </header>
            <Divider />
            <div className="markdown">
                <MDXContent code={page.body.code} />
            </div>
        </main>
    );
}
