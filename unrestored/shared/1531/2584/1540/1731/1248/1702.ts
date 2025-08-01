var r = require("../../1563/473");
module.exports = function (e) {
  var t = r(e);
  if (t < 0) {
    throw RangeError("The argument can't be less than 0");
  }
  return t;
};