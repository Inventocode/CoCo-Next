/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：151
 */

"use strict"

function n(t, e) {
  if (undefined === e) {
    e = t.constructor
  }
  var error$captureStackTrace = Error.captureStackTrace
  if (error$captureStackTrace) {
    error$captureStackTrace(t, e)
  }
}
var o = function () {
  var t = function (e, r) {
    return (t = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e
    } || function (t, e) {
      for (var r in e) if (e.hasOwnProperty(r)) {
        t[r] = e[r]
      }
    })(e, r)
  }
  return function (e, r) {
    function n() {
      this.constructor = e
    }
    t(e, r)
    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n())
  }
}()
var i = function (t) {
  function e(e) {
    var this$constructor = this.constructor
    var o = t.call(this, e) || this
    Object.defineProperty(o, "name", {
      value: this$constructor.name,
      enumerable: false,
      configurable: true
    });
    (function (t, e) {
      var object$setPrototypeOf = Object.setPrototypeOf
      if (object$setPrototypeOf) {
        object$setPrototypeOf(t, e)
      } else {
        t.__proto__ = e
      }
    })(o, this$constructor.prototype)
    n(o)
    return o
  }
  o(e, t)
  return e
}(Error)
var a = function () {
  var t = function (e, r) {
    return (t = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e
    } || function (t, e) {
      for (var r in e) if (e.hasOwnProperty(r)) {
        t[r] = e[r]
      }
    })(e, r)
  }
  return function (e, r) {
    function n() {
      this.constructor = e
    }
    t(e, r)
    e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n())
  }
}()
var u = function (t) {
  function e(e) {
    if (undefined === e) {
      e = undefined
    }
    var r = t.call(this, e) || this
    r.message = e
    return r
  }
  a(e, t)
  e.prototype.getKind = function () {
    return this.constructor.kind
  }
  e.kind = "Exception"
  return e
}(i)
exports.a = u
