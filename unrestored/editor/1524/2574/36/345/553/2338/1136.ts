exports.L = {
  bit: 1
};
exports.M = {
  bit: 0
};
exports.Q = {
  bit: 3
};
exports.H = {
  bit: 2
};
exports.isValid = function (e) {
  return e && "undefined" !== typeof e.bit && e.bit >= 0 && e.bit < 4;
};
exports.from = function (e, n) {
  if (exports.isValid(e)) {
    return e;
  }
  try {
    return function (e) {
      if ("string" !== typeof e) {
        throw new Error("Param is not a string");
      }
      switch (e.toLowerCase()) {
        case "l":
        case "low":
          return exports.L;
        case "m":
        case "medium":
          return exports.M;
        case "q":
        case "quartile":
          return exports.Q;
        case "h":
        case "high":
          return exports.H;
        default:
          throw new Error("Unknown EC Level: " + e);
      }
    }(e);
  } catch (r) {
    return n;
  }
};