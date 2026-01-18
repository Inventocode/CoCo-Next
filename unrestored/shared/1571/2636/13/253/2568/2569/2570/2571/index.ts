/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2571
 */

var r = require("../1459/index")
var i = require("../../../../../797/101/2538/2539/2540/1454")
var o = require("./1457/index")
var a = require("../../../../../797/101/2538/2539/2540/1455")
var s = require("../../../../../797/101/2538/2539/2540/1458/index")
var c = require("./1168/index")
var u = require("../../../../../797/101/2466/2477/451")
var l = require("./2572")
var f = require("../../../../../797/101/2538/2539/2540/992/index")
var d = require("./1175")
var h = require("../../../../2583/2584/479")
var p = require("../../../../../797/101/2466/1436/index")
var _ = require("./1170/index")
var A = require("../1460")
var g = require("./2573")
module.exports = function (e, t, n, v, m, y, b) {
  var w = A(e, n)
  var E = A(t, n)
  var x = b.get(E)
  if (x) {
    r(e, n, x)
  } else {
    var C = y ? y(w, E, n + "", e, t, b) : undefined
    var O = undefined === C
    if (O) {
      var k = u(E)
      var S = !k && f(E)
      var T = !k && !S && _(E)
      C = E
      if (k || S || T) {
        if (u(w)) {
          C = w
        } else {
          if (l(w)) {
            C = a(w)
          } else {
            if (S) {
              O = false
              C = i(E, true)
            } else {
              if (T) {
                O = false
                C = o(E, true)
              } else {
                C = []
              }
            }
          }
        }
      } else {
        if (p(E) || c(E)) {
          C = w
          if (c(w)) {
            C = g(w)
          } else {
            if (!(h(w) && !d(w))) {
              C = s(E)
            }
          }
        } else {
          O = false
        }
      }
    }
    if (O) {
      b.set(E, C)
      m(C, E, v, y, b)
      b.delete(E)
    }
    r(e, n, C)
  }
}
