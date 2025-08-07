"use strict";

var r;
import o = require("../11");
import i = require("../10/index");
import a = require("react");
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
import c = require("color");
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
import u = require("../8");
var d = function __importDefault(module) {
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
}(u);
import p = require("../5");
import f = require("../90");
import h = require("../15");
import m = require("../28/index");
import g = require("../78");
import _ = require("./158");
var v = function __importDefault(module) {
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
}(_);
!function (e) {
  e[e.DOWN = 0] = "DOWN";
  e[e.UP = 1] = "UP";
}(r || (r = {}));
var b = false;
if (m.b() && m.h()) {
  document.body.addEventListener("touchmove", function (e) {
    if (b) {
      e.preventDefault();
    }
  }, {
    passive: false
  });
}
var _a;
_a = function (e) {
  var t = a.useRef(null);
  var n = e.id;
  var c = e.position;
  var u = e.visible;
  var m = e.opacity;
  var _ = e.attributes;
  var y = e.onSliderChange;
  var E = e.size;
  var O = e.onEndToSlid;
  var w = e.onStartToSlid;
  var C = e.isEditState;
  var T = e.selected;
  var S = undefined !== T && T;
  var I = e.handleImageUrl;
  var A = e.backgroundImageUrl;
  var j = e.trackImageUrl;
  var N = _.maxValue;
  var R = _.step;
  var k = _.minValue;
  var x = _.direction;
  var D = undefined === x ? g.b.HORIZONTAL : x;
  var M = _.sliderType;
  var L = undefined === M ? g.d.TEMPLATE : M;
  var P = _.handleImageRatio;
  var B = undefined === P ? 2 : P;
  var F = _.backgroundImageDirection;
  var G = undefined === F ? g.b.HORIZONTAL : F;
  var U = _.trackImageDirection;
  var W = undefined === U ? g.b.HORIZONTAL : U;
  var H = _.handleImageDirection || g.b.HORIZONTAL;
  var V = _.mode;
  var z = _.color;
  var Y = _.disabled;
  var K = _.value;
  var q = a.useRef(null);
  var X = a.useRef(null);
  var Q = a.useRef(r.UP);
  var Z = a.useState(false);
  var J = i.a(Z, 2);
  var $ = J[0];
  var ee = J[1];
  var te = a.useState(0);
  var ne = i.a(te, 2);
  var re = ne[0];
  var oe = ne[1];
  var ie = a.useState(0);
  var ae = i.a(ie, 2);
  var se = ae[0];
  var ce = ae[1];
  var le = a.useState(0);
  var ue = i.a(le, 2);
  var de = ue[0];
  var pe = ue[1];
  var fe = a.useState(0);
  var he = i.a(fe, 2);
  var me = he[0];
  var ge = he[1];
  var _e = a.useState("");
  var ve = i.a(_e, 2);
  var be = ve[0];
  var ye = ve[1];
  var Ee = a.useState("");
  var Oe = i.a(Ee, 2);
  var we = Oe[0];
  var Ce = Oe[1];
  var Te = a.useRef(1);
  var Se = a.useRef(1);
  a.useEffect(function () {
    if (j) {
      Te.current = Te.current + 1;
      var e = Te.current;
      h.gb(j, W === g.b.HORIZONTAL ? -90 : 90).then(function (t) {
        if (!(Te.current > e)) {
          ye(t);
        }
      }).catch(function () {
        return ye("");
      });
    }
  }, [j, W]);
  a.useEffect(function () {
    if (A) {
      Se.current = Se.current + 1;
      var e = Se.current;
      h.gb(A, G === g.b.HORIZONTAL ? -90 : 90).then(function (t) {
        if (!(Se.current > e)) {
          Ce(t);
        }
      }).catch(function () {
        return Ce("");
      });
    }
  }, [A, G]);
  a.useEffect(function () {
    if (L === g.d.IMAGE) {
      ee(true);
    } else {
      ee(false);
    }
  }, [L]);
  a.useEffect(function () {
    var e = E.height;
    if (D === g.b.VERTICAL) {
      e = E.width;
    }
    if (L === g.d.IMAGE) {
      oe(e * B);
      ce(e * B);
      pe(0);
      return void ge(0);
    }
    if (V === g.c.DEFAULT) {
      oe(1.4 * e);
      ce(1.4 * e);
      pe(e / 3.2);
      ge(1.4 * e / 2);
    } else {
      if (V === g.c.PRIMARY) {
        if (D === g.b.VERTICAL) {
          oe(e);
          ce(1.6 * e);
        } else {
          oe(1.6 * e);
          ce(e);
        }
        pe(e / 10);
        ge(e / 2.5);
      }
    }
  }, [L, V, E, B, D]);
  var Ie = function (e) {
    var t = function (e) {
      var t = l()(e).toString();
      return {
        default: {
          stepBackgroundColor: h.hb(t, .2),
          handleBorderColor: t,
          trackBackgroundColor: t
        },
        disabled: {
          stepBackgroundColor: h.hb("#ccc", .2),
          handleBorderColor: "#ccc",
          trackBackgroundColor: "#ccc"
        }
      };
    }(z);
    return e ? t.disabled : t.default;
  }(Y);
  function Ae(e, t) {
    return t / e * 100 + "%";
  }
  var je = a.useCallback(function (e, n) {
    var r;
    var o = q.current;
    var i = X.current;
    var a = t.current;
    var s = null === (r = t.current) || undefined === r ? undefined : r.getClientRects()[0];
    if (!s) {
      return K;
    }
    var c = Math.max(N - k, 1);
    if (o && i && a) {
      if (D === g.b.HORIZONTAL) {
        var l = a.getClientRects()[0].width;
        var u = o.offsetWidth;
        var d = l / (c / R);
        var p = Math.max(Math.min(e - s.left, l), 0);
        var f = p / d >= c / R ? Math.ceil(p / d) : Math.round(p / d);
        p = f * d;
        var h = Math.min(R * f + k, N);
        var m = Ae(l, p = Math.min(p, l));
        o.style.left = "calc(".concat(m, " - ").concat(u / 2, "px)");
        i.style.width = m;
        return h;
      }
      var _ = a.getClientRects()[0].height;
      var v = o.offsetHeight;
      var b = _ / (c / R);
      var y = Math.max(Math.min(s.bottom - n, _), 0);
      var E = y / b >= c / R ? Math.ceil(y / b) : Math.round(y / b);
      y = E * b;
      var O = Math.min(R * E + k, N);
      var w = Ae(_, y = Math.min(y, _));
      o.style.bottom = "calc(".concat(w, " - ").concat(v / 2, "px)");
      i.style.height = w;
      return O;
    }
    return K;
  }, [D, N, k, R, K]);
  var Ne = a.useCallback(function (e) {
    if (h.W()) {
      b = true;
      if (!Y) {
        if (w) {
          w(K);
        }
      }
    }
  }, [Y, w, K]);
  var Re = a.useCallback(function (e) {
    if (h.W() && !Y) {
      b = true;
      var t = je(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
      if (y) {
        y(t);
      }
    }
  }, [Y, je, y]);
  var ke = a.useCallback(function () {
    b = false;
    if (!Y) {
      if (O) {
        O(K);
      }
    }
  }, [Y, O, K]);
  a.useLayoutEffect(function () {
    var e = X.current;
    var n = q.current;
    var r = t.current;
    var o = Math.max(N - k, 1);
    if (e && n && r) {
      if (D === g.b.HORIZONTAL) {
        var i = r.offsetWidth;
        var a = n.offsetWidth;
        var s = (K - k) / o * i;
        if (K === N && k === N) {
          s = 1 / o * i;
        }
        var c = Ae(i, s);
        n.style.left = "calc(".concat(c, " - ").concat(a / 2, "px)");
        n.style.bottom = "auto";
        e.style.width = c;
        e.style.height = "100%";
      } else {
        var l = r.offsetHeight;
        var u = n.offsetHeight;
        var d = (K - k) / o * l;
        if (K === N && k === N) {
          d = 1 / o * l;
        }
        var p = Ae(l, d);
        n.style.bottom = "calc(".concat(p, " - ").concat(u / 2, "px)");
        n.style.left = "auto";
        e.style.width = "100%";
        e.style.height = p;
      }
    }
  }, [re, se, N, k, K, D, $, E]);
  a.useEffect(function () {
    if (!h.W()) {
      var e = K;
      var t = K;
      var n = h.p(function () {
        if (y) {
          y(e);
        }
      }, 60);
      var o = q.current;
      if (o) {
        if (!(null === o || undefined === o)) {
          o.addEventListener("mousedown", a, {
            passive: false
          });
        }
      }
      return function () {
        if (!(null === o || undefined === o)) {
          o.removeEventListener("mousedown", a);
        }
      };
    }
    function i(o) {
      if (Q.current === r.DOWN) {
        e = je(o.clientX, o.clientY);
        if (t !== e) {
          t = e;
          if (y) {
            if (C) {
              n();
            } else {
              y(e);
            }
          }
        }
      }
    }
    function a(e) {
      if (!(Y || C && !S)) {
        e.preventDefault();
        e.stopPropagation();
        Q.current = r.DOWN;
        if (w) {
          w(K);
        }
        document.addEventListener("mousemove", i, {
          passive: false
        });
        document.addEventListener("mouseup", s, {
          passive: false
        });
        document.addEventListener("mouseleave", s, {
          passive: false
        });
      }
    }
    function s(t) {
      t.stopPropagation();
      Q.current = r.UP;
      if (O) {
        O(e);
      }
      document.removeEventListener("mousemove", i);
      document.removeEventListener("mouseup", s);
      document.removeEventListener("mouseleave", s);
    }
  }, [Y, je, n, C, O, y, w, S, K]);
  return s.a.createElement("div", {
    id: n,
    "data-role": p.M,
    "data-widget-type": p.E,
    className: d()(f.b, o.a({}, v.a.hide, !u)),
    style: {
      top: c.y,
      left: c.x,
      height: E.height,
      width: E.width,
      opacity: undefined === m ? undefined : m / 100,
      filter: Y && $ ? "saturate(0)" : undefined
    }
  }, s.a.createElement("div", {
    className: v.a.sliderBox
  }, s.a.createElement("div", {
    className: v.a.main,
    ref: t,
    style: {
      borderRadius: $ ? 0 : D === g.b.HORIZONTAL ? E.height / 2 : E.width / 2,
      backgroundColor: $ ? "transparent" : "#fff"
    }
  }, s.a.createElement("div", {
    className: d()(v.a.step, D === g.b.VERTICAL && v.a.vertical),
    style: {
      width: "100%",
      height: "100%",
      borderRadius: $ ? 0 : D === g.b.HORIZONTAL ? E.height / 2 : E.width / 2,
      backgroundColor: $ ? undefined : Ie.stepBackgroundColor,
      backgroundImage: $ ? "url(".concat(G === D ? A : we, ")") : undefined
    }
  }, s.a.createElement("div", {
    className: d()(v.a.trackBox, D === g.b.HORIZONTAL ? v.a.horizontalTrackBox : v.a.verticalTrackBox),
    ref: X,
    style: {
      backgroundColor: $ ? undefined : Ie.trackBackgroundColor
    }
  }, s.a.createElement("div", {
    className: v.a.track,
    style: {
      width: D === g.b.HORIZONTAL ? E.width : "100%",
      height: D === g.b.HORIZONTAL ? "100%" : E.height,
      backgroundImage: $ ? "url(".concat(W === D ? j : be, ")") : undefined
    }
  }))), s.a.createElement("div", {
    onTouchStart: Ne,
    onTouchMove: Re,
    onTouchEnd: ke,
    ref: q,
    className: d()(v.a.handle, $ ? v.a.imageHandle : v.a.templateHandle, H === D ? v.a.horizontalHandle : v.a.verticalHandle, H === g.b.HORIZONTAL && D === g.b.VERTICAL ? v.a.verticalRotate : v.a.horizontalRotate, C && !S && v.a.handleNotSelected),
    style: {
      width: re,
      height: se,
      borderWidth: de,
      borderRadius: me,
      borderColor: Ie.handleBorderColor,
      color: h.hb(Ie.handleBorderColor, .3),
      backgroundImage: $ ? "url(".concat(I, ")") : undefined
    }
  }, !$ && V === g.c.PRIMARY && s.a.createElement("div", {
    className: v.a.handleInner,
    style: {
      color: Ie.handleBorderColor
    }
  })))));
};
export { _a as a };
export default _a;