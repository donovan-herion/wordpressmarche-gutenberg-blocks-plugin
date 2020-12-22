const { registerBlockType } = wp.blocks;

registerBlockType("wpmarche/sample-block", {
  title: "Sample Block",
  description: "Block to generate static content",
  icon: "format-image",
  category: "layout",

  // custom attributes
  attributes: {},

  // custom functions

  edit() {},

  save() {},
});
