/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1673
 */

var r = require("./1623/86")
var o = require("./1735/706")
var string$fromCharCode = String.fromCharCode
var string$fromCodePoint = String.fromCodePoint
r({
  target: "String",
  stat: true,
  forced: !!string$fromCodePoint && 1 != string$fromCodePoint.length
}, {
  fromCodePoint: function (e) {
    for (var t, n = [], arguments$length = arguments.length, a = 0; arguments$length > a;) {
      t = +arguments[a++]
      if (o(t, 1114111) !== t) {
        throw RangeError(t + " is not a valid code point")
      }
      n.push(t < 65536 ? string$fromCharCode(t) : string$fromCharCode(55296 + ((t -= 65536) >> 10), t % 1024 + 56320))
    }
    return n.join("")
  }
})
