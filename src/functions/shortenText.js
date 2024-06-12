module.exports = function (str, limit, suffix = "") {
  if (!str || typeof str !== "string") {
    throw new Error("The 'str' parameter is missing or empty.");
  }

  if (typeof limit !== "number" || isNaN(limit)) {
    throw new Error("The 'limit' parameter must be a valid number.");
  }

  if (suffix && typeof suffix !== "string") {
    throw new Error("The 'suffix' parameter must be a string.");
  }

  return str.length > limit ? str.slice(0, limit) + suffix : str;
};
