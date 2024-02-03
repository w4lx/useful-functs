String.prototype.shorten = function (limit, suffix = "") {
  if (!limit || typeof limit !== "number") {
    throw new Error("The limit parameter must be a number.");
  }

  if (suffix && typeof suffix !== "string") {
    throw new Error("The suffix parameter must be a string.");
  }

  return this.length > limit ? this.slice(0, limit) + suffix : this.toString();
};
