/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2258
 */

"use strict"

module.exports = function (e) {
  for (var t, n = 0, /* [auto-meaningful-name] */e$length = e.length, i = 0; i < e$length;) {
    n++
    if ((t = e.charCodeAt(i++)) >= 55296 && t <= 56319 && i < e$length && 56320 == (64512 & (t = e.charCodeAt(i)))) {
      i++
    }
  }
  return n
}
