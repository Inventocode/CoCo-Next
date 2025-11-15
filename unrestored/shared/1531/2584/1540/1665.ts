/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1665
 */

var r = require("./1698/86/index")
var o = require("./1541/241")
var i = require("./1541/231")
var a = require("./1658/1241")
var s = require("./1541/167")
var c = require("./1541/300/index")
var l = require("./1684/386")
var u = require("./1585/495")
var d = require("./1541/627")
r({
  target: "Reflect",
  stat: true,
  forced: s(function () {
    var e = function () {}
    var t = c.f(new e(), "a", {
      configurable: true
    })
    return false !== Reflect.set(e.prototype, "a", 1, t)
  })
}, {
  set: function e(t, n, r) {
    var s
    var p
    var /* [auto-meaningful-name] */m$set
    var h = arguments.length < 4 ? t : arguments[3]
    var m = l.f(o(t), n)
    if (!m) {
      if (i(p = u(t))) {
        return e(p, n, r, h)
      }
      m = d(0)
    }
    if (a(m)) {
      if (false === m.writable || !i(h)) {
        return false
      }
      if (s = l.f(h, n)) {
        if (s.get || s.set || false === s.writable) {
          return false
        }
        s.value = r
        c.f(h, n, s)
      } else {
        c.f(h, n, d(0, r))
      }
    } else {
      if (undefined === (m$set = m.set)) {
        return false
      }
      m$set.call(h, r)
    }
    return true
  }
})
