const isURL = require("./isURL");

module.exports = async function (url) {
  try {
    if (!isURL(url)) return;

    const { headers } = await fetch(url);

    const mimetype = headers.get("Content-Type");

    return {
      type: mimetype?.split("/")[0],
      ext: mimetype?.split("/")[1],
      mimetype,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};
