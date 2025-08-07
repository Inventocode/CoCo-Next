"use strict";

export { Ot as d };
export { Q as b };
export { Yt as c };
export { Kt as a };
export { qt as f };
import r = require("../19");
import o = require("../29");
import i = require("../20");
import a = require("../80/index");
import s = require("../33/index");
import c = require("../54");
import l = require("react");
var u = function __importDefault(module) {
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
import d = require("../8");
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
import f = require("./1019");
var h = function __importDefault(module) {
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
}(f);
function m(e, t) {
  var n = t || {};
  var r = n.defaultValue;
  var o = n.value;
  var i = n.onChange;
  var a = n.postState;
  var c = l.useState(function () {
    return undefined !== o ? o : undefined !== r ? "function" === typeof r ? r() : r : "function" === typeof e ? e() : e;
  });
  var u = s.a(c, 2);
  var d = u[0];
  var p = u[1];
  var f = undefined !== o ? o : d;
  if (a) {
    f = a(f);
  }
  var h = l.useRef(true);
  l.useEffect(function () {
    if (h.current) {
      h.current = false;
    } else {
      if (undefined === o) {
        p(o);
      }
    }
  }, [o]);
  return [f, function (e) {
    p(e);
    if (f !== e && i) {
      i(e, f);
    }
  }];
}
var g = {};
function _(e, t) {
  0;
}
function v(e, t, n) {
  if (!(t || g[n])) {
    e(false, n);
    g[n] = true;
  }
}
var b = function (e, t) {
  v(_, e, t);
};
import y = require("../1500/557");
import E = require("../95");
import O = require("../96");
import w = require("../120");
import C = require("../140");
var T = {
  MAC_ENTER: 3,
  BACKSPACE: 8,
  TAB: 9,
  NUM_CENTER: 12,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  PAUSE: 19,
  CAPS_LOCK: 20,
  ESC: 27,
  SPACE: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  PRINT_SCREEN: 44,
  INSERT: 45,
  DELETE: 46,
  ZERO: 48,
  ONE: 49,
  TWO: 50,
  THREE: 51,
  FOUR: 52,
  FIVE: 53,
  SIX: 54,
  SEVEN: 55,
  EIGHT: 56,
  NINE: 57,
  QUESTION_MARK: 63,
  A: 65,
  B: 66,
  C: 67,
  D: 68,
  E: 69,
  F: 70,
  G: 71,
  H: 72,
  I: 73,
  J: 74,
  K: 75,
  L: 76,
  M: 77,
  N: 78,
  O: 79,
  P: 80,
  Q: 81,
  R: 82,
  S: 83,
  T: 84,
  U: 85,
  V: 86,
  W: 87,
  X: 88,
  Y: 89,
  Z: 90,
  META: 91,
  WIN_KEY_RIGHT: 92,
  CONTEXT_MENU: 93,
  NUM_ZERO: 96,
  NUM_ONE: 97,
  NUM_TWO: 98,
  NUM_THREE: 99,
  NUM_FOUR: 100,
  NUM_FIVE: 101,
  NUM_SIX: 102,
  NUM_SEVEN: 103,
  NUM_EIGHT: 104,
  NUM_NINE: 105,
  NUM_MULTIPLY: 106,
  NUM_PLUS: 107,
  NUM_MINUS: 109,
  NUM_PERIOD: 110,
  NUM_DIVISION: 111,
  F1: 112,
  F2: 113,
  F3: 114,
  F4: 115,
  F5: 116,
  F6: 117,
  F7: 118,
  F8: 119,
  F9: 120,
  F10: 121,
  F11: 122,
  F12: 123,
  NUMLOCK: 144,
  SEMICOLON: 186,
  DASH: 189,
  EQUALS: 187,
  COMMA: 188,
  PERIOD: 190,
  SLASH: 191,
  APOSTROPHE: 192,
  SINGLE_QUOTE: 222,
  OPEN_SQUARE_BRACKET: 219,
  BACKSLASH: 220,
  CLOSE_SQUARE_BRACKET: 221,
  WIN_KEY: 224,
  MAC_FF_META: 224,
  WIN_IME: 229,
  isTextModifyingKeyEvent: function (e) {
    var t = e.keyCode;
    if (e.altKey && !e.ctrlKey || e.metaKey || t >= T.F1 && t <= T.F12) {
      return false;
    }
    switch (t) {
      case T.ALT:
      case T.CAPS_LOCK:
      case T.CONTEXT_MENU:
      case T.CTRL:
      case T.DOWN:
      case T.END:
      case T.ESC:
      case T.HOME:
      case T.INSERT:
      case T.LEFT:
      case T.MAC_FF_META:
      case T.META:
      case T.NUMLOCK:
      case T.NUM_CENTER:
      case T.PAGE_DOWN:
      case T.PAGE_UP:
      case T.PAUSE:
      case T.PRINT_SCREEN:
      case T.RIGHT:
      case T.SHIFT:
      case T.UP:
      case T.WIN_KEY:
      case T.WIN_KEY_RIGHT:
        return false;
      default:
        return true;
    }
  },
  isCharacterKey: function (e) {
    if (e >= T.ZERO && e <= T.NINE) {
      return true;
    }
    if (e >= T.NUM_ZERO && e <= T.NUM_MULTIPLY) {
      return true;
    }
    if (e >= T.A && e <= T.Z) {
      return true;
    }
    if (-1 !== window.navigator.userAgent.indexOf("WebKit") && 0 === e) {
      return true;
    }
    switch (e) {
      case T.SPACE:
      case T.QUESTION_MARK:
      case T.NUM_PLUS:
      case T.NUM_MINUS:
      case T.NUM_PERIOD:
      case T.NUM_DIVISION:
      case T.SEMICOLON:
      case T.DASH:
      case T.EQUALS:
      case T.COMMA:
      case T.PERIOD:
      case T.SLASH:
      case T.APOSTROPHE:
      case T.SINGLE_QUOTE:
      case T.OPEN_SQUARE_BRACKET:
      case T.BACKSLASH:
      case T.CLOSE_SQUARE_BRACKET:
        return true;
      default:
        return false;
    }
  }
};
var S = T;
function I(e, t) {
  var n = i.a({}, e);
  if (Array.isArray(t)) {
    t.forEach(function (e) {
      delete n[e];
    });
  }
  return n;
}
var A = ["children", "locked"];
var j = l.createContext(null);
function N(e) {
  var t = e.children;
  var n = e.locked;
  var r = c.a(e, A);
  var o = l.useContext(j);
  var a = function (e, t, n) {
    var r = l.useRef({});
    if (!("value" in r.current && !n(r.current.condition, t))) {
      r.current.value = e();
      r.current.condition = t;
    }
    return r.current.value;
  }(function () {
    return function (e, t) {
      var n = i.a({}, e);
      Object.keys(t).forEach(function (e) {
        var r = t[e];
        if (undefined !== r) {
          n[e] = r;
        }
      });
      return n;
    }(o, r);
  }, [o, r], function (e, t) {
    return !n && (e[0] !== t[0] || !h()(e[1], t[1]));
  });
  return l.createElement(j.Provider, {
    value: a
  }, t);
}
function R(e, t, n, r) {
  var o = l.useContext(j);
  var i = o.activeKey;
  var a = o.onActive;
  var s = o.onInactive;
  var c = {
    active: i === e
  };
  if (!t) {
    c.onMouseEnter = function (t) {
      if (!(null === n || undefined === n)) {
        n({
          key: e,
          domEvent: t
        });
      }
      a(e);
    };
    c.onMouseLeave = function (t) {
      if (!(null === r || undefined === r)) {
        r({
          key: e,
          domEvent: t
        });
      }
      s(e);
    };
  }
  return c;
}
var k = ["item"];
function x(e) {
  var t = e.item;
  var n = c.a(e, k);
  Object.defineProperty(n, "item", {
    get: function () {
      b(false, "`info.item` is deprecated since we will move to function component that not provides React Node instance in future.");
      return t;
    }
  });
  return n;
}
function D(e) {
  var t = e.icon;
  var n = e.props;
  var r = e.children;
  return ("function" === typeof t ? l.createElement(t, i.a({}, n)) : t) || r || null;
}
function M(e) {
  var t = l.useContext(j);
  var n = t.mode;
  var r = t.rtl;
  var o = t.inlineIndent;
  if ("inline" !== n) {
    return null;
  }
  return r ? {
    paddingRight: e * o
  } : {
    paddingLeft: e * o
  };
}
var L = [];
var P = l.createContext(null);
function B() {
  return l.useContext(P);
}
var F = l.createContext(L);
function G(e) {
  var t = l.useContext(F);
  return l.useMemo(function () {
    return undefined !== e ? [].concat(a.a(t), [e]) : t;
  }, [t, e]);
}
var U = l.createContext(null);
var W = l.createContext(null);
function H(e, t) {
  return undefined === e ? null : "".concat(e, "-").concat(t);
}
function V(e) {
  return H(l.useContext(W), e);
}
var z = ["title", "attribute", "elementRef"];
var Y = ["style", "className", "eventKey", "warnKey", "disabled", "itemIcon", "children", "role", "onMouseEnter", "onMouseLeave", "onClick", "onKeyDown", "onFocus"];
var K = ["active"];
var q = function (e) {
  w.a(n, e);
  var t = C.a(n);
  function n() {
    E.a(this, n);
    return t.apply(this, arguments);
  }
  O.a(n, [{
    key: "render",
    value: function () {
      var e = this.props;
      var t = e.title;
      var n = e.attribute;
      var o = e.elementRef;
      var i = I(c.a(e, z), ["eventKey"]);
      b(!n, "`attribute` of Menu.Item is deprecated. Please pass attribute directly.");
      return l.createElement(y.a.Item, r.a({}, n, {
        title: "string" === typeof t ? t : undefined
      }, i, {
        ref: o
      }));
    }
  }]);
  return n;
}(l.Component);
var X = function (e) {
  var t;
  var n = e.style;
  var s = e.className;
  var u = e.eventKey;
  e.warnKey;
  var d = e.disabled;
  var f = e.itemIcon;
  var h = e.children;
  var m = e.role;
  var g = e.onMouseEnter;
  var _ = e.onMouseLeave;
  var v = e.onClick;
  var b = e.onKeyDown;
  var y = e.onFocus;
  var E = c.a(e, Y);
  var O = V(u);
  var w = l.useContext(j);
  var C = w.prefixCls;
  var T = w.onItemClick;
  var I = w.disabled;
  var A = w.overflowDisabled;
  var N = w.itemIcon;
  var k = w.selectedKeys;
  var L = w.onActive;
  var P = "".concat(C, "-item");
  var B = l.useRef();
  var F = l.useRef();
  var U = I || d;
  var W = G(u);
  var H = function (e) {
    return {
      key: u,
      keyPath: a.a(W).reverse(),
      item: B.current,
      domEvent: e
    };
  };
  var z = f || N;
  var X = R(u, U, g, _);
  var Q = X.active;
  var Z = c.a(X, K);
  var J = k.includes(u);
  var $ = M(W.length);
  var ee = {};
  if ("option" === e.role) {
    ee["aria-selected"] = J;
  }
  return l.createElement(q, r.a({
    ref: B,
    elementRef: F,
    role: null === m ? "none" : m || "menuitem",
    tabIndex: d ? null : -1,
    "data-menu-id": A && O ? null : O
  }, E, Z, ee, {
    component: "li",
    "aria-disabled": d,
    style: i.a(i.a({}, $), n),
    className: p()(P, (t = {}, o.a(t, "".concat(P, "-active"), Q), o.a(t, "".concat(P, "-selected"), J), o.a(t, "".concat(P, "-disabled"), U), t), s),
    onClick: function (e) {
      if (!U) {
        var t = H(e);
        if (!(null === v || undefined === v)) {
          v(x(t));
        }
        T(t);
      }
    },
    onKeyDown: function (e) {
      if (!(null === b || undefined === b)) {
        b(e);
      }
      if (e.which === S.ENTER) {
        var t = H(e);
        if (!(null === v || undefined === v)) {
          v(x(t));
        }
        T(t);
      }
    },
    onFocus: function (e) {
      L(u);
      if (!(null === y || undefined === y)) {
        y(e);
      }
    }
  }), h, l.createElement(D, {
    props: i.a(i.a({}, e), {}, {
      isSelected: J
    }),
    icon: z
  }));
};
var Q = function (e) {
  var t = e.eventKey;
  var n = B();
  var r = G(t);
  l.useEffect(function () {
    if (n) {
      n.registerPath(t, r);
      return function () {
        n.unregisterPath(t, r);
      };
    }
  }, [r]);
  return n ? null : l.createElement(X, e);
};
import Z = require("../242/index");
function J(e, t) {
  return function e(t) {
    var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
    var r = [];
    u.a.Children.forEach(t, function (t) {
      if (undefined !== t && null !== t || n.keepEmpty) {
        if (Array.isArray(t)) {
          r = r.concat(e(t));
        } else {
          if (Z.isFragment(t) && t.props) {
            r = r.concat(e(t.props.children, n));
          } else {
            r.push(t);
          }
        }
      }
    });
    return r;
  }(e).map(function (e, n) {
    if (l.isValidElement(e)) {
      var r;
      var o;
      var i = e.key;
      var s = null !== (r = null === (o = e.props) || undefined === o ? undefined : o.eventKey) && undefined !== r ? r : i;
      if (null === s || undefined === s) {
        s = "tmp_key-".concat([].concat(a.a(t), [n]).join("-"));
      }
      var c = {
        key: s,
        eventKey: s
      };
      return l.cloneElement(e, c);
    }
    return e;
  });
}
function $(e) {
  var t = l.useRef(e);
  t.current = e;
  var n = l.useCallback(function () {
    for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++) {
      r[o] = arguments[o];
    }
    return null === (e = t.current) || undefined === e ? undefined : e.call.apply(e, [t].concat(r));
  }, []);
  return e ? n : undefined;
}
var ee = ["className", "children"];
var te = function (e, t) {
  var n = e.className;
  var o = e.children;
  var i = c.a(e, ee);
  var a = l.useContext(j);
  var s = a.prefixCls;
  var u = a.mode;
  var d = a.rtl;
  return l.createElement("ul", r.a({
    className: p()(s, d && "".concat(s, "-rtl"), "".concat(s, "-sub"), "".concat(s, "-").concat("inline" === u ? "inline" : "vertical"), n)
  }, i, {
    "data-menu-list": true,
    ref: t
  }), o);
};
var ne = l.forwardRef(te);
ne.displayName = "SubMenuList";
var re = ne;
import oe = require("../103");
import ie = require("../75/index");
var ae = function __importDefault(module) {
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
}(ie);
var se = function (e) {
  return +setTimeout(e, 16);
};
var ce = function (e) {
  return clearTimeout(e);
};
if ("undefined" !== typeof window && "requestAnimationFrame" in window) {
  se = function (e) {
    return window.requestAnimationFrame(e);
  };
  ce = function (e) {
    return window.cancelAnimationFrame(e);
  };
}
var le = 0;
var ue = new Map();
function de(e) {
  ue.delete(e);
}
function pe(e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 1;
  var n = le += 1;
  function r(t) {
    if (0 === t) {
      de(n);
      e();
    } else {
      var o = se(function () {
        r(t - 1);
      });
      ue.set(n, o);
    }
  }
  r(t);
  return n;
}
function fe(e, t) {
  return !!e && e.contains(t);
}
function he(e) {
  return e instanceof HTMLElement ? e : ae.a.findDOMNode(e);
}
pe.cancel = function (e) {
  var t = ue.get(e);
  de(t);
  return ce(t);
};
import me = require("../108");
function ge(e, t) {
  if ("function" === typeof e) {
    e(t);
  } else {
    if ("object" === me.a(e) && e && "current" in e) {
      e.current = t;
    }
  }
}
function _e(e, t, n, r) {
  var o = ae.a.unstable_batchedUpdates ? function (e) {
    ae.a.unstable_batchedUpdates(n, e);
  } : n;
  if (e.addEventListener) {
    e.addEventListener(t, o, r);
  }
  return {
    remove: function () {
      if (e.removeEventListener) {
        e.removeEventListener(t, o);
      }
    }
  };
}
function ve() {
  return !("undefined" === typeof window || !window.document || !window.document.createElement);
}
var be = l.forwardRef(function (e, t) {
  var n = e.didUpdate;
  var r = e.getContainer;
  var o = e.children;
  var i = l.useRef();
  l.useImperativeHandle(t, function () {
    return {};
  });
  var a = l.useRef(false);
  if (!a.current && ve()) {
    i.current = r();
    a.current = true;
  }
  l.useEffect(function () {
    if (!(null === n || undefined === n)) {
      n(e);
    }
  });
  l.useEffect(function () {
    return function () {
      var e;
      var t;
      if (!(null === (e = i.current) || undefined === e || null === (t = e.parentNode) || undefined === t)) {
        t.removeChild(i.current);
      }
    };
  }, []);
  return i.current ? ae.a.createPortal(o, i.current) : null;
});
function ye(e, t, n) {
  return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function Ee(e, t) {
  var n = {};
  n[e.toLowerCase()] = t.toLowerCase();
  n["Webkit".concat(e)] = "webkit".concat(t);
  n["Moz".concat(e)] = "moz".concat(t);
  n["ms".concat(e)] = "MS".concat(t);
  n["O".concat(e)] = "o".concat(t.toLowerCase());
  return n;
}
var Oe = function (e, t) {
  var n = {
    animationend: Ee("Animation", "AnimationEnd"),
    transitionend: Ee("Transition", "TransitionEnd")
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
}(ve(), "undefined" !== typeof window ? window : {});
var we = {};
if (ve()) {
  var Ce = document.createElement("div");
  we = Ce.style;
}
var Te = {};
function Se(e) {
  if (Te[e]) {
    return Te[e];
  }
  var t = Oe[e];
  if (t) {
    for (var n = Object.keys(t), r = n.length, o = 0; o < r; o += 1) {
      var i = n[o];
      if (Object.prototype.hasOwnProperty.call(t, i) && i in we) {
        Te[e] = t[i];
        return Te[e];
      }
    }
  }
  return "";
}
var Ie = Se("animationend");
var Ae = Se("transitionend");
var je = !(!Ie || !Ae);
var Ne = Ie || "animationend";
var Re = Ae || "transitionend";
function ke(e, t) {
  return e ? "object" === me.a(e) ? e[t.replace(/-\w/g, function (e) {
    return e[1].toUpperCase();
  })] : "".concat(e, "-").concat(t) : null;
}
function xe(e) {
  var t = l.useRef(false);
  var n = l.useState(e);
  var r = s.a(n, 2);
  var o = r[0];
  var i = r[1];
  l.useEffect(function () {
    return function () {
      t.current = true;
    };
  }, []);
  return [o, function (e) {
    if (!t.current) {
      i(e);
    }
  }];
}
var De = ve() ? l.useLayoutEffect : l.useEffect;
var Me = ["prepare", "start", "active", "end"];
function Le(e) {
  return "active" === e || "end" === e;
}
var Pe = function (e, t) {
  var n = l.useState("none");
  var r = s.a(n, 2);
  var o = r[0];
  var i = r[1];
  var a = function () {
    var e = l.useRef(null);
    function t() {
      pe.cancel(e.current);
    }
    l.useEffect(function () {
      return function () {
        t();
      };
    }, []);
    return [function n(r) {
      var o = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 2;
      t();
      var i = pe(function () {
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
  var c = s.a(a, 2);
  var u = c[0];
  var d = c[1];
  De(function () {
    if ("none" !== o && "end" !== o) {
      var e = Me.indexOf(o);
      var n = Me[e + 1];
      var r = t(o);
      if (false === r) {
        i(n);
      } else {
        u(function (e) {
          function t() {
            if (!e.isCanceled()) {
              i(n);
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
  }, [e, o]);
  l.useEffect(function () {
    return function () {
      d();
    };
  }, []);
  return [function () {
    i("prepare");
  }, o];
};
function Be(e, t, n, r) {
  var a = r.motionEnter;
  var c = undefined === a || a;
  var u = r.motionAppear;
  var d = undefined === u || u;
  var p = r.motionLeave;
  var f = undefined === p || p;
  var h = r.motionDeadline;
  var m = r.motionLeaveImmediately;
  var g = r.onAppearPrepare;
  var _ = r.onEnterPrepare;
  var v = r.onLeavePrepare;
  var b = r.onAppearStart;
  var y = r.onEnterStart;
  var E = r.onLeaveStart;
  var O = r.onAppearActive;
  var w = r.onEnterActive;
  var C = r.onLeaveActive;
  var T = r.onAppearEnd;
  var S = r.onEnterEnd;
  var I = r.onLeaveEnd;
  var A = r.onVisibleChanged;
  var j = xe();
  var N = s.a(j, 2);
  var R = N[0];
  var k = N[1];
  var x = xe("none");
  var D = s.a(x, 2);
  var M = D[0];
  var L = D[1];
  var P = xe(null);
  var B = s.a(P, 2);
  var F = B[0];
  var G = B[1];
  var U = l.useRef(false);
  var W = l.useRef(null);
  var H = l.useRef(false);
  var V = l.useRef(null);
  function z() {
    return n() || V.current;
  }
  var Y = l.useRef(false);
  function K(e) {
    var t;
    var n = z();
    if (!(e && !e.deadline && e.target !== n)) {
      if ("appear" === M && Y.current) {
        t = null === T || undefined === T ? undefined : T(n, e);
      } else {
        if ("enter" === M && Y.current) {
          t = null === S || undefined === S ? undefined : S(n, e);
        } else {
          if ("leave" === M && Y.current) {
            t = null === I || undefined === I ? undefined : I(n, e);
          }
        }
      }
      if (!(false === t || H.current)) {
        L("none");
        G(null);
      }
    }
  }
  var q = function (e) {
    var t = l.useRef();
    var n = l.useRef(e);
    n.current = e;
    var r = l.useCallback(function (e) {
      n.current(e);
    }, []);
    function o(e) {
      if (e) {
        e.removeEventListener(Re, r);
        e.removeEventListener(Ne, r);
      }
    }
    l.useEffect(function () {
      return function () {
        o(t.current);
      };
    }, []);
    return [function (e) {
      if (t.current && t.current !== e) {
        o(t.current);
      }
      if (e && e !== t.current) {
        e.addEventListener(Re, r);
        e.addEventListener(Ne, r);
        t.current = e;
      }
    }, o];
  }(K);
  var X = s.a(q, 1)[0];
  var Q = l.useMemo(function () {
    var e;
    var t;
    var n;
    switch (M) {
      case "appear":
        e = {};
        o.a(e, "prepare", g);
        o.a(e, "start", b);
        o.a(e, "active", O);
        return e;
      case "enter":
        t = {};
        o.a(t, "prepare", _);
        o.a(t, "start", y);
        o.a(t, "active", w);
        return t;
      case "leave":
        n = {};
        o.a(n, "prepare", v);
        o.a(n, "start", E);
        o.a(n, "active", C);
        return n;
      default:
        return {};
    }
  }, [M]);
  var Z = Pe(M, function (e) {
    if ("prepare" === e) {
      var t = Q.prepare;
      return !!t && t(z());
    }
    var n;
    if (ee in Q) {
      G((null === (n = Q[ee]) || undefined === n ? undefined : n.call(Q, z(), null)) || null);
    }
    if ("active" === ee) {
      X(z());
      if (h > 0) {
        clearTimeout(W.current);
        W.current = setTimeout(function () {
          K({
            deadline: true
          });
        }, h);
      }
    }
    return true;
  });
  var J = s.a(Z, 2);
  var $ = J[0];
  var ee = J[1];
  var te = Le(ee);
  Y.current = te;
  De(function () {
    k(t);
    var n;
    var r = U.current;
    U.current = true;
    if (e) {
      if (!r && t && d) {
        n = "appear";
      }
      if (r && t && c) {
        n = "enter";
      }
      if (r && !t && f || !r && m && !t && f) {
        n = "leave";
      }
      if (n) {
        L(n);
        $();
      }
    }
  }, [t]);
  l.useEffect(function () {
    if ("appear" === M && !d || "enter" === M && !c || "leave" === M && !f) {
      L("none");
    }
  }, [d, c, f]);
  l.useEffect(function () {
    return function () {
      clearTimeout(W.current);
      H.current = true;
    };
  }, []);
  l.useEffect(function () {
    if (undefined !== R && "none" === M) {
      if (!(null === A || undefined === A)) {
        A(R);
      }
    }
  }, [R, M]);
  var ne = F;
  if (Q.prepare && "start" === ee) {
    ne = i.a({
      transition: "none"
    }, ne);
  }
  return [M, ee, ne, null !== R && undefined !== R ? R : t];
}
var Fe = function (e) {
  w.a(n, e);
  var t = C.a(n);
  function n() {
    E.a(this, n);
    return t.apply(this, arguments);
  }
  O.a(n, [{
    key: "render",
    value: function () {
      return this.props.children;
    }
  }]);
  return n;
}(l.Component);
var Ge = function (e) {
  var t = e;
  function n(e) {
    return !(!e.motionName || !t);
  }
  if ("object" === me.a(e)) {
    t = e.transitionSupport;
  }
  var r = l.forwardRef(function (e, t) {
    var r = e.visible;
    var a = undefined === r || r;
    var c = e.removeOnLeave;
    var u = undefined === c || c;
    var d = e.forceRender;
    var f = e.children;
    var h = e.motionName;
    var m = e.leavedClassName;
    var g = e.eventProps;
    var _ = n(e);
    var v = l.useRef();
    var b = l.useRef();
    var y = Be(_, a, function () {
      try {
        return he(v.current || b.current);
      } catch (e) {
        return null;
      }
    }, e);
    var E = s.a(y, 4);
    var O = E[0];
    var w = E[1];
    var C = E[2];
    var T = E[3];
    var S = l.useRef(T);
    if (T) {
      S.current = true;
    }
    var I = l.useRef(t);
    I.current = t;
    var A;
    var j = l.useCallback(function (e) {
      v.current = e;
      ge(I.current, e);
    }, []);
    var N = i.a(i.a({}, g), {}, {
      visible: a
    });
    if (f) {
      if ("none" !== O && n(e)) {
        var R;
        var k;
        if ("prepare" === w) {
          k = "prepare";
        } else {
          if (Le(w)) {
            k = "active";
          } else {
            if ("start" === w) {
              k = "start";
            }
          }
        }
        A = f(i.a(i.a({}, N), {}, {
          className: p()(ke(h, O), (R = {}, o.a(R, ke(h, "".concat(O, "-").concat(k)), k), o.a(R, h, "string" === typeof h), R)),
          style: C
        }), j);
      } else {
        A = T ? f(i.a({}, N), j) : !u && S.current ? f(i.a(i.a({}, N), {}, {
          className: m
        }), j) : d ? f(i.a(i.a({}, N), {}, {
          style: {
            display: "none"
          }
        }), j) : null;
      }
    } else {
      A = null;
    }
    return l.createElement(Fe, {
      ref: b
    }, A);
  });
  r.displayName = "CSSMotion";
  return r;
}(je);
function Ue(e) {
  var t;
  t = e && "object" === me.a(e) && "key" in e ? e : {
    key: e
  };
  return i.a(i.a({}, t), {}, {
    key: String(t.key)
  });
}
function We() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : [];
  return e.map(Ue);
}
function He() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : [];
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : [];
  var n = [];
  var r = 0;
  var o = t.length;
  var a = We(e);
  var s = We(t);
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
var Ve = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
!function (e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : Ge;
  var n = function (e) {
    w.a(o, e);
    var n = C.a(o);
    function o() {
      var e;
      E.a(this, o);
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
    O.a(o, [{
      key: "render",
      value: function () {
        var e = this;
        var n = this.state.keyEntities;
        var o = this.props;
        var i = o.component;
        var a = o.children;
        var s = o.onVisibleChanged;
        var u = c.a(o, ["component", "children", "onVisibleChanged"]);
        var d = i || l.Fragment;
        var p = {};
        Ve.forEach(function (e) {
          p[e] = u[e];
          delete u[e];
        });
        delete u.keys;
        return l.createElement(d, u, n.map(function (n) {
          var o = n.status;
          var i = c.a(n, ["status"]);
          var u = "add" === o || "keep" === o;
          return l.createElement(t, r.a({}, p, {
            key: i.key,
            visible: u,
            eventProps: i,
            onVisibleChanged: function (t) {
              if (!(null === s || undefined === s)) {
                s(t, {
                  key: i.key
                });
              }
              if (!t) {
                e.removeKey(i.key);
              }
            }
          }), a);
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function (e, t) {
        var n = e.keys;
        var r = t.keyEntities;
        var o = We(n);
        return {
          keyEntities: He(r, o).filter(function (e) {
            var t = r.find(function (t) {
              var n = t.key;
              return e.key === n;
            });
            return !t || "removed" !== t.status || "remove" !== e.status;
          })
        };
      }
    }]);
    return o;
  }(l.Component);
  n.defaultProps = {
    component: "div"
  };
}(je);
var ze = Ge;
function Ye(e) {
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
function Ke(e) {
  var t = e.prefixCls;
  var n = e.visible;
  var o = e.zIndex;
  var a = e.mask;
  var s = e.maskMotion;
  var c = e.maskAnimation;
  var u = e.maskTransitionName;
  if (!a) {
    return null;
  }
  var d = {};
  if (s || u || c) {
    d = i.a({
      motionAppear: true
    }, Ye({
      motion: s,
      prefixCls: t,
      transitionName: u,
      animation: c
    }));
  }
  return l.createElement(ze, r.a({}, d, {
    visible: n,
    removeOnLeave: true
  }), function (e) {
    var n = e.className;
    return l.createElement("div", {
      style: {
        zIndex: o
      },
      className: p()("".concat(t, "-mask"), n)
    });
  });
}
import qe = require("../1500/555/index");
import Xe = require("../110");
var Qe = function __importDefault(module) {
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
}(Xe);
import Ze = require("../171");
var Je = ["measure", "align", null, "motion"];
var $e = l.forwardRef(function (e, t) {
  var n = e.visible;
  var o = e.prefixCls;
  var a = e.className;
  var c = e.style;
  var u = e.children;
  var d = e.zIndex;
  var f = e.stretch;
  var h = e.destroyPopupOnHide;
  var m = e.forceRender;
  var g = e.align;
  var _ = e.point;
  var v = e.getRootDomNode;
  var b = e.getClassNameFromAlign;
  var y = e.onAlign;
  var E = e.onMouseEnter;
  var O = e.onMouseLeave;
  var w = e.onMouseDown;
  var C = e.onTouchStart;
  var T = l.useRef();
  var S = l.useRef();
  var I = l.useState();
  var A = s.a(I, 2);
  var j = A[0];
  var N = A[1];
  var R = function (e) {
    var t = l.useState({
      width: 0,
      height: 0
    });
    var n = s.a(t, 2);
    var r = n[0];
    var o = n[1];
    return [l.useMemo(function () {
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
      o({
        width: e.offsetWidth,
        height: e.offsetHeight
      });
    }];
  }(f);
  var k = s.a(R, 2);
  var x = k[0];
  var D = k[1];
  var M = function (e, t) {
    var n = l.useState(null);
    var r = s.a(n, 2);
    var o = r[0];
    var i = r[1];
    var a = l.useRef();
    var c = l.useRef(false);
    function u(e) {
      if (!c.current) {
        i(e);
      }
    }
    function d() {
      pe.cancel(a.current);
    }
    l.useEffect(function () {
      u("measure");
    }, [e]);
    l.useEffect(function () {
      switch (o) {
        case "measure":
          t();
      }
      if (o) {
        a.current = pe(Ze.a(Qe.a.mark(function e() {
          var t;
          var n;
          return Qe.a.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  t = Je.indexOf(o);
                  if ((n = Je[t + 1]) && -1 !== t) {
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
    }, [o]);
    l.useEffect(function () {
      return function () {
        c.current = true;
        d();
      };
    }, []);
    return [o, function (e) {
      d();
      a.current = pe(function () {
        u(function (e) {
          switch (o) {
            case "align":
              return "motion";
            case "motion":
              return "stable";
          }
          return e;
        });
        if (!(null === e || undefined === e)) {
          e();
        }
      });
    }];
  }(n, function () {
    if (f) {
      D(v());
    }
  });
  var L = s.a(M, 2);
  var P = L[0];
  var B = L[1];
  var F = l.useRef();
  function G() {
    var e;
    if (!(null === (e = T.current) || undefined === e)) {
      e.forceAlign();
    }
  }
  function U(e, t) {
    var n = b(t);
    if (j !== n) {
      N(n);
    }
    if ("align" === P) {
      if (j !== n) {
        Promise.resolve().then(function () {
          G();
        });
      } else {
        B(function () {
          var e;
          if (!(null === (e = F.current) || undefined === e)) {
            e.call(F);
          }
        });
      }
      if (!(null === y || undefined === y)) {
        y(e, t);
      }
    }
  }
  var W = i.a({}, Ye(e));
  function H() {
    return new Promise(function (e) {
      F.current = e;
    });
  }
  ["onAppearEnd", "onEnterEnd", "onLeaveEnd"].forEach(function (e) {
    var t = W[e];
    W[e] = function (e, n) {
      B();
      return null === t || undefined === t ? undefined : t(e, n);
    };
  });
  l.useEffect(function () {
    if (!(W.motionName || "motion" !== P)) {
      B();
    }
  }, [W.motionName, P]);
  l.useImperativeHandle(t, function () {
    return {
      forceAlign: G,
      getElement: function () {
        return S.current;
      }
    };
  });
  var V = i.a(i.a({}, x), {}, {
    zIndex: d,
    opacity: "motion" !== P && "stable" !== P && n ? 0 : undefined,
    pointerEvents: "stable" === P ? undefined : "none"
  }, c);
  var z = true;
  if (!(!(null === g || undefined === g ? undefined : g.points) || "align" !== P && "stable" !== P)) {
    z = false;
  }
  var Y = u;
  if (l.Children.count(u) > 1) {
    Y = l.createElement("div", {
      className: "".concat(o, "-content")
    }, u);
  }
  return l.createElement(ze, r.a({
    visible: n,
    ref: S,
    leavedClassName: "".concat(o, "-hidden")
  }, W, {
    onAppearPrepare: H,
    onEnterPrepare: H,
    removeOnLeave: h,
    forceRender: m
  }), function (e, t) {
    var n = e.className;
    var r = e.style;
    var s = p()(o, a, j, n);
    return l.createElement(qe.a, {
      target: _ || v,
      key: "popup",
      ref: T,
      monitorWindowResize: true,
      disabled: z,
      align: g,
      onAlign: U
    }, l.createElement("div", {
      ref: t,
      className: s,
      onMouseEnter: E,
      onMouseLeave: O,
      onMouseDownCapture: w,
      onTouchStartCapture: C,
      style: i.a(i.a({}, r), V)
    }, Y));
  });
});
$e.displayName = "PopupInner";
var et = $e;
var tt = l.forwardRef(function (e, t) {
  var n = e.prefixCls;
  var o = e.visible;
  var a = e.zIndex;
  var s = e.children;
  var c = e.mobile;
  var u = (c = undefined === c ? {} : c).popupClassName;
  var d = c.popupStyle;
  var f = c.popupMotion;
  var h = undefined === f ? {} : f;
  var m = c.popupRender;
  var g = l.useRef();
  l.useImperativeHandle(t, function () {
    return {
      forceAlign: function () {},
      getElement: function () {
        return g.current;
      }
    };
  });
  var _ = i.a({
    zIndex: a
  }, d);
  var v = s;
  if (l.Children.count(s) > 1) {
    v = l.createElement("div", {
      className: "".concat(n, "-content")
    }, s);
  }
  if (m) {
    v = m(v);
  }
  return l.createElement(ze, r.a({
    visible: o,
    ref: g,
    removeOnLeave: true
  }, h), function (e, t) {
    var r = e.className;
    var o = e.style;
    var a = p()(n, u, r);
    return l.createElement("div", {
      ref: t,
      className: a,
      style: i.a(i.a({}, o), _)
    }, v);
  });
});
tt.displayName = "MobilePopupInner";
var nt = tt;
var rt = ["visible", "mobile"];
var ot = l.forwardRef(function (e, t) {
  var n = e.visible;
  var o = e.mobile;
  var a = c.a(e, rt);
  var u = l.useState(n);
  var d = s.a(u, 2);
  var p = d[0];
  var f = d[1];
  var h = l.useState(false);
  var m = s.a(h, 2);
  var g = m[0];
  var _ = m[1];
  var v = i.a(i.a({}, a), {}, {
    visible: p
  });
  l.useEffect(function () {
    f(n);
    if (n && o) {
      _(function () {
        if ("undefined" === typeof navigator || "undefined" === typeof window) {
          return false;
        }
        var e = navigator.userAgent || navigator.vendor || window.opera;
        return !(!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(null === e || undefined === e ? undefined : e.substr(0, 4)));
      }());
    }
  }, [n, o]);
  var b = g ? l.createElement(nt, r.a({}, v, {
    mobile: o,
    ref: t
  })) : l.createElement(et, r.a({}, v, {
    ref: t
  }));
  return l.createElement("div", null, l.createElement(Ke, v), b);
});
ot.displayName = "Popup";
var it = ot;
var at = l.createContext(null);
function st() {}
function ct() {
  return "";
}
function lt(e) {
  return e ? e.ownerDocument : window.document;
}
var ut = ["onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur", "onContextMenu"];
var dt = function (e) {
  var t = function (t) {
    w.a(o, t);
    var n = C.a(o);
    function o(e) {
      var t;
      var i;
      E.a(this, o);
      (t = n.call(this, e)).popupRef = l.createRef();
      t.triggerRef = l.createRef();
      t.attachId = undefined;
      t.clickOutsideHandler = undefined;
      t.touchOutsideHandler = undefined;
      t.contextMenuOutsideHandler1 = undefined;
      t.contextMenuOutsideHandler2 = undefined;
      t.mouseDownTimeout = undefined;
      t.focusTime = undefined;
      t.preClickTime = undefined;
      t.preTouchTime = undefined;
      t.delayTimer = undefined;
      t.hasPopupMouseDown = undefined;
      t.onMouseEnter = function (e) {
        var n = t.props.mouseEnterDelay;
        t.fireEvents("onMouseEnter", e);
        t.delaySetPopupVisible(true, n, n ? null : e);
      };
      t.onMouseMove = function (e) {
        t.fireEvents("onMouseMove", e);
        t.setPoint(e);
      };
      t.onMouseLeave = function (e) {
        t.fireEvents("onMouseLeave", e);
        t.delaySetPopupVisible(false, t.props.mouseLeaveDelay);
      };
      t.onPopupMouseEnter = function () {
        t.clearDelayTimer();
      };
      t.onPopupMouseLeave = function (e) {
        var n;
        if (!(e.relatedTarget && !e.relatedTarget.setTimeout && fe(null === (n = t.popupRef.current) || undefined === n ? undefined : n.getElement(), e.relatedTarget))) {
          t.delaySetPopupVisible(false, t.props.mouseLeaveDelay);
        }
      };
      t.onFocus = function (e) {
        t.fireEvents("onFocus", e);
        t.clearDelayTimer();
        if (t.isFocusToShow()) {
          t.focusTime = Date.now();
          t.delaySetPopupVisible(true, t.props.focusDelay);
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
          t.delaySetPopupVisible(false, t.props.blurDelay);
        }
      };
      t.onContextMenu = function (e) {
        e.preventDefault();
        t.fireEvents("onContextMenu", e);
        t.setPopupVisible(true, e);
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
        t.hasPopupMouseDown = true;
        clearTimeout(t.mouseDownTimeout);
        t.mouseDownTimeout = window.setTimeout(function () {
          t.hasPopupMouseDown = false;
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
          if (!(fe(r, n) && !t.isContextMenuOnly() || fe(o, n) || t.hasPopupMouseDown)) {
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
          var n = he(t.triggerRef.current);
          if (n) {
            return n;
          }
        } catch (r) {}
        return ae.a.findDOMNode(oe.a(t));
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
              if (ye(e[s].points, o, r)) {
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
        var o = e.destroyPopupOnHide;
        var i = e.popupClassName;
        var a = e.onPopupAlign;
        var s = e.popupMotion;
        var c = e.popupAnimation;
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
        return l.createElement(it, r.a({
          prefixCls: n,
          destroyPopupOnHide: o,
          visible: w,
          point: b && C,
          className: i,
          align: T,
          onAlign: a,
          animation: c,
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
        pe.cancel(t.attachId);
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
          t.attachId = pe(function () {
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
      i = "popupVisible" in e ? !!e.popupVisible : !!e.defaultPopupVisible;
      t.state = {
        prevPopupVisible: i,
        popupVisible: i
      };
      ut.forEach(function (e) {
        t["fire".concat(e)] = function (n) {
          t.fireEvents(e, n);
        };
      });
      return t;
    }
    O.a(o, [{
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
            this.clickOutsideHandler = _e(e, "mousedown", this.onDocumentClick);
          }
          if (!this.touchOutsideHandler) {
            e = e || t.getDocument(this.getRootDomNode());
            this.touchOutsideHandler = _e(e, "touchstart", this.onDocumentClick);
          }
          if (!this.contextMenuOutsideHandler1 && this.isContextMenuToShow()) {
            e = e || t.getDocument(this.getRootDomNode());
            this.contextMenuOutsideHandler1 = _e(e, "scroll", this.onContextMenuClose);
          }
          return void (!this.contextMenuOutsideHandler2 && this.isContextMenuToShow() && (this.contextMenuOutsideHandler2 = _e(window, "blur", this.onContextMenuClose)));
        }
        this.clearOutsideHandler();
      }
    }, {
      key: "componentWillUnmount",
      value: function () {
        this.clearDelayTimer();
        this.clearOutsideHandler();
        clearTimeout(this.mouseDownTimeout);
        pe.cancel(this.attachId);
      }
    }, {
      key: "getPopupDomNode",
      value: function () {
        var e;
        return (null === (e = this.popupRef.current) || undefined === e ? undefined : e.getElement()) || null;
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
          return i.a(i.a({}, r), n);
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
          if (!(null === (e = this.popupRef.current) || undefined === e)) {
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
        this.setPopupVisible(false);
      }
    }, {
      key: "render",
      value: function () {
        var t = this.state.popupVisible;
        var n = this.props;
        var r = n.children;
        var o = n.forceRender;
        var a = n.alignPoint;
        var s = n.className;
        var c = n.autoDestroy;
        var u = l.Children.only(r);
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
          if (a) {
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
        var f = p()(u && u.props && u.props.className, s);
        if (f) {
          d.className = f;
        }
        var h = i.a({}, d);
        if (function (e) {
          var t;
          var n;
          var r = Z.isMemo(e) ? e.type.type : e.type;
          return !("function" === typeof r && !(null === (t = r.prototype) || undefined === t ? undefined : t.render)) && !("function" === typeof e && !(null === (n = e.prototype) || undefined === n ? undefined : n.render));
        }(u)) {
          h.ref = function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
              t[n] = arguments[n];
            }
            return function (e) {
              t.forEach(function (t) {
                ge(t, e);
              });
            };
          }(this.triggerRef, u.ref);
        }
        var m;
        var g = l.cloneElement(u, h);
        if (t || this.popupRef.current || o) {
          m = l.createElement(e, {
            key: "portal",
            getContainer: this.getContainer,
            didUpdate: this.handlePortalUpdate
          }, this.getComponent());
        }
        if (!t && c) {
          m = null;
        }
        return l.createElement(at.Provider, {
          value: this.triggerContextValue
        }, g, m);
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function (e, t) {
        var n = e.popupVisible;
        var r = {};
        if (undefined !== n && t.popupVisible !== n) {
          r.popupVisible = n;
          r.prevPopupVisible = t.popupVisible;
        }
        return r;
      }
    }]);
    return o;
  }(l.Component);
  t.contextType = at;
  t.defaultProps = {
    prefixCls: "rc-trigger-popup",
    getPopupClassNameFromAlign: ct,
    getDocument: lt,
    onPopupVisibleChange: st,
    afterPopupVisibleChange: st,
    onPopupAlign: st,
    popupClassName: "",
    mouseEnterDelay: 0,
    mouseLeaveDelay: .1,
    focusDelay: 0,
    blurDelay: .15,
    popupStyle: {},
    destroyPopupOnHide: false,
    popupAlign: {},
    defaultPopupVisible: false,
    mask: false,
    maskClosable: true,
    action: [],
    showAction: [],
    hideAction: [],
    autoDestroy: false
  };
  return t;
}(be);
var pt = {
  adjustX: 1,
  adjustY: 1
};
var ft = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: pt,
    offset: [0, -7]
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: pt,
    offset: [0, 7]
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: pt,
    offset: [-4, 0]
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: pt,
    offset: [4, 0]
  }
};
var ht = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: pt,
    offset: [0, -7]
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: pt,
    offset: [0, 7]
  },
  rightTop: {
    points: ["tr", "tl"],
    overflow: pt,
    offset: [-4, 0]
  },
  leftTop: {
    points: ["tl", "tr"],
    overflow: pt,
    offset: [4, 0]
  }
};
function mt(e, t, n) {
  return t || (n ? n[e] || n.other : undefined);
}
var gt = {
  horizontal: "bottomLeft",
  vertical: "rightTop",
  "vertical-left": "rightTop",
  "vertical-right": "leftTop"
};
function _t(e) {
  var t = e.prefixCls;
  var n = e.visible;
  var r = e.children;
  var a = e.popup;
  var c = e.popupClassName;
  var u = e.popupOffset;
  var d = e.disabled;
  var f = e.mode;
  var h = e.onVisibleChange;
  var m = l.useContext(j);
  var g = m.getPopupContainer;
  var _ = m.rtl;
  var v = m.subMenuOpenDelay;
  var b = m.subMenuCloseDelay;
  var y = m.builtinPlacements;
  var E = m.triggerSubMenuAction;
  var O = m.forceSubMenuRender;
  var w = m.motion;
  var C = m.defaultMotions;
  var T = l.useState(false);
  var S = s.a(T, 2);
  var I = S[0];
  var A = S[1];
  var N = _ ? i.a(i.a({}, ht), y) : i.a(i.a({}, ft), y);
  var R = gt[f];
  var k = mt(f, w, C);
  var x = i.a(i.a({}, k), {}, {
    leavedClassName: "".concat(t, "-hidden"),
    removeOnLeave: false,
    motionAppear: true
  });
  var D = l.useRef();
  l.useEffect(function () {
    D.current = pe(function () {
      A(n);
    });
    return function () {
      pe.cancel(D.current);
    };
  }, [n]);
  return l.createElement(dt, {
    prefixCls: t,
    popupClassName: p()("".concat(t, "-popup"), o.a({}, "".concat(t, "-rtl"), _), c),
    stretch: "horizontal" === f ? "minWidth" : null,
    getPopupContainer: g,
    builtinPlacements: N,
    popupPlacement: R,
    popupVisible: I,
    popup: a,
    popupAlign: u && {
      offset: u
    },
    action: d ? [] : [E],
    mouseEnterDelay: v,
    mouseLeaveDelay: b,
    onPopupVisibleChange: h,
    forceRender: O,
    popupMotion: x
  }, r);
}
function vt(e) {
  var t = e.id;
  var n = e.open;
  var o = e.keyPath;
  var a = e.children;
  var c = l.useContext(j);
  var u = c.prefixCls;
  var d = c.forceSubMenuRender;
  var p = c.motion;
  var f = c.defaultMotions;
  var h = c.mode;
  var m = l.useRef(false);
  m.current = "inline" === h;
  var g = l.useState(!m.current);
  var _ = s.a(g, 2);
  var v = _[0];
  var b = _[1];
  var y = !!m.current && n;
  l.useEffect(function () {
    if (m.current) {
      b(false);
    }
  }, [h]);
  var E = i.a({}, mt("inline", p, f));
  if (o.length > 1) {
    E.motionAppear = false;
  }
  var O = E.onVisibleChanged;
  E.onVisibleChanged = function (e) {
    if (!(m.current || e)) {
      b(true);
    }
    return null === O || undefined === O ? undefined : O(e);
  };
  return v ? null : l.createElement(N, {
    mode: "inline",
    locked: !m.current
  }, l.createElement(ze, r.a({
    visible: y
  }, E, {
    forceRender: d,
    removeOnLeave: false,
    leavedClassName: "".concat(u, "-hidden")
  }), function (e) {
    var n = e.className;
    var r = e.style;
    return l.createElement(re, {
      id: t,
      className: n,
      style: r
    }, a);
  }));
}
var bt = ["style", "className", "title", "eventKey", "warnKey", "disabled", "internalPopupClose", "children", "itemIcon", "expandIcon", "popupClassName", "popupOffset", "onClick", "onMouseEnter", "onMouseLeave", "onTitleClick", "onTitleMouseEnter", "onTitleMouseLeave"];
var yt = ["active"];
var Et = function (e) {
  var t;
  var n = e.style;
  var a = e.className;
  var u = e.title;
  var d = e.eventKey;
  e.warnKey;
  var f = e.disabled;
  var h = e.internalPopupClose;
  var m = e.children;
  var g = e.itemIcon;
  var _ = e.expandIcon;
  var v = e.popupClassName;
  var b = e.popupOffset;
  var E = e.onClick;
  var O = e.onMouseEnter;
  var w = e.onMouseLeave;
  var C = e.onTitleClick;
  var T = e.onTitleMouseEnter;
  var S = e.onTitleMouseLeave;
  var I = c.a(e, bt);
  var A = V(d);
  var k = l.useContext(j);
  var L = k.prefixCls;
  var P = k.mode;
  var B = k.openKeys;
  var F = k.disabled;
  var W = k.overflowDisabled;
  var H = k.activeKey;
  var z = k.selectedKeys;
  var Y = k.itemIcon;
  var K = k.expandIcon;
  var q = k.onItemClick;
  var X = k.onOpenChange;
  var Q = k.onActive;
  var Z = l.useContext(U).isSubPathKey;
  var J = G();
  var ee = "".concat(L, "-submenu");
  var te = F || f;
  var ne = l.useRef();
  var oe = l.useRef();
  var ie = g || Y;
  var ae = _ || K;
  var se = B.includes(d);
  var ce = !W && se;
  var le = Z(z, d);
  var ue = R(d, te, T, S);
  var de = ue.active;
  var pe = c.a(ue, yt);
  var fe = l.useState(false);
  var he = s.a(fe, 2);
  var me = he[0];
  var ge = he[1];
  var _e = function (e) {
    if (!te) {
      ge(e);
    }
  };
  var ve = l.useMemo(function () {
    return de || "inline" !== P && (me || Z([H], d));
  }, [P, de, H, me, d, Z]);
  var be = M(J.length);
  var ye = $(function (e) {
    if (!(null === E || undefined === E)) {
      E(x(e));
    }
    q(e);
  });
  var Ee = A && "".concat(A, "-popup");
  var Oe = l.createElement("div", r.a({
    role: "menuitem",
    style: be,
    className: "".concat(ee, "-title"),
    tabIndex: te ? null : -1,
    ref: ne,
    title: "string" === typeof u ? u : null,
    "data-menu-id": W && A ? null : A,
    "aria-expanded": ce,
    "aria-haspopup": true,
    "aria-controls": Ee,
    "aria-disabled": te,
    onClick: function (e) {
      if (!te) {
        if (!(null === C || undefined === C)) {
          C({
            key: d,
            domEvent: e
          });
        }
        if ("inline" === P) {
          X(d, !se);
        }
      }
    },
    onFocus: function () {
      Q(d);
    }
  }, pe), u, l.createElement(D, {
    icon: "horizontal" !== P ? ae : null,
    props: i.a(i.a({}, e), {}, {
      isOpen: ce,
      isSubMenu: true
    })
  }, l.createElement("i", {
    className: "".concat(ee, "-arrow")
  })));
  var we = l.useRef(P);
  if ("inline" !== P) {
    we.current = J.length > 1 ? "vertical" : P;
  }
  if (!W) {
    var Ce = we.current;
    Oe = l.createElement(_t, {
      mode: Ce,
      prefixCls: ee,
      visible: !h && ce && "inline" !== P,
      popupClassName: v,
      popupOffset: b,
      popup: l.createElement(N, {
        mode: "horizontal" === Ce ? "vertical" : Ce
      }, l.createElement(re, {
        id: Ee,
        ref: oe
      }, m)),
      disabled: te,
      onVisibleChange: function (e) {
        if ("inline" !== P) {
          X(d, e);
        }
      }
    }, Oe);
  }
  return l.createElement(N, {
    onItemClick: ye,
    mode: "horizontal" === P ? "vertical" : P,
    itemIcon: ie,
    expandIcon: ae
  }, l.createElement(y.a.Item, r.a({
    role: "none"
  }, I, {
    component: "li",
    style: n,
    className: p()(ee, "".concat(ee, "-").concat(P), a, (t = {}, o.a(t, "".concat(ee, "-open"), ce), o.a(t, "".concat(ee, "-active"), ve), o.a(t, "".concat(ee, "-selected"), le), o.a(t, "".concat(ee, "-disabled"), te), t)),
    onMouseEnter: function (e) {
      _e(true);
      if (!(null === O || undefined === O)) {
        O({
          key: d,
          domEvent: e
        });
      }
    },
    onMouseLeave: function (e) {
      _e(false);
      if (!(null === w || undefined === w)) {
        w({
          key: d,
          domEvent: e
        });
      }
    }
  }), Oe, !W && l.createElement(vt, {
    id: Ee,
    open: ce,
    keyPath: J
  }, m)));
};
function Ot(e) {
  var t;
  var n = e.eventKey;
  var r = e.children;
  var o = G(n);
  var i = J(r, o);
  var a = B();
  l.useEffect(function () {
    if (a) {
      a.registerPath(n, o);
      return function () {
        a.unregisterPath(n, o);
      };
    }
  }, [o]);
  t = a ? i : l.createElement(Et, e, i);
  return l.createElement(F.Provider, {
    value: o
  }, t);
}
var wt = function (e) {
  if (!e) {
    return false;
  }
  if (e.offsetParent) {
    return true;
  }
  if (e.getBBox) {
    var t = e.getBBox();
    if (t.width || t.height) {
      return true;
    }
  }
  if (e.getBoundingClientRect) {
    var n = e.getBoundingClientRect();
    if (n.width || n.height) {
      return true;
    }
  }
  return false;
};
function Ct(e) {
  var t = arguments.length > 1 && undefined !== arguments[1] && arguments[1];
  if (wt(e)) {
    var n = e.nodeName.toLowerCase();
    var r = ["input", "select", "textarea", "button"].includes(n) || e.isContentEditable || "a" === n && !!e.getAttribute("href");
    var o = e.getAttribute("tabindex");
    var i = Number(o);
    var a = null;
    if (o && !Number.isNaN(i)) {
      a = i;
    } else {
      if (r && null === a) {
        a = 0;
      }
    }
    if (r && e.disabled) {
      a = null;
    }
    return null !== a && (a >= 0 || t && a < 0);
  }
  return false;
}
function Tt(e) {
  var t = arguments.length > 1 && undefined !== arguments[1] && arguments[1];
  var n = a.a(e.querySelectorAll("*")).filter(function (e) {
    return Ct(e, t);
  });
  if (Ct(e, t)) {
    n.unshift(e);
  }
  return n;
}
var St = S.LEFT;
var It = S.RIGHT;
var At = S.UP;
var jt = S.DOWN;
var Nt = S.ENTER;
var Rt = S.ESC;
var kt = [At, jt, St, It];
function xt(e, t) {
  return Tt(e, true).filter(function (e) {
    return t.has(e);
  });
}
function Dt(e, t, n) {
  var r = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : 1;
  if (!e) {
    return null;
  }
  var o = xt(e, t);
  var i = o.length;
  var a = o.findIndex(function (e) {
    return n === e;
  });
  if (r < 0) {
    if (-1 === a) {
      a = i - 1;
    } else {
      a -= 1;
    }
  } else {
    if (r > 0) {
      a += 1;
    }
  }
  return o[a = (a + i) % i];
}
function Mt(e, t, n, r, i, a, s, c, u, d) {
  var p = l.useRef();
  var f = l.useRef();
  f.current = t;
  var h = function () {
    pe.cancel(p.current);
  };
  l.useEffect(function () {
    return function () {
      h();
    };
  }, []);
  return function (l) {
    var m = l.which;
    if ([].concat(kt, [Nt, Rt]).includes(m)) {
      var g;
      var _;
      var v;
      var b = function () {
        g = new Set();
        _ = new Map();
        v = new Map();
        a().forEach(function (e) {
          var t = document.querySelector("[data-menu-id='".concat(H(r, e), "']"));
          if (t) {
            g.add(t);
            v.set(t, e);
            _.set(e, t);
          }
        });
        return g;
      };
      b();
      var y = function (e, t) {
        for (var n = e || document.activeElement; n;) {
          if (t.has(n)) {
            return n;
          }
          n = n.parentElement;
        }
        return null;
      }(_.get(t), g);
      var E = v.get(y);
      var O = function (e, t, n, r) {
        var i;
        var a;
        var s;
        var c;
        if ("inline" === e && r === Nt) {
          return {
            inlineTrigger: true
          };
        }
        i = {};
        o.a(i, At, "prev");
        o.a(i, jt, "next");
        var l = i;
        a = {};
        o.a(a, St, n ? "next" : "prev");
        o.a(a, It, n ? "prev" : "next");
        o.a(a, jt, "children");
        o.a(a, Nt, "children");
        var u = a;
        s = {};
        o.a(s, At, "prev");
        o.a(s, jt, "next");
        o.a(s, Nt, "children");
        o.a(s, Rt, "parent");
        o.a(s, St, n ? "children" : "parent");
        o.a(s, It, n ? "parent" : "children");
        var d = s;
        switch (null === (c = {
          inline: l,
          horizontal: u,
          vertical: d,
          inlineSub: l,
          horizontalSub: d,
          verticalSub: d
        }["".concat(e).concat(t ? "" : "Sub")]) || undefined === c ? undefined : c[r]) {
          case "prev":
            return {
              offset: -1,
              sibling: true
            };
          case "next":
            return {
              offset: 1,
              sibling: true
            };
          case "parent":
            return {
              offset: -1,
              sibling: false
            };
          case "children":
            return {
              offset: 1,
              sibling: false
            };
          default:
            return null;
        }
      }(e, 1 === s(E, true).length, n, m);
      if (!O) {
        return;
      }
      if (kt.includes(m)) {
        l.preventDefault();
      }
      var w = function (e) {
        if (e) {
          var t = e;
          var n = e.querySelector("a");
          if (null === n || undefined === n ? undefined : n.getAttribute("href")) {
            t = n;
          }
          var r = v.get(e);
          c(r);
          h();
          p.current = pe(function () {
            if (f.current === r) {
              t.focus();
            }
          });
        }
      };
      if (O.sibling || !y) {
        var C = Dt(y && "inline" !== e ? function (e) {
          for (var t = e; t;) {
            if (t.getAttribute("data-menu-list")) {
              return t;
            }
            t = t.parentElement;
          }
          return null;
        }(y) : i.current, g, y, O.offset);
        w(C);
      } else if (O.inlineTrigger) {
        u(E);
      } else if (O.offset > 0) {
        u(E, true);
        h();
        p.current = pe(function () {
          b();
          var e = y.getAttribute("aria-controls");
          var t = Dt(document.getElementById(e), g);
          w(t);
        }, 5);
      } else if (O.offset < 0) {
        var T = s(E, true);
        var S = T[T.length - 2];
        var I = _.get(S);
        u(S, false);
        w(I);
      }
    }
    if (!(null === d || undefined === d)) {
      d(l);
    }
  };
}
var Lt = Math.random().toFixed(5).toString().slice(2);
var Pt = 0;
var Bt = "__RC_UTIL_PATH_SPLIT__";
var Ft = function (e) {
  return e.join(Bt);
};
function Gt() {
  var e = l.useState({});
  var t = s.a(e, 2)[1];
  var n = l.useRef(new Map());
  var r = l.useRef(new Map());
  var o = l.useState([]);
  var i = s.a(o, 2);
  var c = i[0];
  var u = i[1];
  var d = l.useRef(0);
  var p = l.useRef(false);
  var f = l.useCallback(function (e, o) {
    var i = Ft(o);
    r.current.set(i, e);
    n.current.set(e, i);
    d.current += 1;
    var a;
    var s = d.current;
    a = function () {
      if (s === d.current) {
        if (!p.current) {
          t({});
        }
      }
    };
    Promise.resolve().then(a);
  }, []);
  var h = l.useCallback(function (e, t) {
    var o = Ft(t);
    r.current.delete(o);
    n.current.delete(e);
  }, []);
  var m = l.useCallback(function (e) {
    u(e);
  }, []);
  var g = l.useCallback(function (e, t) {
    var r = n.current.get(e) || "";
    var o = r.split(Bt);
    if (t && c.includes(o[0])) {
      o.unshift("rc-menu-more");
    }
    return o;
  }, [c]);
  var _ = l.useCallback(function (e, t) {
    return e.some(function (e) {
      return g(e, true).includes(t);
    });
  }, [g]);
  var v = l.useCallback(function (e) {
    var t = "".concat(n.current.get(e)).concat(Bt);
    var o = new Set();
    a.a(r.current.keys()).forEach(function (e) {
      if (e.startsWith(t)) {
        o.add(r.current.get(e));
      }
    });
    return o;
  }, []);
  l.useEffect(function () {
    return function () {
      p.current = true;
    };
  }, []);
  return {
    registerPath: f,
    unregisterPath: h,
    refreshOverflowKeys: m,
    isSubPathKey: _,
    getKeyPath: g,
    getKeys: function () {
      var e = a.a(n.current.keys());
      if (c.length) {
        e.push("rc-menu-more");
      }
      return e;
    },
    getSubPathKeys: v
  };
}
var Ut = ["prefixCls", "style", "className", "tabIndex", "children", "direction", "id", "mode", "inlineCollapsed", "disabled", "disabledOverflow", "subMenuOpenDelay", "subMenuCloseDelay", "forceSubMenuRender", "defaultOpenKeys", "openKeys", "activeKey", "defaultActiveFirst", "selectable", "multiple", "defaultSelectedKeys", "selectedKeys", "onSelect", "onDeselect", "inlineIndent", "motion", "defaultMotions", "triggerSubMenuAction", "builtinPlacements", "itemIcon", "expandIcon", "overflowedIndicator", "overflowedIndicatorPopupClassName", "getPopupContainer", "onClick", "onOpenChange", "onKeyDown", "openAnimation", "openTransitionName"];
var Wt = [];
var Ht = ["className", "title", "eventKey", "children"];
var Vt = ["children"];
var zt = function (e) {
  var t = e.className;
  var n = e.title;
  e.eventKey;
  var o = e.children;
  var i = c.a(e, Ht);
  var a = l.useContext(j).prefixCls;
  var s = "".concat(a, "-item-group");
  return l.createElement("li", r.a({}, i, {
    onClick: function (e) {
      return e.stopPropagation();
    },
    className: p()(s, t)
  }), l.createElement("div", {
    className: "".concat(s, "-title"),
    title: "string" === typeof n ? n : undefined
  }, n), l.createElement("ul", {
    className: "".concat(s, "-list")
  }, o));
};
function Yt(e) {
  var t = e.children;
  var n = c.a(e, Vt);
  var r = J(t, G(n.eventKey));
  return B() ? r : l.createElement(zt, I(n, ["warnKey"]), r);
}
function Kt(e) {
  var t = e.className;
  var n = e.style;
  var r = l.useContext(j).prefixCls;
  return B() ? null : l.createElement("li", {
    className: p()("".concat(r, "-item-divider"), t),
    style: n
  });
}
var qt = G;
var Xt = function (e) {
  var t;
  var n;
  var u = e.prefixCls;
  var d = undefined === u ? "rc-menu" : u;
  var f = e.style;
  var g = e.className;
  var _ = e.tabIndex;
  var v = undefined === _ ? 0 : _;
  var b = e.children;
  var E = e.direction;
  var O = e.id;
  var w = e.mode;
  var C = undefined === w ? "vertical" : w;
  var T = e.inlineCollapsed;
  var S = e.disabled;
  var I = e.disabledOverflow;
  var A = e.subMenuOpenDelay;
  var j = undefined === A ? .1 : A;
  var R = e.subMenuCloseDelay;
  var k = undefined === R ? .1 : R;
  var D = e.forceSubMenuRender;
  var M = e.defaultOpenKeys;
  var L = e.openKeys;
  var B = e.activeKey;
  var F = e.defaultActiveFirst;
  var G = e.selectable;
  var H = undefined === G || G;
  var V = e.multiple;
  var z = undefined !== V && V;
  var Y = e.defaultSelectedKeys;
  var K = e.selectedKeys;
  var q = e.onSelect;
  var X = e.onDeselect;
  var Z = e.inlineIndent;
  var ee = undefined === Z ? 24 : Z;
  var te = e.motion;
  var ne = e.defaultMotions;
  var re = e.triggerSubMenuAction;
  var oe = undefined === re ? "hover" : re;
  var ie = e.builtinPlacements;
  var ae = e.itemIcon;
  var se = e.expandIcon;
  var ce = e.overflowedIndicator;
  var le = undefined === ce ? "..." : ce;
  var ue = e.overflowedIndicatorPopupClassName;
  var de = e.getPopupContainer;
  var pe = e.onClick;
  var fe = e.onOpenChange;
  var he = e.onKeyDown;
  e.openAnimation;
  e.openTransitionName;
  var me = c.a(e, Ut);
  var ge = J(b, Wt);
  var _e = l.useState(false);
  var ve = s.a(_e, 2);
  var be = ve[0];
  var ye = ve[1];
  var Ee = l.useRef();
  var Oe = function (e) {
    var t = m(e, {
      value: e
    });
    var n = s.a(t, 2);
    var r = n[0];
    var o = n[1];
    l.useEffect(function () {
      Pt += 1;
      var e = "".concat(Lt, "-").concat(Pt);
      o("rc-menu-uuid-".concat(e));
    }, []);
    return r;
  }(O);
  var we = "rtl" === E;
  var Ce = l.useMemo(function () {
    return "inline" !== C && "vertical" !== C || !T ? [C, false] : ["vertical", T];
  }, [C, T]);
  var Te = s.a(Ce, 2);
  var Se = Te[0];
  var Ie = Te[1];
  var Ae = l.useState(0);
  var je = s.a(Ae, 2);
  var Ne = je[0];
  var Re = je[1];
  var ke = Ne >= ge.length - 1 || "horizontal" !== Se || I;
  var xe = m(M, {
    value: L,
    postState: function (e) {
      return e || Wt;
    }
  });
  var De = s.a(xe, 2);
  var Me = De[0];
  var Le = De[1];
  var Pe = function (e) {
    Le(e);
    if (!(null === fe || undefined === fe)) {
      fe(e);
    }
  };
  var Be = l.useState(Me);
  var Fe = s.a(Be, 2);
  var Ge = Fe[0];
  var Ue = Fe[1];
  var We = "inline" === Se;
  var He = l.useRef(false);
  l.useEffect(function () {
    if (We) {
      Ue(Me);
    }
  }, [Me]);
  l.useEffect(function () {
    if (He.current) {
      if (We) {
        Le(Ge);
      } else {
        Pe(Wt);
      }
    } else {
      He.current = true;
    }
  }, [We]);
  var Ve = Gt();
  var ze = Ve.registerPath;
  var Ye = Ve.unregisterPath;
  var Ke = Ve.refreshOverflowKeys;
  var qe = Ve.isSubPathKey;
  var Xe = Ve.getKeyPath;
  var Qe = Ve.getKeys;
  var Ze = Ve.getSubPathKeys;
  var Je = l.useMemo(function () {
    return {
      registerPath: ze,
      unregisterPath: Ye
    };
  }, [ze, Ye]);
  var $e = l.useMemo(function () {
    return {
      isSubPathKey: qe
    };
  }, [qe]);
  l.useEffect(function () {
    Ke(ke ? Wt : ge.slice(Ne + 1).map(function (e) {
      return e.key;
    }));
  }, [Ne, ke]);
  var et = m(B || F && (null === (t = ge[0]) || undefined === t ? undefined : t.key), {
    value: B
  });
  var tt = s.a(et, 2);
  var nt = tt[0];
  var rt = tt[1];
  var ot = $(function (e) {
    rt(e);
  });
  var it = $(function () {
    rt(undefined);
  });
  var at = m(Y || [], {
    value: K,
    postState: function (e) {
      return Array.isArray(e) ? e : null === e || undefined === e ? Wt : [e];
    }
  });
  var st = s.a(at, 2);
  var ct = st[0];
  var lt = st[1];
  var ut = $(function (e) {
    if (!(null === pe || undefined === pe)) {
      pe(x(e));
    }
    (function (e) {
      if (H) {
        var t;
        var n = e.key;
        var r = ct.includes(n);
        t = z ? r ? ct.filter(function (e) {
          return e !== n;
        }) : [].concat(a.a(ct), [n]) : [n];
        lt(t);
        var o = i.a(i.a({}, e), {}, {
          selectedKeys: t
        });
        if (r) {
          if (!(null === X || undefined === X)) {
            X(o);
          }
        } else {
          if (!(null === q || undefined === q)) {
            q(o);
          }
        }
      }
      if (!z && Me.length && "inline" !== Se) {
        Pe(Wt);
      }
    })(e);
  });
  var dt = $(function (e, t) {
    var n = Me.filter(function (t) {
      return t !== e;
    });
    if (t) {
      n.push(e);
    } else if ("inline" !== Se) {
      var r = Ze(e);
      n = n.filter(function (e) {
        return !r.has(e);
      });
    }
    if (!h()(Me, n)) {
      Pe(n);
    }
  });
  var pt = $(de);
  var ft = Mt(Se, nt, we, Oe, Ee, Qe, Xe, rt, function (e, t) {
    var n = null !== t && undefined !== t ? t : !Me.includes(e);
    dt(e, n);
  }, he);
  l.useEffect(function () {
    ye(true);
  }, []);
  var ht = "horizontal" !== Se || I ? ge : ge.map(function (e, t) {
    return l.createElement(N, {
      key: e.key,
      overflowDisabled: t > Ne
    }, e);
  });
  var mt = l.createElement(y.a, r.a({
    id: O,
    ref: Ee,
    prefixCls: "".concat(d, "-overflow"),
    component: "ul",
    itemComponent: Q,
    className: p()(d, "".concat(d, "-root"), "".concat(d, "-").concat(Se), g, (n = {}, o.a(n, "".concat(d, "-inline-collapsed"), Ie), o.a(n, "".concat(d, "-rtl"), we), n)),
    dir: E,
    style: f,
    role: "menu",
    tabIndex: v,
    data: ht,
    renderRawItem: function (e) {
      return e;
    },
    renderRawRest: function (e) {
      var t = e.length;
      var n = t ? ge.slice(-t) : null;
      return l.createElement(Ot, {
        eventKey: "rc-menu-more",
        title: le,
        disabled: ke,
        internalPopupClose: 0 === t,
        popupClassName: ue
      }, n);
    },
    maxCount: "horizontal" !== Se || I ? y.a.INVALIDATE : y.a.RESPONSIVE,
    ssr: "full",
    "data-menu-list": true,
    onVisibleChange: function (e) {
      Re(e);
    },
    onKeyDown: ft
  }, me));
  return l.createElement(W.Provider, {
    value: Oe
  }, l.createElement(N, {
    prefixCls: d,
    mode: Se,
    openKeys: Me,
    rtl: we,
    disabled: S,
    motion: be ? te : null,
    defaultMotions: be ? ne : null,
    activeKey: nt,
    onActive: ot,
    onInactive: it,
    selectedKeys: ct,
    inlineIndent: ee,
    subMenuOpenDelay: j,
    subMenuCloseDelay: k,
    forceSubMenuRender: D,
    builtinPlacements: ie,
    triggerSubMenuAction: oe,
    getPopupContainer: pt,
    itemIcon: ae,
    expandIcon: se,
    onItemClick: ut,
    onOpenChange: dt
  }, l.createElement(U.Provider, {
    value: $e
  }, mt), l.createElement("div", {
    style: {
      display: "none"
    },
    "aria-hidden": true
  }, l.createElement(P.Provider, {
    value: Je
  }, ge))));
};
Xt.Item = Q;
Xt.SubMenu = Ot;
Xt.ItemGroup = Yt;
Xt.Divider = Kt;
export { Xt as e };
export default Kt;