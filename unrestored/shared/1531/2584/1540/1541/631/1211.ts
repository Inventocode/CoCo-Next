/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1211
 */

var r = require("../332")
var o = require("../437")
var /* [auto-meaningful-name] */require$$_$$_1567_817$indexOf = require("../../1567/817").indexOf
var a = require("../816")
module.exports = function (e, t) {
  var n
  var s = o(e)
  var c = 0
  var l = []
  for (n in s) if (!r(a, n) && r(s, n)) {
    l.push(n)
  }
  for (; t.length > c;) {
    if (r(s, n = t[c++])) {
      if (!~require$$_$$_1567_817$indexOf(l, n)) {
        l.push(n)
      }
    }
  }
  return l
}
