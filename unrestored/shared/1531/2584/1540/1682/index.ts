/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1682
 */

"use strict";

var r = require("../1675/947");
var o = require("../1659/241");
var i = require("../1675/421");
var a = require("./1235");
var s = require("../1745/310");
var c = require("../1675/948");
r("search", function (e, t, n) {
  return [function (t) {
    var n = i(this);
    var r = undefined == t ? undefined : t[e];
    return undefined !== r ? r.call(t, n) : new RegExp(t)[e](s(n));
  }, function (e) {
    var r = o(this);
    var i = s(e);
    var l = n(t, r, i);
    if (l.done) {
      return l.value;
    }
    var u = r.lastIndex;
    if (!a(u, 0)) {
      r.lastIndex = 0;
    }
    var d = c(r, i);
    if (!a(r.lastIndex, u)) {
      r.lastIndex = u;
    }
    return null === d ? -1 : d.index;
  }];
});