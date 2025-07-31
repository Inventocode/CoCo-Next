"use strict";

var r = this && this.__spreadArray || function (e, t) {
  for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) {
    e[i] = t[n];
  }
  return e;
};
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.getFunctionName = exports.getBaseClassDependencyCount = exports.getDependencies = void 0;
var i = require("../../1305");
var o = require("../../838/443");
var a = require("../../578");
var s = require("../../358");
var c = require("../../838/index");
Object.defineProperty(exports, "getFunctionName", {
  enumerable: !0,
  get: function () {
    return c.getFunctionName;
  }
});
var u = require("./1306/index");
function l(e, t, n, i) {
  var s = e.getConstructorMetadata(n);
  var c = s.compilerGeneratedMetadata;
  if (void 0 === c) {
    var l = o.MISSING_INJECTABLE_ANNOTATION + " " + t + ".";
    throw new Error(l);
  }
  var d = s.userGeneratedMetadata;
  var p = Object.keys(d);
  var _ = 0 === n.length && p.length > 0;
  var A = p.length > n.length;
  var g = function (e, t, n, r, i) {
    for (var o = [], a = 0; a < i; a++) {
      var s = f(a, e, t, n, r);
      if (null !== s) {
        o.push(s);
      }
    }
    return o;
  }(i, t, c, d, _ || A ? p.length : n.length);
  var v = function e(t, n) {
    for (var i = t.getPropertiesMetadata(n), o = [], s = Object.keys(i), c = 0, l = s; c < l.length; c++) {
      var f = l[c];
      var d = i[f];
      var p = h(i[f]);
      var _ = p.targetName || f;
      var A = p.inject || p.multiInject;
      var g = new u.Target(a.TargetTypeEnum.ClassProperty, _, A);
      g.metadata = d;
      o.push(g);
    }
    var v = Object.getPrototypeOf(n.prototype).constructor;
    if (v !== Object) {
      var m = e(t, v);
      o = r(r([], o), m);
    }
    return o;
  }(e, n);
  return r(r([], g), v);
}
function f(e, t, n, r, s) {
  var c = s[e.toString()] || [];
  var l = h(c);
  var f = !0 !== l.unmanaged;
  var d = r[e];
  var p = l.inject || l.multiInject;
  if ((d = p || d) instanceof i.LazyServiceIdentifer && (d = d.unwrap()), f) {
    if (!t && (d === Object || d === Function || void 0 === d)) {
      var _ = o.MISSING_INJECT_ANNOTATION + " argument " + e + " in class " + n + ".";
      throw new Error(_);
    }
    var A = new u.Target(a.TargetTypeEnum.ConstructorArgument, l.targetName, d);
    A.metadata = c;
    return A;
  }
  return null;
}
function h(e) {
  var t = {};
  e.forEach(function (e) {
    t[e.key.toString()] = e.value;
  });
  return {
    inject: t[s.INJECT_TAG],
    multiInject: t[s.MULTI_INJECT_TAG],
    targetName: t[s.NAME_TAG],
    unmanaged: t[s.UNMANAGED_TAG]
  };
}
exports.getDependencies = function (e, t) {
  return l(e, c.getFunctionName(t), t, !1);
};
exports.getBaseClassDependencyCount = function e(t, n) {
  var r = Object.getPrototypeOf(n.prototype).constructor;
  if (r !== Object) {
    var i = l(t, c.getFunctionName(r), r, !0);
    var o = i.map(function (e) {
      return e.metadata.filter(function (e) {
        return e.key === s.UNMANAGED_TAG;
      });
    });
    var a = [].concat.apply([], o).length;
    var u = i.length - a;
    return u > 0 ? u : e(t, r);
  }
  return 0;
};