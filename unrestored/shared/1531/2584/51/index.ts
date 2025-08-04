"use strict";

var r = require("./1748/index");
var i = require("./1517/index");
var o = [].slice;
var a = ["keyword", "gray", "hex"];
var s = {};
Object.keys(i).forEach(function (e) {
  s[o.call(i[e].labels).sort().join("")] = e;
});
var c = {};
function u(e, t) {
  if (!(this instanceof u)) {
    return new u(e, t);
  }
  if (t && t in a) {
    t = null;
  }
  if (t && !(t in i)) {
    throw new Error("Unknown model: " + t);
  }
  var n;
  var l;
  if (null == e) {
    this.model = "rgb";
    this.color = [0, 0, 0];
    this.valpha = 1;
  } else if (e instanceof u) {
    this.model = e.model;
    this.color = e.color.slice();
    this.valpha = e.valpha;
  } else if ("string" === typeof e) {
    var f = r.get(e);
    if (null === f) {
      throw new Error("Unable to parse color from string: " + e);
    }
    this.model = f.model;
    l = i[this.model].channels;
    this.color = f.value.slice(0, l);
    this.valpha = "number" === typeof f.value[l] ? f.value[l] : 1;
  } else if (e.length) {
    this.model = t || "rgb";
    l = i[this.model].channels;
    var d = o.call(e, 0, l);
    this.color = h(d, l);
    this.valpha = "number" === typeof e[l] ? e[l] : 1;
  } else if ("number" === typeof e) {
    e &= 16777215;
    this.model = "rgb";
    this.color = [e >> 16 & 255, e >> 8 & 255, 255 & e];
    this.valpha = 1;
  } else {
    this.valpha = 1;
    var p = Object.keys(e);
    if ("alpha" in e) {
      p.splice(p.indexOf("alpha"), 1);
      this.valpha = "number" === typeof e.alpha ? e.alpha : 0;
    }
    var _ = p.sort().join("");
    if (!(_ in s)) {
      throw new Error("Unable to parse color from object: " + JSON.stringify(e));
    }
    this.model = s[_];
    var A = i[this.model].labels;
    var g = [];
    for (n = 0; n < A.length; n++) {
      g.push(e[A[n]]);
    }
    this.color = h(g);
  }
  if (c[this.model]) {
    for (l = i[this.model].channels, n = 0; n < l; n++) {
      var v = c[this.model][n];
      if (v) {
        this.color[n] = v(this.color[n]);
      }
    }
  }
  this.valpha = Math.max(0, Math.min(1, this.valpha));
  if (Object.freeze) {
    Object.freeze(this);
  }
}
function l(e, t, n) {
  (e = Array.isArray(e) ? e : [e]).forEach(function (e) {
    (c[e] || (c[e] = []))[t] = n;
  });
  e = e[0];
  return function (r) {
    var i;
    return arguments.length ? (n && (r = n(r)), (i = this[e]()).color[t] = r, i) : (i = this[e]().color[t], n && (i = n(i)), i);
  };
}
function f(e) {
  return function (t) {
    return Math.max(0, Math.min(e, t));
  };
}
function d(e) {
  return Array.isArray(e) ? e : [e];
}
function h(e, t) {
  for (var n = 0; n < t; n++) {
    if ("number" !== typeof e[n]) {
      e[n] = 0;
    }
  }
  return e;
}
u.prototype = {
  toString: function () {
    return this.string();
  },
  toJSON: function () {
    return this[this.model]();
  },
  string: function (e) {
    var t = this.model in r.to ? this : this.rgb();
    var n = 1 === (t = t.round("number" === typeof e ? e : 1)).valpha ? t.color : t.color.concat(this.valpha);
    return r.to[t.model](n);
  },
  percentString: function (e) {
    var t = this.rgb().round("number" === typeof e ? e : 1);
    var n = 1 === t.valpha ? t.color : t.color.concat(this.valpha);
    return r.to.rgb.percent(n);
  },
  array: function () {
    return 1 === this.valpha ? this.color.slice() : this.color.concat(this.valpha);
  },
  object: function () {
    for (var e = {}, t = i[this.model].channels, n = i[this.model].labels, r = 0; r < t; r++) {
      e[n[r]] = this.color[r];
    }
    if (1 !== this.valpha) {
      e.alpha = this.valpha;
    }
    return e;
  },
  unitArray: function () {
    var e = this.rgb().color;
    e[0] /= 255;
    e[1] /= 255;
    e[2] /= 255;
    if (1 !== this.valpha) {
      e.push(this.valpha);
    }
    return e;
  },
  unitObject: function () {
    var e = this.rgb().object();
    e.r /= 255;
    e.g /= 255;
    e.b /= 255;
    if (1 !== this.valpha) {
      e.alpha = this.valpha;
    }
    return e;
  },
  round: function (e) {
    e = Math.max(e || 0, 0);
    return new u(this.color.map(function (e) {
      return function (t) {
        return function (e, t) {
          return Number(e.toFixed(t));
        }(t, e);
      };
    }(e)).concat(this.valpha), this.model);
  },
  alpha: function (e) {
    return arguments.length ? new u(this.color.concat(Math.max(0, Math.min(1, e))), this.model) : this.valpha;
  },
  red: l("rgb", 0, f(255)),
  green: l("rgb", 1, f(255)),
  blue: l("rgb", 2, f(255)),
  hue: l(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, function (e) {
    return (e % 360 + 360) % 360;
  }),
  saturationl: l("hsl", 1, f(100)),
  lightness: l("hsl", 2, f(100)),
  saturationv: l("hsv", 1, f(100)),
  value: l("hsv", 2, f(100)),
  chroma: l("hcg", 1, f(100)),
  gray: l("hcg", 2, f(100)),
  white: l("hwb", 1, f(100)),
  wblack: l("hwb", 2, f(100)),
  cyan: l("cmyk", 0, f(100)),
  magenta: l("cmyk", 1, f(100)),
  yellow: l("cmyk", 2, f(100)),
  black: l("cmyk", 3, f(100)),
  x: l("xyz", 0, f(100)),
  y: l("xyz", 1, f(100)),
  z: l("xyz", 2, f(100)),
  l: l("lab", 0, f(100)),
  a: l("lab", 1),
  b: l("lab", 2),
  keyword: function (e) {
    return arguments.length ? new u(e) : i[this.model].keyword(this.color);
  },
  hex: function (e) {
    return arguments.length ? new u(e) : r.to.hex(this.rgb().round().color);
  },
  rgbNumber: function () {
    var e = this.rgb().color;
    return (255 & e[0]) << 16 | (255 & e[1]) << 8 | 255 & e[2];
  },
  luminosity: function () {
    for (var e = this.rgb().color, t = [], n = 0; n < e.length; n++) {
      var r = e[n] / 255;
      t[n] = r <= .03928 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4);
    }
    return .2126 * t[0] + .7152 * t[1] + .0722 * t[2];
  },
  contrast: function (e) {
    var t = this.luminosity();
    var n = e.luminosity();
    return t > n ? (t + .05) / (n + .05) : (n + .05) / (t + .05);
  },
  level: function (e) {
    var t = this.contrast(e);
    return t >= 7.1 ? "AAA" : t >= 4.5 ? "AA" : "";
  },
  isDark: function () {
    var e = this.rgb().color;
    return (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3 < 128;
  },
  isLight: function () {
    return !this.isDark();
  },
  negate: function () {
    for (var e = this.rgb(), t = 0; t < 3; t++) {
      e.color[t] = 255 - e.color[t];
    }
    return e;
  },
  lighten: function (e) {
    var t = this.hsl();
    t.color[2] += t.color[2] * e;
    return t;
  },
  darken: function (e) {
    var t = this.hsl();
    t.color[2] -= t.color[2] * e;
    return t;
  },
  saturate: function (e) {
    var t = this.hsl();
    t.color[1] += t.color[1] * e;
    return t;
  },
  desaturate: function (e) {
    var t = this.hsl();
    t.color[1] -= t.color[1] * e;
    return t;
  },
  whiten: function (e) {
    var t = this.hwb();
    t.color[1] += t.color[1] * e;
    return t;
  },
  blacken: function (e) {
    var t = this.hwb();
    t.color[2] += t.color[2] * e;
    return t;
  },
  grayscale: function () {
    var e = this.rgb().color;
    var t = .3 * e[0] + .59 * e[1] + .11 * e[2];
    return u.rgb(t, t, t);
  },
  fade: function (e) {
    return this.alpha(this.valpha - this.valpha * e);
  },
  opaquer: function (e) {
    return this.alpha(this.valpha + this.valpha * e);
  },
  rotate: function (e) {
    var t = this.hsl();
    var n = t.color[0];
    n = (n = (n + e) % 360) < 0 ? 360 + n : n;
    t.color[0] = n;
    return t;
  },
  mix: function (e, t) {
    if (!e || !e.rgb) {
      throw new Error("Argument to \"mix\" was not a Color instance, but rather an instance of " + typeof e);
    }
    var n = e.rgb();
    var r = this.rgb();
    var i = void 0 === t ? .5 : t;
    var o = 2 * i - 1;
    var a = n.alpha() - r.alpha();
    var s = ((o * a === -1 ? o : (o + a) / (1 + o * a)) + 1) / 2;
    var c = 1 - s;
    return u.rgb(s * n.red() + c * r.red(), s * n.green() + c * r.green(), s * n.blue() + c * r.blue(), n.alpha() * i + r.alpha() * (1 - i));
  }
};
Object.keys(i).forEach(function (e) {
  if (-1 === a.indexOf(e)) {
    var t = i[e].channels;
    u.prototype[e] = function () {
      if (this.model === e) {
        return new u(this);
      }
      if (arguments.length) {
        return new u(arguments, e);
      }
      var n = "number" === typeof arguments[t] ? t : this.valpha;
      return new u(d(i[this.model][e].raw(this.color)).concat(n), e);
    };
    u[e] = function (n) {
      if ("number" === typeof n) {
        n = h(o.call(arguments), t);
      }
      return new u(n, e);
    };
  }
});
module.exports = u;