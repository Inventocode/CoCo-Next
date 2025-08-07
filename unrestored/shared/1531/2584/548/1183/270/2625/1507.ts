"use strict";

var r = require("../../../../19");
var i = require("../../../../54");
var o = require("react");
require("../../../../50/index");
var a = require("../../../../75/index");
var s = require("../../100");
var c = require("../288");
var u = require("../../../../549/1186/315/2630/560");
var l = require("../153/index");
var f = true;
var d = false;
var h = null;
var p = {
  text: true,
  search: true,
  url: true,
  tel: true,
  email: true,
  password: true,
  number: true,
  date: true,
  month: true,
  week: true,
  time: true,
  datetime: true,
  "datetime-local": true
};
function _(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey)) {
    f = true;
  }
}
function A() {
  f = false;
}
function g() {
  if ("hidden" === this.visibilityState && d) {
    f = true;
  }
}
function v(e) {
  var t = e.target;
  try {
    return t.matches(":focus-visible");
  } catch (n) {}
  return f || function (e) {
    var t = e.type;
    var n = e.tagName;
    return !("INPUT" !== n || !p[t] || e.readOnly) || "TEXTAREA" === n && !e.readOnly || !!e.isContentEditable;
  }(t);
}
function m() {
  d = true;
  window.clearTimeout(h);
  h = window.setTimeout(function () {
    d = false;
  }, 100);
}
function y() {
  return {
    isFocusVisible: v,
    onBlurVisible: m,
    ref: o.useCallback(function (e) {
      var t;
      var n = a.findDOMNode(e);
      if (null != n) {
        (t = n.ownerDocument).addEventListener("keydown", _, true);
        t.addEventListener("mousedown", A, true);
        t.addEventListener("pointerdown", A, true);
        t.addEventListener("touchstart", A, true);
        t.addEventListener("visibilitychange", g, true);
      }
    }, [])
  };
}
var b = require("../../../../80/index");
var w = require("../../691/2631");
var E = "undefined" === typeof window ? o.useEffect : o.useLayoutEffect;
var x = function (e) {
  var t = e.classes;
  var n = e.pulsate;
  var r = undefined !== n && n;
  var i = e.rippleX;
  var a = e.rippleY;
  var c = e.rippleSize;
  var l = e.in;
  var f = e.onExited;
  var d = undefined === f ? function () {} : f;
  var h = e.timeout;
  var p = o.useState(false);
  var _ = p[0];
  var A = p[1];
  var g = s.a(t.ripple, t.rippleVisible, r && t.ripplePulsate);
  var v = {
    width: c,
    height: c,
    top: -c / 2 + a,
    left: -c / 2 + i
  };
  var m = s.a(t.child, _ && t.childLeaving, r && t.childPulsate);
  var y = u.a(d);
  E(function () {
    if (!l) {
      A(true);
      var e = setTimeout(y, h);
      return function () {
        clearTimeout(e);
      };
    }
  }, [y, l, h]);
  return o.createElement("span", {
    className: g,
    style: v
  }, o.createElement("span", {
    className: m
  }));
};
var C = o.forwardRef(function (e, t) {
  var n = e.center;
  var a = undefined !== n && n;
  var c = e.classes;
  var u = e.className;
  var l = i.a(e, ["center", "classes", "className"]);
  var f = o.useState([]);
  var d = f[0];
  var h = f[1];
  var p = o.useRef(0);
  var _ = o.useRef(null);
  o.useEffect(function () {
    if (_.current) {
      _.current();
      _.current = null;
    }
  }, [d]);
  var A = o.useRef(false);
  var g = o.useRef(null);
  var v = o.useRef(null);
  var m = o.useRef(null);
  o.useEffect(function () {
    return function () {
      clearTimeout(g.current);
    };
  }, []);
  var y = o.useCallback(function (e) {
    var t = e.pulsate;
    var n = e.rippleX;
    var r = e.rippleY;
    var i = e.rippleSize;
    var a = e.cb;
    h(function (e) {
      return [].concat(b.a(e), [o.createElement(x, {
        key: p.current,
        classes: c,
        timeout: 550,
        pulsate: t,
        rippleX: n,
        rippleY: r,
        rippleSize: i
      })]);
    });
    p.current += 1;
    _.current = a;
  }, [c]);
  var E = o.useCallback(function () {
    var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
    var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
    var n = arguments.length > 2 ? arguments[2] : undefined;
    var r = t.pulsate;
    var i = undefined !== r && r;
    var o = t.center;
    var s = undefined === o ? a || t.pulsate : o;
    var c = t.fakeElement;
    var u = undefined !== c && c;
    if ("mousedown" === e.type && A.current) {
      A.current = false;
    } else {
      if ("touchstart" === e.type) {
        A.current = true;
      }
      var l;
      var f;
      var d;
      var h = u ? null : m.current;
      var p = h ? h.getBoundingClientRect() : {
        width: 0,
        height: 0,
        left: 0,
        top: 0
      };
      if (s || 0 === e.clientX && 0 === e.clientY || !e.clientX && !e.touches) {
        l = Math.round(p.width / 2);
        f = Math.round(p.height / 2);
      } else {
        var _ = e.touches ? e.touches[0] : e;
        var b = _.clientX;
        var w = _.clientY;
        l = Math.round(b - p.left);
        f = Math.round(w - p.top);
      }
      if (s) {
        if ((d = Math.sqrt((2 * Math.pow(p.width, 2) + Math.pow(p.height, 2)) / 3)) % 2 === 0) {
          d += 1;
        }
      } else {
        var E = 2 * Math.max(Math.abs((h ? h.clientWidth : 0) - l), l) + 2;
        var x = 2 * Math.max(Math.abs((h ? h.clientHeight : 0) - f), f) + 2;
        d = Math.sqrt(Math.pow(E, 2) + Math.pow(x, 2));
      }
      if (e.touches) {
        if (null === v.current) {
          v.current = function () {
            y({
              pulsate: i,
              rippleX: l,
              rippleY: f,
              rippleSize: d,
              cb: n
            });
          };
          g.current = setTimeout(function () {
            if (v.current) {
              v.current();
              v.current = null;
            }
          }, 80);
        }
      } else {
        y({
          pulsate: i,
          rippleX: l,
          rippleY: f,
          rippleSize: d,
          cb: n
        });
      }
    }
  }, [a, y]);
  var C = o.useCallback(function () {
    E({}, {
      pulsate: true
    });
  }, [E]);
  var O = o.useCallback(function (e, t) {
    clearTimeout(g.current);
    if ("touchend" === e.type && v.current) {
      e.persist();
      v.current();
      v.current = null;
      return void (g.current = setTimeout(function () {
        O(e, t);
      }));
    }
    v.current = null;
    h(function (e) {
      return e.length > 0 ? e.slice(1) : e;
    });
    _.current = t;
  }, []);
  o.useImperativeHandle(t, function () {
    return {
      pulsate: C,
      start: E,
      stop: O
    };
  }, [C, E, O]);
  return o.createElement("span", r.a({
    className: s.a(c.root, u),
    ref: m
  }, l), o.createElement(w.a, {
    component: null,
    exit: true
  }, d));
});
var O = l.a(function (e) {
  return {
    root: {
      overflow: "hidden",
      pointerEvents: "none",
      position: "absolute",
      zIndex: 0,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      borderRadius: "inherit"
    },
    ripple: {
      opacity: 0,
      position: "absolute"
    },
    rippleVisible: {
      opacity: .3,
      transform: "scale(1)",
      animation: "$enter ".concat(550, "ms ").concat(e.transitions.easing.easeInOut)
    },
    ripplePulsate: {
      animationDuration: "".concat(e.transitions.duration.shorter, "ms")
    },
    child: {
      opacity: 1,
      display: "block",
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      backgroundColor: "currentColor"
    },
    childLeaving: {
      opacity: 0,
      animation: "$exit ".concat(550, "ms ").concat(e.transitions.easing.easeInOut)
    },
    childPulsate: {
      position: "absolute",
      left: 0,
      top: 0,
      animation: "$pulsate 2500ms ".concat(e.transitions.easing.easeInOut, " 200ms infinite")
    },
    "@keyframes enter": {
      "0%": {
        transform: "scale(0)",
        opacity: .1
      },
      "100%": {
        transform: "scale(1)",
        opacity: .3
      }
    },
    "@keyframes exit": {
      "0%": {
        opacity: 1
      },
      "100%": {
        opacity: 0
      }
    },
    "@keyframes pulsate": {
      "0%": {
        transform: "scale(1)"
      },
      "50%": {
        transform: "scale(0.92)"
      },
      "100%": {
        transform: "scale(1)"
      }
    }
  };
}, {
  flip: false,
  name: "MuiTouchRipple"
})(o.memo(C));
var k = o.forwardRef(function (e, t) {
  var n = e.action;
  var l = e.buttonRef;
  var f = e.centerRipple;
  var d = undefined !== f && f;
  var h = e.children;
  var p = e.classes;
  var _ = e.className;
  var A = e.component;
  var g = undefined === A ? "button" : A;
  var v = e.disabled;
  var m = undefined !== v && v;
  var b = e.disableRipple;
  var w = undefined !== b && b;
  var E = e.disableTouchRipple;
  var x = undefined !== E && E;
  var C = e.focusRipple;
  var k = undefined !== C && C;
  var S = e.focusVisibleClassName;
  var T = e.onBlur;
  var B = e.onClick;
  var D = e.onFocus;
  var I = e.onFocusVisible;
  var F = e.onKeyDown;
  var R = e.onKeyUp;
  var P = e.onMouseDown;
  var N = e.onMouseLeave;
  var M = e.onMouseUp;
  var j = e.onTouchEnd;
  var L = e.onTouchMove;
  var U = e.onTouchStart;
  var H = e.onDragLeave;
  var V = e.tabIndex;
  var G = undefined === V ? 0 : V;
  var z = e.TouchRippleProps;
  var Q = e.type;
  var W = undefined === Q ? "button" : Q;
  var K = i.a(e, ["action", "buttonRef", "centerRipple", "children", "classes", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "onBlur", "onClick", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "onDragLeave", "tabIndex", "TouchRippleProps", "type"]);
  var X = o.useRef(null);
  var Y = o.useRef(null);
  var q = o.useState(false);
  var $ = q[0];
  var J = q[1];
  if (m && $) {
    J(false);
  }
  var Z = y();
  var ee = Z.isFocusVisible;
  var te = Z.onBlurVisible;
  var ne = Z.ref;
  function re(e, t) {
    var n = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : x;
    return u.a(function (r) {
      if (t) {
        t(r);
      }
      if (!n && Y.current) {
        Y.current[e](r);
      }
      return true;
    });
  }
  o.useImperativeHandle(n, function () {
    return {
      focusVisible: function () {
        J(true);
        X.current.focus();
      }
    };
  }, []);
  o.useEffect(function () {
    if ($ && k && !w) {
      Y.current.pulsate();
    }
  }, [w, k, $]);
  var ie = re("start", P);
  var oe = re("stop", H);
  var ae = re("stop", M);
  var se = re("stop", function (e) {
    if ($) {
      e.preventDefault();
    }
    if (N) {
      N(e);
    }
  });
  var ce = re("start", U);
  var ue = re("stop", j);
  var le = re("stop", L);
  var fe = re("stop", function (e) {
    if ($) {
      te(e);
      J(false);
    }
    if (T) {
      T(e);
    }
  }, false);
  var de = u.a(function (e) {
    if (!X.current) {
      X.current = e.currentTarget;
    }
    if (ee(e)) {
      J(true);
      if (I) {
        I(e);
      }
    }
    if (D) {
      D(e);
    }
  });
  var he = function () {
    var e = a.findDOMNode(X.current);
    return g && "button" !== g && !("A" === e.tagName && e.href);
  };
  var pe = o.useRef(false);
  var _e = u.a(function (e) {
    if (k && !pe.current && $ && Y.current && " " === e.key) {
      pe.current = true;
      e.persist();
      Y.current.stop(e, function () {
        Y.current.start(e);
      });
    }
    if (e.target === e.currentTarget && he() && " " === e.key) {
      e.preventDefault();
    }
    if (F) {
      F(e);
    }
    if (e.target === e.currentTarget && he() && "Enter" === e.key && !m) {
      e.preventDefault();
      if (B) {
        B(e);
      }
    }
  });
  var Ae = u.a(function (e) {
    if (k && " " === e.key && Y.current && $ && !e.defaultPrevented) {
      pe.current = false;
      e.persist();
      Y.current.stop(e, function () {
        Y.current.pulsate(e);
      });
    }
    if (R) {
      R(e);
    }
    if (B && e.target === e.currentTarget && he() && " " === e.key && !e.defaultPrevented) {
      B(e);
    }
  });
  var ge = g;
  if ("button" === ge && K.href) {
    ge = "a";
  }
  var ve = {};
  if ("button" === ge) {
    ve.type = W;
    ve.disabled = m;
  } else {
    if (!("a" === ge && K.href)) {
      ve.role = "button";
    }
    ve["aria-disabled"] = m;
  }
  var me = c.a(l, t);
  var ye = c.a(ne, X);
  var be = c.a(me, ye);
  var we = o.useState(false);
  var Ee = we[0];
  var xe = we[1];
  o.useEffect(function () {
    xe(true);
  }, []);
  var Ce = Ee && !w && !m;
  return o.createElement(ge, r.a({
    className: s.a(p.root, _, $ && [p.focusVisible, S], m && p.disabled),
    onBlur: fe,
    onClick: B,
    onFocus: de,
    onKeyDown: _e,
    onKeyUp: Ae,
    onMouseDown: ie,
    onMouseLeave: se,
    onMouseUp: ae,
    onDragLeave: oe,
    onTouchEnd: ue,
    onTouchMove: le,
    onTouchStart: ce,
    ref: be,
    tabIndex: m ? -1 : G
  }, ve, K), h, Ce ? o.createElement(O, r.a({
    ref: Y,
    center: d
  }, z)) : null);
});
exports.a = l.a({
  root: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    "-moz-appearance": "none",
    "-webkit-appearance": "none",
    textDecoration: "none",
    color: "inherit",
    "&::-moz-focus-inner": {
      borderStyle: "none"
    },
    "&$disabled": {
      pointerEvents: "none",
      cursor: "default"
    },
    "@media print": {
      colorAdjust: "exact"
    }
  },
  disabled: {},
  focusVisible: {}
}, {
  name: "MuiButtonBase"
})(k);