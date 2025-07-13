"use strict";

export { i };
export { a as h };
export { s as c };
export { c as e };
export { l as g };
export { u as f };
export { d as b };
export { p as d };
export { f as a };
export { h as j };
import * as r from "./47";
import * as o from "./547";
var i = "STYLE_DEFAULT_STYLE_ID";
var a = {
  id: i,
  source: o.a
};
var s = 100;
var c = .01;
var l = !1;
var u = !1;
var d = 9999;
var p = 10;
var f = "ACTOR_ACTION";
function h(e, t) {
  var n;
  var o;
  var i = Object(r.a)(e);
  try {
    for (i.s(); !(o = i.n()).done;) {
      var s;
      var c = o.value;
      var l = Object(r.a)(c.styleList);
      try {
        for (l.s(); !(s = l.n()).done;) {
          var u = s.value;
          if (u.id === t) {
            return u;
          }
          if (!n) {
            n = u;
          }
        }
      } catch (d) {
        l.e(d);
      } finally {
        l.f();
      }
    }
  } catch (d) {
    i.e(d);
  } finally {
    i.f();
  }
  return n || a;
}