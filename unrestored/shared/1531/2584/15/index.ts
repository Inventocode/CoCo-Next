"use strict";

export { i as eb };
export { a as M };
export { s as z };
export { c as mb };
export { l as r };
export { u as j };
export { g as a };
export { _ as i };
export { v as hb };
export { b as Z };
export { y as ib };
export { E as v };
export { O as V };
export { w as pb };
export { C as l };
export { T as nb };
export { S as kb };
export { I as C };
export { b as s } from "../450/index";
export { c as u } from "../450/index";
export { g as L } from "../450/index";
export { a as c } from "../450/index";
export { m as qb } from "../450/index";
export { f as I } from "../450/index";
export { n as rb } from "../450/index";
export { e as y } from "../450/index";
export { d as w } from "../450/index";
export { j as fb } from "../450/index";
export { k as gb } from "../450/index";
export { j as W };
export { N as Q };
export { R as h };
export { a as b } from "./311";
export { t as R } from "./311";
export { v as T } from "./311";
export { u as S } from "./311";
export { s as P } from "./311";
export { w as U } from "./311";
export { g as m } from "./311";
export { i as o } from "./311";
export { c as e } from "./311";
export { d as f } from "./311";
export { e as g } from "./311";
export { b as d } from "./311";
export { h as n } from "./311";
export { A as ob } from "./311";
export { q as N } from "./311";
export { f as k } from "./311";
export { z as jb } from "./311";
export { j as x } from "./311";
export { n as E } from "./311";
export { p as J } from "./311";
export { o as F } from "./311";
export { l as B } from "./311";
export { k as A } from "./311";
export { x as X } from "./311";
export { y as Y } from "./311";
export { r as O } from "./311";
export { m as D } from "./311";
export { x as G };
export { D as K };
export { B as db };
export { F as bb };
export { U as p };
export { W as q };
export { H as lb };
export { V as cb };
export { z as ab };
export { Y as H };
export { K as t };
var r = require("../10/index");
var o = require("../47");
function i(e, t, n) {
  return (e / t * 100).toFixed(n);
}
function a(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
function s(e, t) {
  var n = t.indexOf(e);
  return n > -1 ? t[n] : t.reduce(function (t, n) {
    return Math.abs(n - e) < Math.abs(t - e) ? n : t;
  });
}
function c(e) {
  if ("string" !== typeof e || e.startsWith("0x") || "" === e.trim() || "Infinity" === e) {
    return e;
  }
  var t = Number(e);
  return isNaN(t) ? e : t;
}
function l(e, t) {
  var n;
  var r = new Set(e);
  var i = new Set(t);
  var a = [];
  var s = Object(o.a)(r);
  try {
    for (s.s(); !(n = s.n()).done;) {
      var c = n.value;
      if (!i.has(c)) {
        a.push(c);
      }
    }
  } catch (l) {
    s.e(l);
  } finally {
    s.f();
  }
  return a;
}
function u(e) {
  return /^[\u4E00-\u9FA5A-Za-z][\u4E00-\u9FA5A-Za-z0-9_]*$/.test(e);
}
var d = require("../51/index");
var p = function __importDefault(module) {
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
}(d);
var f = require("../31/index");
var h = require("../13/225");
var m = function __importDefault(module) {
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
}(h);
var g = "#B3B3B3";
var _ = function (e) {
  return "#00000000" === e || "rgba(0,0,0,0)" === e || "transparent" === e;
};
var v = function (e, t) {
  return p()(e).fade(1 - t).string();
};
var b = function (e) {
  return "#ffffff" === p()(e).hex().toLowerCase();
};
var y = function (e, t) {
  window.Color = p.a;
  return p()(e).darken(t).hex();
};
var E = function (e) {
  try {
    return p()(e).toString();
  } catch (t) {
    console.error("formatColor error", e);
  }
  return e;
};
var O = function (e) {
  return p()(e).hsl().lightness() > 85.7;
};
var w = function (e) {
  if ("string" !== typeof e) {
    return !1;
  }
  var t = !0;
  try {
    p()(e).toString();
  } catch (n) {
    t = !1;
  }
  return t;
};
var C = function (e) {
  var t = e.alpha();
  var n = Math.round(255 * Object(f.clamp)(t, 0, 1));
  var r = n.toString(16);
  var o = n <= 15 ? "0".concat(r) : r;
  return e.hex() + o.toUpperCase();
};
function T(e) {
  try {
    return C(p()(e));
  } catch (t) {
    return "";
  }
}
var S = function (e) {
  var t = 0;
  var n = 0;
  Object(f.each)(["r", "g", "b", "a", "h", "s", "l", "v"], function (r) {
    if (e[r] && (t += 1, isNaN(e[r]) || (n += 1), "s" === r || "l" === r)) {
      if (/^\d+%$/.test(e[r])) {
        n += 1;
      }
    }
  });
  return t === n && e;
};
var I = function (e, t) {
  var n = e.HEX ? m()(e.HEX) : m()(e);
  var r = n.toHsl();
  var o = n.toHsv();
  var i = n.toRgb();
  var a = n.toHex();
  if (0 === r.s) {
    r.h = t || 0;
    o.h = t || 0;
  }
  return {
    hsl: r,
    hex: "000000" === a && 0 === i.a ? "transparent" : "#".concat(a),
    rgb: i,
    hsv: o,
    oldHue: e.h || t || r.h,
    source: e.source
  };
};
var A = require("../450/index");
function j() {
  var e = navigator.userAgent;
  return !!["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"].find(function (t) {
    return e.includes(t);
  });
}
function N() {
  return navigator.userAgent.includes("Chrome");
}
function R() {
  var e = navigator.userAgent.indexOf("Chrome") > -1;
  return navigator.userAgent.indexOf("Safari") > -1 && !e;
}
var k = require("./311");
function x(e, t) {
  var n = new Date(e);
  n.setDate(n.getDate() + t);
  n.setHours(0);
  n.setMinutes(0);
  n.setSeconds(0);
  n.setMilliseconds(0);
  return n.getTime();
}
function D(e) {
  var t = e.getHours();
  var n = "0".concat(e.getMinutes()).slice(-2);
  return "".concat(t, ":").concat(n);
}
var M = require("../1/index");
var L = function __importDefault(module) {
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
}(M);
var P = require("../7");
var B = {};
function F(e, t) {
  return G.apply(this, arguments);
}
function G() {
  return (G = Object(P.a)(L.a.mark(function e(t, n) {
    var r;
    return L.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = new FontFace(t, "url(".concat(n, ")"));
            e.next = 3;
            return r.load();
          case 3:
            document.fonts.add(r);
          case 4:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function U(e, t, n) {
  var r = null;
  return n ? function () {
    if (r) {
      window.clearTimeout(r);
    }
    if (!r) {
      for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) {
        o[i] = arguments[i];
      }
      e.apply(this, o);
    }
    r = window.setTimeout(function () {
      r = null;
    }, t);
  } : function () {
    for (var n = this, o = arguments.length, i = new Array(o), a = 0; a < o; a++) {
      i[a] = arguments[a];
    }
    if (r) {
      window.clearTimeout(r);
    }
    r = window.setTimeout(function () {
      return e.apply(n, i);
    }, t);
  };
}
function W(e) {
  if ("object" === typeof e) {
    var t = Array.isArray(e) ? [] : {};
    Object.entries(e).forEach(function (e) {
      var n = Object(r.a)(e, 2);
      var o = n[0];
      var i = n[1];
      t[o] = W(i);
    });
    return t;
  }
  return e;
}
function H(e) {
  return new Promise(function (t) {
    setTimeout(function () {
      t();
    }, e);
  });
}
function V(e) {
  return new Promise(function (t, n) {
    var r = document.createElement("script");
    r.onload = function () {
      t(null);
    };
    r.src = e;
    document.head.appendChild(r);
  });
}
function z(e) {
  return new Promise(function (t, n) {
    var r = document.createElement("link");
    r.setAttribute("rel", "stylesheet");
    r.onload = function () {
      t(null);
    };
    r.onerror = function () {
      n();
    };
    r.setAttribute("href", e);
    document.head.appendChild(r);
  });
}
function Y(e, t) {
  if (e && t) {
    var n = e.getClientRects()[0];
    var r = t.getClientRects()[0];
    return {
      left: n.x - r.x,
      top: n.y - r.y
    };
  }
}
function K(e) {
  return e && e.replace ? e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\\/g, "&#92;").replace(/\'/g, "&#39;").replace(/\"/g, "&quot;") : e;
}
export default g;