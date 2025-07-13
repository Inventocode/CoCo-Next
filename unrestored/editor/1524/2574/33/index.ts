"use strict";

export { a };
import * as r from "./995";
import * as i from "../80/771";
import * as o from "./996";
function a(e, t) {
  return Object(r.a)(e) || function (e, t) {
    if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
      var n = [];
      var r = !0;
      var i = !1;
      var o = void 0;
      try {
        for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) {
          ;
        }
      } catch (c) {
        i = !0;
        o = c;
      } finally {
        try {
          if (!(r || null == s.return)) {
            s.return();
          }
        } finally {
          if (i) {
            throw o;
          }
        }
      }
      return n;
    }
  }(e, t) || Object(i.a)(e, t) || Object(o.a)();
}