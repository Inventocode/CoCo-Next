var r = require("../../1556/473");
var o = require("../../1728/257");
module.exports = function (e) {
  if (void 0 === e) {
    return 0;
  }
  var t = r(e);
  var n = o(t);
  if (t !== n) {
    throw RangeError("Wrong length or index");
  }
  return n;
};