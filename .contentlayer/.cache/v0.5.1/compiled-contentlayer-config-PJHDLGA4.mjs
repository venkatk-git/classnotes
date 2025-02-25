// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
  }
};
var Java = defineDocumentType(() => ({
  name: "Java",
  filePathPattern: `java/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    author: {
      type: "string",
      required: true
    },
    description: {
      type: "string",
      required: true
    },
    prerequisites: {
      type: "list",
      of: {
        type: "string"
      }
    },
    next: {
      type: "string",
      required: false
    },
    previous: {
      type: "string",
      required: false
    }
  },
  computedFields
}));
var React = defineDocumentType(() => ({
  name: "React",
  filePathPattern: `react/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    author: {
      type: "string",
      required: true
    },
    description: {
      type: "string",
      required: true
    },
    prerequisites: {
      type: "list",
      of: {
        type: "string"
      }
    },
    next: {
      type: "string",
      required: false
    },
    previous: {
      type: "string",
      required: false
    }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Java, React],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          keepBackground: false
        }
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section"
          }
        }
      ]
    ]
  }
});
export {
  Java,
  React,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-PJHDLGA4.mjs.map
