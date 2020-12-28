const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

registerBlockType("wpmarche/sample-block", {
  title: "Sample Block",
  description: "Block to generate static content",
  icon: "format-image",
  category: "layout",

  // custom attributes
  attributes: {
    title: {
      type: "string",
      source: "html",
      selector: "h2",
    },
    body: {
      type: "string",
      source: "html",
      selector: "p",
    },
  },

  edit({ attributes, setAttributes }) {
    const { title, body } = attributes;

    // custom functions
    function onChangeTitle(newTitle) {
      setAttributes({ title: newTitle });
    }

    function onChangeBody(newBody) {
      setAttributes({ body: newBody });
    }

    return [
      <div class="block-container">
        <RichText
          key="editable"
          tagName="h2"
          placeholder="Your block Title"
          value={title}
          onChange={onChangeTitle}
        />
        <RichText
          key="editable"
          tagName="p"
          placeholder="Your block Description"
          value={body}
          onChange={onChangeBody}
        />
      </div>,
    ];
  },

  save({ attributes }) {
    const { title, body } = attributes;

    return (
      <div class="block-container">
        <h2>{title}</h2>
        <RichText.Content tagName="p" value={body} />
      </div>
    );
  },
});
