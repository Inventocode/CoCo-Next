"use strict";

exports.ArrowFunctionExpression = function (e, t) {
  return y(t) || te(e, t);
};
exports.AssignmentExpression = function (e, t) {
  return !!C(e.left) || te(e, t);
};
exports.Binary = function (e, t) {
  if ("**" === e.operator && u(t, {
    operator: "**"
  })) {
    return t.left === e;
  }
  if (Q(e, t)) {
    return !0;
  }
  if (Z(e, t) || q(t) || o(t)) {
    return !0;
  }
  if (l(t)) {
    var n = t.operator;
    var r = $[n];
    var i = e.operator;
    var a = $[i];
    if (r === a && t.right === e && !A(t) || r > a) {
      return !0;
    }
  }
};
exports.BinaryExpression = function (e, t) {
  return "in" === e.operator && (X(t) || g(t));
};
exports.ClassExpression = function (e, t, n) {
  return ne(n, {
    expressionStatement: !0,
    exportDefault: !0
  });
};
export { te as ConditionalExpression };
exports.DoExpression = function (e, t, n) {
  return !e.async && ne(n, {
    expressionStatement: !0
  });
};
exports.FunctionExpression = function (e, t, n) {
  return ne(n, {
    expressionStatement: !0,
    exportDefault: !0
  });
};
exports.FunctionTypeAnnotation = function (e, t, n) {
  return J(t) || P(t) || i(t) || H(t) && a(n[n.length - 3]);
};
exports.Identifier = function (e, t, n) {
  if ("let" === e.name) {
    var r = k(t, {
      object: e,
      computed: !0
    }) || N(t, {
      object: e,
      computed: !0,
      optional: !1
    });
    return ne(n, {
      expressionStatement: r,
      forHead: r,
      forInHead: r,
      forOfHead: !0
    });
  }
  return "async" === e.name && b(t) && e === t.left;
};
exports.LogicalExpression = function (e, t) {
  switch (e.operator) {
    case "||":
      return !!A(t) && ("??" === t.operator || "&&" === t.operator);
    case "&&":
      return A(t, {
        operator: "??"
      });
    case "??":
      return A(t) && "??" !== t.operator;
  }
};
exports.NullableTypeAnnotation = function (e, t) {
  return i(t);
};
exports.ObjectExpression = function (e, t, n) {
  return ne(n, {
    expressionStatement: !0,
    arrowBody: !0
  });
};
exports.OptionalIndexedAccessType = function (e, t) {
  return x(t, {
    objectType: e
  });
};
exports.OptionalCallExpression = t.OptionalMemberExpression = function (e, t) {
  return c(t, {
    callee: e
  }) || k(t, {
    object: e
  });
};
exports.SequenceExpression = function (e, t) {
  if (S(t) || Y(t) || _(t) || E(t) && t.test === e || G(t) && t.test === e || T(t) && t.right === e || j(t) && t.discriminant === e || v(t) && t.expression === e) {
    return !1;
  }
  return !0;
};
exports.TSAsExpression = function () {
  return !0;
};
exports.TSInferType = function (e, t) {
  return L(t) || R(t);
};
exports.TSTypeAssertion = function () {
  return !0;
};
exports.TSIntersectionType = t.TSUnionType = function (e, t) {
  return L(t) || R(t) || B(t) || V(t) || U(t);
};
export { ee as UnaryLike };
exports.IntersectionTypeAnnotation = t.UnionTypeAnnotation = function (e, t) {
  return i(t) || O(t) || P(t) || J(t);
};
exports.UpdateExpression = function (e, t) {
  return Z(e, t) || Q(e, t);
};
exports.AwaitExpression = t.YieldExpression = function (e, t) {
  return l(t) || q(t) || Z(e, t) || o(t) && z(e) || h(t) && e === t.test || Q(e, t);
};
import * as r from "../../../../2623/index";
var i = r.isArrayTypeAnnotation;
var a = r.isArrowFunctionExpression;
var s = r.isAssignmentExpression;
var o = r.isAwaitExpression;
var l = r.isBinary;
var u = r.isBinaryExpression;
var c = r.isCallExpression;
var p = r.isClassDeclaration;
var f = r.isClassExpression;
var d = r.isConditional;
var h = r.isConditionalExpression;
var y = r.isExportDeclaration;
var m = r.isExportDefaultDeclaration;
var v = r.isExpressionStatement;
var g = r.isFor;
var T = r.isForInStatement;
var b = r.isForOfStatement;
var S = r.isForStatement;
var E = r.isIfStatement;
var x = r.isIndexedAccessType;
var P = r.isIntersectionTypeAnnotation;
var A = r.isLogicalExpression;
var k = r.isMemberExpression;
var w = r.isNewExpression;
var O = r.isNullableTypeAnnotation;
var C = r.isObjectPattern;
var I = r.isOptionalCallExpression;
var N = r.isOptionalMemberExpression;
var _ = r.isReturnStatement;
var D = r.isSequenceExpression;
var j = r.isSwitchStatement;
var L = r.isTSArrayType;
var M = r.isTSAsExpression;
var B = r.isTSIntersectionType;
var F = r.isTSNonNullExpression;
var R = r.isTSOptionalType;
var U = r.isTSRestType;
var K = r.isTSTypeAssertion;
var V = r.isTSUnionType;
var W = r.isTaggedTemplateExpression;
var Y = r.isThrowStatement;
var H = r.isTypeAnnotation;
var q = r.isUnaryLike;
var J = r.isUnionTypeAnnotation;
var X = r.isVariableDeclarator;
var G = r.isWhileStatement;
var z = r.isYieldExpression;
var $ = {
  "||": 0,
  "??": 0,
  "&&": 1,
  "|": 2,
  "^": 3,
  "&": 4,
  "==": 5,
  "===": 5,
  "!=": 5,
  "!==": 5,
  "<": 6,
  ">": 6,
  "<=": 6,
  ">=": 6,
  in: 6,
  instanceof: 6,
  ">>": 7,
  "<<": 7,
  ">>>": 7,
  "+": 8,
  "-": 8,
  "*": 9,
  "/": 9,
  "%": 9,
  "**": 10
};
var Q = function (e, t) {
  return (p(t) || f(t)) && t.superClass === e;
};
var Z = function (e, t) {
  return (k(t) || N(t)) && t.object === e || (c(t) || I(t) || w(t)) && t.callee === e || W(t) && t.tag === e || F(t);
};
function ee(e, t) {
  return Z(e, t) || u(t, {
    operator: "**",
    left: e
  }) || Q(e, t);
}
function te(e, t) {
  return !!(q(t) || l(t) || h(t, {
    test: e
  }) || o(t) || K(t) || M(t)) || ee(e, t);
}
function ne(e, t) {
  for (var n = t.expressionStatement, r = void 0 !== n && n, i = t.arrowBody, o = void 0 !== i && i, u = t.exportDefault, c = void 0 !== u && u, p = t.forHead, f = void 0 !== p && p, h = t.forInHead, y = void 0 !== h && h, g = t.forOfHead, E = void 0 !== g && g, x = e.length - 1, P = e[x], A = e[--x]; x >= 0;) {
    if (r && v(A, {
      expression: P
    }) || c && m(A, {
      declaration: P
    }) || o && a(A, {
      body: P
    }) || f && S(A, {
      init: P
    }) || y && T(A, {
      left: P
    }) || E && b(A, {
      left: P
    })) {
      return !0;
    }
    if (!(Z(P, A) && !w(A) || D(A) && A.expressions[0] === P || d(A, {
      test: P
    }) || l(A, {
      left: P
    }) || s(A, {
      left: P
    }))) {
      return !1;
    }
    P = A;
    A = e[--x];
  }
  return !1;
}