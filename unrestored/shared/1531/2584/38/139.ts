/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：139
 */

"use strict"

export { r as a }
export { c as b }
var r
import o = require("../27");
import i = require("../57/index");
import a = require("../58/index");
import s = require("../197/276");
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
  i.a(n, e)
  var t = a.a(n)
  function n(e, r, i, a, s) {
    var c
    o.a(this, n);
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
}(s.a(Error))
export default r
