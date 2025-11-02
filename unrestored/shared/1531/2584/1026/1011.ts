/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1011
 */

"use strict"

export { s as a }
import r = require("../2627/462");
function i(e) {
  return e.attachTo ? e.attachTo : document.querySelector("head") || document.body
}
function o(e) {
  var /* [auto-meaningful-name] */_n$csp2
  var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {}
  if (!r.a()) {
    return null
  }
  var /* [auto-meaningful-name] */n$csp
  var a = document.createElement("style")
  if (null === (_n$csp2 = n.csp) || undefined === _n$csp2 ? undefined : _n$csp2.nonce) {
    a.nonce = null === (n$csp = n.csp) || undefined === n$csp ? undefined : n$csp.nonce
  }
  a.innerHTML = e
  var s = i(n)
  var s$firstChild = s.firstChild
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
    var s$parentNode = s.parentNode
    a.set(r, s$parentNode)
    s$parentNode.removeChild(s)
  }
  var u = Array.from(a.get(r).children).find(function (e) {
    return "STYLE" === e.tagName && e["rc-util-key"] === t
  })
  if (u) {
    var /* [auto-meaningful-name] */_n$csp4
    var /* [auto-meaningful-name] */_n$csp6
    var /* [auto-meaningful-name] */n$csp
    if ((null === (_n$csp4 = n.csp) || undefined === _n$csp4 ? undefined : _n$csp4.nonce) && u.nonce !== (null === (_n$csp6 = n.csp) || undefined === _n$csp6 ? undefined : _n$csp6.nonce)) {
      u.nonce = null === (n$csp = n.csp) || undefined === n$csp ? undefined : n$csp.nonce
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
