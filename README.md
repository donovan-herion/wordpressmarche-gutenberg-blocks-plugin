# Gutenberg from Scratch: How to Create and Set Attributes | Lesson 4

In this lesson I learned to render an editable input in the admin pannel through the edit method

In order to store the value I had to create an custom attribute and save its value through a custom function (which HAS TO be in the edit method)

The way we retrieve and modify the author information is through the attributes props

in the edit method (admin side) I can modify and save my author attributes

In the save method (front end side) I can retrieve and display the author information as wanted.

```js
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
      <input
        type="text"
        value={attributes.author}
        onChange={changeAuthorAttributes}
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
```

## Link to tutorial

[Click here](https://www.youtube.com/watch?v=tML_46IPjcc&list=PLriKzYyLb28lHhftzU7Z_DJ32mvLy4KKH&index=5&ab_channel=AlessandroCastellani)
