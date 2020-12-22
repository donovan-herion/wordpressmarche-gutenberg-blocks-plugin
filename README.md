# Gutenberg from Scratch: NPM Build Setup for Gutenberg | Lesson 3

In my plugin folder i ran the following command to create a package.json file and allow download of packages through npm

```
npm init -y
```

I also added a jsx expression to my edit method that returns a div with plain text

```js
 edit() {
    return <div>Hello World</div>;
  },
```

I then install this package from wordpress that allows me to compile my code

````

npm i --save-dev --save-exact @wordpress/scripts

```

In order to compile my js file I need to follow the file structure used in the wordpress/scripts webpack config.

My js file has to be named index.js and be placed in a src folder

To compile my code I use the following commands (that i previously added to the scripts of my package.json)

```

npm run build-scripts

```

or the watcher method

```

npm run start-build

```

I also need my newly built js file to be linked to my php plugin file.

## Link to tutorial

[Click here](https://www.youtube.com/watch?v=jwIpsW3UoUI&list=PLriKzYyLb28lHhftzU7Z_DJ32mvLy4KKH&index=4&t=17s&ab_channel=AlessandroCastellani)
```
````
