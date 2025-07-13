"use strict";

import * as r from "./2671";
import * as a from "./2632/index";
var i = function e(t) {
  if (void 0 === t) {
    return (0, a.identifier)("undefined");
  }
  if (!0 === t || !1 === t) {
    return (0, a.booleanLiteral)(t);
  }
  if (null === t) {
    return (0, a.nullLiteral)();
  }
  if ("string" === typeof t) {
    return (0, a.stringLiteral)(t);
  }
  if ("number" === typeof t) {
    var n;
    var i;
    if (Number.isFinite(t)) {
      n = (0, a.numericLiteral)(Math.abs(t));
    } else {
      i = Number.isNaN(t) ? (0, a.numericLiteral)(0) : (0, a.numericLiteral)(1);
      n = (0, a.binaryExpression)("/", i, (0, a.numericLiteral)(0));
    }
    if (t < 0 || Object.is(t, -0)) {
      n = (0, a.unaryExpression)("-", n);
    }
    return n;
  }
  if (function (e) {
    return "[object RegExp]" === o(e);
  }(t)) {
    var s = t.source;
    var u = t.toString().match(/\/([a-z]+|)$/)[1];
    return (0, a.regExpLiteral)(s, u);
  }
  if (Array.isArray(t)) {
    return (0, a.arrayExpression)(t.map(e));
  }
  if (function (e) {
    if ("object" !== typeof e || null === e || "[object Object]" !== Object.prototype.toString.call(e)) {
      return !1;
    }
    var t = Object.getPrototypeOf(e);
    return null === t || null === Object.getPrototypeOf(t);
  }(t)) {
    for (var l = [], p = 0, f = Object.keys(t); p < f.length; p++) {
      var d = f[p];
      var c = void 0;
      c = (0, r.default)(d) ? (0, a.identifier)(d) : (0, a.stringLiteral)(d);
      l.push((0, a.objectProperty)(c, e(t[d])));
    }
    return (0, a.objectExpression)(l);
  }
  throw new Error("don't know how to turn this value into a node");
};
export default i;
var o = Function.call.bind(Object.prototype.toString);