/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：939
 */

"use strict"

export { c as b }
export { u as c }
export { l as d }
export { f as a }
import * as /* [auto-meaningful-name] */Module_365 from /* 365 */"./365"
import * as /* [auto-meaningful-name] */Module_524 from /* 524 */"./524"
var o = {
  nowSeconds: function () {
    return Date.now() / 1e3
  }
}
var a = Module_524.b() ? function () {
  try {
    return Module_524.a(module, "perf_hooks").performance
  } catch (t) {
    return
  }
}() : function () {
  var /* [auto-meaningful-name] */Module_365$b$performance = Module_365.b().performance
  if (Module_365$b$performance && Module_365$b$performance.now) {
    return {
      now: function () {
        return Module_365$b$performance.now()
      },
      timeOrigin: Date.now() - Module_365$b$performance.now()
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
  var /* [auto-meaningful-name] */Module_365$b$performance = Module_365.b().performance
  if (Module_365$b$performance && Module_365$b$performance.now) {
    var t = Module_365$b$performance.now()
    var n = Date.now()
    var i = Module_365$b$performance.timeOrigin ? Math.abs(Module_365$b$performance.timeOrigin + t - n) : 36e5
    var o = i < 36e5
    var a = Module_365$b$performance.timing && Module_365$b$performance.timing.navigationStart
    var s = "number" === typeof a ? Math.abs(a + t - n) : 36e5
    return o || s < 36e5 ? i <= s ? ("timeOrigin", Module_365$b$performance.timeOrigin) : ("navigationStart", a) : ("dateNow", n)
  }
  "none"
}()
export default f
