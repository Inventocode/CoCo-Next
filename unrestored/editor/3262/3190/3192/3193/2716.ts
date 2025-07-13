"use strict";

export default (function (e, t, n) {
  if (!e) {
    return;
  }
  var o = r.NODE_FIELDS[e.type];
  if (!o) {
    return;
  }
  var s = o[t];
  a(e, t, n, s);
  i(e, t, n);
});
export { i as validateChild };
export { a as validateField };
import * as r from "./2636/index";
function a(e, t, n, r) {
  if (null != r && r.validate) {
    if (!(r.optional && null == n)) {
      r.validate(e, t, n);
    }
  }
}
function i(e, t, n) {
  if (null != n) {
    var a = r.NODE_PARENT_VALIDATIONS[n.type];
    if (a) {
      a(e, t, n);
    }
  }
}