/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2494
 */

var r = require("./1157/index")
var i = require("./2495")
var o = require("./2496")
var a = require("./2497")
var s = require("../../../../../../254/2513/2514/2515/2516/1416")
module.exports = function (e, t, n) {
  var e$constructor = e.constructor
  switch (t) {
    case "[object ArrayBuffer]":
      return r(e)
    case "[object Boolean]":
    case "[object Date]":
      return new e$constructor(+e)
    case "[object DataView]":
      return i(e, n)
    case "[object Float32Array]":
    case "[object Float64Array]":
    case "[object Int8Array]":
    case "[object Int16Array]":
    case "[object Int32Array]":
    case "[object Uint8Array]":
    case "[object Uint8ClampedArray]":
    case "[object Uint16Array]":
    case "[object Uint32Array]":
      return s(e, n)
    case "[object Map]":
      return new e$constructor()
    case "[object Number]":
    case "[object String]":
      return new e$constructor(e)
    case "[object RegExp]":
      return o(e)
    case "[object Set]":
      return new e$constructor()
    case "[object Symbol]":
      return a(e)
  }
}
