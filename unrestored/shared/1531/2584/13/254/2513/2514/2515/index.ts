/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2515
 */

var r = require("./973/index")
var i = require("./1418/index")
var o = require("./1391/index")
var a = require("./2516/index")
var s = require("../../../2533/1420/475")
var c = require("./853/index")
var u = require("./1419")
module.exports = function e(t, n, l, f, d) {
  if (t !== n) {
    o(n, function (o, c) {
      if (!d) {
        d = new r()
      }
      if (s(o)) {
        a(t, n, c, l, e, f, d)
      } else {
        var h = f ? f(u(t, c), o, c + "", t, n, d) : undefined
        if (undefined === h) {
          h = o
        }
        i(t, c, h)
      }
    }, c)
  }
}
