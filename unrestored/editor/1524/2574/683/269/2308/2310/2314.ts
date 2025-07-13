"use strict";

import * as r from "../../1359";
import * as i from "../../2325/444";
import * as o from "../../580";
import * as a from "../../359";
import * as s from "../../845";
exports.getFunctionName = s.getFunctionName;
import * as c from "./1360/index";
function u(e, t, n, r) {
  var a = e.getConstructorMetadata(n);
  var s = a.compilerGeneratedMetadata;
  if (void 0 === s) {
    var u = i.MISSING_INJECTABLE_ANNOTATION + " " + t + ".";
    throw new Error(u);
  }
  var h = a.userGeneratedMetadata;
  var d = Object.keys(h);
  var p = function (e, t, n, r, i) {
    for (var o = [], a = 0; a < i; a++) {
      var s = l(a, e, t, n, r);
      if (null !== s) {
        o.push(s);
      }
    }
    return o;
  }(r, t, s, h, 0 === n.length && d.length > 0 ? d.length : n.length);
  var _ = function e(t, n) {
    for (var r = t.getPropertiesMetadata(n), i = [], a = Object.keys(r), s = 0, u = a; s < u.length; s++) {
      var l = u[s];
      var h = r[l];
      var d = f(r[l]);
      var p = d.targetName || l;
      var _ = d.inject || d.multiInject;
      var A = new c.Target(o.TargetTypeEnum.ClassProperty, p, _);
      A.metadata = h;
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
  var h = !0 !== l.unmanaged;
  var d = a[e];
  var p = l.inject || l.multiInject;
  if ((d = p || d) instanceof r.LazyServiceIdentifer && (d = d.unwrap()), h) {
    if (!t && (d === Object || d === Function || void 0 === d)) {
      var _ = i.MISSING_INJECT_ANNOTATION + " argument " + e + " in class " + n + ".";
      throw new Error(_);
    }
    var A = new c.Target(o.TargetTypeEnum.ConstructorArgument, l.targetName, d);
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