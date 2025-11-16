/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1168
 */

"use strict"

export { i as a }
import * as /* [auto-meaningful-name] */$_316 from "./316"
function i(e, t) {
  try {
    for (var n = e, r = [], i = 0, a = 0, /* [auto-meaningful-name] */$length = " > ".length, c = undefined; n && i++ < 5 && !("html" === (c = o(n, t)) || i > 1 && a + r.length * $length + c.length >= 80);) {
      r.push(c)
      a += c.length
      n = n.parentNode
    }
    return r.reverse().join(" > ")
  } catch (u) {
    return "<unknown>"
  }
}
function o(e, t) {
  var n
  var i
  var /* [auto-meaningful-name] */l$className
  var a
  var s
  var c
  var u
  var l = e
  var f = []
  if (!l || !l.tagName) {
    return ""
  }
  f.push(l.tagName.toLowerCase())
  var d = (null === (n = t) || undefined === n ? undefined : n.length) ? t.filter(function (e) {
    return l.getAttribute(e)
  }).map(function (e) {
    return [e, l.getAttribute(e)]
  }) : null
  if (null === (i = d) || undefined === i ? undefined : i.length) {
    d.forEach(function (e) {
      f.push("[" + e[0] + "=\"" + e[1] + "\"]")
    })
  } else if (l.id && f.push("#" + l.id), (l$className = l.className) && $_316.h(l$className)) {
    for (a = l$className.split(/\s+/), u = 0; u < a.length; u++) {
      f.push("." + a[u])
    }
  }
  var h = ["type", "name", "title", "alt"]
  for (u = 0; u < h.length; u++) {
    s = h[u]
    if (c = l.getAttribute(s)) {
      f.push("[" + s + "=\"" + c + "\"]")
    }
  }
  return f.join("")
}
export default i
