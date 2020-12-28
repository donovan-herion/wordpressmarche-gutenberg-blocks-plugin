const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, ColorPalette, MediaUpload } = wp.editor;
const { PanelBody, IconButton } = wp.components;

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
    titleColor: {
      type: "string",
      default: "black",
    },
    bodyColor: {
      type: "string",
      default: "black",
    },
    backgroundImage: {
      type: "string",
      default: null,
    },
  },

  edit({ attributes, setAttributes }) {
    const { title, body, titleColor, bodyColor, backgroundImage } = attributes;

    // custom functions
    function onChangeTitle(newTitle) {
      setAttributes({ title: newTitle });
    }

    function onChangeBody(newBody) {
      setAttributes({ body: newBody });
    }

    function onTitleColorChange(newColor) {
      setAttributes({ titleColor: newColor });
    }

    function onBodyColorChange(newColor) {
      setAttributes({ bodyColor: newColor });
    }

    function onSelectImage(newImage) {
      setAttributes({ backgroundImage: newImage.sizes.full.url });
    }

    return [
      <InspectorControls style={{ marginBottom: "40px" }}>
        <PanelBody title={"Font Color Settings"}>
          <p>
            <strong>Select a Title color:</strong>
          </p>
          <ColorPalette value={titleColor} onChange={onTitleColorChange} />
          <p>
            <strong>Select a Body color:</strong>
          </p>
          <ColorPalette value={bodyColor} onChange={onBodyColorChange} />
        </PanelBody>
        <PanelBody title={"Background Image Settings"}>
          <p>
            <strong>Select a Background Image:</strong>
          </p>
          <MediaUpload
            onSelect={onSelectImage}
            type="image"
            value={backgroundImage}
            render={({ open }) => (
              <IconButton
                className="editor-media-placeholder__button is-button is-default is-large"
                icon="upload"
                onClick={open}
              >
                Background Image
              </IconButton>
            )}
          />
        </PanelBody>
      </InspectorControls>,
      <div class="block-container">
        <RichText
          key="editable"
          tagName="h2"
          placeholder="Your block Title"
          value={title}
          onChange={onChangeTitle}
          style={{ color: titleColor }}
        />
        <RichText
          key="editable"
          tagName="p"
          placeholder="Your block Description"
          value={body}
          onChange={onChangeBody}
          style={{ color: bodyColor }}
        />
      </div>,
    ];
  },

  save({ attributes }) {
    const { title, body, titleColor } = attributes;

    return (
      <div class="block-container">
        <h2 style={{ color: titleColor }}>{title}</h2>
        <RichText.Content tagName="p" value={body} />
      </div>
    );
  },
});
