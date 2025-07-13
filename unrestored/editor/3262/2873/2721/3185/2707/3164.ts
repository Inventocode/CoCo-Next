"use strict";

export default o;
import * as r from "./2627";
import * as a from "./2652";
import * as i from "./2823";
function o(e) {
  var t;
  var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.key;
  return "method" === e.kind ? o.increment() + "" : (t = (0, r.isIdentifier)(n) ? n.name : (0, r.isStringLiteral)(n) ? JSON.stringify(n.value) : JSON.stringify((0, i.default)((0, a.default)(n))), e.computed && (t = "[".concat(t, "]")), e.static && (t = "static:".concat(t)), t);
}
o.uid = 0;
o.increment = function () {
  return o.uid >= Number.MAX_SAFE_INTEGER ? o.uid = 0 : o.uid++;
};