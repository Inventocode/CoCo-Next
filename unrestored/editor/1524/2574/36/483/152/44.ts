"use strict";

export { s as w };
export { we as a };
export { U as b };
export { xe as c };
export { be as d };
export { q as e };
export { pe as f };
export { Ne as g };
export { O as h };
export { Ve as i };
export { Ue as j };
export { T as k };
export { B as l };
export { I as m };
export { P as n };
export { Q as o };
export { ye as p };
export { me as q };
export { ve as r };
export { S as s };
export { Ge as t };
export { k as u };
export { C as v };
export { Ce as x };
export { D as y };
export { We as z };
export { qe as A };
export { Xe as B };
export { ze as C };
export { Ye as D };
var r = require("../../../10/index");
var i = require("../../../27");
var o = require("../../../25/index");
var a = w();
var s = function (e) {
  return v(e, a);
};
var c = w();
s.write = function (e) {
  return v(e, c);
};
var u = w();
s.onStart = function (e) {
  return v(e, u);
};
var l = w();
s.onFrame = function (e) {
  return v(e, l);
};
var f = w();
s.onFinish = function (e) {
  return v(e, f);
};
var h = [];
s.setTimeout = function (e, t) {
  var n = s.now() + t;
  var r = {
    time: n,
    handler: e,
    cancel: function e() {
      var t = h.findIndex(function (t) {
        return t.cancel == e;
      });
      if (~t) {
        h.splice(t, 1);
      }
      A -= ~t ? 1 : 0;
    }
  };
  h.splice(d(n), 0, r);
  A += 1;
  m();
  return r;
};
var d = function (e) {
  return ~(~h.findIndex(function (t) {
    return t.time > e;
  }) || ~h.length);
};
s.cancel = function (e) {
  u.delete(e);
  l.delete(e);
  a.delete(e);
  c.delete(e);
  f.delete(e);
};
s.sync = function (e) {
  g = !0;
  s.batchedUpdates(e);
  g = !1;
};
s.throttle = function (e) {
  var t;
  function n() {
    try {
      e.apply(void 0, Object(o.a)(t));
    } finally {
      t = null;
    }
  }
  function r() {
    for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++) {
      r[i] = arguments[i];
    }
    t = r;
    s.onStart(n);
  }
  r.handler = e;
  r.cancel = function () {
    u.delete(n);
    t = null;
  };
  return r;
};
var p = "undefined" != typeof window ? window.requestAnimationFrame : function () {};
s.use = function (e) {
  return p = e;
};
s.now = "undefined" != typeof performance ? function () {
  return performance.now();
} : Date.now;
s.batchedUpdates = function (e) {
  return e();
};
s.catch = console.error;
s.frameLoop = "always";
s.advance = function () {
  if ("demand" !== s.frameLoop) {
    console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand");
  } else {
    b();
  }
};
var _ = -1;
var A = 0;
var g = !1;
function v(e, t) {
  if (g) {
    t.delete(e);
    e(0);
  } else {
    t.add(e);
    m();
  }
}
function m() {
  if (_ < 0) {
    _ = 0;
    if ("demand" !== s.frameLoop) {
      p(y);
    }
  }
}
function y() {
  if (~_) {
    p(y);
    s.batchedUpdates(b);
  }
}
function b() {
  var e = _;
  _ = s.now();
  var t = d(_);
  if (t) {
    E(h.splice(0, t), function (e) {
      return e.handler();
    });
    A -= t;
  }
  u.flush();
  a.flush(e ? Math.min(64, _ - e) : 16.667);
  l.flush();
  c.flush();
  f.flush();
  if (!A) {
    _ = -1;
  }
}
function w() {
  var e = new Set();
  var t = e;
  return {
    add: function (n) {
      A += t != e || e.has(n) ? 0 : 1;
      e.add(n);
    },
    delete: function (n) {
      A -= t == e && e.has(n) ? 1 : 0;
      return e.delete(n);
    },
    flush: function (n) {
      if (t.size) {
        e = new Set();
        A -= t.size;
        E(t, function (t) {
          return t(n) && e.add(t);
        });
        A += e.size;
        t = e;
      }
    }
  };
}
function E(e, t) {
  e.forEach(function (e) {
    try {
      t(e);
    } catch (n) {
      s.catch(n);
    }
  });
}
var x = require("../../../0/index");
function C() {}
var O = function (e, t, n) {
  return Object.defineProperty(e, t, {
    value: n,
    writable: !0,
    configurable: !0
  });
};
var S = {
  arr: Array.isArray,
  obj: function (e) {
    return !!e && "Object" === e.constructor.name;
  },
  fun: function (e) {
    return "function" === typeof e;
  },
  str: function (e) {
    return "string" === typeof e;
  },
  num: function (e) {
    return "number" === typeof e;
  },
  und: function (e) {
    return void 0 === e;
  }
};
function k(e, t) {
  if (S.arr(e)) {
    if (!S.arr(t) || e.length !== t.length) {
      return !1;
    }
    for (var n = 0; n < e.length; n++) {
      if (e[n] !== t[n]) {
        return !1;
      }
    }
    return !0;
  }
  return e === t;
}
var T = function (e, t) {
  return e.forEach(t);
};
function B(e, t, n) {
  if (S.arr(e)) {
    for (var r = 0; r < e.length; r++) {
      t.call(n, e[r], "".concat(r));
    }
  } else {
    for (var i in e) if (e.hasOwnProperty(i)) {
      t.call(n, e[i], i);
    }
  }
}
var D = function (e) {
  return S.und(e) ? [] : S.arr(e) ? e : [e];
};
function I(e, t) {
  if (e.size) {
    var n = Array.from(e);
    e.clear();
    T(n, t);
  }
}
var F;
var R;
var P = function (e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) {
    n[r - 1] = arguments[r];
  }
  return I(e, function (e) {
    return e.apply(void 0, n);
  });
};
var N = function () {
  return "undefined" === typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
};
var M = null;
var j = !1;
var L = C;
var U = Object.freeze({
  __proto__: null,
  get createStringInterpolator() {
    return F;
  },
  get to() {
    return R;
  },
  get colors() {
    return M;
  },
  get skipAnimation() {
    return j;
  },
  get willAdvance() {
    return L;
  },
  assign: function (e) {
    if (e.to) {
      R = e.to;
    }
    if (e.now) {
      s.now = e.now;
    }
    if (void 0 !== e.colors) {
      M = e.colors;
    }
    if (null != e.skipAnimation) {
      j = e.skipAnimation;
    }
    if (e.createStringInterpolator) {
      F = e.createStringInterpolator;
    }
    if (e.requestAnimationFrame) {
      s.use(e.requestAnimationFrame);
    }
    if (e.batchedUpdates) {
      s.batchedUpdates = e.batchedUpdates;
    }
    if (e.willAdvance) {
      L = e.willAdvance;
    }
    if (e.frameLoop) {
      s.frameLoop = e.frameLoop;
    }
  }
});
var H = new Set();
var V = [];
var G = [];
var z = 0;
var Q = {
  get idle() {
    return !H.size && !V.length;
  },
  start: function (e) {
    if (z > e.priority) {
      H.add(e);
      s.onStart(W);
    } else {
      K(e);
      s(Y);
    }
  },
  advance: Y,
  sort: function (e) {
    if (z) {
      s.onFrame(function () {
        return Q.sort(e);
      });
    } else {
      var t = V.indexOf(e);
      if (~t) {
        V.splice(t, 1);
        X(e);
      }
    }
  },
  clear: function () {
    V = [];
    H.clear();
  }
};
function W() {
  H.forEach(K);
  H.clear();
  s(Y);
}
function K(e) {
  if (!V.includes(e)) {
    X(e);
  }
}
function X(e) {
  V.splice(function (e, t) {
    var n = e.findIndex(t);
    return n < 0 ? e.length : n;
  }(V, function (t) {
    return t.priority > e.priority;
  }), 0, e);
}
function Y(e) {
  for (var t = G, n = 0; n < V.length; n++) {
    var r = V[n];
    z = r.priority;
    if (!r.idle) {
      L(r);
      r.advance(e);
      if (!r.idle) {
        t.push(r);
      }
    }
  }
  z = 0;
  (G = V).length = 0;
  return (V = t).length > 0;
}
var q = {
  transparent: 0,
  aliceblue: 4042850303,
  antiquewhite: 4209760255,
  aqua: 16777215,
  aquamarine: 2147472639,
  azure: 4043309055,
  beige: 4126530815,
  bisque: 4293182719,
  black: 255,
  blanchedalmond: 4293643775,
  blue: 65535,
  blueviolet: 2318131967,
  brown: 2771004159,
  burlywood: 3736635391,
  burntsienna: 3934150143,
  cadetblue: 1604231423,
  chartreuse: 2147418367,
  chocolate: 3530104575,
  coral: 4286533887,
  cornflowerblue: 1687547391,
  cornsilk: 4294499583,
  crimson: 3692313855,
  cyan: 16777215,
  darkblue: 35839,
  darkcyan: 9145343,
  darkgoldenrod: 3095792639,
  darkgray: 2846468607,
  darkgreen: 6553855,
  darkgrey: 2846468607,
  darkkhaki: 3182914559,
  darkmagenta: 2332068863,
  darkolivegreen: 1433087999,
  darkorange: 4287365375,
  darkorchid: 2570243327,
  darkred: 2332033279,
  darksalmon: 3918953215,
  darkseagreen: 2411499519,
  darkslateblue: 1211993087,
  darkslategray: 793726975,
  darkslategrey: 793726975,
  darkturquoise: 13554175,
  darkviolet: 2483082239,
  deeppink: 4279538687,
  deepskyblue: 12582911,
  dimgray: 1768516095,
  dimgrey: 1768516095,
  dodgerblue: 512819199,
  firebrick: 2988581631,
  floralwhite: 4294635775,
  forestgreen: 579543807,
  fuchsia: 4278255615,
  gainsboro: 3705462015,
  ghostwhite: 4177068031,
  gold: 4292280575,
  goldenrod: 3668254975,
  gray: 2155905279,
  green: 8388863,
  greenyellow: 2919182335,
  grey: 2155905279,
  honeydew: 4043305215,
  hotpink: 4285117695,
  indianred: 3445382399,
  indigo: 1258324735,
  ivory: 4294963455,
  khaki: 4041641215,
  lavender: 3873897215,
  lavenderblush: 4293981695,
  lawngreen: 2096890111,
  lemonchiffon: 4294626815,
  lightblue: 2916673279,
  lightcoral: 4034953471,
  lightcyan: 3774873599,
  lightgoldenrodyellow: 4210742015,
  lightgray: 3553874943,
  lightgreen: 2431553791,
  lightgrey: 3553874943,
  lightpink: 4290167295,
  lightsalmon: 4288707327,
  lightseagreen: 548580095,
  lightskyblue: 2278488831,
  lightslategray: 2005441023,
  lightslategrey: 2005441023,
  lightsteelblue: 2965692159,
  lightyellow: 4294959359,
  lime: 16711935,
  limegreen: 852308735,
  linen: 4210091775,
  magenta: 4278255615,
  maroon: 2147483903,
  mediumaquamarine: 1724754687,
  mediumblue: 52735,
  mediumorchid: 3126187007,
  mediumpurple: 2473647103,
  mediumseagreen: 1018393087,
  mediumslateblue: 2070474495,
  mediumspringgreen: 16423679,
  mediumturquoise: 1221709055,
  mediumvioletred: 3340076543,
  midnightblue: 421097727,
  mintcream: 4127193855,
  mistyrose: 4293190143,
  moccasin: 4293178879,
  navajowhite: 4292783615,
  navy: 33023,
  oldlace: 4260751103,
  olive: 2155872511,
  olivedrab: 1804477439,
  orange: 4289003775,
  orangered: 4282712319,
  orchid: 3664828159,
  palegoldenrod: 4008225535,
  palegreen: 2566625535,
  paleturquoise: 2951671551,
  palevioletred: 3681588223,
  papayawhip: 4293907967,
  peachpuff: 4292524543,
  peru: 3448061951,
  pink: 4290825215,
  plum: 3718307327,
  powderblue: 2967529215,
  purple: 2147516671,
  rebeccapurple: 1714657791,
  red: 4278190335,
  rosybrown: 3163525119,
  royalblue: 1097458175,
  saddlebrown: 2336560127,
  salmon: 4202722047,
  sandybrown: 4104413439,
  seagreen: 780883967,
  seashell: 4294307583,
  sienna: 2689740287,
  silver: 3233857791,
  skyblue: 2278484991,
  slateblue: 1784335871,
  slategray: 1887473919,
  slategrey: 1887473919,
  snow: 4294638335,
  springgreen: 16744447,
  steelblue: 1182971135,
  tan: 3535047935,
  teal: 8421631,
  thistle: 3636451583,
  tomato: 4284696575,
  turquoise: 1088475391,
  violet: 4001558271,
  wheat: 4125012991,
  white: 4294967295,
  whitesmoke: 4126537215,
  yellow: 4294902015,
  yellowgreen: 2597139199
};
var $ = "[-+]?\\d*\\.?\\d+";
function J() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
    t[n] = arguments[n];
  }
  return "\\(\\s*(" + t.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var Z = new RegExp("rgb" + J($, $, $));
var ee = new RegExp("rgba" + J($, $, $, $));
var te = new RegExp("hsl" + J($, "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+%"));
var ne = new RegExp("hsla" + J($, "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+%", $));
var re = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
var ie = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
var oe = /^#([0-9a-fA-F]{6})$/;
var ae = /^#([0-9a-fA-F]{8})$/;
function se(e, t, n) {
  if (n < 0) {
    n += 1;
  }
  if (n > 1) {
    n -= 1;
  }
  return n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function ce(e, t, n) {
  var r = n < .5 ? n * (1 + t) : n + t - n * t;
  var i = 2 * n - r;
  var o = se(i, r, e + 1 / 3);
  var a = se(i, r, e);
  var s = se(i, r, e - 1 / 3);
  return Math.round(255 * o) << 24 | Math.round(255 * a) << 16 | Math.round(255 * s) << 8;
}
function ue(e) {
  var t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function le(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function fe(e) {
  var t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
}
function he(e) {
  var t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function de(e) {
  var t = function (e) {
    var t;
    return "number" === typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = oe.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : M && void 0 !== M[e] ? M[e] : (t = Z.exec(e)) ? (ue(t[1]) << 24 | ue(t[2]) << 16 | ue(t[3]) << 8 | 255) >>> 0 : (t = ee.exec(e)) ? (ue(t[1]) << 24 | ue(t[2]) << 16 | ue(t[3]) << 8 | fe(t[4])) >>> 0 : (t = re.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = ae.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = ie.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = te.exec(e)) ? (255 | ce(le(t[1]), he(t[2]), he(t[3]))) >>> 0 : (t = ne.exec(e)) ? (ce(le(t[1]), he(t[2]), he(t[3])) | fe(t[4])) >>> 0 : null;
  }(e);
  if (null === t) {
    return e;
  }
  var n = (16711680 & (t = t || 0)) >>> 16;
  var r = (65280 & t) >>> 8;
  var i = (255 & t) / 255;
  return "rgba(".concat((4278190080 & t) >>> 24, ", ").concat(n, ", ").concat(r, ", ").concat(i, ")");
}
var pe = function e(t, n, r) {
  if (S.fun(t)) {
    return t;
  }
  if (S.arr(t)) {
    return e({
      range: t,
      output: n,
      extrapolate: r
    });
  }
  if (S.str(t.output[0])) {
    return F(t);
  }
  var i = t;
  var o = i.output;
  var a = i.range || [0, 1];
  var s = i.extrapolateLeft || i.extrapolate || "extend";
  var c = i.extrapolateRight || i.extrapolate || "extend";
  var u = i.easing || function (e) {
    return e;
  };
  return function (e) {
    var t = function (e, t) {
      for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n) {
        ;
      }
      return n - 1;
    }(e, a);
    return function (e, t, n, r, i, o, a, s, c) {
      var u = c ? c(e) : e;
      if (u < t) {
        if ("identity" === a) {
          return u;
        }
        if ("clamp" === a) {
          u = t;
        }
      }
      if (u > n) {
        if ("identity" === s) {
          return u;
        }
        if ("clamp" === s) {
          u = n;
        }
      }
      if (r === i) {
        return r;
      }
      if (t === n) {
        return e <= t ? r : i;
      }
      if (t === -1 / 0) {
        u = -u;
      } else {
        if (n === 1 / 0) {
          u -= t;
        } else {
          u = (u - t) / (n - t);
        }
      }
      u = o(u);
      if (r === -1 / 0) {
        u = -u;
      } else {
        if (i === 1 / 0) {
          u += r;
        } else {
          u = u * (i - r) + r;
        }
      }
      return u;
    }(e, a[t], a[t + 1], o[t], o[t + 1], u, s, c, i.map);
  };
};
function _e() {
  return (_e = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
        e[r] = n[r];
      }
    }
    return e;
  }).apply(this, arguments);
}
var Ae = Symbol.for("FluidValue.get");
var ge = Symbol.for("FluidValue.observers");
var ve = function (e) {
  return Boolean(e && e[Ae]);
};
var me = function (e) {
  return e && e[Ae] ? e[Ae]() : e;
};
var ye = function (e) {
  return e[ge] || null;
};
function be(e, t) {
  var n = e[ge];
  if (n) {
    n.forEach(function (e) {
      !function (e, t) {
        if (e.eventObserved) {
          e.eventObserved(t);
        } else {
          e(t);
        }
      }(e, t);
    });
  }
}
var we = function e(t) {
  if (Object(i.a)(this, e), this[Ae] = void 0, this[ge] = void 0, !t && !(t = this.get)) {
    throw Error("Unknown getter");
  }
  Ee(this, t);
};
var Ee = function (e, t) {
  return Se(e, Ae, t);
};
function xe(e, t) {
  if (e[Ae]) {
    var n = e[ge];
    if (!n) {
      Se(e, ge, n = new Set());
    }
    if (!n.has(t)) {
      n.add(t);
      if (e.observerAdded) {
        e.observerAdded(n.size, t);
      }
    }
  }
  return t;
}
function Ce(e, t) {
  var n = e[ge];
  if (n && n.has(t)) {
    var r = n.size - 1;
    if (r) {
      n.delete(t);
    } else {
      e[ge] = null;
    }
    if (e.observerRemoved) {
      e.observerRemoved(r, t);
    }
  }
}
var Oe;
var Se = function (e, t, n) {
  return Object.defineProperty(e, t, {
    value: n,
    writable: !0,
    configurable: !0
  });
};
var ke = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
var Te = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi;
var Be = new RegExp("(".concat(ke.source, ")(%|[a-z]+)"), "i");
var De = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi;
var Ie = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
var Fe = function e(t) {
  var n = Re(t);
  var i = Object(r.a)(n, 2);
  var o = i[0];
  var a = i[1];
  if (!o || N()) {
    return t;
  }
  var s = window.getComputedStyle(document.documentElement).getPropertyValue(o);
  if (s) {
    return s.trim();
  }
  if (a && a.startsWith("--")) {
    var c = window.getComputedStyle(document.documentElement).getPropertyValue(a);
    return c || t;
  }
  return a && Ie.test(a) ? e(a) : a || t;
};
var Re = function (e) {
  var t = Ie.exec(e);
  if (!t) {
    return [,];
  }
  var n = Object(r.a)(t, 3);
  return [n[1], n[2]];
};
var Pe = function (e, t, n, r, i) {
  return "rgba(".concat(Math.round(t), ", ").concat(Math.round(n), ", ").concat(Math.round(r), ", ").concat(i, ")");
};
var Ne = function (e) {
  if (!Oe) {
    Oe = M ? new RegExp("(".concat(Object.keys(M).join("|"), ")(?!\\w)"), "g") : /^\b$/;
  }
  var t = e.output.map(function (e) {
    return me(e).replace(Ie, Fe).replace(Te, de).replace(Oe, de);
  });
  var n = t.map(function (e) {
    return e.match(ke).map(Number);
  });
  var r = n[0].map(function (e, t) {
    return n.map(function (e) {
      if (!(t in e)) {
        throw Error('The arity of each "output" value must be equal');
      }
      return e[t];
    });
  }).map(function (t) {
    return pe(_e({}, e, {
      output: t
    }));
  });
  return function (e) {
    var n;
    var i = !Be.test(t[0]) && (null == (n = t.find(function (e) {
      return Be.test(e);
    })) ? void 0 : n.replace(ke, ""));
    var o = 0;
    return t[0].replace(ke, function () {
      return "".concat(r[o++](e)).concat(i || "");
    }).replace(De, Pe);
  };
};
var Me = "react-spring: ";
var je = function (e) {
  var t = e;
  var n = !1;
  if ("function" != typeof t) {
    throw new TypeError("".concat(Me, "once requires a function parameter"));
  }
  return function () {
    if (!n) {
      t.apply(void 0, arguments);
      n = !0;
    }
  };
};
var Le = je(console.warn);
function Ue() {
  Le("".concat(Me, 'The "interpolate" function is deprecated in v9 (use "to" instead)'));
}
var He = je(console.warn);
function Ve() {
  He("".concat(Me, 'Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions'));
}
function Ge(e) {
  return S.str(e) && ("#" == e[0] || /\d/.test(e) || !N() && Ie.test(e) || e in (M || {}));
}
var ze = function (e) {
  return Object(x.useEffect)(e, Qe);
};
var Qe = [];
function We() {
  var e = Object(x.useState)()[1];
  var t = Object(x.useState)(Ke)[0];
  ze(t.unmount);
  return function () {
    if (t.current) {
      e({});
    }
  };
}
function Ke() {
  var e = {
    current: !0,
    unmount: function () {
      return function () {
        e.current = !1;
      };
    }
  };
  return e;
}
function Xe(e, t) {
  var n = Object(x.useState)(function () {
    return {
      inputs: t,
      result: e()
    };
  });
  var i = Object(r.a)(n, 1)[0];
  var o = Object(x.useRef)();
  var a = o.current;
  var s = a;
  if (s) {
    if (!Boolean(t && s.inputs && function (e, t) {
      if (e.length !== t.length) {
        return !1;
      }
      for (var n = 0; n < e.length; n++) {
        if (e[n] !== t[n]) {
          return !1;
        }
      }
      return !0;
    }(t, s.inputs))) {
      s = {
        inputs: t,
        result: e()
      };
    }
  } else {
    s = i;
  }
  Object(x.useEffect)(function () {
    o.current = s;
    if (a == i) {
      i.inputs = i.result = void 0;
    }
  }, [s]);
  return s.result;
}
function Ye(e) {
  var t = Object(x.useRef)();
  Object(x.useEffect)(function () {
    t.current = e;
  });
  return t.current;
}
var qe = "undefined" !== typeof window && window.document && window.document.createElement ? x.useLayoutEffect : x.useEffect;
export default we;