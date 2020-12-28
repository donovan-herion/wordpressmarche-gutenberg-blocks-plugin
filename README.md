# Gutenberg from Scratch: How to Use the ColorPalette Element | Lesson 6

Added a few dependencies

```js
const { RichText, InspectorControls, ColorPalette } = wp.editor;
const { PanelBody } = wp.components;

//has to be added in php dependency array too
```

added a few states to manage color from block editing sidebar through the ColorPalette component

The InspectorControls has to be added together with the PanelBody to display the ColorPalette

```js
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

```

## Link to tutorial

[Click here](https://www.youtube.com/watch?v=wj6HkXMplNY&list=PLriKzYyLb28lHhftzU7Z_DJ32mvLy4KKH&index=7&ab_channel=AlessandroCastellani)
