const isURL = require("./isURL");

module.exports = async function (url, timeout = 5000) {
  if (!isURL(url)) return false;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, { signal: controller.signal });

    const contentType = response.headers.get("Content-Type");
    if (!contentType) return false;

    return contentType.startsWith("image/");
  } catch {
    return false;
  } finally {
    clearTimeout(timeoutId);
  }
};
