var r = require("../1738/194");
var o = require("../1738/310");
var i = require("../1679/753").trim;
var a = require("../1679/1077/940");
var s = r.parseFloat;
var c = 1 / s(a + "-0") !== -1 / 0;
module.exports = c ? function (e) {
  var t = i(o(e));
  var n = s(t);
  return 0 === n && "-" == t.charAt(0) ? -0 : n;
} : s;