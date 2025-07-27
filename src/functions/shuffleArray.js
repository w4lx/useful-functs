module.exports = function (array) {
  if (!array || !Array.isArray(array) || !array.length) {
    throw new Error("The input must be a non-empty array.");
  }

  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
};
