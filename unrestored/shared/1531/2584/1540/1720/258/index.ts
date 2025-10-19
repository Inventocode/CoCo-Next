/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：258
 */

"use strict";

var r;
var o;
var i;
var a = require("./1227");
var s = require("../../1623/272");
var c = require("../../1736/194");
var l = require("../../1738/231");
var u = require("../../1745/332");
var d = require("../../1253/825");
var p = require("../../1740/422");
var f = require("../../1745/398/index");
var h = require("../../1623/300").f;
var m = require("../../1660/495");
var g = require("../../1666/634");
var _ = require("../../1742/247/index");
var v = require("../../1541/815");
var b = c.Int8Array;
var y = b && b.prototype;
var E = c.Uint8ClampedArray;
var O = E && E.prototype;
var w = b && m(b);
var C = y && m(y);
var T = Object.prototype;
var S = T.isPrototypeOf;
var I = _("toStringTag");
var A = v("TYPED_ARRAY_TAG");
var j = v("TYPED_ARRAY_CONSTRUCTOR");
var N = a && !!g && "Opera" !== d(c.opera);
var R = false;
var k = {
  Int8Array: 1,
  Uint8Array: 1,
  Uint8ClampedArray: 1,
  Int16Array: 2,
  Uint16Array: 2,
  Int32Array: 4,
  Uint32Array: 4,
  Float32Array: 4,
  Float64Array: 8
};
var x = {
  BigInt64Array: 8,
  BigUint64Array: 8
};
var D = function (e) {
  if (!l(e)) {
    return false;
  }
  var t = d(e);
  return u(k, t) || u(x, t);
};
for (r in k) if (i = (o = c[r]) && o.prototype) {
  p(i, j, o);
} else {
  N = false;
}
for (r in x) if (i = (o = c[r]) && o.prototype) {
  p(i, j, o);
}
if ((!N || "function" != typeof w || w === Function.prototype) && (w = function () {
  throw TypeError("Incorrect invocation");
}, N)) {
  for (r in k) if (c[r]) {
    g(c[r], w);
  }
}
if ((!N || !C || C === T) && (C = w.prototype, N)) {
  for (r in k) if (c[r]) {
    g(c[r].prototype, C);
  }
}
if (N && m(O) !== C) {
  g(O, C);
}
if (s && !u(C, I)) {
  for (r in R = true, h(C, I, {
    get: function () {
      return l(this) ? this[A] : undefined;
    }
  }), k) if (c[r]) {
    p(c[r], A, r);
  }
}
module.exports = {
  NATIVE_ARRAY_BUFFER_VIEWS: N,
  TYPED_ARRAY_CONSTRUCTOR: j,
  TYPED_ARRAY_TAG: R && A,
  aTypedArray: function (e) {
    if (D(e)) {
      return e;
    }
    throw TypeError("Target is not a typed array");
  },
  aTypedArrayConstructor: function (e) {
    if (g && !S.call(w, e)) {
      throw TypeError("Target is not a typed array constructor");
    }
    return e;
  },
  exportTypedArrayMethod: function (e, t, n) {
    if (s) {
      if (n) {
        for (var r in k) {
          var o = c[r];
          if (o && u(o.prototype, e)) {
            try {
              delete o.prototype[e];
            } catch (i) {}
          }
        }
      }
      if (!(C[e] && !n)) {
        f(C, e, n ? t : N && y[e] || t);
      }
    }
  },
  exportTypedArrayStaticMethod: function (e, t, n) {
    var r;
    var o;
    if (s) {
      if (g) {
        if (n) {
          for (r in k) if ((o = c[r]) && u(o, e)) {
            try {
              delete o[e];
            } catch (i) {}
          }
        }
        if (w[e] && !n) {
          return;
        }
        try {
          return f(w, e, n ? t : N && w[e] || t);
        } catch (i) {}
      }
      for (r in k) if (!(!(o = c[r]) || o[e] && !n)) {
        f(o, e, t);
      }
    }
  },
  isView: function (e) {
    if (!l(e)) {
      return false;
    }
    var t = d(e);
    return "DataView" === t || u(k, t) || u(x, t);
  },
  isTypedArray: D,
  TypedArray: w,
  TypedArrayPrototype: C
};