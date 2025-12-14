/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1666
 */

var r = require("./1705/86/index")
var o = require("./1686/838/index")
var i = require("./1597/716")
r({
  target: "Object",
  stat: true
}, {
  fromEntries: function (e) {
    var t = {}
    o(e, function (e, n) {
      i(t, e, n)
    }, {
      AS_ENTRIES: true
    })
    return t
  }
})
