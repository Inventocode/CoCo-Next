/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：182
 */

"use strict"

var n = require("../115")
var o = require("../63")
var i = require("./463")
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
  function e(e, r) {
    if (undefined === e) {
      e = undefined
    }
    if (undefined === r) {
      r = undefined
    }
    var n = t.call(this, r) || this
    n.index = e
    n.message = r
    return n
  }
  a(e, t)
  e.kind = "ArrayIndexOutOfBoundsException"
  return e
}(i.a)
var s = function (t) {
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
var c = function () {
  function t() {}
  t.fill = function (t, e) {
    for (var r = 0, /* [auto-meaningful-name] */t$length = t.length; r < t$length; r++) {
      t[r] = e
    }
  }
  t.fillWithin = function (e, r, n, o) {
    t.rangeCheck(e.length, r, n)
    for (var i = r; i < n; i++) {
      e[i] = o
    }
  }
  t.rangeCheck = function (t, e, r) {
    if (e > r) {
      throw new o.a("fromIndex(" + e + ") > toIndex(" + r + ")")
    }
    if (e < 0) {
      throw new u(e)
    }
    if (r > t) {
      throw new u(r)
    }
  }
  t.asList = function () {
    for (var t = [], e = 0; e < arguments.length; e++) {
      t[e] = arguments[e]
    }
    return t
  }
  t.create = function (t, e, r) {
    return Array.from({
      length: t
    }).map(function (t) {
      return Array.from({
        length: e
      }).fill(r)
    })
  }
  t.createInt32Array = function (t, e, r) {
    return Array.from({
      length: t
    }).map(function (t) {
      return Int32Array.from({
        length: e
      }).fill(r)
    })
  }
  t.equals = function (t, e) {
    if (!t) {
      return false
    }
    if (!e) {
      return false
    }
    if (!t.length) {
      return false
    }
    if (!e.length) {
      return false
    }
    if (t.length !== e.length) {
      return false
    }
    for (var r = 0, /* [auto-meaningful-name] */t$length = t.length; r < t$length; r++) {
      if (t[r] !== e[r]) {
        return false
      }
    }
    return true
  }
  t.hashCode = function (t) {
    var e
    var /* [auto-meaningful-name] */o$return
    if (null === t) {
      return 0
    }
    var n = 1
    try {
      for (var o = s(t), i = o.next(); !i.done; i = o.next()) {
        n = 31 * n + i.value
      }
    } catch (a) {
      e = {
        error: a
      }
    } finally {
      try {
        if (i && !i.done && (o$return = o.return)) {
          o$return.call(o)
        }
      } finally {
        if (e) {
          throw e.error
        }
      }
    }
    return n
  }
  t.fillUint8Array = function (t, e) {
    for (var r = 0; r !== t.length; r++) {
      t[r] = e
    }
  }
  t.copyOf = function (t, e) {
    return t.slice(0, e)
  }
  t.copyOfUint8Array = function (t, e) {
    if (t.length <= e) {
      var r = new Uint8Array(e)
      r.set(t)
      return r
    }
    return t.slice(0, e)
  }
  t.copyOfRange = function (t, e, r) {
    var o = r - e
    var i = new Int32Array(o)
    n.a.arraycopy(t, e, i, 0, o)
    return i
  }
  t.binarySearch = function (e, r, n) {
    if (undefined === n) {
      n = t.numberComparator
    }
    for (var o = 0, i = e.length - 1; o <= i;) {
      var a = i + o >> 1
      var u = n(r, e[a])
      if (u > 0) {
        o = a + 1
      } else {
        if (!(u < 0)) {
          return a
        }
        i = a - 1
      }
    }
    return -o - 1
  }
  t.numberComparator = function (t, e) {
    return t - e
  }
  return t
}()
exports.a = c
