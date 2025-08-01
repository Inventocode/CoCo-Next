"use strict";

export { S as animated };
var r = require("../../../40");
var i = require("../../../10/index");
var o = require("../../../27");
var a = require("../../../57/index");
var s = require("../../../58/index");
var c = require("./981/index");
export { useSpring } from "./981/index";
var u = require("../../../75/index");
var l = require("./44");
var f = require("./307");
function d(e, t) {
  if (null == e) {
    return {};
  }
  var n;
  var r;
  var i = {};
  var o = Object.keys(e);
  for (r = 0; r < o.length; r++) {
    n = o[r];
    if (!(t.indexOf(n) >= 0)) {
      i[n] = e[n];
    }
  }
  return i;
}
var h = ["style", "children", "scrollTop", "scrollLeft"];
var p = /^--/;
function _(e, t) {
  return null == t || "boolean" === typeof t || "" === t ? "" : "number" !== typeof t || 0 === t || p.test(e) || g.hasOwnProperty(e) && g[e] ? ("" + t).trim() : t + "px";
}
var A = {};
var g = {
  animationIterationCount: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
};
var v = ["Webkit", "Ms", "Moz", "O"];
g = Object.keys(g).reduce(function (e, t) {
  v.forEach(function (n) {
    return e[function (e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }(n, t)] = e[t];
  });
  return e;
}, g);
var m = ["x", "y", "z"];
var y = /^(matrix|translate|scale|rotate|skew)/;
var b = /^(translate)/;
var w = /^(rotate|skew)/;
var E = function (e, t) {
  return l.s.num(e) && 0 !== e ? e + t : e;
};
var x = function e(t, n) {
  return l.s.arr(t) ? t.every(function (t) {
    return e(t, n);
  }) : l.s.num(t) ? t === n : parseFloat(t) === n;
};
var C = function (e) {
  Object(a.a)(n, e);
  var t = Object(s.a)(n);
  function n(e) {
    Object(o.a)(this, n);
    var r = e.x;
    var a = e.y;
    var s = e.z;
    var c = d(e, m);
    var u = [];
    var f = [];
    if (r || a || s) {
      u.push([r || 0, a || 0, s || 0]);
      f.push(function (e) {
        return ["translate3d(".concat(e.map(function (e) {
          return E(e, "px");
        }).join(","), ")"), x(e, 0)];
      });
    }
    Object(l.l)(c, function (e, t) {
      if ("transform" === t) {
        u.push([e || ""]);
        f.push(function (e) {
          return [e, "" === e];
        });
      } else if (y.test(t)) {
        delete c[t];
        if (l.s.und(e)) {
          return;
        }
        var n = b.test(t) ? "px" : w.test(t) ? "deg" : "";
        u.push(Object(l.y)(e));
        f.push("rotate3d" === t ? function (e) {
          var t = Object(i.a)(e, 4);
          var r = t[0];
          var o = t[1];
          var a = t[2];
          var s = t[3];
          return ["rotate3d(".concat(r, ",").concat(o, ",").concat(a, ",").concat(E(s, n), ")"), x(s, 0)];
        } : function (e) {
          return ["".concat(t, "(").concat(e.map(function (e) {
            return E(e, n);
          }).join(","), ")"), x(e, t.startsWith("scale") ? 1 : 0)];
        });
      }
    });
    if (u.length) {
      c.transform = new O(u, f);
    }
    return t.call(this, c);
  }
  return n;
}(f.a);
var O = function (e) {
  Object(a.a)(n, e);
  var t = Object(s.a)(n);
  function n(e, r) {
    var i;
    Object(o.a)(this, n);
    (i = t.call(this))._value = null;
    i.inputs = e;
    i.transforms = r;
    return i;
  }
  Object(r.a)(n, [{
    key: "get",
    value: function () {
      return this._value || (this._value = this._get());
    }
  }, {
    key: "_get",
    value: function () {
      var e = this;
      var t = "";
      var n = !0;
      Object(l.k)(this.inputs, function (r, o) {
        var a = Object(l.q)(r[0]);
        var s = e.transforms[o](l.s.arr(a) ? a : r.map(l.q));
        var c = Object(i.a)(s, 2);
        var u = c[0];
        var f = c[1];
        t += " " + u;
        n = n && f;
      });
      return n ? "none" : t;
    }
  }, {
    key: "observerAdded",
    value: function (e) {
      var t = this;
      if (1 == e) {
        Object(l.k)(this.inputs, function (e) {
          return Object(l.k)(e, function (e) {
            return Object(l.r)(e) && Object(l.c)(e, t);
          });
        });
      }
    }
  }, {
    key: "observerRemoved",
    value: function (e) {
      var t = this;
      if (0 == e) {
        Object(l.k)(this.inputs, function (e) {
          return Object(l.k)(e, function (e) {
            return Object(l.r)(e) && Object(l.x)(e, t);
          });
        });
      }
    }
  }, {
    key: "eventObserved",
    value: function (e) {
      if ("change" == e.type) {
        this._value = null;
      }
      Object(l.d)(this, e);
    }
  }]);
  return n;
}(l.a);
var k = ["scrollTop", "scrollLeft"];
c.Globals.assign({
  batchedUpdates: u.unstable_batchedUpdates,
  createStringInterpolator: l.g,
  colors: l.e
});
var S = Object(f.d)(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
  applyAnimatedValues: function (e, t) {
    if (!e.nodeType || !e.setAttribute) {
      return !1;
    }
    var n = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName;
    var r = t;
    var i = r.style;
    var o = r.children;
    var a = r.scrollTop;
    var s = r.scrollLeft;
    var c = d(r, h);
    var u = Object.values(c);
    var l = Object.keys(c).map(function (t) {
      return n || e.hasAttribute(t) ? t : A[t] || (A[t] = t.replace(/([A-Z])/g, function (e) {
        return "-" + e.toLowerCase();
      }));
    });
    for (var f in void 0 !== o && (e.textContent = o), i) if (i.hasOwnProperty(f)) {
      var g = _(f, i[f]);
      if (p.test(f)) {
        e.style.setProperty(f, g);
      } else {
        e.style[f] = g;
      }
    }
    l.forEach(function (t, n) {
      e.setAttribute(t, u[n]);
    });
    if (void 0 !== a) {
      e.scrollTop = a;
    }
    if (void 0 !== s) {
      e.scrollLeft = s;
    }
  },
  createAnimatedStyle: function (e) {
    return new C(e);
  },
  getComponentProps: function (e) {
    return d(e, k);
  }
}).animated;