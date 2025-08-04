var r = require("../1736/167");
var o = require("../1736/194").RegExp;
module.exports = r(function () {
  var e = o("(?<a>b)", "g");
  return "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c");
});