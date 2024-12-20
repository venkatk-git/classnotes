// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import rehypePrettyCode from "rehype-pretty-code";
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
    }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Java],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode]]
  }
});
export {
  Java,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-3KMFWXTO.mjs.map
