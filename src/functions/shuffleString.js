module.exports = function (str, removeSpaces = false) {
  if (!str || typeof str !== "string") {
    throw new Error("The 'str' parameter is missing or empty.");
  }

  if (typeof removeSpaces !== "boolean") {
    throw new Error("'removeSpaces' must be a boolean.");
  }

  const characters = str.split("");

  for (let i = characters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [characters[i], characters[j]] = [characters[j], characters[i]];
  }

  const shuffled = characters.join("");

  return removeSpaces ? shuffled.replace(/ /g, "") : shuffled;
};
