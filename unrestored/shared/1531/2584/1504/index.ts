"use strict";

var r = require("../0/index");
var o = require("../8");
var i = function __importDefault(module) {
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
}(o);
var a = require("./788");
function s(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    if (t) {
      r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      });
    }
    n.push.apply(n, r);
  }
  return n;
}
function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    if (t % 2) {
      s(Object(n), !0).forEach(function (t) {
        l(e, t, n[t]);
      });
    } else {
      if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
      } else {
        s(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }
    }
  }
  return e;
}
function l(e, t, n) {
  if (t in e) {
    Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    });
  } else {
    e[t] = n;
  }
  return e;
}
var u = r.forwardRef(function (e, t) {
  var n = e.height;
  var o = e.offset;
  var s = e.children;
  var u = e.prefixCls;
  var d = e.onInnerResize;
  var p = {};
  var f = {
    display: "flex",
    flexDirection: "column"
  };
  if (void 0 !== o) {
    p = {
      height: n,
      position: "relative",
      overflow: "hidden"
    };
    f = c(c({}, f), {}, {
      transform: "translateY(".concat(o, "px)"),
      position: "absolute",
      left: 0,
      right: 0,
      top: 0
    });
  }
  return r.createElement("div", {
    style: p
  }, r.createElement(a.a, {
    onResize: function (e) {
      if (e.offsetHeight && d) {
        d();
      }
    }
  }, r.createElement("div", {
    style: f,
    className: i()(l({}, "".concat(u, "-holder-inner"), u)),
    ref: t
  }, s)));
});
u.displayName = "Filler";
var d = u;
var p = require("./228");
function f(e) {
  return (f = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  })(e);
}
function h(e, t, n) {
  if (t in e) {
    Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    });
  } else {
    e[t] = n;
  }
  return e;
}
function m(e, t) {
  if (!(e instanceof t)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function g(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1;
    r.configurable = !0;
    if ("value" in r) {
      r.writable = !0;
    }
    Object.defineProperty(e, r.key, r);
  }
}
function _(e, t) {
  return (_ = Object.setPrototypeOf || function (e, t) {
    e.__proto__ = t;
    return e;
  })(e, t);
}
function v(e) {
  var t = function () {
    if ("undefined" === typeof Reflect || !Reflect.construct) {
      return !1;
    }
    if (Reflect.construct.sham) {
      return !1;
    }
    if ("function" === typeof Proxy) {
      return !0;
    }
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return !0;
    } catch (e) {
      return !1;
    }
  }();
  return function () {
    var n;
    var r = y(e);
    if (t) {
      var o = y(this).constructor;
      n = Reflect.construct(r, arguments, o);
    } else {
      n = r.apply(this, arguments);
    }
    return b(this, n);
  };
}
function b(e, t) {
  if (t && ("object" === f(t) || "function" === typeof t)) {
    return t;
  }
  if (void 0 !== t) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return function (e) {
    if (void 0 === e) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return e;
  }(e);
}
function y(e) {
  return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  })(e);
}
function E(e) {
  return "touches" in e ? e.touches[0].pageY : e.pageY;
}
var O = function (e) {
  !function (e, t) {
    if ("function" !== typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function");
    }
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        writable: !0,
        configurable: !0
      }
    });
    if (t) {
      _(e, t);
    }
  }(s, e);
  var t;
  var n;
  var o;
  var a = v(s);
  function s() {
    var e;
    m(this, s);
    for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) {
      n[o] = arguments[o];
    }
    (e = a.call.apply(a, [this].concat(n))).moveRaf = null;
    e.scrollbarRef = r.createRef();
    e.thumbRef = r.createRef();
    e.visibleTimeout = null;
    e.state = {
      dragging: !1,
      pageY: null,
      startTop: null,
      visible: !1
    };
    e.delayHidden = function () {
      clearTimeout(e.visibleTimeout);
      e.setState({
        visible: !0
      });
      e.visibleTimeout = setTimeout(function () {
        e.setState({
          visible: !1
        });
      }, 2e3);
    };
    e.onScrollbarTouchStart = function (e) {
      e.preventDefault();
    };
    e.onContainerMouseDown = function (e) {
      e.stopPropagation();
      e.preventDefault();
    };
    e.patchEvents = function () {
      window.addEventListener("mousemove", e.onMouseMove);
      window.addEventListener("mouseup", e.onMouseUp);
      e.thumbRef.current.addEventListener("touchmove", e.onMouseMove);
      e.thumbRef.current.addEventListener("touchend", e.onMouseUp);
    };
    e.removeEvents = function () {
      window.removeEventListener("mousemove", e.onMouseMove);
      window.removeEventListener("mouseup", e.onMouseUp);
      e.scrollbarRef.current.removeEventListener("touchstart", e.onScrollbarTouchStart);
      e.thumbRef.current.removeEventListener("touchstart", e.onMouseDown);
      e.thumbRef.current.removeEventListener("touchmove", e.onMouseMove);
      e.thumbRef.current.removeEventListener("touchend", e.onMouseUp);
      p.a.cancel(e.moveRaf);
    };
    e.onMouseDown = function (t) {
      var n = e.props.onStartMove;
      e.setState({
        dragging: !0,
        pageY: E(t),
        startTop: e.getTop()
      });
      n();
      e.patchEvents();
      t.stopPropagation();
      t.preventDefault();
    };
    e.onMouseMove = function (t) {
      var n = e.state;
      var r = n.dragging;
      var o = n.pageY;
      var i = n.startTop;
      var a = e.props.onScroll;
      p.a.cancel(e.moveRaf);
      if (r) {
        var s = i + (E(t) - o);
        var c = e.getEnableScrollRange();
        var l = e.getEnableHeightRange();
        var u = l ? s / l : 0;
        var d = Math.ceil(u * c);
        e.moveRaf = Object(p.a)(function () {
          a(d);
        });
      }
    };
    e.onMouseUp = function () {
      var t = e.props.onStopMove;
      e.setState({
        dragging: !1
      });
      t();
      e.removeEvents();
    };
    e.getSpinHeight = function () {
      var t = e.props;
      var n = t.height;
      var r = n / t.count * 10;
      r = Math.max(r, 20);
      r = Math.min(r, n / 2);
      return Math.floor(r);
    };
    e.getEnableScrollRange = function () {
      var t = e.props;
      return t.scrollHeight - t.height || 0;
    };
    e.getEnableHeightRange = function () {
      return e.props.height - e.getSpinHeight() || 0;
    };
    e.getTop = function () {
      var t = e.props.scrollTop;
      var n = e.getEnableScrollRange();
      var r = e.getEnableHeightRange();
      return 0 === t || 0 === n ? 0 : t / n * r;
    };
    e.showScroll = function () {
      var t = e.props;
      var n = t.height;
      return t.scrollHeight > n;
    };
    return e;
  }
  t = s;
  if (n = [{
    key: "componentDidMount",
    value: function () {
      this.scrollbarRef.current.addEventListener("touchstart", this.onScrollbarTouchStart);
      this.thumbRef.current.addEventListener("touchstart", this.onMouseDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function (e) {
      if (e.scrollTop !== this.props.scrollTop) {
        this.delayHidden();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function () {
      this.removeEvents();
      clearTimeout(this.visibleTimeout);
    }
  }, {
    key: "render",
    value: function () {
      var e = this.state;
      var t = e.dragging;
      var n = e.visible;
      var o = this.props.prefixCls;
      var a = this.getSpinHeight();
      var s = this.getTop();
      var c = this.showScroll();
      var l = c && n;
      return r.createElement("div", {
        ref: this.scrollbarRef,
        className: i()("".concat(o, "-scrollbar"), h({}, "".concat(o, "-scrollbar-show"), c)),
        style: {
          width: 8,
          top: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: l ? null : "none"
        },
        onMouseDown: this.onContainerMouseDown,
        onMouseMove: this.delayHidden
      }, r.createElement("div", {
        ref: this.thumbRef,
        className: i()("".concat(o, "-scrollbar-thumb"), h({}, "".concat(o, "-scrollbar-thumb-moving"), t)),
        style: {
          width: "100%",
          height: a,
          top: s,
          left: 0,
          position: "absolute",
          background: "rgba(0, 0, 0, 0.5)",
          borderRadius: 99,
          cursor: "pointer",
          userSelect: "none"
        },
        onMouseDown: this.onMouseDown
      }));
    }
  }]) {
    g(t.prototype, n);
  }
  if (o) {
    g(t, o);
  }
  return s;
}(r.Component);
function w(e) {
  var t = e.children;
  var n = e.setRef;
  var o = r.useCallback(function (e) {
    n(e);
  }, []);
  return r.cloneElement(t, {
    ref: o
  });
}
var C = require("./478");
function T(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1;
    r.configurable = !0;
    if ("value" in r) {
      r.writable = !0;
    }
    Object.defineProperty(e, r.key, r);
  }
}
var S = function () {
  function e() {
    !function (e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }(this, e);
    this.maps = void 0;
    this.maps = Object.create(null);
  }
  var t;
  var n;
  var r;
  t = e;
  if (n = [{
    key: "set",
    value: function (e, t) {
      this.maps[e] = t;
    }
  }, {
    key: "get",
    value: function (e) {
      return this.maps[e];
    }
  }]) {
    T(t.prototype, n);
  }
  if (r) {
    T(t, r);
  }
  return e;
}();
function I(e, t) {
  return function (e) {
    if (Array.isArray(e)) {
      return e;
    }
  }(e) || function (e, t) {
    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (null == n) {
      return;
    }
    var r;
    var o;
    var i = [];
    var a = !0;
    var s = !1;
    try {
      for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0) {
        ;
      }
    } catch (c) {
      s = !0;
      o = c;
    } finally {
      try {
        if (!(a || null == n.return)) {
          n.return();
        }
      } finally {
        if (s) {
          throw o;
        }
      }
    }
    return i;
  }(e, t) || function (e, t) {
    if (!e) {
      return;
    }
    if ("string" === typeof e) {
      return A(e, t);
    }
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if ("Object" === n && e.constructor) {
      n = e.constructor.name;
    }
    if ("Map" === n || "Set" === n) {
      return Array.from(e);
    }
    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
      return A(e, t);
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function A(e, t) {
  if (null == t || t > e.length) {
    t = e.length;
  }
  for (var n = 0, r = new Array(t); n < t; n++) {
    r[n] = e[n];
  }
  return r;
}
function j(e) {
  return (j = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  })(e);
}
function N(e, t) {
  return function (e) {
    if (Array.isArray(e)) {
      return e;
    }
  }(e) || function (e, t) {
    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (null == n) {
      return;
    }
    var r;
    var o;
    var i = [];
    var a = !0;
    var s = !1;
    try {
      for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0) {
        ;
      }
    } catch (c) {
      s = !0;
      o = c;
    } finally {
      try {
        if (!(a || null == n.return)) {
          n.return();
        }
      } finally {
        if (s) {
          throw o;
        }
      }
    }
    return i;
  }(e, t) || function (e, t) {
    if (!e) {
      return;
    }
    if ("string" === typeof e) {
      return R(e, t);
    }
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if ("Object" === n && e.constructor) {
      n = e.constructor.name;
    }
    if ("Map" === n || "Set" === n) {
      return Array.from(e);
    }
    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
      return R(e, t);
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function R(e, t) {
  if (null == t || t > e.length) {
    t = e.length;
  }
  for (var n = 0, r = new Array(t); n < t; n++) {
    r[n] = e[n];
  }
  return r;
}
function k(e, t, n) {
  var o = N(r.useState(e), 2);
  var i = o[0];
  var a = o[1];
  var s = N(r.useState(null), 2);
  var c = s[0];
  var l = s[1];
  r.useEffect(function () {
    var r = function (e, t, n) {
      var r;
      var o;
      var i = e.length;
      var a = t.length;
      if (0 === i && 0 === a) {
        return null;
      }
      if (i < a) {
        r = e;
        o = t;
      } else {
        r = t;
        o = e;
      }
      var s = {
        __EMPTY_ITEM__: !0
      };
      function c(e) {
        return void 0 !== e ? n(e) : s;
      }
      for (var l = null, u = 1 !== Math.abs(i - a), d = 0; d < o.length; d += 1) {
        var p = c(r[d]);
        if (p !== c(o[d])) {
          l = d;
          u = u || p !== c(o[d + 1]);
          break;
        }
      }
      return null === l ? null : {
        index: l,
        multiple: u
      };
    }(i || [], e || [], t);
    if (void 0 !== (null === r || void 0 === r ? void 0 : r.index)) {
      if (!(null === n || void 0 === n)) {
        n(r.index);
      }
      l(e[r.index]);
    }
    a(e);
  }, [e]);
  return [c];
}
function x(e) {
  return (x = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  })(e);
}
var D = "object" === ("undefined" === typeof navigator ? "undefined" : x(navigator)) && /Firefox/i.test(navigator.userAgent);
var M = function (e, t) {
  var n = Object(r.useRef)(!1);
  var o = Object(r.useRef)(null);
  function i() {
    clearTimeout(o.current);
    n.current = !0;
    o.current = setTimeout(function () {
      n.current = !1;
    }, 50);
  }
  var a = Object(r.useRef)({
    top: e,
    bottom: t
  });
  a.current.top = e;
  a.current.bottom = t;
  return function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    var r = e < 0 && a.current.top || e > 0 && a.current.bottom;
    if (t && r) {
      clearTimeout(o.current);
      n.current = !1;
    } else {
      if (!(r && !n.current)) {
        i();
      }
    }
    return !n.current && r;
  };
};
var L = ["prefixCls", "className", "height", "itemHeight", "fullHeight", "style", "data", "children", "itemKey", "virtual", "component", "onScroll", "onVisibleChange"];
function P() {
  return (P = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
        e[r] = n[r];
      }
    }
    return e;
  }).apply(this, arguments);
}
function B(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    if (t) {
      r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      });
    }
    n.push.apply(n, r);
  }
  return n;
}
function F(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    if (t % 2) {
      B(Object(n), !0).forEach(function (t) {
        G(e, t, n[t]);
      });
    } else {
      if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
      } else {
        B(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }
    }
  }
  return e;
}
function G(e, t, n) {
  if (t in e) {
    Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    });
  } else {
    e[t] = n;
  }
  return e;
}
function U(e, t) {
  return function (e) {
    if (Array.isArray(e)) {
      return e;
    }
  }(e) || function (e, t) {
    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (null == n) {
      return;
    }
    var r;
    var o;
    var i = [];
    var a = !0;
    var s = !1;
    try {
      for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0) {
        ;
      }
    } catch (c) {
      s = !0;
      o = c;
    } finally {
      try {
        if (!(a || null == n.return)) {
          n.return();
        }
      } finally {
        if (s) {
          throw o;
        }
      }
    }
    return i;
  }(e, t) || function (e, t) {
    if (!e) {
      return;
    }
    if ("string" === typeof e) {
      return W(e, t);
    }
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if ("Object" === n && e.constructor) {
      n = e.constructor.name;
    }
    if ("Map" === n || "Set" === n) {
      return Array.from(e);
    }
    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
      return W(e, t);
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function W(e, t) {
  if (null == t || t > e.length) {
    t = e.length;
  }
  for (var n = 0, r = new Array(t); n < t; n++) {
    r[n] = e[n];
  }
  return r;
}
function H(e, t) {
  if (null == e) {
    return {};
  }
  var n;
  var r;
  var o = function (e, t) {
    if (null == e) {
      return {};
    }
    var n;
    var r;
    var o = {};
    var i = Object.keys(e);
    for (r = 0; r < i.length; r++) {
      n = i[r];
      if (!(t.indexOf(n) >= 0)) {
        o[n] = e[n];
      }
    }
    return o;
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) {
      n = i[r];
      if (!(t.indexOf(n) >= 0)) {
        if (Object.prototype.propertyIsEnumerable.call(e, n)) {
          o[n] = e[n];
        }
      }
    }
  }
  return o;
}
var V = [];
var z = {
  overflowY: "auto",
  overflowAnchor: "none"
};
function Y(e, t) {
  var n = e.prefixCls;
  var o = void 0 === n ? "rc-virtual-list" : n;
  var a = e.className;
  var s = e.height;
  var c = e.itemHeight;
  var l = e.fullHeight;
  var u = void 0 === l || l;
  var f = e.style;
  var h = e.data;
  var m = e.children;
  var g = e.itemKey;
  var _ = e.virtual;
  var v = e.component;
  var b = void 0 === v ? "div" : v;
  var y = e.onScroll;
  var E = e.onVisibleChange;
  var T = H(e, L);
  var A = !(!1 === _ || !s || !c);
  var N = A && h && c * h.length > s;
  var R = U(Object(r.useState)(0), 2);
  var x = R[0];
  var B = R[1];
  var W = U(Object(r.useState)(!1), 2);
  var Y = W[0];
  var K = W[1];
  var q = i()(o, a);
  var X = h || V;
  var Q = Object(r.useRef)();
  var Z = Object(r.useRef)();
  var J = Object(r.useRef)();
  var $ = r.useCallback(function (e) {
    return "function" === typeof g ? g(e) : null === e || void 0 === e ? void 0 : e[g];
  }, [g]);
  var ee = {
    getKey: $
  };
  function te(e) {
    B(function (t) {
      var n = function (e) {
        var t = e;
        if (!Number.isNaN(ge.current)) {
          t = Math.min(t, ge.current);
        }
        return t = Math.max(t, 0);
      }("function" === typeof e ? e(t) : e);
      Q.current.scrollTop = n;
      return n;
    });
  }
  var ne = Object(r.useRef)({
    start: 0,
    end: X.length
  });
  var re = Object(r.useRef)();
  var oe = U(k(X, $), 1)[0];
  re.current = oe;
  var ie = U(function (e, t, n) {
    var o = I(r.useState(0), 2);
    var i = o[0];
    var a = o[1];
    var s = Object(r.useRef)(new Map());
    var c = Object(r.useRef)(new S());
    var l = Object(r.useRef)(0);
    function u() {
      l.current += 1;
      var e = l.current;
      Promise.resolve().then(function () {
        if (e === l.current) {
          s.current.forEach(function (e, t) {
            if (e && e.offsetParent) {
              var n = Object(C.a)(e);
              var r = n.offsetHeight;
              if (c.current.get(t) !== r) {
                c.current.set(t, n.offsetHeight);
              }
            }
          });
          a(function (e) {
            return e + 1;
          });
        }
      });
    }
    return [function (r, o) {
      var i = e(r);
      var a = s.current.get(i);
      if (o) {
        s.current.set(i, o);
        u();
      } else {
        s.current.delete(i);
      }
      if (!a !== !o) {
        if (o) {
          if (!(null === t || void 0 === t)) {
            t(r);
          }
        } else {
          if (!(null === n || void 0 === n)) {
            n(r);
          }
        }
      }
    }, u, c.current, i];
  }($, null, null), 4);
  var ae = ie[0];
  var se = ie[1];
  var ce = ie[2];
  var le = ie[3];
  var ue = r.useMemo(function () {
    if (!A) {
      return {
        scrollHeight: void 0,
        start: 0,
        end: X.length - 1,
        offset: void 0
      };
    }
    var e;
    if (!N) {
      return {
        scrollHeight: (null === (e = Z.current) || void 0 === e ? void 0 : e.offsetHeight) || 0,
        start: 0,
        end: X.length - 1,
        offset: void 0
      };
    }
    for (var t, n, r, o = 0, i = X.length, a = 0; a < i; a += 1) {
      var l = X[a];
      var u = $(l);
      var d = ce.get(u);
      var p = o + (void 0 === d ? c : d);
      if (p >= x && void 0 === t) {
        t = a;
        n = o;
      }
      if (p > x + s && void 0 === r) {
        r = a;
      }
      o = p;
    }
    if (void 0 === t) {
      t = 0;
      n = 0;
    }
    if (void 0 === r) {
      r = X.length - 1;
    }
    return {
      scrollHeight: o,
      start: t,
      end: r = Math.min(r + 1, X.length),
      offset: n
    };
  }, [N, A, x, X, le, s]);
  var de = ue.scrollHeight;
  var pe = ue.start;
  var fe = ue.end;
  var he = ue.offset;
  ne.current.start = pe;
  ne.current.end = fe;
  var me = de - s;
  var ge = Object(r.useRef)(me);
  ge.current = me;
  var _e = x <= 0;
  var ve = x >= me;
  var be = M(_e, ve);
  var ye = U(function (e, t, n, o) {
    var i = Object(r.useRef)(0);
    var a = Object(r.useRef)(null);
    var s = Object(r.useRef)(null);
    var c = Object(r.useRef)(!1);
    var l = M(t, n);
    return [function (t) {
      if (e) {
        p.a.cancel(a.current);
        var n = t.deltaY;
        i.current += n;
        s.current = n;
        if (!l(n)) {
          if (!D) {
            t.preventDefault();
          }
          a.current = Object(p.a)(function () {
            var e = c.current ? 10 : 1;
            o(i.current * e);
            i.current = 0;
          });
        }
      }
    }, function (t) {
      if (e) {
        c.current = t.detail === s.current;
      }
    }];
  }(A, _e, ve, function (e) {
    te(function (t) {
      return t + e;
    });
  }), 2);
  var Ee = ye[0];
  var Oe = ye[1];
  !function (e, t, n) {
    var o;
    var i = Object(r.useRef)(!1);
    var a = Object(r.useRef)(0);
    var s = Object(r.useRef)(null);
    var c = Object(r.useRef)(null);
    var l = function (e) {
      if (i.current) {
        var t = Math.ceil(e.touches[0].pageY);
        var r = a.current - t;
        a.current = t;
        if (n(r)) {
          e.preventDefault();
        }
        clearInterval(c.current);
        c.current = setInterval(function () {
          if (!n(r *= 14 / 15, !0) || Math.abs(r) <= .1) {
            clearInterval(c.current);
          }
        }, 16);
      }
    };
    var u = function () {
      i.current = !1;
      o();
    };
    var d = function (e) {
      o();
      if (!(1 !== e.touches.length || i.current)) {
        i.current = !0;
        a.current = Math.ceil(e.touches[0].pageY);
        s.current = e.target;
        s.current.addEventListener("touchmove", l);
        s.current.addEventListener("touchend", u);
      }
    };
    o = function () {
      if (s.current) {
        s.current.removeEventListener("touchmove", l);
        s.current.removeEventListener("touchend", u);
      }
    };
    r.useLayoutEffect(function () {
      if (e) {
        t.current.addEventListener("touchstart", d);
      }
      return function () {
        t.current.removeEventListener("touchstart", d);
        o();
        clearInterval(c.current);
      };
    }, [e]);
  }(A, Q, function (e, t) {
    return !be(e, t) && (Ee({
      preventDefault: function () {},
      deltaY: e
    }), !0);
  });
  Object(r.useLayoutEffect)(function () {
    function e(e) {
      if (A) {
        e.preventDefault();
      }
    }
    Q.current.addEventListener("wheel", Ee);
    Q.current.addEventListener("DOMMouseScroll", Oe);
    Q.current.addEventListener("MozMousePixelScroll", e);
    return function () {
      Q.current.removeEventListener("wheel", Ee);
      Q.current.removeEventListener("DOMMouseScroll", Oe);
      Q.current.removeEventListener("MozMousePixelScroll", e);
    };
  }, [A]);
  var we = function (e, t, n, o, i, a, s, c) {
    var l = r.useRef();
    return function (r) {
      if (null !== r && void 0 !== r) {
        p.a.cancel(l.current);
        if ("number" === typeof r) {
          s(r);
        } else if (r && "object" === j(r)) {
          var u;
          var d = r.align;
          u = "index" in r ? r.index : t.findIndex(function (e) {
            return i(e) === r.key;
          });
          var f = r.offset;
          var h = void 0 === f ? 0 : f;
          !function r(c, f) {
            if (!(c < 0) && e.current) {
              var m = e.current.clientHeight;
              var g = !1;
              var _ = f;
              if (m) {
                for (var v = f || d, b = 0, y = 0, E = 0, O = Math.min(t.length, u), w = 0; w <= O; w += 1) {
                  var C = i(t[w]);
                  y = b;
                  var T = n.get(C);
                  b = E = y + (void 0 === T ? o : T);
                  if (w === u && void 0 === T) {
                    g = !0;
                  }
                }
                var S = null;
                switch (v) {
                  case "top":
                    S = y - h;
                    break;
                  case "bottom":
                    S = E - m + h;
                    break;
                  default:
                    var I = e.current.scrollTop;
                    if (y < I) {
                      _ = "top";
                    } else {
                      if (E > I + m) {
                        _ = "bottom";
                      }
                    }
                }
                if (null !== S && S !== e.current.scrollTop) {
                  s(S);
                }
              }
              l.current = Object(p.a)(function () {
                if (g) {
                  a();
                }
                r(c - 1, _);
              });
            }
          }(3);
        }
      } else {
        c();
      }
    };
  }(Q, X, ce, c, $, se, te, function () {
    var e;
    if (!(null === (e = J.current) || void 0 === e)) {
      e.delayHidden();
    }
  });
  r.useImperativeHandle(t, function () {
    return {
      scrollTo: we
    };
  });
  Object(r.useLayoutEffect)(function () {
    if (E) {
      var e = X.slice(pe, fe + 1);
      E(e, X);
    }
  }, [pe, fe, X]);
  var Ce = function (e, t, n, o, i, a) {
    var s = a.getKey;
    return e.slice(t, n + 1).map(function (e, n) {
      var a = i(e, t + n, {});
      var c = s(e);
      return r.createElement(w, {
        key: c,
        setRef: function (t) {
          return o(e, t);
        }
      }, a);
    });
  }(X, pe, fe, ae, m, ee);
  var Te = null;
  if (s) {
    Te = F(G({}, u ? "height" : "maxHeight", s), z);
    if (A) {
      Te.overflowY = "hidden";
      if (Y) {
        Te.pointerEvents = "none";
      }
    }
  }
  return r.createElement("div", P({
    style: F(F({}, f), {}, {
      position: "relative"
    }),
    className: q
  }, T), r.createElement(b, {
    className: "".concat(o, "-holder"),
    style: Te,
    ref: Q,
    onScroll: function (e) {
      var t = e.currentTarget.scrollTop;
      if (t !== x) {
        te(t);
      }
      if (!(null === y || void 0 === y)) {
        y(e);
      }
    }
  }, r.createElement(d, {
    prefixCls: o,
    height: de,
    offset: he,
    onInnerResize: se,
    ref: Z
  }, Ce)), A && r.createElement(O, {
    ref: J,
    prefixCls: o,
    scrollTop: x,
    height: s,
    scrollHeight: de,
    count: X.length,
    onScroll: function (e) {
      te(e);
    },
    onStartMove: function () {
      K(!0);
    },
    onStopMove: function () {
      K(!1);
    }
  }));
}
var K = r.forwardRef(Y);
K.displayName = "List";
var q = K;
export { q as a };
export default q;