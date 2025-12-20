/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1668
 */

var r = require("./1705/86/index")
var o = require("./1699/271")
var i = require("./1703/1080")
var a = require("./1581/441")
var s = require("./1705/386")
var c = require("./1597/716")
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
