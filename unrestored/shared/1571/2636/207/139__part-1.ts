/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：139__part-1
 */

"use strict"

var r
import * as /* [auto-meaningful-name] */Module_27 from /* 27 */"../27"
import * as /* [auto-meaningful-name] */Module_58 from /* 58 */"../58/index"
import * as /* [auto-meaningful-name] */Module_59 from /* 59 */"../59/index"
import * as /* [auto-meaningful-name] */Module_274 from /* 274 */"../197/274"
!function (e) {
  e.NO_UNDEF = "NO_UNDEF"
  e.NO_RETURN_FUNCTION = "NO_RETURN_FUNCTION"
  e.BRANCH_RETURN_FUNCTION = "BRANCH_RETURN_FUNCTION"
  e.RETURN_NOT_IN_FUNCTION = "RETURN_NOT_IN_FUNCTION"
  e.PARAMETER_NOT_IN_FUNCTION = "PARAMETER_NOT_IN_FUNCTION"
  e.FUNCTION_IS_UNDEF = "FUNCTION_IS_UNDEF"
  e.LOOP_CONTROL_NOT_IN_LOOP = "LOOP_CONTROL_NOT_IN_LOOP"
  e.WIDGET_NOT_EXISTS = "WIDGET_NOT_EXISTS"
  e.PARAM_NOT_IN_CONTEXT = "PARAM_NOT_IN_CONTEXT"
}(r || (r = {}))
var c = function (e) {
  Module_58.a(n, e)
  var t = Module_59.a(n)
  function n(e, r, i, a, s) {
    var c
    Module_27.a(this, n);
    (c = t.call(this, e)).type = undefined
    c.blockId = undefined
    c.screenId = undefined
    c.data = undefined
    c.type = e
    c.blockId = i
    c.screenId = r
    c.message = a
    c.data = s
    return c
  }
  return n
}(Module_274.a(Error))
export { r }
export { c }
