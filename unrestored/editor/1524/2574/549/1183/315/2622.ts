"use strict";

var r = require("../../../19");
var i = require("../../../54");
var o = require("../../../0/index");
require("../../../50/index");
var a = require("../../../75/index");
var s = require("../../../548/1180/270/1007");
var c = require("../../../548/1180/100");
var u = require("../../../548/1180/270/390");
var l = require("./2620/1005");
var f = require("./2620/908");
var h = require("../../../548/1180/691/153");
var d = require("./2620/index");
var p = require("../../../33/index");
var _ = require("../../../548/1180/691/1498/index");
var A = require("../682/index");
var g = require("./693");
var v = require("./288");
function m(e) {
  return "scale(".concat(e, ", ").concat(Math.pow(e, 2), ")");
}
var y = {
  entering: {
    opacity: 1,
    transform: m(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
};
var b = o.forwardRef(function (e, t) {
  var n = e.children;
  var a = e.disableStrictModeCompat;
  var s = void 0 !== a && a;
  var c = e.in;
  var u = e.onEnter;
  var l = e.onEntered;
  var f = e.onEntering;
  var h = e.onExit;
  var d = e.onExited;
  var b = e.onExiting;
  var w = e.style;
  var E = e.timeout;
  var x = void 0 === E ? "auto" : E;
  var C = e.TransitionComponent;
  var O = void 0 === C ? _.a : C;
  var S = Object(i.a)(e, ["children", "disableStrictModeCompat", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"]);
  var k = o.useRef();
  var T = o.useRef();
  var B = Object(A.a)();
  var D = B.unstable_strictMode && !s;
  var I = o.useRef(null);
  var F = Object(v.a)(n.ref, t);
  var R = Object(v.a)(D ? I : void 0, F);
  var P = function (e) {
    return function (t, n) {
      if (e) {
        var r = D ? [I.current, t] : [t, n];
        var i = Object(p.a)(r, 2);
        var o = i[0];
        var a = i[1];
        if (void 0 === a) {
          e(o);
        } else {
          e(o, a);
        }
      }
    };
  };
  var N = P(f);
  var M = P(function (e, t) {
    Object(g.b)(e);
    var n;
    var r = Object(g.a)({
      style: w,
      timeout: x
    }, {
      mode: "enter"
    });
    var i = r.duration;
    var o = r.delay;
    if ("auto" === x) {
      n = B.transitions.getAutoHeightDuration(e.clientHeight);
      T.current = n;
    } else {
      n = i;
    }
    e.style.transition = [B.transitions.create("opacity", {
      duration: n,
      delay: o
    }), B.transitions.create("transform", {
      duration: .666 * n,
      delay: o
    })].join(",");
    if (u) {
      u(e, t);
    }
  });
  var j = P(l);
  var L = P(b);
  var U = P(function (e) {
    var t;
    var n = Object(g.a)({
      style: w,
      timeout: x
    }, {
      mode: "exit"
    });
    var r = n.duration;
    var i = n.delay;
    if ("auto" === x) {
      t = B.transitions.getAutoHeightDuration(e.clientHeight);
      T.current = t;
    } else {
      t = r;
    }
    e.style.transition = [B.transitions.create("opacity", {
      duration: t,
      delay: i
    }), B.transitions.create("transform", {
      duration: .666 * t,
      delay: i || .333 * t
    })].join(",");
    e.style.opacity = "0";
    e.style.transform = m(.75);
    if (h) {
      h(e);
    }
  });
  var H = P(d);
  o.useEffect(function () {
    return function () {
      clearTimeout(k.current);
    };
  }, []);
  return o.createElement(O, Object(r.a)({
    appear: !0,
    in: c,
    nodeRef: D ? I : void 0,
    onEnter: M,
    onEntered: j,
    onEntering: N,
    onExit: U,
    onExited: H,
    onExiting: L,
    addEndListener: function (e, t) {
      var n = D ? e : t;
      if ("auto" === x) {
        k.current = setTimeout(n, T.current || 0);
      }
    },
    timeout: "auto" === x ? null : x
  }, S), function (e, t) {
    return o.cloneElement(n, Object(r.a)({
      style: Object(r.a)({
        opacity: 0,
        transform: m(.75),
        visibility: "exited" !== e || c ? void 0 : "hidden"
      }, y[e], w, n.props.style),
      ref: R
    }, t));
  });
});
b.muiSupportAuto = !0;
var w = b;
var E = require("./2613");
function x(e, t) {
  var n = 0;
  if ("number" === typeof t) {
    n = t;
  } else {
    if ("center" === t) {
      n = e.height / 2;
    } else {
      if ("bottom" === t) {
        n = e.height;
      }
    }
  }
  return n;
}
function C(e, t) {
  var n = 0;
  if ("number" === typeof t) {
    n = t;
  } else {
    if ("center" === t) {
      n = e.width / 2;
    } else {
      if ("right" === t) {
        n = e.width;
      }
    }
  }
  return n;
}
function O(e) {
  return [e.horizontal, e.vertical].map(function (e) {
    return "number" === typeof e ? "".concat(e, "px") : e;
  }).join(" ");
}
function S(e) {
  return "function" === typeof e ? e() : e;
}
var k = o.forwardRef(function (e, t) {
  var n = e.action;
  var h = e.anchorEl;
  var p = e.anchorOrigin;
  var _ = void 0 === p ? {
    vertical: "top",
    horizontal: "left"
  } : p;
  var A = e.anchorPosition;
  var g = e.anchorReference;
  var v = void 0 === g ? "anchorEl" : g;
  var m = e.children;
  var y = e.classes;
  var b = e.className;
  var k = e.container;
  var T = e.elevation;
  var B = void 0 === T ? 8 : T;
  var D = e.getContentAnchorEl;
  var I = e.marginThreshold;
  var F = void 0 === I ? 16 : I;
  var R = e.onEnter;
  var P = e.onEntered;
  var N = e.onEntering;
  var M = e.onExit;
  var j = e.onExited;
  var L = e.onExiting;
  var U = e.open;
  var H = e.PaperProps;
  var V = void 0 === H ? {} : H;
  var G = e.transformOrigin;
  var z = void 0 === G ? {
    vertical: "top",
    horizontal: "left"
  } : G;
  var Q = e.TransitionComponent;
  var W = void 0 === Q ? w : Q;
  var K = e.transitionDuration;
  var X = void 0 === K ? "auto" : K;
  var Y = e.TransitionProps;
  var q = void 0 === Y ? {} : Y;
  var $ = Object(i.a)(e, ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "classes", "className", "container", "elevation", "getContentAnchorEl", "marginThreshold", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "open", "PaperProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps"]);
  var J = o.useRef();
  var Z = o.useCallback(function (e) {
    if ("anchorPosition" === v) {
      return A;
    }
    var t = S(h);
    var n = (t && 1 === t.nodeType ? t : Object(u.a)(J.current).body).getBoundingClientRect();
    var r = 0 === e ? _.vertical : "center";
    return {
      top: n.top + x(n, r),
      left: n.left + C(n, _.horizontal)
    };
  }, [h, _.horizontal, _.vertical, A, v]);
  var ee = o.useCallback(function (e) {
    var t = 0;
    if (D && "anchorEl" === v) {
      var n = D(e);
      if (n && e.contains(n)) {
        var r = function (e, t) {
          for (var n = t, r = 0; n && n !== e;) {
            r += (n = n.parentElement).scrollTop;
          }
          return r;
        }(e, n);
        t = n.offsetTop + n.clientHeight / 2 - r || 0;
      }
      0;
    }
    return t;
  }, [_.vertical, v, D]);
  var te = o.useCallback(function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return {
      vertical: x(e, z.vertical) + t,
      horizontal: C(e, z.horizontal)
    };
  }, [z.horizontal, z.vertical]);
  var ne = o.useCallback(function (e) {
    var t = ee(e);
    var n = {
      width: e.offsetWidth,
      height: e.offsetHeight
    };
    var r = te(n, t);
    if ("none" === v) {
      return {
        top: null,
        left: null,
        transformOrigin: O(r)
      };
    }
    var i = Z(t);
    var o = i.top - r.vertical;
    var a = i.left - r.horizontal;
    var s = o + n.height;
    var c = a + n.width;
    var u = Object(l.a)(S(h));
    var f = u.innerHeight - F;
    var d = u.innerWidth - F;
    if (o < F) {
      var p = o - F;
      o -= p;
      r.vertical += p;
    } else if (s > f) {
      var _ = s - f;
      o -= _;
      r.vertical += _;
    }
    if (a < F) {
      var A = a - F;
      a -= A;
      r.horizontal += A;
    } else if (c > d) {
      var g = c - d;
      a -= g;
      r.horizontal += g;
    }
    return {
      top: "".concat(Math.round(o), "px"),
      left: "".concat(Math.round(a), "px"),
      transformOrigin: O(r)
    };
  }, [h, v, Z, ee, te, F]);
  var re = o.useCallback(function () {
    var e = J.current;
    if (e) {
      var t = ne(e);
      if (null !== t.top) {
        e.style.top = t.top;
      }
      if (null !== t.left) {
        e.style.left = t.left;
      }
      e.style.transformOrigin = t.transformOrigin;
    }
  }, [ne]);
  var ie = o.useCallback(function (e) {
    J.current = a.findDOMNode(e);
  }, []);
  o.useEffect(function () {
    if (U) {
      re();
    }
  });
  o.useImperativeHandle(n, function () {
    return U ? {
      updatePosition: function () {
        re();
      }
    } : null;
  }, [U, re]);
  o.useEffect(function () {
    if (U) {
      var e = Object(s.a)(function () {
        re();
      });
      window.addEventListener("resize", e);
      return function () {
        e.clear();
        window.removeEventListener("resize", e);
      };
    }
  }, [U, re]);
  var oe = X;
  if (!("auto" !== X || W.muiSupportAuto)) {
    oe = void 0;
  }
  var ae = k || (h ? Object(u.a)(S(h)).body : void 0);
  return o.createElement(d.a, Object(r.a)({
    container: ae,
    open: U,
    ref: t,
    BackdropProps: {
      invisible: !0
    },
    className: Object(c.a)(y.root, b)
  }, $), o.createElement(W, Object(r.a)({
    appear: !0,
    in: U,
    onEnter: R,
    onEntered: P,
    onExit: M,
    onExited: j,
    onExiting: L,
    timeout: oe
  }, q, {
    onEntering: Object(f.a)(function (e, t) {
      if (N) {
        N(e, t);
      }
      re();
    }, q.onEntering)
  }), o.createElement(E.a, Object(r.a)({
    elevation: B,
    ref: ie
  }, V, {
    className: Object(c.a)(y.paper, V.className)
  }), m)));
});
exports.a = Object(h.a)({
  root: {},
  paper: {
    position: "absolute",
    overflowY: "auto",
    overflowX: "hidden",
    minWidth: 16,
    minHeight: 16,
    maxWidth: "calc(100% - 32px)",
    maxHeight: "calc(100% - 32px)",
    outline: 0
  }
}, {
  name: "MuiPopover"
})(k);