/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：684
 */

"use strict";

import r = require("../../29");
import i = require("../../20");
import o = require("../../33/index");
import a = require("../../108");
import s = require("react");
import c = require("../../739/1503/1009");
import u = require("../../1026/690");
import l = require("../../8");
var f = function __importDefault(module) {
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
}(l);
import d = require("../462");
function h(e, t) {
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
    animationend: h("Animation", "AnimationEnd"),
    transitionend: h("Transition", "TransitionEnd")
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
}(d.a(), "undefined" !== typeof window ? window : {});
var _ = {};
if (d.a()) {
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
  return e ? "object" === a.a(e) ? e[t.replace(/-\w/g, function (e) {
    return e[1].toUpperCase();
  })] : "".concat(e, "-").concat(t) : null;
}
function C(e) {
  var t = s.useRef(false);
  var n = s.useState(e);
  var r = o.a(n, 2);
  var i = r[0];
  var a = r[1];
  s.useEffect(function () {
    return function () {
      t.current = true;
    };
  }, []);
  return [i, function (e) {
    if (!t.current) {
      a(e);
    }
  }];
}
var O = d.a() ? s.useLayoutEffect : s.useEffect;
import k = require("../../1026/413");
var S = ["prepare", "start", "active", "end"];
function T(e) {
  return "active" === e || "end" === e;
}
var B = function (e, t) {
  var n = s.useState("none");
  var r = o.a(n, 2);
  var i = r[0];
  var a = r[1];
  var c = function () {
    var e = s.useRef(null);
    function t() {
      k.a.cancel(e.current);
    }
    s.useEffect(function () {
      return function () {
        t();
      };
    }, []);
    return [function n(r) {
      var i = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 2;
      t();
      var o = k.a(function () {
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
  var u = o.a(c, 2);
  var l = u[0];
  var f = u[1];
  O(function () {
    if ("none" !== i && "end" !== i) {
      var e = S.indexOf(i);
      var n = S[e + 1];
      var r = t(i);
      if (false === r) {
        a(n);
      } else {
        l(function (e) {
          function t() {
            if (!e.isCanceled()) {
              a(n);
            }
          }
          if (true === r) {
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
  var u = undefined === c || c;
  var l = a.motionAppear;
  var f = undefined === l || l;
  var d = a.motionLeave;
  var h = undefined === d || d;
  var p = a.motionDeadline;
  var _ = a.motionLeaveImmediately;
  var A = a.onAppearPrepare;
  var g = a.onEnterPrepare;
  var v = a.onLeavePrepare;
  var m = a.onAppearStart;
  var y = a.onEnterStart;
  var b = a.onLeaveStart;
  var x = a.onAppearActive;
  var k = a.onEnterActive;
  var S = a.onLeaveActive;
  var D = a.onAppearEnd;
  var I = a.onEnterEnd;
  var F = a.onLeaveEnd;
  var R = a.onVisibleChanged;
  var P = C();
  var N = o.a(P, 2);
  var M = N[0];
  var j = N[1];
  var L = C("none");
  var U = o.a(L, 2);
  var H = U[0];
  var V = U[1];
  var G = C(null);
  var z = o.a(G, 2);
  var Q = z[0];
  var W = z[1];
  var K = s.useRef(false);
  var X = s.useRef(null);
  var Y = s.useRef(false);
  var q = s.useRef(null);
  function $() {
    return n() || q.current;
  }
  var J = s.useRef(false);
  function Z(e) {
    var t;
    var n = $();
    if (!(e && !e.deadline && e.target !== n)) {
      if ("appear" === H && J.current) {
        t = null === D || undefined === D ? undefined : D(n, e);
      } else {
        if ("enter" === H && J.current) {
          t = null === I || undefined === I ? undefined : I(n, e);
        } else {
          if ("leave" === H && J.current) {
            t = null === F || undefined === F ? undefined : F(n, e);
          }
        }
      }
      if (!(false === t || Y.current)) {
        V("none");
        W(null);
      }
    }
  }
  var ee = function (e) {
    var t = s.useRef();
    var n = s.useRef(e);
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
  var te = o.a(ee, 1)[0];
  var ne = s.useMemo(function () {
    var e;
    var t;
    var n;
    switch (H) {
      case "appear":
        e = {};
        r.a(e, "prepare", A);
        r.a(e, "start", m);
        r.a(e, "active", x);
        return e;
      case "enter":
        t = {};
        r.a(t, "prepare", g);
        r.a(t, "start", y);
        r.a(t, "active", k);
        return t;
      case "leave":
        n = {};
        r.a(n, "prepare", v);
        r.a(n, "start", b);
        r.a(n, "active", S);
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
      W((null === (n = ne[ae]) || undefined === n ? undefined : n.call(ne, $(), null)) || null);
    }
    if ("active" === ae) {
      te($());
      if (p > 0) {
        clearTimeout(X.current);
        X.current = setTimeout(function () {
          Z({
            deadline: true
          });
        }, p);
      }
    }
    return true;
  });
  var ie = o.a(re, 2);
  var oe = ie[0];
  var ae = ie[1];
  var se = T(ae);
  J.current = se;
  O(function () {
    j(t);
    var n;
    var r = K.current;
    K.current = true;
    if (e) {
      if (!r && t && f) {
        n = "appear";
      }
      if (r && t && u) {
        n = "enter";
      }
      if (r && !t && h || !r && _ && !t && h) {
        n = "leave";
      }
      if (n) {
        V(n);
        oe();
      }
    }
  }, [t]);
  s.useEffect(function () {
    if ("appear" === H && !f || "enter" === H && !u || "leave" === H && !h) {
      V("none");
    }
  }, [f, u, h]);
  s.useEffect(function () {
    return function () {
      clearTimeout(X.current);
      Y.current = true;
    };
  }, []);
  s.useEffect(function () {
    if (undefined !== M && "none" === H) {
      if (!(null === R || undefined === R)) {
        R(M);
      }
    }
  }, [M, H]);
  var ce = Q;
  if (ne.prepare && "start" === ae) {
    ce = i.a({
      transition: "none"
    }, ce);
  }
  return [H, ae, ce, null !== M && undefined !== M ? M : t];
}
import I = require("../../95");
import F = require("../../96");
import R = require("../../120");
import P = require("../../140");
var N = function (e) {
  R.a(n, e);
  var t = P.a(n);
  function n() {
    I.a(this, n);
    return t.apply(this, arguments);
  }
  F.a(n, [{
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
  if ("object" === a.a(e)) {
    t = e.transitionSupport;
  }
  var l = s.forwardRef(function (e, t) {
    var a = e.visible;
    var l = undefined === a || a;
    var d = e.removeOnLeave;
    var h = undefined === d || d;
    var p = e.forceRender;
    var _ = e.children;
    var A = e.motionName;
    var g = e.leavedClassName;
    var v = e.eventProps;
    var m = n(e);
    var y = s.useRef();
    var b = s.useRef();
    var w = D(m, l, function () {
      try {
        return c.a(y.current || b.current);
      } catch (e) {
        return null;
      }
    }, e);
    var E = o.a(w, 4);
    var C = E[0];
    var O = E[1];
    var k = E[2];
    var S = E[3];
    var B = s.useRef(S);
    if (S) {
      B.current = true;
    }
    var I = s.useRef(t);
    I.current = t;
    var F;
    var R = s.useCallback(function (e) {
      y.current = e;
      u.b(I.current, e);
    }, []);
    var P = i.a(i.a({}, v), {}, {
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
        F = _(i.a(i.a({}, P), {}, {
          className: f()(x(A, C), (M = {}, r.a(M, x(A, "".concat(C, "-").concat(j)), j), r.a(M, A, "string" === typeof A), M)),
          style: k
        }), R);
      } else {
        F = S ? _(i.a({}, P), R) : !h && B.current ? _(i.a(i.a({}, P), {}, {
          className: g
        }), R) : p ? _(i.a(i.a({}, P), {}, {
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
import j = require("../../19");
import L = require("../../54");
function U(e) {
  var t;
  t = e && "object" === a.a(e) && "key" in e ? e : {
    key: e
  };
  return i.a(i.a({}, t), {}, {
    key: String(t.key)
  });
}
function H() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : [];
  return e.map(U);
}
function V() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : [];
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : [];
  var n = [];
  var r = 0;
  var o = t.length;
  var a = H(e);
  var s = H(t);
  a.forEach(function (e) {
    for (var t = false, a = r; a < o; a += 1) {
      var c = s[a];
      if (c.key === e.key) {
        if (r < a) {
          n = n.concat(s.slice(r, a).map(function (e) {
            return i.a(i.a({}, e), {}, {
              status: "add"
            });
          }));
          r = a;
        }
        n.push(i.a(i.a({}, c), {}, {
          status: "keep"
        }));
        r += 1;
        t = true;
        break;
      }
    }
    if (!t) {
      n.push(i.a(i.a({}, e), {}, {
        status: "remove"
      }));
    }
  });
  if (r < o) {
    n = n.concat(s.slice(r).map(function (e) {
      return i.a(i.a({}, e), {}, {
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
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : M;
  var n = function (e) {
    R.a(r, e);
    var n = P.a(r);
    function r() {
      var e;
      I.a(this, r);
      (e = n.apply(this, arguments)).state = {
        keyEntities: []
      };
      e.removeKey = function (t) {
        e.setState(function (e) {
          return {
            keyEntities: e.keyEntities.map(function (e) {
              return e.key !== t ? e : i.a(i.a({}, e), {}, {
                status: "removed"
              });
            })
          };
        });
      };
      return e;
    }
    F.a(r, [{
      key: "render",
      value: function () {
        var e = this;
        var n = this.state.keyEntities;
        var r = this.props;
        var i = r.component;
        var o = r.children;
        var a = r.onVisibleChanged;
        var c = L.a(r, ["component", "children", "onVisibleChanged"]);
        var u = i || s.Fragment;
        var l = {};
        G.forEach(function (e) {
          l[e] = c[e];
          delete c[e];
        });
        delete c.keys;
        return s.createElement(u, c, n.map(function (n) {
          var r = n.status;
          var i = L.a(n, ["status"]);
          var c = "add" === r || "keep" === r;
          return s.createElement(t, j.a({}, l, {
            key: i.key,
            visible: c,
            eventProps: i,
            onVisibleChanged: function (t) {
              if (!(null === a || undefined === a)) {
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
export default M;