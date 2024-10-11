import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import rehypePrettyCode from "rehype-pretty-code";

const computedFields = {
    slug: {
        type: "string",
        resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
        type: "string",
        resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
};

export const Java = defineDocumentType(() => ({
    name: "Java",
    filePathPattern: `java/**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: {
            type: "string",
            required: true,
        },
        author: {
            type: "string",
            required: true,
        },
        description: {
            type: "string",
            required: true,
        },
    },
    computedFields,
}));

export default makeSource({
    contentDirPath: "content",
    documentTypes: [Java],
    mdx: {
        remarkPlugins: [],
        rehypePlugins: [
            [
                rehypePrettyCode,
                {
                    theme: "one-dark-pro",
                    keepBackground: true,
                },
            ],
        ],
    },
});
