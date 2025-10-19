/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1211
 */

var r = require("../../1745/332");
var o = require("../../1678/437");
var i = require("../../1721/817").indexOf;
var a = require("../../1541/816");
module.exports = function (e, t) {
  var n;
  var s = o(e);
  var c = 0;
  var l = [];
  for (n in s) if (!r(a, n) && r(s, n)) {
    l.push(n);
  }
  for (; t.length > c;) {
    if (r(s, n = t[c++])) {
      if (!~i(l, n)) {
        l.push(n);
      }
    }
  }
  return l;
};