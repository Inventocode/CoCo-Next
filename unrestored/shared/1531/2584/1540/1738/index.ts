/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1738
 */

"use strict"

var r
var o = require("../1736/194")
var i = require("./752")
var a = require("./709")
var s = require("../1739/938")
var c = require("../1739/1250")
var l = require("./231")
var require$$1745423Index$enforce = require("../1745/423/index").enforce
var d = require("./1209")
var p = !o.ActiveXObject && "ActiveXObject" in o
var object$isExtensible = Object.isExtensible
var h = function (e) {
  return function () {
    return e(this, arguments.length ? arguments[0] : undefined)
  }
}
var m = module.exports = s("WeakMap", h, c)
if (d && p) {
  r = c.getConstructor(h, "WeakMap", true)
  a.enable()
  var m$prototype = m.prototype
  var m$prototype$delete = m$prototype.delete
  var m$prototype$has = m$prototype.has
  var m$prototype$get = m$prototype.get
  var m$prototype$set = m$prototype.set
  i(m$prototype, {
    delete: function (e) {
      if (l(e) && !object$isExtensible(e)) {
        var t = require$$1745423Index$enforce(this)
        if (!t.frozen) {
          t.frozen = new r()
        }
        return m$prototype$delete.call(this, e) || t.frozen.delete(e)
      }
      return m$prototype$delete.call(this, e)
    },
    has: function (e) {
      if (l(e) && !object$isExtensible(e)) {
        var t = require$$1745423Index$enforce(this)
        if (!t.frozen) {
          t.frozen = new r()
        }
        return m$prototype$has.call(this, e) || t.frozen.has(e)
      }
      return m$prototype$has.call(this, e)
    },
    get: function (e) {
      if (l(e) && !object$isExtensible(e)) {
        var t = require$$1745423Index$enforce(this)
        if (!t.frozen) {
          t.frozen = new r()
        }
        return m$prototype$has.call(this, e) ? m$prototype$get.call(this, e) : t.frozen.get(e)
      }
      return m$prototype$get.call(this, e)
    },
    set: function (e, t) {
      if (l(e) && !object$isExtensible(e)) {
        var n = require$$1745423Index$enforce(this)
        if (!n.frozen) {
          n.frozen = new r()
        }
        if (m$prototype$has.call(this, e)) {
          m$prototype$set.call(this, e, t)
        } else {
          n.frozen.set(e, t)
        }
      } else {
        m$prototype$set.call(this, e, t)
      }
      return this
    }
  })
}
