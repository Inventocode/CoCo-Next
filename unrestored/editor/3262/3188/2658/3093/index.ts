"use strict";

var r;
var i = require("../../../2873/2721/805/index");
var a = require("./2676");
function s() {
  var e = require("../2691/2722/index");
  s = function () {
    return e;
  };
  return e;
}
function o() {
  var e = require("./2702/index");
  o = function () {
    return e;
  };
  return e;
}
function l() {
  var e = require("../2667/index");
  l = function () {
    return e;
  };
  return e;
}
function u() {
  var e = require("../2623/index");
  u = function () {
    return e;
  };
  return e;
}
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = function (e) {
  var t;
  var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "global";
  var r = {
    global: N,
    module: _,
    umd: D,
    var: j
  }[n];
  if (!r) {
    throw new Error("Unsupported output type ".concat(n));
  }
  t = r(e);
  return (0, o().default)(t).code;
};
var c = require("../2691/index");
var p = u();
var f = p.arrayExpression;
var d = p.assignmentExpression;
var h = p.binaryExpression;
var y = p.blockStatement;
var m = p.callExpression;
var v = p.cloneNode;
var g = p.conditionalExpression;
var T = p.exportNamedDeclaration;
var b = p.exportSpecifier;
var S = p.expressionStatement;
var E = p.functionExpression;
var x = p.identifier;
var P = p.memberExpression;
var A = p.objectExpression;
var k = p.program;
var w = p.stringLiteral;
var O = p.unaryExpression;
var C = p.variableDeclaration;
var I = p.variableDeclarator;
function N(e) {
  var t = x("babelHelpers");
  var n = [];
  var r = E(null, [x("global")], y(n));
  var i = k([S(m(r, [g(h("===", O("typeof", x("global")), w("undefined")), x("self"), x("global"))]))]);
  n.push(C("var", [I(t, d("=", P(x("global"), t), A([])))]));
  L(n, t, e);
  return i;
}
function _(e) {
  var t = [];
  var n = L(t, null, e);
  t.unshift(T(null, Object.keys(n).map(function (e) {
    return b(v(n[e]), x(e));
  })));
  return k(t, [], "module");
}
function D(e) {
  var t;
  var n = x("babelHelpers");
  var i = [];
  i.push(C("var", [I(n, x("global"))]));
  L(i, n, e);
  return k([(t = {
    FACTORY_PARAMETERS: x("global"),
    BROWSER_ARGUMENTS: d("=", P(x("root"), n), A([])),
    COMMON_ARGUMENTS: x("exports"),
    AMD_ARGUMENTS: f([w("exports")]),
    FACTORY_BODY: i,
    UMD_ROOT: x("this")
  }, l().default.statement(r || (r = a(['\n    (function (root, factory) {\n      if (typeof define === "function" && define.amd) {\n        define(AMD_ARGUMENTS, factory);\n      } else if (typeof exports === "object") {\n        factory(COMMON_ARGUMENTS);\n      } else {\n        factory(BROWSER_ARGUMENTS);\n      }\n    })(UMD_ROOT, function (FACTORY_PARAMETERS) {\n      FACTORY_BODY\n    });\n  '])))(t))]);
}
function j(e) {
  var t = x("babelHelpers");
  var n = [];
  n.push(C("var", [I(t, A([]))]));
  var r = k(n);
  L(n, t, e);
  n.push(S(t));
  return r;
}
function L(e, t, n) {
  var r = function (e) {
    return t ? P(t, x(e)) : x("_".concat(e));
  };
  var a = {};
  s().list.forEach(function (t) {
    if (!(n && n.indexOf(t) < 0)) {
      var o = a[t] = r(t);
      s().ensure(t, c.default);
      var l = s().get(t, r, o).nodes;
      e.push.apply(e, i(l));
    }
  });
  return a;
}