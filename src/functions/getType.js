const isURL = require("./isURL");

module.exports = async function (url) {
  try {
    if (!isURL(url)) return;

    const { headers } = await fetch(url);

    const type = headers.get("Content-Type");

    return type;
  } catch (error) {
    console.error(error);
    return null;
  }
};
