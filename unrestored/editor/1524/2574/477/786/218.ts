"use strict";

export { o as c };
export { a };
export { s as b };
export { c as d };
export { u as e };
var r = require("./720/804");
var i = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");
function o(e) {
  var t;
  if (void 0 === e) {
    e = null === (t = Object(r.b)().getClient()) || void 0 === t ? void 0 : t.getOptions();
  }
  return !!e && ("tracesSampleRate" in e || "tracesSampler" in e);
}
function a(e) {
  var t = e.match(i);
  if (t) {
    var n = void 0;
    if ("1" === t[3]) {
      n = !0;
    } else {
      if ("0" === t[3]) {
        n = !1;
      }
    }
    return {
      traceId: t[1],
      parentSampled: n,
      parentSpanId: t[2]
    };
  }
}
function s(e) {
  var t;
  var n;
  if (void 0 === e) {
    e = Object(r.b)();
  }
  return null === (n = null === (t = e) || void 0 === t ? void 0 : t.getScope()) || void 0 === n ? void 0 : n.getTransaction();
}
function c(e) {
  return e / 1e3;
}
function u(e) {
  return 1e3 * e;
}
export default a;