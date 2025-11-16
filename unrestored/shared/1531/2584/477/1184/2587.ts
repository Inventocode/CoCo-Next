/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2587
 */

"use strict"

export { c as a }
export { u as b }
import * as /* [auto-meaningful-name] */$_394 from "./394"
import * as /* [auto-meaningful-name] */$$_340_2592_904 from "../340/2592/904"
var o = {
  nowSeconds: function () {
    return Date.now() / 1e3
  }
}
var a = $$_340_2592_904.b() ? function () {
  try {
    return $$_340_2592_904.a(module, "perf_hooks").performance
  } catch (t) {
    return
  }
}() : function () {
  var /* [auto-meaningful-name] */$_394$e$performance = $_394.e().performance
  if ($_394$e$performance && $_394$e$performance.now) {
    return {
      now: function () {
        return $_394$e$performance.now()
      },
      timeOrigin: Date.now() - $_394$e$performance.now()
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
  var /* [auto-meaningful-name] */$_394$e$performance = $_394.e().performance
  if ($_394$e$performance && $_394$e$performance.now) {
    var t = $_394$e$performance.now()
    var n = Date.now()
    var i = $_394$e$performance.timeOrigin ? Math.abs($_394$e$performance.timeOrigin + t - n) : 36e5
    var o = i < 36e5
    var a = $_394$e$performance.timing && $_394$e$performance.timing.navigationStart
    var s = "number" === typeof a ? Math.abs(a + t - n) : 36e5
    return o || s < 36e5 ? i <= s ? ("timeOrigin", $_394$e$performance.timeOrigin) : ("navigationStart", a) : ("dateNow", n)
  }
  "none"
}()
export default c
