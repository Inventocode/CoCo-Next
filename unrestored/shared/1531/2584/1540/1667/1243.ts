var r = require("../1633/167");
var o = require("../1745/194").RegExp;
module.exports = r(function () {
  var e = o("(?<a>b)", "g");
  return "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c");
});