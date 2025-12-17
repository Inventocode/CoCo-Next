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
import * as r from "./14"
import * as i from "./19"
var o = {
  nowSeconds: function () {
    return Date.now() / 1e3
  }
}
var a = i.b() ? function () {
  try {
    return i.a(module, "perf_hooks").performance
  } catch (t) {
    return
  }
}() : function () {
  var /* [auto-meaningful-name] */r$e$performance = r.e().performance
  if (r$e$performance && r$e$performance.now) {
    return {
      now: function () {
        return r$e$performance.now()
      },
      timeOrigin: Date.now() - r$e$performance.now()
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
  var /* [auto-meaningful-name] */r$e$performance = r.e().performance
  if (r$e$performance && r$e$performance.now) {
    var t = 36e5
    var n = r$e$performance.now()
    var i = Date.now()
    var o = r$e$performance.timeOrigin ? Math.abs(r$e$performance.timeOrigin + n - i) : t
    var a = o < t
    var s = r$e$performance.timing && r$e$performance.timing.navigationStart
    var u = "number" === typeof s ? Math.abs(s + n - i) : t
    return a || u < t ? o <= u ? ("timeOrigin", r$e$performance.timeOrigin) : ("navigationStart", s) : ("dateNow", i)
  }
  "none"
}()
export default f
