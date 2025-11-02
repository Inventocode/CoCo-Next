/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：423
 */

var r
var o
var i
var a = require("../../1738/1209")
var s = require("../../1736/194")
var c = require("../../1738/231")
var l = require("../../1740/422")
var u = require("../332")
var d = require("./1055")
var p = require("../../1541/933")
var f = require("../../1541/816")
var s$WeakMap = s.WeakMap
if (a || d.state) {
  var m = d.state || (d.state = new s$WeakMap())
  var m$get = m.get
  var m$has = m.has
  var m$set = m.set
  r = function (e, t) {
    if (m$has.call(m, e)) {
      throw new TypeError("Object already initialized")
    }
    t.facade = e
    m$set.call(m, e, t)
    return t
  }
  o = function (e) {
    return m$get.call(m, e) || {}
  }
  i = function (e) {
    return m$has.call(m, e)
  }
} else {
  var b = p("state")
  f[b] = true
  r = function (e, t) {
    if (u(e, b)) {
      throw new TypeError("Object already initialized")
    }
    t.facade = e
    l(e, b, t)
    return t
  }
  o = function (e) {
    return u(e, b) ? e[b] : {}
  }
  i = function (e) {
    return u(e, b)
  }
}
module.exports = {
  set: r,
  get: o,
  has: i,
  enforce: function (e) {
    return i(e) ? o(e) : r(e, {})
  },
  getterFor: function (e) {
    return function (t) {
      var n
      if (!c(t) || (n = o(t)).type !== e) {
        throw TypeError("Incompatible receiver, " + e + " required")
      }
      return n
    }
  }
}
