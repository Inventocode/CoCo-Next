"use strict";

import * as r from "../../../19";
import * as i from "../../../54";
import * as o from "../../../0/index";
import * as a from "../../../0/index";
var s = (require("../../../50/index"), require("../../../16/687"));
import * as c from "../../../0/index";
import * as u from "../701/2581";
import * as l from "../../../549/1183/315/2620/2614";
import * as f from "../../../549/1183/682/2583";
var h = function (e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return function (n) {
    var o = t.defaultTheme;
    var s = t.withTheme;
    var h = void 0 !== s && s;
    var d = t.name;
    var p = Object(i.a)(t, ["defaultTheme", "withTheme", "name"]);
    var _ = d;
    var A = Object(u.a)(e, Object(r.a)({
      defaultTheme: o,
      Component: n,
      name: d || n.displayName,
      classNamePrefix: _
    }, p));
    var g = a.a.forwardRef(function (e, t) {
      e.classes;
      var s;
      var c = e.innerRef;
      var u = Object(i.a)(e, ["classes", "innerRef"]);
      var p = A(Object(r.a)({}, n.defaultProps, e));
      var _ = u;
      if ("string" === typeof d || h) {
        s = Object(f.a)() || o;
        if (d) {
          _ = Object(l.a)({
            theme: s,
            name: d,
            props: u
          });
        }
        if (h && !_.theme) {
          _.theme = s;
        }
      }
      return a.a.createElement(n, Object(r.a)({
        ref: c || t,
        classes: p
      }, _));
    });
    c()(g, n);
    return g;
  };
};
import * as d from "../../../549/1183/682/785/index";
exports.a = function (e, t) {
  return h(e, Object(r.a)({
    defaultTheme: d.a
  }, t));
};