/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：40
 */

"use strict"

export { i as a }
import * as r from "./9"
function i(e, t) {
  try {
    for (var n = e, r = [], i = 0, a = 0, /* [auto-meaningful-name] */$length = " > ".length, u = undefined; n && i++ < 5 && !("html" === (u = o(n, t)) || i > 1 && a + r.length * $length + u.length >= 80);) {
      r.push(u)
      a += u.length
      n = n.parentNode
    }
    return r.reverse().join(" > ")
  } catch (l) {
    return "<unknown>"
  }
}
function o(e, t) {
  var n
  var i
  var /* [auto-meaningful-name] */c$className
  var a
  var s
  var u
  var l
  var c = e
  var f = []
  if (!c || !c.tagName) {
    return ""
  }
  f.push(c.tagName.toLowerCase())
  var d = (null === (n = t) || undefined === n ? undefined : n.length) ? t.filter(function (e) {
    return c.getAttribute(e)
  }).map(function (e) {
    return [e, c.getAttribute(e)]
  }) : null
  if (null === (i = d) || undefined === i ? undefined : i.length) {
    d.forEach(function (e) {
      f.push("[" + e[0] + "=\"" + e[1] + "\"]")
    })
  } else if (c.id && f.push("#" + c.id), (c$className = c.className) && r.k(c$className)) {
    for (a = c$className.split(/\s+/), l = 0; l < a.length; l++) {
      f.push("." + a[l])
    }
  }
  var p = ["type", "name", "title", "alt"]
  for (l = 0; l < p.length; l++) {
    s = p[l]
    if (u = c.getAttribute(s)) {
      f.push("[" + s + "=\"" + u + "\"]")
    }
  }
  return f.join("")
}
export default i
