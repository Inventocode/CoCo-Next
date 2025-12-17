/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：598
 */

"use strict"

var n = require("./182/index")
var o = require("./108")
var i = function (t) {
  var e = "function" === typeof Symbol && Symbol.iterator
  var r = e && t[e]
  var n = 0
  if (r) {
    return r.call(t)
  }
  if (t && "number" === typeof t.length) {
    return {
      next: function () {
        if (t && n >= t.length) {
          t = undefined
        }
        return {
          value: t && t[n++],
          done: !t
        }
      }
    }
  }
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
var a = function () {
  function t(t, e) {
    this.width = t
    this.height = e
    for (var r = new Array(e), n = 0; n !== e; n++) {
      r[n] = new Uint8Array(t)
    }
    this.bytes = r
  }
  t.prototype.getHeight = function () {
    return this.height
  }
  t.prototype.getWidth = function () {
    return this.width
  }
  t.prototype.get = function (t, e) {
    return this.bytes[e][t]
  }
  t.prototype.getArray = function () {
    return this.bytes
  }
  t.prototype.setNumber = function (t, e, r) {
    this.bytes[e][t] = r
  }
  t.prototype.setBoolean = function (t, e, r) {
    this.bytes[e][t] = r ? 1 : 0
  }
  t.prototype.clear = function (t) {
    var e
    var /* [auto-meaningful-name] */o$return
    try {
      for (var o = i(this.bytes), a = o.next(); !a.done; a = o.next()) {
        var /* [auto-meaningful-name] */a$value = a.value
        n.a.fill(a$value, t)
      }
    } catch (s) {
      e = {
        error: s
      }
    } finally {
      try {
        if (a && !a.done && (o$return = o.return)) {
          o$return.call(o)
        }
      } finally {
        if (e) {
          throw e.error
        }
      }
    }
  }
  t.prototype.equals = function (e) {
    if (!(e instanceof t)) {
      return false
    }
    var r = e
    if (this.width !== r.width) {
      return false
    }
    if (this.height !== r.height) {
      return false
    }
    for (var n = 0, /* [auto-meaningful-name] */this$height = this.height; n < this$height; ++n) {
      for (var i = this.bytes[n], a = r.bytes[n], u = 0, /* [auto-meaningful-name] */this$width = this.width; u < this$width; ++u) {
        if (i[u] !== a[u]) {
          return false
        }
      }
    }
    return true
  }
  t.prototype.toString = function () {
    for (var t = new o.a(), e = 0, /* [auto-meaningful-name] */this$height = this.height; e < this$height; ++e) {
      for (var n = this.bytes[e], i = 0, /* [auto-meaningful-name] */this$width = this.width; i < this$width; ++i) {
        switch (n[i]) {
          case 0:
            t.append(" 0")
            break
          case 1:
            t.append(" 1")
            break
          default:
            t.append("  ")
        }
      }
      t.append("\n")
    }
    return t.toString()
  }
  return t
}()
exports.a = a
