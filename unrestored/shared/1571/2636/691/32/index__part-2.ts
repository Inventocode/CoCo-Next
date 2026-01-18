/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：32__part-2
 */

"use strict"

import { W, fe } from "./index__part-1"
var le
var ue
var ce
var se
var ae
var oe
var ie
var re
var ne
var te
var ee
var Z
var J
var $
var q
var Y
var X
var K
import * as /* [auto-meaningful-name] */$_1337 from "./1337"
import /* [auto-meaningful-name] */$_13371 from "./1337"
import * as /* [auto-meaningful-name] */$_1338 from "./1338"
import /* [auto-meaningful-name] */$_13381 from "./1338"
import * as /* [auto-meaningful-name] */$_1050_index from "./1050/index"
!function (e) {
  e[e.WEBGL_LEGACY = 0] = "WEBGL_LEGACY"
  e[e.WEBGL = 1] = "WEBGL"
  e[e.WEBGL2 = 2] = "WEBGL2"
}(K || (K = {}));
(function (e) {
  e[e.UNKNOWN = 0] = "UNKNOWN"
  e[e.WEBGL = 1] = "WEBGL"
  e[e.CANVAS = 2] = "CANVAS"
})(X || (X = {}));
(function (e) {
  e[e.COLOR = 16384] = "COLOR"
  e[e.DEPTH = 256] = "DEPTH"
  e[e.STENCIL = 1024] = "STENCIL"
})(Y || (Y = {}));
(function (e) {
  e[e.NORMAL = 0] = "NORMAL"
  e[e.ADD = 1] = "ADD"
  e[e.MULTIPLY = 2] = "MULTIPLY"
  e[e.SCREEN = 3] = "SCREEN"
  e[e.OVERLAY = 4] = "OVERLAY"
  e[e.DARKEN = 5] = "DARKEN"
  e[e.LIGHTEN = 6] = "LIGHTEN"
  e[e.COLOR_DODGE = 7] = "COLOR_DODGE"
  e[e.COLOR_BURN = 8] = "COLOR_BURN"
  e[e.HARD_LIGHT = 9] = "HARD_LIGHT"
  e[e.SOFT_LIGHT = 10] = "SOFT_LIGHT"
  e[e.DIFFERENCE = 11] = "DIFFERENCE"
  e[e.EXCLUSION = 12] = "EXCLUSION"
  e[e.HUE = 13] = "HUE"
  e[e.SATURATION = 14] = "SATURATION"
  e[e.COLOR = 15] = "COLOR"
  e[e.LUMINOSITY = 16] = "LUMINOSITY"
  e[e.NORMAL_NPM = 17] = "NORMAL_NPM"
  e[e.ADD_NPM = 18] = "ADD_NPM"
  e[e.SCREEN_NPM = 19] = "SCREEN_NPM"
  e[e.NONE = 20] = "NONE"
  e[e.SRC_OVER = 0] = "SRC_OVER"
  e[e.SRC_IN = 21] = "SRC_IN"
  e[e.SRC_OUT = 22] = "SRC_OUT"
  e[e.SRC_ATOP = 23] = "SRC_ATOP"
  e[e.DST_OVER = 24] = "DST_OVER"
  e[e.DST_IN = 25] = "DST_IN"
  e[e.DST_OUT = 26] = "DST_OUT"
  e[e.DST_ATOP = 27] = "DST_ATOP"
  e[e.ERASE = 26] = "ERASE"
  e[e.SUBTRACT = 28] = "SUBTRACT"
  e[e.XOR = 29] = "XOR"
})(q || (q = {}));
(function (e) {
  e[e.POINTS = 0] = "POINTS"
  e[e.LINES = 1] = "LINES"
  e[e.LINE_LOOP = 2] = "LINE_LOOP"
  e[e.LINE_STRIP = 3] = "LINE_STRIP"
  e[e.TRIANGLES = 4] = "TRIANGLES"
  e[e.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP"
  e[e.TRIANGLE_FAN = 6] = "TRIANGLE_FAN"
})($ || ($ = {}));
(function (e) {
  e[e.RGBA = 6408] = "RGBA"
  e[e.RGB = 6407] = "RGB"
  e[e.ALPHA = 6406] = "ALPHA"
  e[e.LUMINANCE = 6409] = "LUMINANCE"
  e[e.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA"
  e[e.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT"
  e[e.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL"
})(J || (J = {}));
(function (e) {
  e[e.TEXTURE_2D = 3553] = "TEXTURE_2D"
  e[e.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP"
  e[e.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY"
  e[e.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X"
  e[e.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X"
  e[e.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y"
  e[e.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y"
  e[e.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z"
  e[e.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z"
})(Z || (Z = {}));
(function (e) {
  e[e.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE"
  e[e.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT"
  e[e.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5"
  e[e.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4"
  e[e.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1"
  e[e.FLOAT = 5126] = "FLOAT"
  e[e.HALF_FLOAT = 36193] = "HALF_FLOAT"
})(ee || (ee = {}));
(function (e) {
  e[e.FLOAT = 0] = "FLOAT"
  e[e.INT = 1] = "INT"
  e[e.UINT = 2] = "UINT"
})(te || (te = {}));
(function (e) {
  e[e.NEAREST = 0] = "NEAREST"
  e[e.LINEAR = 1] = "LINEAR"
})(ne || (ne = {}));
(function (e) {
  e[e.CLAMP = 33071] = "CLAMP"
  e[e.REPEAT = 10497] = "REPEAT"
  e[e.MIRRORED_REPEAT = 33648] = "MIRRORED_REPEAT"
})(re || (re = {}));
(function (e) {
  e[e.OFF = 0] = "OFF"
  e[e.POW2 = 1] = "POW2"
  e[e.ON = 2] = "ON"
  e[e.ON_MANUAL = 3] = "ON_MANUAL"
})(ie || (ie = {}));
(function (e) {
  e[e.NPM = 0] = "NPM"
  e[e.UNPACK = 1] = "UNPACK"
  e[e.PMA = 2] = "PMA"
  e[e.NO_PREMULTIPLIED_ALPHA = 0] = "NO_PREMULTIPLIED_ALPHA"
  e[e.PREMULTIPLY_ON_UPLOAD = 1] = "PREMULTIPLY_ON_UPLOAD"
  e[e.PREMULTIPLY_ALPHA = 2] = "PREMULTIPLY_ALPHA"
})(oe || (oe = {}));
(function (e) {
  e[e.NO = 0] = "NO"
  e[e.YES = 1] = "YES"
  e[e.AUTO = 2] = "AUTO"
  e[e.BLEND = 0] = "BLEND"
  e[e.CLEAR = 1] = "CLEAR"
  e[e.BLIT = 2] = "BLIT"
})(ae || (ae = {}));
(function (e) {
  e[e.AUTO = 0] = "AUTO"
  e[e.MANUAL = 1] = "MANUAL"
})(se || (se = {}));
(function (e) {
  e.LOW = "lowp"
  e.MEDIUM = "mediump"
  e.HIGH = "highp"
})(ce || (ce = {}));
(function (e) {
  e[e.NONE = 0] = "NONE"
  e[e.SCISSOR = 1] = "SCISSOR"
  e[e.STENCIL = 2] = "STENCIL"
  e[e.SPRITE = 3] = "SPRITE"
})(ue || (ue = {}));
(function (e) {
  e[e.NONE = 0] = "NONE"
  e[e.LOW = 2] = "LOW"
  e[e.MEDIUM = 4] = "MEDIUM"
  e[e.HIGH = 8] = "HIGH"
})(le || (le = {}))
var ge = {
  parse: $_1050_index.parse,
  format: $_1050_index.format,
  resolve: $_1050_index.resolve
}
fe.RETINA_PREFIX = /@([0-9\.]+)x/
fe.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = false
var ve
var me = false
function ye() {
  me = true
}
function be(e) {
  var /* [auto-meaningful-name] */self$console
  if (!me) {
    if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
      var n = ["\n %c %c %c PixiJS 6.0.4 - ✰ " + e + " ✰  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ \n\n", "background: #ff66a5; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff66a5; background: #030307; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "background: #ffc3dc; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;"];
      (self$console = self.console).log.apply(self$console, n)
    } else if (self.console) {
      self.console.log("PixiJS 6.0.4 - " + e + " - http://www.pixijs.com/")
    }
    me = true
  }
}
function we() {
  if ("undefined" === typeof ve) {
    ve = function () {
      var e = {
        stencil: true,
        failIfMajorPerformanceCaveat: fe.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT
      }
      try {
        if (!self.WebGLRenderingContext) {
          return false
        }
        var t = document.createElement("canvas")
        var n = t.getContext("webgl", e) || t.getContext("experimental-webgl", e)
        var r = !(!n || !n.getContextAttributes().stencil)
        if (n) {
          var i = n.getExtension("WEBGL_lose_context")
          if (i) {
            i.loseContext()
          }
        }
        n = null
        return r
      } catch (o) {
        return false
      }
    }()
  }
  return ve
}
var Ee = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
}
function xe(e, t) {
  if (undefined === t) {
    t = []
  }
  t[0] = (e >> 16 & 255) / 255
  t[1] = (e >> 8 & 255) / 255
  t[2] = (255 & e) / 255
  return t
}
function Ce(e) {
  var t = e.toString(16)
  return "#" + (t = "000000".substr(0, 6 - t.length) + t)
}
function Oe(e) {
  if ("string" === typeof e && "#" === (e = Ee[e.toLowerCase()] || e)[0]) {
    e = e.substr(1)
  }
  return parseInt(e, 16)
}
function ke(e) {
  return (255 * e[0] << 16) + (255 * e[1] << 8) + (255 * e[2] | 0)
}
var Se = function () {
  for (var e = [], t = [], n = 0; n < 32; n++) {
    e[n] = n
    t[n] = n
  }
  e[q.NORMAL_NPM] = q.NORMAL
  e[q.ADD_NPM] = q.ADD
  e[q.SCREEN_NPM] = q.SCREEN
  t[q.NORMAL] = q.NORMAL_NPM
  t[q.ADD] = q.ADD_NPM
  t[q.SCREEN] = q.SCREEN_NPM
  var r = []
  r.push(t)
  r.push(e)
  return r
}()
function Te(e, t) {
  return Se[t ? 1 : 0][e]
}
function Be(e, t, n, r) {
  n = n || new Float32Array(4)
  if (r || undefined === r) {
    n[0] = e[0] * t
    n[1] = e[1] * t
    n[2] = e[2] * t
  } else {
    n[0] = e[0]
    n[1] = e[1]
    n[2] = e[2]
  }
  n[3] = t
  return n
}
function De(e, t) {
  if (1 === t) {
    return (255 * t << 24) + e
  }
  if (0 === t) {
    return 0
  }
  var n = e >> 16 & 255
  var r = e >> 8 & 255
  var i = 255 & e
  return (255 * t << 24) + ((n = n * t + .5 | 0) << 16) + ((r = r * t + .5 | 0) << 8) + (i = i * t + .5 | 0)
}
function Ie(e, t, n, r) {
  (n = n || new Float32Array(4))[0] = (e >> 16 & 255) / 255
  n[1] = (e >> 8 & 255) / 255
  n[2] = (255 & e) / 255
  if (r || undefined === r) {
    n[0] *= t
    n[1] *= t
    n[2] *= t
  }
  n[3] = t
  return n
}
function Re(e, t) {
  if (undefined === t) {
    t = null
  }
  var n = 6 * e
  if ((t = t || new Uint16Array(n)).length !== n) {
    throw new Error("Out buffer length is incorrect, got " + t.length + " and expected " + n)
  }
  for (var r = 0, i = 0; r < n; r += 6, i += 4) {
    t[r + 0] = i + 0
    t[r + 1] = i + 1
    t[r + 2] = i + 2
    t[r + 3] = i + 0
    t[r + 4] = i + 2
    t[r + 5] = i + 3
  }
  return t
}
function Fe(e) {
  if (4 === e.BYTES_PER_ELEMENT) {
    return e instanceof Float32Array ? "Float32Array" : e instanceof Uint32Array ? "Uint32Array" : "Int32Array"
  }
  if (2 === e.BYTES_PER_ELEMENT) {
    if (e instanceof Uint16Array) {
      return "Uint16Array"
    }
  } else if (1 === e.BYTES_PER_ELEMENT && e instanceof Uint8Array) {
    return "Uint8Array"
  }
  return null
}
var Pe = {
  Float32Array: Float32Array,
  Uint32Array: Uint32Array,
  Int32Array: Int32Array,
  Uint8Array: Uint8Array
}
function Ne(e, t) {
  for (var n = 0, r = 0, i = {}, o = 0; o < e.length; o++) {
    r += t[o]
    n += e[o].length
  }
  var a = new ArrayBuffer(4 * n)
  var s = null
  var c = 0
  for (o = 0; o < e.length; o++) {
    var u = t[o]
    var l = e[o]
    var f = Fe(l)
    if (!i[f]) {
      i[f] = new Pe[f](a)
    }
    s = i[f]
    for (var d = 0; d < l.length; d++) {
      s[(d / u | 0) * r + c + d % u] = l[d]
    }
    c += u
  }
  return new Float32Array(a)
}
function Me(e) {
  e += 0 === e ? 1 : 0
  --e
  e |= e >>> 1
  e |= e >>> 2
  e |= e >>> 4
  e |= e >>> 8
  return (e |= e >>> 16) + 1
}
function Le(e) {
  return !(e & e - 1) && !!e
}
function je(e) {
  var t = (e > 65535 ? 1 : 0) << 4
  var n = ((e >>>= t) > 255 ? 1 : 0) << 3
  t |= n
  t |= n = ((e >>>= n) > 15 ? 1 : 0) << 2
  return (t |= n = ((e >>>= n) > 3 ? 1 : 0) << 1) | (e >>>= n) >> 1
}
function Ue(e, t, n) {
  var r
  var /* [auto-meaningful-name] */e$length = e.length
  if (!(t >= e$length || 0 === n)) {
    var o = e$length - (n = t + n > e$length ? e$length - t : n)
    for (r = t; r < o; ++r) {
      e[r] = e[r + n]
    }
    e.length = o
  }
}
function He(e) {
  return 0 === e ? 0 : e < 0 ? -1 : 1
}
var Ve = 0
function Ge() {
  return ++Ve
}
var ze = {}
function Qe(e, t, n) {
  if (undefined === n) {
    n = 3
  }
  if (!ze[t]) {
    var /* [auto-meaningful-name] */newError$stack = new Error().stack
    if ("undefined" === typeof newError$stack) {
      console.warn("PixiJS Deprecation Warning: ", t + "\nDeprecated since v" + e)
    } else {
      newError$stack = newError$stack.split("\n").splice(n).join("\n")
      if (console.groupCollapsed) {
        console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s", "color:#614108;background:#fffbe6", "font-weight:normal;color:#614108;background:#fffbe6", t + "\nDeprecated since v" + e)
        console.warn(newError$stack)
        console.groupEnd()
      } else {
        console.warn("PixiJS Deprecation Warning: ", t + "\nDeprecated since v" + e)
        console.warn(newError$stack)
      }
    }
    ze[t] = true
  }
}
var We = {}
var Ke = Object.create(null)
var Xe = Object.create(null)
function Ye() {
  var e
  for (e in Ke) Ke[e].destroy()
  for (e in Xe) Xe[e].destroy()
}
function qe() {
  var e
  for (e in Ke) delete Ke[e]
  for (e in Xe) delete Xe[e]
}
var $e = function () {
  function e(e, t, n) {
    this.canvas = document.createElement("canvas")
    this.context = this.canvas.getContext("2d")
    this.resolution = n || fe.RESOLUTION
    this.resize(e, t)
  }
  e.prototype.clear = function () {
    this.context.setTransform(1, 0, 0, 1, 0, 0)
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }
  e.prototype.resize = function (e, t) {
    this.canvas.width = e * this.resolution
    this.canvas.height = t * this.resolution
  }
  e.prototype.destroy = function () {
    this.context = null
    this.canvas = null
  }
  Object.defineProperty(e.prototype, "width", {
    get: function () {
      return this.canvas.width
    },
    set: function (e) {
      this.canvas.width = e
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "height", {
    get: function () {
      return this.canvas.height
    },
    set: function (e) {
      this.canvas.height = e
    },
    enumerable: false,
    configurable: true
  })
  return e
}()
function Je(e) {
  var t
  var n
  var r
  var /* [auto-meaningful-name] */e$width = e.width
  var /* [auto-meaningful-name] */e$height = e.height
  var a = e.getContext("2d")
  var /* [auto-meaningful-name] */a$getImageData00E$widthE$height$data = a.getImageData(0, 0, e$width, e$height).data
  var /* [auto-meaningful-name] */a$getImageData00E$widthE$height$data$length = a$getImageData00E$widthE$height$data.length
  var u = {
    top: null,
    left: null,
    right: null,
    bottom: null
  }
  var l = null
  for (t = 0; t < a$getImageData00E$widthE$height$data$length; t += 4) {
    if (0 !== a$getImageData00E$widthE$height$data[t + 3]) {
      n = t / 4 % e$width
      r = ~~(t / 4 / e$width)
      if (null === u.top) {
        u.top = r
      }
      if (null === u.left || n < u.left) {
        u.left = n
      }
      if (null === u.right || u.right < n) {
        u.right = n + 1
      }
      if (null === u.bottom || u.bottom < r) {
        u.bottom = r
      }
    }
  }
  if (null !== u.top) {
    e$width = u.right - u.left
    e$height = u.bottom - u.top + 1
    l = a.getImageData(u.left, u.top, e$width, e$height)
  }
  return {
    height: e$height,
    width: e$width,
    data: l
  }
}
var Ze
var et = /^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;charset=([\w-]+))?(?:;(base64))?,(.*)/i
function tt(e) {
  var t = et.exec(e)
  if (t) {
    return {
      mediaType: t[1] ? t[1].toLowerCase() : undefined,
      subType: t[2] ? t[2].toLowerCase() : undefined,
      charset: t[3] ? t[3].toLowerCase() : undefined,
      encoding: t[4] ? t[4].toLowerCase() : undefined,
      data: t[5]
    }
  }
}
function nt(e, t) {
  if (undefined === t) {
    t = self.location
  }
  if (0 === e.indexOf("data:")) {
    return ""
  }
  t = t || self.location
  if (!Ze) {
    Ze = document.createElement("a")
  }
  Ze.href = e
  var n = ge.parse(Ze.href)
  var r = !n.port && "" === t.port || n.port === t.port
  return n.hostname === t.hostname && r && n.protocol === t.protocol ? "" : "anonymous"
}
function rt(e, t) {
  var n = fe.RETINA_PREFIX.exec(e)
  return n ? parseFloat(n[1]) : undefined !== t ? t : 1
}
var it
var ot = 2 * Math.PI
var at = 180 / Math.PI
var st = Math.PI / 180
!function (e) {
  e[e.POLY = 0] = "POLY"
  e[e.RECT = 1] = "RECT"
  e[e.CIRC = 2] = "CIRC"
  e[e.ELIP = 3] = "ELIP"
  e[e.RREC = 4] = "RREC"
}(it || (it = {}))
var ct = function () {
  function e(e, t, n, r) {
    if (undefined === e) {
      e = 0
    }
    if (undefined === t) {
      t = 0
    }
    if (undefined === n) {
      n = 0
    }
    if (undefined === r) {
      r = 0
    }
    this.x = Number(e)
    this.y = Number(t)
    this.width = Number(n)
    this.height = Number(r)
    this.type = it.RECT
  }
  Object.defineProperty(e.prototype, "left", {
    get: function () {
      return this.x
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "right", {
    get: function () {
      return this.x + this.width
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "top", {
    get: function () {
      return this.y
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "bottom", {
    get: function () {
      return this.y + this.height
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e, "EMPTY", {
    get: function () {
      return new e(0, 0, 0, 0)
    },
    enumerable: false,
    configurable: true
  })
  e.prototype.clone = function () {
    return new e(this.x, this.y, this.width, this.height)
  }
  e.prototype.copyFrom = function (e) {
    this.x = e.x
    this.y = e.y
    this.width = e.width
    this.height = e.height
    return this
  }
  e.prototype.copyTo = function (e) {
    e.x = this.x
    e.y = this.y
    e.width = this.width
    e.height = this.height
    return e
  }
  e.prototype.contains = function (e, t) {
    return !(this.width <= 0 || this.height <= 0) && e >= this.x && e < this.x + this.width && t >= this.y && t < this.y + this.height
  }
  e.prototype.pad = function (e, t) {
    if (undefined === e) {
      e = 0
    }
    if (undefined === t) {
      t = e
    }
    this.x -= e
    this.y -= t
    this.width += 2 * e
    this.height += 2 * t
    return this
  }
  e.prototype.fit = function (e) {
    var t = Math.max(this.x, e.x)
    var n = Math.min(this.x + this.width, e.x + e.width)
    var r = Math.max(this.y, e.y)
    var i = Math.min(this.y + this.height, e.y + e.height)
    this.x = t
    this.width = Math.max(n - t, 0)
    this.y = r
    this.height = Math.max(i - r, 0)
    return this
  }
  e.prototype.ceil = function (e, t) {
    if (undefined === e) {
      e = 1
    }
    if (undefined === t) {
      t = .001
    }
    var n = Math.ceil((this.x + this.width - t) * e) / e
    var r = Math.ceil((this.y + this.height - t) * e) / e
    this.x = Math.floor((this.x + t) * e) / e
    this.y = Math.floor((this.y + t) * e) / e
    this.width = n - this.x
    this.height = r - this.y
    return this
  }
  e.prototype.enlarge = function (e) {
    var t = Math.min(this.x, e.x)
    var n = Math.max(this.x + this.width, e.x + e.width)
    var r = Math.min(this.y, e.y)
    var i = Math.max(this.y + this.height, e.y + e.height)
    this.x = t
    this.width = n - t
    this.y = r
    this.height = i - r
    return this
  }
  e.prototype.toString = function () {
    return "[@pixi/math:Rectangle x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + "]"
  }
  return e
}()
var ut = function () {
  function e(e, t, n) {
    if (undefined === e) {
      e = 0
    }
    if (undefined === t) {
      t = 0
    }
    if (undefined === n) {
      n = 0
    }
    this.x = e
    this.y = t
    this.radius = n
    this.type = it.CIRC
  }
  e.prototype.clone = function () {
    return new e(this.x, this.y, this.radius)
  }
  e.prototype.contains = function (e, t) {
    if (this.radius <= 0) {
      return false
    }
    var n = this.radius * this.radius
    var r = this.x - e
    var i = this.y - t
    return (r *= r) + (i *= i) <= n
  }
  e.prototype.getBounds = function () {
    return new ct(this.x - this.radius, this.y - this.radius, 2 * this.radius, 2 * this.radius)
  }
  e.prototype.toString = function () {
    return "[@pixi/math:Circle x=" + this.x + " y=" + this.y + " radius=" + this.radius + "]"
  }
  return e
}()
var lt = function () {
  function e(e, t, n, r) {
    if (undefined === e) {
      e = 0
    }
    if (undefined === t) {
      t = 0
    }
    if (undefined === n) {
      n = 0
    }
    if (undefined === r) {
      r = 0
    }
    this.x = e
    this.y = t
    this.width = n
    this.height = r
    this.type = it.ELIP
  }
  e.prototype.clone = function () {
    return new e(this.x, this.y, this.width, this.height)
  }
  e.prototype.contains = function (e, t) {
    if (this.width <= 0 || this.height <= 0) {
      return false
    }
    var n = (e - this.x) / this.width
    var r = (t - this.y) / this.height
    return (n *= n) + (r *= r) <= 1
  }
  e.prototype.getBounds = function () {
    return new ct(this.x - this.width, this.y - this.height, this.width, this.height)
  }
  e.prototype.toString = function () {
    return "[@pixi/math:Ellipse x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + "]"
  }
  return e
}()
var ft = function () {
  function e() {
    for (var e = arguments, t = [], n = 0; n < arguments.length; n++) {
      t[n] = e[n]
    }
    var r = Array.isArray(t[0]) ? t[0] : t
    if ("number" !== typeof r[0]) {
      for (var i = [], o = 0, /* [auto-meaningful-name] */r$length = r.length; o < r$length; o++) {
        i.push(r[o].x, r[o].y)
      }
      r = i
    }
    this.points = r
    this.type = it.POLY
    this.closeStroke = true
  }
  e.prototype.clone = function () {
    var t = new e(this.points.slice())
    t.closeStroke = this.closeStroke
    return t
  }
  e.prototype.contains = function (e, t) {
    for (var n = false, r = this.points.length / 2, i = 0, o = r - 1; i < r; o = i++) {
      var a = this.points[2 * i]
      var s = this.points[2 * i + 1]
      var c = this.points[2 * o]
      var u = this.points[2 * o + 1]
      if (s > t !== u > t && e < (t - s) / (u - s) * (c - a) + a) {
        n = !n
      }
    }
    return n
  }
  e.prototype.toString = function () {
    return "[@pixi/math:PolygoncloseStroke=" + this.closeStroke + "points=" + this.points.reduce(function (e, t) {
      return e + ", " + t
    }, "") + "]"
  }
  return e
}()
var dt = function () {
  function e(e, t, n, r, i) {
    if (undefined === e) {
      e = 0
    }
    if (undefined === t) {
      t = 0
    }
    if (undefined === n) {
      n = 0
    }
    if (undefined === r) {
      r = 0
    }
    if (undefined === i) {
      i = 20
    }
    this.x = e
    this.y = t
    this.width = n
    this.height = r
    this.radius = i
    this.type = it.RREC
  }
  e.prototype.clone = function () {
    return new e(this.x, this.y, this.width, this.height, this.radius)
  }
  e.prototype.contains = function (e, t) {
    if (this.width <= 0 || this.height <= 0) {
      return false
    }
    if (e >= this.x && e <= this.x + this.width && t >= this.y && t <= this.y + this.height) {
      if (t >= this.y + this.radius && t <= this.y + this.height - this.radius || e >= this.x + this.radius && e <= this.x + this.width - this.radius) {
        return true
      }
      var n = e - (this.x + this.radius)
      var r = t - (this.y + this.radius)
      var i = this.radius * this.radius
      if (n * n + r * r <= i) {
        return true
      }
      if ((n = e - (this.x + this.width - this.radius)) * n + r * r <= i) {
        return true
      }
      if (n * n + (r = t - (this.y + this.height - this.radius)) * r <= i) {
        return true
      }
      if ((n = e - (this.x + this.radius)) * n + r * r <= i) {
        return true
      }
    }
    return false
  }
  e.prototype.toString = function () {
    return "[@pixi/math:RoundedRectangle x=" + this.x + " y=" + this.y + "width=" + this.width + " height=" + this.height + " radius=" + this.radius + "]"
  }
  return e
}()
var ht = function () {
  function e(e, t) {
    if (undefined === e) {
      e = 0
    }
    if (undefined === t) {
      t = 0
    }
    this.x = 0
    this.y = 0
    this.x = e
    this.y = t
  }
  e.prototype.clone = function () {
    return new e(this.x, this.y)
  }
  e.prototype.copyFrom = function (e) {
    this.set(e.x, e.y)
    return this
  }
  e.prototype.copyTo = function (e) {
    e.set(this.x, this.y)
    return e
  }
  e.prototype.equals = function (e) {
    return e.x === this.x && e.y === this.y
  }
  e.prototype.set = function (e, t) {
    if (undefined === e) {
      e = 0
    }
    if (undefined === t) {
      t = e
    }
    this.x = e
    this.y = t
    return this
  }
  e.prototype.toString = function () {
    return "[@pixi/math:Point x=" + this.x + " y=" + this.y + "]"
  }
  return e
}()
var pt = function () {
  function e(e, t, n, r) {
    if (undefined === n) {
      n = 0
    }
    if (undefined === r) {
      r = 0
    }
    this._x = n
    this._y = r
    this.cb = e
    this.scope = t
  }
  e.prototype.clone = function (t, n) {
    if (undefined === t) {
      t = this.cb
    }
    if (undefined === n) {
      n = this.scope
    }
    return new e(t, n, this._x, this._y)
  }
  e.prototype.set = function (e, t) {
    if (undefined === e) {
      e = 0
    }
    if (undefined === t) {
      t = e
    }
    if (!(this._x === e && this._y === t)) {
      this._x = e
      this._y = t
      this.cb.call(this.scope)
    }
    return this
  }
  e.prototype.copyFrom = function (e) {
    if (!(this._x === e.x && this._y === e.y)) {
      this._x = e.x
      this._y = e.y
      this.cb.call(this.scope)
    }
    return this
  }
  e.prototype.copyTo = function (e) {
    e.set(this._x, this._y)
    return e
  }
  e.prototype.equals = function (e) {
    return e.x === this._x && e.y === this._y
  }
  e.prototype.toString = function () {
    return "[@pixi/math:ObservablePoint x=0 y=0 scope=" + this.scope + "]"
  }
  Object.defineProperty(e.prototype, "x", {
    get: function () {
      return this._x
    },
    set: function (e) {
      if (this._x !== e) {
        this._x = e
        this.cb.call(this.scope)
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "y", {
    get: function () {
      return this._y
    },
    set: function (e) {
      if (this._y !== e) {
        this._y = e
        this.cb.call(this.scope)
      }
    },
    enumerable: false,
    configurable: true
  })
  return e
}()
var _t = function () {
  function e(e, t, n, r, i, o) {
    if (undefined === e) {
      e = 1
    }
    if (undefined === t) {
      t = 0
    }
    if (undefined === n) {
      n = 0
    }
    if (undefined === r) {
      r = 1
    }
    if (undefined === i) {
      i = 0
    }
    if (undefined === o) {
      o = 0
    }
    this.array = null
    this.a = e
    this.b = t
    this.c = n
    this.d = r
    this.tx = i
    this.ty = o
  }
  e.prototype.fromArray = function (e) {
    this.a = e[0]
    this.b = e[1]
    this.c = e[3]
    this.d = e[4]
    this.tx = e[2]
    this.ty = e[5]
  }
  e.prototype.set = function (e, t, n, r, i, o) {
    this.a = e
    this.b = t
    this.c = n
    this.d = r
    this.tx = i
    this.ty = o
    return this
  }
  e.prototype.toArray = function (e, t) {
    if (!this.array) {
      this.array = new Float32Array(9)
    }
    var n = t || this.array
    if (e) {
      n[0] = this.a
      n[1] = this.b
      n[2] = 0
      n[3] = this.c
      n[4] = this.d
      n[5] = 0
      n[6] = this.tx
      n[7] = this.ty
      n[8] = 1
    } else {
      n[0] = this.a
      n[1] = this.c
      n[2] = this.tx
      n[3] = this.b
      n[4] = this.d
      n[5] = this.ty
      n[6] = 0
      n[7] = 0
      n[8] = 1
    }
    return n
  }
  e.prototype.apply = function (e, t) {
    t = t || new ht()
    var n = e.x
    var r = e.y
    t.x = this.a * n + this.c * r + this.tx
    t.y = this.b * n + this.d * r + this.ty
    return t
  }
  e.prototype.applyInverse = function (e, t) {
    t = t || new ht()
    var n = 1 / (this.a * this.d + this.c * -this.b)
    var r = e.x
    var i = e.y
    t.x = this.d * n * r + -this.c * n * i + (this.ty * this.c - this.tx * this.d) * n
    t.y = this.a * n * i + -this.b * n * r + (-this.ty * this.a + this.tx * this.b) * n
    return t
  }
  e.prototype.translate = function (e, t) {
    this.tx += e
    this.ty += t
    return this
  }
  e.prototype.scale = function (e, t) {
    this.a *= e
    this.d *= t
    this.c *= e
    this.b *= t
    this.tx *= e
    this.ty *= t
    return this
  }
  e.prototype.rotate = function (e) {
    var t = Math.cos(e)
    var n = Math.sin(e)
    var /* [auto-meaningful-name] */this$a = this.a
    var /* [auto-meaningful-name] */this$c = this.c
    var /* [auto-meaningful-name] */this$tx = this.tx
    this.a = this$a * t - this.b * n
    this.b = this$a * n + this.b * t
    this.c = this$c * t - this.d * n
    this.d = this$c * n + this.d * t
    this.tx = this$tx * t - this.ty * n
    this.ty = this$tx * n + this.ty * t
    return this
  }
  e.prototype.append = function (e) {
    var /* [auto-meaningful-name] */this$a = this.a
    var /* [auto-meaningful-name] */this$b = this.b
    var /* [auto-meaningful-name] */this$c = this.c
    var /* [auto-meaningful-name] */this$d = this.d
    this.a = e.a * this$a + e.b * this$c
    this.b = e.a * this$b + e.b * this$d
    this.c = e.c * this$a + e.d * this$c
    this.d = e.c * this$b + e.d * this$d
    this.tx = e.tx * this$a + e.ty * this$c + this.tx
    this.ty = e.tx * this$b + e.ty * this$d + this.ty
    return this
  }
  e.prototype.setTransform = function (e, t, n, r, i, o, a, s, c) {
    this.a = Math.cos(a + c) * i
    this.b = Math.sin(a + c) * i
    this.c = -Math.sin(a - s) * o
    this.d = Math.cos(a - s) * o
    this.tx = e - (n * this.a + r * this.c)
    this.ty = t - (n * this.b + r * this.d)
    return this
  }
  e.prototype.prepend = function (e) {
    var /* [auto-meaningful-name] */this$tx = this.tx
    if (1 !== e.a || 0 !== e.b || 0 !== e.c || 1 !== e.d) {
      var /* [auto-meaningful-name] */this$a = this.a
      var /* [auto-meaningful-name] */this$c = this.c
      this.a = this$a * e.a + this.b * e.c
      this.b = this$a * e.b + this.b * e.d
      this.c = this$c * e.a + this.d * e.c
      this.d = this$c * e.b + this.d * e.d
    }
    this.tx = this$tx * e.a + this.ty * e.c + e.tx
    this.ty = this$tx * e.b + this.ty * e.d + e.ty
    return this
  }
  e.prototype.decompose = function (e) {
    var /* [auto-meaningful-name] */this$a = this.a
    var /* [auto-meaningful-name] */this$b = this.b
    var /* [auto-meaningful-name] */this$c = this.c
    var /* [auto-meaningful-name] */this$d = this.d
    var /* [auto-meaningful-name] */e$pivot = e.pivot
    var a = -Math.atan2(-this$c, this$d)
    var s = Math.atan2(this$b, this$a)
    var c = Math.abs(a + s)
    if (c < 1e-5 || Math.abs(ot - c) < 1e-5) {
      e.rotation = s
      e.skew.x = e.skew.y = 0
    } else {
      e.rotation = 0
      e.skew.x = a
      e.skew.y = s
    }
    e.scale.x = Math.sqrt(this$a * this$a + this$b * this$b)
    e.scale.y = Math.sqrt(this$c * this$c + this$d * this$d)
    e.position.x = this.tx + (e$pivot.x * this$a + e$pivot.y * this$c)
    e.position.y = this.ty + (e$pivot.x * this$b + e$pivot.y * this$d)
    return e
  }
  e.prototype.invert = function () {
    var /* [auto-meaningful-name] */this$a = this.a
    var /* [auto-meaningful-name] */this$b = this.b
    var /* [auto-meaningful-name] */this$c = this.c
    var /* [auto-meaningful-name] */this$d = this.d
    var /* [auto-meaningful-name] */this$tx = this.tx
    var o = this$a * this$d - this$b * this$c
    this.a = this$d / o
    this.b = -this$b / o
    this.c = -this$c / o
    this.d = this$a / o
    this.tx = (this$c * this.ty - this$d * this$tx) / o
    this.ty = -(this$a * this.ty - this$b * this$tx) / o
    return this
  }
  e.prototype.identity = function () {
    this.a = 1
    this.b = 0
    this.c = 0
    this.d = 1
    this.tx = 0
    this.ty = 0
    return this
  }
  e.prototype.clone = function () {
    var t = new e()
    t.a = this.a
    t.b = this.b
    t.c = this.c
    t.d = this.d
    t.tx = this.tx
    t.ty = this.ty
    return t
  }
  e.prototype.copyTo = function (e) {
    e.a = this.a
    e.b = this.b
    e.c = this.c
    e.d = this.d
    e.tx = this.tx
    e.ty = this.ty
    return e
  }
  e.prototype.copyFrom = function (e) {
    this.a = e.a
    this.b = e.b
    this.c = e.c
    this.d = e.d
    this.tx = e.tx
    this.ty = e.ty
    return this
  }
  e.prototype.toString = function () {
    return "[@pixi/math:Matrix a=" + this.a + " b=" + this.b + " c=" + this.c + " d=" + this.d + " tx=" + this.tx + " ty=" + this.ty + "]"
  }
  Object.defineProperty(e, "IDENTITY", {
    get: function () {
      return new e()
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e, "TEMP_MATRIX", {
    get: function () {
      return new e()
    },
    enumerable: false,
    configurable: true
  })
  return e
}()
var At = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1]
var gt = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1]
var vt = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1]
var mt = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1]
var yt = []
var bt = []
var /* [auto-meaningful-name] */Math$sign = Math.sign
!function () {
  for (var e = 0; e < 16; e++) {
    var t = []
    yt.push(t)
    for (var n = 0; n < 16; n++) {
      for (var r = Math$sign(At[e] * At[n] + vt[e] * gt[n]), i = Math$sign(gt[e] * At[n] + mt[e] * gt[n]), o = Math$sign(At[e] * vt[n] + vt[e] * mt[n]), a = Math$sign(gt[e] * vt[n] + mt[e] * mt[n]), s = 0; s < 16; s++) {
        if (At[s] === r && gt[s] === i && vt[s] === o && mt[s] === a) {
          t.push(s)
          break
        }
      }
    }
  }
  for (e = 0; e < 16; e++) {
    var c = new _t()
    c.set(At[e], gt[e], vt[e], mt[e], 0, 0)
    bt.push(c)
  }
}()
var Et
var xt = {
  E: 0,
  SE: 1,
  S: 2,
  SW: 3,
  W: 4,
  NW: 5,
  N: 6,
  NE: 7,
  MIRROR_VERTICAL: 8,
  MAIN_DIAGONAL: 10,
  MIRROR_HORIZONTAL: 12,
  REVERSE_DIAGONAL: 14,
  uX: function (e) {
    return At[e]
  },
  uY: function (e) {
    return gt[e]
  },
  vX: function (e) {
    return vt[e]
  },
  vY: function (e) {
    return mt[e]
  },
  inv: function (e) {
    return 8 & e ? 15 & e : 7 & -e
  },
  add: function (e, t) {
    return yt[e][t]
  },
  sub: function (e, t) {
    return yt[e][xt.inv(t)]
  },
  rotate180: function (e) {
    return 4 ^ e
  },
  isVertical: function (e) {
    return 2 === (3 & e)
  },
  byDirection: function (e, t) {
    return 2 * Math.abs(e) <= Math.abs(t) ? t >= 0 ? xt.S : xt.N : 2 * Math.abs(t) <= Math.abs(e) ? e > 0 ? xt.E : xt.W : t > 0 ? e > 0 ? xt.SE : xt.SW : e > 0 ? xt.NE : xt.NW
  },
  matrixAppendRotationInv: function (e, t, n, r) {
    if (undefined === n) {
      n = 0
    }
    if (undefined === r) {
      r = 0
    }
    var i = bt[xt.inv(t)]
    i.tx = n
    i.ty = r
    e.append(i)
  }
}
var Ct = function () {
  function e() {
    this.worldTransform = new _t()
    this.localTransform = new _t()
    this.position = new pt(this.onChange, this, 0, 0)
    this.scale = new pt(this.onChange, this, 1, 1)
    this.pivot = new pt(this.onChange, this, 0, 0)
    this.skew = new pt(this.updateSkew, this, 0, 0)
    this._rotation = 0
    this._cx = 1
    this._sx = 0
    this._cy = 0
    this._sy = 1
    this._localID = 0
    this._currentLocalID = 0
    this._worldID = 0
    this._parentID = 0
  }
  e.prototype.onChange = function () {
    this._localID++
  }
  e.prototype.updateSkew = function () {
    this._cx = Math.cos(this._rotation + this.skew.y)
    this._sx = Math.sin(this._rotation + this.skew.y)
    this._cy = -Math.sin(this._rotation - this.skew.x)
    this._sy = Math.cos(this._rotation - this.skew.x)
    this._localID++
  }
  e.prototype.toString = function () {
    return "[@pixi/math:Transform position=(" + this.position.x + ", " + this.position.y + ") rotation=" + this.rotation + " scale=(" + this.scale.x + ", " + this.scale.y + ") skew=(" + this.skew.x + ", " + this.skew.y + ") ]"
  }
  e.prototype.updateLocalTransform = function () {
    var /* [auto-meaningful-name] */this$localTransform = this.localTransform
    if (this._localID !== this._currentLocalID) {
      this$localTransform.a = this._cx * this.scale.x
      this$localTransform.b = this._sx * this.scale.x
      this$localTransform.c = this._cy * this.scale.y
      this$localTransform.d = this._sy * this.scale.y
      this$localTransform.tx = this.position.x - (this.pivot.x * this$localTransform.a + this.pivot.y * this$localTransform.c)
      this$localTransform.ty = this.position.y - (this.pivot.x * this$localTransform.b + this.pivot.y * this$localTransform.d)
      this._currentLocalID = this._localID
      this._parentID = -1
    }
  }
  e.prototype.updateTransform = function (e) {
    var /* [auto-meaningful-name] */this$localTransform = this.localTransform
    if (this._localID !== this._currentLocalID) {
      this$localTransform.a = this._cx * this.scale.x
      this$localTransform.b = this._sx * this.scale.x
      this$localTransform.c = this._cy * this.scale.y
      this$localTransform.d = this._sy * this.scale.y
      this$localTransform.tx = this.position.x - (this.pivot.x * this$localTransform.a + this.pivot.y * this$localTransform.c)
      this$localTransform.ty = this.position.y - (this.pivot.x * this$localTransform.b + this.pivot.y * this$localTransform.d)
      this._currentLocalID = this._localID
      this._parentID = -1
    }
    if (this._parentID !== e._worldID) {
      var /* [auto-meaningful-name] */e$worldTransform = e.worldTransform
      var /* [auto-meaningful-name] */this$worldTransform = this.worldTransform
      this$worldTransform.a = this$localTransform.a * e$worldTransform.a + this$localTransform.b * e$worldTransform.c
      this$worldTransform.b = this$localTransform.a * e$worldTransform.b + this$localTransform.b * e$worldTransform.d
      this$worldTransform.c = this$localTransform.c * e$worldTransform.a + this$localTransform.d * e$worldTransform.c
      this$worldTransform.d = this$localTransform.c * e$worldTransform.b + this$localTransform.d * e$worldTransform.d
      this$worldTransform.tx = this$localTransform.tx * e$worldTransform.a + this$localTransform.ty * e$worldTransform.c + e$worldTransform.tx
      this$worldTransform.ty = this$localTransform.tx * e$worldTransform.b + this$localTransform.ty * e$worldTransform.d + e$worldTransform.ty
      this._parentID = e._worldID
      this._worldID++
    }
  }
  e.prototype.setFromMatrix = function (e) {
    e.decompose(this)
    this._localID++
  }
  Object.defineProperty(e.prototype, "rotation", {
    get: function () {
      return this._rotation
    },
    set: function (e) {
      if (this._rotation !== e) {
        this._rotation = e
        this.updateSkew()
      }
    },
    enumerable: false,
    configurable: true
  })
  e.IDENTITY = new e()
  return e
}()
fe.TARGET_FPMS = .06;
(function (e) {
  e[e.INTERACTION = 50] = "INTERACTION"
  e[e.HIGH = 25] = "HIGH"
  e[e.NORMAL = 0] = "NORMAL"
  e[e.LOW = -25] = "LOW"
  e[e.UTILITY = -50] = "UTILITY"
})(Et || (Et = {}))
var Ot = function () {
  function e(e, t, n, r) {
    if (undefined === t) {
      t = null
    }
    if (undefined === n) {
      n = 0
    }
    if (undefined === r) {
      r = false
    }
    this.next = null
    this.previous = null
    this._destroyed = false
    this.fn = e
    this.context = t
    this.priority = n
    this.once = r
  }
  e.prototype.match = function (e, t) {
    if (undefined === t) {
      t = null
    }
    return this.fn === e && this.context === t
  }
  e.prototype.emit = function (e) {
    if (this.fn) {
      if (this.context) {
        this.fn.call(this.context, e)
      } else {
        this.fn(e)
      }
    }
    var /* [auto-meaningful-name] */this$next = this.next
    if (this.once) {
      this.destroy(true)
    }
    if (this._destroyed) {
      this.next = null
    }
    return this$next
  }
  e.prototype.connect = function (e) {
    this.previous = e
    if (e.next) {
      e.next.previous = this
    }
    this.next = e.next
    e.next = this
  }
  e.prototype.destroy = function (e) {
    if (undefined === e) {
      e = false
    }
    this._destroyed = true
    this.fn = null
    this.context = null
    if (this.previous) {
      this.previous.next = this.next
    }
    if (this.next) {
      this.next.previous = this.previous
    }
    var /* [auto-meaningful-name] */this$next = this.next
    this.next = e ? null : this$next
    this.previous = null
    return this$next
  }
  return e
}()
var kt = function () {
  function e() {
    var e = this
    this.autoStart = false
    this.deltaTime = 1
    this.lastTime = -1
    this.speed = 1
    this.started = false
    this._requestId = null
    this._maxElapsedMS = 100
    this._minElapsedMS = 0
    this._protected = false
    this._lastFrame = -1
    this._head = new Ot(null, null, 1 / 0)
    this.deltaMS = 1 / fe.TARGET_FPMS
    this.elapsedMS = 1 / fe.TARGET_FPMS
    this._tick = function (t) {
      e._requestId = null
      if (e.started) {
        e.update(t)
        if (e.started && null === e._requestId && e._head.next) {
          e._requestId = requestAnimationFrame(e._tick)
        }
      }
    }
  }
  e.prototype._requestIfNeeded = function () {
    if (null === this._requestId && this._head.next) {
      this.lastTime = performance.now()
      this._lastFrame = this.lastTime
      this._requestId = requestAnimationFrame(this._tick)
    }
  }
  e.prototype._cancelIfNeeded = function () {
    if (null !== this._requestId) {
      cancelAnimationFrame(this._requestId)
      this._requestId = null
    }
  }
  e.prototype._startIfPossible = function () {
    if (this.started) {
      this._requestIfNeeded()
    } else {
      if (this.autoStart) {
        this.start()
      }
    }
  }
  e.prototype.add = function (e, t, n) {
    if (undefined === n) {
      n = Et.NORMAL
    }
    return this._addListener(new Ot(e, t, n))
  }
  e.prototype.addOnce = function (e, t, n) {
    if (undefined === n) {
      n = Et.NORMAL
    }
    return this._addListener(new Ot(e, t, n, true))
  }
  e.prototype._addListener = function (e) {
    var /* [auto-meaningful-name] */this$_head$next = this._head.next
    var /* [auto-meaningful-name] */this$_head = this._head
    if (this$_head$next) {
      for (; this$_head$next;) {
        if (e.priority > this$_head$next.priority) {
          e.connect(this$_head)
          break
        }
        this$_head = this$_head$next
        this$_head$next = this$_head$next.next
      }
      if (!e.previous) {
        e.connect(this$_head)
      }
    } else {
      e.connect(this$_head)
    }
    this._startIfPossible()
    return this
  }
  e.prototype.remove = function (e, t) {
    for (var /* [auto-meaningful-name] */this$_head$next = this._head.next; this$_head$next;) {
      this$_head$next = this$_head$next.match(e, t) ? this$_head$next.destroy() : this$_head$next.next
    }
    if (!this._head.next) {
      this._cancelIfNeeded()
    }
    return this
  }
  Object.defineProperty(e.prototype, "count", {
    get: function () {
      if (!this._head) {
        return 0
      }
      for (var e = 0, /* [auto-meaningful-name] */this$_head = this._head; this$_head = this$_head.next;) {
        e++
      }
      return e
    },
    enumerable: false,
    configurable: true
  })
  e.prototype.start = function () {
    if (!this.started) {
      this.started = true
      this._requestIfNeeded()
    }
  }
  e.prototype.stop = function () {
    if (this.started) {
      this.started = false
      this._cancelIfNeeded()
    }
  }
  e.prototype.destroy = function () {
    if (!this._protected) {
      this.stop()
      for (var /* [auto-meaningful-name] */this$_head$next = this._head.next; this$_head$next;) {
        this$_head$next = this$_head$next.destroy(true)
      }
      this._head.destroy()
      this._head = null
    }
  }
  e.prototype.update = function (e) {
    var t
    if (undefined === e) {
      e = performance.now()
    }
    if (e > this.lastTime) {
      if ((t = this.elapsedMS = e - this.lastTime) > this._maxElapsedMS) {
        t = this._maxElapsedMS
      }
      t *= this.speed
      if (this._minElapsedMS) {
        var n = e - this._lastFrame | 0
        if (n < this._minElapsedMS) {
          return
        }
        this._lastFrame = e - n % this._minElapsedMS
      }
      this.deltaMS = t
      this.deltaTime = this.deltaMS * fe.TARGET_FPMS
      for (var /* [auto-meaningful-name] */this$_head = this._head, /* [auto-meaningful-name] */this$_head$next = this$_head.next; this$_head$next;) {
        this$_head$next = this$_head$next.emit(this.deltaTime)
      }
      if (!this$_head.next) {
        this._cancelIfNeeded()
      }
    } else {
      this.deltaTime = this.deltaMS = this.elapsedMS = 0
    }
    this.lastTime = e
  }
  Object.defineProperty(e.prototype, "FPS", {
    get: function () {
      return 1e3 / this.elapsedMS
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "minFPS", {
    get: function () {
      return 1e3 / this._maxElapsedMS
    },
    set: function (e) {
      var t = Math.min(this.maxFPS, e)
      var n = Math.min(Math.max(0, t) / 1e3, fe.TARGET_FPMS)
      this._maxElapsedMS = 1 / n
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "maxFPS", {
    get: function () {
      return this._minElapsedMS ? Math.round(1e3 / this._minElapsedMS) : 0
    },
    set: function (e) {
      if (0 === e) {
        this._minElapsedMS = 0
      } else {
        var t = Math.max(this.minFPS, e)
        this._minElapsedMS = 1 / (t / 1e3)
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e, "shared", {
    get: function () {
      if (!e._shared) {
        var t = e._shared = new e()
        t.autoStart = true
        t._protected = true
      }
      return e._shared
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e, "system", {
    get: function () {
      if (!e._system) {
        var t = e._system = new e()
        t.autoStart = true
        t._protected = true
      }
      return e._system
    },
    enumerable: false,
    configurable: true
  })
  return e
}()
var St = function () {
  function e() {}
  e.init = function (e) {
    var t = this
    e = Object.assign({
      autoStart: true,
      sharedTicker: false
    }, e)
    Object.defineProperty(this, "ticker", {
      set: function (e) {
        if (this._ticker) {
          this._ticker.remove(this.render, this)
        }
        this._ticker = e
        if (e) {
          e.add(this.render, this, Et.LOW)
        }
      },
      get: function () {
        return this._ticker
      }
    })
    this.stop = function () {
      t._ticker.stop()
    }
    this.start = function () {
      t._ticker.start()
    }
    this._ticker = null
    this.ticker = e.sharedTicker ? kt.shared : new kt()
    if (e.autoStart) {
      this.start()
    }
  }
  e.destroy = function () {
    if (this._ticker) {
      var /* [auto-meaningful-name] */this$_ticker = this._ticker
      this.ticker = null
      this$_ticker.destroy()
    }
  }
  return e
}()
fe.SORTABLE_CHILDREN = false
var Tt = function () {
  function e() {
    this.minX = 1 / 0
    this.minY = 1 / 0
    this.maxX = -1 / 0
    this.maxY = -1 / 0
    this.rect = null
    this.updateID = -1
  }
  e.prototype.isEmpty = function () {
    return this.minX > this.maxX || this.minY > this.maxY
  }
  e.prototype.clear = function () {
    this.minX = 1 / 0
    this.minY = 1 / 0
    this.maxX = -1 / 0
    this.maxY = -1 / 0
  }
  e.prototype.getRectangle = function (e) {
    return this.minX > this.maxX || this.minY > this.maxY ? ct.EMPTY : ((e = e || new ct(0, 0, 1, 1)).x = this.minX, e.y = this.minY, e.width = this.maxX - this.minX, e.height = this.maxY - this.minY, e)
  }
  e.prototype.addPoint = function (e) {
    this.minX = Math.min(this.minX, e.x)
    this.maxX = Math.max(this.maxX, e.x)
    this.minY = Math.min(this.minY, e.y)
    this.maxY = Math.max(this.maxY, e.y)
  }
  e.prototype.addPointMatrix = function (e, t) {
    var n = e.a
    var r = e.b
    var i = e.c
    var o = e.d
    var a = e.tx
    var s = e.ty
    var c = n * t.x + i * t.y + a
    var u = r * t.x + o * t.y + s
    this.minX = Math.min(this.minX, c)
    this.maxX = Math.max(this.maxX, c)
    this.minY = Math.min(this.minY, u)
    this.maxY = Math.max(this.maxY, u)
  }
  e.prototype.addQuad = function (e) {
    var /* [auto-meaningful-name] */this$minX = this.minX
    var /* [auto-meaningful-name] */this$minY = this.minY
    var /* [auto-meaningful-name] */this$maxX = this.maxX
    var /* [auto-meaningful-name] */this$maxY = this.maxY
    var o = e[0]
    var a = e[1]
    this$minX = o < this$minX ? o : this$minX
    this$minY = a < this$minY ? a : this$minY
    this$maxX = o > this$maxX ? o : this$maxX
    this$maxY = a > this$maxY ? a : this$maxY
    this$minX = (o = e[2]) < this$minX ? o : this$minX
    this$minY = (a = e[3]) < this$minY ? a : this$minY
    this$maxX = o > this$maxX ? o : this$maxX
    this$maxY = a > this$maxY ? a : this$maxY
    this$minX = (o = e[4]) < this$minX ? o : this$minX
    this$minY = (a = e[5]) < this$minY ? a : this$minY
    this$maxX = o > this$maxX ? o : this$maxX
    this$maxY = a > this$maxY ? a : this$maxY
    this$minX = (o = e[6]) < this$minX ? o : this$minX
    this$minY = (a = e[7]) < this$minY ? a : this$minY
    this$maxX = o > this$maxX ? o : this$maxX
    this$maxY = a > this$maxY ? a : this$maxY
    this.minX = this$minX
    this.minY = this$minY
    this.maxX = this$maxX
    this.maxY = this$maxY
  }
  e.prototype.addFrame = function (e, t, n, r, i) {
    this.addFrameMatrix(e.worldTransform, t, n, r, i)
  }
  e.prototype.addFrameMatrix = function (e, t, n, r, i) {
    var o = e.a
    var a = e.b
    var s = e.c
    var c = e.d
    var u = e.tx
    var l = e.ty
    var /* [auto-meaningful-name] */this$minX = this.minX
    var /* [auto-meaningful-name] */this$minY = this.minY
    var /* [auto-meaningful-name] */this$maxX = this.maxX
    var /* [auto-meaningful-name] */this$maxY = this.maxY
    var _ = o * t + s * n + u
    var A = a * t + c * n + l
    this$minX = _ < this$minX ? _ : this$minX
    this$minY = A < this$minY ? A : this$minY
    this$maxX = _ > this$maxX ? _ : this$maxX
    this$maxY = A > this$maxY ? A : this$maxY
    this$minX = (_ = o * r + s * n + u) < this$minX ? _ : this$minX
    this$minY = (A = a * r + c * n + l) < this$minY ? A : this$minY
    this$maxX = _ > this$maxX ? _ : this$maxX
    this$maxY = A > this$maxY ? A : this$maxY
    this$minX = (_ = o * t + s * i + u) < this$minX ? _ : this$minX
    this$minY = (A = a * t + c * i + l) < this$minY ? A : this$minY
    this$maxX = _ > this$maxX ? _ : this$maxX
    this$maxY = A > this$maxY ? A : this$maxY
    this$minX = (_ = o * r + s * i + u) < this$minX ? _ : this$minX
    this$minY = (A = a * r + c * i + l) < this$minY ? A : this$minY
    this$maxX = _ > this$maxX ? _ : this$maxX
    this$maxY = A > this$maxY ? A : this$maxY
    this.minX = this$minX
    this.minY = this$minY
    this.maxX = this$maxX
    this.maxY = this$maxY
  }
  e.prototype.addVertexData = function (e, t, n) {
    for (var /* [auto-meaningful-name] */this$minX = this.minX, /* [auto-meaningful-name] */this$minY = this.minY, /* [auto-meaningful-name] */this$maxX = this.maxX, /* [auto-meaningful-name] */this$maxY = this.maxY, s = t; s < n; s += 2) {
      var c = e[s]
      var u = e[s + 1]
      this$minX = c < this$minX ? c : this$minX
      this$minY = u < this$minY ? u : this$minY
      this$maxX = c > this$maxX ? c : this$maxX
      this$maxY = u > this$maxY ? u : this$maxY
    }
    this.minX = this$minX
    this.minY = this$minY
    this.maxX = this$maxX
    this.maxY = this$maxY
  }
  e.prototype.addVertices = function (e, t, n, r) {
    this.addVerticesMatrix(e.worldTransform, t, n, r)
  }
  e.prototype.addVerticesMatrix = function (e, t, n, r, i, o) {
    if (undefined === i) {
      i = 0
    }
    if (undefined === o) {
      o = i
    }
    for (var a = e.a, s = e.b, c = e.c, u = e.d, l = e.tx, f = e.ty, /* [auto-meaningful-name] */this$minX = this.minX, /* [auto-meaningful-name] */this$minY = this.minY, /* [auto-meaningful-name] */this$maxX = this.maxX, /* [auto-meaningful-name] */this$maxY = this.maxY, A = n; A < r; A += 2) {
      var g = t[A]
      var v = t[A + 1]
      var m = a * g + c * v + l
      var y = u * v + s * g + f
      this$minX = Math.min(this$minX, m - i)
      this$maxX = Math.max(this$maxX, m + i)
      this$minY = Math.min(this$minY, y - o)
      this$maxY = Math.max(this$maxY, y + o)
    }
    this.minX = this$minX
    this.minY = this$minY
    this.maxX = this$maxX
    this.maxY = this$maxY
  }
  e.prototype.addBounds = function (e) {
    var /* [auto-meaningful-name] */this$minX = this.minX
    var /* [auto-meaningful-name] */this$minY = this.minY
    var /* [auto-meaningful-name] */this$maxX = this.maxX
    var /* [auto-meaningful-name] */this$maxY = this.maxY
    this.minX = e.minX < this$minX ? e.minX : this$minX
    this.minY = e.minY < this$minY ? e.minY : this$minY
    this.maxX = e.maxX > this$maxX ? e.maxX : this$maxX
    this.maxY = e.maxY > this$maxY ? e.maxY : this$maxY
  }
  e.prototype.addBoundsMask = function (e, t) {
    var n = e.minX > t.minX ? e.minX : t.minX
    var r = e.minY > t.minY ? e.minY : t.minY
    var i = e.maxX < t.maxX ? e.maxX : t.maxX
    var o = e.maxY < t.maxY ? e.maxY : t.maxY
    if (n <= i && r <= o) {
      var /* [auto-meaningful-name] */this$minX = this.minX
      var /* [auto-meaningful-name] */this$minY = this.minY
      var /* [auto-meaningful-name] */this$maxX = this.maxX
      var /* [auto-meaningful-name] */this$maxY = this.maxY
      this.minX = n < this$minX ? n : this$minX
      this.minY = r < this$minY ? r : this$minY
      this.maxX = i > this$maxX ? i : this$maxX
      this.maxY = o > this$maxY ? o : this$maxY
    }
  }
  e.prototype.addBoundsMatrix = function (e, t) {
    this.addFrameMatrix(t, e.minX, e.minY, e.maxX, e.maxY)
  }
  e.prototype.addBoundsArea = function (e, t) {
    var n = e.minX > t.x ? e.minX : t.x
    var r = e.minY > t.y ? e.minY : t.y
    var i = e.maxX < t.x + t.width ? e.maxX : t.x + t.width
    var o = e.maxY < t.y + t.height ? e.maxY : t.y + t.height
    if (n <= i && r <= o) {
      var /* [auto-meaningful-name] */this$minX = this.minX
      var /* [auto-meaningful-name] */this$minY = this.minY
      var /* [auto-meaningful-name] */this$maxX = this.maxX
      var /* [auto-meaningful-name] */this$maxY = this.maxY
      this.minX = n < this$minX ? n : this$minX
      this.minY = r < this$minY ? r : this$minY
      this.maxX = i > this$maxX ? i : this$maxX
      this.maxY = o > this$maxY ? o : this$maxY
    }
  }
  e.prototype.pad = function (e, t) {
    if (undefined === e) {
      e = 0
    }
    if (undefined === t) {
      t = e
    }
    if (!this.isEmpty()) {
      this.minX -= e
      this.maxX += e
      this.minY -= t
      this.maxY += t
    }
  }
  e.prototype.addFramePad = function (e, t, n, r, i, o) {
    e -= i
    t -= o
    n += i
    r += o
    this.minX = this.minX < e ? this.minX : e
    this.maxX = this.maxX > n ? this.maxX : n
    this.minY = this.minY < t ? this.minY : t
    this.maxY = this.maxY > r ? this.maxY : r
  }
  return e
}()
var Bt = function (e, t) {
  return (Bt = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t
  } || function (e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) {
      e[n] = t[n]
    }
  })(e, t)
}
function Dt(e, t) {
  function n() {
    this.constructor = e
  }
  Bt(e, t)
  e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n())
}
var It = function (e) {
  function t() {
    var t = e.call(this) || this
    t.tempDisplayObjectParent = null
    t.transform = new Ct()
    t.alpha = 1
    t.visible = true
    t.renderable = true
    t.parent = null
    t.worldAlpha = 1
    t._lastSortedIndex = 0
    t._zIndex = 0
    t.filterArea = null
    t.filters = null
    t._enabledFilters = null
    t._bounds = new Tt()
    t._localBounds = null
    t._boundsID = 0
    t._boundsRect = null
    t._localBoundsRect = null
    t._mask = null
    t._destroyed = false
    t.isSprite = false
    t.isMask = false
    return t
  }
  Dt(t, e)
  t.mixin = function (e) {
    for (var n = Object.keys(e), r = 0; r < n.length; ++r) {
      var i = n[r]
      Object.defineProperty(t.prototype, i, Object.getOwnPropertyDescriptor(e, i))
    }
  }
  t.prototype._recursivePostUpdateTransform = function () {
    if (this.parent) {
      this.parent._recursivePostUpdateTransform()
      this.transform.updateTransform(this.parent.transform)
    } else {
      this.transform.updateTransform(this._tempDisplayObjectParent.transform)
    }
  }
  t.prototype.updateTransform = function () {
    this._boundsID++
    this.transform.updateTransform(this.parent.transform)
    this.worldAlpha = this.alpha * this.parent.worldAlpha
  }
  t.prototype.getBounds = function (e, t) {
    if (!e) {
      if (this.parent) {
        this._recursivePostUpdateTransform()
        this.updateTransform()
      } else {
        this.parent = this._tempDisplayObjectParent
        this.updateTransform()
        this.parent = null
      }
    }
    if (this._bounds.updateID !== this._boundsID) {
      this.calculateBounds()
      this._bounds.updateID = this._boundsID
    }
    if (!t) {
      if (!this._boundsRect) {
        this._boundsRect = new ct()
      }
      t = this._boundsRect
    }
    return this._bounds.getRectangle(t)
  }
  t.prototype.getLocalBounds = function (e) {
    if (!e) {
      if (!this._localBoundsRect) {
        this._localBoundsRect = new ct()
      }
      e = this._localBoundsRect
    }
    if (!this._localBounds) {
      this._localBounds = new Tt()
    }
    var /* [auto-meaningful-name] */this$transform = this.transform
    var /* [auto-meaningful-name] */this$parent = this.parent
    this.parent = null
    this.transform = this._tempDisplayObjectParent.transform
    var /* [auto-meaningful-name] */this$_bounds = this._bounds
    var /* [auto-meaningful-name] */this$_boundsID = this._boundsID
    this._bounds = this._localBounds
    var o = this.getBounds(false, e)
    this.parent = this$parent
    this.transform = this$transform
    this._bounds = this$_bounds
    this._bounds.updateID += this._boundsID - this$_boundsID
    return o
  }
  t.prototype.toGlobal = function (e, t, n) {
    if (undefined === n) {
      n = false
    }
    if (!n) {
      this._recursivePostUpdateTransform()
      if (this.parent) {
        this.displayObjectUpdateTransform()
      } else {
        this.parent = this._tempDisplayObjectParent
        this.displayObjectUpdateTransform()
        this.parent = null
      }
    }
    return this.worldTransform.apply(e, t)
  }
  t.prototype.toLocal = function (e, t, n, r) {
    if (t) {
      e = t.toGlobal(e, n, r)
    }
    if (!r) {
      this._recursivePostUpdateTransform()
      if (this.parent) {
        this.displayObjectUpdateTransform()
      } else {
        this.parent = this._tempDisplayObjectParent
        this.displayObjectUpdateTransform()
        this.parent = null
      }
    }
    return this.worldTransform.applyInverse(e, n)
  }
  t.prototype.setParent = function (e) {
    if (!e || !e.addChild) {
      throw new Error("setParent: Argument must be a Container")
    }
    e.addChild(this)
    return e
  }
  t.prototype.setTransform = function (e, t, n, r, i, o, a, s, c) {
    if (undefined === e) {
      e = 0
    }
    if (undefined === t) {
      t = 0
    }
    if (undefined === n) {
      n = 1
    }
    if (undefined === r) {
      r = 1
    }
    if (undefined === i) {
      i = 0
    }
    if (undefined === o) {
      o = 0
    }
    if (undefined === a) {
      a = 0
    }
    if (undefined === s) {
      s = 0
    }
    if (undefined === c) {
      c = 0
    }
    this.position.x = e
    this.position.y = t
    this.scale.x = n || 1
    this.scale.y = r || 1
    this.rotation = i
    this.skew.x = o
    this.skew.y = a
    this.pivot.x = s
    this.pivot.y = c
    return this
  }
  t.prototype.destroy = function (e) {
    if (this.parent) {
      this.parent.removeChild(this)
    }
    this.removeAllListeners()
    this.transform = null
    this.parent = null
    this._bounds = null
    this._mask = null
    this.filters = null
    this.filterArea = null
    this.hitArea = null
    this.interactive = false
    this.interactiveChildren = false
    this._destroyed = true
  }
  Object.defineProperty(t.prototype, "_tempDisplayObjectParent", {
    get: function () {
      if (null === this.tempDisplayObjectParent) {
        this.tempDisplayObjectParent = new Rt()
      }
      return this.tempDisplayObjectParent
    },
    enumerable: false,
    configurable: true
  })
  t.prototype.enableTempParent = function () {
    var /* [auto-meaningful-name] */this$parent = this.parent
    this.parent = this._tempDisplayObjectParent
    return this$parent
  }
  t.prototype.disableTempParent = function (e) {
    this.parent = e
  }
  Object.defineProperty(t.prototype, "x", {
    get: function () {
      return this.position.x
    },
    set: function (e) {
      this.transform.position.x = e
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "y", {
    get: function () {
      return this.position.y
    },
    set: function (e) {
      this.transform.position.y = e
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "worldTransform", {
    get: function () {
      return this.transform.worldTransform
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "localTransform", {
    get: function () {
      return this.transform.localTransform
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "position", {
    get: function () {
      return this.transform.position
    },
    set: function (e) {
      this.transform.position.copyFrom(e)
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "scale", {
    get: function () {
      return this.transform.scale
    },
    set: function (e) {
      this.transform.scale.copyFrom(e)
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "pivot", {
    get: function () {
      return this.transform.pivot
    },
    set: function (e) {
      this.transform.pivot.copyFrom(e)
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "skew", {
    get: function () {
      return this.transform.skew
    },
    set: function (e) {
      this.transform.skew.copyFrom(e)
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "rotation", {
    get: function () {
      return this.transform.rotation
    },
    set: function (e) {
      this.transform.rotation = e
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "angle", {
    get: function () {
      return this.transform.rotation * at
    },
    set: function (e) {
      this.transform.rotation = e * st
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "zIndex", {
    get: function () {
      return this._zIndex
    },
    set: function (e) {
      this._zIndex = e
      if (this.parent) {
        this.parent.sortDirty = true
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "worldVisible", {
    get: function () {
      var e = this
      do {
        if (!e.visible) {
          return false
        }
        e = e.parent
      } while (e)
      return true
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "mask", {
    get: function () {
      return this._mask
    },
    set: function (e) {
      var t
      if (this._mask) {
        (t = this._mask.maskObject || this._mask).renderable = true
        t.isMask = false
      }
      this._mask = e
      if (this._mask) {
        (t = this._mask.maskObject || this._mask).renderable = false
        t.isMask = true
      }
    },
    enumerable: false,
    configurable: true
  })
  return t
}($_13371)
var Rt = function (e) {
  function t() {
    var t = null !== e && e.apply(this, arguments) || this
    t.sortDirty = null
    return t
  }
  Dt(t, e)
  return t
}(It)
function Ft(e, t) {
  return e.zIndex === t.zIndex ? e._lastSortedIndex - t._lastSortedIndex : e.zIndex - t.zIndex
}
It.prototype.displayObjectUpdateTransform = It.prototype.updateTransform
var Pt = function (e) {
  function t() {
    var t = e.call(this) || this
    t.children = []
    t.sortableChildren = fe.SORTABLE_CHILDREN
    t.sortDirty = false
    return t
  }
  Dt(t, e)
  t.prototype.onChildrenChange = function (e) {}
  t.prototype.addChild = function () {
    for (var e = arguments, t = [], n = 0; n < arguments.length; n++) {
      t[n] = e[n]
    }
    if (t.length > 1) {
      for (var r = 0; r < t.length; r++) {
        this.addChild(t[r])
      }
    } else {
      var i = t[0]
      if (i.parent) {
        i.parent.removeChild(i)
      }
      i.parent = this
      this.sortDirty = true
      i.transform._parentID = -1
      this.children.push(i)
      this._boundsID++
      this.onChildrenChange(this.children.length - 1)
      this.emit("childAdded", i, this, this.children.length - 1)
      i.emit("added", this)
    }
    return t[0]
  }
  t.prototype.addChildAt = function (e, t) {
    if (t < 0 || t > this.children.length) {
      throw new Error(e + "addChildAt: The index " + t + " supplied is out of bounds " + this.children.length)
    }
    if (e.parent) {
      e.parent.removeChild(e)
    }
    e.parent = this
    this.sortDirty = true
    e.transform._parentID = -1
    this.children.splice(t, 0, e)
    this._boundsID++
    this.onChildrenChange(t)
    e.emit("added", this)
    this.emit("childAdded", e, this, t)
    return e
  }
  t.prototype.swapChildren = function (e, t) {
    if (e !== t) {
      var n = this.getChildIndex(e)
      var r = this.getChildIndex(t)
      this.children[n] = t
      this.children[r] = e
      this.onChildrenChange(n < r ? n : r)
    }
  }
  t.prototype.getChildIndex = function (e) {
    var t = this.children.indexOf(e)
    if (-1 === t) {
      throw new Error("The supplied DisplayObject must be a child of the caller")
    }
    return t
  }
  t.prototype.setChildIndex = function (e, t) {
    if (t < 0 || t >= this.children.length) {
      throw new Error("The index " + t + " supplied is out of bounds " + this.children.length)
    }
    var n = this.getChildIndex(e)
    Ue(this.children, n, 1)
    this.children.splice(t, 0, e)
    this.onChildrenChange(t)
  }
  t.prototype.getChildAt = function (e) {
    if (e < 0 || e >= this.children.length) {
      throw new Error("getChildAt: Index (" + e + ") does not exist.")
    }
    return this.children[e]
  }
  t.prototype.removeChild = function () {
    for (var e = arguments, t = [], n = 0; n < arguments.length; n++) {
      t[n] = e[n]
    }
    if (t.length > 1) {
      for (var r = 0; r < t.length; r++) {
        this.removeChild(t[r])
      }
    } else {
      var i = t[0]
      var o = this.children.indexOf(i)
      if (-1 === o) {
        return null
      }
      i.parent = null
      i.transform._parentID = -1
      Ue(this.children, o, 1)
      this._boundsID++
      this.onChildrenChange(o)
      i.emit("removed", this)
      this.emit("childRemoved", i, this, o)
    }
    return t[0]
  }
  t.prototype.removeChildAt = function (e) {
    var t = this.getChildAt(e)
    t.parent = null
    t.transform._parentID = -1
    Ue(this.children, e, 1)
    this._boundsID++
    this.onChildrenChange(e)
    t.emit("removed", this)
    this.emit("childRemoved", t, this, e)
    return t
  }
  t.prototype.removeChildren = function (e, t) {
    if (undefined === e) {
      e = 0
    }
    if (undefined === t) {
      t = this.children.length
    }
    var n
    var r = e
    var i = t - r
    if (i > 0 && i <= t) {
      n = this.children.splice(r, i)
      for (var o = 0; o < n.length; ++o) {
        n[o].parent = null
        if (n[o].transform) {
          n[o].transform._parentID = -1
        }
      }
      this._boundsID++
      this.onChildrenChange(e)
      for (o = 0; o < n.length; ++o) {
        n[o].emit("removed", this)
        this.emit("childRemoved", n[o], this, o)
      }
      return n
    }
    if (0 === i && 0 === this.children.length) {
      return []
    }
    throw new RangeError("removeChildren: numeric values are outside the acceptable range.")
  }
  t.prototype.sortChildren = function () {
    for (var e = false, t = 0, /* [auto-meaningful-name] */this$children$length = this.children.length; t < this$children$length; ++t) {
      var r = this.children[t]
      r._lastSortedIndex = t
      if (!(e || 0 === r.zIndex)) {
        e = true
      }
    }
    if (e && this.children.length > 1) {
      this.children.sort(Ft)
    }
    this.sortDirty = false
  }
  t.prototype.updateTransform = function () {
    if (this.sortableChildren && this.sortDirty) {
      this.sortChildren()
    }
    this._boundsID++
    this.transform.updateTransform(this.parent.transform)
    this.worldAlpha = this.alpha * this.parent.worldAlpha
    for (var e = 0, /* [auto-meaningful-name] */this$children$length = this.children.length; e < this$children$length; ++e) {
      var n = this.children[e]
      if (n.visible) {
        n.updateTransform()
      }
    }
  }
  t.prototype.calculateBounds = function () {
    this._bounds.clear()
    this._calculateBounds()
    for (var e = 0; e < this.children.length; e++) {
      var t = this.children[e]
      if (t.visible && t.renderable) {
        t.calculateBounds()
        if (t._mask) {
          var n = t._mask.maskObject || t._mask
          n.calculateBounds()
          this._bounds.addBoundsMask(t._bounds, n._bounds)
        } else if (t.filterArea) {
          this._bounds.addBoundsArea(t._bounds, t.filterArea)
        } else {
          this._bounds.addBounds(t._bounds)
        }
      }
    }
    this._bounds.updateID = this._boundsID
  }
  t.prototype.getLocalBounds = function (t, n) {
    if (undefined === n) {
      n = false
    }
    var r = e.prototype.getLocalBounds.call(this, t)
    if (!n) {
      for (var i = 0, /* [auto-meaningful-name] */this$children$length = this.children.length; i < this$children$length; ++i) {
        var a = this.children[i]
        if (a.visible) {
          a.updateTransform()
        }
      }
    }
    return r
  }
  t.prototype._calculateBounds = function () {}
  t.prototype.render = function (e) {
    if (this.visible && !(this.worldAlpha <= 0) && this.renderable) {
      if (this._mask || this.filters && this.filters.length) {
        this.renderAdvanced(e)
      } else {
        this._render(e)
        for (var t = 0, /* [auto-meaningful-name] */this$children$length = this.children.length; t < this$children$length; ++t) {
          this.children[t].render(e)
        }
      }
    }
  }
  t.prototype.renderAdvanced = function (e) {
    e.batch.flush()
    var /* [auto-meaningful-name] */this$filters = this.filters
    var /* [auto-meaningful-name] */this$_mask = this._mask
    if (this$filters) {
      if (!this._enabledFilters) {
        this._enabledFilters = []
      }
      this._enabledFilters.length = 0
      for (var r = 0; r < this$filters.length; r++) {
        if (this$filters[r].enabled) {
          this._enabledFilters.push(this$filters[r])
        }
      }
      if (this._enabledFilters.length) {
        e.filter.push(this, this._enabledFilters)
      }
    }
    if (this$_mask) {
      e.mask.push(this, this._mask)
    }
    this._render(e)
    r = 0
    for (var /* [auto-meaningful-name] */this$children$length = this.children.length; r < this$children$length; r++) {
      this.children[r].render(e)
    }
    e.batch.flush()
    if (this$_mask) {
      e.mask.pop(this)
    }
    if (this$filters && this._enabledFilters && this._enabledFilters.length) {
      e.filter.pop()
    }
  }
  t.prototype._render = function (e) {}
  t.prototype.destroy = function (t) {
    e.prototype.destroy.call(this)
    this.sortDirty = false
    var n = "boolean" === typeof t ? t : t && t.children
    var r = this.removeChildren(0, this.children.length)
    if (n) {
      for (var i = 0; i < r.length; ++i) {
        r[i].destroy(t)
      }
    }
  }
  Object.defineProperty(t.prototype, "width", {
    get: function () {
      return this.scale.x * this.getLocalBounds().width
    },
    set: function (e) {
      var /* [auto-meaningful-name] */this$getLocalBounds$width = this.getLocalBounds().width
      this.scale.x = 0 !== this$getLocalBounds$width ? e / this$getLocalBounds$width : 1
      this._width = e
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "height", {
    get: function () {
      return this.scale.y * this.getLocalBounds().height
    },
    set: function (e) {
      var /* [auto-meaningful-name] */this$getLocalBounds$height = this.getLocalBounds().height
      this.scale.y = 0 !== this$getLocalBounds$height ? e / this$getLocalBounds$height : 1
      this._height = e
    },
    enumerable: false,
    configurable: true
  })
  return t
}(It)
Pt.prototype.containerUpdateTransform = Pt.prototype.updateTransform
var Nt = function () {
  function e() {
    this.pressure = 0
    this.rotationAngle = 0
    this.twist = 0
    this.tangentialPressure = 0
    this.global = new ht()
    this.target = null
    this.originalEvent = null
    this.identifier = null
    this.isPrimary = false
    this.button = 0
    this.buttons = 0
    this.width = 0
    this.height = 0
    this.tiltX = 0
    this.tiltY = 0
    this.pointerType = null
    this.pressure = 0
    this.rotationAngle = 0
    this.twist = 0
    this.tangentialPressure = 0
  }
  Object.defineProperty(e.prototype, "pointerId", {
    get: function () {
      return this.identifier
    },
    enumerable: false,
    configurable: true
  })
  e.prototype.getLocalPosition = function (e, t, n) {
    return e.worldTransform.applyInverse(n || this.global, t)
  }
  e.prototype.copyEvent = function (e) {
    if ("isPrimary" in e && e.isPrimary) {
      this.isPrimary = true
    }
    this.button = "button" in e && e.button
    var t = "buttons" in e && e.buttons
    this.buttons = Number.isInteger(t) ? t : "which" in e && e.which
    this.width = "width" in e && e.width
    this.height = "height" in e && e.height
    this.tiltX = "tiltX" in e && e.tiltX
    this.tiltY = "tiltY" in e && e.tiltY
    this.pointerType = "pointerType" in e && e.pointerType
    this.pressure = "pressure" in e && e.pressure
    this.rotationAngle = "rotationAngle" in e && e.rotationAngle
    this.twist = "twist" in e && e.twist || 0
    this.tangentialPressure = "tangentialPressure" in e && e.tangentialPressure || 0
  }
  e.prototype.reset = function () {
    this.isPrimary = false
  }
  return e
}()
var Mt = function (e, t) {
  return (Mt = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t
  } || function (e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) {
      e[n] = t[n]
    }
  })(e, t)
}
var Lt = function () {
  function e() {
    this.stopped = false
    this.stopsPropagatingAt = null
    this.stopPropagationHint = false
    this.target = null
    this.currentTarget = null
    this.type = null
    this.data = null
  }
  e.prototype.stopPropagation = function () {
    this.stopped = true
    this.stopPropagationHint = true
    this.stopsPropagatingAt = this.currentTarget
  }
  e.prototype.reset = function () {
    this.stopped = false
    this.stopsPropagatingAt = null
    this.stopPropagationHint = false
    this.currentTarget = null
    this.target = null
  }
  return e
}()
var jt = function () {
  function e(t) {
    this._pointerId = t
    this._flags = e.FLAGS.NONE
  }
  e.prototype._doSet = function (e, t) {
    this._flags = t ? this._flags | e : this._flags & ~e
  }
  Object.defineProperty(e.prototype, "pointerId", {
    get: function () {
      return this._pointerId
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "flags", {
    get: function () {
      return this._flags
    },
    set: function (e) {
      this._flags = e
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "none", {
    get: function () {
      return this._flags === e.FLAGS.NONE
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "over", {
    get: function () {
      return 0 !== (this._flags & e.FLAGS.OVER)
    },
    set: function (t) {
      this._doSet(e.FLAGS.OVER, t)
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "rightDown", {
    get: function () {
      return 0 !== (this._flags & e.FLAGS.RIGHT_DOWN)
    },
    set: function (t) {
      this._doSet(e.FLAGS.RIGHT_DOWN, t)
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "leftDown", {
    get: function () {
      return 0 !== (this._flags & e.FLAGS.LEFT_DOWN)
    },
    set: function (t) {
      this._doSet(e.FLAGS.LEFT_DOWN, t)
    },
    enumerable: false,
    configurable: true
  })
  e.FLAGS = Object.freeze({
    NONE: 0,
    OVER: 1,
    LEFT_DOWN: 2,
    RIGHT_DOWN: 4
  })
  return e
}()
var Ut = function () {
  function e() {
    this._tempPoint = new ht()
  }
  e.prototype.recursiveFindHit = function (e, t, n, r, i) {
    if (!t || !t.visible) {
      return false
    }
    var /* [auto-meaningful-name] */e$data$global = e.data.global
    var a = false
    var s = i = t.interactive || i
    var c = true
    if (t.hitArea) {
      if (r) {
        t.worldTransform.applyInverse(e$data$global, this._tempPoint)
        if (t.hitArea.contains(this._tempPoint.x, this._tempPoint.y)) {
          a = true
        } else {
          r = false
          c = false
        }
      }
      s = false
    } else {
      if (t._mask && r) {
        if (!(t._mask.containsPoint && t._mask.containsPoint(e$data$global))) {
          r = false
        }
      }
    }
    if (c && t.interactiveChildren && t.children) {
      for (var /* [auto-meaningful-name] */t$children = t.children, l = t$children.length - 1; l >= 0; l--) {
        var f = t$children[l]
        var d = this.recursiveFindHit(e, f, n, r, s)
        if (d) {
          if (!f.parent) {
            continue
          }
          s = false
          if (d) {
            if (e.target) {
              r = false
            }
            a = true
          }
        }
      }
    }
    if (i) {
      if (r && !e.target && !t.hitArea && t.containsPoint && t.containsPoint(e$data$global)) {
        a = true
      }
      if (t.interactive) {
        if (a && !e.target) {
          e.target = t
        }
        if (n) {
          n(e, t, !!a)
        }
      }
    }
    return a
  }
  e.prototype.findHit = function (e, t, n, r) {
    this.recursiveFindHit(e, t, n, r, false)
  }
  return e
}()
var Ht = {
  interactive: false,
  interactiveChildren: true,
  hitArea: null,
  get buttonMode() {
    return "pointer" === this.cursor
  },
  set buttonMode(e) {
    if (e) {
      this.cursor = "pointer"
    } else {
      if ("pointer" === this.cursor) {
        this.cursor = null
      }
    }
  },
  cursor: null,
  get trackedPointers() {
    if (undefined === this._trackedPointers) {
      this._trackedPointers = {}
    }
    return this._trackedPointers
  },
  _trackedPointers: undefined
}
It.mixin(Ht)
var Vt = {
  target: null,
  data: {
    global: null
  }
}
var Gt = function (e) {
  function t(t, n) {
    var r = e.call(this) || this
    n = n || {}
    r.renderer = t
    r.autoPreventDefault = undefined === n.autoPreventDefault || n.autoPreventDefault
    r.interactionFrequency = n.interactionFrequency || 10
    r.mouse = new Nt()
    r.mouse.identifier = 1
    r.mouse.global.set(-999999)
    r.activeInteractionData = {}
    r.activeInteractionData[1] = r.mouse
    r.interactionDataPool = []
    r.eventData = new Lt()
    r.interactionDOMElement = null
    r.moveWhenInside = false
    r.eventsAdded = false
    r.tickerAdded = false
    r.mouseOverRenderer = !("PointerEvent" in self)
    r.supportsTouchEvents = "ontouchstart" in self
    r.supportsPointerEvents = !!self.PointerEvent
    r.onPointerUp = r.onPointerUp.bind(r)
    r.processPointerUp = r.processPointerUp.bind(r)
    r.onPointerCancel = r.onPointerCancel.bind(r)
    r.processPointerCancel = r.processPointerCancel.bind(r)
    r.onPointerDown = r.onPointerDown.bind(r)
    r.processPointerDown = r.processPointerDown.bind(r)
    r.onPointerMove = r.onPointerMove.bind(r)
    r.processPointerMove = r.processPointerMove.bind(r)
    r.onPointerOut = r.onPointerOut.bind(r)
    r.processPointerOverOut = r.processPointerOverOut.bind(r)
    r.onPointerOver = r.onPointerOver.bind(r)
    r.cursorStyles = {
      default: "inherit",
      pointer: "pointer"
    }
    r.currentCursorMode = null
    r.cursor = null
    r.resolution = 1
    r.delayedEvents = []
    r.search = new Ut()
    r._tempDisplayObject = new Rt()
    r._useSystemTicker = undefined === n.useSystemTicker || n.useSystemTicker
    r.setTargetElement(r.renderer.view, r.renderer.resolution)
    return r
  }
  (function (e, t) {
    function n() {
      this.constructor = e
    }
    Mt(e, t)
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n())
  })(t, e)
  Object.defineProperty(t.prototype, "useSystemTicker", {
    get: function () {
      return this._useSystemTicker
    },
    set: function (e) {
      this._useSystemTicker = e
      if (e) {
        this.addTickerListener()
      } else {
        this.removeTickerListener()
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "lastObjectRendered", {
    get: function () {
      return this.renderer._lastObjectRendered || this._tempDisplayObject
    },
    enumerable: false,
    configurable: true
  })
  t.prototype.hitTest = function (e, t) {
    Vt.target = null
    Vt.data.global = e
    if (!t) {
      t = this.lastObjectRendered
    }
    this.processInteractive(Vt, t, null, true)
    return Vt.target
  }
  t.prototype.setTargetElement = function (e, t) {
    if (undefined === t) {
      t = 1
    }
    this.removeTickerListener()
    this.removeEvents()
    this.interactionDOMElement = e
    this.resolution = t
    this.addEvents()
    this.addTickerListener()
  }
  t.prototype.addTickerListener = function () {
    if (!this.tickerAdded && this.interactionDOMElement && this._useSystemTicker) {
      kt.system.add(this.tickerUpdate, this, Et.INTERACTION)
      this.tickerAdded = true
    }
  }
  t.prototype.removeTickerListener = function () {
    if (this.tickerAdded) {
      kt.system.remove(this.tickerUpdate, this)
      this.tickerAdded = false
    }
  }
  t.prototype.addEvents = function () {
    if (!this.eventsAdded && this.interactionDOMElement) {
      var /* [auto-meaningful-name] */this$interactionDOMElement$style = this.interactionDOMElement.style
      if (self.navigator.msPointerEnabled) {
        this$interactionDOMElement$style.msContentZooming = "none"
        this$interactionDOMElement$style.msTouchAction = "none"
      } else {
        if (this.supportsPointerEvents) {
          this$interactionDOMElement$style.touchAction = "none"
        }
      }
      if (this.supportsPointerEvents) {
        self.document.addEventListener("pointermove", this.onPointerMove, true)
        this.interactionDOMElement.addEventListener("pointerdown", this.onPointerDown, true)
        this.interactionDOMElement.addEventListener("pointerleave", this.onPointerOut, true)
        this.interactionDOMElement.addEventListener("pointerover", this.onPointerOver, true)
        self.addEventListener("pointercancel", this.onPointerCancel, true)
        self.addEventListener("pointerup", this.onPointerUp, true)
      } else {
        self.document.addEventListener("mousemove", this.onPointerMove, true)
        this.interactionDOMElement.addEventListener("mousedown", this.onPointerDown, true)
        this.interactionDOMElement.addEventListener("mouseout", this.onPointerOut, true)
        this.interactionDOMElement.addEventListener("mouseover", this.onPointerOver, true)
        self.addEventListener("mouseup", this.onPointerUp, true)
      }
      if (this.supportsTouchEvents) {
        this.interactionDOMElement.addEventListener("touchstart", this.onPointerDown, true)
        this.interactionDOMElement.addEventListener("touchcancel", this.onPointerCancel, true)
        this.interactionDOMElement.addEventListener("touchend", this.onPointerUp, true)
        this.interactionDOMElement.addEventListener("touchmove", this.onPointerMove, true)
      }
      this.eventsAdded = true
    }
  }
  t.prototype.removeEvents = function () {
    if (this.eventsAdded && this.interactionDOMElement) {
      var /* [auto-meaningful-name] */this$interactionDOMElement$style = this.interactionDOMElement.style
      if (self.navigator.msPointerEnabled) {
        this$interactionDOMElement$style.msContentZooming = ""
        this$interactionDOMElement$style.msTouchAction = ""
      } else {
        if (this.supportsPointerEvents) {
          this$interactionDOMElement$style.touchAction = ""
        }
      }
      if (this.supportsPointerEvents) {
        self.document.removeEventListener("pointermove", this.onPointerMove, true)
        this.interactionDOMElement.removeEventListener("pointerdown", this.onPointerDown, true)
        this.interactionDOMElement.removeEventListener("pointerleave", this.onPointerOut, true)
        this.interactionDOMElement.removeEventListener("pointerover", this.onPointerOver, true)
        self.removeEventListener("pointercancel", this.onPointerCancel, true)
        self.removeEventListener("pointerup", this.onPointerUp, true)
      } else {
        self.document.removeEventListener("mousemove", this.onPointerMove, true)
        this.interactionDOMElement.removeEventListener("mousedown", this.onPointerDown, true)
        this.interactionDOMElement.removeEventListener("mouseout", this.onPointerOut, true)
        this.interactionDOMElement.removeEventListener("mouseover", this.onPointerOver, true)
        self.removeEventListener("mouseup", this.onPointerUp, true)
      }
      if (this.supportsTouchEvents) {
        this.interactionDOMElement.removeEventListener("touchstart", this.onPointerDown, true)
        this.interactionDOMElement.removeEventListener("touchcancel", this.onPointerCancel, true)
        this.interactionDOMElement.removeEventListener("touchend", this.onPointerUp, true)
        this.interactionDOMElement.removeEventListener("touchmove", this.onPointerMove, true)
      }
      this.interactionDOMElement = null
      this.eventsAdded = false
    }
  }
  t.prototype.tickerUpdate = function (e) {
    this._deltaTime += e
    if (!(this._deltaTime < this.interactionFrequency)) {
      this._deltaTime = 0
      this.update()
    }
  }
  t.prototype.update = function () {
    if (this.interactionDOMElement) {
      if (this._didMove) {
        this._didMove = false
      } else {
        for (var e in this.cursor = null, this.activeInteractionData) if (this.activeInteractionData.hasOwnProperty(e)) {
          var t = this.activeInteractionData[e]
          if (t.originalEvent && "touch" !== t.pointerType) {
            var n = this.configureInteractionEventForDOMEvent(this.eventData, t.originalEvent, t)
            this.processInteractive(n, this.lastObjectRendered, this.processPointerOverOut, true)
          }
        }
        this.setCursorMode(this.cursor)
      }
    }
  }
  t.prototype.setCursorMode = function (e) {
    e = e || "default"
    var t = true
    if (self.OffscreenCanvas && this.interactionDOMElement instanceof OffscreenCanvas) {
      t = false
    }
    if (this.currentCursorMode !== e) {
      this.currentCursorMode = e
      var n = this.cursorStyles[e]
      if (n) {
        switch (typeof n) {
          case "string":
            if (t) {
              this.interactionDOMElement.style.cursor = n
            }
            break
          case "function":
            n(e)
            break
          case "object":
            if (t) {
              Object.assign(this.interactionDOMElement.style, n)
            }
        }
      } else if (t && "string" === typeof e && !Object.prototype.hasOwnProperty.call(this.cursorStyles, e)) {
        this.interactionDOMElement.style.cursor = e
      }
    }
  }
  t.prototype.dispatchEvent = function (e, t, n) {
    if (!(n.stopPropagationHint && e !== n.stopsPropagatingAt)) {
      n.currentTarget = e
      n.type = t
      e.emit(t, n)
      if (e[t]) {
        e[t](n)
      }
    }
  }
  t.prototype.delayDispatchEvent = function (e, t, n) {
    this.delayedEvents.push({
      displayObject: e,
      eventString: t,
      eventData: n
    })
  }
  t.prototype.mapPositionToPoint = function (e, t, n) {
    var r
    r = this.interactionDOMElement.parentElement ? this.interactionDOMElement.getBoundingClientRect() : {
      x: 0,
      y: 0,
      width: this.interactionDOMElement.width,
      height: this.interactionDOMElement.height,
      left: 0,
      top: 0
    }
    var i = 1 / this.resolution
    e.x = (t - r.left) * (this.interactionDOMElement.width / r.width) * i
    e.y = (n - r.top) * (this.interactionDOMElement.height / r.height) * i
  }
  t.prototype.processInteractive = function (e, t, n, r) {
    var i = this.search.findHit(e, t, n, r)
    var /* [auto-meaningful-name] */this$delayedEvents = this.delayedEvents
    if (!this$delayedEvents.length) {
      return i
    }
    e.stopPropagationHint = false
    var /* [auto-meaningful-name] */this$delayedEvents$length = this$delayedEvents.length
    this.delayedEvents = []
    for (var s = 0; s < this$delayedEvents$length; s++) {
      var c = this$delayedEvents[s]
      var /* [auto-meaningful-name] */c$displayObject = c.displayObject
      var /* [auto-meaningful-name] */c$eventString = c.eventString
      var /* [auto-meaningful-name] */c$eventData = c.eventData
      if (c$eventData.stopsPropagatingAt === c$displayObject) {
        c$eventData.stopPropagationHint = true
      }
      this.dispatchEvent(c$displayObject, c$eventString, c$eventData)
    }
    return i
  }
  t.prototype.onPointerDown = function (e) {
    if (!this.supportsTouchEvents || "touch" !== e.pointerType) {
      var t = this.normalizeToPointerData(e)
      if (this.autoPreventDefault && t[0].isNormalized) {
        if (e.cancelable || !("cancelable" in e)) {
          e.preventDefault()
        }
      }
      for (var /* [auto-meaningful-name] */t$length = t.length, r = 0; r < t$length; r++) {
        var i = t[r]
        var o = this.getInteractionDataForPointerId(i)
        var a = this.configureInteractionEventForDOMEvent(this.eventData, i, o)
        a.data.originalEvent = e
        this.processInteractive(a, this.lastObjectRendered, this.processPointerDown, true)
        this.emit("pointerdown", a)
        if ("touch" === i.pointerType) {
          this.emit("touchstart", a)
        } else if ("mouse" === i.pointerType || "pen" === i.pointerType) {
          var s = 2 === i.button
          this.emit(s ? "rightdown" : "mousedown", this.eventData)
        }
      }
    }
  }
  t.prototype.processPointerDown = function (e, t, n) {
    var /* [auto-meaningful-name] */e$data = e.data
    var /* [auto-meaningful-name] */e$data$identifier = e.data.identifier
    if (n) {
      if (!t.trackedPointers[e$data$identifier]) {
        t.trackedPointers[e$data$identifier] = new jt(e$data$identifier)
      }
      this.dispatchEvent(t, "pointerdown", e)
      if ("touch" === e$data.pointerType) {
        this.dispatchEvent(t, "touchstart", e)
      } else if ("mouse" === e$data.pointerType || "pen" === e$data.pointerType) {
        var o = 2 === e$data.button
        if (o) {
          t.trackedPointers[e$data$identifier].rightDown = true
        } else {
          t.trackedPointers[e$data$identifier].leftDown = true
        }
        this.dispatchEvent(t, o ? "rightdown" : "mousedown", e)
      }
    }
  }
  t.prototype.onPointerComplete = function (e, t, n) {
    for (var r = this.normalizeToPointerData(e), /* [auto-meaningful-name] */r$length = r.length, o = e.target !== this.interactionDOMElement ? "outside" : "", a = 0; a < r$length; a++) {
      var s = r[a]
      var c = this.getInteractionDataForPointerId(s)
      var u = this.configureInteractionEventForDOMEvent(this.eventData, s, c)
      u.data.originalEvent = e
      this.processInteractive(u, this.lastObjectRendered, n, t || !o)
      this.emit(t ? "pointercancel" : "pointerup" + o, u)
      if ("mouse" === s.pointerType || "pen" === s.pointerType) {
        var l = 2 === s.button
        this.emit(l ? "rightup" + o : "mouseup" + o, u)
      } else if ("touch" === s.pointerType) {
        this.emit(t ? "touchcancel" : "touchend" + o, u)
        this.releaseInteractionDataForPointerId(s.pointerId)
      }
    }
  }
  t.prototype.onPointerCancel = function (e) {
    if (!(this.supportsTouchEvents && "touch" === e.pointerType)) {
      this.onPointerComplete(e, true, this.processPointerCancel)
    }
  }
  t.prototype.processPointerCancel = function (e, t) {
    var /* [auto-meaningful-name] */e$data = e.data
    var /* [auto-meaningful-name] */e$data$identifier = e.data.identifier
    if (undefined !== t.trackedPointers[e$data$identifier]) {
      delete t.trackedPointers[e$data$identifier]
      this.dispatchEvent(t, "pointercancel", e)
      if ("touch" === e$data.pointerType) {
        this.dispatchEvent(t, "touchcancel", e)
      }
    }
  }
  t.prototype.onPointerUp = function (e) {
    if (!(this.supportsTouchEvents && "touch" === e.pointerType)) {
      this.onPointerComplete(e, false, this.processPointerUp)
    }
  }
  t.prototype.processPointerUp = function (e, t, n) {
    var /* [auto-meaningful-name] */e$data = e.data
    var /* [auto-meaningful-name] */e$data$identifier = e.data.identifier
    var o = t.trackedPointers[e$data$identifier]
    var a = "touch" === e$data.pointerType
    var s = "mouse" === e$data.pointerType || "pen" === e$data.pointerType
    var c = false
    if (s) {
      var u = 2 === e$data.button
      var /* [auto-meaningful-name] */jt$FLAGS = jt.FLAGS
      var f = u ? jt$FLAGS.RIGHT_DOWN : jt$FLAGS.LEFT_DOWN
      var d = undefined !== o && o.flags & f
      if (n) {
        this.dispatchEvent(t, u ? "rightup" : "mouseup", e)
        if (d) {
          this.dispatchEvent(t, u ? "rightclick" : "click", e)
          c = true
        }
      } else {
        if (d) {
          this.dispatchEvent(t, u ? "rightupoutside" : "mouseupoutside", e)
        }
      }
      if (o) {
        if (u) {
          o.rightDown = false
        } else {
          o.leftDown = false
        }
      }
    }
    if (n) {
      this.dispatchEvent(t, "pointerup", e)
      if (a) {
        this.dispatchEvent(t, "touchend", e)
      }
      if (o) {
        if (!(s && !c)) {
          this.dispatchEvent(t, "pointertap", e)
        }
        if (a) {
          this.dispatchEvent(t, "tap", e)
          o.over = false
        }
      }
    } else {
      if (o) {
        this.dispatchEvent(t, "pointerupoutside", e)
        if (a) {
          this.dispatchEvent(t, "touchendoutside", e)
        }
      }
    }
    if (o && o.none) {
      delete t.trackedPointers[e$data$identifier]
    }
  }
  t.prototype.onPointerMove = function (e) {
    if (!this.supportsTouchEvents || "touch" !== e.pointerType) {
      var t = this.normalizeToPointerData(e)
      if (!("mouse" !== t[0].pointerType && "pen" !== t[0].pointerType)) {
        this._didMove = true
        this.cursor = null
      }
      for (var /* [auto-meaningful-name] */t$length = t.length, r = 0; r < t$length; r++) {
        var i = t[r]
        var o = this.getInteractionDataForPointerId(i)
        var a = this.configureInteractionEventForDOMEvent(this.eventData, i, o)
        a.data.originalEvent = e
        this.processInteractive(a, this.lastObjectRendered, this.processPointerMove, true)
        this.emit("pointermove", a)
        if ("touch" === i.pointerType) {
          this.emit("touchmove", a)
        }
        if (!("mouse" !== i.pointerType && "pen" !== i.pointerType)) {
          this.emit("mousemove", a)
        }
      }
      if ("mouse" === t[0].pointerType) {
        this.setCursorMode(this.cursor)
      }
    }
  }
  t.prototype.processPointerMove = function (e, t, n) {
    var /* [auto-meaningful-name] */e$data = e.data
    var i = "touch" === e$data.pointerType
    var o = "mouse" === e$data.pointerType || "pen" === e$data.pointerType
    if (o) {
      this.processPointerOverOut(e, t, n)
    }
    if (!(this.moveWhenInside && !n)) {
      this.dispatchEvent(t, "pointermove", e)
      if (i) {
        this.dispatchEvent(t, "touchmove", e)
      }
      if (o) {
        this.dispatchEvent(t, "mousemove", e)
      }
    }
  }
  t.prototype.onPointerOut = function (e) {
    if (!this.supportsTouchEvents || "touch" !== e.pointerType) {
      var t = this.normalizeToPointerData(e)[0]
      if ("mouse" === t.pointerType) {
        this.mouseOverRenderer = false
        this.setCursorMode(null)
      }
      var n = this.getInteractionDataForPointerId(t)
      var r = this.configureInteractionEventForDOMEvent(this.eventData, t, n)
      r.data.originalEvent = t
      this.processInteractive(r, this.lastObjectRendered, this.processPointerOverOut, false)
      this.emit("pointerout", r)
      if ("mouse" === t.pointerType || "pen" === t.pointerType) {
        this.emit("mouseout", r)
      } else {
        this.releaseInteractionDataForPointerId(n.identifier)
      }
    }
  }
  t.prototype.processPointerOverOut = function (e, t, n) {
    var /* [auto-meaningful-name] */e$data = e.data
    var /* [auto-meaningful-name] */e$data$identifier = e.data.identifier
    var o = "mouse" === e$data.pointerType || "pen" === e$data.pointerType
    var a = t.trackedPointers[e$data$identifier]
    if (n && !a) {
      a = t.trackedPointers[e$data$identifier] = new jt(e$data$identifier)
    }
    if (undefined !== a) {
      if (n && this.mouseOverRenderer) {
        if (!a.over) {
          a.over = true
          this.delayDispatchEvent(t, "pointerover", e)
          if (o) {
            this.delayDispatchEvent(t, "mouseover", e)
          }
        }
        if (o && null === this.cursor) {
          this.cursor = t.cursor
        }
      } else {
        if (a.over) {
          a.over = false
          this.dispatchEvent(t, "pointerout", this.eventData)
          if (o) {
            this.dispatchEvent(t, "mouseout", e)
          }
          if (a.none) {
            delete t.trackedPointers[e$data$identifier]
          }
        }
      }
    }
  }
  t.prototype.onPointerOver = function (e) {
    var t = this.normalizeToPointerData(e)[0]
    var n = this.getInteractionDataForPointerId(t)
    var r = this.configureInteractionEventForDOMEvent(this.eventData, t, n)
    r.data.originalEvent = t
    if ("mouse" === t.pointerType) {
      this.mouseOverRenderer = true
    }
    this.emit("pointerover", r)
    if (!("mouse" !== t.pointerType && "pen" !== t.pointerType)) {
      this.emit("mouseover", r)
    }
  }
  t.prototype.getInteractionDataForPointerId = function (e) {
    var t
    var /* [auto-meaningful-name] */e$pointerId = e.pointerId
    if (1 === e$pointerId || "mouse" === e.pointerType) {
      t = this.mouse
    } else {
      if (this.activeInteractionData[e$pointerId]) {
        t = this.activeInteractionData[e$pointerId]
      } else {
        (t = this.interactionDataPool.pop() || new Nt()).identifier = e$pointerId
        this.activeInteractionData[e$pointerId] = t
      }
    }
    t.copyEvent(e)
    return t
  }
  t.prototype.releaseInteractionDataForPointerId = function (e) {
    var t = this.activeInteractionData[e]
    if (t) {
      delete this.activeInteractionData[e]
      t.reset()
      this.interactionDataPool.push(t)
    }
  }
  t.prototype.configureInteractionEventForDOMEvent = function (e, t, n) {
    e.data = n
    this.mapPositionToPoint(n.global, t.clientX, t.clientY)
    if ("touch" === t.pointerType) {
      t.globalX = n.global.x
      t.globalY = n.global.y
    }
    n.originalEvent = t
    e.reset()
    return e
  }
  t.prototype.normalizeToPointerData = function (e) {
    var t = []
    if (this.supportsTouchEvents && e instanceof TouchEvent) {
      for (var n = 0, /* [auto-meaningful-name] */e$changedTouches$length = e.changedTouches.length; n < e$changedTouches$length; n++) {
        var i = e.changedTouches[n]
        if ("undefined" === typeof i.button) {
          i.button = e.touches.length ? 1 : 0
        }
        if ("undefined" === typeof i.buttons) {
          i.buttons = e.touches.length ? 1 : 0
        }
        if ("undefined" === typeof i.isPrimary) {
          i.isPrimary = 1 === e.touches.length && "touchstart" === e.type
        }
        if ("undefined" === typeof i.width) {
          i.width = i.radiusX || 1
        }
        if ("undefined" === typeof i.height) {
          i.height = i.radiusY || 1
        }
        if ("undefined" === typeof i.tiltX) {
          i.tiltX = 0
        }
        if ("undefined" === typeof i.tiltY) {
          i.tiltY = 0
        }
        if ("undefined" === typeof i.pointerType) {
          i.pointerType = "touch"
        }
        if ("undefined" === typeof i.pointerId) {
          i.pointerId = i.identifier || 0
        }
        if ("undefined" === typeof i.pressure) {
          i.pressure = i.force || .5
        }
        if ("undefined" === typeof i.twist) {
          i.twist = 0
        }
        if ("undefined" === typeof i.tangentialPressure) {
          i.tangentialPressure = 0
        }
        if ("undefined" === typeof i.layerX) {
          i.layerX = i.offsetX = i.clientX
        }
        if ("undefined" === typeof i.layerY) {
          i.layerY = i.offsetY = i.clientY
        }
        i.isNormalized = true
        t.push(i)
      }
    } else if (self.MouseEvent && (!(e instanceof MouseEvent) || this.supportsPointerEvents && e instanceof self.PointerEvent)) {
      t.push(e)
    } else {
      var o = e
      if ("undefined" === typeof o.isPrimary) {
        o.isPrimary = true
      }
      if ("undefined" === typeof o.width) {
        o.width = 1
      }
      if ("undefined" === typeof o.height) {
        o.height = 1
      }
      if ("undefined" === typeof o.tiltX) {
        o.tiltX = 0
      }
      if ("undefined" === typeof o.tiltY) {
        o.tiltY = 0
      }
      if ("undefined" === typeof o.pointerType) {
        o.pointerType = "mouse"
      }
      if ("undefined" === typeof o.pointerId) {
        o.pointerId = 1
      }
      if ("undefined" === typeof o.pressure) {
        o.pressure = .5
      }
      if ("undefined" === typeof o.twist) {
        o.twist = 0
      }
      if ("undefined" === typeof o.tangentialPressure) {
        o.tangentialPressure = 0
      }
      o.isNormalized = true
      t.push(o)
    }
    return t
  }
  t.prototype.destroy = function () {
    this.removeEvents()
    this.removeTickerListener()
    this.removeAllListeners()
    this.renderer = null
    this.mouse = null
    this.eventData = null
    this.interactionDOMElement = null
    this.onPointerDown = null
    this.processPointerDown = null
    this.onPointerUp = null
    this.processPointerUp = null
    this.onPointerCancel = null
    this.processPointerCancel = null
    this.onPointerMove = null
    this.processPointerMove = null
    this.onPointerOut = null
    this.processPointerOverOut = null
    this.onPointerOver = null
    this.search = null
  }
  return t
}($_13371)
var zt = function () {
  function e(e) {
    this.items = []
    this._name = e
    this._aliasCount = 0
  }
  e.prototype.emit = function (e, t, n, r, i, o, a, s) {
    if (arguments.length > 8) {
      throw new Error("max arguments reached")
    }
    var c = this
    var /* [auto-meaningful-name] */c$name = c.name
    var /* [auto-meaningful-name] */c$items = c.items
    this._aliasCount++
    for (var f = 0, /* [auto-meaningful-name] */c$items$length = c$items.length; f < c$items$length; f++) {
      c$items[f][c$name](e, t, n, r, i, o, a, s)
    }
    if (c$items === this.items) {
      this._aliasCount--
    }
    return this
  }
  e.prototype.ensureNonAliasedItems = function () {
    if (this._aliasCount > 0 && this.items.length > 1) {
      this._aliasCount = 0
      this.items = this.items.slice(0)
    }
  }
  e.prototype.add = function (e) {
    if (e[this._name]) {
      this.ensureNonAliasedItems()
      this.remove(e)
      this.items.push(e)
    }
    return this
  }
  e.prototype.remove = function (e) {
    var t = this.items.indexOf(e)
    if (-1 !== t) {
      this.ensureNonAliasedItems()
      this.items.splice(t, 1)
    }
    return this
  }
  e.prototype.contains = function (e) {
    return -1 !== this.items.indexOf(e)
  }
  e.prototype.removeAll = function () {
    this.ensureNonAliasedItems()
    this.items.length = 0
    return this
  }
  e.prototype.destroy = function () {
    this.removeAll()
    this.items = null
    this._name = null
  }
  Object.defineProperty(e.prototype, "empty", {
    get: function () {
      return 0 === this.items.length
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "name", {
    get: function () {
      return this._name
    },
    enumerable: false,
    configurable: true
  })
  return e
}()
Object.defineProperties(zt.prototype, {
  dispatch: {
    value: zt.prototype.emit
  },
  run: {
    value: zt.prototype.emit
  }
})
fe.PREFER_ENV = W.any ? K.WEBGL : K.WEBGL2
fe.STRICT_TEXTURE_CACHE = false
var Qt = []
function Wt(e, t) {
  if (!e) {
    return null
  }
  var n = ""
  if ("string" === typeof e) {
    var r = /\.(\w{3,4})(?:$|\?|#)/i.exec(e)
    if (r) {
      n = r[1].toLowerCase()
    }
  }
  for (var i = Qt.length - 1; i >= 0; --i) {
    var o = Qt[i]
    if (o.test && o.test(e, n)) {
      return new o(e, t)
    }
  }
  throw new Error("Unrecognized source type to auto-detect Resource")
}
var Kt = function (e, t) {
  return (Kt = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t
  } || function (e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) {
      e[n] = t[n]
    }
  })(e, t)
}
function Xt(e, t) {
  function n() {
    this.constructor = e
  }
  Kt(e, t)
  e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n())
}
var Yt = function () {
  function e(e, t) {
    if (undefined === e) {
      e = 0
    }
    if (undefined === t) {
      t = 0
    }
    this._width = e
    this._height = t
    this.destroyed = false
    this.internal = false
    this.onResize = new zt("setRealSize")
    this.onUpdate = new zt("update")
    this.onError = new zt("onError")
  }
  e.prototype.bind = function (e) {
    this.onResize.add(e)
    this.onUpdate.add(e)
    this.onError.add(e)
    if (this._width || this._height) {
      this.onResize.emit(this._width, this._height)
    }
  }
  e.prototype.unbind = function (e) {
    this.onResize.remove(e)
    this.onUpdate.remove(e)
    this.onError.remove(e)
  }
  e.prototype.resize = function (e, t) {
    if (!(e === this._width && t === this._height)) {
      this._width = e
      this._height = t
      this.onResize.emit(e, t)
    }
  }
  Object.defineProperty(e.prototype, "valid", {
    get: function () {
      return !!this._width && !!this._height
    },
    enumerable: false,
    configurable: true
  })
  e.prototype.update = function () {
    if (!this.destroyed) {
      this.onUpdate.emit()
    }
  }
  e.prototype.load = function () {
    return Promise.resolve(this)
  }
  Object.defineProperty(e.prototype, "width", {
    get: function () {
      return this._width
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "height", {
    get: function () {
      return this._height
    },
    enumerable: false,
    configurable: true
  })
  e.prototype.style = function (e, t, n) {
    return false
  }
  e.prototype.dispose = function () {}
  e.prototype.destroy = function () {
    if (!this.destroyed) {
      this.destroyed = true
      this.dispose()
      this.onError.removeAll()
      this.onError = null
      this.onResize.removeAll()
      this.onResize = null
      this.onUpdate.removeAll()
      this.onUpdate = null
    }
  }
  e.test = function (e, t) {
    return false
  }
  return e
}()
var qt = function (e) {
  function t(t, n) {
    var r = this
    var i = n || {}
    var /* [auto-meaningful-name] */i$width = i.width
    var /* [auto-meaningful-name] */i$height = i.height
    if (!i$width || !i$height) {
      throw new Error("BufferResource width or height invalid")
    }
    (r = e.call(this, i$width, i$height) || this).data = t
    return r
  }
  Xt(t, e)
  t.prototype.upload = function (e, t, n) {
    var r = e.gl
    r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.alphaMode === oe.UNPACK)
    var /* [auto-meaningful-name] */t$realWidth = t.realWidth
    var /* [auto-meaningful-name] */t$realHeight = t.realHeight
    if (n.width === t$realWidth && n.height === t$realHeight) {
      r.texSubImage2D(t.target, 0, 0, 0, t$realWidth, t$realHeight, t.format, t.type, this.data)
    } else {
      n.width = t$realWidth
      n.height = t$realHeight
      r.texImage2D(t.target, 0, n.internalFormat, t$realWidth, t$realHeight, 0, t.format, n.type, this.data)
    }
    return true
  }
  t.prototype.dispose = function () {
    this.data = null
  }
  t.test = function (e) {
    return e instanceof Float32Array || e instanceof Uint8Array || e instanceof Uint32Array
  }
  return t
}(Yt)
var $t = {
  scaleMode: ne.NEAREST,
  format: J.RGBA,
  alphaMode: oe.NPM
}
var Jt = function (e) {
  function t(t, n) {
    if (undefined === t) {
      t = null
    }
    if (undefined === n) {
      n = null
    }
    var r = e.call(this) || this
    var /* [auto-meaningful-name] */NN$alphaMode = (n = n || {}).alphaMode
    var /* [auto-meaningful-name] */n$mipmap = n.mipmap
    var /* [auto-meaningful-name] */n$anisotropicLevel = n.anisotropicLevel
    var /* [auto-meaningful-name] */n$scaleMode = n.scaleMode
    var /* [auto-meaningful-name] */n$width = n.width
    var /* [auto-meaningful-name] */n$height = n.height
    var /* [auto-meaningful-name] */n$wrapMode = n.wrapMode
    var /* [auto-meaningful-name] */n$format = n.format
    var /* [auto-meaningful-name] */n$type = n.type
    var /* [auto-meaningful-name] */n$target = n.target
    var /* [auto-meaningful-name] */n$resolution = n.resolution
    var /* [auto-meaningful-name] */n$resourceOptions = n.resourceOptions
    if (!(!t || t instanceof Yt)) {
      (t = Wt(t, n$resourceOptions)).internal = true
    }
    r.width = n$width || 0
    r.height = n$height || 0
    r.resolution = n$resolution || fe.RESOLUTION
    r.mipmap = undefined !== n$mipmap ? n$mipmap : fe.MIPMAP_TEXTURES
    r.anisotropicLevel = undefined !== n$anisotropicLevel ? n$anisotropicLevel : fe.ANISOTROPIC_LEVEL
    r.wrapMode = n$wrapMode || fe.WRAP_MODE
    r.scaleMode = undefined !== n$scaleMode ? n$scaleMode : fe.SCALE_MODE
    r.format = n$format || J.RGBA
    r.type = n$type || ee.UNSIGNED_BYTE
    r.target = n$target || Z.TEXTURE_2D
    r.alphaMode = undefined !== NN$alphaMode ? NN$alphaMode : oe.UNPACK
    r.uid = Ge()
    r.touched = 0
    r.isPowerOfTwo = false
    r._refreshPOT()
    r._glTextures = {}
    r.dirtyId = 0
    r.dirtyStyleId = 0
    r.cacheId = null
    r.valid = n$width > 0 && n$height > 0
    r.textureCacheIds = []
    r.destroyed = false
    r.resource = null
    r._batchEnabled = 0
    r._batchLocation = 0
    r.parentTextureArray = null
    r.setResource(t)
    return r
  }
  Xt(t, e)
  Object.defineProperty(t.prototype, "realWidth", {
    get: function () {
      return Math.ceil(this.width * this.resolution - 1e-4)
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "realHeight", {
    get: function () {
      return Math.ceil(this.height * this.resolution - 1e-4)
    },
    enumerable: false,
    configurable: true
  })
  t.prototype.setStyle = function (e, t) {
    var n
    if (undefined !== e && e !== this.scaleMode) {
      this.scaleMode = e
      n = true
    }
    if (undefined !== t && t !== this.mipmap) {
      this.mipmap = t
      n = true
    }
    if (n) {
      this.dirtyStyleId++
    }
    return this
  }
  t.prototype.setSize = function (e, t, n) {
    this.resolution = n || this.resolution
    this.width = e
    this.height = t
    this._refreshPOT()
    this.update()
    return this
  }
  t.prototype.setRealSize = function (e, t, n) {
    this.resolution = n || this.resolution
    this.width = e / this.resolution
    this.height = t / this.resolution
    this._refreshPOT()
    this.update()
    return this
  }
  t.prototype._refreshPOT = function () {
    this.isPowerOfTwo = Le(this.realWidth) && Le(this.realHeight)
  }
  t.prototype.setResolution = function (e) {
    var /* [auto-meaningful-name] */this$resolution = this.resolution
    if (!(this$resolution === e)) {
      this.resolution = e
      if (this.valid) {
        this.width = this.width * this$resolution / e
        this.height = this.height * this$resolution / e
        this.emit("update", this)
      }
      this._refreshPOT()
    }
    return this
  }
  t.prototype.setResource = function (e) {
    if (this.resource === e) {
      return this
    }
    if (this.resource) {
      throw new Error("Resource can be set only once")
    }
    e.bind(this)
    this.resource = e
    return this
  }
  t.prototype.update = function () {
    if (this.valid) {
      this.dirtyId++
      this.dirtyStyleId++
      this.emit("update", this)
    } else {
      if (this.width > 0 && this.height > 0) {
        this.valid = true
        this.emit("loaded", this)
        this.emit("update", this)
      }
    }
  }
  t.prototype.onError = function (e) {
    this.emit("error", this, e)
  }
  t.prototype.destroy = function () {
    if (this.resource) {
      this.resource.unbind(this)
      if (this.resource.internal) {
        this.resource.destroy()
      }
      this.resource = null
    }
    if (this.cacheId) {
      delete Xe[this.cacheId]
      delete Ke[this.cacheId]
      this.cacheId = null
    }
    this.dispose()
    t.removeFromCache(this)
    this.textureCacheIds = null
    this.destroyed = true
  }
  t.prototype.dispose = function () {
    this.emit("dispose", this)
  }
  t.prototype.castToBaseTexture = function () {
    return this
  }
  t.from = function (e, n, r) {
    if (undefined === r) {
      r = fe.STRICT_TEXTURE_CACHE
    }
    var i = "string" === typeof e
    var o = null
    if (i) {
      o = e
    } else {
      if (!e._pixiId) {
        var a = n && n.pixiIdPrefix || "pixiid"
        e._pixiId = a + "_" + Ge()
      }
      o = e._pixiId
    }
    var s = Xe[o]
    if (i && r && !s) {
      throw new Error("The cacheId \"" + o + "\" does not exist in BaseTextureCache.")
    }
    if (!s) {
      (s = new t(e, n)).cacheId = o
      t.addToCache(s, o)
    }
    return s
  }
  t.fromBuffer = function (e, n, r, i) {
    e = e || new Float32Array(n * r * 4)
    var o = new qt(e, {
      width: n,
      height: r
    })
    var a = e instanceof Float32Array ? ee.FLOAT : ee.UNSIGNED_BYTE
    return new t(o, Object.assign($t, i || {
      width: n,
      height: r,
      type: a
    }))
  }
  t.addToCache = function (e, t) {
    if (t) {
      if (-1 === e.textureCacheIds.indexOf(t)) {
        e.textureCacheIds.push(t)
      }
      if (Xe[t]) {
        console.warn("BaseTexture added to the cache with an id [" + t + "] that already had an entry")
      }
      Xe[t] = e
    }
  }
  t.removeFromCache = function (e) {
    if ("string" === typeof e) {
      var t = Xe[e]
      if (t) {
        var n = t.textureCacheIds.indexOf(e)
        if (n > -1) {
          t.textureCacheIds.splice(n, 1)
        }
        delete Xe[e]
        return t
      }
    } else if (e && e.textureCacheIds) {
      for (var r = 0; r < e.textureCacheIds.length; ++r) {
        delete Xe[e.textureCacheIds[r]]
      }
      e.textureCacheIds.length = 0
      return e
    }
    return null
  }
  t._globalBatch = 0
  return t
}($_13371)
var Zt = function (e) {
  function t(t, n) {
    var r = this
    var i = n || {}
    var /* [auto-meaningful-name] */i$width = i.width
    var /* [auto-meaningful-name] */i$height = i.height;
    (r = e.call(this, i$width, i$height) || this).items = []
    r.itemDirtyIds = []
    for (var s = 0; s < t; s++) {
      var c = new Jt()
      r.items.push(c)
      r.itemDirtyIds.push(-2)
    }
    r.length = t
    r._load = null
    r.baseTexture = null
    return r
  }
  Xt(t, e)
  t.prototype.initFromArray = function (e, t) {
    for (var n = 0; n < this.length; n++) {
      if (e[n]) {
        if (e[n].castToBaseTexture) {
          this.addBaseTextureAt(e[n].castToBaseTexture(), n)
        } else {
          if (e[n] instanceof Yt) {
            this.addResourceAt(e[n], n)
          } else {
            this.addResourceAt(Wt(e[n], t), n)
          }
        }
      }
    }
  }
  t.prototype.dispose = function () {
    for (var e = 0, /* [auto-meaningful-name] */this$length = this.length; e < this$length; e++) {
      this.items[e].destroy()
    }
    this.items = null
    this.itemDirtyIds = null
    this._load = null
  }
  t.prototype.addResourceAt = function (e, t) {
    if (!this.items[t]) {
      throw new Error("Index " + t + " is out of bounds")
    }
    if (e.valid && !this.valid) {
      this.resize(e.width, e.height)
    }
    this.items[t].setResource(e)
    return this
  }
  t.prototype.bind = function (t) {
    if (null !== this.baseTexture) {
      throw new Error("Only one base texture per TextureArray is allowed")
    }
    e.prototype.bind.call(this, t)
    for (var n = 0; n < this.length; n++) {
      this.items[n].parentTextureArray = t
      this.items[n].on("update", t.update, t)
    }
  }
  t.prototype.unbind = function (t) {
    e.prototype.unbind.call(this, t)
    for (var n = 0; n < this.length; n++) {
      this.items[n].parentTextureArray = null
      this.items[n].off("update", t.update, t)
    }
  }
  t.prototype.load = function () {
    var e = this
    if (this._load) {
      return this._load
    }
    var t = this.items.map(function (e) {
      return e.resource
    }).filter(function (e) {
      return e
    }).map(function (e) {
      return e.load()
    })
    this._load = Promise.all(t).then(function () {
      var t = e.items[0]
      var /* [auto-meaningful-name] */t$realWidth = t.realWidth
      var /* [auto-meaningful-name] */t$realHeight = t.realHeight
      e.resize(t$realWidth, t$realHeight)
      return Promise.resolve(e)
    })
    return this._load
  }
  return t
}(Yt)
var en = function (e) {
  function t(t, n) {
    var r
    var i
    var o = this
    var a = n || {}
    var /* [auto-meaningful-name] */a$width = a.width
    var /* [auto-meaningful-name] */a$height = a.height
    if (Array.isArray(t)) {
      r = t
      i = t.length
    } else {
      i = t
    }
    o = e.call(this, i, {
      width: a$width,
      height: a$height
    }) || this
    if (r) {
      o.initFromArray(r, n)
    }
    return o
  }
  Xt(t, e)
  t.prototype.addBaseTextureAt = function (e, t) {
    if (!e.resource) {
      throw new Error("ArrayResource does not support RenderTexture")
    }
    this.addResourceAt(e.resource, t)
    return this
  }
  t.prototype.bind = function (t) {
    e.prototype.bind.call(this, t)
    t.target = Z.TEXTURE_2D_ARRAY
  }
  t.prototype.upload = function (e, t, n) {
    var /* [auto-meaningful-name] */this$length = this.length
    var /* [auto-meaningful-name] */this$itemDirtyIds = this.itemDirtyIds
    var /* [auto-meaningful-name] */this$items = this.items
    var a = e.gl
    if (n.dirtyId < 0) {
      a.texImage3D(a.TEXTURE_2D_ARRAY, 0, t.format, this._width, this._height, this$length, 0, t.format, t.type, null)
    }
    for (var s = 0; s < this$length; s++) {
      var c = this$items[s]
      if (this$itemDirtyIds[s] < c.dirtyId) {
        this$itemDirtyIds[s] = c.dirtyId
        if (c.valid) {
          a.texSubImage3D(a.TEXTURE_2D_ARRAY, 0, 0, 0, s, c.resource.width, c.resource.height, 1, t.format, t.type, c.resource.source)
        }
      }
    }
    return true
  }
  return t
}(Zt)
var tn = function (e) {
  function t(t) {
    var n = this
    var r = t
    var i = r.naturalWidth || r.videoWidth || r.width
    var o = r.naturalHeight || r.videoHeight || r.height;
    (n = e.call(this, i, o) || this).source = t
    n.noSubImage = false
    return n
  }
  Xt(t, e)
  t.crossOrigin = function (e, t, n) {
    if (undefined === n && 0 !== t.indexOf("data:")) {
      e.crossOrigin = nt(t)
    } else {
      if (false !== n) {
        e.crossOrigin = "string" === typeof n ? n : "anonymous"
      }
    }
  }
  t.prototype.upload = function (e, t, n, r) {
    var i = e.gl
    var /* [auto-meaningful-name] */t$realWidth = t.realWidth
    var /* [auto-meaningful-name] */t$realHeight = t.realHeight
    r = r || this.source
    i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.alphaMode === oe.UNPACK)
    if (this.noSubImage || t.target !== i.TEXTURE_2D || n.width !== t$realWidth || n.height !== t$realHeight) {
      n.width = t$realWidth
      n.height = t$realHeight
      i.texImage2D(t.target, 0, t.format, t.format, t.type, r)
    } else {
      i.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, t.format, t.type, r)
    }
    return true
  }
  t.prototype.update = function () {
    if (!this.destroyed) {
      var /* [auto-meaningful-name] */this$source = this.source
      var n = this$source.naturalWidth || this$source.videoWidth || this$source.width
      var r = this$source.naturalHeight || this$source.videoHeight || this$source.height
      this.resize(n, r)
      e.prototype.update.call(this)
    }
  }
  t.prototype.dispose = function () {
    this.source = null
  }
  return t
}(Yt)
var nn = function (e) {
  function t(t) {
    return e.call(this, t) || this
  }
  Xt(t, e)
  t.test = function (e) {
    var /* [auto-meaningful-name] */self$OffscreenCanvas = self.OffscreenCanvas
    return !!(self$OffscreenCanvas && e instanceof self$OffscreenCanvas) || self.HTMLCanvasElement && e instanceof HTMLCanvasElement
  }
  return t
}(tn)
var rn = function (e) {
  function t(n, r) {
    var i = this
    var o = r || {}
    var /* [auto-meaningful-name] */o$width = o.width
    var /* [auto-meaningful-name] */o$height = o.height
    var /* [auto-meaningful-name] */o$autoLoad = o.autoLoad
    var /* [auto-meaningful-name] */o$linkBaseTexture = o.linkBaseTexture
    if (n && n.length !== t.SIDES) {
      throw new Error("Invalid length. Got " + n.length + ", expected 6")
    }
    i = e.call(this, 6, {
      width: o$width,
      height: o$height
    }) || this
    for (var l = 0; l < t.SIDES; l++) {
      i.items[l].target = Z.TEXTURE_CUBE_MAP_POSITIVE_X + l
    }
    i.linkBaseTexture = false !== o$linkBaseTexture
    if (n) {
      i.initFromArray(n, r)
    }
    if (false !== o$autoLoad) {
      i.load()
    }
    return i
  }
  Xt(t, e)
  t.prototype.bind = function (t) {
    e.prototype.bind.call(this, t)
    t.target = Z.TEXTURE_CUBE_MAP
  }
  t.prototype.addBaseTextureAt = function (e, t, n) {
    if (undefined === n) {
      n = this.linkBaseTexture
    }
    if (!this.items[t]) {
      throw new Error("Index " + t + " is out of bounds")
    }
    if (!this.linkBaseTexture || e.parentTextureArray || Object.keys(e._glTextures).length > 0) {
      if (!e.resource) {
        throw new Error("CubeResource does not support copying of renderTexture.")
      }
      this.addResourceAt(e.resource, t)
    } else {
      e.target = Z.TEXTURE_CUBE_MAP_POSITIVE_X + t
      e.parentTextureArray = this.baseTexture
      this.items[t] = e
    }
    if (e.valid && !this.valid) {
      this.resize(e.realWidth, e.realHeight)
    }
    this.items[t] = e
    return this
  }
  t.prototype.upload = function (e, n, r) {
    for (var /* [auto-meaningful-name] */this$itemDirtyIds = this.itemDirtyIds, o = 0; o < t.SIDES; o++) {
      var a = this.items[o]
      if (this$itemDirtyIds[o] < a.dirtyId) {
        if (a.valid && a.resource) {
          a.resource.upload(e, a, r)
          this$itemDirtyIds[o] = a.dirtyId
        } else {
          if (this$itemDirtyIds[o] < -1) {
            e.gl.texImage2D(a.target, 0, r.internalFormat, n.realWidth, n.realHeight, 0, n.format, r.type, null)
            this$itemDirtyIds[o] = -1
          }
        }
      }
    }
    return true
  }
  t.test = function (e) {
    return Array.isArray(e) && e.length === t.SIDES
  }
  t.SIDES = 6
  return t
}(Zt)
var on = function (e) {
  function t(t, n) {
    var r = this
    n = n || {}
    if (!(t instanceof HTMLImageElement)) {
      var i = new Image()
      tn.crossOrigin(i, t, n.crossorigin)
      i.src = t
      t = i
    }
    r = e.call(this, t) || this
    if (!t.complete && r._width && r._height) {
      r._width = 0
      r._height = 0
    }
    r.url = t.src
    r._process = null
    r.preserveBitmap = false
    r.createBitmap = (undefined !== n.createBitmap ? n.createBitmap : fe.CREATE_IMAGE_BITMAP) && !!self.createImageBitmap
    r.alphaMode = "number" === typeof n.alphaMode ? n.alphaMode : null
    r.bitmap = null
    r._load = null
    if (false !== n.autoLoad) {
      r.load()
    }
    return r
  }
  Xt(t, e)
  t.prototype.load = function (e) {
    var t = this
    if (!this._load) {
      if (undefined !== e) {
        this.createBitmap = e
      }
      this._load = new Promise(function (e, n) {
        var /* [auto-meaningful-name] */t$source = t.source
        t.url = t$source.src
        var i = function () {
          if (!t.destroyed) {
            t$source.onload = null
            t$source.onerror = null
            t.resize(t$source.width, t$source.height)
            t._load = null
            if (t.createBitmap) {
              e(t.process())
            } else {
              e(t)
            }
          }
        }
        if (t$source.complete && t$source.src) {
          i()
        } else {
          t$source.onload = i
          t$source.onerror = function (e) {
            n(e)
            t.onError.emit(e)
          }
        }
      })
    }
    return this._load
  }
  t.prototype.process = function () {
    var e = this
    var /* [auto-meaningful-name] */this$source = this.source
    return null !== this._process ? this._process : null === this.bitmap && self.createImageBitmap ? (this._process = self.createImageBitmap(this$source, 0, 0, this$source.width, this$source.height, {
      premultiplyAlpha: this.alphaMode === oe.UNPACK ? "premultiply" : "none"
    }).then(function (t) {
      return e.destroyed ? Promise.reject() : (e.bitmap = t, e.update(), e._process = null, Promise.resolve(e))
    }), this._process) : Promise.resolve(this)
  }
  t.prototype.upload = function (t, n, r) {
    if ("number" === typeof this.alphaMode) {
      n.alphaMode = this.alphaMode
    }
    if (!this.createBitmap) {
      return e.prototype.upload.call(this, t, n, r)
    }
    if (!this.bitmap && (this.process(), !this.bitmap)) {
      return false
    }
    e.prototype.upload.call(this, t, n, r, this.bitmap)
    if (!this.preserveBitmap) {
      var i = true
      var /* [auto-meaningful-name] */n$_glTextures = n._glTextures
      for (var a in n$_glTextures) {
        var s = n$_glTextures[a]
        if (s !== r && s.dirtyId !== n.dirtyId) {
          i = false
          break
        }
      }
      if (i) {
        if (this.bitmap.close) {
          this.bitmap.close()
        }
        this.bitmap = null
      }
    }
    return true
  }
  t.prototype.dispose = function () {
    this.source.onload = null
    this.source.onerror = null
    e.prototype.dispose.call(this)
    if (this.bitmap) {
      this.bitmap.close()
      this.bitmap = null
    }
    this._process = null
    this._load = null
  }
  t.test = function (e) {
    return "string" === typeof e || e instanceof HTMLImageElement
  }
  return t
}(tn)
var an = function (e) {
  function t(t, n) {
    var r = this
    n = n || {};
    (r = e.call(this, document.createElement("canvas")) || this)._width = 0
    r._height = 0
    r.svg = t
    r.scale = n.scale || 1
    r._overrideWidth = n.width
    r._overrideHeight = n.height
    r._resolve = null
    r._crossorigin = n.crossorigin
    r._load = null
    if (false !== n.autoLoad) {
      r.load()
    }
    return r
  }
  Xt(t, e)
  t.prototype.load = function () {
    var e = this
    if (!this._load) {
      this._load = new Promise(function (t) {
        e._resolve = function () {
          e.resize(e.source.width, e.source.height)
          t(e)
        }
        if (/^\<svg/.test(e.svg.trim())) {
          if (!btoa) {
            throw new Error("Your browser doesn't support base64 conversions.")
          }
          e.svg = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(e.svg)))
        }
        e._loadSvg()
      })
    }
    return this._load
  }
  t.prototype._loadSvg = function () {
    var e = this
    var t = new Image()
    tn.crossOrigin(t, this.svg, this._crossorigin)
    t.src = this.svg
    t.onerror = function (n) {
      if (e._resolve) {
        t.onerror = null
        e.onError.emit(n)
      }
    }
    t.onload = function () {
      if (e._resolve) {
        var /* [auto-meaningful-name] */t$width = t.width
        var /* [auto-meaningful-name] */t$height = t.height
        if (!t$width || !t$height) {
          throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.")
        }
        var i = t$width * e.scale
        var o = t$height * e.scale
        if (e._overrideWidth || e._overrideHeight) {
          i = e._overrideWidth || e._overrideHeight / t$height * t$width
          o = e._overrideHeight || e._overrideWidth / t$width * t$height
        }
        i = Math.round(i)
        o = Math.round(o)
        var /* [auto-meaningful-name] */e$source = e.source
        e$source.width = i
        e$source.height = o
        e$source._pixiId = "canvas_" + Ge()
        e$source.getContext("2d").drawImage(t, 0, 0, t$width, t$height, 0, 0, i, o)
        e._resolve()
        e._resolve = null
      }
    }
  }
  t.getSize = function (e) {
    var n = t.SVG_SIZE.exec(e)
    var r = {}
    if (n) {
      r[n[1]] = Math.round(parseFloat(n[3]))
      r[n[5]] = Math.round(parseFloat(n[7]))
    }
    return r
  }
  t.prototype.dispose = function () {
    e.prototype.dispose.call(this)
    this._resolve = null
    this._crossorigin = null
  }
  t.test = function (e, t) {
    return "svg" === t || "string" === typeof e && /^data:image\/svg\+xml(;(charset=utf8|utf8))?;base64/.test(e) || "string" === typeof e && 0 === e.indexOf("<svg")
  }
  t.SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i
  return t
}(tn)
var sn = function (e) {
  function t(n, r) {
    var i = this
    r = r || {}
    if (!(n instanceof HTMLVideoElement)) {
      var o = document.createElement("video")
      o.setAttribute("preload", "auto")
      o.setAttribute("webkit-playsinline", "")
      o.setAttribute("playsinline", "")
      if ("string" === typeof n) {
        n = [n]
      }
      var a = n[0].src || n[0]
      tn.crossOrigin(o, a, r.crossorigin)
      for (var s = 0; s < n.length; ++s) {
        var c = document.createElement("source")
        var u = n[s]
        var /* [auto-meaningful-name] */u$src = u.src
        var /* [auto-meaningful-name] */u$mime = u.mime
        var d = (u$src = u$src || n[s]).split("?").shift().toLowerCase()
        var h = d.substr(d.lastIndexOf(".") + 1)
        u$mime = u$mime || t.MIME_TYPES[h] || "video/" + h
        c.src = u$src
        c.type = u$mime
        o.appendChild(c)
      }
      n = o
    }
    (i = e.call(this, n) || this).noSubImage = true
    i._autoUpdate = true
    i._isConnectedToTicker = false
    i._updateFPS = r.updateFPS || 0
    i._msToNextUpdate = 0
    i.autoPlay = false !== r.autoPlay
    i._load = null
    i._resolve = null
    i._onCanPlay = i._onCanPlay.bind(i)
    i._onError = i._onError.bind(i)
    if (false !== r.autoLoad) {
      i.load()
    }
    return i
  }
  Xt(t, e)
  t.prototype.update = function (t) {
    if (!this.destroyed) {
      var n = kt.shared.elapsedMS * this.source.playbackRate
      this._msToNextUpdate = Math.floor(this._msToNextUpdate - n)
      if (!this._updateFPS || this._msToNextUpdate <= 0) {
        e.prototype.update.call(this)
        this._msToNextUpdate = this._updateFPS ? Math.floor(1e3 / this._updateFPS) : 0
      }
    }
  }
  t.prototype.load = function () {
    var e = this
    if (this._load) {
      return this._load
    }
    var /* [auto-meaningful-name] */this$source = this.source
    if ((this$source.readyState === this$source.HAVE_ENOUGH_DATA || this$source.readyState === this$source.HAVE_FUTURE_DATA) && this$source.width && this$source.height) {
      this$source.complete = true
    }
    this$source.addEventListener("play", this._onPlayStart.bind(this))
    this$source.addEventListener("pause", this._onPlayStop.bind(this))
    if (this._isSourceReady()) {
      this._onCanPlay()
    } else {
      this$source.addEventListener("canplay", this._onCanPlay)
      this$source.addEventListener("canplaythrough", this._onCanPlay)
      this$source.addEventListener("error", this._onError, true)
    }
    this._load = new Promise(function (n) {
      if (e.valid) {
        n(e)
      } else {
        e._resolve = n
        this$source.load()
      }
    })
    return this._load
  }
  t.prototype._onError = function (e) {
    this.source.removeEventListener("error", this._onError, true)
    this.onError.emit(e)
  }
  t.prototype._isSourcePlaying = function () {
    var /* [auto-meaningful-name] */this$source = this.source
    return this$source.currentTime > 0 && false === this$source.paused && false === this$source.ended && this$source.readyState > 2
  }
  t.prototype._isSourceReady = function () {
    var /* [auto-meaningful-name] */this$source = this.source
    return 3 === this$source.readyState || 4 === this$source.readyState
  }
  t.prototype._onPlayStart = function () {
    if (!this.valid) {
      this._onCanPlay()
    }
    if (this.autoUpdate && !this._isConnectedToTicker) {
      kt.shared.add(this.update, this)
      this._isConnectedToTicker = true
    }
  }
  t.prototype._onPlayStop = function () {
    if (this._isConnectedToTicker) {
      kt.shared.remove(this.update, this)
      this._isConnectedToTicker = false
    }
  }
  t.prototype._onCanPlay = function () {
    var /* [auto-meaningful-name] */this$source = this.source
    this$source.removeEventListener("canplay", this._onCanPlay)
    this$source.removeEventListener("canplaythrough", this._onCanPlay)
    var /* [auto-meaningful-name] */this$valid = this.valid
    this.resize(this$source.videoWidth, this$source.videoHeight)
    if (!this$valid && this._resolve) {
      this._resolve(this)
      this._resolve = null
    }
    if (this._isSourcePlaying()) {
      this._onPlayStart()
    } else {
      if (this.autoPlay) {
        this$source.play()
      }
    }
  }
  t.prototype.dispose = function () {
    if (this._isConnectedToTicker) {
      kt.shared.remove(this.update, this)
    }
    var /* [auto-meaningful-name] */this$source = this.source
    if (this$source) {
      this$source.removeEventListener("error", this._onError, true)
      this$source.pause()
      this$source.src = ""
      this$source.load()
    }
    e.prototype.dispose.call(this)
  }
  Object.defineProperty(t.prototype, "autoUpdate", {
    get: function () {
      return this._autoUpdate
    },
    set: function (e) {
      if (e !== this._autoUpdate) {
        this._autoUpdate = e
        if (!this._autoUpdate && this._isConnectedToTicker) {
          kt.shared.remove(this.update, this)
          this._isConnectedToTicker = false
        } else {
          if (this._autoUpdate && !this._isConnectedToTicker && this._isSourcePlaying()) {
            kt.shared.add(this.update, this)
            this._isConnectedToTicker = true
          }
        }
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "updateFPS", {
    get: function () {
      return this._updateFPS
    },
    set: function (e) {
      if (e !== this._updateFPS) {
        this._updateFPS = e
      }
    },
    enumerable: false,
    configurable: true
  })
  t.test = function (e, n) {
    return self.HTMLVideoElement && e instanceof HTMLVideoElement || t.TYPES.indexOf(n) > -1
  }
  t.TYPES = ["mp4", "m4v", "webm", "ogg", "ogv", "h264", "avi", "mov"]
  t.MIME_TYPES = {
    ogv: "video/ogg",
    mov: "video/quicktime",
    m4v: "video/mp4"
  }
  return t
}(tn)
var cn = function (e) {
  function t(t) {
    return e.call(this, t) || this
  }
  Xt(t, e)
  t.test = function (e) {
    return !!self.createImageBitmap && e instanceof ImageBitmap
  }
  return t
}(tn)
Qt.push(on, cn, nn, sn, an, qt, rn, en)
var un = {
  __proto__: null,
  Resource: Yt,
  BaseImageResource: tn,
  INSTALLED: Qt,
  autoDetectResource: Wt,
  AbstractMultiResource: Zt,
  ArrayResource: en,
  BufferResource: qt,
  CanvasResource: nn,
  CubeResource: rn,
  ImageResource: on,
  SVGResource: an,
  VideoResource: sn,
  ImageBitmapResource: cn
}
var ln = function () {
  function e(e) {
    this.renderer = e
  }
  e.prototype.destroy = function () {
    this.renderer = null
  }
  return e
}()
var fn = function (e) {
  function t() {
    return null !== e && e.apply(this, arguments) || this
  }
  Xt(t, e)
  t.prototype.upload = function (e, t, n) {
    var r = e.gl
    r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.alphaMode === oe.UNPACK)
    var /* [auto-meaningful-name] */t$realWidth = t.realWidth
    var /* [auto-meaningful-name] */t$realHeight = t.realHeight
    if (n.width === t$realWidth && n.height === t$realHeight) {
      r.texSubImage2D(t.target, 0, 0, 0, t$realWidth, t$realHeight, t.format, t.type, this.data)
    } else {
      n.width = t$realWidth
      n.height = t$realHeight
      r.texImage2D(t.target, 0, 1 === e.context.webGLVersion ? r.DEPTH_COMPONENT : r.DEPTH_COMPONENT16, t$realWidth, t$realHeight, 0, t.format, t.type, this.data)
    }
    return true
  }
  return t
}(qt)
var dn = function () {
  function e(e, t) {
    this.width = Math.ceil(e || 100)
    this.height = Math.ceil(t || 100)
    this.stencil = false
    this.depth = false
    this.dirtyId = 0
    this.dirtyFormat = 0
    this.dirtySize = 0
    this.depthTexture = null
    this.colorTextures = []
    this.glFramebuffers = {}
    this.disposeRunner = new zt("disposeFramebuffer")
    this.multisample = le.NONE
  }
  Object.defineProperty(e.prototype, "colorTexture", {
    get: function () {
      return this.colorTextures[0]
    },
    enumerable: false,
    configurable: true
  })
  e.prototype.addColorTexture = function (e, t) {
    if (undefined === e) {
      e = 0
    }
    this.colorTextures[e] = t || new Jt(null, {
      scaleMode: ne.NEAREST,
      resolution: 1,
      mipmap: ie.OFF,
      width: this.width,
      height: this.height
    })
    this.dirtyId++
    this.dirtyFormat++
    return this
  }
  e.prototype.addDepthTexture = function (e) {
    this.depthTexture = e || new Jt(new fn(null, {
      width: this.width,
      height: this.height
    }), {
      scaleMode: ne.NEAREST,
      resolution: 1,
      width: this.width,
      height: this.height,
      mipmap: ie.OFF,
      format: J.DEPTH_COMPONENT,
      type: ee.UNSIGNED_SHORT
    })
    this.dirtyId++
    this.dirtyFormat++
    return this
  }
  e.prototype.enableDepth = function () {
    this.depth = true
    this.dirtyId++
    this.dirtyFormat++
    return this
  }
  e.prototype.enableStencil = function () {
    this.stencil = true
    this.dirtyId++
    this.dirtyFormat++
    return this
  }
  e.prototype.resize = function (e, t) {
    e = Math.ceil(e)
    t = Math.ceil(t)
    if (e !== this.width || t !== this.height) {
      this.width = e
      this.height = t
      this.dirtyId++
      this.dirtySize++
      for (var n = 0; n < this.colorTextures.length; n++) {
        var r = this.colorTextures[n]
        var /* [auto-meaningful-name] */r$resolution = r.resolution
        r.setSize(e / r$resolution, t / r$resolution)
      }
      if (this.depthTexture) {
        r$resolution = this.depthTexture.resolution
        this.depthTexture.setSize(e / r$resolution, t / r$resolution)
      }
    }
  }
  e.prototype.dispose = function () {
    this.disposeRunner.emit(this, false)
  }
  e.prototype.destroyDepthTexture = function () {
    if (this.depthTexture) {
      this.depthTexture.destroy()
      this.depthTexture = null
      ++this.dirtyId
      ++this.dirtyFormat
    }
  }
  return e
}()
var hn = function (e) {
  function t(t) {
    var n = this
    if ("number" === typeof t) {
      var r = arguments[0]
      var i = arguments[1]
      var o = arguments[2]
      var a = arguments[3]
      t = {
        width: r,
        height: i,
        scaleMode: o,
        resolution: a
      }
    }
    n = e.call(this, null, t) || this
    var s = t || {}
    var /* [auto-meaningful-name] */s$width = s.width
    var /* [auto-meaningful-name] */s$height = s.height
    n.mipmap = ie.OFF
    n.width = Math.ceil(s$width) || 100
    n.height = Math.ceil(s$height) || 100
    n.valid = true
    n.clearColor = [0, 0, 0, 0]
    n.framebuffer = new dn(n.width * n.resolution, n.height * n.resolution).addColorTexture(0, n)
    n.maskStack = []
    n.filterStack = [{}]
    return n
  }
  Xt(t, e)
  t.prototype.resize = function (e, t) {
    e = Math.ceil(e)
    t = Math.ceil(t)
    this.framebuffer.resize(e * this.resolution, t * this.resolution)
  }
  t.prototype.dispose = function () {
    this.framebuffer.dispose()
    e.prototype.dispose.call(this)
  }
  t.prototype.destroy = function () {
    e.prototype.destroy.call(this)
    this.framebuffer.destroyDepthTexture()
    this.framebuffer = null
  }
  return t
}(Jt)
var pn = function () {
  function e() {
    this.x0 = 0
    this.y0 = 0
    this.x1 = 1
    this.y1 = 0
    this.x2 = 1
    this.y2 = 1
    this.x3 = 0
    this.y3 = 1
    this.uvsFloat32 = new Float32Array(8)
  }
  e.prototype.set = function (e, t, n) {
    var /* [auto-meaningful-name] */t$width = t.width
    var /* [auto-meaningful-name] */t$height = t.height
    if (n) {
      var o = e.width / 2 / t$width
      var a = e.height / 2 / t$height
      var s = e.x / t$width + o
      var c = e.y / t$height + a
      n = xt.add(n, xt.NW)
      this.x0 = s + o * xt.uX(n)
      this.y0 = c + a * xt.uY(n)
      n = xt.add(n, 2)
      this.x1 = s + o * xt.uX(n)
      this.y1 = c + a * xt.uY(n)
      n = xt.add(n, 2)
      this.x2 = s + o * xt.uX(n)
      this.y2 = c + a * xt.uY(n)
      n = xt.add(n, 2)
      this.x3 = s + o * xt.uX(n)
      this.y3 = c + a * xt.uY(n)
    } else {
      this.x0 = e.x / t$width
      this.y0 = e.y / t$height
      this.x1 = (e.x + e.width) / t$width
      this.y1 = e.y / t$height
      this.x2 = (e.x + e.width) / t$width
      this.y2 = (e.y + e.height) / t$height
      this.x3 = e.x / t$width
      this.y3 = (e.y + e.height) / t$height
    }
    this.uvsFloat32[0] = this.x0
    this.uvsFloat32[1] = this.y0
    this.uvsFloat32[2] = this.x1
    this.uvsFloat32[3] = this.y1
    this.uvsFloat32[4] = this.x2
    this.uvsFloat32[5] = this.y2
    this.uvsFloat32[6] = this.x3
    this.uvsFloat32[7] = this.y3
  }
  e.prototype.toString = function () {
    return "[@pixi/core:TextureUvs x0=" + this.x0 + " y0=" + this.y0 + " x1=" + this.x1 + " y1=" + this.y1 + " x2=" + this.x2 + " y2=" + this.y2 + " x3=" + this.x3 + " y3=" + this.y3 + "]"
  }
  return e
}()
var _n = new pn()
var An = function (e) {
  function t(n, r, i, o, a, s) {
    var c = e.call(this) || this
    c.noFrame = false
    if (!r) {
      c.noFrame = true
      r = new ct(0, 0, 1, 1)
    }
    if (n instanceof t) {
      n = n.baseTexture
    }
    c.baseTexture = n
    c._frame = r
    c.trim = o
    c.valid = false
    c._uvs = _n
    c.uvMatrix = null
    c.orig = i || r
    c._rotate = Number(a || 0)
    if (true === a) {
      c._rotate = 2
    } else if (c._rotate % 2 !== 0) {
      throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually")
    }
    c.defaultAnchor = s ? new ht(s.x, s.y) : new ht(0, 0)
    c._updateID = 0
    c.textureCacheIds = []
    if (n.valid) {
      if (c.noFrame) {
        if (n.valid) {
          c.onBaseTextureUpdated(n)
        }
      } else {
        c.frame = r
      }
    } else {
      n.once("loaded", c.onBaseTextureUpdated, c)
    }
    if (c.noFrame) {
      n.on("update", c.onBaseTextureUpdated, c)
    }
    return c
  }
  Xt(t, e)
  t.prototype.update = function () {
    if (this.baseTexture.resource) {
      this.baseTexture.resource.update()
    }
  }
  t.prototype.onBaseTextureUpdated = function (e) {
    if (this.noFrame) {
      if (!this.baseTexture.valid) {
        return
      }
      this._frame.width = e.width
      this._frame.height = e.height
      this.valid = true
      this.updateUvs()
    } else {
      this.frame = this._frame
    }
    this.emit("update", this)
  }
  t.prototype.destroy = function (e) {
    if (this.baseTexture) {
      if (e) {
        var /* [auto-meaningful-name] */this$baseTexture$resource = this.baseTexture.resource
        if (this$baseTexture$resource && this$baseTexture$resource.url && Ke[this$baseTexture$resource.url]) {
          t.removeFromCache(this$baseTexture$resource.url)
        }
        this.baseTexture.destroy()
      }
      this.baseTexture.off("loaded", this.onBaseTextureUpdated, this)
      this.baseTexture.off("update", this.onBaseTextureUpdated, this)
      this.baseTexture = null
    }
    this._frame = null
    this._uvs = null
    this.trim = null
    this.orig = null
    this.valid = false
    t.removeFromCache(this)
    this.textureCacheIds = null
  }
  t.prototype.clone = function () {
    var e = this._frame.clone()
    var n = this._frame === this.orig ? e : this.orig.clone()
    var r = new t(this.baseTexture, !this.noFrame && e, n, this.trim && this.trim.clone(), this.rotate, this.defaultAnchor)
    if (this.noFrame) {
      r._frame = e
    }
    return r
  }
  t.prototype.updateUvs = function () {
    if (this._uvs === _n) {
      this._uvs = new pn()
    }
    this._uvs.set(this._frame, this.baseTexture, this.rotate)
    this._updateID++
  }
  t.from = function (e, n, r) {
    if (undefined === n) {
      n = {}
    }
    if (undefined === r) {
      r = fe.STRICT_TEXTURE_CACHE
    }
    var i = "string" === typeof e
    var o = null
    if (i) {
      o = e
    } else {
      if (!e._pixiId) {
        var a = n && n.pixiIdPrefix || "pixiid"
        e._pixiId = a + "_" + Ge()
      }
      o = e._pixiId
    }
    var s = Ke[o]
    if (i && r && !s) {
      throw new Error("The cacheId \"" + o + "\" does not exist in TextureCache.")
    }
    if (!s) {
      if (!n.resolution) {
        n.resolution = rt(e)
      }
      (s = new t(new Jt(e, n))).baseTexture.cacheId = o
      Jt.addToCache(s.baseTexture, o)
      t.addToCache(s, o)
    }
    return s
  }
  t.fromURL = function (e, n) {
    var r = Object.assign({
      autoLoad: false
    }, null === n || undefined === n ? undefined : n.resourceOptions)
    var i = t.from(e, Object.assign({
      resourceOptions: r
    }, n), false)
    var /* [auto-meaningful-name] */i$baseTexture$resource = i.baseTexture.resource
    return i.baseTexture.valid ? Promise.resolve(i) : i$baseTexture$resource.load().then(function () {
      return Promise.resolve(i)
    })
  }
  t.fromBuffer = function (e, n, r, i) {
    return new t(Jt.fromBuffer(e, n, r, i))
  }
  t.fromLoader = function (e, n, r, i) {
    var o = new Jt(e, Object.assign({
      scaleMode: fe.SCALE_MODE,
      resolution: rt(n)
    }, i))
    var /* [auto-meaningful-name] */o$resource = o.resource
    if (o$resource instanceof on) {
      o$resource.url = n
    }
    var s = new t(o)
    if (!r) {
      r = n
    }
    Jt.addToCache(s.baseTexture, r)
    t.addToCache(s, r)
    if (r !== n) {
      Jt.addToCache(s.baseTexture, n)
      t.addToCache(s, n)
    }
    return s.baseTexture.valid ? Promise.resolve(s) : new Promise(function (e) {
      s.baseTexture.once("loaded", function () {
        return e(s)
      })
    })
  }
  t.addToCache = function (e, t) {
    if (t) {
      if (-1 === e.textureCacheIds.indexOf(t)) {
        e.textureCacheIds.push(t)
      }
      if (Ke[t]) {
        console.warn("Texture added to the cache with an id [" + t + "] that already had an entry")
      }
      Ke[t] = e
    }
  }
  t.removeFromCache = function (e) {
    if ("string" === typeof e) {
      var t = Ke[e]
      if (t) {
        var n = t.textureCacheIds.indexOf(e)
        if (n > -1) {
          t.textureCacheIds.splice(n, 1)
        }
        delete Ke[e]
        return t
      }
    } else if (e && e.textureCacheIds) {
      for (var r = 0; r < e.textureCacheIds.length; ++r) {
        if (Ke[e.textureCacheIds[r]] === e) {
          delete Ke[e.textureCacheIds[r]]
        }
      }
      e.textureCacheIds.length = 0
      return e
    }
    return null
  }
  Object.defineProperty(t.prototype, "resolution", {
    get: function () {
      return this.baseTexture.resolution
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "frame", {
    get: function () {
      return this._frame
    },
    set: function (e) {
      this._frame = e
      this.noFrame = false
      var t = e.x
      var n = e.y
      var /* [auto-meaningful-name] */e$width = e.width
      var /* [auto-meaningful-name] */e$height = e.height
      var o = t + e$width > this.baseTexture.width
      var a = n + e$height > this.baseTexture.height
      if (o || a) {
        var s = o && a ? "and" : "or"
        var c = "X: " + t + " + " + e$width + " = " + (t + e$width) + " > " + this.baseTexture.width
        var u = "Y: " + n + " + " + e$height + " = " + (n + e$height) + " > " + this.baseTexture.height
        throw new Error("Texture Error: frame does not fit inside the base Texture dimensions: " + c + " " + s + " " + u)
      }
      this.valid = e$width && e$height && this.baseTexture.valid
      if (!(this.trim || this.rotate)) {
        this.orig = e
      }
      if (this.valid) {
        this.updateUvs()
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "rotate", {
    get: function () {
      return this._rotate
    },
    set: function (e) {
      this._rotate = e
      if (this.valid) {
        this.updateUvs()
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "width", {
    get: function () {
      return this.orig.width
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "height", {
    get: function () {
      return this.orig.height
    },
    enumerable: false,
    configurable: true
  })
  t.prototype.castToBaseTexture = function () {
    return this.baseTexture
  }
  return t
}($_13371)
function gn(e) {
  e.destroy = function () {}
  e.on = function () {}
  e.once = function () {}
  e.emit = function () {}
}
An.EMPTY = new An(new Jt())
gn(An.EMPTY)
gn(An.EMPTY.baseTexture)
An.WHITE = function () {
  var e = document.createElement("canvas")
  e.width = 16
  e.height = 16
  var t = e.getContext("2d")
  t.fillStyle = "white"
  t.fillRect(0, 0, 16, 16)
  return new An(new Jt(new nn(e)))
}()
gn(An.WHITE)
gn(An.WHITE.baseTexture)
var vn = function (e) {
  function t(t, n) {
    var r = e.call(this, t, n) || this
    r.valid = true
    r.filterFrame = null
    r.filterPoolKey = null
    r.updateUvs()
    return r
  }
  Xt(t, e)
  Object.defineProperty(t.prototype, "framebuffer", {
    get: function () {
      return this.baseTexture.framebuffer
    },
    enumerable: false,
    configurable: true
  })
  t.prototype.resize = function (e, t, n) {
    if (undefined === n) {
      n = true
    }
    e = Math.ceil(e)
    t = Math.ceil(t)
    this.valid = e > 0 && t > 0
    this._frame.width = this.orig.width = e
    this._frame.height = this.orig.height = t
    if (n) {
      this.baseTexture.resize(e, t)
    }
    this.updateUvs()
  }
  t.prototype.setResolution = function (e) {
    var /* [auto-meaningful-name] */this$baseTexture = this.baseTexture
    if (this$baseTexture.resolution !== e) {
      this$baseTexture.setResolution(e)
      this.resize(this$baseTexture.width, this$baseTexture.height, false)
    }
  }
  t.create = function (e) {
    for (var n = arguments, r = [], i = 1; i < arguments.length; i++) {
      r[i - 1] = n[i]
    }
    if ("number" === typeof e) {
      Qe("6.0.0", "Arguments (width, height, scaleMode, resolution) have been deprecated.")
      e = {
        width: e,
        height: r[0],
        scaleMode: r[1],
        resolution: r[2]
      }
    }
    return new t(new hn(e))
  }
  return t
}(An)
var mn = function () {
  function e(e) {
    this.texturePool = {}
    this.textureOptions = e || {}
    this.enableFullScreen = false
    this._pixelsWidth = 0
    this._pixelsHeight = 0
  }
  e.prototype.createTexture = function (e, t) {
    var n = new hn(Object.assign({
      width: e,
      height: t,
      resolution: 1
    }, this.textureOptions))
    return new vn(n)
  }
  e.prototype.getOptimalTexture = function (t, n, r) {
    if (undefined === r) {
      r = 1
    }
    var /* [auto-meaningful-name] */e$SCREEN_KEY = e.SCREEN_KEY
    t *= r
    n *= r
    if (!(this.enableFullScreen && t === this._pixelsWidth && n === this._pixelsHeight)) {
      e$SCREEN_KEY = (65535 & (t = Me(t))) << 16 | 65535 & (n = Me(n))
    }
    if (!this.texturePool[e$SCREEN_KEY]) {
      this.texturePool[e$SCREEN_KEY] = []
    }
    var o = this.texturePool[e$SCREEN_KEY].pop()
    if (!o) {
      o = this.createTexture(t, n)
    }
    o.filterPoolKey = e$SCREEN_KEY
    o.setResolution(r)
    return o
  }
  e.prototype.getFilterTexture = function (e, t) {
    var n = this.getOptimalTexture(e.width, e.height, t || e.resolution)
    n.filterFrame = e.filterFrame
    return n
  }
  e.prototype.returnTexture = function (e) {
    var /* [auto-meaningful-name] */e$filterPoolKey = e.filterPoolKey
    e.filterFrame = null
    this.texturePool[e$filterPoolKey].push(e)
  }
  e.prototype.returnFilterTexture = function (e) {
    this.returnTexture(e)
  }
  e.prototype.clear = function (e) {
    if (e = false !== e) {
      for (var t in this.texturePool) {
        var n = this.texturePool[t]
        if (n) {
          for (var r = 0; r < n.length; r++) {
            n[r].destroy(true)
          }
        }
      }
    }
    this.texturePool = {}
  }
  e.prototype.setScreenSize = function (t) {
    if (t.width !== this._pixelsWidth || t.height !== this._pixelsHeight) {
      var /* [auto-meaningful-name] */e$SCREEN_KEY = e.SCREEN_KEY
      var r = this.texturePool[e$SCREEN_KEY]
      this.enableFullScreen = t.width > 0 && t.height > 0
      if (r) {
        for (var i = 0; i < r.length; i++) {
          r[i].destroy(true)
        }
      }
      this.texturePool[e$SCREEN_KEY] = []
      this._pixelsWidth = t.width
      this._pixelsHeight = t.height
    }
  }
  e.SCREEN_KEY = "screen"
  return e
}()
var yn = function () {
  function e(e, t, n, r, i, o, a) {
    if (undefined === t) {
      t = 0
    }
    if (undefined === n) {
      n = false
    }
    if (undefined === r) {
      r = ee.FLOAT
    }
    this.buffer = e
    this.size = t
    this.normalized = n
    this.type = r
    this.stride = i
    this.start = o
    this.instance = a
  }
  e.prototype.destroy = function () {
    this.buffer = null
  }
  e.from = function (t, n, r, i, o) {
    return new e(t, n, r, i, o)
  }
  return e
}()
var bn = 0
var wn = function () {
  function e(e, t, n) {
    if (undefined === t) {
      t = true
    }
    if (undefined === n) {
      n = false
    }
    this.data = e || new Float32Array(1)
    this._glBuffers = {}
    this._updateID = 0
    this.index = n
    this.static = t
    this.id = bn++
    this.disposeRunner = new zt("disposeBuffer")
  }
  e.prototype.update = function (e) {
    this.data = e || this.data
    this._updateID++
  }
  e.prototype.dispose = function () {
    this.disposeRunner.emit(this, false)
  }
  e.prototype.destroy = function () {
    this.dispose()
    this.data = null
  }
  e.from = function (t) {
    if (t instanceof Array) {
      t = new Float32Array(t)
    }
    return new e(t)
  }
  return e
}()
function En(e) {
  if (4 === e.BYTES_PER_ELEMENT) {
    return e instanceof Float32Array ? "Float32Array" : e instanceof Uint32Array ? "Uint32Array" : "Int32Array"
  }
  if (2 === e.BYTES_PER_ELEMENT) {
    if (e instanceof Uint16Array) {
      return "Uint16Array"
    }
  } else if (1 === e.BYTES_PER_ELEMENT && e instanceof Uint8Array) {
    return "Uint8Array"
  }
  return null
}
var xn = {
  Float32Array: Float32Array,
  Uint32Array: Uint32Array,
  Int32Array: Int32Array,
  Uint8Array: Uint8Array
}
var Cn = {
  5126: 4,
  5123: 2,
  5121: 1
}
var On = 0
var kn = {
  Float32Array: Float32Array,
  Uint32Array: Uint32Array,
  Int32Array: Int32Array,
  Uint8Array: Uint8Array,
  Uint16Array: Uint16Array
}
var Sn = function () {
  function e(e, t) {
    if (undefined === e) {
      e = []
    }
    if (undefined === t) {
      t = {}
    }
    this.buffers = e
    this.indexBuffer = null
    this.attributes = t
    this.glVertexArrayObjects = {}
    this.id = On++
    this.instanced = false
    this.instanceCount = 1
    this.disposeRunner = new zt("disposeGeometry")
    this.refCount = 0
  }
  e.prototype.addAttribute = function (e, t, n, r, i, o, a, s) {
    if (undefined === n) {
      n = 0
    }
    if (undefined === r) {
      r = false
    }
    if (undefined === s) {
      s = false
    }
    if (!t) {
      throw new Error("You must pass a buffer when creating an attribute")
    }
    if (!(t instanceof wn)) {
      if (t instanceof Array) {
        t = new Float32Array(t)
      }
      t = new wn(t)
    }
    var c = e.split("|")
    if (c.length > 1) {
      for (var u = 0; u < c.length; u++) {
        this.addAttribute(c[u], t, n, r, i)
      }
      return this
    }
    var l = this.buffers.indexOf(t)
    if (-1 === l) {
      this.buffers.push(t)
      l = this.buffers.length - 1
    }
    this.attributes[e] = new yn(l, n, r, i, o, a, s)
    this.instanced = this.instanced || s
    return this
  }
  e.prototype.getAttribute = function (e) {
    return this.attributes[e]
  }
  e.prototype.getBuffer = function (e) {
    return this.buffers[this.getAttribute(e).buffer]
  }
  e.prototype.addIndex = function (e) {
    if (!(e instanceof wn)) {
      if (e instanceof Array) {
        e = new Uint16Array(e)
      }
      e = new wn(e)
    }
    e.index = true
    this.indexBuffer = e
    if (-1 === this.buffers.indexOf(e)) {
      this.buffers.push(e)
    }
    return this
  }
  e.prototype.getIndex = function () {
    return this.indexBuffer
  }
  e.prototype.interleave = function () {
    if (1 === this.buffers.length || 2 === this.buffers.length && this.indexBuffer) {
      return this
    }
    var e
    var t = []
    var n = []
    var r = new wn()
    for (e in this.attributes) {
      var i = this.attributes[e]
      var o = this.buffers[i.buffer]
      t.push(o.data)
      n.push(i.size * Cn[i.type] / 4)
      i.buffer = 0
    }
    for (r.data = function (e, t) {
      for (var n = 0, r = 0, i = {}, o = 0; o < e.length; o++) {
        r += t[o]
        n += e[o].length
      }
      var a = new ArrayBuffer(4 * n)
      var s = null
      var c = 0
      for (o = 0; o < e.length; o++) {
        var u = t[o]
        var l = e[o]
        var f = En(l)
        if (!i[f]) {
          i[f] = new xn[f](a)
        }
        s = i[f]
        for (var d = 0; d < l.length; d++) {
          s[(d / u | 0) * r + c + d % u] = l[d]
        }
        c += u
      }
      return new Float32Array(a)
    }(t, n), e = 0; e < this.buffers.length; e++) {
      if (this.buffers[e] !== this.indexBuffer) {
        this.buffers[e].destroy()
      }
    }
    this.buffers = [r]
    if (this.indexBuffer) {
      this.buffers.push(this.indexBuffer)
    }
    return this
  }
  e.prototype.getSize = function () {
    for (var e in this.attributes) {
      var t = this.attributes[e]
      return this.buffers[t.buffer].data.length / (t.stride / 4 || t.size)
    }
    return 0
  }
  e.prototype.dispose = function () {
    this.disposeRunner.emit(this, false)
  }
  e.prototype.destroy = function () {
    this.dispose()
    this.buffers = null
    this.indexBuffer = null
    this.attributes = null
  }
  e.prototype.clone = function () {
    for (var t = new e(), n = 0; n < this.buffers.length; n++) {
      t.buffers[n] = new wn(this.buffers[n].data.slice(0))
    }
    for (var n in this.attributes) {
      var r = this.attributes[n]
      t.attributes[n] = new yn(r.buffer, r.size, r.normalized, r.type, r.stride, r.start, r.instance)
    }
    if (this.indexBuffer) {
      t.indexBuffer = t.buffers[this.buffers.indexOf(this.indexBuffer)]
      t.indexBuffer.index = true
    }
    return t
  }
  e.merge = function (t) {
    for (var n, r = new e(), i = [], o = [], a = [], s = 0; s < t.length; s++) {
      n = t[s]
      for (var c = 0; c < n.buffers.length; c++) {
        o[c] = o[c] || 0
        o[c] += n.buffers[c].data.length
        a[c] = 0
      }
    }
    for (s = 0; s < n.buffers.length; s++) {
      i[s] = new kn[En(n.buffers[s].data)](o[s])
      r.buffers[s] = new wn(i[s])
    }
    for (s = 0; s < t.length; s++) {
      n = t[s]
      for (c = 0; c < n.buffers.length; c++) {
        i[c].set(n.buffers[c].data, a[c])
        a[c] += n.buffers[c].data.length
      }
    }
    r.attributes = n.attributes
    if (n.indexBuffer) {
      r.indexBuffer = r.buffers[n.buffers.indexOf(n.indexBuffer)]
      r.indexBuffer.index = true
      var u = 0
      var l = 0
      var f = 0
      var d = 0
      for (s = 0; s < n.buffers.length; s++) {
        if (n.buffers[s] !== n.indexBuffer) {
          d = s
          break
        }
      }
      for (var s in n.attributes) {
        var h = n.attributes[s]
        if ((0 | h.buffer) === d) {
          l += h.size * Cn[h.type] / 4
        }
      }
      for (s = 0; s < t.length; s++) {
        var /* [auto-meaningful-name] */tS$indexBuffer$data = t[s].indexBuffer.data
        for (c = 0; c < tS$indexBuffer$data.length; c++) {
          r.indexBuffer.data[c + f] += u
        }
        u += n.buffers[d].data.length / l
        f += tS$indexBuffer$data.length
      }
    }
    return r
  }
  return e
}()
var Tn = function (e) {
  function t() {
    var t = e.call(this) || this
    t.addAttribute("aVertexPosition", new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])).addIndex([0, 1, 3, 2])
    return t
  }
  Xt(t, e)
  return t
}(Sn)
var Bn = function (e) {
  function t() {
    var t = e.call(this) || this
    t.vertices = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1])
    t.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])
    t.vertexBuffer = new wn(t.vertices)
    t.uvBuffer = new wn(t.uvs)
    t.addAttribute("aVertexPosition", t.vertexBuffer).addAttribute("aTextureCoord", t.uvBuffer).addIndex([0, 1, 2, 0, 2, 3])
    return t
  }
  Xt(t, e)
  t.prototype.map = function (e, t) {
    var n = 0
    var r = 0
    this.uvs[0] = n
    this.uvs[1] = r
    this.uvs[2] = n + t.width / e.width
    this.uvs[3] = r
    this.uvs[4] = n + t.width / e.width
    this.uvs[5] = r + t.height / e.height
    this.uvs[6] = n
    this.uvs[7] = r + t.height / e.height
    n = t.x
    r = t.y
    this.vertices[0] = n
    this.vertices[1] = r
    this.vertices[2] = n + t.width
    this.vertices[3] = r
    this.vertices[4] = n + t.width
    this.vertices[5] = r + t.height
    this.vertices[6] = n
    this.vertices[7] = r + t.height
    this.invalidate()
    return this
  }
  t.prototype.invalidate = function () {
    this.vertexBuffer._updateID++
    this.uvBuffer._updateID++
    return this
  }
  return t
}(Sn)
var Dn = 0
var In = function () {
  function e(e, t) {
    this.uniforms = e
    this.group = true
    this.syncUniforms = {}
    this.dirtyId = 0
    this.id = Dn++
    this.static = !!t
  }
  e.prototype.update = function () {
    this.dirtyId++
  }
  e.prototype.add = function (t, n, r) {
    this.uniforms[t] = new e(n, r)
  }
  e.from = function (t, n) {
    return new e(t, n)
  }
  return e
}()
var Rn = function () {
  function e() {
    this.renderTexture = null
    this.target = null
    this.legacy = false
    this.resolution = 1
    this.sourceFrame = new ct()
    this.destinationFrame = new ct()
    this.bindingSourceFrame = new ct()
    this.bindingDestinationFrame = new ct()
    this.filters = []
    this.transform = null
  }
  e.prototype.clear = function () {
    this.target = null
    this.filters = null
    this.renderTexture = null
  }
  return e
}()
var Fn = [new ht(), new ht(), new ht(), new ht()]
var Pn = new _t()
var Nn = function (e) {
  function t(t) {
    var n = e.call(this, t) || this
    n.defaultFilterStack = [{}]
    n.texturePool = new mn()
    n.texturePool.setScreenSize(t.view)
    n.statePool = []
    n.quad = new Tn()
    n.quadUv = new Bn()
    n.tempRect = new ct()
    n.activeState = {}
    n.globalUniforms = new In({
      outputFrame: new ct(),
      inputSize: new Float32Array(4),
      inputPixel: new Float32Array(4),
      inputClamp: new Float32Array(4),
      resolution: 1,
      filterArea: new Float32Array(4),
      filterClamp: new Float32Array(4)
    }, true)
    n.forceClear = false
    n.useMaxPadding = false
    return n
  }
  Xt(t, e)
  t.prototype.push = function (e, t) {
    for (var /* [auto-meaningful-name] */this$renderer = this.renderer, /* [auto-meaningful-name] */this$defaultFilterStack = this.defaultFilterStack, i = this.statePool.pop() || new Rn(), /* [auto-meaningful-name] */this$renderer$renderTexture = this.renderer.renderTexture, /* [auto-meaningful-name] */t0$resolution = t[0].resolution, /* [auto-meaningful-name] */t0$padding = t[0].padding, /* [auto-meaningful-name] */t0$autoFit = t[0].autoFit, /* [auto-meaningful-name] */t0$legacy = t[0].legacy, l = 1; l < t.length; l++) {
      var f = t[l]
      t0$resolution = Math.min(t0$resolution, f.resolution)
      t0$padding = this.useMaxPadding ? Math.max(t0$padding, f.padding) : t0$padding + f.padding
      t0$autoFit = t0$autoFit && f.autoFit
      t0$legacy = t0$legacy || f.legacy
    }
    if (1 === this$defaultFilterStack.length) {
      this.defaultFilterStack[0].renderTexture = this$renderer$renderTexture.current
    }
    this$defaultFilterStack.push(i)
    i.resolution = t0$resolution
    i.legacy = t0$legacy
    i.target = e
    i.sourceFrame.copyFrom(e.filterArea || e.getBounds(true))
    i.sourceFrame.pad(t0$padding)
    if (t0$autoFit) {
      var d = this.tempRect.copyFrom(this$renderer$renderTexture.sourceFrame)
      if (this$renderer.projection.transform) {
        this.transformAABB(Pn.copyFrom(this$renderer.projection.transform).invert(), d)
      }
      i.sourceFrame.fit(d)
    }
    this.roundFrame(i.sourceFrame, this$renderer$renderTexture.current ? this$renderer$renderTexture.current.resolution : this$renderer.resolution, this$renderer$renderTexture.sourceFrame, this$renderer$renderTexture.destinationFrame, this$renderer.projection.transform)
    i.renderTexture = this.getOptimalFilterTexture(i.sourceFrame.width, i.sourceFrame.height, t0$resolution)
    i.filters = t
    i.destinationFrame.width = i.renderTexture.width
    i.destinationFrame.height = i.renderTexture.height
    var /* [auto-meaningful-name] */this$tempRect = this.tempRect
    this$tempRect.x = 0
    this$tempRect.y = 0
    this$tempRect.width = i.sourceFrame.width
    this$tempRect.height = i.sourceFrame.height
    i.renderTexture.filterFrame = i.sourceFrame
    i.bindingSourceFrame.copyFrom(this$renderer$renderTexture.sourceFrame)
    i.bindingDestinationFrame.copyFrom(this$renderer$renderTexture.destinationFrame)
    i.transform = this$renderer.projection.transform
    this$renderer.projection.transform = null
    this$renderer$renderTexture.bind(i.renderTexture, i.sourceFrame, this$tempRect)
    this$renderer.framebuffer.clear(0, 0, 0, 0)
  }
  t.prototype.pop = function () {
    var /* [auto-meaningful-name] */this$defaultFilterStack = this.defaultFilterStack
    var t = this$defaultFilterStack.pop()
    var /* [auto-meaningful-name] */t$filters = t.filters
    this.activeState = t
    var /* [auto-meaningful-name] */this$globalUniforms$uniforms = this.globalUniforms.uniforms
    this$globalUniforms$uniforms.outputFrame = t.sourceFrame
    this$globalUniforms$uniforms.resolution = t.resolution
    var /* [auto-meaningful-name] */this$globalUniforms$uniforms$inputSize = this$globalUniforms$uniforms.inputSize
    var /* [auto-meaningful-name] */this$globalUniforms$uniforms$inputPixel = this$globalUniforms$uniforms.inputPixel
    var /* [auto-meaningful-name] */this$globalUniforms$uniforms$inputClamp = this$globalUniforms$uniforms.inputClamp
    this$globalUniforms$uniforms$inputSize[0] = t.destinationFrame.width
    this$globalUniforms$uniforms$inputSize[1] = t.destinationFrame.height
    this$globalUniforms$uniforms$inputSize[2] = 1 / this$globalUniforms$uniforms$inputSize[0]
    this$globalUniforms$uniforms$inputSize[3] = 1 / this$globalUniforms$uniforms$inputSize[1]
    this$globalUniforms$uniforms$inputPixel[0] = this$globalUniforms$uniforms$inputSize[0] * t.resolution
    this$globalUniforms$uniforms$inputPixel[1] = this$globalUniforms$uniforms$inputSize[1] * t.resolution
    this$globalUniforms$uniforms$inputPixel[2] = 1 / this$globalUniforms$uniforms$inputPixel[0]
    this$globalUniforms$uniforms$inputPixel[3] = 1 / this$globalUniforms$uniforms$inputPixel[1]
    this$globalUniforms$uniforms$inputClamp[0] = .5 * this$globalUniforms$uniforms$inputPixel[2]
    this$globalUniforms$uniforms$inputClamp[1] = .5 * this$globalUniforms$uniforms$inputPixel[3]
    this$globalUniforms$uniforms$inputClamp[2] = t.sourceFrame.width * this$globalUniforms$uniforms$inputSize[2] - .5 * this$globalUniforms$uniforms$inputPixel[2]
    this$globalUniforms$uniforms$inputClamp[3] = t.sourceFrame.height * this$globalUniforms$uniforms$inputSize[3] - .5 * this$globalUniforms$uniforms$inputPixel[3]
    if (t.legacy) {
      var /* [auto-meaningful-name] */this$globalUniforms$uniforms$filterArea = this$globalUniforms$uniforms.filterArea
      this$globalUniforms$uniforms$filterArea[0] = t.destinationFrame.width
      this$globalUniforms$uniforms$filterArea[1] = t.destinationFrame.height
      this$globalUniforms$uniforms$filterArea[2] = t.sourceFrame.x
      this$globalUniforms$uniforms$filterArea[3] = t.sourceFrame.y
      this$globalUniforms$uniforms.filterClamp = this$globalUniforms$uniforms.inputClamp
    }
    this.globalUniforms.update()
    var c = this$defaultFilterStack[this$defaultFilterStack.length - 1]
    if (t.renderTexture.framebuffer.multisample > 1) {
      this.renderer.framebuffer.blit()
    }
    if (1 === t$filters.length) {
      t$filters[0].apply(this, t.renderTexture, c.renderTexture, ae.BLEND, t)
      this.returnFilterTexture(t.renderTexture)
    } else {
      var /* [auto-meaningful-name] */t$renderTexture = t.renderTexture
      var l = this.getOptimalFilterTexture(t$renderTexture.width, t$renderTexture.height, t.resolution)
      l.filterFrame = t$renderTexture.filterFrame
      var f = 0
      for (f = 0; f < t$filters.length - 1; ++f) {
        t$filters[f].apply(this, t$renderTexture, l, ae.CLEAR, t)
        var d = t$renderTexture
        t$renderTexture = l
        l = d
      }
      t$filters[f].apply(this, t$renderTexture, c.renderTexture, ae.BLEND, t)
      this.returnFilterTexture(t$renderTexture)
      this.returnFilterTexture(l)
    }
    t.clear()
    this.statePool.push(t)
  }
  t.prototype.bindAndClear = function (e, t) {
    if (undefined === t) {
      t = ae.CLEAR
    }
    var /* [auto-meaningful-name] */this$renderer = this.renderer
    var /* [auto-meaningful-name] */this$renderer$renderTexture = this$renderer.renderTexture
    var /* [auto-meaningful-name] */this$renderer$state = this$renderer.state
    if (e === this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture) {
      this.renderer.projection.transform = this.activeState.transform
    } else {
      this.renderer.projection.transform = null
    }
    if (e && e.filterFrame) {
      var /* [auto-meaningful-name] */this$tempRect = this.tempRect
      this$tempRect.x = 0
      this$tempRect.y = 0
      this$tempRect.width = e.filterFrame.width
      this$tempRect.height = e.filterFrame.height
      this$renderer$renderTexture.bind(e, e.filterFrame, this$tempRect)
    } else if (e !== this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture) {
      this$renderer$renderTexture.bind(e)
    } else {
      this.renderer.renderTexture.bind(e, this.activeState.bindingSourceFrame, this.activeState.bindingDestinationFrame)
    }
    var a = 1 & this$renderer$state.stateId || this.forceClear
    if (t === ae.CLEAR || t === ae.BLIT && a) {
      this.renderer.framebuffer.clear(0, 0, 0, 0)
    }
  }
  t.prototype.applyFilter = function (e, t, n, r) {
    var /* [auto-meaningful-name] */this$renderer = this.renderer
    this$renderer.state.set(e.state)
    this.bindAndClear(n, r)
    e.uniforms.uSampler = t
    e.uniforms.filterGlobals = this.globalUniforms
    this$renderer.shader.bind(e)
    if (e.legacy) {
      this.quadUv.map(t._frame, t.filterFrame)
      this$renderer.geometry.bind(this.quadUv)
      this$renderer.geometry.draw($.TRIANGLES)
    } else {
      this$renderer.geometry.bind(this.quad)
      this$renderer.geometry.draw($.TRIANGLE_STRIP)
    }
  }
  t.prototype.calculateSpriteMatrix = function (e, t) {
    var /* [auto-meaningful-name] */this$activeState = this.activeState
    var /* [auto-meaningful-name] */this$activeState$sourceFrame = this$activeState.sourceFrame
    var /* [auto-meaningful-name] */this$activeState$destinationFrame = this$activeState.destinationFrame
    var /* [auto-meaningful-name] */t$_texture$orig = t._texture.orig
    var a = e.set(this$activeState$destinationFrame.width, 0, 0, this$activeState$destinationFrame.height, this$activeState$sourceFrame.x, this$activeState$sourceFrame.y)
    var s = t.worldTransform.copyTo(_t.TEMP_MATRIX)
    s.invert()
    a.prepend(s)
    a.scale(1 / t$_texture$orig.width, 1 / t$_texture$orig.height)
    a.translate(t.anchor.x, t.anchor.y)
    return a
  }
  t.prototype.destroy = function () {
    this.texturePool.clear(false)
  }
  t.prototype.getOptimalFilterTexture = function (e, t, n) {
    if (undefined === n) {
      n = 1
    }
    return this.texturePool.getOptimalTexture(e, t, n)
  }
  t.prototype.getFilterTexture = function (e, t) {
    if ("number" === typeof e) {
      var n = e
      e = t
      t = n
    }
    e = e || this.activeState.renderTexture
    var r = this.texturePool.getOptimalTexture(e.width, e.height, t || e.resolution)
    r.filterFrame = e.filterFrame
    return r
  }
  t.prototype.returnFilterTexture = function (e) {
    this.texturePool.returnTexture(e)
  }
  t.prototype.emptyPool = function () {
    this.texturePool.clear(true)
  }
  t.prototype.resize = function () {
    this.texturePool.setScreenSize(this.renderer.view)
  }
  t.prototype.transformAABB = function (e, t) {
    var n = Fn[0]
    var r = Fn[1]
    var i = Fn[2]
    var o = Fn[3]
    n.set(t.left, t.top)
    r.set(t.left, t.bottom)
    i.set(t.right, t.top)
    o.set(t.right, t.bottom)
    e.apply(n, n)
    e.apply(r, r)
    e.apply(i, i)
    e.apply(o, o)
    var a = Math.min(n.x, r.x, i.x, o.x)
    var s = Math.min(n.y, r.y, i.y, o.y)
    var c = Math.max(n.x, r.x, i.x, o.x)
    var u = Math.max(n.y, r.y, i.y, o.y)
    t.x = a
    t.y = s
    t.width = c - a
    t.height = u - s
  }
  t.prototype.roundFrame = function (e, t, n, r, i) {
    if (i) {
      var o = i.a
      var a = i.b
      var s = i.c
      var c = i.d
      if ((0 !== a || 0 !== s) && (0 !== o || 0 !== c)) {
        return
      }
    }
    (i = i ? Pn.copyFrom(i) : Pn.identity()).translate(-n.x, -n.y).scale(r.width / n.width, r.height / n.height).translate(r.x, r.y)
    this.transformAABB(i, e)
    e.ceil(t)
    this.transformAABB(i.invert(), e)
  }
  return t
}(ln)
var Mn = function () {
  function e(e) {
    this.renderer = e
  }
  e.prototype.flush = function () {}
  e.prototype.destroy = function () {
    this.renderer = null
  }
  e.prototype.start = function () {}
  e.prototype.stop = function () {
    this.flush()
  }
  e.prototype.render = function (e) {}
  return e
}()
var Ln = function (e) {
  function t(t) {
    var n = e.call(this, t) || this
    n.emptyRenderer = new Mn(t)
    n.currentRenderer = n.emptyRenderer
    return n
  }
  Xt(t, e)
  t.prototype.setObjectRenderer = function (e) {
    if (this.currentRenderer !== e) {
      this.currentRenderer.stop()
      this.currentRenderer = e
      this.currentRenderer.start()
    }
  }
  t.prototype.flush = function () {
    this.setObjectRenderer(this.emptyRenderer)
  }
  t.prototype.reset = function () {
    this.setObjectRenderer(this.emptyRenderer)
  }
  t.prototype.copyBoundTextures = function (e, t) {
    for (var /* [auto-meaningful-name] */this$renderer$texture$boundTextures = this.renderer.texture.boundTextures, r = t - 1; r >= 0; --r) {
      e[r] = this$renderer$texture$boundTextures[r] || null
      if (e[r]) {
        e[r]._batchLocation = r
      }
    }
  }
  t.prototype.boundArray = function (e, t, n, r) {
    for (var /* [auto-meaningful-name] */e$elements = e.elements, /* [auto-meaningful-name] */e$ids = e.ids, /* [auto-meaningful-name] */e$count = e.count, s = 0, c = 0; c < e$count; c++) {
      var u = e$elements[c]
      var /* [auto-meaningful-name] */u$_batchLocation = u._batchLocation
      if (u$_batchLocation >= 0 && u$_batchLocation < r && t[u$_batchLocation] === u) {
        e$ids[c] = u$_batchLocation
      } else {
        for (; s < r;) {
          var f = t[s]
          if (!f || f._batchEnabled !== n || f._batchLocation !== s) {
            e$ids[c] = s
            u._batchLocation = s
            t[s] = u
            break
          }
          s++
        }
      }
    }
  }
  return t
}(ln)
var jn = 0
var Un = function (e) {
  function t(t) {
    var n = e.call(this, t) || this
    n.webGLVersion = 1
    n.extensions = {}
    n.supports = {
      uint32Indices: false
    }
    n.handleContextLost = n.handleContextLost.bind(n)
    n.handleContextRestored = n.handleContextRestored.bind(n)
    t.view.addEventListener("webglcontextlost", n.handleContextLost, false)
    t.view.addEventListener("webglcontextrestored", n.handleContextRestored, false)
    return n
  }
  Xt(t, e)
  Object.defineProperty(t.prototype, "isLost", {
    get: function () {
      return !this.gl || this.gl.isContextLost()
    },
    enumerable: false,
    configurable: true
  })
  t.prototype.contextChange = function (e) {
    this.gl = e
    this.renderer.gl = e
    this.renderer.CONTEXT_UID = jn++
    if (e.isContextLost() && e.getExtension("WEBGL_lose_context")) {
      e.getExtension("WEBGL_lose_context").restoreContext()
    }
  }
  t.prototype.initFromContext = function (e) {
    this.gl = e
    this.validateContext(e)
    this.renderer.gl = e
    this.renderer.CONTEXT_UID = jn++
    this.renderer.runners.contextChange.emit(e)
  }
  t.prototype.initFromOptions = function (e) {
    var t = this.createContext(this.renderer.view, e)
    this.initFromContext(t)
  }
  t.prototype.createContext = function (e, t) {
    var n
    if (fe.PREFER_ENV >= K.WEBGL2) {
      n = e.getContext("webgl2", t)
    }
    if (n) {
      this.webGLVersion = 2
    } else if (this.webGLVersion = 1, !(n = e.getContext("webgl", t) || e.getContext("experimental-webgl", t))) {
      throw new Error("This browser does not support WebGL. Try using the canvas renderer")
    }
    this.gl = n
    this.getExtensions()
    return this.gl
  }
  t.prototype.getExtensions = function () {
    var /* [auto-meaningful-name] */this$gl = this.gl
    var t = {
      anisotropicFiltering: this$gl.getExtension("EXT_texture_filter_anisotropic"),
      floatTextureLinear: this$gl.getExtension("OES_texture_float_linear"),
      s3tc: this$gl.getExtension("WEBGL_compressed_texture_s3tc"),
      s3tc_sRGB: this$gl.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
      etc: this$gl.getExtension("WEBGL_compressed_texture_etc"),
      etc1: this$gl.getExtension("WEBGL_compressed_texture_etc1"),
      pvrtc: this$gl.getExtension("WEBGL_compressed_texture_pvrtc") || this$gl.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
      atc: this$gl.getExtension("WEBGL_compressed_texture_atc"),
      astc: this$gl.getExtension("WEBGL_compressed_texture_astc")
    }
    if (1 === this.webGLVersion) {
      Object.assign(this.extensions, t, {
        drawBuffers: this$gl.getExtension("WEBGL_draw_buffers"),
        depthTexture: this$gl.getExtension("WEBGL_depth_texture"),
        loseContext: this$gl.getExtension("WEBGL_lose_context"),
        vertexArrayObject: this$gl.getExtension("OES_vertex_array_object") || this$gl.getExtension("MOZ_OES_vertex_array_object") || this$gl.getExtension("WEBKIT_OES_vertex_array_object"),
        uint32ElementIndex: this$gl.getExtension("OES_element_index_uint"),
        floatTexture: this$gl.getExtension("OES_texture_float"),
        floatTextureLinear: this$gl.getExtension("OES_texture_float_linear"),
        textureHalfFloat: this$gl.getExtension("OES_texture_half_float"),
        textureHalfFloatLinear: this$gl.getExtension("OES_texture_half_float_linear")
      })
    } else {
      if (2 === this.webGLVersion) {
        Object.assign(this.extensions, t, {
          colorBufferFloat: this$gl.getExtension("EXT_color_buffer_float")
        })
      }
    }
  }
  t.prototype.handleContextLost = function (e) {
    e.preventDefault()
  }
  t.prototype.handleContextRestored = function () {
    this.renderer.runners.contextChange.emit(this.gl)
  }
  t.prototype.destroy = function () {
    var /* [auto-meaningful-name] */this$renderer$view = this.renderer.view
    this$renderer$view.removeEventListener("webglcontextlost", this.handleContextLost)
    this$renderer$view.removeEventListener("webglcontextrestored", this.handleContextRestored)
    this.gl.useProgram(null)
    if (this.extensions.loseContext) {
      this.extensions.loseContext.loseContext()
    }
  }
  t.prototype.postrender = function () {
    if (this.renderer.renderingToScreen) {
      this.gl.flush()
    }
  }
  t.prototype.validateContext = function (e) {
    var t = e.getContextAttributes()
    var n = "WebGL2RenderingContext" in self && e instanceof self.WebGL2RenderingContext
    if (n) {
      this.webGLVersion = 2
    }
    if (!t.stencil) {
      console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly")
    }
    var r = n || !!e.getExtension("OES_element_index_uint")
    this.supports.uint32Indices = r
    if (!r) {
      console.warn("Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly")
    }
  }
  return t
}(ln)
var Hn = function (e) {
  this.framebuffer = e
  this.stencil = null
  this.dirtyId = 0
  this.dirtyFormat = 0
  this.dirtySize = 0
  this.multisample = le.NONE
  this.msaaBuffer = null
  this.blitFramebuffer = null
}
var Vn = new ct()
var Gn = function (e) {
  function t(t) {
    var n = e.call(this, t) || this
    n.managedFramebuffers = []
    n.unknownFramebuffer = new dn(10, 10)
    n.msaaSamples = null
    return n
  }
  Xt(t, e)
  t.prototype.contextChange = function () {
    var e = this.gl = this.renderer.gl
    this.CONTEXT_UID = this.renderer.CONTEXT_UID
    this.current = this.unknownFramebuffer
    this.viewport = new ct()
    this.hasMRT = true
    this.writeDepthTexture = true
    this.disposeAll(true)
    if (1 === this.renderer.context.webGLVersion) {
      var /* [auto-meaningful-name] */this$renderer$context$extensions$drawBuffers = this.renderer.context.extensions.drawBuffers
      var /* [auto-meaningful-name] */this$renderer$context$extensions$depthTexture = this.renderer.context.extensions.depthTexture
      if (fe.PREFER_ENV === K.WEBGL_LEGACY) {
        this$renderer$context$extensions$drawBuffers = null
        this$renderer$context$extensions$depthTexture = null
      }
      if (this$renderer$context$extensions$drawBuffers) {
        e.drawBuffers = function (e) {
          return this$renderer$context$extensions$drawBuffers.drawBuffersWEBGL(e)
        }
      } else {
        this.hasMRT = false
        e.drawBuffers = function () {}
      }
      if (!this$renderer$context$extensions$depthTexture) {
        this.writeDepthTexture = false
      }
    } else {
      this.msaaSamples = e.getInternalformatParameter(e.RENDERBUFFER, e.RGBA8, e.SAMPLES)
    }
  }
  t.prototype.bind = function (e, t) {
    var /* [auto-meaningful-name] */this$gl = this.gl
    if (e) {
      var r = e.glFramebuffers[this.CONTEXT_UID] || this.initFramebuffer(e)
      if (this.current !== e) {
        this.current = e
        this$gl.bindFramebuffer(this$gl.FRAMEBUFFER, r.framebuffer)
      }
      if (r.dirtyId !== e.dirtyId) {
        r.dirtyId = e.dirtyId
        if (r.dirtyFormat !== e.dirtyFormat) {
          r.dirtyFormat = e.dirtyFormat
          this.updateFramebuffer(e)
        } else {
          if (r.dirtySize !== e.dirtySize) {
            r.dirtySize = e.dirtySize
            this.resizeFramebuffer(e)
          }
        }
      }
      for (var i = 0; i < e.colorTextures.length; i++) {
        var o = e.colorTextures[i]
        this.renderer.texture.unbind(o.parentTextureArray || o)
      }
      if (e.depthTexture) {
        this.renderer.texture.unbind(e.depthTexture)
      }
      if (t) {
        this.setViewport(t.x, t.y, t.width, t.height)
      } else {
        this.setViewport(0, 0, e.width, e.height)
      }
    } else {
      if (this.current) {
        this.current = null
        this$gl.bindFramebuffer(this$gl.FRAMEBUFFER, null)
      }
      if (t) {
        this.setViewport(t.x, t.y, t.width, t.height)
      } else {
        this.setViewport(0, 0, this.renderer.width, this.renderer.height)
      }
    }
  }
  t.prototype.setViewport = function (e, t, n, r) {
    var /* [auto-meaningful-name] */this$viewport = this.viewport
    if (!(this$viewport.width === n && this$viewport.height === r && this$viewport.x === e && this$viewport.y === t)) {
      this$viewport.x = e
      this$viewport.y = t
      this$viewport.width = n
      this$viewport.height = r
      this.gl.viewport(e, t, n, r)
    }
  }
  Object.defineProperty(t.prototype, "size", {
    get: function () {
      return this.current ? {
        x: 0,
        y: 0,
        width: this.current.width,
        height: this.current.height
      } : {
        x: 0,
        y: 0,
        width: this.renderer.width,
        height: this.renderer.height
      }
    },
    enumerable: false,
    configurable: true
  })
  t.prototype.clear = function (e, t, n, r, i) {
    if (undefined === i) {
      i = Y.COLOR | Y.DEPTH
    }
    var /* [auto-meaningful-name] */this$gl = this.gl
    this$gl.clearColor(e, t, n, r)
    this$gl.clear(i)
  }
  t.prototype.initFramebuffer = function (e) {
    var /* [auto-meaningful-name] */this$gl = this.gl
    var n = new Hn(this$gl.createFramebuffer())
    n.multisample = this.detectSamples(e.multisample)
    e.glFramebuffers[this.CONTEXT_UID] = n
    this.managedFramebuffers.push(e)
    e.disposeRunner.add(this)
    return n
  }
  t.prototype.resizeFramebuffer = function (e) {
    var /* [auto-meaningful-name] */this$gl = this.gl
    var n = e.glFramebuffers[this.CONTEXT_UID]
    if (n.stencil) {
      this$gl.bindRenderbuffer(this$gl.RENDERBUFFER, n.stencil)
      this$gl.renderbufferStorage(this$gl.RENDERBUFFER, this$gl.DEPTH_STENCIL, e.width, e.height)
    }
    for (var /* [auto-meaningful-name] */e$colorTextures = e.colorTextures, i = 0; i < e$colorTextures.length; i++) {
      this.renderer.texture.bind(e$colorTextures[i], 0)
    }
    if (e.depthTexture) {
      this.renderer.texture.bind(e.depthTexture, 0)
    }
  }
  t.prototype.updateFramebuffer = function (e) {
    var /* [auto-meaningful-name] */this$gl = this.gl
    var n = e.glFramebuffers[this.CONTEXT_UID]
    var /* [auto-meaningful-name] */e$colorTextures$length = e.colorTextures.length
    if (!this$gl.drawBuffers) {
      e$colorTextures$length = Math.min(e$colorTextures$length, 1)
    }
    if (n.multisample > 1) {
      n.msaaBuffer = this$gl.createRenderbuffer()
      this$gl.bindRenderbuffer(this$gl.RENDERBUFFER, n.msaaBuffer)
      this$gl.renderbufferStorageMultisample(this$gl.RENDERBUFFER, n.multisample, this$gl.RGBA8, e.width, e.height)
      this$gl.framebufferRenderbuffer(this$gl.FRAMEBUFFER, this$gl.COLOR_ATTACHMENT0, this$gl.RENDERBUFFER, n.msaaBuffer)
    }
    for (var i = [], o = 0; o < e$colorTextures$length; o++) {
      if (!(0 === o && n.multisample > 1)) {
        var a = e.colorTextures[o]
        var s = a.parentTextureArray || a
        this.renderer.texture.bind(s, 0)
        this$gl.framebufferTexture2D(this$gl.FRAMEBUFFER, this$gl.COLOR_ATTACHMENT0 + o, a.target, s._glTextures[this.CONTEXT_UID].texture, 0)
        i.push(this$gl.COLOR_ATTACHMENT0 + o)
      }
    }
    if ((i.length > 1 && this$gl.drawBuffers(i), e.depthTexture) && this.writeDepthTexture) {
      var /* [auto-meaningful-name] */e$depthTexture = e.depthTexture
      this.renderer.texture.bind(e$depthTexture, 0)
      this$gl.framebufferTexture2D(this$gl.FRAMEBUFFER, this$gl.DEPTH_ATTACHMENT, this$gl.TEXTURE_2D, e$depthTexture._glTextures[this.CONTEXT_UID].texture, 0)
    }
    if (!(n.stencil || !e.stencil && !e.depth)) {
      n.stencil = this$gl.createRenderbuffer()
      this$gl.bindRenderbuffer(this$gl.RENDERBUFFER, n.stencil)
      this$gl.renderbufferStorage(this$gl.RENDERBUFFER, this$gl.DEPTH_STENCIL, e.width, e.height)
      if (!e.depthTexture) {
        this$gl.framebufferRenderbuffer(this$gl.FRAMEBUFFER, this$gl.DEPTH_STENCIL_ATTACHMENT, this$gl.RENDERBUFFER, n.stencil)
      }
    }
  }
  t.prototype.detectSamples = function (e) {
    var /* [auto-meaningful-name] */this$msaaSamples = this.msaaSamples
    var /* [auto-meaningful-name] */le$NONE = le.NONE
    if (e <= 1 || null === this$msaaSamples) {
      return le$NONE
    }
    for (var r = 0; r < this$msaaSamples.length; r++) {
      if (this$msaaSamples[r] <= e) {
        le$NONE = this$msaaSamples[r]
        break
      }
    }
    if (1 === le$NONE) {
      le$NONE = le.NONE
    }
    return le$NONE
  }
  t.prototype.blit = function (e, t, n) {
    var /* [auto-meaningful-name] */this$current = this.current
    var /* [auto-meaningful-name] */this$renderer = this.renderer
    var /* [auto-meaningful-name] */this$gl = this.gl
    var /* [auto-meaningful-name] */this$CONTEXT_UID = this.CONTEXT_UID
    if (2 === this$renderer.context.webGLVersion && this$current) {
      var s = this$current.glFramebuffers[this$CONTEXT_UID]
      if (s) {
        if (!e) {
          if (s.multisample <= 1) {
            return
          }
          if (!s.blitFramebuffer) {
            s.blitFramebuffer = new dn(this$current.width, this$current.height)
            s.blitFramebuffer.addColorTexture(0, this$current.colorTextures[0])
          }
          (e = s.blitFramebuffer).width = this$current.width
          e.height = this$current.height
        }
        if (!t) {
          (t = Vn).width = this$current.width
          t.height = this$current.height
        }
        if (!n) {
          n = t
        }
        var c = t.width === n.width && t.height === n.height
        this.bind(e)
        this$gl.bindFramebuffer(this$gl.READ_FRAMEBUFFER, s.framebuffer)
        this$gl.blitFramebuffer(t.x, t.y, t.width, t.height, n.x, n.y, n.width, n.height, this$gl.COLOR_BUFFER_BIT, c ? this$gl.NEAREST : this$gl.LINEAR)
      }
    }
  }
  t.prototype.disposeFramebuffer = function (e, t) {
    var n = e.glFramebuffers[this.CONTEXT_UID]
    var /* [auto-meaningful-name] */this$gl = this.gl
    if (n) {
      delete e.glFramebuffers[this.CONTEXT_UID]
      var i = this.managedFramebuffers.indexOf(e)
      if (i >= 0) {
        this.managedFramebuffers.splice(i, 1)
      }
      e.disposeRunner.remove(this)
      if (!t) {
        this$gl.deleteFramebuffer(n.framebuffer)
        if (n.stencil) {
          this$gl.deleteRenderbuffer(n.stencil)
        }
      }
    }
  }
  t.prototype.disposeAll = function (e) {
    var /* [auto-meaningful-name] */this$managedFramebuffers = this.managedFramebuffers
    this.managedFramebuffers = []
    for (var n = 0; n < this$managedFramebuffers.length; n++) {
      this.disposeFramebuffer(this$managedFramebuffers[n], e)
    }
  }
  t.prototype.forceStencil = function () {
    var /* [auto-meaningful-name] */this$current = this.current
    if (this$current) {
      var t = this$current.glFramebuffers[this.CONTEXT_UID]
      if (t && !t.stencil) {
        this$current.enableStencil()
        var /* [auto-meaningful-name] */this$current$width = this$current.width
        var /* [auto-meaningful-name] */this$current$height = this$current.height
        var /* [auto-meaningful-name] */this$gl = this.gl
        var o = this$gl.createRenderbuffer()
        this$gl.bindRenderbuffer(this$gl.RENDERBUFFER, o)
        this$gl.renderbufferStorage(this$gl.RENDERBUFFER, this$gl.DEPTH_STENCIL, this$current$width, this$current$height)
        t.stencil = o
        this$gl.framebufferRenderbuffer(this$gl.FRAMEBUFFER, this$gl.DEPTH_STENCIL_ATTACHMENT, this$gl.RENDERBUFFER, o)
      }
    }
  }
  t.prototype.reset = function () {
    this.current = this.unknownFramebuffer
    this.viewport = new ct()
  }
  return t
}(ln)
var zn = function (e) {
  this.buffer = e || null
  this.updateID = -1
  this.byteLength = -1
  this.refCount = 0
}
var Qn = {
  5126: 4,
  5123: 2,
  5121: 1
}
var Wn = function (e) {
  function t(t) {
    var n = e.call(this, t) || this
    n._activeGeometry = null
    n._activeVao = null
    n.hasVao = true
    n.hasInstance = true
    n.canUseUInt32ElementIndex = false
    n.managedGeometries = {}
    n.managedBuffers = {}
    return n
  }
  Xt(t, e)
  t.prototype.contextChange = function () {
    this.disposeAll(true)
    var e = this.gl = this.renderer.gl
    var /* [auto-meaningful-name] */this$renderer$context = this.renderer.context
    this.CONTEXT_UID = this.renderer.CONTEXT_UID
    if (2 !== this$renderer$context.webGLVersion) {
      var /* [auto-meaningful-name] */this$renderer$context$extensions$vertexArrayObject = this.renderer.context.extensions.vertexArrayObject
      if (fe.PREFER_ENV === K.WEBGL_LEGACY) {
        this$renderer$context$extensions$vertexArrayObject = null
      }
      if (this$renderer$context$extensions$vertexArrayObject) {
        e.createVertexArray = function () {
          return this$renderer$context$extensions$vertexArrayObject.createVertexArrayOES()
        }
        e.bindVertexArray = function (e) {
          return this$renderer$context$extensions$vertexArrayObject.bindVertexArrayOES(e)
        }
        e.deleteVertexArray = function (e) {
          return this$renderer$context$extensions$vertexArrayObject.deleteVertexArrayOES(e)
        }
      } else {
        this.hasVao = false
        e.createVertexArray = function () {
          return null
        }
        e.bindVertexArray = function () {
          return null
        }
        e.deleteVertexArray = function () {
          return null
        }
      }
    }
    if (2 !== this$renderer$context.webGLVersion) {
      var r = e.getExtension("ANGLE_instanced_arrays")
      if (r) {
        e.vertexAttribDivisor = function (e, t) {
          return r.vertexAttribDivisorANGLE(e, t)
        }
        e.drawElementsInstanced = function (e, t, n, i, o) {
          return r.drawElementsInstancedANGLE(e, t, n, i, o)
        }
        e.drawArraysInstanced = function (e, t, n, i) {
          return r.drawArraysInstancedANGLE(e, t, n, i)
        }
      } else {
        this.hasInstance = false
      }
    }
    this.canUseUInt32ElementIndex = 2 === this$renderer$context.webGLVersion || !!this$renderer$context.extensions.uint32ElementIndex
  }
  t.prototype.bind = function (e, t) {
    t = t || this.renderer.shader.shader
    var /* [auto-meaningful-name] */this$gl = this.gl
    var r = e.glVertexArrayObjects[this.CONTEXT_UID]
    var i = false
    if (!r) {
      this.managedGeometries[e.id] = e
      e.disposeRunner.add(this)
      e.glVertexArrayObjects[this.CONTEXT_UID] = r = {}
      i = true
    }
    var o = r[t.program.id] || this.initGeometryVao(e, t.program, i)
    this._activeGeometry = e
    if (this._activeVao !== o) {
      this._activeVao = o
      if (this.hasVao) {
        this$gl.bindVertexArray(o)
      } else {
        this.activateVao(e, t.program)
      }
    }
    this.updateBuffers()
  }
  t.prototype.reset = function () {
    this.unbind()
  }
  t.prototype.updateBuffers = function () {
    for (var /* [auto-meaningful-name] */this$_activeGeometry = this._activeGeometry, /* [auto-meaningful-name] */this$gl = this.gl, n = 0; n < this$_activeGeometry.buffers.length; n++) {
      var r = this$_activeGeometry.buffers[n]
      var i = r._glBuffers[this.CONTEXT_UID]
      if (r._updateID !== i.updateID) {
        i.updateID = r._updateID
        var o = r.index ? this$gl.ELEMENT_ARRAY_BUFFER : this$gl.ARRAY_BUFFER
        this$gl.bindBuffer(o, i.buffer)
        this._boundBuffer = i
        if (i.byteLength >= r.data.byteLength) {
          this$gl.bufferSubData(o, 0, r.data)
        } else {
          var a = r.static ? this$gl.STATIC_DRAW : this$gl.DYNAMIC_DRAW
          i.byteLength = r.data.byteLength
          this$gl.bufferData(o, r.data, a)
        }
      }
    }
  }
  t.prototype.checkCompatibility = function (e, t) {
    var /* [auto-meaningful-name] */e$attributes = e.attributes
    var /* [auto-meaningful-name] */t$attributeData = t.attributeData
    for (var i in t$attributeData) if (!e$attributes[i]) {
      throw new Error("shader and geometry incompatible, geometry missing the \"" + i + "\" attribute")
    }
  }
  t.prototype.getSignature = function (e, t) {
    var /* [auto-meaningful-name] */e$attributes = e.attributes
    var /* [auto-meaningful-name] */t$attributeData = t.attributeData
    var i = ["g", e.id]
    for (var o in e$attributes) if (t$attributeData[o]) {
      i.push(o)
    }
    return i.join("-")
  }
  t.prototype.initGeometryVao = function (e, t, n) {
    if (undefined === n) {
      n = true
    }
    this.checkCompatibility(e, t)
    var /* [auto-meaningful-name] */this$gl = this.gl
    var /* [auto-meaningful-name] */this$CONTEXT_UID = this.CONTEXT_UID
    var o = this.getSignature(e, t)
    var a = e.glVertexArrayObjects[this.CONTEXT_UID]
    var s = a[o]
    if (s) {
      a[t.id] = s
      return s
    }
    var /* [auto-meaningful-name] */e$buffers = e.buffers
    var /* [auto-meaningful-name] */e$attributes = e.attributes
    var l = {}
    var f = {}
    for (var d in e$buffers) {
      l[d] = 0
      f[d] = 0
    }
    for (var d in e$attributes) {
      if (!e$attributes[d].size && t.attributeData[d]) {
        e$attributes[d].size = t.attributeData[d].size
      } else {
        if (!e$attributes[d].size) {
          console.warn("PIXI Geometry attribute '" + d + "' size cannot be determined (likely the bound shader does not have the attribute)")
        }
      }
      l[e$attributes[d].buffer] += e$attributes[d].size * Qn[e$attributes[d].type]
    }
    for (var d in e$attributes) {
      var h = e$attributes[d]
      var /* [auto-meaningful-name] */h$size = h.size
      if (undefined === h.stride) {
        if (l[h.buffer] === h$size * Qn[h.type]) {
          h.stride = 0
        } else {
          h.stride = l[h.buffer]
        }
      }
      if (undefined === h.start) {
        h.start = f[h.buffer]
        f[h.buffer] += h$size * Qn[h.type]
      }
    }
    s = this$gl.createVertexArray()
    this$gl.bindVertexArray(s)
    for (var _ = 0; _ < e$buffers.length; _++) {
      var A = e$buffers[_]
      if (!A._glBuffers[this$CONTEXT_UID]) {
        A._glBuffers[this$CONTEXT_UID] = new zn(this$gl.createBuffer())
        this.managedBuffers[A.id] = A
        A.disposeRunner.add(this)
      }
      if (n) {
        A._glBuffers[this$CONTEXT_UID].refCount++
      }
    }
    this.activateVao(e, t)
    this._activeVao = s
    a[t.id] = s
    a[o] = s
    return s
  }
  t.prototype.disposeBuffer = function (e, t) {
    if (this.managedBuffers[e.id]) {
      delete this.managedBuffers[e.id]
      var n = e._glBuffers[this.CONTEXT_UID]
      var /* [auto-meaningful-name] */this$gl = this.gl
      e.disposeRunner.remove(this)
      if (n) {
        if (!t) {
          this$gl.deleteBuffer(n.buffer)
        }
        delete e._glBuffers[this.CONTEXT_UID]
      }
    }
  }
  t.prototype.disposeGeometry = function (e, t) {
    if (this.managedGeometries[e.id]) {
      delete this.managedGeometries[e.id]
      var n = e.glVertexArrayObjects[this.CONTEXT_UID]
      var /* [auto-meaningful-name] */this$gl = this.gl
      var /* [auto-meaningful-name] */e$buffers = e.buffers
      e.disposeRunner.remove(this)
      if (n) {
        for (var o = 0; o < e$buffers.length; o++) {
          var a = e$buffers[o]._glBuffers[this.CONTEXT_UID]
          a.refCount--
          if (!(0 !== a.refCount || t)) {
            this.disposeBuffer(e$buffers[o], t)
          }
        }
        if (!t) {
          for (var s in n) if ("g" === s[0]) {
            var c = n[s]
            if (this._activeVao === c) {
              this.unbind()
            }
            this$gl.deleteVertexArray(c)
          }
        }
        delete e.glVertexArrayObjects[this.CONTEXT_UID]
      }
    }
  }
  t.prototype.disposeAll = function (e) {
    for (var t = Object.keys(this.managedGeometries), n = 0; n < t.length; n++) {
      this.disposeGeometry(this.managedGeometries[t[n]], e)
    }
    t = Object.keys(this.managedBuffers)
    for (n = 0; n < t.length; n++) {
      this.disposeBuffer(this.managedBuffers[t[n]], e)
    }
  }
  t.prototype.activateVao = function (e, t) {
    var /* [auto-meaningful-name] */this$gl = this.gl
    var /* [auto-meaningful-name] */this$CONTEXT_UID = this.CONTEXT_UID
    var /* [auto-meaningful-name] */e$buffers = e.buffers
    var /* [auto-meaningful-name] */e$attributes = e.attributes
    if (e.indexBuffer) {
      this$gl.bindBuffer(this$gl.ELEMENT_ARRAY_BUFFER, e.indexBuffer._glBuffers[this$CONTEXT_UID].buffer)
    }
    var a = null
    for (var s in e$attributes) {
      var c = e$attributes[s]
      var u = e$buffers[c.buffer]._glBuffers[this$CONTEXT_UID]
      if (t.attributeData[s]) {
        if (a !== u) {
          this$gl.bindBuffer(this$gl.ARRAY_BUFFER, u.buffer)
          a = u
        }
        var /* [auto-meaningful-name] */t$attributeDataS$location = t.attributeData[s].location
        this$gl.enableVertexAttribArray(t$attributeDataS$location)
        this$gl.vertexAttribPointer(t$attributeDataS$location, c.size, c.type || this$gl.FLOAT, c.normalized, c.stride, c.start)
        if (c.instance) {
          if (!this.hasInstance) {
            throw new Error("geometry error, GPU Instancing is not supported on this device")
          }
          this$gl.vertexAttribDivisor(t$attributeDataS$location, 1)
        }
      }
    }
  }
  t.prototype.draw = function (e, t, n, r) {
    var /* [auto-meaningful-name] */this$gl = this.gl
    var /* [auto-meaningful-name] */this$_activeGeometry = this._activeGeometry
    if (this$_activeGeometry.indexBuffer) {
      var /* [auto-meaningful-name] */this$_activeGeometry$indexBuffer$data$BYTES_PER_ELEMENT = this$_activeGeometry.indexBuffer.data.BYTES_PER_ELEMENT
      var s = 2 === this$_activeGeometry$indexBuffer$data$BYTES_PER_ELEMENT ? this$gl.UNSIGNED_SHORT : this$gl.UNSIGNED_INT
      if (2 === this$_activeGeometry$indexBuffer$data$BYTES_PER_ELEMENT || 4 === this$_activeGeometry$indexBuffer$data$BYTES_PER_ELEMENT && this.canUseUInt32ElementIndex) {
        if (this$_activeGeometry.instanced) {
          this$gl.drawElementsInstanced(e, t || this$_activeGeometry.indexBuffer.data.length, s, (n || 0) * this$_activeGeometry$indexBuffer$data$BYTES_PER_ELEMENT, r || 1)
        } else {
          this$gl.drawElements(e, t || this$_activeGeometry.indexBuffer.data.length, s, (n || 0) * this$_activeGeometry$indexBuffer$data$BYTES_PER_ELEMENT)
        }
      } else {
        console.warn("unsupported index buffer type: uint32")
      }
    } else if (this$_activeGeometry.instanced) {
      this$gl.drawArraysInstanced(e, n, t || this$_activeGeometry.getSize(), r || 1)
    } else {
      this$gl.drawArrays(e, n, t || this$_activeGeometry.getSize())
    }
    return this
  }
  t.prototype.unbind = function () {
    this.gl.bindVertexArray(null)
    this._activeVao = null
    this._activeGeometry = null
  }
  return t
}(ln)
var Kn = function () {
  function e(e) {
    if (undefined === e) {
      e = null
    }
    this.type = ue.NONE
    this.autoDetect = true
    this.maskObject = e || null
    this.pooled = false
    this.isMaskData = true
    this._stencilCounter = 0
    this._scissorCounter = 0
    this._scissorRect = null
    this._target = null
  }
  e.prototype.reset = function () {
    if (this.pooled) {
      this.maskObject = null
      this.type = ue.NONE
      this.autoDetect = true
    }
    this._target = null
  }
  e.prototype.copyCountersOrReset = function (e) {
    if (e) {
      this._stencilCounter = e._stencilCounter
      this._scissorCounter = e._scissorCounter
      this._scissorRect = e._scissorRect
    } else {
      this._stencilCounter = 0
      this._scissorCounter = 0
      this._scissorRect = null
    }
  }
  return e
}()
function Xn(e, t, n) {
  var r = e.createShader(t)
  e.shaderSource(r, n)
  e.compileShader(r)
  return r
}
function Yn(e, t, n, r) {
  var i = Xn(e, e.VERTEX_SHADER, t)
  var o = Xn(e, e.FRAGMENT_SHADER, n)
  var a = e.createProgram()
  e.attachShader(a, i)
  e.attachShader(a, o)
  if (r) {
    for (var s in r) e.bindAttribLocation(a, r[s], s)
  }
  e.linkProgram(a)
  if (!e.getProgramParameter(a, e.LINK_STATUS)) {
    if (!e.getShaderParameter(i, e.COMPILE_STATUS)) {
      console.warn(t)
      console.error(e.getShaderInfoLog(i))
    }
    if (!e.getShaderParameter(o, e.COMPILE_STATUS)) {
      console.warn(n)
      console.error(e.getShaderInfoLog(o))
    }
    console.error("Pixi.js Error: Could not initialize shader.")
    console.error("gl.VALIDATE_STATUS", e.getProgramParameter(a, e.VALIDATE_STATUS))
    console.error("gl.getError()", e.getError())
    if ("" !== e.getProgramInfoLog(a)) {
      console.warn("Pixi.js Warning: gl.getProgramInfoLog()", e.getProgramInfoLog(a))
    }
    e.deleteProgram(a)
    a = null
  }
  e.deleteShader(i)
  e.deleteShader(o)
  return a
}
function qn(e) {
  for (var t = new Array(e), n = 0; n < t.length; n++) {
    t[n] = false
  }
  return t
}
function $n(e, t) {
  switch (e) {
    case "float":
      return 0
    case "vec2":
      return new Float32Array(2 * t)
    case "vec3":
      return new Float32Array(3 * t)
    case "vec4":
      return new Float32Array(4 * t)
    case "int":
    case "uint":
    case "sampler2D":
    case "sampler2DArray":
      return 0
    case "ivec2":
      return new Int32Array(2 * t)
    case "ivec3":
      return new Int32Array(3 * t)
    case "ivec4":
      return new Int32Array(4 * t)
    case "uvec2":
      return new Uint32Array(2 * t)
    case "uvec3":
      return new Uint32Array(3 * t)
    case "uvec4":
      return new Uint32Array(4 * t)
    case "bool":
      return false
    case "bvec2":
      return qn(2 * t)
    case "bvec3":
      return qn(3 * t)
    case "bvec4":
      return qn(4 * t)
    case "mat2":
      return new Float32Array([1, 0, 0, 1])
    case "mat3":
      return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1])
    case "mat4":
      return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
  }
  return null
}
var Jn
var Zn = {}
var er = Zn
function tr() {
  if (er === Zn || er && er.isContextLost()) {
    var e = document.createElement("canvas")
    var t = undefined
    if (fe.PREFER_ENV >= K.WEBGL2) {
      t = e.getContext("webgl2", {})
    }
    if (!t) {
      if (t = e.getContext("webgl", {}) || e.getContext("experimental-webgl", {})) {
        t.getExtension("WEBGL_draw_buffers")
      } else {
        t = null
      }
    }
    er = t
  }
  return er
}
function nr(e, t, n) {
  if ("precision" !== e.substring(0, 9)) {
    var r = t
    if (t === ce.HIGH && n !== ce.HIGH) {
      r = ce.MEDIUM
    }
    return "precision " + r + " float;\n" + e
  }
  return n !== ce.HIGH && "precision highp" === e.substring(0, 15) ? e.replace("precision highp", "precision mediump") : e
}
var rr = {
  float: 1,
  vec2: 2,
  vec3: 3,
  vec4: 4,
  int: 1,
  ivec2: 2,
  ivec3: 3,
  ivec4: 4,
  uint: 1,
  uvec2: 2,
  uvec3: 3,
  uvec4: 4,
  bool: 1,
  bvec2: 2,
  bvec3: 3,
  bvec4: 4,
  mat2: 4,
  mat3: 9,
  mat4: 16,
  sampler2D: 1
}
function ir(e) {
  return rr[e]
}
var or = null
var ar = {
  FLOAT: "float",
  FLOAT_VEC2: "vec2",
  FLOAT_VEC3: "vec3",
  FLOAT_VEC4: "vec4",
  INT: "int",
  INT_VEC2: "ivec2",
  INT_VEC3: "ivec3",
  INT_VEC4: "ivec4",
  UNSIGNED_INT: "uint",
  UNSIGNED_INT_VEC2: "uvec2",
  UNSIGNED_INT_VEC3: "uvec3",
  UNSIGNED_INT_VEC4: "uvec4",
  BOOL: "bool",
  BOOL_VEC2: "bvec2",
  BOOL_VEC3: "bvec3",
  BOOL_VEC4: "bvec4",
  FLOAT_MAT2: "mat2",
  FLOAT_MAT3: "mat3",
  FLOAT_MAT4: "mat4",
  SAMPLER_2D: "sampler2D",
  INT_SAMPLER_2D: "sampler2D",
  UNSIGNED_INT_SAMPLER_2D: "sampler2D",
  SAMPLER_CUBE: "samplerCube",
  INT_SAMPLER_CUBE: "samplerCube",
  UNSIGNED_INT_SAMPLER_CUBE: "samplerCube",
  SAMPLER_2D_ARRAY: "sampler2DArray",
  INT_SAMPLER_2D_ARRAY: "sampler2DArray",
  UNSIGNED_INT_SAMPLER_2D_ARRAY: "sampler2DArray"
}
function sr(e, t) {
  if (!or) {
    var n = Object.keys(ar)
    or = {}
    for (var r = 0; r < n.length; ++r) {
      var i = n[r]
      or[e[i]] = ar[i]
    }
  }
  return or[t]
}
var cr = [
  {
    test: function (e) {
      return "float" === e.type && 1 === e.size
    },
    code: function (e) {
      return "\n            if(uv[\"" + e + "\"] !== ud[\"" + e + "\"].value)\n            {\n                ud[\"" + e + "\"].value = uv[\"" + e + "\"]\n                gl.uniform1f(ud[\"" + e + "\"].location, uv[\"" + e + "\"])\n            }\n            "
    }
  }, {
    test: function (e) {
      return ("sampler2D" === e.type || "samplerCube" === e.type || "sampler2DArray" === e.type) && 1 === e.size && !e.isArray
    },
    code: function (e) {
      return "t = syncData.textureCount++;\n\n            renderer.texture.bind(uv[\"" + e + "\"], t);\n\n            if(ud[\"" + e + "\"].value !== t)\n            {\n                ud[\"" + e + "\"].value = t;\n                gl.uniform1i(ud[\"" + e + "\"].location, t);\n; // eslint-disable-line max-len\n            }"
    }
  }, {
    test: function (e, t) {
      return "mat3" === e.type && 1 === e.size && undefined !== t.a
    },
    code: function (e) {
      return "\n            gl.uniformMatrix3fv(ud[\"" + e + "\"].location, false, uv[\"" + e + "\"].toArray(true));\n            "
    }
  }, {
    test: function (e, t) {
      return "vec2" === e.type && 1 === e.size && undefined !== t.x
    },
    code: function (e) {
      return "\n                cv = ud[\"" + e + "\"].value;\n                v = uv[\"" + e + "\"];\n\n                if(cv[0] !== v.x || cv[1] !== v.y)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    gl.uniform2f(ud[\"" + e + "\"].location, v.x, v.y);\n                }"
    }
  }, {
    test: function (e) {
      return "vec2" === e.type && 1 === e.size
    },
    code: function (e) {
      return "\n                cv = ud[\"" + e + "\"].value;\n                v = uv[\"" + e + "\"];\n\n                if(cv[0] !== v[0] || cv[1] !== v[1])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    gl.uniform2f(ud[\"" + e + "\"].location, v[0], v[1]);\n                }\n            "
    }
  }, {
    test: function (e, t) {
      return "vec4" === e.type && 1 === e.size && undefined !== t.width
    },
    code: function (e) {
      return "\n                cv = ud[\"" + e + "\"].value;\n                v = uv[\"" + e + "\"];\n\n                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    cv[2] = v.width;\n                    cv[3] = v.height;\n                    gl.uniform4f(ud[\"" + e + "\"].location, v.x, v.y, v.width, v.height)\n                }"
    }
  }, {
    test: function (e) {
      return "vec4" === e.type && 1 === e.size
    },
    code: function (e) {
      return "\n                cv = ud[\"" + e + "\"].value;\n                v = uv[\"" + e + "\"];\n\n                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    cv[2] = v[2];\n                    cv[3] = v[3];\n\n                    gl.uniform4f(ud[\"" + e + "\"].location, v[0], v[1], v[2], v[3])\n                }"
    }
  }
]
var ur = {
  float: "\n    if(cv !== v)\n    {\n        cv.v = v;\n        gl.uniform1f(location, v)\n    }",
  vec2: "\n    if(cv[0] !== v[0] || cv[1] !== v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        gl.uniform2f(location, v[0], v[1])\n    }",
  vec3: "\n    if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3f(location, v[0], v[1], v[2])\n    }",
  vec4: "gl.uniform4f(location, v[0], v[1], v[2], v[3])",
  int: "gl.uniform1i(location, v)",
  ivec2: "gl.uniform2i(location, v[0], v[1])",
  ivec3: "gl.uniform3i(location, v[0], v[1], v[2])",
  ivec4: "gl.uniform4i(location, v[0], v[1], v[2], v[3])",
  uint: "gl.uniform1ui(location, v)",
  uvec2: "gl.uniform2ui(location, v[0], v[1])",
  uvec3: "gl.uniform3ui(location, v[0], v[1], v[2])",
  uvec4: "gl.uniform4ui(location, v[0], v[1], v[2], v[3])",
  bool: "gl.uniform1i(location, v)",
  bvec2: "gl.uniform2i(location, v[0], v[1])",
  bvec3: "gl.uniform3i(location, v[0], v[1], v[2])",
  bvec4: "gl.uniform4i(location, v[0], v[1], v[2], v[3])",
  mat2: "gl.uniformMatrix2fv(location, false, v)",
  mat3: "gl.uniformMatrix3fv(location, false, v)",
  mat4: "gl.uniformMatrix4fv(location, false, v)",
  sampler2D: "gl.uniform1i(location, v)",
  samplerCube: "gl.uniform1i(location, v)",
  sampler2DArray: "gl.uniform1i(location, v)"
}
var lr = {
  float: "gl.uniform1fv(location, v)",
  vec2: "gl.uniform2fv(location, v)",
  vec3: "gl.uniform3fv(location, v)",
  vec4: "gl.uniform4fv(location, v)",
  mat4: "gl.uniformMatrix4fv(location, false, v)",
  mat3: "gl.uniformMatrix3fv(location, false, v)",
  mat2: "gl.uniformMatrix2fv(location, false, v)",
  int: "gl.uniform1iv(location, v)",
  ivec2: "gl.uniform2iv(location, v)",
  ivec3: "gl.uniform3iv(location, v)",
  ivec4: "gl.uniform4iv(location, v)",
  uint: "gl.uniform1uiv(location, v)",
  uvec2: "gl.uniform2uiv(location, v)",
  uvec3: "gl.uniform3uiv(location, v)",
  uvec4: "gl.uniform4uiv(location, v)",
  bool: "gl.uniform1iv(location, v)",
  bvec2: "gl.uniform2iv(location, v)",
  bvec3: "gl.uniform3iv(location, v)",
  bvec4: "gl.uniform4iv(location, v)",
  sampler2D: "gl.uniform1iv(location, v)",
  samplerCube: "gl.uniform1iv(location, v)",
  sampler2DArray: "gl.uniform1iv(location, v)"
}
var fr
var dr = ["precision mediump float;", "void main(void){", "float test = 0.1;", "%forloop%", "gl_FragColor = vec4(0.0);", "}"].join("\n")
function hr(e) {
  for (var t = "", n = 0; n < e; ++n) {
    if (n > 0) {
      t += "\nelse "
    }
    if (n < e - 1) {
      t += "if(test == " + n + ".0){}"
    }
  }
  return t
}
var pr = 0
var _r = {}
var Ar = function () {
  function e(t, n, r) {
    if (undefined === r) {
      r = "pixi-shader"
    }
    this.id = pr++
    this.vertexSrc = t || e.defaultVertexSrc
    this.fragmentSrc = n || e.defaultFragmentSrc
    this.vertexSrc = this.vertexSrc.trim()
    this.fragmentSrc = this.fragmentSrc.trim()
    if ("#version" !== this.vertexSrc.substring(0, 8)) {
      r = r.replace(/\s+/g, "-")
      if (_r[r]) {
        _r[r]++
        r += "-" + _r[r]
      } else {
        _r[r] = 1
      }
      this.vertexSrc = "#define SHADER_NAME " + r + "\n" + this.vertexSrc
      this.fragmentSrc = "#define SHADER_NAME " + r + "\n" + this.fragmentSrc
      this.vertexSrc = nr(this.vertexSrc, fe.PRECISION_VERTEX, ce.HIGH)
      this.fragmentSrc = nr(this.fragmentSrc, fe.PRECISION_FRAGMENT, function () {
        if (!Jn) {
          Jn = ce.MEDIUM
          var e = tr()
          if (e && e.getShaderPrecisionFormat) {
            var t = e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT)
            Jn = t.precision ? ce.HIGH : ce.MEDIUM
          }
        }
        return Jn
      }())
    }
    this.extractData(this.vertexSrc, this.fragmentSrc)
    this.glPrograms = {}
    this.syncUniforms = null
  }
  e.prototype.extractData = function (e, t) {
    var n = tr()
    if (n) {
      var r = Yn(n, e, t)
      this.attributeData = this.getAttributeData(r, n)
      this.uniformData = this.getUniformData(r, n)
      n.deleteProgram(r)
    } else {
      this.uniformData = {}
      this.attributeData = {}
    }
  }
  e.prototype.getAttributeData = function (e, t) {
    for (var n = {}, r = [], i = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES), o = 0; o < i; o++) {
      var a = t.getActiveAttrib(e, o)
      var s = sr(t, a.type)
      var c = {
        type: s,
        name: a.name,
        size: ir(s),
        location: 0
      }
      n[a.name] = c
      r.push(c)
    }
    r.sort(function (e, t) {
      return e.name > t.name ? 1 : -1
    })
    for (o = 0; o < r.length; o++) {
      r[o].location = o
    }
    return n
  }
  e.prototype.getUniformData = function (e, t) {
    for (var n = {}, r = t.getProgramParameter(e, t.ACTIVE_UNIFORMS), i = 0; i < r; i++) {
      var o = t.getActiveUniform(e, i)
      var a = o.name.replace(/\[.*?\]$/, "")
      var s = o.name.match(/\[.*?\]$/)
      var c = sr(t, o.type)
      n[a] = {
        type: c,
        size: o.size,
        isArray: s,
        value: $n(c, o.size)
      }
    }
    return n
  }
  Object.defineProperty(e, "defaultVertexSrc", {
    get: function () {
      return "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n}\n"
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e, "defaultFragmentSrc", {
    get: function () {
      return "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor *= texture2D(uSampler, vTextureCoord);\n}"
    },
    enumerable: false,
    configurable: true
  })
  e.from = function (t, n, r) {
    var i = t + n
    var o = We[i]
    if (!o) {
      We[i] = o = new e(t, n, r)
    }
    return o
  }
  return e
}()
var gr = function () {
  function e(e, t) {
    for (var n in this.program = e, this.uniformGroup = t ? t instanceof In ? t : new In(t) : new In({}), e.uniformData) if (this.uniformGroup.uniforms[n] instanceof Array) {
      this.uniformGroup.uniforms[n] = new Float32Array(this.uniformGroup.uniforms[n])
    }
  }
  e.prototype.checkUniformExists = function (e, t) {
    if (t.uniforms[e]) {
      return true
    }
    for (var n in t.uniforms) {
      var r = t.uniforms[n]
      if (r.group && this.checkUniformExists(e, r)) {
        return true
      }
    }
    return false
  }
  e.prototype.destroy = function () {
    this.uniformGroup = null
  }
  Object.defineProperty(e.prototype, "uniforms", {
    get: function () {
      return this.uniformGroup.uniforms
    },
    enumerable: false,
    configurable: true
  })
  e.from = function (t, n, r) {
    return new e(Ar.from(t, n), r)
  }
  return e
}()
var vr = function () {
  function e() {
    this.data = 0
    this.blendMode = q.NORMAL
    this.polygonOffset = 0
    this.blend = true
    this.depthMask = true
  }
  Object.defineProperty(e.prototype, "blend", {
    get: function () {
      return !!(1 & this.data)
    },
    set: function (e) {
      if (!!(1 & this.data) !== e) {
        this.data ^= 1
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "offsets", {
    get: function () {
      return !!(2 & this.data)
    },
    set: function (e) {
      if (!!(2 & this.data) !== e) {
        this.data ^= 2
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "culling", {
    get: function () {
      return !!(4 & this.data)
    },
    set: function (e) {
      if (!!(4 & this.data) !== e) {
        this.data ^= 4
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "depthTest", {
    get: function () {
      return !!(8 & this.data)
    },
    set: function (e) {
      if (!!(8 & this.data) !== e) {
        this.data ^= 8
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "depthMask", {
    get: function () {
      return !!(32 & this.data)
    },
    set: function (e) {
      if (!!(32 & this.data) !== e) {
        this.data ^= 32
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "clockwiseFrontFace", {
    get: function () {
      return !!(16 & this.data)
    },
    set: function (e) {
      if (!!(16 & this.data) !== e) {
        this.data ^= 16
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "blendMode", {
    get: function () {
      return this._blendMode
    },
    set: function (e) {
      this.blend = e !== q.NONE
      this._blendMode = e
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "polygonOffset", {
    get: function () {
      return this._polygonOffset
    },
    set: function (e) {
      this.offsets = !!e
      this._polygonOffset = e
    },
    enumerable: false,
    configurable: true
  })
  e.prototype.toString = function () {
    return "[@pixi/core:State blendMode=" + this.blendMode + " clockwiseFrontFace=" + this.clockwiseFrontFace + " culling=" + this.culling + " depthMask=" + this.depthMask + " polygonOffset=" + this.polygonOffset + "]"
  }
  e.for2d = function () {
    var t = new e()
    t.depthTest = false
    t.blend = true
    return t
  }
  return e
}()
var mr = function (e) {
  function t(n, r, i) {
    var o = this
    var a = Ar.from(n || t.defaultVertexSrc, r || t.defaultFragmentSrc);
    (o = e.call(this, a, i) || this).padding = 0
    o.resolution = fe.FILTER_RESOLUTION
    o.enabled = true
    o.autoFit = true
    o.legacy = !!o.program.attributeData.aTextureCoord
    o.state = new vr()
    return o
  }
  Xt(t, e)
  t.prototype.apply = function (e, t, n, r, i) {
    e.applyFilter(this, t, n, r)
  }
  Object.defineProperty(t.prototype, "blendMode", {
    get: function () {
      return this.state.blendMode
    },
    set: function (e) {
      this.state.blendMode = e
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t, "defaultVertexSrc", {
    get: function () {
      return "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n"
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t, "defaultFragmentSrc", {
    get: function () {
      return "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n}\n"
    },
    enumerable: false,
    configurable: true
  })
  return t
}(gr)
var yr = new _t()
var br = function () {
  function e(e, t) {
    this._texture = e
    this.mapCoord = new _t()
    this.uClampFrame = new Float32Array(4)
    this.uClampOffset = new Float32Array(2)
    this._textureID = -1
    this._updateID = 0
    this.clampOffset = 0
    this.clampMargin = "undefined" === typeof t ? .5 : t
    this.isSimple = false
  }
  Object.defineProperty(e.prototype, "texture", {
    get: function () {
      return this._texture
    },
    set: function (e) {
      this._texture = e
      this._textureID = -1
    },
    enumerable: false,
    configurable: true
  })
  e.prototype.multiplyUvs = function (e, t) {
    if (undefined === t) {
      t = e
    }
    for (var /* [auto-meaningful-name] */this$mapCoord = this.mapCoord, r = 0; r < e.length; r += 2) {
      var i = e[r]
      var o = e[r + 1]
      t[r] = i * this$mapCoord.a + o * this$mapCoord.c + this$mapCoord.tx
      t[r + 1] = i * this$mapCoord.b + o * this$mapCoord.d + this$mapCoord.ty
    }
    return t
  }
  e.prototype.update = function (e) {
    var /* [auto-meaningful-name] */this$_texture = this._texture
    if (!this$_texture || !this$_texture.valid) {
      return false
    }
    if (!e && this._textureID === this$_texture._updateID) {
      return false
    }
    this._textureID = this$_texture._updateID
    this._updateID++
    var /* [auto-meaningful-name] */this$_texture$_uvs = this$_texture._uvs
    this.mapCoord.set(this$_texture$_uvs.x1 - this$_texture$_uvs.x0, this$_texture$_uvs.y1 - this$_texture$_uvs.y0, this$_texture$_uvs.x3 - this$_texture$_uvs.x0, this$_texture$_uvs.y3 - this$_texture$_uvs.y0, this$_texture$_uvs.x0, this$_texture$_uvs.y0)
    var /* [auto-meaningful-name] */this$_texture$orig = this$_texture.orig
    var /* [auto-meaningful-name] */this$_texture$trim = this$_texture.trim
    if (this$_texture$trim) {
      yr.set(this$_texture$orig.width / this$_texture$trim.width, 0, 0, this$_texture$orig.height / this$_texture$trim.height, -this$_texture$trim.x / this$_texture$trim.width, -this$_texture$trim.y / this$_texture$trim.height)
      this.mapCoord.append(yr)
    }
    var /* [auto-meaningful-name] */this$_texture$baseTexture = this$_texture.baseTexture
    var /* [auto-meaningful-name] */this$uClampFrame = this.uClampFrame
    var s = this.clampMargin / this$_texture$baseTexture.resolution
    var /* [auto-meaningful-name] */this$clampOffset = this.clampOffset
    this$uClampFrame[0] = (this$_texture._frame.x + s + this$clampOffset) / this$_texture$baseTexture.width
    this$uClampFrame[1] = (this$_texture._frame.y + s + this$clampOffset) / this$_texture$baseTexture.height
    this$uClampFrame[2] = (this$_texture._frame.x + this$_texture._frame.width - s + this$clampOffset) / this$_texture$baseTexture.width
    this$uClampFrame[3] = (this$_texture._frame.y + this$_texture._frame.height - s + this$clampOffset) / this$_texture$baseTexture.height
    this.uClampOffset[0] = this$clampOffset / this$_texture$baseTexture.realWidth
    this.uClampOffset[1] = this$clampOffset / this$_texture$baseTexture.realHeight
    this.isSimple = this$_texture._frame.width === this$_texture$baseTexture.width && this$_texture._frame.height === this$_texture$baseTexture.height && 0 === this$_texture.rotate
    return true
  }
  return e
}()
var wr = function (e) {
  function t(t) {
    var n = this
    var r = new _t()
    n = e.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n", "varying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform sampler2D mask;\nuniform float alpha;\nuniform float npmAlpha;\nuniform vec4 maskClamp;\n\nvoid main(void)\n{\n    float clip = step(3.5,\n        step(maskClamp.x, vMaskCoord.x) +\n        step(maskClamp.y, vMaskCoord.y) +\n        step(vMaskCoord.x, maskClamp.z) +\n        step(vMaskCoord.y, maskClamp.w));\n\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);\n\n    original *= (alphaMul * masky.r * alpha * clip);\n\n    gl_FragColor = original;\n}\n") || this
    t.renderable = false
    n.maskSprite = t
    n.maskMatrix = r
    return n
  }
  Xt(t, e)
  t.prototype.apply = function (e, t, n, r) {
    var /* [auto-meaningful-name] */this$maskSprite = this.maskSprite
    var /* [auto-meaningful-name] */this$maskSprite$_texture = this$maskSprite._texture
    if (this$maskSprite$_texture.valid) {
      if (!this$maskSprite$_texture.uvMatrix) {
        this$maskSprite$_texture.uvMatrix = new br(this$maskSprite$_texture, 0)
      }
      this$maskSprite$_texture.uvMatrix.update()
      this.uniforms.npmAlpha = this$maskSprite$_texture.baseTexture.alphaMode ? 0 : 1
      this.uniforms.mask = this$maskSprite$_texture
      this.uniforms.otherMatrix = e.calculateSpriteMatrix(this.maskMatrix, this$maskSprite).prepend(this$maskSprite$_texture.uvMatrix.mapCoord)
      this.uniforms.alpha = this$maskSprite.worldAlpha
      this.uniforms.maskClamp = this$maskSprite$_texture.uvMatrix.uClampFrame
      e.applyFilter(this, t, n, r)
    }
  }
  return t
}(mr)
var Er = function (e) {
  function t(t) {
    var n = e.call(this, t) || this
    n.enableScissor = true
    n.alphaMaskPool = []
    n.maskDataPool = []
    n.maskStack = []
    n.alphaMaskIndex = 0
    return n
  }
  Xt(t, e)
  t.prototype.setMaskStack = function (e) {
    this.maskStack = e
    this.renderer.scissor.setMaskStack(e)
    this.renderer.stencil.setMaskStack(e)
  }
  t.prototype.push = function (e, t) {
    var n = t
    if (!n.isMaskData) {
      var r = this.maskDataPool.pop() || new Kn()
      r.pooled = true
      r.maskObject = t
      n = r
    }
    switch (n.autoDetect && this.detect(n), n.copyCountersOrReset(this.maskStack[this.maskStack.length - 1]), n._target = e, n.type) {
      case ue.SCISSOR:
        this.maskStack.push(n)
        this.renderer.scissor.push(n)
        break
      case ue.STENCIL:
        this.maskStack.push(n)
        this.renderer.stencil.push(n)
        break
      case ue.SPRITE:
        n.copyCountersOrReset(null)
        this.pushSpriteMask(n)
        this.maskStack.push(n)
    }
  }
  t.prototype.pop = function (e) {
    var t = this.maskStack.pop()
    if (t && t._target === e) {
      switch (t.type) {
        case ue.SCISSOR:
          this.renderer.scissor.pop()
          break
        case ue.STENCIL:
          this.renderer.stencil.pop(t.maskObject)
          break
        case ue.SPRITE:
          this.popSpriteMask()
      }
      t.reset()
      if (t.pooled) {
        this.maskDataPool.push(t)
      }
    }
  }
  t.prototype.detect = function (e) {
    var /* [auto-meaningful-name] */e$maskObject = e.maskObject
    if (e$maskObject.isSprite) {
      e.type = ue.SPRITE
    } else if (e.type = ue.STENCIL, this.enableScissor && e$maskObject.isFastRect && e$maskObject.isFastRect()) {
      var /* [auto-meaningful-name] */e$maskObject$worldTransform = e$maskObject.worldTransform
      var r = Math.atan2(e$maskObject$worldTransform.b, e$maskObject$worldTransform.a)
      var i = Math.atan2(e$maskObject$worldTransform.d, e$maskObject$worldTransform.c)
      r = Math.round(r * (180 / Math.PI) * 100)
      i = ((i = Math.round(i * (180 / Math.PI) * 100) - r) % 18e3 + 18e3) % 18e3
      if (0 === (r = (r % 9e3 + 9e3) % 9e3) && 9e3 === i) {
        e.type = ue.SCISSOR
      }
    }
  }
  t.prototype.pushSpriteMask = function (e) {
    var /* [auto-meaningful-name] */e$maskObject = e.maskObject
    var /* [auto-meaningful-name] */e$_target = e._target
    var r = this.alphaMaskPool[this.alphaMaskIndex]
    if (!r) {
      r = this.alphaMaskPool[this.alphaMaskIndex] = [new wr(e$maskObject)]
    }
    r[0].resolution = this.renderer.resolution
    r[0].maskSprite = e$maskObject
    var /* [auto-meaningful-name] */e$_target$filterArea = e$_target.filterArea
    e$_target.filterArea = e$maskObject.getBounds(true)
    this.renderer.filter.push(e$_target, r)
    e$_target.filterArea = e$_target$filterArea
    this.alphaMaskIndex++
  }
  t.prototype.popSpriteMask = function () {
    this.renderer.filter.pop()
    this.alphaMaskIndex--
  }
  return t
}(ln)
var xr = function (e) {
  function t(t) {
    var n = e.call(this, t) || this
    n.maskStack = []
    n.glConst = 0
    return n
  }
  Xt(t, e)
  t.prototype.getStackLength = function () {
    return this.maskStack.length
  }
  t.prototype.setMaskStack = function (e) {
    var /* [auto-meaningful-name] */this$renderer$gl = this.renderer.gl
    var n = this.getStackLength()
    this.maskStack = e
    var r = this.getStackLength()
    if (r !== n) {
      if (0 === r) {
        this$renderer$gl.disable(this.glConst)
      } else {
        this$renderer$gl.enable(this.glConst)
        this._useCurrent()
      }
    }
  }
  t.prototype._useCurrent = function () {}
  t.prototype.destroy = function () {
    e.prototype.destroy.call(this)
    this.maskStack = null
  }
  return t
}(ln)
var Cr = function (e) {
  function t(t) {
    var n = e.call(this, t) || this
    n.glConst = WebGLRenderingContext.SCISSOR_TEST
    return n
  }
  Xt(t, e)
  t.prototype.getStackLength = function () {
    var e = this.maskStack[this.maskStack.length - 1]
    return e ? e._scissorCounter : 0
  }
  t.prototype.push = function (e) {
    var /* [auto-meaningful-name] */e$maskObject = e.maskObject
    e$maskObject.renderable = true
    var /* [auto-meaningful-name] */e$_scissorRect = e._scissorRect
    var r = e$maskObject.getBounds(true)
    var /* [auto-meaningful-name] */this$renderer$gl = this.renderer.gl
    e$maskObject.renderable = false
    if (e$_scissorRect) {
      r.fit(e$_scissorRect)
    } else {
      this$renderer$gl.enable(this$renderer$gl.SCISSOR_TEST)
    }
    e._scissorCounter++
    e._scissorRect = r
    this._useCurrent()
  }
  t.prototype.pop = function () {
    var /* [auto-meaningful-name] */this$renderer$gl = this.renderer.gl
    if (this.getStackLength() > 0) {
      this._useCurrent()
    } else {
      this$renderer$gl.disable(this$renderer$gl.SCISSOR_TEST)
    }
  }
  t.prototype._useCurrent = function () {
    var /* [auto-meaningful-name] */this$maskStackThis$maskStack$length1$_scissorRect = this.maskStack[this.maskStack.length - 1]._scissorRect
    var /* [auto-meaningful-name] */this$renderer$renderTexture$current = this.renderer.renderTexture.current
    var /* [auto-meaningful-name] */this$renderer$projection = this.renderer.projection
    var /* [auto-meaningful-name] */this$renderer$projection$transform = this$renderer$projection.transform
    var /* [auto-meaningful-name] */this$renderer$projection$sourceFrame = this$renderer$projection.sourceFrame
    var /* [auto-meaningful-name] */this$renderer$projection$destinationFrame = this$renderer$projection.destinationFrame
    var a = this$renderer$renderTexture$current ? this$renderer$renderTexture$current.resolution : this.renderer.resolution
    var s = this$renderer$projection$destinationFrame.width / this$renderer$projection$sourceFrame.width
    var c = this$renderer$projection$destinationFrame.height / this$renderer$projection$sourceFrame.height
    var u = ((this$maskStackThis$maskStack$length1$_scissorRect.x - this$renderer$projection$sourceFrame.x) * s + this$renderer$projection$destinationFrame.x) * a
    var l = ((this$maskStackThis$maskStack$length1$_scissorRect.y - this$renderer$projection$sourceFrame.y) * c + this$renderer$projection$destinationFrame.y) * a
    var f = this$maskStackThis$maskStack$length1$_scissorRect.width * s * a
    var d = this$maskStackThis$maskStack$length1$_scissorRect.height * c * a
    if (this$renderer$projection$transform) {
      u += this$renderer$projection$transform.tx * a
      l += this$renderer$projection$transform.ty * a
    }
    if (!this$renderer$renderTexture$current) {
      l = this.renderer.height - d - l
    }
    this.renderer.gl.scissor(u, l, f, d)
  }
  return t
}(xr)
var Or = function (e) {
  function t(t) {
    var n = e.call(this, t) || this
    n.glConst = WebGLRenderingContext.STENCIL_TEST
    return n
  }
  Xt(t, e)
  t.prototype.getStackLength = function () {
    var e = this.maskStack[this.maskStack.length - 1]
    return e ? e._stencilCounter : 0
  }
  t.prototype.push = function (e) {
    var /* [auto-meaningful-name] */e$maskObject = e.maskObject
    var /* [auto-meaningful-name] */this$renderer$gl = this.renderer.gl
    var /* [auto-meaningful-name] */e$_stencilCounter = e._stencilCounter
    if (0 === e$_stencilCounter) {
      this.renderer.framebuffer.forceStencil()
      this$renderer$gl.enable(this$renderer$gl.STENCIL_TEST)
    }
    e._stencilCounter++
    this$renderer$gl.colorMask(false, false, false, false)
    this$renderer$gl.stencilFunc(this$renderer$gl.EQUAL, e$_stencilCounter, this._getBitwiseMask())
    this$renderer$gl.stencilOp(this$renderer$gl.KEEP, this$renderer$gl.KEEP, this$renderer$gl.INCR)
    e$maskObject.renderable = true
    e$maskObject.render(this.renderer)
    this.renderer.batch.flush()
    this.renderer.framebuffer.blit()
    e$maskObject.renderable = false
    this._useCurrent()
  }
  t.prototype.pop = function (e) {
    var /* [auto-meaningful-name] */this$renderer$gl = this.renderer.gl
    if (0 === this.getStackLength()) {
      this$renderer$gl.disable(this$renderer$gl.STENCIL_TEST)
      this$renderer$gl.clear(this$renderer$gl.STENCIL_BUFFER_BIT)
      this$renderer$gl.clearStencil(0)
    } else {
      this$renderer$gl.colorMask(false, false, false, false)
      this$renderer$gl.stencilOp(this$renderer$gl.KEEP, this$renderer$gl.KEEP, this$renderer$gl.DECR)
      e.renderable = true
      e.render(this.renderer)
      this.renderer.batch.flush()
      e.renderable = false
      this._useCurrent()
    }
  }
  t.prototype._useCurrent = function () {
    var /* [auto-meaningful-name] */this$renderer$gl = this.renderer.gl
    this$renderer$gl.colorMask(true, true, true, true)
    this$renderer$gl.stencilFunc(this$renderer$gl.EQUAL, this.getStackLength(), this._getBitwiseMask())
    this$renderer$gl.stencilOp(this$renderer$gl.KEEP, this$renderer$gl.KEEP, this$renderer$gl.KEEP)
  }
  t.prototype._getBitwiseMask = function () {
    return (1 << this.getStackLength()) - 1
  }
  return t
}(xr)
var kr = function (e) {
  function t(t) {
    var n = e.call(this, t) || this
    n.destinationFrame = null
    n.sourceFrame = null
    n.defaultFrame = null
    n.projectionMatrix = new _t()
    n.transform = null
    return n
  }
  Xt(t, e)
  t.prototype.update = function (e, t, n, r) {
    this.destinationFrame = e || this.destinationFrame || this.defaultFrame
    this.sourceFrame = t || this.sourceFrame || e
    this.calculateProjection(this.destinationFrame, this.sourceFrame, n, r)
    if (this.transform) {
      this.projectionMatrix.append(this.transform)
    }
    var /* [auto-meaningful-name] */this$renderer = this.renderer
    this$renderer.globalUniforms.uniforms.projectionMatrix = this.projectionMatrix
    this$renderer.globalUniforms.update()
    if (this$renderer.shader.shader) {
      this$renderer.shader.syncUniformGroup(this$renderer.shader.shader.uniforms.globals)
    }
  }
  t.prototype.calculateProjection = function (e, t, n, r) {
    var /* [auto-meaningful-name] */this$projectionMatrix = this.projectionMatrix
    var o = r ? -1 : 1
    this$projectionMatrix.identity()
    this$projectionMatrix.a = 1 / t.width * 2
    this$projectionMatrix.d = o * (1 / t.height * 2)
    this$projectionMatrix.tx = -1 - t.x * this$projectionMatrix.a
    this$projectionMatrix.ty = -o - t.y * this$projectionMatrix.d
  }
  t.prototype.setTransform = function (e) {}
  return t
}(ln)
var Sr = new ct()
var Tr = new ct()
var Br = function (e) {
  function t(t) {
    var n = e.call(this, t) || this
    n.clearColor = t._backgroundColorRgba
    n.defaultMaskStack = []
    n.current = null
    n.sourceFrame = new ct()
    n.destinationFrame = new ct()
    n.viewportFrame = new ct()
    return n
  }
  Xt(t, e)
  t.prototype.bind = function (e, t, n) {
    if (undefined === e) {
      e = null
    }
    var /* [auto-meaningful-name] */e$baseTexture
    var /* [auto-meaningful-name] */e$baseTexture$framebuffer
    var o
    var /* [auto-meaningful-name] */this$renderer = this.renderer
    this.current = e
    if (e) {
      o = (e$baseTexture = e.baseTexture).resolution
      if (!t) {
        Sr.width = e.frame.width
        Sr.height = e.frame.height
        t = Sr
      }
      if (!n) {
        Tr.x = e.frame.x
        Tr.y = e.frame.y
        Tr.width = t.width
        Tr.height = t.height
        n = Tr
      }
      e$baseTexture$framebuffer = e$baseTexture.framebuffer
    } else {
      o = this$renderer.resolution
      if (!t) {
        Sr.width = this$renderer.screen.width
        Sr.height = this$renderer.screen.height
        t = Sr
      }
      if (!n) {
        (n = Sr).width = t.width
        n.height = t.height
      }
    }
    var /* [auto-meaningful-name] */this$viewportFrame = this.viewportFrame
    this$viewportFrame.x = n.x * o
    this$viewportFrame.y = n.y * o
    this$viewportFrame.width = n.width * o
    this$viewportFrame.height = n.height * o
    if (!e) {
      this$viewportFrame.y = this$renderer.view.height - (this$viewportFrame.y + this$viewportFrame.height)
    }
    this.renderer.framebuffer.bind(e$baseTexture$framebuffer, this$viewportFrame)
    this.renderer.projection.update(n, t, o, !e$baseTexture$framebuffer)
    if (e) {
      this.renderer.mask.setMaskStack(e$baseTexture.maskStack)
    } else {
      this.renderer.mask.setMaskStack(this.defaultMaskStack)
    }
    this.sourceFrame.copyFrom(t)
    this.destinationFrame.copyFrom(n)
  }
  t.prototype.clear = function (e, t) {
    e = this.current ? e || this.current.baseTexture.clearColor : e || this.clearColor
    var /* [auto-meaningful-name] */this$destinationFrame = this.destinationFrame
    var r = this.current ? this.current.baseTexture : this.renderer.screen
    var i = this$destinationFrame.width !== r.width || this$destinationFrame.height !== r.height
    if (i) {
      var /* [auto-meaningful-name] */this$viewportFrame = this.viewportFrame
      var /* [auto-meaningful-name] */this$viewportFrame$x = this$viewportFrame.x
      var /* [auto-meaningful-name] */this$viewportFrame$y = this$viewportFrame.y
      var /* [auto-meaningful-name] */this$viewportFrame$width = this$viewportFrame.width
      var /* [auto-meaningful-name] */this$viewportFrame$height = this$viewportFrame.height
      this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST)
      this.renderer.gl.scissor(this$viewportFrame$x, this$viewportFrame$y, this$viewportFrame$width, this$viewportFrame$height)
    }
    this.renderer.framebuffer.clear(e[0], e[1], e[2], e[3], t)
    if (i) {
      this.renderer.scissor.pop()
    }
  }
  t.prototype.resize = function () {
    this.bind(null)
  }
  t.prototype.reset = function () {
    this.bind(null)
  }
  return t
}(ln)
var Dr = function () {
  function e(e, t) {
    this.program = e
    this.uniformData = t
    this.uniformGroups = {}
  }
  e.prototype.destroy = function () {
    this.uniformData = null
    this.uniformGroups = null
    this.program = null
  }
  return e
}()
var Ir = 0
var Rr = {
  textureCount: 0
}
var Fr = function (e) {
  function t(t) {
    var n = e.call(this, t) || this
    n.destroyed = false
    n.systemCheck()
    n.gl = null
    n.shader = null
    n.program = null
    n.cache = {}
    n.id = Ir++
    return n
  }
  Xt(t, e)
  t.prototype.systemCheck = function () {
    if (!function () {
      if ("boolean" === typeof fr) {
        return fr
      }
      try {
        var e = new Function("param1", "param2", "param3", "return param1[param2] === param3;")
        fr = true === e({
          a: "b"
        }, "a", "b")
      } catch (t) {
        fr = false
      }
      return fr
    }()) {
      throw new Error("Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.")
    }
  }
  t.prototype.contextChange = function (e) {
    this.gl = e
    this.reset()
  }
  t.prototype.bind = function (e, t) {
    e.uniforms.globals = this.renderer.globalUniforms
    var /* [auto-meaningful-name] */e$program = e.program
    var r = e$program.glPrograms[this.renderer.CONTEXT_UID] || this.generateShader(e)
    this.shader = e
    if (this.program !== e$program) {
      this.program = e$program
      this.gl.useProgram(r.program)
    }
    if (!t) {
      Rr.textureCount = 0
      this.syncUniformGroup(e.uniformGroup, Rr)
    }
    return r
  }
  t.prototype.setUniforms = function (e) {
    var /* [auto-meaningful-name] */this$shader$program = this.shader.program
    var n = this$shader$program.glPrograms[this.renderer.CONTEXT_UID]
    this$shader$program.syncUniforms(n.uniformData, e, this.renderer)
  }
  t.prototype.syncUniformGroup = function (e, t) {
    var n = this.getglProgram()
    if (!(e.static && e.dirtyId === n.uniformGroups[e.id])) {
      n.uniformGroups[e.id] = e.dirtyId
      this.syncUniforms(e, n, t)
    }
  }
  t.prototype.syncUniforms = function (e, t, n) {
    (e.syncUniforms[this.shader.program.id] || this.createSyncGroups(e))(t.uniformData, e.uniforms, this.renderer, n)
  }
  t.prototype.createSyncGroups = function (e) {
    var t = this.getSignature(e, this.shader.program.uniformData)
    if (!this.cache[t]) {
      this.cache[t] = function (e, t) {
        var n = ["\n        var v = null;\n        var cv = null\n        var t = 0;\n        var gl = renderer.gl\n    "]
        for (var r in e.uniforms) {
          var i = t[r]
          if (i) {
            for (var o = e.uniforms[r], a = false, s = 0; s < cr.length; s++) {
              if (cr[s].test(i, o)) {
                n.push(cr[s].code(r, o))
                a = true
                break
              }
            }
            if (!a) {
              var c = (1 === i.size ? ur : lr)[i.type].replace("location", "ud[\"" + r + "\"].location")
              n.push("\n            cv = ud[\"" + r + "\"].value;\n            v = uv[\"" + r + "\"];\n            " + c + ";")
            }
          } else if (e.uniforms[r].group) {
            n.push("\n                    renderer.shader.syncUniformGroup(uv[\"" + r + "\"], syncData);\n                ")
          }
        }
        return new Function("ud", "uv", "renderer", "syncData", n.join("\n"))
      }(e, this.shader.program.uniformData)
    }
    e.syncUniforms[this.shader.program.id] = this.cache[t]
    return e.syncUniforms[this.shader.program.id]
  }
  t.prototype.getSignature = function (e, t) {
    var /* [auto-meaningful-name] */e$uniforms = e.uniforms
    var r = []
    for (var i in e$uniforms) {
      r.push(i)
      if (t[i]) {
        r.push(t[i].type)
      }
    }
    return r.join("-")
  }
  t.prototype.getglProgram = function () {
    return this.shader ? this.shader.program.glPrograms[this.renderer.CONTEXT_UID] : null
  }
  t.prototype.generateShader = function (e) {
    var /* [auto-meaningful-name] */this$gl = this.gl
    var /* [auto-meaningful-name] */e$program = e.program
    var r = {}
    for (var i in e$program.attributeData) r[i] = e$program.attributeData[i].location
    var o = Yn(this$gl, e$program.vertexSrc, e$program.fragmentSrc, r)
    var a = {}
    for (var i in e$program.uniformData) {
      var s = e$program.uniformData[i]
      a[i] = {
        location: this$gl.getUniformLocation(o, i),
        value: $n(s.type, s.size)
      }
    }
    var c = new Dr(o, a)
    e$program.glPrograms[this.renderer.CONTEXT_UID] = c
    return c
  }
  t.prototype.reset = function () {
    this.program = null
    this.shader = null
  }
  t.prototype.destroy = function () {
    this.destroyed = true
  }
  return t
}(ln)
var Pr = function (e) {
  function t(t) {
    var n = e.call(this, t) || this
    n.gl = null
    n.stateId = 0
    n.polygonOffset = 0
    n.blendMode = q.NONE
    n._blendEq = false
    n.map = []
    n.map[0] = n.setBlend
    n.map[1] = n.setOffset
    n.map[2] = n.setCullFace
    n.map[3] = n.setDepthTest
    n.map[4] = n.setFrontFace
    n.map[5] = n.setDepthMask
    n.checks = []
    n.defaultState = new vr()
    n.defaultState.blend = true
    return n
  }
  Xt(t, e)
  t.prototype.contextChange = function (e) {
    this.gl = e
    this.blendModes = function (e, t) {
      if (undefined === t) {
        t = []
      }
      t[q.NORMAL] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]
      t[q.ADD] = [e.ONE, e.ONE]
      t[q.MULTIPLY] = [e.DST_COLOR, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA]
      t[q.SCREEN] = [e.ONE, e.ONE_MINUS_SRC_COLOR, e.ONE, e.ONE_MINUS_SRC_ALPHA]
      t[q.OVERLAY] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]
      t[q.DARKEN] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]
      t[q.LIGHTEN] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]
      t[q.COLOR_DODGE] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]
      t[q.COLOR_BURN] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]
      t[q.HARD_LIGHT] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]
      t[q.SOFT_LIGHT] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]
      t[q.DIFFERENCE] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]
      t[q.EXCLUSION] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]
      t[q.HUE] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]
      t[q.SATURATION] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]
      t[q.COLOR] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]
      t[q.LUMINOSITY] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]
      t[q.NONE] = [0, 0]
      t[q.NORMAL_NPM] = [e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA]
      t[q.ADD_NPM] = [e.SRC_ALPHA, e.ONE, e.ONE, e.ONE]
      t[q.SCREEN_NPM] = [e.SRC_ALPHA, e.ONE_MINUS_SRC_COLOR, e.ONE, e.ONE_MINUS_SRC_ALPHA]
      t[q.SRC_IN] = [e.DST_ALPHA, e.ZERO]
      t[q.SRC_OUT] = [e.ONE_MINUS_DST_ALPHA, e.ZERO]
      t[q.SRC_ATOP] = [e.DST_ALPHA, e.ONE_MINUS_SRC_ALPHA]
      t[q.DST_OVER] = [e.ONE_MINUS_DST_ALPHA, e.ONE]
      t[q.DST_IN] = [e.ZERO, e.SRC_ALPHA]
      t[q.DST_OUT] = [e.ZERO, e.ONE_MINUS_SRC_ALPHA]
      t[q.DST_ATOP] = [e.ONE_MINUS_DST_ALPHA, e.SRC_ALPHA]
      t[q.XOR] = [e.ONE_MINUS_DST_ALPHA, e.ONE_MINUS_SRC_ALPHA]
      t[q.SUBTRACT] = [e.ONE, e.ONE, e.ONE, e.ONE, e.FUNC_REVERSE_SUBTRACT, e.FUNC_ADD]
      return t
    }(e)
    this.set(this.defaultState)
    this.reset()
  }
  t.prototype.set = function (e) {
    e = e || this.defaultState
    if (this.stateId !== e.data) {
      for (var t = this.stateId ^ e.data, n = 0; t;) {
        if (1 & t) {
          this.map[n].call(this, !!(e.data & 1 << n))
        }
        t >>= 1
        n++
      }
      this.stateId = e.data
    }
    for (n = 0; n < this.checks.length; n++) {
      this.checks[n](this, e)
    }
  }
  t.prototype.forceState = function (e) {
    e = e || this.defaultState
    for (var t = 0; t < this.map.length; t++) {
      this.map[t].call(this, !!(e.data & 1 << t))
    }
    for (t = 0; t < this.checks.length; t++) {
      this.checks[t](this, e)
    }
    this.stateId = e.data
  }
  t.prototype.setBlend = function (e) {
    this.updateCheck(t.checkBlendMode, e)
    this.gl[e ? "enable" : "disable"](this.gl.BLEND)
  }
  t.prototype.setOffset = function (e) {
    this.updateCheck(t.checkPolygonOffset, e)
    this.gl[e ? "enable" : "disable"](this.gl.POLYGON_OFFSET_FILL)
  }
  t.prototype.setDepthTest = function (e) {
    this.gl[e ? "enable" : "disable"](this.gl.DEPTH_TEST)
  }
  t.prototype.setDepthMask = function (e) {
    this.gl.depthMask(e)
  }
  t.prototype.setCullFace = function (e) {
    this.gl[e ? "enable" : "disable"](this.gl.CULL_FACE)
  }
  t.prototype.setFrontFace = function (e) {
    this.gl.frontFace(this.gl[e ? "CW" : "CCW"])
  }
  t.prototype.setBlendMode = function (e) {
    if (e !== this.blendMode) {
      this.blendMode = e
      var t = this.blendModes[e]
      var /* [auto-meaningful-name] */this$gl = this.gl
      if (2 === t.length) {
        this$gl.blendFunc(t[0], t[1])
      } else {
        this$gl.blendFuncSeparate(t[0], t[1], t[2], t[3])
      }
      if (6 === t.length) {
        this._blendEq = true
        this$gl.blendEquationSeparate(t[4], t[5])
      } else {
        if (this._blendEq) {
          this._blendEq = false
          this$gl.blendEquationSeparate(this$gl.FUNC_ADD, this$gl.FUNC_ADD)
        }
      }
    }
  }
  t.prototype.setPolygonOffset = function (e, t) {
    this.gl.polygonOffset(e, t)
  }
  t.prototype.reset = function () {
    this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, false)
    this.forceState(this.defaultState)
    this._blendEq = true
    this.blendMode = -1
    this.setBlendMode(0)
  }
  t.prototype.updateCheck = function (e, t) {
    var n = this.checks.indexOf(e)
    if (t && -1 === n) {
      this.checks.push(e)
    } else {
      if (!(t || -1 === n)) {
        this.checks.splice(n, 1)
      }
    }
  }
  t.checkBlendMode = function (e, t) {
    e.setBlendMode(t.blendMode)
  }
  t.checkPolygonOffset = function (e, t) {
    e.setPolygonOffset(1, t.polygonOffset)
  }
  return t
}(ln)
var Nr = function (e) {
  function t(t) {
    var n = e.call(this, t) || this
    n.count = 0
    n.checkCount = 0
    n.maxIdle = fe.GC_MAX_IDLE
    n.checkCountMax = fe.GC_MAX_CHECK_COUNT
    n.mode = fe.GC_MODE
    return n
  }
  Xt(t, e)
  t.prototype.postrender = function () {
    if (this.renderer.renderingToScreen) {
      this.count++
      if (this.mode !== se.MANUAL) {
        this.checkCount++
        if (this.checkCount > this.checkCountMax) {
          this.checkCount = 0
          this.run()
        }
      }
    }
  }
  t.prototype.run = function () {
    for (var /* [auto-meaningful-name] */this$renderer$texture = this.renderer.texture, /* [auto-meaningful-name] */this$renderer$texture$managedTextures = this$renderer$texture.managedTextures, n = false, r = 0; r < this$renderer$texture$managedTextures.length; r++) {
      var i = this$renderer$texture$managedTextures[r]
      if (!i.framebuffer && this.count - i.touched > this.maxIdle) {
        this$renderer$texture.destroyTexture(i, true)
        this$renderer$texture$managedTextures[r] = null
        n = true
      }
    }
    if (n) {
      var o = 0
      for (r = 0; r < this$renderer$texture$managedTextures.length; r++) {
        if (null !== this$renderer$texture$managedTextures[r]) {
          this$renderer$texture$managedTextures[o++] = this$renderer$texture$managedTextures[r]
        }
      }
      this$renderer$texture$managedTextures.length = o
    }
  }
  t.prototype.unload = function (e) {
    var /* [auto-meaningful-name] */this$renderer$texture = this.renderer.texture
    var /* [auto-meaningful-name] */e$_texture = e._texture
    if (e$_texture && !e$_texture.framebuffer) {
      this$renderer$texture.destroyTexture(e$_texture)
    }
    for (var r = e.children.length - 1; r >= 0; r--) {
      this.unload(e.children[r])
    }
  }
  return t
}(ln)
var Mr = function (e) {
  this.texture = e
  this.width = -1
  this.height = -1
  this.dirtyId = -1
  this.dirtyStyleId = -1
  this.mipmap = false
  this.wrapMode = 33071
  this.type = 6408
  this.internalFormat = 5121
  this.samplerType = 0
}
var Lr = function (e) {
  function t(t) {
    var n = e.call(this, t) || this
    n.boundTextures = []
    n.currentLocation = -1
    n.managedTextures = []
    n._unknownBoundTextures = false
    n.unknownTexture = new Jt()
    n.hasIntegerTextures = false
    return n
  }
  Xt(t, e)
  t.prototype.contextChange = function () {
    var e = this.gl = this.renderer.gl
    this.CONTEXT_UID = this.renderer.CONTEXT_UID
    this.webGLVersion = this.renderer.context.webGLVersion
    var t = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)
    this.boundTextures.length = t
    for (var n = 0; n < t; n++) {
      this.boundTextures[n] = null
    }
    this.emptyTextures = {}
    var r = new Mr(e.createTexture())
    e.bindTexture(e.TEXTURE_2D, r.texture)
    e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, new Uint8Array(4))
    this.emptyTextures[e.TEXTURE_2D] = r
    this.emptyTextures[e.TEXTURE_CUBE_MAP] = new Mr(e.createTexture())
    e.bindTexture(e.TEXTURE_CUBE_MAP, this.emptyTextures[e.TEXTURE_CUBE_MAP].texture)
    for (n = 0; n < 6; n++) {
      e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + n, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, null)
    }
    e.texParameteri(e.TEXTURE_CUBE_MAP, e.TEXTURE_MAG_FILTER, e.LINEAR)
    e.texParameteri(e.TEXTURE_CUBE_MAP, e.TEXTURE_MIN_FILTER, e.LINEAR)
    for (n = 0; n < this.boundTextures.length; n++) {
      this.bind(null, n)
    }
  }
  t.prototype.bind = function (e, t) {
    if (undefined === t) {
      t = 0
    }
    var /* [auto-meaningful-name] */this$gl = this.gl
    if (e) {
      if ((e = e.castToBaseTexture()).parentTextureArray) {
        return
      }
      if (e.valid) {
        e.touched = this.renderer.textureGC.count
        var r = e._glTextures[this.CONTEXT_UID] || this.initTexture(e)
        if (this.boundTextures[t] !== e) {
          if (this.currentLocation !== t) {
            this.currentLocation = t
            this$gl.activeTexture(this$gl.TEXTURE0 + t)
          }
          this$gl.bindTexture(e.target, r.texture)
        }
        if (r.dirtyId !== e.dirtyId) {
          if (this.currentLocation !== t) {
            this.currentLocation = t
            this$gl.activeTexture(this$gl.TEXTURE0 + t)
          }
          this.updateTexture(e)
        }
        this.boundTextures[t] = e
      }
    } else {
      if (this.currentLocation !== t) {
        this.currentLocation = t
        this$gl.activeTexture(this$gl.TEXTURE0 + t)
      }
      this$gl.bindTexture(this$gl.TEXTURE_2D, this.emptyTextures[this$gl.TEXTURE_2D].texture)
      this.boundTextures[t] = null
    }
  }
  t.prototype.reset = function () {
    this._unknownBoundTextures = true
    this.hasIntegerTextures = false
    this.currentLocation = -1
    for (var e = 0; e < this.boundTextures.length; e++) {
      this.boundTextures[e] = this.unknownTexture
    }
  }
  t.prototype.unbind = function (e) {
    var /* [auto-meaningful-name] */this$gl = this.gl
    var /* [auto-meaningful-name] */this$boundTextures = this.boundTextures
    if (this._unknownBoundTextures) {
      this._unknownBoundTextures = false
      for (var r = 0; r < this$boundTextures.length; r++) {
        if (this$boundTextures[r] === this.unknownTexture) {
          this.bind(null, r)
        }
      }
    }
    for (r = 0; r < this$boundTextures.length; r++) {
      if (this$boundTextures[r] === e) {
        if (this.currentLocation !== r) {
          this$gl.activeTexture(this$gl.TEXTURE0 + r)
          this.currentLocation = r
        }
        this$gl.bindTexture(e.target, this.emptyTextures[e.target].texture)
        this$boundTextures[r] = null
      }
    }
  }
  t.prototype.ensureSamplerType = function (e) {
    var /* [auto-meaningful-name] */this$boundTextures = this.boundTextures
    var /* [auto-meaningful-name] */this$hasIntegerTextures = this.hasIntegerTextures
    var /* [auto-meaningful-name] */this$CONTEXT_UID = this.CONTEXT_UID
    if (this$hasIntegerTextures) {
      for (var i = e - 1; i >= 0; --i) {
        var o = this$boundTextures[i]
        if (o) {
          if (o._glTextures[this$CONTEXT_UID].samplerType !== te.FLOAT) {
            this.renderer.texture.unbind(o)
          }
        }
      }
    }
  }
  t.prototype.initTexture = function (e) {
    var t = new Mr(this.gl.createTexture())
    t.dirtyId = -1
    e._glTextures[this.CONTEXT_UID] = t
    this.managedTextures.push(e)
    e.on("dispose", this.destroyTexture, this)
    return t
  }
  t.prototype.initTextureType = function (e, t) {
    t.internalFormat = e.format
    t.type = e.type
    if (2 === this.webGLVersion) {
      var /* [auto-meaningful-name] */this$renderer$gl = this.renderer.gl
      if (e.type === this$renderer$gl.FLOAT && e.format === this$renderer$gl.RGBA) {
        t.internalFormat = this$renderer$gl.RGBA32F
      }
      if (e.type === ee.HALF_FLOAT) {
        t.type = this$renderer$gl.HALF_FLOAT
      }
      if (t.type === this$renderer$gl.HALF_FLOAT && e.format === this$renderer$gl.RGBA) {
        t.internalFormat = this$renderer$gl.RGBA16F
      }
    }
  }
  t.prototype.updateTexture = function (e) {
    var t = e._glTextures[this.CONTEXT_UID]
    if (t) {
      var /* [auto-meaningful-name] */this$renderer = this.renderer
      this.initTextureType(e, t)
      if (e.resource && e.resource.upload(this$renderer, e, t)) {
        if (t.samplerType !== te.FLOAT) {
          this.hasIntegerTextures = true
        }
      } else {
        var /* [auto-meaningful-name] */e$realWidth = e.realWidth
        var /* [auto-meaningful-name] */e$realHeight = e.realHeight
        var /* [auto-meaningful-name] */this$renderer$gl = this$renderer.gl
        if (t.width !== e$realWidth || t.height !== e$realHeight || t.dirtyId < 0) {
          t.width = e$realWidth
          t.height = e$realHeight
          this$renderer$gl.texImage2D(e.target, 0, t.internalFormat, e$realWidth, e$realHeight, 0, e.format, t.type, null)
        }
      }
      if (e.dirtyStyleId !== t.dirtyStyleId) {
        this.updateTextureStyle(e)
      }
      t.dirtyId = e.dirtyId
    }
  }
  t.prototype.destroyTexture = function (e, t) {
    var /* [auto-meaningful-name] */this$gl = this.gl
    if ((e = e.castToBaseTexture())._glTextures[this.CONTEXT_UID] && (this.unbind(e), this$gl.deleteTexture(e._glTextures[this.CONTEXT_UID].texture), e.off("dispose", this.destroyTexture, this), delete e._glTextures[this.CONTEXT_UID], !t)) {
      var r = this.managedTextures.indexOf(e)
      if (-1 !== r) {
        Ue(this.managedTextures, r, 1)
      }
    }
  }
  t.prototype.updateTextureStyle = function (e) {
    var t = e._glTextures[this.CONTEXT_UID]
    if (t) {
      if (e.mipmap !== ie.POW2 && 2 === this.webGLVersion || e.isPowerOfTwo) {
        t.mipmap = e.mipmap >= 1
      } else {
        t.mipmap = false
      }
      if (2 === this.webGLVersion || e.isPowerOfTwo) {
        t.wrapMode = e.wrapMode
      } else {
        t.wrapMode = re.CLAMP
      }
      if (!(e.resource && e.resource.style(this.renderer, e, t))) {
        this.setStyle(e, t)
      }
      t.dirtyStyleId = e.dirtyStyleId
    }
  }
  t.prototype.setStyle = function (e, t) {
    var /* [auto-meaningful-name] */this$gl = this.gl
    if (t.mipmap && e.mipmap !== ie.ON_MANUAL) {
      this$gl.generateMipmap(e.target)
    }
    this$gl.texParameteri(e.target, this$gl.TEXTURE_WRAP_S, t.wrapMode)
    this$gl.texParameteri(e.target, this$gl.TEXTURE_WRAP_T, t.wrapMode)
    if (t.mipmap) {
      this$gl.texParameteri(e.target, this$gl.TEXTURE_MIN_FILTER, e.scaleMode === ne.LINEAR ? this$gl.LINEAR_MIPMAP_LINEAR : this$gl.NEAREST_MIPMAP_NEAREST)
      var /* [auto-meaningful-name] */this$renderer$context$extensions$anisotropicFiltering = this.renderer.context.extensions.anisotropicFiltering
      if (this$renderer$context$extensions$anisotropicFiltering && e.anisotropicLevel > 0 && e.scaleMode === ne.LINEAR) {
        var i = Math.min(e.anisotropicLevel, this$gl.getParameter(this$renderer$context$extensions$anisotropicFiltering.MAX_TEXTURE_MAX_ANISOTROPY_EXT))
        this$gl.texParameterf(e.target, this$renderer$context$extensions$anisotropicFiltering.TEXTURE_MAX_ANISOTROPY_EXT, i)
      }
    } else {
      this$gl.texParameteri(e.target, this$gl.TEXTURE_MIN_FILTER, e.scaleMode === ne.LINEAR ? this$gl.LINEAR : this$gl.NEAREST)
    }
    this$gl.texParameteri(e.target, this$gl.TEXTURE_MAG_FILTER, e.scaleMode === ne.LINEAR ? this$gl.LINEAR : this$gl.NEAREST)
  }
  return t
}(ln)
var jr = {
  __proto__: null,
  FilterSystem: Nn,
  BatchSystem: Ln,
  ContextSystem: Un,
  FramebufferSystem: Gn,
  GeometrySystem: Wn,
  MaskSystem: Er,
  ScissorSystem: Cr,
  StencilSystem: Or,
  ProjectionSystem: kr,
  RenderTextureSystem: Br,
  ShaderSystem: Fr,
  StateSystem: Pr,
  TextureGCSystem: Nr,
  TextureSystem: Lr
}
var Ur = new _t()
var Hr = function (e) {
  function t(t, n) {
    if (undefined === t) {
      t = X.UNKNOWN
    }
    var r = e.call(this) || this
    n = Object.assign({}, fe.RENDER_OPTIONS, n)
    r.options = n
    r.type = t
    r.screen = new ct(0, 0, n.width, n.height)
    r.view = n.view || document.createElement("canvas")
    r.resolution = n.resolution || fe.RESOLUTION
    r.useContextAlpha = n.useContextAlpha
    r.autoDensity = !!n.autoDensity
    r.preserveDrawingBuffer = n.preserveDrawingBuffer
    r.clearBeforeRender = n.clearBeforeRender
    r._backgroundColor = 0
    r._backgroundColorRgba = [0, 0, 0, 1]
    r._backgroundColorString = "#000000"
    r.backgroundColor = n.backgroundColor || r._backgroundColor
    r.backgroundAlpha = n.backgroundAlpha
    if (undefined !== n.transparent) {
      Qe("6.0.0", "Option transparent is deprecated, please use backgroundAlpha instead.")
      r.useContextAlpha = n.transparent
      r.backgroundAlpha = n.transparent ? 0 : 1
    }
    r._lastObjectRendered = null
    r.plugins = {}
    return r
  }
  Xt(t, e)
  t.prototype.initPlugins = function (e) {
    for (var t in e) this.plugins[t] = new e[t](this)
  }
  Object.defineProperty(t.prototype, "width", {
    get: function () {
      return this.view.width
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "height", {
    get: function () {
      return this.view.height
    },
    enumerable: false,
    configurable: true
  })
  t.prototype.resize = function (e, t) {
    this.screen.width = e
    this.screen.height = t
    this.view.width = e * this.resolution
    this.view.height = t * this.resolution
    if (this.autoDensity) {
      this.view.style.width = e + "px"
      this.view.style.height = t + "px"
    }
    this.emit("resize", e, t)
  }
  t.prototype.generateTexture = function (e, t, n, r) {
    if (0 === (r = r || e.getLocalBounds(null, true)).width) {
      r.width = 1
    }
    if (0 === r.height) {
      r.height = 1
    }
    var i = vn.create({
      width: 0 | r.width,
      height: 0 | r.height,
      scaleMode: t,
      resolution: n
    })
    Ur.tx = -r.x
    Ur.ty = -r.y
    this.render(e, {
      renderTexture: i,
      clear: false,
      transform: Ur,
      skipUpdateTransform: !!e.parent
    })
    return i
  }
  t.prototype.destroy = function (e) {
    for (var t in this.plugins) {
      this.plugins[t].destroy()
      this.plugins[t] = null
    }
    if (e && this.view.parentNode) {
      this.view.parentNode.removeChild(this.view)
    }
    this.plugins = null
    this.type = X.UNKNOWN
    this.view = null
    this.screen = null
    this._tempDisplayObjectParent = null
    this.options = null
    this._backgroundColorRgba = null
    this._backgroundColorString = null
    this._lastObjectRendered = null
  }
  Object.defineProperty(t.prototype, "backgroundColor", {
    get: function () {
      return this._backgroundColor
    },
    set: function (e) {
      this._backgroundColor = e
      this._backgroundColorString = Ce(e)
      xe(e, this._backgroundColorRgba)
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "backgroundAlpha", {
    get: function () {
      return this._backgroundColorRgba[3]
    },
    set: function (e) {
      this._backgroundColorRgba[3] = e
    },
    enumerable: false,
    configurable: true
  })
  return t
}($_13371)
var Vr = function (e) {
  function t(n) {
    var r = e.call(this, X.WEBGL, n) || this
    n = r.options
    r.gl = null
    r.CONTEXT_UID = 0
    r.runners = {
      destroy: new zt("destroy"),
      contextChange: new zt("contextChange"),
      reset: new zt("reset"),
      update: new zt("update"),
      postrender: new zt("postrender"),
      prerender: new zt("prerender"),
      resize: new zt("resize")
    }
    r.globalUniforms = new In({
      projectionMatrix: new _t()
    }, true)
    r.addSystem(Er, "mask").addSystem(Un, "context").addSystem(Pr, "state").addSystem(Fr, "shader").addSystem(Lr, "texture").addSystem(Wn, "geometry").addSystem(Gn, "framebuffer").addSystem(Cr, "scissor").addSystem(Or, "stencil").addSystem(kr, "projection").addSystem(Nr, "textureGC").addSystem(Nn, "filter").addSystem(Br, "renderTexture").addSystem(Ln, "batch")
    r.initPlugins(t.__plugins)
    if (n.context) {
      r.context.initFromContext(n.context)
    } else {
      r.context.initFromOptions({
        alpha: !!r.useContextAlpha,
        antialias: n.antialias,
        premultipliedAlpha: r.useContextAlpha && "notMultiplied" !== r.useContextAlpha,
        stencil: true,
        preserveDrawingBuffer: n.preserveDrawingBuffer,
        powerPreference: r.options.powerPreference
      })
    }
    r.renderingToScreen = true
    be(2 === r.context.webGLVersion ? "WebGL 2" : "WebGL 1")
    r.resize(r.options.width, r.options.height)
    return r
  }
  Xt(t, e)
  t.create = function (e) {
    if (we()) {
      return new t(e)
    }
    throw new Error("WebGL unsupported in this browser, use \"pixi.js-legacy\" for fallback canvas2d support.")
  }
  t.prototype.addSystem = function (e, t) {
    if (!t) {
      t = e.name
    }
    var n = new e(this)
    if (this[t]) {
      throw new Error("Whoops! The name \"" + t + "\" is already in use")
    }
    for (var r in this[t] = n, this.runners) this.runners[r].add(n)
    return this
  }
  t.prototype.render = function (e, t) {
    var n
    var r
    var i
    var o
    if (t) {
      if (t instanceof vn) {
        Qe("6.0.0", "Renderer#render arguments changed, use options instead.")
        n = t
        r = arguments[2]
        i = arguments[3]
        o = arguments[4]
      } else {
        n = t.renderTexture
        r = t.clear
        i = t.transform
        o = t.skipUpdateTransform
      }
    }
    this.renderingToScreen = !n
    this.runners.prerender.emit()
    this.emit("prerender")
    this.projection.transform = i
    if (!this.context.isLost) {
      if (!n) {
        this._lastObjectRendered = e
      }
      if (!o) {
        var a = e.enableTempParent()
        e.updateTransform()
        e.disableTempParent(a)
      }
      this.renderTexture.bind(n)
      this.batch.currentRenderer.start()
      if (undefined !== r ? r : this.clearBeforeRender) {
        this.renderTexture.clear()
      }
      e.render(this)
      this.batch.currentRenderer.flush()
      if (n) {
        n.baseTexture.update()
      }
      this.runners.postrender.emit()
      this.projection.transform = null
      this.emit("postrender")
    }
  }
  t.prototype.resize = function (t, n) {
    e.prototype.resize.call(this, t, n)
    this.runners.resize.emit(t, n)
  }
  t.prototype.reset = function () {
    this.runners.reset.emit()
    return this
  }
  t.prototype.clear = function () {
    this.renderTexture.bind()
    this.renderTexture.clear()
  }
  t.prototype.destroy = function (t) {
    for (var n in this.runners.destroy.emit(), this.runners) this.runners[n].destroy()
    e.prototype.destroy.call(this, t)
    this.gl = null
  }
  Object.defineProperty(t.prototype, "extract", {
    get: function () {
      Qe("6.0.0", "Renderer#extract has been deprecated, please use Renderer#plugins.extract instead.")
      return this.plugins.extract
    },
    enumerable: false,
    configurable: true
  })
  t.registerPlugin = function (e, n) {
    t.__plugins = t.__plugins || {}
    t.__plugins[e] = n
  }
  return t
}(Hr)
var Gr = function () {
  this.texArray = null
  this.blend = 0
  this.type = $.TRIANGLES
  this.start = 0
  this.size = 0
  this.data = null
}
var zr = function () {
  function e() {
    this.elements = []
    this.ids = []
    this.count = 0
  }
  e.prototype.clear = function () {
    for (var e = 0; e < this.count; e++) {
      this.elements[e] = null
    }
    this.count = 0
  }
  return e
}()
var Qr = function () {
  function e(e) {
    if ("number" === typeof e) {
      this.rawBinaryData = new ArrayBuffer(e)
    } else {
      if (e instanceof Uint8Array) {
        this.rawBinaryData = e.buffer
      } else {
        this.rawBinaryData = e
      }
    }
    this.uint32View = new Uint32Array(this.rawBinaryData)
    this.float32View = new Float32Array(this.rawBinaryData)
  }
  Object.defineProperty(e.prototype, "int8View", {
    get: function () {
      if (!this._int8View) {
        this._int8View = new Int8Array(this.rawBinaryData)
      }
      return this._int8View
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "uint8View", {
    get: function () {
      if (!this._uint8View) {
        this._uint8View = new Uint8Array(this.rawBinaryData)
      }
      return this._uint8View
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "int16View", {
    get: function () {
      if (!this._int16View) {
        this._int16View = new Int16Array(this.rawBinaryData)
      }
      return this._int16View
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "uint16View", {
    get: function () {
      if (!this._uint16View) {
        this._uint16View = new Uint16Array(this.rawBinaryData)
      }
      return this._uint16View
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "int32View", {
    get: function () {
      if (!this._int32View) {
        this._int32View = new Int32Array(this.rawBinaryData)
      }
      return this._int32View
    },
    enumerable: false,
    configurable: true
  })
  e.prototype.view = function (e) {
    return this[e + "View"]
  }
  e.prototype.destroy = function () {
    this.rawBinaryData = null
    this._int8View = null
    this._uint8View = null
    this._int16View = null
    this._uint16View = null
    this._int32View = null
    this.uint32View = null
    this.float32View = null
  }
  e.sizeOf = function (e) {
    switch (e) {
      case "int8":
      case "uint8":
        return 1
      case "int16":
      case "uint16":
        return 2
      case "int32":
      case "uint32":
      case "float32":
        return 4
      default:
        throw new Error(e + " isn't a valid view type")
    }
  }
  return e
}()
var Wr = function (e) {
  function t(t) {
    var n = e.call(this, t) || this
    n.shaderGenerator = null
    n.geometryClass = null
    n.vertexSize = null
    n.state = vr.for2d()
    n.size = 4 * fe.SPRITE_BATCH_SIZE
    n._vertexCount = 0
    n._indexCount = 0
    n._bufferedElements = []
    n._bufferedTextures = []
    n._bufferSize = 0
    n._shader = null
    n._packedGeometries = []
    n._packedGeometryPoolSize = 2
    n._flushId = 0
    n._aBuffers = {}
    n._iBuffers = {}
    n.MAX_TEXTURES = 1
    n.renderer.on("prerender", n.onPrerender, n)
    t.runners.contextChange.add(n)
    n._dcIndex = 0
    n._aIndex = 0
    n._iIndex = 0
    n._attributeBuffer = null
    n._indexBuffer = null
    n._tempBoundTextures = []
    return n
  }
  Xt(t, e)
  t.prototype.contextChange = function () {
    var /* [auto-meaningful-name] */this$renderer$gl = this.renderer.gl
    if (fe.PREFER_ENV === K.WEBGL_LEGACY) {
      this.MAX_TEXTURES = 1
    } else {
      this.MAX_TEXTURES = Math.min(this$renderer$gl.getParameter(this$renderer$gl.MAX_TEXTURE_IMAGE_UNITS), fe.SPRITE_MAX_TEXTURES)
      this.MAX_TEXTURES = function (e, t) {
        if (0 === e) {
          throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`")
        }
        for (var n = t.createShader(t.FRAGMENT_SHADER);;) {
          var r = dr.replace(/%forloop%/gi, hr(e))
          t.shaderSource(n, r)
          t.compileShader(n)
          if (t.getShaderParameter(n, t.COMPILE_STATUS)) {
            break
          }
          e = e / 2 | 0
        }
        return e
      }(this.MAX_TEXTURES, this$renderer$gl)
    }
    this._shader = this.shaderGenerator.generateShader(this.MAX_TEXTURES)
    for (var t = 0; t < this._packedGeometryPoolSize; t++) {
      this._packedGeometries[t] = new this.geometryClass()
    }
    this.initFlushBuffers()
  }
  t.prototype.initFlushBuffers = function () {
    for (var /* [auto-meaningful-name] */t$_drawCallPool = t._drawCallPool, /* [auto-meaningful-name] */t$_textureArrayPool = t._textureArrayPool, r = this.size / 4, i = Math.floor(r / this.MAX_TEXTURES) + 1; t$_drawCallPool.length < r;) {
      t$_drawCallPool.push(new Gr())
    }
    for (; t$_textureArrayPool.length < i;) {
      t$_textureArrayPool.push(new zr())
    }
    for (var o = 0; o < this.MAX_TEXTURES; o++) {
      this._tempBoundTextures[o] = null
    }
  }
  t.prototype.onPrerender = function () {
    this._flushId = 0
  }
  t.prototype.render = function (e) {
    if (e._texture.valid) {
      if (this._vertexCount + e.vertexData.length / 2 > this.size) {
        this.flush()
      }
      this._vertexCount += e.vertexData.length / 2
      this._indexCount += e.indices.length
      this._bufferedTextures[this._bufferSize] = e._texture.baseTexture
      this._bufferedElements[this._bufferSize++] = e
    }
  }
  t.prototype.buildTexturesAndDrawCalls = function () {
    var /* [auto-meaningful-name] */this$_bufferedTextures = this._bufferedTextures
    var /* [auto-meaningful-name] */this$MAX_TEXTURES = this.MAX_TEXTURES
    var /* [auto-meaningful-name] */t$_textureArrayPool = t._textureArrayPool
    var /* [auto-meaningful-name] */this$renderer$batch = this.renderer.batch
    var /* [auto-meaningful-name] */this$_tempBoundTextures = this._tempBoundTextures
    var /* [auto-meaningful-name] */this$renderer$textureGC$count = this.renderer.textureGC.count
    var s = ++Jt._globalBatch
    var c = 0
    var u = t$_textureArrayPool[0]
    var l = 0
    this$renderer$batch.copyBoundTextures(this$_tempBoundTextures, this$MAX_TEXTURES)
    for (var f = 0; f < this._bufferSize; ++f) {
      var d = this$_bufferedTextures[f]
      this$_bufferedTextures[f] = null
      if (d._batchEnabled !== s) {
        if (u.count >= this$MAX_TEXTURES) {
          this$renderer$batch.boundArray(u, this$_tempBoundTextures, s, this$MAX_TEXTURES)
          this.buildDrawCalls(u, l, f)
          l = f
          u = t$_textureArrayPool[++c]
          ++s
        }
        d._batchEnabled = s
        d.touched = this$renderer$textureGC$count
        u.elements[u.count++] = d
      }
    }
    if (u.count > 0) {
      this$renderer$batch.boundArray(u, this$_tempBoundTextures, s, this$MAX_TEXTURES)
      this.buildDrawCalls(u, l, this._bufferSize)
      ++c
      ++s
    }
    for (f = 0; f < this$_tempBoundTextures.length; f++) {
      this$_tempBoundTextures[f] = null
    }
    Jt._globalBatch = s
  }
  t.prototype.buildDrawCalls = function (e, n, r) {
    var /* [auto-meaningful-name] */this$_bufferedElements = this._bufferedElements
    var /* [auto-meaningful-name] */this$_attributeBuffer = this._attributeBuffer
    var /* [auto-meaningful-name] */this$_indexBuffer = this._indexBuffer
    var /* [auto-meaningful-name] */this$vertexSize = this.vertexSize
    var /* [auto-meaningful-name] */t$_drawCallPool = t._drawCallPool
    var /* [auto-meaningful-name] */this$_dcIndex = this._dcIndex
    var /* [auto-meaningful-name] */this$_aIndex = this._aIndex
    var /* [auto-meaningful-name] */this$_iIndex = this._iIndex
    var d = t$_drawCallPool[this$_dcIndex]
    d.start = this._iIndex
    d.texArray = e
    for (var h = n; h < r; ++h) {
      var p = this$_bufferedElements[h]
      var /* [auto-meaningful-name] */p$_texture$baseTexture = p._texture.baseTexture
      var A = Se[p$_texture$baseTexture.alphaMode ? 1 : 0][p.blendMode]
      this$_bufferedElements[h] = null
      if (n < h && d.blend !== A) {
        d.size = this$_iIndex - d.start
        n = h;
        (d = t$_drawCallPool[++this$_dcIndex]).texArray = e
        d.start = this$_iIndex
      }
      this.packInterleavedGeometry(p, this$_attributeBuffer, this$_indexBuffer, this$_aIndex, this$_iIndex)
      this$_aIndex += p.vertexData.length / 2 * this$vertexSize
      this$_iIndex += p.indices.length
      d.blend = A
    }
    if (n < r) {
      d.size = this$_iIndex - d.start
      ++this$_dcIndex
    }
    this._dcIndex = this$_dcIndex
    this._aIndex = this$_aIndex
    this._iIndex = this$_iIndex
  }
  t.prototype.bindAndClearTexArray = function (e) {
    for (var /* [auto-meaningful-name] */this$renderer$texture = this.renderer.texture, n = 0; n < e.count; n++) {
      this$renderer$texture.bind(e.elements[n], e.ids[n])
      e.elements[n] = null
    }
    e.count = 0
  }
  t.prototype.updateGeometry = function () {
    var /* [auto-meaningful-name] */this$_packedGeometries = this._packedGeometries
    var /* [auto-meaningful-name] */this$_attributeBuffer = this._attributeBuffer
    var /* [auto-meaningful-name] */this$_indexBuffer = this._indexBuffer
    if (fe.CAN_UPLOAD_SAME_BUFFER) {
      this$_packedGeometries[this._flushId]._buffer.update(this$_attributeBuffer.rawBinaryData)
      this$_packedGeometries[this._flushId]._indexBuffer.update(this$_indexBuffer)
      this.renderer.geometry.updateBuffers()
    } else {
      if (this._packedGeometryPoolSize <= this._flushId) {
        this._packedGeometryPoolSize++
        this$_packedGeometries[this._flushId] = new this.geometryClass()
      }
      this$_packedGeometries[this._flushId]._buffer.update(this$_attributeBuffer.rawBinaryData)
      this$_packedGeometries[this._flushId]._indexBuffer.update(this$_indexBuffer)
      this.renderer.geometry.bind(this$_packedGeometries[this._flushId])
      this.renderer.geometry.updateBuffers()
      this._flushId++
    }
  }
  t.prototype.drawBatches = function () {
    for (var /* [auto-meaningful-name] */this$_dcIndex = this._dcIndex, /* [auto-meaningful-name] */this$renderer = this.renderer, /* [auto-meaningful-name] */this$renderer$gl = this$renderer.gl, /* [auto-meaningful-name] */this$renderer$state = this$renderer.state, /* [auto-meaningful-name] */t$_drawCallPool = t._drawCallPool, a = null, s = 0; s < this$_dcIndex; s++) {
      var c = t$_drawCallPool[s]
      var /* [auto-meaningful-name] */c$texArray = c.texArray
      var /* [auto-meaningful-name] */c$type = c.type
      var /* [auto-meaningful-name] */c$size = c.size
      var /* [auto-meaningful-name] */c$start = c.start
      var /* [auto-meaningful-name] */c$blend = c.blend
      if (a !== c$texArray) {
        a = c$texArray
        this.bindAndClearTexArray(c$texArray)
      }
      this.state.blendMode = c$blend
      this$renderer$state.set(this.state)
      this$renderer$gl.drawElements(c$type, c$size, this$renderer$gl.UNSIGNED_SHORT, 2 * c$start)
    }
  }
  t.prototype.flush = function () {
    if (0 !== this._vertexCount) {
      this._attributeBuffer = this.getAttributeBuffer(this._vertexCount)
      this._indexBuffer = this.getIndexBuffer(this._indexCount)
      this._aIndex = 0
      this._iIndex = 0
      this._dcIndex = 0
      this.buildTexturesAndDrawCalls()
      this.updateGeometry()
      this.drawBatches()
      this._bufferSize = 0
      this._vertexCount = 0
      this._indexCount = 0
    }
  }
  t.prototype.start = function () {
    this.renderer.state.set(this.state)
    this.renderer.texture.ensureSamplerType(this.MAX_TEXTURES)
    this.renderer.shader.bind(this._shader)
    if (fe.CAN_UPLOAD_SAME_BUFFER) {
      this.renderer.geometry.bind(this._packedGeometries[this._flushId])
    }
  }
  t.prototype.stop = function () {
    this.flush()
  }
  t.prototype.destroy = function () {
    for (var t = 0; t < this._packedGeometryPoolSize; t++) {
      if (this._packedGeometries[t]) {
        this._packedGeometries[t].destroy()
      }
    }
    this.renderer.off("prerender", this.onPrerender, this)
    this._aBuffers = null
    this._iBuffers = null
    this._packedGeometries = null
    this._attributeBuffer = null
    this._indexBuffer = null
    if (this._shader) {
      this._shader.destroy()
      this._shader = null
    }
    e.prototype.destroy.call(this)
  }
  t.prototype.getAttributeBuffer = function (e) {
    var t = Me(Math.ceil(e / 8))
    var n = je(t)
    var r = 8 * t
    if (this._aBuffers.length <= n) {
      this._iBuffers.length = n + 1
    }
    var i = this._aBuffers[r]
    if (!i) {
      this._aBuffers[r] = i = new Qr(r * this.vertexSize * 4)
    }
    return i
  }
  t.prototype.getIndexBuffer = function (e) {
    var t = Me(Math.ceil(e / 12))
    var n = je(t)
    var r = 12 * t
    if (this._iBuffers.length <= n) {
      this._iBuffers.length = n + 1
    }
    var i = this._iBuffers[n]
    if (!i) {
      this._iBuffers[n] = i = new Uint16Array(r)
    }
    return i
  }
  t.prototype.packInterleavedGeometry = function (e, t, n, r, i) {
    for (var /* [auto-meaningful-name] */t$uint32View = t.uint32View, /* [auto-meaningful-name] */t$float32View = t.float32View, s = r / this.vertexSize, /* [auto-meaningful-name] */e$uvs = e.uvs, /* [auto-meaningful-name] */e$indices = e.indices, /* [auto-meaningful-name] */e$vertexData = e.vertexData, /* [auto-meaningful-name] */e$_texture$baseTexture$_batchLocation = e._texture.baseTexture._batchLocation, d = Math.min(e.worldAlpha, 1), h = d < 1 && e._texture.baseTexture.alphaMode ? De(e._tintRGB, d) : e._tintRGB + (255 * d << 24), p = 0; p < e$vertexData.length; p += 2) {
      t$float32View[r++] = e$vertexData[p]
      t$float32View[r++] = e$vertexData[p + 1]
      t$float32View[r++] = e$uvs[p]
      t$float32View[r++] = e$uvs[p + 1]
      t$uint32View[r++] = h
      t$float32View[r++] = e$_texture$baseTexture$_batchLocation
    }
    for (p = 0; p < e$indices.length; p++) {
      n[i++] = s + e$indices[p]
    }
  }
  t._drawCallPool = []
  t._textureArrayPool = []
  return t
}(Mn)
var Kr = function () {
  function e(e, t) {
    this.vertexSrc = e
    this.fragTemplate = t
    this.programCache = {}
    this.defaultGroupCache = {}
    if (t.indexOf("%count%") < 0) {
      throw new Error("Fragment template must contain \"%count%\".")
    }
    if (t.indexOf("%forloop%") < 0) {
      throw new Error("Fragment template must contain \"%forloop%\".")
    }
  }
  e.prototype.generateShader = function (e) {
    if (!this.programCache[e]) {
      for (var t = new Int32Array(e), n = 0; n < e; n++) {
        t[n] = n
      }
      this.defaultGroupCache[e] = In.from({
        uSamplers: t
      }, true)
      var /* [auto-meaningful-name] */this$fragTemplate = this.fragTemplate
      this$fragTemplate = (this$fragTemplate = this$fragTemplate.replace(/%count%/gi, "" + e)).replace(/%forloop%/gi, this.generateSampleSrc(e))
      this.programCache[e] = new Ar(this.vertexSrc, this$fragTemplate)
    }
    var i = {
      tint: new Float32Array([1, 1, 1, 1]),
      translationMatrix: new _t(),
      default: this.defaultGroupCache[e]
    }
    return new gr(this.programCache[e], i)
  }
  e.prototype.generateSampleSrc = function (e) {
    var t = ""
    t += "\n"
    t += "\n"
    for (var n = 0; n < e; n++) {
      if (n > 0) {
        t += "\nelse "
      }
      if (n < e - 1) {
        t += "if(vTextureId < " + n + ".5)"
      }
      t += "\n{"
      t += "\n\tcolor = texture2D(uSamplers[" + n + "], vTextureCoord);"
      t += "\n}"
    }
    t += "\n"
    return t += "\n"
  }
  return e
}()
var Xr = function (e) {
  function t(t) {
    if (undefined === t) {
      t = false
    }
    var n = e.call(this) || this
    n._buffer = new wn(null, t, false)
    n._indexBuffer = new wn(null, t, true)
    n.addAttribute("aVertexPosition", n._buffer, 2, false, ee.FLOAT).addAttribute("aTextureCoord", n._buffer, 2, false, ee.FLOAT).addAttribute("aColor", n._buffer, 4, true, ee.UNSIGNED_BYTE).addAttribute("aTextureId", n._buffer, 1, true, ee.FLOAT).addIndex(n._indexBuffer)
    return n
  }
  Xt(t, e)
  return t
}(Sn)
var /* [auto-meaningful-name] */PrecisionHighpFloat_nattributeVec2AVertexPosition_nattributeVec2ATextureCoord_nattributeVec4AColor_nattributeFloatATextureId_n_nuniformMat3ProjectionMatrix_nuniformMat3TranslationMatrix_nuniformVec4Tint_n_nvaryingVec2VTextureCoord_nvaryingVec4VColor_nvaryingFloatVTextureId_n_nvoidMainVoid_nGl_PositionVec4ProjectionMatrixTranslationMatrixVec3AVertexPosition1$0$xy0$01$0_n_nVTextureCoordATextureCoord_nVTextureIdATextureId_nVColorAColorTint_n_n = "precision highp float;\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform vec4 tint;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nvoid main(void){\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vTextureId = aTextureId;\n    vColor = aColor * tint;\n}\n"
var /* [auto-meaningful-name] */VaryingVec2VTextureCoord_nvaryingVec4VColor_nvaryingFloatVTextureId_nuniformSampler2DUSamplersCount_n_nvoidMainVoid_nVec4Color_nForloop_nGl_FragColorColorVColor_n_n = "varying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\nuniform sampler2D uSamplers[%count%];\n\nvoid main(void){\n    vec4 color;\n    %forloop%\n    gl_FragColor = color * vColor;\n}\n"
var $r = function () {
  function e() {}
  e.create = function (e) {
    var t = Object.assign({
      vertex: PrecisionHighpFloat_nattributeVec2AVertexPosition_nattributeVec2ATextureCoord_nattributeVec4AColor_nattributeFloatATextureId_n_nuniformMat3ProjectionMatrix_nuniformMat3TranslationMatrix_nuniformVec4Tint_n_nvaryingVec2VTextureCoord_nvaryingVec4VColor_nvaryingFloatVTextureId_n_nvoidMainVoid_nGl_PositionVec4ProjectionMatrixTranslationMatrixVec3AVertexPosition1$0$xy0$01$0_n_nVTextureCoordATextureCoord_nVTextureIdATextureId_nVColorAColorTint_n_n,
      fragment: VaryingVec2VTextureCoord_nvaryingVec4VColor_nvaryingFloatVTextureId_nuniformSampler2DUSamplersCount_n_nvoidMainVoid_nVec4Color_nForloop_nGl_FragColorColorVColor_n_n,
      geometryClass: Xr,
      vertexSize: 6
    }, e)
    var /* [auto-meaningful-name] */t$vertex = t.vertex
    var /* [auto-meaningful-name] */t$fragment = t.fragment
    var /* [auto-meaningful-name] */t$vertexSize = t.vertexSize
    var /* [auto-meaningful-name] */t$geometryClass = t.geometryClass
    return function (e) {
      function t(t) {
        var a = e.call(this, t) || this
        a.shaderGenerator = new Kr(t$vertex, t$fragment)
        a.geometryClass = t$geometryClass
        a.vertexSize = t$vertexSize
        return a
      }
      Xt(t, e)
      return t
    }(Wr)
  }
  Object.defineProperty(e, "defaultVertexSrc", {
    get: function () {
      return PrecisionHighpFloat_nattributeVec2AVertexPosition_nattributeVec2ATextureCoord_nattributeVec4AColor_nattributeFloatATextureId_n_nuniformMat3ProjectionMatrix_nuniformMat3TranslationMatrix_nuniformVec4Tint_n_nvaryingVec2VTextureCoord_nvaryingVec4VColor_nvaryingFloatVTextureId_n_nvoidMainVoid_nGl_PositionVec4ProjectionMatrixTranslationMatrixVec3AVertexPosition1$0$xy0$01$0_n_nVTextureCoordATextureCoord_nVTextureIdATextureId_nVColorAColorTint_n_n
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e, "defaultFragmentTemplate", {
    get: function () {
      return VaryingVec2VTextureCoord_nvaryingVec4VColor_nvaryingFloatVTextureId_nuniformSampler2DUSamplersCount_n_nvoidMainVoid_nVec4Color_nForloop_nGl_FragColorColorVColor_n_n
    },
    enumerable: false,
    configurable: true
  })
  return e
}().create()
var Jr = {}
var Zr = function (e) {
  Object.defineProperty(Jr, e, {
    get: function () {
      Qe("6.0.0", "PIXI.systems." + e + " has moved to PIXI." + e)
      return un[e]
    }
  })
}
for (var ei in un) Zr(ei)
var ti = {}
var ni = function (e) {
  Object.defineProperty(ti, e, {
    get: function () {
      Qe("6.0.0", "PIXI.resources." + e + " has moved to PIXI." + e)
      return jr[e]
    }
  })
}
for (var ei in jr) ni(ei)
var ri = function () {
  function e(t) {
    var n = this
    this.stage = new Pt()
    t = Object.assign({
      forceCanvas: false
    }, t)
    this.renderer = function (e) {
      return Vr.create(e)
    }(t)
    e._plugins.forEach(function (e) {
      e.init.call(n, t)
    })
  }
  e.registerPlugin = function (t) {
    e._plugins.push(t)
  }
  e.prototype.render = function () {
    this.renderer.render(this.stage)
  }
  Object.defineProperty(e.prototype, "view", {
    get: function () {
      return this.renderer.view
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "screen", {
    get: function () {
      return this.renderer.screen
    },
    enumerable: false,
    configurable: true
  })
  e.prototype.destroy = function (t, n) {
    var r = this
    var i = e._plugins.slice(0)
    i.reverse()
    i.forEach(function (e) {
      e.destroy.call(r)
    })
    this.stage.destroy(n)
    this.stage = null
    this.renderer.destroy(t)
    this.renderer = null
  }
  e._plugins = []
  return e
}()
var ii = function () {
  function e() {}
  e.init = function (e) {
    var t = this
    Object.defineProperty(this, "resizeTo", {
      set: function (e) {
        self.removeEventListener("resize", this.queueResize)
        this._resizeTo = e
        if (e) {
          self.addEventListener("resize", this.queueResize)
          this.resize()
        }
      },
      get: function () {
        return this._resizeTo
      }
    })
    this.queueResize = function () {
      if (t._resizeTo) {
        t.cancelResize()
        t._resizeId = requestAnimationFrame(function () {
          return t.resize()
        })
      }
    }
    this.cancelResize = function () {
      if (t._resizeId) {
        cancelAnimationFrame(t._resizeId)
        t._resizeId = null
      }
    }
    this.resize = function () {
      if (t._resizeTo) {
        var e
        var n
        t.cancelResize()
        if (t._resizeTo === self) {
          e = self.innerWidth
          n = self.innerHeight
        } else {
          var /* [auto-meaningful-name] */t$_resizeTo = t._resizeTo
          e = t$_resizeTo.clientWidth
          n = t$_resizeTo.clientHeight
        }
        t.renderer.resize(e, n)
      }
    }
    this._resizeId = null
    this._resizeTo = null
    this.resizeTo = e.resizeTo || null
  }
  e.destroy = function () {
    self.removeEventListener("resize", this.queueResize)
    this.cancelResize()
    this.cancelResize = null
    this.queueResize = null
    this.resizeTo = null
    this.resize = null
  }
  return e
}()
ri.registerPlugin(ii)
var oi = new ct()
var ai = function () {
  function e(e) {
    this.renderer = e
  }
  e.prototype.image = function (e, t, n) {
    var r = new Image()
    r.src = this.base64(e, t, n)
    return r
  }
  e.prototype.base64 = function (e, t, n) {
    return this.canvas(e).toDataURL(t, n)
  }
  e.prototype.canvas = function (t) {
    var n
    var r
    var i
    var /* [auto-meaningful-name] */this$renderer = this.renderer
    var a = false
    var s = false
    if (t) {
      if (t instanceof vn) {
        i = t
      } else {
        i = this.renderer.generateTexture(t)
        s = true
      }
    }
    if (i) {
      n = i.baseTexture.resolution
      r = i.frame
      a = false
      this$renderer.renderTexture.bind(i)
    } else {
      n = this.renderer.resolution
      a = true;
      (r = oi).width = this.renderer.width
      r.height = this.renderer.height
      this$renderer.renderTexture.bind(null)
    }
    var c = Math.floor(r.width * n + 1e-4)
    var u = Math.floor(r.height * n + 1e-4)
    var l = new $e(c, u, 1)
    var f = new Uint8Array(4 * c * u)
    var /* [auto-meaningful-name] */this$renderer$gl = this$renderer.gl
    this$renderer$gl.readPixels(r.x * n, r.y * n, c, u, this$renderer$gl.RGBA, this$renderer$gl.UNSIGNED_BYTE, f)
    var h = l.context.getImageData(0, 0, c, u)
    e.arrayPostDivide(f, h.data)
    l.context.putImageData(h, 0, 0)
    if (a) {
      var p = new $e(l.width, l.height, 1)
      p.context.scale(1, -1)
      p.context.drawImage(l.canvas, 0, -u)
      l.destroy()
      l = p
    }
    if (s) {
      i.destroy(true)
    }
    return l.canvas
  }
  e.prototype.pixels = function (t) {
    var n
    var r
    var i
    var /* [auto-meaningful-name] */this$renderer = this.renderer
    var a = false
    if (t) {
      if (t instanceof vn) {
        i = t
      } else {
        i = this.renderer.generateTexture(t)
        a = true
      }
    }
    if (i) {
      n = i.baseTexture.resolution
      r = i.frame
      this$renderer.renderTexture.bind(i)
    } else {
      n = this$renderer.resolution;
      (r = oi).width = this$renderer.width
      r.height = this$renderer.height
      this$renderer.renderTexture.bind(null)
    }
    var s = r.width * n
    var c = r.height * n
    var u = new Uint8Array(4 * s * c)
    var /* [auto-meaningful-name] */this$renderer$gl = this$renderer.gl
    this$renderer$gl.readPixels(r.x * n, r.y * n, s, c, this$renderer$gl.RGBA, this$renderer$gl.UNSIGNED_BYTE, u)
    if (a) {
      i.destroy(true)
    }
    e.arrayPostDivide(u, u)
    return u
  }
  e.prototype.destroy = function () {
    this.renderer = null
  }
  e.arrayPostDivide = function (e, t) {
    for (var n = 0; n < e.length; n += 4) {
      var r = t[n + 3] = e[n + 3]
      if (0 !== r) {
        t[n] = Math.round(Math.min(255 * e[n] / r, 255))
        t[n + 1] = Math.round(Math.min(255 * e[n + 1] / r, 255))
        t[n + 2] = Math.round(Math.min(255 * e[n + 2] / r, 255))
      } else {
        t[n] = e[n]
        t[n + 1] = e[n + 1]
        t[n + 2] = e[n + 2]
      }
    }
  }
  return e
}()
export { X }
export { q }
export { $ }
export { ne }
export { re }
export { ge }
export { ye }
export { be }
export { we }
export { xe }
export { Ce }
export { Oe }
export { ke }
export { Se }
export { Te }
export { Be }
export { De }
export { Ie }
export { Re }
export { Fe }
export { Ne }
export { Me }
export { Le }
export { je }
export { Ue }
export { He }
export { Ge }
export { Qe }
export { We }
export { Ke }
export { Xe }
export { Ye }
export { qe }
export { $e }
export { Je }
export { et }
export { tt }
export { nt }
export { rt }
export { it }
export { ot }
export { st }
export { ct }
export { ut }
export { lt }
export { ft }
export { dt }
export { ht }
export { pt }
export { _t }
export { Et }
export { xt }
export { Ct }
export { kt }
export { St }
export { Tt }
export { It }
export { Pt }
export { Gt }
export { Jt }
export { nn }
export { hn }
export { An }
export { vn }
export { Bn }
export { In }
export { Rn }
export { Nn }
export { Mn }
export { gr }
export { vr }
export { mr }
export { br }
export { Hr }
export { Vr }
export { Gr }
export { zr }
export { Xr }
export { $r }
export { ri }
export { ai }
