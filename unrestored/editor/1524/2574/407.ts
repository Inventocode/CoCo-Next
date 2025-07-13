"use strict";

export { c as a };
export { d as c };
export { p as b };
export { f as d };
var r;
var o;
var i;
import * as a from "./11";
import * as s from "./64";
var c = "icon-widget-table-data";
var l = Object(s.a)("COLUMN");
var u = Object(s.a)("COLUMN");
var d = (r = {}, Object(a.a)(r, l, {
  field: "\u7b2c1\u5217"
}), Object(a.a)(r, u, {
  field: "\u7b2c2\u5217"
}), r);
var p = [(o = {
  rowId: Object(s.a)("ROW")
}, Object(a.a)(o, l, ""), Object(a.a)(o, u, ""), o), (i = {
  rowId: Object(s.a)("ROW")
}, Object(a.a)(i, l, ""), Object(a.a)(i, u, ""), i)];
function f() {
  var e;
  var t;
  var n;
  var r = Object(s.a)("COLUMN");
  var o = Object(s.a)("COLUMN");
  return {
    header: (e = {}, Object(a.a)(e, r, {
      field: "\u7b2c1\u5217",
      width: 407
    }), Object(a.a)(e, o, {
      field: "\u7b2c2\u5217",
      width: 407
    }), e),
    data: [(t = {
      rowId: Object(s.a)("ROW")
    }, Object(a.a)(t, r, ""), Object(a.a)(t, o, ""), t), (n = {
      rowId: Object(s.a)("ROW")
    }, Object(a.a)(n, r, ""), Object(a.a)(n, o, ""), n)]
  };
}