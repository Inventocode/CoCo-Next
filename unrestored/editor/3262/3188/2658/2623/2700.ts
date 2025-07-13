"use strict";

export default (function (e, t, n) {
  if (!e) {
    return;
  }
  var s = r.NODE_FIELDS[e.type];
  if (!s) {
    return;
  }
  var o = s[t];
  i(e, t, n, o);
  a(e, t, n);
});
export { a as validateChild };
export { i as validateField };
import * as r from "./2634/index";
function i(e, t, n, r) {
  if (null != r && r.validate) {
    if (!(r.optional && null == n)) {
      r.validate(e, t, n);
    }
  }
}
function a(e, t, n) {
  if (null != n) {
    var i = r.NODE_PARENT_VALIDATIONS[n.type];
    if (i) {
      i(e, t, n);
    }
  }
}