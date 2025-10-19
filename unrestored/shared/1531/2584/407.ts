/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：407
 */

"use strict";

export { c as a };
export { d as c };
export { p as b };
export { f as d };
var r;
var o;
var i;
import a = require("./11");
import s = require("./64");
var c = "icon-widget-table-data";
var l = s.a("COLUMN");
var u = s.a("COLUMN");
r = {};
a.a(r, l, {
  field: "第1列"
});
a.a(r, u, {
  field: "第2列"
});
var d = r;
var p = [(o = {
  rowId: s.a("ROW")
}, a.a(o, l, ""), a.a(o, u, ""), o), (i = {
  rowId: s.a("ROW")
}, a.a(i, l, ""), a.a(i, u, ""), i)];
function f() {
  var e;
  var t;
  var n;
  var r = s.a("COLUMN");
  var o = s.a("COLUMN");
  return {
    header: (e = {}, a.a(e, r, {
      field: "第1列",
      width: 407
    }), a.a(e, o, {
      field: "第2列",
      width: 407
    }), e),
    data: [(t = {
      rowId: s.a("ROW")
    }, a.a(t, r, ""), a.a(t, o, ""), t), (n = {
      rowId: s.a("ROW")
    }, a.a(n, r, ""), a.a(n, o, ""), n)]
  };
}
export default c;