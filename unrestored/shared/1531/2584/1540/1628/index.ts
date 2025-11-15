/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1628
 */

var r = require("../1698/86/index")
var o = require("../1541/272")
var i = require("./1059")
var a = require("../1541/437")
var s = require("../1684/386")
var c = require("../1557/707")
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
