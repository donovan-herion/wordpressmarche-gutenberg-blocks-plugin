# Gutenberg from Scratch: Create a Custom Media Uploader | Lesson 7

In this lesson we simply added a media loader on the block editing sidebar through a new panelbody

this is what we changed since last lesson

```js
const { previousOnes... + MediaUpload } = wp.editor;

//custom attributes
backgroundImage: {
      type: "string",
      default: null,
    }

//loads the state in edit function
const { previousOnes... + backgroundImage } = attributes;


//added onChange functions
function onSelectImage(newImage) {
  setAttributes({ backgroundImage: newImage.sizes.full.url });
}

//added one panel body

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
```

## Link to tutorial

[Click here](https://www.youtube.com/watch?v=QHpUELUrwpo&list=PLriKzYyLb28lHhftzU7Z_DJ32mvLy4KKH&index=8&ab_channel=AlessandroCastellani)
