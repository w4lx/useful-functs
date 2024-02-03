module.exports = function (str) {
  if (!str || typeof str !== "string") return false;

  const windowsPathPattern = /^[a-zA-Z]:\\/;

  if (windowsPathPattern.test(str)) return false;

  const urlPattern = /^(?:https?|http):\/\/[^\s/$.?#].[^\s]*$/;

  return urlPattern.test(str);
};
