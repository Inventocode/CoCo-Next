import * as r from "../../446";
import * as i from "../../../../../../254/2523/1413/2521/978";
var o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var a = /^\w*$/;
module.exports = function (e, t) {
  if (r(e)) {
    return !1;
  }
  var n = typeof e;
  return !("number" != n && "symbol" != n && "boolean" != n && null != e && !i(e)) || a.test(e) || !o.test(e) || null != t && e in Object(t);
};