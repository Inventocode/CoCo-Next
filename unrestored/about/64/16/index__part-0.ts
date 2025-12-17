/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：16__part-0
 */

"use strict"

function r(e, t) {
  var n = "function" === typeof Symbol && e[Symbol.iterator]
  if (!n) {
    return e
  }
  var r
  var i
  var o = n.call(e)
  var a = []
  try {
    for (; (undefined === t || t-- > 0) && !(r = o.next()).done;) {
      a.push(r.value)
    }
  } catch (s) {
    i = {
      error: s
    }
  } finally {
    try {
      if (r && !r.done && (n = o.return)) {
        n.call(o)
      }
    } finally {
      if (i) {
        throw i.error
      }
    }
  }
  return a
}
function i() {
  for (var e = [], t = 0; t < arguments.length; t++) {
    e = e.concat(r(arguments[t]))
  }
  return e
}
export { i }
