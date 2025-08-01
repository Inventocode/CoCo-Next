"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
var r = require("../../1366");
var i = require("../../2342/444");
var o = require("../../580");
var a = require("../../359");
var s = require("../../846");
exports.getFunctionName = s.getFunctionName;
var c = require("./1367/index");
function u(e, t, n, r) {
  var a = e.getConstructorMetadata(n);
  var s = a.compilerGeneratedMetadata;
  if (void 0 === s) {
    var u = i.MISSING_INJECTABLE_ANNOTATION + " " + t + ".";
    throw new Error(u);
  }
  var d = a.userGeneratedMetadata;
  var h = Object.keys(d);
  var p = function (e, t, n, r, i) {
    for (var o = [], a = 0; a < i; a++) {
      var s = l(a, e, t, n, r);
      if (null !== s) {
        o.push(s);
      }
    }
    return o;
  }(r, t, s, d, 0 === n.length && h.length > 0 ? h.length : n.length);
  var _ = function e(t, n) {
    for (var r = t.getPropertiesMetadata(n), i = [], a = Object.keys(r), s = 0, u = a; s < u.length; s++) {
      var l = u[s];
      var d = r[l];
      var h = f(r[l]);
      var p = h.targetName || l;
      var _ = h.inject || h.multiInject;
      var A = new c.Target(o.TargetTypeEnum.ClassProperty, p, _);
      A.metadata = d;
      i.push(A);
    }
    var g = Object.getPrototypeOf(n.prototype).constructor;
    if (g !== Object) {
      var v = e(t, g);
      i = i.concat(v);
    }
    return i;
  }(e, n);
  return p.concat(_);
}
function l(e, t, n, a, s) {
  var u = s[e.toString()] || [];
  var l = f(u);
  var d = !0 !== l.unmanaged;
  var h = a[e];
  var p = l.inject || l.multiInject;
  if ((h = p || h) instanceof r.LazyServiceIdentifer) {
    h = h.unwrap();
  }
  if (d) {
    if (!t && (h === Object || h === Function || void 0 === h)) {
      var _ = i.MISSING_INJECT_ANNOTATION + " argument " + e + " in class " + n + ".";
      throw new Error(_);
    }
    var A = new c.Target(o.TargetTypeEnum.ConstructorArgument, l.targetName, h);
    A.metadata = u;
    return A;
  }
  return null;
}
function f(e) {
  var t = {};
  e.forEach(function (e) {
    t[e.key.toString()] = e.value;
  });
  return {
    inject: t[a.INJECT_TAG],
    multiInject: t[a.MULTI_INJECT_TAG],
    targetName: t[a.NAME_TAG],
    unmanaged: t[a.UNMANAGED_TAG]
  };
}
exports.getDependencies = function (e, t) {
  return u(e, s.getFunctionName(t), t, !1);
};
exports.getBaseClassDependencyCount = function e(t, n) {
  var r = Object.getPrototypeOf(n.prototype).constructor;
  if (r !== Object) {
    var i = u(t, s.getFunctionName(r), r, !0);
    var o = i.map(function (e) {
      return e.metadata.filter(function (e) {
        return e.key === a.UNMANAGED_TAG;
      });
    });
    var c = [].concat.apply([], o).length;
    var l = i.length - c;
    return l > 0 ? l : e(t, r);
  }
  return 0;
};