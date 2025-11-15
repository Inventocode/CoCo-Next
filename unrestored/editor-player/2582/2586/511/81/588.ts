/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：588
 */

"use strict"

var n = require("./502")
var o = require("./180")
var i = require("./452")
var a = require("./37")
var u = function () {
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
var s = function (t) {
  function e() {
    return null !== t && t.apply(this, arguments) || this
  }
  u(e, t)
  e.prototype.sampleGrid = function (t, e, r, n, o, a, u, s, c, f, h, l, d, p, g, y, w, v, _) {
    var m = i.a.quadrilateralToQuadrilateral(n, o, a, u, s, c, f, h, l, d, p, g, y, w, v, _)
    return this.sampleGridWithTransform(t, e, r, m)
  }
  e.prototype.sampleGridWithTransform = function (t, e, r, i) {
    if (e <= 0 || r <= 0) {
      throw new a.a()
    }
    for (var u = new o.a(e, r), s = new Float32Array(2 * e), c = 0; c < r; c++) {
      for (var /* [auto-meaningful-name] */s$length = s.length, h = c + .5, l = 0; l < s$length; l += 2) {
        s[l] = l / 2 + .5
        s[l + 1] = h
      }
      i.transformPoints(s)
      n.a.checkAndNudgePoints(t, s)
      try {
        for (l = 0; l < s$length; l += 2) {
          if (t.get(Math.floor(s[l]), Math.floor(s[l + 1]))) {
            u.set(l / 2, c)
          }
        }
      } catch (d) {
        throw new a.a()
      }
    }
    return u
  }
  return e
}(n.a)
exports.a = s
