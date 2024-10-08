import { allJavas } from "contentlayer/generated";
import { MDXContent } from "@/components/mdx-components";

export default function JavaPage() {
    const page = allJavas.find((doc) => doc.slugAsParams === "intro-trees");
    return (
        <div>
            <MDXContent code={page.body.code} />
        </div>
    );
}
