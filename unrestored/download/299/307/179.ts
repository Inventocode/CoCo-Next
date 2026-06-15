/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：179
 */

"use strict"

export { o as b }
export { s as a }
import * as /* [auto-meaningful-name] */Module_22 from /* 22 */"./22"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"./11"
function o(e, t) {
  try {
    for (var n = e, r = [], i = 0, o = 0, s = undefined; n && i++ < 5 && !("html" === (s = a(n, t)) || i > 1 && o + 3 * r.length + s.length >= 80);) {
      r.push(s)
      o += s.length
      n = n.parentNode
    }
    return r.reverse().join(" > ")
  } catch (u) {
    return "<unknown>"
  }
}
function a(e, t) {
  var /* [auto-meaningful-name] */u$className
  var r
  var o
  var a
  var s
  var u = e
  var c = []
  if (!u || !u.tagName) {
    return ""
  }
  c.push(u.tagName.toLowerCase())
  var l = t && t.length ? t.filter(function (e) {
    return u.getAttribute(e)
  }).map(function (e) {
    return [e, u.getAttribute(e)]
  }) : null
  if (l && l.length) {
    l.forEach(function (e) {
      c.push("[" + e[0] + "=\"" + e[1] + "\"]")
    })
  } else if (u.id && c.push("#" + u.id), (u$className = u.className) && Module_11.l(u$className)) {
    for (r = u$className.split(/\s+/), s = 0; s < r.length; s++) {
      c.push("." + r[s])
    }
  }
  var f = ["type", "name", "title", "alt"]
  for (s = 0; s < f.length; s++) {
    o = f[s]
    if (a = u.getAttribute(o)) {
      c.push("[" + o + "=\"" + a + "\"]")
    }
  }
  return c.join("")
}
function s() {
  var e = Module_22.a()
  try {
    return e.document.location.href
  } catch (t) {
    return ""
  }
}
export default s
