/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1746
 */

"use strict"

var r = /[^\0-\u007E]/
var o = /[.\u3002\uFF0E\uFF61]/g
var i = "Overflow: input needs wider integers to process"
var math$floor = Math.floor
var string$fromCharCode = String.fromCharCode
var c = function (e) {
  return e + 22 + 75 * (e < 26)
}
var l = function (e, t, n) {
  var r = 0
  for (e = n ? math$floor(e / 700) : e >> 1, e += math$floor(e / t); e > 455; r += 36) {
    e = math$floor(e / 35)
  }
  return math$floor(r + 36 * e / (e + 38))
}
var u = function (e) {
  var t
  var n
  var r = []
  var eFunctionEForVarTN0RE$lengthNRVarOE$charCodeAtNIfO55296O56319NRVarIE$charCodeAtNIf5632064512IT$push1023O101023I65536ElseT$pushONElseT$pushOReturnTE$length = (e = function (e) {
    for (var t = [], n = 0, e$length = e.length; n < e$length;) {
      var o = e.charCodeAt(n++)
      if (o >= 55296 && o <= 56319 && n < e$length) {
        var i = e.charCodeAt(n++)
        if (56320 == (64512 & i)) {
          t.push(((1023 & o) << 10) + (1023 & i) + 65536)
        } else {
          t.push(o)
          n--
        }
      } else {
        t.push(o)
      }
    }
    return t
  }(e)).length
  var u = 128
  var d = 0
  var p = 72
  for (t = 0; t < e.length; t++) {
    if ((n = e[t]) < 128) {
      r.push(string$fromCharCode(n))
    }
  }
  var r$length = r.length
  var h = r$length
  for (r$length && r.push("-"); h < eFunctionEForVarTN0RE$lengthNRVarOE$charCodeAtNIfO55296O56319NRVarIE$charCodeAtNIf5632064512IT$push1023O101023I65536ElseT$pushONElseT$pushOReturnTE$length;) {
    var m = 2147483647
    for (t = 0; t < e.length; t++) {
      if ((n = e[t]) >= u && n < m) {
        m = n
      }
    }
    var g = h + 1
    if (m - u > math$floor((2147483647 - d) / g)) {
      throw RangeError(i)
    }
    for (d += (m - u) * g, u = m, t = 0; t < e.length; t++) {
      if ((n = e[t]) < u && ++d > 2147483647) {
        throw RangeError(i)
      }
      if (n == u) {
        for (var _ = d, v = 36;; v += 36) {
          var b = v <= p ? 1 : v >= p + 26 ? 26 : v - p
          if (_ < b) {
            break
          }
          var y = _ - b
          var E = 36 - b
          r.push(string$fromCharCode(c(b + y % E)))
          _ = math$floor(y / E)
        }
        r.push(string$fromCharCode(c(_)))
        p = l(d, g, h == r$length)
        d = 0
        ++h
      }
    }
    ++d
    ++u
  }
  return r.join("")
}
module.exports = function (e) {
  var t
  var n
  var i = []
  var a = e.toLowerCase().replace(o, ".").split(".")
  for (t = 0; t < a.length; t++) {
    n = a[t]
    i.push(r.test(n) ? "xn--" + u(n) : n)
  }
  return i.join(".")
}
