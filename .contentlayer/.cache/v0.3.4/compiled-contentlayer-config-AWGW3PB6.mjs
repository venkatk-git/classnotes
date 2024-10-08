// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
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
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./content",
  documentTypes: [Java],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: []
  }
});
export {
  Java,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-AWGW3PB6.mjs.map
