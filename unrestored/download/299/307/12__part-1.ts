/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：12__part-1
 */

"use strict"

var r
import * as /* [auto-meaningful-name] */Module_5 from /* 5 */"./5"
import * as /* [auto-meaningful-name] */Module_37 from /* 37 */"./37"
import * as /* [auto-meaningful-name] */Module_22 from /* 22 */"./22"
var s = Module_22.a()
var u = ["debug", "info", "warn", "error", "log", "assert"]
function c(e) {
  var t = Module_22.a()
  if (!("console" in t)) {
    return e()
  }
  var /* [auto-meaningful-name] */t$console = t.console
  var r = {}
  u.forEach(function (e) {
    var i = t$console[e] && t$console[e].__sentry_original__
    if (e in t.console && i) {
      r[e] = t$console[e]
      t$console[e] = i
    }
  })
  try {
    return e()
  } finally {
    Object.keys(r).forEach(function (e) {
      t$console[e] = r[e]
    })
  }
}
function l() {
  var e = false
  var t = {
    enable: function () {
      e = true
    },
    disable: function () {
      e = false
    }
  }
  if (Module_37.a) {
    u.forEach(function (n) {
      t[n] = function () {
        for (var t = [], r = 0; r < arguments.length; r++) {
          t[r] = arguments[r]
        }
        if (e) {
          c(function () {
            var /* [auto-meaningful-name] */s$console;
            (s$console = s.console)[n].apply(s$console, Module_5.d(["Sentry Logger [" + n + "]:"], t))
          })
        }
      }
    })
  } else {
    u.forEach(function (e) {
      t[e] = function () {}
    })
  }
  return t
}
r = Module_37.a ? Module_22.b("logger", l) : l()
export { r }
export { u }
export { c }
