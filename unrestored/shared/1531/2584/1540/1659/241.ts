var r = require("../1738/231");
module.exports = function (e) {
  if (!r(e)) {
    throw TypeError(String(e) + " is not an object");
  }
  return e;
};