const { default: MyComponent } = require("./components/MyComponent");

const { registerBlockType } = wp.blocks;

registerBlockType("wpmarche/sample-block", {
  title: "Sample Block",
  description: "Block to generate static content",
  icon: "format-image",
  category: "layout",

  // custom attributes
  attributes: {
    author: {
      type: "string",
    },
  },

  edit({ attributes, setAttributes }) {
    // custom functions
    const changeAuthorAttributes = (event) => {
      setAttributes({ author: event.target.value });
    };

    return (
      <MyComponent
        attributes={attributes}
        changeAuthorAttributes={changeAuthorAttributes}
      />
    );
  },

  save({ attributes }) {
    return (
      <p>
        Author Name : <i>{attributes.author}</i>
      </p>
    );
  },
});
