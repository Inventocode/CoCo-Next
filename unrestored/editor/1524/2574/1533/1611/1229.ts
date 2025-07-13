import * as r from "../1738/194";
import * as o from "../1738/310";
var i = require("../1679/753").trim;
import * as a from "../1679/1077/940";
var s = r.parseInt;
var c = /^[+-]?0[Xx]/;
var l = 8 !== s(a + "08") || 22 !== s(a + "0x16");
module.exports = l ? function (e, t) {
  var n = i(o(e));
  return s(n, t >>> 0 || (c.test(n) ? 16 : 10));
} : s;