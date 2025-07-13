"use strict";

Object.defineProperty(t, "DraggableCore", {
  enumerable: !0,
  get: function () {
    return u.default;
  }
});
var r = function (e) {
  if (e && e.__esModule) {
    return e;
  }
  if (null === e || "object" !== h(e) && "function" !== typeof e) {
    return {
      default: e
    };
  }
  var t = f();
  if (t && t.has(e)) {
    return t.get(e);
  }
  var n = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
    var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
    if (i && (i.get || i.set)) {
      Object.defineProperty(n, o, i);
    } else {
      n[o] = e[o];
    }
  }
  n.default = e;
  if (t) {
    t.set(e, n);
  }
  return n;
}(require("../../0/index"));
var o = p(require("../../50/index"));
var i = p(require("../../75/index"));
var a = p(require("../../8"));
import * as s from "./1048/index";
import * as c from "./1186";
import * as l from "./927";
var u = p(require("./1509"));
var d = p(require("./1187"));
function p(e) {
  return e && e.__esModule ? e : {
    default: e
  };
}
function f() {
  if ("function" !== typeof WeakMap) {
    return null;
  }
  var e = new WeakMap();
  f = function () {
    return e;
  };
  return e;
}
function h(e) {
  return (h = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  })(e);
}
function m() {
  return (m = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
        e[r] = n[r];
      }
    }
    return e;
  }).apply(this, arguments);
}
function g(e, t) {
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
function _(e, t) {
  return function (e) {
    if (Array.isArray(e)) {
      return e;
    }
  }(e) || function (e, t) {
    if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(e))) {
      return;
    }
    var n = [];
    var r = !0;
    var o = !1;
    var i = void 0;
    try {
      for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) {
        ;
      }
    } catch (c) {
      o = !0;
      i = c;
    } finally {
      try {
        if (!(r || null == s.return)) {
          s.return();
        }
      } finally {
        if (o) {
          throw i;
        }
      }
    }
    return n;
  }(e, t) || function (e, t) {
    if (!e) {
      return;
    }
    if ("string" === typeof e) {
      return v(e, t);
    }
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if ("Object" === n && e.constructor) {
      n = e.constructor.name;
    }
    if ("Map" === n || "Set" === n) {
      return Array.from(e);
    }
    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
      return v(e, t);
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function v(e, t) {
  if (null == t || t > e.length) {
    t = e.length;
  }
  for (var n = 0, r = new Array(t); n < t; n++) {
    r[n] = e[n];
  }
  return r;
}
function b(e, t) {
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
function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    if (t % 2) {
      b(Object(n), !0).forEach(function (t) {
        A(e, t, n[t]);
      });
    } else {
      if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
      } else {
        b(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }
    }
  }
  return e;
}
function E(e, t) {
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
function O(e, t, n) {
  if (t) {
    E(e.prototype, t);
  }
  if (n) {
    E(e, n);
  }
  return e;
}
function w(e, t) {
  return (w = Object.setPrototypeOf || function (e, t) {
    e.__proto__ = t;
    return e;
  })(e, t);
}
function C(e) {
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
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return !0;
    } catch (e) {
      return !1;
    }
  }();
  return function () {
    var n;
    var r = I(e);
    if (t) {
      var o = I(this).constructor;
      n = Reflect.construct(r, arguments, o);
    } else {
      n = r.apply(this, arguments);
    }
    return T(this, n);
  };
}
function T(e, t) {
  return !t || "object" !== h(t) && "function" !== typeof t ? S(e) : t;
}
function S(e) {
  if (void 0 === e) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return e;
}
function I(e) {
  return (I = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  })(e);
}
function A(e, t, n) {
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
var j = function (e) {
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
      w(e, t);
    }
  }(n, e);
  var t = C(n);
  function n(e) {
    var r;
    (function (e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    })(this, n);
    A(S(r = t.call(this, e)), "onDragStart", function (e, t) {
      if ((0, d.default)("Draggable: onDragStart: %j", t), !1 === r.props.onStart(e, (0, c.createDraggableData)(S(r), t))) {
        return !1;
      }
      r.setState({
        dragging: !0,
        dragged: !0
      });
    });
    A(S(r), "onDrag", function (e, t) {
      if (!r.state.dragging) {
        return !1;
      }
      (0, d.default)("Draggable: onDrag: %j", t);
      var n = (0, c.createDraggableData)(S(r), t);
      var o = {
        x: n.x,
        y: n.y
      };
      if (r.props.bounds) {
        var i = o.x;
        var a = o.y;
        o.x += r.state.slackX;
        o.y += r.state.slackY;
        var s = _((0, c.getBoundPosition)(S(r), o.x, o.y), 2);
        var l = s[0];
        var u = s[1];
        o.x = l;
        o.y = u;
        o.slackX = r.state.slackX + (i - o.x);
        o.slackY = r.state.slackY + (a - o.y);
        n.x = o.x;
        n.y = o.y;
        n.deltaX = o.x - r.state.x;
        n.deltaY = o.y - r.state.y;
      }
      if (!1 === r.props.onDrag(e, n)) {
        return !1;
      }
      r.setState(o);
    });
    A(S(r), "onDragStop", function (e, t) {
      if (!r.state.dragging) {
        return !1;
      }
      if (!1 === r.props.onStop(e, (0, c.createDraggableData)(S(r), t))) {
        return !1;
      }
      (0, d.default)("Draggable: onDragStop: %j", t);
      var n = {
        dragging: !1,
        slackX: 0,
        slackY: 0
      };
      if (Boolean(r.props.position)) {
        var o = r.props.position;
        var i = o.x;
        var a = o.y;
        n.x = i;
        n.y = a;
      }
      r.setState(n);
    });
    r.state = {
      dragging: !1,
      dragged: !1,
      x: e.position ? e.position.x : e.defaultPosition.x,
      y: e.position ? e.position.y : e.defaultPosition.y,
      prevPropsPosition: y({}, e.position),
      slackX: 0,
      slackY: 0,
      isElementSVG: !1
    };
    if (!(!e.position || e.onDrag || e.onStop)) {
      console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
    }
    return r;
  }
  O(n, null, [{
    key: "getDerivedStateFromProps",
    value: function (e, t) {
      var n = e.position;
      var r = t.prevPropsPosition;
      return !n || r && n.x === r.x && n.y === r.y ? null : ((0, d.default)("Draggable: getDerivedStateFromProps %j", {
        position: n,
        prevPropsPosition: r
      }), {
        x: n.x,
        y: n.y,
        prevPropsPosition: y({}, n)
      });
    }
  }]);
  O(n, [{
    key: "componentDidMount",
    value: function () {
      if ("undefined" !== typeof window.SVGElement && this.findDOMNode() instanceof window.SVGElement) {
        this.setState({
          isElementSVG: !0
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function () {
      this.setState({
        dragging: !1
      });
    }
  }, {
    key: "findDOMNode",
    value: function () {
      return this.props.nodeRef ? this.props.nodeRef.current : i.default.findDOMNode(this);
    }
  }, {
    key: "render",
    value: function () {
      var e;
      var t = this.props;
      var n = (t.axis, t.bounds, t.children);
      var o = t.defaultPosition;
      var i = t.defaultClassName;
      var l = t.defaultClassNameDragging;
      var d = t.defaultClassNameDragged;
      var p = t.position;
      var f = t.positionOffset;
      var h = (t.scale, g(t, ["axis", "bounds", "children", "defaultPosition", "defaultClassName", "defaultClassNameDragging", "defaultClassNameDragged", "position", "positionOffset", "scale"]));
      var _ = {};
      var v = null;
      var b = !Boolean(p) || this.state.dragging;
      var E = p || o;
      var O = {
        x: (0, c.canDragX)(this) && b ? this.state.x : E.x,
        y: (0, c.canDragY)(this) && b ? this.state.y : E.y
      };
      if (this.state.isElementSVG) {
        v = (0, s.createSVGTransform)(O, f);
      } else {
        _ = (0, s.createCSSTransform)(O, f);
      }
      var w = (0, a.default)(n.props.className || "", i, (A(e = {}, l, this.state.dragging), A(e, d, this.state.dragged), e));
      return r.createElement(u.default, m({}, h, {
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop
      }), r.cloneElement(r.Children.only(n), {
        className: w,
        style: y(y({}, n.props.style), _),
        transform: v
      }));
    }
  }]);
  return n;
}(r.Component);
export default j;
A(j, "displayName", "Draggable");
A(j, "propTypes", y(y({}, u.default.propTypes), {}, {
  axis: o.default.oneOf(["both", "x", "y", "none"]),
  bounds: o.default.oneOfType([o.default.shape({
    left: o.default.number,
    right: o.default.number,
    top: o.default.number,
    bottom: o.default.number
  }), o.default.string, o.default.oneOf([!1])]),
  defaultClassName: o.default.string,
  defaultClassNameDragging: o.default.string,
  defaultClassNameDragged: o.default.string,
  defaultPosition: o.default.shape({
    x: o.default.number,
    y: o.default.number
  }),
  positionOffset: o.default.shape({
    x: o.default.oneOfType([o.default.number, o.default.string]),
    y: o.default.oneOfType([o.default.number, o.default.string])
  }),
  position: o.default.shape({
    x: o.default.number,
    y: o.default.number
  }),
  className: l.dontSetMe,
  style: l.dontSetMe,
  transform: l.dontSetMe
}));
A(j, "defaultProps", y(y({}, u.default.defaultProps), {}, {
  axis: "both",
  bounds: !1,
  defaultClassName: "react-draggable",
  defaultClassNameDragging: "react-draggable-dragging",
  defaultClassNameDragged: "react-draggable-dragged",
  defaultPosition: {
    x: 0,
    y: 0
  },
  position: null,
  scale: 1
}));