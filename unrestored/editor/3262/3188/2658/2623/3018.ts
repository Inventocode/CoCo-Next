"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = void 0;
var r = require("./2664/index");
var i = require("./2630/index");
var a = function e(t) {
  if (void 0 === t) {
    return (0, i.identifier)("undefined");
  }
  if (!0 === t || !1 === t) {
    return (0, i.booleanLiteral)(t);
  }
  if (null === t) {
    return (0, i.nullLiteral)();
  }
  if ("string" === typeof t) {
    return (0, i.stringLiteral)(t);
  }
  if ("number" === typeof t) {
    var n;
    var a;
    if (Number.isFinite(t)) {
      n = (0, i.numericLiteral)(Math.abs(t));
    } else {
      a = Number.isNaN(t) ? (0, i.numericLiteral)(0) : (0, i.numericLiteral)(1);
      n = (0, i.binaryExpression)("/", a, (0, i.numericLiteral)(0));
    }
    if (t < 0 || Object.is(t, -0)) {
      n = (0, i.unaryExpression)("-", n);
    }
    return n;
  }
  if (function (e) {
    return "[object RegExp]" === s(e);
  }(t)) {
    var o = t.source;
    var l = t.toString().match(/\/([a-z]+|)$/)[1];
    return (0, i.regExpLiteral)(o, l);
  }
  if (Array.isArray(t)) {
    return (0, i.arrayExpression)(t.map(e));
  }
  if (function (e) {
    if ("object" !== typeof e || null === e || "[object Object]" !== Object.prototype.toString.call(e)) {
      return !1;
    }
    var t = Object.getPrototypeOf(e);
    return null === t || null === Object.getPrototypeOf(t);
  }(t)) {
    for (var u = [], c = 0, p = Object.keys(t); c < p.length; c++) {
      var f = p[c];
      var d = void 0;
      d = (0, r.default)(f) ? (0, i.identifier)(f) : (0, i.stringLiteral)(f);
      u.push((0, i.objectProperty)(d, e(t[f])));
    }
    return (0, i.objectExpression)(u);
  }
  throw new Error("don't know how to turn this value into a node");
};
exports.default = a;
var s = Function.call.bind(Object.prototype.toString);