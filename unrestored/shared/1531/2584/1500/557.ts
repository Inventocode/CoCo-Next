"use strict";

import r = require("../19");
import o = require("../20");
import i = require("../33/index");
import a = require("../54");
import s = require("react");
import c = require("../8");
var l = function __importDefault(module) {
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
}(c);
import u = require("../1504/788");
function d(e, t) {
  var n = e.prefixCls;
  var i = e.invalidate;
  var c = e.item;
  var d = e.renderItem;
  var p = e.responsive;
  var f = e.registerSize;
  var h = e.itemKey;
  var m = e.className;
  var g = e.style;
  var _ = e.children;
  var v = e.display;
  var b = e.order;
  var y = e.component;
  var E = undefined === y ? "div" : y;
  var O = a.a(e, ["prefixCls", "invalidate", "item", "renderItem", "responsive", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"]);
  var w = p && !v;
  function C(e) {
    f(h, e);
  }
  s.useEffect(function () {
    return function () {
      C(null);
    };
  }, []);
  var T;
  var S = d && undefined !== c ? d(c) : _;
  if (!i) {
    T = {
      opacity: w ? 0 : 1,
      height: w ? 0 : undefined,
      overflowY: w ? "hidden" : undefined,
      order: p ? b : undefined,
      pointerEvents: w ? "none" : undefined,
      position: w ? "absolute" : undefined
    };
  }
  var I = {};
  if (w) {
    I["aria-hidden"] = true;
  }
  var A = s.createElement(E, r.a({
    className: l()(!i && n, m),
    style: o.a(o.a({}, T), g)
  }, I, O, {
    ref: t
  }), S);
  if (p) {
    A = s.createElement(u.a, {
      onResize: function (e) {
        C(e.offsetWidth);
      }
    }, A);
  }
  return A;
}
var p = s.forwardRef(d);
p.displayName = "Item";
var f = p;
var h = function (e) {
  return +setTimeout(e, 16);
};
var m = function (e) {
  return clearTimeout(e);
};
if ("undefined" !== typeof window && "requestAnimationFrame" in window) {
  h = function (e) {
    return window.requestAnimationFrame(e);
  };
  m = function (e) {
    return window.cancelAnimationFrame(e);
  };
}
var g = 0;
var _ = new Map();
function v(e) {
  _.delete(e);
}
function b(e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 1;
  var n = g += 1;
  function r(t) {
    if (0 === t) {
      v(n);
      e();
    } else {
      var o = h(function () {
        r(t - 1);
      });
      _.set(n, o);
    }
  }
  r(t);
  return n;
}
b.cancel = function (e) {
  var t = _.get(e);
  v(t);
  return m(t);
};
var y = function (e, t) {
  var n = s.useContext(w);
  if (!n) {
    var o = e.component;
    var i = undefined === o ? "div" : o;
    var c = a.a(e, ["component"]);
    return s.createElement(i, r.a({}, c, {
      ref: t
    }));
  }
  var u = n.className;
  var d = a.a(n, ["className"]);
  var p = e.className;
  var h = a.a(e, ["className"]);
  return s.createElement(w.Provider, {
    value: null
  }, s.createElement(f, r.a({
    ref: t,
    className: l()(u, p)
  }, d, h)));
};
var E = s.forwardRef(y);
E.displayName = "RawItem";
var O = E;
var w = s.createContext(null);
function C(e) {
  return "+ ".concat(e.length, " ...");
}
function T(e, t) {
  var n = e.prefixCls;
  var c = undefined === n ? "rc-overflow" : n;
  var d = e.data;
  var p = undefined === d ? [] : d;
  var h = e.renderItem;
  var m = e.renderRawItem;
  var g = e.itemKey;
  var _ = e.itemWidth;
  var v = undefined === _ ? 10 : _;
  var y = e.ssr;
  var E = e.style;
  var O = e.className;
  var T = e.maxCount;
  var S = e.renderRest;
  var I = e.renderRawRest;
  var A = e.suffix;
  var j = e.component;
  var N = undefined === j ? "div" : j;
  var R = e.itemComponent;
  var k = e.onVisibleChange;
  var x = a.a(e, ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"]);
  var D = function () {
    var e = s.useState({});
    var t = i.a(e, 2)[1];
    var n = s.useRef([]);
    var r = s.useRef(false);
    var o = 0;
    var a = 0;
    s.useEffect(function () {
      return function () {
        r.current = true;
      };
    }, []);
    return function (e) {
      var i = o;
      o += 1;
      if (n.current.length < i + 1) {
        n.current[i] = e;
      }
      return [n.current[i], function (e) {
        n.current[i] = "function" === typeof e ? e(n.current[i]) : e;
        b.cancel(a);
        a = b(function () {
          if (!r.current) {
            t({});
          }
        });
      }];
    };
  }();
  var M = "full" === y;
  var L = D(null);
  var P = i.a(L, 2);
  var B = P[0];
  var F = P[1];
  var G = B || 0;
  var U = D(new Map());
  var W = i.a(U, 2);
  var H = W[0];
  var V = W[1];
  var z = D(0);
  var Y = i.a(z, 2);
  var K = Y[0];
  var q = Y[1];
  var X = D(0);
  var Q = i.a(X, 2);
  var Z = Q[0];
  var J = Q[1];
  var $ = D(0);
  var ee = i.a($, 2);
  var te = ee[0];
  var ne = ee[1];
  var re = s.useState(null);
  var oe = i.a(re, 2);
  var ie = oe[0];
  var ae = oe[1];
  var se = s.useState(null);
  var ce = i.a(se, 2);
  var le = ce[0];
  var ue = ce[1];
  var de = s.useMemo(function () {
    return null === le && M ? Number.MAX_SAFE_INTEGER : le || 0;
  }, [le, B]);
  var pe = s.useState(false);
  var fe = i.a(pe, 2);
  var he = fe[0];
  var me = fe[1];
  var ge = "".concat(c, "-item");
  var _e = Math.max(K, Z);
  var ve = p.length && "responsive" === T;
  var be = "invalidate" === T;
  var ye = ve || "number" === typeof T && p.length > T;
  var Ee = s.useMemo(function () {
    var e = p;
    if (ve) {
      e = null === B && M ? p : p.slice(0, Math.min(p.length, G / v));
    } else {
      if ("number" === typeof T) {
        e = p.slice(0, T);
      }
    }
    return e;
  }, [p, v, B, T, ve]);
  var Oe = s.useMemo(function () {
    return ve ? p.slice(de + 1) : p.slice(Ee.length);
  }, [p, Ee, ve, de]);
  var we = s.useCallback(function (e, t) {
    var n;
    return "function" === typeof g ? g(e) : null !== (n = g && (null === e || undefined === e ? undefined : e[g])) && undefined !== n ? n : t;
  }, [g]);
  var Ce = s.useCallback(h || function (e) {
    return e;
  }, [h]);
  function Te(e, t) {
    ue(e);
    if (!t) {
      me(e < p.length - 1);
      if (!(null === k || undefined === k)) {
        k(e);
      }
    }
  }
  function Se(e, t) {
    V(function (n) {
      var r = new Map(n);
      if (null === t) {
        r.delete(e);
      } else {
        r.set(e, t);
      }
      return r;
    });
  }
  function Ie(e) {
    return H.get(we(Ee[e], e));
  }
  s.useLayoutEffect(function () {
    if (G && _e && Ee) {
      var e = te;
      var t = Ee.length;
      var n = t - 1;
      if (!t) {
        Te(0);
        return void ae(null);
      }
      for (var r = 0; r < t; r += 1) {
        var o = Ie(r);
        if (undefined === o) {
          Te(r - 1, true);
          break;
        }
        e += o;
        if (0 === n && e <= G || r === n - 1 && e + Ie(n) <= G) {
          Te(n);
          ae(null);
          break;
        }
        if (e + _e > G) {
          Te(r - 1);
          ae(e - o - te + Z);
          break;
        }
      }
      if (A && Ie(0) + te > G) {
        ae(null);
      }
    }
  }, [G, H, Z, te, we, Ee]);
  var Ae = he && !!Oe.length;
  var je = {};
  if (null !== ie && ve) {
    je = {
      position: "absolute",
      left: ie,
      top: 0
    };
  }
  var Ne;
  var Re = {
    prefixCls: ge,
    responsive: ve,
    component: R,
    invalidate: be
  };
  var ke = m ? function (e, t) {
    var n = we(e, t);
    return s.createElement(w.Provider, {
      key: n,
      value: o.a(o.a({}, Re), {}, {
        order: t,
        item: e,
        itemKey: n,
        registerSize: Se,
        display: t <= de
      })
    }, m(e, t));
  } : function (e, t) {
    var n = we(e, t);
    return s.createElement(f, r.a({}, Re, {
      order: t,
      key: n,
      item: e,
      renderItem: Ce,
      itemKey: n,
      registerSize: Se,
      display: t <= de
    }));
  };
  var xe = {
    order: Ae ? de : Number.MAX_SAFE_INTEGER,
    className: "".concat(ge, "-rest"),
    registerSize: function (e, t) {
      J(t);
      q(Z);
    },
    display: Ae
  };
  if (I) {
    if (I) {
      Ne = s.createElement(w.Provider, {
        value: o.a(o.a({}, Re), xe)
      }, I(Oe));
    }
  } else {
    var De = S || C;
    Ne = s.createElement(f, r.a({}, Re, xe), "function" === typeof De ? De(Oe) : De);
  }
  var Me = s.createElement(N, r.a({
    className: l()(!be && c, O),
    style: E,
    ref: t
  }, x), Ee.map(ke), ye ? Ne : null, A && s.createElement(f, r.a({}, Re, {
    order: de,
    className: "".concat(ge, "-suffix"),
    registerSize: function (e, t) {
      ne(t);
    },
    display: true,
    style: je
  }), A));
  if (ve) {
    Me = s.createElement(u.a, {
      onResize: function (e, t) {
        F(t.clientWidth);
      }
    }, Me);
  }
  return Me;
}
var S = s.forwardRef(T);
S.displayName = "Overflow";
S.Item = O;
S.RESPONSIVE = "responsive";
S.INVALIDATE = "invalidate";
var I = S;
export { I as a };
export default I;