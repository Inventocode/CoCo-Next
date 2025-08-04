"use strict";

export { xs as a };
export { Eo as b };
export { Hi as c };
export { at as d };
export { St as e };
export { f };
export { Qe as g };
export { Fo as h };
export { ys as i };
export { d as j };
export { pe as k };
export { Oo as l };
export { pt as m };
export { li as n };
export { $i as o };
export { Xi as p };
export { Co as q };
export { Ss as r };
export { _ as s };
export { M as t };
export { ae as u };
export { Gt as v };
export { lo as w };
export { ao as x };
export { _o as y };
export { Pe as z };
export { vs as A };
export { Kt as B };
export { ms as C };
export { $s as D };
export { P as E };
export { Mo as F };
export { p as G };
export { fi as H };
export { Fi as I };
export { Ui as J };
export { ps as K };
export { E as L };
export { zo as M };
export { ut as N };
export { C as O };
export { A as P };
export { To as Q };
export { di as R };
export { m as S };
require("../58/685");
var r;
var i = require("../301/224");
var a = require("../301/203");
var o = require("../11");
var s = require("../292");
var l = require("../57/index");
var c = require("../58/index");
var u = require("../27");
var h = require("../40");
var d = 303;
var p = 1e3;
var f = 1001;
var m = 3001;
function v() {}
Object.assign(v.prototype, {
  addEventListener: function (e, t) {
    if (void 0 === this._listeners) {
      this._listeners = {};
    }
    var n = this._listeners;
    if (void 0 === n[e]) {
      n[e] = [];
    }
    if (-1 === n[e].indexOf(t)) {
      n[e].push(t);
    }
  },
  hasEventListener: function (e, t) {
    if (void 0 === this._listeners) {
      return !1;
    }
    var n = this._listeners;
    return void 0 !== n[e] && -1 !== n[e].indexOf(t);
  },
  removeEventListener: function (e, t) {
    if (void 0 !== this._listeners) {
      var n = this._listeners[e];
      if (void 0 !== n) {
        var r = n.indexOf(t);
        if (-1 !== r) {
          n.splice(r, 1);
        }
      }
    }
  },
  dispatchEvent: function (e) {
    if (void 0 !== this._listeners) {
      var t = this._listeners[e.type];
      if (void 0 !== t) {
        e.target = this;
        for (var n = t.slice(0), r = 0, i = n.length; r < i; r++) {
          n[r].call(this, e);
        }
      }
    }
  }
});
for (var g = [], y = 0; y < 256; y++) {
  g[y] = (y < 16 ? "0" : "") + y.toString(16);
}
var x;
var b = 1234567;
var _ = {
  DEG2RAD: Math.PI / 180,
  RAD2DEG: 180 / Math.PI,
  generateUUID: function () {
    var e = 4294967295 * Math.random() | 0;
    var t = 4294967295 * Math.random() | 0;
    var n = 4294967295 * Math.random() | 0;
    var r = 4294967295 * Math.random() | 0;
    return (g[255 & e] + g[e >> 8 & 255] + g[e >> 16 & 255] + g[e >> 24 & 255] + "-" + g[255 & t] + g[t >> 8 & 255] + "-" + g[t >> 16 & 15 | 64] + g[t >> 24 & 255] + "-" + g[63 & n | 128] + g[n >> 8 & 255] + "-" + g[n >> 16 & 255] + g[n >> 24 & 255] + g[255 & r] + g[r >> 8 & 255] + g[r >> 16 & 255] + g[r >> 24 & 255]).toUpperCase();
  },
  clamp: function (e, t, n) {
    return Math.max(t, Math.min(n, e));
  },
  euclideanModulo: function (e, t) {
    return (e % t + t) % t;
  },
  mapLinear: function (e, t, n, r, i) {
    return r + (e - t) * (i - r) / (n - t);
  },
  lerp: function (e, t, n) {
    return (1 - n) * e + n * t;
  },
  smoothstep: function (e, t, n) {
    return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t)) * e * (3 - 2 * e);
  },
  smootherstep: function (e, t, n) {
    return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t)) * e * e * (e * (6 * e - 15) + 10);
  },
  randInt: function (e, t) {
    return e + Math.floor(Math.random() * (t - e + 1));
  },
  randFloat: function (e, t) {
    return e + Math.random() * (t - e);
  },
  randFloatSpread: function (e) {
    return e * (.5 - Math.random());
  },
  seededRandom: function (e) {
    if (void 0 !== e) {
      b = e % 2147483647;
    }
    return ((b = 16807 * b % 2147483647) - 1) / 2147483646;
  },
  degToRad: function (e) {
    return e * _.DEG2RAD;
  },
  radToDeg: function (e) {
    return e * _.RAD2DEG;
  },
  isPowerOfTwo: function (e) {
    return 0 === (e & e - 1) && 0 !== e;
  },
  ceilPowerOfTwo: function (e) {
    return Math.pow(2, Math.ceil(Math.log(e) / Math.LN2));
  },
  floorPowerOfTwo: function (e) {
    return Math.pow(2, Math.floor(Math.log(e) / Math.LN2));
  },
  setQuaternionFromProperEuler: function (e, t, n, r, i) {
    var a = Math.cos;
    var o = Math.sin;
    var s = a(n / 2);
    var l = o(n / 2);
    var c = a((t + r) / 2);
    var u = o((t + r) / 2);
    var h = a((t - r) / 2);
    var d = o((t - r) / 2);
    var p = a((r - t) / 2);
    var f = o((r - t) / 2);
    switch (i) {
      case "XYX":
        e.set(s * u, l * h, l * d, s * c);
        break;
      case "YZY":
        e.set(l * d, s * u, l * h, s * c);
        break;
      case "ZXZ":
        e.set(l * h, l * d, s * u, s * c);
        break;
      case "XZX":
        e.set(s * u, l * f, l * p, s * c);
        break;
      case "YXY":
        e.set(l * p, s * u, l * f, s * c);
        break;
      case "ZYZ":
        e.set(l * f, l * p, s * u, s * c);
        break;
      default:
        console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
    }
  }
};
var w = function () {
  function e() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    Object(u.a)(this, e);
    Object.defineProperty(this, "isVector2", {
      value: !0
    });
    this.x = t;
    this.y = n;
  }
  Object(h.a)(e, [{
    key: "width",
    get: function () {
      return this.x;
    },
    set: function (e) {
      this.x = e;
    }
  }, {
    key: "height",
    get: function () {
      return this.y;
    },
    set: function (e) {
      this.y = e;
    }
  }, {
    key: "set",
    value: function (e, t) {
      this.x = e;
      this.y = t;
      return this;
    }
  }, {
    key: "setScalar",
    value: function (e) {
      this.x = e;
      this.y = e;
      return this;
    }
  }, {
    key: "setX",
    value: function (e) {
      this.x = e;
      return this;
    }
  }, {
    key: "setY",
    value: function (e) {
      this.y = e;
      return this;
    }
  }, {
    key: "setComponent",
    value: function (e, t) {
      switch (e) {
        case 0:
          this.x = t;
          break;
        case 1:
          this.y = t;
          break;
        default:
          throw new Error("index is out of range: " + e);
      }
      return this;
    }
  }, {
    key: "getComponent",
    value: function (e) {
      switch (e) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw new Error("index is out of range: " + e);
      }
    }
  }, {
    key: "clone",
    value: function () {
      return new this.constructor(this.x, this.y);
    }
  }, {
    key: "copy",
    value: function (e) {
      this.x = e.x;
      this.y = e.y;
      return this;
    }
  }, {
    key: "add",
    value: function (e, t) {
      return void 0 !== t ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this);
    }
  }, {
    key: "addScalar",
    value: function (e) {
      this.x += e;
      this.y += e;
      return this;
    }
  }, {
    key: "addVectors",
    value: function (e, t) {
      this.x = e.x + t.x;
      this.y = e.y + t.y;
      return this;
    }
  }, {
    key: "addScaledVector",
    value: function (e, t) {
      this.x += e.x * t;
      this.y += e.y * t;
      return this;
    }
  }, {
    key: "sub",
    value: function (e, t) {
      return void 0 !== t ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this);
    }
  }, {
    key: "subScalar",
    value: function (e) {
      this.x -= e;
      this.y -= e;
      return this;
    }
  }, {
    key: "subVectors",
    value: function (e, t) {
      this.x = e.x - t.x;
      this.y = e.y - t.y;
      return this;
    }
  }, {
    key: "multiply",
    value: function (e) {
      this.x *= e.x;
      this.y *= e.y;
      return this;
    }
  }, {
    key: "multiplyScalar",
    value: function (e) {
      this.x *= e;
      this.y *= e;
      return this;
    }
  }, {
    key: "divide",
    value: function (e) {
      this.x /= e.x;
      this.y /= e.y;
      return this;
    }
  }, {
    key: "divideScalar",
    value: function (e) {
      return this.multiplyScalar(1 / e);
    }
  }, {
    key: "applyMatrix3",
    value: function (e) {
      var t = this.x;
      var n = this.y;
      var r = e.elements;
      this.x = r[0] * t + r[3] * n + r[6];
      this.y = r[1] * t + r[4] * n + r[7];
      return this;
    }
  }, {
    key: "min",
    value: function (e) {
      this.x = Math.min(this.x, e.x);
      this.y = Math.min(this.y, e.y);
      return this;
    }
  }, {
    key: "max",
    value: function (e) {
      this.x = Math.max(this.x, e.x);
      this.y = Math.max(this.y, e.y);
      return this;
    }
  }, {
    key: "clamp",
    value: function (e, t) {
      this.x = Math.max(e.x, Math.min(t.x, this.x));
      this.y = Math.max(e.y, Math.min(t.y, this.y));
      return this;
    }
  }, {
    key: "clampScalar",
    value: function (e, t) {
      this.x = Math.max(e, Math.min(t, this.x));
      this.y = Math.max(e, Math.min(t, this.y));
      return this;
    }
  }, {
    key: "clampLength",
    value: function (e, t) {
      var n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
    }
  }, {
    key: "floor",
    value: function () {
      this.x = Math.floor(this.x);
      this.y = Math.floor(this.y);
      return this;
    }
  }, {
    key: "ceil",
    value: function () {
      this.x = Math.ceil(this.x);
      this.y = Math.ceil(this.y);
      return this;
    }
  }, {
    key: "round",
    value: function () {
      this.x = Math.round(this.x);
      this.y = Math.round(this.y);
      return this;
    }
  }, {
    key: "roundToZero",
    value: function () {
      this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x);
      this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y);
      return this;
    }
  }, {
    key: "negate",
    value: function () {
      this.x = -this.x;
      this.y = -this.y;
      return this;
    }
  }, {
    key: "dot",
    value: function (e) {
      return this.x * e.x + this.y * e.y;
    }
  }, {
    key: "cross",
    value: function (e) {
      return this.x * e.y - this.y * e.x;
    }
  }, {
    key: "lengthSq",
    value: function () {
      return this.x * this.x + this.y * this.y;
    }
  }, {
    key: "length",
    value: function () {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
  }, {
    key: "manhattanLength",
    value: function () {
      return Math.abs(this.x) + Math.abs(this.y);
    }
  }, {
    key: "normalize",
    value: function () {
      return this.divideScalar(this.length() || 1);
    }
  }, {
    key: "angle",
    value: function () {
      var e = Math.atan2(-this.y, -this.x) + Math.PI;
      return e;
    }
  }, {
    key: "distanceTo",
    value: function (e) {
      return Math.sqrt(this.distanceToSquared(e));
    }
  }, {
    key: "distanceToSquared",
    value: function (e) {
      var t = this.x - e.x;
      var n = this.y - e.y;
      return t * t + n * n;
    }
  }, {
    key: "manhattanDistanceTo",
    value: function (e) {
      return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
    }
  }, {
    key: "setLength",
    value: function (e) {
      return this.normalize().multiplyScalar(e);
    }
  }, {
    key: "lerp",
    value: function (e, t) {
      this.x += (e.x - this.x) * t;
      this.y += (e.y - this.y) * t;
      return this;
    }
  }, {
    key: "lerpVectors",
    value: function (e, t, n) {
      this.x = e.x + (t.x - e.x) * n;
      this.y = e.y + (t.y - e.y) * n;
      return this;
    }
  }, {
    key: "equals",
    value: function (e) {
      return e.x === this.x && e.y === this.y;
    }
  }, {
    key: "fromArray",
    value: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      this.x = e[t];
      this.y = e[t + 1];
      return this;
    }
  }, {
    key: "toArray",
    value: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      e[t] = this.x;
      e[t + 1] = this.y;
      return e;
    }
  }, {
    key: "fromBufferAttribute",
    value: function (e, t, n) {
      if (void 0 !== n) {
        console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute().");
      }
      this.x = e.getX(t);
      this.y = e.getY(t);
      return this;
    }
  }, {
    key: "rotateAround",
    value: function (e, t) {
      var n = Math.cos(t);
      var r = Math.sin(t);
      var i = this.x - e.x;
      var a = this.y - e.y;
      this.x = i * n - a * r + e.x;
      this.y = i * r + a * n + e.y;
      return this;
    }
  }, {
    key: "random",
    value: function () {
      this.x = Math.random();
      this.y = Math.random();
      return this;
    }
  }]);
  return e;
}();
var M = function () {
  function e() {
    Object(u.a)(this, e);
    Object.defineProperty(this, "isMatrix3", {
      value: !0
    });
    this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1];
    if (arguments.length > 0) {
      console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.");
    }
  }
  Object(h.a)(e, [{
    key: "set",
    value: function (e, t, n, r, i, a, o, s, l) {
      var c = this.elements;
      c[0] = e;
      c[1] = r;
      c[2] = o;
      c[3] = t;
      c[4] = i;
      c[5] = s;
      c[6] = n;
      c[7] = a;
      c[8] = l;
      return this;
    }
  }, {
    key: "identity",
    value: function () {
      this.set(1, 0, 0, 0, 1, 0, 0, 0, 1);
      return this;
    }
  }, {
    key: "clone",
    value: function () {
      return new this.constructor().fromArray(this.elements);
    }
  }, {
    key: "copy",
    value: function (e) {
      var t = this.elements;
      var n = e.elements;
      t[0] = n[0];
      t[1] = n[1];
      t[2] = n[2];
      t[3] = n[3];
      t[4] = n[4];
      t[5] = n[5];
      t[6] = n[6];
      t[7] = n[7];
      t[8] = n[8];
      return this;
    }
  }, {
    key: "extractBasis",
    value: function (e, t, n) {
      e.setFromMatrix3Column(this, 0);
      t.setFromMatrix3Column(this, 1);
      n.setFromMatrix3Column(this, 2);
      return this;
    }
  }, {
    key: "setFromMatrix4",
    value: function (e) {
      var t = e.elements;
      this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]);
      return this;
    }
  }, {
    key: "multiply",
    value: function (e) {
      return this.multiplyMatrices(this, e);
    }
  }, {
    key: "premultiply",
    value: function (e) {
      return this.multiplyMatrices(e, this);
    }
  }, {
    key: "multiplyMatrices",
    value: function (e, t) {
      var n = e.elements;
      var r = t.elements;
      var i = this.elements;
      var a = n[0];
      var o = n[3];
      var s = n[6];
      var l = n[1];
      var c = n[4];
      var u = n[7];
      var h = n[2];
      var d = n[5];
      var p = n[8];
      var f = r[0];
      var m = r[3];
      var v = r[6];
      var g = r[1];
      var y = r[4];
      var x = r[7];
      var b = r[2];
      var _ = r[5];
      var w = r[8];
      i[0] = a * f + o * g + s * b;
      i[3] = a * m + o * y + s * _;
      i[6] = a * v + o * x + s * w;
      i[1] = l * f + c * g + u * b;
      i[4] = l * m + c * y + u * _;
      i[7] = l * v + c * x + u * w;
      i[2] = h * f + d * g + p * b;
      i[5] = h * m + d * y + p * _;
      i[8] = h * v + d * x + p * w;
      return this;
    }
  }, {
    key: "multiplyScalar",
    value: function (e) {
      var t = this.elements;
      t[0] *= e;
      t[3] *= e;
      t[6] *= e;
      t[1] *= e;
      t[4] *= e;
      t[7] *= e;
      t[2] *= e;
      t[5] *= e;
      t[8] *= e;
      return this;
    }
  }, {
    key: "determinant",
    value: function () {
      var e = this.elements;
      var t = e[0];
      var n = e[1];
      var r = e[2];
      var i = e[3];
      var a = e[4];
      var o = e[5];
      var s = e[6];
      var l = e[7];
      var c = e[8];
      return t * a * c - t * o * l - n * i * c + n * o * s + r * i * l - r * a * s;
    }
  }, {
    key: "getInverse",
    value: function (e, t) {
      if (void 0 !== t) {
        console.warn("THREE.Matrix3: .getInverse() can no longer be configured to throw on degenerate.");
      }
      var n = e.elements;
      var r = this.elements;
      var i = n[0];
      var a = n[1];
      var o = n[2];
      var s = n[3];
      var l = n[4];
      var c = n[5];
      var u = n[6];
      var h = n[7];
      var d = n[8];
      var p = d * l - c * h;
      var f = c * u - d * s;
      var m = h * s - l * u;
      var v = i * p + a * f + o * m;
      if (0 === v) {
        return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
      }
      var g = 1 / v;
      r[0] = p * g;
      r[1] = (o * h - d * a) * g;
      r[2] = (c * a - o * l) * g;
      r[3] = f * g;
      r[4] = (d * i - o * u) * g;
      r[5] = (o * s - c * i) * g;
      r[6] = m * g;
      r[7] = (a * u - h * i) * g;
      r[8] = (l * i - a * s) * g;
      return this;
    }
  }, {
    key: "transpose",
    value: function () {
      var e;
      var t = this.elements;
      e = t[1];
      t[1] = t[3];
      t[3] = e;
      e = t[2];
      t[2] = t[6];
      t[6] = e;
      e = t[5];
      t[5] = t[7];
      t[7] = e;
      return this;
    }
  }, {
    key: "getNormalMatrix",
    value: function (e) {
      return this.setFromMatrix4(e).getInverse(this).transpose();
    }
  }, {
    key: "transposeIntoArray",
    value: function (e) {
      var t = this.elements;
      e[0] = t[0];
      e[1] = t[3];
      e[2] = t[6];
      e[3] = t[1];
      e[4] = t[4];
      e[5] = t[7];
      e[6] = t[2];
      e[7] = t[5];
      e[8] = t[8];
      return this;
    }
  }, {
    key: "setUvTransform",
    value: function (e, t, n, r, i, a, o) {
      var s = Math.cos(i);
      var l = Math.sin(i);
      this.set(n * s, n * l, -n * (s * a + l * o) + a + e, -r * l, r * s, -r * (-l * a + s * o) + o + t, 0, 0, 1);
    }
  }, {
    key: "scale",
    value: function (e, t) {
      var n = this.elements;
      n[0] *= e;
      n[3] *= e;
      n[6] *= e;
      n[1] *= t;
      n[4] *= t;
      n[7] *= t;
      return this;
    }
  }, {
    key: "rotate",
    value: function (e) {
      var t = Math.cos(e);
      var n = Math.sin(e);
      var r = this.elements;
      var i = r[0];
      var a = r[3];
      var o = r[6];
      var s = r[1];
      var l = r[4];
      var c = r[7];
      r[0] = t * i + n * s;
      r[3] = t * a + n * l;
      r[6] = t * o + n * c;
      r[1] = -n * i + t * s;
      r[4] = -n * a + t * l;
      r[7] = -n * o + t * c;
      return this;
    }
  }, {
    key: "translate",
    value: function (e, t) {
      var n = this.elements;
      n[0] += e * n[2];
      n[3] += e * n[5];
      n[6] += e * n[8];
      n[1] += t * n[2];
      n[4] += t * n[5];
      n[7] += t * n[8];
      return this;
    }
  }, {
    key: "equals",
    value: function (e) {
      for (var t = this.elements, n = e.elements, r = 0; r < 9; r++) {
        if (t[r] !== n[r]) {
          return !1;
        }
      }
      return !0;
    }
  }, {
    key: "fromArray",
    value: function (e) {
      for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = 0; n < 9; n++) {
        this.elements[n] = e[n + t];
      }
      return this;
    }
  }, {
    key: "toArray",
    value: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      var n = this.elements;
      e[t] = n[0];
      e[t + 1] = n[1];
      e[t + 2] = n[2];
      e[t + 3] = n[3];
      e[t + 4] = n[4];
      e[t + 5] = n[5];
      e[t + 6] = n[6];
      e[t + 7] = n[7];
      e[t + 8] = n[8];
      return e;
    }
  }]);
  return e;
}();
var S = {
  getDataURL: function (e) {
    if (/^data:/i.test(e.src)) {
      return e.src;
    }
    if ("undefined" == typeof HTMLCanvasElement) {
      return e.src;
    }
    var t;
    if (e instanceof HTMLCanvasElement) {
      t = e;
    } else {
      if (void 0 === x) {
        x = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
      }
      x.width = e.width;
      x.height = e.height;
      var n = x.getContext("2d");
      if (e instanceof ImageData) {
        n.putImageData(e, 0, 0);
      } else {
        n.drawImage(e, 0, 0, e.width, e.height);
      }
      t = x;
    }
    return t.width > 2048 || t.height > 2048 ? t.toDataURL("image/jpeg", .6) : t.toDataURL("image/png");
  }
};
var T = 0;
function E(e, t, n, r, i, a, o, s, l, c) {
  Object.defineProperty(this, "id", {
    value: T++
  });
  this.uuid = _.generateUUID();
  this.name = "";
  this.image = void 0 !== e ? e : E.DEFAULT_IMAGE;
  this.mipmaps = [];
  this.mapping = void 0 !== t ? t : E.DEFAULT_MAPPING;
  this.wrapS = void 0 !== n ? n : f;
  this.wrapT = void 0 !== r ? r : f;
  this.magFilter = void 0 !== i ? i : 1006;
  this.minFilter = void 0 !== a ? a : 1008;
  this.anisotropy = void 0 !== l ? l : 1;
  this.format = void 0 !== o ? o : 1023;
  this.internalFormat = null;
  this.type = void 0 !== s ? s : 1009;
  this.offset = new w(0, 0);
  this.repeat = new w(1, 1);
  this.center = new w(0, 0);
  this.rotation = 0;
  this.matrixAutoUpdate = !0;
  this.matrix = new M();
  this.generateMipmaps = !0;
  this.premultiplyAlpha = !1;
  this.flipY = !0;
  this.unpackAlignment = 4;
  this.encoding = void 0 !== c ? c : 3e3;
  this.version = 0;
  this.onUpdate = null;
}
E.DEFAULT_IMAGE = void 0;
E.DEFAULT_MAPPING = 300;
E.prototype = Object.assign(Object.create(v.prototype), {
  constructor: E,
  isTexture: !0,
  updateMatrix: function () {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  },
  clone: function () {
    return new this.constructor().copy(this);
  },
  copy: function (e) {
    this.name = e.name;
    this.image = e.image;
    this.mipmaps = e.mipmaps.slice(0);
    this.mapping = e.mapping;
    this.wrapS = e.wrapS;
    this.wrapT = e.wrapT;
    this.magFilter = e.magFilter;
    this.minFilter = e.minFilter;
    this.anisotropy = e.anisotropy;
    this.format = e.format;
    this.internalFormat = e.internalFormat;
    this.type = e.type;
    this.offset.copy(e.offset);
    this.repeat.copy(e.repeat);
    this.center.copy(e.center);
    this.rotation = e.rotation;
    this.matrixAutoUpdate = e.matrixAutoUpdate;
    this.matrix.copy(e.matrix);
    this.generateMipmaps = e.generateMipmaps;
    this.premultiplyAlpha = e.premultiplyAlpha;
    this.flipY = e.flipY;
    this.unpackAlignment = e.unpackAlignment;
    this.encoding = e.encoding;
    return this;
  },
  toJSON: function (e) {
    var t = void 0 === e || "string" === typeof e;
    if (!t && void 0 !== e.textures[this.uuid]) {
      return e.textures[this.uuid];
    }
    var n = {
      metadata: {
        version: 4.5,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      mapping: this.mapping,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      type: this.type,
      encoding: this.encoding,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    if (void 0 !== this.image) {
      var r = this.image;
      if (void 0 === r.uuid) {
        r.uuid = _.generateUUID();
      }
      if (!t && void 0 === e.images[r.uuid]) {
        var i;
        if (Array.isArray(r)) {
          i = [];
          for (var a = 0, o = r.length; a < o; a++) {
            i.push(S.getDataURL(r[a]));
          }
        } else {
          i = S.getDataURL(r);
        }
        e.images[r.uuid] = {
          uuid: r.uuid,
          url: i
        };
      }
      n.image = r.uuid;
    }
    if (!t) {
      e.textures[this.uuid] = n;
    }
    return n;
  },
  dispose: function () {
    this.dispatchEvent({
      type: "dispose"
    });
  },
  transformUv: function (e) {
    if (300 !== this.mapping) {
      return e;
    }
    e.applyMatrix3(this.matrix);
    if (e.x < 0 || e.x > 1) {
      switch (this.wrapS) {
        case p:
          e.x = e.x - Math.floor(e.x);
          break;
        case f:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case 1002:
          if (1 === Math.abs(Math.floor(e.x) % 2)) {
            e.x = Math.ceil(e.x) - e.x;
          } else {
            e.x = e.x - Math.floor(e.x);
          }
      }
    }
    if (e.y < 0 || e.y > 1) {
      switch (this.wrapT) {
        case p:
          e.y = e.y - Math.floor(e.y);
          break;
        case f:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case 1002:
          if (1 === Math.abs(Math.floor(e.y) % 2)) {
            e.y = Math.ceil(e.y) - e.y;
          } else {
            e.y = e.y - Math.floor(e.y);
          }
      }
    }
    if (this.flipY) {
      e.y = 1 - e.y;
    }
    return e;
  }
});
Object.defineProperty(E.prototype, "needsUpdate", {
  set: function (e) {
    if (!0 === e) {
      this.version++;
    }
  }
});
var A = function () {
  function e() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
    Object(u.a)(this, e);
    Object.defineProperty(this, "isVector4", {
      value: !0
    });
    this.x = t;
    this.y = n;
    this.z = r;
    this.w = i;
  }
  Object(h.a)(e, [{
    key: "width",
    get: function () {
      return this.z;
    },
    set: function (e) {
      this.z = e;
    }
  }, {
    key: "height",
    get: function () {
      return this.w;
    },
    set: function (e) {
      this.w = e;
    }
  }, {
    key: "set",
    value: function (e, t, n, r) {
      this.x = e;
      this.y = t;
      this.z = n;
      this.w = r;
      return this;
    }
  }, {
    key: "setScalar",
    value: function (e) {
      this.x = e;
      this.y = e;
      this.z = e;
      this.w = e;
      return this;
    }
  }, {
    key: "setX",
    value: function (e) {
      this.x = e;
      return this;
    }
  }, {
    key: "setY",
    value: function (e) {
      this.y = e;
      return this;
    }
  }, {
    key: "setZ",
    value: function (e) {
      this.z = e;
      return this;
    }
  }, {
    key: "setW",
    value: function (e) {
      this.w = e;
      return this;
    }
  }, {
    key: "setComponent",
    value: function (e, t) {
      switch (e) {
        case 0:
          this.x = t;
          break;
        case 1:
          this.y = t;
          break;
        case 2:
          this.z = t;
          break;
        case 3:
          this.w = t;
          break;
        default:
          throw new Error("index is out of range: " + e);
      }
      return this;
    }
  }, {
    key: "getComponent",
    value: function (e) {
      switch (e) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        case 3:
          return this.w;
        default:
          throw new Error("index is out of range: " + e);
      }
    }
  }, {
    key: "clone",
    value: function () {
      return new this.constructor(this.x, this.y, this.z, this.w);
    }
  }, {
    key: "copy",
    value: function (e) {
      this.x = e.x;
      this.y = e.y;
      this.z = e.z;
      this.w = void 0 !== e.w ? e.w : 1;
      return this;
    }
  }, {
    key: "add",
    value: function (e, t) {
      return void 0 !== t ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this);
    }
  }, {
    key: "addScalar",
    value: function (e) {
      this.x += e;
      this.y += e;
      this.z += e;
      this.w += e;
      return this;
    }
  }, {
    key: "addVectors",
    value: function (e, t) {
      this.x = e.x + t.x;
      this.y = e.y + t.y;
      this.z = e.z + t.z;
      this.w = e.w + t.w;
      return this;
    }
  }, {
    key: "addScaledVector",
    value: function (e, t) {
      this.x += e.x * t;
      this.y += e.y * t;
      this.z += e.z * t;
      this.w += e.w * t;
      return this;
    }
  }, {
    key: "sub",
    value: function (e, t) {
      return void 0 !== t ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this);
    }
  }, {
    key: "subScalar",
    value: function (e) {
      this.x -= e;
      this.y -= e;
      this.z -= e;
      this.w -= e;
      return this;
    }
  }, {
    key: "subVectors",
    value: function (e, t) {
      this.x = e.x - t.x;
      this.y = e.y - t.y;
      this.z = e.z - t.z;
      this.w = e.w - t.w;
      return this;
    }
  }, {
    key: "multiplyScalar",
    value: function (e) {
      this.x *= e;
      this.y *= e;
      this.z *= e;
      this.w *= e;
      return this;
    }
  }, {
    key: "applyMatrix4",
    value: function (e) {
      var t = this.x;
      var n = this.y;
      var r = this.z;
      var i = this.w;
      var a = e.elements;
      this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * i;
      this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * i;
      this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * i;
      this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * i;
      return this;
    }
  }, {
    key: "divideScalar",
    value: function (e) {
      return this.multiplyScalar(1 / e);
    }
  }, {
    key: "setAxisAngleFromQuaternion",
    value: function (e) {
      this.w = 2 * Math.acos(e.w);
      var t = Math.sqrt(1 - e.w * e.w);
      if (t < 1e-4) {
        this.x = 1;
        this.y = 0;
        this.z = 0;
      } else {
        this.x = e.x / t;
        this.y = e.y / t;
        this.z = e.z / t;
      }
      return this;
    }
  }, {
    key: "setAxisAngleFromRotationMatrix",
    value: function (e) {
      var t;
      var n;
      var r;
      var i;
      var a = e.elements;
      var o = a[0];
      var s = a[4];
      var l = a[8];
      var c = a[1];
      var u = a[5];
      var h = a[9];
      var d = a[2];
      var p = a[6];
      var f = a[10];
      if (Math.abs(s - c) < .01 && Math.abs(l - d) < .01 && Math.abs(h - p) < .01) {
        if (Math.abs(s + c) < .1 && Math.abs(l + d) < .1 && Math.abs(h + p) < .1 && Math.abs(o + u + f - 3) < .1) {
          this.set(1, 0, 0, 0);
          return this;
        }
        t = Math.PI;
        var m = (o + 1) / 2;
        var v = (u + 1) / 2;
        var g = (f + 1) / 2;
        var y = (s + c) / 4;
        var x = (l + d) / 4;
        var b = (h + p) / 4;
        if (m > v && m > g) {
          if (m < .01) {
            n = 0;
            r = .707106781;
            i = .707106781;
          } else {
            r = y / (n = Math.sqrt(m));
            i = x / n;
          }
        } else {
          if (v > g) {
            if (v < .01) {
              n = .707106781;
              r = 0;
              i = .707106781;
            } else {
              n = y / (r = Math.sqrt(v));
              i = b / r;
            }
          } else {
            if (g < .01) {
              n = .707106781;
              r = .707106781;
              i = 0;
            } else {
              n = x / (i = Math.sqrt(g));
              r = b / i;
            }
          }
        }
        this.set(n, r, i, t);
        return this;
      }
      var _ = Math.sqrt((p - h) * (p - h) + (l - d) * (l - d) + (c - s) * (c - s));
      if (Math.abs(_) < .001) {
        _ = 1;
      }
      this.x = (p - h) / _;
      this.y = (l - d) / _;
      this.z = (c - s) / _;
      this.w = Math.acos((o + u + f - 1) / 2);
      return this;
    }
  }, {
    key: "min",
    value: function (e) {
      this.x = Math.min(this.x, e.x);
      this.y = Math.min(this.y, e.y);
      this.z = Math.min(this.z, e.z);
      this.w = Math.min(this.w, e.w);
      return this;
    }
  }, {
    key: "max",
    value: function (e) {
      this.x = Math.max(this.x, e.x);
      this.y = Math.max(this.y, e.y);
      this.z = Math.max(this.z, e.z);
      this.w = Math.max(this.w, e.w);
      return this;
    }
  }, {
    key: "clamp",
    value: function (e, t) {
      this.x = Math.max(e.x, Math.min(t.x, this.x));
      this.y = Math.max(e.y, Math.min(t.y, this.y));
      this.z = Math.max(e.z, Math.min(t.z, this.z));
      this.w = Math.max(e.w, Math.min(t.w, this.w));
      return this;
    }
  }, {
    key: "clampScalar",
    value: function (e, t) {
      this.x = Math.max(e, Math.min(t, this.x));
      this.y = Math.max(e, Math.min(t, this.y));
      this.z = Math.max(e, Math.min(t, this.z));
      this.w = Math.max(e, Math.min(t, this.w));
      return this;
    }
  }, {
    key: "clampLength",
    value: function (e, t) {
      var n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
    }
  }, {
    key: "floor",
    value: function () {
      this.x = Math.floor(this.x);
      this.y = Math.floor(this.y);
      this.z = Math.floor(this.z);
      this.w = Math.floor(this.w);
      return this;
    }
  }, {
    key: "ceil",
    value: function () {
      this.x = Math.ceil(this.x);
      this.y = Math.ceil(this.y);
      this.z = Math.ceil(this.z);
      this.w = Math.ceil(this.w);
      return this;
    }
  }, {
    key: "round",
    value: function () {
      this.x = Math.round(this.x);
      this.y = Math.round(this.y);
      this.z = Math.round(this.z);
      this.w = Math.round(this.w);
      return this;
    }
  }, {
    key: "roundToZero",
    value: function () {
      this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x);
      this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y);
      this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z);
      this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w);
      return this;
    }
  }, {
    key: "negate",
    value: function () {
      this.x = -this.x;
      this.y = -this.y;
      this.z = -this.z;
      this.w = -this.w;
      return this;
    }
  }, {
    key: "dot",
    value: function (e) {
      return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
    }
  }, {
    key: "lengthSq",
    value: function () {
      return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
    }
  }, {
    key: "length",
    value: function () {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    }
  }, {
    key: "manhattanLength",
    value: function () {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
    }
  }, {
    key: "normalize",
    value: function () {
      return this.divideScalar(this.length() || 1);
    }
  }, {
    key: "setLength",
    value: function (e) {
      return this.normalize().multiplyScalar(e);
    }
  }, {
    key: "lerp",
    value: function (e, t) {
      this.x += (e.x - this.x) * t;
      this.y += (e.y - this.y) * t;
      this.z += (e.z - this.z) * t;
      this.w += (e.w - this.w) * t;
      return this;
    }
  }, {
    key: "lerpVectors",
    value: function (e, t, n) {
      this.x = e.x + (t.x - e.x) * n;
      this.y = e.y + (t.y - e.y) * n;
      this.z = e.z + (t.z - e.z) * n;
      this.w = e.w + (t.w - e.w) * n;
      return this;
    }
  }, {
    key: "equals",
    value: function (e) {
      return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
    }
  }, {
    key: "fromArray",
    value: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      this.x = e[t];
      this.y = e[t + 1];
      this.z = e[t + 2];
      this.w = e[t + 3];
      return this;
    }
  }, {
    key: "toArray",
    value: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      e[t] = this.x;
      e[t + 1] = this.y;
      e[t + 2] = this.z;
      e[t + 3] = this.w;
      return e;
    }
  }, {
    key: "fromBufferAttribute",
    value: function (e, t, n) {
      if (void 0 !== n) {
        console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute().");
      }
      this.x = e.getX(t);
      this.y = e.getY(t);
      this.z = e.getZ(t);
      this.w = e.getW(t);
      return this;
    }
  }, {
    key: "random",
    value: function () {
      this.x = Math.random();
      this.y = Math.random();
      this.z = Math.random();
      this.w = Math.random();
      return this;
    }
  }]);
  return e;
}();
function L(e, t, n) {
  this.width = e;
  this.height = t;
  this.scissor = new A(0, 0, e, t);
  this.scissorTest = !1;
  this.viewport = new A(0, 0, e, t);
  n = n || {};
  this.texture = new E(void 0, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding);
  this.texture.image = {};
  this.texture.image.width = e;
  this.texture.image.height = t;
  this.texture.generateMipmaps = void 0 !== n.generateMipmaps && n.generateMipmaps;
  this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : 1006;
  this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer;
  this.stencilBuffer = void 0 !== n.stencilBuffer && n.stencilBuffer;
  this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null;
}
function R(e, t, n) {
  L.call(this, e, t, n);
  this.samples = 4;
}
L.prototype = Object.assign(Object.create(v.prototype), {
  constructor: L,
  isWebGLRenderTarget: !0,
  setSize: function (e, t) {
    if (!(this.width === e && this.height === t)) {
      this.width = e;
      this.height = t;
      this.texture.image.width = e;
      this.texture.image.height = t;
      this.dispose();
    }
    this.viewport.set(0, 0, e, t);
    this.scissor.set(0, 0, e, t);
  },
  clone: function () {
    return new this.constructor().copy(this);
  },
  copy: function (e) {
    this.width = e.width;
    this.height = e.height;
    this.viewport.copy(e.viewport);
    this.texture = e.texture.clone();
    this.depthBuffer = e.depthBuffer;
    this.stencilBuffer = e.stencilBuffer;
    this.depthTexture = e.depthTexture;
    return this;
  },
  dispose: function () {
    this.dispatchEvent({
      type: "dispose"
    });
  }
});
R.prototype = Object.assign(Object.create(L.prototype), {
  constructor: R,
  isWebGLMultisampleRenderTarget: !0,
  copy: function (e) {
    L.prototype.copy.call(this, e);
    this.samples = e.samples;
    return this;
  }
});
var P = function () {
  function e() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
    Object(u.a)(this, e);
    Object.defineProperty(this, "isQuaternion", {
      value: !0
    });
    this._x = t;
    this._y = n;
    this._z = r;
    this._w = i;
  }
  Object(h.a)(e, [{
    key: "x",
    get: function () {
      return this._x;
    },
    set: function (e) {
      this._x = e;
      this._onChangeCallback();
    }
  }, {
    key: "y",
    get: function () {
      return this._y;
    },
    set: function (e) {
      this._y = e;
      this._onChangeCallback();
    }
  }, {
    key: "z",
    get: function () {
      return this._z;
    },
    set: function (e) {
      this._z = e;
      this._onChangeCallback();
    }
  }, {
    key: "w",
    get: function () {
      return this._w;
    },
    set: function (e) {
      this._w = e;
      this._onChangeCallback();
    }
  }, {
    key: "set",
    value: function (e, t, n, r) {
      this._x = e;
      this._y = t;
      this._z = n;
      this._w = r;
      this._onChangeCallback();
      return this;
    }
  }, {
    key: "clone",
    value: function () {
      return new this.constructor(this._x, this._y, this._z, this._w);
    }
  }, {
    key: "copy",
    value: function (e) {
      this._x = e.x;
      this._y = e.y;
      this._z = e.z;
      this._w = e.w;
      this._onChangeCallback();
      return this;
    }
  }, {
    key: "setFromEuler",
    value: function (e, t) {
      if (!e || !e.isEuler) {
        throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
      }
      var n = e._x;
      var r = e._y;
      var i = e._z;
      var a = e._order;
      var o = Math.cos;
      var s = Math.sin;
      var l = o(n / 2);
      var c = o(r / 2);
      var u = o(i / 2);
      var h = s(n / 2);
      var d = s(r / 2);
      var p = s(i / 2);
      switch (a) {
        case "XYZ":
          this._x = h * c * u + l * d * p;
          this._y = l * d * u - h * c * p;
          this._z = l * c * p + h * d * u;
          this._w = l * c * u - h * d * p;
          break;
        case "YXZ":
          this._x = h * c * u + l * d * p;
          this._y = l * d * u - h * c * p;
          this._z = l * c * p - h * d * u;
          this._w = l * c * u + h * d * p;
          break;
        case "ZXY":
          this._x = h * c * u - l * d * p;
          this._y = l * d * u + h * c * p;
          this._z = l * c * p + h * d * u;
          this._w = l * c * u - h * d * p;
          break;
        case "ZYX":
          this._x = h * c * u - l * d * p;
          this._y = l * d * u + h * c * p;
          this._z = l * c * p - h * d * u;
          this._w = l * c * u + h * d * p;
          break;
        case "YZX":
          this._x = h * c * u + l * d * p;
          this._y = l * d * u + h * c * p;
          this._z = l * c * p - h * d * u;
          this._w = l * c * u - h * d * p;
          break;
        case "XZY":
          this._x = h * c * u - l * d * p;
          this._y = l * d * u - h * c * p;
          this._z = l * c * p + h * d * u;
          this._w = l * c * u + h * d * p;
          break;
        default:
          console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
      }
      if (!1 !== t) {
        this._onChangeCallback();
      }
      return this;
    }
  }, {
    key: "setFromAxisAngle",
    value: function (e, t) {
      var n = t / 2;
      var r = Math.sin(n);
      this._x = e.x * r;
      this._y = e.y * r;
      this._z = e.z * r;
      this._w = Math.cos(n);
      this._onChangeCallback();
      return this;
    }
  }, {
    key: "setFromRotationMatrix",
    value: function (e) {
      var t = e.elements;
      var n = t[0];
      var r = t[4];
      var i = t[8];
      var a = t[1];
      var o = t[5];
      var s = t[9];
      var l = t[2];
      var c = t[6];
      var u = t[10];
      var h = n + o + u;
      if (h > 0) {
        var d = .5 / Math.sqrt(h + 1);
        this._w = .25 / d;
        this._x = (c - s) * d;
        this._y = (i - l) * d;
        this._z = (a - r) * d;
      } else if (n > o && n > u) {
        var p = 2 * Math.sqrt(1 + n - o - u);
        this._w = (c - s) / p;
        this._x = .25 * p;
        this._y = (r + a) / p;
        this._z = (i + l) / p;
      } else if (o > u) {
        var f = 2 * Math.sqrt(1 + o - n - u);
        this._w = (i - l) / f;
        this._x = (r + a) / f;
        this._y = .25 * f;
        this._z = (s + c) / f;
      } else {
        var m = 2 * Math.sqrt(1 + u - n - o);
        this._w = (a - r) / m;
        this._x = (i + l) / m;
        this._y = (s + c) / m;
        this._z = .25 * m;
      }
      this._onChangeCallback();
      return this;
    }
  }, {
    key: "setFromUnitVectors",
    value: function (e, t) {
      var n = e.dot(t) + 1;
      if (n < 1e-6) {
        n = 0;
        if (Math.abs(e.x) > Math.abs(e.z)) {
          this._x = -e.y;
          this._y = e.x;
          this._z = 0;
          this._w = n;
        } else {
          this._x = 0;
          this._y = -e.z;
          this._z = e.y;
          this._w = n;
        }
      } else {
        this._x = e.y * t.z - e.z * t.y;
        this._y = e.z * t.x - e.x * t.z;
        this._z = e.x * t.y - e.y * t.x;
        this._w = n;
      }
      return this.normalize();
    }
  }, {
    key: "angleTo",
    value: function (e) {
      return 2 * Math.acos(Math.abs(_.clamp(this.dot(e), -1, 1)));
    }
  }, {
    key: "rotateTowards",
    value: function (e, t) {
      var n = this.angleTo(e);
      if (0 === n) {
        return this;
      }
      var r = Math.min(1, t / n);
      this.slerp(e, r);
      return this;
    }
  }, {
    key: "identity",
    value: function () {
      return this.set(0, 0, 0, 1);
    }
  }, {
    key: "inverse",
    value: function () {
      return this.conjugate();
    }
  }, {
    key: "conjugate",
    value: function () {
      this._x *= -1;
      this._y *= -1;
      this._z *= -1;
      this._onChangeCallback();
      return this;
    }
  }, {
    key: "dot",
    value: function (e) {
      return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
    }
  }, {
    key: "lengthSq",
    value: function () {
      return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
    }
  }, {
    key: "length",
    value: function () {
      return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
    }
  }, {
    key: "normalize",
    value: function () {
      var e = this.length();
      if (0 === e) {
        this._x = 0;
        this._y = 0;
        this._z = 0;
        this._w = 1;
      } else {
        e = 1 / e;
        this._x = this._x * e;
        this._y = this._y * e;
        this._z = this._z * e;
        this._w = this._w * e;
      }
      this._onChangeCallback();
      return this;
    }
  }, {
    key: "multiply",
    value: function (e, t) {
      return void 0 !== t ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(e, t)) : this.multiplyQuaternions(this, e);
    }
  }, {
    key: "premultiply",
    value: function (e) {
      return this.multiplyQuaternions(e, this);
    }
  }, {
    key: "multiplyQuaternions",
    value: function (e, t) {
      var n = e._x;
      var r = e._y;
      var i = e._z;
      var a = e._w;
      var o = t._x;
      var s = t._y;
      var l = t._z;
      var c = t._w;
      this._x = n * c + a * o + r * l - i * s;
      this._y = r * c + a * s + i * o - n * l;
      this._z = i * c + a * l + n * s - r * o;
      this._w = a * c - n * o - r * s - i * l;
      this._onChangeCallback();
      return this;
    }
  }, {
    key: "slerp",
    value: function (e, t) {
      if (0 === t) {
        return this;
      }
      if (1 === t) {
        return this.copy(e);
      }
      var n = this._x;
      var r = this._y;
      var i = this._z;
      var a = this._w;
      var o = a * e._w + n * e._x + r * e._y + i * e._z;
      if (o < 0) {
        this._w = -e._w;
        this._x = -e._x;
        this._y = -e._y;
        this._z = -e._z;
        o = -o;
      } else {
        this.copy(e);
      }
      if (o >= 1) {
        this._w = a;
        this._x = n;
        this._y = r;
        this._z = i;
        return this;
      }
      var s = 1 - o * o;
      if (s <= Number.EPSILON) {
        var l = 1 - t;
        this._w = l * a + t * this._w;
        this._x = l * n + t * this._x;
        this._y = l * r + t * this._y;
        this._z = l * i + t * this._z;
        this.normalize();
        this._onChangeCallback();
        return this;
      }
      var c = Math.sqrt(s);
      var u = Math.atan2(c, o);
      var h = Math.sin((1 - t) * u) / c;
      var d = Math.sin(t * u) / c;
      this._w = a * h + this._w * d;
      this._x = n * h + this._x * d;
      this._y = r * h + this._y * d;
      this._z = i * h + this._z * d;
      this._onChangeCallback();
      return this;
    }
  }, {
    key: "equals",
    value: function (e) {
      return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
    }
  }, {
    key: "fromArray",
    value: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      this._x = e[t];
      this._y = e[t + 1];
      this._z = e[t + 2];
      this._w = e[t + 3];
      this._onChangeCallback();
      return this;
    }
  }, {
    key: "toArray",
    value: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      e[t] = this._x;
      e[t + 1] = this._y;
      e[t + 2] = this._z;
      e[t + 3] = this._w;
      return e;
    }
  }, {
    key: "fromBufferAttribute",
    value: function (e, t) {
      this._x = e.getX(t);
      this._y = e.getY(t);
      this._z = e.getZ(t);
      this._w = e.getW(t);
      return this;
    }
  }, {
    key: "_onChange",
    value: function (e) {
      this._onChangeCallback = e;
      return this;
    }
  }, {
    key: "_onChangeCallback",
    value: function () {}
  }], [{
    key: "slerp",
    value: function (e, t, n, r) {
      return n.copy(e).slerp(t, r);
    }
  }, {
    key: "slerpFlat",
    value: function (e, t, n, r, i, a, o) {
      var s = n[r + 0];
      var l = n[r + 1];
      var c = n[r + 2];
      var u = n[r + 3];
      var h = i[a + 0];
      var d = i[a + 1];
      var p = i[a + 2];
      var f = i[a + 3];
      if (u !== f || s !== h || l !== d || c !== p) {
        var m = 1 - o;
        var v = s * h + l * d + c * p + u * f;
        var g = v >= 0 ? 1 : -1;
        var y = 1 - v * v;
        if (y > Number.EPSILON) {
          var x = Math.sqrt(y);
          var b = Math.atan2(x, v * g);
          m = Math.sin(m * b) / x;
          o = Math.sin(o * b) / x;
        }
        var _ = o * g;
        s = s * m + h * _;
        l = l * m + d * _;
        c = c * m + p * _;
        u = u * m + f * _;
        if (m === 1 - o) {
          var w = 1 / Math.sqrt(s * s + l * l + c * c + u * u);
          s *= w;
          l *= w;
          c *= w;
          u *= w;
        }
      }
      e[t] = s;
      e[t + 1] = l;
      e[t + 2] = c;
      e[t + 3] = u;
    }
  }, {
    key: "multiplyQuaternionsFlat",
    value: function (e, t, n, r, i, a) {
      var o = n[r];
      var s = n[r + 1];
      var l = n[r + 2];
      var c = n[r + 3];
      var u = i[a];
      var h = i[a + 1];
      var d = i[a + 2];
      var p = i[a + 3];
      e[t] = o * p + c * u + s * d - l * h;
      e[t + 1] = s * p + c * h + l * u - o * d;
      e[t + 2] = l * p + c * d + o * h - s * u;
      e[t + 3] = c * p - o * u - s * h - l * d;
      return e;
    }
  }]);
  return e;
}();
var C = function () {
  function e() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
    Object(u.a)(this, e);
    Object.defineProperty(this, "isVector3", {
      value: !0
    });
    this.x = t;
    this.y = n;
    this.z = r;
  }
  Object(h.a)(e, [{
    key: "set",
    value: function (e, t, n) {
      if (void 0 === n) {
        n = this.z;
      }
      this.x = e;
      this.y = t;
      this.z = n;
      return this;
    }
  }, {
    key: "setScalar",
    value: function (e) {
      this.x = e;
      this.y = e;
      this.z = e;
      return this;
    }
  }, {
    key: "setX",
    value: function (e) {
      this.x = e;
      return this;
    }
  }, {
    key: "setY",
    value: function (e) {
      this.y = e;
      return this;
    }
  }, {
    key: "setZ",
    value: function (e) {
      this.z = e;
      return this;
    }
  }, {
    key: "setComponent",
    value: function (e, t) {
      switch (e) {
        case 0:
          this.x = t;
          break;
        case 1:
          this.y = t;
          break;
        case 2:
          this.z = t;
          break;
        default:
          throw new Error("index is out of range: " + e);
      }
      return this;
    }
  }, {
    key: "getComponent",
    value: function (e) {
      switch (e) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        default:
          throw new Error("index is out of range: " + e);
      }
    }
  }, {
    key: "clone",
    value: function () {
      return new this.constructor(this.x, this.y, this.z);
    }
  }, {
    key: "copy",
    value: function (e) {
      this.x = e.x;
      this.y = e.y;
      this.z = e.z;
      return this;
    }
  }, {
    key: "add",
    value: function (e, t) {
      return void 0 !== t ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this);
    }
  }, {
    key: "addScalar",
    value: function (e) {
      this.x += e;
      this.y += e;
      this.z += e;
      return this;
    }
  }, {
    key: "addVectors",
    value: function (e, t) {
      this.x = e.x + t.x;
      this.y = e.y + t.y;
      this.z = e.z + t.z;
      return this;
    }
  }, {
    key: "addScaledVector",
    value: function (e, t) {
      this.x += e.x * t;
      this.y += e.y * t;
      this.z += e.z * t;
      return this;
    }
  }, {
    key: "sub",
    value: function (e, t) {
      return void 0 !== t ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this);
    }
  }, {
    key: "subScalar",
    value: function (e) {
      this.x -= e;
      this.y -= e;
      this.z -= e;
      return this;
    }
  }, {
    key: "subVectors",
    value: function (e, t) {
      this.x = e.x - t.x;
      this.y = e.y - t.y;
      this.z = e.z - t.z;
      return this;
    }
  }, {
    key: "multiply",
    value: function (e, t) {
      return void 0 !== t ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(e, t)) : (this.x *= e.x, this.y *= e.y, this.z *= e.z, this);
    }
  }, {
    key: "multiplyScalar",
    value: function (e) {
      this.x *= e;
      this.y *= e;
      this.z *= e;
      return this;
    }
  }, {
    key: "multiplyVectors",
    value: function (e, t) {
      this.x = e.x * t.x;
      this.y = e.y * t.y;
      this.z = e.z * t.z;
      return this;
    }
  }, {
    key: "applyEuler",
    value: function (e) {
      if (!(e && e.isEuler)) {
        console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.");
      }
      return this.applyQuaternion(O.setFromEuler(e));
    }
  }, {
    key: "applyAxisAngle",
    value: function (e, t) {
      return this.applyQuaternion(O.setFromAxisAngle(e, t));
    }
  }, {
    key: "applyMatrix3",
    value: function (e) {
      var t = this.x;
      var n = this.y;
      var r = this.z;
      var i = e.elements;
      this.x = i[0] * t + i[3] * n + i[6] * r;
      this.y = i[1] * t + i[4] * n + i[7] * r;
      this.z = i[2] * t + i[5] * n + i[8] * r;
      return this;
    }
  }, {
    key: "applyNormalMatrix",
    value: function (e) {
      return this.applyMatrix3(e).normalize();
    }
  }, {
    key: "applyMatrix4",
    value: function (e) {
      var t = this.x;
      var n = this.y;
      var r = this.z;
      var i = e.elements;
      var a = 1 / (i[3] * t + i[7] * n + i[11] * r + i[15]);
      this.x = (i[0] * t + i[4] * n + i[8] * r + i[12]) * a;
      this.y = (i[1] * t + i[5] * n + i[9] * r + i[13]) * a;
      this.z = (i[2] * t + i[6] * n + i[10] * r + i[14]) * a;
      return this;
    }
  }, {
    key: "applyQuaternion",
    value: function (e) {
      var t = this.x;
      var n = this.y;
      var r = this.z;
      var i = e.x;
      var a = e.y;
      var o = e.z;
      var s = e.w;
      var l = s * t + a * r - o * n;
      var c = s * n + o * t - i * r;
      var u = s * r + i * n - a * t;
      var h = -i * t - a * n - o * r;
      this.x = l * s + h * -i + c * -o - u * -a;
      this.y = c * s + h * -a + u * -i - l * -o;
      this.z = u * s + h * -o + l * -a - c * -i;
      return this;
    }
  }, {
    key: "project",
    value: function (e) {
      return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
    }
  }, {
    key: "unproject",
    value: function (e) {
      return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
    }
  }, {
    key: "transformDirection",
    value: function (e) {
      var t = this.x;
      var n = this.y;
      var r = this.z;
      var i = e.elements;
      this.x = i[0] * t + i[4] * n + i[8] * r;
      this.y = i[1] * t + i[5] * n + i[9] * r;
      this.z = i[2] * t + i[6] * n + i[10] * r;
      return this.normalize();
    }
  }, {
    key: "divide",
    value: function (e) {
      this.x /= e.x;
      this.y /= e.y;
      this.z /= e.z;
      return this;
    }
  }, {
    key: "divideScalar",
    value: function (e) {
      return this.multiplyScalar(1 / e);
    }
  }, {
    key: "min",
    value: function (e) {
      this.x = Math.min(this.x, e.x);
      this.y = Math.min(this.y, e.y);
      this.z = Math.min(this.z, e.z);
      return this;
    }
  }, {
    key: "max",
    value: function (e) {
      this.x = Math.max(this.x, e.x);
      this.y = Math.max(this.y, e.y);
      this.z = Math.max(this.z, e.z);
      return this;
    }
  }, {
    key: "clamp",
    value: function (e, t) {
      this.x = Math.max(e.x, Math.min(t.x, this.x));
      this.y = Math.max(e.y, Math.min(t.y, this.y));
      this.z = Math.max(e.z, Math.min(t.z, this.z));
      return this;
    }
  }, {
    key: "clampScalar",
    value: function (e, t) {
      this.x = Math.max(e, Math.min(t, this.x));
      this.y = Math.max(e, Math.min(t, this.y));
      this.z = Math.max(e, Math.min(t, this.z));
      return this;
    }
  }, {
    key: "clampLength",
    value: function (e, t) {
      var n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
    }
  }, {
    key: "floor",
    value: function () {
      this.x = Math.floor(this.x);
      this.y = Math.floor(this.y);
      this.z = Math.floor(this.z);
      return this;
    }
  }, {
    key: "ceil",
    value: function () {
      this.x = Math.ceil(this.x);
      this.y = Math.ceil(this.y);
      this.z = Math.ceil(this.z);
      return this;
    }
  }, {
    key: "round",
    value: function () {
      this.x = Math.round(this.x);
      this.y = Math.round(this.y);
      this.z = Math.round(this.z);
      return this;
    }
  }, {
    key: "roundToZero",
    value: function () {
      this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x);
      this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y);
      this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z);
      return this;
    }
  }, {
    key: "negate",
    value: function () {
      this.x = -this.x;
      this.y = -this.y;
      this.z = -this.z;
      return this;
    }
  }, {
    key: "dot",
    value: function (e) {
      return this.x * e.x + this.y * e.y + this.z * e.z;
    }
  }, {
    key: "lengthSq",
    value: function () {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    }
  }, {
    key: "length",
    value: function () {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
  }, {
    key: "manhattanLength",
    value: function () {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    }
  }, {
    key: "normalize",
    value: function () {
      return this.divideScalar(this.length() || 1);
    }
  }, {
    key: "setLength",
    value: function (e) {
      return this.normalize().multiplyScalar(e);
    }
  }, {
    key: "lerp",
    value: function (e, t) {
      this.x += (e.x - this.x) * t;
      this.y += (e.y - this.y) * t;
      this.z += (e.z - this.z) * t;
      return this;
    }
  }, {
    key: "lerpVectors",
    value: function (e, t, n) {
      this.x = e.x + (t.x - e.x) * n;
      this.y = e.y + (t.y - e.y) * n;
      this.z = e.z + (t.z - e.z) * n;
      return this;
    }
  }, {
    key: "cross",
    value: function (e, t) {
      return void 0 !== t ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(e, t)) : this.crossVectors(this, e);
    }
  }, {
    key: "crossVectors",
    value: function (e, t) {
      var n = e.x;
      var r = e.y;
      var i = e.z;
      var a = t.x;
      var o = t.y;
      var s = t.z;
      this.x = r * s - i * o;
      this.y = i * a - n * s;
      this.z = n * o - r * a;
      return this;
    }
  }, {
    key: "projectOnVector",
    value: function (e) {
      var t = e.lengthSq();
      if (0 === t) {
        return this.set(0, 0, 0);
      }
      var n = e.dot(this) / t;
      return this.copy(e).multiplyScalar(n);
    }
  }, {
    key: "projectOnPlane",
    value: function (e) {
      I.copy(this).projectOnVector(e);
      return this.sub(I);
    }
  }, {
    key: "reflect",
    value: function (e) {
      return this.sub(I.copy(e).multiplyScalar(2 * this.dot(e)));
    }
  }, {
    key: "angleTo",
    value: function (e) {
      var t = Math.sqrt(this.lengthSq() * e.lengthSq());
      if (0 === t) {
        return Math.PI / 2;
      }
      var n = this.dot(e) / t;
      return Math.acos(_.clamp(n, -1, 1));
    }
  }, {
    key: "distanceTo",
    value: function (e) {
      return Math.sqrt(this.distanceToSquared(e));
    }
  }, {
    key: "distanceToSquared",
    value: function (e) {
      var t = this.x - e.x;
      var n = this.y - e.y;
      var r = this.z - e.z;
      return t * t + n * n + r * r;
    }
  }, {
    key: "manhattanDistanceTo",
    value: function (e) {
      return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
    }
  }, {
    key: "setFromSpherical",
    value: function (e) {
      return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
    }
  }, {
    key: "setFromSphericalCoords",
    value: function (e, t, n) {
      var r = Math.sin(t) * e;
      this.x = r * Math.sin(n);
      this.y = Math.cos(t) * e;
      this.z = r * Math.cos(n);
      return this;
    }
  }, {
    key: "setFromCylindrical",
    value: function (e) {
      return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
    }
  }, {
    key: "setFromCylindricalCoords",
    value: function (e, t, n) {
      this.x = e * Math.sin(t);
      this.y = n;
      this.z = e * Math.cos(t);
      return this;
    }
  }, {
    key: "setFromMatrixPosition",
    value: function (e) {
      var t = e.elements;
      this.x = t[12];
      this.y = t[13];
      this.z = t[14];
      return this;
    }
  }, {
    key: "setFromMatrixScale",
    value: function (e) {
      var t = this.setFromMatrixColumn(e, 0).length();
      var n = this.setFromMatrixColumn(e, 1).length();
      var r = this.setFromMatrixColumn(e, 2).length();
      this.x = t;
      this.y = n;
      this.z = r;
      return this;
    }
  }, {
    key: "setFromMatrixColumn",
    value: function (e, t) {
      return this.fromArray(e.elements, 4 * t);
    }
  }, {
    key: "setFromMatrix3Column",
    value: function (e, t) {
      return this.fromArray(e.elements, 3 * t);
    }
  }, {
    key: "equals",
    value: function (e) {
      return e.x === this.x && e.y === this.y && e.z === this.z;
    }
  }, {
    key: "fromArray",
    value: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      this.x = e[t];
      this.y = e[t + 1];
      this.z = e[t + 2];
      return this;
    }
  }, {
    key: "toArray",
    value: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      e[t] = this.x;
      e[t + 1] = this.y;
      e[t + 2] = this.z;
      return e;
    }
  }, {
    key: "fromBufferAttribute",
    value: function (e, t, n) {
      if (void 0 !== n) {
        console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute().");
      }
      this.x = e.getX(t);
      this.y = e.getY(t);
      this.z = e.getZ(t);
      return this;
    }
  }, {
    key: "random",
    value: function () {
      this.x = Math.random();
      this.y = Math.random();
      this.z = Math.random();
      return this;
    }
  }]);
  return e;
}();
var I = new C();
var O = new P();
var k = function () {
  function e(t, n) {
    Object(u.a)(this, e);
    Object.defineProperty(this, "isBox3", {
      value: !0
    });
    this.min = void 0 !== t ? t : new C(1 / 0, 1 / 0, 1 / 0);
    this.max = void 0 !== n ? n : new C(-1 / 0, -1 / 0, -1 / 0);
  }
  Object(h.a)(e, [{
    key: "set",
    value: function (e, t) {
      this.min.copy(e);
      this.max.copy(t);
      return this;
    }
  }, {
    key: "setFromArray",
    value: function (e) {
      for (var t = 1 / 0, n = 1 / 0, r = 1 / 0, i = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, l = e.length; s < l; s += 3) {
        var c = e[s];
        var u = e[s + 1];
        var h = e[s + 2];
        if (c < t) {
          t = c;
        }
        if (u < n) {
          n = u;
        }
        if (h < r) {
          r = h;
        }
        if (c > i) {
          i = c;
        }
        if (u > a) {
          a = u;
        }
        if (h > o) {
          o = h;
        }
      }
      this.min.set(t, n, r);
      this.max.set(i, a, o);
      return this;
    }
  }, {
    key: "setFromBufferAttribute",
    value: function (e) {
      for (var t = 1 / 0, n = 1 / 0, r = 1 / 0, i = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, l = e.count; s < l; s++) {
        var c = e.getX(s);
        var u = e.getY(s);
        var h = e.getZ(s);
        if (c < t) {
          t = c;
        }
        if (u < n) {
          n = u;
        }
        if (h < r) {
          r = h;
        }
        if (c > i) {
          i = c;
        }
        if (u > a) {
          a = u;
        }
        if (h > o) {
          o = h;
        }
      }
      this.min.set(t, n, r);
      this.max.set(i, a, o);
      return this;
    }
  }, {
    key: "setFromPoints",
    value: function (e) {
      this.makeEmpty();
      for (var t = 0, n = e.length; t < n; t++) {
        this.expandByPoint(e[t]);
      }
      return this;
    }
  }, {
    key: "setFromCenterAndSize",
    value: function (e, t) {
      var n = U.copy(t).multiplyScalar(.5);
      this.min.copy(e).sub(n);
      this.max.copy(e).add(n);
      return this;
    }
  }, {
    key: "setFromObject",
    value: function (e) {
      this.makeEmpty();
      return this.expandByObject(e);
    }
  }, {
    key: "clone",
    value: function () {
      return new this.constructor().copy(this);
    }
  }, {
    key: "copy",
    value: function (e) {
      this.min.copy(e.min);
      this.max.copy(e.max);
      return this;
    }
  }, {
    key: "makeEmpty",
    value: function () {
      this.min.x = this.min.y = this.min.z = 1 / 0;
      this.max.x = this.max.y = this.max.z = -1 / 0;
      return this;
    }
  }, {
    key: "isEmpty",
    value: function () {
      return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
    }
  }, {
    key: "getCenter",
    value: function (e) {
      if (void 0 === e) {
        console.warn("THREE.Box3: .getCenter() target is now required");
        e = new C();
      }
      return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5);
    }
  }, {
    key: "getSize",
    value: function (e) {
      if (void 0 === e) {
        console.warn("THREE.Box3: .getSize() target is now required");
        e = new C();
      }
      return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
    }
  }, {
    key: "expandByPoint",
    value: function (e) {
      this.min.min(e);
      this.max.max(e);
      return this;
    }
  }, {
    key: "expandByVector",
    value: function (e) {
      this.min.sub(e);
      this.max.add(e);
      return this;
    }
  }, {
    key: "expandByScalar",
    value: function (e) {
      this.min.addScalar(-e);
      this.max.addScalar(e);
      return this;
    }
  }, {
    key: "expandByObject",
    value: function (e) {
      e.updateWorldMatrix(!1, !1);
      var t = e.geometry;
      if (void 0 !== t) {
        if (null === t.boundingBox) {
          t.computeBoundingBox();
        }
        B.copy(t.boundingBox);
        B.applyMatrix4(e.matrixWorld);
        this.union(B);
      }
      for (var n = e.children, r = 0, i = n.length; r < i; r++) {
        this.expandByObject(n[r]);
      }
      return this;
    }
  }, {
    key: "containsPoint",
    value: function (e) {
      return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z);
    }
  }, {
    key: "containsBox",
    value: function (e) {
      return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
    }
  }, {
    key: "getParameter",
    value: function (e, t) {
      if (void 0 === t) {
        console.warn("THREE.Box3: .getParameter() target is now required");
        t = new C();
      }
      return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z));
    }
  }, {
    key: "intersectsBox",
    value: function (e) {
      return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z);
    }
  }, {
    key: "intersectsSphere",
    value: function (e) {
      this.clampPoint(e.center, U);
      return U.distanceToSquared(e.center) <= e.radius * e.radius;
    }
  }, {
    key: "intersectsPlane",
    value: function (e) {
      var t;
      var n;
      if (e.normal.x > 0) {
        t = e.normal.x * this.min.x;
        n = e.normal.x * this.max.x;
      } else {
        t = e.normal.x * this.max.x;
        n = e.normal.x * this.min.x;
      }
      if (e.normal.y > 0) {
        t += e.normal.y * this.min.y;
        n += e.normal.y * this.max.y;
      } else {
        t += e.normal.y * this.max.y;
        n += e.normal.y * this.min.y;
      }
      if (e.normal.z > 0) {
        t += e.normal.z * this.min.z;
        n += e.normal.z * this.max.z;
      } else {
        t += e.normal.z * this.max.z;
        n += e.normal.z * this.min.z;
      }
      return t <= -e.constant && n >= -e.constant;
    }
  }, {
    key: "intersectsTriangle",
    value: function (e) {
      if (this.isEmpty()) {
        return !1;
      }
      this.getCenter(W);
      q.subVectors(this.max, W);
      z.subVectors(e.a, W);
      F.subVectors(e.b, W);
      H.subVectors(e.c, W);
      G.subVectors(F, z);
      j.subVectors(H, F);
      V.subVectors(z, H);
      var t = [0, -G.z, G.y, 0, -j.z, j.y, 0, -V.z, V.y, G.z, 0, -G.x, j.z, 0, -j.x, V.z, 0, -V.x, -G.y, G.x, 0, -j.y, j.x, 0, -V.y, V.x, 0];
      return !!N(t, z, F, H, q) && !!N(t = [1, 0, 0, 0, 1, 0, 0, 0, 1], z, F, H, q) && (X.crossVectors(G, j), N(t = [X.x, X.y, X.z], z, F, H, q));
    }
  }, {
    key: "clampPoint",
    value: function (e, t) {
      if (void 0 === t) {
        console.warn("THREE.Box3: .clampPoint() target is now required");
        t = new C();
      }
      return t.copy(e).clamp(this.min, this.max);
    }
  }, {
    key: "distanceToPoint",
    value: function (e) {
      return U.copy(e).clamp(this.min, this.max).sub(e).length();
    }
  }, {
    key: "getBoundingSphere",
    value: function (e) {
      if (void 0 === e) {
        console.error("THREE.Box3: .getBoundingSphere() target is now required");
      }
      this.getCenter(e.center);
      e.radius = .5 * this.getSize(U).length();
      return e;
    }
  }, {
    key: "intersect",
    value: function (e) {
      this.min.max(e.min);
      this.max.min(e.max);
      if (this.isEmpty()) {
        this.makeEmpty();
      }
      return this;
    }
  }, {
    key: "union",
    value: function (e) {
      this.min.min(e.min);
      this.max.max(e.max);
      return this;
    }
  }, {
    key: "applyMatrix4",
    value: function (e) {
      if (!this.isEmpty()) {
        D[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e);
        D[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e);
        D[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e);
        D[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e);
        D[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e);
        D[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e);
        D[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e);
        D[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e);
        this.setFromPoints(D);
      }
      return this;
    }
  }, {
    key: "translate",
    value: function (e) {
      this.min.add(e);
      this.max.add(e);
      return this;
    }
  }, {
    key: "equals",
    value: function (e) {
      return e.min.equals(this.min) && e.max.equals(this.max);
    }
  }]);
  return e;
}();
function N(e, t, n, r, i) {
  for (var a = 0, o = e.length - 3; a <= o; a += 3) {
    Y.fromArray(e, a);
    var s = i.x * Math.abs(Y.x) + i.y * Math.abs(Y.y) + i.z * Math.abs(Y.z);
    var l = t.dot(Y);
    var c = n.dot(Y);
    var u = r.dot(Y);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > s) {
      return !1;
    }
  }
  return !0;
}
var D = [new C(), new C(), new C(), new C(), new C(), new C(), new C(), new C()];
var U = new C();
var B = new k();
var z = new C();
var F = new C();
var H = new C();
var G = new C();
var j = new C();
var V = new C();
var W = new C();
var q = new C();
var X = new C();
var Y = new C();
var Z = new k();
var J = function () {
  function e(t, n) {
    Object(u.a)(this, e);
    this.center = void 0 !== t ? t : new C();
    this.radius = void 0 !== n ? n : -1;
  }
  Object(h.a)(e, [{
    key: "set",
    value: function (e, t) {
      this.center.copy(e);
      this.radius = t;
      return this;
    }
  }, {
    key: "setFromPoints",
    value: function (e, t) {
      var n = this.center;
      if (void 0 !== t) {
        n.copy(t);
      } else {
        Z.setFromPoints(e).getCenter(n);
      }
      for (var r = 0, i = 0, a = e.length; i < a; i++) {
        r = Math.max(r, n.distanceToSquared(e[i]));
      }
      this.radius = Math.sqrt(r);
      return this;
    }
  }, {
    key: "clone",
    value: function () {
      return new this.constructor().copy(this);
    }
  }, {
    key: "copy",
    value: function (e) {
      this.center.copy(e.center);
      this.radius = e.radius;
      return this;
    }
  }, {
    key: "isEmpty",
    value: function () {
      return this.radius < 0;
    }
  }, {
    key: "makeEmpty",
    value: function () {
      this.center.set(0, 0, 0);
      this.radius = -1;
      return this;
    }
  }, {
    key: "containsPoint",
    value: function (e) {
      return e.distanceToSquared(this.center) <= this.radius * this.radius;
    }
  }, {
    key: "distanceToPoint",
    value: function (e) {
      return e.distanceTo(this.center) - this.radius;
    }
  }, {
    key: "intersectsSphere",
    value: function (e) {
      var t = this.radius + e.radius;
      return e.center.distanceToSquared(this.center) <= t * t;
    }
  }, {
    key: "intersectsBox",
    value: function (e) {
      return e.intersectsSphere(this);
    }
  }, {
    key: "intersectsPlane",
    value: function (e) {
      return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
    }
  }, {
    key: "clampPoint",
    value: function (e, t) {
      var n = this.center.distanceToSquared(e);
      if (void 0 === t) {
        console.warn("THREE.Sphere: .clampPoint() target is now required");
        t = new C();
      }
      t.copy(e);
      if (n > this.radius * this.radius) {
        t.sub(this.center).normalize();
        t.multiplyScalar(this.radius).add(this.center);
      }
      return t;
    }
  }, {
    key: "getBoundingBox",
    value: function (e) {
      if (void 0 === e) {
        console.warn("THREE.Sphere: .getBoundingBox() target is now required");
        e = new k();
      }
      return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
    }
  }, {
    key: "applyMatrix4",
    value: function (e) {
      this.center.applyMatrix4(e);
      this.radius = this.radius * e.getMaxScaleOnAxis();
      return this;
    }
  }, {
    key: "translate",
    value: function (e) {
      this.center.add(e);
      return this;
    }
  }, {
    key: "equals",
    value: function (e) {
      return e.center.equals(this.center) && e.radius === this.radius;
    }
  }]);
  return e;
}();
var K = new C();
var Q = new C();
var $ = new C();
var ee = new C();
var te = new C();
var ne = new C();
var re = new C();
var ie = function () {
  function e(t, n) {
    Object(u.a)(this, e);
    this.origin = void 0 !== t ? t : new C();
    this.direction = void 0 !== n ? n : new C(0, 0, -1);
  }
  Object(h.a)(e, [{
    key: "set",
    value: function (e, t) {
      this.origin.copy(e);
      this.direction.copy(t);
      return this;
    }
  }, {
    key: "clone",
    value: function () {
      return new this.constructor().copy(this);
    }
  }, {
    key: "copy",
    value: function (e) {
      this.origin.copy(e.origin);
      this.direction.copy(e.direction);
      return this;
    }
  }, {
    key: "at",
    value: function (e, t) {
      if (void 0 === t) {
        console.warn("THREE.Ray: .at() target is now required");
        t = new C();
      }
      return t.copy(this.direction).multiplyScalar(e).add(this.origin);
    }
  }, {
    key: "lookAt",
    value: function (e) {
      this.direction.copy(e).sub(this.origin).normalize();
      return this;
    }
  }, {
    key: "recast",
    value: function (e) {
      this.origin.copy(this.at(e, K));
      return this;
    }
  }, {
    key: "closestPointToPoint",
    value: function (e, t) {
      if (void 0 === t) {
        console.warn("THREE.Ray: .closestPointToPoint() target is now required");
        t = new C();
      }
      t.subVectors(e, this.origin);
      var n = t.dot(this.direction);
      return n < 0 ? t.copy(this.origin) : t.copy(this.direction).multiplyScalar(n).add(this.origin);
    }
  }, {
    key: "distanceToPoint",
    value: function (e) {
      return Math.sqrt(this.distanceSqToPoint(e));
    }
  }, {
    key: "distanceSqToPoint",
    value: function (e) {
      var t = K.subVectors(e, this.origin).dot(this.direction);
      return t < 0 ? this.origin.distanceToSquared(e) : (K.copy(this.direction).multiplyScalar(t).add(this.origin), K.distanceToSquared(e));
    }
  }, {
    key: "distanceSqToSegment",
    value: function (e, t, n, r) {
      Q.copy(e).add(t).multiplyScalar(.5);
      $.copy(t).sub(e).normalize();
      ee.copy(this.origin).sub(Q);
      var i;
      var a;
      var o;
      var s;
      var l = .5 * e.distanceTo(t);
      var c = -this.direction.dot($);
      var u = ee.dot(this.direction);
      var h = -ee.dot($);
      var d = ee.lengthSq();
      var p = Math.abs(1 - c * c);
      if (p > 0) {
        a = c * u - h;
        s = l * p;
        if ((i = c * h - u) >= 0) {
          if (a >= -s) {
            if (a <= s) {
              var f = 1 / p;
              o = (i *= f) * (i + c * (a *= f) + 2 * u) + a * (c * i + a + 2 * h) + d;
            } else {
              a = l;
              o = -(i = Math.max(0, -(c * a + u))) * i + a * (a + 2 * h) + d;
            }
          } else {
            a = -l;
            o = -(i = Math.max(0, -(c * a + u))) * i + a * (a + 2 * h) + d;
          }
        } else if (a <= -s) {
          o = -(i = Math.max(0, -(-c * l + u))) * i + (a = i > 0 ? -l : Math.min(Math.max(-l, -h), l)) * (a + 2 * h) + d;
        } else {
          if (a <= s) {
            i = 0;
            o = (a = Math.min(Math.max(-l, -h), l)) * (a + 2 * h) + d;
          } else {
            o = -(i = Math.max(0, -(c * l + u))) * i + (a = i > 0 ? l : Math.min(Math.max(-l, -h), l)) * (a + 2 * h) + d;
          }
        }
      } else {
        a = c > 0 ? -l : l;
        o = -(i = Math.max(0, -(c * a + u))) * i + a * (a + 2 * h) + d;
      }
      if (n) {
        n.copy(this.direction).multiplyScalar(i).add(this.origin);
      }
      if (r) {
        r.copy($).multiplyScalar(a).add(Q);
      }
      return o;
    }
  }, {
    key: "intersectSphere",
    value: function (e, t) {
      K.subVectors(e.center, this.origin);
      var n = K.dot(this.direction);
      var r = K.dot(K) - n * n;
      var i = e.radius * e.radius;
      if (r > i) {
        return null;
      }
      var a = Math.sqrt(i - r);
      var o = n - a;
      var s = n + a;
      return o < 0 && s < 0 ? null : o < 0 ? this.at(s, t) : this.at(o, t);
    }
  }, {
    key: "intersectsSphere",
    value: function (e) {
      return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
    }
  }, {
    key: "distanceToPlane",
    value: function (e) {
      var t = e.normal.dot(this.direction);
      if (0 === t) {
        return 0 === e.distanceToPoint(this.origin) ? 0 : null;
      }
      var n = -(this.origin.dot(e.normal) + e.constant) / t;
      return n >= 0 ? n : null;
    }
  }, {
    key: "intersectPlane",
    value: function (e, t) {
      var n = this.distanceToPlane(e);
      return null === n ? null : this.at(n, t);
    }
  }, {
    key: "intersectsPlane",
    value: function (e) {
      var t = e.distanceToPoint(this.origin);
      return 0 === t || e.normal.dot(this.direction) * t < 0;
    }
  }, {
    key: "intersectBox",
    value: function (e, t) {
      var n;
      var r;
      var i;
      var a;
      var o;
      var s;
      var l = 1 / this.direction.x;
      var c = 1 / this.direction.y;
      var u = 1 / this.direction.z;
      var h = this.origin;
      if (l >= 0) {
        n = (e.min.x - h.x) * l;
        r = (e.max.x - h.x) * l;
      } else {
        n = (e.max.x - h.x) * l;
        r = (e.min.x - h.x) * l;
      }
      if (c >= 0) {
        i = (e.min.y - h.y) * c;
        a = (e.max.y - h.y) * c;
      } else {
        i = (e.max.y - h.y) * c;
        a = (e.min.y - h.y) * c;
      }
      return n > a || i > r ? null : ((i > n || n !== n) && (n = i), (a < r || r !== r) && (r = a), u >= 0 ? (o = (e.min.z - h.z) * u, s = (e.max.z - h.z) * u) : (o = (e.max.z - h.z) * u, s = (e.min.z - h.z) * u), n > s || o > r ? null : ((o > n || n !== n) && (n = o), (s < r || r !== r) && (r = s), r < 0 ? null : this.at(n >= 0 ? n : r, t)));
    }
  }, {
    key: "intersectsBox",
    value: function (e) {
      return null !== this.intersectBox(e, K);
    }
  }, {
    key: "intersectTriangle",
    value: function (e, t, n, r, i) {
      te.subVectors(t, e);
      ne.subVectors(n, e);
      re.crossVectors(te, ne);
      var a;
      var o = this.direction.dot(re);
      if (o > 0) {
        if (r) {
          return null;
        }
        a = 1;
      } else {
        if (!(o < 0)) {
          return null;
        }
        a = -1;
        o = -o;
      }
      ee.subVectors(this.origin, e);
      var s = a * this.direction.dot(ne.crossVectors(ee, ne));
      if (s < 0) {
        return null;
      }
      var l = a * this.direction.dot(te.cross(ee));
      if (l < 0) {
        return null;
      }
      if (s + l > o) {
        return null;
      }
      var c = -a * ee.dot(re);
      return c < 0 ? null : this.at(c / o, i);
    }
  }, {
    key: "applyMatrix4",
    value: function (e) {
      this.origin.applyMatrix4(e);
      this.direction.transformDirection(e);
      return this;
    }
  }, {
    key: "equals",
    value: function (e) {
      return e.origin.equals(this.origin) && e.direction.equals(this.direction);
    }
  }]);
  return e;
}();
var ae = function () {
  function e() {
    Object(u.a)(this, e);
    Object.defineProperty(this, "isMatrix4", {
      value: !0
    });
    this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    if (arguments.length > 0) {
      console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.");
    }
  }
  Object(h.a)(e, [{
    key: "set",
    value: function (e, t, n, r, i, a, o, s, l, c, u, h, d, p, f, m) {
      var v = this.elements;
      v[0] = e;
      v[4] = t;
      v[8] = n;
      v[12] = r;
      v[1] = i;
      v[5] = a;
      v[9] = o;
      v[13] = s;
      v[2] = l;
      v[6] = c;
      v[10] = u;
      v[14] = h;
      v[3] = d;
      v[7] = p;
      v[11] = f;
      v[15] = m;
      return this;
    }
  }, {
    key: "identity",
    value: function () {
      this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      return this;
    }
  }, {
    key: "clone",
    value: function () {
      return new e().fromArray(this.elements);
    }
  }, {
    key: "copy",
    value: function (e) {
      var t = this.elements;
      var n = e.elements;
      t[0] = n[0];
      t[1] = n[1];
      t[2] = n[2];
      t[3] = n[3];
      t[4] = n[4];
      t[5] = n[5];
      t[6] = n[6];
      t[7] = n[7];
      t[8] = n[8];
      t[9] = n[9];
      t[10] = n[10];
      t[11] = n[11];
      t[12] = n[12];
      t[13] = n[13];
      t[14] = n[14];
      t[15] = n[15];
      return this;
    }
  }, {
    key: "copyPosition",
    value: function (e) {
      var t = this.elements;
      var n = e.elements;
      t[12] = n[12];
      t[13] = n[13];
      t[14] = n[14];
      return this;
    }
  }, {
    key: "extractBasis",
    value: function (e, t, n) {
      e.setFromMatrixColumn(this, 0);
      t.setFromMatrixColumn(this, 1);
      n.setFromMatrixColumn(this, 2);
      return this;
    }
  }, {
    key: "makeBasis",
    value: function (e, t, n) {
      this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1);
      return this;
    }
  }, {
    key: "extractRotation",
    value: function (e) {
      var t = this.elements;
      var n = e.elements;
      var r = 1 / oe.setFromMatrixColumn(e, 0).length();
      var i = 1 / oe.setFromMatrixColumn(e, 1).length();
      var a = 1 / oe.setFromMatrixColumn(e, 2).length();
      t[0] = n[0] * r;
      t[1] = n[1] * r;
      t[2] = n[2] * r;
      t[3] = 0;
      t[4] = n[4] * i;
      t[5] = n[5] * i;
      t[6] = n[6] * i;
      t[7] = 0;
      t[8] = n[8] * a;
      t[9] = n[9] * a;
      t[10] = n[10] * a;
      t[11] = 0;
      t[12] = 0;
      t[13] = 0;
      t[14] = 0;
      t[15] = 1;
      return this;
    }
  }, {
    key: "makeRotationFromEuler",
    value: function (e) {
      if (!(e && e.isEuler)) {
        console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
      }
      var t = this.elements;
      var n = e.x;
      var r = e.y;
      var i = e.z;
      var a = Math.cos(n);
      var o = Math.sin(n);
      var s = Math.cos(r);
      var l = Math.sin(r);
      var c = Math.cos(i);
      var u = Math.sin(i);
      if ("XYZ" === e.order) {
        var h = a * c;
        var d = a * u;
        var p = o * c;
        var f = o * u;
        t[0] = s * c;
        t[4] = -s * u;
        t[8] = l;
        t[1] = d + p * l;
        t[5] = h - f * l;
        t[9] = -o * s;
        t[2] = f - h * l;
        t[6] = p + d * l;
        t[10] = a * s;
      } else if ("YXZ" === e.order) {
        var m = s * c;
        var v = s * u;
        var g = l * c;
        var y = l * u;
        t[0] = m + y * o;
        t[4] = g * o - v;
        t[8] = a * l;
        t[1] = a * u;
        t[5] = a * c;
        t[9] = -o;
        t[2] = v * o - g;
        t[6] = y + m * o;
        t[10] = a * s;
      } else if ("ZXY" === e.order) {
        var x = s * c;
        var b = s * u;
        var _ = l * c;
        var w = l * u;
        t[0] = x - w * o;
        t[4] = -a * u;
        t[8] = _ + b * o;
        t[1] = b + _ * o;
        t[5] = a * c;
        t[9] = w - x * o;
        t[2] = -a * l;
        t[6] = o;
        t[10] = a * s;
      } else if ("ZYX" === e.order) {
        var M = a * c;
        var S = a * u;
        var T = o * c;
        var E = o * u;
        t[0] = s * c;
        t[4] = T * l - S;
        t[8] = M * l + E;
        t[1] = s * u;
        t[5] = E * l + M;
        t[9] = S * l - T;
        t[2] = -l;
        t[6] = o * s;
        t[10] = a * s;
      } else if ("YZX" === e.order) {
        var A = a * s;
        var L = a * l;
        var R = o * s;
        var P = o * l;
        t[0] = s * c;
        t[4] = P - A * u;
        t[8] = R * u + L;
        t[1] = u;
        t[5] = a * c;
        t[9] = -o * c;
        t[2] = -l * c;
        t[6] = L * u + R;
        t[10] = A - P * u;
      } else if ("XZY" === e.order) {
        var C = a * s;
        var I = a * l;
        var O = o * s;
        var k = o * l;
        t[0] = s * c;
        t[4] = -u;
        t[8] = l * c;
        t[1] = C * u + k;
        t[5] = a * c;
        t[9] = I * u - O;
        t[2] = O * u - I;
        t[6] = o * c;
        t[10] = k * u + C;
      }
      t[3] = 0;
      t[7] = 0;
      t[11] = 0;
      t[12] = 0;
      t[13] = 0;
      t[14] = 0;
      t[15] = 1;
      return this;
    }
  }, {
    key: "makeRotationFromQuaternion",
    value: function (e) {
      return this.compose(le, e, ce);
    }
  }, {
    key: "lookAt",
    value: function (e, t, n) {
      var r = this.elements;
      de.subVectors(e, t);
      if (0 === de.lengthSq()) {
        de.z = 1;
      }
      de.normalize();
      ue.crossVectors(n, de);
      if (0 === ue.lengthSq()) {
        if (1 === Math.abs(n.z)) {
          de.x += 1e-4;
        } else {
          de.z += 1e-4;
        }
        de.normalize();
        ue.crossVectors(n, de);
      }
      ue.normalize();
      he.crossVectors(de, ue);
      r[0] = ue.x;
      r[4] = he.x;
      r[8] = de.x;
      r[1] = ue.y;
      r[5] = he.y;
      r[9] = de.y;
      r[2] = ue.z;
      r[6] = he.z;
      r[10] = de.z;
      return this;
    }
  }, {
    key: "multiply",
    value: function (e, t) {
      return void 0 !== t ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(e, t)) : this.multiplyMatrices(this, e);
    }
  }, {
    key: "premultiply",
    value: function (e) {
      return this.multiplyMatrices(e, this);
    }
  }, {
    key: "multiplyMatrices",
    value: function (e, t) {
      var n = e.elements;
      var r = t.elements;
      var i = this.elements;
      var a = n[0];
      var o = n[4];
      var s = n[8];
      var l = n[12];
      var c = n[1];
      var u = n[5];
      var h = n[9];
      var d = n[13];
      var p = n[2];
      var f = n[6];
      var m = n[10];
      var v = n[14];
      var g = n[3];
      var y = n[7];
      var x = n[11];
      var b = n[15];
      var _ = r[0];
      var w = r[4];
      var M = r[8];
      var S = r[12];
      var T = r[1];
      var E = r[5];
      var A = r[9];
      var L = r[13];
      var R = r[2];
      var P = r[6];
      var C = r[10];
      var I = r[14];
      var O = r[3];
      var k = r[7];
      var N = r[11];
      var D = r[15];
      i[0] = a * _ + o * T + s * R + l * O;
      i[4] = a * w + o * E + s * P + l * k;
      i[8] = a * M + o * A + s * C + l * N;
      i[12] = a * S + o * L + s * I + l * D;
      i[1] = c * _ + u * T + h * R + d * O;
      i[5] = c * w + u * E + h * P + d * k;
      i[9] = c * M + u * A + h * C + d * N;
      i[13] = c * S + u * L + h * I + d * D;
      i[2] = p * _ + f * T + m * R + v * O;
      i[6] = p * w + f * E + m * P + v * k;
      i[10] = p * M + f * A + m * C + v * N;
      i[14] = p * S + f * L + m * I + v * D;
      i[3] = g * _ + y * T + x * R + b * O;
      i[7] = g * w + y * E + x * P + b * k;
      i[11] = g * M + y * A + x * C + b * N;
      i[15] = g * S + y * L + x * I + b * D;
      return this;
    }
  }, {
    key: "multiplyScalar",
    value: function (e) {
      var t = this.elements;
      t[0] *= e;
      t[4] *= e;
      t[8] *= e;
      t[12] *= e;
      t[1] *= e;
      t[5] *= e;
      t[9] *= e;
      t[13] *= e;
      t[2] *= e;
      t[6] *= e;
      t[10] *= e;
      t[14] *= e;
      t[3] *= e;
      t[7] *= e;
      t[11] *= e;
      t[15] *= e;
      return this;
    }
  }, {
    key: "determinant",
    value: function () {
      var e = this.elements;
      var t = e[0];
      var n = e[4];
      var r = e[8];
      var i = e[12];
      var a = e[1];
      var o = e[5];
      var s = e[9];
      var l = e[13];
      var c = e[2];
      var u = e[6];
      var h = e[10];
      var d = e[14];
      return e[3] * (+i * s * u - r * l * u - i * o * h + n * l * h + r * o * d - n * s * d) + e[7] * (+t * s * d - t * l * h + i * a * h - r * a * d + r * l * c - i * s * c) + e[11] * (+t * l * u - t * o * d - i * a * u + n * a * d + i * o * c - n * l * c) + e[15] * (-r * o * c - t * s * u + t * o * h + r * a * u - n * a * h + n * s * c);
    }
  }, {
    key: "transpose",
    value: function () {
      var e;
      var t = this.elements;
      e = t[1];
      t[1] = t[4];
      t[4] = e;
      e = t[2];
      t[2] = t[8];
      t[8] = e;
      e = t[6];
      t[6] = t[9];
      t[9] = e;
      e = t[3];
      t[3] = t[12];
      t[12] = e;
      e = t[7];
      t[7] = t[13];
      t[13] = e;
      e = t[11];
      t[11] = t[14];
      t[14] = e;
      return this;
    }
  }, {
    key: "setPosition",
    value: function (e, t, n) {
      var r = this.elements;
      if (e.isVector3) {
        r[12] = e.x;
        r[13] = e.y;
        r[14] = e.z;
      } else {
        r[12] = e;
        r[13] = t;
        r[14] = n;
      }
      return this;
    }
  }, {
    key: "getInverse",
    value: function (e, t) {
      if (void 0 !== t) {
        console.warn("THREE.Matrix4: .getInverse() can no longer be configured to throw on degenerate.");
      }
      var n = this.elements;
      var r = e.elements;
      var i = r[0];
      var a = r[1];
      var o = r[2];
      var s = r[3];
      var l = r[4];
      var c = r[5];
      var u = r[6];
      var h = r[7];
      var d = r[8];
      var p = r[9];
      var f = r[10];
      var m = r[11];
      var v = r[12];
      var g = r[13];
      var y = r[14];
      var x = r[15];
      var b = p * y * h - g * f * h + g * u * m - c * y * m - p * u * x + c * f * x;
      var _ = v * f * h - d * y * h - v * u * m + l * y * m + d * u * x - l * f * x;
      var w = d * g * h - v * p * h + v * c * m - l * g * m - d * c * x + l * p * x;
      var M = v * p * u - d * g * u - v * c * f + l * g * f + d * c * y - l * p * y;
      var S = i * b + a * _ + o * w + s * M;
      if (0 === S) {
        return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      }
      var T = 1 / S;
      n[0] = b * T;
      n[1] = (g * f * s - p * y * s - g * o * m + a * y * m + p * o * x - a * f * x) * T;
      n[2] = (c * y * s - g * u * s + g * o * h - a * y * h - c * o * x + a * u * x) * T;
      n[3] = (p * u * s - c * f * s - p * o * h + a * f * h + c * o * m - a * u * m) * T;
      n[4] = _ * T;
      n[5] = (d * y * s - v * f * s + v * o * m - i * y * m - d * o * x + i * f * x) * T;
      n[6] = (v * u * s - l * y * s - v * o * h + i * y * h + l * o * x - i * u * x) * T;
      n[7] = (l * f * s - d * u * s + d * o * h - i * f * h - l * o * m + i * u * m) * T;
      n[8] = w * T;
      n[9] = (v * p * s - d * g * s - v * a * m + i * g * m + d * a * x - i * p * x) * T;
      n[10] = (l * g * s - v * c * s + v * a * h - i * g * h - l * a * x + i * c * x) * T;
      n[11] = (d * c * s - l * p * s - d * a * h + i * p * h + l * a * m - i * c * m) * T;
      n[12] = M * T;
      n[13] = (d * g * o - v * p * o + v * a * f - i * g * f - d * a * y + i * p * y) * T;
      n[14] = (v * c * o - l * g * o - v * a * u + i * g * u + l * a * y - i * c * y) * T;
      n[15] = (l * p * o - d * c * o + d * a * u - i * p * u - l * a * f + i * c * f) * T;
      return this;
    }
  }, {
    key: "scale",
    value: function (e) {
      var t = this.elements;
      var n = e.x;
      var r = e.y;
      var i = e.z;
      t[0] *= n;
      t[4] *= r;
      t[8] *= i;
      t[1] *= n;
      t[5] *= r;
      t[9] *= i;
      t[2] *= n;
      t[6] *= r;
      t[10] *= i;
      t[3] *= n;
      t[7] *= r;
      t[11] *= i;
      return this;
    }
  }, {
    key: "getMaxScaleOnAxis",
    value: function () {
      var e = this.elements;
      var t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2];
      var n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6];
      var r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
      return Math.sqrt(Math.max(t, n, r));
    }
  }, {
    key: "makeTranslation",
    value: function (e, t, n) {
      this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1);
      return this;
    }
  }, {
    key: "makeRotationX",
    value: function (e) {
      var t = Math.cos(e);
      var n = Math.sin(e);
      this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1);
      return this;
    }
  }, {
    key: "makeRotationY",
    value: function (e) {
      var t = Math.cos(e);
      var n = Math.sin(e);
      this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1);
      return this;
    }
  }, {
    key: "makeRotationZ",
    value: function (e) {
      var t = Math.cos(e);
      var n = Math.sin(e);
      this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      return this;
    }
  }, {
    key: "makeRotationAxis",
    value: function (e, t) {
      var n = Math.cos(t);
      var r = Math.sin(t);
      var i = 1 - n;
      var a = e.x;
      var o = e.y;
      var s = e.z;
      var l = i * a;
      var c = i * o;
      this.set(l * a + n, l * o - r * s, l * s + r * o, 0, l * o + r * s, c * o + n, c * s - r * a, 0, l * s - r * o, c * s + r * a, i * s * s + n, 0, 0, 0, 0, 1);
      return this;
    }
  }, {
    key: "makeScale",
    value: function (e, t, n) {
      this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1);
      return this;
    }
  }, {
    key: "makeShear",
    value: function (e, t, n) {
      this.set(1, t, n, 0, e, 1, n, 0, e, t, 1, 0, 0, 0, 0, 1);
      return this;
    }
  }, {
    key: "compose",
    value: function (e, t, n) {
      var r = this.elements;
      var i = t._x;
      var a = t._y;
      var o = t._z;
      var s = t._w;
      var l = i + i;
      var c = a + a;
      var u = o + o;
      var h = i * l;
      var d = i * c;
      var p = i * u;
      var f = a * c;
      var m = a * u;
      var v = o * u;
      var g = s * l;
      var y = s * c;
      var x = s * u;
      var b = n.x;
      var _ = n.y;
      var w = n.z;
      r[0] = (1 - (f + v)) * b;
      r[1] = (d + x) * b;
      r[2] = (p - y) * b;
      r[3] = 0;
      r[4] = (d - x) * _;
      r[5] = (1 - (h + v)) * _;
      r[6] = (m + g) * _;
      r[7] = 0;
      r[8] = (p + y) * w;
      r[9] = (m - g) * w;
      r[10] = (1 - (h + f)) * w;
      r[11] = 0;
      r[12] = e.x;
      r[13] = e.y;
      r[14] = e.z;
      r[15] = 1;
      return this;
    }
  }, {
    key: "decompose",
    value: function (e, t, n) {
      var r = this.elements;
      var i = oe.set(r[0], r[1], r[2]).length();
      var a = oe.set(r[4], r[5], r[6]).length();
      var o = oe.set(r[8], r[9], r[10]).length();
      if (this.determinant() < 0) {
        i = -i;
      }
      e.x = r[12];
      e.y = r[13];
      e.z = r[14];
      se.copy(this);
      var s = 1 / i;
      var l = 1 / a;
      var c = 1 / o;
      se.elements[0] *= s;
      se.elements[1] *= s;
      se.elements[2] *= s;
      se.elements[4] *= l;
      se.elements[5] *= l;
      se.elements[6] *= l;
      se.elements[8] *= c;
      se.elements[9] *= c;
      se.elements[10] *= c;
      t.setFromRotationMatrix(se);
      n.x = i;
      n.y = a;
      n.z = o;
      return this;
    }
  }, {
    key: "makePerspective",
    value: function (e, t, n, r, i, a) {
      if (void 0 === a) {
        console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
      }
      var o = this.elements;
      var s = 2 * i / (t - e);
      var l = 2 * i / (n - r);
      var c = (t + e) / (t - e);
      var u = (n + r) / (n - r);
      var h = -(a + i) / (a - i);
      var d = -2 * a * i / (a - i);
      o[0] = s;
      o[4] = 0;
      o[8] = c;
      o[12] = 0;
      o[1] = 0;
      o[5] = l;
      o[9] = u;
      o[13] = 0;
      o[2] = 0;
      o[6] = 0;
      o[10] = h;
      o[14] = d;
      o[3] = 0;
      o[7] = 0;
      o[11] = -1;
      o[15] = 0;
      return this;
    }
  }, {
    key: "makeOrthographic",
    value: function (e, t, n, r, i, a) {
      var o = this.elements;
      var s = 1 / (t - e);
      var l = 1 / (n - r);
      var c = 1 / (a - i);
      var u = (t + e) * s;
      var h = (n + r) * l;
      var d = (a + i) * c;
      o[0] = 2 * s;
      o[4] = 0;
      o[8] = 0;
      o[12] = -u;
      o[1] = 0;
      o[5] = 2 * l;
      o[9] = 0;
      o[13] = -h;
      o[2] = 0;
      o[6] = 0;
      o[10] = -2 * c;
      o[14] = -d;
      o[3] = 0;
      o[7] = 0;
      o[11] = 0;
      o[15] = 1;
      return this;
    }
  }, {
    key: "equals",
    value: function (e) {
      for (var t = this.elements, n = e.elements, r = 0; r < 16; r++) {
        if (t[r] !== n[r]) {
          return !1;
        }
      }
      return !0;
    }
  }, {
    key: "fromArray",
    value: function (e) {
      for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = 0; n < 16; n++) {
        this.elements[n] = e[n + t];
      }
      return this;
    }
  }, {
    key: "toArray",
    value: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      var n = this.elements;
      e[t] = n[0];
      e[t + 1] = n[1];
      e[t + 2] = n[2];
      e[t + 3] = n[3];
      e[t + 4] = n[4];
      e[t + 5] = n[5];
      e[t + 6] = n[6];
      e[t + 7] = n[7];
      e[t + 8] = n[8];
      e[t + 9] = n[9];
      e[t + 10] = n[10];
      e[t + 11] = n[11];
      e[t + 12] = n[12];
      e[t + 13] = n[13];
      e[t + 14] = n[14];
      e[t + 15] = n[15];
      return e;
    }
  }]);
  return e;
}();
var oe = new C();
var se = new ae();
var le = new C(0, 0, 0);
var ce = new C(1, 1, 1);
var ue = new C();
var he = new C();
var de = new C();
var pe = function () {
  function e() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e.DefaultOrder;
    Object(u.a)(this, e);
    Object.defineProperty(this, "isEuler", {
      value: !0
    });
    this._x = t;
    this._y = n;
    this._z = r;
    this._order = i;
  }
  Object(h.a)(e, [{
    key: "x",
    get: function () {
      return this._x;
    },
    set: function (e) {
      this._x = e;
      this._onChangeCallback();
    }
  }, {
    key: "y",
    get: function () {
      return this._y;
    },
    set: function (e) {
      this._y = e;
      this._onChangeCallback();
    }
  }, {
    key: "z",
    get: function () {
      return this._z;
    },
    set: function (e) {
      this._z = e;
      this._onChangeCallback();
    }
  }, {
    key: "order",
    get: function () {
      return this._order;
    },
    set: function (e) {
      this._order = e;
      this._onChangeCallback();
    }
  }, {
    key: "set",
    value: function (e, t, n, r) {
      this._x = e;
      this._y = t;
      this._z = n;
      this._order = r || this._order;
      this._onChangeCallback();
      return this;
    }
  }, {
    key: "clone",
    value: function () {
      return new this.constructor(this._x, this._y, this._z, this._order);
    }
  }, {
    key: "copy",
    value: function (e) {
      this._x = e._x;
      this._y = e._y;
      this._z = e._z;
      this._order = e._order;
      this._onChangeCallback();
      return this;
    }
  }, {
    key: "setFromRotationMatrix",
    value: function (e, t, n) {
      var r = _.clamp;
      var i = e.elements;
      var a = i[0];
      var o = i[4];
      var s = i[8];
      var l = i[1];
      var c = i[5];
      var u = i[9];
      var h = i[2];
      var d = i[6];
      var p = i[10];
      switch (t = t || this._order) {
        case "XYZ":
          this._y = Math.asin(r(s, -1, 1));
          if (Math.abs(s) < .9999999) {
            this._x = Math.atan2(-u, p);
            this._z = Math.atan2(-o, a);
          } else {
            this._x = Math.atan2(d, c);
            this._z = 0;
          }
          break;
        case "YXZ":
          this._x = Math.asin(-r(u, -1, 1));
          if (Math.abs(u) < .9999999) {
            this._y = Math.atan2(s, p);
            this._z = Math.atan2(l, c);
          } else {
            this._y = Math.atan2(-h, a);
            this._z = 0;
          }
          break;
        case "ZXY":
          this._x = Math.asin(r(d, -1, 1));
          if (Math.abs(d) < .9999999) {
            this._y = Math.atan2(-h, p);
            this._z = Math.atan2(-o, c);
          } else {
            this._y = 0;
            this._z = Math.atan2(l, a);
          }
          break;
        case "ZYX":
          this._y = Math.asin(-r(h, -1, 1));
          if (Math.abs(h) < .9999999) {
            this._x = Math.atan2(d, p);
            this._z = Math.atan2(l, a);
          } else {
            this._x = 0;
            this._z = Math.atan2(-o, c);
          }
          break;
        case "YZX":
          this._z = Math.asin(r(l, -1, 1));
          if (Math.abs(l) < .9999999) {
            this._x = Math.atan2(-u, c);
            this._y = Math.atan2(-h, a);
          } else {
            this._x = 0;
            this._y = Math.atan2(s, p);
          }
          break;
        case "XZY":
          this._z = Math.asin(-r(o, -1, 1));
          if (Math.abs(o) < .9999999) {
            this._x = Math.atan2(d, c);
            this._y = Math.atan2(s, a);
          } else {
            this._x = Math.atan2(-u, p);
            this._y = 0;
          }
          break;
        default:
          console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
      }
      this._order = t;
      if (!1 !== n) {
        this._onChangeCallback();
      }
      return this;
    }
  }, {
    key: "setFromQuaternion",
    value: function (e, t, n) {
      fe.makeRotationFromQuaternion(e);
      return this.setFromRotationMatrix(fe, t, n);
    }
  }, {
    key: "setFromVector3",
    value: function (e, t) {
      return this.set(e.x, e.y, e.z, t || this._order);
    }
  }, {
    key: "reorder",
    value: function (e) {
      me.setFromEuler(this);
      return this.setFromQuaternion(me, e);
    }
  }, {
    key: "equals",
    value: function (e) {
      return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
    }
  }, {
    key: "fromArray",
    value: function (e) {
      this._x = e[0];
      this._y = e[1];
      this._z = e[2];
      if (void 0 !== e[3]) {
        this._order = e[3];
      }
      this._onChangeCallback();
      return this;
    }
  }, {
    key: "toArray",
    value: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      e[t] = this._x;
      e[t + 1] = this._y;
      e[t + 2] = this._z;
      e[t + 3] = this._order;
      return e;
    }
  }, {
    key: "toVector3",
    value: function (e) {
      return e ? e.set(this._x, this._y, this._z) : new C(this._x, this._y, this._z);
    }
  }, {
    key: "_onChange",
    value: function (e) {
      this._onChangeCallback = e;
      return this;
    }
  }, {
    key: "_onChangeCallback",
    value: function () {}
  }]);
  return e;
}();
pe.DefaultOrder = "XYZ";
pe.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
var fe = new ae();
var me = new P();
var ve = function () {
  function e() {
    Object(u.a)(this, e);
    this.mask = 1;
  }
  Object(h.a)(e, [{
    key: "set",
    value: function (e) {
      this.mask = 1 << e | 0;
    }
  }, {
    key: "enable",
    value: function (e) {
      this.mask |= 1 << e | 0;
    }
  }, {
    key: "enableAll",
    value: function () {
      this.mask = -1;
    }
  }, {
    key: "toggle",
    value: function (e) {
      this.mask ^= 1 << e | 0;
    }
  }, {
    key: "disable",
    value: function (e) {
      this.mask &= ~(1 << e | 0);
    }
  }, {
    key: "disableAll",
    value: function () {
      this.mask = 0;
    }
  }, {
    key: "test",
    value: function (e) {
      return 0 !== (this.mask & e.mask);
    }
  }]);
  return e;
}();
var ge = 0;
var ye = new C();
var xe = new P();
var be = new ae();
var _e = new C();
var we = new C();
var Me = new C();
var Se = new P();
var Te = new C(1, 0, 0);
var Ee = new C(0, 1, 0);
var Ae = new C(0, 0, 1);
var Le = {
  type: "added"
};
var Re = {
  type: "removed"
};
function Pe() {
  Object.defineProperty(this, "id", {
    value: ge++
  });
  this.uuid = _.generateUUID();
  this.name = "";
  this.type = "Object3D";
  this.parent = null;
  this.children = [];
  this.up = Pe.DefaultUp.clone();
  var e = new C();
  var t = new pe();
  var n = new P();
  var r = new C(1, 1, 1);
  t._onChange(function () {
    n.setFromEuler(t, !1);
  });
  n._onChange(function () {
    t.setFromQuaternion(n, void 0, !1);
  });
  Object.defineProperties(this, {
    position: {
      configurable: !0,
      enumerable: !0,
      value: e
    },
    rotation: {
      configurable: !0,
      enumerable: !0,
      value: t
    },
    quaternion: {
      configurable: !0,
      enumerable: !0,
      value: n
    },
    scale: {
      configurable: !0,
      enumerable: !0,
      value: r
    },
    modelViewMatrix: {
      value: new ae()
    },
    normalMatrix: {
      value: new M()
    }
  });
  this.matrix = new ae();
  this.matrixWorld = new ae();
  this.matrixAutoUpdate = Pe.DefaultMatrixAutoUpdate;
  this.matrixWorldNeedsUpdate = !1;
  this.layers = new ve();
  this.visible = !0;
  this.castShadow = !1;
  this.receiveShadow = !1;
  this.frustumCulled = !0;
  this.renderOrder = 0;
  this.userData = {};
}
Pe.DefaultUp = new C(0, 1, 0);
Pe.DefaultMatrixAutoUpdate = !0;
Pe.prototype = Object.assign(Object.create(v.prototype), {
  constructor: Pe,
  isObject3D: !0,
  onBeforeRender: function () {},
  onAfterRender: function () {},
  applyMatrix4: function (e) {
    if (this.matrixAutoUpdate) {
      this.updateMatrix();
    }
    this.matrix.premultiply(e);
    this.matrix.decompose(this.position, this.quaternion, this.scale);
  },
  applyQuaternion: function (e) {
    this.quaternion.premultiply(e);
    return this;
  },
  setRotationFromAxisAngle: function (e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  },
  setRotationFromEuler: function (e) {
    this.quaternion.setFromEuler(e, !0);
  },
  setRotationFromMatrix: function (e) {
    this.quaternion.setFromRotationMatrix(e);
  },
  setRotationFromQuaternion: function (e) {
    this.quaternion.copy(e);
  },
  rotateOnAxis: function (e, t) {
    xe.setFromAxisAngle(e, t);
    this.quaternion.multiply(xe);
    return this;
  },
  rotateOnWorldAxis: function (e, t) {
    xe.setFromAxisAngle(e, t);
    this.quaternion.premultiply(xe);
    return this;
  },
  rotateX: function (e) {
    return this.rotateOnAxis(Te, e);
  },
  rotateY: function (e) {
    return this.rotateOnAxis(Ee, e);
  },
  rotateZ: function (e) {
    return this.rotateOnAxis(Ae, e);
  },
  translateOnAxis: function (e, t) {
    ye.copy(e).applyQuaternion(this.quaternion);
    this.position.add(ye.multiplyScalar(t));
    return this;
  },
  translateX: function (e) {
    return this.translateOnAxis(Te, e);
  },
  translateY: function (e) {
    return this.translateOnAxis(Ee, e);
  },
  translateZ: function (e) {
    return this.translateOnAxis(Ae, e);
  },
  localToWorld: function (e) {
    return e.applyMatrix4(this.matrixWorld);
  },
  worldToLocal: function (e) {
    return e.applyMatrix4(be.getInverse(this.matrixWorld));
  },
  lookAt: function (e, t, n) {
    if (e.isVector3) {
      _e.copy(e);
    } else {
      _e.set(e, t, n);
    }
    var r = this.parent;
    this.updateWorldMatrix(!0, !1);
    we.setFromMatrixPosition(this.matrixWorld);
    if (this.isCamera || this.isLight) {
      be.lookAt(we, _e, this.up);
    } else {
      be.lookAt(_e, we, this.up);
    }
    this.quaternion.setFromRotationMatrix(be);
    if (r) {
      be.extractRotation(r.matrixWorld);
      xe.setFromRotationMatrix(be);
      this.quaternion.premultiply(xe.inverse());
    }
  },
  add: function (e) {
    if (arguments.length > 1) {
      for (var t = 0; t < arguments.length; t++) {
        this.add(arguments[t]);
      }
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (null !== e.parent && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(Le)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  },
  remove: function (e) {
    if (arguments.length > 1) {
      for (var t = 0; t < arguments.length; t++) {
        this.remove(arguments[t]);
      }
      return this;
    }
    var n = this.children.indexOf(e);
    if (-1 !== n) {
      e.parent = null;
      this.children.splice(n, 1);
      e.dispatchEvent(Re);
    }
    return this;
  },
  clear: function () {
    for (var e = 0; e < this.children.length; e++) {
      var t = this.children[e];
      t.parent = null;
      t.dispatchEvent(Re);
    }
    this.children.length = 0;
    return this;
  },
  attach: function (e) {
    this.updateWorldMatrix(!0, !1);
    be.getInverse(this.matrixWorld);
    if (null !== e.parent) {
      e.parent.updateWorldMatrix(!0, !1);
      be.multiply(e.parent.matrixWorld);
    }
    e.applyMatrix4(be);
    e.updateWorldMatrix(!1, !1);
    this.add(e);
    return this;
  },
  getObjectById: function (e) {
    return this.getObjectByProperty("id", e);
  },
  getObjectByName: function (e) {
    return this.getObjectByProperty("name", e);
  },
  getObjectByProperty: function (e, t) {
    if (this[e] === t) {
      return this;
    }
    for (var n = 0, r = this.children.length; n < r; n++) {
      var i = this.children[n].getObjectByProperty(e, t);
      if (void 0 !== i) {
        return i;
      }
    }
  },
  getWorldPosition: function (e) {
    if (void 0 === e) {
      console.warn("THREE.Object3D: .getWorldPosition() target is now required");
      e = new C();
    }
    this.updateWorldMatrix(!0, !1);
    return e.setFromMatrixPosition(this.matrixWorld);
  },
  getWorldQuaternion: function (e) {
    if (void 0 === e) {
      console.warn("THREE.Object3D: .getWorldQuaternion() target is now required");
      e = new P();
    }
    this.updateWorldMatrix(!0, !1);
    this.matrixWorld.decompose(we, e, Me);
    return e;
  },
  getWorldScale: function (e) {
    if (void 0 === e) {
      console.warn("THREE.Object3D: .getWorldScale() target is now required");
      e = new C();
    }
    this.updateWorldMatrix(!0, !1);
    this.matrixWorld.decompose(we, Se, e);
    return e;
  },
  getWorldDirection: function (e) {
    if (void 0 === e) {
      console.warn("THREE.Object3D: .getWorldDirection() target is now required");
      e = new C();
    }
    this.updateWorldMatrix(!0, !1);
    var t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  },
  raycast: function () {},
  traverse: function (e) {
    e(this);
    for (var t = this.children, n = 0, r = t.length; n < r; n++) {
      t[n].traverse(e);
    }
  },
  traverseVisible: function (e) {
    if (!1 !== this.visible) {
      e(this);
      for (var t = this.children, n = 0, r = t.length; n < r; n++) {
        t[n].traverseVisible(e);
      }
    }
  },
  traverseAncestors: function (e) {
    var t = this.parent;
    if (null !== t) {
      e(t);
      t.traverseAncestors(e);
    }
  },
  updateMatrix: function () {
    this.matrix.compose(this.position, this.quaternion, this.scale);
    this.matrixWorldNeedsUpdate = !0;
  },
  updateMatrixWorld: function (e) {
    if (this.matrixAutoUpdate) {
      this.updateMatrix();
    }
    if (this.matrixWorldNeedsUpdate || e) {
      if (null === this.parent) {
        this.matrixWorld.copy(this.matrix);
      } else {
        this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);
      }
      this.matrixWorldNeedsUpdate = !1;
      e = !0;
    }
    for (var t = this.children, n = 0, r = t.length; n < r; n++) {
      t[n].updateMatrixWorld(e);
    }
  },
  updateWorldMatrix: function (e, t) {
    var n = this.parent;
    if (!0 === e && null !== n) {
      n.updateWorldMatrix(!0, !1);
    }
    if (this.matrixAutoUpdate) {
      this.updateMatrix();
    }
    if (null === this.parent) {
      this.matrixWorld.copy(this.matrix);
    } else {
      this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);
    }
    if (!0 === t) {
      for (var r = this.children, i = 0, a = r.length; i < a; i++) {
        r[i].updateWorldMatrix(!1, !0);
      }
    }
  },
  toJSON: function (e) {
    var t = void 0 === e || "string" === typeof e;
    var n = {};
    if (t) {
      e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {}
      };
      n.metadata = {
        version: 4.5,
        type: "Object",
        generator: "Object3D.toJSON"
      };
    }
    var r = {};
    function i(t, n) {
      if (void 0 === t[n.uuid]) {
        t[n.uuid] = n.toJSON(e);
      }
      return n.uuid;
    }
    r.uuid = this.uuid;
    r.type = this.type;
    if ("" !== this.name) {
      r.name = this.name;
    }
    if (!0 === this.castShadow) {
      r.castShadow = !0;
    }
    if (!0 === this.receiveShadow) {
      r.receiveShadow = !0;
    }
    if (!1 === this.visible) {
      r.visible = !1;
    }
    if (!1 === this.frustumCulled) {
      r.frustumCulled = !1;
    }
    if (0 !== this.renderOrder) {
      r.renderOrder = this.renderOrder;
    }
    if ("{}" !== JSON.stringify(this.userData)) {
      r.userData = this.userData;
    }
    r.layers = this.layers.mask;
    r.matrix = this.matrix.toArray();
    if (!1 === this.matrixAutoUpdate) {
      r.matrixAutoUpdate = !1;
    }
    if (this.isInstancedMesh) {
      r.type = "InstancedMesh";
      r.count = this.count;
      r.instanceMatrix = this.instanceMatrix.toJSON();
    }
    if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = i(e.geometries, this.geometry);
      var a = this.geometry.parameters;
      if (void 0 !== a && void 0 !== a.shapes) {
        var o = a.shapes;
        if (Array.isArray(o)) {
          for (var s = 0, l = o.length; s < l; s++) {
            var c = o[s];
            i(e.shapes, c);
          }
        } else {
          i(e.shapes, o);
        }
      }
    }
    if (void 0 !== this.material) {
      if (Array.isArray(this.material)) {
        for (var u = [], h = 0, d = this.material.length; h < d; h++) {
          u.push(i(e.materials, this.material[h]));
        }
        r.material = u;
      } else {
        r.material = i(e.materials, this.material);
      }
    }
    if (this.children.length > 0) {
      r.children = [];
      for (var p = 0; p < this.children.length; p++) {
        r.children.push(this.children[p].toJSON(e).object);
      }
    }
    if (t) {
      var f = x(e.geometries);
      var m = x(e.materials);
      var v = x(e.textures);
      var g = x(e.images);
      var y = x(e.shapes);
      if (f.length > 0) {
        n.geometries = f;
      }
      if (m.length > 0) {
        n.materials = m;
      }
      if (v.length > 0) {
        n.textures = v;
      }
      if (g.length > 0) {
        n.images = g;
      }
      if (y.length > 0) {
        n.shapes = y;
      }
    }
    n.object = r;
    return n;
    function x(e) {
      var t = [];
      for (var n in e) {
        var r = e[n];
        delete r.metadata;
        t.push(r);
      }
      return t;
    }
  },
  clone: function (e) {
    return new this.constructor().copy(this, e);
  },
  copy: function (e, t) {
    if (void 0 === t) {
      t = !0;
    }
    this.name = e.name;
    this.up.copy(e.up);
    this.position.copy(e.position);
    this.rotation.order = e.rotation.order;
    this.quaternion.copy(e.quaternion);
    this.scale.copy(e.scale);
    this.matrix.copy(e.matrix);
    this.matrixWorld.copy(e.matrixWorld);
    this.matrixAutoUpdate = e.matrixAutoUpdate;
    this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate;
    this.layers.mask = e.layers.mask;
    this.visible = e.visible;
    this.castShadow = e.castShadow;
    this.receiveShadow = e.receiveShadow;
    this.frustumCulled = e.frustumCulled;
    this.renderOrder = e.renderOrder;
    this.userData = JSON.parse(JSON.stringify(e.userData));
    if (!0 === t) {
      for (var n = 0; n < e.children.length; n++) {
        var r = e.children[n];
        this.add(r.clone());
      }
    }
    return this;
  }
});
var Ce = new C();
var Ie = new C();
var Oe = new M();
var ke = function () {
  function e(t, n) {
    Object(u.a)(this, e);
    Object.defineProperty(this, "isPlane", {
      value: !0
    });
    this.normal = void 0 !== t ? t : new C(1, 0, 0);
    this.constant = void 0 !== n ? n : 0;
  }
  Object(h.a)(e, [{
    key: "set",
    value: function (e, t) {
      this.normal.copy(e);
      this.constant = t;
      return this;
    }
  }, {
    key: "setComponents",
    value: function (e, t, n, r) {
      this.normal.set(e, t, n);
      this.constant = r;
      return this;
    }
  }, {
    key: "setFromNormalAndCoplanarPoint",
    value: function (e, t) {
      this.normal.copy(e);
      this.constant = -t.dot(this.normal);
      return this;
    }
  }, {
    key: "setFromCoplanarPoints",
    value: function (e, t, n) {
      var r = Ce.subVectors(n, t).cross(Ie.subVectors(e, t)).normalize();
      this.setFromNormalAndCoplanarPoint(r, e);
      return this;
    }
  }, {
    key: "clone",
    value: function () {
      return new this.constructor().copy(this);
    }
  }, {
    key: "copy",
    value: function (e) {
      this.normal.copy(e.normal);
      this.constant = e.constant;
      return this;
    }
  }, {
    key: "normalize",
    value: function () {
      var e = 1 / this.normal.length();
      this.normal.multiplyScalar(e);
      this.constant *= e;
      return this;
    }
  }, {
    key: "negate",
    value: function () {
      this.constant *= -1;
      this.normal.negate();
      return this;
    }
  }, {
    key: "distanceToPoint",
    value: function (e) {
      return this.normal.dot(e) + this.constant;
    }
  }, {
    key: "distanceToSphere",
    value: function (e) {
      return this.distanceToPoint(e.center) - e.radius;
    }
  }, {
    key: "projectPoint",
    value: function (e, t) {
      if (void 0 === t) {
        console.warn("THREE.Plane: .projectPoint() target is now required");
        t = new C();
      }
      return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e);
    }
  }, {
    key: "intersectLine",
    value: function (e, t) {
      if (void 0 === t) {
        console.warn("THREE.Plane: .intersectLine() target is now required");
        t = new C();
      }
      var n = e.delta(Ce);
      var r = this.normal.dot(n);
      if (0 === r) {
        return 0 === this.distanceToPoint(e.start) ? t.copy(e.start) : void 0;
      }
      var i = -(e.start.dot(this.normal) + this.constant) / r;
      return i < 0 || i > 1 ? void 0 : t.copy(n).multiplyScalar(i).add(e.start);
    }
  }, {
    key: "intersectsLine",
    value: function (e) {
      var t = this.distanceToPoint(e.start);
      var n = this.distanceToPoint(e.end);
      return t < 0 && n > 0 || n < 0 && t > 0;
    }
  }, {
    key: "intersectsBox",
    value: function (e) {
      return e.intersectsPlane(this);
    }
  }, {
    key: "intersectsSphere",
    value: function (e) {
      return e.intersectsPlane(this);
    }
  }, {
    key: "coplanarPoint",
    value: function (e) {
      if (void 0 === e) {
        console.warn("THREE.Plane: .coplanarPoint() target is now required");
        e = new C();
      }
      return e.copy(this.normal).multiplyScalar(-this.constant);
    }
  }, {
    key: "applyMatrix4",
    value: function (e, t) {
      var n = t || Oe.getNormalMatrix(e);
      var r = this.coplanarPoint(Ce).applyMatrix4(e);
      var i = this.normal.applyMatrix3(n).normalize();
      this.constant = -r.dot(i);
      return this;
    }
  }, {
    key: "translate",
    value: function (e) {
      this.constant -= e.dot(this.normal);
      return this;
    }
  }, {
    key: "equals",
    value: function (e) {
      return e.normal.equals(this.normal) && e.constant === this.constant;
    }
  }]);
  return e;
}();
var Ne = new C();
var De = new C();
var Ue = new C();
var Be = new C();
var ze = new C();
var Fe = new C();
var He = new C();
var Ge = new C();
var je = new C();
var Ve = new C();
var We = function () {
  function e(t, n, r) {
    Object(u.a)(this, e);
    this.a = void 0 !== t ? t : new C();
    this.b = void 0 !== n ? n : new C();
    this.c = void 0 !== r ? r : new C();
  }
  Object(h.a)(e, [{
    key: "set",
    value: function (e, t, n) {
      this.a.copy(e);
      this.b.copy(t);
      this.c.copy(n);
      return this;
    }
  }, {
    key: "setFromPointsAndIndices",
    value: function (e, t, n, r) {
      this.a.copy(e[t]);
      this.b.copy(e[n]);
      this.c.copy(e[r]);
      return this;
    }
  }, {
    key: "clone",
    value: function () {
      return new this.constructor().copy(this);
    }
  }, {
    key: "copy",
    value: function (e) {
      this.a.copy(e.a);
      this.b.copy(e.b);
      this.c.copy(e.c);
      return this;
    }
  }, {
    key: "getArea",
    value: function () {
      Ne.subVectors(this.c, this.b);
      De.subVectors(this.a, this.b);
      return .5 * Ne.cross(De).length();
    }
  }, {
    key: "getMidpoint",
    value: function (e) {
      if (void 0 === e) {
        console.warn("THREE.Triangle: .getMidpoint() target is now required");
        e = new C();
      }
      return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
    }
  }, {
    key: "getNormal",
    value: function (t) {
      return e.getNormal(this.a, this.b, this.c, t);
    }
  }, {
    key: "getPlane",
    value: function (e) {
      if (void 0 === e) {
        console.warn("THREE.Triangle: .getPlane() target is now required");
        e = new ke();
      }
      return e.setFromCoplanarPoints(this.a, this.b, this.c);
    }
  }, {
    key: "getBarycoord",
    value: function (t, n) {
      return e.getBarycoord(t, this.a, this.b, this.c, n);
    }
  }, {
    key: "getUV",
    value: function (t, n, r, i, a) {
      return e.getUV(t, this.a, this.b, this.c, n, r, i, a);
    }
  }, {
    key: "containsPoint",
    value: function (t) {
      return e.containsPoint(t, this.a, this.b, this.c);
    }
  }, {
    key: "isFrontFacing",
    value: function (t) {
      return e.isFrontFacing(this.a, this.b, this.c, t);
    }
  }, {
    key: "intersectsBox",
    value: function (e) {
      return e.intersectsTriangle(this);
    }
  }, {
    key: "closestPointToPoint",
    value: function (e, t) {
      if (void 0 === t) {
        console.warn("THREE.Triangle: .closestPointToPoint() target is now required");
        t = new C();
      }
      var n;
      var r;
      var i = this.a;
      var a = this.b;
      var o = this.c;
      ze.subVectors(a, i);
      Fe.subVectors(o, i);
      Ge.subVectors(e, i);
      var s = ze.dot(Ge);
      var l = Fe.dot(Ge);
      if (s <= 0 && l <= 0) {
        return t.copy(i);
      }
      je.subVectors(e, a);
      var c = ze.dot(je);
      var u = Fe.dot(je);
      if (c >= 0 && u <= c) {
        return t.copy(a);
      }
      var h = s * u - c * l;
      if (h <= 0 && s >= 0 && c <= 0) {
        n = s / (s - c);
        return t.copy(i).addScaledVector(ze, n);
      }
      Ve.subVectors(e, o);
      var d = ze.dot(Ve);
      var p = Fe.dot(Ve);
      if (p >= 0 && d <= p) {
        return t.copy(o);
      }
      var f = d * l - s * p;
      if (f <= 0 && l >= 0 && p <= 0) {
        r = l / (l - p);
        return t.copy(i).addScaledVector(Fe, r);
      }
      var m = c * p - d * u;
      if (m <= 0 && u - c >= 0 && d - p >= 0) {
        He.subVectors(o, a);
        r = (u - c) / (u - c + (d - p));
        return t.copy(a).addScaledVector(He, r);
      }
      var v = 1 / (m + f + h);
      n = f * v;
      r = h * v;
      return t.copy(i).addScaledVector(ze, n).addScaledVector(Fe, r);
    }
  }, {
    key: "equals",
    value: function (e) {
      return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
    }
  }], [{
    key: "getNormal",
    value: function (e, t, n, r) {
      if (void 0 === r) {
        console.warn("THREE.Triangle: .getNormal() target is now required");
        r = new C();
      }
      r.subVectors(n, t);
      Ne.subVectors(e, t);
      r.cross(Ne);
      var i = r.lengthSq();
      return i > 0 ? r.multiplyScalar(1 / Math.sqrt(i)) : r.set(0, 0, 0);
    }
  }, {
    key: "getBarycoord",
    value: function (e, t, n, r, i) {
      Ne.subVectors(r, t);
      De.subVectors(n, t);
      Ue.subVectors(e, t);
      var a = Ne.dot(Ne);
      var o = Ne.dot(De);
      var s = Ne.dot(Ue);
      var l = De.dot(De);
      var c = De.dot(Ue);
      var u = a * l - o * o;
      if (void 0 === i) {
        console.warn("THREE.Triangle: .getBarycoord() target is now required");
        i = new C();
      }
      if (0 === u) {
        return i.set(-2, -1, -1);
      }
      var h = 1 / u;
      var d = (l * s - o * c) * h;
      var p = (a * c - o * s) * h;
      return i.set(1 - d - p, p, d);
    }
  }, {
    key: "containsPoint",
    value: function (e, t, n, r) {
      this.getBarycoord(e, t, n, r, Be);
      return Be.x >= 0 && Be.y >= 0 && Be.x + Be.y <= 1;
    }
  }, {
    key: "getUV",
    value: function (e, t, n, r, i, a, o, s) {
      this.getBarycoord(e, t, n, r, Be);
      s.set(0, 0);
      s.addScaledVector(i, Be.x);
      s.addScaledVector(a, Be.y);
      s.addScaledVector(o, Be.z);
      return s;
    }
  }, {
    key: "isFrontFacing",
    value: function (e, t, n, r) {
      Ne.subVectors(n, t);
      De.subVectors(e, t);
      return Ne.cross(De).dot(r) < 0;
    }
  }]);
  return e;
}();
var qe = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
var Xe = {
  h: 0,
  s: 0,
  l: 0
};
var Ye = {
  h: 0,
  s: 0,
  l: 0
};
function Ze(e, t, n) {
  if (n < 0) {
    n += 1;
  }
  if (n > 1) {
    n -= 1;
  }
  return n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + 6 * (t - e) * (2 / 3 - n) : e;
}
function Je(e) {
  return e < .04045 ? .0773993808 * e : Math.pow(.9478672986 * e + .0521327014, 2.4);
}
function Ke(e) {
  return e < .0031308 ? 12.92 * e : 1.055 * Math.pow(e, .41666) - .055;
}
var Qe = function () {
  function e(t, n, r) {
    Object(u.a)(this, e);
    Object.defineProperty(this, "isColor", {
      value: !0
    });
    return void 0 === n && void 0 === r ? this.set(t) : this.setRGB(t, n, r);
  }
  Object(h.a)(e, [{
    key: "set",
    value: function (e) {
      if (e && e.isColor) {
        this.copy(e);
      } else {
        if ("number" === typeof e) {
          this.setHex(e);
        } else {
          if ("string" === typeof e) {
            this.setStyle(e);
          }
        }
      }
      return this;
    }
  }, {
    key: "setScalar",
    value: function (e) {
      this.r = e;
      this.g = e;
      this.b = e;
      return this;
    }
  }, {
    key: "setHex",
    value: function (e) {
      e = Math.floor(e);
      this.r = (e >> 16 & 255) / 255;
      this.g = (e >> 8 & 255) / 255;
      this.b = (255 & e) / 255;
      return this;
    }
  }, {
    key: "setRGB",
    value: function (e, t, n) {
      this.r = e;
      this.g = t;
      this.b = n;
      return this;
    }
  }, {
    key: "setHSL",
    value: function (e, t, n) {
      e = _.euclideanModulo(e, 1);
      t = _.clamp(t, 0, 1);
      n = _.clamp(n, 0, 1);
      if (0 === t) {
        this.r = this.g = this.b = n;
      } else {
        var r = n <= .5 ? n * (1 + t) : n + t - n * t;
        var i = 2 * n - r;
        this.r = Ze(i, r, e + 1 / 3);
        this.g = Ze(i, r, e);
        this.b = Ze(i, r, e - 1 / 3);
      }
      return this;
    }
  }, {
    key: "setStyle",
    value: function (e) {
      function t(t) {
        if (void 0 !== t && parseFloat(t) < 1) {
          console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
        }
      }
      var n;
      if (n = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e)) {
        var r;
        var i = n[1];
        var a = n[2];
        switch (i) {
          case "rgb":
          case "rgba":
            if (r = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) {
              this.r = Math.min(255, parseInt(r[1], 10)) / 255;
              this.g = Math.min(255, parseInt(r[2], 10)) / 255;
              this.b = Math.min(255, parseInt(r[3], 10)) / 255;
              t(r[5]);
              return this;
            }
            if (r = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) {
              this.r = Math.min(100, parseInt(r[1], 10)) / 100;
              this.g = Math.min(100, parseInt(r[2], 10)) / 100;
              this.b = Math.min(100, parseInt(r[3], 10)) / 100;
              t(r[5]);
              return this;
            }
            break;
          case "hsl":
          case "hsla":
            if (r = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) {
              var o = parseFloat(r[1]) / 360;
              var s = parseInt(r[2], 10) / 100;
              var l = parseInt(r[3], 10) / 100;
              t(r[5]);
              return this.setHSL(o, s, l);
            }
        }
      } else if (n = /^\#([A-Fa-f0-9]+)$/.exec(e)) {
        var c = n[1];
        var u = c.length;
        if (3 === u) {
          this.r = parseInt(c.charAt(0) + c.charAt(0), 16) / 255;
          this.g = parseInt(c.charAt(1) + c.charAt(1), 16) / 255;
          this.b = parseInt(c.charAt(2) + c.charAt(2), 16) / 255;
          return this;
        }
        if (6 === u) {
          this.r = parseInt(c.charAt(0) + c.charAt(1), 16) / 255;
          this.g = parseInt(c.charAt(2) + c.charAt(3), 16) / 255;
          this.b = parseInt(c.charAt(4) + c.charAt(5), 16) / 255;
          return this;
        }
      }
      return e && e.length > 0 ? this.setColorName(e) : this;
    }
  }, {
    key: "setColorName",
    value: function (e) {
      var t = qe[e];
      if (void 0 !== t) {
        this.setHex(t);
      } else {
        console.warn("THREE.Color: Unknown color " + e);
      }
      return this;
    }
  }, {
    key: "clone",
    value: function () {
      return new this.constructor(this.r, this.g, this.b);
    }
  }, {
    key: "copy",
    value: function (e) {
      this.r = e.r;
      this.g = e.g;
      this.b = e.b;
      return this;
    }
  }, {
    key: "copyGammaToLinear",
    value: function (e, t) {
      if (void 0 === t) {
        t = 2;
      }
      this.r = Math.pow(e.r, t);
      this.g = Math.pow(e.g, t);
      this.b = Math.pow(e.b, t);
      return this;
    }
  }, {
    key: "copyLinearToGamma",
    value: function (e, t) {
      if (void 0 === t) {
        t = 2;
      }
      var n = t > 0 ? 1 / t : 1;
      this.r = Math.pow(e.r, n);
      this.g = Math.pow(e.g, n);
      this.b = Math.pow(e.b, n);
      return this;
    }
  }, {
    key: "convertGammaToLinear",
    value: function (e) {
      this.copyGammaToLinear(this, e);
      return this;
    }
  }, {
    key: "convertLinearToGamma",
    value: function (e) {
      this.copyLinearToGamma(this, e);
      return this;
    }
  }, {
    key: "copySRGBToLinear",
    value: function (e) {
      this.r = Je(e.r);
      this.g = Je(e.g);
      this.b = Je(e.b);
      return this;
    }
  }, {
    key: "copyLinearToSRGB",
    value: function (e) {
      this.r = Ke(e.r);
      this.g = Ke(e.g);
      this.b = Ke(e.b);
      return this;
    }
  }, {
    key: "convertSRGBToLinear",
    value: function () {
      this.copySRGBToLinear(this);
      return this;
    }
  }, {
    key: "convertLinearToSRGB",
    value: function () {
      this.copyLinearToSRGB(this);
      return this;
    }
  }, {
    key: "getHex",
    value: function () {
      return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0;
    }
  }, {
    key: "getHexString",
    value: function () {
      return ("000000" + this.getHex().toString(16)).slice(-6);
    }
  }, {
    key: "getHSL",
    value: function (e) {
      if (void 0 === e) {
        console.warn("THREE.Color: .getHSL() target is now required");
        e = {
          h: 0,
          s: 0,
          l: 0
        };
      }
      var t;
      var n;
      var r = this.r;
      var i = this.g;
      var a = this.b;
      var o = Math.max(r, i, a);
      var s = Math.min(r, i, a);
      var l = (s + o) / 2;
      if (s === o) {
        t = 0;
        n = 0;
      } else {
        var c = o - s;
        switch (n = l <= .5 ? c / (o + s) : c / (2 - o - s), o) {
          case r:
            t = (i - a) / c + (i < a ? 6 : 0);
            break;
          case i:
            t = (a - r) / c + 2;
            break;
          case a:
            t = (r - i) / c + 4;
        }
        t /= 6;
      }
      e.h = t;
      e.s = n;
      e.l = l;
      return e;
    }
  }, {
    key: "getStyle",
    value: function () {
      return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")";
    }
  }, {
    key: "offsetHSL",
    value: function (e, t, n) {
      this.getHSL(Xe);
      Xe.h += e;
      Xe.s += t;
      Xe.l += n;
      this.setHSL(Xe.h, Xe.s, Xe.l);
      return this;
    }
  }, {
    key: "add",
    value: function (e) {
      this.r += e.r;
      this.g += e.g;
      this.b += e.b;
      return this;
    }
  }, {
    key: "addColors",
    value: function (e, t) {
      this.r = e.r + t.r;
      this.g = e.g + t.g;
      this.b = e.b + t.b;
      return this;
    }
  }, {
    key: "addScalar",
    value: function (e) {
      this.r += e;
      this.g += e;
      this.b += e;
      return this;
    }
  }, {
    key: "sub",
    value: function (e) {
      this.r = Math.max(0, this.r - e.r);
      this.g = Math.max(0, this.g - e.g);
      this.b = Math.max(0, this.b - e.b);
      return this;
    }
  }, {
    key: "multiply",
    value: function (e) {
      this.r *= e.r;
      this.g *= e.g;
      this.b *= e.b;
      return this;
    }
  }, {
    key: "multiplyScalar",
    value: function (e) {
      this.r *= e;
      this.g *= e;
      this.b *= e;
      return this;
    }
  }, {
    key: "lerp",
    value: function (e, t) {
      this.r += (e.r - this.r) * t;
      this.g += (e.g - this.g) * t;
      this.b += (e.b - this.b) * t;
      return this;
    }
  }, {
    key: "lerpHSL",
    value: function (e, t) {
      this.getHSL(Xe);
      e.getHSL(Ye);
      var n = _.lerp(Xe.h, Ye.h, t);
      var r = _.lerp(Xe.s, Ye.s, t);
      var i = _.lerp(Xe.l, Ye.l, t);
      this.setHSL(n, r, i);
      return this;
    }
  }, {
    key: "equals",
    value: function (e) {
      return e.r === this.r && e.g === this.g && e.b === this.b;
    }
  }, {
    key: "fromArray",
    value: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      this.r = e[t];
      this.g = e[t + 1];
      this.b = e[t + 2];
      return this;
    }
  }, {
    key: "toArray",
    value: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      e[t] = this.r;
      e[t + 1] = this.g;
      e[t + 2] = this.b;
      return e;
    }
  }, {
    key: "fromBufferAttribute",
    value: function (e, t) {
      this.r = e.getX(t);
      this.g = e.getY(t);
      this.b = e.getZ(t);
      if (!0 === e.normalized) {
        this.r /= 255;
        this.g /= 255;
        this.b /= 255;
      }
      return this;
    }
  }, {
    key: "toJSON",
    value: function () {
      return this.getHex();
    }
  }]);
  return e;
}();
Qe.NAMES = qe;
Qe.prototype.r = 1;
Qe.prototype.g = 1;
Qe.prototype.b = 1;
var $e = function () {
  function e(t, n, r, i, a, o) {
    Object(u.a)(this, e);
    this.a = t;
    this.b = n;
    this.c = r;
    this.normal = i && i.isVector3 ? i : new C();
    this.vertexNormals = Array.isArray(i) ? i : [];
    this.color = a && a.isColor ? a : new Qe();
    this.vertexColors = Array.isArray(a) ? a : [];
    this.materialIndex = void 0 !== o ? o : 0;
  }
  Object(h.a)(e, [{
    key: "clone",
    value: function () {
      return new this.constructor().copy(this);
    }
  }, {
    key: "copy",
    value: function (e) {
      this.a = e.a;
      this.b = e.b;
      this.c = e.c;
      this.normal.copy(e.normal);
      this.color.copy(e.color);
      this.materialIndex = e.materialIndex;
      for (var t = 0, n = e.vertexNormals.length; t < n; t++) {
        this.vertexNormals[t] = e.vertexNormals[t].clone();
      }
      for (var r = 0, i = e.vertexColors.length; r < i; r++) {
        this.vertexColors[r] = e.vertexColors[r].clone();
      }
      return this;
    }
  }]);
  return e;
}();
var et = 0;
function tt() {
  Object.defineProperty(this, "id", {
    value: et++
  });
  this.uuid = _.generateUUID();
  this.name = "";
  this.type = "Material";
  this.fog = !0;
  this.blending = 1;
  this.side = 0;
  this.flatShading = !1;
  this.vertexColors = !1;
  this.opacity = 1;
  this.transparent = !1;
  this.blendSrc = 204;
  this.blendDst = 205;
  this.blendEquation = 100;
  this.blendSrcAlpha = null;
  this.blendDstAlpha = null;
  this.blendEquationAlpha = null;
  this.depthFunc = 3;
  this.depthTest = !0;
  this.depthWrite = !0;
  this.stencilWriteMask = 255;
  this.stencilFunc = 519;
  this.stencilRef = 0;
  this.stencilFuncMask = 255;
  this.stencilFail = 7680;
  this.stencilZFail = 7680;
  this.stencilZPass = 7680;
  this.stencilWrite = !1;
  this.clippingPlanes = null;
  this.clipIntersection = !1;
  this.clipShadows = !1;
  this.shadowSide = null;
  this.colorWrite = !0;
  this.precision = null;
  this.polygonOffset = !1;
  this.polygonOffsetFactor = 0;
  this.polygonOffsetUnits = 0;
  this.dithering = !1;
  this.alphaTest = 0;
  this.premultipliedAlpha = !1;
  this.visible = !0;
  this.toneMapped = !0;
  this.userData = {};
  this.version = 0;
}
function nt(e) {
  tt.call(this);
  this.type = "MeshBasicMaterial";
  this.color = new Qe(16777215);
  this.map = null;
  this.lightMap = null;
  this.lightMapIntensity = 1;
  this.aoMap = null;
  this.aoMapIntensity = 1;
  this.specularMap = null;
  this.alphaMap = null;
  this.envMap = null;
  this.combine = 0;
  this.reflectivity = 1;
  this.refractionRatio = .98;
  this.wireframe = !1;
  this.wireframeLinewidth = 1;
  this.wireframeLinecap = "round";
  this.wireframeLinejoin = "round";
  this.skinning = !1;
  this.morphTargets = !1;
  this.setValues(e);
}
tt.prototype = Object.assign(Object.create(v.prototype), {
  constructor: tt,
  isMaterial: !0,
  onBeforeCompile: function () {},
  customProgramCacheKey: function () {
    return this.onBeforeCompile.toString();
  },
  setValues: function (e) {
    if (void 0 !== e) {
      for (var t in e) {
        var n = e[t];
        if (void 0 !== n) {
          if ("shading" !== t) {
            var r = this[t];
            if (void 0 !== r) {
              if (r && r.isColor) {
                r.set(n);
              } else {
                if (r && r.isVector3 && n && n.isVector3) {
                  r.copy(n);
                } else {
                  this[t] = n;
                }
              }
            } else {
              console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.");
            }
          } else {
            console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.");
            this.flatShading = 1 === n;
          }
        } else {
          console.warn("THREE.Material: '" + t + "' parameter is undefined.");
        }
      }
    }
  },
  toJSON: function (e) {
    var t = void 0 === e || "string" === typeof e;
    if (t) {
      e = {
        textures: {},
        images: {}
      };
    }
    var n = {
      metadata: {
        version: 4.5,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    function r(e) {
      var t = [];
      for (var n in e) {
        var r = e[n];
        delete r.metadata;
        t.push(r);
      }
      return t;
    }
    n.uuid = this.uuid;
    n.type = this.type;
    if ("" !== this.name) {
      n.name = this.name;
    }
    if (this.color && this.color.isColor) {
      n.color = this.color.getHex();
    }
    if (void 0 !== this.roughness) {
      n.roughness = this.roughness;
    }
    if (void 0 !== this.metalness) {
      n.metalness = this.metalness;
    }
    if (this.sheen && this.sheen.isColor) {
      n.sheen = this.sheen.getHex();
    }
    if (this.emissive && this.emissive.isColor) {
      n.emissive = this.emissive.getHex();
    }
    if (this.emissiveIntensity && 1 !== this.emissiveIntensity) {
      n.emissiveIntensity = this.emissiveIntensity;
    }
    if (this.specular && this.specular.isColor) {
      n.specular = this.specular.getHex();
    }
    if (void 0 !== this.shininess) {
      n.shininess = this.shininess;
    }
    if (void 0 !== this.clearcoat) {
      n.clearcoat = this.clearcoat;
    }
    if (void 0 !== this.clearcoatRoughness) {
      n.clearcoatRoughness = this.clearcoatRoughness;
    }
    if (this.clearcoatMap && this.clearcoatMap.isTexture) {
      n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid;
    }
    if (this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture) {
      n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid;
    }
    if (this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture) {
      n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid;
      n.clearcoatNormalScale = this.clearcoatNormalScale.toArray();
    }
    if (this.map && this.map.isTexture) {
      n.map = this.map.toJSON(e).uuid;
    }
    if (this.matcap && this.matcap.isTexture) {
      n.matcap = this.matcap.toJSON(e).uuid;
    }
    if (this.alphaMap && this.alphaMap.isTexture) {
      n.alphaMap = this.alphaMap.toJSON(e).uuid;
    }
    if (this.lightMap && this.lightMap.isTexture) {
      n.lightMap = this.lightMap.toJSON(e).uuid;
    }
    if (this.aoMap && this.aoMap.isTexture) {
      n.aoMap = this.aoMap.toJSON(e).uuid;
      n.aoMapIntensity = this.aoMapIntensity;
    }
    if (this.bumpMap && this.bumpMap.isTexture) {
      n.bumpMap = this.bumpMap.toJSON(e).uuid;
      n.bumpScale = this.bumpScale;
    }
    if (this.normalMap && this.normalMap.isTexture) {
      n.normalMap = this.normalMap.toJSON(e).uuid;
      n.normalMapType = this.normalMapType;
      n.normalScale = this.normalScale.toArray();
    }
    if (this.displacementMap && this.displacementMap.isTexture) {
      n.displacementMap = this.displacementMap.toJSON(e).uuid;
      n.displacementScale = this.displacementScale;
      n.displacementBias = this.displacementBias;
    }
    if (this.roughnessMap && this.roughnessMap.isTexture) {
      n.roughnessMap = this.roughnessMap.toJSON(e).uuid;
    }
    if (this.metalnessMap && this.metalnessMap.isTexture) {
      n.metalnessMap = this.metalnessMap.toJSON(e).uuid;
    }
    if (this.emissiveMap && this.emissiveMap.isTexture) {
      n.emissiveMap = this.emissiveMap.toJSON(e).uuid;
    }
    if (this.specularMap && this.specularMap.isTexture) {
      n.specularMap = this.specularMap.toJSON(e).uuid;
    }
    if (this.envMap && this.envMap.isTexture) {
      n.envMap = this.envMap.toJSON(e).uuid;
      n.reflectivity = this.reflectivity;
      n.refractionRatio = this.refractionRatio;
      if (void 0 !== this.combine) {
        n.combine = this.combine;
      }
      if (void 0 !== this.envMapIntensity) {
        n.envMapIntensity = this.envMapIntensity;
      }
    }
    if (this.gradientMap && this.gradientMap.isTexture) {
      n.gradientMap = this.gradientMap.toJSON(e).uuid;
    }
    if (void 0 !== this.size) {
      n.size = this.size;
    }
    if (void 0 !== this.sizeAttenuation) {
      n.sizeAttenuation = this.sizeAttenuation;
    }
    if (1 !== this.blending) {
      n.blending = this.blending;
    }
    if (!0 === this.flatShading) {
      n.flatShading = this.flatShading;
    }
    if (0 !== this.side) {
      n.side = this.side;
    }
    if (this.vertexColors) {
      n.vertexColors = !0;
    }
    if (this.opacity < 1) {
      n.opacity = this.opacity;
    }
    if (!0 === this.transparent) {
      n.transparent = this.transparent;
    }
    n.depthFunc = this.depthFunc;
    n.depthTest = this.depthTest;
    n.depthWrite = this.depthWrite;
    n.stencilWrite = this.stencilWrite;
    n.stencilWriteMask = this.stencilWriteMask;
    n.stencilFunc = this.stencilFunc;
    n.stencilRef = this.stencilRef;
    n.stencilFuncMask = this.stencilFuncMask;
    n.stencilFail = this.stencilFail;
    n.stencilZFail = this.stencilZFail;
    n.stencilZPass = this.stencilZPass;
    if (this.rotation && 0 !== this.rotation) {
      n.rotation = this.rotation;
    }
    if (!0 === this.polygonOffset) {
      n.polygonOffset = !0;
    }
    if (0 !== this.polygonOffsetFactor) {
      n.polygonOffsetFactor = this.polygonOffsetFactor;
    }
    if (0 !== this.polygonOffsetUnits) {
      n.polygonOffsetUnits = this.polygonOffsetUnits;
    }
    if (this.linewidth && 1 !== this.linewidth) {
      n.linewidth = this.linewidth;
    }
    if (void 0 !== this.dashSize) {
      n.dashSize = this.dashSize;
    }
    if (void 0 !== this.gapSize) {
      n.gapSize = this.gapSize;
    }
    if (void 0 !== this.scale) {
      n.scale = this.scale;
    }
    if (!0 === this.dithering) {
      n.dithering = !0;
    }
    if (this.alphaTest > 0) {
      n.alphaTest = this.alphaTest;
    }
    if (!0 === this.premultipliedAlpha) {
      n.premultipliedAlpha = this.premultipliedAlpha;
    }
    if (!0 === this.wireframe) {
      n.wireframe = this.wireframe;
    }
    if (this.wireframeLinewidth > 1) {
      n.wireframeLinewidth = this.wireframeLinewidth;
    }
    if ("round" !== this.wireframeLinecap) {
      n.wireframeLinecap = this.wireframeLinecap;
    }
    if ("round" !== this.wireframeLinejoin) {
      n.wireframeLinejoin = this.wireframeLinejoin;
    }
    if (!0 === this.morphTargets) {
      n.morphTargets = !0;
    }
    if (!0 === this.morphNormals) {
      n.morphNormals = !0;
    }
    if (!0 === this.skinning) {
      n.skinning = !0;
    }
    if (!1 === this.visible) {
      n.visible = !1;
    }
    if (!1 === this.toneMapped) {
      n.toneMapped = !1;
    }
    if ("{}" !== JSON.stringify(this.userData)) {
      n.userData = this.userData;
    }
    if (t) {
      var i = r(e.textures);
      var a = r(e.images);
      if (i.length > 0) {
        n.textures = i;
      }
      if (a.length > 0) {
        n.images = a;
      }
    }
    return n;
  },
  clone: function () {
    return new this.constructor().copy(this);
  },
  copy: function (e) {
    this.name = e.name;
    this.fog = e.fog;
    this.blending = e.blending;
    this.side = e.side;
    this.flatShading = e.flatShading;
    this.vertexColors = e.vertexColors;
    this.opacity = e.opacity;
    this.transparent = e.transparent;
    this.blendSrc = e.blendSrc;
    this.blendDst = e.blendDst;
    this.blendEquation = e.blendEquation;
    this.blendSrcAlpha = e.blendSrcAlpha;
    this.blendDstAlpha = e.blendDstAlpha;
    this.blendEquationAlpha = e.blendEquationAlpha;
    this.depthFunc = e.depthFunc;
    this.depthTest = e.depthTest;
    this.depthWrite = e.depthWrite;
    this.stencilWriteMask = e.stencilWriteMask;
    this.stencilFunc = e.stencilFunc;
    this.stencilRef = e.stencilRef;
    this.stencilFuncMask = e.stencilFuncMask;
    this.stencilFail = e.stencilFail;
    this.stencilZFail = e.stencilZFail;
    this.stencilZPass = e.stencilZPass;
    this.stencilWrite = e.stencilWrite;
    var t = e.clippingPlanes;
    var n = null;
    if (null !== t) {
      var r = t.length;
      n = new Array(r);
      for (var i = 0; i !== r; ++i) {
        n[i] = t[i].clone();
      }
    }
    this.clippingPlanes = n;
    this.clipIntersection = e.clipIntersection;
    this.clipShadows = e.clipShadows;
    this.shadowSide = e.shadowSide;
    this.colorWrite = e.colorWrite;
    this.precision = e.precision;
    this.polygonOffset = e.polygonOffset;
    this.polygonOffsetFactor = e.polygonOffsetFactor;
    this.polygonOffsetUnits = e.polygonOffsetUnits;
    this.dithering = e.dithering;
    this.alphaTest = e.alphaTest;
    this.premultipliedAlpha = e.premultipliedAlpha;
    this.visible = e.visible;
    this.toneMapped = e.toneMapped;
    this.userData = JSON.parse(JSON.stringify(e.userData));
    return this;
  },
  dispose: function () {
    this.dispatchEvent({
      type: "dispose"
    });
  }
});
Object.defineProperty(tt.prototype, "needsUpdate", {
  set: function (e) {
    if (!0 === e) {
      this.version++;
    }
  }
});
nt.prototype = Object.create(tt.prototype);
nt.prototype.constructor = nt;
nt.prototype.isMeshBasicMaterial = !0;
nt.prototype.copy = function (e) {
  tt.prototype.copy.call(this, e);
  this.color.copy(e.color);
  this.map = e.map;
  this.lightMap = e.lightMap;
  this.lightMapIntensity = e.lightMapIntensity;
  this.aoMap = e.aoMap;
  this.aoMapIntensity = e.aoMapIntensity;
  this.specularMap = e.specularMap;
  this.alphaMap = e.alphaMap;
  this.envMap = e.envMap;
  this.combine = e.combine;
  this.reflectivity = e.reflectivity;
  this.refractionRatio = e.refractionRatio;
  this.wireframe = e.wireframe;
  this.wireframeLinewidth = e.wireframeLinewidth;
  this.wireframeLinecap = e.wireframeLinecap;
  this.wireframeLinejoin = e.wireframeLinejoin;
  this.skinning = e.skinning;
  this.morphTargets = e.morphTargets;
  return this;
};
var rt = new C();
var it = new w();
function at(e, t, n) {
  if (Array.isArray(e)) {
    throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
  }
  this.name = "";
  this.array = e;
  this.itemSize = t;
  this.count = void 0 !== e ? e.length / t : 0;
  this.normalized = !0 === n;
  this.usage = 35044;
  this.updateRange = {
    offset: 0,
    count: -1
  };
  this.version = 0;
}
function ot(e, t, n) {
  at.call(this, new Int8Array(e), t, n);
}
function st(e, t, n) {
  at.call(this, new Uint8Array(e), t, n);
}
function lt(e, t, n) {
  at.call(this, new Uint8ClampedArray(e), t, n);
}
function ct(e, t, n) {
  at.call(this, new Int16Array(e), t, n);
}
function ut(e, t, n) {
  at.call(this, new Uint16Array(e), t, n);
}
function ht(e, t, n) {
  at.call(this, new Int32Array(e), t, n);
}
function dt(e, t, n) {
  at.call(this, new Uint32Array(e), t, n);
}
function pt(e, t, n) {
  at.call(this, new Float32Array(e), t, n);
}
function ft(e, t, n) {
  at.call(this, new Float64Array(e), t, n);
}
Object.defineProperty(at.prototype, "needsUpdate", {
  set: function (e) {
    if (!0 === e) {
      this.version++;
    }
  }
});
Object.assign(at.prototype, {
  isBufferAttribute: !0,
  onUploadCallback: function () {},
  setUsage: function (e) {
    this.usage = e;
    return this;
  },
  copy: function (e) {
    this.name = e.name;
    this.array = new e.array.constructor(e.array);
    this.itemSize = e.itemSize;
    this.count = e.count;
    this.normalized = e.normalized;
    this.usage = e.usage;
    return this;
  },
  copyAt: function (e, t, n) {
    e *= this.itemSize;
    n *= t.itemSize;
    for (var r = 0, i = this.itemSize; r < i; r++) {
      this.array[e + r] = t.array[n + r];
    }
    return this;
  },
  copyArray: function (e) {
    this.array.set(e);
    return this;
  },
  copyColorsArray: function (e) {
    for (var t = this.array, n = 0, r = 0, i = e.length; r < i; r++) {
      var a = e[r];
      if (void 0 === a) {
        console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", r);
        a = new Qe();
      }
      t[n++] = a.r;
      t[n++] = a.g;
      t[n++] = a.b;
    }
    return this;
  },
  copyVector2sArray: function (e) {
    for (var t = this.array, n = 0, r = 0, i = e.length; r < i; r++) {
      var a = e[r];
      if (void 0 === a) {
        console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", r);
        a = new w();
      }
      t[n++] = a.x;
      t[n++] = a.y;
    }
    return this;
  },
  copyVector3sArray: function (e) {
    for (var t = this.array, n = 0, r = 0, i = e.length; r < i; r++) {
      var a = e[r];
      if (void 0 === a) {
        console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", r);
        a = new C();
      }
      t[n++] = a.x;
      t[n++] = a.y;
      t[n++] = a.z;
    }
    return this;
  },
  copyVector4sArray: function (e) {
    for (var t = this.array, n = 0, r = 0, i = e.length; r < i; r++) {
      var a = e[r];
      if (void 0 === a) {
        console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", r);
        a = new A();
      }
      t[n++] = a.x;
      t[n++] = a.y;
      t[n++] = a.z;
      t[n++] = a.w;
    }
    return this;
  },
  applyMatrix3: function (e) {
    if (2 === this.itemSize) {
      for (var t = 0, n = this.count; t < n; t++) {
        it.fromBufferAttribute(this, t);
        it.applyMatrix3(e);
        this.setXY(t, it.x, it.y);
      }
    } else if (3 === this.itemSize) {
      for (var r = 0, i = this.count; r < i; r++) {
        rt.fromBufferAttribute(this, r);
        rt.applyMatrix3(e);
        this.setXYZ(r, rt.x, rt.y, rt.z);
      }
    }
    return this;
  },
  applyMatrix4: function (e) {
    for (var t = 0, n = this.count; t < n; t++) {
      rt.x = this.getX(t);
      rt.y = this.getY(t);
      rt.z = this.getZ(t);
      rt.applyMatrix4(e);
      this.setXYZ(t, rt.x, rt.y, rt.z);
    }
    return this;
  },
  applyNormalMatrix: function (e) {
    for (var t = 0, n = this.count; t < n; t++) {
      rt.x = this.getX(t);
      rt.y = this.getY(t);
      rt.z = this.getZ(t);
      rt.applyNormalMatrix(e);
      this.setXYZ(t, rt.x, rt.y, rt.z);
    }
    return this;
  },
  transformDirection: function (e) {
    for (var t = 0, n = this.count; t < n; t++) {
      rt.x = this.getX(t);
      rt.y = this.getY(t);
      rt.z = this.getZ(t);
      rt.transformDirection(e);
      this.setXYZ(t, rt.x, rt.y, rt.z);
    }
    return this;
  },
  set: function (e, t) {
    if (void 0 === t) {
      t = 0;
    }
    this.array.set(e, t);
    return this;
  },
  getX: function (e) {
    return this.array[e * this.itemSize];
  },
  setX: function (e, t) {
    this.array[e * this.itemSize] = t;
    return this;
  },
  getY: function (e) {
    return this.array[e * this.itemSize + 1];
  },
  setY: function (e, t) {
    this.array[e * this.itemSize + 1] = t;
    return this;
  },
  getZ: function (e) {
    return this.array[e * this.itemSize + 2];
  },
  setZ: function (e, t) {
    this.array[e * this.itemSize + 2] = t;
    return this;
  },
  getW: function (e) {
    return this.array[e * this.itemSize + 3];
  },
  setW: function (e, t) {
    this.array[e * this.itemSize + 3] = t;
    return this;
  },
  setXY: function (e, t, n) {
    e *= this.itemSize;
    this.array[e + 0] = t;
    this.array[e + 1] = n;
    return this;
  },
  setXYZ: function (e, t, n, r) {
    e *= this.itemSize;
    this.array[e + 0] = t;
    this.array[e + 1] = n;
    this.array[e + 2] = r;
    return this;
  },
  setXYZW: function (e, t, n, r, i) {
    e *= this.itemSize;
    this.array[e + 0] = t;
    this.array[e + 1] = n;
    this.array[e + 2] = r;
    this.array[e + 3] = i;
    return this;
  },
  onUpload: function (e) {
    this.onUploadCallback = e;
    return this;
  },
  clone: function () {
    return new this.constructor(this.array, this.itemSize).copy(this);
  },
  toJSON: function () {
    return {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.prototype.slice.call(this.array),
      normalized: this.normalized
    };
  }
});
ot.prototype = Object.create(at.prototype);
ot.prototype.constructor = ot;
st.prototype = Object.create(at.prototype);
st.prototype.constructor = st;
lt.prototype = Object.create(at.prototype);
lt.prototype.constructor = lt;
ct.prototype = Object.create(at.prototype);
ct.prototype.constructor = ct;
ut.prototype = Object.create(at.prototype);
ut.prototype.constructor = ut;
ht.prototype = Object.create(at.prototype);
ht.prototype.constructor = ht;
dt.prototype = Object.create(at.prototype);
dt.prototype.constructor = dt;
pt.prototype = Object.create(at.prototype);
pt.prototype.constructor = pt;
ft.prototype = Object.create(at.prototype);
ft.prototype.constructor = ft;
var mt = function () {
  function e() {
    Object(u.a)(this, e);
    this.vertices = [];
    this.normals = [];
    this.colors = [];
    this.uvs = [];
    this.uvs2 = [];
    this.groups = [];
    this.morphTargets = {};
    this.skinWeights = [];
    this.skinIndices = [];
    this.boundingBox = null;
    this.boundingSphere = null;
    this.verticesNeedUpdate = !1;
    this.normalsNeedUpdate = !1;
    this.colorsNeedUpdate = !1;
    this.uvsNeedUpdate = !1;
    this.groupsNeedUpdate = !1;
  }
  Object(h.a)(e, [{
    key: "computeGroups",
    value: function (e) {
      var t;
      var n;
      var r = [];
      var i = void 0;
      var a = e.faces;
      for (n = 0; n < a.length; n++) {
        var o = a[n];
        if (o.materialIndex !== i) {
          i = o.materialIndex;
          if (void 0 !== t) {
            t.count = 3 * n - t.start;
            r.push(t);
          }
          t = {
            start: 3 * n,
            materialIndex: i
          };
        }
      }
      if (void 0 !== t) {
        t.count = 3 * n - t.start;
        r.push(t);
      }
      this.groups = r;
    }
  }, {
    key: "fromGeometry",
    value: function (e) {
      var t;
      var n = e.faces;
      var r = e.vertices;
      var i = e.faceVertexUvs;
      var a = i[0] && i[0].length > 0;
      var o = i[1] && i[1].length > 0;
      var s = e.morphTargets;
      var l = s.length;
      if (l > 0) {
        t = [];
        for (var c = 0; c < l; c++) {
          t[c] = {
            name: s[c].name,
            data: []
          };
        }
        this.morphTargets.position = t;
      }
      var u;
      var h = e.morphNormals;
      var d = h.length;
      if (d > 0) {
        u = [];
        for (var p = 0; p < d; p++) {
          u[p] = {
            name: h[p].name,
            data: []
          };
        }
        this.morphTargets.normal = u;
      }
      var f = e.skinIndices;
      var m = e.skinWeights;
      var v = f.length === r.length;
      var g = m.length === r.length;
      if (r.length > 0 && 0 === n.length) {
        console.error("THREE.DirectGeometry: Faceless geometries are not supported.");
      }
      for (var y = 0; y < n.length; y++) {
        var x = n[y];
        this.vertices.push(r[x.a], r[x.b], r[x.c]);
        var b = x.vertexNormals;
        if (3 === b.length) {
          this.normals.push(b[0], b[1], b[2]);
        } else {
          var _ = x.normal;
          this.normals.push(_, _, _);
        }
        var M = x.vertexColors;
        if (3 === M.length) {
          this.colors.push(M[0], M[1], M[2]);
        } else {
          var S = x.color;
          this.colors.push(S, S, S);
        }
        if (!0 === a) {
          var T = i[0][y];
          if (void 0 !== T) {
            this.uvs.push(T[0], T[1], T[2]);
          } else {
            console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", y);
            this.uvs.push(new w(), new w(), new w());
          }
        }
        if (!0 === o) {
          var E = i[1][y];
          if (void 0 !== E) {
            this.uvs2.push(E[0], E[1], E[2]);
          } else {
            console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", y);
            this.uvs2.push(new w(), new w(), new w());
          }
        }
        for (var A = 0; A < l; A++) {
          var L = s[A].vertices;
          t[A].data.push(L[x.a], L[x.b], L[x.c]);
        }
        for (var R = 0; R < d; R++) {
          var P = h[R].vertexNormals[y];
          u[R].data.push(P.a, P.b, P.c);
        }
        if (v) {
          this.skinIndices.push(f[x.a], f[x.b], f[x.c]);
        }
        if (g) {
          this.skinWeights.push(m[x.a], m[x.b], m[x.c]);
        }
      }
      this.computeGroups(e);
      this.verticesNeedUpdate = e.verticesNeedUpdate;
      this.normalsNeedUpdate = e.normalsNeedUpdate;
      this.colorsNeedUpdate = e.colorsNeedUpdate;
      this.uvsNeedUpdate = e.uvsNeedUpdate;
      this.groupsNeedUpdate = e.groupsNeedUpdate;
      if (null !== e.boundingSphere) {
        this.boundingSphere = e.boundingSphere.clone();
      }
      if (null !== e.boundingBox) {
        this.boundingBox = e.boundingBox.clone();
      }
      return this;
    }
  }]);
  return e;
}();
function vt(e) {
  if (0 === e.length) {
    return -1 / 0;
  }
  for (var t = e[0], n = 1, r = e.length; n < r; ++n) {
    if (e[n] > t) {
      t = e[n];
    }
  }
  return t;
}
var gt = 1;
var yt = new ae();
var xt = new Pe();
var bt = new C();
var _t = new k();
var wt = new k();
var Mt = new C();
function St() {
  Object.defineProperty(this, "id", {
    value: gt += 2
  });
  this.uuid = _.generateUUID();
  this.name = "";
  this.type = "BufferGeometry";
  this.index = null;
  this.attributes = {};
  this.morphAttributes = {};
  this.morphTargetsRelative = !1;
  this.groups = [];
  this.boundingBox = null;
  this.boundingSphere = null;
  this.drawRange = {
    start: 0,
    count: 1 / 0
  };
  this.userData = {};
}
St.prototype = Object.assign(Object.create(v.prototype), {
  constructor: St,
  isBufferGeometry: !0,
  getIndex: function () {
    return this.index;
  },
  setIndex: function (e) {
    if (Array.isArray(e)) {
      this.index = new (vt(e) > 65535 ? dt : ut)(e, 1);
    } else {
      this.index = e;
    }
    return this;
  },
  getAttribute: function (e) {
    return this.attributes[e];
  },
  setAttribute: function (e, t) {
    this.attributes[e] = t;
    return this;
  },
  deleteAttribute: function (e) {
    delete this.attributes[e];
    return this;
  },
  addGroup: function (e, t, n) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: void 0 !== n ? n : 0
    });
  },
  clearGroups: function () {
    this.groups = [];
  },
  setDrawRange: function (e, t) {
    this.drawRange.start = e;
    this.drawRange.count = t;
  },
  applyMatrix4: function (e) {
    var t = this.attributes.position;
    if (void 0 !== t) {
      t.applyMatrix4(e);
      t.needsUpdate = !0;
    }
    var n = this.attributes.normal;
    if (void 0 !== n) {
      var r = new M().getNormalMatrix(e);
      n.applyNormalMatrix(r);
      n.needsUpdate = !0;
    }
    var i = this.attributes.tangent;
    if (void 0 !== i) {
      i.transformDirection(e);
      i.needsUpdate = !0;
    }
    if (null !== this.boundingBox) {
      this.computeBoundingBox();
    }
    if (null !== this.boundingSphere) {
      this.computeBoundingSphere();
    }
    return this;
  },
  rotateX: function (e) {
    yt.makeRotationX(e);
    this.applyMatrix4(yt);
    return this;
  },
  rotateY: function (e) {
    yt.makeRotationY(e);
    this.applyMatrix4(yt);
    return this;
  },
  rotateZ: function (e) {
    yt.makeRotationZ(e);
    this.applyMatrix4(yt);
    return this;
  },
  translate: function (e, t, n) {
    yt.makeTranslation(e, t, n);
    this.applyMatrix4(yt);
    return this;
  },
  scale: function (e, t, n) {
    yt.makeScale(e, t, n);
    this.applyMatrix4(yt);
    return this;
  },
  lookAt: function (e) {
    xt.lookAt(e);
    xt.updateMatrix();
    this.applyMatrix4(xt.matrix);
    return this;
  },
  center: function () {
    this.computeBoundingBox();
    this.boundingBox.getCenter(bt).negate();
    this.translate(bt.x, bt.y, bt.z);
    return this;
  },
  setFromObject: function (e) {
    var t = e.geometry;
    if (e.isPoints || e.isLine) {
      var n = new pt(3 * t.vertices.length, 3);
      var r = new pt(3 * t.colors.length, 3);
      this.setAttribute("position", n.copyVector3sArray(t.vertices));
      this.setAttribute("color", r.copyColorsArray(t.colors));
      if (t.lineDistances && t.lineDistances.length === t.vertices.length) {
        var i = new pt(t.lineDistances.length, 1);
        this.setAttribute("lineDistance", i.copyArray(t.lineDistances));
      }
      if (null !== t.boundingSphere) {
        this.boundingSphere = t.boundingSphere.clone();
      }
      if (null !== t.boundingBox) {
        this.boundingBox = t.boundingBox.clone();
      }
    } else if (e.isMesh && t && t.isGeometry) {
      this.fromGeometry(t);
    }
    return this;
  },
  setFromPoints: function (e) {
    for (var t = [], n = 0, r = e.length; n < r; n++) {
      var i = e[n];
      t.push(i.x, i.y, i.z || 0);
    }
    this.setAttribute("position", new pt(t, 3));
    return this;
  },
  updateFromObject: function (e) {
    var t = e.geometry;
    if (e.isMesh) {
      var n = t.__directGeometry;
      if (!0 === t.elementsNeedUpdate) {
        n = void 0;
        t.elementsNeedUpdate = !1;
      }
      if (void 0 === n) {
        return this.fromGeometry(t);
      }
      n.verticesNeedUpdate = t.verticesNeedUpdate;
      n.normalsNeedUpdate = t.normalsNeedUpdate;
      n.colorsNeedUpdate = t.colorsNeedUpdate;
      n.uvsNeedUpdate = t.uvsNeedUpdate;
      n.groupsNeedUpdate = t.groupsNeedUpdate;
      t.verticesNeedUpdate = !1;
      t.normalsNeedUpdate = !1;
      t.colorsNeedUpdate = !1;
      t.uvsNeedUpdate = !1;
      t.groupsNeedUpdate = !1;
      t = n;
    }
    if (!0 === t.verticesNeedUpdate) {
      var r = this.attributes.position;
      if (void 0 !== r) {
        r.copyVector3sArray(t.vertices);
        r.needsUpdate = !0;
      }
      t.verticesNeedUpdate = !1;
    }
    if (!0 === t.normalsNeedUpdate) {
      var i = this.attributes.normal;
      if (void 0 !== i) {
        i.copyVector3sArray(t.normals);
        i.needsUpdate = !0;
      }
      t.normalsNeedUpdate = !1;
    }
    if (!0 === t.colorsNeedUpdate) {
      var a = this.attributes.color;
      if (void 0 !== a) {
        a.copyColorsArray(t.colors);
        a.needsUpdate = !0;
      }
      t.colorsNeedUpdate = !1;
    }
    if (t.uvsNeedUpdate) {
      var o = this.attributes.uv;
      if (void 0 !== o) {
        o.copyVector2sArray(t.uvs);
        o.needsUpdate = !0;
      }
      t.uvsNeedUpdate = !1;
    }
    if (t.lineDistancesNeedUpdate) {
      var s = this.attributes.lineDistance;
      if (void 0 !== s) {
        s.copyArray(t.lineDistances);
        s.needsUpdate = !0;
      }
      t.lineDistancesNeedUpdate = !1;
    }
    if (t.groupsNeedUpdate) {
      t.computeGroups(e.geometry);
      this.groups = t.groups;
      t.groupsNeedUpdate = !1;
    }
    return this;
  },
  fromGeometry: function (e) {
    e.__directGeometry = new mt().fromGeometry(e);
    return this.fromDirectGeometry(e.__directGeometry);
  },
  fromDirectGeometry: function (e) {
    var t = new Float32Array(3 * e.vertices.length);
    this.setAttribute("position", new at(t, 3).copyVector3sArray(e.vertices));
    if (e.normals.length > 0) {
      var n = new Float32Array(3 * e.normals.length);
      this.setAttribute("normal", new at(n, 3).copyVector3sArray(e.normals));
    }
    if (e.colors.length > 0) {
      var r = new Float32Array(3 * e.colors.length);
      this.setAttribute("color", new at(r, 3).copyColorsArray(e.colors));
    }
    if (e.uvs.length > 0) {
      var i = new Float32Array(2 * e.uvs.length);
      this.setAttribute("uv", new at(i, 2).copyVector2sArray(e.uvs));
    }
    if (e.uvs2.length > 0) {
      var a = new Float32Array(2 * e.uvs2.length);
      this.setAttribute("uv2", new at(a, 2).copyVector2sArray(e.uvs2));
    }
    for (var o in this.groups = e.groups, e.morphTargets) {
      for (var s = [], l = e.morphTargets[o], c = 0, u = l.length; c < u; c++) {
        var h = l[c];
        var d = new pt(3 * h.data.length, 3);
        d.name = h.name;
        s.push(d.copyVector3sArray(h.data));
      }
      this.morphAttributes[o] = s;
    }
    if (e.skinIndices.length > 0) {
      var p = new pt(4 * e.skinIndices.length, 4);
      this.setAttribute("skinIndex", p.copyVector4sArray(e.skinIndices));
    }
    if (e.skinWeights.length > 0) {
      var f = new pt(4 * e.skinWeights.length, 4);
      this.setAttribute("skinWeight", f.copyVector4sArray(e.skinWeights));
    }
    if (null !== e.boundingSphere) {
      this.boundingSphere = e.boundingSphere.clone();
    }
    if (null !== e.boundingBox) {
      this.boundingBox = e.boundingBox.clone();
    }
    return this;
  },
  computeBoundingBox: function () {
    if (null === this.boundingBox) {
      this.boundingBox = new k();
    }
    var e = this.attributes.position;
    var t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set \"mesh.frustumCulled\" to \"false\".", this);
      return void this.boundingBox.set(new C(-1 / 0, -1 / 0, -1 / 0), new C(1 / 0, 1 / 0, 1 / 0));
    }
    if (void 0 !== e) {
      this.boundingBox.setFromBufferAttribute(e);
      if (t) {
        for (var n = 0, r = t.length; n < r; n++) {
          var i = t[n];
          _t.setFromBufferAttribute(i);
          if (this.morphTargetsRelative) {
            Mt.addVectors(this.boundingBox.min, _t.min);
            this.boundingBox.expandByPoint(Mt);
            Mt.addVectors(this.boundingBox.max, _t.max);
            this.boundingBox.expandByPoint(Mt);
          } else {
            this.boundingBox.expandByPoint(_t.min);
            this.boundingBox.expandByPoint(_t.max);
          }
        }
      }
    } else {
      this.boundingBox.makeEmpty();
    }
    if (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The \"position\" attribute is likely to have NaN values.", this);
    }
  },
  computeBoundingSphere: function () {
    if (null === this.boundingSphere) {
      this.boundingSphere = new J();
    }
    var e = this.attributes.position;
    var t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set \"mesh.frustumCulled\" to \"false\".", this);
      return void this.boundingSphere.set(new C(), 1 / 0);
    }
    if (e) {
      var n = this.boundingSphere.center;
      _t.setFromBufferAttribute(e);
      if (t) {
        for (var r = 0, i = t.length; r < i; r++) {
          var a = t[r];
          wt.setFromBufferAttribute(a);
          if (this.morphTargetsRelative) {
            Mt.addVectors(_t.min, wt.min);
            _t.expandByPoint(Mt);
            Mt.addVectors(_t.max, wt.max);
            _t.expandByPoint(Mt);
          } else {
            _t.expandByPoint(wt.min);
            _t.expandByPoint(wt.max);
          }
        }
      }
      _t.getCenter(n);
      for (var o = 0, s = 0, l = e.count; s < l; s++) {
        Mt.fromBufferAttribute(e, s);
        o = Math.max(o, n.distanceToSquared(Mt));
      }
      if (t) {
        for (var c = 0, u = t.length; c < u; c++) {
          for (var h = t[c], d = this.morphTargetsRelative, p = 0, f = h.count; p < f; p++) {
            Mt.fromBufferAttribute(h, p);
            if (d) {
              bt.fromBufferAttribute(e, p);
              Mt.add(bt);
            }
            o = Math.max(o, n.distanceToSquared(Mt));
          }
        }
      }
      this.boundingSphere.radius = Math.sqrt(o);
      if (isNaN(this.boundingSphere.radius)) {
        console.error("THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The \"position\" attribute is likely to have NaN values.", this);
      }
    }
  },
  computeFaceNormals: function () {},
  computeVertexNormals: function () {
    var e = this.index;
    var t = this.getAttribute("position");
    if (void 0 !== t) {
      var n = this.getAttribute("normal");
      if (void 0 === n) {
        n = new at(new Float32Array(3 * t.count), 3);
        this.setAttribute("normal", n);
      } else {
        for (var r = 0, i = n.count; r < i; r++) {
          n.setXYZ(r, 0, 0, 0);
        }
      }
      var a = new C();
      var o = new C();
      var s = new C();
      var l = new C();
      var c = new C();
      var u = new C();
      var h = new C();
      var d = new C();
      if (e) {
        for (var p = 0, f = e.count; p < f; p += 3) {
          var m = e.getX(p + 0);
          var v = e.getX(p + 1);
          var g = e.getX(p + 2);
          a.fromBufferAttribute(t, m);
          o.fromBufferAttribute(t, v);
          s.fromBufferAttribute(t, g);
          h.subVectors(s, o);
          d.subVectors(a, o);
          h.cross(d);
          l.fromBufferAttribute(n, m);
          c.fromBufferAttribute(n, v);
          u.fromBufferAttribute(n, g);
          l.add(h);
          c.add(h);
          u.add(h);
          n.setXYZ(m, l.x, l.y, l.z);
          n.setXYZ(v, c.x, c.y, c.z);
          n.setXYZ(g, u.x, u.y, u.z);
        }
      } else {
        for (var y = 0, x = t.count; y < x; y += 3) {
          a.fromBufferAttribute(t, y + 0);
          o.fromBufferAttribute(t, y + 1);
          s.fromBufferAttribute(t, y + 2);
          h.subVectors(s, o);
          d.subVectors(a, o);
          h.cross(d);
          n.setXYZ(y + 0, h.x, h.y, h.z);
          n.setXYZ(y + 1, h.x, h.y, h.z);
          n.setXYZ(y + 2, h.x, h.y, h.z);
        }
      }
      this.normalizeNormals();
      n.needsUpdate = !0;
    }
  },
  merge: function (e, t) {
    if (e && e.isBufferGeometry) {
      if (void 0 === t) {
        t = 0;
        console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge.");
      }
      var n = this.attributes;
      for (var r in n) if (void 0 !== e.attributes[r]) {
        for (var i = n[r].array, a = e.attributes[r], o = a.array, s = a.itemSize * t, l = Math.min(o.length, i.length - s), c = 0, u = s; c < l; c++, u++) {
          i[u] = o[c];
        }
      }
      return this;
    }
    console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", e);
  },
  normalizeNormals: function () {
    for (var e = this.attributes.normal, t = 0, n = e.count; t < n; t++) {
      Mt.fromBufferAttribute(e, t);
      Mt.normalize();
      e.setXYZ(t, Mt.x, Mt.y, Mt.z);
    }
  },
  toNonIndexed: function () {
    function e(e, t) {
      for (var n = e.array, r = e.itemSize, i = e.normalized, a = new n.constructor(t.length * r), o = 0, s = 0, l = 0, c = t.length; l < c; l++) {
        o = t[l] * r;
        for (var u = 0; u < r; u++) {
          a[s++] = n[o++];
        }
      }
      return new at(a, r, i);
    }
    if (null === this.index) {
      console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed.");
      return this;
    }
    var t = new St();
    var n = this.index.array;
    var r = this.attributes;
    for (var i in r) {
      var a = e(r[i], n);
      t.setAttribute(i, a);
    }
    var o = this.morphAttributes;
    for (var s in o) {
      for (var l = [], c = o[s], u = 0, h = c.length; u < h; u++) {
        var d = e(c[u], n);
        l.push(d);
      }
      t.morphAttributes[s] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    for (var p = this.groups, f = 0, m = p.length; f < m; f++) {
      var v = p[f];
      t.addGroup(v.start, v.count, v.materialIndex);
    }
    return t;
  },
  toJSON: function () {
    var e = {
      metadata: {
        version: 4.5,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    e.uuid = this.uuid;
    e.type = this.type;
    if ("" !== this.name) {
      e.name = this.name;
    }
    if (Object.keys(this.userData).length > 0) {
      e.userData = this.userData;
    }
    if (void 0 !== this.parameters) {
      var t = this.parameters;
      for (var n in t) if (void 0 !== t[n]) {
        e[n] = t[n];
      }
      return e;
    }
    e.data = {
      attributes: {}
    };
    var r = this.index;
    if (null !== r) {
      e.data.index = {
        type: r.array.constructor.name,
        array: Array.prototype.slice.call(r.array)
      };
    }
    var i = this.attributes;
    for (var a in i) {
      var o = i[a];
      var s = o.toJSON(e.data);
      if ("" !== o.name) {
        s.name = o.name;
      }
      e.data.attributes[a] = s;
    }
    var l = {};
    var c = !1;
    for (var u in this.morphAttributes) {
      for (var h = this.morphAttributes[u], d = [], p = 0, f = h.length; p < f; p++) {
        var m = h[p];
        var v = m.toJSON(e.data);
        if ("" !== m.name) {
          v.name = m.name;
        }
        d.push(v);
      }
      if (d.length > 0) {
        l[u] = d;
        c = !0;
      }
    }
    if (c) {
      e.data.morphAttributes = l;
      e.data.morphTargetsRelative = this.morphTargetsRelative;
    }
    var g = this.groups;
    if (g.length > 0) {
      e.data.groups = JSON.parse(JSON.stringify(g));
    }
    var y = this.boundingSphere;
    if (null !== y) {
      e.data.boundingSphere = {
        center: y.center.toArray(),
        radius: y.radius
      };
    }
    return e;
  },
  clone: function () {
    return new St().copy(this);
  },
  copy: function (e) {
    this.index = null;
    this.attributes = {};
    this.morphAttributes = {};
    this.groups = [];
    this.boundingBox = null;
    this.boundingSphere = null;
    var t = {};
    this.name = e.name;
    var n = e.index;
    if (null !== n) {
      this.setIndex(n.clone(t));
    }
    var r = e.attributes;
    for (var i in r) {
      var a = r[i];
      this.setAttribute(i, a.clone(t));
    }
    var o = e.morphAttributes;
    for (var s in o) {
      for (var l = [], c = o[s], u = 0, h = c.length; u < h; u++) {
        l.push(c[u].clone(t));
      }
      this.morphAttributes[s] = l;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    for (var d = e.groups, p = 0, f = d.length; p < f; p++) {
      var m = d[p];
      this.addGroup(m.start, m.count, m.materialIndex);
    }
    var v = e.boundingBox;
    if (null !== v) {
      this.boundingBox = v.clone();
    }
    var g = e.boundingSphere;
    if (null !== g) {
      this.boundingSphere = g.clone();
    }
    this.drawRange.start = e.drawRange.start;
    this.drawRange.count = e.drawRange.count;
    this.userData = e.userData;
    return this;
  },
  dispose: function () {
    this.dispatchEvent({
      type: "dispose"
    });
  }
});
var Tt = new ae();
var Et = new ie();
var At = new J();
var Lt = new C();
var Rt = new C();
var Pt = new C();
var Ct = new C();
var It = new C();
var Ot = new C();
var kt = new C();
var Nt = new C();
var Dt = new C();
var Ut = new w();
var Bt = new w();
var zt = new w();
var Ft = new C();
var Ht = new C();
function Gt(e, t) {
  Pe.call(this);
  this.type = "Mesh";
  this.geometry = void 0 !== e ? e : new St();
  this.material = void 0 !== t ? t : new nt();
  this.updateMorphTargets();
}
function jt(e, t, n, r, i, a, o, s) {
  if (null === (1 === t.side ? r.intersectTriangle(o, a, i, !0, s) : r.intersectTriangle(i, a, o, 2 !== t.side, s))) {
    return null;
  }
  Ht.copy(s);
  Ht.applyMatrix4(e.matrixWorld);
  var l = n.ray.origin.distanceTo(Ht);
  return l < n.near || l > n.far ? null : {
    distance: l,
    point: Ht.clone(),
    object: e
  };
}
function Vt(e, t, n, r, i, a, o, s, l, c, u, h) {
  Lt.fromBufferAttribute(i, c);
  Rt.fromBufferAttribute(i, u);
  Pt.fromBufferAttribute(i, h);
  var d = e.morphTargetInfluences;
  if (t.morphTargets && a && d) {
    kt.set(0, 0, 0);
    Nt.set(0, 0, 0);
    Dt.set(0, 0, 0);
    for (var p = 0, f = a.length; p < f; p++) {
      var m = d[p];
      var v = a[p];
      if (0 !== m) {
        Ct.fromBufferAttribute(v, c);
        It.fromBufferAttribute(v, u);
        Ot.fromBufferAttribute(v, h);
        if (o) {
          kt.addScaledVector(Ct, m);
          Nt.addScaledVector(It, m);
          Dt.addScaledVector(Ot, m);
        } else {
          kt.addScaledVector(Ct.sub(Lt), m);
          Nt.addScaledVector(It.sub(Rt), m);
          Dt.addScaledVector(Ot.sub(Pt), m);
        }
      }
    }
    Lt.add(kt);
    Rt.add(Nt);
    Pt.add(Dt);
  }
  if (e.isSkinnedMesh) {
    e.boneTransform(c, Lt);
    e.boneTransform(u, Rt);
    e.boneTransform(h, Pt);
  }
  var g = jt(e, t, n, r, Lt, Rt, Pt, Ft);
  if (g) {
    if (s) {
      Ut.fromBufferAttribute(s, c);
      Bt.fromBufferAttribute(s, u);
      zt.fromBufferAttribute(s, h);
      g.uv = We.getUV(Ft, Lt, Rt, Pt, Ut, Bt, zt, new w());
    }
    if (l) {
      Ut.fromBufferAttribute(l, c);
      Bt.fromBufferAttribute(l, u);
      zt.fromBufferAttribute(l, h);
      g.uv2 = We.getUV(Ft, Lt, Rt, Pt, Ut, Bt, zt, new w());
    }
    var y = new $e(c, u, h);
    We.getNormal(Lt, Rt, Pt, y.normal);
    g.face = y;
  }
  return g;
}
Gt.prototype = Object.assign(Object.create(Pe.prototype), {
  constructor: Gt,
  isMesh: !0,
  copy: function (e) {
    Pe.prototype.copy.call(this, e);
    if (void 0 !== e.morphTargetInfluences) {
      this.morphTargetInfluences = e.morphTargetInfluences.slice();
    }
    if (void 0 !== e.morphTargetDictionary) {
      this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary);
    }
    this.material = e.material;
    this.geometry = e.geometry;
    return this;
  },
  updateMorphTargets: function () {
    var e = this.geometry;
    if (e.isBufferGeometry) {
      var t = e.morphAttributes;
      var n = Object.keys(t);
      if (n.length > 0) {
        var r = t[n[0]];
        if (void 0 !== r) {
          this.morphTargetInfluences = [];
          this.morphTargetDictionary = {};
          for (var i = 0, a = r.length; i < a; i++) {
            var o = r[i].name || String(i);
            this.morphTargetInfluences.push(0);
            this.morphTargetDictionary[o] = i;
          }
        }
      }
    } else {
      var s = e.morphTargets;
      if (void 0 !== s && s.length > 0) {
        console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
      }
    }
  },
  raycast: function (e, t) {
    var n;
    var r = this.geometry;
    var i = this.material;
    var a = this.matrixWorld;
    if (void 0 !== i && (null === r.boundingSphere && r.computeBoundingSphere(), At.copy(r.boundingSphere), At.applyMatrix4(a), !1 !== e.ray.intersectsSphere(At) && (Tt.getInverse(a), Et.copy(e.ray).applyMatrix4(Tt), null === r.boundingBox || !1 !== Et.intersectsBox(r.boundingBox)))) {
      if (r.isBufferGeometry) {
        var o = r.index;
        var s = r.attributes.position;
        var l = r.morphAttributes.position;
        var c = r.morphTargetsRelative;
        var u = r.attributes.uv;
        var h = r.attributes.uv2;
        var d = r.groups;
        var p = r.drawRange;
        if (null !== o) {
          if (Array.isArray(i)) {
            for (var f = 0, m = d.length; f < m; f++) {
              for (var v = d[f], g = i[v.materialIndex], y = Math.max(v.start, p.start), x = Math.min(v.start + v.count, p.start + p.count); y < x; y += 3) {
                var b = o.getX(y);
                var _ = o.getX(y + 1);
                var M = o.getX(y + 2);
                if (n = Vt(this, g, e, Et, s, l, c, u, h, b, _, M)) {
                  n.faceIndex = Math.floor(y / 3);
                  n.face.materialIndex = v.materialIndex;
                  t.push(n);
                }
              }
            }
          } else {
            for (var S = Math.max(0, p.start), T = Math.min(o.count, p.start + p.count); S < T; S += 3) {
              var E = o.getX(S);
              var A = o.getX(S + 1);
              var L = o.getX(S + 2);
              if (n = Vt(this, i, e, Et, s, l, c, u, h, E, A, L)) {
                n.faceIndex = Math.floor(S / 3);
                t.push(n);
              }
            }
          }
        } else if (void 0 !== s) {
          if (Array.isArray(i)) {
            for (var R = 0, P = d.length; R < P; R++) {
              for (var C = d[R], I = i[C.materialIndex], O = Math.max(C.start, p.start), k = Math.min(C.start + C.count, p.start + p.count); O < k; O += 3) {
                if (n = Vt(this, I, e, Et, s, l, c, u, h, O, O + 1, O + 2)) {
                  n.faceIndex = Math.floor(O / 3);
                  n.face.materialIndex = C.materialIndex;
                  t.push(n);
                }
              }
            }
          } else {
            for (var N = Math.max(0, p.start), D = Math.min(s.count, p.start + p.count); N < D; N += 3) {
              if (n = Vt(this, i, e, Et, s, l, c, u, h, N, N + 1, N + 2)) {
                n.faceIndex = Math.floor(N / 3);
                t.push(n);
              }
            }
          }
        }
      } else if (r.isGeometry) {
        var U;
        var B = Array.isArray(i);
        var z = r.vertices;
        var F = r.faces;
        var H = r.faceVertexUvs[0];
        if (H.length > 0) {
          U = H;
        }
        for (var G = 0, j = F.length; G < j; G++) {
          var V = F[G];
          var W = B ? i[V.materialIndex] : i;
          if (void 0 !== W) {
            var q = z[V.a];
            var X = z[V.b];
            var Y = z[V.c];
            if (n = jt(this, W, e, Et, q, X, Y, Ft)) {
              if (U && U[G]) {
                var Z = U[G];
                Ut.copy(Z[0]);
                Bt.copy(Z[1]);
                zt.copy(Z[2]);
                n.uv = We.getUV(Ft, q, X, Y, Ut, Bt, zt, new w());
              }
              n.face = V;
              n.faceIndex = G;
              t.push(n);
            }
          }
        }
      }
    }
  }
});
var Wt = function (e) {
  Object(l.a)(n, e);
  var t = Object(c.a)(n);
  function n() {
    var e;
    var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
    var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
    var l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
    var c = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
    Object(u.a)(this, n);
    (e = t.call(this)).type = "BoxBufferGeometry";
    e.parameters = {
      width: r,
      height: i,
      depth: a,
      widthSegments: o,
      heightSegments: l,
      depthSegments: c
    };
    var h = Object(s.a)(e);
    o = Math.floor(o);
    l = Math.floor(l);
    c = Math.floor(c);
    var d = [];
    var p = [];
    var f = [];
    var m = [];
    var v = 0;
    var g = 0;
    function y(e, t, n, r, i, a, o, s, l, c, u) {
      for (var y = a / l, x = o / c, b = a / 2, _ = o / 2, w = s / 2, M = l + 1, S = c + 1, T = 0, E = 0, A = new C(), L = 0; L < S; L++) {
        for (var R = L * x - _, P = 0; P < M; P++) {
          var I = P * y - b;
          A[e] = I * r;
          A[t] = R * i;
          A[n] = w;
          p.push(A.x, A.y, A.z);
          A[e] = 0;
          A[t] = 0;
          A[n] = s > 0 ? 1 : -1;
          f.push(A.x, A.y, A.z);
          m.push(P / l);
          m.push(1 - L / c);
          T += 1;
        }
      }
      for (var O = 0; O < c; O++) {
        for (var k = 0; k < l; k++) {
          var N = v + k + M * O;
          var D = v + k + M * (O + 1);
          var U = v + (k + 1) + M * (O + 1);
          var B = v + (k + 1) + M * O;
          d.push(N, D, B);
          d.push(D, U, B);
          E += 6;
        }
      }
      h.addGroup(g, E, u);
      g += E;
      v += T;
    }
    y("z", "y", "x", -1, -1, a, i, r, c, l, 0);
    y("z", "y", "x", 1, -1, a, i, -r, c, l, 1);
    y("x", "z", "y", 1, 1, r, a, i, o, c, 2);
    y("x", "z", "y", 1, -1, r, a, -i, o, c, 3);
    y("x", "y", "z", 1, -1, r, i, a, o, l, 4);
    y("x", "y", "z", -1, -1, r, i, -a, o, l, 5);
    e.setIndex(d);
    e.setAttribute("position", new pt(p, 3));
    e.setAttribute("normal", new pt(f, 3));
    e.setAttribute("uv", new pt(m, 2));
    return e;
  }
  return n;
}(St);
function qt(e) {
  var t = {};
  for (var n in e) for (var r in t[n] = {}, e[n]) {
    var i = e[n][r];
    if (i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture)) {
      t[n][r] = i.clone();
    } else {
      if (Array.isArray(i)) {
        t[n][r] = i.slice();
      } else {
        t[n][r] = i;
      }
    }
  }
  return t;
}
function Xt(e) {
  for (var t = {}, n = 0; n < e.length; n++) {
    var r = qt(e[n]);
    for (var i in r) t[i] = r[i];
  }
  return t;
}
var Yt = {
  clone: qt,
  merge: Xt
};
function Zt(e) {
  tt.call(this);
  this.type = "ShaderMaterial";
  this.defines = {};
  this.uniforms = {};
  this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";
  this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";
  this.linewidth = 1;
  this.wireframe = !1;
  this.wireframeLinewidth = 1;
  this.fog = !1;
  this.lights = !1;
  this.clipping = !1;
  this.skinning = !1;
  this.morphTargets = !1;
  this.morphNormals = !1;
  this.extensions = {
    derivatives: !1,
    fragDepth: !1,
    drawBuffers: !1,
    shaderTextureLOD: !1
  };
  this.defaultAttributeValues = {
    color: [1, 1, 1],
    uv: [0, 0],
    uv2: [0, 0]
  };
  this.index0AttributeName = void 0;
  this.uniformsNeedUpdate = !1;
  this.glslVersion = null;
  if (void 0 !== e) {
    if (void 0 !== e.attributes) {
      console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead.");
    }
    this.setValues(e);
  }
}
function Jt() {
  Pe.call(this);
  this.type = "Camera";
  this.matrixWorldInverse = new ae();
  this.projectionMatrix = new ae();
  this.projectionMatrixInverse = new ae();
}
function Kt(e, t, n, r) {
  Jt.call(this);
  this.type = "PerspectiveCamera";
  this.fov = void 0 !== e ? e : 50;
  this.zoom = 1;
  this.near = void 0 !== n ? n : .1;
  this.far = void 0 !== r ? r : 2e3;
  this.focus = 10;
  this.aspect = void 0 !== t ? t : 1;
  this.view = null;
  this.filmGauge = 35;
  this.filmOffset = 0;
  this.updateProjectionMatrix();
}
Zt.prototype = Object.create(tt.prototype);
Zt.prototype.constructor = Zt;
Zt.prototype.isShaderMaterial = !0;
Zt.prototype.copy = function (e) {
  tt.prototype.copy.call(this, e);
  this.fragmentShader = e.fragmentShader;
  this.vertexShader = e.vertexShader;
  this.uniforms = qt(e.uniforms);
  this.defines = Object.assign({}, e.defines);
  this.wireframe = e.wireframe;
  this.wireframeLinewidth = e.wireframeLinewidth;
  this.lights = e.lights;
  this.clipping = e.clipping;
  this.skinning = e.skinning;
  this.morphTargets = e.morphTargets;
  this.morphNormals = e.morphNormals;
  this.extensions = Object.assign({}, e.extensions);
  this.glslVersion = e.glslVersion;
  return this;
};
Zt.prototype.toJSON = function (e) {
  var t = tt.prototype.toJSON.call(this, e);
  for (var n in t.glslVersion = this.glslVersion, t.uniforms = {}, this.uniforms) {
    var r = this.uniforms[n].value;
    if (r && r.isTexture) {
      t.uniforms[n] = {
        type: "t",
        value: r.toJSON(e).uuid
      };
    } else {
      if (r && r.isColor) {
        t.uniforms[n] = {
          type: "c",
          value: r.getHex()
        };
      } else {
        if (r && r.isVector2) {
          t.uniforms[n] = {
            type: "v2",
            value: r.toArray()
          };
        } else {
          if (r && r.isVector3) {
            t.uniforms[n] = {
              type: "v3",
              value: r.toArray()
            };
          } else {
            if (r && r.isVector4) {
              t.uniforms[n] = {
                type: "v4",
                value: r.toArray()
              };
            } else {
              if (r && r.isMatrix3) {
                t.uniforms[n] = {
                  type: "m3",
                  value: r.toArray()
                };
              } else {
                if (r && r.isMatrix4) {
                  t.uniforms[n] = {
                    type: "m4",
                    value: r.toArray()
                  };
                } else {
                  t.uniforms[n] = {
                    value: r
                  };
                }
              }
            }
          }
        }
      }
    }
  }
  if (Object.keys(this.defines).length > 0) {
    t.defines = this.defines;
  }
  t.vertexShader = this.vertexShader;
  t.fragmentShader = this.fragmentShader;
  var i = {};
  for (var a in this.extensions) if (!0 === this.extensions[a]) {
    i[a] = !0;
  }
  if (Object.keys(i).length > 0) {
    t.extensions = i;
  }
  return t;
};
Jt.prototype = Object.assign(Object.create(Pe.prototype), {
  constructor: Jt,
  isCamera: !0,
  copy: function (e, t) {
    Pe.prototype.copy.call(this, e, t);
    this.matrixWorldInverse.copy(e.matrixWorldInverse);
    this.projectionMatrix.copy(e.projectionMatrix);
    this.projectionMatrixInverse.copy(e.projectionMatrixInverse);
    return this;
  },
  getWorldDirection: function (e) {
    if (void 0 === e) {
      console.warn("THREE.Camera: .getWorldDirection() target is now required");
      e = new C();
    }
    this.updateWorldMatrix(!0, !1);
    var t = this.matrixWorld.elements;
    return e.set(-t[8], -t[9], -t[10]).normalize();
  },
  updateMatrixWorld: function (e) {
    Pe.prototype.updateMatrixWorld.call(this, e);
    this.matrixWorldInverse.getInverse(this.matrixWorld);
  },
  updateWorldMatrix: function (e, t) {
    Pe.prototype.updateWorldMatrix.call(this, e, t);
    this.matrixWorldInverse.getInverse(this.matrixWorld);
  },
  clone: function () {
    return new this.constructor().copy(this);
  }
});
Kt.prototype = Object.assign(Object.create(Jt.prototype), {
  constructor: Kt,
  isPerspectiveCamera: !0,
  copy: function (e, t) {
    Jt.prototype.copy.call(this, e, t);
    this.fov = e.fov;
    this.zoom = e.zoom;
    this.near = e.near;
    this.far = e.far;
    this.focus = e.focus;
    this.aspect = e.aspect;
    this.view = null === e.view ? null : Object.assign({}, e.view);
    this.filmGauge = e.filmGauge;
    this.filmOffset = e.filmOffset;
    return this;
  },
  setFocalLength: function (e) {
    var t = .5 * this.getFilmHeight() / e;
    this.fov = 2 * _.RAD2DEG * Math.atan(t);
    this.updateProjectionMatrix();
  },
  getFocalLength: function () {
    var e = Math.tan(.5 * _.DEG2RAD * this.fov);
    return .5 * this.getFilmHeight() / e;
  },
  getEffectiveFOV: function () {
    return 2 * _.RAD2DEG * Math.atan(Math.tan(.5 * _.DEG2RAD * this.fov) / this.zoom);
  },
  getFilmWidth: function () {
    return this.filmGauge * Math.min(this.aspect, 1);
  },
  getFilmHeight: function () {
    return this.filmGauge / Math.max(this.aspect, 1);
  },
  setViewOffset: function (e, t, n, r, i, a) {
    this.aspect = e / t;
    if (null === this.view) {
      this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1
      };
    }
    this.view.enabled = !0;
    this.view.fullWidth = e;
    this.view.fullHeight = t;
    this.view.offsetX = n;
    this.view.offsetY = r;
    this.view.width = i;
    this.view.height = a;
    this.updateProjectionMatrix();
  },
  clearViewOffset: function () {
    if (null !== this.view) {
      this.view.enabled = !1;
    }
    this.updateProjectionMatrix();
  },
  updateProjectionMatrix: function () {
    var e = this.near;
    var t = e * Math.tan(.5 * _.DEG2RAD * this.fov) / this.zoom;
    var n = 2 * t;
    var r = this.aspect * n;
    var i = -.5 * r;
    var a = this.view;
    if (null !== this.view && this.view.enabled) {
      var o = a.fullWidth;
      var s = a.fullHeight;
      i += a.offsetX * r / o;
      t -= a.offsetY * n / s;
      r *= a.width / o;
      n *= a.height / s;
    }
    var l = this.filmOffset;
    if (0 !== l) {
      i += e * l / this.getFilmWidth();
    }
    this.projectionMatrix.makePerspective(i, i + r, t, t - n, e, this.far);
    this.projectionMatrixInverse.getInverse(this.projectionMatrix);
  },
  toJSON: function (e) {
    var t = Pe.prototype.toJSON.call(this, e);
    t.object.fov = this.fov;
    t.object.zoom = this.zoom;
    t.object.near = this.near;
    t.object.far = this.far;
    t.object.focus = this.focus;
    t.object.aspect = this.aspect;
    if (null !== this.view) {
      t.object.view = Object.assign({}, this.view);
    }
    t.object.filmGauge = this.filmGauge;
    t.object.filmOffset = this.filmOffset;
    return t;
  }
});
function Qt(e, t, n) {
  Pe.call(this);
  this.type = "CubeCamera";
  if (!0 === n.isWebGLCubeRenderTarget) {
    this.renderTarget = n;
    var r = new Kt(90, 1, e, t);
    r.layers = this.layers;
    r.up.set(0, -1, 0);
    r.lookAt(new C(1, 0, 0));
    this.add(r);
    var i = new Kt(90, 1, e, t);
    i.layers = this.layers;
    i.up.set(0, -1, 0);
    i.lookAt(new C(-1, 0, 0));
    this.add(i);
    var a = new Kt(90, 1, e, t);
    a.layers = this.layers;
    a.up.set(0, 0, 1);
    a.lookAt(new C(0, 1, 0));
    this.add(a);
    var o = new Kt(90, 1, e, t);
    o.layers = this.layers;
    o.up.set(0, 0, -1);
    o.lookAt(new C(0, -1, 0));
    this.add(o);
    var s = new Kt(90, 1, e, t);
    s.layers = this.layers;
    s.up.set(0, -1, 0);
    s.lookAt(new C(0, 0, 1));
    this.add(s);
    var l = new Kt(90, 1, e, t);
    l.layers = this.layers;
    l.up.set(0, -1, 0);
    l.lookAt(new C(0, 0, -1));
    this.add(l);
    this.update = function (e, t) {
      if (null === this.parent) {
        this.updateMatrixWorld();
      }
      var c = e.xr.enabled;
      var u = e.getRenderTarget();
      e.xr.enabled = !1;
      var h = n.texture.generateMipmaps;
      n.texture.generateMipmaps = !1;
      e.setRenderTarget(n, 0);
      e.render(t, r);
      e.setRenderTarget(n, 1);
      e.render(t, i);
      e.setRenderTarget(n, 2);
      e.render(t, a);
      e.setRenderTarget(n, 3);
      e.render(t, o);
      e.setRenderTarget(n, 4);
      e.render(t, s);
      n.texture.generateMipmaps = h;
      e.setRenderTarget(n, 5);
      e.render(t, l);
      e.setRenderTarget(u);
      e.xr.enabled = c;
    };
  } else {
    console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");
  }
}
function $t(e, t, n, r, i, a, o, s, l, c) {
  e = void 0 !== e ? e : [];
  t = void 0 !== t ? t : 301;
  o = void 0 !== o ? o : 1022;
  E.call(this, e, t, n, r, i, a, o, s, l, c);
  this.flipY = !1;
  this._needsFlipEnvMap = !0;
}
function en(e, t, n) {
  if (Number.isInteger(t)) {
    console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )");
    t = n;
  }
  L.call(this, e, e, t);
  t = t || {};
  this.texture = new $t(void 0, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.encoding);
  this.texture._needsFlipEnvMap = !1;
}
function tn(e, t, n, r, i, a, o, s, l, c, u, h) {
  E.call(this, null, a, o, s, l, c, r, i, u, h);
  this.image = {
    data: e || null,
    width: t || 1,
    height: n || 1
  };
  this.magFilter = void 0 !== l ? l : 1003;
  this.minFilter = void 0 !== c ? c : 1003;
  this.generateMipmaps = !1;
  this.flipY = !1;
  this.unpackAlignment = 1;
  this.needsUpdate = !0;
}
Qt.prototype = Object.create(Pe.prototype);
Qt.prototype.constructor = Qt;
$t.prototype = Object.create(E.prototype);
$t.prototype.constructor = $t;
$t.prototype.isCubeTexture = !0;
Object.defineProperty($t.prototype, "images", {
  get: function () {
    return this.image;
  },
  set: function (e) {
    this.image = e;
  }
});
en.prototype = Object.create(L.prototype);
en.prototype.constructor = en;
en.prototype.isWebGLCubeRenderTarget = !0;
en.prototype.fromEquirectangularTexture = function (e, t) {
  this.texture.type = t.type;
  this.texture.format = 1023;
  this.texture.encoding = t.encoding;
  this.texture.generateMipmaps = t.generateMipmaps;
  this.texture.minFilter = t.minFilter;
  this.texture.magFilter = t.magFilter;
  var n = {
    tEquirect: {
      value: null
    }
  };
  var r = "\n\n\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t#include <begin_vertex>\n\t\t\t\t#include <project_vertex>\n\n\t\t\t}\n\t\t";
  var i = "\n\n\t\t\tuniform sampler2D tEquirect;\n\n\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t}\n\t\t";
  var a = new Wt(5, 5, 5);
  var o = new Zt({
    name: "CubemapFromEquirect",
    uniforms: qt(n),
    vertexShader: r,
    fragmentShader: i,
    side: 1,
    blending: 0
  });
  o.uniforms.tEquirect.value = t;
  var s = new Gt(a, o);
  var l = t.minFilter;
  if (1008 === t.minFilter) {
    t.minFilter = 1006;
  }
  new Qt(1, 10, this).update(e, s);
  t.minFilter = l;
  s.geometry.dispose();
  s.material.dispose();
  return this;
};
en.prototype.clear = function (e, t, n, r) {
  for (var i = e.getRenderTarget(), a = 0; a < 6; a++) {
    e.setRenderTarget(this, a);
    e.clear(t, n, r);
  }
  e.setRenderTarget(i);
};
tn.prototype = Object.create(E.prototype);
tn.prototype.constructor = tn;
tn.prototype.isDataTexture = !0;
var nn = new J();
var rn = new C();
var an = function () {
  function e(t, n, r, i, a, o) {
    Object(u.a)(this, e);
    this.planes = [void 0 !== t ? t : new ke(), void 0 !== n ? n : new ke(), void 0 !== r ? r : new ke(), void 0 !== i ? i : new ke(), void 0 !== a ? a : new ke(), void 0 !== o ? o : new ke()];
  }
  Object(h.a)(e, [{
    key: "set",
    value: function (e, t, n, r, i, a) {
      var o = this.planes;
      o[0].copy(e);
      o[1].copy(t);
      o[2].copy(n);
      o[3].copy(r);
      o[4].copy(i);
      o[5].copy(a);
      return this;
    }
  }, {
    key: "clone",
    value: function () {
      return new this.constructor().copy(this);
    }
  }, {
    key: "copy",
    value: function (e) {
      for (var t = this.planes, n = 0; n < 6; n++) {
        t[n].copy(e.planes[n]);
      }
      return this;
    }
  }, {
    key: "setFromProjectionMatrix",
    value: function (e) {
      var t = this.planes;
      var n = e.elements;
      var r = n[0];
      var i = n[1];
      var a = n[2];
      var o = n[3];
      var s = n[4];
      var l = n[5];
      var c = n[6];
      var u = n[7];
      var h = n[8];
      var d = n[9];
      var p = n[10];
      var f = n[11];
      var m = n[12];
      var v = n[13];
      var g = n[14];
      var y = n[15];
      t[0].setComponents(o - r, u - s, f - h, y - m).normalize();
      t[1].setComponents(o + r, u + s, f + h, y + m).normalize();
      t[2].setComponents(o + i, u + l, f + d, y + v).normalize();
      t[3].setComponents(o - i, u - l, f - d, y - v).normalize();
      t[4].setComponents(o - a, u - c, f - p, y - g).normalize();
      t[5].setComponents(o + a, u + c, f + p, y + g).normalize();
      return this;
    }
  }, {
    key: "intersectsObject",
    value: function (e) {
      var t = e.geometry;
      if (null === t.boundingSphere) {
        t.computeBoundingSphere();
      }
      nn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
      return this.intersectsSphere(nn);
    }
  }, {
    key: "intersectsSprite",
    value: function (e) {
      nn.center.set(0, 0, 0);
      nn.radius = .7071067811865476;
      nn.applyMatrix4(e.matrixWorld);
      return this.intersectsSphere(nn);
    }
  }, {
    key: "intersectsSphere",
    value: function (e) {
      for (var t = this.planes, n = e.center, r = -e.radius, i = 0; i < 6; i++) {
        if (t[i].distanceToPoint(n) < r) {
          return !1;
        }
      }
      return !0;
    }
  }, {
    key: "intersectsBox",
    value: function (e) {
      for (var t = this.planes, n = 0; n < 6; n++) {
        var r = t[n];
        rn.x = r.normal.x > 0 ? e.max.x : e.min.x;
        rn.y = r.normal.y > 0 ? e.max.y : e.min.y;
        rn.z = r.normal.z > 0 ? e.max.z : e.min.z;
        if (r.distanceToPoint(rn) < 0) {
          return !1;
        }
      }
      return !0;
    }
  }, {
    key: "containsPoint",
    value: function (e) {
      for (var t = this.planes, n = 0; n < 6; n++) {
        if (t[n].distanceToPoint(e) < 0) {
          return !1;
        }
      }
      return !0;
    }
  }]);
  return e;
}();
function on() {
  var e = null;
  var t = !1;
  var n = null;
  var r = null;
  function i(t, a) {
    n(t, a);
    r = e.requestAnimationFrame(i);
  }
  return {
    start: function () {
      if (!0 !== t && null !== n) {
        r = e.requestAnimationFrame(i);
        t = !0;
      }
    },
    stop: function () {
      e.cancelAnimationFrame(r);
      t = !1;
    },
    setAnimationLoop: function (e) {
      n = e;
    },
    setContext: function (t) {
      e = t;
    }
  };
}
function sn(e, t) {
  var n = t.isWebGL2;
  var r = new WeakMap();
  return {
    get: function (e) {
      if (e.isInterleavedBufferAttribute) {
        e = e.data;
      }
      return r.get(e);
    },
    remove: function (t) {
      if (t.isInterleavedBufferAttribute) {
        t = t.data;
      }
      var n = r.get(t);
      if (n) {
        e.deleteBuffer(n.buffer);
        r.delete(t);
      }
    },
    update: function (t, i) {
      if (t.isGLBufferAttribute) {
        var a = r.get(t);
        if (!a || a.version < t.version) {
          r.set(t, {
            buffer: t.buffer,
            type: t.type,
            bytesPerElement: t.elementSize,
            version: t.version
          });
        }
      } else {
        if (t.isInterleavedBufferAttribute) {
          t = t.data;
        }
        var o = r.get(t);
        if (void 0 === o) {
          r.set(t, function (t, n) {
            var r = t.array;
            var i = t.usage;
            var a = e.createBuffer();
            e.bindBuffer(n, a);
            e.bufferData(n, r, i);
            t.onUploadCallback();
            var o = 5126;
            if (r instanceof Float32Array) {
              o = 5126;
            } else {
              if (r instanceof Float64Array) {
                console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.");
              } else {
                if (r instanceof Uint16Array) {
                  o = 5123;
                } else {
                  if (r instanceof Int16Array) {
                    o = 5122;
                  } else {
                    if (r instanceof Uint32Array) {
                      o = 5125;
                    } else {
                      if (r instanceof Int32Array) {
                        o = 5124;
                      } else {
                        if (r instanceof Int8Array) {
                          o = 5120;
                        } else {
                          if (r instanceof Uint8Array) {
                            o = 5121;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            return {
              buffer: a,
              type: o,
              bytesPerElement: r.BYTES_PER_ELEMENT,
              version: t.version
            };
          }(t, i));
        } else {
          if (o.version < t.version) {
            !function (t, r, i) {
              var a = r.array;
              var o = r.updateRange;
              e.bindBuffer(i, t);
              if (-1 === o.count) {
                e.bufferSubData(i, 0, a);
              } else {
                if (n) {
                  e.bufferSubData(i, o.offset * a.BYTES_PER_ELEMENT, a, o.offset, o.count);
                } else {
                  e.bufferSubData(i, o.offset * a.BYTES_PER_ELEMENT, a.subarray(o.offset, o.offset + o.count));
                }
                o.count = -1;
              }
            }(o.buffer, t, i);
            o.version = t.version;
          }
        }
      }
    }
  };
}
var ln = function (e) {
  Object(l.a)(n, e);
  var t = Object(c.a)(n);
  function n(e, r, i, a) {
    var o;
    Object(u.a)(this, n);
    (o = t.call(this)).type = "PlaneBufferGeometry";
    o.parameters = {
      width: e,
      height: r,
      widthSegments: i,
      heightSegments: a
    };
    for (var s = (e = e || 1) / 2, l = (r = r || 1) / 2, c = Math.floor(i) || 1, h = Math.floor(a) || 1, d = c + 1, p = h + 1, f = e / c, m = r / h, v = [], g = [], y = [], x = [], b = 0; b < p; b++) {
      for (var _ = b * m - l, w = 0; w < d; w++) {
        var M = w * f - s;
        g.push(M, -_, 0);
        y.push(0, 0, 1);
        x.push(w / c);
        x.push(1 - b / h);
      }
    }
    for (var S = 0; S < h; S++) {
      for (var T = 0; T < c; T++) {
        var E = T + d * S;
        var A = T + d * (S + 1);
        var L = T + 1 + d * (S + 1);
        var R = T + 1 + d * S;
        v.push(E, A, R);
        v.push(A, L, R);
      }
    }
    o.setIndex(v);
    o.setAttribute("position", new pt(g, 3));
    o.setAttribute("normal", new pt(y, 3));
    o.setAttribute("uv", new pt(x, 2));
    return o;
  }
  return n;
}(St);
var cn = {
  alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
  alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
  alphatest_fragment: "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif",
  aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif",
  aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
  begin_vertex: "vec3 transformed = vec3( position );",
  beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
  bsdfs: "vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n\tvec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n\treturn Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + viewDir );\n\tfloat dotNL = saturate( dot( normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(float roughness, float NoH) {\n\tfloat invAlpha = 1.0 / roughness;\n\tfloat cos2h = NoH * NoH;\n\tfloat sin2h = max(1.0 - cos2h, 0.0078125);\treturn (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\nfloat V_Neubelt(float NoV, float NoL) {\n\treturn saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 H = normalize( V + L );\n\tfloat dotNH = saturate( dot( N, H ) );\n\treturn specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );\n}\n#endif",
  bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
  clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
  clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
  clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",
  clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",
  color_fragment: "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",
  color_pars_fragment: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
  color_pars_vertex: "#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif",
  color_vertex: "#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor.xyz *= color.xyz;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif",
  common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}",
  cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_maxMipLevel 8.0\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_maxTileSize 256.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\tfloat texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );\n\t\tvec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );\n\t\tvec2 f = fract( uv );\n\t\tuv += 0.5 - f;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tif ( mipInt < cubeUV_maxMipLevel ) {\n\t\t\tuv.y += 2.0 * cubeUV_maxTileSize;\n\t\t}\n\t\tuv.y += filterInt * 2.0 * cubeUV_minTileSize;\n\t\tuv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );\n\t\tuv *= texelSize;\n\t\tvec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.x += texelSize;\n\t\tvec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.y += texelSize;\n\t\tvec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.x -= texelSize;\n\t\tvec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tvec3 tm = mix( tl, tr, f.x );\n\t\tvec3 bm = mix( bl, br, f.x );\n\t\treturn mix( tm, bm, f.y );\n\t}\n\t#define r0 1.0\n\t#define v0 0.339\n\t#define m0 - 2.0\n\t#define r1 0.8\n\t#define v1 0.276\n\t#define m1 - 1.0\n\t#define r4 0.4\n\t#define v4 0.046\n\t#define m4 2.0\n\t#define r5 0.305\n\t#define v5 0.016\n\t#define m5 3.0\n\t#define r6 0.21\n\t#define v6 0.0038\n\t#define m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= r1 ) {\n\t\t\tmip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;\n\t\t} else if ( roughness >= r4 ) {\n\t\t\tmip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;\n\t\t} else if ( roughness >= r5 ) {\n\t\t\tmip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;\n\t\t} else if ( roughness >= r6 ) {\n\t\t\tmip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif",
  defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
  displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
  displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
  emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
  emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
  encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = clamp( floor( D ) / 255.0, 0.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value ) {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}",
  envmap_fragment: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifndef ENVMAP_TYPE_CUBE_UV\n\t\tenvColor = envMapTexelToLinear( envColor );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
  envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",
  envmap_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
  envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
  envmap_physical_pars_fragment: "#if defined( USE_ENVMAP )\n\t#ifdef ENVMAP_MODE_REFRACTION\n\t\tuniform float refractionRatio;\n\t#endif\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat sigma = PI * roughness * roughness / ( 1.0 + roughness );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -viewDir, normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif",
  envmap_vertex: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
  fog_vertex: "#ifdef USE_FOG\n\tfogDepth = - mvPosition.z;\n#endif",
  fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif",
  fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
  fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
  gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn texture2D( gradientMap, coord ).rgb;\n\t#else\n\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t#endif\n}",
  lightmap_fragment: "#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\treflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n#endif",
  lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
  lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry );\n#ifdef DOUBLE_SIDED\n\tvIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n\tvIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );\n#endif\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif",
  lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif",
  lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
  lights_toon_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )\t(0)",
  lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
  lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",
  lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;\nmaterial.specularRoughness = min( material.specularRoughness, 1.0 );\n#ifdef REFLECTIVITY\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#endif\n#ifdef CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheen;\n#endif",
  lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat specularRoughness;\n\tvec3 specularColor;\n#ifdef CLEARCOAT\n\tfloat clearcoat;\n\tfloat clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tvec3 sheenColor;\n#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearcoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = ccDotNL * directLight.color;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tccIrradiance *= PI;\n\t\t#endif\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t\treflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n\t\t\tmaterial.specularRoughness,\n\t\t\tdirectLight.direction,\n\t\t\tgeometry,\n\t\t\tmaterial.sheenColor\n\t\t);\n\t#else\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);\n\t#endif\n\treflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t\tfloat ccDotNL = ccDotNV;\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\tfloat clearcoatInv = 1.0 - clearcoatDHR;\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
  lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
  lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );\n\t#ifdef CLEARCOAT\n\t\tclearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );\n\t#endif\n#endif",
  lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
  logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
  logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
  logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",
  logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",
  map_fragment: "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif",
  map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
  map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
  map_particle_pars_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
  metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
  metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
  morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n#endif",
  morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifndef USE_MORPHNORMALS\n\t\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\t\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
  morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t#endif\n#endif",
  normal_fragment_begin: "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\tbitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",
  normal_fragment_maps: "#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal, mapN );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif",
  normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\tvec3 N = normalize( surf_norm );\n\t\tmat3 tsn = mat3( S, T, N );\n\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif",
  clearcoat_normal_fragment_begin: "#ifdef CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",
  clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );\n\t#endif\n#endif",
  clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",
  packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
  premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
  project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
  dithering_fragment: "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
  dithering_pars_fragment: "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
  roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
  roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
  shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
  shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
  shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n\t\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\tvec4 shadowWorldPosition;\n\t#endif\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n#endif",
  shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",
  skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
  skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif",
  skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
  skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
  specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
  specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
  tonemapping_fragment: "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
  tonemapping_pars_fragment: "#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
  transmissionmap_fragment: "#ifdef USE_TRANSMISSIONMAP\n\ttotalTransmission *= texture2D( transmissionMap, vUv ).r;\n#endif",
  transmissionmap_pars_fragment: "#ifdef USE_TRANSMISSIONMAP\n\tuniform sampler2D transmissionMap;\n#endif",
  uv_pars_fragment: "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif",
  uv_pars_vertex: "#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif",
  uv_vertex: "#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
  uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
  uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif",
  uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",
  worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",
  background_frag: "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
  background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
  cube_frag: "#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
  cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
  depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",
  depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",
  distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
  distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
  equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
  equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
  linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
  linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
  meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
  meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
  meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
  meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
  meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
  meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
  meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
  meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
  meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
  meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
  meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n\t#define REFLECTIVITY\n\t#define CLEARCOAT\n\t#define TRANSMISSION\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef TRANSMISSION\n\tuniform float transmission;\n#endif\n#ifdef REFLECTIVITY\n\tuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <transmissionmap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#ifdef TRANSMISSION\n\t\tfloat totalTransmission = transmission;\n\t#endif\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <transmissionmap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#ifdef TRANSMISSION\n\t\tdiffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );\n\t#endif\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
  meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
  normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}",
  normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
  points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
  points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
  shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
  shadow_vert: "#include <common>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
  sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
  sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}"
};
var un = {
  common: {
    diffuse: {
      value: new Qe(15658734)
    },
    opacity: {
      value: 1
    },
    map: {
      value: null
    },
    uvTransform: {
      value: new M()
    },
    uv2Transform: {
      value: new M()
    },
    alphaMap: {
      value: null
    }
  },
  specularmap: {
    specularMap: {
      value: null
    }
  },
  envmap: {
    envMap: {
      value: null
    },
    flipEnvMap: {
      value: -1
    },
    reflectivity: {
      value: 1
    },
    refractionRatio: {
      value: .98
    },
    maxMipLevel: {
      value: 0
    }
  },
  aomap: {
    aoMap: {
      value: null
    },
    aoMapIntensity: {
      value: 1
    }
  },
  lightmap: {
    lightMap: {
      value: null
    },
    lightMapIntensity: {
      value: 1
    }
  },
  emissivemap: {
    emissiveMap: {
      value: null
    }
  },
  bumpmap: {
    bumpMap: {
      value: null
    },
    bumpScale: {
      value: 1
    }
  },
  normalmap: {
    normalMap: {
      value: null
    },
    normalScale: {
      value: new w(1, 1)
    }
  },
  displacementmap: {
    displacementMap: {
      value: null
    },
    displacementScale: {
      value: 1
    },
    displacementBias: {
      value: 0
    }
  },
  roughnessmap: {
    roughnessMap: {
      value: null
    }
  },
  metalnessmap: {
    metalnessMap: {
      value: null
    }
  },
  gradientmap: {
    gradientMap: {
      value: null
    }
  },
  fog: {
    fogDensity: {
      value: 25e-5
    },
    fogNear: {
      value: 1
    },
    fogFar: {
      value: 2e3
    },
    fogColor: {
      value: new Qe(16777215)
    }
  },
  lights: {
    ambientLightColor: {
      value: []
    },
    lightProbe: {
      value: []
    },
    directionalLights: {
      value: [],
      properties: {
        direction: {},
        color: {}
      }
    },
    directionalLightShadows: {
      value: [],
      properties: {
        shadowBias: {},
        shadowNormalBias: {},
        shadowRadius: {},
        shadowMapSize: {}
      }
    },
    directionalShadowMap: {
      value: []
    },
    directionalShadowMatrix: {
      value: []
    },
    spotLights: {
      value: [],
      properties: {
        color: {},
        position: {},
        direction: {},
        distance: {},
        coneCos: {},
        penumbraCos: {},
        decay: {}
      }
    },
    spotLightShadows: {
      value: [],
      properties: {
        shadowBias: {},
        shadowNormalBias: {},
        shadowRadius: {},
        shadowMapSize: {}
      }
    },
    spotShadowMap: {
      value: []
    },
    spotShadowMatrix: {
      value: []
    },
    pointLights: {
      value: [],
      properties: {
        color: {},
        position: {},
        decay: {},
        distance: {}
      }
    },
    pointLightShadows: {
      value: [],
      properties: {
        shadowBias: {},
        shadowNormalBias: {},
        shadowRadius: {},
        shadowMapSize: {},
        shadowCameraNear: {},
        shadowCameraFar: {}
      }
    },
    pointShadowMap: {
      value: []
    },
    pointShadowMatrix: {
      value: []
    },
    hemisphereLights: {
      value: [],
      properties: {
        direction: {},
        skyColor: {},
        groundColor: {}
      }
    },
    rectAreaLights: {
      value: [],
      properties: {
        color: {},
        position: {},
        width: {},
        height: {}
      }
    },
    ltc_1: {
      value: null
    },
    ltc_2: {
      value: null
    }
  },
  points: {
    diffuse: {
      value: new Qe(15658734)
    },
    opacity: {
      value: 1
    },
    size: {
      value: 1
    },
    scale: {
      value: 1
    },
    map: {
      value: null
    },
    alphaMap: {
      value: null
    },
    uvTransform: {
      value: new M()
    }
  },
  sprite: {
    diffuse: {
      value: new Qe(15658734)
    },
    opacity: {
      value: 1
    },
    center: {
      value: new w(.5, .5)
    },
    rotation: {
      value: 0
    },
    map: {
      value: null
    },
    alphaMap: {
      value: null
    },
    uvTransform: {
      value: new M()
    }
  }
};
var hn = {
  basic: {
    uniforms: Xt([un.common, un.specularmap, un.envmap, un.aomap, un.lightmap, un.fog]),
    vertexShader: cn.meshbasic_vert,
    fragmentShader: cn.meshbasic_frag
  },
  lambert: {
    uniforms: Xt([un.common, un.specularmap, un.envmap, un.aomap, un.lightmap, un.emissivemap, un.fog, un.lights, {
      emissive: {
        value: new Qe(0)
      }
    }]),
    vertexShader: cn.meshlambert_vert,
    fragmentShader: cn.meshlambert_frag
  },
  phong: {
    uniforms: Xt([un.common, un.specularmap, un.envmap, un.aomap, un.lightmap, un.emissivemap, un.bumpmap, un.normalmap, un.displacementmap, un.fog, un.lights, {
      emissive: {
        value: new Qe(0)
      },
      specular: {
        value: new Qe(1118481)
      },
      shininess: {
        value: 30
      }
    }]),
    vertexShader: cn.meshphong_vert,
    fragmentShader: cn.meshphong_frag
  },
  standard: {
    uniforms: Xt([un.common, un.envmap, un.aomap, un.lightmap, un.emissivemap, un.bumpmap, un.normalmap, un.displacementmap, un.roughnessmap, un.metalnessmap, un.fog, un.lights, {
      emissive: {
        value: new Qe(0)
      },
      roughness: {
        value: 1
      },
      metalness: {
        value: 0
      },
      envMapIntensity: {
        value: 1
      }
    }]),
    vertexShader: cn.meshphysical_vert,
    fragmentShader: cn.meshphysical_frag
  },
  toon: {
    uniforms: Xt([un.common, un.aomap, un.lightmap, un.emissivemap, un.bumpmap, un.normalmap, un.displacementmap, un.gradientmap, un.fog, un.lights, {
      emissive: {
        value: new Qe(0)
      }
    }]),
    vertexShader: cn.meshtoon_vert,
    fragmentShader: cn.meshtoon_frag
  },
  matcap: {
    uniforms: Xt([un.common, un.bumpmap, un.normalmap, un.displacementmap, un.fog, {
      matcap: {
        value: null
      }
    }]),
    vertexShader: cn.meshmatcap_vert,
    fragmentShader: cn.meshmatcap_frag
  },
  points: {
    uniforms: Xt([un.points, un.fog]),
    vertexShader: cn.points_vert,
    fragmentShader: cn.points_frag
  },
  dashed: {
    uniforms: Xt([un.common, un.fog, {
      scale: {
        value: 1
      },
      dashSize: {
        value: 1
      },
      totalSize: {
        value: 2
      }
    }]),
    vertexShader: cn.linedashed_vert,
    fragmentShader: cn.linedashed_frag
  },
  depth: {
    uniforms: Xt([un.common, un.displacementmap]),
    vertexShader: cn.depth_vert,
    fragmentShader: cn.depth_frag
  },
  normal: {
    uniforms: Xt([un.common, un.bumpmap, un.normalmap, un.displacementmap, {
      opacity: {
        value: 1
      }
    }]),
    vertexShader: cn.normal_vert,
    fragmentShader: cn.normal_frag
  },
  sprite: {
    uniforms: Xt([un.sprite, un.fog]),
    vertexShader: cn.sprite_vert,
    fragmentShader: cn.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: {
        value: new M()
      },
      t2D: {
        value: null
      }
    },
    vertexShader: cn.background_vert,
    fragmentShader: cn.background_frag
  },
  cube: {
    uniforms: Xt([un.envmap, {
      opacity: {
        value: 1
      }
    }]),
    vertexShader: cn.cube_vert,
    fragmentShader: cn.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: {
        value: null
      }
    },
    vertexShader: cn.equirect_vert,
    fragmentShader: cn.equirect_frag
  },
  distanceRGBA: {
    uniforms: Xt([un.common, un.displacementmap, {
      referencePosition: {
        value: new C()
      },
      nearDistance: {
        value: 1
      },
      farDistance: {
        value: 1e3
      }
    }]),
    vertexShader: cn.distanceRGBA_vert,
    fragmentShader: cn.distanceRGBA_frag
  },
  shadow: {
    uniforms: Xt([un.lights, un.fog, {
      color: {
        value: new Qe(0)
      },
      opacity: {
        value: 1
      }
    }]),
    vertexShader: cn.shadow_vert,
    fragmentShader: cn.shadow_frag
  }
};
function dn(e, t, n, r, i) {
  var a;
  var o;
  var s = new Qe(0);
  var l = 0;
  var c = null;
  var u = 0;
  var h = null;
  function d(e, t) {
    n.buffers.color.setClear(e.r, e.g, e.b, t, i);
  }
  return {
    getClearColor: function () {
      return s;
    },
    setClearColor: function (e, t) {
      s.set(e);
      d(s, l = void 0 !== t ? t : 1);
    },
    getClearAlpha: function () {
      return l;
    },
    setClearAlpha: function (e) {
      d(s, l = e);
    },
    render: function (n, i, p, f) {
      var m = !0 === i.isScene ? i.background : null;
      if (m && m.isTexture) {
        m = t.get(m);
      }
      var v = e.xr;
      var g = v.getSession && v.getSession();
      if (g && "additive" === g.environmentBlendMode) {
        m = null;
      }
      if (null === m) {
        d(s, l);
      } else {
        if (m && m.isColor) {
          d(m, 1);
          f = !0;
        }
      }
      if (e.autoClear || f) {
        e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil);
      }
      if (m && (m.isCubeTexture || m.isWebGLCubeRenderTarget || 306 === m.mapping)) {
        if (void 0 === o) {
          (o = new Gt(new Wt(1, 1, 1), new Zt({
            name: "BackgroundCubeMaterial",
            uniforms: qt(hn.cube.uniforms),
            vertexShader: hn.cube.vertexShader,
            fragmentShader: hn.cube.fragmentShader,
            side: 1,
            depthTest: !1,
            depthWrite: !1,
            fog: !1
          }))).geometry.deleteAttribute("normal");
          o.geometry.deleteAttribute("uv");
          o.onBeforeRender = function (e, t, n) {
            this.matrixWorld.copyPosition(n.matrixWorld);
          };
          Object.defineProperty(o.material, "envMap", {
            get: function () {
              return this.uniforms.envMap.value;
            }
          });
          r.update(o);
        }
        if (m.isWebGLCubeRenderTarget) {
          m = m.texture;
        }
        o.material.uniforms.envMap.value = m;
        o.material.uniforms.flipEnvMap.value = m.isCubeTexture && m._needsFlipEnvMap ? -1 : 1;
        if (!(c === m && u === m.version && h === e.toneMapping)) {
          o.material.needsUpdate = !0;
          c = m;
          u = m.version;
          h = e.toneMapping;
        }
        n.unshift(o, o.geometry, o.material, 0, 0, null);
      } else {
        if (m && m.isTexture) {
          if (void 0 === a) {
            (a = new Gt(new ln(2, 2), new Zt({
              name: "BackgroundMaterial",
              uniforms: qt(hn.background.uniforms),
              vertexShader: hn.background.vertexShader,
              fragmentShader: hn.background.fragmentShader,
              side: 0,
              depthTest: !1,
              depthWrite: !1,
              fog: !1
            }))).geometry.deleteAttribute("normal");
            Object.defineProperty(a.material, "map", {
              get: function () {
                return this.uniforms.t2D.value;
              }
            });
            r.update(a);
          }
          a.material.uniforms.t2D.value = m;
          if (!0 === m.matrixAutoUpdate) {
            m.updateMatrix();
          }
          a.material.uniforms.uvTransform.value.copy(m.matrix);
          if (!(c === m && u === m.version && h === e.toneMapping)) {
            a.material.needsUpdate = !0;
            c = m;
            u = m.version;
            h = e.toneMapping;
          }
          n.unshift(a, a.geometry, a.material, 0, 0, null);
        }
      }
    }
  };
}
function pn(e, t, n, r) {
  var i = e.getParameter(34921);
  var a = r.isWebGL2 ? null : t.get("OES_vertex_array_object");
  var o = r.isWebGL2 || null !== a;
  var s = {};
  var l = d(null);
  var c = l;
  function u(t) {
    return r.isWebGL2 ? e.bindVertexArray(t) : a.bindVertexArrayOES(t);
  }
  function h(t) {
    return r.isWebGL2 ? e.deleteVertexArray(t) : a.deleteVertexArrayOES(t);
  }
  function d(e) {
    for (var t = [], n = [], r = [], a = 0; a < i; a++) {
      t[a] = 0;
      n[a] = 0;
      r[a] = 0;
    }
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: t,
      enabledAttributes: n,
      attributeDivisors: r,
      object: e,
      attributes: {},
      index: null
    };
  }
  function p() {
    for (var e = c.newAttributes, t = 0, n = e.length; t < n; t++) {
      e[t] = 0;
    }
  }
  function f(e) {
    m(e, 0);
  }
  function m(n, i) {
    var a = c.newAttributes;
    var o = c.enabledAttributes;
    var s = c.attributeDivisors;
    a[n] = 1;
    if (0 === o[n]) {
      e.enableVertexAttribArray(n);
      o[n] = 1;
    }
    if (s[n] !== i) {
      (r.isWebGL2 ? e : t.get("ANGLE_instanced_arrays"))[r.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](n, i);
      s[n] = i;
    }
  }
  function v() {
    for (var t = c.newAttributes, n = c.enabledAttributes, r = 0, i = n.length; r < i; r++) {
      if (n[r] !== t[r]) {
        e.disableVertexAttribArray(r);
        n[r] = 0;
      }
    }
  }
  function g(t, n, i, a, o, s) {
    if (!0 !== r.isWebGL2 || 5124 !== i && 5125 !== i) {
      e.vertexAttribPointer(t, n, i, a, o, s);
    } else {
      e.vertexAttribIPointer(t, n, i, o, s);
    }
  }
  function y() {
    x();
    if (c !== l) {
      u((c = l).object);
    }
  }
  function x() {
    l.geometry = null;
    l.program = null;
    l.wireframe = !1;
  }
  return {
    setup: function (i, l, h, y, x) {
      var b = !1;
      if (o) {
        var _ = function (t, n, i) {
          var o = !0 === i.wireframe;
          var l = s[t.id];
          if (void 0 === l) {
            l = {};
            s[t.id] = l;
          }
          var c = l[n.id];
          if (void 0 === c) {
            c = {};
            l[n.id] = c;
          }
          var u = c[o];
          if (void 0 === u) {
            u = d(r.isWebGL2 ? e.createVertexArray() : a.createVertexArrayOES());
            c[o] = u;
          }
          return u;
        }(y, h, l);
        if (c !== _) {
          u((c = _).object);
        }
        if (b = function (e, t) {
          var n = c.attributes;
          var r = e.attributes;
          if (Object.keys(n).length !== Object.keys(r).length) {
            return !0;
          }
          for (var i in r) {
            var a = n[i];
            var o = r[i];
            if (void 0 === a) {
              return !0;
            }
            if (a.attribute !== o) {
              return !0;
            }
            if (a.data !== o.data) {
              return !0;
            }
          }
          return c.index !== t;
        }(y, x)) {
          (function (e, t) {
            var n = {};
            var r = e.attributes;
            for (var i in r) {
              var a = r[i];
              var o = {};
              o.attribute = a;
              if (a.data) {
                o.data = a.data;
              }
              n[i] = o;
            }
            c.attributes = n;
            c.index = t;
          })(y, x);
        }
      } else {
        var w = !0 === l.wireframe;
        if (!(c.geometry === y.id && c.program === h.id && c.wireframe === w)) {
          c.geometry = y.id;
          c.program = h.id;
          c.wireframe = w;
          b = !0;
        }
      }
      if (!0 === i.isInstancedMesh) {
        b = !0;
      }
      if (null !== x) {
        n.update(x, 34963);
      }
      if (b) {
        !function (i, a, o, s) {
          if (!1 === r.isWebGL2 && (i.isInstancedMesh || s.isInstancedBufferGeometry) && null === t.get("ANGLE_instanced_arrays")) {
            return;
          }
          p();
          var l = s.attributes;
          var c = o.getAttributes();
          var u = a.defaultAttributeValues;
          for (var h in c) {
            var d = c[h];
            if (d >= 0) {
              var y = l[h];
              if (void 0 !== y) {
                var x = y.normalized;
                var b = y.itemSize;
                var _ = n.get(y);
                if (void 0 === _) {
                  continue;
                }
                var w = _.buffer;
                var M = _.type;
                var S = _.bytesPerElement;
                if (y.isInterleavedBufferAttribute) {
                  var T = y.data;
                  var E = T.stride;
                  var A = y.offset;
                  if (T && T.isInstancedInterleavedBuffer) {
                    m(d, T.meshPerAttribute);
                    if (void 0 === s._maxInstanceCount) {
                      s._maxInstanceCount = T.meshPerAttribute * T.count;
                    }
                  } else {
                    f(d);
                  }
                  e.bindBuffer(34962, w);
                  g(d, b, M, x, E * S, A * S);
                } else {
                  if (y.isInstancedBufferAttribute) {
                    m(d, y.meshPerAttribute);
                    if (void 0 === s._maxInstanceCount) {
                      s._maxInstanceCount = y.meshPerAttribute * y.count;
                    }
                  } else {
                    f(d);
                  }
                  e.bindBuffer(34962, w);
                  g(d, b, M, x, 0, 0);
                }
              } else if ("instanceMatrix" === h) {
                var L = n.get(i.instanceMatrix);
                if (void 0 === L) {
                  continue;
                }
                var R = L.buffer;
                var P = L.type;
                m(d + 0, 1);
                m(d + 1, 1);
                m(d + 2, 1);
                m(d + 3, 1);
                e.bindBuffer(34962, R);
                e.vertexAttribPointer(d + 0, 4, P, !1, 64, 0);
                e.vertexAttribPointer(d + 1, 4, P, !1, 64, 16);
                e.vertexAttribPointer(d + 2, 4, P, !1, 64, 32);
                e.vertexAttribPointer(d + 3, 4, P, !1, 64, 48);
              } else if ("instanceColor" === h) {
                var C = n.get(i.instanceColor);
                if (void 0 === C) {
                  continue;
                }
                var I = C.buffer;
                var O = C.type;
                m(d, 1);
                e.bindBuffer(34962, I);
                e.vertexAttribPointer(d, 3, O, !1, 12, 0);
              } else if (void 0 !== u) {
                var k = u[h];
                if (void 0 !== k) {
                  switch (k.length) {
                    case 2:
                      e.vertexAttrib2fv(d, k);
                      break;
                    case 3:
                      e.vertexAttrib3fv(d, k);
                      break;
                    case 4:
                      e.vertexAttrib4fv(d, k);
                      break;
                    default:
                      e.vertexAttrib1fv(d, k);
                  }
                }
              }
            }
          }
          v();
        }(i, l, h, y);
        if (null !== x) {
          e.bindBuffer(34963, n.get(x).buffer);
        }
      }
    },
    reset: y,
    resetDefaultState: x,
    dispose: function () {
      for (var e in y(), s) {
        var t = s[e];
        for (var n in t) {
          var r = t[n];
          for (var i in r) {
            h(r[i].object);
            delete r[i];
          }
          delete t[n];
        }
        delete s[e];
      }
    },
    releaseStatesOfGeometry: function (e) {
      if (void 0 !== s[e.id]) {
        var t = s[e.id];
        for (var n in t) {
          var r = t[n];
          for (var i in r) {
            h(r[i].object);
            delete r[i];
          }
          delete t[n];
        }
        delete s[e.id];
      }
    },
    releaseStatesOfProgram: function (e) {
      for (var t in s) {
        var n = s[t];
        if (void 0 !== n[e.id]) {
          var r = n[e.id];
          for (var i in r) {
            h(r[i].object);
            delete r[i];
          }
          delete n[e.id];
        }
      }
    },
    initAttributes: p,
    enableAttribute: f,
    disableUnusedAttributes: v
  };
}
function fn(e, t, n, r) {
  var i;
  var a = r.isWebGL2;
  this.setMode = function (e) {
    i = e;
  };
  this.render = function (t, r) {
    e.drawArrays(i, t, r);
    n.update(r, i, 1);
  };
  this.renderInstances = function (r, o, s) {
    if (0 !== s) {
      var l;
      var c;
      if (a) {
        l = e;
        c = "drawArraysInstanced";
      } else if (c = "drawArraysInstancedANGLE", null === (l = t.get("ANGLE_instanced_arrays"))) {
        return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      }
      l[c](i, r, o, s);
      n.update(o, i, s);
    }
  };
}
function mn(e, t, n) {
  var r;
  function i(t) {
    if ("highp" === t) {
      if (e.getShaderPrecisionFormat(35633, 36338).precision > 0 && e.getShaderPrecisionFormat(35632, 36338).precision > 0) {
        return "highp";
      }
      t = "mediump";
    }
    return "mediump" === t && e.getShaderPrecisionFormat(35633, 36337).precision > 0 && e.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp";
  }
  var a = "undefined" !== typeof WebGL2RenderingContext && e instanceof WebGL2RenderingContext || "undefined" !== typeof WebGL2ComputeRenderingContext && e instanceof WebGL2ComputeRenderingContext;
  var o = void 0 !== n.precision ? n.precision : "highp";
  var s = i(o);
  if (s !== o) {
    console.warn("THREE.WebGLRenderer:", o, "not supported, using", s, "instead.");
    o = s;
  }
  var l = !0 === n.logarithmicDepthBuffer;
  var c = e.getParameter(34930);
  var u = e.getParameter(35660);
  var h = e.getParameter(3379);
  var d = e.getParameter(34076);
  var p = e.getParameter(34921);
  var f = e.getParameter(36347);
  var m = e.getParameter(36348);
  var v = e.getParameter(36349);
  var g = u > 0;
  var y = a || !!t.get("OES_texture_float");
  return {
    isWebGL2: a,
    getMaxAnisotropy: function () {
      if (void 0 !== r) {
        return r;
      }
      var n = t.get("EXT_texture_filter_anisotropic");
      return r = null !== n ? e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0;
    },
    getMaxPrecision: i,
    precision: o,
    logarithmicDepthBuffer: l,
    maxTextures: c,
    maxVertexTextures: u,
    maxTextureSize: h,
    maxCubemapSize: d,
    maxAttributes: p,
    maxVertexUniforms: f,
    maxVaryings: m,
    maxFragmentUniforms: v,
    vertexTextures: g,
    floatFragmentTextures: y,
    floatVertexTextures: g && y,
    maxSamples: a ? e.getParameter(36183) : 0
  };
}
function vn(e) {
  var t = this;
  var n = null;
  var r = 0;
  var i = !1;
  var a = !1;
  var o = new ke();
  var s = new M();
  var l = {
    value: null,
    needsUpdate: !1
  };
  function c() {
    if (l.value !== n) {
      l.value = n;
      l.needsUpdate = r > 0;
    }
    t.numPlanes = r;
    t.numIntersection = 0;
  }
  function u(e, n, r, i) {
    var a = null !== e ? e.length : 0;
    var c = null;
    if (0 !== a) {
      c = l.value;
      if (!0 !== i || null === c) {
        var u = r + 4 * a;
        var h = n.matrixWorldInverse;
        s.getNormalMatrix(h);
        if (null === c || c.length < u) {
          c = new Float32Array(u);
        }
        for (var d = 0, p = r; d !== a; ++d, p += 4) {
          o.copy(e[d]).applyMatrix4(h, s);
          o.normal.toArray(c, p);
          c[p + 3] = o.constant;
        }
      }
      l.value = c;
      l.needsUpdate = !0;
    }
    t.numPlanes = a;
    t.numIntersection = 0;
    return c;
  }
  this.uniform = l;
  this.numPlanes = 0;
  this.numIntersection = 0;
  this.init = function (e, t, a) {
    var o = 0 !== e.length || t || 0 !== r || i;
    i = t;
    n = u(e, a, 0);
    r = e.length;
    return o;
  };
  this.beginShadows = function () {
    a = !0;
    u(null);
  };
  this.endShadows = function () {
    a = !1;
    c();
  };
  this.setState = function (t, o, s) {
    var h = t.clippingPlanes;
    var d = t.clipIntersection;
    var p = t.clipShadows;
    var f = e.get(t);
    if (!i || null === h || 0 === h.length || a && !p) {
      if (a) {
        u(null);
      } else {
        c();
      }
    } else {
      var m = a ? 0 : r;
      var v = 4 * m;
      var g = f.clippingState || null;
      l.value = g;
      g = u(h, o, v, s);
      for (var y = 0; y !== v; ++y) {
        g[y] = n[y];
      }
      f.clippingState = g;
      this.numIntersection = d ? this.numPlanes : 0;
      this.numPlanes += m;
    }
  };
}
function gn(e) {
  var t = new WeakMap();
  function n(e, t) {
    if (t === d) {
      e.mapping = 301;
    } else {
      if (304 === t) {
        e.mapping = 302;
      }
    }
    return e;
  }
  function r(e) {
    var n = e.target;
    n.removeEventListener("dispose", r);
    var i = t.get(n);
    if (void 0 !== i) {
      t.delete(n);
      i.dispose();
    }
  }
  return {
    get: function (i) {
      if (i && i.isTexture) {
        var a = i.mapping;
        if (a === d || 304 === a) {
          if (t.has(i)) {
            return n(t.get(i).texture, i.mapping);
          }
          var o = i.image;
          if (o && o.height > 0) {
            var s = e.getRenderList();
            var l = e.getRenderTarget();
            var c = e.getRenderState();
            var u = new en(o.height / 2);
            u.fromEquirectangularTexture(e, i);
            t.set(i, u);
            e.setRenderTarget(l);
            e.setRenderList(s);
            e.setRenderState(c);
            i.addEventListener("dispose", r);
            return n(u.texture, i.mapping);
          }
          return null;
        }
      }
      return i;
    },
    dispose: function () {
      t = new WeakMap();
    }
  };
}
function yn(e) {
  var t = {};
  return {
    has: function (n) {
      if (void 0 !== t[n]) {
        return null !== t[n];
      }
      var r;
      switch (n) {
        case "WEBGL_depth_texture":
          r = e.getExtension("WEBGL_depth_texture") || e.getExtension("MOZ_WEBGL_depth_texture") || e.getExtension("WEBKIT_WEBGL_depth_texture");
          break;
        case "EXT_texture_filter_anisotropic":
          r = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
          break;
        case "WEBGL_compressed_texture_s3tc":
          r = e.getExtension("WEBGL_compressed_texture_s3tc") || e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
          break;
        case "WEBGL_compressed_texture_pvrtc":
          r = e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
          break;
        default:
          r = e.getExtension(n);
      }
      t[n] = r;
      return null !== r;
    },
    get: function (e) {
      if (!this.has(e)) {
        console.warn("THREE.WebGLRenderer: " + e + " extension not supported.");
      }
      return t[e];
    }
  };
}
function xn(e, t, n, r) {
  var i = new WeakMap();
  var a = new WeakMap();
  function o(e) {
    var s = e.target;
    var l = i.get(s);
    for (var c in null !== l.index && t.remove(l.index), l.attributes) t.remove(l.attributes[c]);
    s.removeEventListener("dispose", o);
    i.delete(s);
    var u = a.get(l);
    if (u) {
      t.remove(u);
      a.delete(l);
    }
    r.releaseStatesOfGeometry(l);
    if (!0 === s.isInstancedBufferGeometry) {
      delete s._maxInstanceCount;
    }
    n.memory.geometries--;
  }
  function s(e) {
    var n = [];
    var r = e.index;
    var i = e.attributes.position;
    var o = 0;
    if (null !== r) {
      var s = r.array;
      o = r.version;
      for (var l = 0, c = s.length; l < c; l += 3) {
        var u = s[l + 0];
        var h = s[l + 1];
        var d = s[l + 2];
        n.push(u, h, h, d, d, u);
      }
    } else {
      var p = i.array;
      o = i.version;
      for (var f = 0, m = p.length / 3 - 1; f < m; f += 3) {
        var v = f + 0;
        var g = f + 1;
        var y = f + 2;
        n.push(v, g, g, y, y, v);
      }
    }
    var x = new (vt(n) > 65535 ? dt : ut)(n, 1);
    x.version = o;
    var b = a.get(e);
    if (b) {
      t.remove(b);
    }
    a.set(e, x);
  }
  return {
    get: function (e, t) {
      var r = i.get(t);
      return r || (t.addEventListener("dispose", o), t.isBufferGeometry ? r = t : t.isGeometry && (void 0 === t._bufferGeometry && (t._bufferGeometry = new St().setFromObject(e)), r = t._bufferGeometry), i.set(t, r), n.memory.geometries++, r);
    },
    update: function (e) {
      var n = e.attributes;
      for (var r in n) t.update(n[r], 34962);
      var i = e.morphAttributes;
      for (var a in i) for (var o = i[a], s = 0, l = o.length; s < l; s++) {
        t.update(o[s], 34962);
      }
    },
    getWireframeAttribute: function (e) {
      var t = a.get(e);
      if (t) {
        var n = e.index;
        if (null !== n && t.version < n.version) {
          s(e);
        }
      } else {
        s(e);
      }
      return a.get(e);
    }
  };
}
function bn(e, t, n, r) {
  var i;
  var a;
  var o;
  var s = r.isWebGL2;
  this.setMode = function (e) {
    i = e;
  };
  this.setIndex = function (e) {
    a = e.type;
    o = e.bytesPerElement;
  };
  this.render = function (t, r) {
    e.drawElements(i, r, a, t * o);
    n.update(r, i, 1);
  };
  this.renderInstances = function (r, l, c) {
    if (0 !== c) {
      var u;
      var h;
      if (s) {
        u = e;
        h = "drawElementsInstanced";
      } else if (h = "drawElementsInstancedANGLE", null === (u = t.get("ANGLE_instanced_arrays"))) {
        return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      }
      u[h](i, l, a, r * o, c);
      n.update(l, i, c);
    }
  };
}
function _n(e) {
  var t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  return {
    memory: {
      geometries: 0,
      textures: 0
    },
    render: t,
    programs: null,
    autoReset: !0,
    reset: function () {
      t.frame++;
      t.calls = 0;
      t.triangles = 0;
      t.points = 0;
      t.lines = 0;
    },
    update: function (e, n, r) {
      switch (t.calls++, n) {
        case 4:
          t.triangles += r * (e / 3);
          break;
        case 1:
          t.lines += r * (e / 2);
          break;
        case 3:
          t.lines += r * (e - 1);
          break;
        case 2:
          t.lines += r * e;
          break;
        case 0:
          t.points += r * e;
          break;
        default:
          console.error("THREE.WebGLInfo: Unknown draw mode:", n);
      }
    }
  };
}
function wn(e, t) {
  return e[0] - t[0];
}
function Mn(e, t) {
  return Math.abs(t[1]) - Math.abs(e[1]);
}
function Sn(e) {
  for (var t = {}, n = new Float32Array(8), r = [], i = 0; i < 8; i++) {
    r[i] = [i, 0];
  }
  return {
    update: function (i, a, o, s) {
      var l = i.morphTargetInfluences;
      var c = void 0 === l ? 0 : l.length;
      var u = t[a.id];
      if (void 0 === u) {
        u = [];
        for (var h = 0; h < c; h++) {
          u[h] = [h, 0];
        }
        t[a.id] = u;
      }
      for (var d = 0; d < c; d++) {
        var p = u[d];
        p[0] = d;
        p[1] = l[d];
      }
      u.sort(Mn);
      for (var f = 0; f < 8; f++) {
        if (f < c && u[f][1]) {
          r[f][0] = u[f][0];
          r[f][1] = u[f][1];
        } else {
          r[f][0] = Number.MAX_SAFE_INTEGER;
          r[f][1] = 0;
        }
      }
      r.sort(wn);
      for (var m = o.morphTargets && a.morphAttributes.position, v = o.morphNormals && a.morphAttributes.normal, g = 0, y = 0; y < 8; y++) {
        var x = r[y];
        var b = x[0];
        var _ = x[1];
        if (b !== Number.MAX_SAFE_INTEGER && _) {
          if (m && a.getAttribute("morphTarget" + y) !== m[b]) {
            a.setAttribute("morphTarget" + y, m[b]);
          }
          if (v && a.getAttribute("morphNormal" + y) !== v[b]) {
            a.setAttribute("morphNormal" + y, v[b]);
          }
          n[y] = _;
          g += _;
        } else {
          if (m && void 0 !== a.getAttribute("morphTarget" + y)) {
            a.deleteAttribute("morphTarget" + y);
          }
          if (v && void 0 !== a.getAttribute("morphNormal" + y)) {
            a.deleteAttribute("morphNormal" + y);
          }
          n[y] = 0;
        }
      }
      var w = a.morphTargetsRelative ? 1 : 1 - g;
      s.getUniforms().setValue(e, "morphTargetBaseInfluence", w);
      s.getUniforms().setValue(e, "morphTargetInfluences", n);
    }
  };
}
function Tn(e, t, n, r) {
  var i = new WeakMap();
  return {
    update: function (e) {
      var a = r.render.frame;
      var o = e.geometry;
      var s = t.get(e, o);
      if (i.get(s) !== a) {
        if (o.isGeometry) {
          s.updateFromObject(e);
        }
        t.update(s);
        i.set(s, a);
      }
      if (e.isInstancedMesh) {
        n.update(e.instanceMatrix, 34962);
        if (null !== e.instanceColor) {
          n.update(e.instanceColor, 34962);
        }
      }
      return s;
    },
    dispose: function () {
      i = new WeakMap();
    }
  };
}
function En(e, t, n, r) {
  E.call(this, null);
  this.image = {
    data: e || null,
    width: t || 1,
    height: n || 1,
    depth: r || 1
  };
  this.magFilter = 1003;
  this.minFilter = 1003;
  this.wrapR = f;
  this.generateMipmaps = !1;
  this.flipY = !1;
  this.needsUpdate = !0;
}
function An(e, t, n, r) {
  E.call(this, null);
  this.image = {
    data: e || null,
    width: t || 1,
    height: n || 1,
    depth: r || 1
  };
  this.magFilter = 1003;
  this.minFilter = 1003;
  this.wrapR = f;
  this.generateMipmaps = !1;
  this.flipY = !1;
  this.needsUpdate = !0;
}
hn.physical = {
  uniforms: Xt([hn.standard.uniforms, {
    clearcoat: {
      value: 0
    },
    clearcoatMap: {
      value: null
    },
    clearcoatRoughness: {
      value: 0
    },
    clearcoatRoughnessMap: {
      value: null
    },
    clearcoatNormalScale: {
      value: new w(1, 1)
    },
    clearcoatNormalMap: {
      value: null
    },
    sheen: {
      value: new Qe(0)
    },
    transmission: {
      value: 0
    },
    transmissionMap: {
      value: null
    }
  }]),
  vertexShader: cn.meshphysical_vert,
  fragmentShader: cn.meshphysical_frag
};
En.prototype = Object.create(E.prototype);
En.prototype.constructor = En;
En.prototype.isDataTexture2DArray = !0;
An.prototype = Object.create(E.prototype);
An.prototype.constructor = An;
An.prototype.isDataTexture3D = !0;
var Ln = new E();
var Rn = new En();
var Pn = new An();
var Cn = new $t();
var In = [];
var On = [];
var kn = new Float32Array(16);
var Nn = new Float32Array(9);
var Dn = new Float32Array(4);
function Un(e, t, n) {
  var r = e[0];
  if (r <= 0 || r > 0) {
    return e;
  }
  var i = t * n;
  var a = In[i];
  if (void 0 === a) {
    a = new Float32Array(i);
    In[i] = a;
  }
  if (0 !== t) {
    r.toArray(a, 0);
    for (var o = 1, s = 0; o !== t; ++o) {
      s += n;
      e[o].toArray(a, s);
    }
  }
  return a;
}
function Bn(e, t) {
  if (e.length !== t.length) {
    return !1;
  }
  for (var n = 0, r = e.length; n < r; n++) {
    if (e[n] !== t[n]) {
      return !1;
    }
  }
  return !0;
}
function zn(e, t) {
  for (var n = 0, r = t.length; n < r; n++) {
    e[n] = t[n];
  }
}
function Fn(e, t) {
  var n = On[t];
  if (void 0 === n) {
    n = new Int32Array(t);
    On[t] = n;
  }
  for (var r = 0; r !== t; ++r) {
    n[r] = e.allocateTextureUnit();
  }
  return n;
}
function Hn(e, t) {
  var n = this.cache;
  if (n[0] !== t) {
    e.uniform1f(this.addr, t);
    n[0] = t;
  }
}
function Gn(e, t) {
  var n = this.cache;
  if (void 0 !== t.x) {
    if (!(n[0] === t.x && n[1] === t.y)) {
      e.uniform2f(this.addr, t.x, t.y);
      n[0] = t.x;
      n[1] = t.y;
    }
  } else {
    if (Bn(n, t)) {
      return;
    }
    e.uniform2fv(this.addr, t);
    zn(n, t);
  }
}
function jn(e, t) {
  var n = this.cache;
  if (void 0 !== t.x) {
    if (!(n[0] === t.x && n[1] === t.y && n[2] === t.z)) {
      e.uniform3f(this.addr, t.x, t.y, t.z);
      n[0] = t.x;
      n[1] = t.y;
      n[2] = t.z;
    }
  } else if (void 0 !== t.r) {
    if (!(n[0] === t.r && n[1] === t.g && n[2] === t.b)) {
      e.uniform3f(this.addr, t.r, t.g, t.b);
      n[0] = t.r;
      n[1] = t.g;
      n[2] = t.b;
    }
  } else {
    if (Bn(n, t)) {
      return;
    }
    e.uniform3fv(this.addr, t);
    zn(n, t);
  }
}
function Vn(e, t) {
  var n = this.cache;
  if (void 0 !== t.x) {
    if (!(n[0] === t.x && n[1] === t.y && n[2] === t.z && n[3] === t.w)) {
      e.uniform4f(this.addr, t.x, t.y, t.z, t.w);
      n[0] = t.x;
      n[1] = t.y;
      n[2] = t.z;
      n[3] = t.w;
    }
  } else {
    if (Bn(n, t)) {
      return;
    }
    e.uniform4fv(this.addr, t);
    zn(n, t);
  }
}
function Wn(e, t) {
  var n = this.cache;
  var r = t.elements;
  if (void 0 === r) {
    if (Bn(n, t)) {
      return;
    }
    e.uniformMatrix2fv(this.addr, !1, t);
    zn(n, t);
  } else {
    if (Bn(n, r)) {
      return;
    }
    Dn.set(r);
    e.uniformMatrix2fv(this.addr, !1, Dn);
    zn(n, r);
  }
}
function qn(e, t) {
  var n = this.cache;
  var r = t.elements;
  if (void 0 === r) {
    if (Bn(n, t)) {
      return;
    }
    e.uniformMatrix3fv(this.addr, !1, t);
    zn(n, t);
  } else {
    if (Bn(n, r)) {
      return;
    }
    Nn.set(r);
    e.uniformMatrix3fv(this.addr, !1, Nn);
    zn(n, r);
  }
}
function Xn(e, t) {
  var n = this.cache;
  var r = t.elements;
  if (void 0 === r) {
    if (Bn(n, t)) {
      return;
    }
    e.uniformMatrix4fv(this.addr, !1, t);
    zn(n, t);
  } else {
    if (Bn(n, r)) {
      return;
    }
    kn.set(r);
    e.uniformMatrix4fv(this.addr, !1, kn);
    zn(n, r);
  }
}
function Yn(e, t, n) {
  var r = this.cache;
  var i = n.allocateTextureUnit();
  if (r[0] !== i) {
    e.uniform1i(this.addr, i);
    r[0] = i;
  }
  n.safeSetTexture2D(t || Ln, i);
}
function Zn(e, t, n) {
  var r = this.cache;
  var i = n.allocateTextureUnit();
  if (r[0] !== i) {
    e.uniform1i(this.addr, i);
    r[0] = i;
  }
  n.setTexture2DArray(t || Rn, i);
}
function Jn(e, t, n) {
  var r = this.cache;
  var i = n.allocateTextureUnit();
  if (r[0] !== i) {
    e.uniform1i(this.addr, i);
    r[0] = i;
  }
  n.setTexture3D(t || Pn, i);
}
function Kn(e, t, n) {
  var r = this.cache;
  var i = n.allocateTextureUnit();
  if (r[0] !== i) {
    e.uniform1i(this.addr, i);
    r[0] = i;
  }
  n.safeSetTextureCube(t || Cn, i);
}
function Qn(e, t) {
  var n = this.cache;
  if (n[0] !== t) {
    e.uniform1i(this.addr, t);
    n[0] = t;
  }
}
function $n(e, t) {
  var n = this.cache;
  if (!Bn(n, t)) {
    e.uniform2iv(this.addr, t);
    zn(n, t);
  }
}
function er(e, t) {
  var n = this.cache;
  if (!Bn(n, t)) {
    e.uniform3iv(this.addr, t);
    zn(n, t);
  }
}
function tr(e, t) {
  var n = this.cache;
  if (!Bn(n, t)) {
    e.uniform4iv(this.addr, t);
    zn(n, t);
  }
}
function nr(e, t) {
  var n = this.cache;
  if (n[0] !== t) {
    e.uniform1ui(this.addr, t);
    n[0] = t;
  }
}
function rr(e, t) {
  e.uniform1fv(this.addr, t);
}
function ir(e, t) {
  e.uniform1iv(this.addr, t);
}
function ar(e, t) {
  e.uniform2iv(this.addr, t);
}
function or(e, t) {
  e.uniform3iv(this.addr, t);
}
function sr(e, t) {
  e.uniform4iv(this.addr, t);
}
function lr(e, t) {
  var n = Un(t, this.size, 2);
  e.uniform2fv(this.addr, n);
}
function cr(e, t) {
  var n = Un(t, this.size, 3);
  e.uniform3fv(this.addr, n);
}
function ur(e, t) {
  var n = Un(t, this.size, 4);
  e.uniform4fv(this.addr, n);
}
function hr(e, t) {
  var n = Un(t, this.size, 4);
  e.uniformMatrix2fv(this.addr, !1, n);
}
function dr(e, t) {
  var n = Un(t, this.size, 9);
  e.uniformMatrix3fv(this.addr, !1, n);
}
function pr(e, t) {
  var n = Un(t, this.size, 16);
  e.uniformMatrix4fv(this.addr, !1, n);
}
function fr(e, t, n) {
  var r = t.length;
  var i = Fn(n, r);
  e.uniform1iv(this.addr, i);
  for (var a = 0; a !== r; ++a) {
    n.safeSetTexture2D(t[a] || Ln, i[a]);
  }
}
function mr(e, t, n) {
  var r = t.length;
  var i = Fn(n, r);
  e.uniform1iv(this.addr, i);
  for (var a = 0; a !== r; ++a) {
    n.safeSetTextureCube(t[a] || Cn, i[a]);
  }
}
function vr(e, t, n) {
  this.id = e;
  this.addr = n;
  this.cache = [];
  this.setValue = function (e) {
    switch (e) {
      case 5126:
        return Hn;
      case 35664:
        return Gn;
      case 35665:
        return jn;
      case 35666:
        return Vn;
      case 35674:
        return Wn;
      case 35675:
        return qn;
      case 35676:
        return Xn;
      case 5124:
      case 35670:
        return Qn;
      case 35667:
      case 35671:
        return $n;
      case 35668:
      case 35672:
        return er;
      case 35669:
      case 35673:
        return tr;
      case 5125:
        return nr;
      case 35678:
      case 36198:
      case 36298:
      case 36306:
      case 35682:
        return Yn;
      case 35679:
      case 36299:
      case 36307:
        return Jn;
      case 35680:
      case 36300:
      case 36308:
      case 36293:
        return Kn;
      case 36289:
      case 36303:
      case 36311:
      case 36292:
        return Zn;
    }
  }(t.type);
}
function gr(e, t, n) {
  this.id = e;
  this.addr = n;
  this.cache = [];
  this.size = t.size;
  this.setValue = function (e) {
    switch (e) {
      case 5126:
        return rr;
      case 35664:
        return lr;
      case 35665:
        return cr;
      case 35666:
        return ur;
      case 35674:
        return hr;
      case 35675:
        return dr;
      case 35676:
        return pr;
      case 5124:
      case 35670:
        return ir;
      case 35667:
      case 35671:
        return ar;
      case 35668:
      case 35672:
        return or;
      case 35669:
      case 35673:
        return sr;
      case 35678:
      case 36198:
      case 36298:
      case 36306:
      case 35682:
        return fr;
      case 35680:
      case 36300:
      case 36308:
      case 36293:
        return mr;
    }
  }(t.type);
}
function yr(e) {
  this.id = e;
  this.seq = [];
  this.map = {};
}
gr.prototype.updateCache = function (e) {
  var t = this.cache;
  if (e instanceof Float32Array && t.length !== e.length) {
    this.cache = new Float32Array(e.length);
  }
  zn(t, e);
};
yr.prototype.setValue = function (e, t, n) {
  for (var r = this.seq, i = 0, a = r.length; i !== a; ++i) {
    var o = r[i];
    o.setValue(e, t[o.id], n);
  }
};
var xr = /([\w\d_]+)(\])?(\[|\.)?/g;
function br(e, t) {
  e.seq.push(t);
  e.map[t.id] = t;
}
function _r(e, t, n) {
  var r = e.name;
  var i = r.length;
  for (xr.lastIndex = 0;;) {
    var a = xr.exec(r);
    var o = xr.lastIndex;
    var s = a[1];
    var l = "]" === a[2];
    var c = a[3];
    if (l) {
      s |= 0;
    }
    if (void 0 === c || "[" === c && o + 2 === i) {
      br(n, void 0 === c ? new vr(s, e, t) : new gr(s, e, t));
      break;
    }
    var u = n.map[s];
    if (void 0 === u) {
      br(n, u = new yr(s));
    }
    n = u;
  }
}
function wr(e, t) {
  this.seq = [];
  this.map = {};
  for (var n = e.getProgramParameter(t, 35718), r = 0; r < n; ++r) {
    var i = e.getActiveUniform(t, r);
    _r(i, e.getUniformLocation(t, i.name), this);
  }
}
function Mr(e, t, n) {
  var r = e.createShader(t);
  e.shaderSource(r, n);
  e.compileShader(r);
  return r;
}
wr.prototype.setValue = function (e, t, n, r) {
  var i = this.map[t];
  if (void 0 !== i) {
    i.setValue(e, n, r);
  }
};
wr.prototype.setOptional = function (e, t, n) {
  var r = t[n];
  if (void 0 !== r) {
    this.setValue(e, n, r);
  }
};
wr.upload = function (e, t, n, r) {
  for (var i = 0, a = t.length; i !== a; ++i) {
    var o = t[i];
    var s = n[o.id];
    if (!1 !== s.needsUpdate) {
      o.setValue(e, s.value, r);
    }
  }
};
wr.seqWithValue = function (e, t) {
  for (var n = [], r = 0, i = e.length; r !== i; ++r) {
    var a = e[r];
    if (a.id in t) {
      n.push(a);
    }
  }
  return n;
};
var Sr = 0;
function Tr(e) {
  switch (e) {
    case 3e3:
      return ["Linear", "( value )"];
    case m:
      return ["sRGB", "( value )"];
    case 3002:
      return ["RGBE", "( value )"];
    case 3004:
      return ["RGBM", "( value, 7.0 )"];
    case 3005:
      return ["RGBM", "( value, 16.0 )"];
    case 3006:
      return ["RGBD", "( value, 256.0 )"];
    case 3007:
      return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
    case 3003:
      return ["LogLuv", "( value )"];
    default:
      console.warn("THREE.WebGLProgram: Unsupported encoding:", e);
      return ["Linear", "( value )"];
  }
}
function Er(e, t, n) {
  var r = e.getShaderParameter(t, 35713);
  var i = e.getShaderInfoLog(t).trim();
  return r && "" === i ? "" : "THREE.WebGLShader: gl.getShaderInfoLog() " + n + "\n" + i + function (e) {
    for (var t = e.split("\n"), n = 0; n < t.length; n++) {
      t[n] = n + 1 + ": " + t[n];
    }
    return t.join("\n");
  }(e.getShaderSource(t));
}
function Ar(e, t) {
  var n = Tr(t);
  return "vec4 " + e + "( vec4 value ) { return " + n[0] + "ToLinear" + n[1] + "; }";
}
function Lr(e, t) {
  var n = Tr(t);
  return "vec4 " + e + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }";
}
function Rr(e, t) {
  var n;
  switch (t) {
    case 1:
      n = "Linear";
      break;
    case 2:
      n = "Reinhard";
      break;
    case 3:
      n = "OptimizedCineon";
      break;
    case 4:
      n = "ACESFilmic";
      break;
    case 5:
      n = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t);
      n = "Linear";
  }
  return "vec3 " + e + "( vec3 color ) { return " + n + "ToneMapping( color ); }";
}
function Pr(e) {
  return "" !== e;
}
function Cr(e, t) {
  return e.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function Ir(e, t) {
  return e.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
var Or = /^[ \t]*#include +<([\w\d./]+)>/gm;
function kr(e) {
  return e.replace(Or, Nr);
}
function Nr(e, t) {
  var n = cn[t];
  if (void 0 === n) {
    throw new Error("Can not resolve #include <" + t + ">");
  }
  return kr(n);
}
var Dr = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g;
var Ur = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Br(e) {
  return e.replace(Ur, Fr).replace(Dr, zr);
}
function zr(e, t, n, r) {
  console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead.");
  return Fr(e, t, n, r);
}
function Fr(e, t, n, r) {
  for (var i = "", a = parseInt(t); a < parseInt(n); a++) {
    i += r.replace(/\[\s*i\s*\]/g, "[ " + a + " ]").replace(/UNROLLED_LOOP_INDEX/g, a);
  }
  return i;
}
function Hr(e) {
  var t = "precision " + e.precision + " float;\nprecision " + e.precision + " int;";
  if ("highp" === e.precision) {
    t += "\n#define HIGH_PRECISION";
  } else {
    if ("mediump" === e.precision) {
      t += "\n#define MEDIUM_PRECISION";
    } else {
      if ("lowp" === e.precision) {
        t += "\n#define LOW_PRECISION";
      }
    }
  }
  return t;
}
function Gr(e, t, n, r) {
  var i;
  var a;
  var o = e.getContext();
  var s = n.defines;
  var l = n.vertexShader;
  var c = n.fragmentShader;
  var u = function (e) {
    var t = "SHADOWMAP_TYPE_BASIC";
    if (1 === e.shadowMapType) {
      t = "SHADOWMAP_TYPE_PCF";
    } else {
      if (2 === e.shadowMapType) {
        t = "SHADOWMAP_TYPE_PCF_SOFT";
      } else {
        if (3 === e.shadowMapType) {
          t = "SHADOWMAP_TYPE_VSM";
        }
      }
    }
    return t;
  }(n);
  var h = function (e) {
    var t = "ENVMAP_TYPE_CUBE";
    if (e.envMap) {
      switch (e.envMapMode) {
        case 301:
        case 302:
          t = "ENVMAP_TYPE_CUBE";
          break;
        case 306:
        case 307:
          t = "ENVMAP_TYPE_CUBE_UV";
      }
    }
    return t;
  }(n);
  var d = function (e) {
    var t = "ENVMAP_MODE_REFLECTION";
    if (e.envMap) {
      switch (e.envMapMode) {
        case 302:
        case 307:
          t = "ENVMAP_MODE_REFRACTION";
      }
    }
    return t;
  }(n);
  var p = function (e) {
    var t = "ENVMAP_BLENDING_NONE";
    if (e.envMap) {
      switch (e.combine) {
        case 0:
          t = "ENVMAP_BLENDING_MULTIPLY";
          break;
        case 1:
          t = "ENVMAP_BLENDING_MIX";
          break;
        case 2:
          t = "ENVMAP_BLENDING_ADD";
      }
    }
    return t;
  }(n);
  var f = e.gammaFactor > 0 ? e.gammaFactor : 1;
  var m = n.isWebGL2 ? "" : function (e) {
    return [e.extensionDerivatives || e.envMapCubeUV || e.bumpMap || e.tangentSpaceNormalMap || e.clearcoatNormalMap || e.flatShading || "physical" === e.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "", (e.extensionFragDepth || e.logarithmicDepthBuffer) && e.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", e.extensionDrawBuffers && e.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (e.extensionShaderTextureLOD || e.envMap) && e.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(Pr).join("\n");
  }(n);
  var v = function (e) {
    var t = [];
    for (var n in e) {
      var r = e[n];
      if (!1 !== r) {
        t.push("#define " + n + " " + r);
      }
    }
    return t.join("\n");
  }(s);
  var g = o.createProgram();
  var y = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
  if (n.isRawShaderMaterial) {
    if ((i = [v].filter(Pr).join("\n")).length > 0) {
      i += "\n";
    }
    if ((a = [m, v].filter(Pr).join("\n")).length > 0) {
      a += "\n";
    }
  } else {
    i = [Hr(n), "#define SHADER_NAME " + n.shaderName, v, n.instancing ? "#define USE_INSTANCING" : "", n.instancingColor ? "#define USE_INSTANCING_COLOR" : "", n.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + f, "#define MAX_BONES " + n.maxBones, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + d : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.displacementMap && n.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors ? "#define USE_COLOR" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.skinning ? "#define USE_SKINNING" : "", n.useVertexTexture ? "#define BONE_TEXTURE" : "", n.morphTargets ? "#define USE_MORPHTARGETS" : "", n.morphNormals && !1 === n.flatShading ? "#define USE_MORPHNORMALS" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + u : "", n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "\tattribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "\tattribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "\tattribute vec4 tangent;", "#endif", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(Pr).join("\n");
    a = [m, Hr(n), "#define SHADER_NAME " + n.shaderName, v, n.alphaTest ? "#define ALPHATEST " + n.alphaTest + (n.alphaTest % 1 ? "" : ".0") : "", "#define GAMMA_FACTOR " + f, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.matcap ? "#define USE_MATCAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + h : "", n.envMap ? "#define " + d : "", n.envMap ? "#define " + p : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.sheen ? "#define USE_SHEEN" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.gradientMap ? "#define USE_GRADIENTMAP" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + u : "", n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", n.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", (n.extensionShaderTextureLOD || n.envMap) && n.rendererExtensionShaderTextureLod ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", 0 !== n.toneMapping ? "#define TONE_MAPPING" : "", 0 !== n.toneMapping ? cn.tonemapping_pars_fragment : "", 0 !== n.toneMapping ? Rr("toneMapping", n.toneMapping) : "", n.dithering ? "#define DITHERING" : "", cn.encodings_pars_fragment, n.map ? Ar("mapTexelToLinear", n.mapEncoding) : "", n.matcap ? Ar("matcapTexelToLinear", n.matcapEncoding) : "", n.envMap ? Ar("envMapTexelToLinear", n.envMapEncoding) : "", n.emissiveMap ? Ar("emissiveMapTexelToLinear", n.emissiveMapEncoding) : "", n.lightMap ? Ar("lightMapTexelToLinear", n.lightMapEncoding) : "", Lr("linearToOutputTexel", n.outputEncoding), n.depthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", "\n"].filter(Pr).join("\n");
  }
  l = Ir(l = Cr(l = kr(l), n), n);
  c = Ir(c = Cr(c = kr(c), n), n);
  l = Br(l);
  c = Br(c);
  if (n.isWebGL2 && !0 !== n.isRawShaderMaterial) {
    y = "#version 300 es\n";
    i = ["#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + i;
    a = ["#define varying in", "300 es" === n.glslVersion ? "" : "out highp vec4 pc_fragColor;", "300 es" === n.glslVersion ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + a;
  }
  var x;
  var b;
  var _ = y + a + c;
  var w = Mr(o, 35633, y + i + l);
  var M = Mr(o, 35632, _);
  o.attachShader(g, w);
  o.attachShader(g, M);
  if (void 0 !== n.index0AttributeName) {
    o.bindAttribLocation(g, 0, n.index0AttributeName);
  } else {
    if (!0 === n.morphTargets) {
      o.bindAttribLocation(g, 0, "position");
    }
  }
  o.linkProgram(g);
  if (e.debug.checkShaderErrors) {
    var S = o.getProgramInfoLog(g).trim();
    var T = o.getShaderInfoLog(w).trim();
    var E = o.getShaderInfoLog(M).trim();
    var A = !0;
    var L = !0;
    if (!1 === o.getProgramParameter(g, 35714)) {
      A = !1;
      var R = Er(o, w, "vertex");
      var P = Er(o, M, "fragment");
      console.error("THREE.WebGLProgram: shader error: ", o.getError(), "35715", o.getProgramParameter(g, 35715), "gl.getProgramInfoLog", S, R, P);
    } else if ("" !== S) {
      console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", S);
    } else {
      if (!("" !== T && "" !== E)) {
        L = !1;
      }
    }
    if (L) {
      this.diagnostics = {
        runnable: A,
        programLog: S,
        vertexShader: {
          log: T,
          prefix: i
        },
        fragmentShader: {
          log: E,
          prefix: a
        }
      };
    }
  }
  o.deleteShader(w);
  o.deleteShader(M);
  this.getUniforms = function () {
    if (void 0 === x) {
      x = new wr(o, g);
    }
    return x;
  };
  this.getAttributes = function () {
    if (void 0 === b) {
      b = function (e, t) {
        for (var n = {}, r = e.getProgramParameter(t, 35721), i = 0; i < r; i++) {
          var a = e.getActiveAttrib(t, i).name;
          n[a] = e.getAttribLocation(t, a);
        }
        return n;
      }(o, g);
    }
    return b;
  };
  this.destroy = function () {
    r.releaseStatesOfProgram(this);
    o.deleteProgram(g);
    this.program = void 0;
  };
  this.name = n.shaderName;
  this.id = Sr++;
  this.cacheKey = t;
  this.usedTimes = 1;
  this.program = g;
  this.vertexShader = w;
  this.fragmentShader = M;
  return this;
}
function jr(e, t, n, r, i, a) {
  var o = [];
  var s = r.isWebGL2;
  var l = r.logarithmicDepthBuffer;
  var c = r.floatVertexTextures;
  var u = r.maxVertexUniforms;
  var h = r.vertexTextures;
  var d = r.precision;
  var p = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  var f = ["precision", "isWebGL2", "supportsVertexTextures", "outputEncoding", "instancing", "instancingColor", "map", "mapEncoding", "matcap", "matcapEncoding", "envMap", "envMapMode", "envMapEncoding", "envMapCubeUV", "lightMap", "lightMapEncoding", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "objectSpaceNormalMap", "tangentSpaceNormalMap", "clearcoatMap", "clearcoatRoughnessMap", "clearcoatNormalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "vertexTangents", "vertexUvs", "uvsVertexOnly", "fog", "useFog", "fogExp2", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "numDirLightShadows", "numPointLightShadows", "numSpotLightShadows", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering", "sheen", "transmissionMap"];
  function m(e) {
    var t;
    if (e) {
      if (e.isTexture) {
        t = e.encoding;
      } else {
        if (e.isWebGLRenderTarget) {
          console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead.");
          t = e.texture.encoding;
        }
      }
    } else {
      t = 3e3;
    }
    return t;
  }
  return {
    getParameters: function (i, o, f, v, g) {
      var y;
      var x;
      var b = v.fog;
      var _ = i.isMeshStandardMaterial ? v.environment : null;
      var w = t.get(i.envMap || _);
      var M = p[i.type];
      var S = g.isSkinnedMesh ? function (e) {
        var t = e.skeleton.bones;
        if (c) {
          return 1024;
        }
        var n = u;
        var r = Math.floor((n - 20) / 4);
        var i = Math.min(r, t.length);
        return i < t.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + t.length + " bones. This GPU supports " + i + "."), 0) : i;
      }(g) : 0;
      if (null !== i.precision && (d = r.getMaxPrecision(i.precision)) !== i.precision) {
        console.warn("THREE.WebGLProgram.getParameters:", i.precision, "not supported, using", d, "instead.");
      }
      if (M) {
        var T = hn[M];
        y = T.vertexShader;
        x = T.fragmentShader;
      } else {
        y = i.vertexShader;
        x = i.fragmentShader;
      }
      var E = e.getRenderTarget();
      return {
        isWebGL2: s,
        shaderID: M,
        shaderName: i.type,
        vertexShader: y,
        fragmentShader: x,
        defines: i.defines,
        isRawShaderMaterial: !0 === i.isRawShaderMaterial,
        glslVersion: i.glslVersion,
        precision: d,
        instancing: !0 === g.isInstancedMesh,
        instancingColor: !0 === g.isInstancedMesh && null !== g.instanceColor,
        supportsVertexTextures: h,
        outputEncoding: null !== E ? m(E.texture) : e.outputEncoding,
        map: !!i.map,
        mapEncoding: m(i.map),
        matcap: !!i.matcap,
        matcapEncoding: m(i.matcap),
        envMap: !!w,
        envMapMode: w && w.mapping,
        envMapEncoding: m(w),
        envMapCubeUV: !!w && (306 === w.mapping || 307 === w.mapping),
        lightMap: !!i.lightMap,
        lightMapEncoding: m(i.lightMap),
        aoMap: !!i.aoMap,
        emissiveMap: !!i.emissiveMap,
        emissiveMapEncoding: m(i.emissiveMap),
        bumpMap: !!i.bumpMap,
        normalMap: !!i.normalMap,
        objectSpaceNormalMap: 1 === i.normalMapType,
        tangentSpaceNormalMap: 0 === i.normalMapType,
        clearcoatMap: !!i.clearcoatMap,
        clearcoatRoughnessMap: !!i.clearcoatRoughnessMap,
        clearcoatNormalMap: !!i.clearcoatNormalMap,
        displacementMap: !!i.displacementMap,
        roughnessMap: !!i.roughnessMap,
        metalnessMap: !!i.metalnessMap,
        specularMap: !!i.specularMap,
        alphaMap: !!i.alphaMap,
        gradientMap: !!i.gradientMap,
        sheen: !!i.sheen,
        transmissionMap: !!i.transmissionMap,
        combine: i.combine,
        vertexTangents: i.normalMap && i.vertexTangents,
        vertexColors: i.vertexColors,
        vertexUvs: !!i.map || !!i.bumpMap || !!i.normalMap || !!i.specularMap || !!i.alphaMap || !!i.emissiveMap || !!i.roughnessMap || !!i.metalnessMap || !!i.clearcoatMap || !!i.clearcoatRoughnessMap || !!i.clearcoatNormalMap || !!i.displacementMap || !!i.transmissionMap,
        uvsVertexOnly: !(i.map || i.bumpMap || i.normalMap || i.specularMap || i.alphaMap || i.emissiveMap || i.roughnessMap || i.metalnessMap || i.clearcoatNormalMap || i.transmissionMap) && !!i.displacementMap,
        fog: !!b,
        useFog: i.fog,
        fogExp2: b && b.isFogExp2,
        flatShading: i.flatShading,
        sizeAttenuation: i.sizeAttenuation,
        logarithmicDepthBuffer: l,
        skinning: i.skinning && S > 0,
        maxBones: S,
        useVertexTexture: c,
        morphTargets: i.morphTargets,
        morphNormals: i.morphNormals,
        maxMorphTargets: e.maxMorphTargets,
        maxMorphNormals: e.maxMorphNormals,
        numDirLights: o.directional.length,
        numPointLights: o.point.length,
        numSpotLights: o.spot.length,
        numRectAreaLights: o.rectArea.length,
        numHemiLights: o.hemi.length,
        numDirLightShadows: o.directionalShadowMap.length,
        numPointLightShadows: o.pointShadowMap.length,
        numSpotLightShadows: o.spotShadowMap.length,
        numClippingPlanes: a.numPlanes,
        numClipIntersection: a.numIntersection,
        dithering: i.dithering,
        shadowMapEnabled: e.shadowMap.enabled && f.length > 0,
        shadowMapType: e.shadowMap.type,
        toneMapping: i.toneMapped ? e.toneMapping : 0,
        physicallyCorrectLights: e.physicallyCorrectLights,
        premultipliedAlpha: i.premultipliedAlpha,
        alphaTest: i.alphaTest,
        doubleSided: 2 === i.side,
        flipSided: 1 === i.side,
        depthPacking: void 0 !== i.depthPacking && i.depthPacking,
        index0AttributeName: i.index0AttributeName,
        extensionDerivatives: i.extensions && i.extensions.derivatives,
        extensionFragDepth: i.extensions && i.extensions.fragDepth,
        extensionDrawBuffers: i.extensions && i.extensions.drawBuffers,
        extensionShaderTextureLOD: i.extensions && i.extensions.shaderTextureLOD,
        rendererExtensionFragDepth: s || n.has("EXT_frag_depth"),
        rendererExtensionDrawBuffers: s || n.has("WEBGL_draw_buffers"),
        rendererExtensionShaderTextureLod: s || n.has("EXT_shader_texture_lod"),
        customProgramCacheKey: i.customProgramCacheKey()
      };
    },
    getProgramCacheKey: function (t) {
      var n = [];
      if (t.shaderID) {
        n.push(t.shaderID);
      } else {
        n.push(t.fragmentShader);
        n.push(t.vertexShader);
      }
      if (void 0 !== t.defines) {
        for (var r in t.defines) {
          n.push(r);
          n.push(t.defines[r]);
        }
      }
      if (!1 === t.isRawShaderMaterial) {
        for (var i = 0; i < f.length; i++) {
          n.push(t[f[i]]);
        }
        n.push(e.outputEncoding);
        n.push(e.gammaFactor);
      }
      n.push(t.customProgramCacheKey);
      return n.join();
    },
    getUniforms: function (e) {
      var t;
      var n = p[e.type];
      if (n) {
        var r = hn[n];
        t = Yt.clone(r.uniforms);
      } else {
        t = e.uniforms;
      }
      return t;
    },
    acquireProgram: function (t, n) {
      for (var r, a = 0, s = o.length; a < s; a++) {
        var l = o[a];
        if (l.cacheKey === n) {
          ++(r = l).usedTimes;
          break;
        }
      }
      if (void 0 === r) {
        r = new Gr(e, n, t, i);
        o.push(r);
      }
      return r;
    },
    releaseProgram: function (e) {
      if (0 === --e.usedTimes) {
        var t = o.indexOf(e);
        o[t] = o[o.length - 1];
        o.pop();
        e.destroy();
      }
    },
    programs: o
  };
}
function Vr() {
  var e = new WeakMap();
  return {
    get: function (t) {
      var n = e.get(t);
      if (void 0 === n) {
        n = {};
        e.set(t, n);
      }
      return n;
    },
    remove: function (t) {
      e.delete(t);
    },
    update: function (t, n, r) {
      e.get(t)[n] = r;
    },
    dispose: function () {
      e = new WeakMap();
    }
  };
}
function Wr(e, t) {
  return e.groupOrder !== t.groupOrder ? e.groupOrder - t.groupOrder : e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.program !== t.program ? e.program.id - t.program.id : e.material.id !== t.material.id ? e.material.id - t.material.id : e.z !== t.z ? e.z - t.z : e.id - t.id;
}
function qr(e, t) {
  return e.groupOrder !== t.groupOrder ? e.groupOrder - t.groupOrder : e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.z !== t.z ? t.z - e.z : e.id - t.id;
}
function Xr(e) {
  var t = [];
  var n = 0;
  var r = [];
  var i = [];
  var a = {
    id: -1
  };
  function o(r, i, o, s, l, c) {
    var u = t[n];
    var h = e.get(o);
    if (void 0 === u) {
      u = {
        id: r.id,
        object: r,
        geometry: i,
        material: o,
        program: h.program || a,
        groupOrder: s,
        renderOrder: r.renderOrder,
        z: l,
        group: c
      };
      t[n] = u;
    } else {
      u.id = r.id;
      u.object = r;
      u.geometry = i;
      u.material = o;
      u.program = h.program || a;
      u.groupOrder = s;
      u.renderOrder = r.renderOrder;
      u.z = l;
      u.group = c;
    }
    n++;
    return u;
  }
  return {
    opaque: r,
    transparent: i,
    init: function () {
      n = 0;
      r.length = 0;
      i.length = 0;
    },
    push: function (e, t, n, a, s, l) {
      var c = o(e, t, n, a, s, l);
      (!0 === n.transparent ? i : r).push(c);
    },
    unshift: function (e, t, n, a, s, l) {
      var c = o(e, t, n, a, s, l);
      (!0 === n.transparent ? i : r).unshift(c);
    },
    finish: function () {
      for (var e = n, r = t.length; e < r; e++) {
        var i = t[e];
        if (null === i.id) {
          break;
        }
        i.id = null;
        i.object = null;
        i.geometry = null;
        i.material = null;
        i.program = null;
        i.group = null;
      }
    },
    sort: function (e, t) {
      if (r.length > 1) {
        r.sort(e || Wr);
      }
      if (i.length > 1) {
        i.sort(t || qr);
      }
    }
  };
}
function Yr(e) {
  var t = new WeakMap();
  return {
    get: function (n, r) {
      var i;
      var a = t.get(n);
      if (void 0 === a) {
        i = new Xr(e);
        t.set(n, new WeakMap());
        t.get(n).set(r, i);
      } else {
        if (void 0 === (i = a.get(r))) {
          i = new Xr(e);
          a.set(r, i);
        }
      }
      return i;
    },
    dispose: function () {
      t = new WeakMap();
    }
  };
}
function Zr() {
  var e = {};
  return {
    get: function (t) {
      if (void 0 !== e[t.id]) {
        return e[t.id];
      }
      var n;
      switch (t.type) {
        case "DirectionalLight":
          n = {
            direction: new C(),
            color: new Qe()
          };
          break;
        case "SpotLight":
          n = {
            position: new C(),
            direction: new C(),
            color: new Qe(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          n = {
            position: new C(),
            color: new Qe(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          n = {
            direction: new C(),
            skyColor: new Qe(),
            groundColor: new Qe()
          };
          break;
        case "RectAreaLight":
          n = {
            color: new Qe(),
            position: new C(),
            halfWidth: new C(),
            halfHeight: new C()
          };
      }
      e[t.id] = n;
      return n;
    }
  };
}
var Jr = 0;
function Kr(e, t) {
  return (t.castShadow ? 1 : 0) - (e.castShadow ? 1 : 0);
}
function Qr(e, t) {
  for (var n = new Zr(), r = function () {
      var e = {};
      return {
        get: function (t) {
          if (void 0 !== e[t.id]) {
            return e[t.id];
          }
          var n;
          switch (t.type) {
            case "DirectionalLight":
            case "SpotLight":
              n = {
                shadowBias: 0,
                shadowNormalBias: 0,
                shadowRadius: 1,
                shadowMapSize: new w()
              };
              break;
            case "PointLight":
              n = {
                shadowBias: 0,
                shadowNormalBias: 0,
                shadowRadius: 1,
                shadowMapSize: new w(),
                shadowCameraNear: 1,
                shadowCameraFar: 1e3
              };
          }
          e[t.id] = n;
          return n;
        }
      };
    }(), i = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotShadow: [],
      spotShadowMap: [],
      spotShadowMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: []
    }, a = 0; a < 9; a++) {
    i.probe.push(new C());
  }
  var o = new C();
  var s = new ae();
  var l = new ae();
  return {
    setup: function (a, c, u) {
      for (var h = 0, d = 0, p = 0, f = 0; f < 9; f++) {
        i.probe[f].set(0, 0, 0);
      }
      var m = 0;
      var v = 0;
      var g = 0;
      var y = 0;
      var x = 0;
      var b = 0;
      var _ = 0;
      var w = 0;
      var M = u.matrixWorldInverse;
      a.sort(Kr);
      for (var S = 0, T = a.length; S < T; S++) {
        var E = a[S];
        var A = E.color;
        var L = E.intensity;
        var R = E.distance;
        var P = E.shadow && E.shadow.map ? E.shadow.map.texture : null;
        if (E.isAmbientLight) {
          h += A.r * L;
          d += A.g * L;
          p += A.b * L;
        } else if (E.isLightProbe) {
          for (var C = 0; C < 9; C++) {
            i.probe[C].addScaledVector(E.sh.coefficients[C], L);
          }
        } else if (E.isDirectionalLight) {
          var I = n.get(E);
          I.color.copy(E.color).multiplyScalar(E.intensity);
          I.direction.setFromMatrixPosition(E.matrixWorld);
          o.setFromMatrixPosition(E.target.matrixWorld);
          I.direction.sub(o);
          I.direction.transformDirection(M);
          if (E.castShadow) {
            var O = E.shadow;
            var k = r.get(E);
            k.shadowBias = O.bias;
            k.shadowNormalBias = O.normalBias;
            k.shadowRadius = O.radius;
            k.shadowMapSize = O.mapSize;
            i.directionalShadow[m] = k;
            i.directionalShadowMap[m] = P;
            i.directionalShadowMatrix[m] = E.shadow.matrix;
            b++;
          }
          i.directional[m] = I;
          m++;
        } else if (E.isSpotLight) {
          var N = n.get(E);
          N.position.setFromMatrixPosition(E.matrixWorld);
          N.position.applyMatrix4(M);
          N.color.copy(A).multiplyScalar(L);
          N.distance = R;
          N.direction.setFromMatrixPosition(E.matrixWorld);
          o.setFromMatrixPosition(E.target.matrixWorld);
          N.direction.sub(o);
          N.direction.transformDirection(M);
          N.coneCos = Math.cos(E.angle);
          N.penumbraCos = Math.cos(E.angle * (1 - E.penumbra));
          N.decay = E.decay;
          if (E.castShadow) {
            var D = E.shadow;
            var U = r.get(E);
            U.shadowBias = D.bias;
            U.shadowNormalBias = D.normalBias;
            U.shadowRadius = D.radius;
            U.shadowMapSize = D.mapSize;
            i.spotShadow[g] = U;
            i.spotShadowMap[g] = P;
            i.spotShadowMatrix[g] = E.shadow.matrix;
            w++;
          }
          i.spot[g] = N;
          g++;
        } else if (E.isRectAreaLight) {
          var B = n.get(E);
          B.color.copy(A).multiplyScalar(L);
          B.position.setFromMatrixPosition(E.matrixWorld);
          B.position.applyMatrix4(M);
          l.identity();
          s.copy(E.matrixWorld);
          s.premultiply(M);
          l.extractRotation(s);
          B.halfWidth.set(.5 * E.width, 0, 0);
          B.halfHeight.set(0, .5 * E.height, 0);
          B.halfWidth.applyMatrix4(l);
          B.halfHeight.applyMatrix4(l);
          i.rectArea[y] = B;
          y++;
        } else if (E.isPointLight) {
          var z = n.get(E);
          z.position.setFromMatrixPosition(E.matrixWorld);
          z.position.applyMatrix4(M);
          z.color.copy(E.color).multiplyScalar(E.intensity);
          z.distance = E.distance;
          z.decay = E.decay;
          if (E.castShadow) {
            var F = E.shadow;
            var H = r.get(E);
            H.shadowBias = F.bias;
            H.shadowNormalBias = F.normalBias;
            H.shadowRadius = F.radius;
            H.shadowMapSize = F.mapSize;
            H.shadowCameraNear = F.camera.near;
            H.shadowCameraFar = F.camera.far;
            i.pointShadow[v] = H;
            i.pointShadowMap[v] = P;
            i.pointShadowMatrix[v] = E.shadow.matrix;
            _++;
          }
          i.point[v] = z;
          v++;
        } else if (E.isHemisphereLight) {
          var G = n.get(E);
          G.direction.setFromMatrixPosition(E.matrixWorld);
          G.direction.transformDirection(M);
          G.direction.normalize();
          G.skyColor.copy(E.color).multiplyScalar(L);
          G.groundColor.copy(E.groundColor).multiplyScalar(L);
          i.hemi[x] = G;
          x++;
        }
      }
      if (y > 0) {
        if (t.isWebGL2 || !0 === e.has("OES_texture_float_linear")) {
          i.rectAreaLTC1 = un.LTC_FLOAT_1;
          i.rectAreaLTC2 = un.LTC_FLOAT_2;
        } else {
          if (!0 === e.has("OES_texture_half_float_linear")) {
            i.rectAreaLTC1 = un.LTC_HALF_1;
            i.rectAreaLTC2 = un.LTC_HALF_2;
          } else {
            console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.");
          }
        }
      }
      i.ambient[0] = h;
      i.ambient[1] = d;
      i.ambient[2] = p;
      var j = i.hash;
      if (!(j.directionalLength === m && j.pointLength === v && j.spotLength === g && j.rectAreaLength === y && j.hemiLength === x && j.numDirectionalShadows === b && j.numPointShadows === _ && j.numSpotShadows === w)) {
        i.directional.length = m;
        i.spot.length = g;
        i.rectArea.length = y;
        i.point.length = v;
        i.hemi.length = x;
        i.directionalShadow.length = b;
        i.directionalShadowMap.length = b;
        i.pointShadow.length = _;
        i.pointShadowMap.length = _;
        i.spotShadow.length = w;
        i.spotShadowMap.length = w;
        i.directionalShadowMatrix.length = b;
        i.pointShadowMatrix.length = _;
        i.spotShadowMatrix.length = w;
        j.directionalLength = m;
        j.pointLength = v;
        j.spotLength = g;
        j.rectAreaLength = y;
        j.hemiLength = x;
        j.numDirectionalShadows = b;
        j.numPointShadows = _;
        j.numSpotShadows = w;
        i.version = Jr++;
      }
    },
    state: i
  };
}
function $r(e, t) {
  var n = new Qr(e, t);
  var r = [];
  var i = [];
  return {
    init: function () {
      r.length = 0;
      i.length = 0;
    },
    state: {
      lightsArray: r,
      shadowsArray: i,
      lights: n
    },
    setupLights: function (e) {
      n.setup(r, i, e);
    },
    pushLight: function (e) {
      r.push(e);
    },
    pushShadow: function (e) {
      i.push(e);
    }
  };
}
function ei(e, t) {
  var n = new WeakMap();
  return {
    get: function (r, i) {
      var a;
      if (!1 === n.has(r)) {
        a = new $r(e, t);
        n.set(r, new WeakMap());
        n.get(r).set(i, a);
      } else {
        if (!1 === n.get(r).has(i)) {
          a = new $r(e, t);
          n.get(r).set(i, a);
        } else {
          a = n.get(r).get(i);
        }
      }
      return a;
    },
    dispose: function () {
      n = new WeakMap();
    }
  };
}
function ti(e) {
  tt.call(this);
  this.type = "MeshDepthMaterial";
  this.depthPacking = 3200;
  this.skinning = !1;
  this.morphTargets = !1;
  this.map = null;
  this.alphaMap = null;
  this.displacementMap = null;
  this.displacementScale = 1;
  this.displacementBias = 0;
  this.wireframe = !1;
  this.wireframeLinewidth = 1;
  this.fog = !1;
  this.setValues(e);
}
function ni(e) {
  tt.call(this);
  this.type = "MeshDistanceMaterial";
  this.referencePosition = new C();
  this.nearDistance = 1;
  this.farDistance = 1e3;
  this.skinning = !1;
  this.morphTargets = !1;
  this.map = null;
  this.alphaMap = null;
  this.displacementMap = null;
  this.displacementScale = 1;
  this.displacementBias = 0;
  this.fog = !1;
  this.setValues(e);
}
ti.prototype = Object.create(tt.prototype);
ti.prototype.constructor = ti;
ti.prototype.isMeshDepthMaterial = !0;
ti.prototype.copy = function (e) {
  tt.prototype.copy.call(this, e);
  this.depthPacking = e.depthPacking;
  this.skinning = e.skinning;
  this.morphTargets = e.morphTargets;
  this.map = e.map;
  this.alphaMap = e.alphaMap;
  this.displacementMap = e.displacementMap;
  this.displacementScale = e.displacementScale;
  this.displacementBias = e.displacementBias;
  this.wireframe = e.wireframe;
  this.wireframeLinewidth = e.wireframeLinewidth;
  return this;
};
ni.prototype = Object.create(tt.prototype);
ni.prototype.constructor = ni;
ni.prototype.isMeshDistanceMaterial = !0;
ni.prototype.copy = function (e) {
  tt.prototype.copy.call(this, e);
  this.referencePosition.copy(e.referencePosition);
  this.nearDistance = e.nearDistance;
  this.farDistance = e.farDistance;
  this.skinning = e.skinning;
  this.morphTargets = e.morphTargets;
  this.map = e.map;
  this.alphaMap = e.alphaMap;
  this.displacementMap = e.displacementMap;
  this.displacementScale = e.displacementScale;
  this.displacementBias = e.displacementBias;
  return this;
};
function ri(e, t, n) {
  var r = new an();
  var i = new w();
  var a = new w();
  var o = new A();
  var s = [];
  var l = [];
  var c = {};
  var u = {
    0: 1,
    1: 0,
    2: 2
  };
  var h = new Zt({
    defines: {
      SAMPLE_RATE: 2 / 8,
      HALF_SAMPLE_RATE: 1 / 8
    },
    uniforms: {
      shadow_pass: {
        value: null
      },
      resolution: {
        value: new w()
      },
      radius: {
        value: 4
      }
    },
    vertexShader: "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",
    fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );\n\tfor ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n\t\t#ifdef HORIZONAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean * HALF_SAMPLE_RATE;\n\tsquared_mean = squared_mean * HALF_SAMPLE_RATE;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}"
  });
  var d = h.clone();
  d.defines.HORIZONAL_PASS = 1;
  var p = new St();
  p.setAttribute("position", new at(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3));
  var f = new Gt(p, h);
  var m = this;
  function v(n, r) {
    var i = t.update(f);
    h.uniforms.shadow_pass.value = n.map.texture;
    h.uniforms.resolution.value = n.mapSize;
    h.uniforms.radius.value = n.radius;
    e.setRenderTarget(n.mapPass);
    e.clear();
    e.renderBufferDirect(r, null, i, h, f, null);
    d.uniforms.shadow_pass.value = n.mapPass.texture;
    d.uniforms.resolution.value = n.mapSize;
    d.uniforms.radius.value = n.radius;
    e.setRenderTarget(n.map);
    e.clear();
    e.renderBufferDirect(r, null, i, d, f, null);
  }
  function g(e, t, n) {
    var r = e << 0 | t << 1 | n << 2;
    var i = s[r];
    if (void 0 === i) {
      i = new ti({
        depthPacking: 3201,
        morphTargets: e,
        skinning: t
      });
      s[r] = i;
    }
    return i;
  }
  function y(e, t, n) {
    var r = e << 0 | t << 1 | n << 2;
    var i = l[r];
    if (void 0 === i) {
      i = new ni({
        morphTargets: e,
        skinning: t
      });
      l[r] = i;
    }
    return i;
  }
  function x(t, n, r, i, a, o, s) {
    var l = null;
    var h = g;
    var d = t.customDepthMaterial;
    if (!0 === i.isPointLight) {
      h = y;
      d = t.customDistanceMaterial;
    }
    if (void 0 === d) {
      var p = !1;
      if (!0 === r.morphTargets) {
        p = n.morphAttributes && n.morphAttributes.position && n.morphAttributes.position.length > 0;
      }
      var f = !1;
      if (!0 === t.isSkinnedMesh) {
        if (!0 === r.skinning) {
          f = !0;
        } else {
          console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", t);
        }
      }
      l = h(p, f, !0 === t.isInstancedMesh);
    } else {
      l = d;
    }
    if (e.localClippingEnabled && !0 === r.clipShadows && 0 !== r.clippingPlanes.length) {
      var m = l.uuid;
      var v = r.uuid;
      var x = c[m];
      if (void 0 === x) {
        x = {};
        c[m] = x;
      }
      var b = x[v];
      if (void 0 === b) {
        b = l.clone();
        x[v] = b;
      }
      l = b;
    }
    l.visible = r.visible;
    l.wireframe = r.wireframe;
    l.side = 3 === s ? null !== r.shadowSide ? r.shadowSide : r.side : null !== r.shadowSide ? r.shadowSide : u[r.side];
    l.clipShadows = r.clipShadows;
    l.clippingPlanes = r.clippingPlanes;
    l.clipIntersection = r.clipIntersection;
    l.wireframeLinewidth = r.wireframeLinewidth;
    l.linewidth = r.linewidth;
    if (!0 === i.isPointLight && !0 === l.isMeshDistanceMaterial) {
      l.referencePosition.setFromMatrixPosition(i.matrixWorld);
      l.nearDistance = a;
      l.farDistance = o;
    }
    return l;
  }
  function b(n, i, a, o, s) {
    if (!1 !== n.visible) {
      if (n.layers.test(i.layers) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && 3 === s) && (!n.frustumCulled || r.intersectsObject(n))) {
        n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, n.matrixWorld);
        var l = t.update(n);
        var c = n.material;
        if (Array.isArray(c)) {
          for (var u = l.groups, h = 0, d = u.length; h < d; h++) {
            var p = u[h];
            var f = c[p.materialIndex];
            if (f && f.visible) {
              var m = x(n, l, f, o, a.near, a.far, s);
              e.renderBufferDirect(a, null, l, m, n, p);
            }
          }
        } else if (c.visible) {
          var v = x(n, l, c, o, a.near, a.far, s);
          e.renderBufferDirect(a, null, l, v, n, null);
        }
      }
      for (var g = n.children, y = 0, _ = g.length; y < _; y++) {
        b(g[y], i, a, o, s);
      }
    }
  }
  this.enabled = !1;
  this.autoUpdate = !0;
  this.needsUpdate = !1;
  this.type = 1;
  this.render = function (t, s, l) {
    if (!1 !== m.enabled && (!1 !== m.autoUpdate || !1 !== m.needsUpdate) && 0 !== t.length) {
      var c = e.getRenderTarget();
      var u = e.getActiveCubeFace();
      var h = e.getActiveMipmapLevel();
      var d = e.state;
      d.setBlending(0);
      d.buffers.color.setClear(1, 1, 1, 1);
      d.buffers.depth.setTest(!0);
      d.setScissorTest(!1);
      for (var p = 0, f = t.length; p < f; p++) {
        var g = t[p];
        var y = g.shadow;
        if (void 0 !== y) {
          if (!1 !== y.autoUpdate || !1 !== y.needsUpdate) {
            i.copy(y.mapSize);
            var x = y.getFrameExtents();
            i.multiply(x);
            a.copy(y.mapSize);
            if (i.x > n || i.y > n) {
              if (i.x > n) {
                a.x = Math.floor(n / x.x);
                i.x = a.x * x.x;
                y.mapSize.x = a.x;
              }
              if (i.y > n) {
                a.y = Math.floor(n / x.y);
                i.y = a.y * x.y;
                y.mapSize.y = a.y;
              }
            }
            if (null === y.map && !y.isPointLightShadow && 3 === this.type) {
              var _ = {
                minFilter: 1006,
                magFilter: 1006,
                format: 1023
              };
              y.map = new L(i.x, i.y, _);
              y.map.texture.name = g.name + ".shadowMap";
              y.mapPass = new L(i.x, i.y, _);
              y.camera.updateProjectionMatrix();
            }
            if (null === y.map) {
              var w = {
                minFilter: 1003,
                magFilter: 1003,
                format: 1023
              };
              y.map = new L(i.x, i.y, w);
              y.map.texture.name = g.name + ".shadowMap";
              y.camera.updateProjectionMatrix();
            }
            e.setRenderTarget(y.map);
            e.clear();
            for (var M = y.getViewportCount(), S = 0; S < M; S++) {
              var T = y.getViewport(S);
              o.set(a.x * T.x, a.y * T.y, a.x * T.z, a.y * T.w);
              d.viewport(o);
              y.updateMatrices(g, S);
              r = y.getFrustum();
              b(s, l, y.camera, g, this.type);
            }
            if (!(y.isPointLightShadow || 3 !== this.type)) {
              v(y, l);
            }
            y.needsUpdate = !1;
          }
        } else {
          console.warn("THREE.WebGLShadowMap:", g, "has no shadow.");
        }
      }
      m.needsUpdate = !1;
      e.setRenderTarget(c, u, h);
    }
  };
}
function ii(e, t, n) {
  var r;
  var i;
  var a = n.isWebGL2;
  var s = new function () {
    var t = !1;
    var n = new A();
    var r = null;
    var i = new A(0, 0, 0, 0);
    return {
      setMask: function (n) {
        if (!(r === n || t)) {
          e.colorMask(n, n, n, n);
          r = n;
        }
      },
      setLocked: function (e) {
        t = e;
      },
      setClear: function (t, r, a, o, s) {
        if (!0 === s) {
          t *= o;
          r *= o;
          a *= o;
        }
        n.set(t, r, a, o);
        if (!1 === i.equals(n)) {
          e.clearColor(t, r, a, o);
          i.copy(n);
        }
      },
      reset: function () {
        t = !1;
        r = null;
        i.set(-1, 0, 0, 0);
      }
    };
  }();
  var l = new function () {
    var t = !1;
    var n = null;
    var r = null;
    var i = null;
    return {
      setTest: function (e) {
        if (e) {
          U(2929);
        } else {
          B(2929);
        }
      },
      setMask: function (r) {
        if (!(n === r || t)) {
          e.depthMask(r);
          n = r;
        }
      },
      setFunc: function (t) {
        if (r !== t) {
          if (t) {
            switch (t) {
              case 0:
                e.depthFunc(512);
                break;
              case 1:
                e.depthFunc(519);
                break;
              case 2:
                e.depthFunc(513);
                break;
              case 3:
                e.depthFunc(515);
                break;
              case 4:
                e.depthFunc(514);
                break;
              case 5:
                e.depthFunc(518);
                break;
              case 6:
                e.depthFunc(516);
                break;
              case 7:
                e.depthFunc(517);
                break;
              default:
                e.depthFunc(515);
            }
          } else {
            e.depthFunc(515);
          }
          r = t;
        }
      },
      setLocked: function (e) {
        t = e;
      },
      setClear: function (t) {
        if (i !== t) {
          e.clearDepth(t);
          i = t;
        }
      },
      reset: function () {
        t = !1;
        n = null;
        r = null;
        i = null;
      }
    };
  }();
  var c = new function () {
    var t = !1;
    var n = null;
    var r = null;
    var i = null;
    var a = null;
    var o = null;
    var s = null;
    var l = null;
    var c = null;
    return {
      setTest: function (e) {
        if (!t) {
          if (e) {
            U(2960);
          } else {
            B(2960);
          }
        }
      },
      setMask: function (r) {
        if (!(n === r || t)) {
          e.stencilMask(r);
          n = r;
        }
      },
      setFunc: function (t, n, o) {
        if (!(r === t && i === n && a === o)) {
          e.stencilFunc(t, n, o);
          r = t;
          i = n;
          a = o;
        }
      },
      setOp: function (t, n, r) {
        if (!(o === t && s === n && l === r)) {
          e.stencilOp(t, n, r);
          o = t;
          s = n;
          l = r;
        }
      },
      setLocked: function (e) {
        t = e;
      },
      setClear: function (t) {
        if (c !== t) {
          e.clearStencil(t);
          c = t;
        }
      },
      reset: function () {
        t = !1;
        n = null;
        r = null;
        i = null;
        a = null;
        o = null;
        s = null;
        l = null;
        c = null;
      }
    };
  }();
  var u = {};
  var h = null;
  var d = null;
  var p = null;
  var f = null;
  var m = null;
  var v = null;
  var g = null;
  var y = null;
  var x = null;
  var b = !1;
  var _ = null;
  var w = null;
  var M = null;
  var S = null;
  var T = null;
  var E = e.getParameter(35661);
  var L = !1;
  var R = 0;
  var P = e.getParameter(7938);
  if (-1 !== P.indexOf("WebGL")) {
    R = parseFloat(/^WebGL\ ([0-9])/.exec(P)[1]);
    L = R >= 1;
  } else {
    if (-1 !== P.indexOf("OpenGL ES")) {
      R = parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(P)[1]);
      L = R >= 2;
    }
  }
  var C = null;
  var I = {};
  var O = new A();
  var k = new A();
  function N(t, n, r) {
    var i = new Uint8Array(4);
    var a = e.createTexture();
    e.bindTexture(t, a);
    e.texParameteri(t, 10241, 9728);
    e.texParameteri(t, 10240, 9728);
    for (var o = 0; o < r; o++) {
      e.texImage2D(n + o, 0, 6408, 1, 1, 0, 6408, 5121, i);
    }
    return a;
  }
  var D = {};
  function U(t) {
    if (!0 !== u[t]) {
      e.enable(t);
      u[t] = !0;
    }
  }
  function B(t) {
    if (!1 !== u[t]) {
      e.disable(t);
      u[t] = !1;
    }
  }
  D[3553] = N(3553, 3553, 1);
  D[34067] = N(34067, 34069, 6);
  s.setClear(0, 0, 0, 1);
  l.setClear(1);
  c.setClear(0);
  U(2929);
  l.setFunc(3);
  j(!1);
  V(1);
  U(2884);
  G(0);
  r = {};
  Object(o.a)(r, 100, 32774);
  Object(o.a)(r, 101, 32778);
  Object(o.a)(r, 102, 32779);
  var z = r;
  if (a) {
    z[103] = 32775;
    z[104] = 32776;
  } else {
    var F = t.get("EXT_blend_minmax");
    if (null !== F) {
      z[103] = F.MIN_EXT;
      z[104] = F.MAX_EXT;
    }
  }
  i = {};
  Object(o.a)(i, 200, 0);
  Object(o.a)(i, 201, 1);
  Object(o.a)(i, 202, 768);
  Object(o.a)(i, 204, 770);
  Object(o.a)(i, 210, 776);
  Object(o.a)(i, 208, 774);
  Object(o.a)(i, 206, 772);
  Object(o.a)(i, 203, 769);
  Object(o.a)(i, 205, 771);
  Object(o.a)(i, 209, 775);
  Object(o.a)(i, 207, 773);
  var H = i;
  function G(t, n, r, i, a, o, s, l) {
    if (0 !== t) {
      if (!d) {
        U(3042);
        d = !0;
      }
      if (5 === t) {
        a = a || n;
        o = o || r;
        s = s || i;
        if (!(n === f && a === g)) {
          e.blendEquationSeparate(z[n], z[a]);
          f = n;
          g = a;
        }
        if (!(r === m && i === v && o === y && s === x)) {
          e.blendFuncSeparate(H[r], H[i], H[o], H[s]);
          m = r;
          v = i;
          y = o;
          x = s;
        }
        p = t;
        b = null;
      } else if (t !== p || l !== b) {
        if (!(100 === f && 100 === g)) {
          e.blendEquation(32774);
          f = 100;
          g = 100;
        }
        if (l) {
          switch (t) {
            case 1:
              e.blendFuncSeparate(1, 771, 1, 771);
              break;
            case 2:
              e.blendFunc(1, 1);
              break;
            case 3:
              e.blendFuncSeparate(0, 0, 769, 771);
              break;
            case 4:
              e.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", t);
          }
        } else {
          switch (t) {
            case 1:
              e.blendFuncSeparate(770, 771, 1, 771);
              break;
            case 2:
              e.blendFunc(770, 1);
              break;
            case 3:
              e.blendFunc(0, 769);
              break;
            case 4:
              e.blendFunc(0, 768);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", t);
          }
        }
        m = null;
        v = null;
        y = null;
        x = null;
        p = t;
        b = l;
      }
    } else if (d) {
      B(3042);
      d = !1;
    }
  }
  function j(t) {
    if (_ !== t) {
      if (t) {
        e.frontFace(2304);
      } else {
        e.frontFace(2305);
      }
      _ = t;
    }
  }
  function V(t) {
    if (0 !== t) {
      U(2884);
      if (t !== w) {
        if (1 === t) {
          e.cullFace(1029);
        } else {
          if (2 === t) {
            e.cullFace(1028);
          } else {
            e.cullFace(1032);
          }
        }
      }
    } else {
      B(2884);
    }
    w = t;
  }
  function W(t, n, r) {
    if (t) {
      U(32823);
      if (!(S === n && T === r)) {
        e.polygonOffset(n, r);
        S = n;
        T = r;
      }
    } else {
      B(32823);
    }
  }
  function q(t) {
    if (void 0 === t) {
      t = 33984 + E - 1;
    }
    if (C !== t) {
      e.activeTexture(t);
      C = t;
    }
  }
  return {
    buffers: {
      color: s,
      depth: l,
      stencil: c
    },
    enable: U,
    disable: B,
    useProgram: function (t) {
      return h !== t && (e.useProgram(t), h = t, !0);
    },
    setBlending: G,
    setMaterial: function (e, t) {
      if (2 === e.side) {
        B(2884);
      } else {
        U(2884);
      }
      var n = 1 === e.side;
      if (t) {
        n = !n;
      }
      j(n);
      if (1 === e.blending && !1 === e.transparent) {
        G(0);
      } else {
        G(e.blending, e.blendEquation, e.blendSrc, e.blendDst, e.blendEquationAlpha, e.blendSrcAlpha, e.blendDstAlpha, e.premultipliedAlpha);
      }
      l.setFunc(e.depthFunc);
      l.setTest(e.depthTest);
      l.setMask(e.depthWrite);
      s.setMask(e.colorWrite);
      var r = e.stencilWrite;
      c.setTest(r);
      if (r) {
        c.setMask(e.stencilWriteMask);
        c.setFunc(e.stencilFunc, e.stencilRef, e.stencilFuncMask);
        c.setOp(e.stencilFail, e.stencilZFail, e.stencilZPass);
      }
      W(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits);
    },
    setFlipSided: j,
    setCullFace: V,
    setLineWidth: function (t) {
      if (t !== M) {
        if (L) {
          e.lineWidth(t);
        }
        M = t;
      }
    },
    setPolygonOffset: W,
    setScissorTest: function (e) {
      if (e) {
        U(3089);
      } else {
        B(3089);
      }
    },
    activeTexture: q,
    bindTexture: function (t, n) {
      if (null === C) {
        q();
      }
      var r = I[C];
      if (void 0 === r) {
        r = {
          type: void 0,
          texture: void 0
        };
        I[C] = r;
      }
      if (!(r.type === t && r.texture === n)) {
        e.bindTexture(t, n || D[t]);
        r.type = t;
        r.texture = n;
      }
    },
    unbindTexture: function () {
      var t = I[C];
      if (void 0 !== t && void 0 !== t.type) {
        e.bindTexture(t.type, null);
        t.type = void 0;
        t.texture = void 0;
      }
    },
    compressedTexImage2D: function () {
      try {
        e.compressedTexImage2D.apply(e, arguments);
      } catch (t) {
        console.error("THREE.WebGLState:", t);
      }
    },
    texImage2D: function () {
      try {
        e.texImage2D.apply(e, arguments);
      } catch (t) {
        console.error("THREE.WebGLState:", t);
      }
    },
    texImage3D: function () {
      try {
        e.texImage3D.apply(e, arguments);
      } catch (t) {
        console.error("THREE.WebGLState:", t);
      }
    },
    scissor: function (t) {
      if (!1 === O.equals(t)) {
        e.scissor(t.x, t.y, t.z, t.w);
        O.copy(t);
      }
    },
    viewport: function (t) {
      if (!1 === k.equals(t)) {
        e.viewport(t.x, t.y, t.z, t.w);
        k.copy(t);
      }
    },
    reset: function () {
      u = {};
      C = null;
      I = {};
      h = null;
      p = null;
      _ = null;
      w = null;
      s.reset();
      l.reset();
      c.reset();
    }
  };
}
function ai(e, t, n, r, i, a, s) {
  var l;
  var c;
  var u;
  var h = i.isWebGL2;
  var d = i.maxTextures;
  var m = i.maxCubemapSize;
  var v = i.maxTextureSize;
  var g = i.maxSamples;
  var y = new WeakMap();
  var x = !1;
  try {
    x = "undefined" !== typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d");
  } catch (V) {}
  function b(e, t) {
    return x ? new OffscreenCanvas(e, t) : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
  }
  function w(e, t, n, r) {
    var i = 1;
    if (e.width > r || e.height > r) {
      i = r / Math.max(e.width, e.height);
    }
    if (i < 1 || !0 === t) {
      if ("undefined" !== typeof HTMLImageElement && e instanceof HTMLImageElement || "undefined" !== typeof HTMLCanvasElement && e instanceof HTMLCanvasElement || "undefined" !== typeof ImageBitmap && e instanceof ImageBitmap) {
        var a = t ? _.floorPowerOfTwo : Math.floor;
        var o = a(i * e.width);
        var s = a(i * e.height);
        if (void 0 === u) {
          u = b(o, s);
        }
        var l = n ? b(o, s) : u;
        l.width = o;
        l.height = s;
        l.getContext("2d").drawImage(e, 0, 0, o, s);
        console.warn("THREE.WebGLRenderer: Texture has been resized from (" + e.width + "x" + e.height + ") to (" + o + "x" + s + ").");
        return l;
      }
      if ("data" in e) {
        console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + e.width + "x" + e.height + ").");
      }
      return e;
    }
    return e;
  }
  function M(e) {
    return _.isPowerOfTwo(e.width) && _.isPowerOfTwo(e.height);
  }
  function S(e, t) {
    return e.generateMipmaps && t && 1003 !== e.minFilter && 1006 !== e.minFilter;
  }
  function T(t, n, i, a) {
    e.generateMipmap(t);
    r.get(n).__maxMipLevel = Math.log(Math.max(i, a)) * Math.LOG2E;
  }
  function E(n, r, i) {
    if (!1 === h) {
      return r;
    }
    if (null !== n) {
      if (void 0 !== e[n]) {
        return e[n];
      }
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n + "'");
    }
    var a = r;
    if (6403 === r) {
      if (5126 === i) {
        a = 33326;
      }
      if (5131 === i) {
        a = 33325;
      }
      if (5121 === i) {
        a = 33321;
      }
    }
    if (6407 === r) {
      if (5126 === i) {
        a = 34837;
      }
      if (5131 === i) {
        a = 34843;
      }
      if (5121 === i) {
        a = 32849;
      }
    }
    if (6408 === r) {
      if (5126 === i) {
        a = 34836;
      }
      if (5131 === i) {
        a = 34842;
      }
      if (5121 === i) {
        a = 32856;
      }
    }
    if (!(33325 !== a && 33326 !== a && 34842 !== a && 34836 !== a)) {
      t.get("EXT_color_buffer_float");
    }
    return a;
  }
  function A(e) {
    return 1003 === e || 1004 === e || 1005 === e ? 9728 : 9729;
  }
  function L(t) {
    var n = t.target;
    n.removeEventListener("dispose", L);
    (function (t) {
      var n = r.get(t);
      if (void 0 === n.__webglInit) {
        return;
      }
      e.deleteTexture(n.__webglTexture);
      r.remove(t);
    })(n);
    if (n.isVideoTexture) {
      y.delete(n);
    }
    s.memory.textures--;
  }
  function R(t) {
    var n = t.target;
    n.removeEventListener("dispose", R);
    (function (t) {
      var n = r.get(t);
      var i = r.get(t.texture);
      if (!t) {
        return;
      }
      if (void 0 !== i.__webglTexture) {
        e.deleteTexture(i.__webglTexture);
      }
      if (t.depthTexture) {
        t.depthTexture.dispose();
      }
      if (t.isWebGLCubeRenderTarget) {
        for (var a = 0; a < 6; a++) {
          e.deleteFramebuffer(n.__webglFramebuffer[a]);
          if (n.__webglDepthbuffer) {
            e.deleteRenderbuffer(n.__webglDepthbuffer[a]);
          }
        }
      } else {
        e.deleteFramebuffer(n.__webglFramebuffer);
        if (n.__webglDepthbuffer) {
          e.deleteRenderbuffer(n.__webglDepthbuffer);
        }
        if (n.__webglMultisampledFramebuffer) {
          e.deleteFramebuffer(n.__webglMultisampledFramebuffer);
        }
        if (n.__webglColorRenderbuffer) {
          e.deleteRenderbuffer(n.__webglColorRenderbuffer);
        }
        if (n.__webglDepthRenderbuffer) {
          e.deleteRenderbuffer(n.__webglDepthRenderbuffer);
        }
      }
      r.remove(t.texture);
      r.remove(t);
    })(n);
    s.memory.textures--;
  }
  var P = 0;
  function C(e, t) {
    var i = r.get(e);
    if (e.isVideoTexture) {
      (function (e) {
        var t = s.render.frame;
        if (y.get(e) !== t) {
          y.set(e, t);
          e.update();
        }
      })(e);
    }
    if (e.version > 0 && i.__version !== e.version) {
      var a = e.image;
      if (void 0 === a) {
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
      } else {
        if (!1 !== a.complete) {
          return void U(i, e, t);
        }
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      }
    }
    n.activeTexture(33984 + t);
    n.bindTexture(3553, i.__webglTexture);
  }
  function I(t, i) {
    var o = r.get(t);
    if (t.version > 0 && o.__version !== t.version) {
      (function (t, r, i) {
        if (6 !== r.image.length) {
          return;
        }
        D(t, r);
        n.activeTexture(33984 + i);
        n.bindTexture(34067, t.__webglTexture);
        e.pixelStorei(37440, r.flipY);
        for (var o = r && (r.isCompressedTexture || r.image[0].isCompressedTexture), s = r.image[0] && r.image[0].isDataTexture, l = [], c = 0; c < 6; c++) {
          l[c] = o || s ? s ? r.image[c].image : r.image[c] : w(r.image[c], !1, !0, m);
        }
        var u;
        var d = l[0];
        var p = M(d) || h;
        var f = a.convert(r.format);
        var v = a.convert(r.type);
        var g = E(r.internalFormat, f, v);
        N(34067, r, p);
        if (o) {
          for (var y = 0; y < 6; y++) {
            u = l[y].mipmaps;
            for (var x = 0; x < u.length; x++) {
              var b = u[x];
              if (1023 !== r.format && 1022 !== r.format) {
                if (null !== f) {
                  n.compressedTexImage2D(34069 + y, x, g, b.width, b.height, 0, b.data);
                } else {
                  console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");
                }
              } else {
                n.texImage2D(34069 + y, x, g, b.width, b.height, 0, f, v, b.data);
              }
            }
          }
          t.__maxMipLevel = u.length - 1;
        } else {
          u = r.mipmaps;
          for (var _ = 0; _ < 6; _++) {
            if (s) {
              n.texImage2D(34069 + _, 0, g, l[_].width, l[_].height, 0, f, v, l[_].data);
              for (var A = 0; A < u.length; A++) {
                var L = u[A].image[_].image;
                n.texImage2D(34069 + _, A + 1, g, L.width, L.height, 0, f, v, L.data);
              }
            } else {
              n.texImage2D(34069 + _, 0, g, f, v, l[_]);
              for (var R = 0; R < u.length; R++) {
                var P = u[R];
                n.texImage2D(34069 + _, R + 1, g, f, v, P.image[_]);
              }
            }
          }
          t.__maxMipLevel = u.length;
        }
        if (S(r, p)) {
          T(34067, r, d.width, d.height);
        }
        t.__version = r.version;
        if (r.onUpdate) {
          r.onUpdate(r);
        }
      })(o, t, i);
    } else {
      n.activeTexture(33984 + i);
      n.bindTexture(34067, o.__webglTexture);
    }
  }
  l = {};
  Object(o.a)(l, p, 10497);
  Object(o.a)(l, f, 33071);
  Object(o.a)(l, 1002, 33648);
  var O = l;
  c = {};
  Object(o.a)(c, 1003, 9728);
  Object(o.a)(c, 1004, 9984);
  Object(o.a)(c, 1005, 9986);
  Object(o.a)(c, 1006, 9729);
  Object(o.a)(c, 1007, 9985);
  Object(o.a)(c, 1008, 9987);
  var k = c;
  function N(n, a, o) {
    if (o) {
      e.texParameteri(n, 10242, O[a.wrapS]);
      e.texParameteri(n, 10243, O[a.wrapT]);
      if (!(32879 !== n && 35866 !== n)) {
        e.texParameteri(n, 32882, O[a.wrapR]);
      }
      e.texParameteri(n, 10240, k[a.magFilter]);
      e.texParameteri(n, 10241, k[a.minFilter]);
    } else {
      e.texParameteri(n, 10242, 33071);
      e.texParameteri(n, 10243, 33071);
      if (!(32879 !== n && 35866 !== n)) {
        e.texParameteri(n, 32882, 33071);
      }
      if (!(a.wrapS === f && a.wrapT === f)) {
        console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.");
      }
      e.texParameteri(n, 10240, A(a.magFilter));
      e.texParameteri(n, 10241, A(a.minFilter));
      if (1003 !== a.minFilter && 1006 !== a.minFilter) {
        console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.");
      }
    }
    var s = t.get("EXT_texture_filter_anisotropic");
    if (s) {
      if (1015 === a.type && null === t.get("OES_texture_float_linear")) {
        return;
      }
      if (1016 === a.type && null === (h || t.get("OES_texture_half_float_linear"))) {
        return;
      }
      if (a.anisotropy > 1 || r.get(a).__currentAnisotropy) {
        e.texParameterf(n, s.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(a.anisotropy, i.getMaxAnisotropy()));
        r.get(a).__currentAnisotropy = a.anisotropy;
      }
    }
  }
  function D(t, n) {
    if (void 0 === t.__webglInit) {
      t.__webglInit = !0;
      n.addEventListener("dispose", L);
      t.__webglTexture = e.createTexture();
      s.memory.textures++;
    }
  }
  function U(t, r, i) {
    var o = 3553;
    if (r.isDataTexture2DArray) {
      o = 35866;
    }
    if (r.isDataTexture3D) {
      o = 32879;
    }
    D(t, r);
    n.activeTexture(33984 + i);
    n.bindTexture(o, t.__webglTexture);
    e.pixelStorei(37440, r.flipY);
    e.pixelStorei(37441, r.premultiplyAlpha);
    e.pixelStorei(3317, r.unpackAlignment);
    var s;
    var l = function (e) {
      return !h && (e.wrapS !== f || e.wrapT !== f || 1003 !== e.minFilter && 1006 !== e.minFilter);
    }(r) && !1 === M(r.image);
    var c = w(r.image, l, !1, v);
    var u = M(c) || h;
    var d = a.convert(r.format);
    var p = a.convert(r.type);
    var m = E(r.internalFormat, d, p);
    N(o, r, u);
    var g = r.mipmaps;
    if (r.isDepthTexture) {
      m = 6402;
      if (h) {
        m = 1015 === r.type ? 36012 : 1014 === r.type ? 33190 : 1020 === r.type ? 35056 : 33189;
      } else {
        if (1015 === r.type) {
          console.error("WebGLRenderer: Floating point depth texture requires WebGL2.");
        }
      }
      if (1026 === r.format && 6402 === m && 1012 !== r.type && 1014 !== r.type) {
        console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture.");
        r.type = 1012;
        p = a.convert(r.type);
      }
      if (1027 === r.format && 6402 === m) {
        m = 34041;
        if (1020 !== r.type) {
          console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture.");
          r.type = 1020;
          p = a.convert(r.type);
        }
      }
      n.texImage2D(3553, 0, m, c.width, c.height, 0, d, p, null);
    } else if (r.isDataTexture) {
      if (g.length > 0 && u) {
        for (var y = 0, x = g.length; y < x; y++) {
          s = g[y];
          n.texImage2D(3553, y, m, s.width, s.height, 0, d, p, s.data);
        }
        r.generateMipmaps = !1;
        t.__maxMipLevel = g.length - 1;
      } else {
        n.texImage2D(3553, 0, m, c.width, c.height, 0, d, p, c.data);
        t.__maxMipLevel = 0;
      }
    } else if (r.isCompressedTexture) {
      for (var b = 0, _ = g.length; b < _; b++) {
        s = g[b];
        if (1023 !== r.format && 1022 !== r.format) {
          if (null !== d) {
            n.compressedTexImage2D(3553, b, m, s.width, s.height, 0, s.data);
          } else {
            console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
          }
        } else {
          n.texImage2D(3553, b, m, s.width, s.height, 0, d, p, s.data);
        }
      }
      t.__maxMipLevel = g.length - 1;
    } else if (r.isDataTexture2DArray) {
      n.texImage3D(35866, 0, m, c.width, c.height, c.depth, 0, d, p, c.data);
      t.__maxMipLevel = 0;
    } else if (r.isDataTexture3D) {
      n.texImage3D(32879, 0, m, c.width, c.height, c.depth, 0, d, p, c.data);
      t.__maxMipLevel = 0;
    } else if (g.length > 0 && u) {
      for (var A = 0, L = g.length; A < L; A++) {
        s = g[A];
        n.texImage2D(3553, A, m, d, p, s);
      }
      r.generateMipmaps = !1;
      t.__maxMipLevel = g.length - 1;
    } else {
      n.texImage2D(3553, 0, m, d, p, c);
      t.__maxMipLevel = 0;
    }
    if (S(r, u)) {
      T(o, r, c.width, c.height);
    }
    t.__version = r.version;
    if (r.onUpdate) {
      r.onUpdate(r);
    }
  }
  function B(t, i, o, s) {
    var l = a.convert(i.texture.format);
    var c = a.convert(i.texture.type);
    var u = E(i.texture.internalFormat, l, c);
    n.texImage2D(s, 0, u, i.width, i.height, 0, l, c, null);
    e.bindFramebuffer(36160, t);
    e.framebufferTexture2D(36160, o, s, r.get(i.texture).__webglTexture, 0);
    e.bindFramebuffer(36160, null);
  }
  function z(t, n, r) {
    e.bindRenderbuffer(36161, t);
    if (n.depthBuffer && !n.stencilBuffer) {
      var i = 33189;
      if (r) {
        var o = n.depthTexture;
        if (o && o.isDepthTexture) {
          if (1015 === o.type) {
            i = 36012;
          } else {
            if (1014 === o.type) {
              i = 33190;
            }
          }
        }
        var s = H(n);
        e.renderbufferStorageMultisample(36161, s, i, n.width, n.height);
      } else {
        e.renderbufferStorage(36161, i, n.width, n.height);
      }
      e.framebufferRenderbuffer(36160, 36096, 36161, t);
    } else if (n.depthBuffer && n.stencilBuffer) {
      if (r) {
        var l = H(n);
        e.renderbufferStorageMultisample(36161, l, 35056, n.width, n.height);
      } else {
        e.renderbufferStorage(36161, 34041, n.width, n.height);
      }
      e.framebufferRenderbuffer(36160, 33306, 36161, t);
    } else {
      var c = a.convert(n.texture.format);
      var u = a.convert(n.texture.type);
      var h = E(n.texture.internalFormat, c, u);
      if (r) {
        var d = H(n);
        e.renderbufferStorageMultisample(36161, d, h, n.width, n.height);
      } else {
        e.renderbufferStorage(36161, h, n.width, n.height);
      }
    }
    e.bindRenderbuffer(36161, null);
  }
  function F(t) {
    var n = r.get(t);
    var i = !0 === t.isWebGLCubeRenderTarget;
    if (t.depthTexture) {
      if (i) {
        throw new Error("target.depthTexture not supported in Cube render targets");
      }
      !function (t, n) {
        if (n && n.isWebGLCubeRenderTarget) {
          throw new Error("Depth Texture with cube render targets is not supported");
        }
        e.bindFramebuffer(36160, t);
        if (!n.depthTexture || !n.depthTexture.isDepthTexture) {
          throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
        }
        if (!(r.get(n.depthTexture).__webglTexture && n.depthTexture.image.width === n.width && n.depthTexture.image.height === n.height)) {
          n.depthTexture.image.width = n.width;
          n.depthTexture.image.height = n.height;
          n.depthTexture.needsUpdate = !0;
        }
        C(n.depthTexture, 0);
        var i = r.get(n.depthTexture).__webglTexture;
        if (1026 === n.depthTexture.format) {
          e.framebufferTexture2D(36160, 36096, 3553, i, 0);
        } else {
          if (1027 !== n.depthTexture.format) {
            throw new Error("Unknown depthTexture format");
          }
          e.framebufferTexture2D(36160, 33306, 3553, i, 0);
        }
      }(n.__webglFramebuffer, t);
    } else if (i) {
      n.__webglDepthbuffer = [];
      for (var a = 0; a < 6; a++) {
        e.bindFramebuffer(36160, n.__webglFramebuffer[a]);
        n.__webglDepthbuffer[a] = e.createRenderbuffer();
        z(n.__webglDepthbuffer[a], t, !1);
      }
    } else {
      e.bindFramebuffer(36160, n.__webglFramebuffer);
      n.__webglDepthbuffer = e.createRenderbuffer();
      z(n.__webglDepthbuffer, t, !1);
    }
    e.bindFramebuffer(36160, null);
  }
  function H(e) {
    return h && e.isWebGLMultisampleRenderTarget ? Math.min(g, e.samples) : 0;
  }
  var G = !1;
  var j = !1;
  this.allocateTextureUnit = function () {
    var e = P;
    if (e >= d) {
      console.warn("THREE.WebGLTextures: Trying to use " + e + " texture units while this GPU supports only " + d);
    }
    P += 1;
    return e;
  };
  this.resetTextureUnits = function () {
    P = 0;
  };
  this.setTexture2D = C;
  this.setTexture2DArray = function (e, t) {
    var i = r.get(e);
    if (e.version > 0 && i.__version !== e.version) {
      U(i, e, t);
    } else {
      n.activeTexture(33984 + t);
      n.bindTexture(35866, i.__webglTexture);
    }
  };
  this.setTexture3D = function (e, t) {
    var i = r.get(e);
    if (e.version > 0 && i.__version !== e.version) {
      U(i, e, t);
    } else {
      n.activeTexture(33984 + t);
      n.bindTexture(32879, i.__webglTexture);
    }
  };
  this.setTextureCube = I;
  this.setupRenderTarget = function (t) {
    var i = r.get(t);
    var o = r.get(t.texture);
    t.addEventListener("dispose", R);
    o.__webglTexture = e.createTexture();
    s.memory.textures++;
    var l = !0 === t.isWebGLCubeRenderTarget;
    var c = !0 === t.isWebGLMultisampleRenderTarget;
    var u = M(t) || h;
    if (!(!h || 1022 !== t.texture.format || 1015 !== t.texture.type && 1016 !== t.texture.type)) {
      t.texture.format = 1023;
      console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.");
    }
    if (l) {
      i.__webglFramebuffer = [];
      for (var d = 0; d < 6; d++) {
        i.__webglFramebuffer[d] = e.createFramebuffer();
      }
    } else if (i.__webglFramebuffer = e.createFramebuffer(), c) {
      if (h) {
        i.__webglMultisampledFramebuffer = e.createFramebuffer();
        i.__webglColorRenderbuffer = e.createRenderbuffer();
        e.bindRenderbuffer(36161, i.__webglColorRenderbuffer);
        var p = a.convert(t.texture.format);
        var f = a.convert(t.texture.type);
        var m = E(t.texture.internalFormat, p, f);
        var v = H(t);
        e.renderbufferStorageMultisample(36161, v, m, t.width, t.height);
        e.bindFramebuffer(36160, i.__webglMultisampledFramebuffer);
        e.framebufferRenderbuffer(36160, 36064, 36161, i.__webglColorRenderbuffer);
        e.bindRenderbuffer(36161, null);
        if (t.depthBuffer) {
          i.__webglDepthRenderbuffer = e.createRenderbuffer();
          z(i.__webglDepthRenderbuffer, t, !0);
        }
        e.bindFramebuffer(36160, null);
      } else {
        console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
      }
    }
    if (l) {
      n.bindTexture(34067, o.__webglTexture);
      N(34067, t.texture, u);
      for (var g = 0; g < 6; g++) {
        B(i.__webglFramebuffer[g], t, 36064, 34069 + g);
      }
      if (S(t.texture, u)) {
        T(34067, t.texture, t.width, t.height);
      }
      n.bindTexture(34067, null);
    } else {
      n.bindTexture(3553, o.__webglTexture);
      N(3553, t.texture, u);
      B(i.__webglFramebuffer, t, 36064, 3553);
      if (S(t.texture, u)) {
        T(3553, t.texture, t.width, t.height);
      }
      n.bindTexture(3553, null);
    }
    if (t.depthBuffer) {
      F(t);
    }
  };
  this.updateRenderTargetMipmap = function (e) {
    var t = e.texture;
    if (S(t, M(e) || h)) {
      var i = e.isWebGLCubeRenderTarget ? 34067 : 3553;
      var a = r.get(t).__webglTexture;
      n.bindTexture(i, a);
      T(i, t, e.width, e.height);
      n.bindTexture(i, null);
    }
  };
  this.updateMultisampleRenderTarget = function (t) {
    if (t.isWebGLMultisampleRenderTarget) {
      if (h) {
        var n = r.get(t);
        e.bindFramebuffer(36008, n.__webglMultisampledFramebuffer);
        e.bindFramebuffer(36009, n.__webglFramebuffer);
        var i = t.width;
        var a = t.height;
        var o = 16384;
        if (t.depthBuffer) {
          o |= 256;
        }
        if (t.stencilBuffer) {
          o |= 1024;
        }
        e.blitFramebuffer(0, 0, i, a, 0, 0, i, a, o, 9728);
        e.bindFramebuffer(36160, n.__webglMultisampledFramebuffer);
      } else {
        console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
      }
    }
  };
  this.safeSetTexture2D = function (e, t) {
    if (e && e.isWebGLRenderTarget) {
      if (!1 === G) {
        console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead.");
        G = !0;
      }
      e = e.texture;
    }
    C(e, t);
  };
  this.safeSetTextureCube = function (e, t) {
    if (e && e.isWebGLCubeRenderTarget) {
      if (!1 === j) {
        console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead.");
        j = !0;
      }
      e = e.texture;
    }
    I(e, t);
  };
}
function oi(e, t, n) {
  var r = n.isWebGL2;
  return {
    convert: function (e) {
      var n;
      if (1009 === e) {
        return 5121;
      }
      if (1017 === e) {
        return 32819;
      }
      if (1018 === e) {
        return 32820;
      }
      if (1019 === e) {
        return 33635;
      }
      if (1010 === e) {
        return 5120;
      }
      if (1011 === e) {
        return 5122;
      }
      if (1012 === e) {
        return 5123;
      }
      if (1013 === e) {
        return 5124;
      }
      if (1014 === e) {
        return 5125;
      }
      if (1015 === e) {
        return 5126;
      }
      if (1016 === e) {
        return r ? 5131 : null !== (n = t.get("OES_texture_half_float")) ? n.HALF_FLOAT_OES : null;
      }
      if (1021 === e) {
        return 6406;
      }
      if (1022 === e) {
        return 6407;
      }
      if (1023 === e) {
        return 6408;
      }
      if (1024 === e) {
        return 6409;
      }
      if (1025 === e) {
        return 6410;
      }
      if (1026 === e) {
        return 6402;
      }
      if (1027 === e) {
        return 34041;
      }
      if (1028 === e) {
        return 6403;
      }
      if (1029 === e) {
        return 36244;
      }
      if (1030 === e) {
        return 33319;
      }
      if (1031 === e) {
        return 33320;
      }
      if (1032 === e) {
        return 36248;
      }
      if (1033 === e) {
        return 36249;
      }
      if (33776 === e || 33777 === e || 33778 === e || 33779 === e) {
        if (null === (n = t.get("WEBGL_compressed_texture_s3tc"))) {
          return null;
        }
        if (33776 === e) {
          return n.COMPRESSED_RGB_S3TC_DXT1_EXT;
        }
        if (33777 === e) {
          return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        }
        if (33778 === e) {
          return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        }
        if (33779 === e) {
          return n.COMPRESSED_RGBA_S3TC_DXT5_EXT;
        }
      }
      if (35840 === e || 35841 === e || 35842 === e || 35843 === e) {
        if (null === (n = t.get("WEBGL_compressed_texture_pvrtc"))) {
          return null;
        }
        if (35840 === e) {
          return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        }
        if (35841 === e) {
          return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        }
        if (35842 === e) {
          return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        }
        if (35843 === e) {
          return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
        }
      }
      if (36196 === e) {
        return null !== (n = t.get("WEBGL_compressed_texture_etc1")) ? n.COMPRESSED_RGB_ETC1_WEBGL : null;
      }
      if ((37492 === e || 37496 === e) && null !== (n = t.get("WEBGL_compressed_texture_etc"))) {
        if (37492 === e) {
          return n.COMPRESSED_RGB8_ETC2;
        }
        if (37496 === e) {
          return n.COMPRESSED_RGBA8_ETC2_EAC;
        }
      }
      return 37808 === e || 37809 === e || 37810 === e || 37811 === e || 37812 === e || 37813 === e || 37814 === e || 37815 === e || 37816 === e || 37817 === e || 37818 === e || 37819 === e || 37820 === e || 37821 === e || 37840 === e || 37841 === e || 37842 === e || 37843 === e || 37844 === e || 37845 === e || 37846 === e || 37847 === e || 37848 === e || 37849 === e || 37850 === e || 37851 === e || 37852 === e || 37853 === e ? null !== (n = t.get("WEBGL_compressed_texture_astc")) ? e : null : 36492 === e ? null !== (n = t.get("EXT_texture_compression_bptc")) ? e : null : 1020 === e ? r ? 34042 : null !== (n = t.get("WEBGL_depth_texture")) ? n.UNSIGNED_INT_24_8_WEBGL : null : void 0;
    }
  };
}
function si(e) {
  Kt.call(this);
  this.cameras = e || [];
}
function li() {
  Pe.call(this);
  this.type = "Group";
}
function ci() {
  this._targetRay = null;
  this._grip = null;
  this._hand = null;
}
function ui(e, t) {
  var n = this;
  var r = null;
  var i = 1;
  var a = null;
  var o = "local-floor";
  var s = null;
  var l = [];
  var c = new Map();
  var u = new Kt();
  u.layers.enable(1);
  u.viewport = new A();
  var h = new Kt();
  h.layers.enable(2);
  h.viewport = new A();
  var d = [u, h];
  var p = new si();
  p.layers.enable(1);
  p.layers.enable(2);
  var f = null;
  var m = null;
  function v(e) {
    var t = c.get(e.inputSource);
    if (t) {
      t.dispatchEvent({
        type: e.type,
        data: e.inputSource
      });
    }
  }
  function g() {
    c.forEach(function (e, t) {
      e.disconnect(t);
    });
    c.clear();
    e.setFramebuffer(null);
    e.setRenderTarget(e.getRenderTarget());
    S.stop();
    n.isPresenting = !1;
    n.dispatchEvent({
      type: "sessionend"
    });
  }
  function y(e) {
    a = e;
    S.setContext(r);
    S.start();
    n.isPresenting = !0;
    n.dispatchEvent({
      type: "sessionstart"
    });
  }
  function x(e) {
    for (var t = r.inputSources, n = 0; n < l.length; n++) {
      c.set(t[n], l[n]);
    }
    for (var i = 0; i < e.removed.length; i++) {
      var a = e.removed[i];
      var o = c.get(a);
      if (o) {
        o.dispatchEvent({
          type: "disconnected",
          data: a
        });
        c.delete(a);
      }
    }
    for (var s = 0; s < e.added.length; s++) {
      var u = e.added[s];
      var h = c.get(u);
      if (h) {
        h.dispatchEvent({
          type: "connected",
          data: u
        });
      }
    }
  }
  this.enabled = !1;
  this.isPresenting = !1;
  this.getController = function (e) {
    var t = l[e];
    if (void 0 === t) {
      t = new ci();
      l[e] = t;
    }
    return t.getTargetRaySpace();
  };
  this.getControllerGrip = function (e) {
    var t = l[e];
    if (void 0 === t) {
      t = new ci();
      l[e] = t;
    }
    return t.getGripSpace();
  };
  this.getHand = function (e) {
    var t = l[e];
    if (void 0 === t) {
      t = new ci();
      l[e] = t;
    }
    return t.getHandSpace();
  };
  this.setFramebufferScaleFactor = function (e) {
    i = e;
    if (!0 === n.isPresenting) {
      console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }
  };
  this.setReferenceSpaceType = function (e) {
    o = e;
    if (!0 === n.isPresenting) {
      console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }
  };
  this.getReferenceSpace = function () {
    return a;
  };
  this.getSession = function () {
    return r;
  };
  this.setSession = function (e) {
    if (null !== (r = e)) {
      r.addEventListener("select", v);
      r.addEventListener("selectstart", v);
      r.addEventListener("selectend", v);
      r.addEventListener("squeeze", v);
      r.addEventListener("squeezestart", v);
      r.addEventListener("squeezeend", v);
      r.addEventListener("end", g);
      var n = t.getContextAttributes();
      if (!0 !== n.xrCompatible) {
        t.makeXRCompatible();
      }
      var a = {
        antialias: n.antialias,
        alpha: n.alpha,
        depth: n.depth,
        stencil: n.stencil,
        framebufferScaleFactor: i
      };
      var s = new XRWebGLLayer(r, t, a);
      r.updateRenderState({
        baseLayer: s
      });
      r.requestReferenceSpace(o).then(y);
      r.addEventListener("inputsourceschange", x);
    }
  };
  var b = new C();
  var _ = new C();
  function w(e, t) {
    if (null === t) {
      e.matrixWorld.copy(e.matrix);
    } else {
      e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix);
    }
    e.matrixWorldInverse.getInverse(e.matrixWorld);
  }
  this.getCamera = function (e) {
    p.near = h.near = u.near = e.near;
    p.far = h.far = u.far = e.far;
    if (!(f === p.near && m === p.far)) {
      r.updateRenderState({
        depthNear: p.near,
        depthFar: p.far
      });
      f = p.near;
      m = p.far;
    }
    var t = e.parent;
    var n = p.cameras;
    w(p, t);
    for (var i = 0; i < n.length; i++) {
      w(n[i], t);
    }
    e.matrixWorld.copy(p.matrixWorld);
    for (var a = e.children, o = 0, s = a.length; o < s; o++) {
      a[o].updateMatrixWorld(!0);
    }
    if (2 === n.length) {
      (function (e, t, n) {
        b.setFromMatrixPosition(t.matrixWorld);
        _.setFromMatrixPosition(n.matrixWorld);
        var r = b.distanceTo(_);
        var i = t.projectionMatrix.elements;
        var a = n.projectionMatrix.elements;
        var o = i[14] / (i[10] - 1);
        var s = i[14] / (i[10] + 1);
        var l = (i[9] + 1) / i[5];
        var c = (i[9] - 1) / i[5];
        var u = (i[8] - 1) / i[0];
        var h = (a[8] + 1) / a[0];
        var d = o * u;
        var p = o * h;
        var f = r / (-u + h);
        var m = f * -u;
        t.matrixWorld.decompose(e.position, e.quaternion, e.scale);
        e.translateX(m);
        e.translateZ(f);
        e.matrixWorld.compose(e.position, e.quaternion, e.scale);
        e.matrixWorldInverse.getInverse(e.matrixWorld);
        var v = o + f;
        var g = s + f;
        var y = d - m;
        var x = p + (r - m);
        var w = l * s / g * v;
        var M = c * s / g * v;
        e.projectionMatrix.makePerspective(y, x, w, M, v, g);
      })(p, u, h);
    } else {
      p.projectionMatrix.copy(u.projectionMatrix);
    }
    return p;
  };
  var M = null;
  var S = new on();
  S.setAnimationLoop(function (t, n) {
    if (null !== (s = n.getViewerPose(a))) {
      var i = s.views;
      var o = r.renderState.baseLayer;
      e.setFramebuffer(o.framebuffer);
      var c = !1;
      if (i.length !== p.cameras.length) {
        p.cameras.length = 0;
        c = !0;
      }
      for (var u = 0; u < i.length; u++) {
        var h = i[u];
        var f = o.getViewport(h);
        var m = d[u];
        m.matrix.fromArray(h.transform.matrix);
        m.projectionMatrix.fromArray(h.projectionMatrix);
        m.viewport.set(f.x, f.y, f.width, f.height);
        if (0 === u) {
          p.matrix.copy(m.matrix);
        }
        if (!0 === c) {
          p.cameras.push(m);
        }
      }
    }
    for (var v = r.inputSources, g = 0; g < l.length; g++) {
      var y = l[g];
      var x = v[g];
      y.update(x, n, a);
    }
    if (M) {
      M(t, n);
    }
  });
  this.setAnimationLoop = function (e) {
    M = e;
  };
  this.dispose = function () {};
}
function hi(e) {
  function t(t, n) {
    t.opacity.value = n.opacity;
    if (n.color) {
      t.diffuse.value.copy(n.color);
    }
    if (n.emissive) {
      t.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity);
    }
    if (n.map) {
      t.map.value = n.map;
    }
    if (n.alphaMap) {
      t.alphaMap.value = n.alphaMap;
    }
    if (n.specularMap) {
      t.specularMap.value = n.specularMap;
    }
    var r;
    var i;
    var a = e.get(n).envMap;
    if (a) {
      t.envMap.value = a;
      t.flipEnvMap.value = a.isCubeTexture && a._needsFlipEnvMap ? -1 : 1;
      t.reflectivity.value = n.reflectivity;
      t.refractionRatio.value = n.refractionRatio;
      var o = e.get(a).__maxMipLevel;
      if (void 0 !== o) {
        t.maxMipLevel.value = o;
      }
    }
    if (n.lightMap) {
      t.lightMap.value = n.lightMap;
      t.lightMapIntensity.value = n.lightMapIntensity;
    }
    if (n.aoMap) {
      t.aoMap.value = n.aoMap;
      t.aoMapIntensity.value = n.aoMapIntensity;
    }
    if (n.map) {
      r = n.map;
    } else {
      if (n.specularMap) {
        r = n.specularMap;
      } else {
        if (n.displacementMap) {
          r = n.displacementMap;
        } else {
          if (n.normalMap) {
            r = n.normalMap;
          } else {
            if (n.bumpMap) {
              r = n.bumpMap;
            } else {
              if (n.roughnessMap) {
                r = n.roughnessMap;
              } else {
                if (n.metalnessMap) {
                  r = n.metalnessMap;
                } else {
                  if (n.alphaMap) {
                    r = n.alphaMap;
                  } else {
                    if (n.emissiveMap) {
                      r = n.emissiveMap;
                    } else {
                      if (n.clearcoatMap) {
                        r = n.clearcoatMap;
                      } else {
                        if (n.clearcoatNormalMap) {
                          r = n.clearcoatNormalMap;
                        } else {
                          if (n.clearcoatRoughnessMap) {
                            r = n.clearcoatRoughnessMap;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (void 0 !== r) {
      if (r.isWebGLRenderTarget) {
        r = r.texture;
      }
      if (!0 === r.matrixAutoUpdate) {
        r.updateMatrix();
      }
      t.uvTransform.value.copy(r.matrix);
    }
    if (n.aoMap) {
      i = n.aoMap;
    } else {
      if (n.lightMap) {
        i = n.lightMap;
      }
    }
    if (void 0 !== i) {
      if (i.isWebGLRenderTarget) {
        i = i.texture;
      }
      if (!0 === i.matrixAutoUpdate) {
        i.updateMatrix();
      }
      t.uv2Transform.value.copy(i.matrix);
    }
  }
  function n(t, n) {
    t.roughness.value = n.roughness;
    t.metalness.value = n.metalness;
    if (n.roughnessMap) {
      t.roughnessMap.value = n.roughnessMap;
    }
    if (n.metalnessMap) {
      t.metalnessMap.value = n.metalnessMap;
    }
    if (n.emissiveMap) {
      t.emissiveMap.value = n.emissiveMap;
    }
    if (n.bumpMap) {
      t.bumpMap.value = n.bumpMap;
      t.bumpScale.value = n.bumpScale;
      if (1 === n.side) {
        t.bumpScale.value *= -1;
      }
    }
    if (n.normalMap) {
      t.normalMap.value = n.normalMap;
      t.normalScale.value.copy(n.normalScale);
      if (1 === n.side) {
        t.normalScale.value.negate();
      }
    }
    if (n.displacementMap) {
      t.displacementMap.value = n.displacementMap;
      t.displacementScale.value = n.displacementScale;
      t.displacementBias.value = n.displacementBias;
    }
    if (e.get(n).envMap) {
      t.envMapIntensity.value = n.envMapIntensity;
    }
  }
  return {
    refreshFogUniforms: function (e, t) {
      e.fogColor.value.copy(t.color);
      if (t.isFog) {
        e.fogNear.value = t.near;
        e.fogFar.value = t.far;
      } else {
        if (t.isFogExp2) {
          e.fogDensity.value = t.density;
        }
      }
    },
    refreshMaterialUniforms: function (e, r, i, a) {
      if (r.isMeshBasicMaterial) {
        t(e, r);
      } else {
        if (r.isMeshLambertMaterial) {
          t(e, r);
          (function (e, t) {
            if (t.emissiveMap) {
              e.emissiveMap.value = t.emissiveMap;
            }
          })(e, r);
        } else {
          if (r.isMeshToonMaterial) {
            t(e, r);
            (function (e, t) {
              if (t.gradientMap) {
                e.gradientMap.value = t.gradientMap;
              }
              if (t.emissiveMap) {
                e.emissiveMap.value = t.emissiveMap;
              }
              if (t.bumpMap) {
                e.bumpMap.value = t.bumpMap;
                e.bumpScale.value = t.bumpScale;
                if (1 === t.side) {
                  e.bumpScale.value *= -1;
                }
              }
              if (t.normalMap) {
                e.normalMap.value = t.normalMap;
                e.normalScale.value.copy(t.normalScale);
                if (1 === t.side) {
                  e.normalScale.value.negate();
                }
              }
              if (t.displacementMap) {
                e.displacementMap.value = t.displacementMap;
                e.displacementScale.value = t.displacementScale;
                e.displacementBias.value = t.displacementBias;
              }
            })(e, r);
          } else {
            if (r.isMeshPhongMaterial) {
              t(e, r);
              (function (e, t) {
                e.specular.value.copy(t.specular);
                e.shininess.value = Math.max(t.shininess, 1e-4);
                if (t.emissiveMap) {
                  e.emissiveMap.value = t.emissiveMap;
                }
                if (t.bumpMap) {
                  e.bumpMap.value = t.bumpMap;
                  e.bumpScale.value = t.bumpScale;
                  if (1 === t.side) {
                    e.bumpScale.value *= -1;
                  }
                }
                if (t.normalMap) {
                  e.normalMap.value = t.normalMap;
                  e.normalScale.value.copy(t.normalScale);
                  if (1 === t.side) {
                    e.normalScale.value.negate();
                  }
                }
                if (t.displacementMap) {
                  e.displacementMap.value = t.displacementMap;
                  e.displacementScale.value = t.displacementScale;
                  e.displacementBias.value = t.displacementBias;
                }
              })(e, r);
            } else {
              if (r.isMeshStandardMaterial) {
                t(e, r);
                if (r.isMeshPhysicalMaterial) {
                  (function (e, t) {
                    n(e, t);
                    e.reflectivity.value = t.reflectivity;
                    e.clearcoat.value = t.clearcoat;
                    e.clearcoatRoughness.value = t.clearcoatRoughness;
                    if (t.sheen) {
                      e.sheen.value.copy(t.sheen);
                    }
                    if (t.clearcoatMap) {
                      e.clearcoatMap.value = t.clearcoatMap;
                    }
                    if (t.clearcoatRoughnessMap) {
                      e.clearcoatRoughnessMap.value = t.clearcoatRoughnessMap;
                    }
                    if (t.clearcoatNormalMap) {
                      e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale);
                      e.clearcoatNormalMap.value = t.clearcoatNormalMap;
                      if (1 === t.side) {
                        e.clearcoatNormalScale.value.negate();
                      }
                    }
                    e.transmission.value = t.transmission;
                    if (t.transmissionMap) {
                      e.transmissionMap.value = t.transmissionMap;
                    }
                  })(e, r);
                } else {
                  n(e, r);
                }
              } else {
                if (r.isMeshMatcapMaterial) {
                  t(e, r);
                  (function (e, t) {
                    if (t.matcap) {
                      e.matcap.value = t.matcap;
                    }
                    if (t.bumpMap) {
                      e.bumpMap.value = t.bumpMap;
                      e.bumpScale.value = t.bumpScale;
                      if (1 === t.side) {
                        e.bumpScale.value *= -1;
                      }
                    }
                    if (t.normalMap) {
                      e.normalMap.value = t.normalMap;
                      e.normalScale.value.copy(t.normalScale);
                      if (1 === t.side) {
                        e.normalScale.value.negate();
                      }
                    }
                    if (t.displacementMap) {
                      e.displacementMap.value = t.displacementMap;
                      e.displacementScale.value = t.displacementScale;
                      e.displacementBias.value = t.displacementBias;
                    }
                  })(e, r);
                } else {
                  if (r.isMeshDepthMaterial) {
                    t(e, r);
                    (function (e, t) {
                      if (t.displacementMap) {
                        e.displacementMap.value = t.displacementMap;
                        e.displacementScale.value = t.displacementScale;
                        e.displacementBias.value = t.displacementBias;
                      }
                    })(e, r);
                  } else {
                    if (r.isMeshDistanceMaterial) {
                      t(e, r);
                      (function (e, t) {
                        if (t.displacementMap) {
                          e.displacementMap.value = t.displacementMap;
                          e.displacementScale.value = t.displacementScale;
                          e.displacementBias.value = t.displacementBias;
                        }
                        e.referencePosition.value.copy(t.referencePosition);
                        e.nearDistance.value = t.nearDistance;
                        e.farDistance.value = t.farDistance;
                      })(e, r);
                    } else {
                      if (r.isMeshNormalMaterial) {
                        t(e, r);
                        (function (e, t) {
                          if (t.bumpMap) {
                            e.bumpMap.value = t.bumpMap;
                            e.bumpScale.value = t.bumpScale;
                            if (1 === t.side) {
                              e.bumpScale.value *= -1;
                            }
                          }
                          if (t.normalMap) {
                            e.normalMap.value = t.normalMap;
                            e.normalScale.value.copy(t.normalScale);
                            if (1 === t.side) {
                              e.normalScale.value.negate();
                            }
                          }
                          if (t.displacementMap) {
                            e.displacementMap.value = t.displacementMap;
                            e.displacementScale.value = t.displacementScale;
                            e.displacementBias.value = t.displacementBias;
                          }
                        })(e, r);
                      } else {
                        if (r.isLineBasicMaterial) {
                          (function (e, t) {
                            e.diffuse.value.copy(t.color);
                            e.opacity.value = t.opacity;
                          })(e, r);
                          if (r.isLineDashedMaterial) {
                            (function (e, t) {
                              e.dashSize.value = t.dashSize;
                              e.totalSize.value = t.dashSize + t.gapSize;
                              e.scale.value = t.scale;
                            })(e, r);
                          }
                        } else {
                          if (r.isPointsMaterial) {
                            (function (e, t, n, r) {
                              e.diffuse.value.copy(t.color);
                              e.opacity.value = t.opacity;
                              e.size.value = t.size * n;
                              e.scale.value = .5 * r;
                              if (t.map) {
                                e.map.value = t.map;
                              }
                              if (t.alphaMap) {
                                e.alphaMap.value = t.alphaMap;
                              }
                              var i;
                              if (t.map) {
                                i = t.map;
                              } else {
                                if (t.alphaMap) {
                                  i = t.alphaMap;
                                }
                              }
                              if (void 0 !== i) {
                                if (!0 === i.matrixAutoUpdate) {
                                  i.updateMatrix();
                                }
                                e.uvTransform.value.copy(i.matrix);
                              }
                            })(e, r, i, a);
                          } else {
                            if (r.isSpriteMaterial) {
                              (function (e, t) {
                                e.diffuse.value.copy(t.color);
                                e.opacity.value = t.opacity;
                                e.rotation.value = t.rotation;
                                if (t.map) {
                                  e.map.value = t.map;
                                }
                                if (t.alphaMap) {
                                  e.alphaMap.value = t.alphaMap;
                                }
                                var n;
                                if (t.map) {
                                  n = t.map;
                                } else {
                                  if (t.alphaMap) {
                                    n = t.alphaMap;
                                  }
                                }
                                if (void 0 !== n) {
                                  if (!0 === n.matrixAutoUpdate) {
                                    n.updateMatrix();
                                  }
                                  e.uvTransform.value.copy(n.matrix);
                                }
                              })(e, r);
                            } else {
                              if (r.isShadowMaterial) {
                                e.color.value.copy(r.color);
                                e.opacity.value = r.opacity;
                              } else {
                                if (r.isShaderMaterial) {
                                  r.uniformsNeedUpdate = !1;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  };
}
function di(e) {
  var t = void 0 !== (e = e || {}).canvas ? e.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
  var n = void 0 !== e.context ? e.context : null;
  var r = void 0 !== e.alpha && e.alpha;
  var i = void 0 === e.depth || e.depth;
  var a = void 0 === e.stencil || e.stencil;
  var o = void 0 !== e.antialias && e.antialias;
  var s = void 0 === e.premultipliedAlpha || e.premultipliedAlpha;
  var l = void 0 !== e.preserveDrawingBuffer && e.preserveDrawingBuffer;
  var c = void 0 !== e.powerPreference ? e.powerPreference : "default";
  var u = void 0 !== e.failIfMajorPerformanceCaveat && e.failIfMajorPerformanceCaveat;
  var h = null;
  var d = null;
  this.domElement = t;
  this.debug = {
    checkShaderErrors: !0
  };
  this.autoClear = !0;
  this.autoClearColor = !0;
  this.autoClearDepth = !0;
  this.autoClearStencil = !0;
  this.sortObjects = !0;
  this.clippingPlanes = [];
  this.localClippingEnabled = !1;
  this.gammaFactor = 2;
  this.outputEncoding = 3e3;
  this.physicallyCorrectLights = !1;
  this.toneMapping = 0;
  this.toneMappingExposure = 1;
  this.maxMorphTargets = 8;
  this.maxMorphNormals = 4;
  var p = this;
  var f = !1;
  var m = null;
  var v = 0;
  var g = 0;
  var y = null;
  var x = null;
  var b = -1;
  var M = null;
  var S = null;
  var T = new A();
  var E = new A();
  var L = null;
  var R = t.width;
  var P = t.height;
  var I = 1;
  var O = null;
  var k = null;
  var N = new A(0, 0, R, P);
  var D = new A(0, 0, R, P);
  var U = !1;
  var B = new an();
  var z = !1;
  var F = !1;
  var H = new ae();
  var G = new C();
  var j = {
    background: null,
    fog: null,
    environment: null,
    overrideMaterial: null,
    isScene: !0
  };
  function V() {
    return null === y ? I : 1;
  }
  var W;
  var q;
  var X;
  var Y;
  var Z;
  var J;
  var K;
  var Q;
  var $;
  var ee;
  var te;
  var ne;
  var re;
  var ie;
  var oe;
  var se;
  var le;
  var ce;
  var ue;
  var he;
  var de;
  var pe = n;
  function fe(e, n) {
    for (var r = 0; r < e.length; r++) {
      var i = e[r];
      var a = t.getContext(i, n);
      if (null !== a) {
        return a;
      }
    }
    return null;
  }
  try {
    var me = {
      alpha: r,
      depth: i,
      stencil: a,
      antialias: o,
      premultipliedAlpha: s,
      preserveDrawingBuffer: l,
      powerPreference: c,
      failIfMajorPerformanceCaveat: u
    };
    t.addEventListener("webglcontextlost", be, !1);
    t.addEventListener("webglcontextrestored", _e, !1);
    if (null === pe) {
      var ve = ["webgl2", "webgl", "experimental-webgl"];
      if (!0 === p.isWebGL1Renderer) {
        ve.shift();
      }
      if (null === (pe = fe(ve, me))) {
        throw fe(ve) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    }
    if (void 0 === pe.getShaderPrecisionFormat) {
      pe.getShaderPrecisionFormat = function () {
        return {
          rangeMin: 1,
          rangeMax: 1,
          precision: 1
        };
      };
    }
  } catch (Ce) {
    throw console.error("THREE.WebGLRenderer: " + Ce.message), Ce;
  }
  function ge() {
    W = new yn(pe);
    if (!1 === (q = new mn(pe, W, e)).isWebGL2) {
      W.get("WEBGL_depth_texture");
      W.get("OES_texture_float");
      W.get("OES_texture_half_float");
      W.get("OES_texture_half_float_linear");
      W.get("OES_standard_derivatives");
      W.get("OES_element_index_uint");
      W.get("OES_vertex_array_object");
      W.get("ANGLE_instanced_arrays");
    }
    W.get("OES_texture_float_linear");
    he = new oi(pe, W, q);
    (X = new ii(pe, W, q)).scissor(E.copy(D).multiplyScalar(I).floor());
    X.viewport(T.copy(N).multiplyScalar(I).floor());
    Y = new _n(pe);
    Z = new Vr();
    J = new ai(pe, W, X, Z, q, he, Y);
    K = new gn(p);
    Q = new sn(pe, q);
    de = new pn(pe, W, Q, q);
    $ = new xn(pe, Q, Y, de);
    ee = new Tn(pe, $, Q, Y);
    le = new Sn(pe);
    oe = new vn(Z);
    te = new jr(p, K, W, q, de, oe);
    ne = new hi(Z);
    re = new Yr(Z);
    ie = new ei(W, q);
    se = new dn(p, K, X, ee, s);
    ce = new fn(pe, W, Y, q);
    ue = new bn(pe, W, Y, q);
    Y.programs = te.programs;
    p.capabilities = q;
    p.extensions = W;
    p.properties = Z;
    p.renderLists = re;
    p.state = X;
    p.info = Y;
  }
  ge();
  var ye = new ui(p, pe);
  this.xr = ye;
  var xe = new ri(p, ee, q.maxTextureSize);
  function be(e) {
    e.preventDefault();
    console.log("THREE.WebGLRenderer: Context Lost.");
    f = !0;
  }
  function _e() {
    console.log("THREE.WebGLRenderer: Context Restored.");
    f = !1;
    ge();
  }
  function we(e) {
    var t = e.target;
    t.removeEventListener("dispose", we);
    (function (e) {
      Me(e);
      Z.remove(e);
    })(t);
  }
  function Me(e) {
    var t = Z.get(e).program;
    if (void 0 !== t) {
      te.releaseProgram(t);
    }
  }
  this.shadowMap = xe;
  this.getContext = function () {
    return pe;
  };
  this.getContextAttributes = function () {
    return pe.getContextAttributes();
  };
  this.forceContextLoss = function () {
    var e = W.get("WEBGL_lose_context");
    if (e) {
      e.loseContext();
    }
  };
  this.forceContextRestore = function () {
    var e = W.get("WEBGL_lose_context");
    if (e) {
      e.restoreContext();
    }
  };
  this.getPixelRatio = function () {
    return I;
  };
  this.setPixelRatio = function (e) {
    if (void 0 !== e) {
      I = e;
      this.setSize(R, P, !1);
    }
  };
  this.getSize = function (e) {
    if (void 0 === e) {
      console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument");
      e = new w();
    }
    return e.set(R, P);
  };
  this.setSize = function (e, n, r) {
    if (ye.isPresenting) {
      console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
    } else {
      R = e;
      P = n;
      t.width = Math.floor(e * I);
      t.height = Math.floor(n * I);
      if (!1 !== r) {
        t.style.width = e + "px";
        t.style.height = n + "px";
      }
      this.setViewport(0, 0, e, n);
    }
  };
  this.getDrawingBufferSize = function (e) {
    if (void 0 === e) {
      console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument");
      e = new w();
    }
    return e.set(R * I, P * I).floor();
  };
  this.setDrawingBufferSize = function (e, n, r) {
    R = e;
    P = n;
    I = r;
    t.width = Math.floor(e * r);
    t.height = Math.floor(n * r);
    this.setViewport(0, 0, e, n);
  };
  this.getCurrentViewport = function (e) {
    if (void 0 === e) {
      console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument");
      e = new A();
    }
    return e.copy(T);
  };
  this.getViewport = function (e) {
    return e.copy(N);
  };
  this.setViewport = function (e, t, n, r) {
    if (e.isVector4) {
      N.set(e.x, e.y, e.z, e.w);
    } else {
      N.set(e, t, n, r);
    }
    X.viewport(T.copy(N).multiplyScalar(I).floor());
  };
  this.getScissor = function (e) {
    return e.copy(D);
  };
  this.setScissor = function (e, t, n, r) {
    if (e.isVector4) {
      D.set(e.x, e.y, e.z, e.w);
    } else {
      D.set(e, t, n, r);
    }
    X.scissor(E.copy(D).multiplyScalar(I).floor());
  };
  this.getScissorTest = function () {
    return U;
  };
  this.setScissorTest = function (e) {
    X.setScissorTest(U = e);
  };
  this.setOpaqueSort = function (e) {
    O = e;
  };
  this.setTransparentSort = function (e) {
    k = e;
  };
  this.getClearColor = function () {
    return se.getClearColor();
  };
  this.setClearColor = function () {
    se.setClearColor.apply(se, arguments);
  };
  this.getClearAlpha = function () {
    return se.getClearAlpha();
  };
  this.setClearAlpha = function () {
    se.setClearAlpha.apply(se, arguments);
  };
  this.clear = function (e, t, n) {
    var r = 0;
    if (void 0 === e || e) {
      r |= 16384;
    }
    if (void 0 === t || t) {
      r |= 256;
    }
    if (void 0 === n || n) {
      r |= 1024;
    }
    pe.clear(r);
  };
  this.clearColor = function () {
    this.clear(!0, !1, !1);
  };
  this.clearDepth = function () {
    this.clear(!1, !0, !1);
  };
  this.clearStencil = function () {
    this.clear(!1, !1, !0);
  };
  this.dispose = function () {
    t.removeEventListener("webglcontextlost", be, !1);
    t.removeEventListener("webglcontextrestored", _e, !1);
    re.dispose();
    ie.dispose();
    Z.dispose();
    K.dispose();
    ee.dispose();
    de.dispose();
    ye.dispose();
    Te.stop();
  };
  this.renderBufferImmediate = function (e, t) {
    de.initAttributes();
    var n = Z.get(e);
    if (e.hasPositions && !n.position) {
      n.position = pe.createBuffer();
    }
    if (e.hasNormals && !n.normal) {
      n.normal = pe.createBuffer();
    }
    if (e.hasUvs && !n.uv) {
      n.uv = pe.createBuffer();
    }
    if (e.hasColors && !n.color) {
      n.color = pe.createBuffer();
    }
    var r = t.getAttributes();
    if (e.hasPositions) {
      pe.bindBuffer(34962, n.position);
      pe.bufferData(34962, e.positionArray, 35048);
      de.enableAttribute(r.position);
      pe.vertexAttribPointer(r.position, 3, 5126, !1, 0, 0);
    }
    if (e.hasNormals) {
      pe.bindBuffer(34962, n.normal);
      pe.bufferData(34962, e.normalArray, 35048);
      de.enableAttribute(r.normal);
      pe.vertexAttribPointer(r.normal, 3, 5126, !1, 0, 0);
    }
    if (e.hasUvs) {
      pe.bindBuffer(34962, n.uv);
      pe.bufferData(34962, e.uvArray, 35048);
      de.enableAttribute(r.uv);
      pe.vertexAttribPointer(r.uv, 2, 5126, !1, 0, 0);
    }
    if (e.hasColors) {
      pe.bindBuffer(34962, n.color);
      pe.bufferData(34962, e.colorArray, 35048);
      de.enableAttribute(r.color);
      pe.vertexAttribPointer(r.color, 3, 5126, !1, 0, 0);
    }
    de.disableUnusedAttributes();
    pe.drawArrays(4, 0, e.count);
    e.count = 0;
  };
  this.renderBufferDirect = function (e, t, n, r, i, a) {
    if (null === t) {
      t = j;
    }
    var o = i.isMesh && i.matrixWorld.determinant() < 0;
    var s = Pe(e, t, r, i);
    X.setMaterial(r, o);
    var l = n.index;
    var c = n.attributes.position;
    if (null === l) {
      if (void 0 === c || 0 === c.count) {
        return;
      }
    } else if (0 === l.count) {
      return;
    }
    var u;
    var h = 1;
    if (!0 === r.wireframe) {
      l = $.getWireframeAttribute(n);
      h = 2;
    }
    if (r.morphTargets || r.morphNormals) {
      le.update(i, n, r, s);
    }
    de.setup(i, r, s, n, l);
    var d = ce;
    if (null !== l) {
      u = Q.get(l);
      (d = ue).setIndex(u);
    }
    var p = null !== l ? l.count : c.count;
    var f = n.drawRange.start * h;
    var m = n.drawRange.count * h;
    var v = null !== a ? a.start * h : 0;
    var g = null !== a ? a.count * h : 1 / 0;
    var y = Math.max(f, v);
    var x = Math.min(p, f + m, v + g) - 1;
    var b = Math.max(0, x - y + 1);
    if (0 !== b) {
      if (i.isMesh) {
        if (!0 === r.wireframe) {
          X.setLineWidth(r.wireframeLinewidth * V());
          d.setMode(1);
        } else {
          d.setMode(4);
        }
      } else if (i.isLine) {
        var _ = r.linewidth;
        if (void 0 === _) {
          _ = 1;
        }
        X.setLineWidth(_ * V());
        if (i.isLineSegments) {
          d.setMode(1);
        } else {
          if (i.isLineLoop) {
            d.setMode(2);
          } else {
            d.setMode(3);
          }
        }
      } else if (i.isPoints) {
        d.setMode(0);
      } else {
        if (i.isSprite) {
          d.setMode(4);
        }
      }
      if (i.isInstancedMesh) {
        d.renderInstances(y, b, i.count);
      } else if (n.isInstancedBufferGeometry) {
        var w = Math.min(n.instanceCount, n._maxInstanceCount);
        d.renderInstances(y, b, w);
      } else {
        d.render(y, b);
      }
    }
  };
  this.compile = function (e, t) {
    (d = ie.get(e, t)).init();
    e.traverseVisible(function (e) {
      if (e.isLight && e.layers.test(t.layers)) {
        d.pushLight(e);
        if (e.castShadow) {
          d.pushShadow(e);
        }
      }
    });
    d.setupLights(t);
    var n = new WeakMap();
    e.traverse(function (t) {
      var r = t.material;
      if (r) {
        if (Array.isArray(r)) {
          for (var i = 0; i < r.length; i++) {
            var a = r[i];
            if (!1 === n.has(a)) {
              Re(a, e, t);
              n.set(a);
            }
          }
        } else if (!1 === n.has(r)) {
          Re(r, e, t);
          n.set(r);
        }
      }
    });
  };
  var Se = null;
  var Te = new on();
  function Ee(e, t, n, r) {
    if (!1 !== e.visible) {
      if (e.layers.test(t.layers)) {
        if (e.isGroup) {
          n = e.renderOrder;
        } else if (e.isLOD) {
          if (!0 === e.autoUpdate) {
            e.update(t);
          }
        } else if (e.isLight) {
          d.pushLight(e);
          if (e.castShadow) {
            d.pushShadow(e);
          }
        } else if (e.isSprite) {
          if (!e.frustumCulled || B.intersectsSprite(e)) {
            if (r) {
              G.setFromMatrixPosition(e.matrixWorld).applyMatrix4(H);
            }
            var i = ee.update(e);
            var a = e.material;
            if (a.visible) {
              h.push(e, i, a, n, G.z, null);
            }
          }
        } else if (e.isImmediateRenderObject) {
          if (r) {
            G.setFromMatrixPosition(e.matrixWorld).applyMatrix4(H);
          }
          h.push(e, null, e.material, n, G.z, null);
        } else if ((e.isMesh || e.isLine || e.isPoints) && (e.isSkinnedMesh && e.skeleton.frame !== Y.render.frame && (e.skeleton.update(), e.skeleton.frame = Y.render.frame), !e.frustumCulled || B.intersectsObject(e))) {
          if (r) {
            G.setFromMatrixPosition(e.matrixWorld).applyMatrix4(H);
          }
          var o = ee.update(e);
          var s = e.material;
          if (Array.isArray(s)) {
            for (var l = o.groups, c = 0, u = l.length; c < u; c++) {
              var p = l[c];
              var f = s[p.materialIndex];
              if (f && f.visible) {
                h.push(e, o, f, n, G.z, p);
              }
            }
          } else if (s.visible) {
            h.push(e, o, s, n, G.z, null);
          }
        }
      }
      for (var m = e.children, v = 0, g = m.length; v < g; v++) {
        Ee(m[v], t, n, r);
      }
    }
  }
  function Ae(e, t, n) {
    for (var r = !0 === t.isScene ? t.overrideMaterial : null, i = 0, a = e.length; i < a; i++) {
      var o = e[i];
      var s = o.object;
      var l = o.geometry;
      var c = null === r ? o.material : r;
      var u = o.group;
      if (n.isArrayCamera) {
        S = n;
        for (var h = n.cameras, p = 0, f = h.length; p < f; p++) {
          var m = h[p];
          if (s.layers.test(m.layers)) {
            X.viewport(T.copy(m.viewport));
            d.setupLights(m);
            Le(s, t, m, l, c, u);
          }
        }
      } else {
        S = null;
        Le(s, t, n, l, c, u);
      }
    }
  }
  function Le(e, t, n, r, i, a) {
    e.onBeforeRender(p, t, n, r, i, a);
    d = ie.get(t, S || n);
    e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, e.matrixWorld);
    e.normalMatrix.getNormalMatrix(e.modelViewMatrix);
    if (e.isImmediateRenderObject) {
      var o = Pe(n, t, i, e);
      X.setMaterial(i);
      de.reset();
      (function (e, t) {
        e.render(function (e) {
          p.renderBufferImmediate(e, t);
        });
      })(e, o);
    } else {
      p.renderBufferDirect(n, t, r, i, e, a);
    }
    e.onAfterRender(p, t, n, r, i, a);
    d = ie.get(t, S || n);
  }
  function Re(e, t, n) {
    if (!0 !== t.isScene) {
      t = j;
    }
    var r = Z.get(e);
    var i = d.state.lights;
    var a = d.state.shadowsArray;
    var o = i.state.version;
    var s = te.getParameters(e, i.state, a, t, n);
    var l = te.getProgramCacheKey(s);
    var c = r.program;
    var u = !0;
    if (void 0 === c) {
      e.addEventListener("dispose", we);
    } else if (c.cacheKey !== l) {
      Me(e);
    } else if (r.lightsStateVersion !== o) {
      u = !1;
    } else {
      if (void 0 !== s.shaderID) {
        var h = e.isMeshStandardMaterial ? t.environment : null;
        return void (r.envMap = K.get(e.envMap || h));
      }
      u = !1;
    }
    if (u) {
      s.uniforms = te.getUniforms(e);
      e.onBeforeCompile(s, p);
      c = te.acquireProgram(s, l);
      r.program = c;
      r.uniforms = s.uniforms;
      r.outputEncoding = s.outputEncoding;
    }
    var f = r.uniforms;
    if (!((e.isShaderMaterial || e.isRawShaderMaterial) && !0 !== e.clipping)) {
      r.numClippingPlanes = oe.numPlanes;
      r.numIntersection = oe.numIntersection;
      f.clippingPlanes = oe.uniform;
    }
    r.environment = e.isMeshStandardMaterial ? t.environment : null;
    r.fog = t.fog;
    r.envMap = K.get(e.envMap || r.environment);
    r.needsLights = function (e) {
      return e.isMeshLambertMaterial || e.isMeshToonMaterial || e.isMeshPhongMaterial || e.isMeshStandardMaterial || e.isShadowMaterial || e.isShaderMaterial && !0 === e.lights;
    }(e);
    r.lightsStateVersion = o;
    if (r.needsLights) {
      f.ambientLightColor.value = i.state.ambient;
      f.lightProbe.value = i.state.probe;
      f.directionalLights.value = i.state.directional;
      f.directionalLightShadows.value = i.state.directionalShadow;
      f.spotLights.value = i.state.spot;
      f.spotLightShadows.value = i.state.spotShadow;
      f.rectAreaLights.value = i.state.rectArea;
      f.ltc_1.value = i.state.rectAreaLTC1;
      f.ltc_2.value = i.state.rectAreaLTC2;
      f.pointLights.value = i.state.point;
      f.pointLightShadows.value = i.state.pointShadow;
      f.hemisphereLights.value = i.state.hemi;
      f.directionalShadowMap.value = i.state.directionalShadowMap;
      f.directionalShadowMatrix.value = i.state.directionalShadowMatrix;
      f.spotShadowMap.value = i.state.spotShadowMap;
      f.spotShadowMatrix.value = i.state.spotShadowMatrix;
      f.pointShadowMap.value = i.state.pointShadowMap;
      f.pointShadowMatrix.value = i.state.pointShadowMatrix;
    }
    var m = r.program.getUniforms();
    var v = wr.seqWithValue(m.seq, f);
    r.uniformsList = v;
  }
  function Pe(e, t, n, r) {
    if (!0 !== t.isScene) {
      t = j;
    }
    J.resetTextureUnits();
    var i = t.fog;
    var a = n.isMeshStandardMaterial ? t.environment : null;
    var o = null === y ? p.outputEncoding : y.texture.encoding;
    var s = K.get(n.envMap || a);
    var l = Z.get(n);
    var c = d.state.lights;
    if (!0 === z && (!0 === F || e !== M)) {
      var u = e === M && n.id === b;
      oe.setState(n, e, u);
    }
    if (n.version === l.__version) {
      if (n.fog && l.fog !== i || l.environment !== a || l.needsLights && l.lightsStateVersion !== c.state.version) {
        Re(n, t, r);
      } else {
        if (void 0 === l.numClippingPlanes || l.numClippingPlanes === oe.numPlanes && l.numIntersection === oe.numIntersection) {
          if (l.outputEncoding !== o || l.envMap !== s) {
            Re(n, t, r);
          }
        } else {
          Re(n, t, r);
        }
      }
    } else {
      Re(n, t, r);
      l.__version = n.version;
    }
    var h;
    var f;
    var m = !1;
    var v = !1;
    var g = !1;
    var x = l.program;
    var w = x.getUniforms();
    var S = l.uniforms;
    if (X.useProgram(x.program)) {
      m = !0;
      v = !0;
      g = !0;
    }
    if (n.id !== b) {
      b = n.id;
      v = !0;
    }
    if (m || M !== e) {
      w.setValue(pe, "projectionMatrix", e.projectionMatrix);
      if (q.logarithmicDepthBuffer) {
        w.setValue(pe, "logDepthBufFC", 2 / (Math.log(e.far + 1) / Math.LN2));
      }
      if (M !== e) {
        M = e;
        v = !0;
        g = !0;
      }
      if (n.isShaderMaterial || n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshStandardMaterial || n.envMap) {
        var T = w.map.cameraPosition;
        if (void 0 !== T) {
          T.setValue(pe, G.setFromMatrixPosition(e.matrixWorld));
        }
      }
      if (n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial) {
        w.setValue(pe, "isOrthographic", !0 === e.isOrthographicCamera);
      }
      if (n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial || n.isShadowMaterial || n.skinning) {
        w.setValue(pe, "viewMatrix", e.matrixWorldInverse);
      }
    }
    if (n.skinning) {
      w.setOptional(pe, r, "bindMatrix");
      w.setOptional(pe, r, "bindMatrixInverse");
      var E = r.skeleton;
      if (E) {
        var A = E.bones;
        if (q.floatVertexTextures) {
          if (void 0 === E.boneTexture) {
            var L = Math.sqrt(4 * A.length);
            L = _.ceilPowerOfTwo(L);
            L = Math.max(L, 4);
            var R = new Float32Array(L * L * 4);
            R.set(E.boneMatrices);
            var C = new tn(R, L, L, 1023, 1015);
            E.boneMatrices = R;
            E.boneTexture = C;
            E.boneTextureSize = L;
          }
          w.setValue(pe, "boneTexture", E.boneTexture, J);
          w.setValue(pe, "boneTextureSize", E.boneTextureSize);
        } else {
          w.setOptional(pe, E, "boneMatrices");
        }
      }
    }
    if (v || l.receiveShadow !== r.receiveShadow) {
      l.receiveShadow = r.receiveShadow;
      w.setValue(pe, "receiveShadow", r.receiveShadow);
    }
    if (v) {
      w.setValue(pe, "toneMappingExposure", p.toneMappingExposure);
      if (l.needsLights) {
        f = g;
        (h = S).ambientLightColor.needsUpdate = f;
        h.lightProbe.needsUpdate = f;
        h.directionalLights.needsUpdate = f;
        h.directionalLightShadows.needsUpdate = f;
        h.pointLights.needsUpdate = f;
        h.pointLightShadows.needsUpdate = f;
        h.spotLights.needsUpdate = f;
        h.spotLightShadows.needsUpdate = f;
        h.rectAreaLights.needsUpdate = f;
        h.hemisphereLights.needsUpdate = f;
      }
      if (i && n.fog) {
        ne.refreshFogUniforms(S, i);
      }
      ne.refreshMaterialUniforms(S, n, I, P);
      wr.upload(pe, l.uniformsList, S, J);
    }
    if (n.isShaderMaterial && !0 === n.uniformsNeedUpdate) {
      wr.upload(pe, l.uniformsList, S, J);
      n.uniformsNeedUpdate = !1;
    }
    if (n.isSpriteMaterial) {
      w.setValue(pe, "center", r.center);
    }
    w.setValue(pe, "modelViewMatrix", r.modelViewMatrix);
    w.setValue(pe, "normalMatrix", r.normalMatrix);
    w.setValue(pe, "modelMatrix", r.matrixWorld);
    return x;
  }
  Te.setAnimationLoop(function (e) {
    if (!ye.isPresenting) {
      if (Se) {
        Se(e);
      }
    }
  });
  if ("undefined" !== typeof window) {
    Te.setContext(window);
  }
  this.setAnimationLoop = function (e) {
    Se = e;
    ye.setAnimationLoop(e);
    if (null === e) {
      Te.stop();
    } else {
      Te.start();
    }
  };
  this.render = function (e, t) {
    var n;
    var r;
    if (void 0 !== arguments[2]) {
      console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead.");
      n = arguments[2];
    }
    if (void 0 !== arguments[3]) {
      console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead.");
      r = arguments[3];
    }
    if (void 0 === t || !0 === t.isCamera) {
      if (!0 !== f) {
        de.resetDefaultState();
        b = -1;
        M = null;
        if (!0 === e.autoUpdate) {
          e.updateMatrixWorld();
        }
        if (null === t.parent) {
          t.updateMatrixWorld();
        }
        if (!0 === ye.enabled && !0 === ye.isPresenting) {
          t = ye.getCamera(t);
        }
        if (!0 === e.isScene) {
          e.onBeforeRender(p, e, t, n || y);
        }
        (d = ie.get(e, t)).init();
        H.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse);
        B.setFromProjectionMatrix(H);
        F = this.localClippingEnabled;
        z = oe.init(this.clippingPlanes, F, t);
        (h = re.get(e, t)).init();
        Ee(e, t, 0, p.sortObjects);
        h.finish();
        if (!0 === p.sortObjects) {
          h.sort(O, k);
        }
        if (!0 === z) {
          oe.beginShadows();
        }
        var i = d.state.shadowsArray;
        xe.render(i, e, t);
        d.setupLights(t);
        if (!0 === z) {
          oe.endShadows();
        }
        if (!0 === this.info.autoReset) {
          this.info.reset();
        }
        if (void 0 !== n) {
          this.setRenderTarget(n);
        }
        se.render(h, e, t, r);
        var a = h.opaque;
        var o = h.transparent;
        if (a.length > 0) {
          Ae(a, e, t);
        }
        if (o.length > 0) {
          Ae(o, e, t);
        }
        if (!0 === e.isScene) {
          e.onAfterRender(p, e, t);
        }
        if (null !== y) {
          J.updateRenderTargetMipmap(y);
          J.updateMultisampleRenderTarget(y);
        }
        X.buffers.depth.setTest(!0);
        X.buffers.depth.setMask(!0);
        X.buffers.color.setMask(!0);
        X.setPolygonOffset(!1);
        h = null;
        d = null;
      }
    } else {
      console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
    }
  };
  this.setFramebuffer = function (e) {
    if (m !== e && null === y) {
      pe.bindFramebuffer(36160, e);
    }
    m = e;
  };
  this.getActiveCubeFace = function () {
    return v;
  };
  this.getActiveMipmapLevel = function () {
    return g;
  };
  this.getRenderList = function () {
    return h;
  };
  this.setRenderList = function (e) {
    h = e;
  };
  this.getRenderState = function () {
    return d;
  };
  this.setRenderState = function (e) {
    d = e;
  };
  this.getRenderTarget = function () {
    return y;
  };
  this.setRenderTarget = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
    y = e;
    v = t;
    g = n;
    if (e && void 0 === Z.get(e).__webglFramebuffer) {
      J.setupRenderTarget(e);
    }
    var r = m;
    var i = !1;
    if (e) {
      var a = Z.get(e).__webglFramebuffer;
      if (e.isWebGLCubeRenderTarget) {
        r = a[t];
        i = !0;
      } else {
        r = e.isWebGLMultisampleRenderTarget ? Z.get(e).__webglMultisampledFramebuffer : a;
      }
      T.copy(e.viewport);
      E.copy(e.scissor);
      L = e.scissorTest;
    } else {
      T.copy(N).multiplyScalar(I).floor();
      E.copy(D).multiplyScalar(I).floor();
      L = U;
    }
    if (x !== r) {
      pe.bindFramebuffer(36160, r);
      x = r;
    }
    X.viewport(T);
    X.scissor(E);
    X.setScissorTest(L);
    if (i) {
      var o = Z.get(e.texture);
      pe.framebufferTexture2D(36160, 36064, 34069 + t, o.__webglTexture, n);
    }
  };
  this.readRenderTargetPixels = function (e, t, n, r, i, a, o) {
    if (e && e.isWebGLRenderTarget) {
      var s = Z.get(e).__webglFramebuffer;
      if (e.isWebGLCubeRenderTarget && void 0 !== o) {
        s = s[o];
      }
      if (s) {
        var l = !1;
        if (s !== x) {
          pe.bindFramebuffer(36160, s);
          l = !0;
        }
        try {
          var c = e.texture;
          var u = c.format;
          var h = c.type;
          if (1023 !== u && he.convert(u) !== pe.getParameter(35739)) {
            return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
          }
          if (1009 !== h && he.convert(h) !== pe.getParameter(35738) && (1015 !== h || !(q.isWebGL2 || W.get("OES_texture_float") || W.get("WEBGL_color_buffer_float"))) && (1016 !== h || !(q.isWebGL2 ? W.get("EXT_color_buffer_float") : W.get("EXT_color_buffer_half_float")))) {
            return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
          }
          if (36053 === pe.checkFramebufferStatus(36160)) {
            if (t >= 0 && t <= e.width - r && n >= 0 && n <= e.height - i) {
              pe.readPixels(t, n, r, i, he.convert(u), he.convert(h), a);
            }
          } else {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.");
          }
        } finally {
          if (l) {
            pe.bindFramebuffer(36160, x);
          }
        }
      }
    } else {
      console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
    }
  };
  this.copyFramebufferToTexture = function (e, t, n) {
    if (void 0 === n) {
      n = 0;
    }
    var r = Math.pow(2, -n);
    var i = Math.floor(t.image.width * r);
    var a = Math.floor(t.image.height * r);
    var o = he.convert(t.format);
    J.setTexture2D(t, 0);
    pe.copyTexImage2D(3553, n, o, e.x, e.y, i, a, 0);
    X.unbindTexture();
  };
  this.copyTextureToTexture = function (e, t, n, r) {
    if (void 0 === r) {
      r = 0;
    }
    var i = t.image.width;
    var a = t.image.height;
    var o = he.convert(n.format);
    var s = he.convert(n.type);
    J.setTexture2D(n, 0);
    pe.pixelStorei(37440, n.flipY);
    pe.pixelStorei(37441, n.premultiplyAlpha);
    pe.pixelStorei(3317, n.unpackAlignment);
    if (t.isDataTexture) {
      pe.texSubImage2D(3553, r, e.x, e.y, i, a, o, s, t.image.data);
    } else {
      if (t.isCompressedTexture) {
        pe.compressedTexSubImage2D(3553, r, e.x, e.y, t.mipmaps[0].width, t.mipmaps[0].height, o, t.mipmaps[0].data);
      } else {
        pe.texSubImage2D(3553, r, e.x, e.y, o, s, t.image);
      }
    }
    if (0 === r && n.generateMipmaps) {
      pe.generateMipmap(3553);
    }
    X.unbindTexture();
  };
  this.initTexture = function (e) {
    J.setTexture2D(e, 0);
    X.unbindTexture();
  };
  if ("undefined" !== typeof __THREE_DEVTOOLS__) {
    __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
      detail: this
    }));
  }
}
function pi(e) {
  di.call(this, e);
}
si.prototype = Object.assign(Object.create(Kt.prototype), {
  constructor: si,
  isArrayCamera: !0
});
li.prototype = Object.assign(Object.create(Pe.prototype), {
  constructor: li,
  isGroup: !0
});
Object.assign(ci.prototype, {
  constructor: ci,
  getHandSpace: function () {
    if (null === this._hand && (this._hand = new li(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = [], this._hand.inputState = {
      pinching: !1
    }, window.XRHand)) {
      for (var e = 0; e <= window.XRHand.LITTLE_PHALANX_TIP; e++) {
        var t = new li();
        t.matrixAutoUpdate = !1;
        t.visible = !1;
        this._hand.joints.push(t);
        this._hand.add(t);
      }
    }
    return this._hand;
  },
  getTargetRaySpace: function () {
    if (null === this._targetRay) {
      this._targetRay = new li();
      this._targetRay.matrixAutoUpdate = !1;
      this._targetRay.visible = !1;
    }
    return this._targetRay;
  },
  getGripSpace: function () {
    if (null === this._grip) {
      this._grip = new li();
      this._grip.matrixAutoUpdate = !1;
      this._grip.visible = !1;
    }
    return this._grip;
  },
  dispatchEvent: function (e) {
    if (null !== this._targetRay) {
      this._targetRay.dispatchEvent(e);
    }
    if (null !== this._grip) {
      this._grip.dispatchEvent(e);
    }
    if (null !== this._hand) {
      this._hand.dispatchEvent(e);
    }
    return this;
  },
  disconnect: function (e) {
    this.dispatchEvent({
      type: "disconnected",
      data: e
    });
    if (null !== this._targetRay) {
      this._targetRay.visible = !1;
    }
    if (null !== this._grip) {
      this._grip.visible = !1;
    }
    if (null !== this._hand) {
      this._hand.visible = !1;
    }
    return this;
  },
  update: function (e, t, n) {
    var r = null;
    var i = null;
    var a = null;
    var o = this._targetRay;
    var s = this._grip;
    var l = this._hand;
    if (e) {
      if (l && e.hand) {
        a = !0;
        for (var c = 0; c <= window.XRHand.LITTLE_PHALANX_TIP; c++) {
          if (e.hand[c]) {
            var u = t.getJointPose(e.hand[c], n);
            var h = l.joints[c];
            if (null !== u) {
              h.matrix.fromArray(u.transform.matrix);
              h.matrix.decompose(h.position, h.rotation, h.scale);
              h.jointRadius = u.radius;
            }
            h.visible = null !== u;
            var d = l.joints[window.XRHand.INDEX_PHALANX_TIP];
            var p = l.joints[window.XRHand.THUMB_PHALANX_TIP];
            var f = d.position.distanceTo(p.position);
            if (l.inputState.pinching && f > .025) {
              l.inputState.pinching = !1;
              this.dispatchEvent({
                type: "pinchend",
                handedness: e.handedness,
                target: this
              });
            } else {
              if (!l.inputState.pinching && f <= .015) {
                l.inputState.pinching = !0;
                this.dispatchEvent({
                  type: "pinchstart",
                  handedness: e.handedness,
                  target: this
                });
              }
            }
          }
        }
      } else {
        if (null !== o && null !== (r = t.getPose(e.targetRaySpace, n))) {
          o.matrix.fromArray(r.transform.matrix);
          o.matrix.decompose(o.position, o.rotation, o.scale);
        }
        if (null !== s && e.gripSpace && null !== (i = t.getPose(e.gripSpace, n))) {
          s.matrix.fromArray(i.transform.matrix);
          s.matrix.decompose(s.position, s.rotation, s.scale);
        }
      }
    }
    if (null !== o) {
      o.visible = null !== r;
    }
    if (null !== s) {
      s.visible = null !== i;
    }
    if (null !== l) {
      l.visible = null !== a;
    }
    return this;
  }
});
Object.assign(ui.prototype, v.prototype);
pi.prototype = Object.assign(Object.create(di.prototype), {
  constructor: pi,
  isWebGL1Renderer: !0
});
var fi = function (e) {
  Object(l.a)(n, e);
  var t = Object(c.a)(n);
  function n() {
    var e;
    Object(u.a)(this, n);
    e = t.call(this);
    Object.defineProperty(Object(s.a)(e), "isScene", {
      value: !0
    });
    e.type = "Scene";
    e.background = null;
    e.environment = null;
    e.fog = null;
    e.overrideMaterial = null;
    e.autoUpdate = !0;
    if ("undefined" !== typeof __THREE_DEVTOOLS__) {
      __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
        detail: Object(s.a)(e)
      }));
    }
    return e;
  }
  Object(h.a)(n, [{
    key: "copy",
    value: function (e, t) {
      Object(i.a)(Object(a.a)(n.prototype), "copy", this).call(this, e, t);
      if (null !== e.background) {
        this.background = e.background.clone();
      }
      if (null !== e.environment) {
        this.environment = e.environment.clone();
      }
      if (null !== e.fog) {
        this.fog = e.fog.clone();
      }
      if (null !== e.overrideMaterial) {
        this.overrideMaterial = e.overrideMaterial.clone();
      }
      this.autoUpdate = e.autoUpdate;
      this.matrixAutoUpdate = e.matrixAutoUpdate;
      return this;
    }
  }, {
    key: "toJSON",
    value: function (e) {
      var t = Object(i.a)(Object(a.a)(n.prototype), "toJSON", this).call(this, e);
      if (null !== this.background) {
        t.object.background = this.background.toJSON(e);
      }
      if (null !== this.environment) {
        t.object.environment = this.environment.toJSON(e);
      }
      if (null !== this.fog) {
        t.object.fog = this.fog.toJSON();
      }
      return t;
    }
  }]);
  return n;
}(Pe);
function mi(e, t) {
  this.array = e;
  this.stride = t;
  this.count = void 0 !== e ? e.length / t : 0;
  this.usage = 35044;
  this.updateRange = {
    offset: 0,
    count: -1
  };
  this.version = 0;
  this.uuid = _.generateUUID();
}
Object.defineProperty(mi.prototype, "needsUpdate", {
  set: function (e) {
    if (!0 === e) {
      this.version++;
    }
  }
});
Object.assign(mi.prototype, {
  isInterleavedBuffer: !0,
  onUploadCallback: function () {},
  setUsage: function (e) {
    this.usage = e;
    return this;
  },
  copy: function (e) {
    this.array = new e.array.constructor(e.array);
    this.count = e.count;
    this.stride = e.stride;
    this.usage = e.usage;
    return this;
  },
  copyAt: function (e, t, n) {
    e *= this.stride;
    n *= t.stride;
    for (var r = 0, i = this.stride; r < i; r++) {
      this.array[e + r] = t.array[n + r];
    }
    return this;
  },
  set: function (e, t) {
    if (void 0 === t) {
      t = 0;
    }
    this.array.set(e, t);
    return this;
  },
  clone: function (e) {
    if (void 0 === e.arrayBuffers) {
      e.arrayBuffers = {};
    }
    if (void 0 === this.array.buffer._uuid) {
      this.array.buffer._uuid = _.generateUUID();
    }
    if (void 0 === e.arrayBuffers[this.array.buffer._uuid]) {
      e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer;
    }
    var t = new mi(new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), this.stride);
    t.setUsage(this.usage);
    return t;
  },
  onUpload: function (e) {
    this.onUploadCallback = e;
    return this;
  },
  toJSON: function (e) {
    if (void 0 === e.arrayBuffers) {
      e.arrayBuffers = {};
    }
    if (void 0 === this.array.buffer._uuid) {
      this.array.buffer._uuid = _.generateUUID();
    }
    if (void 0 === e.arrayBuffers[this.array.buffer._uuid]) {
      e.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(new Uint32Array(this.array.buffer));
    }
    return {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
});
var vi;
var gi = new C();
function yi(e, t, n, r) {
  this.name = "";
  this.data = e;
  this.itemSize = t;
  this.offset = n;
  this.normalized = !0 === r;
}
function xi(e) {
  tt.call(this);
  this.type = "SpriteMaterial";
  this.color = new Qe(16777215);
  this.map = null;
  this.alphaMap = null;
  this.rotation = 0;
  this.sizeAttenuation = !0;
  this.transparent = !0;
  this.setValues(e);
}
Object.defineProperties(yi.prototype, {
  count: {
    get: function () {
      return this.data.count;
    }
  },
  array: {
    get: function () {
      return this.data.array;
    }
  },
  needsUpdate: {
    set: function (e) {
      this.data.needsUpdate = e;
    }
  }
});
Object.assign(yi.prototype, {
  isInterleavedBufferAttribute: !0,
  applyMatrix4: function (e) {
    for (var t = 0, n = this.data.count; t < n; t++) {
      gi.x = this.getX(t);
      gi.y = this.getY(t);
      gi.z = this.getZ(t);
      gi.applyMatrix4(e);
      this.setXYZ(t, gi.x, gi.y, gi.z);
    }
    return this;
  },
  setX: function (e, t) {
    this.data.array[e * this.data.stride + this.offset] = t;
    return this;
  },
  setY: function (e, t) {
    this.data.array[e * this.data.stride + this.offset + 1] = t;
    return this;
  },
  setZ: function (e, t) {
    this.data.array[e * this.data.stride + this.offset + 2] = t;
    return this;
  },
  setW: function (e, t) {
    this.data.array[e * this.data.stride + this.offset + 3] = t;
    return this;
  },
  getX: function (e) {
    return this.data.array[e * this.data.stride + this.offset];
  },
  getY: function (e) {
    return this.data.array[e * this.data.stride + this.offset + 1];
  },
  getZ: function (e) {
    return this.data.array[e * this.data.stride + this.offset + 2];
  },
  getW: function (e) {
    return this.data.array[e * this.data.stride + this.offset + 3];
  },
  setXY: function (e, t, n) {
    e = e * this.data.stride + this.offset;
    this.data.array[e + 0] = t;
    this.data.array[e + 1] = n;
    return this;
  },
  setXYZ: function (e, t, n, r) {
    e = e * this.data.stride + this.offset;
    this.data.array[e + 0] = t;
    this.data.array[e + 1] = n;
    this.data.array[e + 2] = r;
    return this;
  },
  setXYZW: function (e, t, n, r, i) {
    e = e * this.data.stride + this.offset;
    this.data.array[e + 0] = t;
    this.data.array[e + 1] = n;
    this.data.array[e + 2] = r;
    this.data.array[e + 3] = i;
    return this;
  },
  clone: function (e) {
    if (void 0 === e) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");
      for (var t = [], n = 0; n < this.count; n++) {
        for (var r = n * this.data.stride + this.offset, i = 0; i < this.itemSize; i++) {
          t.push(this.data.array[r + i]);
        }
      }
      return new at(new this.array.constructor(t), this.itemSize, this.normalized);
    }
    if (void 0 === e.interleavedBuffers) {
      e.interleavedBuffers = {};
    }
    if (void 0 === e.interleavedBuffers[this.data.uuid]) {
      e.interleavedBuffers[this.data.uuid] = this.data.clone(e);
    }
    return new yi(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  },
  toJSON: function (e) {
    if (void 0 === e) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");
      for (var t = [], n = 0; n < this.count; n++) {
        for (var r = n * this.data.stride + this.offset, i = 0; i < this.itemSize; i++) {
          t.push(this.data.array[r + i]);
        }
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: t,
        normalized: this.normalized
      };
    }
    if (void 0 === e.interleavedBuffers) {
      e.interleavedBuffers = {};
    }
    if (void 0 === e.interleavedBuffers[this.data.uuid]) {
      e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e);
    }
    return {
      isInterleavedBufferAttribute: !0,
      itemSize: this.itemSize,
      data: this.data.uuid,
      offset: this.offset,
      normalized: this.normalized
    };
  }
});
xi.prototype = Object.create(tt.prototype);
xi.prototype.constructor = xi;
xi.prototype.isSpriteMaterial = !0;
xi.prototype.copy = function (e) {
  tt.prototype.copy.call(this, e);
  this.color.copy(e.color);
  this.map = e.map;
  this.alphaMap = e.alphaMap;
  this.rotation = e.rotation;
  this.sizeAttenuation = e.sizeAttenuation;
  return this;
};
var bi = new C();
var _i = new C();
var wi = new C();
var Mi = new w();
var Si = new w();
var Ti = new ae();
var Ei = new C();
var Ai = new C();
var Li = new C();
var Ri = new w();
var Pi = new w();
var Ci = new w();
function Ii(e) {
  Pe.call(this);
  this.type = "Sprite";
  if (void 0 === vi) {
    vi = new St();
    var t = new mi(new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]), 5);
    vi.setIndex([0, 1, 2, 0, 2, 3]);
    vi.setAttribute("position", new yi(t, 3, 0, !1));
    vi.setAttribute("uv", new yi(t, 2, 3, !1));
  }
  this.geometry = vi;
  this.material = void 0 !== e ? e : new xi();
  this.center = new w(.5, .5);
}
function Oi(e, t, n, r, i, a) {
  Mi.subVectors(e, n).addScalar(.5).multiply(r);
  if (void 0 !== i) {
    Si.x = a * Mi.x - i * Mi.y;
    Si.y = i * Mi.x + a * Mi.y;
  } else {
    Si.copy(Mi);
  }
  e.copy(t);
  e.x += Si.x;
  e.y += Si.y;
  e.applyMatrix4(Ti);
}
Ii.prototype = Object.assign(Object.create(Pe.prototype), {
  constructor: Ii,
  isSprite: !0,
  raycast: function (e, t) {
    if (null === e.camera) {
      console.error("THREE.Sprite: \"Raycaster.camera\" needs to be set in order to raycast against sprites.");
    }
    _i.setFromMatrixScale(this.matrixWorld);
    Ti.copy(e.camera.matrixWorld);
    this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld);
    wi.setFromMatrixPosition(this.modelViewMatrix);
    if (e.camera.isPerspectiveCamera && !1 === this.material.sizeAttenuation) {
      _i.multiplyScalar(-wi.z);
    }
    var n;
    var r;
    var i = this.material.rotation;
    if (0 !== i) {
      r = Math.cos(i);
      n = Math.sin(i);
    }
    var a = this.center;
    Oi(Ei.set(-.5, -.5, 0), wi, a, _i, n, r);
    Oi(Ai.set(.5, -.5, 0), wi, a, _i, n, r);
    Oi(Li.set(.5, .5, 0), wi, a, _i, n, r);
    Ri.set(0, 0);
    Pi.set(1, 0);
    Ci.set(1, 1);
    var o = e.ray.intersectTriangle(Ei, Ai, Li, !1, bi);
    if (null !== o || (Oi(Ai.set(-.5, .5, 0), wi, a, _i, n, r), Pi.set(0, 1), null !== (o = e.ray.intersectTriangle(Ei, Li, Ai, !1, bi)))) {
      var s = e.ray.origin.distanceTo(bi);
      if (!(s < e.near || s > e.far)) {
        t.push({
          distance: s,
          point: bi.clone(),
          uv: We.getUV(bi, Ei, Ai, Li, Ri, Pi, Ci, new w()),
          face: null,
          object: this
        });
      }
    }
  },
  copy: function (e) {
    Pe.prototype.copy.call(this, e);
    if (void 0 !== e.center) {
      this.center.copy(e.center);
    }
    this.material = e.material;
    return this;
  }
});
var ki = new C();
var Ni = new C();
function Di() {
  Pe.call(this);
  this._currentLevel = 0;
  this.type = "LOD";
  Object.defineProperties(this, {
    levels: {
      enumerable: !0,
      value: []
    }
  });
  this.autoUpdate = !0;
}
function Ui(e, t) {
  if (e && e.isGeometry) {
    console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
  }
  Gt.call(this, e, t);
  this.type = "SkinnedMesh";
  this.bindMode = "attached";
  this.bindMatrix = new ae();
  this.bindMatrixInverse = new ae();
}
Di.prototype = Object.assign(Object.create(Pe.prototype), {
  constructor: Di,
  isLOD: !0,
  copy: function (e) {
    Pe.prototype.copy.call(this, e, !1);
    for (var t = e.levels, n = 0, r = t.length; n < r; n++) {
      var i = t[n];
      this.addLevel(i.object.clone(), i.distance);
    }
    this.autoUpdate = e.autoUpdate;
    return this;
  },
  addLevel: function (e, t) {
    if (void 0 === t) {
      t = 0;
    }
    t = Math.abs(t);
    var n;
    var r = this.levels;
    for (n = 0; n < r.length && !(t < r[n].distance); n++) {
      ;
    }
    r.splice(n, 0, {
      distance: t,
      object: e
    });
    this.add(e);
    return this;
  },
  getCurrentLevel: function () {
    return this._currentLevel;
  },
  getObjectForDistance: function (e) {
    var t = this.levels;
    if (t.length > 0) {
      var n;
      var r;
      for (n = 1, r = t.length; n < r && !(e < t[n].distance); n++) {
        ;
      }
      return t[n - 1].object;
    }
    return null;
  },
  raycast: function (e, t) {
    if (this.levels.length > 0) {
      ki.setFromMatrixPosition(this.matrixWorld);
      var n = e.ray.origin.distanceTo(ki);
      this.getObjectForDistance(n).raycast(e, t);
    }
  },
  update: function (e) {
    var t = this.levels;
    if (t.length > 1) {
      ki.setFromMatrixPosition(e.matrixWorld);
      Ni.setFromMatrixPosition(this.matrixWorld);
      var n;
      var r;
      var i = ki.distanceTo(Ni) / e.zoom;
      for (t[0].object.visible = !0, n = 1, r = t.length; n < r && i >= t[n].distance; n++) {
        t[n - 1].object.visible = !1;
        t[n].object.visible = !0;
      }
      for (this._currentLevel = n - 1; n < r; n++) {
        t[n].object.visible = !1;
      }
    }
  },
  toJSON: function (e) {
    var t = Pe.prototype.toJSON.call(this, e);
    if (!1 === this.autoUpdate) {
      t.object.autoUpdate = !1;
    }
    t.object.levels = [];
    for (var n = this.levels, r = 0, i = n.length; r < i; r++) {
      var a = n[r];
      t.object.levels.push({
        object: a.object.uuid,
        distance: a.distance
      });
    }
    return t;
  }
});
Ui.prototype = Object.assign(Object.create(Gt.prototype), {
  constructor: Ui,
  isSkinnedMesh: !0,
  copy: function (e) {
    Gt.prototype.copy.call(this, e);
    this.bindMode = e.bindMode;
    this.bindMatrix.copy(e.bindMatrix);
    this.bindMatrixInverse.copy(e.bindMatrixInverse);
    this.skeleton = e.skeleton;
    return this;
  },
  bind: function (e, t) {
    this.skeleton = e;
    if (void 0 === t) {
      this.updateMatrixWorld(!0);
      this.skeleton.calculateInverses();
      t = this.matrixWorld;
    }
    this.bindMatrix.copy(t);
    this.bindMatrixInverse.getInverse(t);
  },
  pose: function () {
    this.skeleton.pose();
  },
  normalizeSkinWeights: function () {
    for (var e = new A(), t = this.geometry.attributes.skinWeight, n = 0, r = t.count; n < r; n++) {
      e.x = t.getX(n);
      e.y = t.getY(n);
      e.z = t.getZ(n);
      e.w = t.getW(n);
      var i = 1 / e.manhattanLength();
      if (i !== 1 / 0) {
        e.multiplyScalar(i);
      } else {
        e.set(1, 0, 0, 0);
      }
      t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  },
  updateMatrixWorld: function (e) {
    Gt.prototype.updateMatrixWorld.call(this, e);
    if ("attached" === this.bindMode) {
      this.bindMatrixInverse.getInverse(this.matrixWorld);
    } else {
      if ("detached" === this.bindMode) {
        this.bindMatrixInverse.getInverse(this.bindMatrix);
      } else {
        console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
      }
    }
  },
  boneTransform: function () {
    var e = new C();
    var t = new A();
    var n = new A();
    var r = new C();
    var i = new ae();
    return function (a, o) {
      var s = this.skeleton;
      var l = this.geometry;
      t.fromBufferAttribute(l.attributes.skinIndex, a);
      n.fromBufferAttribute(l.attributes.skinWeight, a);
      e.fromBufferAttribute(l.attributes.position, a).applyMatrix4(this.bindMatrix);
      o.set(0, 0, 0);
      for (var c = 0; c < 4; c++) {
        var u = n.getComponent(c);
        if (0 !== u) {
          var h = t.getComponent(c);
          i.multiplyMatrices(s.bones[h].matrixWorld, s.boneInverses[h]);
          o.addScaledVector(r.copy(e).applyMatrix4(i), u);
        }
      }
      return o.applyMatrix4(this.bindMatrixInverse);
    };
  }()
});
var Bi = new ae();
var zi = new ae();
function Fi(e, t) {
  e = e || [];
  this.bones = e.slice(0);
  this.boneMatrices = new Float32Array(16 * this.bones.length);
  this.frame = -1;
  if (void 0 === t) {
    this.calculateInverses();
  } else if (this.bones.length === t.length) {
    this.boneInverses = t.slice(0);
  } else {
    console.warn("THREE.Skeleton boneInverses is the wrong length.");
    this.boneInverses = [];
    for (var n = 0, r = this.bones.length; n < r; n++) {
      this.boneInverses.push(new ae());
    }
  }
}
function Hi() {
  Pe.call(this);
  this.type = "Bone";
}
Object.assign(Fi.prototype, {
  calculateInverses: function () {
    this.boneInverses = [];
    for (var e = 0, t = this.bones.length; e < t; e++) {
      var n = new ae();
      if (this.bones[e]) {
        n.getInverse(this.bones[e].matrixWorld);
      }
      this.boneInverses.push(n);
    }
  },
  pose: function () {
    for (var e = 0, t = this.bones.length; e < t; e++) {
      var n = this.bones[e];
      if (n) {
        n.matrixWorld.getInverse(this.boneInverses[e]);
      }
    }
    for (var r = 0, i = this.bones.length; r < i; r++) {
      var a = this.bones[r];
      if (a) {
        if (a.parent && a.parent.isBone) {
          a.matrix.getInverse(a.parent.matrixWorld);
          a.matrix.multiply(a.matrixWorld);
        } else {
          a.matrix.copy(a.matrixWorld);
        }
        a.matrix.decompose(a.position, a.quaternion, a.scale);
      }
    }
  },
  update: function () {
    for (var e = this.bones, t = this.boneInverses, n = this.boneMatrices, r = this.boneTexture, i = 0, a = e.length; i < a; i++) {
      var o = e[i] ? e[i].matrixWorld : zi;
      Bi.multiplyMatrices(o, t[i]);
      Bi.toArray(n, 16 * i);
    }
    if (void 0 !== r) {
      r.needsUpdate = !0;
    }
  },
  clone: function () {
    return new Fi(this.bones, this.boneInverses);
  },
  getBoneByName: function (e) {
    for (var t = 0, n = this.bones.length; t < n; t++) {
      var r = this.bones[t];
      if (r.name === e) {
        return r;
      }
    }
  },
  dispose: function () {
    if (this.boneTexture) {
      this.boneTexture.dispose();
      this.boneTexture = void 0;
    }
  }
});
Hi.prototype = Object.assign(Object.create(Pe.prototype), {
  constructor: Hi,
  isBone: !0
});
var Gi = new ae();
var ji = new ae();
var Vi = [];
var Wi = new Gt();
function qi(e, t, n) {
  Gt.call(this, e, t);
  this.instanceMatrix = new at(new Float32Array(16 * n), 16);
  this.instanceColor = null;
  this.count = n;
  this.frustumCulled = !1;
}
function Xi(e) {
  tt.call(this);
  this.type = "LineBasicMaterial";
  this.color = new Qe(16777215);
  this.linewidth = 1;
  this.linecap = "round";
  this.linejoin = "round";
  this.morphTargets = !1;
  this.setValues(e);
}
qi.prototype = Object.assign(Object.create(Gt.prototype), {
  constructor: qi,
  isInstancedMesh: !0,
  copy: function (e) {
    Gt.prototype.copy.call(this, e);
    this.instanceMatrix.copy(e.instanceMatrix);
    this.count = e.count;
    return this;
  },
  setColorAt: function (e, t) {
    if (null === this.instanceColor) {
      this.instanceColor = new at(new Float32Array(3 * this.count), 3);
    }
    t.toArray(this.instanceColor.array, 3 * e);
  },
  getMatrixAt: function (e, t) {
    t.fromArray(this.instanceMatrix.array, 16 * e);
  },
  raycast: function (e, t) {
    var n = this.matrixWorld;
    var r = this.count;
    Wi.geometry = this.geometry;
    Wi.material = this.material;
    if (void 0 !== Wi.material) {
      for (var i = 0; i < r; i++) {
        this.getMatrixAt(i, Gi);
        ji.multiplyMatrices(n, Gi);
        Wi.matrixWorld = ji;
        Wi.raycast(e, Vi);
        for (var a = 0, o = Vi.length; a < o; a++) {
          var s = Vi[a];
          s.instanceId = i;
          s.object = this;
          t.push(s);
        }
        Vi.length = 0;
      }
    }
  },
  setMatrixAt: function (e, t) {
    t.toArray(this.instanceMatrix.array, 16 * e);
  },
  updateMorphTargets: function () {}
});
Xi.prototype = Object.create(tt.prototype);
Xi.prototype.constructor = Xi;
Xi.prototype.isLineBasicMaterial = !0;
Xi.prototype.copy = function (e) {
  tt.prototype.copy.call(this, e);
  this.color.copy(e.color);
  this.linewidth = e.linewidth;
  this.linecap = e.linecap;
  this.linejoin = e.linejoin;
  this.morphTargets = e.morphTargets;
  return this;
};
var Yi = new C();
var Zi = new C();
var Ji = new ae();
var Ki = new ie();
var Qi = new J();
function $i(e, t, n) {
  if (1 === n) {
    console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead.");
  }
  Pe.call(this);
  this.type = "Line";
  this.geometry = void 0 !== e ? e : new St();
  this.material = void 0 !== t ? t : new Xi();
  this.updateMorphTargets();
}
$i.prototype = Object.assign(Object.create(Pe.prototype), {
  constructor: $i,
  isLine: !0,
  copy: function (e) {
    Pe.prototype.copy.call(this, e);
    this.material = e.material;
    this.geometry = e.geometry;
    return this;
  },
  computeLineDistances: function () {
    var e = this.geometry;
    if (e.isBufferGeometry) {
      if (null === e.index) {
        for (var t = e.attributes.position, n = [0], r = 1, i = t.count; r < i; r++) {
          Yi.fromBufferAttribute(t, r - 1);
          Zi.fromBufferAttribute(t, r);
          n[r] = n[r - 1];
          n[r] += Yi.distanceTo(Zi);
        }
        e.setAttribute("lineDistance", new pt(n, 1));
      } else {
        console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
      }
    } else if (e.isGeometry) {
      var a = e.vertices;
      var o = e.lineDistances;
      o[0] = 0;
      for (var s = 1, l = a.length; s < l; s++) {
        o[s] = o[s - 1];
        o[s] += a[s - 1].distanceTo(a[s]);
      }
    }
    return this;
  },
  raycast: function (e, t) {
    var n = this.geometry;
    var r = this.matrixWorld;
    var i = e.params.Line.threshold;
    if (null === n.boundingSphere) {
      n.computeBoundingSphere();
    }
    Qi.copy(n.boundingSphere);
    Qi.applyMatrix4(r);
    Qi.radius += i;
    if (!1 !== e.ray.intersectsSphere(Qi)) {
      Ji.getInverse(r);
      Ki.copy(e.ray).applyMatrix4(Ji);
      var a = i / ((this.scale.x + this.scale.y + this.scale.z) / 3);
      var o = a * a;
      var s = new C();
      var l = new C();
      var c = new C();
      var u = new C();
      var h = this.isLineSegments ? 2 : 1;
      if (n.isBufferGeometry) {
        var d = n.index;
        var p = n.attributes.position;
        if (null !== d) {
          for (var f = d.array, m = 0, v = f.length - 1; m < v; m += h) {
            var g = f[m];
            var y = f[m + 1];
            s.fromBufferAttribute(p, g);
            l.fromBufferAttribute(p, y);
            if (!(Ki.distanceSqToSegment(s, l, u, c) > o)) {
              u.applyMatrix4(this.matrixWorld);
              var x = e.ray.origin.distanceTo(u);
              if (!(x < e.near || x > e.far)) {
                t.push({
                  distance: x,
                  point: c.clone().applyMatrix4(this.matrixWorld),
                  index: m,
                  face: null,
                  faceIndex: null,
                  object: this
                });
              }
            }
          }
        } else {
          for (var b = 0, _ = p.count - 1; b < _; b += h) {
            s.fromBufferAttribute(p, b);
            l.fromBufferAttribute(p, b + 1);
            if (!(Ki.distanceSqToSegment(s, l, u, c) > o)) {
              u.applyMatrix4(this.matrixWorld);
              var w = e.ray.origin.distanceTo(u);
              if (!(w < e.near || w > e.far)) {
                t.push({
                  distance: w,
                  point: c.clone().applyMatrix4(this.matrixWorld),
                  index: b,
                  face: null,
                  faceIndex: null,
                  object: this
                });
              }
            }
          }
        }
      } else if (n.isGeometry) {
        for (var M = n.vertices, S = M.length, T = 0; T < S - 1; T += h) {
          if (!(Ki.distanceSqToSegment(M[T], M[T + 1], u, c) > o)) {
            u.applyMatrix4(this.matrixWorld);
            var E = e.ray.origin.distanceTo(u);
            if (!(E < e.near || E > e.far)) {
              t.push({
                distance: E,
                point: c.clone().applyMatrix4(this.matrixWorld),
                index: T,
                face: null,
                faceIndex: null,
                object: this
              });
            }
          }
        }
      }
    }
  },
  updateMorphTargets: function () {
    var e = this.geometry;
    if (e.isBufferGeometry) {
      var t = e.morphAttributes;
      var n = Object.keys(t);
      if (n.length > 0) {
        var r = t[n[0]];
        if (void 0 !== r) {
          this.morphTargetInfluences = [];
          this.morphTargetDictionary = {};
          for (var i = 0, a = r.length; i < a; i++) {
            var o = r[i].name || String(i);
            this.morphTargetInfluences.push(0);
            this.morphTargetDictionary[o] = i;
          }
        }
      }
    } else {
      var s = e.morphTargets;
      if (void 0 !== s && s.length > 0) {
        console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");
      }
    }
  }
});
var ea = new C();
var ta = new C();
function na(e, t) {
  $i.call(this, e, t);
  this.type = "LineSegments";
}
function ra(e, t) {
  $i.call(this, e, t);
  this.type = "LineLoop";
}
function ia(e) {
  tt.call(this);
  this.type = "PointsMaterial";
  this.color = new Qe(16777215);
  this.map = null;
  this.alphaMap = null;
  this.size = 1;
  this.sizeAttenuation = !0;
  this.morphTargets = !1;
  this.setValues(e);
}
na.prototype = Object.assign(Object.create($i.prototype), {
  constructor: na,
  isLineSegments: !0,
  computeLineDistances: function () {
    var e = this.geometry;
    if (e.isBufferGeometry) {
      if (null === e.index) {
        for (var t = e.attributes.position, n = [], r = 0, i = t.count; r < i; r += 2) {
          ea.fromBufferAttribute(t, r);
          ta.fromBufferAttribute(t, r + 1);
          n[r] = 0 === r ? 0 : n[r - 1];
          n[r + 1] = n[r] + ea.distanceTo(ta);
        }
        e.setAttribute("lineDistance", new pt(n, 1));
      } else {
        console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
      }
    } else if (e.isGeometry) {
      for (var a = e.vertices, o = e.lineDistances, s = 0, l = a.length; s < l; s += 2) {
        ea.copy(a[s]);
        ta.copy(a[s + 1]);
        o[s] = 0 === s ? 0 : o[s - 1];
        o[s + 1] = o[s] + ea.distanceTo(ta);
      }
    }
    return this;
  }
});
ra.prototype = Object.assign(Object.create($i.prototype), {
  constructor: ra,
  isLineLoop: !0
});
ia.prototype = Object.create(tt.prototype);
ia.prototype.constructor = ia;
ia.prototype.isPointsMaterial = !0;
ia.prototype.copy = function (e) {
  tt.prototype.copy.call(this, e);
  this.color.copy(e.color);
  this.map = e.map;
  this.alphaMap = e.alphaMap;
  this.size = e.size;
  this.sizeAttenuation = e.sizeAttenuation;
  this.morphTargets = e.morphTargets;
  return this;
};
var aa = new ae();
var oa = new ie();
var sa = new J();
var la = new C();
function ca(e, t) {
  Pe.call(this);
  this.type = "Points";
  this.geometry = void 0 !== e ? e : new St();
  this.material = void 0 !== t ? t : new ia();
  this.updateMorphTargets();
}
function ua(e, t, n, r, i, a, o) {
  var s = oa.distanceSqToPoint(e);
  if (s < n) {
    var l = new C();
    oa.closestPointToPoint(e, l);
    l.applyMatrix4(r);
    var c = i.ray.origin.distanceTo(l);
    if (c < i.near || c > i.far) {
      return;
    }
    a.push({
      distance: c,
      distanceToRay: Math.sqrt(s),
      point: l,
      index: t,
      face: null,
      object: o
    });
  }
}
function ha(e, t, n, r, i, a, o, s, l) {
  E.call(this, e, t, n, r, i, a, o, s, l);
  this.format = void 0 !== o ? o : 1022;
  this.minFilter = void 0 !== a ? a : 1006;
  this.magFilter = void 0 !== i ? i : 1006;
  this.generateMipmaps = !1;
  var c = this;
  if ("requestVideoFrameCallback" in e) {
    e.requestVideoFrameCallback(function t() {
      c.needsUpdate = !0;
      e.requestVideoFrameCallback(t);
    });
  }
}
function da(e, t, n, r, i, a, o, s, l, c, u, h) {
  E.call(this, null, a, o, s, l, c, r, i, u, h);
  this.image = {
    width: t,
    height: n
  };
  this.mipmaps = e;
  this.flipY = !1;
  this.generateMipmaps = !1;
}
function pa(e, t, n, r, i, a, o, s, l) {
  E.call(this, e, t, n, r, i, a, o, s, l);
  this.needsUpdate = !0;
}
function fa(e, t, n, r, i, a, o, s, l, c) {
  if (1026 !== (c = void 0 !== c ? c : 1026) && 1027 !== c) {
    throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
  }
  if (void 0 === n && 1026 === c) {
    n = 1012;
  }
  if (void 0 === n && 1027 === c) {
    n = 1020;
  }
  E.call(this, null, r, i, a, o, s, c, n, l);
  this.image = {
    width: e,
    height: t
  };
  this.magFilter = void 0 !== o ? o : 1003;
  this.minFilter = void 0 !== s ? s : 1003;
  this.flipY = !1;
  this.generateMipmaps = !1;
}
ca.prototype = Object.assign(Object.create(Pe.prototype), {
  constructor: ca,
  isPoints: !0,
  copy: function (e) {
    Pe.prototype.copy.call(this, e);
    this.material = e.material;
    this.geometry = e.geometry;
    return this;
  },
  raycast: function (e, t) {
    var n = this.geometry;
    var r = this.matrixWorld;
    var i = e.params.Points.threshold;
    if (null === n.boundingSphere) {
      n.computeBoundingSphere();
    }
    sa.copy(n.boundingSphere);
    sa.applyMatrix4(r);
    sa.radius += i;
    if (!1 !== e.ray.intersectsSphere(sa)) {
      aa.getInverse(r);
      oa.copy(e.ray).applyMatrix4(aa);
      var a = i / ((this.scale.x + this.scale.y + this.scale.z) / 3);
      var o = a * a;
      if (n.isBufferGeometry) {
        var s = n.index;
        var l = n.attributes.position;
        if (null !== s) {
          for (var c = s.array, u = 0, h = c.length; u < h; u++) {
            var d = c[u];
            la.fromBufferAttribute(l, d);
            ua(la, d, o, r, e, t, this);
          }
        } else {
          for (var p = 0, f = l.count; p < f; p++) {
            la.fromBufferAttribute(l, p);
            ua(la, p, o, r, e, t, this);
          }
        }
      } else {
        for (var m = n.vertices, v = 0, g = m.length; v < g; v++) {
          ua(m[v], v, o, r, e, t, this);
        }
      }
    }
  },
  updateMorphTargets: function () {
    var e = this.geometry;
    if (e.isBufferGeometry) {
      var t = e.morphAttributes;
      var n = Object.keys(t);
      if (n.length > 0) {
        var r = t[n[0]];
        if (void 0 !== r) {
          this.morphTargetInfluences = [];
          this.morphTargetDictionary = {};
          for (var i = 0, a = r.length; i < a; i++) {
            var o = r[i].name || String(i);
            this.morphTargetInfluences.push(0);
            this.morphTargetDictionary[o] = i;
          }
        }
      }
    } else {
      var s = e.morphTargets;
      if (void 0 !== s && s.length > 0) {
        console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.");
      }
    }
  }
});
ha.prototype = Object.assign(Object.create(E.prototype), {
  constructor: ha,
  clone: function () {
    return new this.constructor(this.image).copy(this);
  },
  isVideoTexture: !0,
  update: function () {
    var e = this.image;
    if (!1 === "requestVideoFrameCallback" in e && e.readyState >= e.HAVE_CURRENT_DATA) {
      this.needsUpdate = !0;
    }
  }
});
da.prototype = Object.create(E.prototype);
da.prototype.constructor = da;
da.prototype.isCompressedTexture = !0;
pa.prototype = Object.create(E.prototype);
pa.prototype.constructor = pa;
pa.prototype.isCanvasTexture = !0;
fa.prototype = Object.create(E.prototype);
fa.prototype.constructor = fa;
fa.prototype.isDepthTexture = !0;
var ma = 0;
var va = new ae();
var ga = new Pe();
var ya = new C();
function xa() {
  Object.defineProperty(this, "id", {
    value: ma += 2
  });
  this.uuid = _.generateUUID();
  this.name = "";
  this.type = "Geometry";
  this.vertices = [];
  this.colors = [];
  this.faces = [];
  this.faceVertexUvs = [[]];
  this.morphTargets = [];
  this.morphNormals = [];
  this.skinWeights = [];
  this.skinIndices = [];
  this.lineDistances = [];
  this.boundingBox = null;
  this.boundingSphere = null;
  this.elementsNeedUpdate = !1;
  this.verticesNeedUpdate = !1;
  this.uvsNeedUpdate = !1;
  this.normalsNeedUpdate = !1;
  this.colorsNeedUpdate = !1;
  this.lineDistancesNeedUpdate = !1;
  this.groupsNeedUpdate = !1;
}
xa.prototype = Object.assign(Object.create(v.prototype), {
  constructor: xa,
  isGeometry: !0,
  applyMatrix4: function (e) {
    for (var t = new M().getNormalMatrix(e), n = 0, r = this.vertices.length; n < r; n++) {
      this.vertices[n].applyMatrix4(e);
    }
    for (var i = 0, a = this.faces.length; i < a; i++) {
      var o = this.faces[i];
      o.normal.applyMatrix3(t).normalize();
      for (var s = 0, l = o.vertexNormals.length; s < l; s++) {
        o.vertexNormals[s].applyMatrix3(t).normalize();
      }
    }
    if (null !== this.boundingBox) {
      this.computeBoundingBox();
    }
    if (null !== this.boundingSphere) {
      this.computeBoundingSphere();
    }
    this.verticesNeedUpdate = !0;
    this.normalsNeedUpdate = !0;
    return this;
  },
  rotateX: function (e) {
    va.makeRotationX(e);
    this.applyMatrix4(va);
    return this;
  },
  rotateY: function (e) {
    va.makeRotationY(e);
    this.applyMatrix4(va);
    return this;
  },
  rotateZ: function (e) {
    va.makeRotationZ(e);
    this.applyMatrix4(va);
    return this;
  },
  translate: function (e, t, n) {
    va.makeTranslation(e, t, n);
    this.applyMatrix4(va);
    return this;
  },
  scale: function (e, t, n) {
    va.makeScale(e, t, n);
    this.applyMatrix4(va);
    return this;
  },
  lookAt: function (e) {
    ga.lookAt(e);
    ga.updateMatrix();
    this.applyMatrix4(ga.matrix);
    return this;
  },
  fromBufferGeometry: function (e) {
    var t = this;
    var n = null !== e.index ? e.index : void 0;
    var r = e.attributes;
    if (void 0 === r.position) {
      console.error("THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion.");
      return this;
    }
    var i = r.position;
    var a = r.normal;
    var o = r.color;
    var s = r.uv;
    var l = r.uv2;
    if (void 0 !== l) {
      this.faceVertexUvs[1] = [];
    }
    for (var c = 0; c < i.count; c++) {
      t.vertices.push(new C().fromBufferAttribute(i, c));
      if (void 0 !== o) {
        t.colors.push(new Qe().fromBufferAttribute(o, c));
      }
    }
    function u(e, n, r, i) {
      var c = void 0 === o ? [] : [t.colors[e].clone(), t.colors[n].clone(), t.colors[r].clone()];
      var u = void 0 === a ? [] : [new C().fromBufferAttribute(a, e), new C().fromBufferAttribute(a, n), new C().fromBufferAttribute(a, r)];
      var h = new $e(e, n, r, u, c, i);
      t.faces.push(h);
      if (void 0 !== s) {
        t.faceVertexUvs[0].push([new w().fromBufferAttribute(s, e), new w().fromBufferAttribute(s, n), new w().fromBufferAttribute(s, r)]);
      }
      if (void 0 !== l) {
        t.faceVertexUvs[1].push([new w().fromBufferAttribute(l, e), new w().fromBufferAttribute(l, n), new w().fromBufferAttribute(l, r)]);
      }
    }
    var h = e.groups;
    if (h.length > 0) {
      for (var d = 0; d < h.length; d++) {
        for (var p = h[d], f = p.start, m = f, v = f + p.count; m < v; m += 3) {
          if (void 0 !== n) {
            u(n.getX(m), n.getX(m + 1), n.getX(m + 2), p.materialIndex);
          } else {
            u(m, m + 1, m + 2, p.materialIndex);
          }
        }
      }
    } else if (void 0 !== n) {
      for (var g = 0; g < n.count; g += 3) {
        u(n.getX(g), n.getX(g + 1), n.getX(g + 2));
      }
    } else {
      for (var y = 0; y < i.count; y += 3) {
        u(y, y + 1, y + 2);
      }
    }
    this.computeFaceNormals();
    if (null !== e.boundingBox) {
      this.boundingBox = e.boundingBox.clone();
    }
    if (null !== e.boundingSphere) {
      this.boundingSphere = e.boundingSphere.clone();
    }
    return this;
  },
  center: function () {
    this.computeBoundingBox();
    this.boundingBox.getCenter(ya).negate();
    this.translate(ya.x, ya.y, ya.z);
    return this;
  },
  normalize: function () {
    this.computeBoundingSphere();
    var e = this.boundingSphere.center;
    var t = this.boundingSphere.radius;
    var n = 0 === t ? 1 : 1 / t;
    var r = new ae();
    r.set(n, 0, 0, -n * e.x, 0, n, 0, -n * e.y, 0, 0, n, -n * e.z, 0, 0, 0, 1);
    this.applyMatrix4(r);
    return this;
  },
  computeFaceNormals: function () {
    for (var e = new C(), t = new C(), n = 0, r = this.faces.length; n < r; n++) {
      var i = this.faces[n];
      var a = this.vertices[i.a];
      var o = this.vertices[i.b];
      var s = this.vertices[i.c];
      e.subVectors(s, o);
      t.subVectors(a, o);
      e.cross(t);
      e.normalize();
      i.normal.copy(e);
    }
  },
  computeVertexNormals: function (e) {
    if (void 0 === e) {
      e = !0;
    }
    for (var t = new Array(this.vertices.length), n = 0, r = this.vertices.length; n < r; n++) {
      t[n] = new C();
    }
    if (e) {
      for (var i = new C(), a = new C(), o = 0, s = this.faces.length; o < s; o++) {
        var l = this.faces[o];
        var c = this.vertices[l.a];
        var u = this.vertices[l.b];
        var h = this.vertices[l.c];
        i.subVectors(h, u);
        a.subVectors(c, u);
        i.cross(a);
        t[l.a].add(i);
        t[l.b].add(i);
        t[l.c].add(i);
      }
    } else {
      this.computeFaceNormals();
      for (var d = 0, p = this.faces.length; d < p; d++) {
        var f = this.faces[d];
        t[f.a].add(f.normal);
        t[f.b].add(f.normal);
        t[f.c].add(f.normal);
      }
    }
    for (var m = 0, v = this.vertices.length; m < v; m++) {
      t[m].normalize();
    }
    for (var g = 0, y = this.faces.length; g < y; g++) {
      var x = this.faces[g];
      var b = x.vertexNormals;
      if (3 === b.length) {
        b[0].copy(t[x.a]);
        b[1].copy(t[x.b]);
        b[2].copy(t[x.c]);
      } else {
        b[0] = t[x.a].clone();
        b[1] = t[x.b].clone();
        b[2] = t[x.c].clone();
      }
    }
    if (this.faces.length > 0) {
      this.normalsNeedUpdate = !0;
    }
  },
  computeFlatVertexNormals: function () {
    this.computeFaceNormals();
    for (var e = 0, t = this.faces.length; e < t; e++) {
      var n = this.faces[e];
      var r = n.vertexNormals;
      if (3 === r.length) {
        r[0].copy(n.normal);
        r[1].copy(n.normal);
        r[2].copy(n.normal);
      } else {
        r[0] = n.normal.clone();
        r[1] = n.normal.clone();
        r[2] = n.normal.clone();
      }
    }
    if (this.faces.length > 0) {
      this.normalsNeedUpdate = !0;
    }
  },
  computeMorphNormals: function () {
    for (var e = 0, t = this.faces.length; e < t; e++) {
      var n = this.faces[e];
      if (n.__originalFaceNormal) {
        n.__originalFaceNormal.copy(n.normal);
      } else {
        n.__originalFaceNormal = n.normal.clone();
      }
      if (!n.__originalVertexNormals) {
        n.__originalVertexNormals = [];
      }
      for (var r = 0, i = n.vertexNormals.length; r < i; r++) {
        if (n.__originalVertexNormals[r]) {
          n.__originalVertexNormals[r].copy(n.vertexNormals[r]);
        } else {
          n.__originalVertexNormals[r] = n.vertexNormals[r].clone();
        }
      }
    }
    var a = new xa();
    a.faces = this.faces;
    for (var o = 0, s = this.morphTargets.length; o < s; o++) {
      if (!this.morphNormals[o]) {
        this.morphNormals[o] = {};
        this.morphNormals[o].faceNormals = [];
        this.morphNormals[o].vertexNormals = [];
        for (var l = this.morphNormals[o].faceNormals, c = this.morphNormals[o].vertexNormals, u = 0, h = this.faces.length; u < h; u++) {
          var d = new C();
          var p = {
            a: new C(),
            b: new C(),
            c: new C()
          };
          l.push(d);
          c.push(p);
        }
      }
      var f = this.morphNormals[o];
      a.vertices = this.morphTargets[o].vertices;
      a.computeFaceNormals();
      a.computeVertexNormals();
      for (var m = 0, v = this.faces.length; m < v; m++) {
        var g = this.faces[m];
        var y = f.faceNormals[m];
        var x = f.vertexNormals[m];
        y.copy(g.normal);
        x.a.copy(g.vertexNormals[0]);
        x.b.copy(g.vertexNormals[1]);
        x.c.copy(g.vertexNormals[2]);
      }
    }
    for (var b = 0, _ = this.faces.length; b < _; b++) {
      var w = this.faces[b];
      w.normal = w.__originalFaceNormal;
      w.vertexNormals = w.__originalVertexNormals;
    }
  },
  computeBoundingBox: function () {
    if (null === this.boundingBox) {
      this.boundingBox = new k();
    }
    this.boundingBox.setFromPoints(this.vertices);
  },
  computeBoundingSphere: function () {
    if (null === this.boundingSphere) {
      this.boundingSphere = new J();
    }
    this.boundingSphere.setFromPoints(this.vertices);
  },
  merge: function (e, t, n) {
    if (e && e.isGeometry) {
      var r;
      var i = this.vertices.length;
      var a = this.vertices;
      var o = e.vertices;
      var s = this.faces;
      var l = e.faces;
      var c = this.colors;
      var u = e.colors;
      if (void 0 === n) {
        n = 0;
      }
      if (void 0 !== t) {
        r = new M().getNormalMatrix(t);
      }
      for (var h = 0, d = o.length; h < d; h++) {
        var p = o[h].clone();
        if (void 0 !== t) {
          p.applyMatrix4(t);
        }
        a.push(p);
      }
      for (var f = 0, m = u.length; f < m; f++) {
        c.push(u[f].clone());
      }
      for (var v = 0, g = l.length; v < g; v++) {
        var y = l[v];
        var x = void 0;
        var b = void 0;
        var _ = y.vertexNormals;
        var w = y.vertexColors;
        var S = new $e(y.a + i, y.b + i, y.c + i);
        S.normal.copy(y.normal);
        if (void 0 !== r) {
          S.normal.applyMatrix3(r).normalize();
        }
        for (var T = 0, E = _.length; T < E; T++) {
          x = _[T].clone();
          if (void 0 !== r) {
            x.applyMatrix3(r).normalize();
          }
          S.vertexNormals.push(x);
        }
        S.color.copy(y.color);
        for (var A = 0, L = w.length; A < L; A++) {
          b = w[A];
          S.vertexColors.push(b.clone());
        }
        S.materialIndex = y.materialIndex + n;
        s.push(S);
      }
      for (var R = 0, P = e.faceVertexUvs.length; R < P; R++) {
        var C = e.faceVertexUvs[R];
        if (void 0 === this.faceVertexUvs[R]) {
          this.faceVertexUvs[R] = [];
        }
        for (var I = 0, O = C.length; I < O; I++) {
          for (var k = C[I], N = [], D = 0, U = k.length; D < U; D++) {
            N.push(k[D].clone());
          }
          this.faceVertexUvs[R].push(N);
        }
      }
    } else {
      console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", e);
    }
  },
  mergeMesh: function (e) {
    if (e && e.isMesh) {
      if (e.matrixAutoUpdate) {
        e.updateMatrix();
      }
      this.merge(e.geometry, e.matrix);
    } else {
      console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", e);
    }
  },
  mergeVertices: function () {
    for (var e = {}, t = [], n = [], r = Math.pow(10, 4), i = 0, a = this.vertices.length; i < a; i++) {
      var o = this.vertices[i];
      var s = Math.round(o.x * r) + "_" + Math.round(o.y * r) + "_" + Math.round(o.z * r);
      if (void 0 === e[s]) {
        e[s] = i;
        t.push(this.vertices[i]);
        n[i] = t.length - 1;
      } else {
        n[i] = n[e[s]];
      }
    }
    for (var l = [], c = 0, u = this.faces.length; c < u; c++) {
      var h = this.faces[c];
      h.a = n[h.a];
      h.b = n[h.b];
      h.c = n[h.c];
      for (var d = [h.a, h.b, h.c], p = 0; p < 3; p++) {
        if (d[p] === d[(p + 1) % 3]) {
          l.push(c);
          break;
        }
      }
    }
    for (var f = l.length - 1; f >= 0; f--) {
      var m = l[f];
      this.faces.splice(m, 1);
      for (var v = 0, g = this.faceVertexUvs.length; v < g; v++) {
        this.faceVertexUvs[v].splice(m, 1);
      }
    }
    var y = this.vertices.length - t.length;
    this.vertices = t;
    return y;
  },
  setFromPoints: function (e) {
    this.vertices = [];
    for (var t = 0, n = e.length; t < n; t++) {
      var r = e[t];
      this.vertices.push(new C(r.x, r.y, r.z || 0));
    }
    return this;
  },
  sortFacesByMaterialIndex: function () {
    for (var e = this.faces, t = e.length, n = 0; n < t; n++) {
      e[n]._id = n;
    }
    e.sort(function (e, t) {
      return e.materialIndex - t.materialIndex;
    });
    var r;
    var i;
    var a = this.faceVertexUvs[0];
    var o = this.faceVertexUvs[1];
    if (a && a.length === t) {
      r = [];
    }
    if (o && o.length === t) {
      i = [];
    }
    for (var s = 0; s < t; s++) {
      var l = e[s]._id;
      if (r) {
        r.push(a[l]);
      }
      if (i) {
        i.push(o[l]);
      }
    }
    if (r) {
      this.faceVertexUvs[0] = r;
    }
    if (i) {
      this.faceVertexUvs[1] = i;
    }
  },
  toJSON: function () {
    var e = {
      metadata: {
        version: 4.5,
        type: "Geometry",
        generator: "Geometry.toJSON"
      }
    };
    e.uuid = this.uuid;
    e.type = this.type;
    if ("" !== this.name) {
      e.name = this.name;
    }
    if (void 0 !== this.parameters) {
      var t = this.parameters;
      for (var n in t) if (void 0 !== t[n]) {
        e[n] = t[n];
      }
      return e;
    }
    for (var r = [], i = 0; i < this.vertices.length; i++) {
      var a = this.vertices[i];
      r.push(a.x, a.y, a.z);
    }
    for (var o = [], s = [], l = {}, c = [], u = {}, h = [], d = {}, p = 0; p < this.faces.length; p++) {
      var f = this.faces[p];
      var m = void 0 !== this.faceVertexUvs[0][p];
      var v = f.normal.length() > 0;
      var g = f.vertexNormals.length > 0;
      var y = 1 !== f.color.r || 1 !== f.color.g || 1 !== f.color.b;
      var x = f.vertexColors.length > 0;
      var b = 0;
      b = S(b, 0, 0);
      b = S(b, 1, !0);
      b = S(b, 2, !1);
      b = S(b, 3, m);
      b = S(b, 4, v);
      b = S(b, 5, g);
      b = S(b, 6, y);
      b = S(b, 7, x);
      o.push(b);
      o.push(f.a, f.b, f.c);
      o.push(f.materialIndex);
      if (m) {
        var _ = this.faceVertexUvs[0][p];
        o.push(A(_[0]), A(_[1]), A(_[2]));
      }
      if (v) {
        o.push(T(f.normal));
      }
      if (g) {
        var w = f.vertexNormals;
        o.push(T(w[0]), T(w[1]), T(w[2]));
      }
      if (y) {
        o.push(E(f.color));
      }
      if (x) {
        var M = f.vertexColors;
        o.push(E(M[0]), E(M[1]), E(M[2]));
      }
    }
    function S(e, t, n) {
      return n ? e | 1 << t : e & ~(1 << t);
    }
    function T(e) {
      var t = e.x.toString() + e.y.toString() + e.z.toString();
      if (!(void 0 !== l[t])) {
        l[t] = s.length / 3;
        s.push(e.x, e.y, e.z);
      }
      return l[t];
    }
    function E(e) {
      var t = e.r.toString() + e.g.toString() + e.b.toString();
      if (!(void 0 !== u[t])) {
        u[t] = c.length;
        c.push(e.getHex());
      }
      return u[t];
    }
    function A(e) {
      var t = e.x.toString() + e.y.toString();
      if (!(void 0 !== d[t])) {
        d[t] = h.length / 2;
        h.push(e.x, e.y);
      }
      return d[t];
    }
    e.data = {};
    e.data.vertices = r;
    e.data.normals = s;
    if (c.length > 0) {
      e.data.colors = c;
    }
    if (h.length > 0) {
      e.data.uvs = [h];
    }
    e.data.faces = o;
    return e;
  },
  clone: function () {
    return new xa().copy(this);
  },
  copy: function (e) {
    this.vertices = [];
    this.colors = [];
    this.faces = [];
    this.faceVertexUvs = [[]];
    this.morphTargets = [];
    this.morphNormals = [];
    this.skinWeights = [];
    this.skinIndices = [];
    this.lineDistances = [];
    this.boundingBox = null;
    this.boundingSphere = null;
    this.name = e.name;
    for (var t = e.vertices, n = 0, r = t.length; n < r; n++) {
      this.vertices.push(t[n].clone());
    }
    for (var i = e.colors, a = 0, o = i.length; a < o; a++) {
      this.colors.push(i[a].clone());
    }
    for (var s = e.faces, l = 0, c = s.length; l < c; l++) {
      this.faces.push(s[l].clone());
    }
    for (var u = 0, h = e.faceVertexUvs.length; u < h; u++) {
      var d = e.faceVertexUvs[u];
      if (void 0 === this.faceVertexUvs[u]) {
        this.faceVertexUvs[u] = [];
      }
      for (var p = 0, f = d.length; p < f; p++) {
        for (var m = d[p], v = [], g = 0, y = m.length; g < y; g++) {
          var x = m[g];
          v.push(x.clone());
        }
        this.faceVertexUvs[u].push(v);
      }
    }
    for (var b = e.morphTargets, _ = 0, w = b.length; _ < w; _++) {
      var M = {};
      M.name = b[_].name;
      if (void 0 !== b[_].vertices) {
        M.vertices = [];
        for (var S = 0, T = b[_].vertices.length; S < T; S++) {
          M.vertices.push(b[_].vertices[S].clone());
        }
      }
      if (void 0 !== b[_].normals) {
        M.normals = [];
        for (var E = 0, A = b[_].normals.length; E < A; E++) {
          M.normals.push(b[_].normals[E].clone());
        }
      }
      this.morphTargets.push(M);
    }
    for (var L = e.morphNormals, R = 0, P = L.length; R < P; R++) {
      var C = {};
      if (void 0 !== L[R].vertexNormals) {
        C.vertexNormals = [];
        for (var I = 0, O = L[R].vertexNormals.length; I < O; I++) {
          var k = L[R].vertexNormals[I];
          var N = {};
          N.a = k.a.clone();
          N.b = k.b.clone();
          N.c = k.c.clone();
          C.vertexNormals.push(N);
        }
      }
      if (void 0 !== L[R].faceNormals) {
        C.faceNormals = [];
        for (var D = 0, U = L[R].faceNormals.length; D < U; D++) {
          C.faceNormals.push(L[R].faceNormals[D].clone());
        }
      }
      this.morphNormals.push(C);
    }
    for (var B = e.skinWeights, z = 0, F = B.length; z < F; z++) {
      this.skinWeights.push(B[z].clone());
    }
    for (var H = e.skinIndices, G = 0, j = H.length; G < j; G++) {
      this.skinIndices.push(H[G].clone());
    }
    for (var V = e.lineDistances, W = 0, q = V.length; W < q; W++) {
      this.lineDistances.push(V[W]);
    }
    var X = e.boundingBox;
    if (null !== X) {
      this.boundingBox = X.clone();
    }
    var Y = e.boundingSphere;
    if (null !== Y) {
      this.boundingSphere = Y.clone();
    }
    this.elementsNeedUpdate = e.elementsNeedUpdate;
    this.verticesNeedUpdate = e.verticesNeedUpdate;
    this.uvsNeedUpdate = e.uvsNeedUpdate;
    this.normalsNeedUpdate = e.normalsNeedUpdate;
    this.colorsNeedUpdate = e.colorsNeedUpdate;
    this.lineDistancesNeedUpdate = e.lineDistancesNeedUpdate;
    this.groupsNeedUpdate = e.groupsNeedUpdate;
    return this;
  },
  dispose: function () {
    this.dispatchEvent({
      type: "dispose"
    });
  }
});
new C();
new C();
new C();
new We();
var ba = function (e, t, n) {
  n = n || 2;
  var r;
  var i;
  var a;
  var o;
  var s;
  var l;
  var c;
  var u = t && t.length;
  var h = u ? t[0] * n : e.length;
  var d = _a(e, 0, h, n, !0);
  var p = [];
  if (!d || d.next === d.prev) {
    return p;
  }
  if (u) {
    d = function (e, t, n, r) {
      var i;
      var a;
      var o;
      var s;
      var l;
      var c = [];
      for (i = 0, a = t.length; i < a; i++) {
        o = t[i] * r;
        s = i < a - 1 ? t[i + 1] * r : e.length;
        if ((l = _a(e, o, s, r, !1)) === l.next) {
          l.steiner = !0;
        }
        c.push(Ia(l));
      }
      for (c.sort(La), i = 0; i < c.length; i++) {
        Ra(c[i], n);
        n = wa(n, n.next);
      }
      return n;
    }(e, t, d, n);
  }
  if (e.length > 80 * n) {
    r = a = e[0];
    i = o = e[1];
    for (var f = n; f < h; f += n) {
      if ((s = e[f]) < r) {
        r = s;
      }
      if ((l = e[f + 1]) < i) {
        i = l;
      }
      if (s > a) {
        a = s;
      }
      if (l > o) {
        o = l;
      }
    }
    c = 0 !== (c = Math.max(a - r, o - i)) ? 1 / c : 0;
  }
  Ma(d, p, n, r, i, c);
  return p;
};
function _a(e, t, n, r, i) {
  var a;
  var o;
  if (i === function (e, t, n, r) {
    for (var i = 0, a = t, o = n - r; a < n; a += r) {
      i += (e[o] - e[a]) * (e[a + 1] + e[o + 1]);
      o = a;
    }
    return i;
  }(e, t, n, r) > 0) {
    for (a = t; a < n; a += r) {
      o = Ga(a, e[a], e[a + 1], o);
    }
  } else {
    for (a = n - r; a >= t; a -= r) {
      o = Ga(a, e[a], e[a + 1], o);
    }
  }
  if (o && Da(o, o.next)) {
    ja(o);
    o = o.next;
  }
  return o;
}
function wa(e, t) {
  if (!e) {
    return e;
  }
  if (!t) {
    t = e;
  }
  var n;
  var r = e;
  do {
    n = !1;
    if (r.steiner || !Da(r, r.next) && 0 !== Na(r.prev, r, r.next)) {
      r = r.next;
    } else {
      ja(r);
      if ((r = t = r.prev) === r.next) {
        break;
      }
      n = !0;
    }
  } while (n || r !== t);
  return t;
}
function Ma(e, t, n, r, i, a, o) {
  if (e) {
    if (!o && a) {
      (function (e, t, n, r) {
        var i = e;
        do {
          if (null === i.z) {
            i.z = Ca(i.x, i.y, t, n, r);
          }
          i.prevZ = i.prev;
          i.nextZ = i.next;
          i = i.next;
        } while (i !== e);
        i.prevZ.nextZ = null;
        i.prevZ = null;
        (function (e) {
          var t;
          var n;
          var r;
          var i;
          var a;
          var o;
          var s;
          var l;
          var c = 1;
          do {
            for (n = e, e = null, a = null, o = 0; n;) {
              for (o++, r = n, s = 0, t = 0; t < c && (s++, r = r.nextZ); t++) {
                ;
              }
              for (l = c; s > 0 || l > 0 && r;) {
                if (0 !== s && (0 === l || !r || n.z <= r.z)) {
                  i = n;
                  n = n.nextZ;
                  s--;
                } else {
                  i = r;
                  r = r.nextZ;
                  l--;
                }
                if (a) {
                  a.nextZ = i;
                } else {
                  e = i;
                }
                i.prevZ = a;
                a = i;
              }
              n = r;
            }
            a.nextZ = null;
            c *= 2;
          } while (o > 1);
        })(i);
      })(e, r, i, a);
    }
    for (var s, l, c = e; e.prev !== e.next;) {
      s = e.prev;
      l = e.next;
      if (a ? Ta(e, r, i, a) : Sa(e)) {
        t.push(s.i / n);
        t.push(e.i / n);
        t.push(l.i / n);
        ja(e);
        e = l.next;
        c = l.next;
      } else if ((e = l) === c) {
        if (o) {
          if (1 === o) {
            Ma(e = Ea(wa(e), t, n), t, n, r, i, a, 2);
          } else {
            if (2 === o) {
              Aa(e, t, n, r, i, a);
            }
          }
        } else {
          Ma(wa(e), t, n, r, i, a, 1);
        }
        break;
      }
    }
  }
}
function Sa(e) {
  var t = e.prev;
  var n = e;
  var r = e.next;
  if (Na(t, n, r) >= 0) {
    return !1;
  }
  for (var i = e.next.next; i !== e.prev;) {
    if (Oa(t.x, t.y, n.x, n.y, r.x, r.y, i.x, i.y) && Na(i.prev, i, i.next) >= 0) {
      return !1;
    }
    i = i.next;
  }
  return !0;
}
function Ta(e, t, n, r) {
  var i = e.prev;
  var a = e;
  var o = e.next;
  if (Na(i, a, o) >= 0) {
    return !1;
  }
  for (var s = i.x < a.x ? i.x < o.x ? i.x : o.x : a.x < o.x ? a.x : o.x, l = i.y < a.y ? i.y < o.y ? i.y : o.y : a.y < o.y ? a.y : o.y, c = i.x > a.x ? i.x > o.x ? i.x : o.x : a.x > o.x ? a.x : o.x, u = i.y > a.y ? i.y > o.y ? i.y : o.y : a.y > o.y ? a.y : o.y, h = Ca(s, l, t, n, r), d = Ca(c, u, t, n, r), p = e.prevZ, f = e.nextZ; p && p.z >= h && f && f.z <= d;) {
    if (p !== e.prev && p !== e.next && Oa(i.x, i.y, a.x, a.y, o.x, o.y, p.x, p.y) && Na(p.prev, p, p.next) >= 0) {
      return !1;
    }
    p = p.prevZ;
    if (f !== e.prev && f !== e.next && Oa(i.x, i.y, a.x, a.y, o.x, o.y, f.x, f.y) && Na(f.prev, f, f.next) >= 0) {
      return !1;
    }
    f = f.nextZ;
  }
  for (; p && p.z >= h;) {
    if (p !== e.prev && p !== e.next && Oa(i.x, i.y, a.x, a.y, o.x, o.y, p.x, p.y) && Na(p.prev, p, p.next) >= 0) {
      return !1;
    }
    p = p.prevZ;
  }
  for (; f && f.z <= d;) {
    if (f !== e.prev && f !== e.next && Oa(i.x, i.y, a.x, a.y, o.x, o.y, f.x, f.y) && Na(f.prev, f, f.next) >= 0) {
      return !1;
    }
    f = f.nextZ;
  }
  return !0;
}
function Ea(e, t, n) {
  var r = e;
  do {
    var i = r.prev;
    var a = r.next.next;
    if (!Da(i, a) && Ua(i, r, r.next, a) && Fa(i, a) && Fa(a, i)) {
      t.push(i.i / n);
      t.push(r.i / n);
      t.push(a.i / n);
      ja(r);
      ja(r.next);
      r = e = a;
    }
    r = r.next;
  } while (r !== e);
  return wa(r);
}
function Aa(e, t, n, r, i, a) {
  var o = e;
  do {
    for (var s = o.next.next; s !== o.prev;) {
      if (o.i !== s.i && ka(o, s)) {
        var l = Ha(o, s);
        o = wa(o, o.next);
        l = wa(l, l.next);
        Ma(o, t, n, r, i, a);
        return void Ma(l, t, n, r, i, a);
      }
      s = s.next;
    }
    o = o.next;
  } while (o !== e);
}
function La(e, t) {
  return e.x - t.x;
}
function Ra(e, t) {
  if (t = function (e, t) {
    var n;
    var r = t;
    var i = e.x;
    var a = e.y;
    var o = -1 / 0;
    do {
      if (a <= r.y && a >= r.next.y && r.next.y !== r.y) {
        var s = r.x + (a - r.y) * (r.next.x - r.x) / (r.next.y - r.y);
        if (s <= i && s > o) {
          o = s;
          if (s === i) {
            if (a === r.y) {
              return r;
            }
            if (a === r.next.y) {
              return r.next;
            }
          }
          n = r.x < r.next.x ? r : r.next;
        }
      }
      r = r.next;
    } while (r !== t);
    if (!n) {
      return null;
    }
    if (i === o) {
      return n;
    }
    var l;
    var c = n;
    var u = n.x;
    var h = n.y;
    var d = 1 / 0;
    r = n;
    do {
      if (i >= r.x && r.x >= u && i !== r.x && Oa(a < h ? i : o, a, u, h, a < h ? o : i, a, r.x, r.y)) {
        l = Math.abs(a - r.y) / (i - r.x);
        if (Fa(r, e) && (l < d || l === d && (r.x > n.x || r.x === n.x && Pa(n, r)))) {
          n = r;
          d = l;
        }
      }
      r = r.next;
    } while (r !== c);
    return n;
  }(e, t)) {
    var n = Ha(t, e);
    wa(t, t.next);
    wa(n, n.next);
  }
}
function Pa(e, t) {
  return Na(e.prev, e, t.prev) < 0 && Na(t.next, e, e.next) < 0;
}
function Ca(e, t, n, r, i) {
  return (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - n) * i) | e << 8)) | e << 4)) | e << 2)) | e << 1)) | (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - r) * i) | t << 8)) | t << 4)) | t << 2)) | t << 1)) << 1;
}
function Ia(e) {
  var t = e;
  var n = e;
  do {
    if (t.x < n.x || t.x === n.x && t.y < n.y) {
      n = t;
    }
    t = t.next;
  } while (t !== e);
  return n;
}
function Oa(e, t, n, r, i, a, o, s) {
  return (i - o) * (t - s) - (e - o) * (a - s) >= 0 && (e - o) * (r - s) - (n - o) * (t - s) >= 0 && (n - o) * (a - s) - (i - o) * (r - s) >= 0;
}
function ka(e, t) {
  return e.next.i !== t.i && e.prev.i !== t.i && !function (e, t) {
    var n = e;
    do {
      if (n.i !== e.i && n.next.i !== e.i && n.i !== t.i && n.next.i !== t.i && Ua(n, n.next, e, t)) {
        return !0;
      }
      n = n.next;
    } while (n !== e);
    return !1;
  }(e, t) && (Fa(e, t) && Fa(t, e) && function (e, t) {
    var n = e;
    var r = !1;
    var i = (e.x + t.x) / 2;
    var a = (e.y + t.y) / 2;
    do {
      if (n.y > a !== n.next.y > a && n.next.y !== n.y && i < (n.next.x - n.x) * (a - n.y) / (n.next.y - n.y) + n.x) {
        r = !r;
      }
      n = n.next;
    } while (n !== e);
    return r;
  }(e, t) && (Na(e.prev, e, t.prev) || Na(e, t.prev, t)) || Da(e, t) && Na(e.prev, e, e.next) > 0 && Na(t.prev, t, t.next) > 0);
}
function Na(e, t, n) {
  return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y);
}
function Da(e, t) {
  return e.x === t.x && e.y === t.y;
}
function Ua(e, t, n, r) {
  var i = za(Na(e, t, n));
  var a = za(Na(e, t, r));
  var o = za(Na(n, r, e));
  var s = za(Na(n, r, t));
  return i !== a && o !== s || !(0 !== i || !Ba(e, n, t)) || !(0 !== a || !Ba(e, r, t)) || !(0 !== o || !Ba(n, e, r)) || !(0 !== s || !Ba(n, t, r));
}
function Ba(e, t, n) {
  return t.x <= Math.max(e.x, n.x) && t.x >= Math.min(e.x, n.x) && t.y <= Math.max(e.y, n.y) && t.y >= Math.min(e.y, n.y);
}
function za(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}
function Fa(e, t) {
  return Na(e.prev, e, e.next) < 0 ? Na(e, t, e.next) >= 0 && Na(e, e.prev, t) >= 0 : Na(e, t, e.prev) < 0 || Na(e, e.next, t) < 0;
}
function Ha(e, t) {
  var n = new Va(e.i, e.x, e.y);
  var r = new Va(t.i, t.x, t.y);
  var i = e.next;
  var a = t.prev;
  e.next = t;
  t.prev = e;
  n.next = i;
  i.prev = n;
  r.next = n;
  n.prev = r;
  a.next = r;
  r.prev = a;
  return r;
}
function Ga(e, t, n, r) {
  var i = new Va(e, t, n);
  if (r) {
    i.next = r.next;
    i.prev = r;
    r.next.prev = i;
    r.next = i;
  } else {
    i.prev = i;
    i.next = i;
  }
  return i;
}
function ja(e) {
  e.next.prev = e.prev;
  e.prev.next = e.next;
  if (e.prevZ) {
    e.prevZ.nextZ = e.nextZ;
  }
  if (e.nextZ) {
    e.nextZ.prevZ = e.prevZ;
  }
}
function Va(e, t, n) {
  this.i = e;
  this.x = t;
  this.y = n;
  this.prev = null;
  this.next = null;
  this.z = null;
  this.prevZ = null;
  this.nextZ = null;
  this.steiner = !1;
}
var Wa = {
  area: function (e) {
    for (var t = e.length, n = 0, r = t - 1, i = 0; i < t; r = i++) {
      n += e[r].x * e[i].y - e[i].x * e[r].y;
    }
    return .5 * n;
  },
  isClockWise: function (e) {
    return Wa.area(e) < 0;
  },
  triangulateShape: function (e, t) {
    var n = [];
    var r = [];
    var i = [];
    qa(e);
    Xa(n, e);
    var a = e.length;
    t.forEach(qa);
    for (var o = 0; o < t.length; o++) {
      r.push(a);
      a += t[o].length;
      Xa(n, t[o]);
    }
    for (var s = ba(n, r), l = 0; l < s.length; l += 3) {
      i.push(s.slice(l, l + 3));
    }
    return i;
  }
};
function qa(e) {
  var t = e.length;
  if (t > 2 && e[t - 1].equals(e[0])) {
    e.pop();
  }
}
function Xa(e, t) {
  for (var n = 0; n < t.length; n++) {
    e.push(t[n].x);
    e.push(t[n].y);
  }
}
var Ya = function (e) {
  Object(l.a)(n, e);
  var t = Object(c.a)(n);
  function n(e, r) {
    var i;
    Object(u.a)(this, n);
    (i = t.call(this)).type = "ExtrudeBufferGeometry";
    i.parameters = {
      shapes: e,
      options: r
    };
    e = Array.isArray(e) ? e : [e];
    for (var a = Object(s.a)(i), o = [], l = [], c = 0, h = e.length; c < h; c++) {
      d(e[c]);
    }
    function d(e) {
      var t = [];
      var n = void 0 !== r.curveSegments ? r.curveSegments : 12;
      var i = void 0 !== r.steps ? r.steps : 1;
      var s = void 0 !== r.depth ? r.depth : 100;
      var c = void 0 === r.bevelEnabled || r.bevelEnabled;
      var u = void 0 !== r.bevelThickness ? r.bevelThickness : 6;
      var h = void 0 !== r.bevelSize ? r.bevelSize : u - 2;
      var d = void 0 !== r.bevelOffset ? r.bevelOffset : 0;
      var p = void 0 !== r.bevelSegments ? r.bevelSegments : 3;
      var f = r.extrudePath;
      var m = void 0 !== r.UVGenerator ? r.UVGenerator : Za;
      if (void 0 !== r.amount) {
        console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth.");
        s = r.amount;
      }
      var v;
      var g;
      var y;
      var x;
      var b;
      var _ = !1;
      if (f) {
        v = f.getSpacedPoints(i);
        _ = !0;
        c = !1;
        g = f.computeFrenetFrames(i, !1);
        y = new C();
        x = new C();
        b = new C();
      }
      if (!c) {
        p = 0;
        u = 0;
        h = 0;
        d = 0;
      }
      var M = e.extractPoints(n);
      var S = M.shape;
      var T = M.holes;
      if (!Wa.isClockWise(S)) {
        S = S.reverse();
        for (var E = 0, A = T.length; E < A; E++) {
          var L = T[E];
          if (Wa.isClockWise(L)) {
            T[E] = L.reverse();
          }
        }
      }
      for (var R = Wa.triangulateShape(S, T), P = S, I = 0, O = T.length; I < O; I++) {
        var k = T[I];
        S = S.concat(k);
      }
      function N(e, t, n) {
        if (!t) {
          console.error("THREE.ExtrudeGeometry: vec does not exist");
        }
        return t.clone().multiplyScalar(n).add(e);
      }
      var D = S.length;
      var U = R.length;
      function B(e, t, n) {
        var r;
        var i;
        var a;
        var o = e.x - t.x;
        var s = e.y - t.y;
        var l = n.x - e.x;
        var c = n.y - e.y;
        var u = o * o + s * s;
        var h = o * c - s * l;
        if (Math.abs(h) > Number.EPSILON) {
          var d = Math.sqrt(u);
          var p = Math.sqrt(l * l + c * c);
          var f = t.x - s / d;
          var m = t.y + o / d;
          var v = ((n.x - c / p - f) * c - (n.y + l / p - m) * l) / (o * c - s * l);
          var g = (r = f + o * v - e.x) * r + (i = m + s * v - e.y) * i;
          if (g <= 2) {
            return new w(r, i);
          }
          a = Math.sqrt(g / 2);
        } else {
          var y = !1;
          if (o > Number.EPSILON) {
            if (l > Number.EPSILON) {
              y = !0;
            }
          } else {
            if (o < -Number.EPSILON) {
              if (l < -Number.EPSILON) {
                y = !0;
              }
            } else {
              if (Math.sign(s) === Math.sign(c)) {
                y = !0;
              }
            }
          }
          if (y) {
            r = -s;
            i = o;
            a = Math.sqrt(u);
          } else {
            r = o;
            i = s;
            a = Math.sqrt(u / 2);
          }
        }
        return new w(r / a, i / a);
      }
      for (var z = [], F = 0, H = P.length, G = H - 1, j = F + 1; F < H; F++, G++, j++) {
        if (G === H) {
          G = 0;
        }
        if (j === H) {
          j = 0;
        }
        z[F] = B(P[F], P[G], P[j]);
      }
      for (var V, W = [], q = z.concat(), X = 0, Y = T.length; X < Y; X++) {
        var Z = T[X];
        V = [];
        for (var J = 0, K = Z.length, Q = K - 1, $ = J + 1; J < K; J++, Q++, $++) {
          if (Q === K) {
            Q = 0;
          }
          if ($ === K) {
            $ = 0;
          }
          V[J] = B(Z[J], Z[Q], Z[$]);
        }
        W.push(V);
        q = q.concat(V);
      }
      for (var ee = 0; ee < p; ee++) {
        for (var te = ee / p, ne = u * Math.cos(te * Math.PI / 2), re = h * Math.sin(te * Math.PI / 2) + d, ie = 0, ae = P.length; ie < ae; ie++) {
          var oe = N(P[ie], z[ie], re);
          Oe(oe.x, oe.y, -ne);
        }
        for (var se = 0, le = T.length; se < le; se++) {
          var ce = T[se];
          V = W[se];
          for (var ue = 0, he = ce.length; ue < he; ue++) {
            var de = N(ce[ue], V[ue], re);
            Oe(de.x, de.y, -ne);
          }
        }
      }
      for (var pe = h + d, fe = 0; fe < D; fe++) {
        var me = c ? N(S[fe], q[fe], pe) : S[fe];
        if (_) {
          x.copy(g.normals[0]).multiplyScalar(me.x);
          y.copy(g.binormals[0]).multiplyScalar(me.y);
          b.copy(v[0]).add(x).add(y);
          Oe(b.x, b.y, b.z);
        } else {
          Oe(me.x, me.y, 0);
        }
      }
      for (var ve = 1; ve <= i; ve++) {
        for (var ge = 0; ge < D; ge++) {
          var ye = c ? N(S[ge], q[ge], pe) : S[ge];
          if (_) {
            x.copy(g.normals[ve]).multiplyScalar(ye.x);
            y.copy(g.binormals[ve]).multiplyScalar(ye.y);
            b.copy(v[ve]).add(x).add(y);
            Oe(b.x, b.y, b.z);
          } else {
            Oe(ye.x, ye.y, s / i * ve);
          }
        }
      }
      for (var xe = p - 1; xe >= 0; xe--) {
        for (var be = xe / p, _e = u * Math.cos(be * Math.PI / 2), we = h * Math.sin(be * Math.PI / 2) + d, Me = 0, Se = P.length; Me < Se; Me++) {
          var Te = N(P[Me], z[Me], we);
          Oe(Te.x, Te.y, s + _e);
        }
        for (var Ee = 0, Ae = T.length; Ee < Ae; Ee++) {
          var Le = T[Ee];
          V = W[Ee];
          for (var Re = 0, Pe = Le.length; Re < Pe; Re++) {
            var Ce = N(Le[Re], V[Re], we);
            if (_) {
              Oe(Ce.x, Ce.y + v[i - 1].y, v[i - 1].x + _e);
            } else {
              Oe(Ce.x, Ce.y, s + _e);
            }
          }
        }
      }
      function Ie(e, t) {
        for (var n = e.length; --n >= 0;) {
          var r = n;
          var a = n - 1;
          if (a < 0) {
            a = e.length - 1;
          }
          for (var o = 0, s = i + 2 * p; o < s; o++) {
            var l = D * o;
            var c = D * (o + 1);
            Ne(t + r + l, t + a + l, t + a + c, t + r + c);
          }
        }
      }
      function Oe(e, n, r) {
        t.push(e);
        t.push(n);
        t.push(r);
      }
      function ke(e, t, n) {
        De(e);
        De(t);
        De(n);
        var r = o.length / 3;
        var i = m.generateTopUV(a, o, r - 3, r - 2, r - 1);
        Ue(i[0]);
        Ue(i[1]);
        Ue(i[2]);
      }
      function Ne(e, t, n, r) {
        De(e);
        De(t);
        De(r);
        De(t);
        De(n);
        De(r);
        var i = o.length / 3;
        var s = m.generateSideWallUV(a, o, i - 6, i - 3, i - 2, i - 1);
        Ue(s[0]);
        Ue(s[1]);
        Ue(s[3]);
        Ue(s[1]);
        Ue(s[2]);
        Ue(s[3]);
      }
      function De(e) {
        o.push(t[3 * e + 0]);
        o.push(t[3 * e + 1]);
        o.push(t[3 * e + 2]);
      }
      function Ue(e) {
        l.push(e.x);
        l.push(e.y);
      }
      !function () {
        var e = o.length / 3;
        if (c) {
          for (var t = 0, n = D * t, r = 0; r < U; r++) {
            var s = R[r];
            ke(s[2] + n, s[1] + n, s[0] + n);
          }
          n = D * (t = i + 2 * p);
          for (var l = 0; l < U; l++) {
            var u = R[l];
            ke(u[0] + n, u[1] + n, u[2] + n);
          }
        } else {
          for (var h = 0; h < U; h++) {
            var d = R[h];
            ke(d[2], d[1], d[0]);
          }
          for (var f = 0; f < U; f++) {
            var m = R[f];
            ke(m[0] + D * i, m[1] + D * i, m[2] + D * i);
          }
        }
        a.addGroup(e, o.length / 3 - e, 0);
      }();
      (function () {
        var e = o.length / 3;
        var t = 0;
        Ie(P, t);
        t += P.length;
        for (var n = 0, r = T.length; n < r; n++) {
          var i = T[n];
          Ie(i, t);
          t += i.length;
        }
        a.addGroup(e, o.length / 3 - e, 1);
      })();
    }
    i.setAttribute("position", new pt(o, 3));
    i.setAttribute("uv", new pt(l, 2));
    i.computeVertexNormals();
    return i;
  }
  Object(h.a)(n, [{
    key: "toJSON",
    value: function () {
      var e = St.prototype.toJSON.call(this);
      return function (e, t, n) {
        n.shapes = [];
        if (Array.isArray(e)) {
          for (var r = 0, i = e.length; r < i; r++) {
            var a = e[r];
            n.shapes.push(a.uuid);
          }
        } else {
          n.shapes.push(e.uuid);
        }
        if (void 0 !== t.extrudePath) {
          n.options.extrudePath = t.extrudePath.toJSON();
        }
        return n;
      }(this.parameters.shapes, this.parameters.options, e);
    }
  }]);
  return n;
}(St);
var Za = {
  generateTopUV: function (e, t, n, r, i) {
    var a = t[3 * n];
    var o = t[3 * n + 1];
    var s = t[3 * r];
    var l = t[3 * r + 1];
    var c = t[3 * i];
    var u = t[3 * i + 1];
    return [new w(a, o), new w(s, l), new w(c, u)];
  },
  generateSideWallUV: function (e, t, n, r, i, a) {
    var o = t[3 * n];
    var s = t[3 * n + 1];
    var l = t[3 * n + 2];
    var c = t[3 * r];
    var u = t[3 * r + 1];
    var h = t[3 * r + 2];
    var d = t[3 * i];
    var p = t[3 * i + 1];
    var f = t[3 * i + 2];
    var m = t[3 * a];
    var v = t[3 * a + 1];
    var g = t[3 * a + 2];
    return Math.abs(s - u) < .01 ? [new w(o, 1 - l), new w(c, 1 - h), new w(d, 1 - f), new w(m, 1 - g)] : [new w(s, 1 - l), new w(u, 1 - h), new w(p, 1 - f), new w(v, 1 - g)];
  }
};
var Ja = function (e) {
  Object(l.a)(n, e);
  var t = Object(c.a)(n);
  function n(e, r) {
    var i;
    Object(u.a)(this, n);
    (i = t.call(this)).type = "ExtrudeGeometry";
    i.parameters = {
      shapes: e,
      options: r
    };
    i.fromBufferGeometry(new Ya(e, r));
    i.mergeVertices();
    return i;
  }
  Object(h.a)(n, [{
    key: "toJSON",
    value: function () {
      var e = Object(i.a)(Object(a.a)(n.prototype), "toJSON", this).call(this);
      return function (e, t, n) {
        n.shapes = [];
        if (Array.isArray(e)) {
          for (var r = 0, i = e.length; r < i; r++) {
            var a = e[r];
            n.shapes.push(a.uuid);
          }
        } else {
          n.shapes.push(e.uuid);
        }
        if (void 0 !== t.extrudePath) {
          n.options.extrudePath = t.extrudePath.toJSON();
        }
        return n;
      }(this.parameters.shapes, this.parameters.options, e);
    }
  }]);
  return n;
}(xa);
function Ka(e, t, n) {
  St.call(this);
  this.type = "ParametricBufferGeometry";
  this.parameters = {
    func: e,
    slices: t,
    stacks: n
  };
  var r = [];
  var i = [];
  var a = [];
  var o = [];
  var s = 1e-5;
  var l = new C();
  var c = new C();
  var u = new C();
  var h = new C();
  var d = new C();
  if (e.length < 3) {
    console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");
  }
  for (var p = t + 1, f = 0; f <= n; f++) {
    for (var m = f / n, v = 0; v <= t; v++) {
      var g = v / t;
      e(g, m, c);
      i.push(c.x, c.y, c.z);
      if (g - s >= 0) {
        e(g - s, m, u);
        h.subVectors(c, u);
      } else {
        e(g + s, m, u);
        h.subVectors(u, c);
      }
      if (m - s >= 0) {
        e(g, m - s, u);
        d.subVectors(c, u);
      } else {
        e(g, m + s, u);
        d.subVectors(u, c);
      }
      l.crossVectors(h, d).normalize();
      a.push(l.x, l.y, l.z);
      o.push(g, m);
    }
  }
  for (var y = 0; y < n; y++) {
    for (var x = 0; x < t; x++) {
      var b = y * p + x;
      var _ = y * p + x + 1;
      var w = (y + 1) * p + x + 1;
      var M = (y + 1) * p + x;
      r.push(b, _, M);
      r.push(_, w, M);
    }
  }
  this.setIndex(r);
  this.setAttribute("position", new pt(i, 3));
  this.setAttribute("normal", new pt(a, 3));
  this.setAttribute("uv", new pt(o, 2));
}
function Qa(e, t, n) {
  xa.call(this);
  this.type = "ParametricGeometry";
  this.parameters = {
    func: e,
    slices: t,
    stacks: n
  };
  this.fromBufferGeometry(new Ka(e, t, n));
  this.mergeVertices();
}
Ka.prototype = Object.create(St.prototype);
Ka.prototype.constructor = Ka;
Qa.prototype = Object.create(xa.prototype);
Qa.prototype.constructor = Qa;
var $a = function (e) {
  Object(l.a)(n, e);
  var t = Object(c.a)(n);
  function n(e, r) {
    var i;
    Object(u.a)(this, n);
    (i = t.call(this)).type = "ShapeBufferGeometry";
    i.parameters = {
      shapes: e,
      curveSegments: r
    };
    r = r || 12;
    var a = [];
    var o = [];
    var s = [];
    var l = [];
    var c = 0;
    var h = 0;
    if (!1 === Array.isArray(e)) {
      p(e);
    } else {
      for (var d = 0; d < e.length; d++) {
        p(e[d]);
        i.addGroup(c, h, d);
        c += h;
        h = 0;
      }
    }
    function p(e) {
      var t = o.length / 3;
      var n = e.extractPoints(r);
      var i = n.shape;
      var c = n.holes;
      if (!1 === Wa.isClockWise(i)) {
        i = i.reverse();
      }
      for (var u = 0, d = c.length; u < d; u++) {
        var p = c[u];
        if (!0 === Wa.isClockWise(p)) {
          c[u] = p.reverse();
        }
      }
      for (var f = Wa.triangulateShape(i, c), m = 0, v = c.length; m < v; m++) {
        var g = c[m];
        i = i.concat(g);
      }
      for (var y = 0, x = i.length; y < x; y++) {
        var b = i[y];
        o.push(b.x, b.y, 0);
        s.push(0, 0, 1);
        l.push(b.x, b.y);
      }
      for (var _ = 0, w = f.length; _ < w; _++) {
        var M = f[_];
        var S = M[0] + t;
        var T = M[1] + t;
        var E = M[2] + t;
        a.push(S, T, E);
        h += 3;
      }
    }
    i.setIndex(a);
    i.setAttribute("position", new pt(o, 3));
    i.setAttribute("normal", new pt(s, 3));
    i.setAttribute("uv", new pt(l, 2));
    return i;
  }
  Object(h.a)(n, [{
    key: "toJSON",
    value: function () {
      var e = St.prototype.toJSON.call(this);
      return function (e, t) {
        t.shapes = [];
        if (Array.isArray(e)) {
          for (var n = 0, r = e.length; n < r; n++) {
            var i = e[n];
            t.shapes.push(i.uuid);
          }
        } else {
          t.shapes.push(e.uuid);
        }
        return t;
      }(this.parameters.shapes, e);
    }
  }]);
  return n;
}(St);
var eo = function (e) {
  Object(l.a)(n, e);
  var t = Object(c.a)(n);
  function n(e, r) {
    var i;
    Object(u.a)(this, n);
    (i = t.call(this)).type = "ShapeGeometry";
    if ("object" === typeof r) {
      console.warn("THREE.ShapeGeometry: Options parameter has been removed.");
      r = r.curveSegments;
    }
    i.parameters = {
      shapes: e,
      curveSegments: r
    };
    i.fromBufferGeometry(new $a(e, r));
    i.mergeVertices();
    return i;
  }
  Object(h.a)(n, [{
    key: "toJSON",
    value: function () {
      var e = xa.prototype.toJSON.call(this);
      return function (e, t) {
        t.shapes = [];
        if (Array.isArray(e)) {
          for (var n = 0, r = e.length; n < r; n++) {
            var i = e[n];
            t.shapes.push(i.uuid);
          }
        } else {
          t.shapes.push(e.uuid);
        }
        return t;
      }(this.parameters.shapes, e);
    }
  }]);
  return n;
}(xa);
function to(e) {
  tt.call(this);
  this.type = "ShadowMaterial";
  this.color = new Qe(0);
  this.transparent = !0;
  this.setValues(e);
}
function no(e) {
  Zt.call(this, e);
  this.type = "RawShaderMaterial";
}
function ro(e) {
  tt.call(this);
  this.defines = {
    STANDARD: ""
  };
  this.type = "MeshStandardMaterial";
  this.color = new Qe(16777215);
  this.roughness = 1;
  this.metalness = 0;
  this.map = null;
  this.lightMap = null;
  this.lightMapIntensity = 1;
  this.aoMap = null;
  this.aoMapIntensity = 1;
  this.emissive = new Qe(0);
  this.emissiveIntensity = 1;
  this.emissiveMap = null;
  this.bumpMap = null;
  this.bumpScale = 1;
  this.normalMap = null;
  this.normalMapType = 0;
  this.normalScale = new w(1, 1);
  this.displacementMap = null;
  this.displacementScale = 1;
  this.displacementBias = 0;
  this.roughnessMap = null;
  this.metalnessMap = null;
  this.alphaMap = null;
  this.envMap = null;
  this.envMapIntensity = 1;
  this.refractionRatio = .98;
  this.wireframe = !1;
  this.wireframeLinewidth = 1;
  this.wireframeLinecap = "round";
  this.wireframeLinejoin = "round";
  this.skinning = !1;
  this.morphTargets = !1;
  this.morphNormals = !1;
  this.vertexTangents = !1;
  this.setValues(e);
}
function io(e) {
  ro.call(this);
  this.defines = {
    STANDARD: "",
    PHYSICAL: ""
  };
  this.type = "MeshPhysicalMaterial";
  this.clearcoat = 0;
  this.clearcoatMap = null;
  this.clearcoatRoughness = 0;
  this.clearcoatRoughnessMap = null;
  this.clearcoatNormalScale = new w(1, 1);
  this.clearcoatNormalMap = null;
  this.reflectivity = .5;
  Object.defineProperty(this, "ior", {
    get: function () {
      return (1 + .4 * this.reflectivity) / (1 - .4 * this.reflectivity);
    },
    set: function (e) {
      this.reflectivity = _.clamp(2.5 * (e - 1) / (e + 1), 0, 1);
    }
  });
  this.sheen = null;
  this.transmission = 0;
  this.transmissionMap = null;
  this.setValues(e);
}
function ao(e) {
  tt.call(this);
  this.type = "MeshPhongMaterial";
  this.color = new Qe(16777215);
  this.specular = new Qe(1118481);
  this.shininess = 30;
  this.map = null;
  this.lightMap = null;
  this.lightMapIntensity = 1;
  this.aoMap = null;
  this.aoMapIntensity = 1;
  this.emissive = new Qe(0);
  this.emissiveIntensity = 1;
  this.emissiveMap = null;
  this.bumpMap = null;
  this.bumpScale = 1;
  this.normalMap = null;
  this.normalMapType = 0;
  this.normalScale = new w(1, 1);
  this.displacementMap = null;
  this.displacementScale = 1;
  this.displacementBias = 0;
  this.specularMap = null;
  this.alphaMap = null;
  this.envMap = null;
  this.combine = 0;
  this.reflectivity = 1;
  this.refractionRatio = .98;
  this.wireframe = !1;
  this.wireframeLinewidth = 1;
  this.wireframeLinecap = "round";
  this.wireframeLinejoin = "round";
  this.skinning = !1;
  this.morphTargets = !1;
  this.morphNormals = !1;
  this.setValues(e);
}
function oo(e) {
  tt.call(this);
  this.defines = {
    TOON: ""
  };
  this.type = "MeshToonMaterial";
  this.color = new Qe(16777215);
  this.map = null;
  this.gradientMap = null;
  this.lightMap = null;
  this.lightMapIntensity = 1;
  this.aoMap = null;
  this.aoMapIntensity = 1;
  this.emissive = new Qe(0);
  this.emissiveIntensity = 1;
  this.emissiveMap = null;
  this.bumpMap = null;
  this.bumpScale = 1;
  this.normalMap = null;
  this.normalMapType = 0;
  this.normalScale = new w(1, 1);
  this.displacementMap = null;
  this.displacementScale = 1;
  this.displacementBias = 0;
  this.alphaMap = null;
  this.wireframe = !1;
  this.wireframeLinewidth = 1;
  this.wireframeLinecap = "round";
  this.wireframeLinejoin = "round";
  this.skinning = !1;
  this.morphTargets = !1;
  this.morphNormals = !1;
  this.setValues(e);
}
function so(e) {
  tt.call(this);
  this.type = "MeshNormalMaterial";
  this.bumpMap = null;
  this.bumpScale = 1;
  this.normalMap = null;
  this.normalMapType = 0;
  this.normalScale = new w(1, 1);
  this.displacementMap = null;
  this.displacementScale = 1;
  this.displacementBias = 0;
  this.wireframe = !1;
  this.wireframeLinewidth = 1;
  this.fog = !1;
  this.skinning = !1;
  this.morphTargets = !1;
  this.morphNormals = !1;
  this.setValues(e);
}
function lo(e) {
  tt.call(this);
  this.type = "MeshLambertMaterial";
  this.color = new Qe(16777215);
  this.map = null;
  this.lightMap = null;
  this.lightMapIntensity = 1;
  this.aoMap = null;
  this.aoMapIntensity = 1;
  this.emissive = new Qe(0);
  this.emissiveIntensity = 1;
  this.emissiveMap = null;
  this.specularMap = null;
  this.alphaMap = null;
  this.envMap = null;
  this.combine = 0;
  this.reflectivity = 1;
  this.refractionRatio = .98;
  this.wireframe = !1;
  this.wireframeLinewidth = 1;
  this.wireframeLinecap = "round";
  this.wireframeLinejoin = "round";
  this.skinning = !1;
  this.morphTargets = !1;
  this.morphNormals = !1;
  this.setValues(e);
}
function co(e) {
  tt.call(this);
  this.defines = {
    MATCAP: ""
  };
  this.type = "MeshMatcapMaterial";
  this.color = new Qe(16777215);
  this.matcap = null;
  this.map = null;
  this.bumpMap = null;
  this.bumpScale = 1;
  this.normalMap = null;
  this.normalMapType = 0;
  this.normalScale = new w(1, 1);
  this.displacementMap = null;
  this.displacementScale = 1;
  this.displacementBias = 0;
  this.alphaMap = null;
  this.skinning = !1;
  this.morphTargets = !1;
  this.morphNormals = !1;
  this.setValues(e);
}
function uo(e) {
  Xi.call(this);
  this.type = "LineDashedMaterial";
  this.scale = 1;
  this.dashSize = 3;
  this.gapSize = 1;
  this.setValues(e);
}
to.prototype = Object.create(tt.prototype);
to.prototype.constructor = to;
to.prototype.isShadowMaterial = !0;
to.prototype.copy = function (e) {
  tt.prototype.copy.call(this, e);
  this.color.copy(e.color);
  return this;
};
no.prototype = Object.create(Zt.prototype);
no.prototype.constructor = no;
no.prototype.isRawShaderMaterial = !0;
ro.prototype = Object.create(tt.prototype);
ro.prototype.constructor = ro;
ro.prototype.isMeshStandardMaterial = !0;
ro.prototype.copy = function (e) {
  tt.prototype.copy.call(this, e);
  this.defines = {
    STANDARD: ""
  };
  this.color.copy(e.color);
  this.roughness = e.roughness;
  this.metalness = e.metalness;
  this.map = e.map;
  this.lightMap = e.lightMap;
  this.lightMapIntensity = e.lightMapIntensity;
  this.aoMap = e.aoMap;
  this.aoMapIntensity = e.aoMapIntensity;
  this.emissive.copy(e.emissive);
  this.emissiveMap = e.emissiveMap;
  this.emissiveIntensity = e.emissiveIntensity;
  this.bumpMap = e.bumpMap;
  this.bumpScale = e.bumpScale;
  this.normalMap = e.normalMap;
  this.normalMapType = e.normalMapType;
  this.normalScale.copy(e.normalScale);
  this.displacementMap = e.displacementMap;
  this.displacementScale = e.displacementScale;
  this.displacementBias = e.displacementBias;
  this.roughnessMap = e.roughnessMap;
  this.metalnessMap = e.metalnessMap;
  this.alphaMap = e.alphaMap;
  this.envMap = e.envMap;
  this.envMapIntensity = e.envMapIntensity;
  this.refractionRatio = e.refractionRatio;
  this.wireframe = e.wireframe;
  this.wireframeLinewidth = e.wireframeLinewidth;
  this.wireframeLinecap = e.wireframeLinecap;
  this.wireframeLinejoin = e.wireframeLinejoin;
  this.skinning = e.skinning;
  this.morphTargets = e.morphTargets;
  this.morphNormals = e.morphNormals;
  this.vertexTangents = e.vertexTangents;
  return this;
};
io.prototype = Object.create(ro.prototype);
io.prototype.constructor = io;
io.prototype.isMeshPhysicalMaterial = !0;
io.prototype.copy = function (e) {
  ro.prototype.copy.call(this, e);
  this.defines = {
    STANDARD: "",
    PHYSICAL: ""
  };
  this.clearcoat = e.clearcoat;
  this.clearcoatMap = e.clearcoatMap;
  this.clearcoatRoughness = e.clearcoatRoughness;
  this.clearcoatRoughnessMap = e.clearcoatRoughnessMap;
  this.clearcoatNormalMap = e.clearcoatNormalMap;
  this.clearcoatNormalScale.copy(e.clearcoatNormalScale);
  this.reflectivity = e.reflectivity;
  if (e.sheen) {
    this.sheen = (this.sheen || new Qe()).copy(e.sheen);
  } else {
    this.sheen = null;
  }
  this.transmission = e.transmission;
  this.transmissionMap = e.transmissionMap;
  return this;
};
ao.prototype = Object.create(tt.prototype);
ao.prototype.constructor = ao;
ao.prototype.isMeshPhongMaterial = !0;
ao.prototype.copy = function (e) {
  tt.prototype.copy.call(this, e);
  this.color.copy(e.color);
  this.specular.copy(e.specular);
  this.shininess = e.shininess;
  this.map = e.map;
  this.lightMap = e.lightMap;
  this.lightMapIntensity = e.lightMapIntensity;
  this.aoMap = e.aoMap;
  this.aoMapIntensity = e.aoMapIntensity;
  this.emissive.copy(e.emissive);
  this.emissiveMap = e.emissiveMap;
  this.emissiveIntensity = e.emissiveIntensity;
  this.bumpMap = e.bumpMap;
  this.bumpScale = e.bumpScale;
  this.normalMap = e.normalMap;
  this.normalMapType = e.normalMapType;
  this.normalScale.copy(e.normalScale);
  this.displacementMap = e.displacementMap;
  this.displacementScale = e.displacementScale;
  this.displacementBias = e.displacementBias;
  this.specularMap = e.specularMap;
  this.alphaMap = e.alphaMap;
  this.envMap = e.envMap;
  this.combine = e.combine;
  this.reflectivity = e.reflectivity;
  this.refractionRatio = e.refractionRatio;
  this.wireframe = e.wireframe;
  this.wireframeLinewidth = e.wireframeLinewidth;
  this.wireframeLinecap = e.wireframeLinecap;
  this.wireframeLinejoin = e.wireframeLinejoin;
  this.skinning = e.skinning;
  this.morphTargets = e.morphTargets;
  this.morphNormals = e.morphNormals;
  return this;
};
oo.prototype = Object.create(tt.prototype);
oo.prototype.constructor = oo;
oo.prototype.isMeshToonMaterial = !0;
oo.prototype.copy = function (e) {
  tt.prototype.copy.call(this, e);
  this.color.copy(e.color);
  this.map = e.map;
  this.gradientMap = e.gradientMap;
  this.lightMap = e.lightMap;
  this.lightMapIntensity = e.lightMapIntensity;
  this.aoMap = e.aoMap;
  this.aoMapIntensity = e.aoMapIntensity;
  this.emissive.copy(e.emissive);
  this.emissiveMap = e.emissiveMap;
  this.emissiveIntensity = e.emissiveIntensity;
  this.bumpMap = e.bumpMap;
  this.bumpScale = e.bumpScale;
  this.normalMap = e.normalMap;
  this.normalMapType = e.normalMapType;
  this.normalScale.copy(e.normalScale);
  this.displacementMap = e.displacementMap;
  this.displacementScale = e.displacementScale;
  this.displacementBias = e.displacementBias;
  this.alphaMap = e.alphaMap;
  this.wireframe = e.wireframe;
  this.wireframeLinewidth = e.wireframeLinewidth;
  this.wireframeLinecap = e.wireframeLinecap;
  this.wireframeLinejoin = e.wireframeLinejoin;
  this.skinning = e.skinning;
  this.morphTargets = e.morphTargets;
  this.morphNormals = e.morphNormals;
  return this;
};
so.prototype = Object.create(tt.prototype);
so.prototype.constructor = so;
so.prototype.isMeshNormalMaterial = !0;
so.prototype.copy = function (e) {
  tt.prototype.copy.call(this, e);
  this.bumpMap = e.bumpMap;
  this.bumpScale = e.bumpScale;
  this.normalMap = e.normalMap;
  this.normalMapType = e.normalMapType;
  this.normalScale.copy(e.normalScale);
  this.displacementMap = e.displacementMap;
  this.displacementScale = e.displacementScale;
  this.displacementBias = e.displacementBias;
  this.wireframe = e.wireframe;
  this.wireframeLinewidth = e.wireframeLinewidth;
  this.skinning = e.skinning;
  this.morphTargets = e.morphTargets;
  this.morphNormals = e.morphNormals;
  return this;
};
lo.prototype = Object.create(tt.prototype);
lo.prototype.constructor = lo;
lo.prototype.isMeshLambertMaterial = !0;
lo.prototype.copy = function (e) {
  tt.prototype.copy.call(this, e);
  this.color.copy(e.color);
  this.map = e.map;
  this.lightMap = e.lightMap;
  this.lightMapIntensity = e.lightMapIntensity;
  this.aoMap = e.aoMap;
  this.aoMapIntensity = e.aoMapIntensity;
  this.emissive.copy(e.emissive);
  this.emissiveMap = e.emissiveMap;
  this.emissiveIntensity = e.emissiveIntensity;
  this.specularMap = e.specularMap;
  this.alphaMap = e.alphaMap;
  this.envMap = e.envMap;
  this.combine = e.combine;
  this.reflectivity = e.reflectivity;
  this.refractionRatio = e.refractionRatio;
  this.wireframe = e.wireframe;
  this.wireframeLinewidth = e.wireframeLinewidth;
  this.wireframeLinecap = e.wireframeLinecap;
  this.wireframeLinejoin = e.wireframeLinejoin;
  this.skinning = e.skinning;
  this.morphTargets = e.morphTargets;
  this.morphNormals = e.morphNormals;
  return this;
};
co.prototype = Object.create(tt.prototype);
co.prototype.constructor = co;
co.prototype.isMeshMatcapMaterial = !0;
co.prototype.copy = function (e) {
  tt.prototype.copy.call(this, e);
  this.defines = {
    MATCAP: ""
  };
  this.color.copy(e.color);
  this.matcap = e.matcap;
  this.map = e.map;
  this.bumpMap = e.bumpMap;
  this.bumpScale = e.bumpScale;
  this.normalMap = e.normalMap;
  this.normalMapType = e.normalMapType;
  this.normalScale.copy(e.normalScale);
  this.displacementMap = e.displacementMap;
  this.displacementScale = e.displacementScale;
  this.displacementBias = e.displacementBias;
  this.alphaMap = e.alphaMap;
  this.skinning = e.skinning;
  this.morphTargets = e.morphTargets;
  this.morphNormals = e.morphNormals;
  return this;
};
uo.prototype = Object.create(Xi.prototype);
uo.prototype.constructor = uo;
uo.prototype.isLineDashedMaterial = !0;
uo.prototype.copy = function (e) {
  Xi.prototype.copy.call(this, e);
  this.scale = e.scale;
  this.dashSize = e.dashSize;
  this.gapSize = e.gapSize;
  return this;
};
var ho = Object.freeze({
  __proto__: null,
  ShadowMaterial: to,
  SpriteMaterial: xi,
  RawShaderMaterial: no,
  ShaderMaterial: Zt,
  PointsMaterial: ia,
  MeshPhysicalMaterial: io,
  MeshStandardMaterial: ro,
  MeshPhongMaterial: ao,
  MeshToonMaterial: oo,
  MeshNormalMaterial: so,
  MeshLambertMaterial: lo,
  MeshDepthMaterial: ti,
  MeshDistanceMaterial: ni,
  MeshBasicMaterial: nt,
  MeshMatcapMaterial: co,
  LineDashedMaterial: uo,
  LineBasicMaterial: Xi,
  Material: tt
});
var po = {
  arraySlice: function (e, t, n) {
    return po.isTypedArray(e) ? new e.constructor(e.subarray(t, void 0 !== n ? n : e.length)) : e.slice(t, n);
  },
  convertArray: function (e, t, n) {
    return !e || !n && e.constructor === t ? e : "number" === typeof t.BYTES_PER_ELEMENT ? new t(e) : Array.prototype.slice.call(e);
  },
  isTypedArray: function (e) {
    return ArrayBuffer.isView(e) && !(e instanceof DataView);
  },
  getKeyframeOrder: function (e) {
    for (var t = e.length, n = new Array(t), r = 0; r !== t; ++r) {
      n[r] = r;
    }
    n.sort(function (t, n) {
      return e[t] - e[n];
    });
    return n;
  },
  sortedArray: function (e, t, n) {
    for (var r = e.length, i = new e.constructor(r), a = 0, o = 0; o !== r; ++a) {
      for (var s = n[a] * t, l = 0; l !== t; ++l) {
        i[o++] = e[s + l];
      }
    }
    return i;
  },
  flattenJSON: function (e, t, n, r) {
    for (var i = 1, a = e[0]; void 0 !== a && void 0 === a[r];) {
      a = e[i++];
    }
    if (void 0 !== a) {
      var o = a[r];
      if (void 0 !== o) {
        if (Array.isArray(o)) {
          do {
            if (void 0 !== (o = a[r])) {
              t.push(a.time);
              n.push.apply(n, o);
            }
            a = e[i++];
          } while (void 0 !== a);
        } else if (void 0 !== o.toArray) {
          do {
            if (void 0 !== (o = a[r])) {
              t.push(a.time);
              o.toArray(n, n.length);
            }
            a = e[i++];
          } while (void 0 !== a);
        } else {
          do {
            if (void 0 !== (o = a[r])) {
              t.push(a.time);
              n.push(o);
            }
            a = e[i++];
          } while (void 0 !== a);
        }
      }
    }
  },
  subclip: function (e, t, n, r, i) {
    i = i || 30;
    var a = e.clone();
    a.name = t;
    for (var o = [], s = 0; s < a.tracks.length; ++s) {
      for (var l = a.tracks[s], c = l.getValueSize(), u = [], h = [], d = 0; d < l.times.length; ++d) {
        var p = l.times[d] * i;
        if (!(p < n || p >= r)) {
          u.push(l.times[d]);
          for (var f = 0; f < c; ++f) {
            h.push(l.values[d * c + f]);
          }
        }
      }
      if (0 !== u.length) {
        l.times = po.convertArray(u, l.times.constructor);
        l.values = po.convertArray(h, l.values.constructor);
        o.push(l);
      }
    }
    a.tracks = o;
    for (var m = 1 / 0, v = 0; v < a.tracks.length; ++v) {
      if (m > a.tracks[v].times[0]) {
        m = a.tracks[v].times[0];
      }
    }
    for (var g = 0; g < a.tracks.length; ++g) {
      a.tracks[g].shift(-1 * m);
    }
    a.resetDuration();
    return a;
  },
  makeClipAdditive: function (e, t, n, r) {
    if (void 0 === t) {
      t = 0;
    }
    if (void 0 === n) {
      n = e;
    }
    if (void 0 === r || r <= 0) {
      r = 30;
    }
    for (var i = n.tracks.length, a = t / r, o = function (t) {
        var r = n.tracks[t];
        var i = r.ValueTypeName;
        if ("bool" === i || "string" === i) {
          return "continue";
        }
        var o = e.tracks.find(function (e) {
          return e.name === r.name && e.ValueTypeName === i;
        });
        if (void 0 === o) {
          return "continue";
        }
        var s = 0;
        var l = r.getValueSize();
        if (r.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline) {
          s = l / 3;
        }
        var c = 0;
        var u = o.getValueSize();
        if (o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline) {
          c = u / 3;
        }
        var h = r.times.length - 1;
        var d = void 0;
        if (a <= r.times[0]) {
          var p = s;
          var f = l - s;
          d = po.arraySlice(r.values, p, f);
        } else if (a >= r.times[h]) {
          var m = h * l + s;
          var v = m + l - s;
          d = po.arraySlice(r.values, m, v);
        } else {
          var g = r.createInterpolant();
          var y = s;
          var x = l - s;
          g.evaluate(a);
          d = po.arraySlice(g.resultBuffer, y, x);
        }
        if ("quaternion" === i) {
          new P().fromArray(d).normalize().conjugate().toArray(d);
        }
        for (var b = o.times.length, _ = 0; _ < b; ++_) {
          var w = _ * u + c;
          if ("quaternion" === i) {
            P.multiplyQuaternionsFlat(o.values, w, d, 0, o.values, w);
          } else {
            for (var M = u - 2 * c, S = 0; S < M; ++S) {
              o.values[w + S] -= d[S];
            }
          }
        }
      }, s = 0; s < i; ++s) {
      o(s);
    }
    e.blendMode = 2501;
    return e;
  }
};
function fo(e, t, n, r) {
  this.parameterPositions = e;
  this._cachedIndex = 0;
  this.resultBuffer = void 0 !== r ? r : new t.constructor(n);
  this.sampleValues = t;
  this.valueSize = n;
}
function mo(e, t, n, r) {
  fo.call(this, e, t, n, r);
  this._weightPrev = -0;
  this._offsetPrev = -0;
  this._weightNext = -0;
  this._offsetNext = -0;
}
function vo(e, t, n, r) {
  fo.call(this, e, t, n, r);
}
function go(e, t, n, r) {
  fo.call(this, e, t, n, r);
}
function yo(e, t, n, r) {
  if (void 0 === e) {
    throw new Error("THREE.KeyframeTrack: track name is undefined");
  }
  if (void 0 === t || 0 === t.length) {
    throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
  }
  this.name = e;
  this.times = po.convertArray(t, this.TimeBufferType);
  this.values = po.convertArray(n, this.ValueBufferType);
  this.setInterpolation(r || this.DefaultInterpolation);
}
function xo(e, t, n) {
  yo.call(this, e, t, n);
}
function bo(e, t, n, r) {
  yo.call(this, e, t, n, r);
}
function _o(e, t, n, r) {
  yo.call(this, e, t, n, r);
}
function wo(e, t, n, r) {
  fo.call(this, e, t, n, r);
}
function Mo(e, t, n, r) {
  yo.call(this, e, t, n, r);
}
function So(e, t, n, r) {
  yo.call(this, e, t, n, r);
}
function To(e, t, n, r) {
  yo.call(this, e, t, n, r);
}
function Eo(e, t, n, r) {
  this.name = e;
  this.tracks = n;
  this.duration = void 0 !== t ? t : -1;
  this.blendMode = void 0 !== r ? r : 2500;
  this.uuid = _.generateUUID();
  if (this.duration < 0) {
    this.resetDuration();
  }
}
function Ao(e) {
  if (void 0 === e.type) {
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  }
  var t = function (e) {
    switch (e.toLowerCase()) {
      case "scalar":
      case "double":
      case "float":
      case "number":
      case "integer":
        return _o;
      case "vector":
      case "vector2":
      case "vector3":
      case "vector4":
        return To;
      case "color":
        return bo;
      case "quaternion":
        return Mo;
      case "bool":
      case "boolean":
        return xo;
      case "string":
        return So;
    }
    throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + e);
  }(e.type);
  if (void 0 === e.times) {
    var n = [];
    var r = [];
    po.flattenJSON(e.keys, n, r, "value");
    e.times = n;
    e.values = r;
  }
  return void 0 !== t.parse ? t.parse(e) : new t(e.name, e.times, e.values, e.interpolation);
}
Object.assign(fo.prototype, {
  evaluate: function (e) {
    var t = this.parameterPositions;
    var n = this._cachedIndex;
    var r = t[n];
    var i = t[n - 1];
    e: {
      t: {
        var a;
        n: {
          r: if (!(e < r)) {
            for (var o = n + 2;;) {
              if (void 0 === r) {
                if (e < i) {
                  break r;
                }
                n = t.length;
                this._cachedIndex = n;
                return this.afterEnd_(n - 1, e, i);
              }
              if (n === o) {
                break;
              }
              i = r;
              if (e < (r = t[++n])) {
                break t;
              }
            }
            a = t.length;
            break n;
          }
          if (e >= i) {
            break e;
          }
          var s = t[1];
          if (e < s) {
            n = 2;
            i = s;
          }
          for (var l = n - 2;;) {
            if (void 0 === i) {
              this._cachedIndex = 0;
              return this.beforeStart_(0, e, r);
            }
            if (n === l) {
              break;
            }
            r = i;
            if (e >= (i = t[--n - 1])) {
              break t;
            }
          }
          a = n;
          n = 0;
        }
        for (; n < a;) {
          var c = n + a >>> 1;
          if (e < t[c]) {
            a = c;
          } else {
            n = c + 1;
          }
        }
        r = t[n];
        if (void 0 === (i = t[n - 1])) {
          this._cachedIndex = 0;
          return this.beforeStart_(0, e, r);
        }
        if (void 0 === r) {
          n = t.length;
          this._cachedIndex = n;
          return this.afterEnd_(n - 1, i, e);
        }
      }
      this._cachedIndex = n;
      this.intervalChanged_(n, i, r);
    }
    return this.interpolate_(n, i, e, r);
  },
  settings: null,
  DefaultSettings_: {},
  getSettings_: function () {
    return this.settings || this.DefaultSettings_;
  },
  copySampleValue_: function (e) {
    for (var t = this.resultBuffer, n = this.sampleValues, r = this.valueSize, i = e * r, a = 0; a !== r; ++a) {
      t[a] = n[i + a];
    }
    return t;
  },
  interpolate_: function () {
    throw new Error("call to abstract method");
  },
  intervalChanged_: function () {}
});
Object.assign(fo.prototype, {
  beforeStart_: fo.prototype.copySampleValue_,
  afterEnd_: fo.prototype.copySampleValue_
});
mo.prototype = Object.assign(Object.create(fo.prototype), {
  constructor: mo,
  DefaultSettings_: {
    endingStart: 2400,
    endingEnd: 2400
  },
  intervalChanged_: function (e, t, n) {
    var r = this.parameterPositions;
    var i = e - 2;
    var a = e + 1;
    var o = r[i];
    var s = r[a];
    if (void 0 === o) {
      switch (this.getSettings_().endingStart) {
        case 2401:
          i = e;
          o = 2 * t - n;
          break;
        case 2402:
          o = t + r[i = r.length - 2] - r[i + 1];
          break;
        default:
          i = e;
          o = n;
      }
    }
    if (void 0 === s) {
      switch (this.getSettings_().endingEnd) {
        case 2401:
          a = e;
          s = 2 * n - t;
          break;
        case 2402:
          a = 1;
          s = n + r[1] - r[0];
          break;
        default:
          a = e - 1;
          s = t;
      }
    }
    var l = .5 * (n - t);
    var c = this.valueSize;
    this._weightPrev = l / (t - o);
    this._weightNext = l / (s - n);
    this._offsetPrev = i * c;
    this._offsetNext = a * c;
  },
  interpolate_: function (e, t, n, r) {
    for (var i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, l = s - o, c = this._offsetPrev, u = this._offsetNext, h = this._weightPrev, d = this._weightNext, p = (n - t) / (r - t), f = p * p, m = f * p, v = -h * m + 2 * h * f - h * p, g = (1 + h) * m + (-1.5 - 2 * h) * f + (-.5 + h) * p + 1, y = (-1 - d) * m + (1.5 + d) * f + .5 * p, x = d * m - d * f, b = 0; b !== o; ++b) {
      i[b] = v * a[c + b] + g * a[l + b] + y * a[s + b] + x * a[u + b];
    }
    return i;
  }
});
vo.prototype = Object.assign(Object.create(fo.prototype), {
  constructor: vo,
  interpolate_: function (e, t, n, r) {
    for (var i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, l = s - o, c = (n - t) / (r - t), u = 1 - c, h = 0; h !== o; ++h) {
      i[h] = a[l + h] * u + a[s + h] * c;
    }
    return i;
  }
});
go.prototype = Object.assign(Object.create(fo.prototype), {
  constructor: go,
  interpolate_: function (e) {
    return this.copySampleValue_(e - 1);
  }
});
Object.assign(yo, {
  toJSON: function (e) {
    var t;
    var n = e.constructor;
    if (void 0 !== n.toJSON) {
      t = n.toJSON(e);
    } else {
      t = {
        name: e.name,
        times: po.convertArray(e.times, Array),
        values: po.convertArray(e.values, Array)
      };
      var r = e.getInterpolation();
      if (r !== e.DefaultInterpolation) {
        t.interpolation = r;
      }
    }
    t.type = e.ValueTypeName;
    return t;
  }
});
Object.assign(yo.prototype, {
  constructor: yo,
  TimeBufferType: Float32Array,
  ValueBufferType: Float32Array,
  DefaultInterpolation: 2301,
  InterpolantFactoryMethodDiscrete: function (e) {
    return new go(this.times, this.values, this.getValueSize(), e);
  },
  InterpolantFactoryMethodLinear: function (e) {
    return new vo(this.times, this.values, this.getValueSize(), e);
  },
  InterpolantFactoryMethodSmooth: function (e) {
    return new mo(this.times, this.values, this.getValueSize(), e);
  },
  setInterpolation: function (e) {
    var t;
    switch (e) {
      case 2300:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case 2301:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case 2302:
        t = this.InterpolantFactoryMethodSmooth;
    }
    if (void 0 === t) {
      var n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (void 0 === this.createInterpolant) {
        if (e === this.DefaultInterpolation) {
          throw new Error(n);
        }
        this.setInterpolation(this.DefaultInterpolation);
      }
      console.warn("THREE.KeyframeTrack:", n);
      return this;
    }
    this.createInterpolant = t;
    return this;
  },
  getInterpolation: function () {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return 2300;
      case this.InterpolantFactoryMethodLinear:
        return 2301;
      case this.InterpolantFactoryMethodSmooth:
        return 2302;
    }
  },
  getValueSize: function () {
    return this.values.length / this.times.length;
  },
  shift: function (e) {
    if (0 !== e) {
      for (var t = this.times, n = 0, r = t.length; n !== r; ++n) {
        t[n] += e;
      }
    }
    return this;
  },
  scale: function (e) {
    if (1 !== e) {
      for (var t = this.times, n = 0, r = t.length; n !== r; ++n) {
        t[n] *= e;
      }
    }
    return this;
  },
  trim: function (e, t) {
    for (var n = this.times, r = n.length, i = 0, a = r - 1; i !== r && n[i] < e;) {
      ++i;
    }
    for (; -1 !== a && n[a] > t;) {
      --a;
    }
    ++a;
    if (0 !== i || a !== r) {
      if (i >= a) {
        i = (a = Math.max(a, 1)) - 1;
      }
      var o = this.getValueSize();
      this.times = po.arraySlice(n, i, a);
      this.values = po.arraySlice(this.values, i * o, a * o);
    }
    return this;
  },
  validate: function () {
    var e = !0;
    var t = this.getValueSize();
    if (t - Math.floor(t) !== 0) {
      console.error("THREE.KeyframeTrack: Invalid value size in track.", this);
      e = !1;
    }
    var n = this.times;
    var r = this.values;
    var i = n.length;
    if (0 === i) {
      console.error("THREE.KeyframeTrack: Track is empty.", this);
      e = !1;
    }
    for (var a = null, o = 0; o !== i; o++) {
      var s = n[o];
      if ("number" === typeof s && isNaN(s)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, s);
        e = !1;
        break;
      }
      if (null !== a && a > s) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, o, s, a);
        e = !1;
        break;
      }
      a = s;
    }
    if (void 0 !== r && po.isTypedArray(r)) {
      for (var l = 0, c = r.length; l !== c; ++l) {
        var u = r[l];
        if (isNaN(u)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, l, u);
          e = !1;
          break;
        }
      }
    }
    return e;
  },
  optimize: function () {
    for (var e = po.arraySlice(this.times), t = po.arraySlice(this.values), n = this.getValueSize(), r = 2302 === this.getInterpolation(), i = e.length - 1, a = 1, o = 1; o < i; ++o) {
      var s = !1;
      var l = e[o];
      if (l !== e[o + 1] && (1 !== o || l !== l[0])) {
        if (r) {
          s = !0;
        } else {
          for (var c = o * n, u = c - n, h = c + n, d = 0; d !== n; ++d) {
            var p = t[c + d];
            if (p !== t[u + d] || p !== t[h + d]) {
              s = !0;
              break;
            }
          }
        }
      }
      if (s) {
        if (o !== a) {
          e[a] = e[o];
          for (var f = o * n, m = a * n, v = 0; v !== n; ++v) {
            t[m + v] = t[f + v];
          }
        }
        ++a;
      }
    }
    if (i > 0) {
      e[a] = e[i];
      for (var g = i * n, y = a * n, x = 0; x !== n; ++x) {
        t[y + x] = t[g + x];
      }
      ++a;
    }
    if (a !== e.length) {
      this.times = po.arraySlice(e, 0, a);
      this.values = po.arraySlice(t, 0, a * n);
    } else {
      this.times = e;
      this.values = t;
    }
    return this;
  },
  clone: function () {
    var e = po.arraySlice(this.times, 0);
    var t = po.arraySlice(this.values, 0);
    var n = new (0, this.constructor)(this.name, e, t);
    n.createInterpolant = this.createInterpolant;
    return n;
  }
});
xo.prototype = Object.assign(Object.create(yo.prototype), {
  constructor: xo,
  ValueTypeName: "bool",
  ValueBufferType: Array,
  DefaultInterpolation: 2300,
  InterpolantFactoryMethodLinear: void 0,
  InterpolantFactoryMethodSmooth: void 0
});
bo.prototype = Object.assign(Object.create(yo.prototype), {
  constructor: bo,
  ValueTypeName: "color"
});
_o.prototype = Object.assign(Object.create(yo.prototype), {
  constructor: _o,
  ValueTypeName: "number"
});
wo.prototype = Object.assign(Object.create(fo.prototype), {
  constructor: wo,
  interpolate_: function (e, t, n, r) {
    for (var i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = (n - t) / (r - t), l = e * o, c = l + o; l !== c; l += 4) {
      P.slerpFlat(i, 0, a, l - o, a, l, s);
    }
    return i;
  }
});
Mo.prototype = Object.assign(Object.create(yo.prototype), {
  constructor: Mo,
  ValueTypeName: "quaternion",
  DefaultInterpolation: 2301,
  InterpolantFactoryMethodLinear: function (e) {
    return new wo(this.times, this.values, this.getValueSize(), e);
  },
  InterpolantFactoryMethodSmooth: void 0
});
So.prototype = Object.assign(Object.create(yo.prototype), {
  constructor: So,
  ValueTypeName: "string",
  ValueBufferType: Array,
  DefaultInterpolation: 2300,
  InterpolantFactoryMethodLinear: void 0,
  InterpolantFactoryMethodSmooth: void 0
});
To.prototype = Object.assign(Object.create(yo.prototype), {
  constructor: To,
  ValueTypeName: "vector"
});
Object.assign(Eo, {
  parse: function (e) {
    for (var t = [], n = e.tracks, r = 1 / (e.fps || 1), i = 0, a = n.length; i !== a; ++i) {
      t.push(Ao(n[i]).scale(r));
    }
    return new Eo(e.name, e.duration, t, e.blendMode);
  },
  toJSON: function (e) {
    for (var t = [], n = e.tracks, r = {
        name: e.name,
        duration: e.duration,
        tracks: t,
        uuid: e.uuid,
        blendMode: e.blendMode
      }, i = 0, a = n.length; i !== a; ++i) {
      t.push(yo.toJSON(n[i]));
    }
    return r;
  },
  CreateFromMorphTargetSequence: function (e, t, n, r) {
    for (var i = t.length, a = [], o = 0; o < i; o++) {
      var s = [];
      var l = [];
      s.push((o + i - 1) % i, o, (o + 1) % i);
      l.push(0, 1, 0);
      var c = po.getKeyframeOrder(s);
      s = po.sortedArray(s, 1, c);
      l = po.sortedArray(l, 1, c);
      if (!(r || 0 !== s[0])) {
        s.push(i);
        l.push(l[0]);
      }
      a.push(new _o(".morphTargetInfluences[" + t[o].name + "]", s, l).scale(1 / n));
    }
    return new Eo(e, -1, a);
  },
  findByName: function (e, t) {
    var n = e;
    if (!Array.isArray(e)) {
      var r = e;
      n = r.geometry && r.geometry.animations || r.animations;
    }
    for (var i = 0; i < n.length; i++) {
      if (n[i].name === t) {
        return n[i];
      }
    }
    return null;
  },
  CreateClipsFromMorphTargetSequences: function (e, t, n) {
    for (var r = {}, i = /^([\w-]*?)([\d]+)$/, a = 0, o = e.length; a < o; a++) {
      var s = e[a];
      var l = s.name.match(i);
      if (l && l.length > 1) {
        var c = l[1];
        var u = r[c];
        if (!u) {
          r[c] = u = [];
        }
        u.push(s);
      }
    }
    var h = [];
    for (var d in r) h.push(Eo.CreateFromMorphTargetSequence(d, r[d], t, n));
    return h;
  },
  parseAnimation: function (e, t) {
    if (!e) {
      console.error("THREE.AnimationClip: No animation in JSONLoader data.");
      return null;
    }
    for (var n = function (e, t, n, r, i) {
        if (0 !== n.length) {
          var a = [];
          var o = [];
          po.flattenJSON(n, a, o, r);
          if (0 !== a.length) {
            i.push(new e(t, a, o));
          }
        }
      }, r = [], i = e.name || "default", a = e.fps || 30, o = e.blendMode, s = e.length || -1, l = e.hierarchy || [], c = 0; c < l.length; c++) {
      var u = l[c].keys;
      if (u && 0 !== u.length) {
        if (u[0].morphTargets) {
          var h = {};
          var d = void 0;
          for (d = 0; d < u.length; d++) {
            if (u[d].morphTargets) {
              for (var p = 0; p < u[d].morphTargets.length; p++) {
                h[u[d].morphTargets[p]] = -1;
              }
            }
          }
          for (var f in h) {
            for (var m = [], v = [], g = 0; g !== u[d].morphTargets.length; ++g) {
              var y = u[d];
              m.push(y.time);
              v.push(y.morphTarget === f ? 1 : 0);
            }
            r.push(new _o(".morphTargetInfluence[" + f + "]", m, v));
          }
          s = h.length * (a || 1);
        } else {
          var x = ".bones[" + t[c].name + "]";
          n(To, x + ".position", u, "pos", r);
          n(Mo, x + ".quaternion", u, "rot", r);
          n(To, x + ".scale", u, "scl", r);
        }
      }
    }
    return 0 === r.length ? null : new Eo(i, s, r, o);
  }
});
Object.assign(Eo.prototype, {
  resetDuration: function () {
    for (var e = 0, t = 0, n = this.tracks.length; t !== n; ++t) {
      var r = this.tracks[t];
      e = Math.max(e, r.times[r.times.length - 1]);
    }
    this.duration = e;
    return this;
  },
  trim: function () {
    for (var e = 0; e < this.tracks.length; e++) {
      this.tracks[e].trim(0, this.duration);
    }
    return this;
  },
  validate: function () {
    for (var e = !0, t = 0; t < this.tracks.length; t++) {
      e = e && this.tracks[t].validate();
    }
    return e;
  },
  optimize: function () {
    for (var e = 0; e < this.tracks.length; e++) {
      this.tracks[e].optimize();
    }
    return this;
  },
  clone: function () {
    for (var e = [], t = 0; t < this.tracks.length; t++) {
      e.push(this.tracks[t].clone());
    }
    return new Eo(this.name, this.duration, e, this.blendMode);
  }
});
var Lo = {
  enabled: !1,
  files: {},
  add: function (e, t) {
    if (!1 !== this.enabled) {
      this.files[e] = t;
    }
  },
  get: function (e) {
    if (!1 !== this.enabled) {
      return this.files[e];
    }
  },
  remove: function (e) {
    delete this.files[e];
  },
  clear: function () {
    this.files = {};
  }
};
function Ro(e, t, n) {
  var r = this;
  var i = !1;
  var a = 0;
  var o = 0;
  var s = void 0;
  var l = [];
  this.onStart = void 0;
  this.onLoad = e;
  this.onProgress = t;
  this.onError = n;
  this.itemStart = function (e) {
    o++;
    if (!1 === i && void 0 !== r.onStart) {
      r.onStart(e, a, o);
    }
    i = !0;
  };
  this.itemEnd = function (e) {
    a++;
    if (void 0 !== r.onProgress) {
      r.onProgress(e, a, o);
    }
    if (a === o) {
      i = !1;
      if (void 0 !== r.onLoad) {
        r.onLoad();
      }
    }
  };
  this.itemError = function (e) {
    if (void 0 !== r.onError) {
      r.onError(e);
    }
  };
  this.resolveURL = function (e) {
    return s ? s(e) : e;
  };
  this.setURLModifier = function (e) {
    s = e;
    return this;
  };
  this.addHandler = function (e, t) {
    l.push(e, t);
    return this;
  };
  this.removeHandler = function (e) {
    var t = l.indexOf(e);
    if (-1 !== t) {
      l.splice(t, 2);
    }
    return this;
  };
  this.getHandler = function (e) {
    for (var t = 0, n = l.length; t < n; t += 2) {
      var r = l[t];
      var i = l[t + 1];
      if (r.global) {
        r.lastIndex = 0;
      }
      if (r.test(e)) {
        return i;
      }
    }
    return null;
  };
}
var Po = new Ro();
function Co(e) {
  this.manager = void 0 !== e ? e : Po;
  this.crossOrigin = "anonymous";
  this.withCredentials = !1;
  this.path = "";
  this.resourcePath = "";
  this.requestHeader = {};
}
Object.assign(Co.prototype, {
  load: function () {},
  loadAsync: function (e, t) {
    var n = this;
    return new Promise(function (r, i) {
      n.load(e, r, t, i);
    });
  },
  parse: function () {},
  setCrossOrigin: function (e) {
    this.crossOrigin = e;
    return this;
  },
  setWithCredentials: function (e) {
    this.withCredentials = e;
    return this;
  },
  setPath: function (e) {
    this.path = e;
    return this;
  },
  setResourcePath: function (e) {
    this.resourcePath = e;
    return this;
  },
  setRequestHeader: function (e) {
    this.requestHeader = e;
    return this;
  }
});
var Io = {};
function Oo(e) {
  Co.call(this, e);
}
function ko(e) {
  Co.call(this, e);
}
function No(e) {
  Co.call(this, e);
}
function Do(e) {
  Co.call(this, e);
}
function Uo(e) {
  Co.call(this, e);
}
function Bo(e) {
  Co.call(this, e);
}
function zo(e) {
  Co.call(this, e);
}
function Fo() {
  this.type = "Curve";
  this.arcLengthDivisions = 200;
}
function Ho(e, t, n, r, i, a, o, s) {
  Fo.call(this);
  this.type = "EllipseCurve";
  this.aX = e || 0;
  this.aY = t || 0;
  this.xRadius = n || 1;
  this.yRadius = r || 1;
  this.aStartAngle = i || 0;
  this.aEndAngle = a || 2 * Math.PI;
  this.aClockwise = o || !1;
  this.aRotation = s || 0;
}
function Go(e, t, n, r, i, a) {
  Ho.call(this, e, t, n, n, r, i, a);
  this.type = "ArcCurve";
}
function jo() {
  var e = 0;
  var t = 0;
  var n = 0;
  var r = 0;
  function i(i, a, o, s) {
    e = i;
    t = o;
    n = -3 * i + 3 * a - 2 * o - s;
    r = 2 * i - 2 * a + o + s;
  }
  return {
    initCatmullRom: function (e, t, n, r, a) {
      i(t, n, a * (n - e), a * (r - t));
    },
    initNonuniformCatmullRom: function (e, t, n, r, a, o, s) {
      var l = (t - e) / a - (n - e) / (a + o) + (n - t) / o;
      var c = (n - t) / o - (r - t) / (o + s) + (r - n) / s;
      i(t, n, l *= o, c *= o);
    },
    calc: function (i) {
      var a = i * i;
      return e + t * i + n * a + r * (a * i);
    }
  };
}
Oo.prototype = Object.assign(Object.create(Co.prototype), {
  constructor: Oo,
  load: function (e, t, n, r) {
    if (void 0 === e) {
      e = "";
    }
    if (void 0 !== this.path) {
      e = this.path + e;
    }
    e = this.manager.resolveURL(e);
    var i = this;
    var a = Lo.get(e);
    if (void 0 !== a) {
      i.manager.itemStart(e);
      setTimeout(function () {
        if (t) {
          t(a);
        }
        i.manager.itemEnd(e);
      }, 0);
      return a;
    }
    if (void 0 === Io[e]) {
      var o;
      var s = e.match(/^data:(.*?)(;base64)?,(.*)$/);
      if (s) {
        var l = s[1];
        var c = !!s[2];
        var u = s[3];
        u = decodeURIComponent(u);
        if (c) {
          u = atob(u);
        }
        try {
          var h;
          var d = (this.responseType || "").toLowerCase();
          switch (d) {
            case "arraybuffer":
            case "blob":
              for (var p = new Uint8Array(u.length), f = 0; f < u.length; f++) {
                p[f] = u.charCodeAt(f);
              }
              h = "blob" === d ? new Blob([p.buffer], {
                type: l
              }) : p.buffer;
              break;
            case "document":
              var m = new DOMParser();
              h = m.parseFromString(u, l);
              break;
            case "json":
              h = JSON.parse(u);
              break;
            default:
              h = u;
          }
          setTimeout(function () {
            if (t) {
              t(h);
            }
            i.manager.itemEnd(e);
          }, 0);
        } catch (g) {
          setTimeout(function () {
            if (r) {
              r(g);
            }
            i.manager.itemError(e);
            i.manager.itemEnd(e);
          }, 0);
        }
      } else {
        for (var v in Io[e] = [], Io[e].push({
          onLoad: t,
          onProgress: n,
          onError: r
        }), (o = new XMLHttpRequest()).open("GET", e, !0), o.addEventListener("load", function (t) {
          var n = this.response;
          var r = Io[e];
          delete Io[e];
          if (200 === this.status || 0 === this.status) {
            if (0 === this.status) {
              console.warn("THREE.FileLoader: HTTP Status 0 received.");
            }
            Lo.add(e, n);
            for (var a = 0, o = r.length; a < o; a++) {
              var s = r[a];
              if (s.onLoad) {
                s.onLoad(n);
              }
            }
            i.manager.itemEnd(e);
          } else {
            for (var l = 0, c = r.length; l < c; l++) {
              var u = r[l];
              if (u.onError) {
                u.onError(t);
              }
            }
            i.manager.itemError(e);
            i.manager.itemEnd(e);
          }
        }, !1), o.addEventListener("progress", function (t) {
          for (var n = Io[e], r = 0, i = n.length; r < i; r++) {
            var a = n[r];
            if (a.onProgress) {
              a.onProgress(t);
            }
          }
        }, !1), o.addEventListener("error", function (t) {
          var n = Io[e];
          delete Io[e];
          for (var r = 0, a = n.length; r < a; r++) {
            var o = n[r];
            if (o.onError) {
              o.onError(t);
            }
          }
          i.manager.itemError(e);
          i.manager.itemEnd(e);
        }, !1), o.addEventListener("abort", function (t) {
          var n = Io[e];
          delete Io[e];
          for (var r = 0, a = n.length; r < a; r++) {
            var o = n[r];
            if (o.onError) {
              o.onError(t);
            }
          }
          i.manager.itemError(e);
          i.manager.itemEnd(e);
        }, !1), void 0 !== this.responseType && (o.responseType = this.responseType), void 0 !== this.withCredentials && (o.withCredentials = this.withCredentials), o.overrideMimeType && o.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain"), this.requestHeader) o.setRequestHeader(v, this.requestHeader[v]);
        o.send(null);
      }
      i.manager.itemStart(e);
      return o;
    }
    Io[e].push({
      onLoad: t,
      onProgress: n,
      onError: r
    });
  },
  setResponseType: function (e) {
    this.responseType = e;
    return this;
  },
  setMimeType: function (e) {
    this.mimeType = e;
    return this;
  }
});
ko.prototype = Object.assign(Object.create(Co.prototype), {
  constructor: ko,
  load: function (e, t, n, r) {
    var i = this;
    var a = new Oo(i.manager);
    a.setPath(i.path);
    a.setRequestHeader(i.requestHeader);
    a.setWithCredentials(i.withCredentials);
    a.load(e, function (n) {
      try {
        t(i.parse(JSON.parse(n)));
      } catch (a) {
        if (r) {
          r(a);
        } else {
          console.error(a);
        }
        i.manager.itemError(e);
      }
    }, n, r);
  },
  parse: function (e) {
    for (var t = [], n = 0; n < e.length; n++) {
      var r = Eo.parse(e[n]);
      t.push(r);
    }
    return t;
  }
});
No.prototype = Object.assign(Object.create(Co.prototype), {
  constructor: No,
  load: function (e, t, n, r) {
    var i = this;
    var a = [];
    var o = new da();
    o.image = a;
    var s = new Oo(this.manager);
    s.setPath(this.path);
    s.setResponseType("arraybuffer");
    s.setRequestHeader(this.requestHeader);
    s.setWithCredentials(i.withCredentials);
    var l = 0;
    function c(c) {
      s.load(e[c], function (e) {
        var n = i.parse(e, !0);
        a[c] = {
          width: n.width,
          height: n.height,
          format: n.format,
          mipmaps: n.mipmaps
        };
        if (6 === (l += 1)) {
          if (1 === n.mipmapCount) {
            o.minFilter = 1006;
          }
          o.format = n.format;
          o.needsUpdate = !0;
          if (t) {
            t(o);
          }
        }
      }, n, r);
    }
    if (Array.isArray(e)) {
      for (var u = 0, h = e.length; u < h; ++u) {
        c(u);
      }
    } else {
      s.load(e, function (e) {
        var n = i.parse(e, !0);
        if (n.isCubemap) {
          for (var r = n.mipmaps.length / n.mipmapCount, s = 0; s < r; s++) {
            a[s] = {
              mipmaps: []
            };
            for (var l = 0; l < n.mipmapCount; l++) {
              a[s].mipmaps.push(n.mipmaps[s * n.mipmapCount + l]);
              a[s].format = n.format;
              a[s].width = n.width;
              a[s].height = n.height;
            }
          }
        } else {
          o.image.width = n.width;
          o.image.height = n.height;
          o.mipmaps = n.mipmaps;
        }
        if (1 === n.mipmapCount) {
          o.minFilter = 1006;
        }
        o.format = n.format;
        o.needsUpdate = !0;
        if (t) {
          t(o);
        }
      }, n, r);
    }
    return o;
  }
});
Do.prototype = Object.assign(Object.create(Co.prototype), {
  constructor: Do,
  load: function (e, t, n, r) {
    if (void 0 !== this.path) {
      e = this.path + e;
    }
    e = this.manager.resolveURL(e);
    var i = this;
    var a = Lo.get(e);
    if (void 0 !== a) {
      i.manager.itemStart(e);
      setTimeout(function () {
        if (t) {
          t(a);
        }
        i.manager.itemEnd(e);
      }, 0);
      return a;
    }
    var o = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
    function s() {
      o.removeEventListener("load", s, !1);
      o.removeEventListener("error", l, !1);
      Lo.add(e, this);
      if (t) {
        t(this);
      }
      i.manager.itemEnd(e);
    }
    function l(t) {
      o.removeEventListener("load", s, !1);
      o.removeEventListener("error", l, !1);
      if (r) {
        r(t);
      }
      i.manager.itemError(e);
      i.manager.itemEnd(e);
    }
    o.addEventListener("load", s, !1);
    o.addEventListener("error", l, !1);
    if ("data:" !== e.substr(0, 5) && void 0 !== this.crossOrigin) {
      o.crossOrigin = this.crossOrigin;
    }
    i.manager.itemStart(e);
    o.src = e;
    return o;
  }
});
Uo.prototype = Object.assign(Object.create(Co.prototype), {
  constructor: Uo,
  load: function (e, t, n, r) {
    var i = new $t();
    var a = new Do(this.manager);
    a.setCrossOrigin(this.crossOrigin);
    a.setPath(this.path);
    var o = 0;
    function s(n) {
      a.load(e[n], function (e) {
        i.images[n] = e;
        if (6 === ++o) {
          i.needsUpdate = !0;
          if (t) {
            t(i);
          }
        }
      }, void 0, r);
    }
    for (var l = 0; l < e.length; ++l) {
      s(l);
    }
    return i;
  }
});
Bo.prototype = Object.assign(Object.create(Co.prototype), {
  constructor: Bo,
  load: function (e, t, n, r) {
    var i = this;
    var a = new tn();
    var o = new Oo(this.manager);
    o.setResponseType("arraybuffer");
    o.setRequestHeader(this.requestHeader);
    o.setPath(this.path);
    o.setWithCredentials(i.withCredentials);
    o.load(e, function (e) {
      var n = i.parse(e);
      if (n) {
        if (void 0 !== n.image) {
          a.image = n.image;
        } else {
          if (void 0 !== n.data) {
            a.image.width = n.width;
            a.image.height = n.height;
            a.image.data = n.data;
          }
        }
        a.wrapS = void 0 !== n.wrapS ? n.wrapS : f;
        a.wrapT = void 0 !== n.wrapT ? n.wrapT : f;
        a.magFilter = void 0 !== n.magFilter ? n.magFilter : 1006;
        a.minFilter = void 0 !== n.minFilter ? n.minFilter : 1006;
        a.anisotropy = void 0 !== n.anisotropy ? n.anisotropy : 1;
        if (void 0 !== n.format) {
          a.format = n.format;
        }
        if (void 0 !== n.type) {
          a.type = n.type;
        }
        if (void 0 !== n.mipmaps) {
          a.mipmaps = n.mipmaps;
          a.minFilter = 1008;
        }
        if (1 === n.mipmapCount) {
          a.minFilter = 1006;
        }
        a.needsUpdate = !0;
        if (t) {
          t(a, n);
        }
      }
    }, n, r);
    return a;
  }
});
zo.prototype = Object.assign(Object.create(Co.prototype), {
  constructor: zo,
  load: function (e, t, n, r) {
    var i = new E();
    var a = new Do(this.manager);
    a.setCrossOrigin(this.crossOrigin);
    a.setPath(this.path);
    a.load(e, function (n) {
      i.image = n;
      var r = e.search(/\.jpe?g($|\?)/i) > 0 || 0 === e.search(/^data\:image\/jpeg/);
      i.format = r ? 1022 : 1023;
      i.needsUpdate = !0;
      if (void 0 !== t) {
        t(i);
      }
    }, n, r);
    return i;
  }
});
Object.assign(Fo.prototype, {
  getPoint: function () {
    console.warn("THREE.Curve: .getPoint() not implemented.");
    return null;
  },
  getPointAt: function (e, t) {
    var n = this.getUtoTmapping(e);
    return this.getPoint(n, t);
  },
  getPoints: function (e) {
    if (void 0 === e) {
      e = 5;
    }
    for (var t = [], n = 0; n <= e; n++) {
      t.push(this.getPoint(n / e));
    }
    return t;
  },
  getSpacedPoints: function (e) {
    if (void 0 === e) {
      e = 5;
    }
    for (var t = [], n = 0; n <= e; n++) {
      t.push(this.getPointAt(n / e));
    }
    return t;
  },
  getLength: function () {
    var e = this.getLengths();
    return e[e.length - 1];
  },
  getLengths: function (e) {
    if (void 0 === e) {
      e = this.arcLengthDivisions;
    }
    if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate) {
      return this.cacheArcLengths;
    }
    this.needsUpdate = !1;
    var t;
    var n = [];
    var r = this.getPoint(0);
    var i = 0;
    n.push(0);
    for (var a = 1; a <= e; a++) {
      i += (t = this.getPoint(a / e)).distanceTo(r);
      n.push(i);
      r = t;
    }
    this.cacheArcLengths = n;
    return n;
  },
  updateArcLengths: function () {
    this.needsUpdate = !0;
    this.getLengths();
  },
  getUtoTmapping: function (e, t) {
    var n;
    var r = this.getLengths();
    var i = 0;
    var a = r.length;
    n = t || e * r[a - 1];
    for (var o, s = 0, l = a - 1; s <= l;) {
      if ((o = r[i = Math.floor(s + (l - s) / 2)] - n) < 0) {
        s = i + 1;
      } else {
        if (!(o > 0)) {
          l = i;
          break;
        }
        l = i - 1;
      }
    }
    if (r[i = l] === n) {
      return i / (a - 1);
    }
    var c = r[i];
    return (i + (n - c) / (r[i + 1] - c)) / (a - 1);
  },
  getTangent: function (e, t) {
    var n = e - 1e-4;
    var r = e + 1e-4;
    if (n < 0) {
      n = 0;
    }
    if (r > 1) {
      r = 1;
    }
    var i = this.getPoint(n);
    var a = this.getPoint(r);
    var o = t || (i.isVector2 ? new w() : new C());
    o.copy(a).sub(i).normalize();
    return o;
  },
  getTangentAt: function (e, t) {
    var n = this.getUtoTmapping(e);
    return this.getTangent(n, t);
  },
  computeFrenetFrames: function (e, t) {
    for (var n = new C(), r = [], i = [], a = [], o = new C(), s = new ae(), l = 0; l <= e; l++) {
      var c = l / e;
      r[l] = this.getTangentAt(c, new C());
      r[l].normalize();
    }
    i[0] = new C();
    a[0] = new C();
    var u = Number.MAX_VALUE;
    var h = Math.abs(r[0].x);
    var d = Math.abs(r[0].y);
    var p = Math.abs(r[0].z);
    if (h <= u) {
      u = h;
      n.set(1, 0, 0);
    }
    if (d <= u) {
      u = d;
      n.set(0, 1, 0);
    }
    if (p <= u) {
      n.set(0, 0, 1);
    }
    o.crossVectors(r[0], n).normalize();
    i[0].crossVectors(r[0], o);
    a[0].crossVectors(r[0], i[0]);
    for (var f = 1; f <= e; f++) {
      i[f] = i[f - 1].clone();
      a[f] = a[f - 1].clone();
      o.crossVectors(r[f - 1], r[f]);
      if (o.length() > Number.EPSILON) {
        o.normalize();
        var m = Math.acos(_.clamp(r[f - 1].dot(r[f]), -1, 1));
        i[f].applyMatrix4(s.makeRotationAxis(o, m));
      }
      a[f].crossVectors(r[f], i[f]);
    }
    if (!0 === t) {
      var v = Math.acos(_.clamp(i[0].dot(i[e]), -1, 1));
      v /= e;
      if (r[0].dot(o.crossVectors(i[0], i[e])) > 0) {
        v = -v;
      }
      for (var g = 1; g <= e; g++) {
        i[g].applyMatrix4(s.makeRotationAxis(r[g], v * g));
        a[g].crossVectors(r[g], i[g]);
      }
    }
    return {
      tangents: r,
      normals: i,
      binormals: a
    };
  },
  clone: function () {
    return new this.constructor().copy(this);
  },
  copy: function (e) {
    this.arcLengthDivisions = e.arcLengthDivisions;
    return this;
  },
  toJSON: function () {
    var e = {
      metadata: {
        version: 4.5,
        type: "Curve",
        generator: "Curve.toJSON"
      }
    };
    e.arcLengthDivisions = this.arcLengthDivisions;
    e.type = this.type;
    return e;
  },
  fromJSON: function (e) {
    this.arcLengthDivisions = e.arcLengthDivisions;
    return this;
  }
});
Ho.prototype = Object.create(Fo.prototype);
Ho.prototype.constructor = Ho;
Ho.prototype.isEllipseCurve = !0;
Ho.prototype.getPoint = function (e, t) {
  for (var n = t || new w(), r = 2 * Math.PI, i = this.aEndAngle - this.aStartAngle, a = Math.abs(i) < Number.EPSILON; i < 0;) {
    i += r;
  }
  for (; i > r;) {
    i -= r;
  }
  if (i < Number.EPSILON) {
    i = a ? 0 : r;
  }
  if (!(!0 !== this.aClockwise || a)) {
    if (i === r) {
      i = -r;
    } else {
      i -= r;
    }
  }
  var o = this.aStartAngle + e * i;
  var s = this.aX + this.xRadius * Math.cos(o);
  var l = this.aY + this.yRadius * Math.sin(o);
  if (0 !== this.aRotation) {
    var c = Math.cos(this.aRotation);
    var u = Math.sin(this.aRotation);
    var h = s - this.aX;
    var d = l - this.aY;
    s = h * c - d * u + this.aX;
    l = h * u + d * c + this.aY;
  }
  return n.set(s, l);
};
Ho.prototype.copy = function (e) {
  Fo.prototype.copy.call(this, e);
  this.aX = e.aX;
  this.aY = e.aY;
  this.xRadius = e.xRadius;
  this.yRadius = e.yRadius;
  this.aStartAngle = e.aStartAngle;
  this.aEndAngle = e.aEndAngle;
  this.aClockwise = e.aClockwise;
  this.aRotation = e.aRotation;
  return this;
};
Ho.prototype.toJSON = function () {
  var e = Fo.prototype.toJSON.call(this);
  e.aX = this.aX;
  e.aY = this.aY;
  e.xRadius = this.xRadius;
  e.yRadius = this.yRadius;
  e.aStartAngle = this.aStartAngle;
  e.aEndAngle = this.aEndAngle;
  e.aClockwise = this.aClockwise;
  e.aRotation = this.aRotation;
  return e;
};
Ho.prototype.fromJSON = function (e) {
  Fo.prototype.fromJSON.call(this, e);
  this.aX = e.aX;
  this.aY = e.aY;
  this.xRadius = e.xRadius;
  this.yRadius = e.yRadius;
  this.aStartAngle = e.aStartAngle;
  this.aEndAngle = e.aEndAngle;
  this.aClockwise = e.aClockwise;
  this.aRotation = e.aRotation;
  return this;
};
Go.prototype = Object.create(Ho.prototype);
Go.prototype.constructor = Go;
Go.prototype.isArcCurve = !0;
var Vo = new C();
var Wo = new jo();
var qo = new jo();
var Xo = new jo();
function Yo(e, t, n, r) {
  Fo.call(this);
  this.type = "CatmullRomCurve3";
  this.points = e || [];
  this.closed = t || !1;
  this.curveType = n || "centripetal";
  this.tension = void 0 !== r ? r : .5;
}
function Zo(e, t, n, r, i) {
  var a = .5 * (r - t);
  var o = .5 * (i - n);
  var s = e * e;
  return (2 * n - 2 * r + a + o) * (e * s) + (-3 * n + 3 * r - 2 * a - o) * s + a * e + n;
}
function Jo(e, t, n, r) {
  return function (e, t) {
    var n = 1 - e;
    return n * n * t;
  }(e, t) + function (e, t) {
    return 2 * (1 - e) * e * t;
  }(e, n) + function (e, t) {
    return e * e * t;
  }(e, r);
}
function Ko(e, t, n, r, i) {
  return function (e, t) {
    var n = 1 - e;
    return n * n * n * t;
  }(e, t) + function (e, t) {
    var n = 1 - e;
    return 3 * n * n * e * t;
  }(e, n) + function (e, t) {
    return 3 * (1 - e) * e * e * t;
  }(e, r) + function (e, t) {
    return e * e * e * t;
  }(e, i);
}
function Qo(e, t, n, r) {
  Fo.call(this);
  this.type = "CubicBezierCurve";
  this.v0 = e || new w();
  this.v1 = t || new w();
  this.v2 = n || new w();
  this.v3 = r || new w();
}
function $o(e, t, n, r) {
  Fo.call(this);
  this.type = "CubicBezierCurve3";
  this.v0 = e || new C();
  this.v1 = t || new C();
  this.v2 = n || new C();
  this.v3 = r || new C();
}
function es(e, t) {
  Fo.call(this);
  this.type = "LineCurve";
  this.v1 = e || new w();
  this.v2 = t || new w();
}
function ts(e, t) {
  Fo.call(this);
  this.type = "LineCurve3";
  this.v1 = e || new C();
  this.v2 = t || new C();
}
function ns(e, t, n) {
  Fo.call(this);
  this.type = "QuadraticBezierCurve";
  this.v0 = e || new w();
  this.v1 = t || new w();
  this.v2 = n || new w();
}
function rs(e, t, n) {
  Fo.call(this);
  this.type = "QuadraticBezierCurve3";
  this.v0 = e || new C();
  this.v1 = t || new C();
  this.v2 = n || new C();
}
function is(e) {
  Fo.call(this);
  this.type = "SplineCurve";
  this.points = e || [];
}
Yo.prototype = Object.create(Fo.prototype);
Yo.prototype.constructor = Yo;
Yo.prototype.isCatmullRomCurve3 = !0;
Yo.prototype.getPoint = function (e, t) {
  var n;
  var r;
  var i = t || new C();
  var a = this.points;
  var o = a.length;
  var s = (o - (this.closed ? 0 : 1)) * e;
  var l = Math.floor(s);
  var c = s - l;
  if (this.closed) {
    l += l > 0 ? 0 : (Math.floor(Math.abs(l) / o) + 1) * o;
  } else {
    if (0 === c && l === o - 1) {
      l = o - 2;
      c = 1;
    }
  }
  if (this.closed || l > 0) {
    n = a[(l - 1) % o];
  } else {
    Vo.subVectors(a[0], a[1]).add(a[0]);
    n = Vo;
  }
  var u = a[l % o];
  var h = a[(l + 1) % o];
  if (this.closed || l + 2 < o) {
    r = a[(l + 2) % o];
  } else {
    Vo.subVectors(a[o - 1], a[o - 2]).add(a[o - 1]);
    r = Vo;
  }
  if ("centripetal" === this.curveType || "chordal" === this.curveType) {
    var d = "chordal" === this.curveType ? .5 : .25;
    var p = Math.pow(n.distanceToSquared(u), d);
    var f = Math.pow(u.distanceToSquared(h), d);
    var m = Math.pow(h.distanceToSquared(r), d);
    if (f < 1e-4) {
      f = 1;
    }
    if (p < 1e-4) {
      p = f;
    }
    if (m < 1e-4) {
      m = f;
    }
    Wo.initNonuniformCatmullRom(n.x, u.x, h.x, r.x, p, f, m);
    qo.initNonuniformCatmullRom(n.y, u.y, h.y, r.y, p, f, m);
    Xo.initNonuniformCatmullRom(n.z, u.z, h.z, r.z, p, f, m);
  } else if ("catmullrom" === this.curveType) {
    Wo.initCatmullRom(n.x, u.x, h.x, r.x, this.tension);
    qo.initCatmullRom(n.y, u.y, h.y, r.y, this.tension);
    Xo.initCatmullRom(n.z, u.z, h.z, r.z, this.tension);
  }
  i.set(Wo.calc(c), qo.calc(c), Xo.calc(c));
  return i;
};
Yo.prototype.copy = function (e) {
  Fo.prototype.copy.call(this, e);
  this.points = [];
  for (var t = 0, n = e.points.length; t < n; t++) {
    var r = e.points[t];
    this.points.push(r.clone());
  }
  this.closed = e.closed;
  this.curveType = e.curveType;
  this.tension = e.tension;
  return this;
};
Yo.prototype.toJSON = function () {
  var e = Fo.prototype.toJSON.call(this);
  e.points = [];
  for (var t = 0, n = this.points.length; t < n; t++) {
    var r = this.points[t];
    e.points.push(r.toArray());
  }
  e.closed = this.closed;
  e.curveType = this.curveType;
  e.tension = this.tension;
  return e;
};
Yo.prototype.fromJSON = function (e) {
  Fo.prototype.fromJSON.call(this, e);
  this.points = [];
  for (var t = 0, n = e.points.length; t < n; t++) {
    var r = e.points[t];
    this.points.push(new C().fromArray(r));
  }
  this.closed = e.closed;
  this.curveType = e.curveType;
  this.tension = e.tension;
  return this;
};
Qo.prototype = Object.create(Fo.prototype);
Qo.prototype.constructor = Qo;
Qo.prototype.isCubicBezierCurve = !0;
Qo.prototype.getPoint = function (e, t) {
  var n = t || new w();
  var r = this.v0;
  var i = this.v1;
  var a = this.v2;
  var o = this.v3;
  n.set(Ko(e, r.x, i.x, a.x, o.x), Ko(e, r.y, i.y, a.y, o.y));
  return n;
};
Qo.prototype.copy = function (e) {
  Fo.prototype.copy.call(this, e);
  this.v0.copy(e.v0);
  this.v1.copy(e.v1);
  this.v2.copy(e.v2);
  this.v3.copy(e.v3);
  return this;
};
Qo.prototype.toJSON = function () {
  var e = Fo.prototype.toJSON.call(this);
  e.v0 = this.v0.toArray();
  e.v1 = this.v1.toArray();
  e.v2 = this.v2.toArray();
  e.v3 = this.v3.toArray();
  return e;
};
Qo.prototype.fromJSON = function (e) {
  Fo.prototype.fromJSON.call(this, e);
  this.v0.fromArray(e.v0);
  this.v1.fromArray(e.v1);
  this.v2.fromArray(e.v2);
  this.v3.fromArray(e.v3);
  return this;
};
$o.prototype = Object.create(Fo.prototype);
$o.prototype.constructor = $o;
$o.prototype.isCubicBezierCurve3 = !0;
$o.prototype.getPoint = function (e, t) {
  var n = t || new C();
  var r = this.v0;
  var i = this.v1;
  var a = this.v2;
  var o = this.v3;
  n.set(Ko(e, r.x, i.x, a.x, o.x), Ko(e, r.y, i.y, a.y, o.y), Ko(e, r.z, i.z, a.z, o.z));
  return n;
};
$o.prototype.copy = function (e) {
  Fo.prototype.copy.call(this, e);
  this.v0.copy(e.v0);
  this.v1.copy(e.v1);
  this.v2.copy(e.v2);
  this.v3.copy(e.v3);
  return this;
};
$o.prototype.toJSON = function () {
  var e = Fo.prototype.toJSON.call(this);
  e.v0 = this.v0.toArray();
  e.v1 = this.v1.toArray();
  e.v2 = this.v2.toArray();
  e.v3 = this.v3.toArray();
  return e;
};
$o.prototype.fromJSON = function (e) {
  Fo.prototype.fromJSON.call(this, e);
  this.v0.fromArray(e.v0);
  this.v1.fromArray(e.v1);
  this.v2.fromArray(e.v2);
  this.v3.fromArray(e.v3);
  return this;
};
es.prototype = Object.create(Fo.prototype);
es.prototype.constructor = es;
es.prototype.isLineCurve = !0;
es.prototype.getPoint = function (e, t) {
  var n = t || new w();
  if (1 === e) {
    n.copy(this.v2);
  } else {
    n.copy(this.v2).sub(this.v1);
    n.multiplyScalar(e).add(this.v1);
  }
  return n;
};
es.prototype.getPointAt = function (e, t) {
  return this.getPoint(e, t);
};
es.prototype.getTangent = function (e, t) {
  var n = t || new w();
  n.copy(this.v2).sub(this.v1).normalize();
  return n;
};
es.prototype.copy = function (e) {
  Fo.prototype.copy.call(this, e);
  this.v1.copy(e.v1);
  this.v2.copy(e.v2);
  return this;
};
es.prototype.toJSON = function () {
  var e = Fo.prototype.toJSON.call(this);
  e.v1 = this.v1.toArray();
  e.v2 = this.v2.toArray();
  return e;
};
es.prototype.fromJSON = function (e) {
  Fo.prototype.fromJSON.call(this, e);
  this.v1.fromArray(e.v1);
  this.v2.fromArray(e.v2);
  return this;
};
ts.prototype = Object.create(Fo.prototype);
ts.prototype.constructor = ts;
ts.prototype.isLineCurve3 = !0;
ts.prototype.getPoint = function (e, t) {
  var n = t || new C();
  if (1 === e) {
    n.copy(this.v2);
  } else {
    n.copy(this.v2).sub(this.v1);
    n.multiplyScalar(e).add(this.v1);
  }
  return n;
};
ts.prototype.getPointAt = function (e, t) {
  return this.getPoint(e, t);
};
ts.prototype.copy = function (e) {
  Fo.prototype.copy.call(this, e);
  this.v1.copy(e.v1);
  this.v2.copy(e.v2);
  return this;
};
ts.prototype.toJSON = function () {
  var e = Fo.prototype.toJSON.call(this);
  e.v1 = this.v1.toArray();
  e.v2 = this.v2.toArray();
  return e;
};
ts.prototype.fromJSON = function (e) {
  Fo.prototype.fromJSON.call(this, e);
  this.v1.fromArray(e.v1);
  this.v2.fromArray(e.v2);
  return this;
};
ns.prototype = Object.create(Fo.prototype);
ns.prototype.constructor = ns;
ns.prototype.isQuadraticBezierCurve = !0;
ns.prototype.getPoint = function (e, t) {
  var n = t || new w();
  var r = this.v0;
  var i = this.v1;
  var a = this.v2;
  n.set(Jo(e, r.x, i.x, a.x), Jo(e, r.y, i.y, a.y));
  return n;
};
ns.prototype.copy = function (e) {
  Fo.prototype.copy.call(this, e);
  this.v0.copy(e.v0);
  this.v1.copy(e.v1);
  this.v2.copy(e.v2);
  return this;
};
ns.prototype.toJSON = function () {
  var e = Fo.prototype.toJSON.call(this);
  e.v0 = this.v0.toArray();
  e.v1 = this.v1.toArray();
  e.v2 = this.v2.toArray();
  return e;
};
ns.prototype.fromJSON = function (e) {
  Fo.prototype.fromJSON.call(this, e);
  this.v0.fromArray(e.v0);
  this.v1.fromArray(e.v1);
  this.v2.fromArray(e.v2);
  return this;
};
rs.prototype = Object.create(Fo.prototype);
rs.prototype.constructor = rs;
rs.prototype.isQuadraticBezierCurve3 = !0;
rs.prototype.getPoint = function (e, t) {
  var n = t || new C();
  var r = this.v0;
  var i = this.v1;
  var a = this.v2;
  n.set(Jo(e, r.x, i.x, a.x), Jo(e, r.y, i.y, a.y), Jo(e, r.z, i.z, a.z));
  return n;
};
rs.prototype.copy = function (e) {
  Fo.prototype.copy.call(this, e);
  this.v0.copy(e.v0);
  this.v1.copy(e.v1);
  this.v2.copy(e.v2);
  return this;
};
rs.prototype.toJSON = function () {
  var e = Fo.prototype.toJSON.call(this);
  e.v0 = this.v0.toArray();
  e.v1 = this.v1.toArray();
  e.v2 = this.v2.toArray();
  return e;
};
rs.prototype.fromJSON = function (e) {
  Fo.prototype.fromJSON.call(this, e);
  this.v0.fromArray(e.v0);
  this.v1.fromArray(e.v1);
  this.v2.fromArray(e.v2);
  return this;
};
is.prototype = Object.create(Fo.prototype);
is.prototype.constructor = is;
is.prototype.isSplineCurve = !0;
is.prototype.getPoint = function (e, t) {
  var n = t || new w();
  var r = this.points;
  var i = (r.length - 1) * e;
  var a = Math.floor(i);
  var o = i - a;
  var s = r[0 === a ? a : a - 1];
  var l = r[a];
  var c = r[a > r.length - 2 ? r.length - 1 : a + 1];
  var u = r[a > r.length - 3 ? r.length - 1 : a + 2];
  n.set(Zo(o, s.x, l.x, c.x, u.x), Zo(o, s.y, l.y, c.y, u.y));
  return n;
};
is.prototype.copy = function (e) {
  Fo.prototype.copy.call(this, e);
  this.points = [];
  for (var t = 0, n = e.points.length; t < n; t++) {
    var r = e.points[t];
    this.points.push(r.clone());
  }
  return this;
};
is.prototype.toJSON = function () {
  var e = Fo.prototype.toJSON.call(this);
  e.points = [];
  for (var t = 0, n = this.points.length; t < n; t++) {
    var r = this.points[t];
    e.points.push(r.toArray());
  }
  return e;
};
is.prototype.fromJSON = function (e) {
  Fo.prototype.fromJSON.call(this, e);
  this.points = [];
  for (var t = 0, n = e.points.length; t < n; t++) {
    var r = e.points[t];
    this.points.push(new w().fromArray(r));
  }
  return this;
};
var as = Object.freeze({
  __proto__: null,
  ArcCurve: Go,
  CatmullRomCurve3: Yo,
  CubicBezierCurve: Qo,
  CubicBezierCurve3: $o,
  EllipseCurve: Ho,
  LineCurve: es,
  LineCurve3: ts,
  QuadraticBezierCurve: ns,
  QuadraticBezierCurve3: rs,
  SplineCurve: is
});
function os() {
  Fo.call(this);
  this.type = "CurvePath";
  this.curves = [];
  this.autoClose = !1;
}
function ss(e) {
  os.call(this);
  this.type = "Path";
  this.currentPoint = new w();
  if (e) {
    this.setFromPoints(e);
  }
}
function ls(e) {
  ss.call(this, e);
  this.uuid = _.generateUUID();
  this.type = "Shape";
  this.holes = [];
}
function cs(e, t) {
  Pe.call(this);
  this.type = "Light";
  this.color = new Qe(e);
  this.intensity = void 0 !== t ? t : 1;
}
function us(e, t, n) {
  cs.call(this, e, n);
  this.type = "HemisphereLight";
  this.position.copy(Pe.DefaultUp);
  this.updateMatrix();
  this.groundColor = new Qe(t);
}
function hs(e) {
  this.camera = e;
  this.bias = 0;
  this.normalBias = 0;
  this.radius = 1;
  this.mapSize = new w(512, 512);
  this.map = null;
  this.mapPass = null;
  this.matrix = new ae();
  this.autoUpdate = !0;
  this.needsUpdate = !1;
  this._frustum = new an();
  this._frameExtents = new w(1, 1);
  this._viewportCount = 1;
  this._viewports = [new A(0, 0, 1, 1)];
}
function ds() {
  hs.call(this, new Kt(50, 1, .5, 500));
  this.focus = 1;
}
function ps(e, t, n, r, i, a) {
  cs.call(this, e, t);
  this.type = "SpotLight";
  this.position.copy(Pe.DefaultUp);
  this.updateMatrix();
  this.target = new Pe();
  Object.defineProperty(this, "power", {
    get: function () {
      return this.intensity * Math.PI;
    },
    set: function (e) {
      this.intensity = e / Math.PI;
    }
  });
  this.distance = void 0 !== n ? n : 0;
  this.angle = void 0 !== r ? r : Math.PI / 3;
  this.penumbra = void 0 !== i ? i : 0;
  this.decay = void 0 !== a ? a : 1;
  this.shadow = new ds();
}
function fs() {
  hs.call(this, new Kt(90, 1, .5, 500));
  this._frameExtents = new w(4, 2);
  this._viewportCount = 6;
  this._viewports = [new A(2, 1, 1, 1), new A(0, 1, 1, 1), new A(3, 1, 1, 1), new A(1, 1, 1, 1), new A(3, 0, 1, 1), new A(1, 0, 1, 1)];
  this._cubeDirections = [new C(1, 0, 0), new C(-1, 0, 0), new C(0, 0, 1), new C(0, 0, -1), new C(0, 1, 0), new C(0, -1, 0)];
  this._cubeUps = [new C(0, 1, 0), new C(0, 1, 0), new C(0, 1, 0), new C(0, 1, 0), new C(0, 0, 1), new C(0, 0, -1)];
}
function ms(e, t, n, r) {
  cs.call(this, e, t);
  this.type = "PointLight";
  Object.defineProperty(this, "power", {
    get: function () {
      return 4 * this.intensity * Math.PI;
    },
    set: function (e) {
      this.intensity = e / (4 * Math.PI);
    }
  });
  this.distance = void 0 !== n ? n : 0;
  this.decay = void 0 !== r ? r : 1;
  this.shadow = new fs();
}
function vs(e, t, n, r, i, a) {
  Jt.call(this);
  this.type = "OrthographicCamera";
  this.zoom = 1;
  this.view = null;
  this.left = void 0 !== e ? e : -1;
  this.right = void 0 !== t ? t : 1;
  this.top = void 0 !== n ? n : 1;
  this.bottom = void 0 !== r ? r : -1;
  this.near = void 0 !== i ? i : .1;
  this.far = void 0 !== a ? a : 2e3;
  this.updateProjectionMatrix();
}
function gs() {
  hs.call(this, new vs(-5, 5, 5, -5, .5, 500));
}
function ys(e, t) {
  cs.call(this, e, t);
  this.type = "DirectionalLight";
  this.position.copy(Pe.DefaultUp);
  this.updateMatrix();
  this.target = new Pe();
  this.shadow = new gs();
}
function xs(e, t) {
  cs.call(this, e, t);
  this.type = "AmbientLight";
}
function bs(e, t, n, r) {
  cs.call(this, e, t);
  this.type = "RectAreaLight";
  this.width = void 0 !== n ? n : 10;
  this.height = void 0 !== r ? r : 10;
}
os.prototype = Object.assign(Object.create(Fo.prototype), {
  constructor: os,
  add: function (e) {
    this.curves.push(e);
  },
  closePath: function () {
    var e = this.curves[0].getPoint(0);
    var t = this.curves[this.curves.length - 1].getPoint(1);
    if (!e.equals(t)) {
      this.curves.push(new es(t, e));
    }
  },
  getPoint: function (e) {
    for (var t = e * this.getLength(), n = this.getCurveLengths(), r = 0; r < n.length;) {
      if (n[r] >= t) {
        var i = n[r] - t;
        var a = this.curves[r];
        var o = a.getLength();
        var s = 0 === o ? 0 : 1 - i / o;
        return a.getPointAt(s);
      }
      r++;
    }
    return null;
  },
  getLength: function () {
    var e = this.getCurveLengths();
    return e[e.length - 1];
  },
  updateArcLengths: function () {
    this.needsUpdate = !0;
    this.cacheLengths = null;
    this.getCurveLengths();
  },
  getCurveLengths: function () {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length) {
      return this.cacheLengths;
    }
    for (var e = [], t = 0, n = 0, r = this.curves.length; n < r; n++) {
      t += this.curves[n].getLength();
      e.push(t);
    }
    this.cacheLengths = e;
    return e;
  },
  getSpacedPoints: function (e) {
    if (void 0 === e) {
      e = 40;
    }
    for (var t = [], n = 0; n <= e; n++) {
      t.push(this.getPoint(n / e));
    }
    if (this.autoClose) {
      t.push(t[0]);
    }
    return t;
  },
  getPoints: function (e) {
    e = e || 12;
    for (var t, n = [], r = 0, i = this.curves; r < i.length; r++) {
      for (var a = i[r], o = a && a.isEllipseCurve ? 2 * e : a && (a.isLineCurve || a.isLineCurve3) ? 1 : a && a.isSplineCurve ? e * a.points.length : e, s = a.getPoints(o), l = 0; l < s.length; l++) {
        var c = s[l];
        if (!(t && t.equals(c))) {
          n.push(c);
          t = c;
        }
      }
    }
    if (this.autoClose && n.length > 1 && !n[n.length - 1].equals(n[0])) {
      n.push(n[0]);
    }
    return n;
  },
  copy: function (e) {
    Fo.prototype.copy.call(this, e);
    this.curves = [];
    for (var t = 0, n = e.curves.length; t < n; t++) {
      var r = e.curves[t];
      this.curves.push(r.clone());
    }
    this.autoClose = e.autoClose;
    return this;
  },
  toJSON: function () {
    var e = Fo.prototype.toJSON.call(this);
    e.autoClose = this.autoClose;
    e.curves = [];
    for (var t = 0, n = this.curves.length; t < n; t++) {
      var r = this.curves[t];
      e.curves.push(r.toJSON());
    }
    return e;
  },
  fromJSON: function (e) {
    Fo.prototype.fromJSON.call(this, e);
    this.autoClose = e.autoClose;
    this.curves = [];
    for (var t = 0, n = e.curves.length; t < n; t++) {
      var r = e.curves[t];
      this.curves.push(new as[r.type]().fromJSON(r));
    }
    return this;
  }
});
ss.prototype = Object.assign(Object.create(os.prototype), {
  constructor: ss,
  setFromPoints: function (e) {
    this.moveTo(e[0].x, e[0].y);
    for (var t = 1, n = e.length; t < n; t++) {
      this.lineTo(e[t].x, e[t].y);
    }
    return this;
  },
  moveTo: function (e, t) {
    this.currentPoint.set(e, t);
    return this;
  },
  lineTo: function (e, t) {
    var n = new es(this.currentPoint.clone(), new w(e, t));
    this.curves.push(n);
    this.currentPoint.set(e, t);
    return this;
  },
  quadraticCurveTo: function (e, t, n, r) {
    var i = new ns(this.currentPoint.clone(), new w(e, t), new w(n, r));
    this.curves.push(i);
    this.currentPoint.set(n, r);
    return this;
  },
  bezierCurveTo: function (e, t, n, r, i, a) {
    var o = new Qo(this.currentPoint.clone(), new w(e, t), new w(n, r), new w(i, a));
    this.curves.push(o);
    this.currentPoint.set(i, a);
    return this;
  },
  splineThru: function (e) {
    var t = new is([this.currentPoint.clone()].concat(e));
    this.curves.push(t);
    this.currentPoint.copy(e[e.length - 1]);
    return this;
  },
  arc: function (e, t, n, r, i, a) {
    var o = this.currentPoint.x;
    var s = this.currentPoint.y;
    this.absarc(e + o, t + s, n, r, i, a);
    return this;
  },
  absarc: function (e, t, n, r, i, a) {
    this.absellipse(e, t, n, n, r, i, a);
    return this;
  },
  ellipse: function (e, t, n, r, i, a, o, s) {
    var l = this.currentPoint.x;
    var c = this.currentPoint.y;
    this.absellipse(e + l, t + c, n, r, i, a, o, s);
    return this;
  },
  absellipse: function (e, t, n, r, i, a, o, s) {
    var l = new Ho(e, t, n, r, i, a, o, s);
    if (this.curves.length > 0) {
      var c = l.getPoint(0);
      if (!c.equals(this.currentPoint)) {
        this.lineTo(c.x, c.y);
      }
    }
    this.curves.push(l);
    var u = l.getPoint(1);
    this.currentPoint.copy(u);
    return this;
  },
  copy: function (e) {
    os.prototype.copy.call(this, e);
    this.currentPoint.copy(e.currentPoint);
    return this;
  },
  toJSON: function () {
    var e = os.prototype.toJSON.call(this);
    e.currentPoint = this.currentPoint.toArray();
    return e;
  },
  fromJSON: function (e) {
    os.prototype.fromJSON.call(this, e);
    this.currentPoint.fromArray(e.currentPoint);
    return this;
  }
});
ls.prototype = Object.assign(Object.create(ss.prototype), {
  constructor: ls,
  getPointsHoles: function (e) {
    for (var t = [], n = 0, r = this.holes.length; n < r; n++) {
      t[n] = this.holes[n].getPoints(e);
    }
    return t;
  },
  extractPoints: function (e) {
    return {
      shape: this.getPoints(e),
      holes: this.getPointsHoles(e)
    };
  },
  copy: function (e) {
    ss.prototype.copy.call(this, e);
    this.holes = [];
    for (var t = 0, n = e.holes.length; t < n; t++) {
      var r = e.holes[t];
      this.holes.push(r.clone());
    }
    return this;
  },
  toJSON: function () {
    var e = ss.prototype.toJSON.call(this);
    e.uuid = this.uuid;
    e.holes = [];
    for (var t = 0, n = this.holes.length; t < n; t++) {
      var r = this.holes[t];
      e.holes.push(r.toJSON());
    }
    return e;
  },
  fromJSON: function (e) {
    ss.prototype.fromJSON.call(this, e);
    this.uuid = e.uuid;
    this.holes = [];
    for (var t = 0, n = e.holes.length; t < n; t++) {
      var r = e.holes[t];
      this.holes.push(new ss().fromJSON(r));
    }
    return this;
  }
});
cs.prototype = Object.assign(Object.create(Pe.prototype), {
  constructor: cs,
  isLight: !0,
  copy: function (e) {
    Pe.prototype.copy.call(this, e);
    this.color.copy(e.color);
    this.intensity = e.intensity;
    return this;
  },
  toJSON: function (e) {
    var t = Pe.prototype.toJSON.call(this, e);
    t.object.color = this.color.getHex();
    t.object.intensity = this.intensity;
    if (void 0 !== this.groundColor) {
      t.object.groundColor = this.groundColor.getHex();
    }
    if (void 0 !== this.distance) {
      t.object.distance = this.distance;
    }
    if (void 0 !== this.angle) {
      t.object.angle = this.angle;
    }
    if (void 0 !== this.decay) {
      t.object.decay = this.decay;
    }
    if (void 0 !== this.penumbra) {
      t.object.penumbra = this.penumbra;
    }
    if (void 0 !== this.shadow) {
      t.object.shadow = this.shadow.toJSON();
    }
    return t;
  }
});
us.prototype = Object.assign(Object.create(cs.prototype), {
  constructor: us,
  isHemisphereLight: !0,
  copy: function (e) {
    cs.prototype.copy.call(this, e);
    this.groundColor.copy(e.groundColor);
    return this;
  }
});
Object.assign(hs.prototype, {
  _projScreenMatrix: new ae(),
  _lightPositionWorld: new C(),
  _lookTarget: new C(),
  getViewportCount: function () {
    return this._viewportCount;
  },
  getFrustum: function () {
    return this._frustum;
  },
  updateMatrices: function (e) {
    var t = this.camera;
    var n = this.matrix;
    var r = this._projScreenMatrix;
    var i = this._lookTarget;
    var a = this._lightPositionWorld;
    a.setFromMatrixPosition(e.matrixWorld);
    t.position.copy(a);
    i.setFromMatrixPosition(e.target.matrixWorld);
    t.lookAt(i);
    t.updateMatrixWorld();
    r.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse);
    this._frustum.setFromProjectionMatrix(r);
    n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1);
    n.multiply(t.projectionMatrix);
    n.multiply(t.matrixWorldInverse);
  },
  getViewport: function (e) {
    return this._viewports[e];
  },
  getFrameExtents: function () {
    return this._frameExtents;
  },
  copy: function (e) {
    this.camera = e.camera.clone();
    this.bias = e.bias;
    this.radius = e.radius;
    this.mapSize.copy(e.mapSize);
    return this;
  },
  clone: function () {
    return new this.constructor().copy(this);
  },
  toJSON: function () {
    var e = {};
    if (0 !== this.bias) {
      e.bias = this.bias;
    }
    if (0 !== this.normalBias) {
      e.normalBias = this.normalBias;
    }
    if (1 !== this.radius) {
      e.radius = this.radius;
    }
    if (!(512 === this.mapSize.x && 512 === this.mapSize.y)) {
      e.mapSize = this.mapSize.toArray();
    }
    e.camera = this.camera.toJSON(!1).object;
    delete e.camera.matrix;
    return e;
  }
});
ds.prototype = Object.assign(Object.create(hs.prototype), {
  constructor: ds,
  isSpotLightShadow: !0,
  updateMatrices: function (e) {
    var t = this.camera;
    var n = 2 * _.RAD2DEG * e.angle * this.focus;
    var r = this.mapSize.width / this.mapSize.height;
    var i = e.distance || t.far;
    if (!(n === t.fov && r === t.aspect && i === t.far)) {
      t.fov = n;
      t.aspect = r;
      t.far = i;
      t.updateProjectionMatrix();
    }
    hs.prototype.updateMatrices.call(this, e);
  }
});
ps.prototype = Object.assign(Object.create(cs.prototype), {
  constructor: ps,
  isSpotLight: !0,
  copy: function (e) {
    cs.prototype.copy.call(this, e);
    this.distance = e.distance;
    this.angle = e.angle;
    this.penumbra = e.penumbra;
    this.decay = e.decay;
    this.target = e.target.clone();
    this.shadow = e.shadow.clone();
    return this;
  }
});
fs.prototype = Object.assign(Object.create(hs.prototype), {
  constructor: fs,
  isPointLightShadow: !0,
  updateMatrices: function (e, t) {
    if (void 0 === t) {
      t = 0;
    }
    var n = this.camera;
    var r = this.matrix;
    var i = this._lightPositionWorld;
    var a = this._lookTarget;
    var o = this._projScreenMatrix;
    i.setFromMatrixPosition(e.matrixWorld);
    n.position.copy(i);
    a.copy(n.position);
    a.add(this._cubeDirections[t]);
    n.up.copy(this._cubeUps[t]);
    n.lookAt(a);
    n.updateMatrixWorld();
    r.makeTranslation(-i.x, -i.y, -i.z);
    o.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse);
    this._frustum.setFromProjectionMatrix(o);
  }
});
ms.prototype = Object.assign(Object.create(cs.prototype), {
  constructor: ms,
  isPointLight: !0,
  copy: function (e) {
    cs.prototype.copy.call(this, e);
    this.distance = e.distance;
    this.decay = e.decay;
    this.shadow = e.shadow.clone();
    return this;
  }
});
vs.prototype = Object.assign(Object.create(Jt.prototype), {
  constructor: vs,
  isOrthographicCamera: !0,
  copy: function (e, t) {
    Jt.prototype.copy.call(this, e, t);
    this.left = e.left;
    this.right = e.right;
    this.top = e.top;
    this.bottom = e.bottom;
    this.near = e.near;
    this.far = e.far;
    this.zoom = e.zoom;
    this.view = null === e.view ? null : Object.assign({}, e.view);
    return this;
  },
  setViewOffset: function (e, t, n, r, i, a) {
    if (null === this.view) {
      this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1
      };
    }
    this.view.enabled = !0;
    this.view.fullWidth = e;
    this.view.fullHeight = t;
    this.view.offsetX = n;
    this.view.offsetY = r;
    this.view.width = i;
    this.view.height = a;
    this.updateProjectionMatrix();
  },
  clearViewOffset: function () {
    if (null !== this.view) {
      this.view.enabled = !1;
    }
    this.updateProjectionMatrix();
  },
  updateProjectionMatrix: function () {
    var e = (this.right - this.left) / (2 * this.zoom);
    var t = (this.top - this.bottom) / (2 * this.zoom);
    var n = (this.right + this.left) / 2;
    var r = (this.top + this.bottom) / 2;
    var i = n - e;
    var a = n + e;
    var o = r + t;
    var s = r - t;
    if (null !== this.view && this.view.enabled) {
      var l = (this.right - this.left) / this.view.fullWidth / this.zoom;
      var c = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      a = (i += l * this.view.offsetX) + l * this.view.width;
      s = (o -= c * this.view.offsetY) - c * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(i, a, o, s, this.near, this.far);
    this.projectionMatrixInverse.getInverse(this.projectionMatrix);
  },
  toJSON: function (e) {
    var t = Pe.prototype.toJSON.call(this, e);
    t.object.zoom = this.zoom;
    t.object.left = this.left;
    t.object.right = this.right;
    t.object.top = this.top;
    t.object.bottom = this.bottom;
    t.object.near = this.near;
    t.object.far = this.far;
    if (null !== this.view) {
      t.object.view = Object.assign({}, this.view);
    }
    return t;
  }
});
gs.prototype = Object.assign(Object.create(hs.prototype), {
  constructor: gs,
  isDirectionalLightShadow: !0,
  updateMatrices: function (e) {
    hs.prototype.updateMatrices.call(this, e);
  }
});
ys.prototype = Object.assign(Object.create(cs.prototype), {
  constructor: ys,
  isDirectionalLight: !0,
  copy: function (e) {
    cs.prototype.copy.call(this, e);
    this.target = e.target.clone();
    this.shadow = e.shadow.clone();
    return this;
  }
});
xs.prototype = Object.assign(Object.create(cs.prototype), {
  constructor: xs,
  isAmbientLight: !0
});
bs.prototype = Object.assign(Object.create(cs.prototype), {
  constructor: bs,
  isRectAreaLight: !0,
  copy: function (e) {
    cs.prototype.copy.call(this, e);
    this.width = e.width;
    this.height = e.height;
    return this;
  },
  toJSON: function (e) {
    var t = cs.prototype.toJSON.call(this, e);
    t.object.width = this.width;
    t.object.height = this.height;
    return t;
  }
});
var _s = function () {
  function e() {
    Object(u.a)(this, e);
    Object.defineProperty(this, "isSphericalHarmonics3", {
      value: !0
    });
    this.coefficients = [];
    for (var t = 0; t < 9; t++) {
      this.coefficients.push(new C());
    }
  }
  Object(h.a)(e, [{
    key: "set",
    value: function (e) {
      for (var t = 0; t < 9; t++) {
        this.coefficients[t].copy(e[t]);
      }
      return this;
    }
  }, {
    key: "zero",
    value: function () {
      for (var e = 0; e < 9; e++) {
        this.coefficients[e].set(0, 0, 0);
      }
      return this;
    }
  }, {
    key: "getAt",
    value: function (e, t) {
      var n = e.x;
      var r = e.y;
      var i = e.z;
      var a = this.coefficients;
      t.copy(a[0]).multiplyScalar(.282095);
      t.addScaledVector(a[1], .488603 * r);
      t.addScaledVector(a[2], .488603 * i);
      t.addScaledVector(a[3], .488603 * n);
      t.addScaledVector(a[4], n * r * 1.092548);
      t.addScaledVector(a[5], r * i * 1.092548);
      t.addScaledVector(a[6], .315392 * (3 * i * i - 1));
      t.addScaledVector(a[7], n * i * 1.092548);
      t.addScaledVector(a[8], .546274 * (n * n - r * r));
      return t;
    }
  }, {
    key: "getIrradianceAt",
    value: function (e, t) {
      var n = e.x;
      var r = e.y;
      var i = e.z;
      var a = this.coefficients;
      t.copy(a[0]).multiplyScalar(.886227);
      t.addScaledVector(a[1], 1.023328 * r);
      t.addScaledVector(a[2], 1.023328 * i);
      t.addScaledVector(a[3], 1.023328 * n);
      t.addScaledVector(a[4], .858086 * n * r);
      t.addScaledVector(a[5], .858086 * r * i);
      t.addScaledVector(a[6], .743125 * i * i - .247708);
      t.addScaledVector(a[7], .858086 * n * i);
      t.addScaledVector(a[8], .429043 * (n * n - r * r));
      return t;
    }
  }, {
    key: "add",
    value: function (e) {
      for (var t = 0; t < 9; t++) {
        this.coefficients[t].add(e.coefficients[t]);
      }
      return this;
    }
  }, {
    key: "addScaledSH",
    value: function (e, t) {
      for (var n = 0; n < 9; n++) {
        this.coefficients[n].addScaledVector(e.coefficients[n], t);
      }
      return this;
    }
  }, {
    key: "scale",
    value: function (e) {
      for (var t = 0; t < 9; t++) {
        this.coefficients[t].multiplyScalar(e);
      }
      return this;
    }
  }, {
    key: "lerp",
    value: function (e, t) {
      for (var n = 0; n < 9; n++) {
        this.coefficients[n].lerp(e.coefficients[n], t);
      }
      return this;
    }
  }, {
    key: "equals",
    value: function (e) {
      for (var t = 0; t < 9; t++) {
        if (!this.coefficients[t].equals(e.coefficients[t])) {
          return !1;
        }
      }
      return !0;
    }
  }, {
    key: "copy",
    value: function (e) {
      return this.set(e.coefficients);
    }
  }, {
    key: "clone",
    value: function () {
      return new this.constructor().copy(this);
    }
  }, {
    key: "fromArray",
    value: function (e) {
      for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = this.coefficients, r = 0; r < 9; r++) {
        n[r].fromArray(e, t + 3 * r);
      }
      return this;
    }
  }, {
    key: "toArray",
    value: function () {
      for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = this.coefficients, r = 0; r < 9; r++) {
        n[r].toArray(e, t + 3 * r);
      }
      return e;
    }
  }], [{
    key: "getBasisAt",
    value: function (e, t) {
      var n = e.x;
      var r = e.y;
      var i = e.z;
      t[0] = .282095;
      t[1] = .488603 * r;
      t[2] = .488603 * i;
      t[3] = .488603 * n;
      t[4] = 1.092548 * n * r;
      t[5] = 1.092548 * r * i;
      t[6] = .315392 * (3 * i * i - 1);
      t[7] = 1.092548 * n * i;
      t[8] = .546274 * (n * n - r * r);
    }
  }]);
  return e;
}();
function ws(e, t) {
  cs.call(this, void 0, t);
  this.type = "LightProbe";
  this.sh = void 0 !== e ? e : new _s();
}
function Ms(e) {
  Co.call(this, e);
  this.textures = {};
}
ws.prototype = Object.assign(Object.create(cs.prototype), {
  constructor: ws,
  isLightProbe: !0,
  copy: function (e) {
    cs.prototype.copy.call(this, e);
    this.sh.copy(e.sh);
    return this;
  },
  fromJSON: function (e) {
    this.intensity = e.intensity;
    this.sh.fromArray(e.sh);
    return this;
  },
  toJSON: function (e) {
    var t = cs.prototype.toJSON.call(this, e);
    t.object.sh = this.sh.toArray();
    return t;
  }
});
Ms.prototype = Object.assign(Object.create(Co.prototype), {
  constructor: Ms,
  load: function (e, t, n, r) {
    var i = this;
    var a = new Oo(i.manager);
    a.setPath(i.path);
    a.setRequestHeader(i.requestHeader);
    a.setWithCredentials(i.withCredentials);
    a.load(e, function (n) {
      try {
        t(i.parse(JSON.parse(n)));
      } catch (a) {
        if (r) {
          r(a);
        } else {
          console.error(a);
        }
        i.manager.itemError(e);
      }
    }, n, r);
  },
  parse: function (e) {
    var t = this.textures;
    function n(e) {
      if (void 0 === t[e]) {
        console.warn("THREE.MaterialLoader: Undefined texture", e);
      }
      return t[e];
    }
    var r = new ho[e.type]();
    if (void 0 !== e.uuid) {
      r.uuid = e.uuid;
    }
    if (void 0 !== e.name) {
      r.name = e.name;
    }
    if (void 0 !== e.color && void 0 !== r.color) {
      r.color.setHex(e.color);
    }
    if (void 0 !== e.roughness) {
      r.roughness = e.roughness;
    }
    if (void 0 !== e.metalness) {
      r.metalness = e.metalness;
    }
    if (void 0 !== e.sheen) {
      r.sheen = new Qe().setHex(e.sheen);
    }
    if (void 0 !== e.emissive && void 0 !== r.emissive) {
      r.emissive.setHex(e.emissive);
    }
    if (void 0 !== e.specular && void 0 !== r.specular) {
      r.specular.setHex(e.specular);
    }
    if (void 0 !== e.shininess) {
      r.shininess = e.shininess;
    }
    if (void 0 !== e.clearcoat) {
      r.clearcoat = e.clearcoat;
    }
    if (void 0 !== e.clearcoatRoughness) {
      r.clearcoatRoughness = e.clearcoatRoughness;
    }
    if (void 0 !== e.fog) {
      r.fog = e.fog;
    }
    if (void 0 !== e.flatShading) {
      r.flatShading = e.flatShading;
    }
    if (void 0 !== e.blending) {
      r.blending = e.blending;
    }
    if (void 0 !== e.combine) {
      r.combine = e.combine;
    }
    if (void 0 !== e.side) {
      r.side = e.side;
    }
    if (void 0 !== e.opacity) {
      r.opacity = e.opacity;
    }
    if (void 0 !== e.transparent) {
      r.transparent = e.transparent;
    }
    if (void 0 !== e.alphaTest) {
      r.alphaTest = e.alphaTest;
    }
    if (void 0 !== e.depthTest) {
      r.depthTest = e.depthTest;
    }
    if (void 0 !== e.depthWrite) {
      r.depthWrite = e.depthWrite;
    }
    if (void 0 !== e.colorWrite) {
      r.colorWrite = e.colorWrite;
    }
    if (void 0 !== e.stencilWrite) {
      r.stencilWrite = e.stencilWrite;
    }
    if (void 0 !== e.stencilWriteMask) {
      r.stencilWriteMask = e.stencilWriteMask;
    }
    if (void 0 !== e.stencilFunc) {
      r.stencilFunc = e.stencilFunc;
    }
    if (void 0 !== e.stencilRef) {
      r.stencilRef = e.stencilRef;
    }
    if (void 0 !== e.stencilFuncMask) {
      r.stencilFuncMask = e.stencilFuncMask;
    }
    if (void 0 !== e.stencilFail) {
      r.stencilFail = e.stencilFail;
    }
    if (void 0 !== e.stencilZFail) {
      r.stencilZFail = e.stencilZFail;
    }
    if (void 0 !== e.stencilZPass) {
      r.stencilZPass = e.stencilZPass;
    }
    if (void 0 !== e.wireframe) {
      r.wireframe = e.wireframe;
    }
    if (void 0 !== e.wireframeLinewidth) {
      r.wireframeLinewidth = e.wireframeLinewidth;
    }
    if (void 0 !== e.wireframeLinecap) {
      r.wireframeLinecap = e.wireframeLinecap;
    }
    if (void 0 !== e.wireframeLinejoin) {
      r.wireframeLinejoin = e.wireframeLinejoin;
    }
    if (void 0 !== e.rotation) {
      r.rotation = e.rotation;
    }
    if (1 !== e.linewidth) {
      r.linewidth = e.linewidth;
    }
    if (void 0 !== e.dashSize) {
      r.dashSize = e.dashSize;
    }
    if (void 0 !== e.gapSize) {
      r.gapSize = e.gapSize;
    }
    if (void 0 !== e.scale) {
      r.scale = e.scale;
    }
    if (void 0 !== e.polygonOffset) {
      r.polygonOffset = e.polygonOffset;
    }
    if (void 0 !== e.polygonOffsetFactor) {
      r.polygonOffsetFactor = e.polygonOffsetFactor;
    }
    if (void 0 !== e.polygonOffsetUnits) {
      r.polygonOffsetUnits = e.polygonOffsetUnits;
    }
    if (void 0 !== e.skinning) {
      r.skinning = e.skinning;
    }
    if (void 0 !== e.morphTargets) {
      r.morphTargets = e.morphTargets;
    }
    if (void 0 !== e.morphNormals) {
      r.morphNormals = e.morphNormals;
    }
    if (void 0 !== e.dithering) {
      r.dithering = e.dithering;
    }
    if (void 0 !== e.vertexTangents) {
      r.vertexTangents = e.vertexTangents;
    }
    if (void 0 !== e.visible) {
      r.visible = e.visible;
    }
    if (void 0 !== e.toneMapped) {
      r.toneMapped = e.toneMapped;
    }
    if (void 0 !== e.userData) {
      r.userData = e.userData;
    }
    if (void 0 !== e.vertexColors) {
      if ("number" === typeof e.vertexColors) {
        r.vertexColors = e.vertexColors > 0;
      } else {
        r.vertexColors = e.vertexColors;
      }
    }
    if (void 0 !== e.uniforms) {
      for (var i in e.uniforms) {
        var a = e.uniforms[i];
        switch (r.uniforms[i] = {}, a.type) {
          case "t":
            r.uniforms[i].value = n(a.value);
            break;
          case "c":
            r.uniforms[i].value = new Qe().setHex(a.value);
            break;
          case "v2":
            r.uniforms[i].value = new w().fromArray(a.value);
            break;
          case "v3":
            r.uniforms[i].value = new C().fromArray(a.value);
            break;
          case "v4":
            r.uniforms[i].value = new A().fromArray(a.value);
            break;
          case "m3":
            r.uniforms[i].value = new M().fromArray(a.value);
            break;
          case "m4":
            r.uniforms[i].value = new ae().fromArray(a.value);
            break;
          default:
            r.uniforms[i].value = a.value;
        }
      }
    }
    if (void 0 !== e.defines) {
      r.defines = e.defines;
    }
    if (void 0 !== e.vertexShader) {
      r.vertexShader = e.vertexShader;
    }
    if (void 0 !== e.fragmentShader) {
      r.fragmentShader = e.fragmentShader;
    }
    if (void 0 !== e.extensions) {
      for (var o in e.extensions) r.extensions[o] = e.extensions[o];
    }
    if (void 0 !== e.shading) {
      r.flatShading = 1 === e.shading;
    }
    if (void 0 !== e.size) {
      r.size = e.size;
    }
    if (void 0 !== e.sizeAttenuation) {
      r.sizeAttenuation = e.sizeAttenuation;
    }
    if (void 0 !== e.map) {
      r.map = n(e.map);
    }
    if (void 0 !== e.matcap) {
      r.matcap = n(e.matcap);
    }
    if (void 0 !== e.alphaMap) {
      r.alphaMap = n(e.alphaMap);
    }
    if (void 0 !== e.bumpMap) {
      r.bumpMap = n(e.bumpMap);
    }
    if (void 0 !== e.bumpScale) {
      r.bumpScale = e.bumpScale;
    }
    if (void 0 !== e.normalMap) {
      r.normalMap = n(e.normalMap);
    }
    if (void 0 !== e.normalMapType) {
      r.normalMapType = e.normalMapType;
    }
    if (void 0 !== e.normalScale) {
      var s = e.normalScale;
      if (!1 === Array.isArray(s)) {
        s = [s, s];
      }
      r.normalScale = new w().fromArray(s);
    }
    if (void 0 !== e.displacementMap) {
      r.displacementMap = n(e.displacementMap);
    }
    if (void 0 !== e.displacementScale) {
      r.displacementScale = e.displacementScale;
    }
    if (void 0 !== e.displacementBias) {
      r.displacementBias = e.displacementBias;
    }
    if (void 0 !== e.roughnessMap) {
      r.roughnessMap = n(e.roughnessMap);
    }
    if (void 0 !== e.metalnessMap) {
      r.metalnessMap = n(e.metalnessMap);
    }
    if (void 0 !== e.emissiveMap) {
      r.emissiveMap = n(e.emissiveMap);
    }
    if (void 0 !== e.emissiveIntensity) {
      r.emissiveIntensity = e.emissiveIntensity;
    }
    if (void 0 !== e.specularMap) {
      r.specularMap = n(e.specularMap);
    }
    if (void 0 !== e.envMap) {
      r.envMap = n(e.envMap);
    }
    if (void 0 !== e.envMapIntensity) {
      r.envMapIntensity = e.envMapIntensity;
    }
    if (void 0 !== e.reflectivity) {
      r.reflectivity = e.reflectivity;
    }
    if (void 0 !== e.refractionRatio) {
      r.refractionRatio = e.refractionRatio;
    }
    if (void 0 !== e.lightMap) {
      r.lightMap = n(e.lightMap);
    }
    if (void 0 !== e.lightMapIntensity) {
      r.lightMapIntensity = e.lightMapIntensity;
    }
    if (void 0 !== e.aoMap) {
      r.aoMap = n(e.aoMap);
    }
    if (void 0 !== e.aoMapIntensity) {
      r.aoMapIntensity = e.aoMapIntensity;
    }
    if (void 0 !== e.gradientMap) {
      r.gradientMap = n(e.gradientMap);
    }
    if (void 0 !== e.clearcoatMap) {
      r.clearcoatMap = n(e.clearcoatMap);
    }
    if (void 0 !== e.clearcoatRoughnessMap) {
      r.clearcoatRoughnessMap = n(e.clearcoatRoughnessMap);
    }
    if (void 0 !== e.clearcoatNormalMap) {
      r.clearcoatNormalMap = n(e.clearcoatNormalMap);
    }
    if (void 0 !== e.clearcoatNormalScale) {
      r.clearcoatNormalScale = new w().fromArray(e.clearcoatNormalScale);
    }
    if (void 0 !== e.transmission) {
      r.transmission = e.transmission;
    }
    if (void 0 !== e.transmissionMap) {
      r.transmissionMap = n(e.transmissionMap);
    }
    return r;
  },
  setTextures: function (e) {
    this.textures = e;
    return this;
  }
});
var Ss = {
  decodeText: function (e) {
    if ("undefined" !== typeof TextDecoder) {
      return new TextDecoder().decode(e);
    }
    for (var t = "", n = 0, r = e.length; n < r; n++) {
      t += String.fromCharCode(e[n]);
    }
    try {
      return decodeURIComponent(escape(t));
    } catch (i) {
      return t;
    }
  },
  extractUrlBase: function (e) {
    var t = e.lastIndexOf("/");
    return -1 === t ? "./" : e.substr(0, t + 1);
  }
};
function Ts() {
  St.call(this);
  this.type = "InstancedBufferGeometry";
  this.instanceCount = 1 / 0;
}
function Es(e, t, n, r) {
  if ("number" === typeof n) {
    r = n;
    n = !1;
    console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.");
  }
  at.call(this, e, t, n);
  this.meshPerAttribute = r || 1;
}
function As(e) {
  Co.call(this, e);
}
Ts.prototype = Object.assign(Object.create(St.prototype), {
  constructor: Ts,
  isInstancedBufferGeometry: !0,
  copy: function (e) {
    St.prototype.copy.call(this, e);
    this.instanceCount = e.instanceCount;
    return this;
  },
  clone: function () {
    return new this.constructor().copy(this);
  },
  toJSON: function () {
    var e = St.prototype.toJSON.call(this);
    e.instanceCount = this.instanceCount;
    e.isInstancedBufferGeometry = !0;
    return e;
  }
});
Es.prototype = Object.assign(Object.create(at.prototype), {
  constructor: Es,
  isInstancedBufferAttribute: !0,
  copy: function (e) {
    at.prototype.copy.call(this, e);
    this.meshPerAttribute = e.meshPerAttribute;
    return this;
  },
  toJSON: function () {
    var e = at.prototype.toJSON.call(this);
    e.meshPerAttribute = this.meshPerAttribute;
    e.isInstancedBufferAttribute = !0;
    return e;
  }
});
As.prototype = Object.assign(Object.create(Co.prototype), {
  constructor: As,
  load: function (e, t, n, r) {
    var i = this;
    var a = new Oo(i.manager);
    a.setPath(i.path);
    a.setRequestHeader(i.requestHeader);
    a.setWithCredentials(i.withCredentials);
    a.load(e, function (n) {
      try {
        t(i.parse(JSON.parse(n)));
      } catch (a) {
        if (r) {
          r(a);
        } else {
          console.error(a);
        }
        i.manager.itemError(e);
      }
    }, n, r);
  },
  parse: function (e) {
    var t = {};
    var n = {};
    function r(e, r) {
      if (void 0 !== t[r]) {
        return t[r];
      }
      var i = e.interleavedBuffers[r];
      var a = function (e, t) {
        if (void 0 !== n[t]) {
          return n[t];
        }
        var r = e.arrayBuffers[t];
        var i = new Uint32Array(r).buffer;
        n[t] = i;
        return i;
      }(e, i.buffer);
      var o = new mi(new Rs[i.type](a), i.stride);
      o.uuid = i.uuid;
      t[r] = o;
      return o;
    }
    var i = e.isInstancedBufferGeometry ? new Ts() : new St();
    var a = e.data.index;
    if (void 0 !== a) {
      var o = new Rs[a.type](a.array);
      i.setIndex(new at(o, 1));
    }
    var s = e.data.attributes;
    for (var l in s) {
      var c = s[l];
      var u = void 0;
      if (c.isInterleavedBufferAttribute) {
        u = new yi(r(e.data, c.data), c.itemSize, c.offset, c.normalized);
      } else {
        var h = new Rs[c.type](c.array);
        u = new (c.isInstancedBufferAttribute ? Es : at)(h, c.itemSize, c.normalized);
      }
      if (void 0 !== c.name) {
        u.name = c.name;
      }
      i.setAttribute(l, u);
    }
    var d = e.data.morphAttributes;
    if (d) {
      for (var p in d) {
        for (var f = d[p], m = [], v = 0, g = f.length; v < g; v++) {
          var y = f[v];
          var x = void 0;
          if (y.isInterleavedBufferAttribute) {
            x = new yi(r(e.data, y.data), y.itemSize, y.offset, y.normalized);
          } else {
            x = new at(new Rs[y.type](y.array), y.itemSize, y.normalized);
          }
          if (void 0 !== y.name) {
            x.name = y.name;
          }
          m.push(x);
        }
        i.morphAttributes[p] = m;
      }
    }
    if (e.data.morphTargetsRelative) {
      i.morphTargetsRelative = !0;
    }
    var b = e.data.groups || e.data.drawcalls || e.data.offsets;
    if (void 0 !== b) {
      for (var _ = 0, w = b.length; _ !== w; ++_) {
        var M = b[_];
        i.addGroup(M.start, M.count, M.materialIndex);
      }
    }
    var S = e.data.boundingSphere;
    if (void 0 !== S) {
      var T = new C();
      if (void 0 !== S.center) {
        T.fromArray(S.center);
      }
      i.boundingSphere = new J(T, S.radius);
    }
    if (e.name) {
      i.name = e.name;
    }
    if (e.userData) {
      i.userData = e.userData;
    }
    return i;
  }
});
var Ls;
var Rs = {
  Int8Array: Int8Array,
  Uint8Array: Uint8Array,
  Uint8ClampedArray: "undefined" !== typeof Uint8ClampedArray ? Uint8ClampedArray : Uint8Array,
  Int16Array: Int16Array,
  Uint16Array: Uint16Array,
  Int32Array: Int32Array,
  Uint32Array: Uint32Array,
  Float32Array: Float32Array,
  Float64Array: Float64Array
};
function Ps(e) {
  if ("undefined" === typeof createImageBitmap) {
    console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported.");
  }
  if ("undefined" === typeof fetch) {
    console.warn("THREE.ImageBitmapLoader: fetch() not supported.");
  }
  Co.call(this, e);
  this.options = {
    premultiplyAlpha: "none"
  };
}
function Cs() {
  this.type = "ShapePath";
  this.color = new Qe();
  this.subPaths = [];
  this.currentPath = null;
}
function Is(e) {
  this.type = "Font";
  this.data = e;
}
function Os(e, t, n, r, i) {
  var a = i.glyphs[e] || i.glyphs["?"];
  if (a) {
    var o;
    var s;
    var l;
    var c;
    var u;
    var h;
    var d;
    var p;
    var f = new Cs();
    if (a.o) {
      for (var m = a._cachedOutline || (a._cachedOutline = a.o.split(" ")), v = 0, g = m.length; v < g;) {
        switch (m[v++]) {
          case "m":
            o = m[v++] * t + n;
            s = m[v++] * t + r;
            f.moveTo(o, s);
            break;
          case "l":
            o = m[v++] * t + n;
            s = m[v++] * t + r;
            f.lineTo(o, s);
            break;
          case "q":
            l = m[v++] * t + n;
            c = m[v++] * t + r;
            u = m[v++] * t + n;
            h = m[v++] * t + r;
            f.quadraticCurveTo(u, h, l, c);
            break;
          case "b":
            l = m[v++] * t + n;
            c = m[v++] * t + r;
            u = m[v++] * t + n;
            h = m[v++] * t + r;
            d = m[v++] * t + n;
            p = m[v++] * t + r;
            f.bezierCurveTo(u, h, d, p, l, c);
        }
      }
    }
    return {
      offsetX: a.ha * t,
      path: f
    };
  }
  console.error("THREE.Font: character \"" + e + "\" does not exists in font family " + i.familyName + ".");
}
function ks(e) {
  Co.call(this, e);
}
Ps.prototype = Object.assign(Object.create(Co.prototype), {
  constructor: Ps,
  isImageBitmapLoader: !0,
  setOptions: function (e) {
    this.options = e;
    return this;
  },
  load: function (e, t, n, r) {
    if (void 0 === e) {
      e = "";
    }
    if (void 0 !== this.path) {
      e = this.path + e;
    }
    e = this.manager.resolveURL(e);
    var i = this;
    var a = Lo.get(e);
    if (void 0 !== a) {
      i.manager.itemStart(e);
      setTimeout(function () {
        if (t) {
          t(a);
        }
        i.manager.itemEnd(e);
      }, 0);
      return a;
    }
    var o = {};
    o.credentials = "anonymous" === this.crossOrigin ? "same-origin" : "include";
    fetch(e, o).then(function (e) {
      return e.blob();
    }).then(function (e) {
      return createImageBitmap(e, i.options);
    }).then(function (n) {
      Lo.add(e, n);
      if (t) {
        t(n);
      }
      i.manager.itemEnd(e);
    }).catch(function (t) {
      if (r) {
        r(t);
      }
      i.manager.itemError(e);
      i.manager.itemEnd(e);
    });
    i.manager.itemStart(e);
  }
});
Object.assign(Cs.prototype, {
  moveTo: function (e, t) {
    this.currentPath = new ss();
    this.subPaths.push(this.currentPath);
    this.currentPath.moveTo(e, t);
    return this;
  },
  lineTo: function (e, t) {
    this.currentPath.lineTo(e, t);
    return this;
  },
  quadraticCurveTo: function (e, t, n, r) {
    this.currentPath.quadraticCurveTo(e, t, n, r);
    return this;
  },
  bezierCurveTo: function (e, t, n, r, i, a) {
    this.currentPath.bezierCurveTo(e, t, n, r, i, a);
    return this;
  },
  splineThru: function (e) {
    this.currentPath.splineThru(e);
    return this;
  },
  toShapes: function (e, t) {
    function n(e) {
      for (var t = [], n = 0, r = e.length; n < r; n++) {
        var i = e[n];
        var a = new ls();
        a.curves = i.curves;
        t.push(a);
      }
      return t;
    }
    function r(e, t) {
      for (var n = t.length, r = !1, i = n - 1, a = 0; a < n; i = a++) {
        var o = t[i];
        var s = t[a];
        var l = s.x - o.x;
        var c = s.y - o.y;
        if (Math.abs(c) > Number.EPSILON) {
          if (c < 0) {
            o = t[a];
            l = -l;
            s = t[i];
            c = -c;
          }
          if (e.y < o.y || e.y > s.y) {
            continue;
          }
          if (e.y === o.y) {
            if (e.x === o.x) {
              return !0;
            }
          } else {
            var u = c * (e.x - o.x) - l * (e.y - o.y);
            if (0 === u) {
              return !0;
            }
            if (u < 0) {
              continue;
            }
            r = !r;
          }
        } else {
          if (e.y !== o.y) {
            continue;
          }
          if (s.x <= e.x && e.x <= o.x || o.x <= e.x && e.x <= s.x) {
            return !0;
          }
        }
      }
      return r;
    }
    var i;
    var a;
    var o;
    var s = Wa.isClockWise;
    var l = this.subPaths;
    if (0 === l.length) {
      return [];
    }
    if (!0 === t) {
      return n(l);
    }
    var c = [];
    if (1 === l.length) {
      a = l[0];
      (o = new ls()).curves = a.curves;
      c.push(o);
      return c;
    }
    var u = !s(l[0].getPoints());
    u = e ? !u : u;
    var h;
    var d;
    var p = [];
    var f = [];
    var m = [];
    var v = 0;
    f[v] = void 0;
    m[v] = [];
    for (var g = 0, y = l.length; g < y; g++) {
      i = s(h = (a = l[g]).getPoints());
      if (i = e ? !i : i) {
        if (!u && f[v]) {
          v++;
        }
        f[v] = {
          s: new ls(),
          p: h
        };
        f[v].s.curves = a.curves;
        if (u) {
          v++;
        }
        m[v] = [];
      } else {
        m[v].push({
          h: a,
          p: h[0]
        });
      }
    }
    if (!f[0]) {
      return n(l);
    }
    if (f.length > 1) {
      for (var x = !1, b = [], _ = 0, w = f.length; _ < w; _++) {
        p[_] = [];
      }
      for (var M = 0, S = f.length; M < S; M++) {
        for (var T = m[M], E = 0; E < T.length; E++) {
          for (var A = T[E], L = !0, R = 0; R < f.length; R++) {
            if (r(A.p, f[R].p)) {
              if (M !== R) {
                b.push({
                  froms: M,
                  tos: R,
                  hole: E
                });
              }
              if (L) {
                L = !1;
                p[R].push(A);
              } else {
                x = !0;
              }
            }
          }
          if (L) {
            p[M].push(A);
          }
        }
      }
      if (b.length > 0) {
        if (!x) {
          m = p;
        }
      }
    }
    for (var P = 0, C = f.length; P < C; P++) {
      o = f[P].s;
      c.push(o);
      for (var I = 0, O = (d = m[P]).length; I < O; I++) {
        o.holes.push(d[I].h);
      }
    }
    return c;
  }
});
Object.assign(Is.prototype, {
  isFont: !0,
  generateShapes: function (e, t) {
    if (void 0 === t) {
      t = 100;
    }
    for (var n = [], r = function (e, t, n) {
        for (var r = Array.from ? Array.from(e) : String(e).split(""), i = t / n.resolution, a = (n.boundingBox.yMax - n.boundingBox.yMin + n.underlineThickness) * i, o = [], s = 0, l = 0, c = 0; c < r.length; c++) {
          var u = r[c];
          if ("\n" === u) {
            s = 0;
            l -= a;
          } else {
            var h = Os(u, i, s, l, n);
            s += h.offsetX;
            o.push(h.path);
          }
        }
        return o;
      }(e, t, this.data), i = 0, a = r.length; i < a; i++) {
      Array.prototype.push.apply(n, r[i].toShapes());
    }
    return n;
  }
});
ks.prototype = Object.assign(Object.create(Co.prototype), {
  constructor: ks,
  load: function (e, t, n, r) {
    var i = this;
    var a = new Oo(this.manager);
    a.setPath(this.path);
    a.setRequestHeader(this.requestHeader);
    a.setWithCredentials(i.withCredentials);
    a.load(e, function (e) {
      var n;
      try {
        n = JSON.parse(e);
      } catch (a) {
        console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead.");
        n = JSON.parse(e.substring(65, e.length - 2));
      }
      var r = i.parse(n);
      if (t) {
        t(r);
      }
    }, n, r);
  },
  parse: function (e) {
    return new Is(e);
  }
});
var Ns = function () {
  if (void 0 === Ls) {
    Ls = new (window.AudioContext || window.webkitAudioContext)();
  }
  return Ls;
};
function Ds(e) {
  Co.call(this, e);
}
function Us(e, t, n) {
  ws.call(this, void 0, n);
  var r = new Qe().set(e);
  var i = new Qe().set(t);
  var a = new C(r.r, r.g, r.b);
  var o = new C(i.r, i.g, i.b);
  var s = Math.sqrt(Math.PI);
  var l = s * Math.sqrt(.75);
  this.sh.coefficients[0].copy(a).add(o).multiplyScalar(s);
  this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(l);
}
function Bs(e, t) {
  ws.call(this, void 0, t);
  var n = new Qe().set(e);
  this.sh.coefficients[0].set(n.r, n.g, n.b).multiplyScalar(2 * Math.sqrt(Math.PI));
}
Ds.prototype = Object.assign(Object.create(Co.prototype), {
  constructor: Ds,
  load: function (e, t, n, r) {
    var i = this;
    var a = new Oo(i.manager);
    a.setResponseType("arraybuffer");
    a.setPath(i.path);
    a.setRequestHeader(i.requestHeader);
    a.setWithCredentials(i.withCredentials);
    a.load(e, function (n) {
      try {
        var a = n.slice(0);
        Ns().decodeAudioData(a, function (e) {
          t(e);
        });
      } catch (o) {
        if (r) {
          r(o);
        } else {
          console.error(o);
        }
        i.manager.itemError(e);
      }
    }, n, r);
  }
});
Us.prototype = Object.assign(Object.create(ws.prototype), {
  constructor: Us,
  isHemisphereLightProbe: !0,
  copy: function (e) {
    ws.prototype.copy.call(this, e);
    return this;
  },
  toJSON: function (e) {
    return ws.prototype.toJSON.call(this, e);
  }
});
Bs.prototype = Object.assign(Object.create(ws.prototype), {
  constructor: Bs,
  isAmbientLightProbe: !0,
  copy: function (e) {
    ws.prototype.copy.call(this, e);
    return this;
  },
  toJSON: function (e) {
    return ws.prototype.toJSON.call(this, e);
  }
});
var zs = new ae();
var Fs = new ae();
Object.assign(function () {
  this.type = "StereoCamera";
  this.aspect = 1;
  this.eyeSep = .064;
  this.cameraL = new Kt();
  this.cameraL.layers.enable(1);
  this.cameraL.matrixAutoUpdate = !1;
  this.cameraR = new Kt();
  this.cameraR.layers.enable(2);
  this.cameraR.matrixAutoUpdate = !1;
  this._cache = {
    focus: null,
    fov: null,
    aspect: null,
    near: null,
    far: null,
    zoom: null,
    eyeSep: null
  };
}.prototype, {
  update: function (e) {
    var t = this._cache;
    if (t.focus !== e.focus || t.fov !== e.fov || t.aspect !== e.aspect * this.aspect || t.near !== e.near || t.far !== e.far || t.zoom !== e.zoom || t.eyeSep !== this.eyeSep) {
      t.focus = e.focus;
      t.fov = e.fov;
      t.aspect = e.aspect * this.aspect;
      t.near = e.near;
      t.far = e.far;
      t.zoom = e.zoom;
      t.eyeSep = this.eyeSep;
      var n;
      var r;
      var i = e.projectionMatrix.clone();
      var a = t.eyeSep / 2;
      var o = a * t.near / t.focus;
      var s = t.near * Math.tan(_.DEG2RAD * t.fov * .5) / t.zoom;
      Fs.elements[12] = -a;
      zs.elements[12] = a;
      n = -s * t.aspect + o;
      r = s * t.aspect + o;
      i.elements[0] = 2 * t.near / (r - n);
      i.elements[8] = (r + n) / (r - n);
      this.cameraL.projectionMatrix.copy(i);
      n = -s * t.aspect - o;
      r = s * t.aspect - o;
      i.elements[0] = 2 * t.near / (r - n);
      i.elements[8] = (r + n) / (r - n);
      this.cameraR.projectionMatrix.copy(i);
    }
    this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Fs);
    this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(zs);
  }
});
var Hs = function (e) {
  Object(l.a)(n, e);
  var t = Object(c.a)(n);
  function n(e) {
    var r;
    Object(u.a)(this, n);
    (r = t.call(this)).type = "Audio";
    r.listener = e;
    r.context = e.context;
    r.gain = r.context.createGain();
    r.gain.connect(e.getInput());
    r.autoplay = !1;
    r.buffer = null;
    r.detune = 0;
    r.loop = !1;
    r.loopStart = 0;
    r.loopEnd = 0;
    r.offset = 0;
    r.duration = void 0;
    r.playbackRate = 1;
    r.isPlaying = !1;
    r.hasPlaybackControl = !0;
    r.source = null;
    r.sourceType = "empty";
    r._startedAt = 0;
    r._progress = 0;
    r._connected = !1;
    r.filters = [];
    return r;
  }
  Object(h.a)(n, [{
    key: "getOutput",
    value: function () {
      return this.gain;
    }
  }, {
    key: "setNodeSource",
    value: function (e) {
      this.hasPlaybackControl = !1;
      this.sourceType = "audioNode";
      this.source = e;
      this.connect();
      return this;
    }
  }, {
    key: "setMediaElementSource",
    value: function (e) {
      this.hasPlaybackControl = !1;
      this.sourceType = "mediaNode";
      this.source = this.context.createMediaElementSource(e);
      this.connect();
      return this;
    }
  }, {
    key: "setMediaStreamSource",
    value: function (e) {
      this.hasPlaybackControl = !1;
      this.sourceType = "mediaStreamNode";
      this.source = this.context.createMediaStreamSource(e);
      this.connect();
      return this;
    }
  }, {
    key: "setBuffer",
    value: function (e) {
      this.buffer = e;
      this.sourceType = "buffer";
      if (this.autoplay) {
        this.play();
      }
      return this;
    }
  }, {
    key: "play",
    value: function (e) {
      if (void 0 === e) {
        e = 0;
      }
      if (!0 !== this.isPlaying) {
        if (!1 !== this.hasPlaybackControl) {
          this._startedAt = this.context.currentTime + e;
          var t = this.context.createBufferSource();
          t.buffer = this.buffer;
          t.loop = this.loop;
          t.loopStart = this.loopStart;
          t.loopEnd = this.loopEnd;
          t.onended = this.onEnded.bind(this);
          t.start(this._startedAt, this._progress + this.offset, this.duration);
          this.isPlaying = !0;
          this.source = t;
          this.setDetune(this.detune);
          this.setPlaybackRate(this.playbackRate);
          return this.connect();
        }
        console.warn("THREE.Audio: this Audio has no playback control.");
      } else {
        console.warn("THREE.Audio: Audio is already playing.");
      }
    }
  }, {
    key: "pause",
    value: function () {
      if (!1 !== this.hasPlaybackControl) {
        if (!0 === this.isPlaying) {
          this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate;
          if (!0 === this.loop) {
            this._progress = this._progress % (this.duration || this.buffer.duration);
          }
          this.source.stop();
          this.source.onended = null;
          this.isPlaying = !1;
        }
        return this;
      }
      console.warn("THREE.Audio: this Audio has no playback control.");
    }
  }, {
    key: "stop",
    value: function () {
      if (!1 !== this.hasPlaybackControl) {
        this._progress = 0;
        this.source.stop();
        this.source.onended = null;
        this.isPlaying = !1;
        return this;
      }
      console.warn("THREE.Audio: this Audio has no playback control.");
    }
  }, {
    key: "connect",
    value: function () {
      if (this.filters.length > 0) {
        this.source.connect(this.filters[0]);
        for (var e = 1, t = this.filters.length; e < t; e++) {
          this.filters[e - 1].connect(this.filters[e]);
        }
        this.filters[this.filters.length - 1].connect(this.getOutput());
      } else {
        this.source.connect(this.getOutput());
      }
      this._connected = !0;
      return this;
    }
  }, {
    key: "disconnect",
    value: function () {
      if (this.filters.length > 0) {
        this.source.disconnect(this.filters[0]);
        for (var e = 1, t = this.filters.length; e < t; e++) {
          this.filters[e - 1].disconnect(this.filters[e]);
        }
        this.filters[this.filters.length - 1].disconnect(this.getOutput());
      } else {
        this.source.disconnect(this.getOutput());
      }
      this._connected = !1;
      return this;
    }
  }, {
    key: "getFilters",
    value: function () {
      return this.filters;
    }
  }, {
    key: "setFilters",
    value: function (e) {
      if (!e) {
        e = [];
      }
      if (!0 === this._connected) {
        this.disconnect();
        this.filters = e.slice();
        this.connect();
      } else {
        this.filters = e.slice();
      }
      return this;
    }
  }, {
    key: "setDetune",
    value: function (e) {
      this.detune = e;
      if (void 0 !== this.source.detune) {
        if (!0 === this.isPlaying) {
          this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, .01);
        }
        return this;
      }
    }
  }, {
    key: "getDetune",
    value: function () {
      return this.detune;
    }
  }, {
    key: "getFilter",
    value: function () {
      return this.getFilters()[0];
    }
  }, {
    key: "setFilter",
    value: function (e) {
      return this.setFilters(e ? [e] : []);
    }
  }, {
    key: "setPlaybackRate",
    value: function (e) {
      if (!1 !== this.hasPlaybackControl) {
        this.playbackRate = e;
        if (!0 === this.isPlaying) {
          this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, .01);
        }
        return this;
      }
      console.warn("THREE.Audio: this Audio has no playback control.");
    }
  }, {
    key: "getPlaybackRate",
    value: function () {
      return this.playbackRate;
    }
  }, {
    key: "onEnded",
    value: function () {
      this.isPlaying = !1;
    }
  }, {
    key: "getLoop",
    value: function () {
      return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop;
    }
  }, {
    key: "setLoop",
    value: function (e) {
      if (!1 !== this.hasPlaybackControl) {
        this.loop = e;
        if (!0 === this.isPlaying) {
          this.source.loop = this.loop;
        }
        return this;
      }
      console.warn("THREE.Audio: this Audio has no playback control.");
    }
  }, {
    key: "setLoopStart",
    value: function (e) {
      this.loopStart = e;
      return this;
    }
  }, {
    key: "setLoopEnd",
    value: function (e) {
      this.loopEnd = e;
      return this;
    }
  }, {
    key: "getVolume",
    value: function () {
      return this.gain.gain.value;
    }
  }, {
    key: "setVolume",
    value: function (e) {
      this.gain.gain.setTargetAtTime(e, this.context.currentTime, .01);
      return this;
    }
  }]);
  return n;
}(Pe);
var Gs = function () {
  function e(t, n) {
    Object(u.a)(this, e);
    this.analyser = t.context.createAnalyser();
    this.analyser.fftSize = void 0 !== n ? n : 2048;
    this.data = new Uint8Array(this.analyser.frequencyBinCount);
    t.getOutput().connect(this.analyser);
  }
  Object(h.a)(e, [{
    key: "getFrequencyData",
    value: function () {
      this.analyser.getByteFrequencyData(this.data);
      return this.data;
    }
  }, {
    key: "getAverageFrequency",
    value: function () {
      for (var e = 0, t = this.getFrequencyData(), n = 0; n < t.length; n++) {
        e += t[n];
      }
      return e / t.length;
    }
  }]);
  return e;
}();
function js(e, t, n) {
  var r;
  var i;
  var a;
  switch (this.binding = e, this.valueSize = n, t) {
    case "quaternion":
      r = this._slerp;
      i = this._slerpAdditive;
      a = this._setAdditiveIdentityQuaternion;
      this.buffer = new Float64Array(6 * n);
      this._workIndex = 5;
      break;
    case "string":
    case "bool":
      r = this._select;
      i = this._select;
      a = this._setAdditiveIdentityOther;
      this.buffer = new Array(5 * n);
      break;
    default:
      r = this._lerp;
      i = this._lerpAdditive;
      a = this._setAdditiveIdentityNumeric;
      this.buffer = new Float64Array(5 * n);
  }
  this._mixBufferRegion = r;
  this._mixBufferRegionAdditive = i;
  this._setIdentity = a;
  this._origIndex = 3;
  this._addIndex = 4;
  this.cumulativeWeight = 0;
  this.cumulativeWeightAdditive = 0;
  this.useCount = 0;
  this.referenceCount = 0;
}
Object.assign(js.prototype, {
  accumulate: function (e, t) {
    var n = this.buffer;
    var r = this.valueSize;
    var i = e * r + r;
    var a = this.cumulativeWeight;
    if (0 === a) {
      for (var o = 0; o !== r; ++o) {
        n[i + o] = n[o];
      }
      a = t;
    } else {
      var s = t / (a += t);
      this._mixBufferRegion(n, i, 0, s, r);
    }
    this.cumulativeWeight = a;
  },
  accumulateAdditive: function (e) {
    var t = this.buffer;
    var n = this.valueSize;
    var r = n * this._addIndex;
    if (0 === this.cumulativeWeightAdditive) {
      this._setIdentity();
    }
    this._mixBufferRegionAdditive(t, r, 0, e, n);
    this.cumulativeWeightAdditive += e;
  },
  apply: function (e) {
    var t = this.valueSize;
    var n = this.buffer;
    var r = e * t + t;
    var i = this.cumulativeWeight;
    var a = this.cumulativeWeightAdditive;
    var o = this.binding;
    this.cumulativeWeight = 0;
    this.cumulativeWeightAdditive = 0;
    if (i < 1) {
      var s = t * this._origIndex;
      this._mixBufferRegion(n, r, s, 1 - i, t);
    }
    if (a > 0) {
      this._mixBufferRegionAdditive(n, r, this._addIndex * t, 1, t);
    }
    for (var l = t, c = t + t; l !== c; ++l) {
      if (n[l] !== n[l + t]) {
        o.setValue(n, r);
        break;
      }
    }
  },
  saveOriginalState: function () {
    var e = this.binding;
    var t = this.buffer;
    var n = this.valueSize;
    var r = n * this._origIndex;
    e.getValue(t, r);
    for (var i = n, a = r; i !== a; ++i) {
      t[i] = t[r + i % n];
    }
    this._setIdentity();
    this.cumulativeWeight = 0;
    this.cumulativeWeightAdditive = 0;
  },
  restoreOriginalState: function () {
    var e = 3 * this.valueSize;
    this.binding.setValue(this.buffer, e);
  },
  _setAdditiveIdentityNumeric: function () {
    for (var e = this._addIndex * this.valueSize, t = e + this.valueSize, n = e; n < t; n++) {
      this.buffer[n] = 0;
    }
  },
  _setAdditiveIdentityQuaternion: function () {
    this._setAdditiveIdentityNumeric();
    this.buffer[this._addIndex * this.valueSize + 3] = 1;
  },
  _setAdditiveIdentityOther: function () {
    for (var e = this._origIndex * this.valueSize, t = this._addIndex * this.valueSize, n = 0; n < this.valueSize; n++) {
      this.buffer[t + n] = this.buffer[e + n];
    }
  },
  _select: function (e, t, n, r, i) {
    if (r >= .5) {
      for (var a = 0; a !== i; ++a) {
        e[t + a] = e[n + a];
      }
    }
  },
  _slerp: function (e, t, n, r) {
    P.slerpFlat(e, t, e, t, e, n, r);
  },
  _slerpAdditive: function (e, t, n, r, i) {
    var a = this._workIndex * i;
    P.multiplyQuaternionsFlat(e, a, e, t, e, n);
    P.slerpFlat(e, t, e, t, e, a, r);
  },
  _lerp: function (e, t, n, r, i) {
    for (var a = 1 - r, o = 0; o !== i; ++o) {
      var s = t + o;
      e[s] = e[s] * a + e[n + o] * r;
    }
  },
  _lerpAdditive: function (e, t, n, r, i) {
    for (var a = 0; a !== i; ++a) {
      var o = t + a;
      e[o] = e[o] + e[n + a] * r;
    }
  }
});
var Vs = new RegExp("[\\[\\]\\.:\\/]", "g");
var Ws = "[^" + "\\[\\]\\.:\\/".replace("\\.", "") + "]";
var qs = /((?:WC+[\/:])*)/.source.replace("WC", "[^\\[\\]\\.:\\/]");
var Xs = /(WCOD+)?/.source.replace("WCOD", Ws);
var Ys = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", "[^\\[\\]\\.:\\/]");
var Zs = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", "[^\\[\\]\\.:\\/]");
var Js = new RegExp("^" + qs + Xs + Ys + Zs + "$");
var Ks = ["material", "materials", "bones"];
function Qs(e, t, n) {
  var r = n || $s.parseTrackName(t);
  this._targetGroup = e;
  this._bindings = e.subscribe_(t, r);
}
function $s(e, t, n) {
  this.path = t;
  this.parsedPath = n || $s.parseTrackName(t);
  this.node = $s.findNode(e, this.parsedPath.nodeName) || e;
  this.rootNode = e;
}
Object.assign(Qs.prototype, {
  getValue: function (e, t) {
    this.bind();
    var n = this._targetGroup.nCachedObjects_;
    var r = this._bindings[n];
    if (void 0 !== r) {
      r.getValue(e, t);
    }
  },
  setValue: function (e, t) {
    for (var n = this._bindings, r = this._targetGroup.nCachedObjects_, i = n.length; r !== i; ++r) {
      n[r].setValue(e, t);
    }
  },
  bind: function () {
    for (var e = this._bindings, t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) {
      e[t].bind();
    }
  },
  unbind: function () {
    for (var e = this._bindings, t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) {
      e[t].unbind();
    }
  }
});
Object.assign($s, {
  Composite: Qs,
  create: function (e, t, n) {
    return e && e.isAnimationObjectGroup ? new $s.Composite(e, t, n) : new $s(e, t, n);
  },
  sanitizeNodeName: function (e) {
    return e.replace(/\s/g, "_").replace(Vs, "");
  },
  parseTrackName: function (e) {
    var t = Js.exec(e);
    if (!t) {
      throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    }
    var n = {
      nodeName: t[2],
      objectName: t[3],
      objectIndex: t[4],
      propertyName: t[5],
      propertyIndex: t[6]
    };
    var r = n.nodeName && n.nodeName.lastIndexOf(".");
    if (void 0 !== r && -1 !== r) {
      var i = n.nodeName.substring(r + 1);
      if (-1 !== Ks.indexOf(i)) {
        n.nodeName = n.nodeName.substring(0, r);
        n.objectName = i;
      }
    }
    if (null === n.propertyName || 0 === n.propertyName.length) {
      throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
    }
    return n;
  },
  findNode: function (e, t) {
    if (!t || "" === t || "." === t || -1 === t || t === e.name || t === e.uuid) {
      return e;
    }
    if (e.skeleton) {
      var n = e.skeleton.getBoneByName(t);
      if (void 0 !== n) {
        return n;
      }
    }
    if (e.children) {
      var r = function e(n) {
        for (var r = 0; r < n.length; r++) {
          var i = n[r];
          if (i.name === t || i.uuid === t) {
            return i;
          }
          var a = e(i.children);
          if (a) {
            return a;
          }
        }
        return null;
      }(e.children);
      if (r) {
        return r;
      }
    }
    return null;
  }
});
Object.assign($s.prototype, {
  _getValue_unavailable: function () {},
  _setValue_unavailable: function () {},
  BindingType: {
    Direct: 0,
    EntireArray: 1,
    ArrayElement: 2,
    HasFromToArray: 3
  },
  Versioning: {
    None: 0,
    NeedsUpdate: 1,
    MatrixWorldNeedsUpdate: 2
  },
  GetterByBindingType: [function (e, t) {
    e[t] = this.node[this.propertyName];
  }, function (e, t) {
    for (var n = this.resolvedProperty, r = 0, i = n.length; r !== i; ++r) {
      e[t++] = n[r];
    }
  }, function (e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }, function (e, t) {
    this.resolvedProperty.toArray(e, t);
  }],
  SetterByBindingTypeAndVersioning: [[function (e, t) {
    this.targetObject[this.propertyName] = e[t];
  }, function (e, t) {
    this.targetObject[this.propertyName] = e[t];
    this.targetObject.needsUpdate = !0;
  }, function (e, t) {
    this.targetObject[this.propertyName] = e[t];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }], [function (e, t) {
    for (var n = this.resolvedProperty, r = 0, i = n.length; r !== i; ++r) {
      n[r] = e[t++];
    }
  }, function (e, t) {
    for (var n = this.resolvedProperty, r = 0, i = n.length; r !== i; ++r) {
      n[r] = e[t++];
    }
    this.targetObject.needsUpdate = !0;
  }, function (e, t) {
    for (var n = this.resolvedProperty, r = 0, i = n.length; r !== i; ++r) {
      n[r] = e[t++];
    }
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }], [function (e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }, function (e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
    this.targetObject.needsUpdate = !0;
  }, function (e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }], [function (e, t) {
    this.resolvedProperty.fromArray(e, t);
  }, function (e, t) {
    this.resolvedProperty.fromArray(e, t);
    this.targetObject.needsUpdate = !0;
  }, function (e, t) {
    this.resolvedProperty.fromArray(e, t);
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }]],
  getValue: function (e, t) {
    this.bind();
    this.getValue(e, t);
  },
  setValue: function (e, t) {
    this.bind();
    this.setValue(e, t);
  },
  bind: function () {
    var e = this.node;
    var t = this.parsedPath;
    var n = t.objectName;
    var r = t.propertyName;
    var i = t.propertyIndex;
    if (!e) {
      e = $s.findNode(this.rootNode, t.nodeName) || this.rootNode;
      this.node = e;
    }
    this.getValue = this._getValue_unavailable;
    this.setValue = this._setValue_unavailable;
    if (e) {
      if (n) {
        var a = t.objectIndex;
        switch (n) {
          case "materials":
            if (!e.material) {
              return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            }
            if (!e.material.materials) {
              return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            }
            e = e.material.materials;
            break;
          case "bones":
            if (!e.skeleton) {
              return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            }
            e = e.skeleton.bones;
            for (var o = 0; o < e.length; o++) {
              if (e[o].name === a) {
                a = o;
                break;
              }
            }
            break;
          default:
            if (void 0 === e[n]) {
              return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            }
            e = e[n];
        }
        if (void 0 !== a) {
          if (void 0 === e[a]) {
            return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
          }
          e = e[a];
        }
      }
      var s = e[r];
      if (void 0 !== s) {
        var l = this.Versioning.None;
        this.targetObject = e;
        if (void 0 !== e.needsUpdate) {
          l = this.Versioning.NeedsUpdate;
        } else {
          if (void 0 !== e.matrixWorldNeedsUpdate) {
            l = this.Versioning.MatrixWorldNeedsUpdate;
          }
        }
        var c = this.BindingType.Direct;
        if (void 0 !== i) {
          if ("morphTargetInfluences" === r) {
            if (!e.geometry) {
              return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
            }
            if (!e.geometry.isBufferGeometry) {
              return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.", this);
            }
            if (!e.geometry.morphAttributes) {
              return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
            }
            if (void 0 !== e.morphTargetDictionary[i]) {
              i = e.morphTargetDictionary[i];
            }
          }
          c = this.BindingType.ArrayElement;
          this.resolvedProperty = s;
          this.propertyIndex = i;
        } else if (void 0 !== s.fromArray && void 0 !== s.toArray) {
          c = this.BindingType.HasFromToArray;
          this.resolvedProperty = s;
        } else {
          if (Array.isArray(s)) {
            c = this.BindingType.EntireArray;
            this.resolvedProperty = s;
          } else {
            this.propertyName = r;
          }
        }
        this.getValue = this.GetterByBindingType[c];
        this.setValue = this.SetterByBindingTypeAndVersioning[c][l];
      } else {
        var u = t.nodeName;
        console.error("THREE.PropertyBinding: Trying to update property for track: " + u + "." + r + " but it wasn't found.", e);
      }
    } else {
      console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
    }
  },
  unbind: function () {
    this.node = null;
    this.getValue = this._getValue_unbound;
    this.setValue = this._setValue_unbound;
  }
});
Object.assign($s.prototype, {
  _getValue_unbound: $s.prototype.getValue,
  _setValue_unbound: $s.prototype.setValue
});
Object.assign(function () {
  this.uuid = _.generateUUID();
  this._objects = Array.prototype.slice.call(arguments);
  this.nCachedObjects_ = 0;
  var e = {};
  this._indicesByUUID = e;
  for (var t = 0, n = arguments.length; t !== n; ++t) {
    e[arguments[t].uuid] = t;
  }
  this._paths = [];
  this._parsedPaths = [];
  this._bindings = [];
  this._bindingsIndicesByPath = {};
  var r = this;
  this.stats = {
    objects: {
      get total() {
        return r._objects.length;
      },
      get inUse() {
        return this.total - r.nCachedObjects_;
      }
    },
    get bindingsPerObject() {
      return r._bindings.length;
    }
  };
}.prototype, {
  isAnimationObjectGroup: !0,
  add: function () {
    for (var e = this._objects, t = this._indicesByUUID, n = this._paths, r = this._parsedPaths, i = this._bindings, a = i.length, o = void 0, s = e.length, l = this.nCachedObjects_, c = 0, u = arguments.length; c !== u; ++c) {
      var h = arguments[c];
      var d = h.uuid;
      var p = t[d];
      if (void 0 === p) {
        p = s++;
        t[d] = p;
        e.push(h);
        for (var f = 0, m = a; f !== m; ++f) {
          i[f].push(new $s(h, n[f], r[f]));
        }
      } else if (p < l) {
        o = e[p];
        var v = --l;
        var g = e[v];
        t[g.uuid] = p;
        e[p] = g;
        t[d] = v;
        e[v] = h;
        for (var y = 0, x = a; y !== x; ++y) {
          var b = i[y];
          var _ = b[v];
          var w = b[p];
          b[p] = _;
          if (void 0 === w) {
            w = new $s(h, n[y], r[y]);
          }
          b[v] = w;
        }
      } else if (e[p] !== o) {
        console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.");
      }
    }
    this.nCachedObjects_ = l;
  },
  remove: function () {
    for (var e = this._objects, t = this._indicesByUUID, n = this._bindings, r = n.length, i = this.nCachedObjects_, a = 0, o = arguments.length; a !== o; ++a) {
      var s = arguments[a];
      var l = s.uuid;
      var c = t[l];
      if (void 0 !== c && c >= i) {
        var u = i++;
        var h = e[u];
        t[h.uuid] = c;
        e[c] = h;
        t[l] = u;
        e[u] = s;
        for (var d = 0, p = r; d !== p; ++d) {
          var f = n[d];
          var m = f[u];
          var v = f[c];
          f[c] = m;
          f[u] = v;
        }
      }
    }
    this.nCachedObjects_ = i;
  },
  uncache: function () {
    for (var e = this._objects, t = this._indicesByUUID, n = this._bindings, r = n.length, i = this.nCachedObjects_, a = e.length, o = 0, s = arguments.length; o !== s; ++o) {
      var l = arguments[o];
      var c = l.uuid;
      var u = t[c];
      if (void 0 !== u) {
        delete t[c];
        if (u < i) {
          var h = --i;
          var d = e[h];
          var p = --a;
          var f = e[p];
          t[d.uuid] = u;
          e[u] = d;
          t[f.uuid] = h;
          e[h] = f;
          e.pop();
          for (var m = 0, v = r; m !== v; ++m) {
            var g = n[m];
            var y = g[h];
            var x = g[p];
            g[u] = y;
            g[h] = x;
            g.pop();
          }
        } else {
          var b = --a;
          var _ = e[b];
          if (b > 0) {
            t[_.uuid] = u;
          }
          e[u] = _;
          e.pop();
          for (var w = 0, M = r; w !== M; ++w) {
            var S = n[w];
            S[u] = S[b];
            S.pop();
          }
        }
      }
    }
    this.nCachedObjects_ = i;
  },
  subscribe_: function (e, t) {
    var n = this._bindingsIndicesByPath;
    var r = n[e];
    var i = this._bindings;
    if (void 0 !== r) {
      return i[r];
    }
    var a = this._paths;
    var o = this._parsedPaths;
    var s = this._objects;
    var l = s.length;
    var c = this.nCachedObjects_;
    var u = new Array(l);
    r = i.length;
    n[e] = r;
    a.push(e);
    o.push(t);
    i.push(u);
    for (var h = c, d = s.length; h !== d; ++h) {
      var p = s[h];
      u[h] = new $s(p, e, t);
    }
    return u;
  },
  unsubscribe_: function (e) {
    var t = this._bindingsIndicesByPath;
    var n = t[e];
    if (void 0 !== n) {
      var r = this._paths;
      var i = this._parsedPaths;
      var a = this._bindings;
      var o = a.length - 1;
      var s = a[o];
      t[e[o]] = n;
      a[n] = s;
      a.pop();
      i[n] = i[o];
      i.pop();
      r[n] = r[o];
      r.pop();
    }
  }
});
var el = function () {
  function e(t, n, r, i) {
    Object(u.a)(this, e);
    this._mixer = t;
    this._clip = n;
    this._localRoot = r || null;
    this.blendMode = i || n.blendMode;
    for (var a = n.tracks, o = a.length, s = new Array(o), l = {
        endingStart: 2400,
        endingEnd: 2400
      }, c = 0; c !== o; ++c) {
      var h = a[c].createInterpolant(null);
      s[c] = h;
      h.settings = l;
    }
    this._interpolantSettings = l;
    this._interpolants = s;
    this._propertyBindings = new Array(o);
    this._cacheIndex = null;
    this._byClipCacheIndex = null;
    this._timeScaleInterpolant = null;
    this._weightInterpolant = null;
    this.loop = 2201;
    this._loopCount = -1;
    this._startTime = null;
    this.time = 0;
    this.timeScale = 1;
    this._effectiveTimeScale = 1;
    this.weight = 1;
    this._effectiveWeight = 1;
    this.repetitions = 1 / 0;
    this.paused = !1;
    this.enabled = !0;
    this.clampWhenFinished = !1;
    this.zeroSlopeAtStart = !0;
    this.zeroSlopeAtEnd = !0;
  }
  Object(h.a)(e, [{
    key: "play",
    value: function () {
      this._mixer._activateAction(this);
      return this;
    }
  }, {
    key: "stop",
    value: function () {
      this._mixer._deactivateAction(this);
      return this.reset();
    }
  }, {
    key: "reset",
    value: function () {
      this.paused = !1;
      this.enabled = !0;
      this.time = 0;
      this._loopCount = -1;
      this._startTime = null;
      return this.stopFading().stopWarping();
    }
  }, {
    key: "isRunning",
    value: function () {
      return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this);
    }
  }, {
    key: "isScheduled",
    value: function () {
      return this._mixer._isActiveAction(this);
    }
  }, {
    key: "startAt",
    value: function (e) {
      this._startTime = e;
      return this;
    }
  }, {
    key: "setLoop",
    value: function (e, t) {
      this.loop = e;
      this.repetitions = t;
      return this;
    }
  }, {
    key: "setEffectiveWeight",
    value: function (e) {
      this.weight = e;
      this._effectiveWeight = this.enabled ? e : 0;
      return this.stopFading();
    }
  }, {
    key: "getEffectiveWeight",
    value: function () {
      return this._effectiveWeight;
    }
  }, {
    key: "fadeIn",
    value: function (e) {
      return this._scheduleFading(e, 0, 1);
    }
  }, {
    key: "fadeOut",
    value: function (e) {
      return this._scheduleFading(e, 1, 0);
    }
  }, {
    key: "crossFadeFrom",
    value: function (e, t, n) {
      e.fadeOut(t);
      this.fadeIn(t);
      if (n) {
        var r = this._clip.duration;
        var i = e._clip.duration;
        var a = i / r;
        var o = r / i;
        e.warp(1, a, t);
        this.warp(o, 1, t);
      }
      return this;
    }
  }, {
    key: "crossFadeTo",
    value: function (e, t, n) {
      return e.crossFadeFrom(this, t, n);
    }
  }, {
    key: "stopFading",
    value: function () {
      var e = this._weightInterpolant;
      if (null !== e) {
        this._weightInterpolant = null;
        this._mixer._takeBackControlInterpolant(e);
      }
      return this;
    }
  }, {
    key: "setEffectiveTimeScale",
    value: function (e) {
      this.timeScale = e;
      this._effectiveTimeScale = this.paused ? 0 : e;
      return this.stopWarping();
    }
  }, {
    key: "getEffectiveTimeScale",
    value: function () {
      return this._effectiveTimeScale;
    }
  }, {
    key: "setDuration",
    value: function (e) {
      this.timeScale = this._clip.duration / e;
      return this.stopWarping();
    }
  }, {
    key: "syncWith",
    value: function (e) {
      this.time = e.time;
      this.timeScale = e.timeScale;
      return this.stopWarping();
    }
  }, {
    key: "halt",
    value: function (e) {
      return this.warp(this._effectiveTimeScale, 0, e);
    }
  }, {
    key: "warp",
    value: function (e, t, n) {
      var r = this._mixer;
      var i = r.time;
      var a = this.timeScale;
      var o = this._timeScaleInterpolant;
      if (null === o) {
        o = r._lendControlInterpolant();
        this._timeScaleInterpolant = o;
      }
      var s = o.parameterPositions;
      var l = o.sampleValues;
      s[0] = i;
      s[1] = i + n;
      l[0] = e / a;
      l[1] = t / a;
      return this;
    }
  }, {
    key: "stopWarping",
    value: function () {
      var e = this._timeScaleInterpolant;
      if (null !== e) {
        this._timeScaleInterpolant = null;
        this._mixer._takeBackControlInterpolant(e);
      }
      return this;
    }
  }, {
    key: "getMixer",
    value: function () {
      return this._mixer;
    }
  }, {
    key: "getClip",
    value: function () {
      return this._clip;
    }
  }, {
    key: "getRoot",
    value: function () {
      return this._localRoot || this._mixer._root;
    }
  }, {
    key: "_update",
    value: function (e, t, n, r) {
      if (this.enabled) {
        var i = this._startTime;
        if (null !== i) {
          var a = (e - i) * n;
          if (a < 0 || 0 === n) {
            return;
          }
          this._startTime = null;
          t = n * a;
        }
        t *= this._updateTimeScale(e);
        var o = this._updateTime(t);
        var s = this._updateWeight(e);
        if (s > 0) {
          var l = this._interpolants;
          var c = this._propertyBindings;
          switch (this.blendMode) {
            case 2501:
              for (var u = 0, h = l.length; u !== h; ++u) {
                l[u].evaluate(o);
                c[u].accumulateAdditive(s);
              }
              break;
            case 2500:
            default:
              for (var d = 0, p = l.length; d !== p; ++d) {
                l[d].evaluate(o);
                c[d].accumulate(r, s);
              }
          }
        }
      } else {
        this._updateWeight(e);
      }
    }
  }, {
    key: "_updateWeight",
    value: function (e) {
      var t = 0;
      if (this.enabled) {
        t = this.weight;
        var n = this._weightInterpolant;
        if (null !== n) {
          var r = n.evaluate(e)[0];
          t *= r;
          if (e > n.parameterPositions[1]) {
            this.stopFading();
            if (0 === r) {
              this.enabled = !1;
            }
          }
        }
      }
      this._effectiveWeight = t;
      return t;
    }
  }, {
    key: "_updateTimeScale",
    value: function (e) {
      var t = 0;
      if (!this.paused) {
        t = this.timeScale;
        var n = this._timeScaleInterpolant;
        if (null !== n) {
          t *= n.evaluate(e)[0];
          if (e > n.parameterPositions[1]) {
            this.stopWarping();
            if (0 === t) {
              this.paused = !0;
            } else {
              this.timeScale = t;
            }
          }
        }
      }
      this._effectiveTimeScale = t;
      return t;
    }
  }, {
    key: "_updateTime",
    value: function (e) {
      var t = this._clip.duration;
      var n = this.loop;
      var r = this.time + e;
      var i = this._loopCount;
      var a = 2202 === n;
      if (0 === e) {
        return -1 === i ? r : a && 1 === (1 & i) ? t - r : r;
      }
      if (2200 === n) {
        if (-1 === i) {
          this._loopCount = 0;
          this._setEndings(!0, !0, !1);
        }
        e: {
          if (r >= t) {
            r = t;
          } else {
            if (!(r < 0)) {
              this.time = r;
              break e;
            }
            r = 0;
          }
          if (this.clampWhenFinished) {
            this.paused = !0;
          } else {
            this.enabled = !1;
          }
          this.time = r;
          this._mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: e < 0 ? -1 : 1
          });
        }
      } else {
        if (-1 === i) {
          if (e >= 0) {
            i = 0;
            this._setEndings(!0, 0 === this.repetitions, a);
          } else {
            this._setEndings(0 === this.repetitions, !0, a);
          }
        }
        if (r >= t || r < 0) {
          var o = Math.floor(r / t);
          r -= t * o;
          i += Math.abs(o);
          var s = this.repetitions - i;
          if (s <= 0) {
            if (this.clampWhenFinished) {
              this.paused = !0;
            } else {
              this.enabled = !1;
            }
            r = e > 0 ? t : 0;
            this.time = r;
            this._mixer.dispatchEvent({
              type: "finished",
              action: this,
              direction: e > 0 ? 1 : -1
            });
          } else {
            if (1 === s) {
              var l = e < 0;
              this._setEndings(l, !l, a);
            } else {
              this._setEndings(!1, !1, a);
            }
            this._loopCount = i;
            this.time = r;
            this._mixer.dispatchEvent({
              type: "loop",
              action: this,
              loopDelta: o
            });
          }
        } else {
          this.time = r;
        }
        if (a && 1 === (1 & i)) {
          return t - r;
        }
      }
      return r;
    }
  }, {
    key: "_setEndings",
    value: function (e, t, n) {
      var r = this._interpolantSettings;
      if (n) {
        r.endingStart = 2401;
        r.endingEnd = 2401;
      } else {
        r.endingStart = e ? this.zeroSlopeAtStart ? 2401 : 2400 : 2402;
        r.endingEnd = t ? this.zeroSlopeAtEnd ? 2401 : 2400 : 2402;
      }
    }
  }, {
    key: "_scheduleFading",
    value: function (e, t, n) {
      var r = this._mixer;
      var i = r.time;
      var a = this._weightInterpolant;
      if (null === a) {
        a = r._lendControlInterpolant();
        this._weightInterpolant = a;
      }
      var o = a.parameterPositions;
      var s = a.sampleValues;
      o[0] = i;
      s[0] = t;
      o[1] = i + e;
      s[1] = n;
      return this;
    }
  }]);
  return e;
}();
function tl(e) {
  this._root = e;
  this._initMemoryManager();
  this._accuIndex = 0;
  this.time = 0;
  this.timeScale = 1;
}
tl.prototype = Object.assign(Object.create(v.prototype), {
  constructor: tl,
  _bindAction: function (e, t) {
    var n = e._localRoot || this._root;
    var r = e._clip.tracks;
    var i = r.length;
    var a = e._propertyBindings;
    var o = e._interpolants;
    var s = n.uuid;
    var l = this._bindingsByRootAndName;
    var c = l[s];
    if (void 0 === c) {
      c = {};
      l[s] = c;
    }
    for (var u = 0; u !== i; ++u) {
      var h = r[u];
      var d = h.name;
      var p = c[d];
      if (void 0 !== p) {
        a[u] = p;
      } else {
        if (void 0 !== (p = a[u])) {
          if (null === p._cacheIndex) {
            ++p.referenceCount;
            this._addInactiveBinding(p, s, d);
          }
          continue;
        }
        var f = t && t._propertyBindings[u].binding.parsedPath;
        ++(p = new js($s.create(n, d, f), h.ValueTypeName, h.getValueSize())).referenceCount;
        this._addInactiveBinding(p, s, d);
        a[u] = p;
      }
      o[u].resultBuffer = p.buffer;
    }
  },
  _activateAction: function (e) {
    if (!this._isActiveAction(e)) {
      if (null === e._cacheIndex) {
        var t = (e._localRoot || this._root).uuid;
        var n = e._clip.uuid;
        var r = this._actionsByClip[n];
        this._bindAction(e, r && r.knownActions[0]);
        this._addInactiveAction(e, n, t);
      }
      for (var i = e._propertyBindings, a = 0, o = i.length; a !== o; ++a) {
        var s = i[a];
        if (0 === s.useCount++) {
          this._lendBinding(s);
          s.saveOriginalState();
        }
      }
      this._lendAction(e);
    }
  },
  _deactivateAction: function (e) {
    if (this._isActiveAction(e)) {
      for (var t = e._propertyBindings, n = 0, r = t.length; n !== r; ++n) {
        var i = t[n];
        if (0 === --i.useCount) {
          i.restoreOriginalState();
          this._takeBackBinding(i);
        }
      }
      this._takeBackAction(e);
    }
  },
  _initMemoryManager: function () {
    this._actions = [];
    this._nActiveActions = 0;
    this._actionsByClip = {};
    this._bindings = [];
    this._nActiveBindings = 0;
    this._bindingsByRootAndName = {};
    this._controlInterpolants = [];
    this._nActiveControlInterpolants = 0;
    var e = this;
    this.stats = {
      actions: {
        get total() {
          return e._actions.length;
        },
        get inUse() {
          return e._nActiveActions;
        }
      },
      bindings: {
        get total() {
          return e._bindings.length;
        },
        get inUse() {
          return e._nActiveBindings;
        }
      },
      controlInterpolants: {
        get total() {
          return e._controlInterpolants.length;
        },
        get inUse() {
          return e._nActiveControlInterpolants;
        }
      }
    };
  },
  _isActiveAction: function (e) {
    var t = e._cacheIndex;
    return null !== t && t < this._nActiveActions;
  },
  _addInactiveAction: function (e, t, n) {
    var r = this._actions;
    var i = this._actionsByClip;
    var a = i[t];
    if (void 0 === a) {
      a = {
        knownActions: [e],
        actionByRoot: {}
      };
      e._byClipCacheIndex = 0;
      i[t] = a;
    } else {
      var o = a.knownActions;
      e._byClipCacheIndex = o.length;
      o.push(e);
    }
    e._cacheIndex = r.length;
    r.push(e);
    a.actionByRoot[n] = e;
  },
  _removeInactiveAction: function (e) {
    var t = this._actions;
    var n = t[t.length - 1];
    var r = e._cacheIndex;
    n._cacheIndex = r;
    t[r] = n;
    t.pop();
    e._cacheIndex = null;
    var i = e._clip.uuid;
    var a = this._actionsByClip;
    var o = a[i];
    var s = o.knownActions;
    var l = s[s.length - 1];
    var c = e._byClipCacheIndex;
    l._byClipCacheIndex = c;
    s[c] = l;
    s.pop();
    e._byClipCacheIndex = null;
    delete o.actionByRoot[(e._localRoot || this._root).uuid];
    if (0 === s.length) {
      delete a[i];
    }
    this._removeInactiveBindingsForAction(e);
  },
  _removeInactiveBindingsForAction: function (e) {
    for (var t = e._propertyBindings, n = 0, r = t.length; n !== r; ++n) {
      var i = t[n];
      if (0 === --i.referenceCount) {
        this._removeInactiveBinding(i);
      }
    }
  },
  _lendAction: function (e) {
    var t = this._actions;
    var n = e._cacheIndex;
    var r = this._nActiveActions++;
    var i = t[r];
    e._cacheIndex = r;
    t[r] = e;
    i._cacheIndex = n;
    t[n] = i;
  },
  _takeBackAction: function (e) {
    var t = this._actions;
    var n = e._cacheIndex;
    var r = --this._nActiveActions;
    var i = t[r];
    e._cacheIndex = r;
    t[r] = e;
    i._cacheIndex = n;
    t[n] = i;
  },
  _addInactiveBinding: function (e, t, n) {
    var r = this._bindingsByRootAndName;
    var i = this._bindings;
    var a = r[t];
    if (void 0 === a) {
      a = {};
      r[t] = a;
    }
    a[n] = e;
    e._cacheIndex = i.length;
    i.push(e);
  },
  _removeInactiveBinding: function (e) {
    var t = this._bindings;
    var n = e.binding;
    var r = n.rootNode.uuid;
    var i = n.path;
    var a = this._bindingsByRootAndName;
    var o = a[r];
    var s = t[t.length - 1];
    var l = e._cacheIndex;
    s._cacheIndex = l;
    t[l] = s;
    t.pop();
    delete o[i];
    if (0 === Object.keys(o).length) {
      delete a[r];
    }
  },
  _lendBinding: function (e) {
    var t = this._bindings;
    var n = e._cacheIndex;
    var r = this._nActiveBindings++;
    var i = t[r];
    e._cacheIndex = r;
    t[r] = e;
    i._cacheIndex = n;
    t[n] = i;
  },
  _takeBackBinding: function (e) {
    var t = this._bindings;
    var n = e._cacheIndex;
    var r = --this._nActiveBindings;
    var i = t[r];
    e._cacheIndex = r;
    t[r] = e;
    i._cacheIndex = n;
    t[n] = i;
  },
  _lendControlInterpolant: function () {
    var e = this._controlInterpolants;
    var t = this._nActiveControlInterpolants++;
    var n = e[t];
    if (void 0 === n) {
      (n = new vo(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer)).__cacheIndex = t;
      e[t] = n;
    }
    return n;
  },
  _takeBackControlInterpolant: function (e) {
    var t = this._controlInterpolants;
    var n = e.__cacheIndex;
    var r = --this._nActiveControlInterpolants;
    var i = t[r];
    e.__cacheIndex = r;
    t[r] = e;
    i.__cacheIndex = n;
    t[n] = i;
  },
  _controlInterpolantsResultBuffer: new Float32Array(1),
  clipAction: function (e, t, n) {
    var r = t || this._root;
    var i = r.uuid;
    var a = "string" === typeof e ? Eo.findByName(r, e) : e;
    var o = null !== a ? a.uuid : e;
    var s = this._actionsByClip[o];
    var l = null;
    if (void 0 === n) {
      n = null !== a ? a.blendMode : 2500;
    }
    if (void 0 !== s) {
      var c = s.actionByRoot[i];
      if (void 0 !== c && c.blendMode === n) {
        return c;
      }
      l = s.knownActions[0];
      if (null === a) {
        a = l._clip;
      }
    }
    if (null === a) {
      return null;
    }
    var u = new el(this, a, t, n);
    this._bindAction(u, l);
    this._addInactiveAction(u, o, i);
    return u;
  },
  existingAction: function (e, t) {
    var n = t || this._root;
    var r = n.uuid;
    var i = "string" === typeof e ? Eo.findByName(n, e) : e;
    var a = i ? i.uuid : e;
    var o = this._actionsByClip[a];
    return void 0 !== o && o.actionByRoot[r] || null;
  },
  stopAllAction: function () {
    for (var e = this._actions, t = this._nActiveActions - 1; t >= 0; --t) {
      e[t].stop();
    }
    return this;
  },
  update: function (e) {
    e *= this.timeScale;
    for (var t = this._actions, n = this._nActiveActions, r = this.time += e, i = Math.sign(e), a = this._accuIndex ^= 1, o = 0; o !== n; ++o) {
      t[o]._update(r, e, i, a);
    }
    for (var s = this._bindings, l = this._nActiveBindings, c = 0; c !== l; ++c) {
      s[c].apply(a);
    }
    return this;
  },
  setTime: function (e) {
    this.time = 0;
    for (var t = 0; t < this._actions.length; t++) {
      this._actions[t].time = 0;
    }
    return this.update(e);
  },
  getRoot: function () {
    return this._root;
  },
  uncacheClip: function (e) {
    var t = this._actions;
    var n = e.uuid;
    var r = this._actionsByClip;
    var i = r[n];
    if (void 0 !== i) {
      for (var a = i.knownActions, o = 0, s = a.length; o !== s; ++o) {
        var l = a[o];
        this._deactivateAction(l);
        var c = l._cacheIndex;
        var u = t[t.length - 1];
        l._cacheIndex = null;
        l._byClipCacheIndex = null;
        u._cacheIndex = c;
        t[c] = u;
        t.pop();
        this._removeInactiveBindingsForAction(l);
      }
      delete r[n];
    }
  },
  uncacheRoot: function (e) {
    var t = e.uuid;
    var n = this._actionsByClip;
    for (var r in n) {
      var i = n[r].actionByRoot[t];
      if (void 0 !== i) {
        this._deactivateAction(i);
        this._removeInactiveAction(i);
      }
    }
    var a = this._bindingsByRootAndName[t];
    if (void 0 !== a) {
      for (var o in a) {
        var s = a[o];
        s.restoreOriginalState();
        this._removeInactiveBinding(s);
      }
    }
  },
  uncacheAction: function (e, t) {
    var n = this.existingAction(e, t);
    if (null !== n) {
      this._deactivateAction(n);
      this._removeInactiveAction(n);
    }
  }
});
var nl = function () {
  function e(t) {
    Object(u.a)(this, e);
    if ("string" === typeof t) {
      console.warn("THREE.Uniform: Type parameter is no longer needed.");
      t = arguments[1];
    }
    this.value = t;
  }
  Object(h.a)(e, [{
    key: "clone",
    value: function () {
      return new e(void 0 === this.value.clone ? this.value : this.value.clone());
    }
  }]);
  return e;
}();
function rl(e, t, n) {
  mi.call(this, e, t);
  this.meshPerAttribute = n || 1;
}
function il(e, t, n, r, i) {
  this.buffer = e;
  this.type = t;
  this.itemSize = n;
  this.elementSize = r;
  this.count = i;
  this.version = 0;
}
function al(e, t, n, r) {
  this.ray = new ie(e, t);
  this.near = n || 0;
  this.far = r || 1 / 0;
  this.camera = null;
  this.layers = new ve();
  this.params = {
    Mesh: {},
    Line: {
      threshold: 1
    },
    LOD: {},
    Points: {
      threshold: 1
    },
    Sprite: {}
  };
  Object.defineProperties(this.params, {
    PointCloud: {
      get: function () {
        console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points.");
        return this.Points;
      }
    }
  });
}
function ol(e, t) {
  return e.distance - t.distance;
}
function sl(e, t, n, r) {
  if (e.layers.test(t.layers)) {
    e.raycast(t, n);
  }
  if (!0 === r) {
    for (var i = e.children, a = 0, o = i.length; a < o; a++) {
      sl(i[a], t, n, !0);
    }
  }
}
rl.prototype = Object.assign(Object.create(mi.prototype), {
  constructor: rl,
  isInstancedInterleavedBuffer: !0,
  copy: function (e) {
    mi.prototype.copy.call(this, e);
    this.meshPerAttribute = e.meshPerAttribute;
    return this;
  },
  clone: function (e) {
    var t = mi.prototype.clone.call(this, e);
    t.meshPerAttribute = this.meshPerAttribute;
    return t;
  },
  toJSON: function (e) {
    var t = mi.prototype.toJSON.call(this, e);
    t.isInstancedInterleavedBuffer = !0;
    t.meshPerAttribute = this.meshPerAttribute;
    return t;
  }
});
Object.defineProperty(il.prototype, "needsUpdate", {
  set: function (e) {
    if (!0 === e) {
      this.version++;
    }
  }
});
Object.assign(il.prototype, {
  isGLBufferAttribute: !0,
  setBuffer: function (e) {
    this.buffer = e;
    return this;
  },
  setType: function (e, t) {
    this.type = e;
    this.elementSize = t;
    return this;
  },
  setItemSize: function (e) {
    this.itemSize = e;
    return this;
  },
  setCount: function (e) {
    this.count = e;
    return this;
  }
});
Object.assign(al.prototype, {
  set: function (e, t) {
    this.ray.set(e, t);
  },
  setFromCamera: function (e, t) {
    if (t && t.isPerspectiveCamera) {
      this.ray.origin.setFromMatrixPosition(t.matrixWorld);
      this.ray.direction.set(e.x, e.y, .5).unproject(t).sub(this.ray.origin).normalize();
      this.camera = t;
    } else {
      if (t && t.isOrthographicCamera) {
        this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t);
        this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld);
        this.camera = t;
      } else {
        console.error("THREE.Raycaster: Unsupported camera type.");
      }
    }
  },
  intersectObject: function (e, t, n) {
    var r = n || [];
    sl(e, this, r, t);
    r.sort(ol);
    return r;
  },
  intersectObjects: function (e, t, n) {
    var r = n || [];
    if (!1 === Array.isArray(e)) {
      console.warn("THREE.Raycaster.intersectObjects: objects is not an Array.");
      return r;
    }
    for (var i = 0, a = e.length; i < a; i++) {
      sl(e[i], this, r, t);
    }
    r.sort(ol);
    return r;
  }
});
var ll = new w();
var cl = function () {
  function e(t, n) {
    Object(u.a)(this, e);
    Object.defineProperty(this, "isBox2", {
      value: !0
    });
    this.min = void 0 !== t ? t : new w(1 / 0, 1 / 0);
    this.max = void 0 !== n ? n : new w(-1 / 0, -1 / 0);
  }
  Object(h.a)(e, [{
    key: "set",
    value: function (e, t) {
      this.min.copy(e);
      this.max.copy(t);
      return this;
    }
  }, {
    key: "setFromPoints",
    value: function (e) {
      this.makeEmpty();
      for (var t = 0, n = e.length; t < n; t++) {
        this.expandByPoint(e[t]);
      }
      return this;
    }
  }, {
    key: "setFromCenterAndSize",
    value: function (e, t) {
      var n = ll.copy(t).multiplyScalar(.5);
      this.min.copy(e).sub(n);
      this.max.copy(e).add(n);
      return this;
    }
  }, {
    key: "clone",
    value: function () {
      return new this.constructor().copy(this);
    }
  }, {
    key: "copy",
    value: function (e) {
      this.min.copy(e.min);
      this.max.copy(e.max);
      return this;
    }
  }, {
    key: "makeEmpty",
    value: function () {
      this.min.x = this.min.y = 1 / 0;
      this.max.x = this.max.y = -1 / 0;
      return this;
    }
  }, {
    key: "isEmpty",
    value: function () {
      return this.max.x < this.min.x || this.max.y < this.min.y;
    }
  }, {
    key: "getCenter",
    value: function (e) {
      if (void 0 === e) {
        console.warn("THREE.Box2: .getCenter() target is now required");
        e = new w();
      }
      return this.isEmpty() ? e.set(0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5);
    }
  }, {
    key: "getSize",
    value: function (e) {
      if (void 0 === e) {
        console.warn("THREE.Box2: .getSize() target is now required");
        e = new w();
      }
      return this.isEmpty() ? e.set(0, 0) : e.subVectors(this.max, this.min);
    }
  }, {
    key: "expandByPoint",
    value: function (e) {
      this.min.min(e);
      this.max.max(e);
      return this;
    }
  }, {
    key: "expandByVector",
    value: function (e) {
      this.min.sub(e);
      this.max.add(e);
      return this;
    }
  }, {
    key: "expandByScalar",
    value: function (e) {
      this.min.addScalar(-e);
      this.max.addScalar(e);
      return this;
    }
  }, {
    key: "containsPoint",
    value: function (e) {
      return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y);
    }
  }, {
    key: "containsBox",
    value: function (e) {
      return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y;
    }
  }, {
    key: "getParameter",
    value: function (e, t) {
      if (void 0 === t) {
        console.warn("THREE.Box2: .getParameter() target is now required");
        t = new w();
      }
      return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y));
    }
  }, {
    key: "intersectsBox",
    value: function (e) {
      return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y);
    }
  }, {
    key: "clampPoint",
    value: function (e, t) {
      if (void 0 === t) {
        console.warn("THREE.Box2: .clampPoint() target is now required");
        t = new w();
      }
      return t.copy(e).clamp(this.min, this.max);
    }
  }, {
    key: "distanceToPoint",
    value: function (e) {
      return ll.copy(e).clamp(this.min, this.max).sub(e).length();
    }
  }, {
    key: "intersect",
    value: function (e) {
      this.min.max(e.min);
      this.max.min(e.max);
      return this;
    }
  }, {
    key: "union",
    value: function (e) {
      this.min.min(e.min);
      this.max.max(e.max);
      return this;
    }
  }, {
    key: "translate",
    value: function (e) {
      this.min.add(e);
      this.max.add(e);
      return this;
    }
  }, {
    key: "equals",
    value: function (e) {
      return e.min.equals(this.min) && e.max.equals(this.max);
    }
  }]);
  return e;
}();
var ul = new C();
var hl = new C();
var dl = function () {
  function e(t, n) {
    Object(u.a)(this, e);
    this.start = void 0 !== t ? t : new C();
    this.end = void 0 !== n ? n : new C();
  }
  Object(h.a)(e, [{
    key: "set",
    value: function (e, t) {
      this.start.copy(e);
      this.end.copy(t);
      return this;
    }
  }, {
    key: "clone",
    value: function () {
      return new this.constructor().copy(this);
    }
  }, {
    key: "copy",
    value: function (e) {
      this.start.copy(e.start);
      this.end.copy(e.end);
      return this;
    }
  }, {
    key: "getCenter",
    value: function (e) {
      if (void 0 === e) {
        console.warn("THREE.Line3: .getCenter() target is now required");
        e = new C();
      }
      return e.addVectors(this.start, this.end).multiplyScalar(.5);
    }
  }, {
    key: "delta",
    value: function (e) {
      if (void 0 === e) {
        console.warn("THREE.Line3: .delta() target is now required");
        e = new C();
      }
      return e.subVectors(this.end, this.start);
    }
  }, {
    key: "distanceSq",
    value: function () {
      return this.start.distanceToSquared(this.end);
    }
  }, {
    key: "distance",
    value: function () {
      return this.start.distanceTo(this.end);
    }
  }, {
    key: "at",
    value: function (e, t) {
      if (void 0 === t) {
        console.warn("THREE.Line3: .at() target is now required");
        t = new C();
      }
      return this.delta(t).multiplyScalar(e).add(this.start);
    }
  }, {
    key: "closestPointToPointParameter",
    value: function (e, t) {
      ul.subVectors(e, this.start);
      hl.subVectors(this.end, this.start);
      var n = hl.dot(hl);
      var r = hl.dot(ul) / n;
      if (t) {
        r = _.clamp(r, 0, 1);
      }
      return r;
    }
  }, {
    key: "closestPointToPoint",
    value: function (e, t, n) {
      var r = this.closestPointToPointParameter(e, t);
      if (void 0 === n) {
        console.warn("THREE.Line3: .closestPointToPoint() target is now required");
        n = new C();
      }
      return this.delta(n).multiplyScalar(r).add(this.start);
    }
  }, {
    key: "applyMatrix4",
    value: function (e) {
      this.start.applyMatrix4(e);
      this.end.applyMatrix4(e);
      return this;
    }
  }, {
    key: "equals",
    value: function (e) {
      return e.start.equals(this.start) && e.end.equals(this.end);
    }
  }]);
  return e;
}();
function pl(e) {
  Pe.call(this);
  this.material = e;
  this.render = function () {};
  this.hasPositions = !1;
  this.hasNormals = !1;
  this.hasColors = !1;
  this.hasUvs = !1;
  this.positionArray = null;
  this.normalArray = null;
  this.colorArray = null;
  this.uvArray = null;
  this.count = 0;
}
pl.prototype = Object.create(Pe.prototype);
pl.prototype.constructor = pl;
pl.prototype.isImmediateRenderObject = !0;
var fl = new C();
var ml = new ae();
var vl = new ae();
var gl = function (e) {
  Object(l.a)(n, e);
  var t = Object(c.a)(n);
  function n(e) {
    var r;
    Object(u.a)(this, n);
    for (var i = function e(t) {
        var n = [];
        if (t && t.isBone) {
          n.push(t);
        }
        for (var r = 0; r < t.children.length; r++) {
          n.push.apply(n, e(t.children[r]));
        }
        return n;
      }(e), a = new St(), o = [], s = [], l = new Qe(0, 0, 1), c = new Qe(0, 1, 0), h = 0; h < i.length; h++) {
      var d = i[h];
      if (d.parent && d.parent.isBone) {
        o.push(0, 0, 0);
        o.push(0, 0, 0);
        s.push(l.r, l.g, l.b);
        s.push(c.r, c.g, c.b);
      }
    }
    a.setAttribute("position", new pt(o, 3));
    a.setAttribute("color", new pt(s, 3));
    var p = new Xi({
      vertexColors: !0,
      depthTest: !1,
      depthWrite: !1,
      toneMapped: !1,
      transparent: !0
    });
    (r = t.call(this, a, p)).type = "SkeletonHelper";
    r.isSkeletonHelper = !0;
    r.root = e;
    r.bones = i;
    r.matrix = e.matrixWorld;
    r.matrixAutoUpdate = !1;
    return r;
  }
  Object(h.a)(n, [{
    key: "updateMatrixWorld",
    value: function (e) {
      var t = this.bones;
      var r = this.geometry;
      var o = r.getAttribute("position");
      vl.getInverse(this.root.matrixWorld);
      for (var s = 0, l = 0; s < t.length; s++) {
        var c = t[s];
        if (c.parent && c.parent.isBone) {
          ml.multiplyMatrices(vl, c.matrixWorld);
          fl.setFromMatrixPosition(ml);
          o.setXYZ(l, fl.x, fl.y, fl.z);
          ml.multiplyMatrices(vl, c.parent.matrixWorld);
          fl.setFromMatrixPosition(ml);
          o.setXYZ(l + 1, fl.x, fl.y, fl.z);
          l += 2;
        }
      }
      r.getAttribute("position").needsUpdate = !0;
      Object(i.a)(Object(a.a)(n.prototype), "updateMatrixWorld", this).call(this, e);
    }
  }]);
  return n;
}(na);
var yl = function (e) {
  Object(l.a)(n, e);
  var t = Object(c.a)(n);
  function n(e, r, i, a) {
    var o;
    Object(u.a)(this, n);
    e = e || 10;
    r = r || 10;
    i = new Qe(void 0 !== i ? i : 4473924);
    a = new Qe(void 0 !== a ? a : 8947848);
    for (var s = r / 2, l = e / r, c = e / 2, h = [], d = [], p = 0, f = 0, m = -c; p <= r; p++, m += l) {
      h.push(-c, 0, m, c, 0, m);
      h.push(m, 0, -c, m, 0, c);
      var v = p === s ? i : a;
      v.toArray(d, f);
      f += 3;
      v.toArray(d, f);
      f += 3;
      v.toArray(d, f);
      f += 3;
      v.toArray(d, f);
      f += 3;
    }
    var g = new St();
    g.setAttribute("position", new pt(h, 3));
    g.setAttribute("color", new pt(d, 3));
    var y = new Xi({
      vertexColors: !0,
      toneMapped: !1
    });
    (o = t.call(this, g, y)).type = "GridHelper";
    return o;
  }
  return n;
}(na);
Math.pow(2, 8);
var xl = [.125, .215, .35, .446, .526, .582];
var bl = 5 + xl.length;
r = {};
Object(o.a)(r, 3e3, 0);
Object(o.a)(r, m, 1);
Object(o.a)(r, 3002, 2);
Object(o.a)(r, 3004, 3);
Object(o.a)(r, 3005, 4);
Object(o.a)(r, 3006, 5);
Object(o.a)(r, 3007, 6);
var _l = wl();
_l._lodPlanes;
_l._sizeLods;
_l._sigmas;
Math.sqrt(5);
function wl() {
  for (var e = [], t = [], n = [], r = 8, i = 0; i < bl; i++) {
    var a = Math.pow(2, r);
    t.push(a);
    var o = 1 / a;
    if (i > 4) {
      o = xl[i - 8 + 4 - 1];
    } else {
      if (0 == i) {
        o = 0;
      }
    }
    n.push(o);
    for (var s = 1 / (a - 1), l = -s / 2, c = 1 + s / 2, u = [l, l, c, l, c, c, l, l, c, c, l, c], h = new Float32Array(108), d = new Float32Array(72), p = new Float32Array(36), f = 0; f < 6; f++) {
      var m = f % 3 * 2 / 3 - 1;
      var v = f > 2 ? 0 : -1;
      var g = [m, v, 0, m + 2 / 3, v, 0, m + 2 / 3, v + 1, 0, m, v, 0, m + 2 / 3, v + 1, 0, m, v + 1, 0];
      h.set(g, 18 * f);
      d.set(u, 12 * f);
      var y = [f, f, f, f, f, f];
      p.set(y, 6 * f);
    }
    var x = new St();
    x.setAttribute("position", new at(h, 3));
    x.setAttribute("uv", new at(d, 2));
    x.setAttribute("faceIndex", new at(p, 1));
    e.push(x);
    if (r > 4) {
      r--;
    }
  }
  return {
    _lodPlanes: e,
    _sizeLods: t,
    _sigmas: n
  };
}
function Ml(e) {
  console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead.");
  Yo.call(this, e);
  this.type = "catmullrom";
}
Fo.create = function (e, t) {
  console.log("THREE.Curve.create() has been deprecated");
  e.prototype = Object.create(Fo.prototype);
  e.prototype.constructor = e;
  e.prototype.getPoint = t;
  return e;
};
Object.assign(os.prototype, {
  createPointsGeometry: function (e) {
    console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
    var t = this.getPoints(e);
    return this.createGeometry(t);
  },
  createSpacedPointsGeometry: function (e) {
    console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
    var t = this.getSpacedPoints(e);
    return this.createGeometry(t);
  },
  createGeometry: function (e) {
    console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
    for (var t = new xa(), n = 0, r = e.length; n < r; n++) {
      var i = e[n];
      t.vertices.push(new C(i.x, i.y, i.z || 0));
    }
    return t;
  }
});
Object.assign(ss.prototype, {
  fromPoints: function (e) {
    console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints().");
    return this.setFromPoints(e);
  }
});
Object.create(Yo.prototype);
Object.create(Yo.prototype);
Ml.prototype = Object.create(Yo.prototype);
Object.assign(Ml.prototype, {
  initFromArray: function () {
    console.error("THREE.Spline: .initFromArray() has been removed.");
  },
  getControlPointsArray: function () {
    console.error("THREE.Spline: .getControlPointsArray() has been removed.");
  },
  reparametrizeByArcLength: function () {
    console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.");
  }
});
yl.prototype.setColors = function () {
  console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.");
};
gl.prototype.update = function () {
  console.error("THREE.SkeletonHelper: update() no longer needs to be called.");
};
Object.assign(Co.prototype, {
  extractUrlBase: function (e) {
    console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead.");
    return Ss.extractUrlBase(e);
  }
});
Co.Handlers = {
  add: function () {
    console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.");
  },
  get: function () {
    console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.");
  }
};
Object.assign(cl.prototype, {
  center: function (e) {
    console.warn("THREE.Box2: .center() has been renamed to .getCenter().");
    return this.getCenter(e);
  },
  empty: function () {
    console.warn("THREE.Box2: .empty() has been renamed to .isEmpty().");
    return this.isEmpty();
  },
  isIntersectionBox: function (e) {
    console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox().");
    return this.intersectsBox(e);
  },
  size: function (e) {
    console.warn("THREE.Box2: .size() has been renamed to .getSize().");
    return this.getSize(e);
  }
});
Object.assign(k.prototype, {
  center: function (e) {
    console.warn("THREE.Box3: .center() has been renamed to .getCenter().");
    return this.getCenter(e);
  },
  empty: function () {
    console.warn("THREE.Box3: .empty() has been renamed to .isEmpty().");
    return this.isEmpty();
  },
  isIntersectionBox: function (e) {
    console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox().");
    return this.intersectsBox(e);
  },
  isIntersectionSphere: function (e) {
    console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere().");
    return this.intersectsSphere(e);
  },
  size: function (e) {
    console.warn("THREE.Box3: .size() has been renamed to .getSize().");
    return this.getSize(e);
  }
});
Object.assign(J.prototype, {
  empty: function () {
    console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty().");
    return this.isEmpty();
  }
});
an.prototype.setFromMatrix = function (e) {
  console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix().");
  return this.setFromProjectionMatrix(e);
};
dl.prototype.center = function (e) {
  console.warn("THREE.Line3: .center() has been renamed to .getCenter().");
  return this.getCenter(e);
};
Object.assign(_, {
  random16: function () {
    console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead.");
    return Math.random();
  },
  nearestPowerOfTwo: function (e) {
    console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo().");
    return _.floorPowerOfTwo(e);
  },
  nextPowerOfTwo: function (e) {
    console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo().");
    return _.ceilPowerOfTwo(e);
  }
});
Object.assign(M.prototype, {
  flattenToArrayOffset: function (e, t) {
    console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.");
    return this.toArray(e, t);
  },
  multiplyVector3: function (e) {
    console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");
    return e.applyMatrix3(this);
  },
  multiplyVector3Array: function () {
    console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.");
  },
  applyToBufferAttribute: function (e) {
    console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead.");
    return e.applyMatrix3(this);
  },
  applyToVector3Array: function () {
    console.error("THREE.Matrix3: .applyToVector3Array() has been removed.");
  }
});
Object.assign(ae.prototype, {
  extractPosition: function (e) {
    console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().");
    return this.copyPosition(e);
  },
  flattenToArrayOffset: function (e, t) {
    console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.");
    return this.toArray(e, t);
  },
  getPosition: function () {
    console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");
    return new C().setFromMatrixColumn(this, 3);
  },
  setRotationFromQuaternion: function (e) {
    console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().");
    return this.makeRotationFromQuaternion(e);
  },
  multiplyToArray: function () {
    console.warn("THREE.Matrix4: .multiplyToArray() has been removed.");
  },
  multiplyVector3: function (e) {
    console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead.");
    return e.applyMatrix4(this);
  },
  multiplyVector4: function (e) {
    console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");
    return e.applyMatrix4(this);
  },
  multiplyVector3Array: function () {
    console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.");
  },
  rotateAxis: function (e) {
    console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");
    e.transformDirection(this);
  },
  crossVector: function (e) {
    console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");
    return e.applyMatrix4(this);
  },
  translate: function () {
    console.error("THREE.Matrix4: .translate() has been removed.");
  },
  rotateX: function () {
    console.error("THREE.Matrix4: .rotateX() has been removed.");
  },
  rotateY: function () {
    console.error("THREE.Matrix4: .rotateY() has been removed.");
  },
  rotateZ: function () {
    console.error("THREE.Matrix4: .rotateZ() has been removed.");
  },
  rotateByAxis: function () {
    console.error("THREE.Matrix4: .rotateByAxis() has been removed.");
  },
  applyToBufferAttribute: function (e) {
    console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead.");
    return e.applyMatrix4(this);
  },
  applyToVector3Array: function () {
    console.error("THREE.Matrix4: .applyToVector3Array() has been removed.");
  },
  makeFrustum: function (e, t, n, r, i, a) {
    console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead.");
    return this.makePerspective(e, t, r, n, i, a);
  }
});
ke.prototype.isIntersectionLine = function (e) {
  console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine().");
  return this.intersectsLine(e);
};
P.prototype.multiplyVector3 = function (e) {
  console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");
  return e.applyQuaternion(this);
};
Object.assign(ie.prototype, {
  isIntersectionBox: function (e) {
    console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox().");
    return this.intersectsBox(e);
  },
  isIntersectionPlane: function (e) {
    console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane().");
    return this.intersectsPlane(e);
  },
  isIntersectionSphere: function (e) {
    console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere().");
    return this.intersectsSphere(e);
  }
});
Object.assign(We.prototype, {
  area: function () {
    console.warn("THREE.Triangle: .area() has been renamed to .getArea().");
    return this.getArea();
  },
  barycoordFromPoint: function (e, t) {
    console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().");
    return this.getBarycoord(e, t);
  },
  midpoint: function (e) {
    console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint().");
    return this.getMidpoint(e);
  },
  normal: function (e) {
    console.warn("THREE.Triangle: .normal() has been renamed to .getNormal().");
    return this.getNormal(e);
  },
  plane: function (e) {
    console.warn("THREE.Triangle: .plane() has been renamed to .getPlane().");
    return this.getPlane(e);
  }
});
Object.assign(We, {
  barycoordFromPoint: function (e, t, n, r, i) {
    console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().");
    return We.getBarycoord(e, t, n, r, i);
  },
  normal: function (e, t, n, r) {
    console.warn("THREE.Triangle: .normal() has been renamed to .getNormal().");
    return We.getNormal(e, t, n, r);
  }
});
Object.assign(ls.prototype, {
  extractAllPoints: function (e) {
    console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead.");
    return this.extractPoints(e);
  },
  extrude: function (e) {
    console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead.");
    return new Ja(this, e);
  },
  makeGeometry: function (e) {
    console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead.");
    return new eo(this, e);
  }
});
Object.assign(w.prototype, {
  fromAttribute: function (e, t, n) {
    console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute().");
    return this.fromBufferAttribute(e, t, n);
  },
  distanceToManhattan: function (e) {
    console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo().");
    return this.manhattanDistanceTo(e);
  },
  lengthManhattan: function () {
    console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength().");
    return this.manhattanLength();
  }
});
Object.assign(C.prototype, {
  setEulerFromRotationMatrix: function () {
    console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.");
  },
  setEulerFromQuaternion: function () {
    console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.");
  },
  getPositionFromMatrix: function (e) {
    console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().");
    return this.setFromMatrixPosition(e);
  },
  getScaleFromMatrix: function (e) {
    console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().");
    return this.setFromMatrixScale(e);
  },
  getColumnFromMatrix: function (e, t) {
    console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().");
    return this.setFromMatrixColumn(t, e);
  },
  applyProjection: function (e) {
    console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead.");
    return this.applyMatrix4(e);
  },
  fromAttribute: function (e, t, n) {
    console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute().");
    return this.fromBufferAttribute(e, t, n);
  },
  distanceToManhattan: function (e) {
    console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo().");
    return this.manhattanDistanceTo(e);
  },
  lengthManhattan: function () {
    console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength().");
    return this.manhattanLength();
  }
});
Object.assign(A.prototype, {
  fromAttribute: function (e, t, n) {
    console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute().");
    return this.fromBufferAttribute(e, t, n);
  },
  lengthManhattan: function () {
    console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength().");
    return this.manhattanLength();
  }
});
Object.assign(xa.prototype, {
  computeTangents: function () {
    console.error("THREE.Geometry: .computeTangents() has been removed.");
  },
  computeLineDistances: function () {
    console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.");
  },
  applyMatrix: function (e) {
    console.warn("THREE.Geometry: .applyMatrix() has been renamed to .applyMatrix4().");
    return this.applyMatrix4(e);
  }
});
Object.assign(Pe.prototype, {
  getChildByName: function (e) {
    console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().");
    return this.getObjectByName(e);
  },
  renderDepth: function () {
    console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.");
  },
  translate: function (e, t) {
    console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.");
    return this.translateOnAxis(t, e);
  },
  getWorldRotation: function () {
    console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.");
  },
  applyMatrix: function (e) {
    console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4().");
    return this.applyMatrix4(e);
  }
});
Object.defineProperties(Pe.prototype, {
  eulerOrder: {
    get: function () {
      console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");
      return this.rotation.order;
    },
    set: function (e) {
      console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");
      this.rotation.order = e;
    }
  },
  useQuaternion: {
    get: function () {
      console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");
    },
    set: function () {
      console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");
    }
  }
});
Object.assign(Gt.prototype, {
  setDrawMode: function () {
    console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.");
  }
});
Object.defineProperties(Gt.prototype, {
  drawMode: {
    get: function () {
      console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode.");
      return 0;
    },
    set: function () {
      console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.");
    }
  }
});
Object.defineProperties(Di.prototype, {
  objects: {
    get: function () {
      console.warn("THREE.LOD: .objects has been renamed to .levels.");
      return this.levels;
    }
  }
});
Object.defineProperty(Fi.prototype, "useVertexTexture", {
  get: function () {
    console.warn("THREE.Skeleton: useVertexTexture has been removed.");
  },
  set: function () {
    console.warn("THREE.Skeleton: useVertexTexture has been removed.");
  }
});
Ui.prototype.initBones = function () {
  console.error("THREE.SkinnedMesh: initBones() has been removed.");
};
Object.defineProperty(Fo.prototype, "__arcLengthDivisions", {
  get: function () {
    console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.");
    return this.arcLengthDivisions;
  },
  set: function (e) {
    console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.");
    this.arcLengthDivisions = e;
  }
});
Kt.prototype.setLens = function (e, t) {
  console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup.");
  if (void 0 !== t) {
    this.filmGauge = t;
  }
  this.setFocalLength(e);
};
Object.defineProperties(cs.prototype, {
  onlyShadow: {
    set: function () {
      console.warn("THREE.Light: .onlyShadow has been removed.");
    }
  },
  shadowCameraFov: {
    set: function (e) {
      console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov.");
      this.shadow.camera.fov = e;
    }
  },
  shadowCameraLeft: {
    set: function (e) {
      console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left.");
      this.shadow.camera.left = e;
    }
  },
  shadowCameraRight: {
    set: function (e) {
      console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right.");
      this.shadow.camera.right = e;
    }
  },
  shadowCameraTop: {
    set: function (e) {
      console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top.");
      this.shadow.camera.top = e;
    }
  },
  shadowCameraBottom: {
    set: function (e) {
      console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom.");
      this.shadow.camera.bottom = e;
    }
  },
  shadowCameraNear: {
    set: function (e) {
      console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near.");
      this.shadow.camera.near = e;
    }
  },
  shadowCameraFar: {
    set: function (e) {
      console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far.");
      this.shadow.camera.far = e;
    }
  },
  shadowCameraVisible: {
    set: function () {
      console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.");
    }
  },
  shadowBias: {
    set: function (e) {
      console.warn("THREE.Light: .shadowBias is now .shadow.bias.");
      this.shadow.bias = e;
    }
  },
  shadowDarkness: {
    set: function () {
      console.warn("THREE.Light: .shadowDarkness has been removed.");
    }
  },
  shadowMapWidth: {
    set: function (e) {
      console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width.");
      this.shadow.mapSize.width = e;
    }
  },
  shadowMapHeight: {
    set: function (e) {
      console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height.");
      this.shadow.mapSize.height = e;
    }
  }
});
Object.defineProperties(at.prototype, {
  length: {
    get: function () {
      console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead.");
      return this.array.length;
    }
  },
  dynamic: {
    get: function () {
      console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead.");
      return 35048 === this.usage;
    },
    set: function () {
      console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead.");
      this.setUsage(35048);
    }
  }
});
Object.assign(at.prototype, {
  setDynamic: function (e) {
    console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead.");
    this.setUsage(!0 === e ? 35048 : 35044);
    return this;
  },
  copyIndicesArray: function () {
    console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.");
  },
  setArray: function () {
    console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers");
  }
});
Object.assign(St.prototype, {
  addIndex: function (e) {
    console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex().");
    this.setIndex(e);
  },
  addAttribute: function (e, t) {
    console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute().");
    return t && t.isBufferAttribute || t && t.isInterleavedBufferAttribute ? "index" === e ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(t), this) : this.setAttribute(e, t) : (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.setAttribute(e, new at(arguments[1], arguments[2])));
  },
  addDrawCall: function (e, t, n) {
    if (void 0 !== n) {
      console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset.");
    }
    console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup().");
    this.addGroup(e, t);
  },
  clearDrawCalls: function () {
    console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups().");
    this.clearGroups();
  },
  computeTangents: function () {
    console.warn("THREE.BufferGeometry: .computeTangents() has been removed.");
  },
  computeOffsets: function () {
    console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.");
  },
  removeAttribute: function (e) {
    console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute().");
    return this.deleteAttribute(e);
  },
  applyMatrix: function (e) {
    console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4().");
    return this.applyMatrix4(e);
  }
});
Object.defineProperties(St.prototype, {
  drawcalls: {
    get: function () {
      console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups.");
      return this.groups;
    }
  },
  offsets: {
    get: function () {
      console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups.");
      return this.groups;
    }
  }
});
Object.defineProperties(Ts.prototype, {
  maxInstancedCount: {
    get: function () {
      console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount.");
      return this.instanceCount;
    },
    set: function (e) {
      console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount.");
      this.instanceCount = e;
    }
  }
});
Object.defineProperties(al.prototype, {
  linePrecision: {
    get: function () {
      console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead.");
      return this.params.Line.threshold;
    },
    set: function (e) {
      console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead.");
      this.params.Line.threshold = e;
    }
  }
});
Object.defineProperties(mi.prototype, {
  dynamic: {
    get: function () {
      console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead.");
      return 35048 === this.usage;
    },
    set: function (e) {
      console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead.");
      this.setUsage(e);
    }
  }
});
Object.assign(mi.prototype, {
  setDynamic: function (e) {
    console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead.");
    this.setUsage(!0 === e ? 35048 : 35044);
    return this;
  },
  setArray: function () {
    console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers");
  }
});
Object.assign(Ya.prototype, {
  getArrays: function () {
    console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.");
  },
  addShapeList: function () {
    console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.");
  },
  addShape: function () {
    console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.");
  }
});
Object.assign(fi.prototype, {
  dispose: function () {
    console.error("THREE.Scene: .dispose() has been removed.");
  }
});
Object.defineProperties(nl.prototype, {
  dynamic: {
    set: function () {
      console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.");
    }
  },
  onUpdate: {
    value: function () {
      console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead.");
      return this;
    }
  }
});
Object.defineProperties(tt.prototype, {
  wrapAround: {
    get: function () {
      console.warn("THREE.Material: .wrapAround has been removed.");
    },
    set: function () {
      console.warn("THREE.Material: .wrapAround has been removed.");
    }
  },
  overdraw: {
    get: function () {
      console.warn("THREE.Material: .overdraw has been removed.");
    },
    set: function () {
      console.warn("THREE.Material: .overdraw has been removed.");
    }
  },
  wrapRGB: {
    get: function () {
      console.warn("THREE.Material: .wrapRGB has been removed.");
      return new Qe();
    }
  },
  shading: {
    get: function () {
      console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.");
    },
    set: function (e) {
      console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.");
      this.flatShading = 1 === e;
    }
  },
  stencilMask: {
    get: function () {
      console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead.");
      return this.stencilFuncMask;
    },
    set: function (e) {
      console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead.");
      this.stencilFuncMask = e;
    }
  }
});
Object.defineProperties(ao.prototype, {
  metal: {
    get: function () {
      console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead.");
      return !1;
    },
    set: function () {
      console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead");
    }
  }
});
Object.defineProperties(io.prototype, {
  transparency: {
    get: function () {
      console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission.");
      return this.transmission;
    },
    set: function (e) {
      console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission.");
      this.transmission = e;
    }
  }
});
Object.defineProperties(Zt.prototype, {
  derivatives: {
    get: function () {
      console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");
      return this.extensions.derivatives;
    },
    set: function (e) {
      console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");
      this.extensions.derivatives = e;
    }
  }
});
Object.assign(di.prototype, {
  clearTarget: function (e, t, n, r) {
    console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead.");
    this.setRenderTarget(e);
    this.clear(t, n, r);
  },
  animate: function (e) {
    console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop().");
    this.setAnimationLoop(e);
  },
  getCurrentRenderTarget: function () {
    console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget().");
    return this.getRenderTarget();
  },
  getMaxAnisotropy: function () {
    console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy().");
    return this.capabilities.getMaxAnisotropy();
  },
  getPrecision: function () {
    console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision.");
    return this.capabilities.precision;
  },
  resetGLState: function () {
    console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset().");
    return this.state.reset();
  },
  supportsFloatTextures: function () {
    console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' ).");
    return this.extensions.get("OES_texture_float");
  },
  supportsHalfFloatTextures: function () {
    console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' ).");
    return this.extensions.get("OES_texture_half_float");
  },
  supportsStandardDerivatives: function () {
    console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' ).");
    return this.extensions.get("OES_standard_derivatives");
  },
  supportsCompressedTextureS3TC: function () {
    console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' ).");
    return this.extensions.get("WEBGL_compressed_texture_s3tc");
  },
  supportsCompressedTexturePVRTC: function () {
    console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' ).");
    return this.extensions.get("WEBGL_compressed_texture_pvrtc");
  },
  supportsBlendMinMax: function () {
    console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' ).");
    return this.extensions.get("EXT_blend_minmax");
  },
  supportsVertexTextures: function () {
    console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures.");
    return this.capabilities.vertexTextures;
  },
  supportsInstancedArrays: function () {
    console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' ).");
    return this.extensions.get("ANGLE_instanced_arrays");
  },
  enableScissorTest: function (e) {
    console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest().");
    this.setScissorTest(e);
  },
  initMaterial: function () {
    console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.");
  },
  addPrePlugin: function () {
    console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.");
  },
  addPostPlugin: function () {
    console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.");
  },
  updateShadowMap: function () {
    console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.");
  },
  setFaceCulling: function () {
    console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.");
  },
  allocTextureUnit: function () {
    console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.");
  },
  setTexture: function () {
    console.warn("THREE.WebGLRenderer: .setTexture() has been removed.");
  },
  setTexture2D: function () {
    console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.");
  },
  setTextureCube: function () {
    console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.");
  },
  getActiveMipMapLevel: function () {
    console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel().");
    return this.getActiveMipmapLevel();
  }
});
Object.defineProperties(di.prototype, {
  shadowMapEnabled: {
    get: function () {
      return this.shadowMap.enabled;
    },
    set: function (e) {
      console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled.");
      this.shadowMap.enabled = e;
    }
  },
  shadowMapType: {
    get: function () {
      return this.shadowMap.type;
    },
    set: function (e) {
      console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type.");
      this.shadowMap.type = e;
    }
  },
  shadowMapCullFace: {
    get: function () {
      console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");
    },
    set: function () {
      console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");
    }
  },
  context: {
    get: function () {
      console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead.");
      return this.getContext();
    }
  },
  vr: {
    get: function () {
      console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr");
      return this.xr;
    }
  },
  gammaInput: {
    get: function () {
      console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.");
      return !1;
    },
    set: function () {
      console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.");
    }
  },
  gammaOutput: {
    get: function () {
      console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead.");
      return !1;
    },
    set: function (e) {
      console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead.");
      this.outputEncoding = !0 === e ? m : 3e3;
    }
  },
  toneMappingWhitePoint: {
    get: function () {
      console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.");
      return 1;
    },
    set: function () {
      console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.");
    }
  }
});
Object.defineProperties(ri.prototype, {
  cullFace: {
    get: function () {
      console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");
    },
    set: function () {
      console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");
    }
  },
  renderReverseSided: {
    get: function () {
      console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");
    },
    set: function () {
      console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");
    }
  },
  renderSingleSided: {
    get: function () {
      console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");
    },
    set: function () {
      console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");
    }
  }
});
Object.defineProperties(L.prototype, {
  wrapS: {
    get: function () {
      console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");
      return this.texture.wrapS;
    },
    set: function (e) {
      console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");
      this.texture.wrapS = e;
    }
  },
  wrapT: {
    get: function () {
      console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");
      return this.texture.wrapT;
    },
    set: function (e) {
      console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");
      this.texture.wrapT = e;
    }
  },
  magFilter: {
    get: function () {
      console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");
      return this.texture.magFilter;
    },
    set: function (e) {
      console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");
      this.texture.magFilter = e;
    }
  },
  minFilter: {
    get: function () {
      console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");
      return this.texture.minFilter;
    },
    set: function (e) {
      console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");
      this.texture.minFilter = e;
    }
  },
  anisotropy: {
    get: function () {
      console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");
      return this.texture.anisotropy;
    },
    set: function (e) {
      console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");
      this.texture.anisotropy = e;
    }
  },
  offset: {
    get: function () {
      console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");
      return this.texture.offset;
    },
    set: function (e) {
      console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");
      this.texture.offset = e;
    }
  },
  repeat: {
    get: function () {
      console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");
      return this.texture.repeat;
    },
    set: function (e) {
      console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");
      this.texture.repeat = e;
    }
  },
  format: {
    get: function () {
      console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");
      return this.texture.format;
    },
    set: function (e) {
      console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");
      this.texture.format = e;
    }
  },
  type: {
    get: function () {
      console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");
      return this.texture.type;
    },
    set: function (e) {
      console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");
      this.texture.type = e;
    }
  },
  generateMipmaps: {
    get: function () {
      console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");
      return this.texture.generateMipmaps;
    },
    set: function (e) {
      console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");
      this.texture.generateMipmaps = e;
    }
  }
});
Object.defineProperties(Hs.prototype, {
  load: {
    value: function (e) {
      console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
      var t = this;
      new Ds().load(e, function (e) {
        t.setBuffer(e);
      });
      return this;
    }
  },
  startTime: {
    set: function () {
      console.warn("THREE.Audio: .startTime is now .play( delay ).");
    }
  }
});
Gs.prototype.getData = function () {
  console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData().");
  return this.getFrequencyData();
};
Qt.prototype.updateCubeMap = function (e, t) {
  console.warn("THREE.CubeCamera: .updateCubeMap() is now .update().");
  return this.update(e, t);
};
Qt.prototype.clear = function (e, t, n, r) {
  console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear().");
  return this.renderTarget.clear(e, t, n, r);
};
S.crossOrigin = void 0;
S.loadTexture = function (e, t, n, r) {
  console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
  var i = new zo();
  i.setCrossOrigin(this.crossOrigin);
  var a = i.load(e, n, void 0, r);
  if (t) {
    a.mapping = t;
  }
  return a;
};
S.loadTextureCube = function (e, t, n, r) {
  console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
  var i = new Uo();
  i.setCrossOrigin(this.crossOrigin);
  var a = i.load(e, n, void 0, r);
  if (t) {
    a.mapping = t;
  }
  return a;
};
S.loadCompressedTexture = function () {
  console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.");
};
S.loadCompressedTextureCube = function () {
  console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.");
};
if ("undefined" !== typeof __THREE_DEVTOOLS__) {
  __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
    detail: {
      revision: "122"
    }
  }));
}
export default xs;