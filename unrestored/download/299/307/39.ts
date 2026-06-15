/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：39
 */

"use strict"

export { u as b }
export { c }
export { l as d }
export { f as a }
import * as /* [auto-meaningful-name] */Module_22 from /* 22 */"./22"
import * as /* [auto-meaningful-name] */Module_33 from /* 33 */"../185/33/index"
var o = {
  nowSeconds: function () {
    return Date.now() / 1e3
  }
}
var a = Module_33.b() ? function () {
  try {
    return Module_33.a(module, "perf_hooks").performance
  } catch (t) {
    return
  }
}() : function () {
  var /* [auto-meaningful-name] */Module_22$a$performance = Module_22.a().performance
  if (Module_22$a$performance && Module_22$a$performance.now) {
    return {
      now: function () {
        return Module_22$a$performance.now()
      },
      timeOrigin: Date.now() - Module_22$a$performance.now()
    }
  }
}()
var s = undefined === a ? o : {
  nowSeconds: function () {
    return (a.timeOrigin + a.now()) / 1e3
  }
}
var u = o.nowSeconds.bind(o)
var c = s.nowSeconds.bind(s)
var l = c
var f = function () {
  var /* [auto-meaningful-name] */Module_22$a$performance = Module_22.a().performance
  if (Module_22$a$performance && Module_22$a$performance.now) {
    var t = 36e5
    var n = Module_22$a$performance.now()
    var i = Date.now()
    var o = Module_22$a$performance.timeOrigin ? Math.abs(Module_22$a$performance.timeOrigin + n - i) : t
    var a = o < t
    var s = Module_22$a$performance.timing && Module_22$a$performance.timing.navigationStart
    var u = "number" === typeof s ? Math.abs(s + n - i) : t
    return a || u < t ? o <= u ? Module_22$a$performance.timeOrigin : s : i
  }
  0
}()
export default f
