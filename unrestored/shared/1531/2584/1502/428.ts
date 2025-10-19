/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：428
 */

"use strict";

export { o as b };
export { a };
export { s as c };
import r = require("../108");
import i = require("../242/index");
function o(e, t) {
  if ("function" === typeof e) {
    e(t);
  } else {
    if ("object" === r.a(e) && e && "current" in e) {
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
  var r = i.isMemo(e) ? e.type.type : e.type;
  return !("function" === typeof r && !(null === (t = r.prototype) || undefined === t ? undefined : t.render)) && !("function" === typeof e && !(null === (n = e.prototype) || undefined === n ? undefined : n.render));
}
export default a;