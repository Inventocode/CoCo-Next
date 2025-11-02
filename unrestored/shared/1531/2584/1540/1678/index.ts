/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1678
 */

var r = require("../1623/86")
var o = require("./437")
var i = require("../1735/257")
var a = require("../1745/310")
r({
  target: "String",
  stat: true
}, {
  raw: function (e) {
    for (var t = o(e.raw), n = i(t.length), arguments$length = arguments.length, s = [], c = 0; n > c;) {
      s.push(a(t[c++]))
      if (c < arguments$length) {
        s.push(a(arguments[c]))
      }
    }
    return s.join("")
  }
})
