/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：709
 */

var r = require("../1698/86/index")
var o = require("../1541/816")
var i = require("../1541/231")
var a = require("../1541/332")
var /* [auto-meaningful-name] */require$$_1541_300_index$f = require("../1541/300/index").f
var c = require("../1541/631/index")
var l = require("../1541/1062")
var u = require("../1541/815")
var d = require("./826")
var p = false
var f = u("meta")
var h = 0
var m = Object.isExtensible || function () {
  return true
}
var g = function (e) {
  require$$_1541_300_index$f(e, f, {
    value: {
      objectID: "O" + h++,
      weakData: {}
    }
  })
}
var _ = module.exports = {
  enable: function () {
    _.enable = function () {}
    p = true
    var e = c.f
    var /* [auto-meaningful-name] */$splice = [].splice
    var n = {}
    n[f] = 1
    if (e(n).length) {
      c.f = function (n) {
        for (var r = e(n), o = 0, /* [auto-meaningful-name] */r$length = r.length; o < r$length; o++) {
          if (r[o] === f) {
            $splice.call(r, o, 1)
            break
          }
        }
        return r
      }
      r({
        target: "Object",
        stat: true,
        forced: true
      }, {
        getOwnPropertyNames: l.f
      })
    }
  },
  fastKey: function (e, t) {
    if (!i(e)) {
      return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e
    }
    if (!a(e, f)) {
      if (!m(e)) {
        return "F"
      }
      if (!t) {
        return "E"
      }
      g(e)
    }
    return e[f].objectID
  },
  getWeakData: function (e, t) {
    if (!a(e, f)) {
      if (!m(e)) {
        return true
      }
      if (!t) {
        return false
      }
      g(e)
    }
    return e[f].weakData
  },
  onFreeze: function (e) {
    if (d && p && m(e) && !a(e, f)) {
      g(e)
    }
    return e
  }
}
o[f] = true
