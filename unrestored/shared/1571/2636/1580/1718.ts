/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1718
 */

var r = require("./1706/86/index")
var o = require("./1581/441")
var i = require("./1597/256")
var a = require("./1581/310")
r({
  target: "String",
  stat: true
}, {
  raw: function (e) {
    for (var t = o(e.raw), n = i(t.length), /* [auto-meaningful-name] */arguments$length = arguments.length, s = [], c = 0; n > c;) {
      s.push(a(t[c++]))
      if (c < arguments$length) {
        s.push(a(arguments[c]))
      }
    }
    return s.join("")
  }
})
