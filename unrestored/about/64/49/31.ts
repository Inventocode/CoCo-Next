/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：31
 */

"use strict"

export { u as b }
export { l as c }
export { c as d }
export { f as a }
import * as /* [auto-meaningful-name] */Module_14 from /* 14 */"./14"
import * as /* [auto-meaningful-name] */Module_19 from /* 19 */"./19"
var o = {
  nowSeconds: function () {
    return Date.now() / 1e3
  }
}
var a = Module_19.b() ? function () {
  try {
    return Module_19.a(module, "perf_hooks").performance
  } catch (t) {
    return
  }
}() : function () {
  var /* [auto-meaningful-name] */Module_14$e$performance = Module_14.e().performance
  if (Module_14$e$performance && Module_14$e$performance.now) {
    return {
      now: function () {
        return Module_14$e$performance.now()
      },
      timeOrigin: Date.now() - Module_14$e$performance.now()
    }
  }
}()
var s = undefined === a ? o : {
  nowSeconds: function () {
    return (a.timeOrigin + a.now()) / 1e3
  }
}
var u = o.nowSeconds.bind(o)
var l = s.nowSeconds.bind(s)
var c = l
var f = function () {
  var /* [auto-meaningful-name] */Module_14$e$performance = Module_14.e().performance
  if (Module_14$e$performance && Module_14$e$performance.now) {
    var t = 36e5
    var n = Module_14$e$performance.now()
    var i = Date.now()
    var o = Module_14$e$performance.timeOrigin ? Math.abs(Module_14$e$performance.timeOrigin + n - i) : t
    var a = o < t
    var s = Module_14$e$performance.timing && Module_14$e$performance.timing.navigationStart
    var u = "number" === typeof s ? Math.abs(s + n - i) : t
    return a || u < t ? o <= u ? ("timeOrigin", Module_14$e$performance.timeOrigin) : ("navigationStart", s) : ("dateNow", i)
  }
  "none"
}()
export default f
