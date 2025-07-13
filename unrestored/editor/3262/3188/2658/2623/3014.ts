"use strict";

export default s;
import * as r from "./2626";
import * as i from "./2650";
import * as a from "./2773";
function s(e) {
  var t;
  var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.key;
  return "method" === e.kind ? s.increment() + "" : (t = (0, r.isIdentifier)(n) ? n.name : (0, r.isStringLiteral)(n) ? JSON.stringify(n.value) : JSON.stringify((0, a.default)((0, i.default)(n))), e.computed && (t = "[".concat(t, "]")), e.static && (t = "static:".concat(t)), t);
}
s.uid = 0;
s.increment = function () {
  return s.uid >= Number.MAX_SAFE_INTEGER ? s.uid = 0 : s.uid++;
};