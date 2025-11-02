/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：903
 */

"use strict"

var n = require("../181/index")
var o = require("../181/459")
var i = require("../151")
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
  function e() {
    return null !== t && t.apply(this, arguments) || this
  }
  a(e, t)
  e.kind = "NullPointerException"
  return e
}(i.a)
var s = function () {
  function t() {}
  t.prototype.writeBytes = function (t) {
    this.writeBytesOffset(t, 0, t.length)
  }
  t.prototype.writeBytesOffset = function (t, e, r) {
    if (null == t) {
      throw new u()
    }
    if (e < 0 || e > t.length || r < 0 || e + r > t.length || e + r < 0) {
      throw new o.a()
    }
    if (0 !== r) {
      for (var n = 0; n < r; n++) {
        this.write(t[e + n])
      }
    }
  }
  t.prototype.flush = function () {}
  t.prototype.close = function () {}
  return t
}()
var c = require("../105")
var f = require("../63")
var h = function () {
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
var l = function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this
  }
  h(e, t)
  return e
}(i.a)
var d = require("../117")
var p = function () {
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
var g = function (t) {
  function e(e) {
    if (undefined === e) {
      e = 32
    }
    var r = t.call(this) || this
    r.count = 0
    if (e < 0) {
      throw new f.a("Negative initial size: " + e)
    }
    r.buf = new Uint8Array(e)
    return r
  }
  p(e, t)
  e.prototype.ensureCapacity = function (t) {
    if (t - this.buf.length > 0) {
      this.grow(t)
    }
  }
  e.prototype.grow = function (t) {
    var e = this.buf.length << 1
    if (e - t < 0) {
      e = t
    }
    if (e < 0) {
      if (t < 0) {
        throw new l()
      }
      e = c.a.MAX_VALUE
    }
    this.buf = n.a.copyOfUint8Array(this.buf, e)
  }
  e.prototype.write = function (t) {
    this.ensureCapacity(this.count + 1)
    this.buf[this.count] = t
    this.count += 1
  }
  e.prototype.writeBytesOffset = function (t, e, r) {
    if (e < 0 || e > t.length || r < 0 || e + r - t.length > 0) {
      throw new o.a()
    }
    this.ensureCapacity(this.count + r)
    d.a.arraycopy(t, e, this.buf, this.count, r)
    this.count += r
  }
  e.prototype.writeTo = function (t) {
    t.writeBytesOffset(this.buf, 0, this.count)
  }
  e.prototype.reset = function () {
    this.count = 0
  }
  e.prototype.toByteArray = function () {
    return n.a.copyOfUint8Array(this.buf, this.count)
  }
  e.prototype.size = function () {
    return this.count
  }
  e.prototype.toString = function (t) {
    return t ? "string" === typeof t ? this.toString_string(t) : this.toString_number(t) : this.toString_void()
  }
  e.prototype.toString_void = function () {
    return new String(this.buf).toString()
  }
  e.prototype.toString_string = function (t) {
    return new String(this.buf).toString()
  }
  e.prototype.toString_number = function (t) {
    return new String(this.buf).toString()
  }
  e.prototype.close = function () {}
  return e
}(s)
exports.a = g
