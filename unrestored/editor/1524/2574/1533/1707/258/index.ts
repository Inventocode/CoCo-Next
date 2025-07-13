"use strict";

var r;
var o;
var i;
import * as a from "./1224";
import * as s from "../../1738/272";
import * as c from "../../1738/194";
import * as l from "../../1626/231";
import * as u from "../../1738/332";
import * as d from "../../1250/824";
import * as p from "../../1735/422";
import * as f from "../../1738/398";
var h = require("../../1534/300/index").f;
import * as m from "../../1623/495";
import * as g from "../../1659/634";
import * as _ from "../../1735/247/index";
import * as v from "../../1534/814";
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
var R = !1;
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
    return !1;
  }
  var t = d(e);
  return u(k, t) || u(x, t);
};
for (r in k) if (i = (o = c[r]) && o.prototype) {
  p(i, j, o);
} else {
  N = !1;
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
if (N && m(O) !== C && g(O, C), s && !u(C, I)) {
  for (r in R = !0, h(C, I, {
    get: function () {
      return l(this) ? this[A] : void 0;
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
      return !1;
    }
    var t = d(e);
    return "DataView" === t || u(k, t) || u(x, t);
  },
  isTypedArray: D,
  TypedArray: w,
  TypedArrayPrototype: C
};