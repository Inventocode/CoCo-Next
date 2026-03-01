/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2639
 */

"use strict"

export { c as a }
export { u as b }
import * as /* [auto-meaningful-name] */Module_395 from /* 395 */"../395"
import * as /* [auto-meaningful-name] */Module_917 from /* 917 */"./917"
var o = {
  nowSeconds: function () {
    return Date.now() / 1e3
  }
}
var a = Module_917.b() ? function () {
  try {
    return Module_917.a(module, "perf_hooks").performance
  } catch (t) {
    return
  }
}() : function () {
  var /* [auto-meaningful-name] */Module_395$e$performance = Module_395.e().performance
  if (Module_395$e$performance && Module_395$e$performance.now) {
    return {
      now: function () {
        return Module_395$e$performance.now()
      },
      timeOrigin: Date.now() - Module_395$e$performance.now()
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
!function () {
  var /* [auto-meaningful-name] */Module_395$e$performance = Module_395.e().performance
  if (Module_395$e$performance && Module_395$e$performance.now) {
    var t = Module_395$e$performance.now()
    var n = Date.now()
    var i = Module_395$e$performance.timeOrigin ? Math.abs(Module_395$e$performance.timeOrigin + t - n) : 36e5
    var o = i < 36e5
    var a = Module_395$e$performance.timing && Module_395$e$performance.timing.navigationStart
    var s = "number" === typeof a ? Math.abs(a + t - n) : 36e5
    return o || s < 36e5 ? i <= s ? ("timeOrigin", Module_395$e$performance.timeOrigin) : ("navigationStart", a) : ("dateNow", n)
  }
  "none"
}()
export default c
