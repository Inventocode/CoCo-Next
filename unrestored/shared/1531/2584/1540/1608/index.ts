/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1608
 */

"use strict";

var r = require("../1623/272");
var o = require("../1736/194");
var i = require("../1667/818");
var a = require("../1745/398/index");
var s = require("../1745/332");
var c = require("./705");
var l = require("../1667/939");
var u = require("../1541/749");
var d = require("./1205/index");
var p = require("../1736/167");
var f = require("../1654/575/index");
var h = require("../1667/631/index").f;
var m = require("../1659/386/index").f;
var g = require("../1623/300").f;
var _ = require("../1686/753/index").trim;
var v = o.Number;
var b = v.prototype;
var y = "Number" == c(f(b));
var E = function (e) {
  if (u(e)) {
    throw TypeError("Cannot convert a Symbol value to a number");
  }
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  var c;
  var l = d(e, "number");
  if ("string" == typeof l && l.length > 2) {
    if (43 === (t = (l = _(l)).charCodeAt(0)) || 45 === t) {
      if (88 === (n = l.charCodeAt(2)) || 120 === n) {
        return NaN;
      }
    } else if (48 === t) {
      switch (l.charCodeAt(1)) {
        case 66:
        case 98:
          r = 2;
          o = 49;
          break;
        case 79:
        case 111:
          r = 8;
          o = 55;
          break;
        default:
          return +l;
      }
      for (a = (i = l.slice(2)).length, s = 0; s < a; s++) {
        if ((c = i.charCodeAt(s)) < 48 || c > o) {
          return NaN;
        }
      }
      return parseInt(i, r);
    }
  }
  return +l;
};
if (i("Number", !v(" 0o1") || !v("0b1") || v("+0x1"))) {
  for (var O, w = function (e) {
      var t = arguments.length < 1 ? 0 : e;
      var n = this;
      return n instanceof w && (y ? p(function () {
        b.valueOf.call(n);
      }) : "Number" != c(n)) ? l(new v(E(t)), n, w) : E(t);
    }, C = r ? h(v) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","), T = 0; C.length > T; T++) {
    if (s(v, O = C[T]) && !s(w, O)) {
      g(w, O, m(v, O));
    }
  }
  w.prototype = b;
  b.constructor = w;
  a(o, "Number", w);
}