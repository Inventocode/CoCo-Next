import * as r from "../1626/167";
var o = require("../1738/194").RegExp;
module.exports = r(function () {
  var e = o(".", "s");
  return !(e.dotAll && e.exec("\n") && "s" === e.flags);
});