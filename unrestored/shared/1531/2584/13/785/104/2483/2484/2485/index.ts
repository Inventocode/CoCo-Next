/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2485
 */

var r = require("../../../../../254/2513/2514/2515/973/index")
var i = require("../../../../../254/2533/2534/2535/2536/1410")
var o = require("./1411")
var a = require("./2486")
var s = require("./2487")
var c = require("../../../../../254/2513/2514/2515/2516/1413")
var u = require("../../../../../254/2513/2514/2515/2516/1414")
var l = require("./2490")
var f = require("./2491/index")
var d = require("./1401/index")
var h = require("./2492")
var p = require("./978/index")
var _ = require("./2493")
var A = require("./2494/index")
var g = require("../../../../../254/2513/2514/2515/2516/1417/index")
var v = require("../../../2411/2422/446")
var m = require("../../../../../254/2513/2514/2515/2516/971/index")
var y = require("./2499/index")
var b = require("../../../../../254/2533/1420/475")
var w = require("./2501/index")
var E = require("../../../2411/1142/1390/850/index")
var x = require("../../../../../254/2513/2514/2515/853/index")
var C = {}
C["[object Arguments]"] = C["[object Array]"] = C["[object ArrayBuffer]"] = C["[object DataView]"] = C["[object Boolean]"] = C["[object Date]"] = C["[object Float32Array]"] = C["[object Float64Array]"] = C["[object Int8Array]"] = C["[object Int16Array]"] = C["[object Int32Array]"] = C["[object Map]"] = C["[object Number]"] = C["[object Object]"] = C["[object RegExp]"] = C["[object Set]"] = C["[object String]"] = C["[object Symbol]"] = C["[object Uint8Array]"] = C["[object Uint8ClampedArray]"] = C["[object Uint16Array]"] = C["[object Uint32Array]"] = true
C["[object Error]"] = C["[object Function]"] = C["[object WeakMap]"] = false
module.exports = function e(t, n, O, k, S, T) {
  var B
  var D = 1 & n
  var I = 2 & n
  var F = 4 & n
  if (O) {
    B = S ? O(t, k, S, T) : O(t)
  }
  if (undefined !== B) {
    return B
  }
  if (!b(t)) {
    return t
  }
  var R = v(t)
  if (R) {
    B = _(t)
    if (!D) {
      return u(t, B)
    }
  } else {
    var P = p(t)
    var N = "[object Function]" == P || "[object GeneratorFunction]" == P
    if (m(t)) {
      return c(t, D)
    }
    if ("[object Object]" == P || "[object Arguments]" == P || N && !S) {
      B = I || N ? {} : g(t)
      if (!D) {
        return I ? f(t, s(B, t)) : l(t, a(B, t))
      }
    } else {
      if (!C[P]) {
        return S ? t : {}
      }
      B = A(t, P, D)
    }
  }
  if (!T) {
    T = new r()
  }
  var M = T.get(t)
  if (M) {
    return M
  }
  T.set(t, B)
  if (w(t)) {
    t.forEach(function (r) {
      B.add(e(r, n, O, r, t, T))
    })
  } else {
    if (y(t)) {
      t.forEach(function (r, i) {
        B.set(i, e(r, n, O, i, t, T))
      })
    }
  }
  var j = R ? undefined : (F ? I ? h : d : I ? x : E)(t)
  i(j || t, function (r, i) {
    if (j) {
      r = t[i = r]
    }
    o(B, i, e(r, n, O, i, t, T))
  })
  return B
}
