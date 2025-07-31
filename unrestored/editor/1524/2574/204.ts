"use strict";

var r = {
  update: null,
  begin: null,
  loopBegin: null,
  changeBegin: null,
  change: null,
  changeComplete: null,
  loopComplete: null,
  complete: null,
  loop: 1,
  direction: "normal",
  autoplay: !0,
  timelineOffset: 0
};
var i = {
  duration: 1e3,
  delay: 0,
  endDelay: 0,
  easing: "easeOutElastic(1, .5)",
  round: 0
};
var o = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective", "matrix", "matrix3d"];
var a = {
  CSS: {},
  springs: {}
};
function s(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
function c(e, t) {
  return e.indexOf(t) > -1;
}
function u(e, t) {
  return e.apply(null, t);
}
var l = {
  arr: function (e) {
    return Array.isArray(e);
  },
  obj: function (e) {
    return c(Object.prototype.toString.call(e), "Object");
  },
  pth: function (e) {
    return l.obj(e) && e.hasOwnProperty("totalLength");
  },
  svg: function (e) {
    return e instanceof SVGElement;
  },
  inp: function (e) {
    return e instanceof HTMLInputElement;
  },
  dom: function (e) {
    return e.nodeType || l.svg(e);
  },
  str: function (e) {
    return "string" === typeof e;
  },
  fnc: function (e) {
    return "function" === typeof e;
  },
  und: function (e) {
    return "undefined" === typeof e;
  },
  nil: function (e) {
    return l.und(e) || null === e;
  },
  hex: function (e) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e);
  },
  rgb: function (e) {
    return /^rgb/.test(e);
  },
  hsl: function (e) {
    return /^hsl/.test(e);
  },
  col: function (e) {
    return l.hex(e) || l.rgb(e) || l.hsl(e);
  },
  key: function (e) {
    return !r.hasOwnProperty(e) && !i.hasOwnProperty(e) && "targets" !== e && "keyframes" !== e;
  }
};
function f(e) {
  var t = /\(([^)]+)\)/.exec(e);
  return t ? t[1].split(",").map(function (e) {
    return parseFloat(e);
  }) : [];
}
function h(e, t) {
  var n = f(e);
  var r = s(l.und(n[0]) ? 1 : n[0], .1, 100);
  var i = s(l.und(n[1]) ? 100 : n[1], .1, 100);
  var o = s(l.und(n[2]) ? 10 : n[2], .1, 100);
  var c = s(l.und(n[3]) ? 0 : n[3], .1, 100);
  var u = Math.sqrt(i / r);
  var h = o / (2 * Math.sqrt(i * r));
  var d = h < 1 ? u * Math.sqrt(1 - h * h) : 0;
  var p = h < 1 ? (h * u - c) / d : -c + u;
  function _(e) {
    var n = t ? t * e / 1e3 : e;
    n = h < 1 ? Math.exp(-n * h * u) * (1 * Math.cos(d * n) + p * Math.sin(d * n)) : (1 + p * n) * Math.exp(-n * u);
    return 0 === e || 1 === e ? e : 1 - n;
  }
  return t ? _ : function () {
    var t = a.springs[e];
    if (t) {
      return t;
    }
    for (var n = 0, r = 0;;) {
      if (1 === _(n += 1 / 6)) {
        if (++r >= 16) {
          break;
        }
      } else {
        r = 0;
      }
    }
    var i = n * (1 / 6) * 1e3;
    a.springs[e] = i;
    return i;
  };
}
function d(e) {
  if (void 0 === e) {
    e = 10;
  }
  return function (t) {
    return Math.ceil(s(t, 1e-6, 1) * e) * (1 / e);
  };
}
var p = function () {
  function e(e, t) {
    return 1 - 3 * t + 3 * e;
  }
  function t(e, t) {
    return 3 * t - 6 * e;
  }
  function n(e) {
    return 3 * e;
  }
  function r(r, i, o) {
    return ((e(i, o) * r + t(i, o)) * r + n(i)) * r;
  }
  function i(r, i, o) {
    return 3 * e(i, o) * r * r + 2 * t(i, o) * r + n(i);
  }
  return function (e, t, n, o) {
    if (0 <= e && e <= 1 && 0 <= n && n <= 1) {
      var a = new Float32Array(11);
      if (e !== t || n !== o) {
        for (var s = 0; s < 11; ++s) {
          a[s] = r(.1 * s, e, n);
        }
      }
      return function (i) {
        return e === t && n === o || 0 === i || 1 === i ? i : r(c(i), t, o);
      };
    }
    function c(t) {
      for (var o = 0, s = 1; 10 !== s && a[s] <= t; ++s) {
        o += .1;
      }
      --s;
      var c = o + .1 * ((t - a[s]) / (a[s + 1] - a[s]));
      var u = i(c, e, n);
      return u >= .001 ? function (e, t, n, o) {
        for (var a = 0; a < 4; ++a) {
          var s = i(t, n, o);
          if (0 === s) {
            return t;
          }
          t -= (r(t, n, o) - e) / s;
        }
        return t;
      }(t, c, e, n) : 0 === u ? c : function (e, t, n, i, o) {
        var a;
        var s;
        var c = 0;
        do {
          if ((a = r(s = t + (n - t) / 2, i, o) - e) > 0) {
            n = s;
          } else {
            t = s;
          }
        } while (Math.abs(a) > 1e-7 && ++c < 10);
        return s;
      }(t, o, o + .1, e, n);
    }
  };
}();
var _ = function () {
  var e = {
    linear: function () {
      return function (e) {
        return e;
      };
    }
  };
  var t = {
    Sine: function () {
      return function (e) {
        return 1 - Math.cos(e * Math.PI / 2);
      };
    },
    Circ: function () {
      return function (e) {
        return 1 - Math.sqrt(1 - e * e);
      };
    },
    Back: function () {
      return function (e) {
        return e * e * (3 * e - 2);
      };
    },
    Bounce: function () {
      return function (e) {
        for (var t, n = 4; e < ((t = Math.pow(2, --n)) - 1) / 11;) {
          ;
        }
        return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2);
      };
    },
    Elastic: function (e, t) {
      if (void 0 === e) {
        e = 1;
      }
      if (void 0 === t) {
        t = .5;
      }
      var n = s(e, 1, 10);
      var r = s(t, .1, 2);
      return function (e) {
        return 0 === e || 1 === e ? e : -n * Math.pow(2, 10 * (e - 1)) * Math.sin((e - 1 - r / (2 * Math.PI) * Math.asin(1 / n)) * (2 * Math.PI) / r);
      };
    }
  };
  ["Quad", "Cubic", "Quart", "Quint", "Expo"].forEach(function (e, n) {
    t[e] = function () {
      return function (e) {
        return Math.pow(e, n + 2);
      };
    };
  });
  Object.keys(t).forEach(function (n) {
    var r = t[n];
    e["easeIn" + n] = r;
    e["easeOut" + n] = function (e, t) {
      return function (n) {
        return 1 - r(e, t)(1 - n);
      };
    };
    e["easeInOut" + n] = function (e, t) {
      return function (n) {
        return n < .5 ? r(e, t)(2 * n) / 2 : 1 - r(e, t)(-2 * n + 2) / 2;
      };
    };
    e["easeOutIn" + n] = function (e, t) {
      return function (n) {
        return n < .5 ? (1 - r(e, t)(1 - 2 * n)) / 2 : (r(e, t)(2 * n - 1) + 1) / 2;
      };
    };
  });
  return e;
}();
function A(e, t) {
  if (l.fnc(e)) {
    return e;
  }
  var n = e.split("(")[0];
  var r = _[n];
  var i = f(e);
  switch (n) {
    case "spring":
      return h(e, t);
    case "cubicBezier":
      return u(p, i);
    case "steps":
      return u(d, i);
    default:
      return u(r, i);
  }
}
function g(e) {
  try {
    return document.querySelectorAll(e);
  } catch (t) {
    return;
  }
}
function v(e, t) {
  for (var n = e.length, r = arguments.length >= 2 ? arguments[1] : void 0, i = [], o = 0; o < n; o++) {
    if (o in e) {
      var a = e[o];
      if (t.call(r, a, o, e)) {
        i.push(a);
      }
    }
  }
  return i;
}
function m(e) {
  return e.reduce(function (e, t) {
    return e.concat(l.arr(t) ? m(t) : t);
  }, []);
}
function y(e) {
  return l.arr(e) ? e : (l.str(e) && (e = g(e) || e), e instanceof NodeList || e instanceof HTMLCollection ? [].slice.call(e) : [e]);
}
function b(e, t) {
  return e.some(function (e) {
    return e === t;
  });
}
function w(e) {
  var t = {};
  for (var n in e) t[n] = e[n];
  return t;
}
function E(e, t) {
  var n = w(e);
  for (var r in e) n[r] = t.hasOwnProperty(r) ? t[r] : e[r];
  return n;
}
function x(e, t) {
  var n = w(e);
  for (var r in t) n[r] = l.und(e[r]) ? t[r] : e[r];
  return n;
}
function C(e) {
  return l.rgb(e) ? function (e) {
    var t = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);
    return t ? "rgba(" + t[1] + ",1)" : e;
  }(e) : l.hex(e) ? function (e) {
    var t = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, n, r) {
      return t + t + n + n + r + r;
    });
    var n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
    return "rgba(" + parseInt(n[1], 16) + "," + parseInt(n[2], 16) + "," + parseInt(n[3], 16) + ",1)";
  }(e) : l.hsl(e) ? function (e) {
    var t;
    var n;
    var r;
    var i = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e);
    var o = parseInt(i[1], 10) / 360;
    var a = parseInt(i[2], 10) / 100;
    var s = parseInt(i[3], 10) / 100;
    var c = i[4] || 1;
    function u(e, t, n) {
      if (n < 0) {
        n += 1;
      }
      if (n > 1) {
        n -= 1;
      }
      return n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
    }
    if (0 == a) {
      t = n = r = s;
    } else {
      var l = s < .5 ? s * (1 + a) : s + a - s * a;
      var f = 2 * s - l;
      t = u(f, l, o + 1 / 3);
      n = u(f, l, o);
      r = u(f, l, o - 1 / 3);
    }
    return "rgba(" + 255 * t + "," + 255 * n + "," + 255 * r + "," + c + ")";
  }(e) : void 0;
}
function O(e) {
  var t = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);
  if (t) {
    return t[1];
  }
}
function S(e, t) {
  return l.fnc(e) ? e(t.target, t.id, t.total) : e;
}
function k(e, t) {
  return e.getAttribute(t);
}
function T(e, t, n) {
  if (b([n, "deg", "rad", "turn"], O(t))) {
    return t;
  }
  var r = a.CSS[t + n];
  if (!l.und(r)) {
    return r;
  }
  var i = document.createElement(e.tagName);
  var o = e.parentNode && e.parentNode !== document ? e.parentNode : document.body;
  o.appendChild(i);
  i.style.position = "absolute";
  i.style.width = 100 + n;
  var s = 100 / i.offsetWidth;
  o.removeChild(i);
  var c = s * parseFloat(t);
  a.CSS[t + n] = c;
  return c;
}
function B(e, t, n) {
  if (t in e.style) {
    var r = t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    var i = e.style[t] || getComputedStyle(e).getPropertyValue(r) || "0";
    return n ? T(e, i, n) : i;
  }
}
function D(e, t) {
  return l.dom(e) && !l.inp(e) && (!l.nil(k(e, t)) || l.svg(e) && e[t]) ? "attribute" : l.dom(e) && b(o, t) ? "transform" : l.dom(e) && "transform" !== t && B(e, t) ? "css" : null != e[t] ? "object" : void 0;
}
function I(e) {
  if (l.dom(e)) {
    for (var t, n = e.style.transform || "", r = /(\w+)\(([^)]*)\)/g, i = new Map(); t = r.exec(n);) {
      i.set(t[1], t[2]);
    }
    return i;
  }
}
function F(e, t, n, r) {
  var i = c(t, "scale") ? 1 : 0 + function (e) {
    return c(e, "translate") || "perspective" === e ? "px" : c(e, "rotate") || c(e, "skew") ? "deg" : void 0;
  }(t);
  var o = I(e).get(t) || i;
  if (n) {
    n.transforms.list.set(t, o);
    n.transforms.last = t;
  }
  return r ? T(e, o, r) : o;
}
function R(e, t, n, r) {
  switch (D(e, t)) {
    case "transform":
      return F(e, t, r, n);
    case "css":
      return B(e, t, n);
    case "attribute":
      return k(e, t);
    default:
      return e[t] || 0;
  }
}
function P(e, t) {
  var n = /^(\*=|\+=|-=)/.exec(e);
  if (!n) {
    return e;
  }
  var r = O(e) || 0;
  var i = parseFloat(t);
  var o = parseFloat(e.replace(n[0], ""));
  switch (n[0][0]) {
    case "+":
      return i + o + r;
    case "-":
      return i - o + r;
    case "*":
      return i * o + r;
  }
}
function N(e, t) {
  if (l.col(e)) {
    return C(e);
  }
  if (/\s/g.test(e)) {
    return e;
  }
  var n = O(e);
  var r = n ? e.substr(0, e.length - n.length) : e;
  return t ? r + t : r;
}
function M(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
function j(e) {
  for (var t, n = e.points, r = 0, i = 0; i < n.numberOfItems; i++) {
    var o = n.getItem(i);
    if (i > 0) {
      r += M(t, o);
    }
    t = o;
  }
  return r;
}
function L(e) {
  if (e.getTotalLength) {
    return e.getTotalLength();
  }
  switch (e.tagName.toLowerCase()) {
    case "circle":
      return function (e) {
        return 2 * Math.PI * k(e, "r");
      }(e);
    case "rect":
      return function (e) {
        return 2 * k(e, "width") + 2 * k(e, "height");
      }(e);
    case "line":
      return function (e) {
        return M({
          x: k(e, "x1"),
          y: k(e, "y1")
        }, {
          x: k(e, "x2"),
          y: k(e, "y2")
        });
      }(e);
    case "polyline":
      return j(e);
    case "polygon":
      return function (e) {
        var t = e.points;
        return j(e) + M(t.getItem(t.numberOfItems - 1), t.getItem(0));
      }(e);
  }
}
function U(e, t) {
  var n = t || {};
  var r = n.el || function (e) {
    for (var t = e.parentNode; l.svg(t) && l.svg(t.parentNode);) {
      t = t.parentNode;
    }
    return t;
  }(e);
  var i = r.getBoundingClientRect();
  var o = k(r, "viewBox");
  var a = i.width;
  var s = i.height;
  var c = n.viewBox || (o ? o.split(" ") : [0, 0, a, s]);
  return {
    el: r,
    viewBox: c,
    x: c[0] / 1,
    y: c[1] / 1,
    w: a,
    h: s,
    vW: c[2],
    vH: c[3]
  };
}
function H(e, t, n) {
  function r(n) {
    if (void 0 === n) {
      n = 0;
    }
    var r = t + n >= 1 ? t + n : 0;
    return e.el.getPointAtLength(r);
  }
  var i = U(e.el, e.svg);
  var o = r();
  var a = r(-1);
  var s = r(1);
  var c = n ? 1 : i.w / i.vW;
  var u = n ? 1 : i.h / i.vH;
  switch (e.property) {
    case "x":
      return (o.x - i.x) * c;
    case "y":
      return (o.y - i.y) * u;
    case "angle":
      return 180 * Math.atan2(s.y - a.y, s.x - a.x) / Math.PI;
  }
}
function V(e, t) {
  var n = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g;
  var r = N(l.pth(e) ? e.totalLength : e, t) + "";
  return {
    original: r,
    numbers: r.match(n) ? r.match(n).map(Number) : [0],
    strings: l.str(e) || t ? r.split(n) : []
  };
}
function G(e) {
  return v(e ? m(l.arr(e) ? e.map(y) : y(e)) : [], function (e, t, n) {
    return n.indexOf(e) === t;
  });
}
function z(e) {
  var t = G(e);
  return t.map(function (e, n) {
    return {
      target: e,
      id: n,
      total: t.length,
      transforms: {
        list: I(e)
      }
    };
  });
}
function Q(e, t) {
  var n = w(t);
  if (/^spring/.test(n.easing) && (n.duration = h(n.easing)), l.arr(e)) {
    var r = e.length;
    if (2 === r && !l.obj(e[0])) {
      e = {
        value: e
      };
    } else {
      if (!l.fnc(t.duration)) {
        n.duration = t.duration / r;
      }
    }
  }
  var i = l.arr(e) ? e : [e];
  return i.map(function (e, n) {
    var r = l.obj(e) && !l.pth(e) ? e : {
      value: e
    };
    if (l.und(r.delay)) {
      r.delay = n ? 0 : t.delay;
    }
    if (l.und(r.endDelay)) {
      r.endDelay = n === i.length - 1 ? t.endDelay : 0;
    }
    return r;
  }).map(function (e) {
    return x(e, n);
  });
}
function W(e, t) {
  var n = [];
  var r = t.keyframes;
  for (var i in r && (t = x(function (e) {
    for (var t = v(m(e.map(function (e) {
        return Object.keys(e);
      })), function (e) {
        return l.key(e);
      }).reduce(function (e, t) {
        if (e.indexOf(t) < 0) {
          e.push(t);
        }
        return e;
      }, []), n = {}, r = function (r) {
        var i = t[r];
        n[i] = e.map(function (e) {
          var t = {};
          for (var n in e) if (l.key(n)) {
            if (n == i) {
              t.value = e[n];
            }
          } else {
            t[n] = e[n];
          }
          return t;
        });
      }, i = 0; i < t.length; i++) {
      r(i);
    }
    return n;
  }(r), t)), t) if (l.key(i)) {
    n.push({
      name: i,
      tweens: Q(t[i], e)
    });
  }
  return n;
}
function K(e, t) {
  var n;
  return e.tweens.map(function (r) {
    var i = function (e, t) {
      var n = {};
      for (var r in e) {
        var i = S(e[r], t);
        if (l.arr(i) && 1 === (i = i.map(function (e) {
          return S(e, t);
        })).length) {
          i = i[0];
        }
        n[r] = i;
      }
      n.duration = parseFloat(n.duration);
      n.delay = parseFloat(n.delay);
      return n;
    }(r, t);
    var o = i.value;
    var a = l.arr(o) ? o[1] : o;
    var s = O(a);
    var c = R(t.target, e.name, s, t);
    var u = n ? n.to.original : c;
    var f = l.arr(o) ? o[0] : u;
    var h = O(f) || O(c);
    var d = s || h;
    if (l.und(a)) {
      a = u;
    }
    i.from = V(f, d);
    i.to = V(P(a, f), d);
    i.start = n ? n.end : 0;
    i.end = i.start + i.delay + i.duration + i.endDelay;
    i.easing = A(i.easing, i.duration);
    i.isPath = l.pth(o);
    i.isPathTargetInsideSVG = i.isPath && l.svg(t.target);
    i.isColor = l.col(i.from.original);
    if (i.isColor) {
      i.round = 1;
    }
    n = i;
    return i;
  });
}
var X = {
  css: function (e, t, n) {
    return e.style[t] = n;
  },
  attribute: function (e, t, n) {
    return e.setAttribute(t, n);
  },
  object: function (e, t, n) {
    return e[t] = n;
  },
  transform: function (e, t, n, r, i) {
    if (r.list.set(t, n), t === r.last || i) {
      var o = "";
      r.list.forEach(function (e, t) {
        o += t + "(" + e + ") ";
      });
      e.style.transform = o;
    }
  }
};
function Y(e, t) {
  z(e).forEach(function (e) {
    for (var n in t) {
      var r = S(t[n], e);
      var i = e.target;
      var o = O(r);
      var a = R(i, n, o, e);
      var s = P(N(r, o || O(a)), a);
      var c = D(i, n);
      X[c](i, n, s, e.transforms, !0);
    }
  });
}
function q(e, t) {
  return v(m(e.map(function (e) {
    return t.map(function (t) {
      return function (e, t) {
        var n = D(e.target, t.name);
        if (n) {
          var r = K(t, e);
          var i = r[r.length - 1];
          return {
            type: n,
            property: t.name,
            animatable: e,
            tweens: r,
            duration: i.end,
            delay: r[0].delay,
            endDelay: i.endDelay
          };
        }
      }(e, t);
    });
  })), function (e) {
    return !l.und(e);
  });
}
function $(e, t) {
  var n = e.length;
  var r = function (e) {
    return e.timelineOffset ? e.timelineOffset : 0;
  };
  var i = {};
  i.duration = n ? Math.max.apply(Math, e.map(function (e) {
    return r(e) + e.duration;
  })) : t.duration;
  i.delay = n ? Math.min.apply(Math, e.map(function (e) {
    return r(e) + e.delay;
  })) : t.delay;
  i.endDelay = n ? i.duration - Math.max.apply(Math, e.map(function (e) {
    return r(e) + e.duration - e.endDelay;
  })) : t.endDelay;
  return i;
}
var J = 0;
var Z = [];
var ee = function () {
  var e;
  function t(n) {
    for (var r = Z.length, i = 0; i < r;) {
      var o = Z[i];
      if (o.paused) {
        Z.splice(i, 1);
        r--;
      } else {
        o.tick(n);
        i++;
      }
    }
    e = i > 0 ? requestAnimationFrame(t) : void 0;
  }
  if ("undefined" !== typeof document) {
    document.addEventListener("visibilitychange", function () {
      if (ne.suspendWhenDocumentHidden) {
        if (te()) {
          e = cancelAnimationFrame(e);
        } else {
          Z.forEach(function (e) {
            return e._onDocumentVisibility();
          });
          ee();
        }
      }
    });
  }
  return function () {
    if (!(e || te() && ne.suspendWhenDocumentHidden || !(Z.length > 0))) {
      e = requestAnimationFrame(t);
    }
  };
}();
function te() {
  return !!document && document.hidden;
}
function ne(e) {
  if (void 0 === e) {
    e = {};
  }
  var t;
  var n = 0;
  var o = 0;
  var a = 0;
  var c = 0;
  var u = null;
  function l(e) {
    var t = window.Promise && new Promise(function (e) {
      return u = e;
    });
    e.finished = t;
    return t;
  }
  var f = function (e) {
    var t = E(r, e);
    var n = E(i, e);
    var o = W(n, e);
    var a = z(e.targets);
    var s = q(a, o);
    var c = $(s, n);
    var u = J;
    J++;
    return x(t, {
      id: u,
      children: [],
      animatables: a,
      animations: s,
      duration: c.duration,
      delay: c.delay,
      endDelay: c.endDelay
    });
  }(e);
  l(f);
  function h() {
    var e = f.direction;
    if ("alternate" !== e) {
      f.direction = "normal" !== e ? "normal" : "reverse";
    }
    f.reversed = !f.reversed;
    t.forEach(function (e) {
      return e.reversed = f.reversed;
    });
  }
  function d(e) {
    return f.reversed ? f.duration - e : e;
  }
  function p() {
    n = 0;
    o = d(f.currentTime) * (1 / ne.speed);
  }
  function _(e, t) {
    if (t) {
      t.seek(e - t.timelineOffset);
    }
  }
  function A(e) {
    for (var t = 0, n = f.animations, r = n.length; t < r;) {
      var i = n[t];
      var o = i.animatable;
      var a = i.tweens;
      var c = a.length - 1;
      var u = a[c];
      if (c) {
        u = v(a, function (t) {
          return e < t.end;
        })[0] || u;
      }
      for (var l = s(e - u.start - u.delay, 0, u.duration) / u.duration, h = isNaN(l) ? 1 : u.easing(l), d = u.to.strings, p = u.round, _ = [], A = u.to.numbers.length, g = void 0, m = 0; m < A; m++) {
        var y = void 0;
        var b = u.to.numbers[m];
        var w = u.from.numbers[m] || 0;
        y = u.isPath ? H(u.value, h * b, u.isPathTargetInsideSVG) : w + h * (b - w);
        if (p) {
          if (!(u.isColor && m > 2)) {
            y = Math.round(y * p) / p;
          }
        }
        _.push(y);
      }
      var E = d.length;
      if (E) {
        g = d[0];
        for (var x = 0; x < E; x++) {
          d[x];
          var C = d[x + 1];
          var O = _[x];
          if (!isNaN(O)) {
            g += C ? O + C : O + " ";
          }
        }
      } else {
        g = _[0];
      }
      X[i.type](o.target, i.property, g, o.transforms);
      i.currentValue = g;
      t++;
    }
  }
  function g(e) {
    if (f[e] && !f.passThrough) {
      f[e](f);
    }
  }
  function m(e) {
    var r = f.duration;
    var i = f.delay;
    var p = r - f.endDelay;
    var v = d(e);
    f.progress = s(v / r * 100, 0, 100);
    f.reversePlayback = v < f.currentTime;
    if (t) {
      (function (e) {
        if (f.reversePlayback) {
          for (var n = c; n--;) {
            _(e, t[n]);
          }
        } else {
          for (var r = 0; r < c; r++) {
            _(e, t[r]);
          }
        }
      })(v);
    }
    if (!f.began && f.currentTime > 0) {
      f.began = !0;
      g("begin");
    }
    if (!f.loopBegan && f.currentTime > 0) {
      f.loopBegan = !0;
      g("loopBegin");
    }
    if (v <= i && 0 !== f.currentTime) {
      A(0);
    }
    if (v >= p && f.currentTime !== r || !r) {
      A(r);
    }
    if (v > i && v < p) {
      if (!f.changeBegan) {
        f.changeBegan = !0;
        f.changeCompleted = !1;
        g("changeBegin");
      }
      g("change");
      A(v);
    } else {
      if (f.changeBegan) {
        f.changeCompleted = !0;
        f.changeBegan = !1;
        g("changeComplete");
      }
    }
    f.currentTime = s(v, 0, r);
    if (f.began) {
      g("update");
    }
    if (e >= r) {
      o = 0;
      if (f.remaining && !0 !== f.remaining) {
        f.remaining--;
      }
      if (f.remaining) {
        n = a;
        g("loopComplete");
        f.loopBegan = !1;
        if ("alternate" === f.direction) {
          h();
        }
      } else {
        f.paused = !0;
        if (!f.completed) {
          f.completed = !0;
          g("loopComplete");
          g("complete");
          if (!f.passThrough && "Promise" in window) {
            u();
            l(f);
          }
        }
      }
    }
  }
  f.reset = function () {
    var e = f.direction;
    f.passThrough = !1;
    f.currentTime = 0;
    f.progress = 0;
    f.paused = !0;
    f.began = !1;
    f.loopBegan = !1;
    f.changeBegan = !1;
    f.completed = !1;
    f.changeCompleted = !1;
    f.reversePlayback = !1;
    f.reversed = "reverse" === e;
    f.remaining = f.loop;
    t = f.children;
    for (var n = c = t.length; n--;) {
      f.children[n].reset();
    }
    if (f.reversed && !0 !== f.loop || "alternate" === e && 1 === f.loop) {
      f.remaining++;
    }
    A(f.reversed ? f.duration : 0);
  };
  f._onDocumentVisibility = p;
  f.set = function (e, t) {
    Y(e, t);
    return f;
  };
  f.tick = function (e) {
    a = e;
    if (!n) {
      n = a;
    }
    m((a + (o - n)) * ne.speed);
  };
  f.seek = function (e) {
    m(d(e));
  };
  f.pause = function () {
    f.paused = !0;
    p();
  };
  f.play = function () {
    if (f.paused) {
      if (f.completed) {
        f.reset();
      }
      f.paused = !1;
      Z.push(f);
      p();
      ee();
    }
  };
  f.reverse = function () {
    h();
    f.completed = !f.reversed;
    p();
  };
  f.restart = function () {
    f.reset();
    f.play();
  };
  f.remove = function (e) {
    ie(G(e), f);
  };
  f.reset();
  if (f.autoplay) {
    f.play();
  }
  return f;
}
function re(e, t) {
  for (var n = t.length; n--;) {
    if (b(e, t[n].animatable.target)) {
      t.splice(n, 1);
    }
  }
}
function ie(e, t) {
  var n = t.animations;
  var r = t.children;
  re(e, n);
  for (var i = r.length; i--;) {
    var o = r[i];
    var a = o.animations;
    re(e, a);
    if (!(a.length || o.children.length)) {
      r.splice(i, 1);
    }
  }
  if (!(n.length || r.length)) {
    t.pause();
  }
}
ne.version = "3.2.1";
ne.speed = 1;
ne.suspendWhenDocumentHidden = !0;
ne.running = Z;
ne.remove = function (e) {
  for (var t = G(e), n = Z.length; n--;) {
    ie(t, Z[n]);
  }
};
ne.get = R;
ne.set = Y;
ne.convertPx = T;
ne.path = function (e, t) {
  var n = l.str(e) ? g(e)[0] : e;
  var r = t || 100;
  return function (e) {
    return {
      property: e,
      el: n,
      svg: U(n),
      totalLength: L(n) * (r / 100)
    };
  };
};
ne.setDashoffset = function (e) {
  var t = L(e);
  e.setAttribute("stroke-dasharray", t);
  return t;
};
ne.stagger = function (e, t) {
  if (void 0 === t) {
    t = {};
  }
  var n = t.direction || "normal";
  var r = t.easing ? A(t.easing) : null;
  var i = t.grid;
  var o = t.axis;
  var a = t.from || 0;
  var s = "first" === a;
  var c = "center" === a;
  var u = "last" === a;
  var f = l.arr(e);
  var h = f ? parseFloat(e[0]) : parseFloat(e);
  var d = f ? parseFloat(e[1]) : 0;
  var p = O(f ? e[1] : e) || 0;
  var _ = t.start || 0 + (f ? h : 0);
  var g = [];
  var v = 0;
  return function (e, t, l) {
    if (s && (a = 0), c && (a = (l - 1) / 2), u && (a = l - 1), !g.length) {
      for (var A = 0; A < l; A++) {
        if (i) {
          var m = c ? (i[0] - 1) / 2 : a % i[0];
          var y = c ? (i[1] - 1) / 2 : Math.floor(a / i[0]);
          var b = m - A % i[0];
          var w = y - Math.floor(A / i[0]);
          var E = Math.sqrt(b * b + w * w);
          if ("x" === o) {
            E = -b;
          }
          if ("y" === o) {
            E = -w;
          }
          g.push(E);
        } else {
          g.push(Math.abs(a - A));
        }
        v = Math.max.apply(Math, g);
      }
      if (r) {
        g = g.map(function (e) {
          return r(e / v) * v;
        });
      }
      if ("reverse" === n) {
        g = g.map(function (e) {
          return o ? e < 0 ? -1 * e : -e : Math.abs(v - e);
        });
      }
    }
    return _ + (f ? (d - h) / v : h) * (Math.round(100 * g[t]) / 100) + p;
  };
};
ne.timeline = function (e) {
  if (void 0 === e) {
    e = {};
  }
  var t = ne(e);
  t.duration = 0;
  t.add = function (n, r) {
    var o = Z.indexOf(t);
    var a = t.children;
    function s(e) {
      e.passThrough = !0;
    }
    if (o > -1) {
      Z.splice(o, 1);
    }
    for (var c = 0; c < a.length; c++) {
      s(a[c]);
    }
    var u = x(n, E(i, e));
    u.targets = u.targets || e.targets;
    var f = t.duration;
    u.autoplay = !1;
    u.direction = t.direction;
    u.timelineOffset = l.und(r) ? f : P(r, f);
    s(t);
    t.seek(u.timelineOffset);
    var h = ne(u);
    s(h);
    a.push(h);
    var d = $(a, e);
    t.delay = d.delay;
    t.endDelay = d.endDelay;
    t.duration = d.duration;
    t.seek(0);
    t.reset();
    if (t.autoplay) {
      t.play();
    }
    return t;
  };
  return t;
};
ne.easing = A;
ne.penner = _;
ne.random = function (e, t) {
  return Math.floor(Math.random() * (t - e + 1)) + e;
};
exports.default = ne;