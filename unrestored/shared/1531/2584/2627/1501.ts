"use strict";

import r = require("../19");
import i = require("../33/index");
import o = require("react");
import a = require("../95");
import s = require("../96");
import c = require("../120");
import u = require("../140");
import l = require("../108");
var f = function (e) {
  return +setTimeout(e, 16);
};
var d = function (e) {
  return clearTimeout(e);
};
if ("undefined" !== typeof window && "requestAnimationFrame" in window) {
  f = function (e) {
    return window.requestAnimationFrame(e);
  };
  d = function (e) {
    return window.cancelAnimationFrame(e);
  };
}
var h = 0;
var p = new Map();
function _(e) {
  p.delete(e);
}
function A(e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 1;
  var n = h += 1;
  function r(t) {
    if (0 === t) {
      _(n);
      e();
    } else {
      var i = f(function () {
        r(t - 1);
      });
      p.set(n, i);
    }
  }
  r(t);
  return n;
}
A.cancel = function (e) {
  var t = p.get(e);
  _(t);
  return d(t);
};
import g = require("../75/index");
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
}(g);
function m() {
  return !("undefined" === typeof window || !window.document || !window.document.createElement);
}
var y;
var b = o.forwardRef(function (e, t) {
  var n = e.didUpdate;
  var r = e.getContainer;
  var i = e.children;
  var a = o.useRef();
  o.useImperativeHandle(t, function () {
    return {};
  });
  var s = o.useRef(false);
  if (!s.current && m()) {
    a.current = r();
    s.current = true;
  }
  o.useEffect(function () {
    if (!(null === n || undefined === n)) {
      n(e);
    }
  });
  o.useEffect(function () {
    return function () {
      var e;
      var t;
      if (!(null === (e = a.current) || undefined === e || null === (t = e.parentNode) || undefined === t)) {
        t.removeChild(a.current);
      }
    };
  }, []);
  return a.current ? v.a.createPortal(i, a.current) : null;
});
function w(e) {
  if ("undefined" === typeof document) {
    return 0;
  }
  if (e || undefined === y) {
    var t = document.createElement("div");
    t.style.width = "100%";
    t.style.height = "200px";
    var n = document.createElement("div");
    var r = n.style;
    r.position = "absolute";
    r.top = "0";
    r.left = "0";
    r.pointerEvents = "none";
    r.visibility = "hidden";
    r.width = "200px";
    r.height = "150px";
    r.overflow = "hidden";
    n.appendChild(t);
    document.body.appendChild(n);
    var i = t.offsetWidth;
    n.style.overflow = "scroll";
    var o = t.offsetWidth;
    if (i === o) {
      o = n.clientWidth;
    }
    document.body.removeChild(n);
    y = i - o;
  }
  return y;
}
var E = function (e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
  if (!e) {
    return {};
  }
  var n = t.element;
  var r = undefined === n ? document.body : n;
  var i = {};
  var o = Object.keys(e);
  o.forEach(function (e) {
    i[e] = r.style[e];
  });
  o.forEach(function (t) {
    r.style[t] = e[t];
  });
  return i;
};
var x = {};
var C = function (e) {
  if (document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth || e) {
    var t = new RegExp("".concat("ant-scrolling-effect"), "g");
    var n = document.body.className;
    if (e) {
      if (!t.test(n)) {
        return;
      }
      E(x);
      x = {};
      return void (document.body.className = n.replace(t, "").trim());
    }
    var r = w();
    if (r && (x = E({
      position: "relative",
      width: "calc(100% - ".concat(r, "px)")
    }), !t.test(n))) {
      var i = "".concat(n, " ").concat("ant-scrolling-effect");
      document.body.className = i.trim();
    }
  }
};
import O = require("../80/index");
var k = [];
var S = new RegExp("".concat("ant-scrolling-effect"), "g");
var T = 0;
var B = new Map();
var D = function e(t) {
  var n = this;
  a.a(this, e);
  this.lockTarget = undefined;
  this.options = undefined;
  this.getContainer = function () {
    var e;
    return null === (e = n.options) || undefined === e ? undefined : e.container;
  };
  this.reLock = function (e) {
    var t = k.find(function (e) {
      return e.target === n.lockTarget;
    });
    if (t) {
      n.unLock();
    }
    n.options = e;
    if (t) {
      t.options = e;
      n.lock();
    }
  };
  this.lock = function () {
    var e;
    if (!k.some(function (e) {
      return e.target === n.lockTarget;
    })) {
      if (k.some(function (e) {
        var t;
        var r = e.options;
        return (null === r || undefined === r ? undefined : r.container) === (null === (t = n.options) || undefined === t ? undefined : t.container);
      })) {
        k = [].concat(O.a(k), [{
          target: n.lockTarget,
          options: n.options
        }]);
      } else {
        var t = 0;
        var r = (null === (e = n.options) || undefined === e ? undefined : e.container) || document.body;
        if (r === document.body && window.innerWidth - document.documentElement.clientWidth > 0 || r.scrollHeight > r.clientHeight) {
          t = w();
        }
        var i = r.className;
        if (0 === k.filter(function (e) {
          var t;
          var r = e.options;
          return (null === r || undefined === r ? undefined : r.container) === (null === (t = n.options) || undefined === t ? undefined : t.container);
        }).length) {
          B.set(r, E({
            width: 0 !== t ? "calc(100% - ".concat(t, "px)") : undefined,
            overflow: "hidden",
            overflowX: "hidden",
            overflowY: "hidden"
          }, {
            element: r
          }));
        }
        if (!S.test(i)) {
          var o = "".concat(i, " ").concat("ant-scrolling-effect");
          r.className = o.trim();
        }
        k = [].concat(O.a(k), [{
          target: n.lockTarget,
          options: n.options
        }]);
      }
    }
  };
  this.unLock = function () {
    var e;
    var t = k.find(function (e) {
      return e.target === n.lockTarget;
    });
    k = k.filter(function (e) {
      return e.target !== n.lockTarget;
    });
    if (t && !k.some(function (e) {
      var n;
      var r = e.options;
      return (null === r || undefined === r ? undefined : r.container) === (null === (n = t.options) || undefined === n ? undefined : n.container);
    })) {
      var r = (null === (e = n.options) || undefined === e ? undefined : e.container) || document.body;
      var i = r.className;
      if (S.test(i)) {
        E(B.get(r), {
          element: r
        });
        B.delete(r);
        r.className = r.className.replace(S, "").trim();
      }
    }
  };
  this.lockTarget = T++;
  this.options = t;
};
var I = 0;
var F = m();
var R = {};
var P = function (e) {
  if (!F) {
    return null;
  }
  if (e) {
    if ("string" === typeof e) {
      return document.querySelectorAll(e)[0];
    }
    if ("function" === typeof e) {
      return e();
    }
    if ("object" === l.a(e) && e instanceof window.HTMLElement) {
      return e;
    }
  }
  return document.body;
};
var N = function (e) {
  c.a(n, e);
  var t = u.a(n);
  function n(e) {
    var r;
    a.a(this, n);
    (r = t.call(this, e)).container = undefined;
    r.componentRef = o.createRef();
    r.rafId = undefined;
    r.scrollLocker = undefined;
    r.renderComponent = undefined;
    r.updateScrollLocker = function (e) {
      var t = (e || {}).visible;
      var n = r.props;
      var i = n.getContainer;
      var o = n.visible;
      if (o && o !== t && F && P(i) !== r.scrollLocker.getContainer()) {
        r.scrollLocker.reLock({
          container: P(i)
        });
      }
    };
    r.updateOpenCount = function (e) {
      var t = e || {};
      var n = t.visible;
      var i = t.getContainer;
      var o = r.props;
      var a = o.visible;
      var s = o.getContainer;
      if (a !== n && F && P(s) === document.body) {
        if (a && !n) {
          I += 1;
        } else {
          if (e) {
            I -= 1;
          }
        }
      }
      if ("function" === typeof s && "function" === typeof i ? s.toString() !== i.toString() : s !== i) {
        r.removeCurrentContainer();
      }
    };
    r.attachToParent = function () {
      var e = arguments.length > 0 && undefined !== arguments[0] && arguments[0];
      if (e || r.container && !r.container.parentNode) {
        var t = P(r.props.getContainer);
        return !!t && (t.appendChild(r.container), true);
      }
      return true;
    };
    r.getContainer = function () {
      return F ? (r.container || (r.container = document.createElement("div"), r.attachToParent(true)), r.setWrapperClassName(), r.container) : null;
    };
    r.setWrapperClassName = function () {
      var e = r.props.wrapperClassName;
      if (r.container && e && e !== r.container.className) {
        r.container.className = e;
      }
    };
    r.removeCurrentContainer = function () {
      var e;
      var t;
      if (!(null === (e = r.container) || undefined === e || null === (t = e.parentNode) || undefined === t)) {
        t.removeChild(r.container);
      }
    };
    r.switchScrollingEffect = function () {
      if (1 !== I || Object.keys(R).length) {
        if (!I) {
          E(R);
          R = {};
          C(true);
        }
      } else {
        C();
        R = E({
          overflow: "hidden",
          overflowX: "hidden",
          overflowY: "hidden"
        });
      }
    };
    r.scrollLocker = new D({
      container: P(e.getContainer)
    });
    return r;
  }
  s.a(n, [{
    key: "componentDidMount",
    value: function () {
      var e = this;
      this.updateOpenCount();
      if (!this.attachToParent()) {
        this.rafId = A(function () {
          e.forceUpdate();
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function (e) {
      this.updateOpenCount(e);
      this.updateScrollLocker(e);
      this.setWrapperClassName();
      this.attachToParent();
    }
  }, {
    key: "componentWillUnmount",
    value: function () {
      var e = this.props;
      var t = e.visible;
      var n = e.getContainer;
      if (F && P(n) === document.body) {
        I = t && I ? I - 1 : I;
      }
      this.removeCurrentContainer();
      A.cancel(this.rafId);
    }
  }, {
    key: "render",
    value: function () {
      var e = this.props;
      var t = e.children;
      var n = e.forceRender;
      var r = e.visible;
      var i = null;
      var a = {
        getOpenCount: function () {
          return I;
        },
        getContainer: this.getContainer,
        switchScrollingEffect: this.switchScrollingEffect,
        scrollLocker: this.scrollLocker
      };
      if (n || r || this.componentRef.current) {
        i = o.createElement(b, {
          getContainer: this.getContainer,
          ref: this.componentRef
        }, t(a));
      }
      return i;
    }
  }]);
  return n;
}(o.Component);
import M = require("../20");
import j = require("../8");
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
}(j);
var U = {
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
    if (e.altKey && !e.ctrlKey || e.metaKey || t >= U.F1 && t <= U.F12) {
      return false;
    }
    switch (t) {
      case U.ALT:
      case U.CAPS_LOCK:
      case U.CONTEXT_MENU:
      case U.CTRL:
      case U.DOWN:
      case U.END:
      case U.ESC:
      case U.HOME:
      case U.INSERT:
      case U.LEFT:
      case U.MAC_FF_META:
      case U.META:
      case U.NUMLOCK:
      case U.NUM_CENTER:
      case U.PAGE_DOWN:
      case U.PAGE_UP:
      case U.PAUSE:
      case U.PRINT_SCREEN:
      case U.RIGHT:
      case U.SHIFT:
      case U.UP:
      case U.WIN_KEY:
      case U.WIN_KEY_RIGHT:
        return false;
      default:
        return true;
    }
  },
  isCharacterKey: function (e) {
    if (e >= U.ZERO && e <= U.NINE) {
      return true;
    }
    if (e >= U.NUM_ZERO && e <= U.NUM_MULTIPLY) {
      return true;
    }
    if (e >= U.A && e <= U.Z) {
      return true;
    }
    if (-1 !== window.navigator.userAgent.indexOf("WebKit") && 0 === e) {
      return true;
    }
    switch (e) {
      case U.SPACE:
      case U.QUESTION_MARK:
      case U.NUM_PLUS:
      case U.NUM_MINUS:
      case U.NUM_PERIOD:
      case U.NUM_DIVISION:
      case U.SEMICOLON:
      case U.DASH:
      case U.EQUALS:
      case U.COMMA:
      case U.PERIOD:
      case U.SLASH:
      case U.APOSTROPHE:
      case U.SINGLE_QUOTE:
      case U.OPEN_SQUARE_BRACKET:
      case U.BACKSLASH:
      case U.CLOSE_SQUARE_BRACKET:
        return true;
      default:
        return false;
    }
  }
};
var H = U;
var V = "".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap", " ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/);
function G(e, t) {
  return 0 === e.indexOf(t);
}
import z = require("../29");
require("../242/index");
function Q(e, t) {
  if ("function" === typeof e) {
    e(t);
  } else {
    if ("object" === l.a(e) && e && "current" in e) {
      e.current = t;
    }
  }
}
function W(e, t) {
  var n = {};
  n[e.toLowerCase()] = t.toLowerCase();
  n["Webkit".concat(e)] = "webkit".concat(t);
  n["Moz".concat(e)] = "moz".concat(t);
  n["ms".concat(e)] = "MS".concat(t);
  n["O".concat(e)] = "o".concat(t.toLowerCase());
  return n;
}
var K = function (e, t) {
  var n = {
    animationend: W("Animation", "AnimationEnd"),
    transitionend: W("Transition", "TransitionEnd")
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
}(m(), "undefined" !== typeof window ? window : {});
var X = {};
if (m()) {
  var Y = document.createElement("div");
  X = Y.style;
}
var q = {};
function $(e) {
  if (q[e]) {
    return q[e];
  }
  var t = K[e];
  if (t) {
    for (var n = Object.keys(t), r = n.length, i = 0; i < r; i += 1) {
      var o = n[i];
      if (Object.prototype.hasOwnProperty.call(t, o) && o in X) {
        q[e] = t[o];
        return q[e];
      }
    }
  }
  return "";
}
var J = $("animationend");
var Z = $("transitionend");
var ee = !(!J || !Z);
var te = J || "animationend";
var ne = Z || "transitionend";
function re(e, t) {
  return e ? "object" === l.a(e) ? e[t.replace(/-\w/g, function (e) {
    return e[1].toUpperCase();
  })] : "".concat(e, "-").concat(t) : null;
}
function ie(e) {
  var t = o.useRef(false);
  var n = o.useState(e);
  var r = i.a(n, 2);
  var a = r[0];
  var s = r[1];
  o.useEffect(function () {
    return function () {
      t.current = true;
    };
  }, []);
  return [a, function (e) {
    if (!t.current) {
      s(e);
    }
  }];
}
var oe = m() ? o.useLayoutEffect : o.useEffect;
var ae = ["prepare", "start", "active", "end"];
function se(e) {
  return "active" === e || "end" === e;
}
var ce = function (e, t) {
  var n = o.useState("none");
  var r = i.a(n, 2);
  var a = r[0];
  var s = r[1];
  var c = function () {
    var e = o.useRef(null);
    function t() {
      A.cancel(e.current);
    }
    o.useEffect(function () {
      return function () {
        t();
      };
    }, []);
    return [function n(r) {
      var i = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 2;
      t();
      var o = A(function () {
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
  var u = i.a(c, 2);
  var l = u[0];
  var f = u[1];
  oe(function () {
    if ("none" !== a && "end" !== a) {
      var e = ae.indexOf(a);
      var n = ae[e + 1];
      var r = t(a);
      if (false === r) {
        s(n);
      } else {
        l(function (e) {
          function t() {
            if (!e.isCanceled()) {
              s(n);
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
  }, [e, a]);
  o.useEffect(function () {
    return function () {
      f();
    };
  }, []);
  return [function () {
    s("prepare");
  }, a];
};
function ue(e, t, n, r) {
  var a = r.motionEnter;
  var s = undefined === a || a;
  var c = r.motionAppear;
  var u = undefined === c || c;
  var l = r.motionLeave;
  var f = undefined === l || l;
  var d = r.motionDeadline;
  var h = r.motionLeaveImmediately;
  var p = r.onAppearPrepare;
  var _ = r.onEnterPrepare;
  var A = r.onLeavePrepare;
  var g = r.onAppearStart;
  var v = r.onEnterStart;
  var m = r.onLeaveStart;
  var y = r.onAppearActive;
  var b = r.onEnterActive;
  var w = r.onLeaveActive;
  var E = r.onAppearEnd;
  var x = r.onEnterEnd;
  var C = r.onLeaveEnd;
  var O = r.onVisibleChanged;
  var k = ie();
  var S = i.a(k, 2);
  var T = S[0];
  var B = S[1];
  var D = ie("none");
  var I = i.a(D, 2);
  var F = I[0];
  var R = I[1];
  var P = ie(null);
  var N = i.a(P, 2);
  var j = N[0];
  var L = N[1];
  var U = o.useRef(false);
  var H = o.useRef(null);
  var V = o.useRef(false);
  var G = o.useRef(null);
  function Q() {
    return n() || G.current;
  }
  var W = o.useRef(false);
  function K(e) {
    var t;
    var n = Q();
    if (!(e && !e.deadline && e.target !== n)) {
      if ("appear" === F && W.current) {
        t = null === E || undefined === E ? undefined : E(n, e);
      } else {
        if ("enter" === F && W.current) {
          t = null === x || undefined === x ? undefined : x(n, e);
        } else {
          if ("leave" === F && W.current) {
            t = null === C || undefined === C ? undefined : C(n, e);
          }
        }
      }
      if (!(false === t || V.current)) {
        R("none");
        L(null);
      }
    }
  }
  var X = function (e) {
    var t = o.useRef();
    var n = o.useRef(e);
    n.current = e;
    var r = o.useCallback(function (e) {
      n.current(e);
    }, []);
    function i(e) {
      if (e) {
        e.removeEventListener(ne, r);
        e.removeEventListener(te, r);
      }
    }
    o.useEffect(function () {
      return function () {
        i(t.current);
      };
    }, []);
    return [function (e) {
      if (t.current && t.current !== e) {
        i(t.current);
      }
      if (e && e !== t.current) {
        e.addEventListener(ne, r);
        e.addEventListener(te, r);
        t.current = e;
      }
    }, i];
  }(K);
  var Y = i.a(X, 1)[0];
  var q = o.useMemo(function () {
    var e;
    var t;
    var n;
    switch (F) {
      case "appear":
        e = {};
        z.a(e, "prepare", p);
        z.a(e, "start", g);
        z.a(e, "active", y);
        return e;
      case "enter":
        t = {};
        z.a(t, "prepare", _);
        z.a(t, "start", v);
        z.a(t, "active", b);
        return t;
      case "leave":
        n = {};
        z.a(n, "prepare", A);
        z.a(n, "start", m);
        z.a(n, "active", w);
        return n;
      default:
        return {};
    }
  }, [F]);
  var $ = ce(F, function (e) {
    if ("prepare" === e) {
      var t = q.prepare;
      return !!t && t(Q());
    }
    var n;
    if (ee in q) {
      L((null === (n = q[ee]) || undefined === n ? undefined : n.call(q, Q(), null)) || null);
    }
    if ("active" === ee) {
      Y(Q());
      if (d > 0) {
        clearTimeout(H.current);
        H.current = setTimeout(function () {
          K({
            deadline: true
          });
        }, d);
      }
    }
    return true;
  });
  var J = i.a($, 2);
  var Z = J[0];
  var ee = J[1];
  var re = se(ee);
  W.current = re;
  oe(function () {
    B(t);
    var n;
    var r = U.current;
    U.current = true;
    if (e) {
      if (!r && t && u) {
        n = "appear";
      }
      if (r && t && s) {
        n = "enter";
      }
      if (r && !t && f || !r && h && !t && f) {
        n = "leave";
      }
      if (n) {
        R(n);
        Z();
      }
    }
  }, [t]);
  o.useEffect(function () {
    if ("appear" === F && !u || "enter" === F && !s || "leave" === F && !f) {
      R("none");
    }
  }, [u, s, f]);
  o.useEffect(function () {
    return function () {
      clearTimeout(H.current);
      V.current = true;
    };
  }, []);
  o.useEffect(function () {
    if (undefined !== T && "none" === F) {
      if (!(null === O || undefined === O)) {
        O(T);
      }
    }
  }, [T, F]);
  var ae = j;
  if (q.prepare && "start" === ee) {
    ae = M.a({
      transition: "none"
    }, ae);
  }
  return [F, ee, ae, null !== T && undefined !== T ? T : t];
}
var le = function (e) {
  c.a(n, e);
  var t = u.a(n);
  function n() {
    a.a(this, n);
    return t.apply(this, arguments);
  }
  s.a(n, [{
    key: "render",
    value: function () {
      return this.props.children;
    }
  }]);
  return n;
}(o.Component);
var fe = function (e) {
  var t = e;
  function n(e) {
    return !(!e.motionName || !t);
  }
  if ("object" === l.a(e)) {
    t = e.transitionSupport;
  }
  var r = o.forwardRef(function (e, t) {
    var r = e.visible;
    var a = undefined === r || r;
    var s = e.removeOnLeave;
    var c = undefined === s || s;
    var u = e.forceRender;
    var l = e.children;
    var f = e.motionName;
    var d = e.leavedClassName;
    var h = e.eventProps;
    var p = n(e);
    var _ = o.useRef();
    var A = o.useRef();
    var g = ue(p, a, function () {
      try {
        return (e = _.current || A.current) instanceof HTMLElement ? e : v.a.findDOMNode(e);
      } catch (t) {
        return null;
      }
      var e;
    }, e);
    var m = i.a(g, 4);
    var y = m[0];
    var b = m[1];
    var w = m[2];
    var E = m[3];
    var x = o.useRef(E);
    if (E) {
      x.current = true;
    }
    var C = o.useRef(t);
    C.current = t;
    var O;
    var k = o.useCallback(function (e) {
      _.current = e;
      Q(C.current, e);
    }, []);
    var S = M.a(M.a({}, h), {}, {
      visible: a
    });
    if (l) {
      if ("none" !== y && n(e)) {
        var T;
        var B;
        if ("prepare" === b) {
          B = "prepare";
        } else {
          if (se(b)) {
            B = "active";
          } else {
            if ("start" === b) {
              B = "start";
            }
          }
        }
        O = l(M.a(M.a({}, S), {}, {
          className: L()(re(f, y), (T = {}, z.a(T, re(f, "".concat(y, "-").concat(B)), B), z.a(T, f, "string" === typeof f), T)),
          style: w
        }), k);
      } else {
        O = E ? l(M.a({}, S), k) : !c && x.current ? l(M.a(M.a({}, S), {}, {
          className: d
        }), k) : u ? l(M.a(M.a({}, S), {}, {
          style: {
            display: "none"
          }
        }), k) : null;
      }
    } else {
      O = null;
    }
    return o.createElement(le, {
      ref: A
    }, O);
  });
  r.displayName = "CSSMotion";
  return r;
}(ee);
import de = require("../54");
function he(e) {
  var t;
  t = e && "object" === l.a(e) && "key" in e ? e : {
    key: e
  };
  return M.a(M.a({}, t), {}, {
    key: String(t.key)
  });
}
function pe() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : [];
  return e.map(he);
}
function _e() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : [];
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : [];
  var n = [];
  var r = 0;
  var i = t.length;
  var o = pe(e);
  var a = pe(t);
  o.forEach(function (e) {
    for (var t = false, o = r; o < i; o += 1) {
      var s = a[o];
      if (s.key === e.key) {
        if (r < o) {
          n = n.concat(a.slice(r, o).map(function (e) {
            return M.a(M.a({}, e), {}, {
              status: "add"
            });
          }));
          r = o;
        }
        n.push(M.a(M.a({}, s), {}, {
          status: "keep"
        }));
        r += 1;
        t = true;
        break;
      }
    }
    if (!t) {
      n.push(M.a(M.a({}, e), {}, {
        status: "remove"
      }));
    }
  });
  if (r < i) {
    n = n.concat(a.slice(r).map(function (e) {
      return M.a(M.a({}, e), {}, {
        status: "add"
      });
    }));
  }
  var s = {};
  n.forEach(function (e) {
    var t = e.key;
    s[t] = (s[t] || 0) + 1;
  });
  var c = Object.keys(s).filter(function (e) {
    return s[e] > 1;
  });
  c.forEach(function (e) {
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
var Ae = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
!function (e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : fe;
  var n = function (e) {
    c.a(i, e);
    var n = u.a(i);
    function i() {
      var e;
      a.a(this, i);
      (e = n.apply(this, arguments)).state = {
        keyEntities: []
      };
      e.removeKey = function (t) {
        e.setState(function (e) {
          return {
            keyEntities: e.keyEntities.map(function (e) {
              return e.key !== t ? e : M.a(M.a({}, e), {}, {
                status: "removed"
              });
            })
          };
        });
      };
      return e;
    }
    s.a(i, [{
      key: "render",
      value: function () {
        var e = this;
        var n = this.state.keyEntities;
        var i = this.props;
        var a = i.component;
        var s = i.children;
        var c = i.onVisibleChanged;
        var u = de.a(i, ["component", "children", "onVisibleChanged"]);
        var l = a || o.Fragment;
        var f = {};
        Ae.forEach(function (e) {
          f[e] = u[e];
          delete u[e];
        });
        delete u.keys;
        return o.createElement(l, u, n.map(function (n) {
          var i = n.status;
          var a = de.a(n, ["status"]);
          var u = "add" === i || "keep" === i;
          return o.createElement(t, r.a({}, f, {
            key: a.key,
            visible: u,
            eventProps: a,
            onVisibleChanged: function (t) {
              if (!(null === c || undefined === c)) {
                c(t, {
                  key: a.key
                });
              }
              if (!t) {
                e.removeKey(a.key);
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
        var i = pe(n);
        return {
          keyEntities: _e(r, i).filter(function (e) {
            var t = r.find(function (t) {
              var n = t.key;
              return e.key === n;
            });
            return !t || "removed" !== t.status || "remove" !== e.status;
          })
        };
      }
    }]);
    return i;
  }(o.Component);
  n.defaultProps = {
    component: "div"
  };
}(ee);
var ge = fe;
function ve(e) {
  var t = e.prefixCls;
  var n = e.style;
  var i = e.visible;
  var a = e.maskProps;
  var s = e.motionName;
  return o.createElement(ge, {
    key: "mask",
    visible: i,
    motionName: s,
    leavedClassName: "".concat(t, "-mask-hidden")
  }, function (e) {
    var i = e.className;
    var s = e.style;
    return o.createElement("div", r.a({
      style: M.a(M.a({}, s), n),
      className: L()("".concat(t, "-mask"), i)
    }, a));
  });
}
function me(e, t, n) {
  var r = t;
  if (!r && n) {
    r = "".concat(e, "-").concat(n);
  }
  return r;
}
var ye = -1;
function be(e, t) {
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
var we = o.memo(function (e) {
  return e.children;
}, function (e, t) {
  return !t.shouldUpdate;
});
var Ee = {
  width: 0,
  height: 0,
  overflow: "hidden",
  outline: "none"
};
var xe = o.forwardRef(function (e, t) {
  var n = e.closable;
  var a = e.prefixCls;
  var s = e.width;
  var c = e.height;
  var u = e.footer;
  var l = e.title;
  var f = e.closeIcon;
  var d = e.style;
  var h = e.className;
  var p = e.visible;
  var _ = e.forceRender;
  var A = e.bodyStyle;
  var g = e.bodyProps;
  var v = e.children;
  var m = e.destroyOnClose;
  var y = e.modalRender;
  var b = e.motionName;
  var w = e.ariaId;
  var E = e.onClose;
  var x = e.onVisibleChanged;
  var C = e.onMouseDown;
  var O = e.onMouseUp;
  var k = e.mousePosition;
  var S = o.useRef();
  var T = o.useRef();
  var B = o.useRef();
  o.useImperativeHandle(t, function () {
    return {
      focus: function () {
        var e;
        if (!(null === (e = S.current) || undefined === e)) {
          e.focus();
        }
      },
      changeActive: function (e) {
        var t = document.activeElement;
        if (e && t === T.current) {
          S.current.focus();
        } else {
          if (!(e || t !== S.current)) {
            T.current.focus();
          }
        }
      }
    };
  });
  var D;
  var I;
  var F;
  var R = o.useState();
  var P = i.a(R, 2);
  var N = P[0];
  var j = P[1];
  var U = {};
  function H() {
    var e = function (e) {
      var t = e.getBoundingClientRect();
      var n = {
        left: t.left,
        top: t.top
      };
      var r = e.ownerDocument;
      var i = r.defaultView || r.parentWindow;
      n.left += be(i);
      n.top += be(i, true);
      return n;
    }(B.current);
    j(k ? "".concat(k.x - e.left, "px ").concat(k.y - e.top, "px") : "");
  }
  if (undefined !== s) {
    U.width = s;
  }
  if (undefined !== c) {
    U.height = c;
  }
  if (N) {
    U.transformOrigin = N;
  }
  if (u) {
    D = o.createElement("div", {
      className: "".concat(a, "-footer")
    }, u);
  }
  if (l) {
    I = o.createElement("div", {
      className: "".concat(a, "-header")
    }, o.createElement("div", {
      className: "".concat(a, "-title"),
      id: w
    }, l));
  }
  if (n) {
    F = o.createElement("button", {
      type: "button",
      onClick: E,
      "aria-label": "Close",
      className: "".concat(a, "-close")
    }, f || o.createElement("span", {
      className: "".concat(a, "-close-x")
    }));
  }
  var V = o.createElement("div", {
    className: "".concat(a, "-content")
  }, F, I, o.createElement("div", r.a({
    className: "".concat(a, "-body"),
    style: A
  }, g), v), D);
  return o.createElement(ge, {
    visible: p,
    onVisibleChanged: x,
    onAppearPrepare: H,
    onEnterPrepare: H,
    forceRender: _,
    motionName: b,
    removeOnLeave: m,
    ref: B
  }, function (e, t) {
    var n = e.className;
    var r = e.style;
    return o.createElement("div", {
      key: "dialog-element",
      role: "document",
      ref: t,
      style: M.a(M.a(M.a({}, r), d), U),
      className: L()(a, h, n),
      onMouseDown: C,
      onMouseUp: O
    }, o.createElement("div", {
      tabIndex: 0,
      ref: S,
      style: Ee,
      "aria-hidden": "true"
    }), o.createElement(we, {
      shouldUpdate: p || _
    }, y ? y(V) : V), o.createElement("div", {
      tabIndex: 0,
      ref: T,
      style: Ee,
      "aria-hidden": "true"
    }));
  });
});
xe.displayName = "Content";
var Ce = xe;
function Oe(e) {
  var t = e.prefixCls;
  var n = undefined === t ? "rc-dialog" : t;
  var a = e.zIndex;
  var s = e.visible;
  var c = undefined !== s && s;
  var u = e.keyboard;
  var l = undefined === u || u;
  var f = e.focusTriggerAfterClose;
  var d = undefined === f || f;
  var h = e.scrollLocker;
  var p = e.title;
  var _ = e.wrapStyle;
  var A = e.wrapClassName;
  var g = e.wrapProps;
  var v = e.onClose;
  var m = e.afterClose;
  var y = e.transitionName;
  var b = e.animation;
  var w = e.closable;
  var E = undefined === w || w;
  var x = e.mask;
  var C = undefined === x || x;
  var O = e.maskTransitionName;
  var k = e.maskAnimation;
  var S = e.maskClosable;
  var T = undefined === S || S;
  var B = e.maskStyle;
  var D = e.maskProps;
  var I = o.useRef();
  var F = o.useRef();
  var R = o.useRef();
  var P = o.useState(c);
  var N = i.a(P, 2);
  var j = N[0];
  var U = N[1];
  var z = o.useRef();
  function Q(e) {
    if (!(null === v || undefined === v)) {
      v(e);
    }
  }
  if (!z.current) {
    z.current = "rcDialogTitle".concat(ye += 1);
  }
  var W = o.useRef(false);
  var K = o.useRef();
  var X = null;
  if (T) {
    X = function (e) {
      if (W.current) {
        W.current = false;
      } else {
        if (F.current === e.target) {
          Q(e);
        }
      }
    };
  }
  o.useEffect(function () {
    if (c) {
      U(true);
    }
    return function () {};
  }, [c]);
  o.useEffect(function () {
    return function () {
      clearTimeout(K.current);
    };
  }, []);
  o.useEffect(function () {
    return j ? (null === h || undefined === h || h.lock(), null === h || undefined === h ? undefined : h.unLock) : function () {};
  }, [j, h]);
  return o.createElement("div", r.a({
    className: "".concat(n, "-root")
  }, function (e) {
    var t;
    var n = arguments.length > 1 && undefined !== arguments[1] && arguments[1];
    t = false === n ? {
      aria: true,
      data: true,
      attr: true
    } : true === n ? {
      aria: true
    } : M.a({}, n);
    var r = {};
    Object.keys(e).forEach(function (n) {
      if (t.aria && ("role" === n || G(n, "aria-")) || t.data && G(n, "data-") || t.attr && V.includes(n)) {
        r[n] = e[n];
      }
    });
    return r;
  }(e, {
    data: true
  })), o.createElement(ve, {
    prefixCls: n,
    visible: C && c,
    motionName: me(n, O, k),
    style: M.a({
      zIndex: a
    }, B),
    maskProps: D
  }), o.createElement("div", r.a({
    tabIndex: -1,
    onKeyDown: function (e) {
      if (l && e.keyCode === H.ESC) {
        e.stopPropagation();
        return void Q(e);
      }
      if (c && e.keyCode === H.TAB) {
        R.current.changeActive(!e.shiftKey);
      }
    },
    className: L()("".concat(n, "-wrap"), A),
    ref: F,
    onClick: X,
    role: "dialog",
    "aria-labelledby": p ? z.current : null,
    style: M.a(M.a({
      zIndex: a
    }, _), {}, {
      display: j ? null : "none"
    })
  }, g), o.createElement(Ce, r.a({}, e, {
    onMouseDown: function () {
      clearTimeout(K.current);
      W.current = true;
    },
    onMouseUp: function () {
      K.current = setTimeout(function () {
        W.current = false;
      });
    },
    ref: R,
    closable: E,
    ariaId: z.current,
    prefixCls: n,
    visible: c,
    onClose: Q,
    onVisibleChanged: function (e) {
      if (e) {
        var t;
        if (!function (e, t) {
          return !!e && e.contains(t);
        }(F.current, document.activeElement)) {
          I.current = document.activeElement;
          if (!(null === (t = R.current) || undefined === t)) {
            t.focus();
          }
        }
      } else {
        U(false);
        if (C && I.current && d) {
          try {
            I.current.focus({
              preventScroll: true
            });
          } catch (n) {}
          I.current = null;
        }
        if (j) {
          if (!(null === m || undefined === m)) {
            m();
          }
        }
      }
    },
    motionName: me(n, y, b)
  }))));
}
var ke = function (e) {
  var t = e.visible;
  var n = e.getContainer;
  var a = e.forceRender;
  var s = e.destroyOnClose;
  var c = undefined !== s && s;
  var u = e.afterClose;
  var l = o.useState(t);
  var f = i.a(l, 2);
  var d = f[0];
  var h = f[1];
  o.useEffect(function () {
    if (t) {
      h(true);
    }
  }, [t]);
  return false === n ? o.createElement(Oe, r.a({}, e, {
    getOpenCount: function () {
      return 2;
    }
  })) : a || !c || d ? o.createElement(N, {
    visible: t,
    forceRender: a,
    getContainer: n
  }, function (t) {
    return o.createElement(Oe, r.a({}, e, {
      destroyOnClose: c,
      afterClose: function () {
        if (!(null === u || undefined === u)) {
          u();
        }
        h(false);
      }
    }, t));
  }) : null;
};
ke.displayName = "Dialog";
var Se = ke;
export { Se as a };
export default Se;