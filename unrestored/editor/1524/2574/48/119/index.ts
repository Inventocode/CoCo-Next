"use strict";

export { p as a };
import * as r from "../../1/index";
import * as o from "../../1/index";
import * as i from "../../7";
import * as a from "./773/index";
import * as s from "../../41";
import * as c from "../../59/index";
var l = "".concat(c.a.serverHost, "/coconut");
var u = !1;
var d = 0;
function p(e) {
  return f.apply(this, arguments);
}
function f() {
  return (f = Object(i.a)(o.a.mark(function e(t) {
    var n;
    var r;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (u) {
              e.next = 3;
              break;
            }
            e.next = 3;
            return h();
          case 3:
            "pBlYqXbJDu";
            n = Math.round(Date.now() / 1e3) + d;
            r = Object(a.sha256)("".concat("pBlYqXbJDu").concat(n).concat(t)).toLocaleUpperCase();
            return e.abrupt("return", {
              sign: r,
              timestamp: n
            });
          case 7:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function h() {
  return m.apply(this, arguments);
}
function m() {
  return (m = Object(i.a)(o.a.mark(function e() {
    var t;
    var n;
    var r;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2;
            return s.a.get("".concat(l, "/clouddb/currentTime"));
          case 2:
            if (t = e.sent, 200 === (n = t.data).code) {
              try {
                r = Math.round(Date.now() / 1e3);
                d = n.data - r;
                u = !0;
              } catch (o) {}
            }
          case 5:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}