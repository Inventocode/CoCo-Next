var r = require("../../1736/194");
module.exports = function (e, t) {
  try {
    Object.defineProperty(r, e, {
      value: t,
      configurable: true,
      writable: true
    });
  } catch (n) {
    r[e] = t;
  }
  return t;
};