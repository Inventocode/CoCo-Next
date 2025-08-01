"use strict";

export { o as b };
export { a };
export { s as c };
var r = require("../108");
var i = require("../242/index");
function o(e, t) {
  if ("function" === typeof e) {
    e(t);
  } else {
    if ("object" === Object(r.a)(e) && e && "current" in e) {
      e.current = t;
    }
  }
}
function a() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
    t[n] = arguments[n];
  }
  return function (e) {
    t.forEach(function (t) {
      o(t, e);
    });
  };
}
function s(e) {
  var t;
  var n;
  var r = Object(i.isMemo)(e) ? e.type.type : e.type;
  return !("function" === typeof r && !(null === (t = r.prototype) || void 0 === t ? void 0 : t.render)) && !("function" === typeof e && !(null === (n = e.prototype) || void 0 === n ? void 0 : n.render));
}
export default a;