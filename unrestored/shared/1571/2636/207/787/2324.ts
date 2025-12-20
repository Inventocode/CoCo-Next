/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2324
 */

"use strict"

module.exports = function () {
  var e = Object.create(null)
  return Object.freeze({
    on: function (t, n) {
      if (t in e) {
        e[t].push(n)
      } else {
        e[t] = [n]
      }
    },
    emit: function (t) {
      for (var /* [auto-meaningful-name] */arguments$length = arguments.length, r = new Array(arguments$length > 1 ? arguments$length - 1 : 0), i = 1; i < arguments$length; i++) {
        r[i - 1] = arguments[i]
      }
      if (t in e) {
        e[t].forEach(function (e) {
          return e.apply(undefined, r)
        })
      }
    },
    eventNames: function () {
      return Object.keys(e)
    }
  })
}
