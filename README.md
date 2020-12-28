# Gutenberg from Scratch: How to Use the RichText Markup Element | Lesson 5

In this lesson we did what we had done in the previous lesson with the build-in RichText component

!!! Good to know | The RichText event onChange sends only the value in the event

This component comes from the wp.editor (in js) but also needs to be called from our php as a dependency just like the wp-elements one

```php
function wpmarche_gutenberg_blocks()
{
    wp_register_script('sample-block-js', plugins_url('build/index.js', __FILE__), array('wp-blocks', 'wp-editor'));

    register_block_type('wpmarche/sample-block', array(
        'editor_script' => 'sample-block-js'
    ));
}
add_action('init', 'wpmarche_gutenberg_blocks');
```

```js
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
```

## Link to tutorial

[Click here](https://www.youtube.com/watch?v=_mLPsCDvK3Q&list=PLriKzYyLb28lHhftzU7Z_DJ32mvLy4KKH&index=6&ab_channel=AlessandroCastellani)
