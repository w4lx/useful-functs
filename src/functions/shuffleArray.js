module.exports = function shuffleArray(array) {
  if (!array || !Array.isArray(array) || !array.length) {
    throw new Error("The input must be a non-empty array.");
  }

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};
