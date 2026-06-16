/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：119
 */

"use strict"

var r = require(/* 10 */"../../208/10")
var i = require(/* 46 */"../../204/46/index")
var o = require(/* 36 */"../../209/36")
var a = require(/* 61 */"../../237/61")
var s = r("".charAt)
var u = r("".charCodeAt)
var c = r("".slice)
var l = function (e) {
  return function (t, n) {
    var r
    var l
    var f = o(a(t))
    var p = i(n)
    var /* [auto-meaningful-name] */f$length = f.length
    return p < 0 || p >= f$length ? e ? "" : undefined : (r = u(f, p)) < 55296 || r > 56319 || p + 1 === f$length || (l = u(f, p + 1)) < 56320 || l > 57343 ? e ? s(f, p) : r : e ? c(f, p, p + 2) : l - 56320 + (r - 55296 << 10) + 65536
  }
}
module.exports = {
  codeAt: l(false),
  charAt: l(true)
}
