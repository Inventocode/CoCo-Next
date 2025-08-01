"use strict";

var r = require("../29");
var o = require("../33/index");
var i = require("../54");
var a = require("../0/index");
var s = require("../20");
var c = require("../19");
var l = require("../95");
var u = require("../96");
var d = require("../103");
var p = require("../120");
var f = require("../140");
var h = require("../75/index");
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
var g = require("../1504/228");
var _ = require("./558");
var v = require("../1504/478");
var b = require("./428");
var y = require("./488");
var E = require("./999");
var O = require("../8");
var w = function __importDefault(module) {
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
}(O);
function C(e, t, n) {
  return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
var T = require("./1000");
var S = require("../108");
var I = require("./378");
function A(e, t) {
  var n = {};
  n[e.toLowerCase()] = t.toLowerCase();
  n["Webkit".concat(e)] = "webkit".concat(t);
  n["Moz".concat(e)] = "moz".concat(t);
  n["ms".concat(e)] = "MS".concat(t);
  n["O".concat(e)] = "o".concat(t.toLowerCase());
  return n;
}
var j = function (e, t) {
  var n = {
    animationend: A("Animation", "AnimationEnd"),
    transitionend: A("Transition", "TransitionEnd")
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
}(Object(I.a)(), "undefined" !== typeof window ? window : {});
var N = {};
if (Object(I.a)()) {
  var R = document.createElement("div");
  N = R.style;
}
var k = {};
function x(e) {
  if (k[e]) {
    return k[e];
  }
  var t = j[e];
  if (t) {
    for (var n = Object.keys(t), r = n.length, o = 0; o < r; o += 1) {
      var i = n[o];
      if (Object.prototype.hasOwnProperty.call(t, i) && i in N) {
        k[e] = t[i];
        return k[e];
      }
    }
  }
  return "";
}
var D = x("animationend");
var M = x("transitionend");
var L = !(!D || !M);
var P = D || "animationend";
var B = M || "transitionend";
function F(e, t) {
  return e ? "object" === Object(S.a)(e) ? e[t.replace(/-\w/g, function (e) {
    return e[1].toUpperCase();
  })] : "".concat(e, "-").concat(t) : null;
}
function G(e) {
  var t = Object(a.useRef)(!1);
  var n = Object(a.useState)(e);
  var r = Object(o.a)(n, 2);
  var i = r[0];
  var s = r[1];
  Object(a.useEffect)(function () {
    return function () {
      t.current = !0;
    };
  }, []);
  return [i, function (e) {
    if (!t.current) {
      s(e);
    }
  }];
}
var U = Object(I.a)() ? a.useLayoutEffect : a.useEffect;
var W = ["prepare", "start", "active", "end"];
function H(e) {
  return "active" === e || "end" === e;
}
var V = function (e, t) {
  var n = a.useState("none");
  var r = Object(o.a)(n, 2);
  var i = r[0];
  var s = r[1];
  var c = function () {
    var e = a.useRef(null);
    function t() {
      g.a.cancel(e.current);
    }
    a.useEffect(function () {
      return function () {
        t();
      };
    }, []);
    return [function n(r) {
      var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      t();
      var i = Object(g.a)(function () {
        if (o <= 1) {
          r({
            isCanceled: function () {
              return i !== e.current;
            }
          });
        } else {
          n(r, o - 1);
        }
      });
      e.current = i;
    }, t];
  }();
  var l = Object(o.a)(c, 2);
  var u = l[0];
  var d = l[1];
  U(function () {
    if ("none" !== i && "end" !== i) {
      var e = W.indexOf(i);
      var n = W[e + 1];
      var r = t(i);
      if (!1 === r) {
        s(n);
      } else {
        u(function (e) {
          function t() {
            if (!e.isCanceled()) {
              s(n);
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
  a.useEffect(function () {
    return function () {
      d();
    };
  }, []);
  return [function () {
    s("prepare");
  }, i];
};
function z(e, t, n, i) {
  var c = i.motionEnter;
  var l = void 0 === c || c;
  var u = i.motionAppear;
  var d = void 0 === u || u;
  var p = i.motionLeave;
  var f = void 0 === p || p;
  var h = i.motionDeadline;
  var m = i.motionLeaveImmediately;
  var g = i.onAppearPrepare;
  var _ = i.onEnterPrepare;
  var v = i.onLeavePrepare;
  var b = i.onAppearStart;
  var y = i.onEnterStart;
  var E = i.onLeaveStart;
  var O = i.onAppearActive;
  var w = i.onEnterActive;
  var C = i.onLeaveActive;
  var T = i.onAppearEnd;
  var S = i.onEnterEnd;
  var I = i.onLeaveEnd;
  var A = i.onVisibleChanged;
  var j = G();
  var N = Object(o.a)(j, 2);
  var R = N[0];
  var k = N[1];
  var x = G("none");
  var D = Object(o.a)(x, 2);
  var M = D[0];
  var L = D[1];
  var F = G(null);
  var W = Object(o.a)(F, 2);
  var z = W[0];
  var Y = W[1];
  var K = Object(a.useRef)(!1);
  var q = Object(a.useRef)(null);
  var X = Object(a.useRef)(!1);
  var Q = Object(a.useRef)(null);
  function Z() {
    return n() || Q.current;
  }
  var J = Object(a.useRef)(!1);
  function $(e) {
    var t;
    var n = Z();
    if (!(e && !e.deadline && e.target !== n)) {
      if ("appear" === M && J.current) {
        t = null === T || void 0 === T ? void 0 : T(n, e);
      } else {
        if ("enter" === M && J.current) {
          t = null === S || void 0 === S ? void 0 : S(n, e);
        } else {
          if ("leave" === M && J.current) {
            t = null === I || void 0 === I ? void 0 : I(n, e);
          }
        }
      }
      if (!(!1 === t || X.current)) {
        L("none");
        Y(null);
      }
    }
  }
  var ee = function (e) {
    var t = Object(a.useRef)();
    var n = Object(a.useRef)(e);
    n.current = e;
    var r = a.useCallback(function (e) {
      n.current(e);
    }, []);
    function o(e) {
      if (e) {
        e.removeEventListener(B, r);
        e.removeEventListener(P, r);
      }
    }
    a.useEffect(function () {
      return function () {
        o(t.current);
      };
    }, []);
    return [function (e) {
      if (t.current && t.current !== e) {
        o(t.current);
      }
      if (e && e !== t.current) {
        e.addEventListener(B, r);
        e.addEventListener(P, r);
        t.current = e;
      }
    }, o];
  }($);
  var te = Object(o.a)(ee, 1)[0];
  var ne = a.useMemo(function () {
    var e;
    var t;
    var n;
    switch (M) {
      case "appear":
        e = {};
        Object(r.a)(e, "prepare", g);
        Object(r.a)(e, "start", b);
        Object(r.a)(e, "active", O);
        return e;
      case "enter":
        t = {};
        Object(r.a)(t, "prepare", _);
        Object(r.a)(t, "start", y);
        Object(r.a)(t, "active", w);
        return t;
      case "leave":
        n = {};
        Object(r.a)(n, "prepare", v);
        Object(r.a)(n, "start", E);
        Object(r.a)(n, "active", C);
        return n;
      default:
        return {};
    }
  }, [M]);
  var re = V(M, function (e) {
    if ("prepare" === e) {
      var t = ne.prepare;
      return !!t && t(Z());
    }
    var n;
    if (ae in ne) {
      Y((null === (n = ne[ae]) || void 0 === n ? void 0 : n.call(ne, Z(), null)) || null);
    }
    if ("active" === ae) {
      te(Z());
      if (h > 0) {
        clearTimeout(q.current);
        q.current = setTimeout(function () {
          $({
            deadline: !0
          });
        }, h);
      }
    }
    return !0;
  });
  var oe = Object(o.a)(re, 2);
  var ie = oe[0];
  var ae = oe[1];
  var se = H(ae);
  J.current = se;
  U(function () {
    k(t);
    var n;
    var r = K.current;
    K.current = !0;
    if (e) {
      if (!r && t && d) {
        n = "appear";
      }
      if (r && t && l) {
        n = "enter";
      }
      if (r && !t && f || !r && m && !t && f) {
        n = "leave";
      }
      if (n) {
        L(n);
        ie();
      }
    }
  }, [t]);
  Object(a.useEffect)(function () {
    if ("appear" === M && !d || "enter" === M && !l || "leave" === M && !f) {
      L("none");
    }
  }, [d, l, f]);
  Object(a.useEffect)(function () {
    return function () {
      clearTimeout(q.current);
      X.current = !0;
    };
  }, []);
  Object(a.useEffect)(function () {
    if (void 0 !== R && "none" === M) {
      if (!(null === A || void 0 === A)) {
        A(R);
      }
    }
  }, [R, M]);
  var ce = z;
  if (ne.prepare && "start" === ae) {
    ce = Object(s.a)({
      transition: "none"
    }, ce);
  }
  return [M, ae, ce, null !== R && void 0 !== R ? R : t];
}
var Y = function (e) {
  Object(p.a)(n, e);
  var t = Object(f.a)(n);
  function n() {
    Object(l.a)(this, n);
    return t.apply(this, arguments);
  }
  Object(u.a)(n, [{
    key: "render",
    value: function () {
      return this.props.children;
    }
  }]);
  return n;
}(a.Component);
var K = function (e) {
  var t = e;
  function n(e) {
    return !(!e.motionName || !t);
  }
  if ("object" === Object(S.a)(e)) {
    t = e.transitionSupport;
  }
  var i = a.forwardRef(function (e, t) {
    var i = e.visible;
    var c = void 0 === i || i;
    var l = e.removeOnLeave;
    var u = void 0 === l || l;
    var d = e.forceRender;
    var p = e.children;
    var f = e.motionName;
    var h = e.leavedClassName;
    var m = e.eventProps;
    var g = n(e);
    var _ = Object(a.useRef)();
    var y = Object(a.useRef)();
    var E = z(g, c, function () {
      try {
        return Object(v.a)(_.current || y.current);
      } catch (e) {
        return null;
      }
    }, e);
    var O = Object(o.a)(E, 4);
    var C = O[0];
    var T = O[1];
    var S = O[2];
    var I = O[3];
    var A = a.useRef(I);
    if (I) {
      A.current = !0;
    }
    var j = Object(a.useRef)(t);
    j.current = t;
    var N;
    var R = a.useCallback(function (e) {
      _.current = e;
      Object(b.b)(j.current, e);
    }, []);
    var k = Object(s.a)(Object(s.a)({}, m), {}, {
      visible: c
    });
    if (p) {
      if ("none" !== C && n(e)) {
        var x;
        var D;
        if ("prepare" === T) {
          D = "prepare";
        } else {
          if (H(T)) {
            D = "active";
          } else {
            if ("start" === T) {
              D = "start";
            }
          }
        }
        N = p(Object(s.a)(Object(s.a)({}, k), {}, {
          className: w()(F(f, C), (x = {}, Object(r.a)(x, F(f, "".concat(C, "-").concat(D)), D), Object(r.a)(x, f, "string" === typeof f), x)),
          style: S
        }), R);
      } else {
        N = I ? p(Object(s.a)({}, k), R) : !u && A.current ? p(Object(s.a)(Object(s.a)({}, k), {}, {
          className: h
        }), R) : d ? p(Object(s.a)(Object(s.a)({}, k), {}, {
          style: {
            display: "none"
          }
        }), R) : null;
      }
    } else {
      N = null;
    }
    return a.createElement(Y, {
      ref: y
    }, N);
  });
  i.displayName = "CSSMotion";
  return i;
}(L);
function q(e) {
  var t;
  t = e && "object" === Object(S.a)(e) && "key" in e ? e : {
    key: e
  };
  return Object(s.a)(Object(s.a)({}, t), {}, {
    key: String(t.key)
  });
}
function X() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
  return e.map(q);
}
function Q() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
  var n = [];
  var r = 0;
  var o = t.length;
  var i = X(e);
  var a = X(t);
  i.forEach(function (e) {
    for (var t = !1, i = r; i < o; i += 1) {
      var c = a[i];
      if (c.key === e.key) {
        if (r < i) {
          n = n.concat(a.slice(r, i).map(function (e) {
            return Object(s.a)(Object(s.a)({}, e), {}, {
              status: "add"
            });
          }));
          r = i;
        }
        n.push(Object(s.a)(Object(s.a)({}, c), {}, {
          status: "keep"
        }));
        r += 1;
        t = !0;
        break;
      }
    }
    if (!t) {
      n.push(Object(s.a)(Object(s.a)({}, e), {}, {
        status: "remove"
      }));
    }
  });
  if (r < o) {
    n = n.concat(a.slice(r).map(function (e) {
      return Object(s.a)(Object(s.a)({}, e), {}, {
        status: "add"
      });
    }));
  }
  var c = {};
  n.forEach(function (e) {
    var t = e.key;
    c[t] = (c[t] || 0) + 1;
  });
  var l = Object.keys(c).filter(function (e) {
    return c[e] > 1;
  });
  l.forEach(function (e) {
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
var Z = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
!function (e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : K;
  var n = function (e) {
    Object(p.a)(r, e);
    var n = Object(f.a)(r);
    function r() {
      var e;
      Object(l.a)(this, r);
      (e = n.apply(this, arguments)).state = {
        keyEntities: []
      };
      e.removeKey = function (t) {
        e.setState(function (e) {
          return {
            keyEntities: e.keyEntities.map(function (e) {
              return e.key !== t ? e : Object(s.a)(Object(s.a)({}, e), {}, {
                status: "removed"
              });
            })
          };
        });
      };
      return e;
    }
    Object(u.a)(r, [{
      key: "render",
      value: function () {
        var e = this;
        var n = this.state.keyEntities;
        var r = this.props;
        var o = r.component;
        var s = r.children;
        var l = r.onVisibleChanged;
        var u = Object(i.a)(r, ["component", "children", "onVisibleChanged"]);
        var d = o || a.Fragment;
        var p = {};
        Z.forEach(function (e) {
          p[e] = u[e];
          delete u[e];
        });
        delete u.keys;
        return a.createElement(d, u, n.map(function (n) {
          var r = n.status;
          var o = Object(i.a)(n, ["status"]);
          var u = "add" === r || "keep" === r;
          return a.createElement(t, Object(c.a)({}, p, {
            key: o.key,
            visible: u,
            eventProps: o,
            onVisibleChanged: function (t) {
              if (!(null === l || void 0 === l)) {
                l(t, {
                  key: o.key
                });
              }
              if (!t) {
                e.removeKey(o.key);
              }
            }
          }), s);
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function (e, t) {
        var n = e.keys;
        var r = t.keyEntities;
        var o = X(n);
        return {
          keyEntities: Q(r, o).filter(function (e) {
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
  }(a.Component);
  n.defaultProps = {
    component: "div"
  };
}(L);
var J = K;
function $(e) {
  var t = e.prefixCls;
  var n = e.motion;
  var r = e.animation;
  var o = e.transitionName;
  return n || (r ? {
    motionName: "".concat(t, "-").concat(r)
  } : o ? {
    motionName: o
  } : null);
}
function ee(e) {
  var t = e.prefixCls;
  var n = e.visible;
  var r = e.zIndex;
  var o = e.mask;
  var i = e.maskMotion;
  var l = e.maskAnimation;
  var u = e.maskTransitionName;
  if (!o) {
    return null;
  }
  var d = {};
  if (i || u || l) {
    d = Object(s.a)({
      motionAppear: !0
    }, $({
      motion: i,
      prefixCls: t,
      transitionName: u,
      animation: l
    }));
  }
  return a.createElement(J, Object(c.a)({}, d, {
    visible: n,
    removeOnLeave: !0
  }), function (e) {
    var n = e.className;
    return a.createElement("div", {
      style: {
        zIndex: r
      },
      className: w()("".concat(t, "-mask"), n)
    });
  });
}
var te = require("../556/555/index");
var ne = require("../110");
var re = function __importDefault(module) {
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
}(ne);
var oe = require("../171");
var ie = ["measure", "align", null, "motion"];
var ae = a.forwardRef(function (e, t) {
  var n = e.visible;
  var r = e.prefixCls;
  var i = e.className;
  var l = e.style;
  var u = e.children;
  var d = e.zIndex;
  var p = e.stretch;
  var f = e.destroyPopupOnHide;
  var h = e.forceRender;
  var m = e.align;
  var _ = e.point;
  var v = e.getRootDomNode;
  var b = e.getClassNameFromAlign;
  var y = e.onAlign;
  var E = e.onMouseEnter;
  var O = e.onMouseLeave;
  var C = e.onMouseDown;
  var T = e.onTouchStart;
  var S = Object(a.useRef)();
  var I = Object(a.useRef)();
  var A = Object(a.useState)();
  var j = Object(o.a)(A, 2);
  var N = j[0];
  var R = j[1];
  var k = function (e) {
    var t = a.useState({
      width: 0,
      height: 0
    });
    var n = Object(o.a)(t, 2);
    var r = n[0];
    var i = n[1];
    return [a.useMemo(function () {
      var t = {};
      if (e) {
        var n = r.width;
        var o = r.height;
        if (-1 !== e.indexOf("height") && o) {
          t.height = o;
        } else {
          if (-1 !== e.indexOf("minHeight") && o) {
            t.minHeight = o;
          }
        }
        if (-1 !== e.indexOf("width") && n) {
          t.width = n;
        } else {
          if (-1 !== e.indexOf("minWidth") && n) {
            t.minWidth = n;
          }
        }
      }
      return t;
    }, [e, r]), function (e) {
      i({
        width: e.offsetWidth,
        height: e.offsetHeight
      });
    }];
  }(p);
  var x = Object(o.a)(k, 2);
  var D = x[0];
  var M = x[1];
  var L = function (e, t) {
    var n = Object(a.useState)(null);
    var r = Object(o.a)(n, 2);
    var i = r[0];
    var s = r[1];
    var c = Object(a.useRef)();
    var l = Object(a.useRef)(!1);
    function u(e) {
      if (!l.current) {
        s(e);
      }
    }
    function d() {
      g.a.cancel(c.current);
    }
    Object(a.useEffect)(function () {
      u("measure");
    }, [e]);
    Object(a.useEffect)(function () {
      switch (i) {
        case "measure":
          t();
      }
      if (i) {
        c.current = Object(g.a)(Object(oe.a)(re.a.mark(function e() {
          var t;
          var n;
          return re.a.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  t = ie.indexOf(i);
                  if ((n = ie[t + 1]) && -1 !== t) {
                    u(n);
                  }
                case 3:
                case "end":
                  return e.stop();
              }
            }
          }, e);
        })));
      }
    }, [i]);
    Object(a.useEffect)(function () {
      return function () {
        l.current = !0;
        d();
      };
    }, []);
    return [i, function (e) {
      d();
      c.current = Object(g.a)(function () {
        u(function (e) {
          switch (i) {
            case "align":
              return "motion";
            case "motion":
              return "stable";
          }
          return e;
        });
        if (!(null === e || void 0 === e)) {
          e();
        }
      });
    }];
  }(n, function () {
    if (p) {
      M(v());
    }
  });
  var P = Object(o.a)(L, 2);
  var B = P[0];
  var F = P[1];
  var G = Object(a.useRef)();
  function U() {
    var e;
    if (!(null === (e = S.current) || void 0 === e)) {
      e.forceAlign();
    }
  }
  function W(e, t) {
    var n = b(t);
    if (N !== n) {
      R(n);
    }
    if ("align" === B) {
      if (N !== n) {
        Promise.resolve().then(function () {
          U();
        });
      } else {
        F(function () {
          var e;
          if (!(null === (e = G.current) || void 0 === e)) {
            e.call(G);
          }
        });
      }
      if (!(null === y || void 0 === y)) {
        y(e, t);
      }
    }
  }
  var H = Object(s.a)({}, $(e));
  function V() {
    return new Promise(function (e) {
      G.current = e;
    });
  }
  ["onAppearEnd", "onEnterEnd", "onLeaveEnd"].forEach(function (e) {
    var t = H[e];
    H[e] = function (e, n) {
      F();
      return null === t || void 0 === t ? void 0 : t(e, n);
    };
  });
  a.useEffect(function () {
    if (!(H.motionName || "motion" !== B)) {
      F();
    }
  }, [H.motionName, B]);
  a.useImperativeHandle(t, function () {
    return {
      forceAlign: U,
      getElement: function () {
        return I.current;
      }
    };
  });
  var z = Object(s.a)(Object(s.a)({}, D), {}, {
    zIndex: d,
    opacity: "motion" !== B && "stable" !== B && n ? 0 : void 0,
    pointerEvents: "stable" === B ? void 0 : "none"
  }, l);
  var Y = !0;
  if (!(!(null === m || void 0 === m ? void 0 : m.points) || "align" !== B && "stable" !== B)) {
    Y = !1;
  }
  var K = u;
  if (a.Children.count(u) > 1) {
    K = a.createElement("div", {
      className: "".concat(r, "-content")
    }, u);
  }
  return a.createElement(J, Object(c.a)({
    visible: n,
    ref: I,
    leavedClassName: "".concat(r, "-hidden")
  }, H, {
    onAppearPrepare: V,
    onEnterPrepare: V,
    removeOnLeave: f,
    forceRender: h
  }), function (e, t) {
    var n = e.className;
    var o = e.style;
    var c = w()(r, i, N, n);
    return a.createElement(te.a, {
      target: _ || v,
      key: "popup",
      ref: S,
      monitorWindowResize: !0,
      disabled: Y,
      align: m,
      onAlign: W
    }, a.createElement("div", {
      ref: t,
      className: c,
      onMouseEnter: E,
      onMouseLeave: O,
      onMouseDownCapture: C,
      onTouchStartCapture: T,
      style: Object(s.a)(Object(s.a)({}, o), z)
    }, K));
  });
});
ae.displayName = "PopupInner";
var se = ae;
var ce = a.forwardRef(function (e, t) {
  var n = e.prefixCls;
  var r = e.visible;
  var o = e.zIndex;
  var i = e.children;
  var l = e.mobile;
  var u = (l = void 0 === l ? {} : l).popupClassName;
  var d = l.popupStyle;
  var p = l.popupMotion;
  var f = void 0 === p ? {} : p;
  var h = l.popupRender;
  var m = a.useRef();
  a.useImperativeHandle(t, function () {
    return {
      forceAlign: function () {},
      getElement: function () {
        return m.current;
      }
    };
  });
  var g = Object(s.a)({
    zIndex: o
  }, d);
  var _ = i;
  if (a.Children.count(i) > 1) {
    _ = a.createElement("div", {
      className: "".concat(n, "-content")
    }, i);
  }
  if (h) {
    _ = h(_);
  }
  return a.createElement(J, Object(c.a)({
    visible: r,
    ref: m,
    removeOnLeave: !0
  }, f), function (e, t) {
    var r = e.className;
    var o = e.style;
    var i = w()(n, u, r);
    return a.createElement("div", {
      ref: t,
      className: i,
      style: Object(s.a)(Object(s.a)({}, o), g)
    }, _);
  });
});
ce.displayName = "MobilePopupInner";
var le = ce;
var ue = ["visible", "mobile"];
var de = a.forwardRef(function (e, t) {
  var n = e.visible;
  var r = e.mobile;
  var l = Object(i.a)(e, ue);
  var u = Object(a.useState)(n);
  var d = Object(o.a)(u, 2);
  var p = d[0];
  var f = d[1];
  var h = Object(a.useState)(!1);
  var m = Object(o.a)(h, 2);
  var g = m[0];
  var _ = m[1];
  var v = Object(s.a)(Object(s.a)({}, l), {}, {
    visible: p
  });
  Object(a.useEffect)(function () {
    f(n);
    if (n && r) {
      _(Object(T.a)());
    }
  }, [n, r]);
  var b = g ? a.createElement(le, Object(c.a)({}, v, {
    mobile: r,
    ref: t
  })) : a.createElement(se, Object(c.a)({}, v, {
    ref: t
  }));
  return a.createElement("div", null, a.createElement(ee, v), b);
});
de.displayName = "Popup";
var pe = de;
var fe = a.createContext(null);
function he() {}
function me() {
  return "";
}
function ge(e) {
  return e ? e.ownerDocument : window.document;
}
var _e = ["onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur", "onContextMenu"];
var ve = function (e) {
  var t = function (t) {
    Object(p.a)(r, t);
    var n = Object(f.a)(r);
    function r(e) {
      var t;
      var o;
      Object(l.a)(this, r);
      (t = n.call(this, e)).popupRef = a.createRef();
      t.triggerRef = a.createRef();
      t.attachId = void 0;
      t.clickOutsideHandler = void 0;
      t.touchOutsideHandler = void 0;
      t.contextMenuOutsideHandler1 = void 0;
      t.contextMenuOutsideHandler2 = void 0;
      t.mouseDownTimeout = void 0;
      t.focusTime = void 0;
      t.preClickTime = void 0;
      t.preTouchTime = void 0;
      t.delayTimer = void 0;
      t.hasPopupMouseDown = void 0;
      t.onMouseEnter = function (e) {
        var n = t.props.mouseEnterDelay;
        t.fireEvents("onMouseEnter", e);
        t.delaySetPopupVisible(!0, n, n ? null : e);
      };
      t.onMouseMove = function (e) {
        t.fireEvents("onMouseMove", e);
        t.setPoint(e);
      };
      t.onMouseLeave = function (e) {
        t.fireEvents("onMouseLeave", e);
        t.delaySetPopupVisible(!1, t.props.mouseLeaveDelay);
      };
      t.onPopupMouseEnter = function () {
        t.clearDelayTimer();
      };
      t.onPopupMouseLeave = function (e) {
        var n;
        if (!(e.relatedTarget && !e.relatedTarget.setTimeout && Object(_.a)(null === (n = t.popupRef.current) || void 0 === n ? void 0 : n.getElement(), e.relatedTarget))) {
          t.delaySetPopupVisible(!1, t.props.mouseLeaveDelay);
        }
      };
      t.onFocus = function (e) {
        t.fireEvents("onFocus", e);
        t.clearDelayTimer();
        if (t.isFocusToShow()) {
          t.focusTime = Date.now();
          t.delaySetPopupVisible(!0, t.props.focusDelay);
        }
      };
      t.onMouseDown = function (e) {
        t.fireEvents("onMouseDown", e);
        t.preClickTime = Date.now();
      };
      t.onTouchStart = function (e) {
        t.fireEvents("onTouchStart", e);
        t.preTouchTime = Date.now();
      };
      t.onBlur = function (e) {
        t.fireEvents("onBlur", e);
        t.clearDelayTimer();
        if (t.isBlurToHide()) {
          t.delaySetPopupVisible(!1, t.props.blurDelay);
        }
      };
      t.onContextMenu = function (e) {
        e.preventDefault();
        t.fireEvents("onContextMenu", e);
        t.setPopupVisible(!0, e);
      };
      t.onContextMenuClose = function () {
        if (t.isContextMenuToShow()) {
          t.close();
        }
      };
      t.onClick = function (e) {
        t.fireEvents("onClick", e);
        if (t.focusTime) {
          var n;
          if (t.preClickTime && t.preTouchTime) {
            n = Math.min(t.preClickTime, t.preTouchTime);
          } else {
            if (t.preClickTime) {
              n = t.preClickTime;
            } else {
              if (t.preTouchTime) {
                n = t.preTouchTime;
              }
            }
          }
          if (Math.abs(n - t.focusTime) < 20) {
            return;
          }
          t.focusTime = 0;
        }
        t.preClickTime = 0;
        t.preTouchTime = 0;
        if (t.isClickToShow() && (t.isClickToHide() || t.isBlurToHide()) && e && e.preventDefault) {
          e.preventDefault();
        }
        var r = !t.state.popupVisible;
        if (t.isClickToHide() && !r || r && t.isClickToShow()) {
          t.setPopupVisible(!t.state.popupVisible, e);
        }
      };
      t.onPopupMouseDown = function () {
        var e;
        t.hasPopupMouseDown = !0;
        clearTimeout(t.mouseDownTimeout);
        t.mouseDownTimeout = window.setTimeout(function () {
          t.hasPopupMouseDown = !1;
        }, 0);
        if (t.context) {
          (e = t.context).onPopupMouseDown.apply(e, arguments);
        }
      };
      t.onDocumentClick = function (e) {
        if (!t.props.mask || t.props.maskClosable) {
          var n = e.target;
          var r = t.getRootDomNode();
          var o = t.getPopupDomNode();
          if (!(Object(_.a)(r, n) && !t.isContextMenuOnly() || Object(_.a)(o, n) || t.hasPopupMouseDown)) {
            t.close();
          }
        }
      };
      t.getRootDomNode = function () {
        var e = t.props.getTriggerDOMNode;
        if (e) {
          return e(t.triggerRef.current);
        }
        try {
          var n = Object(v.a)(t.triggerRef.current);
          if (n) {
            return n;
          }
        } catch (r) {}
        return m.a.findDOMNode(Object(d.a)(t));
      };
      t.getPopupClassNameFromAlign = function (e) {
        var n = [];
        var r = t.props;
        var o = r.popupPlacement;
        var i = r.builtinPlacements;
        var a = r.prefixCls;
        var s = r.alignPoint;
        var c = r.getPopupClassNameFromAlign;
        if (o && i) {
          n.push(function (e, t, n, r) {
            for (var o = n.points, i = Object.keys(e), a = 0; a < i.length; a += 1) {
              var s = i[a];
              if (C(e[s].points, o, r)) {
                return "".concat(t, "-placement-").concat(s);
              }
            }
            return "";
          }(i, a, e, s));
        }
        if (c) {
          n.push(c(e));
        }
        return n.join(" ");
      };
      t.getComponent = function () {
        var e = t.props;
        var n = e.prefixCls;
        var r = e.destroyPopupOnHide;
        var o = e.popupClassName;
        var i = e.onPopupAlign;
        var s = e.popupMotion;
        var l = e.popupAnimation;
        var u = e.popupTransitionName;
        var d = e.popupStyle;
        var p = e.mask;
        var f = e.maskAnimation;
        var h = e.maskTransitionName;
        var m = e.maskMotion;
        var g = e.zIndex;
        var _ = e.popup;
        var v = e.stretch;
        var b = e.alignPoint;
        var y = e.mobile;
        var E = e.forceRender;
        var O = t.state;
        var w = O.popupVisible;
        var C = O.point;
        var T = t.getPopupAlign();
        var S = {};
        if (t.isMouseEnterToShow()) {
          S.onMouseEnter = t.onPopupMouseEnter;
        }
        if (t.isMouseLeaveToHide()) {
          S.onMouseLeave = t.onPopupMouseLeave;
        }
        S.onMouseDown = t.onPopupMouseDown;
        S.onTouchStart = t.onPopupMouseDown;
        return a.createElement(pe, Object(c.a)({
          prefixCls: n,
          destroyPopupOnHide: r,
          visible: w,
          point: b && C,
          className: o,
          align: T,
          onAlign: i,
          animation: l,
          getClassNameFromAlign: t.getPopupClassNameFromAlign
        }, S, {
          stretch: v,
          getRootDomNode: t.getRootDomNode,
          style: d,
          mask: p,
          zIndex: g,
          transitionName: u,
          maskAnimation: f,
          maskTransitionName: h,
          maskMotion: m,
          ref: t.popupRef,
          motion: s,
          mobile: y,
          forceRender: E
        }), "function" === typeof _ ? _() : _);
      };
      t.attachParent = function (e) {
        g.a.cancel(t.attachId);
        var n;
        var r = t.props;
        var o = r.getPopupContainer;
        var i = r.getDocument;
        var a = t.getRootDomNode();
        if (o) {
          if (a || 0 === o.length) {
            n = o(a);
          }
        } else {
          n = i(t.getRootDomNode()).body;
        }
        if (n) {
          n.appendChild(e);
        } else {
          t.attachId = Object(g.a)(function () {
            t.attachParent(e);
          });
        }
      };
      t.getContainer = function () {
        var e = (0, t.props.getDocument)(t.getRootDomNode()).createElement("div");
        e.style.position = "absolute";
        e.style.top = "0";
        e.style.left = "0";
        e.style.width = "100%";
        t.attachParent(e);
        return e;
      };
      t.setPoint = function (e) {
        if (t.props.alignPoint && e) {
          t.setState({
            point: {
              pageX: e.pageX,
              pageY: e.pageY
            }
          });
        }
      };
      t.handlePortalUpdate = function () {
        if (t.state.prevPopupVisible !== t.state.popupVisible) {
          t.props.afterPopupVisibleChange(t.state.popupVisible);
        }
      };
      t.triggerContextValue = {
        onPopupMouseDown: t.onPopupMouseDown
      };
      o = "popupVisible" in e ? !!e.popupVisible : !!e.defaultPopupVisible;
      t.state = {
        prevPopupVisible: o,
        popupVisible: o
      };
      _e.forEach(function (e) {
        t["fire".concat(e)] = function (n) {
          t.fireEvents(e, n);
        };
      });
      return t;
    }
    Object(u.a)(r, [{
      key: "componentDidMount",
      value: function () {
        this.componentDidUpdate();
      }
    }, {
      key: "componentDidUpdate",
      value: function () {
        var e;
        var t = this.props;
        if (this.state.popupVisible) {
          if (!(this.clickOutsideHandler || !this.isClickToHide() && !this.isContextMenuToShow())) {
            e = t.getDocument(this.getRootDomNode());
            this.clickOutsideHandler = Object(y.a)(e, "mousedown", this.onDocumentClick);
          }
          if (!this.touchOutsideHandler) {
            e = e || t.getDocument(this.getRootDomNode());
            this.touchOutsideHandler = Object(y.a)(e, "touchstart", this.onDocumentClick);
          }
          if (!this.contextMenuOutsideHandler1 && this.isContextMenuToShow()) {
            e = e || t.getDocument(this.getRootDomNode());
            this.contextMenuOutsideHandler1 = Object(y.a)(e, "scroll", this.onContextMenuClose);
          }
          return void (!this.contextMenuOutsideHandler2 && this.isContextMenuToShow() && (this.contextMenuOutsideHandler2 = Object(y.a)(window, "blur", this.onContextMenuClose)));
        }
        this.clearOutsideHandler();
      }
    }, {
      key: "componentWillUnmount",
      value: function () {
        this.clearDelayTimer();
        this.clearOutsideHandler();
        clearTimeout(this.mouseDownTimeout);
        g.a.cancel(this.attachId);
      }
    }, {
      key: "getPopupDomNode",
      value: function () {
        var e;
        return (null === (e = this.popupRef.current) || void 0 === e ? void 0 : e.getElement()) || null;
      }
    }, {
      key: "getPopupAlign",
      value: function () {
        var e = this.props;
        var t = e.popupPlacement;
        var n = e.popupAlign;
        var r = e.builtinPlacements;
        return t && r ? function (e, t, n) {
          var r = e[t] || {};
          return Object(s.a)(Object(s.a)({}, r), n);
        }(r, t, n) : n;
      }
    }, {
      key: "setPopupVisible",
      value: function (e, t) {
        var n = this.props.alignPoint;
        var r = this.state.popupVisible;
        this.clearDelayTimer();
        if (r !== e) {
          if (!("popupVisible" in this.props)) {
            this.setState({
              popupVisible: e,
              prevPopupVisible: r
            });
          }
          this.props.onPopupVisibleChange(e);
        }
        if (n && t && e) {
          this.setPoint(t);
        }
      }
    }, {
      key: "delaySetPopupVisible",
      value: function (e, t, n) {
        var r = this;
        var o = 1e3 * t;
        this.clearDelayTimer();
        if (o) {
          var i = n ? {
            pageX: n.pageX,
            pageY: n.pageY
          } : null;
          this.delayTimer = window.setTimeout(function () {
            r.setPopupVisible(e, i);
            r.clearDelayTimer();
          }, o);
        } else {
          this.setPopupVisible(e, n);
        }
      }
    }, {
      key: "clearDelayTimer",
      value: function () {
        if (this.delayTimer) {
          clearTimeout(this.delayTimer);
          this.delayTimer = null;
        }
      }
    }, {
      key: "clearOutsideHandler",
      value: function () {
        if (this.clickOutsideHandler) {
          this.clickOutsideHandler.remove();
          this.clickOutsideHandler = null;
        }
        if (this.contextMenuOutsideHandler1) {
          this.contextMenuOutsideHandler1.remove();
          this.contextMenuOutsideHandler1 = null;
        }
        if (this.contextMenuOutsideHandler2) {
          this.contextMenuOutsideHandler2.remove();
          this.contextMenuOutsideHandler2 = null;
        }
        if (this.touchOutsideHandler) {
          this.touchOutsideHandler.remove();
          this.touchOutsideHandler = null;
        }
      }
    }, {
      key: "createTwoChains",
      value: function (e) {
        var t = this.props.children.props;
        var n = this.props;
        return t[e] && n[e] ? this["fire".concat(e)] : t[e] || n[e];
      }
    }, {
      key: "isClickToShow",
      value: function () {
        var e = this.props;
        var t = e.action;
        var n = e.showAction;
        return -1 !== t.indexOf("click") || -1 !== n.indexOf("click");
      }
    }, {
      key: "isContextMenuOnly",
      value: function () {
        var e = this.props.action;
        return "contextMenu" === e || 1 === e.length && "contextMenu" === e[0];
      }
    }, {
      key: "isContextMenuToShow",
      value: function () {
        var e = this.props;
        var t = e.action;
        var n = e.showAction;
        return -1 !== t.indexOf("contextMenu") || -1 !== n.indexOf("contextMenu");
      }
    }, {
      key: "isClickToHide",
      value: function () {
        var e = this.props;
        var t = e.action;
        var n = e.hideAction;
        return -1 !== t.indexOf("click") || -1 !== n.indexOf("click");
      }
    }, {
      key: "isMouseEnterToShow",
      value: function () {
        var e = this.props;
        var t = e.action;
        var n = e.showAction;
        return -1 !== t.indexOf("hover") || -1 !== n.indexOf("mouseEnter");
      }
    }, {
      key: "isMouseLeaveToHide",
      value: function () {
        var e = this.props;
        var t = e.action;
        var n = e.hideAction;
        return -1 !== t.indexOf("hover") || -1 !== n.indexOf("mouseLeave");
      }
    }, {
      key: "isFocusToShow",
      value: function () {
        var e = this.props;
        var t = e.action;
        var n = e.showAction;
        return -1 !== t.indexOf("focus") || -1 !== n.indexOf("focus");
      }
    }, {
      key: "isBlurToHide",
      value: function () {
        var e = this.props;
        var t = e.action;
        var n = e.hideAction;
        return -1 !== t.indexOf("focus") || -1 !== n.indexOf("blur");
      }
    }, {
      key: "forcePopupAlign",
      value: function () {
        var e;
        if (this.state.popupVisible) {
          if (!(null === (e = this.popupRef.current) || void 0 === e)) {
            e.forceAlign();
          }
        }
      }
    }, {
      key: "fireEvents",
      value: function (e, t) {
        var n = this.props.children.props[e];
        if (n) {
          n(t);
        }
        var r = this.props[e];
        if (r) {
          r(t);
        }
      }
    }, {
      key: "close",
      value: function () {
        this.setPopupVisible(!1);
      }
    }, {
      key: "render",
      value: function () {
        var t = this.state.popupVisible;
        var n = this.props;
        var r = n.children;
        var o = n.forceRender;
        var i = n.alignPoint;
        var c = n.className;
        var l = n.autoDestroy;
        var u = a.Children.only(r);
        var d = {
          key: "trigger"
        };
        if (this.isContextMenuToShow()) {
          d.onContextMenu = this.onContextMenu;
        } else {
          d.onContextMenu = this.createTwoChains("onContextMenu");
        }
        if (this.isClickToHide() || this.isClickToShow()) {
          d.onClick = this.onClick;
          d.onMouseDown = this.onMouseDown;
          d.onTouchStart = this.onTouchStart;
        } else {
          d.onClick = this.createTwoChains("onClick");
          d.onMouseDown = this.createTwoChains("onMouseDown");
          d.onTouchStart = this.createTwoChains("onTouchStart");
        }
        if (this.isMouseEnterToShow()) {
          d.onMouseEnter = this.onMouseEnter;
          if (i) {
            d.onMouseMove = this.onMouseMove;
          }
        } else {
          d.onMouseEnter = this.createTwoChains("onMouseEnter");
        }
        if (this.isMouseLeaveToHide()) {
          d.onMouseLeave = this.onMouseLeave;
        } else {
          d.onMouseLeave = this.createTwoChains("onMouseLeave");
        }
        if (this.isFocusToShow() || this.isBlurToHide()) {
          d.onFocus = this.onFocus;
          d.onBlur = this.onBlur;
        } else {
          d.onFocus = this.createTwoChains("onFocus");
          d.onBlur = this.createTwoChains("onBlur");
        }
        var p = w()(u && u.props && u.props.className, c);
        if (p) {
          d.className = p;
        }
        var f = Object(s.a)({}, d);
        if (Object(b.c)(u)) {
          f.ref = Object(b.a)(this.triggerRef, u.ref);
        }
        var h;
        var m = a.cloneElement(u, f);
        if (t || this.popupRef.current || o) {
          h = a.createElement(e, {
            key: "portal",
            getContainer: this.getContainer,
            didUpdate: this.handlePortalUpdate
          }, this.getComponent());
        }
        if (!t && l) {
          h = null;
        }
        return a.createElement(fe.Provider, {
          value: this.triggerContextValue
        }, m, h);
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function (e, t) {
        var n = e.popupVisible;
        var r = {};
        if (void 0 !== n && t.popupVisible !== n) {
          r.popupVisible = n;
          r.prevPopupVisible = t.popupVisible;
        }
        return r;
      }
    }]);
    return r;
  }(a.Component);
  t.contextType = fe;
  t.defaultProps = {
    prefixCls: "rc-trigger-popup",
    getPopupClassNameFromAlign: me,
    getDocument: ge,
    onPopupVisibleChange: he,
    afterPopupVisibleChange: he,
    onPopupAlign: he,
    popupClassName: "",
    mouseEnterDelay: 0,
    mouseLeaveDelay: .1,
    focusDelay: 0,
    blurDelay: .15,
    popupStyle: {},
    destroyPopupOnHide: !1,
    popupAlign: {},
    defaultPopupVisible: !1,
    mask: !1,
    maskClosable: !0,
    action: [],
    showAction: [],
    hideAction: [],
    autoDestroy: !1
  };
  return t;
}(E.a);
var be = {
  adjustX: 1,
  adjustY: 1
};
var ye = [0, 0];
var Ee = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: be,
    offset: [0, -4],
    targetOffset: ye
  },
  topCenter: {
    points: ["bc", "tc"],
    overflow: be,
    offset: [0, -4],
    targetOffset: ye
  },
  topRight: {
    points: ["br", "tr"],
    overflow: be,
    offset: [0, -4],
    targetOffset: ye
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: be,
    offset: [0, 4],
    targetOffset: ye
  },
  bottomCenter: {
    points: ["tc", "bc"],
    overflow: be,
    offset: [0, 4],
    targetOffset: ye
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: be,
    offset: [0, 4],
    targetOffset: ye
  }
};
var Oe = a.forwardRef(function (e, t) {
  var n = e.arrow;
  var s = void 0 !== n && n;
  var c = e.prefixCls;
  var l = void 0 === c ? "rc-dropdown" : c;
  var u = e.transitionName;
  var d = e.animation;
  var p = e.align;
  var f = e.placement;
  var h = void 0 === f ? "bottomLeft" : f;
  var m = e.placements;
  var g = void 0 === m ? Ee : m;
  var _ = e.getPopupContainer;
  var v = e.showAction;
  var b = e.hideAction;
  var y = e.overlayClassName;
  var E = e.overlayStyle;
  var O = e.visible;
  var C = e.trigger;
  var T = void 0 === C ? ["hover"] : C;
  var S = Object(i.a)(e, ["arrow", "prefixCls", "transitionName", "animation", "align", "placement", "placements", "getPopupContainer", "showAction", "hideAction", "overlayClassName", "overlayStyle", "visible", "trigger"]);
  var I = a.useState();
  var A = Object(o.a)(I, 2);
  var j = A[0];
  var N = A[1];
  var R = "visible" in e ? O : j;
  var k = a.useRef(null);
  a.useImperativeHandle(t, function () {
    return k.current;
  });
  var x = function () {
    var t = e.overlay;
    return "function" === typeof t ? t() : t;
  };
  var D = function (t) {
    var n = e.onOverlayClick;
    var r = x().props;
    N(!1);
    if (n) {
      n(t);
    }
    if (r.onClick) {
      r.onClick(t);
    }
  };
  var M = function () {
    var e = x();
    var t = {
      prefixCls: "".concat(l, "-menu"),
      onClick: D
    };
    if ("string" === typeof e.type) {
      delete t.prefixCls;
    }
    return a.createElement(a.Fragment, null, s && a.createElement("div", {
      className: "".concat(l, "-arrow")
    }), a.cloneElement(e, t));
  };
  var L = b;
  if (!(L || -1 === T.indexOf("contextMenu"))) {
    L = ["click"];
  }
  return a.createElement(ve, Object.assign({}, S, {
    prefixCls: l,
    ref: k,
    popupClassName: w()(y, Object(r.a)({}, "".concat(l, "-show-arrow"), s)),
    popupStyle: E,
    builtinPlacements: g,
    action: T,
    showAction: v,
    hideAction: L || [],
    popupPlacement: h,
    popupAlign: p,
    popupTransitionName: u,
    popupAnimation: d,
    popupVisible: R,
    stretch: function () {
      var t = e.minOverlayWidthMatchTrigger;
      var n = e.alignPoint;
      return "minOverlayWidthMatchTrigger" in e ? t : !n;
    }() ? "minWidth" : "",
    popup: "function" === typeof e.overlay ? M : M(),
    onPopupVisibleChange: function (t) {
      var n = e.onVisibleChange;
      N(t);
      if ("function" === typeof n) {
        n(t);
      }
    },
    getPopupContainer: _
  }), function () {
    var t = e.children;
    var n = t.props ? t.props : {};
    var r = w()(n.className, function () {
      var t = e.openClassName;
      return void 0 !== t ? t : "".concat(l, "-open");
    }());
    return j && t ? a.cloneElement(t, {
      className: r
    }) : t;
  }());
});
export { Oe as a };
export default Oe;