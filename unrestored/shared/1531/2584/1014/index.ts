/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1014
 */

"use strict";

function r(e) {
  return (r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  })(e);
}
function o() {
  return (o = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
        e[r] = n[r];
      }
    }
    return e;
  }).apply(this, arguments);
}
function i(e, t) {
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
function a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    if (t % 2) {
      i(n, true).forEach(function (t) {
        g(e, t, n[t]);
      });
    } else {
      if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
      } else {
        i(n).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }
    }
  }
  return e;
}
function s(e, t) {
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
function c(e, t) {
  if (!(e instanceof t)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function l(e, t) {
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
function u(e, t, n) {
  if (t) {
    l(e.prototype, t);
  }
  if (n) {
    l(e, n);
  }
  return e;
}
function d(e, t) {
  return !t || "object" !== r(t) && "function" !== typeof t ? f(e) : t;
}
function p(e) {
  return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  })(e);
}
function f(e) {
  if (undefined === e) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return e;
}
function h(e, t) {
  if ("function" !== typeof t && null !== t) {
    throw new TypeError("Super expression must either be null or a function");
  }
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: true,
      configurable: true
    }
  });
  if (t) {
    m(e, t);
  }
}
function m(e, t) {
  return (m = Object.setPrototypeOf || function (e, t) {
    e.__proto__ = t;
    return e;
  })(e, t);
}
function g(e, t, n) {
  if (t in e) {
    Object.defineProperty(e, t, {
      value: n,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    e[t] = n;
  }
  return e;
}
var _ = require("react");
require("../50/index");
var v = require("./2539/index");
var b = require("./1422");
function y(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e.charCodeAt(n);
    if (r < 128) {
      t += String.fromCharCode(r);
    } else {
      if (r < 2048) {
        t += String.fromCharCode(192 | r >> 6);
        t += String.fromCharCode(128 | 63 & r);
      } else {
        if (r < 55296 || r >= 57344) {
          t += String.fromCharCode(224 | r >> 12);
          t += String.fromCharCode(128 | r >> 6 & 63);
          t += String.fromCharCode(128 | 63 & r);
        } else {
          n++;
          r = 65536 + ((1023 & r) << 10 | 1023 & e.charCodeAt(n));
          t += String.fromCharCode(240 | r >> 18);
          t += String.fromCharCode(128 | r >> 12 & 63);
          t += String.fromCharCode(128 | r >> 6 & 63);
          t += String.fromCharCode(128 | 63 & r);
        }
      }
    }
  }
  return t;
}
var E = {
  size: 128,
  level: "L",
  bgColor: "#FFFFFF",
  fgColor: "#000000",
  includeMargin: false
};
function O(e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 0;
  var n = [];
  e.forEach(function (e, r) {
    var o = null;
    e.forEach(function (i, a) {
      if (!i && null !== o) {
        n.push("M".concat(o + t, " ").concat(r + t, "h").concat(a - o, "v1H").concat(o + t, "z"));
        return void (o = null);
      }
      if (a !== e.length - 1) {
        if (i && null === o) {
          o = a;
        }
      } else {
        if (!i) {
          return;
        }
        if (null === o) {
          n.push("M".concat(a + t, ",").concat(r + t, " h1v1H").concat(a + t, "z"));
        } else {
          n.push("M".concat(o + t, ",").concat(r + t, " h").concat(a + 1 - o, "v1H").concat(o + t, "z"));
        }
      }
    });
  });
  return n.join("");
}
function w(e, t) {
  return e.slice().map(function (e, n) {
    return n < t.y || n >= t.y + t.h ? e : e.map(function (e, n) {
      return (n < t.x || n >= t.x + t.w) && e;
    });
  });
}
function C(e, t) {
  var n = e.imageSettings;
  var r = e.size;
  var o = e.includeMargin;
  if (null == n) {
    return null;
  }
  var i = o ? 4 : 0;
  var a = t.length + 2 * i;
  var s = Math.floor(.1 * r);
  var c = a / r;
  var l = (n.width || s) * c;
  var u = (n.height || s) * c;
  var d = null == n.x ? t.length / 2 - l / 2 : n.x * c;
  var p = null == n.y ? t.length / 2 - u / 2 : n.y * c;
  var f = null;
  if (n.excavate) {
    var h = Math.floor(d);
    var m = Math.floor(p);
    f = {
      x: h,
      y: m,
      w: Math.ceil(l + d - h),
      h: Math.ceil(u + p - m)
    };
  }
  return {
    x: d,
    y: p,
    h: u,
    w: l,
    excavation: f
  };
}
var T = function () {
  try {
    new Path2D().addPath(new Path2D());
  } catch (e) {
    return false;
  }
  return true;
}();
var S = function (e) {
  function t() {
    var e;
    var n;
    c(this, t);
    for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) {
      o[i] = arguments[i];
    }
    g(f(n = d(this, (e = p(t)).call.apply(e, [this].concat(o)))), "_canvas", undefined);
    g(f(n), "_image", undefined);
    g(f(n), "state", {
      imgLoaded: false
    });
    g(f(n), "handleImageLoad", function () {
      n.setState({
        imgLoaded: true
      });
    });
    return n;
  }
  h(t, e);
  u(t, [{
    key: "componentDidMount",
    value: function () {
      if (this._image && this._image.complete) {
        this.handleImageLoad();
      }
      this.update();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function (e) {
      var t;
      var n;
      if ((null === (t = this.props.imageSettings) || undefined === t ? undefined : t.src) !== (null === (n = e.imageSettings) || undefined === n ? undefined : n.src)) {
        this.setState({
          imgLoaded: false
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function () {
      this.update();
    }
  }, {
    key: "update",
    value: function () {
      var e = this.props;
      var t = e.value;
      var n = e.size;
      var r = e.level;
      var o = e.bgColor;
      var i = e.fgColor;
      var a = e.includeMargin;
      var s = e.imageSettings;
      var c = new v(-1, b[r]);
      c.addData(y(t));
      c.make();
      if (null != this._canvas) {
        var l = this._canvas;
        var u = l.getContext("2d");
        if (!u) {
          return;
        }
        var d = c.modules;
        if (null === d) {
          return;
        }
        var p = a ? 4 : 0;
        var f = d.length + 2 * p;
        var h = C(this.props, d);
        if (null != s && null != h && null != h.excavation) {
          d = w(d, h.excavation);
        }
        var m = window.devicePixelRatio || 1;
        l.height = l.width = n * m;
        var g = n / f * m;
        u.scale(g, g);
        u.fillStyle = o;
        u.fillRect(0, 0, f, f);
        u.fillStyle = i;
        if (T) {
          u.fill(new Path2D(O(d, p)));
        } else {
          d.forEach(function (e, t) {
            e.forEach(function (e, n) {
              if (e) {
                u.fillRect(n + p, t + p, 1, 1);
              }
            });
          });
        }
        if (this.state.imgLoaded && this._image && null != h) {
          u.drawImage(this._image, h.x + p, h.y + p, h.w, h.h);
        }
      }
    }
  }, {
    key: "render",
    value: function () {
      var e = this;
      var t = this.props;
      t.value;
      var n = t.size;
      t.level;
      t.bgColor;
      t.fgColor;
      var r = t.style;
      t.includeMargin;
      var i = t.imageSettings;
      var c = s(t, ["value", "size", "level", "bgColor", "fgColor", "style", "includeMargin", "imageSettings"]);
      var l = a({
        height: n,
        width: n
      }, r);
      var u = null;
      var d = i && i.src;
      if (null != i && null != d) {
        u = _.createElement("img", {
          src: d,
          style: {
            display: "none"
          },
          onLoad: this.handleImageLoad,
          ref: function (t) {
            return e._image = t;
          }
        });
      }
      return _.createElement(_.Fragment, null, _.createElement("canvas", o({
        style: l,
        height: n,
        width: n,
        ref: function (t) {
          return e._canvas = t;
        }
      }, c)), u);
    }
  }]);
  return t;
}(_.PureComponent);
g(S, "defaultProps", E);
var I = function (e) {
  function t() {
    c(this, t);
    return d(this, p(t).apply(this, arguments));
  }
  h(t, e);
  u(t, [{
    key: "render",
    value: function () {
      var e = this.props;
      var t = e.value;
      var n = e.size;
      var r = e.level;
      var i = e.bgColor;
      var a = e.fgColor;
      var c = e.includeMargin;
      var l = e.imageSettings;
      var u = s(e, ["value", "size", "level", "bgColor", "fgColor", "includeMargin", "imageSettings"]);
      var d = new v(-1, b[r]);
      d.addData(y(t));
      d.make();
      var p = d.modules;
      if (null === p) {
        return null;
      }
      var f = c ? 4 : 0;
      var h = p.length + 2 * f;
      var m = C(this.props, p);
      var g = null;
      if (null != l && null != m) {
        if (null != m.excavation) {
          p = w(p, m.excavation);
        }
        g = _.createElement("image", {
          xlinkHref: l.src,
          height: m.h,
          width: m.w,
          x: m.x + f,
          y: m.y + f,
          preserveAspectRatio: "none"
        });
      }
      var E = O(p, f);
      return _.createElement("svg", o({
        shapeRendering: "crispEdges",
        height: n,
        width: n,
        viewBox: "0 0 ".concat(h, " ").concat(h)
      }, u), _.createElement("path", {
        fill: i,
        d: "M0,0 h".concat(h, "v").concat(h, "H0z")
      }), _.createElement("path", {
        fill: a,
        d: E
      }), g);
    }
  }]);
  return t;
}(_.PureComponent);
g(I, "defaultProps", E);
var A = function (e) {
  var t = e.renderAs;
  var n = s(e, ["renderAs"]);
  var r = "svg" === t ? I : S;
  return _.createElement(r, n);
};
A.defaultProps = a({
  renderAs: "canvas"
}, E);
module.exports = A;