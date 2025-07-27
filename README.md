# Useful functions

Functions that could be useful in your projects.

### Example usage

```js
const { isURL, isImageURL } = require("useful-functs");

/* Validate URL */

const url = "https://www.npmjs.com/package/useful-functs";

if (isURL(url)) {
  console.log("Is a url");
} else {
  console.log("It is not a url");
}

/* Validate if the URL is an image */

(async () => {
  const image = "https://static.toiimg.com/photo/101094345.cms";

  const isImage = await isImageURL(image);

  if (isImage) {
    console.log("It's an image");
  } else {
    console.log("It's not an image");
  }
})();
```

```js
const { shuffleArray, shuffleString, shortenText } = require("useful-functs");

/* Suffle array */

const array = [1, 2, 3, 4, 5];

const shuffledArray = shuffleArray(array);

console.log(shuffledArray); // => Randomly mixed matrix

/* Suffle string */

const string = "Hello everyone";

const shuffledString = shuffleString(string);

console.log(shuffledString); // => Randomly mixed character string

/* Shorten text */

const text = "Text to shorten";

const shortenedText = shortenText(text, 4);

console.log(shortenedText); // => Text
```
