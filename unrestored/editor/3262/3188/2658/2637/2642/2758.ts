"use strict";

import * as r from "../../2623/index";
var i = r.isBinding;
var a = r.isBlockScoped;
var s = r.isExportDeclaration;
var o = r.isExpression;
var l = r.isFlow;
var u = r.isForStatement;
var c = r.isForXStatement;
var p = r.isIdentifier;
var f = r.isImportDeclaration;
var d = r.isImportSpecifier;
var h = r.isJSXIdentifier;
var y = r.isJSXMemberExpression;
var m = r.isMemberExpression;
var v = r.isReferenced;
var g = r.isScope;
var T = r.isStatement;
var b = r.isVar;
var S = r.isVariableDeclaration;
var E = r.react.isCompatTag;
var x = {
  types: ["Identifier", "JSXIdentifier"],
  checkPath: function (e, t) {
    var n = e.node;
    var r = e.parent;
    if (!p(n, t) && !y(r, t)) {
      if (!h(n, t)) {
        return !1;
      }
      if (E(n.name)) {
        return !1;
      }
    }
    return v(n, r, e.parentPath.parent);
  }
};
export { x as ReferencedIdentifier };
var P = {
  types: ["MemberExpression"],
  checkPath: function (e) {
    var t = e.node;
    var n = e.parent;
    return m(t) && v(t, n);
  }
};
export { P as ReferencedMemberExpression };
var A = {
  types: ["Identifier"],
  checkPath: function (e) {
    var t = e.node;
    var n = e.parent;
    var r = e.parentPath.parent;
    return p(t) && i(t, n, r);
  }
};
export { A as BindingIdentifier };
var k = {
  types: ["Statement"],
  checkPath: function (e) {
    var t = e.node;
    var n = e.parent;
    if (T(t)) {
      if (S(t)) {
        if (c(n, {
          left: t
        })) {
          return !1;
        }
        if (u(n, {
          init: t
        })) {
          return !1;
        }
      }
      return !0;
    }
    return !1;
  }
};
export { k as Statement };
var w = {
  types: ["Expression"],
  checkPath: function (e) {
    return e.isIdentifier() ? e.isReferencedIdentifier() : o(e.node);
  }
};
export { w as Expression };
var O = {
  types: ["Scopable", "Pattern"],
  checkPath: function (e) {
    return g(e.node, e.parent);
  }
};
export { O as Scope };
var C = {
  checkPath: function (e) {
    return v(e.node, e.parent);
  }
};
export { C as Referenced };
var I = {
  checkPath: function (e) {
    return a(e.node);
  }
};
export { I as BlockScoped };
var N = {
  types: ["VariableDeclaration"],
  checkPath: function (e) {
    return b(e.node);
  }
};
export { N as Var };
exports.User = {
  checkPath: function (e) {
    return e.node && !!e.node.loc;
  }
};
exports.Generated = {
  checkPath: function (e) {
    return !e.isUser();
  }
};
exports.Pure = {
  checkPath: function (e, t) {
    return e.scope.isPure(e.node, t);
  }
};
var _ = {
  types: ["Flow", "ImportDeclaration", "ExportDeclaration", "ImportSpecifier"],
  checkPath: function (e) {
    var t = e.node;
    return !!l(t) || (f(t) ? "type" === t.importKind || "typeof" === t.importKind : s(t) ? "type" === t.exportKind : !!d(t) && ("type" === t.importKind || "typeof" === t.importKind));
  }
};
export { _ as Flow };
exports.RestProperty = {
  types: ["RestElement"],
  checkPath: function (e) {
    return e.parentPath && e.parentPath.isObjectPattern();
  }
};
exports.SpreadProperty = {
  types: ["RestElement"],
  checkPath: function (e) {
    return e.parentPath && e.parentPath.isObjectExpression();
  }
};
exports.ExistentialTypeParam = {
  types: ["ExistsTypeAnnotation"]
};
exports.NumericLiteralTypeAnnotation = {
  types: ["NumberLiteralTypeAnnotation"]
};
exports.ForAwaitStatement = {
  types: ["ForOfStatement"],
  checkPath: function (e) {
    return !0 === e.node.await;
  }
};