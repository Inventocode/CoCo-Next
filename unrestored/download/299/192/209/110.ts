/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：110
 */

"use strict"

var r = require(/* 71 */"../280/281/71")
var /* [auto-meaningful-name] */Math$floor = Math.floor
var o = function (e, t) {
  var /* [auto-meaningful-name] */e$length = e.length
  if (e$length < 8) {
    for (var a, s, u = 1; u < e$length;) {
      for (s = u, a = e[u]; s && t(e[s - 1], a) > 0;) {
        e[s] = e[--s]
      }
      if (s !== u++) {
        e[s] = a
      }
    }
  } else {
    for (var c = Math$floor(e$length / 2), l = o(r(e, 0, c), t), f = o(r(e, c), t), /* [auto-meaningful-name] */l$length = l.length, /* [auto-meaningful-name] */f$length = f.length, h = 0, g = 0; h < l$length || g < f$length;) {
      e[h + g] = h < l$length && g < f$length ? t(l[h], f[g]) <= 0 ? l[h++] : f[g++] : h < l$length ? l[h++] : f[g++]
    }
  }
  return e
}
module.exports = o
