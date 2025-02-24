import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

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
        prerequisites: {
            type: "list",
            of: {
                type: "string",
            },
        },
        next: {
            type: "string",
            required: false,
        },
        previous: {
            type: "string",
            required: false,
        },
    },
    computedFields,
}));
export const React = defineDocumentType(() => ({
    name: "React",
    filePathPattern: `react/**/*.mdx`,
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
        prerequisites: {
            type: "list",
            of: {
                type: "string",
            },
        },
        next: {
            type: "string",
            required: false,
        },
        previous: {
            type: "string",
            required: false,
        },
    },
    computedFields,
}));
export const OS = defineDocumentType(() => ({
    name: "OS",
    filePathPattern: `os/**/*.mdx`,
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
        prerequisites: {
            type: "list",
            of: {
                type: "string",
            },
        },
        next: {
            type: "string",
            required: false,
        },
        previous: {
            type: "string",
            required: false,
        },
    },
    computedFields,
}));

export default makeSource({
    contentDirPath: "content",
    documentTypes: [Java, React, OS],
    mdx: {
        remarkPlugins: [],
        rehypePlugins: [
            rehypeSlug,
            [
                rehypePrettyCode,
                {
                    theme: "github-dark",
                    keepBackground: false,
                },
            ],
            [
                rehypeAutolinkHeadings,
                {
                    properties: {
                        className: ["subheading-anchor"],
                        ariaLabel: "Link to section",
                    },
                },
            ],
        ],
    },
});
