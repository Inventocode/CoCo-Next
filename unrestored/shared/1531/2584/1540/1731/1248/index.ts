var r = require("./1702");
module.exports = function (e, t) {
  var n = r(e);
  if (n % t) {
    throw RangeError("Wrong offset");
  }
  return n;
};