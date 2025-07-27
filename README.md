# Useful Functions

A collection of utility functions that may be helpful in various JavaScript projects.

---

## 📦 Installation

```bash
npm install useful-functs
```

---

## ✨ Example Usage

### 🔗 Validate a URL

```js
const { isURL } = require("useful-functs");

const url = "https://www.npmjs.com/package/useful-functs";

if (isURL(url)) {
  console.log("It is a valid URL.");
} else {
  console.log("Invalid URL.");
}
```

---

### 🖼️ Check if a URL points to an image

```js
const { isImageURL } = require("useful-functs");

(async () => {
  const imageURL = "https://static.toiimg.com/photo/101094345.cms";
  const isImage = await isImageURL(imageURL);

  if (isImage) {
    console.log("It's an image.");
  } else {
    console.log("It's not an image.");
  }
})();
```

---

### 🔀 Shuffle an Array

```js
const { shuffleArray } = require("useful-functs");

const array = [1, 2, 3, 4, 5];
const shuffled = shuffleArray(array);

console.log(shuffled); // => Randomized array
```

---

### 🔄 Shuffle a String

```js
const { shuffleString } = require("useful-functs");

const text = "Hello everyone";
const shuffled = shuffleString(text);

console.log(shuffled); // => Randomized character string
```

---

### ✂️ Shorten a Text

```js
const { shortenText } = require("useful-functs");

const longText = "Text to shorten";
const shortened = shortenText(longText, 4);

console.log(shortened); // => "Text"
```

---

## 🧰 Included Utilities

- `isURL(url: string): boolean`  
  Validates if a string is a properly formatted URL.

- `isImageURL(url: string, timeout?: number): Promise<boolean>`  
  Checks if a URL points to a valid image resource, with optional timeout (default: 5000ms).

- `shuffleArray<T>(array: T[]): T[]`  
  Randomly shuffles an array without mutating the original.

- `shuffleString(str: string, removeSpaces?: boolean): string`  
  Returns a randomized string with optional space removal.

- `shortenText(str: string, limit: number, suffix?: string): string`  
  Truncates a string to the specified length, optionally appending a suffix.

---
