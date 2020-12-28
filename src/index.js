const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, ColorPalette, MediaUpload } = wp.editor;
const { PanelBody, IconButton, RangeControl } = wp.components;

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
    backgroundImageURL: {
      type: "string",
      default: null,
    },
    overlayColor: {
      type: "string",
      default: "black",
    },
    overlayOpacity: {
      type: "number",
      default: 0.3,
    },
  },

  edit({ attributes, setAttributes }) {
    const {
      title,
      body,
      titleColor,
      bodyColor,
      backgroundImageURL,
      overlayColor,
      overlayOpacity,
    } = attributes;

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
      setAttributes({ backgroundImageURL: newImage.sizes.full.url });
    }

    function onOverlayColorChange(newColor) {
      setAttributes({ overlayColor: newColor });
    }

    function onOverlayOpacityChange(newOpacity) {
      setAttributes({ overlayOpacity: newOpacity });
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
            value={backgroundImageURL}
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
          <div style={{ marginTop: "20px", marginBottom: "40px" }}>
            <p>
              <strong>Overlay Color:</strong>
            </p>
            <ColorPalette
              value={overlayColor}
              onChange={onOverlayColorChange}
            />
          </div>
          <RangeControl
            label={"Overlay Opacity"}
            value={overlayOpacity}
            onChange={onOverlayOpacityChange}
            min={0}
            max={1}
            step={0.01}
          />
        </PanelBody>
      </InspectorControls>,
      <div
        class="block-container"
        style={{
          backgroundImage: `url(${backgroundImageURL})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="block-overlay"
          style={{
            background: overlayColor,
            opacity: overlayOpacity,
            position: "absolute",
            inset: "0px",
          }}
        ></div>
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
    const {
      title,
      body,
      titleColor,
      backgroundImageURL,
      overlayColor,
      overlayOpacity,
    } = attributes;

    return (
      <div
        class="block-container"
        style={{
          backgroundImage: `url(${backgroundImageURL})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <div
          className="block-overlay"
          style={{
            background: overlayColor,
            opacity: overlayOpacity,
            position: "absolute",
            inset: "0px",
          }}
        ></div>

        <h2 style={{ color: titleColor }}>{title}</h2>
        <RichText.Content tagName="p" value={body} />
      </div>
    );
  },
});
