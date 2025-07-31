"use strict";

export { a };
var r = require("../../../../19");
var i = require("../../../../108");
function o(e) {
  return e && "object" === Object(i.a)(e) && e.constructor === Object;
}
function a(e, t) {
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
    clone: !0
  };
  var i = n.clone ? Object(r.a)({}, e) : e;
  if (o(e) && o(t)) {
    Object.keys(t).forEach(function (r) {
      if ("__proto__" !== r) {
        if (o(t[r]) && r in e) {
          i[r] = a(e[r], t[r], n);
        } else {
          i[r] = t[r];
        }
      }
    });
  }
  return i;
}
export default a;