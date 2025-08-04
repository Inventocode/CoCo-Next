"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.default = void 0;
var r = function (e) {
  if (e && e.__esModule) {
    return e;
  }
  if (null === e || "object" !== p(e) && "function" !== typeof e) {
    return {
      default: e
    };
  }
  var t = d();
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
}(require("react"));
var o = u(require("../../50/index"));
var i = u(require("../../75/index"));
var a = require("./1049/index");
var s = require("./1189");
var c = require("./928");
var l = u(require("./1190"));
function u(e) {
  return e && e.__esModule ? e : {
    default: e
  };
}
function d() {
  if ("function" !== typeof WeakMap) {
    return null;
  }
  var e = new WeakMap();
  d = function () {
    return e;
  };
  return e;
}
function p(e) {
  return (p = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  })(e);
}
function f(e, t) {
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
      return h(e, t);
    }
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if ("Object" === n && e.constructor) {
      n = e.constructor.name;
    }
    if ("Map" === n || "Set" === n) {
      return Array.from(e);
    }
    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
      return h(e, t);
    }
  }(e, t) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function h(e, t) {
  if (null == t || t > e.length) {
    t = e.length;
  }
  for (var n = 0, r = new Array(t); n < t; n++) {
    r[n] = e[n];
  }
  return r;
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
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return !0;
    } catch (e) {
      return !1;
    }
  }();
  return function () {
    var n;
    var r = E(e);
    if (t) {
      var o = E(this).constructor;
      n = Reflect.construct(r, arguments, o);
    } else {
      n = r.apply(this, arguments);
    }
    return b(this, n);
  };
}
function b(e, t) {
  return !t || "object" !== p(t) && "function" !== typeof t ? y(e) : t;
}
function y(e) {
  if (void 0 === e) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return e;
}
function E(e) {
  return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  })(e);
}
function O(e, t, n) {
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
var w = {
  start: "touchstart",
  move: "touchmove",
  stop: "touchend"
};
var C = {
  start: "mousedown",
  move: "mousemove",
  stop: "mouseup"
};
var T = C;
var S = function (e) {
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
  }(u, e);
  var t;
  var n;
  var o;
  var c = v(u);
  function u() {
    var e;
    m(this, u);
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) {
      n[r] = arguments[r];
    }
    O(y(e = c.call.apply(c, [this].concat(n))), "state", {
      dragging: !1,
      lastX: NaN,
      lastY: NaN,
      touchIdentifier: null
    });
    O(y(e), "mounted", !1);
    O(y(e), "handleDragStart", function (t) {
      e.props.onMouseDown(t);
      if (!e.props.allowAnyClick && "number" === typeof t.button && 0 !== t.button) {
        return !1;
      }
      var n = e.findDOMNode();
      if (!n || !n.ownerDocument || !n.ownerDocument.body) {
        throw new Error("<DraggableCore> not mounted on DragStart!");
      }
      var r = n.ownerDocument;
      if (!(e.props.disabled || !(t.target instanceof r.defaultView.Node) || e.props.handle && !(0, a.matchesSelectorAndParentsTo)(t.target, e.props.handle, n) || e.props.cancel && (0, a.matchesSelectorAndParentsTo)(t.target, e.props.cancel, n))) {
        if ("touchstart" === t.type) {
          t.preventDefault();
        }
        var o = (0, a.getTouchIdentifier)(t);
        e.setState({
          touchIdentifier: o
        });
        var i = (0, s.getControlPosition)(t, o, y(e));
        if (null != i) {
          var c = i.x;
          var u = i.y;
          var d = (0, s.createCoreData)(y(e), c, u);
          (0, l.default)("DraggableCore: handleDragStart: %j", d);
          (0, l.default)("calling", e.props.onStart);
          if (!1 !== e.props.onStart(t, d) && !1 !== e.mounted) {
            if (e.props.enableUserSelectHack) {
              (0, a.addUserSelectStyles)(r);
            }
            e.setState({
              dragging: !0,
              lastX: c,
              lastY: u
            });
            (0, a.addEvent)(r, T.move, e.handleDrag);
            (0, a.addEvent)(r, T.stop, e.handleDragStop);
          }
        }
      }
    });
    O(y(e), "handleDrag", function (t) {
      var n = (0, s.getControlPosition)(t, e.state.touchIdentifier, y(e));
      if (null != n) {
        var r = n.x;
        var o = n.y;
        if (Array.isArray(e.props.grid)) {
          var i = r - e.state.lastX;
          var a = o - e.state.lastY;
          var c = f((0, s.snapToGrid)(e.props.grid, i, a), 2);
          i = c[0];
          a = c[1];
          if (!i && !a) {
            return;
          }
          r = e.state.lastX + i;
          o = e.state.lastY + a;
        }
        var u = (0, s.createCoreData)(y(e), r, o);
        (0, l.default)("DraggableCore: handleDrag: %j", u);
        if (!1 !== e.props.onDrag(t, u) && !1 !== e.mounted) {
          e.setState({
            lastX: r,
            lastY: o
          });
        } else {
          try {
            e.handleDragStop(new MouseEvent("mouseup"));
          } catch (p) {
            var d = document.createEvent("MouseEvents");
            d.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
            e.handleDragStop(d);
          }
        }
      }
    });
    O(y(e), "handleDragStop", function (t) {
      if (e.state.dragging) {
        var n = (0, s.getControlPosition)(t, e.state.touchIdentifier, y(e));
        if (null != n) {
          var r = n.x;
          var o = n.y;
          var i = (0, s.createCoreData)(y(e), r, o);
          if (!1 === e.props.onStop(t, i) || !1 === e.mounted) {
            return !1;
          }
          var c = e.findDOMNode();
          if (c && e.props.enableUserSelectHack) {
            (0, a.removeUserSelectStyles)(c.ownerDocument);
          }
          (0, l.default)("DraggableCore: handleDragStop: %j", i);
          e.setState({
            dragging: !1,
            lastX: NaN,
            lastY: NaN
          });
          if (c) {
            (0, l.default)("DraggableCore: Removing handlers");
            (0, a.removeEvent)(c.ownerDocument, T.move, e.handleDrag);
            (0, a.removeEvent)(c.ownerDocument, T.stop, e.handleDragStop);
          }
        }
      }
    });
    O(y(e), "onMouseDown", function (t) {
      T = C;
      return e.handleDragStart(t);
    });
    O(y(e), "onMouseUp", function (t) {
      T = C;
      return e.handleDragStop(t);
    });
    O(y(e), "onTouchStart", function (t) {
      T = w;
      return e.handleDragStart(t);
    });
    O(y(e), "onTouchEnd", function (t) {
      T = w;
      return e.handleDragStop(t);
    });
    return e;
  }
  t = u;
  if (n = [{
    key: "componentDidMount",
    value: function () {
      this.mounted = !0;
      var e = this.findDOMNode();
      if (e) {
        (0, a.addEvent)(e, w.start, this.onTouchStart, {
          passive: !1
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function () {
      this.mounted = !1;
      var e = this.findDOMNode();
      if (e) {
        var t = e.ownerDocument;
        (0, a.removeEvent)(t, C.move, this.handleDrag);
        (0, a.removeEvent)(t, w.move, this.handleDrag);
        (0, a.removeEvent)(t, C.stop, this.handleDragStop);
        (0, a.removeEvent)(t, w.stop, this.handleDragStop);
        (0, a.removeEvent)(e, w.start, this.onTouchStart, {
          passive: !1
        });
        if (this.props.enableUserSelectHack) {
          (0, a.removeUserSelectStyles)(t);
        }
      }
    }
  }, {
    key: "findDOMNode",
    value: function () {
      return this.props.nodeRef ? this.props.nodeRef.current : i.default.findDOMNode(this);
    }
  }, {
    key: "render",
    value: function () {
      return r.cloneElement(r.Children.only(this.props.children), {
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        onTouchEnd: this.onTouchEnd
      });
    }
  }]) {
    g(t.prototype, n);
  }
  if (o) {
    g(t, o);
  }
  return u;
}(r.Component);
exports.default = S;
O(S, "displayName", "DraggableCore");
O(S, "propTypes", {
  allowAnyClick: o.default.bool,
  disabled: o.default.bool,
  enableUserSelectHack: o.default.bool,
  offsetParent: function (e, t) {
    if (e[t] && 1 !== e[t].nodeType) {
      throw new Error("Draggable's offsetParent must be a DOM Node.");
    }
  },
  grid: o.default.arrayOf(o.default.number),
  handle: o.default.string,
  cancel: o.default.string,
  nodeRef: o.default.object,
  onStart: o.default.func,
  onDrag: o.default.func,
  onStop: o.default.func,
  onMouseDown: o.default.func,
  scale: o.default.number,
  className: c.dontSetMe,
  style: c.dontSetMe,
  transform: c.dontSetMe
});
O(S, "defaultProps", {
  allowAnyClick: !1,
  cancel: null,
  disabled: !1,
  enableUserSelectHack: !0,
  offsetParent: null,
  handle: null,
  grid: null,
  transform: null,
  onStart: function () {},
  onDrag: function () {},
  onStop: function () {},
  onMouseDown: function () {},
  scale: 1
});