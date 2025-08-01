"use strict";

var r = require("../../../../../3200/494");
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports._getTypeAnnotation = function () {
  var e = this.node;
  if (!e) {
    if ("init" === this.key && this.parentPath.isVariableDeclarator()) {
      var t = this.parentPath.parentPath;
      var n = t.parentPath;
      return "left" === t.key && n.isForInStatement() ? T() : "left" === t.key && n.isForOfStatement() ? s() : b();
    }
    return;
  }
  if (e.typeAnnotation) {
    return e.typeAnnotation;
  }
  if (S.has(e)) {
    return;
  }
  S.add(e);
  try {
    var r;
    var a = i[e.type];
    if (a) {
      return a.call(this, e);
    }
    a = i[this.parentPath.type];
    if (null != (r = a) && r.validParent) {
      return this.parentPath.getTypeAnnotation();
    }
  } finally {
    S.delete(e);
  }
};
exports.baseTypeStrictlyMatches = function (e) {
  var t = this.getTypeAnnotation();
  var n = e.getTypeAnnotation();
  if (!o(t) && c(t)) {
    return n.type === t.type;
  }
  return !1;
};
exports.couldBeBaseType = function (e) {
  var t = this.getTypeAnnotation();
  if (o(t)) {
    return !0;
  }
  if (v(t)) {
    var n;
    var i = r(t.types);
    try {
      for (i.s(); !(n = i.n()).done;) {
        var a = n.value;
        if (o(a) || E(e, a, !0)) {
          return !0;
        }
      }
    } catch (s) {
      i.e(s);
    } finally {
      i.f();
    }
    return !1;
  }
  return E(e, t, !0);
};
exports.getTypeAnnotation = function () {
  if (this.typeAnnotation) {
    return this.typeAnnotation;
  }
  var e = this._getTypeAnnotation() || s();
  if (m(e)) {
    e = e.typeAnnotation;
  }
  return this.typeAnnotation = e;
};
exports.isBaseType = function (e, t) {
  return E(e, this.getTypeAnnotation(), t);
};
exports.isGenericType = function (e) {
  var t = this.getTypeAnnotation();
  return p(t) && f(t.id, {
    name: e
  });
};
var i = require("./3068/index");
var a = require("../../../2633/index");
var s = a.anyTypeAnnotation;
var o = a.isAnyTypeAnnotation;
var l = a.isBooleanTypeAnnotation;
var u = a.isEmptyTypeAnnotation;
var c = a.isFlowBaseAnnotation;
var p = a.isGenericTypeAnnotation;
var f = a.isIdentifier;
var d = a.isMixedTypeAnnotation;
var h = a.isNumberTypeAnnotation;
var y = a.isStringTypeAnnotation;
var m = a.isTypeAnnotation;
var v = a.isUnionTypeAnnotation;
var g = a.isVoidTypeAnnotation;
var T = a.stringTypeAnnotation;
var b = a.voidTypeAnnotation;
var S = new WeakSet();
function E(e, t, n) {
  if ("string" === e) {
    return y(t);
  }
  if ("number" === e) {
    return h(t);
  }
  if ("boolean" === e) {
    return l(t);
  }
  if ("any" === e) {
    return o(t);
  }
  if ("mixed" === e) {
    return d(t);
  }
  if ("empty" === e) {
    return u(t);
  }
  if ("void" === e) {
    return g(t);
  }
  if (n) {
    return !1;
  }
  throw new Error("Unknown base type ".concat(e));
}