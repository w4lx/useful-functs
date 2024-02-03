const isURL = require("./isURL");

module.exports = async function (url) {
  if (!url) return false;

  if (!isURL(url)) return false;

  try {
    const response = await fetch(url);
    const contentType = response.headers.get("Content-Type");

    return contentType?.startsWith("image/");
  } catch (error) {
    console.error(error);
    return false;
  }
};
