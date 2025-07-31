var r = require("../1626/167");
var o = require("../1738/194").RegExp;
exports.UNSUPPORTED_Y = r(function () {
  var e = o("a", "y");
  e.lastIndex = 2;
  return null != e.exec("abcd");
});
exports.BROKEN_CARET = r(function () {
  var e = o("^r", "gy");
  e.lastIndex = 2;
  return null != e.exec("str");
});