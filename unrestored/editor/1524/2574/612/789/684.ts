"use strict";

import * as r from "../../28";
import * as i from "../../20";
import * as o from "../../33/index";
import * as a from "../../108";
import * as s from "../../0/index";
import * as c from "../../739/1496/1008";
import * as u from "../../1025/690";
import * as l from "../../8";
import * as f from "../../8";
import * as h from "../../2617/462";
function d(e, t) {
  var n = {};
  n[e.toLowerCase()] = t.toLowerCase();
  n["Webkit".concat(e)] = "webkit".concat(t);
  n["Moz".concat(e)] = "moz".concat(t);
  n["ms".concat(e)] = "MS".concat(t);
  n["O".concat(e)] = "o".concat(t.toLowerCase());
  return n;
}
var p = function (e, t) {
  var n = {
    animationend: d("Animation", "AnimationEnd"),
    transitionend: d("Transition", "TransitionEnd")
  };
  if (e) {
    if (!("AnimationEvent" in t)) {
      delete n.animationend.animation;
    }
    if (!("TransitionEvent" in t)) {
      delete n.transitionend.transition;
    }
  }
  return n;
}(Object(h.a)(), "undefined" !== typeof window ? window : {});
var _ = {};
if (Object(h.a)()) {
  var A = document.createElement("div");
  _ = A.style;
}
var g = {};
function v(e) {
  if (g[e]) {
    return g[e];
  }
  var t = p[e];
  if (t) {
    for (var n = Object.keys(t), r = n.length, i = 0; i < r; i += 1) {
      var o = n[i];
      if (Object.prototype.hasOwnProperty.call(t, o) && o in _) {
        g[e] = t[o];
        return g[e];
      }
    }
  }
  return "";
}
var m = v("animationend");
var y = v("transitionend");
var b = !(!m || !y);
var w = m || "animationend";
var E = y || "transitionend";
function x(e, t) {
  return e ? "object" === Object(a.a)(e) ? e[t.replace(/-\w/g, function (e) {
    return e[1].toUpperCase();
  })] : "".concat(e, "-").concat(t) : null;
}
function C(e) {
  var t = Object(s.useRef)(!1);
  var n = Object(s.useState)(e);
  var r = Object(o.a)(n, 2);
  var i = r[0];
  var a = r[1];
  Object(s.useEffect)(function () {
    return function () {
      t.current = !0;
    };
  }, []);
  return [i, function (e) {
    if (!t.current) {
      a(e);
    }
  }];
}
var O = Object(h.a)() ? s.useLayoutEffect : s.useEffect;
import * as S from "../../1025/413";
var k = ["prepare", "start", "active", "end"];
function T(e) {
  return "active" === e || "end" === e;
}
var B = function (e, t) {
  var n = s.useState("none");
  var r = Object(o.a)(n, 2);
  var i = r[0];
  var a = r[1];
  var c = function () {
    var e = s.useRef(null);
    function t() {
      S.a.cancel(e.current);
    }
    s.useEffect(function () {
      return function () {
        t();
      };
    }, []);
    return [function n(r) {
      var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      t();
      var o = Object(S.a)(function () {
        if (i <= 1) {
          r({
            isCanceled: function () {
              return o !== e.current;
            }
          });
        } else {
          n(r, i - 1);
        }
      });
      e.current = o;
    }, t];
  }();
  var u = Object(o.a)(c, 2);
  var l = u[0];
  var f = u[1];
  O(function () {
    if ("none" !== i && "end" !== i) {
      var e = k.indexOf(i);
      var n = k[e + 1];
      var r = t(i);
      if (!1 === r) {
        a(n);
      } else {
        l(function (e) {
          function t() {
            if (!e.isCanceled()) {
              a(n);
            }
          }
          if (!0 === r) {
            t();
          } else {
            Promise.resolve(r).then(t);
          }
        });
      }
    }
  }, [e, i]);
  s.useEffect(function () {
    return function () {
      f();
    };
  }, []);
  return [function () {
    a("prepare");
  }, i];
};
function D(e, t, n, a) {
  var c = a.motionEnter;
  var u = void 0 === c || c;
  var l = a.motionAppear;
  var f = void 0 === l || l;
  var h = a.motionLeave;
  var d = void 0 === h || h;
  var p = a.motionDeadline;
  var _ = a.motionLeaveImmediately;
  var A = a.onAppearPrepare;
  var g = a.onEnterPrepare;
  var v = a.onLeavePrepare;
  var m = a.onAppearStart;
  var y = a.onEnterStart;
  var b = a.onLeaveStart;
  var x = a.onAppearActive;
  var S = a.onEnterActive;
  var k = a.onLeaveActive;
  var D = a.onAppearEnd;
  var I = a.onEnterEnd;
  var F = a.onLeaveEnd;
  var R = a.onVisibleChanged;
  var P = C();
  var N = Object(o.a)(P, 2);
  var M = N[0];
  var j = N[1];
  var L = C("none");
  var U = Object(o.a)(L, 2);
  var H = U[0];
  var V = U[1];
  var G = C(null);
  var z = Object(o.a)(G, 2);
  var Q = z[0];
  var W = z[1];
  var K = Object(s.useRef)(!1);
  var X = Object(s.useRef)(null);
  var Y = Object(s.useRef)(!1);
  var q = Object(s.useRef)(null);
  function $() {
    return n() || q.current;
  }
  var J = Object(s.useRef)(!1);
  function Z(e) {
    var t;
    var n = $();
    if (!(e && !e.deadline && e.target !== n)) {
      if ("appear" === H && J.current) {
        t = null === D || void 0 === D ? void 0 : D(n, e);
      } else {
        if ("enter" === H && J.current) {
          t = null === I || void 0 === I ? void 0 : I(n, e);
        } else {
          if ("leave" === H && J.current) {
            t = null === F || void 0 === F ? void 0 : F(n, e);
          }
        }
      }
      if (!(!1 === t || Y.current)) {
        V("none");
        W(null);
      }
    }
  }
  var ee = function (e) {
    var t = Object(s.useRef)();
    var n = Object(s.useRef)(e);
    n.current = e;
    var r = s.useCallback(function (e) {
      n.current(e);
    }, []);
    function i(e) {
      if (e) {
        e.removeEventListener(E, r);
        e.removeEventListener(w, r);
      }
    }
    s.useEffect(function () {
      return function () {
        i(t.current);
      };
    }, []);
    return [function (e) {
      if (t.current && t.current !== e) {
        i(t.current);
      }
      if (e && e !== t.current) {
        e.addEventListener(E, r);
        e.addEventListener(w, r);
        t.current = e;
      }
    }, i];
  }(Z);
  var te = Object(o.a)(ee, 1)[0];
  var ne = s.useMemo(function () {
    var e;
    var t;
    var n;
    switch (H) {
      case "appear":
        e = {};
        Object(r.a)(e, "prepare", A);
        Object(r.a)(e, "start", m);
        Object(r.a)(e, "active", x);
        return e;
      case "enter":
        t = {};
        Object(r.a)(t, "prepare", g);
        Object(r.a)(t, "start", y);
        Object(r.a)(t, "active", S);
        return t;
      case "leave":
        n = {};
        Object(r.a)(n, "prepare", v);
        Object(r.a)(n, "start", b);
        Object(r.a)(n, "active", k);
        return n;
      default:
        return {};
    }
  }, [H]);
  var re = B(H, function (e) {
    if ("prepare" === e) {
      var t = ne.prepare;
      return !!t && t($());
    }
    var n;
    if (ae in ne) {
      W((null === (n = ne[ae]) || void 0 === n ? void 0 : n.call(ne, $(), null)) || null);
    }
    if ("active" === ae) {
      te($());
      if (p > 0) {
        clearTimeout(X.current);
        X.current = setTimeout(function () {
          Z({
            deadline: !0
          });
        }, p);
      }
    }
    return !0;
  });
  var ie = Object(o.a)(re, 2);
  var oe = ie[0];
  var ae = ie[1];
  var se = T(ae);
  J.current = se;
  O(function () {
    j(t);
    var n;
    var r = K.current;
    if (K.current = !0, e) {
      if (!r && t && f) {
        n = "appear";
      }
      if (r && t && u) {
        n = "enter";
      }
      if (r && !t && d || !r && _ && !t && d) {
        n = "leave";
      }
      if (n) {
        V(n);
        oe();
      }
    }
  }, [t]);
  Object(s.useEffect)(function () {
    if ("appear" === H && !f || "enter" === H && !u || "leave" === H && !d) {
      V("none");
    }
  }, [f, u, d]);
  Object(s.useEffect)(function () {
    return function () {
      clearTimeout(X.current);
      Y.current = !0;
    };
  }, []);
  Object(s.useEffect)(function () {
    if (void 0 !== M && "none" === H) {
      if (!(null === R || void 0 === R)) {
        R(M);
      }
    }
  }, [M, H]);
  var ce = Q;
  if (ne.prepare && "start" === ae) {
    ce = Object(i.a)({
      transition: "none"
    }, ce);
  }
  return [H, ae, ce, null !== M && void 0 !== M ? M : t];
}
import * as I from "../../95";
import * as F from "../../96";
import * as R from "../../120";
import * as P from "../../140";
var N = function (e) {
  Object(R.a)(n, e);
  var t = Object(P.a)(n);
  function n() {
    Object(I.a)(this, n);
    return t.apply(this, arguments);
  }
  Object(F.a)(n, [{
    key: "render",
    value: function () {
      return this.props.children;
    }
  }]);
  return n;
}(s.Component);
var M = function (e) {
  var t = e;
  function n(e) {
    return !(!e.motionName || !t);
  }
  if ("object" === Object(a.a)(e)) {
    t = e.transitionSupport;
  }
  var l = s.forwardRef(function (e, t) {
    var a = e.visible;
    var l = void 0 === a || a;
    var h = e.removeOnLeave;
    var d = void 0 === h || h;
    var p = e.forceRender;
    var _ = e.children;
    var A = e.motionName;
    var g = e.leavedClassName;
    var v = e.eventProps;
    var m = n(e);
    var y = Object(s.useRef)();
    var b = Object(s.useRef)();
    var w = D(m, l, function () {
      try {
        return Object(c.a)(y.current || b.current);
      } catch (e) {
        return null;
      }
    }, e);
    var E = Object(o.a)(w, 4);
    var C = E[0];
    var O = E[1];
    var S = E[2];
    var k = E[3];
    var B = s.useRef(k);
    if (k) {
      B.current = !0;
    }
    var I = Object(s.useRef)(t);
    I.current = t;
    var F;
    var R = s.useCallback(function (e) {
      y.current = e;
      Object(u.b)(I.current, e);
    }, []);
    var P = Object(i.a)(Object(i.a)({}, v), {}, {
      visible: l
    });
    if (_) {
      if ("none" !== C && n(e)) {
        var M;
        var j;
        if ("prepare" === O) {
          j = "prepare";
        } else {
          if (T(O)) {
            j = "active";
          } else {
            if ("start" === O) {
              j = "start";
            }
          }
        }
        F = _(Object(i.a)(Object(i.a)({}, P), {}, {
          className: f()(x(A, C), (M = {}, Object(r.a)(M, x(A, "".concat(C, "-").concat(j)), j), Object(r.a)(M, A, "string" === typeof A), M)),
          style: S
        }), R);
      } else {
        F = k ? _(Object(i.a)({}, P), R) : !d && B.current ? _(Object(i.a)(Object(i.a)({}, P), {}, {
          className: g
        }), R) : p ? _(Object(i.a)(Object(i.a)({}, P), {}, {
          style: {
            display: "none"
          }
        }), R) : null;
      }
    } else {
      F = null;
    }
    return s.createElement(N, {
      ref: b
    }, F);
  });
  l.displayName = "CSSMotion";
  return l;
}(b);
import * as j from "../../19";
import * as L from "../../54";
function U(e) {
  var t;
  t = e && "object" === Object(a.a)(e) && "key" in e ? e : {
    key: e
  };
  return Object(i.a)(Object(i.a)({}, t), {}, {
    key: String(t.key)
  });
}
function H() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
  return e.map(U);
}
function V() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
  var n = [];
  var r = 0;
  var o = t.length;
  var a = H(e);
  var s = H(t);
  a.forEach(function (e) {
    for (var t = !1, a = r; a < o; a += 1) {
      var c = s[a];
      if (c.key === e.key) {
        if (r < a) {
          n = n.concat(s.slice(r, a).map(function (e) {
            return Object(i.a)(Object(i.a)({}, e), {}, {
              status: "add"
            });
          }));
          r = a;
        }
        n.push(Object(i.a)(Object(i.a)({}, c), {}, {
          status: "keep"
        }));
        r += 1;
        t = !0;
        break;
      }
    }
    if (!t) {
      n.push(Object(i.a)(Object(i.a)({}, e), {}, {
        status: "remove"
      }));
    }
  });
  if (r < o) {
    n = n.concat(s.slice(r).map(function (e) {
      return Object(i.a)(Object(i.a)({}, e), {}, {
        status: "add"
      });
    }));
  }
  var c = {};
  n.forEach(function (e) {
    var t = e.key;
    c[t] = (c[t] || 0) + 1;
  });
  var u = Object.keys(c).filter(function (e) {
    return c[e] > 1;
  });
  u.forEach(function (e) {
    (n = n.filter(function (t) {
      var n = t.key;
      var r = t.status;
      return n !== e || "remove" !== r;
    })).forEach(function (t) {
      if (t.key === e) {
        t.status = "keep";
      }
    });
  });
  return n;
}
var G = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
(function (e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : M;
  var n = function (e) {
    Object(R.a)(r, e);
    var n = Object(P.a)(r);
    function r() {
      var e;
      Object(I.a)(this, r);
      (e = n.apply(this, arguments)).state = {
        keyEntities: []
      };
      e.removeKey = function (t) {
        e.setState(function (e) {
          return {
            keyEntities: e.keyEntities.map(function (e) {
              return e.key !== t ? e : Object(i.a)(Object(i.a)({}, e), {}, {
                status: "removed"
              });
            })
          };
        });
      };
      return e;
    }
    Object(F.a)(r, [{
      key: "render",
      value: function () {
        var e = this;
        var n = this.state.keyEntities;
        var r = this.props;
        var i = r.component;
        var o = r.children;
        var a = r.onVisibleChanged;
        var c = Object(L.a)(r, ["component", "children", "onVisibleChanged"]);
        var u = i || s.Fragment;
        var l = {};
        G.forEach(function (e) {
          l[e] = c[e];
          delete c[e];
        });
        delete c.keys;
        return s.createElement(u, c, n.map(function (n) {
          var r = n.status;
          var i = Object(L.a)(n, ["status"]);
          var c = "add" === r || "keep" === r;
          return s.createElement(t, Object(j.a)({}, l, {
            key: i.key,
            visible: c,
            eventProps: i,
            onVisibleChanged: function (t) {
              if (!(null === a || void 0 === a)) {
                a(t, {
                  key: i.key
                });
              }
              if (!t) {
                e.removeKey(i.key);
              }
            }
          }), o);
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function (e, t) {
        var n = e.keys;
        var r = t.keyEntities;
        var i = H(n);
        return {
          keyEntities: V(r, i).filter(function (e) {
            var t = r.find(function (t) {
              var n = t.key;
              return e.key === n;
            });
            return !t || "removed" !== t.status || "remove" !== e.status;
          })
        };
      }
    }]);
    return r;
  }(s.Component);
  n.defaultProps = {
    component: "div"
  };
})(b);
export { M as a };