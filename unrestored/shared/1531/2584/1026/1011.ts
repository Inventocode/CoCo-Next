/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1011
 */

"use strict"

export { s as a }
import /* [auto-meaningful-name] */$$_2627_462 = require("../2627/462")
function i(e) {
  return e.attachTo ? e.attachTo : document.querySelector("head") || document.body
}
function o(e) {
  var /* [auto-meaningful-name] */n$csp
  var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {}
  if (!$$_2627_462.a()) {
    return null
  }
  var /* [auto-meaningful-name] */_n$csp
  var a = document.createElement("style")
  if (null === (n$csp = n.csp) || undefined === n$csp ? undefined : n$csp.nonce) {
    a.nonce = null === (_n$csp = n.csp) || undefined === _n$csp ? undefined : _n$csp.nonce
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
    var /* [auto-meaningful-name] */_n$csp2
    var /* [auto-meaningful-name] */_n$csp3
    if ((null === (n$csp = n.csp) || undefined === n$csp ? undefined : n$csp.nonce) && u.nonce !== (null === (_n$csp2 = n.csp) || undefined === _n$csp2 ? undefined : _n$csp2.nonce)) {
      u.nonce = null === (_n$csp3 = n.csp) || undefined === _n$csp3 ? undefined : _n$csp3.nonce
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
