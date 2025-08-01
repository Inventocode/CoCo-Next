var r = require("../1633/167");
var o = require("../1745/194").RegExp;
module.exports = r(function () {
  var e = o(".", "s");
  return !(e.dotAll && e.exec("\n") && "s" === e.flags);
});