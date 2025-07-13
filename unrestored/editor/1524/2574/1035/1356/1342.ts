"use strict";

function r(e, t) {
  return e === t || null !== e && null !== t && "object" === typeof e && "object" === typeof t && (Array.isArray(e) ? function (e, t) {
    if (!Array.isArray(t)) {
      return !1;
    }
    if (e.length !== t.length) {
      return !1;
    }
    for (var n = 0; n < e.length; n++) {
      if (!r(e[n], t[n])) {
        return !1;
      }
    }
    return !0;
  }(e, t) : function (e, t) {
    if (Array.isArray(t)) {
      return !1;
    }
    for (var n in e) if (!r(e[n], t[n])) {
      return !1;
    }
    for (var i in t) if (void 0 === e[i]) {
      return !1;
    }
    return !0;
  }(e, t));
}
export default r;