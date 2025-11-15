/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：926
 */

"use strict"

export { c as b }
export { u as c }
export { l as d }
export { f as a }
import /* [auto-meaningful-name] */$_364 = require("./364")
import /* [auto-meaningful-name] */$_521 = require("./521")
var o = {
  nowSeconds: function () {
    return Date.now() / 1e3
  }
}
var a = $_521.b() ? function () {
  try {
    return $_521.a(module, "perf_hooks").performance
  } catch (t) {
    return
  }
}() : function () {
  var /* [auto-meaningful-name] */$_364$b$performance = $_364.b().performance
  if ($_364$b$performance && $_364$b$performance.now) {
    return {
      now: function () {
        return $_364$b$performance.now()
      },
      timeOrigin: Date.now() - $_364$b$performance.now()
    }
  }
}()
var s = undefined === a ? o : {
  nowSeconds: function () {
    return (a.timeOrigin + a.now()) / 1e3
  }
}
var c = o.nowSeconds.bind(o)
var u = s.nowSeconds.bind(s)
var l = u
var f = function () {
  var /* [auto-meaningful-name] */$_364$b$performance = $_364.b().performance
  if ($_364$b$performance && $_364$b$performance.now) {
    var t = $_364$b$performance.now()
    var n = Date.now()
    var i = $_364$b$performance.timeOrigin ? Math.abs($_364$b$performance.timeOrigin + t - n) : 36e5
    var o = i < 36e5
    var a = $_364$b$performance.timing && $_364$b$performance.timing.navigationStart
    var s = "number" === typeof a ? Math.abs(a + t - n) : 36e5
    return o || s < 36e5 ? i <= s ? ("timeOrigin", $_364$b$performance.timeOrigin) : ("navigationStart", a) : ("dateNow", n)
  }
  "none"
}()
export default f
