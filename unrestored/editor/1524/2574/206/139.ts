"use strict";

export { r as a };
export { c as b };
var r;
import * as o from "../27";
import * as i from "../57/index";
import * as a from "../58/index";
import * as s from "../197/276";
!function (e) {
  e.NO_UNDEF = "NO_UNDEF";
  e.NO_RETURN_FUNCTION = "NO_RETURN_FUNCTION";
  e.BRANCH_RETURN_FUNCTION = "BRANCH_RETURN_FUNCTION";
  e.RETURN_NOT_IN_FUNCTION = "RETURN_NOT_IN_FUNCTION";
  e.PARAMETER_NOT_IN_FUNCTION = "PARAMETER_NOT_IN_FUNCTION";
  e.FUNCTION_IS_UNDEF = "FUNCTION_IS_UNDEF";
  e.LOOP_CONTROL_NOT_IN_LOOP = "LOOP_CONTROL_NOT_IN_LOOP";
  e.WIDGET_NOT_EXISTS = "WIDGET_NOT_EXISTS";
  e.PARAM_NOT_IN_CONTEXT = "PARAM_NOT_IN_CONTEXT";
}(r || (r = {}));
var c = function (e) {
  Object(i.a)(n, e);
  var t = Object(a.a)(n);
  function n(e, r, i, a, s) {
    var c;
    Object(o.a)(this, n);
    (c = t.call(this, e)).type = void 0;
    c.blockId = void 0;
    c.screenId = void 0;
    c.data = void 0;
    c.type = e;
    c.blockId = i;
    c.screenId = r;
    c.message = a;
    c.data = s;
    return c;
  }
  return n;
}(Object(s.a)(Error));