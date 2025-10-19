/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1192
 */

"use strict";

var r = require("react");
var o = function () {
  function e(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || false;
      r.configurable = true;
      if ("value" in r) {
        r.writable = true;
      }
      Object.defineProperty(e, r.key, r);
    }
  }
  return function (t, n, r) {
    if (n) {
      e(t.prototype, n);
    }
    if (r) {
      e(t, r);
    }
    return t;
  };
}();
var i = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
      e[r] = n[r];
    }
  }
  return e;
};
var a = {
  base: {
    position: "absolute",
    userSelect: "none",
    MsUserSelect: "none"
  },
  top: {
    width: "100%",
    height: "10px",
    top: "-5px",
    left: "0px",
    cursor: "row-resize"
  },
  right: {
    width: "10px",
    height: "100%",
    top: "0px",
    right: "-5px",
    cursor: "col-resize"
  },
  bottom: {
    width: "100%",
    height: "10px",
    bottom: "-5px",
    left: "0px",
    cursor: "row-resize"
  },
  left: {
    width: "10px",
    height: "100%",
    top: "0px",
    left: "-5px",
    cursor: "col-resize"
  },
  topRight: {
    width: "20px",
    height: "20px",
    position: "absolute",
    right: "-10px",
    top: "-10px",
    cursor: "ne-resize"
  },
  bottomRight: {
    width: "20px",
    height: "20px",
    position: "absolute",
    right: "-10px",
    bottom: "-10px",
    cursor: "se-resize"
  },
  bottomLeft: {
    width: "20px",
    height: "20px",
    position: "absolute",
    left: "-10px",
    bottom: "-10px",
    cursor: "sw-resize"
  },
  topLeft: {
    width: "20px",
    height: "20px",
    position: "absolute",
    left: "-10px",
    top: "-10px",
    cursor: "nw-resize"
  }
};
var s = function (e) {
  return r.createElement("div", {
    className: e.className,
    style: i({}, a.base, a[e.direction], e.replaceStyles || {}),
    onMouseDown: function (t) {
      e.onResizeStart(t, e.direction);
    },
    onTouchStart: function (t) {
      e.onResizeStart(t, e.direction);
    }
  }, e.children);
};
var c = {
  userSelect: "none",
  MozUserSelect: "none",
  WebkitUserSelect: "none",
  MsUserSelect: "none"
};
var l = {
  userSelect: "auto",
  MozUserSelect: "auto",
  WebkitUserSelect: "auto",
  MsUserSelect: "auto"
};
var u = function (e, t, n) {
  return Math.max(Math.min(e, n), t);
};
var d = function (e, t) {
  return Math.round(e / t) * t;
};
var p = function (e, t) {
  return t.reduce(function (t, n) {
    return Math.abs(n - e) < Math.abs(t - e) ? n : t;
  });
};
var f = function (e, t) {
  return e.substr(e.length - t.length, t.length) === t;
};
var h = function (e) {
  return "auto" === e.toString() || f(e.toString(), "px") || f(e.toString(), "%") || f(e.toString(), "vh") || f(e.toString(), "vw") || f(e.toString(), "vmax") || f(e.toString(), "vmin") ? e.toString() : e + "px";
};
var m = ["style", "className", "grid", "snap", "bounds", "size", "defaultSize", "minWidth", "minHeight", "maxWidth", "maxHeight", "lockAspectRatio", "lockAspectRatioExtraWidth", "lockAspectRatioExtraHeight", "enable", "handleStyles", "handleClasses", "handleWrapperStyle", "handleWrapperClass", "children", "onResizeStart", "onResize", "onResizeStop", "handleComponent", "scale", "resizeRatio"];
var g = function (e) {
  function t(e) {
    !function (e, t) {
      if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }(this, t);
    var n = function (e, t) {
      if (!e) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !t || "object" !== typeof t && "function" !== typeof t ? e : t;
    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
    n.state = {
      isResizing: false,
      resizeCursor: "auto",
      width: "undefined" === typeof (n.propsSize && n.propsSize.width) ? "auto" : n.propsSize && n.propsSize.width,
      height: "undefined" === typeof (n.propsSize && n.propsSize.height) ? "auto" : n.propsSize && n.propsSize.height,
      direction: "right",
      original: {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      }
    };
    n.updateExtendsProps(e);
    n.onResizeStart = n.onResizeStart.bind(n);
    n.onMouseMove = n.onMouseMove.bind(n);
    n.onMouseUp = n.onMouseUp.bind(n);
    if ("undefined" !== typeof window) {
      window.addEventListener("mouseup", n.onMouseUp);
      window.addEventListener("mousemove", n.onMouseMove);
      window.addEventListener("mouseleave", n.onMouseUp);
      window.addEventListener("touchmove", n.onMouseMove);
      window.addEventListener("touchend", n.onMouseUp);
    }
    return n;
  }
  (function (e, t) {
    if ("function" !== typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    }
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (t) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(e, t);
      } else {
        e.__proto__ = t;
      }
    }
  })(t, e);
  o(t, [{
    key: "updateExtendsProps",
    value: function (e) {
      this.extendsProps = Object.keys(e).reduce(function (t, n) {
        if (!(-1 !== m.indexOf(n))) {
          t[n] = e[n];
        }
        return t;
      }, {});
    }
  }, {
    key: "getParentSize",
    value: function () {
      var e = this.base;
      if (!e) {
        return {
          width: window.innerWidth,
          height: window.innerHeight
        };
      }
      var t = false;
      var n = this.parentNode.style.flexWrap;
      var r = e.style.minWidth;
      if ("wrap" !== n) {
        t = true;
        this.parentNode.style.flexWrap = "wrap";
      }
      e.style.position = "relative";
      e.style.minWidth = "100%";
      var o = {
        width: e.offsetWidth,
        height: e.offsetHeight
      };
      e.style.position = "absolute";
      if (t) {
        this.parentNode.style.flexWrap = n;
      }
      e.style.minWidth = r;
      return o;
    }
  }, {
    key: "componentDidMount",
    value: function () {
      var e = this.size;
      this.setState({
        width: this.state.width || e.width,
        height: this.state.height || e.height
      });
      var t = this.parentNode;
      if (t instanceof HTMLElement && !this.base) {
        var n = document.createElement("div");
        n.style.width = "100%";
        n.style.height = "100%";
        n.style.position = "absolute";
        n.style.transform = "scale(0, 0)";
        n.style.left = "0";
        n.style.flex = "0";
        if (n.classList) {
          n.classList.add("__resizable_base__");
        } else {
          n.className += "__resizable_base__";
        }
        t.appendChild(n);
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function (e) {
      this.updateExtendsProps(e);
    }
  }, {
    key: "componentWillUnmount",
    value: function () {
      if ("undefined" !== typeof window) {
        window.removeEventListener("mouseup", this.onMouseUp);
        window.removeEventListener("mousemove", this.onMouseMove);
        window.removeEventListener("mouseleave", this.onMouseUp);
        window.removeEventListener("touchmove", this.onMouseMove);
        window.removeEventListener("touchend", this.onMouseUp);
        var e = this.parentNode;
        var t = this.base;
        if (!t || !e) {
          return;
        }
        if (!(e instanceof HTMLElement) || !(t instanceof Node)) {
          return;
        }
        e.removeChild(t);
      }
    }
  }, {
    key: "calculateNewSize",
    value: function (e, t) {
      var n = this.propsSize && this.propsSize[t];
      return "auto" !== this.state[t] || this.state.original[t] !== e || "undefined" !== typeof n && "auto" !== n ? e : "auto";
    }
  }, {
    key: "onResizeStart",
    value: function (e, t) {
      var n = 0;
      var r = 0;
      if (e.nativeEvent instanceof MouseEvent) {
        n = e.nativeEvent.clientX;
        r = e.nativeEvent.clientY;
        if (3 === e.nativeEvent.which) {
          return;
        }
      } else if (e.nativeEvent instanceof TouchEvent) {
        n = e.nativeEvent.touches[0].clientX;
        r = e.nativeEvent.touches[0].clientY;
      }
      if (this.props.onResizeStart) {
        this.props.onResizeStart(e, t, this.resizable);
      }
      if (this.props.size) {
        if ("undefined" !== typeof this.props.size.height && this.props.size.height !== this.state.height) {
          this.setState({
            height: this.props.size.height
          });
        }
        if ("undefined" !== typeof this.props.size.width && this.props.size.width !== this.state.width) {
          this.setState({
            width: this.props.size.width
          });
        }
      }
      this.setState({
        original: {
          x: n,
          y: r,
          width: this.size.width,
          height: this.size.height
        },
        isResizing: true,
        resizeCursor: window.getComputedStyle(e.target).cursor,
        direction: t
      });
    }
  }, {
    key: "onMouseMove",
    value: function (e) {
      if (this.state.isResizing) {
        var t = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
        var n = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;
        var r = this.state;
        var o = r.direction;
        var i = r.original;
        var a = r.width;
        var s = r.height;
        var c = this.props;
        var l = c.lockAspectRatio;
        var h = c.lockAspectRatioExtraHeight;
        var m = c.lockAspectRatioExtraWidth;
        var g = this.props.scale || 1;
        var _ = this.props;
        var v = _.maxWidth;
        var b = _.maxHeight;
        var y = _.minWidth;
        var E = _.minHeight;
        var O = this.props.resizeRatio || 1;
        var w = this.getParentSize();
        if (v && "string" === typeof v && f(v, "%")) {
          var C = Number(v.replace("%", "")) / 100;
          v = w.width * C;
        }
        if (b && "string" === typeof b && f(b, "%")) {
          var T = Number(b.replace("%", "")) / 100;
          b = w.height * T;
        }
        if (y && "string" === typeof y && f(y, "%")) {
          var S = Number(y.replace("%", "")) / 100;
          y = w.width * S;
        }
        if (E && "string" === typeof E && f(E, "%")) {
          var I = Number(E.replace("%", "")) / 100;
          E = w.height * I;
        }
        v = "undefined" === typeof v ? undefined : Number(v);
        b = "undefined" === typeof b ? undefined : Number(b);
        y = "undefined" === typeof y ? undefined : Number(y);
        E = "undefined" === typeof E ? undefined : Number(E);
        var A = "number" === typeof l ? l : i.width / i.height;
        var j = i.width;
        var N = i.height;
        if (/right/i.test(o)) {
          j = i.width + (t - i.x) * O / g;
          if (l) {
            N = (j - m) / A + h;
          }
        }
        if (/left/i.test(o)) {
          j = i.width - (t - i.x) * O / g;
          if (l) {
            N = (j - m) / A + h;
          }
        }
        if (/bottom/i.test(o)) {
          N = i.height + (n - i.y) * O / g;
          if (l) {
            j = (N - h) * A + m;
          }
        }
        if (/top/i.test(o)) {
          N = i.height - (n - i.y) * O / g;
          if (l) {
            j = (N - h) * A + m;
          }
        }
        if ("parent" === this.props.bounds) {
          var R = this.parentNode;
          if (R instanceof HTMLElement) {
            var k = R.getBoundingClientRect();
            var x = k.left;
            var D = k.top;
            var M = this.resizable.getBoundingClientRect();
            var L = M.left;
            var P = M.top;
            var B = R.offsetWidth + (x - L);
            var F = R.offsetHeight + (D - P);
            v = v && v < B ? v : B;
            b = b && b < F ? b : F;
          }
        } else if ("window" === this.props.bounds) {
          if ("undefined" !== typeof window) {
            var G = this.resizable.getBoundingClientRect();
            var U = G.left;
            var W = G.top;
            var H = window.innerWidth - U;
            var V = window.innerHeight - W;
            v = v && v < H ? v : H;
            b = b && b < V ? b : V;
          }
        } else if (this.props.bounds instanceof HTMLElement) {
          var z = this.props.bounds.getBoundingClientRect();
          var Y = z.left;
          var K = z.top;
          var q = this.resizable.getBoundingClientRect();
          var X = q.left;
          var Q = q.top;
          if (!(this.props.bounds instanceof HTMLElement)) {
            return;
          }
          var Z = this.props.bounds.offsetWidth + (Y - X);
          var J = this.props.bounds.offsetHeight + (K - Q);
          v = v && v < Z ? v : Z;
          b = b && b < J ? b : J;
        }
        var $ = "undefined" === typeof y ? 10 : y;
        var ee = "undefined" === typeof v || v < 0 ? j : v;
        var te = "undefined" === typeof E ? 10 : E;
        var ne = "undefined" === typeof b || b < 0 ? N : b;
        if (l) {
          var re = (te - h) * A + m;
          var oe = (ne - h) * A + m;
          var ie = ($ - m) / A + h;
          var ae = (ee - m) / A + h;
          var se = Math.max($, re);
          var ce = Math.min(ee, oe);
          var le = Math.max(te, ie);
          var ue = Math.min(ne, ae);
          j = u(j, se, ce);
          N = u(N, le, ue);
        } else {
          j = u(j, $, ee);
          N = u(N, te, ne);
        }
        if (this.props.grid) {
          j = d(j, this.props.grid[0]);
        }
        if (this.props.grid) {
          N = d(N, this.props.grid[1]);
        }
        if (this.props.snap && this.props.snap.x) {
          j = p(j, this.props.snap.x);
        }
        if (this.props.snap && this.props.snap.y) {
          N = p(N, this.props.snap.y);
        }
        var de = {
          width: j - i.width,
          height: N - i.height
        };
        if (a && "string" === typeof a && f(a, "%")) {
          j = j / w.width * 100 + "%";
        }
        if (s && "string" === typeof s && f(s, "%")) {
          N = N / w.height * 100 + "%";
        }
        this.setState({
          width: this.calculateNewSize(j, "width"),
          height: this.calculateNewSize(N, "height")
        });
        if (this.props.onResize) {
          this.props.onResize(e, o, this.resizable, de);
        }
      }
    }
  }, {
    key: "onMouseUp",
    value: function (e) {
      var t = this.state;
      var n = t.isResizing;
      var r = t.direction;
      var o = t.original;
      if (n) {
        var i = {
          width: this.size.width - o.width,
          height: this.size.height - o.height
        };
        if (this.props.onResizeStop) {
          this.props.onResizeStop(e, r, this.resizable, i);
        }
        if (this.props.size) {
          this.setState(this.props.size);
        }
        this.setState({
          isResizing: false,
          resizeCursor: "auto"
        });
      }
    }
  }, {
    key: "updateSize",
    value: function (e) {
      this.setState({
        width: e.width,
        height: e.height
      });
    }
  }, {
    key: "renderResizer",
    value: function () {
      var e = this;
      var t = this.props;
      var n = t.enable;
      var o = t.handleStyles;
      var i = t.handleClasses;
      var a = t.handleWrapperStyle;
      var c = t.handleWrapperClass;
      var l = t.handleComponent;
      if (!n) {
        return null;
      }
      var u = Object.keys(n).map(function (t) {
        return false !== n[t] ? r.createElement(s, {
          key: t,
          direction: t,
          onResizeStart: e.onResizeStart,
          replaceStyles: o && o[t],
          className: i && i[t]
        }, l && l[t] ? r.createElement(l[t]) : null) : null;
      });
      return r.createElement("span", {
        className: c,
        style: a
      }, u);
    }
  }, {
    key: "render",
    value: function () {
      var e = this;
      var t = this.state.isResizing ? c : l;
      return r.createElement("div", i({
        ref: function (t) {
          if (t) {
            e.resizable = t;
          }
        },
        style: i({
          position: "relative"
        }, t, this.props.style, this.sizeStyle, {
          maxWidth: this.props.maxWidth,
          maxHeight: this.props.maxHeight,
          minWidth: this.props.minWidth,
          minHeight: this.props.minHeight,
          boxSizing: "border-box"
        }),
        className: this.props.className
      }, this.extendsProps), this.state.isResizing && r.createElement("div", {
        style: {
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0,0,0,0)",
          cursor: "" + (this.state.resizeCursor || "auto"),
          opacity: "0",
          position: "fixed",
          zIndex: "9999",
          top: "0",
          left: "0",
          bottom: "0",
          right: "0"
        }
      }), this.props.children, this.renderResizer());
    }
  }, {
    key: "parentNode",
    get: function () {
      return this.resizable.parentNode;
    }
  }, {
    key: "propsSize",
    get: function () {
      return this.props.size || this.props.defaultSize;
    }
  }, {
    key: "base",
    get: function () {
      var e = this.parentNode;
      if (e) {
        for (var t = [].slice.call(e.children), n = 0; n < t.length; n += 1) {
          var r = t[n];
          if (r instanceof HTMLElement && r.classList.contains("__resizable_base__")) {
            return r;
          }
        }
      }
    }
  }, {
    key: "size",
    get: function () {
      var e = 0;
      var t = 0;
      if ("undefined" !== typeof window) {
        var n = this.resizable.offsetWidth;
        var r = this.resizable.offsetHeight;
        var o = this.resizable.style.position;
        if ("relative" !== o) {
          this.resizable.style.position = "relative";
        }
        e = "auto" !== this.resizable.style.width ? this.resizable.offsetWidth : n;
        t = "auto" !== this.resizable.style.height ? this.resizable.offsetHeight : r;
        this.resizable.style.position = o;
      }
      return {
        width: e,
        height: t
      };
    }
  }, {
    key: "sizeStyle",
    get: function () {
      var e = this;
      var t = this.props.size;
      var n = function (t) {
        if ("undefined" === typeof e.state[t] || "auto" === e.state[t]) {
          return "auto";
        }
        if (e.propsSize && e.propsSize[t] && f(e.propsSize[t].toString(), "%")) {
          if (f(e.state[t].toString(), "%")) {
            return e.state[t].toString();
          }
          var n = e.getParentSize();
          return Number(e.state[t].toString().replace("px", "")) / n[t] * 100 + "%";
        }
        return h(e.state[t]);
      };
      return {
        width: t && "undefined" !== typeof t.width && !this.state.isResizing ? h(t.width) : n("width"),
        height: t && "undefined" !== typeof t.height && !this.state.isResizing ? h(t.height) : n("height")
      };
    }
  }]);
  return t;
}(r.Component);
g.defaultProps = {
  onResizeStart: function () {},
  onResize: function () {},
  onResizeStop: function () {},
  enable: {
    top: true,
    right: true,
    bottom: true,
    left: true,
    topRight: true,
    bottomRight: true,
    bottomLeft: true,
    topLeft: true
  },
  style: {},
  grid: [1, 1],
  lockAspectRatio: false,
  lockAspectRatioExtraWidth: 0,
  lockAspectRatioExtraHeight: 0,
  scale: 1,
  resizeRatio: 1
};
exports.a = g;