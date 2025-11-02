/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1628
 */

var r = require("./1623/86")
var o = require("./1623/272")
var i = require("./1663/1059")
var a = require("./1678/437")
var s = require("./1659/386/index")
var c = require("./1557/707")
r({
  target: "Object",
  stat: true,
  sham: !o
}, {
  getOwnPropertyDescriptors: function (e) {
    for (var t, n, r = a(e), o = s.f, l = i(r), u = {}, d = 0; l.length > d;) {
      if (undefined !== (n = o(r, t = l[d++]))) {
        c(u, t, n)
      }
    }
    return u
  }
})
