"use strict";

var r;
var i = require("../../33/index");
var o = require("../../108");
var a = require("react");
var s = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
}(a);
var c = require("../../1502/428");
var u = require("./1456");
function l(e) {
  return (l = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  })(e);
}
function f(e, t, n) {
  if (t in e) {
    Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    });
  } else {
    e[t] = n;
  }
  return e;
}
function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    if (t) {
      r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      });
    }
    n.push.apply(n, r);
  }
  return n;
}
var h = {
  Webkit: "-webkit-",
  Moz: "-moz-",
  ms: "-ms-",
  O: "-o-"
};
function p() {
  if (void 0 !== r) {
    return r;
  }
  r = "";
  var e = document.createElement("p").style;
  for (var t in h) if (t + "Transform" in e) {
    r = t;
  }
  return r;
}
function _() {
  return p() ? "".concat(p(), "TransitionProperty") : "transitionProperty";
}
function A() {
  return p() ? "".concat(p(), "Transform") : "transform";
}
function g(e, t) {
  var n = _();
  if (n) {
    e.style[n] = t;
    if ("transitionProperty" !== n) {
      e.style.transitionProperty = t;
    }
  }
}
function v(e, t) {
  var n = A();
  if (n) {
    e.style[n] = t;
    if ("transform" !== n) {
      e.style.transform = t;
    }
  }
}
var m;
var y = /matrix\((.*)\)/;
var b = /matrix3d\((.*)\)/;
function w(e) {
  var t = e.style.display;
  e.style.display = "none";
  e.offsetHeight;
  e.style.display = t;
}
function E(e, t, n) {
  var r = n;
  if ("object" !== l(t)) {
    return "undefined" !== typeof r ? ("number" === typeof r && (r = "".concat(r, "px")), void (e.style[t] = r)) : m(e, t);
  }
  for (var i in t) if (t.hasOwnProperty(i)) {
    E(e, i, t[i]);
  }
}
function x(e, t) {
  var n = e["page".concat(t ? "Y" : "X", "Offset")];
  var r = "scroll".concat(t ? "Top" : "Left");
  if ("number" !== typeof n) {
    var i = e.document;
    if ("number" !== typeof (n = i.documentElement[r])) {
      n = i.body[r];
    }
  }
  return n;
}
function C(e) {
  return x(e);
}
function O(e) {
  return x(e, !0);
}
function k(e) {
  var t = function (e) {
    var t;
    var n;
    var r;
    var i = e.ownerDocument;
    var o = i.body;
    var a = i && i.documentElement;
    n = (t = e.getBoundingClientRect()).left;
    r = t.top;
    return {
      left: n -= a.clientLeft || o.clientLeft || 0,
      top: r -= a.clientTop || o.clientTop || 0
    };
  }(e);
  var n = e.ownerDocument;
  var r = n.defaultView || n.parentWindow;
  t.left += C(r);
  t.top += O(r);
  return t;
}
function S(e) {
  return null !== e && void 0 !== e && e == e.window;
}
function T(e) {
  return S(e) ? e.document : 9 === e.nodeType ? e : e.ownerDocument;
}
var B = new RegExp("^(".concat(/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, ")(?!px)[a-z%]+$"), "i");
var D = /^(top|right|bottom|left)$/;
var I = "left";
function F(e, t) {
  return "left" === e ? t.useCssRight ? "right" : e : t.useCssBottom ? "bottom" : e;
}
function R(e) {
  return "left" === e ? "right" : "right" === e ? "left" : "top" === e ? "bottom" : "bottom" === e ? "top" : void 0;
}
function P(e, t, n) {
  if ("static" === E(e, "position")) {
    e.style.position = "relative";
  }
  var r = -999;
  var i = -999;
  var o = F("left", n);
  var a = F("top", n);
  var s = R(o);
  var c = R(a);
  if ("left" !== o) {
    r = 999;
  }
  if ("top" !== a) {
    i = 999;
  }
  var u;
  var l = "";
  var f = k(e);
  if ("left" in t || "top" in t) {
    l = (u = e).style.transitionProperty || u.style[_()] || "";
    g(e, "none");
  }
  if ("left" in t) {
    e.style[s] = "";
    e.style[o] = "".concat(r, "px");
  }
  if ("top" in t) {
    e.style[c] = "";
    e.style[a] = "".concat(i, "px");
  }
  w(e);
  var d = k(e);
  var h = {};
  for (var p in t) if (t.hasOwnProperty(p)) {
    var A = F(p, n);
    var v = "left" === p ? r : i;
    var m = f[p] - d[p];
    h[A] = A === p ? v + m : v - m;
  }
  E(e, h);
  w(e);
  if ("left" in t || "top" in t) {
    g(e, l);
  }
  var y = {};
  for (var b in t) if (t.hasOwnProperty(b)) {
    var x = F(b, n);
    var C = t[b] - f[b];
    y[x] = b === x ? h[x] + C : h[x] - C;
  }
  E(e, y);
}
function N(e, t) {
  var n = k(e);
  var r = function (e) {
    var t = window.getComputedStyle(e, null);
    var n = t.getPropertyValue("transform") || t.getPropertyValue(A());
    if (n && "none" !== n) {
      var r = n.replace(/[^0-9\-.,]/g, "").split(",");
      return {
        x: parseFloat(r[12] || r[4], 0),
        y: parseFloat(r[13] || r[5], 0)
      };
    }
    return {
      x: 0,
      y: 0
    };
  }(e);
  var i = {
    x: r.x,
    y: r.y
  };
  if ("left" in t) {
    i.x = r.x + t.left - n.left;
  }
  if ("top" in t) {
    i.y = r.y + t.top - n.top;
  }
  (function (e, t) {
    var n = window.getComputedStyle(e, null);
    var r = n.getPropertyValue("transform") || n.getPropertyValue(A());
    if (r && "none" !== r) {
      var i;
      var o = r.match(y);
      if (o) {
        (i = (o = o[1]).split(",").map(function (e) {
          return parseFloat(e, 10);
        }))[4] = t.x;
        i[5] = t.y;
        v(e, "matrix(".concat(i.join(","), ")"));
      } else {
        (i = r.match(b)[1].split(",").map(function (e) {
          return parseFloat(e, 10);
        }))[12] = t.x;
        i[13] = t.y;
        v(e, "matrix3d(".concat(i.join(","), ")"));
      }
    } else {
      v(e, "translateX(".concat(t.x, "px) translateY(").concat(t.y, "px) translateZ(0)"));
    }
  })(e, i);
}
function M(e, t) {
  for (var n = 0; n < e.length; n++) {
    t(e[n]);
  }
}
function j(e) {
  return "border-box" === m(e, "boxSizing");
}
if ("undefined" !== typeof window) {
  m = window.getComputedStyle ? function (e, t, n) {
    var r = n;
    var i = "";
    var o = T(e);
    if (r = r || o.defaultView.getComputedStyle(e, null)) {
      i = r.getPropertyValue(t) || r[t];
    }
    return i;
  } : function (e, t) {
    var n = e.currentStyle && e.currentStyle[t];
    if (B.test(n) && !D.test(t)) {
      var r = e.style;
      var i = r[I];
      var o = e.runtimeStyle[I];
      e.runtimeStyle[I] = e.currentStyle[I];
      r[I] = "fontSize" === t ? "1em" : n || 0;
      n = r.pixelLeft + "px";
      r[I] = i;
      e.runtimeStyle[I] = o;
    }
    return "" === n ? "auto" : n;
  };
}
var L = ["margin", "border", "padding"];
function U(e, t, n) {
  var r;
  var i = {};
  var o = e.style;
  for (r in t) if (t.hasOwnProperty(r)) {
    i[r] = o[r];
    o[r] = t[r];
  }
  for (r in n.call(e), t) if (t.hasOwnProperty(r)) {
    o[r] = i[r];
  }
}
function H(e, t, n) {
  var r;
  var i;
  var o;
  var a = 0;
  for (i = 0; i < t.length; i++) {
    if (r = t[i]) {
      for (o = 0; o < n.length; o++) {
        var s = void 0;
        s = "border" === r ? "".concat(r).concat(n[o], "Width") : r + n[o];
        a += parseFloat(m(e, s)) || 0;
      }
    }
  }
  return a;
}
var V = {
  getParent: function (e) {
    var t = e;
    do {
      t = 11 === t.nodeType && t.host ? t.host : t.parentNode;
    } while (t && 1 !== t.nodeType && 9 !== t.nodeType);
    return t;
  }
};
function G(e, t, n) {
  var r = n;
  if (S(e)) {
    return "width" === t ? V.viewportWidth(e) : V.viewportHeight(e);
  }
  if (9 === e.nodeType) {
    return "width" === t ? V.docWidth(e) : V.docHeight(e);
  }
  var i = "width" === t ? ["Left", "Right"] : ["Top", "Bottom"];
  var o = "width" === t ? e.getBoundingClientRect().width : e.getBoundingClientRect().height;
  m(e);
  var a = j(e);
  var s = 0;
  if (null === o || void 0 === o || o <= 0) {
    o = void 0;
    if (null === (s = m(e, t)) || void 0 === s || Number(s) < 0) {
      s = e.style[t] || 0;
    }
    s = parseFloat(s) || 0;
  }
  if (void 0 === r) {
    r = a ? 1 : -1;
  }
  var c = void 0 !== o || a;
  var u = o || s;
  return -1 === r ? c ? u - H(e, ["border", "padding"], i) : s : c ? 1 === r ? u : u + (2 === r ? -H(e, ["border"], i) : H(e, ["margin"], i)) : s + H(e, L.slice(r), i);
}
M(["Width", "Height"], function (e) {
  V["doc".concat(e)] = function (t) {
    var n = t.document;
    return Math.max(n.documentElement["scroll".concat(e)], n.body["scroll".concat(e)], V["viewport".concat(e)](n));
  };
  V["viewport".concat(e)] = function (t) {
    var n = "client".concat(e);
    var r = t.document;
    var i = r.body;
    var o = r.documentElement[n];
    return "CSS1Compat" === r.compatMode && o || i && i[n] || o;
  };
});
var z = {
  position: "absolute",
  visibility: "hidden",
  display: "block"
};
function Q() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
    t[n] = arguments[n];
  }
  var r;
  var i = t[0];
  if (0 !== i.offsetWidth) {
    r = G.apply(void 0, t);
  } else {
    U(i, z, function () {
      r = G.apply(void 0, t);
    });
  }
  return r;
}
function W(e, t) {
  for (var n in t) if (t.hasOwnProperty(n)) {
    e[n] = t[n];
  }
  return e;
}
M(["width", "height"], function (e) {
  var t = e.charAt(0).toUpperCase() + e.slice(1);
  V["outer".concat(t)] = function (t, n) {
    return t && Q(t, e, n ? 0 : 1);
  };
  var n = "width" === e ? ["Left", "Right"] : ["Top", "Bottom"];
  V[e] = function (t, r) {
    var i = r;
    if (void 0 === i) {
      return t && Q(t, e, -1);
    }
    if (t) {
      m(t);
      if (j(t)) {
        i += H(t, ["padding", "border"], n);
      }
      return E(t, e, i);
    }
  };
});
var K = {
  getWindow: function (e) {
    if (e && e.document && e.setTimeout) {
      return e;
    }
    var t = e.ownerDocument || e;
    return t.defaultView || t.parentWindow;
  },
  getDocument: T,
  offset: function (e, t, n) {
    if ("undefined" === typeof t) {
      return k(e);
    }
    !function (e, t, n) {
      if (n.ignoreShake) {
        var r = k(e);
        var i = r.left.toFixed(0);
        var o = r.top.toFixed(0);
        var a = t.left.toFixed(0);
        var s = t.top.toFixed(0);
        if (i === a && o === s) {
          return;
        }
      }
      if (n.useCssRight || n.useCssBottom) {
        P(e, t, n);
      } else {
        if (n.useCssTransform && A() in document.body.style) {
          N(e, t);
        } else {
          P(e, t, n);
        }
      }
    }(e, t, n || {});
  },
  isWindow: S,
  each: M,
  css: E,
  clone: function (e) {
    var t;
    var n = {};
    for (t in e) if (e.hasOwnProperty(t)) {
      n[t] = e[t];
    }
    if (e.overflow) {
      for (t in e) if (e.hasOwnProperty(t)) {
        n.overflow[t] = e.overflow[t];
      }
    }
    return n;
  },
  mix: W,
  getWindowScrollLeft: function (e) {
    return C(e);
  },
  getWindowScrollTop: function (e) {
    return O(e);
  },
  merge: function () {
    for (var e = {}, t = 0; t < arguments.length; t++) {
      K.mix(e, t < 0 || arguments.length <= t ? void 0 : arguments[t]);
    }
    return e;
  },
  viewportWidth: 0,
  viewportHeight: 0
};
W(K, V);
var X = K.getParent;
function Y(e) {
  if (K.isWindow(e) || 9 === e.nodeType) {
    return null;
  }
  var t;
  var n = K.getDocument(e).body;
  var r = K.css(e, "position");
  if (!("fixed" === r || "absolute" === r)) {
    return "html" === e.nodeName.toLowerCase() ? null : X(e);
  }
  for (t = X(e); t && t !== n && 9 !== t.nodeType; t = X(t)) {
    if ("static" !== (r = K.css(t, "position"))) {
      return t;
    }
  }
  return null;
}
var q = K.getParent;
function $(e, t) {
  for (var n = {
      left: 0,
      right: 1 / 0,
      top: 0,
      bottom: 1 / 0
    }, r = Y(e), i = K.getDocument(e), o = i.defaultView || i.parentWindow, a = i.body, s = i.documentElement; r;) {
    if (-1 !== navigator.userAgent.indexOf("MSIE") && 0 === r.clientWidth || r === a || r === s || "visible" === K.css(r, "overflow")) {
      if (r === a || r === s) {
        break;
      }
    } else {
      var c = K.offset(r);
      c.left += r.clientLeft;
      c.top += r.clientTop;
      n.top = Math.max(n.top, c.top);
      n.right = Math.min(n.right, c.left + r.clientWidth);
      n.bottom = Math.min(n.bottom, c.top + r.clientHeight);
      n.left = Math.max(n.left, c.left);
    }
    r = Y(r);
  }
  var u = null;
  if (!(K.isWindow(e) || 9 === e.nodeType)) {
    u = e.style.position;
    if ("absolute" === K.css(e, "position")) {
      e.style.position = "fixed";
    }
  }
  var l = K.getWindowScrollLeft(o);
  var f = K.getWindowScrollTop(o);
  var d = K.viewportWidth(o);
  var h = K.viewportHeight(o);
  var p = s.scrollWidth;
  var _ = s.scrollHeight;
  var A = window.getComputedStyle(a);
  if ("hidden" === A.overflowX) {
    p = o.innerWidth;
  }
  if ("hidden" === A.overflowY) {
    _ = o.innerHeight;
  }
  if (e.style) {
    e.style.position = u;
  }
  if (t || function (e) {
    if (K.isWindow(e) || 9 === e.nodeType) {
      return !1;
    }
    var t = K.getDocument(e).body;
    var n = null;
    for (n = q(e); n && n !== t; n = q(n)) {
      if ("fixed" === K.css(n, "position")) {
        return !0;
      }
    }
    return !1;
  }(e)) {
    n.left = Math.max(n.left, l);
    n.top = Math.max(n.top, f);
    n.right = Math.min(n.right, l + d);
    n.bottom = Math.min(n.bottom, f + h);
  } else {
    var g = Math.max(p, l + d);
    n.right = Math.min(n.right, g);
    var v = Math.max(_, f + h);
    n.bottom = Math.min(n.bottom, v);
  }
  return n.top >= 0 && n.left >= 0 && n.bottom > n.top && n.right > n.left ? n : null;
}
function J(e) {
  var t;
  var n;
  var r;
  if (K.isWindow(e) || 9 === e.nodeType) {
    var i = K.getWindow(e);
    t = {
      left: K.getWindowScrollLeft(i),
      top: K.getWindowScrollTop(i)
    };
    n = K.viewportWidth(i);
    r = K.viewportHeight(i);
  } else {
    t = K.offset(e);
    n = K.outerWidth(e);
    r = K.outerHeight(e);
  }
  t.width = n;
  t.height = r;
  return t;
}
function Z(e, t) {
  var n = t.charAt(0);
  var r = t.charAt(1);
  var i = e.width;
  var o = e.height;
  var a = e.left;
  var s = e.top;
  if ("c" === n) {
    s += o / 2;
  } else {
    if ("b" === n) {
      s += o;
    }
  }
  if ("c" === r) {
    a += i / 2;
  } else {
    if ("r" === r) {
      a += i;
    }
  }
  return {
    left: a,
    top: s
  };
}
function ee(e, t, n, r, i) {
  var o = Z(t, n[1]);
  var a = Z(e, n[0]);
  var s = [a.left - o.left, a.top - o.top];
  return {
    left: Math.round(e.left - s[0] + r[0] - i[0]),
    top: Math.round(e.top - s[1] + r[1] - i[1])
  };
}
function te(e, t, n) {
  return e.left < n.left || e.left + t.width > n.right;
}
function ne(e, t, n) {
  return e.top < n.top || e.top + t.height > n.bottom;
}
function re(e, t, n) {
  var r = [];
  K.each(e, function (e) {
    r.push(e.replace(t, function (e) {
      return n[e];
    }));
  });
  return r;
}
function ie(e, t) {
  e[t] = -e[t];
  return e;
}
function oe(e, t) {
  return (/%$/.test(e) ? parseInt(e.substring(0, e.length - 1), 10) / 100 * t : parseInt(e, 10)) || 0;
}
function ae(e, t) {
  e[0] = oe(e[0], t.width);
  e[1] = oe(e[1], t.height);
}
function se(e, t, n, r) {
  var i = n.points;
  var o = n.offset || [0, 0];
  var a = n.targetOffset || [0, 0];
  var s = n.overflow;
  var c = n.source || e;
  o = [].concat(o);
  a = [].concat(a);
  var u = {};
  var l = 0;
  var f = $(c, !(!(s = s || {}) || !s.alwaysByViewport));
  var d = J(c);
  ae(o, d);
  ae(a, t);
  var h = ee(d, t, i, o, a);
  var p = K.merge(d, h);
  if (f && (s.adjustX || s.adjustY) && r) {
    if (s.adjustX && te(h, d, f)) {
      var _ = re(i, /[lr]/gi, {
        l: "r",
        r: "l"
      });
      var A = ie(o, 0);
      var g = ie(a, 0);
      if (!function (e, t, n) {
        return e.left > n.right || e.left + t.width < n.left;
      }(ee(d, t, _, A, g), d, f)) {
        l = 1;
        i = _;
        o = A;
        a = g;
      }
    }
    if (s.adjustY && ne(h, d, f)) {
      var v = re(i, /[tb]/gi, {
        t: "b",
        b: "t"
      });
      var m = ie(o, 1);
      var y = ie(a, 1);
      if (!function (e, t, n) {
        return e.top > n.bottom || e.top + t.height < n.top;
      }(ee(d, t, v, m, y), d, f)) {
        l = 1;
        i = v;
        o = m;
        a = y;
      }
    }
    if (l) {
      h = ee(d, t, i, o, a);
      K.mix(p, h);
    }
    var b = te(h, d, f);
    var w = ne(h, d, f);
    if (b || w) {
      var E = i;
      if (b) {
        E = re(i, /[lr]/gi, {
          l: "r",
          r: "l"
        });
      }
      if (w) {
        E = re(i, /[tb]/gi, {
          t: "b",
          b: "t"
        });
      }
      i = E;
      o = n.offset || [0, 0];
      a = n.targetOffset || [0, 0];
    }
    u.adjustX = s.adjustX && b;
    u.adjustY = s.adjustY && w;
    if (u.adjustX || u.adjustY) {
      p = function (e, t, n, r) {
        var i = K.clone(e);
        var o = {
          width: t.width,
          height: t.height
        };
        if (r.adjustX && i.left < n.left) {
          i.left = n.left;
        }
        if (r.resizeWidth && i.left >= n.left && i.left + o.width > n.right) {
          o.width -= i.left + o.width - n.right;
        }
        if (r.adjustX && i.left + o.width > n.right) {
          i.left = Math.max(n.right - o.width, n.left);
        }
        if (r.adjustY && i.top < n.top) {
          i.top = n.top;
        }
        if (r.resizeHeight && i.top >= n.top && i.top + o.height > n.bottom) {
          o.height -= i.top + o.height - n.bottom;
        }
        if (r.adjustY && i.top + o.height > n.bottom) {
          i.top = Math.max(n.bottom - o.height, n.top);
        }
        return K.mix(i, o);
      }(h, d, f, u);
    }
  }
  if (p.width !== d.width) {
    K.css(c, "width", K.width(c) + p.width - d.width);
  }
  if (p.height !== d.height) {
    K.css(c, "height", K.height(c) + p.height - d.height);
  }
  K.offset(c, {
    left: p.left,
    top: p.top
  }, {
    useCssRight: n.useCssRight,
    useCssBottom: n.useCssBottom,
    useCssTransform: n.useCssTransform,
    ignoreShake: n.ignoreShake
  });
  return {
    points: i,
    offset: o,
    targetOffset: a,
    overflow: u
  };
}
function ce(e, t, n) {
  var r = n.target || t;
  return se(e, J(r), n, !function (e, t) {
    var n = $(e, t);
    var r = J(e);
    return !n || r.left + r.width <= n.left || r.top + r.height <= n.top || r.left >= n.right || r.top >= n.bottom;
  }(r, n.overflow && n.overflow.alwaysByViewport));
}
function ue(e, t, n) {
  var r;
  var i;
  var o = K.getDocument(e);
  var a = o.defaultView || o.parentWindow;
  var s = K.getWindowScrollLeft(a);
  var c = K.getWindowScrollTop(a);
  var u = K.viewportWidth(a);
  var l = K.viewportHeight(a);
  r = "pageX" in t ? t.pageX : s + t.clientX;
  i = "pageY" in t ? t.pageY : c + t.clientY;
  var h = r >= 0 && r <= s + u && i >= 0 && i <= c + l;
  return se(e, {
    left: r,
    top: i,
    width: 0,
    height: 0
  }, function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      if (t % 2) {
        d(n, !0).forEach(function (t) {
          f(e, t, n[t]);
        });
      } else {
        if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
        } else {
          d(n).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
        }
      }
    }
    return e;
  }({}, n, {
    points: [n.points[0], "cc"]
  }), h);
}
ce.__getOffsetParent = Y;
ce.__getVisibleRectForElement = $;
var le = require("../../1502/488");
var fe = require("resize-observer-polyfill");
var de = require("../../1502/558");
function he(e, t) {
  var n = null;
  var r = null;
  var o = new fe.default(function (e) {
    var o = Object(i.a)(e, 1)[0].target;
    if (document.documentElement.contains(o)) {
      var a = o.getBoundingClientRect();
      var s = a.width;
      var c = a.height;
      var u = Math.floor(s);
      var l = Math.floor(c);
      if (!(n === u && r === l)) {
        Promise.resolve().then(function () {
          t({
            width: u,
            height: l
          });
        });
      }
      n = u;
      r = l;
    }
  });
  if (e) {
    o.observe(e);
  }
  return function () {
    o.disconnect();
  };
}
function pe(e) {
  return "function" !== typeof e ? null : e();
}
function _e(e) {
  return "object" === Object(o.a)(e) && e ? e : null;
}
var Ae = s.a.forwardRef(function (e, t) {
  var n = e.children;
  var r = e.disabled;
  var o = e.target;
  var a = e.align;
  var l = e.onAlign;
  var f = e.monitorWindowResize;
  var d = e.monitorBufferTime;
  var h = void 0 === d ? 0 : d;
  var p = s.a.useRef({});
  var _ = s.a.useRef();
  var A = s.a.Children.only(n);
  var g = s.a.useRef({});
  g.current.disabled = r;
  g.current.target = o;
  g.current.onAlign = l;
  var v = function (e, t) {
    var n = s.a.useRef(!1);
    var r = s.a.useRef(null);
    function i() {
      window.clearTimeout(r.current);
    }
    return [function o(a) {
      if (n.current && !0 !== a) {
        i();
        r.current = window.setTimeout(function () {
          n.current = !1;
          o();
        }, t);
      } else {
        if (!1 === e()) {
          return;
        }
        n.current = !0;
        i();
        r.current = window.setTimeout(function () {
          n.current = !1;
        }, t);
      }
    }, function () {
      n.current = !1;
      i();
    }];
  }(function () {
    var e = g.current;
    var t = e.disabled;
    var n = e.target;
    var r = e.onAlign;
    if (!t && n) {
      var i;
      var o = _.current;
      var s = pe(n);
      var c = _e(n);
      p.current.element = s;
      p.current.point = c;
      var l = document.activeElement;
      if (s && Object(u.a)(s)) {
        i = ce(o, s, a);
      } else {
        if (c) {
          i = ue(o, c, a);
        }
      }
      (function (e, t) {
        if (e !== document.activeElement && Object(de.a)(t, e) && "function" === typeof e.focus) {
          e.focus();
        }
      })(l, o);
      if (r && i) {
        r(o, i);
      }
      return !0;
    }
    return !1;
  }, h);
  var m = Object(i.a)(v, 2);
  var y = m[0];
  var b = m[1];
  var w = s.a.useRef({
    cancel: function () {}
  });
  var E = s.a.useRef({
    cancel: function () {}
  });
  s.a.useEffect(function () {
    var e;
    var t;
    var n = pe(o);
    var r = _e(o);
    if (_.current !== E.current.element) {
      E.current.cancel();
      E.current.element = _.current;
      E.current.cancel = he(_.current, y);
    }
    if (!(p.current.element === n && ((e = p.current.point) === (t = r) || e && t && ("pageX" in t && "pageY" in t ? e.pageX === t.pageX && e.pageY === t.pageY : "clientX" in t && "clientY" in t && e.clientX === t.clientX && e.clientY === t.clientY)))) {
      y();
      if (w.current.element !== n) {
        w.current.cancel();
        w.current.element = n;
        w.current.cancel = he(n, y);
      }
    }
  });
  s.a.useEffect(function () {
    if (r) {
      b();
    } else {
      y();
    }
  }, [r]);
  var x = s.a.useRef(null);
  s.a.useEffect(function () {
    if (f) {
      if (!x.current) {
        x.current = Object(le.a)(window, "resize", y);
      }
    } else {
      if (x.current) {
        x.current.remove();
        x.current = null;
      }
    }
  }, [f]);
  s.a.useEffect(function () {
    return function () {
      w.current.cancel();
      E.current.cancel();
      if (x.current) {
        x.current.remove();
      }
      b();
    };
  }, []);
  s.a.useImperativeHandle(t, function () {
    return {
      forceAlign: function () {
        return y(!0);
      }
    };
  });
  if (s.a.isValidElement(A)) {
    A = s.a.cloneElement(A, {
      ref: Object(c.a)(A.ref, _)
    });
  }
  return A;
});
Ae.displayName = "Align";
var ge = Ae;
export { ge as a };
export default ge;