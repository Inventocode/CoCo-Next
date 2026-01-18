/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1033
 */

"use strict"

export { s as a }
import * as /* [auto-meaningful-name] */$$_2680_466 from "../2680/466"
function i(e) {
  return e.attachTo ? e.attachTo : document.querySelector("head") || document.body
}
function o(e) {
  var /* [auto-meaningful-name] */n$csp
  var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {}
  if (!$$_2680_466.a()) {
    return null
  }
  var /* [auto-meaningful-name] */n$csp1
  var a = document.createElement("style")
  if (null === (n$csp = n.csp) || undefined === n$csp ? undefined : n$csp.nonce) {
    a.nonce = null === (n$csp1 = n.csp) || undefined === n$csp1 ? undefined : n$csp1.nonce
  }
  a.innerHTML = e
  var s = i(n)
  var /* [auto-meaningful-name] */s$firstChild = s.firstChild
  if (n.prepend && s.prepend) {
    s.prepend(a)
  } else {
    if (n.prepend && s$firstChild) {
      s.insertBefore(a, s$firstChild)
    } else {
      s.appendChild(a)
    }
  }
  return a
}
var a = new Map()
function s(e, t) {
  var n = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : {}
  var r = i(n)
  if (!a.has(r)) {
    var s = o("", n)
    var /* [auto-meaningful-name] */s$parentNode = s.parentNode
    a.set(r, s$parentNode)
    s$parentNode.removeChild(s)
  }
  var u = Array.from(a.get(r).children).find(function (e) {
    return "STYLE" === e.tagName && e["rc-util-key"] === t
  })
  if (u) {
    var /* [auto-meaningful-name] */n$csp
    var /* [auto-meaningful-name] */n$csp1
    var /* [auto-meaningful-name] */n$csp2
    if ((null === (n$csp = n.csp) || undefined === n$csp ? undefined : n$csp.nonce) && u.nonce !== (null === (n$csp1 = n.csp) || undefined === n$csp1 ? undefined : n$csp1.nonce)) {
      u.nonce = null === (n$csp2 = n.csp) || undefined === n$csp2 ? undefined : n$csp2.nonce
    }
    if (u.innerHTML !== e) {
      u.innerHTML = e
    }
    return u
  }
  var h = o(e, n)
  h["rc-util-key"] = t
  return h
}
export default s
