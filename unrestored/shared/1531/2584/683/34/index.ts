/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：34
 */

"use strict"

export { ma as m }
export { X as p }
export { ne as s }
export { ri as b }
export { hn as d }
export { mr as i }
export { vn as r }
export { An as y }
export { Pt as f }
export { Ro as j }
export { Bi as k }
export { _t as l }
export { ht as o }
export { ct as q }
export { ji as t }
export { Fi as u }
export { ra as a }
export { Vi as z }
export { ta as v }
export { Jo as w }
export { Xo as x }
export { oa as e }
export { sa as g }
export { fa as h }
export { ha as n }
export { _a as A }
export { ga as c }
export { r as B }
var r = {}
Object.defineProperty(r, "isMobile", {
  get: function () {
    return W
  }
})
Object.defineProperty(r, "EventEmitter", {
  get: function () {
    return he.a
  }
})
Object.defineProperty(r, "earcut", {
  get: function () {
    return _e.a
  }
})
Object.defineProperty(r, "BaseTextureCache", {
  get: function () {
    return Xe
  }
})
Object.defineProperty(r, "CanvasRenderTarget", {
  get: function () {
    return $e
  }
})
Object.defineProperty(r, "DATA_URI", {
  get: function () {
    return et
  }
})
Object.defineProperty(r, "ProgramCache", {
  get: function () {
    return We
  }
})
Object.defineProperty(r, "TextureCache", {
  get: function () {
    return Ke
  }
})
Object.defineProperty(r, "clearTextureCache", {
  get: function () {
    return qe
  }
})
Object.defineProperty(r, "correctBlendMode", {
  get: function () {
    return Te
  }
})
Object.defineProperty(r, "createIndicesForQuads", {
  get: function () {
    return Fe
  }
})
Object.defineProperty(r, "decomposeDataUri", {
  get: function () {
    return tt
  }
})
Object.defineProperty(r, "deprecation", {
  get: function () {
    return Qe
  }
})
Object.defineProperty(r, "destroyTextureCache", {
  get: function () {
    return Ye
  }
})
Object.defineProperty(r, "determineCrossOrigin", {
  get: function () {
    return nt
  }
})
Object.defineProperty(r, "getBufferType", {
  get: function () {
    return Re
  }
})
Object.defineProperty(r, "getResolutionOfUrl", {
  get: function () {
    return rt
  }
})
Object.defineProperty(r, "hex2rgb", {
  get: function () {
    return xe
  }
})
Object.defineProperty(r, "hex2string", {
  get: function () {
    return Ce
  }
})
Object.defineProperty(r, "interleaveTypedArrays", {
  get: function () {
    return Ne
  }
})
Object.defineProperty(r, "isPow2", {
  get: function () {
    return je
  }
})
Object.defineProperty(r, "isWebGLSupported", {
  get: function () {
    return we
  }
})
Object.defineProperty(r, "log2", {
  get: function () {
    return Le
  }
})
Object.defineProperty(r, "nextPow2", {
  get: function () {
    return Me
  }
})
Object.defineProperty(r, "premultiplyBlendMode", {
  get: function () {
    return Se
  }
})
Object.defineProperty(r, "premultiplyRgba", {
  get: function () {
    return Be
  }
})
Object.defineProperty(r, "premultiplyTint", {
  get: function () {
    return De
  }
})
Object.defineProperty(r, "premultiplyTintToRgba", {
  get: function () {
    return Ie
  }
})
Object.defineProperty(r, "removeItems", {
  get: function () {
    return Ue
  }
})
Object.defineProperty(r, "rgb2hex", {
  get: function () {
    return ke
  }
})
Object.defineProperty(r, "sayHello", {
  get: function () {
    return be
  }
})
Object.defineProperty(r, "sign", {
  get: function () {
    return He
  }
})
Object.defineProperty(r, "skipHello", {
  get: function () {
    return ye
  }
})
Object.defineProperty(r, "string2hex", {
  get: function () {
    return Oe
  }
})
Object.defineProperty(r, "trimCanvas", {
  get: function () {
    return Je
  }
})
Object.defineProperty(r, "uid", {
  get: function () {
    return Ge
  }
})
Object.defineProperty(r, "url", {
  get: function () {
    return ge
  }
})
import /* [auto-meaningful-name] */$_1459_index = require("./1459/index")
import /* [auto-meaningful-name] */$$_$$_0_1532_763 = require("../../0/1532/763")
var a = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}($$_$$_0_1532_763)
if (!self.Promise) {
  self.Promise = $_1459_index.a
}
if (!Object.assign) {
  Object.assign = a.a
}
if (!(Date.now && Date.prototype.getTime)) {
  Date.now = function () {
    return new Date().getTime()
  }
}
if (!self.performance || !self.performance.now) {
  var s = Date.now()
  if (!self.performance) {
    self.performance = {}
  }
  self.performance.now = function () {
    return Date.now() - s
  }
}
for (var c = Date.now(), u = ["ms", "moz", "webkit", "o"], l = 0; l < u.length && !self.requestAnimationFrame; ++l) {
  var f = u[l]
  self.requestAnimationFrame = self[f + "RequestAnimationFrame"]
  self.cancelAnimationFrame = self[f + "CancelAnimationFrame"] || self[f + "CancelRequestAnimationFrame"]
}
if (!self.requestAnimationFrame) {
  self.requestAnimationFrame = function (e) {
    if ("function" !== typeof e) {
      throw new TypeError(e + "is not a function")
    }
    var t = Date.now()
    var n = 16 + c - t
    if (n < 0) {
      n = 0
    }
    c = t
    return self.setTimeout(function () {
      c = Date.now()
      e(performance.now())
    }, n)
  }
}
if (!self.cancelAnimationFrame) {
  self.cancelAnimationFrame = function (e) {
    return clearTimeout(e)
  }
}
if (!Math.sign) {
  Math.sign = function (e) {
    return 0 === (e = Number(e)) || isNaN(e) ? e : e > 0 ? 1 : -1
  }
}
if (!Number.isInteger) {
  Number.isInteger = function (e) {
    return "number" === typeof e && isFinite(e) && Math.floor(e) === e
  }
}
if (!self.ArrayBuffer) {
  self.ArrayBuffer = Array
}
if (!self.Float32Array) {
  self.Float32Array = Array
}
if (!self.Uint32Array) {
  self.Uint32Array = Array
}
if (!self.Uint16Array) {
  self.Uint16Array = Array
}
if (!self.Uint8Array) {
  self.Uint8Array = Array
}
if (!self.Int32Array) {
  self.Int32Array = Array
}
var d = /iPhone/i
var h = /iPod/i
var p = /iPad/i
var _ = /\biOS-universal(?:.+)Mac\b/i
var A = /\bAndroid(?:.+)Mobile\b/i
var g = /Android/i
var v = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i
var m = /Silk/i
var y = /Windows Phone/i
var b = /\bWindows(?:.+)ARM\b/i
var w = /BlackBerry/i
var E = /BB10/i
var x = /Opera Mini/i
var C = /\b(CriOS|Chrome)(?:.+)Mobile/i
var O = /Mobile(?:.+)Firefox\b/i
var k = function (e) {
  return "undefined" !== typeof e && "MacIntel" === e.platform && "number" === typeof e.maxTouchPoints && e.maxTouchPoints > 1 && "undefined" === typeof MSStream
}
var S
var T
var B
var D
var I
var F
var R
var P
var N
var M
var j
var L
var U
var H
var V
var G
var z
var Q
var W = function (e) {
  var t = {
    userAgent: "",
    platform: "",
    maxTouchPoints: 0
  }
  if (e || "undefined" === typeof navigator) {
    if ("string" === typeof e) {
      t.userAgent = e
    } else {
      if (e && e.userAgent) {
        t = {
          userAgent: e.userAgent,
          platform: e.platform,
          maxTouchPoints: e.maxTouchPoints || 0
        }
      }
    }
  } else {
    t = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      maxTouchPoints: navigator.maxTouchPoints || 0
    }
  }
  var /* [auto-meaningful-name] */t$userAgent = t.userAgent
  var r = t$userAgent.split("[FBAN")
  if ("undefined" !== typeof r[1]) {
    t$userAgent = r[0]
  }
  if ("undefined" !== typeof (r = t$userAgent.split("Twitter"))[1]) {
    t$userAgent = r[0]
  }
  var i = function (e) {
    return function (t) {
      return t.test(e)
    }
  }(t$userAgent)
  var o = {
    apple: {
      phone: i(d) && !i(y),
      ipod: i(h),
      tablet: !i(d) && (i(p) || k(t)) && !i(y),
      universal: i(_),
      device: (i(d) || i(h) || i(p) || i(_) || k(t)) && !i(y)
    },
    amazon: {
      phone: i(v),
      tablet: !i(v) && i(m),
      device: i(v) || i(m)
    },
    android: {
      phone: !i(y) && i(v) || !i(y) && i(A),
      tablet: !i(y) && !i(v) && !i(A) && (i(m) || i(g)),
      device: !i(y) && (i(v) || i(m) || i(A) || i(g)) || i(/\bokhttp\b/i)
    },
    windows: {
      phone: i(y),
      tablet: i(b),
      device: i(y) || i(b)
    },
    other: {
      blackberry: i(w),
      blackberry10: i(E),
      opera: i(x),
      firefox: i(O),
      chrome: i(C),
      device: i(w) || i(E) || i(x) || i(O) || i(C)
    },
    any: false,
    phone: false,
    tablet: false
  }
  o.any = o.apple.device || o.android.device || o.windows.device || o.other.device
  o.phone = o.apple.phone || o.android.phone || o.windows.phone
  o.tablet = o.apple.tablet || o.android.tablet || o.windows.tablet
  return o
}(self.navigator)
!function (e) {
  e[e.WEBGL_LEGACY = 0] = "WEBGL_LEGACY"
  e[e.WEBGL = 1] = "WEBGL"
  e[e.WEBGL2 = 2] = "WEBGL2"
}(S || (S = {}));
(function (e) {
  e[e.UNKNOWN = 0] = "UNKNOWN"
  e[e.WEBGL = 1] = "WEBGL"
  e[e.CANVAS = 2] = "CANVAS"
})(T || (T = {}));
(function (e) {
  e[e.COLOR = 16384] = "COLOR"
  e[e.DEPTH = 256] = "DEPTH"
  e[e.STENCIL = 1024] = "STENCIL"
})(B || (B = {}));
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
})(D || (D = {}));
(function (e) {
  e[e.POINTS = 0] = "POINTS"
  e[e.LINES = 1] = "LINES"
  e[e.LINE_LOOP = 2] = "LINE_LOOP"
  e[e.LINE_STRIP = 3] = "LINE_STRIP"
  e[e.TRIANGLES = 4] = "TRIANGLES"
  e[e.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP"
  e[e.TRIANGLE_FAN = 6] = "TRIANGLE_FAN"
})(I || (I = {}));
(function (e) {
  e[e.RGBA = 6408] = "RGBA"
  e[e.RGB = 6407] = "RGB"
  e[e.ALPHA = 6406] = "ALPHA"
  e[e.LUMINANCE = 6409] = "LUMINANCE"
  e[e.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA"
  e[e.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT"
  e[e.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL"
})(F || (F = {}));
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
})(R || (R = {}));
(function (e) {
  e[e.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE"
  e[e.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT"
  e[e.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5"
  e[e.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4"
  e[e.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1"
  e[e.FLOAT = 5126] = "FLOAT"
  e[e.HALF_FLOAT = 36193] = "HALF_FLOAT"
})(P || (P = {}));
(function (e) {
  e[e.FLOAT = 0] = "FLOAT"
  e[e.INT = 1] = "INT"
  e[e.UINT = 2] = "UINT"
})(N || (N = {}));
(function (e) {
  e[e.NEAREST = 0] = "NEAREST"
  e[e.LINEAR = 1] = "LINEAR"
})(M || (M = {}));
(function (e) {
  e[e.CLAMP = 33071] = "CLAMP"
  e[e.REPEAT = 10497] = "REPEAT"
  e[e.MIRRORED_REPEAT = 33648] = "MIRRORED_REPEAT"
})(j || (j = {}));
(function (e) {
  e[e.OFF = 0] = "OFF"
  e[e.POW2 = 1] = "POW2"
  e[e.ON = 2] = "ON"
  e[e.ON_MANUAL = 3] = "ON_MANUAL"
})(L || (L = {}));
(function (e) {
  e[e.NPM = 0] = "NPM"
  e[e.UNPACK = 1] = "UNPACK"
  e[e.PMA = 2] = "PMA"
  e[e.NO_PREMULTIPLIED_ALPHA = 0] = "NO_PREMULTIPLIED_ALPHA"
  e[e.PREMULTIPLY_ON_UPLOAD = 1] = "PREMULTIPLY_ON_UPLOAD"
  e[e.PREMULTIPLY_ALPHA = 2] = "PREMULTIPLY_ALPHA"
})(U || (U = {}));
(function (e) {
  e[e.NO = 0] = "NO"
  e[e.YES = 1] = "YES"
  e[e.AUTO = 2] = "AUTO"
  e[e.BLEND = 0] = "BLEND"
  e[e.CLEAR = 1] = "CLEAR"
  e[e.BLIT = 2] = "BLIT"
})(H || (H = {}));
(function (e) {
  e[e.AUTO = 0] = "AUTO"
  e[e.MANUAL = 1] = "MANUAL"
})(V || (V = {}));
(function (e) {
  e.LOW = "lowp"
  e.MEDIUM = "mediump"
  e.HIGH = "highp"
})(G || (G = {}));
(function (e) {
  e[e.NONE = 0] = "NONE"
  e[e.SCISSOR = 1] = "SCISSOR"
  e[e.STENCIL = 2] = "STENCIL"
  e[e.SPRITE = 3] = "SPRITE"
})(z || (z = {}));
(function (e) {
  e[e.NONE = 0] = "NONE"
  e[e.LOW = 2] = "LOW"
  e[e.MEDIUM = 4] = "MEDIUM"
  e[e.HIGH = 8] = "HIGH"
})(Q || (Q = {}))
var K
var X
var Y
var q
var $
var J
var Z
var ee
var te
var ne
var re
var ie
var oe
var ae
var se
var ce
var ue
var le
var fe = {
  MIPMAP_TEXTURES: L.POW2,
  ANISOTROPIC_LEVEL: 0,
  RESOLUTION: 1,
  FILTER_RESOLUTION: 1,
  SPRITE_MAX_TEXTURES: function (e) {
    var t = true
    if (W.tablet || W.phone) {
      var n
      if (W.apple.device) {
        if (n = navigator.userAgent.match(/OS (\d+)_(\d+)?/)) {
          if (parseInt(n[1], 10) < 11) {
            t = false
          }
        }
      }
      if (W.android.device) {
        if (n = navigator.userAgent.match(/Android\s([0-9.]*)/)) {
          if (parseInt(n[1], 10) < 7) {
            t = false
          }
        }
      }
    }
    return t ? e : 4
  }(32),
  SPRITE_BATCH_SIZE: 4096,
  RENDER_OPTIONS: {
    view: null,
    antialias: false,
    autoDensity: false,
    backgroundColor: 0,
    backgroundAlpha: 1,
    useContextAlpha: true,
    clearBeforeRender: true,
    preserveDrawingBuffer: false,
    width: 800,
    height: 600,
    legacy: false
  },
  GC_MODE: V.AUTO,
  GC_MAX_IDLE: 3600,
  GC_MAX_CHECK_COUNT: 600,
  WRAP_MODE: j.CLAMP,
  SCALE_MODE: M.LINEAR,
  PRECISION_VERTEX: G.HIGH,
  PRECISION_FRAGMENT: W.apple.device ? G.HIGH : G.MEDIUM,
  CAN_UPLOAD_SAME_BUFFER: !W.apple.device,
  CREATE_IMAGE_BITMAP: false,
  ROUND_PIXELS: false
}
import /* [auto-meaningful-name] */$_1307 = require("./1307")
var he = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}($_1307)
import /* [auto-meaningful-name] */$_1308 = require("./1308")
var _e = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}($_1308)
import /* [auto-meaningful-name] */$_1028_index = require("./1028/index")
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
  parse: $_1028_index.parse,
  format: $_1028_index.format,
  resolve: $_1028_index.resolve
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
function Fe(e, t) {
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
function Re(e) {
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
    var f = Re(l)
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
function je(e) {
  return !(e & e - 1) && !!e
}
function Le(e) {
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
        this.tempDisplayObjectParent = new Ft()
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
}(he.a)
var Ft = function (e) {
  function t() {
    var t = null !== e && e.apply(this, arguments) || this
    t.sortDirty = null
    return t
  }
  Dt(t, e)
  return t
}(It)
function Rt(e, t) {
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
      this.children.sort(Rt)
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
var jt = function () {
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
var Lt = function () {
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
    r.eventData = new jt()
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
    r._tempDisplayObject = new Ft()
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
        t.trackedPointers[e$data$identifier] = new Lt(e$data$identifier)
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
      var /* [auto-meaningful-name] */Lt$FLAGS = Lt.FLAGS
      var f = u ? Lt$FLAGS.RIGHT_DOWN : Lt$FLAGS.LEFT_DOWN
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
      a = t.trackedPointers[e$data$identifier] = new Lt(e$data$identifier)
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
}(he.a)
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
    this.isPowerOfTwo = je(this.realWidth) && je(this.realHeight)
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
}(he.a)
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
}(he.a)
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
var Fn = function () {
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
var Rn = [new ht(), new ht(), new ht(), new ht()]
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
    for (var /* [auto-meaningful-name] */this$renderer = this.renderer, /* [auto-meaningful-name] */this$defaultFilterStack = this.defaultFilterStack, i = this.statePool.pop() || new Fn(), /* [auto-meaningful-name] */this$renderer$renderTexture = this.renderer.renderTexture, /* [auto-meaningful-name] */t0$resolution = t[0].resolution, /* [auto-meaningful-name] */t0$padding = t[0].padding, /* [auto-meaningful-name] */t0$autoFit = t[0].autoFit, /* [auto-meaningful-name] */t0$legacy = t[0].legacy, l = 1; l < t.length; l++) {
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
    var n = Rn[0]
    var r = Rn[1]
    var i = Rn[2]
    var o = Rn[3]
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
var jn = function (e) {
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
var Ln = 0
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
    this.renderer.CONTEXT_UID = Ln++
    if (e.isContextLost() && e.getExtension("WEBGL_lose_context")) {
      e.getExtension("WEBGL_lose_context").restoreContext()
    }
  }
  t.prototype.initFromContext = function (e) {
    this.gl = e
    this.validateContext(e)
    this.renderer.gl = e
    this.renderer.CONTEXT_UID = Ln++
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
var cr = [{
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
}]
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
var Fr = {
  textureCount: 0
}
var Rr = function (e) {
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
      Fr.textureCount = 0
      this.syncUniformGroup(e.uniformGroup, Fr)
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
var jr = function (e) {
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
var Lr = {
  __proto__: null,
  FilterSystem: Nn,
  BatchSystem: jn,
  ContextSystem: Un,
  FramebufferSystem: Gn,
  GeometrySystem: Wn,
  MaskSystem: Er,
  ScissorSystem: Cr,
  StencilSystem: Or,
  ProjectionSystem: kr,
  RenderTextureSystem: Br,
  ShaderSystem: Rr,
  StateSystem: Pr,
  TextureGCSystem: Nr,
  TextureSystem: jr
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
}(he.a)
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
    r.addSystem(Er, "mask").addSystem(Un, "context").addSystem(Pr, "state").addSystem(Rr, "shader").addSystem(jr, "texture").addSystem(Wn, "geometry").addSystem(Gn, "framebuffer").addSystem(Cr, "scissor").addSystem(Or, "stencil").addSystem(kr, "projection").addSystem(Nr, "textureGC").addSystem(Nn, "filter").addSystem(Br, "renderTexture").addSystem(jn, "batch")
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
    var n = Le(t)
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
    var n = Le(t)
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
      return Lr[e]
    }
  })
}
for (var ei in Lr) ni(ei)
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
import /* [auto-meaningful-name] */$_1172 = require("./1172")
var ci = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}($_1172)
import /* [auto-meaningful-name] */$_562 = require("./562")
var li = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}($_562)
function fi() {}
function di(e, t, n, r) {
  var i = 0
  var /* [auto-meaningful-name] */e$length = e.length
  !function a(s) {
    if (s || i === e$length) {
      if (n) {
        n(s)
      }
    } else {
      if (r) {
        setTimeout(function () {
          t(e[i++], a)
        }, 1)
      } else {
        t(e[i++], a)
      }
    }
  }()
}
function hi(e) {
  return function () {
    if (null === e) {
      throw new Error("Callback was already called.")
    }
    var t = e
    e = null
    t.apply(this, arguments)
  }
}
function pi(e, t) {
  if (null == t) {
    t = 1
  } else if (0 === t) {
    throw new Error("Concurrency must not be zero")
  }
  var n = 0
  var r = {
    _tasks: [],
    concurrency: t,
    saturated: fi,
    unsaturated: fi,
    buffer: t / 4,
    empty: fi,
    drain: fi,
    error: fi,
    started: false,
    paused: false,
    push: function (e, t) {
      i(e, false, t)
    },
    kill: function () {
      n = 0
      r.drain = fi
      r.started = false
      r._tasks = []
    },
    unshift: function (e, t) {
      i(e, true, t)
    },
    process: function () {
      for (; !r.paused && n < r.concurrency && r._tasks.length;) {
        var t = r._tasks.shift()
        if (0 === r._tasks.length) {
          r.empty()
        }
        if ((n += 1) === r.concurrency) {
          r.saturated()
        }
        e(t.data, hi(o(t)))
      }
    },
    length: function () {
      return r._tasks.length
    },
    running: function () {
      return n
    },
    idle: function () {
      return r._tasks.length + n === 0
    },
    pause: function () {
      if (true !== r.paused) {
        r.paused = true
      }
    },
    resume: function () {
      if (false !== r.paused) {
        r.paused = false
        for (var e = 1; e <= r.concurrency; e++) {
          r.process()
        }
      }
    }
  }
  function i(e, t, n) {
    if (null != n && "function" !== typeof n) {
      throw new Error("task callback must be a function")
    }
    r.started = true
    if (null == e && r.idle()) {
      setTimeout(function () {
        return r.drain()
      }, 1)
    } else {
      var i = {
        data: e,
        callback: "function" === typeof n ? n : fi
      }
      if (t) {
        r._tasks.unshift(i)
      } else {
        r._tasks.push(i)
      }
      setTimeout(function () {
        return r.process()
      }, 1)
    }
  }
  function o(e) {
    return function () {
      n -= 1
      e.callback.apply(e, arguments)
      if (null != arguments[0]) {
        r.error(arguments[0], e.data)
      }
      if (n <= r.concurrency - r.buffer) {
        r.unsaturated()
      }
      if (r.idle()) {
        r.drain()
      }
      r.process()
    }
  }
  return r
}
var _i = {}
function Ai(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n]
    r.enumerable = r.enumerable || false
    r.configurable = true
    if ("value" in r) {
      r.writable = true
    }
    Object.defineProperty(e, r.key, r)
  }
}
function gi(e, t, n) {
  if (t) {
    Ai(e.prototype, t)
  }
  if (n) {
    Ai(e, n)
  }
  return e
}
var vi = !(!window.XDomainRequest || "withCredentials" in new XMLHttpRequest())
var mi = null
function yi() {}
var bi = function () {
  function e(t, n, r) {
    if ("string" !== typeof t || "string" !== typeof n) {
      throw new Error("Both name and url are required for constructing a resource.")
    }
    r = r || {}
    this._flags = 0
    this._setFlag(e.STATUS_FLAGS.DATA_URL, 0 === n.indexOf("data:"))
    this.name = t
    this.url = n
    this.extension = this._getExtension()
    this.data = null
    this.crossOrigin = true === r.crossOrigin ? "anonymous" : r.crossOrigin
    this.timeout = r.timeout || 0
    this.loadType = r.loadType || this._determineLoadType()
    this.xhrType = r.xhrType
    this.metadata = r.metadata || {}
    this.error = null
    this.xhr = null
    this.children = []
    this.type = e.TYPE.UNKNOWN
    this.progressChunk = 0
    this._dequeue = yi
    this._onLoadBinding = null
    this._elementTimer = 0
    this._boundComplete = this.complete.bind(this)
    this._boundOnError = this._onError.bind(this)
    this._boundOnProgress = this._onProgress.bind(this)
    this._boundOnTimeout = this._onTimeout.bind(this)
    this._boundXhrOnError = this._xhrOnError.bind(this)
    this._boundXhrOnTimeout = this._xhrOnTimeout.bind(this)
    this._boundXhrOnAbort = this._xhrOnAbort.bind(this)
    this._boundXhrOnLoad = this._xhrOnLoad.bind(this)
    this.onStart = new li.a()
    this.onProgress = new li.a()
    this.onComplete = new li.a()
    this.onAfterMiddleware = new li.a()
  }
  e.setExtensionLoadType = function (t, n) {
    wi(e._loadTypeMap, t, n)
  }
  e.setExtensionXhrType = function (t, n) {
    wi(e._xhrTypeMap, t, n)
  }
  var /* [auto-meaningful-name] */e$prototype = e.prototype
  e$prototype.complete = function () {
    this._clearEvents()
    this._finish()
  }
  e$prototype.abort = function (t) {
    if (!this.error) {
      this.error = new Error(t)
      this._clearEvents()
      if (this.xhr) {
        this.xhr.abort()
      } else if (this.xdr) {
        this.xdr.abort()
      } else if (this.data) {
        if (this.data.src) {
          this.data.src = e.EMPTY_GIF
        } else {
          for (; this.data.firstChild;) {
            this.data.removeChild(this.data.firstChild)
          }
        }
      }
      this._finish()
    }
  }
  e$prototype.load = function (t) {
    var n = this
    if (!this.isLoading) {
      if (this.isComplete) {
        if (t) {
          setTimeout(function () {
            return t(n)
          }, 1)
        }
      } else {
        switch (t && this.onComplete.once(t), this._setFlag(e.STATUS_FLAGS.LOADING, true), this.onStart.dispatch(this), false !== this.crossOrigin && "string" === typeof this.crossOrigin || (this.crossOrigin = this._determineCrossOrigin(this.url)), this.loadType) {
          case e.LOAD_TYPE.IMAGE:
            this.type = e.TYPE.IMAGE
            this._loadElement("image")
            break
          case e.LOAD_TYPE.AUDIO:
            this.type = e.TYPE.AUDIO
            this._loadSourceElement("audio")
            break
          case e.LOAD_TYPE.VIDEO:
            this.type = e.TYPE.VIDEO
            this._loadSourceElement("video")
            break
          case e.LOAD_TYPE.XHR:
          default:
            if (vi && this.crossOrigin) {
              this._loadXdr()
            } else {
              this._loadXhr()
            }
        }
      }
    }
  }
  e$prototype._hasFlag = function (e) {
    return 0 !== (this._flags & e)
  }
  e$prototype._setFlag = function (e, t) {
    this._flags = t ? this._flags | e : this._flags & ~e
  }
  e$prototype._clearEvents = function () {
    clearTimeout(this._elementTimer)
    if (this.data && this.data.removeEventListener) {
      this.data.removeEventListener("error", this._boundOnError, false)
      this.data.removeEventListener("load", this._boundComplete, false)
      this.data.removeEventListener("progress", this._boundOnProgress, false)
      this.data.removeEventListener("canplaythrough", this._boundComplete, false)
    }
    if (this.xhr) {
      if (this.xhr.removeEventListener) {
        this.xhr.removeEventListener("error", this._boundXhrOnError, false)
        this.xhr.removeEventListener("timeout", this._boundXhrOnTimeout, false)
        this.xhr.removeEventListener("abort", this._boundXhrOnAbort, false)
        this.xhr.removeEventListener("progress", this._boundOnProgress, false)
        this.xhr.removeEventListener("load", this._boundXhrOnLoad, false)
      } else {
        this.xhr.onerror = null
        this.xhr.ontimeout = null
        this.xhr.onprogress = null
        this.xhr.onload = null
      }
    }
  }
  e$prototype._finish = function () {
    if (this.isComplete) {
      throw new Error("Complete called again for an already completed resource.")
    }
    this._setFlag(e.STATUS_FLAGS.COMPLETE, true)
    this._setFlag(e.STATUS_FLAGS.LOADING, false)
    this.onComplete.dispatch(this)
  }
  e$prototype._loadElement = function (e) {
    if (this.metadata.loadElement) {
      this.data = this.metadata.loadElement
    } else {
      if ("image" === e && "undefined" !== typeof window.Image) {
        this.data = new Image()
      } else {
        this.data = document.createElement(e)
      }
    }
    if (this.crossOrigin) {
      this.data.crossOrigin = this.crossOrigin
    }
    if (!this.metadata.skipSource) {
      this.data.src = this.url
    }
    this.data.addEventListener("error", this._boundOnError, false)
    this.data.addEventListener("load", this._boundComplete, false)
    this.data.addEventListener("progress", this._boundOnProgress, false)
    if (this.timeout) {
      this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout)
    }
  }
  e$prototype._loadSourceElement = function (e) {
    if (this.metadata.loadElement) {
      this.data = this.metadata.loadElement
    } else {
      if ("audio" === e && "undefined" !== typeof window.Audio) {
        this.data = new Audio()
      } else {
        this.data = document.createElement(e)
      }
    }
    if (null !== this.data) {
      if (this.crossOrigin) {
        this.data.crossOrigin = this.crossOrigin
      }
      if (!this.metadata.skipSource) {
        if (navigator.isCocoonJS) {
          this.data.src = Array.isArray(this.url) ? this.url[0] : this.url
        } else if (Array.isArray(this.url)) {
          for (var /* [auto-meaningful-name] */this$metadata$mimeType = this.metadata.mimeType, n = 0; n < this.url.length; ++n) {
            this.data.appendChild(this._createSource(e, this.url[n], Array.isArray(this$metadata$mimeType) ? this$metadata$mimeType[n] : this$metadata$mimeType))
          }
        } else {
          var /* [auto-meaningful-name] */_this$metadata$mimeType = this.metadata.mimeType
          this.data.appendChild(this._createSource(e, this.url, Array.isArray(_this$metadata$mimeType) ? _this$metadata$mimeType[0] : _this$metadata$mimeType))
        }
      }
      this.data.addEventListener("error", this._boundOnError, false)
      this.data.addEventListener("load", this._boundComplete, false)
      this.data.addEventListener("progress", this._boundOnProgress, false)
      this.data.addEventListener("canplaythrough", this._boundComplete, false)
      this.data.load()
      if (this.timeout) {
        this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout)
      }
    } else {
      this.abort("Unsupported element: " + e)
    }
  }
  e$prototype._loadXhr = function () {
    if ("string" !== typeof this.xhrType) {
      this.xhrType = this._determineXhrType()
    }
    var t = this.xhr = new XMLHttpRequest()
    t.open("GET", this.url, true)
    t.timeout = this.timeout
    if (this.xhrType === e.XHR_RESPONSE_TYPE.JSON || this.xhrType === e.XHR_RESPONSE_TYPE.DOCUMENT) {
      t.responseType = e.XHR_RESPONSE_TYPE.TEXT
    } else {
      t.responseType = this.xhrType
    }
    t.addEventListener("error", this._boundXhrOnError, false)
    t.addEventListener("timeout", this._boundXhrOnTimeout, false)
    t.addEventListener("abort", this._boundXhrOnAbort, false)
    t.addEventListener("progress", this._boundOnProgress, false)
    t.addEventListener("load", this._boundXhrOnLoad, false)
    t.send()
  }
  e$prototype._loadXdr = function () {
    if ("string" !== typeof this.xhrType) {
      this.xhrType = this._determineXhrType()
    }
    var e = this.xhr = new XDomainRequest()
    e.timeout = this.timeout || 5e3
    e.onerror = this._boundXhrOnError
    e.ontimeout = this._boundXhrOnTimeout
    e.onprogress = this._boundOnProgress
    e.onload = this._boundXhrOnLoad
    e.open("GET", this.url, true)
    setTimeout(function () {
      return e.send()
    }, 1)
  }
  e$prototype._createSource = function (e, t, n) {
    if (!n) {
      n = e + "/" + this._getExtension(t)
    }
    var r = document.createElement("source")
    r.src = t
    r.type = n
    return r
  }
  e$prototype._onError = function (e) {
    this.abort("Failed to load element using: " + e.target.nodeName)
  }
  e$prototype._onProgress = function (e) {
    if (e && e.lengthComputable) {
      this.onProgress.dispatch(this, e.loaded / e.total)
    }
  }
  e$prototype._onTimeout = function () {
    this.abort("Load timed out.")
  }
  e$prototype._xhrOnError = function () {
    var /* [auto-meaningful-name] */this$xhr = this.xhr
    this.abort(Ei(this$xhr) + " Request failed. Status: " + this$xhr.status + ", text: \"" + this$xhr.statusText + "\"")
  }
  e$prototype._xhrOnTimeout = function () {
    var /* [auto-meaningful-name] */this$xhr = this.xhr
    this.abort(Ei(this$xhr) + " Request timed out.")
  }
  e$prototype._xhrOnAbort = function () {
    var /* [auto-meaningful-name] */this$xhr = this.xhr
    this.abort(Ei(this$xhr) + " Request was aborted by the user.")
  }
  e$prototype._xhrOnLoad = function () {
    var /* [auto-meaningful-name] */this$xhr = this.xhr
    var n = ""
    var r = "undefined" === typeof this$xhr.status ? 200 : this$xhr.status
    if (!("" !== this$xhr.responseType && "text" !== this$xhr.responseType && "undefined" !== typeof this$xhr.responseType)) {
      n = this$xhr.responseText
    }
    if (0 === r && (n.length > 0 || this$xhr.responseType === e.XHR_RESPONSE_TYPE.BUFFER)) {
      r = 200
    } else {
      if (1223 === r) {
        r = 204
      }
    }
    if (2 === (r / 100 | 0)) {
      if (this.xhrType === e.XHR_RESPONSE_TYPE.TEXT) {
        this.data = n
        this.type = e.TYPE.TEXT
      } else if (this.xhrType === e.XHR_RESPONSE_TYPE.JSON) {
        try {
          this.data = JSON.parse(n)
          this.type = e.TYPE.JSON
        } catch (a) {
          return void this.abort("Error trying to parse loaded json: " + a)
        }
      } else if (this.xhrType === e.XHR_RESPONSE_TYPE.DOCUMENT) {
        try {
          if (window.DOMParser) {
            var i = new DOMParser()
            this.data = i.parseFromString(n, "text/xml")
          } else {
            var o = document.createElement("div")
            o.innerHTML = n
            this.data = o
          }
          this.type = e.TYPE.XML
        } catch (a) {
          return void this.abort("Error trying to parse loaded xml: " + a)
        }
      } else {
        this.data = this$xhr.response || n
      }
      this.complete()
    } else {
      this.abort("[" + this$xhr.status + "] " + this$xhr.statusText + ": " + this$xhr.responseURL)
    }
  }
  e$prototype._determineCrossOrigin = function (e, t) {
    if (0 === e.indexOf("data:")) {
      return ""
    }
    if (window.origin !== window.location.origin) {
      return "anonymous"
    }
    t = t || window.location
    if (!mi) {
      mi = document.createElement("a")
    }
    mi.href = e
    var n = !(e = ci()(mi.href, {
      strictMode: true
    })).port && "" === t.port || e.port === t.port
    var r = e.protocol ? e.protocol + ":" : ""
    return e.host === t.hostname && n && r === t.protocol ? "" : "anonymous"
  }
  e$prototype._determineXhrType = function () {
    return e._xhrTypeMap[this.extension] || e.XHR_RESPONSE_TYPE.TEXT
  }
  e$prototype._determineLoadType = function () {
    return e._loadTypeMap[this.extension] || e.LOAD_TYPE.XHR
  }
  e$prototype._getExtension = function () {
    var /* [auto-meaningful-name] */this$url = this.url
    var t = ""
    if (this.isDataUrl) {
      var n = this$url.indexOf("/")
      t = this$url.substring(n + 1, this$url.indexOf(";", n))
    } else {
      var r = this$url.indexOf("?")
      var i = this$url.indexOf("#")
      var o = Math.min(r > -1 ? r : this$url.length, i > -1 ? i : this$url.length)
      t = (this$url = this$url.substring(0, o)).substring(this$url.lastIndexOf(".") + 1)
    }
    return t.toLowerCase()
  }
  e$prototype._getMimeFromXhrType = function (t) {
    switch (t) {
      case e.XHR_RESPONSE_TYPE.BUFFER:
        return "application/octet-binary"
      case e.XHR_RESPONSE_TYPE.BLOB:
        return "application/blob"
      case e.XHR_RESPONSE_TYPE.DOCUMENT:
        return "application/xml"
      case e.XHR_RESPONSE_TYPE.JSON:
        return "application/json"
      case e.XHR_RESPONSE_TYPE.DEFAULT:
      case e.XHR_RESPONSE_TYPE.TEXT:
      default:
        return "text/plain"
    }
  }
  gi(e, [{
    key: "isDataUrl",
    get: function () {
      return this._hasFlag(e.STATUS_FLAGS.DATA_URL)
    }
  }, {
    key: "isComplete",
    get: function () {
      return this._hasFlag(e.STATUS_FLAGS.COMPLETE)
    }
  }, {
    key: "isLoading",
    get: function () {
      return this._hasFlag(e.STATUS_FLAGS.LOADING)
    }
  }])
  return e
}()
function wi(e, t, n) {
  if (t && 0 === t.indexOf(".")) {
    t = t.substring(1)
  }
  if (t) {
    e[t] = n
  }
}
function Ei(e) {
  return e.toString().replace("object ", "")
}
bi.STATUS_FLAGS = {
  NONE: 0,
  DATA_URL: 1,
  COMPLETE: 2,
  LOADING: 4
}
bi.TYPE = {
  UNKNOWN: 0,
  JSON: 1,
  XML: 2,
  IMAGE: 3,
  AUDIO: 4,
  VIDEO: 5,
  TEXT: 6
}
bi.LOAD_TYPE = {
  XHR: 1,
  IMAGE: 2,
  AUDIO: 3,
  VIDEO: 4
}
bi.XHR_RESPONSE_TYPE = {
  DEFAULT: "text",
  BUFFER: "arraybuffer",
  BLOB: "blob",
  DOCUMENT: "document",
  JSON: "json",
  TEXT: "text"
}
bi._loadTypeMap = {
  gif: bi.LOAD_TYPE.IMAGE,
  png: bi.LOAD_TYPE.IMAGE,
  bmp: bi.LOAD_TYPE.IMAGE,
  jpg: bi.LOAD_TYPE.IMAGE,
  jpeg: bi.LOAD_TYPE.IMAGE,
  tif: bi.LOAD_TYPE.IMAGE,
  tiff: bi.LOAD_TYPE.IMAGE,
  webp: bi.LOAD_TYPE.IMAGE,
  tga: bi.LOAD_TYPE.IMAGE,
  svg: bi.LOAD_TYPE.IMAGE,
  "svg+xml": bi.LOAD_TYPE.IMAGE,
  mp3: bi.LOAD_TYPE.AUDIO,
  ogg: bi.LOAD_TYPE.AUDIO,
  wav: bi.LOAD_TYPE.AUDIO,
  mp4: bi.LOAD_TYPE.VIDEO,
  webm: bi.LOAD_TYPE.VIDEO
}
bi._xhrTypeMap = {
  xhtml: bi.XHR_RESPONSE_TYPE.DOCUMENT,
  html: bi.XHR_RESPONSE_TYPE.DOCUMENT,
  htm: bi.XHR_RESPONSE_TYPE.DOCUMENT,
  xml: bi.XHR_RESPONSE_TYPE.DOCUMENT,
  tmx: bi.XHR_RESPONSE_TYPE.DOCUMENT,
  svg: bi.XHR_RESPONSE_TYPE.DOCUMENT,
  tsx: bi.XHR_RESPONSE_TYPE.DOCUMENT,
  gif: bi.XHR_RESPONSE_TYPE.BLOB,
  png: bi.XHR_RESPONSE_TYPE.BLOB,
  bmp: bi.XHR_RESPONSE_TYPE.BLOB,
  jpg: bi.XHR_RESPONSE_TYPE.BLOB,
  jpeg: bi.XHR_RESPONSE_TYPE.BLOB,
  tif: bi.XHR_RESPONSE_TYPE.BLOB,
  tiff: bi.XHR_RESPONSE_TYPE.BLOB,
  webp: bi.XHR_RESPONSE_TYPE.BLOB,
  tga: bi.XHR_RESPONSE_TYPE.BLOB,
  json: bi.XHR_RESPONSE_TYPE.JSON,
  text: bi.XHR_RESPONSE_TYPE.TEXT,
  txt: bi.XHR_RESPONSE_TYPE.TEXT,
  ttf: bi.XHR_RESPONSE_TYPE.BUFFER,
  otf: bi.XHR_RESPONSE_TYPE.BUFFER
}
bi.EMPTY_GIF = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
var xi = window.URL || window.webkitURL
var Ci = {
  caching: function (e, t) {
    var n = this
    if (_i[e.url]) {
      e.data = _i[e.url]
      e.complete()
    } else {
      e.onComplete.once(function () {
        return _i[n.url] = n.data
      })
    }
    t()
  },
  parsing: function (e, t) {
    if (e.data) {
      if (e.xhr && e.xhrType === bi.XHR_RESPONSE_TYPE.BLOB) {
        if (window.Blob && "string" !== typeof e.data) {
          if (0 === e.data.type.indexOf("image")) {
            var n = xi.createObjectURL(e.data)
            e.blob = e.data
            e.data = new Image()
            e.data.src = n
            e.type = bi.TYPE.IMAGE
            return void (e.data.onload = function () {
              xi.revokeObjectURL(n)
              e.data.onload = null
              t()
            })
          }
        } else {
          var r = e.xhr.getResponseHeader("content-type")
          if (r && 0 === r.indexOf("image")) {
            e.data = new Image()
            e.data.src = "data:" + r + ";base64," + function (e) {
              for (var t = "", n = 0; n < e.length;) {
                for (var r = [0, 0, 0], i = [0, 0, 0, 0], o = 0; o < r.length; ++o) {
                  if (n < e.length) {
                    r[o] = 255 & e.charCodeAt(n++)
                  } else {
                    r[o] = 0
                  }
                }
                switch (i[0] = r[0] >> 2, i[1] = (3 & r[0]) << 4 | r[1] >> 4, i[2] = (15 & r[1]) << 2 | r[2] >> 6, i[3] = 63 & r[2], n - (e.length - 1)) {
                  case 2:
                    i[3] = 64
                    i[2] = 64
                    break
                  case 1:
                    i[3] = 64
                }
                for (var a = 0; a < i.length; ++a) {
                  t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(i[a])
                }
              }
              return t
            }(e.xhr.responseText)
            e.type = bi.TYPE.IMAGE
            return void (e.data.onload = function () {
              e.data.onload = null
              t()
            })
          }
        }
      }
      t()
    } else {
      t()
    }
  }
}
var Oi = /(#[\w-]+)?$/
var ki = function () {
  function e(t, n) {
    var r = this
    if (undefined === t) {
      t = ""
    }
    if (undefined === n) {
      n = 10
    }
    this.baseUrl = t
    this.progress = 0
    this.loading = false
    this.defaultQueryString = ""
    this._beforeMiddleware = []
    this._afterMiddleware = []
    this._resourcesParsing = []
    this._boundLoadResource = function (e, t) {
      return r._loadResource(e, t)
    }
    this._queue = pi(this._boundLoadResource, n)
    this._queue.pause()
    this.resources = {}
    this.onProgress = new li.a()
    this.onError = new li.a()
    this.onLoad = new li.a()
    this.onStart = new li.a()
    this.onComplete = new li.a()
    for (var i = 0; i < e._defaultBeforeMiddleware.length; ++i) {
      this.pre(e._defaultBeforeMiddleware[i])
    }
    for (var o = 0; o < e._defaultAfterMiddleware.length; ++o) {
      this.use(e._defaultAfterMiddleware[o])
    }
  }
  var /* [auto-meaningful-name] */e$prototype = e.prototype
  e$prototype.add = function (e, t, n, r) {
    if (Array.isArray(e)) {
      for (var i = 0; i < e.length; ++i) {
        this.add(e[i])
      }
      return this
    }
    if ("object" === typeof e) {
      r = t || e.callback || e.onComplete
      n = e
      t = e.url
      e = e.name || e.key || e.url
    }
    if ("string" !== typeof t) {
      r = n
      n = t
      t = e
    }
    if ("string" !== typeof t) {
      throw new Error("No url passed to add resource to loader.")
    }
    if ("function" === typeof n) {
      r = n
      n = null
    }
    if (this.loading && (!n || !n.parentResource)) {
      throw new Error("Cannot add resources while the loader is running.")
    }
    if (this.resources[e]) {
      throw new Error("Resource named \"" + e + "\" already exists.")
    }
    t = this._prepareUrl(t)
    this.resources[e] = new bi(e, t, n)
    if ("function" === typeof r) {
      this.resources[e].onAfterMiddleware.once(r)
    }
    if (this.loading) {
      for (var /* [auto-meaningful-name] */n$parentResource = n.parentResource, a = [], s = 0; s < n$parentResource.children.length; ++s) {
        if (!n$parentResource.children[s].isComplete) {
          a.push(n$parentResource.children[s])
        }
      }
      var c = n$parentResource.progressChunk * (a.length + 1) / (a.length + 2)
      n$parentResource.children.push(this.resources[e])
      n$parentResource.progressChunk = c
      for (var u = 0; u < a.length; ++u) {
        a[u].progressChunk = c
      }
      this.resources[e].progressChunk = c
    }
    this._queue.push(this.resources[e])
    return this
  }
  e$prototype.pre = function (e) {
    this._beforeMiddleware.push(e)
    return this
  }
  e$prototype.use = function (e) {
    this._afterMiddleware.push(e)
    return this
  }
  e$prototype.reset = function () {
    for (var e in this.progress = 0, this.loading = false, this._queue.kill(), this._queue.pause(), this.resources) {
      var t = this.resources[e]
      if (t._onLoadBinding) {
        t._onLoadBinding.detach()
      }
      if (t.isLoading) {
        t.abort()
      }
    }
    this.resources = {}
    return this
  }
  e$prototype.load = function (e) {
    if ("function" === typeof e) {
      this.onComplete.once(e)
    }
    if (this.loading) {
      return this
    }
    if (this._queue.idle()) {
      this._onStart()
      this._onComplete()
    } else {
      for (var t = 100 / this._queue._tasks.length, n = 0; n < this._queue._tasks.length; ++n) {
        this._queue._tasks[n].data.progressChunk = t
      }
      this._onStart()
      this._queue.resume()
    }
    return this
  }
  e$prototype._prepareUrl = function (e) {
    var t
    var n = ci()(e, {
      strictMode: true
    })
    t = n.protocol || !n.path || 0 === e.indexOf("//") ? e : this.baseUrl.length && this.baseUrl.lastIndexOf("/") !== this.baseUrl.length - 1 && "/" !== e.charAt(0) ? this.baseUrl + "/" + e : this.baseUrl + e
    if (this.defaultQueryString) {
      var r = Oi.exec(t)[0]
      if (-1 !== (t = t.substr(0, t.length - r.length)).indexOf("?")) {
        t += "&" + this.defaultQueryString
      } else {
        t += "?" + this.defaultQueryString
      }
      t += r
    }
    return t
  }
  e$prototype._loadResource = function (e, t) {
    var n = this
    e._dequeue = t
    di(this._beforeMiddleware, function (t, r) {
      t.call(n, e, function () {
        r(e.isComplete ? {} : null)
      })
    }, function () {
      if (e.isComplete) {
        n._onLoad(e)
      } else {
        e._onLoadBinding = e.onComplete.once(n._onLoad, n)
        e.load()
      }
    }, true)
  }
  e$prototype._onStart = function () {
    this.progress = 0
    this.loading = true
    this.onStart.dispatch(this)
  }
  e$prototype._onComplete = function () {
    this.progress = 100
    this.loading = false
    this.onComplete.dispatch(this, this.resources)
  }
  e$prototype._onLoad = function (e) {
    var t = this
    e._onLoadBinding = null
    this._resourcesParsing.push(e)
    e._dequeue()
    di(this._afterMiddleware, function (n, r) {
      n.call(t, e, r)
    }, function () {
      e.onAfterMiddleware.dispatch(e)
      t.progress = Math.min(100, t.progress + e.progressChunk)
      t.onProgress.dispatch(t, e)
      if (e.error) {
        t.onError.dispatch(e.error, t, e)
      } else {
        t.onLoad.dispatch(t, e)
      }
      t._resourcesParsing.splice(t._resourcesParsing.indexOf(e), 1)
      if (t._queue.idle() && 0 === t._resourcesParsing.length) {
        t._onComplete()
      }
    }, true)
  }
  gi(e, [{
    key: "concurrency",
    get: function () {
      return this._queue.concurrency
    },
    set: function (e) {
      this._queue.concurrency = e
    }
  }])
  return e
}()
ki._defaultBeforeMiddleware = []
ki._defaultAfterMiddleware = []
ki.pre = function (e) {
  ki._defaultBeforeMiddleware.push(e)
  return ki
}
ki.use = function (e) {
  ki._defaultAfterMiddleware.push(e)
  return ki
}
var Si = function (e, t) {
  return (Si = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t
  } || function (e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) {
      e[n] = t[n]
    }
  })(e, t)
}
var Ti = function () {
  function e() {}
  e.add = function () {
    bi.setExtensionLoadType("svg", bi.LOAD_TYPE.XHR)
    bi.setExtensionXhrType("svg", bi.XHR_RESPONSE_TYPE.TEXT)
  }
  e.use = function (e, t) {
    if (!e.data || e.type !== bi.TYPE.IMAGE && "svg" !== e.extension) {
      t()
    } else {
      var /* [auto-meaningful-name] */e$data = e.data
      var /* [auto-meaningful-name] */e$url = e.url
      var /* [auto-meaningful-name] */e$name = e.name
      var /* [auto-meaningful-name] */e$metadata = e.metadata
      An.fromLoader(e$data, e$url, e$name, e$metadata).then(function (n) {
        e.texture = n
        t()
      }).catch(t)
    }
  }
  return e
}()
var Bi = function (e) {
  function t(n, r) {
    for (var i = e.call(this, n, r) || this, o = 0; o < t._plugins.length; ++o) {
      var a = t._plugins[o]
      var /* [auto-meaningful-name] */a$pre = a.pre
      var /* [auto-meaningful-name] */a$use = a.use
      if (a$pre) {
        i.pre(a$pre)
      }
      if (a$use) {
        i.use(a$use)
      }
    }
    i._protected = false
    return i
  }
  (function (e, t) {
    function n() {
      this.constructor = e
    }
    Si(e, t)
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n())
  })(t, e)
  t.prototype.destroy = function () {
    if (!this._protected) {
      this.reset()
    }
  }
  Object.defineProperty(t, "shared", {
    get: function () {
      var /* [auto-meaningful-name] */t$_shared = t._shared
      if (!t$_shared) {
        (t$_shared = new t())._protected = true
        t._shared = t$_shared
      }
      return t$_shared
    },
    enumerable: false,
    configurable: true
  })
  t.registerPlugin = function (e) {
    t._plugins.push(e)
    if (e.add) {
      e.add()
    }
    return t
  }
  t._plugins = []
  return t
}(ki)
Bi.registerPlugin({
  use: Ci.parsing
})
Bi.registerPlugin(Ti)
var Di = function () {
  function e() {}
  e.init = function (e) {
    e = Object.assign({
      sharedLoader: false
    }, e)
    this.loader = e.sharedLoader ? Bi.shared : new Bi()
  }
  e.destroy = function () {
    if (this.loader) {
      this.loader.destroy()
      this.loader = null
    }
  }
  return e
}()
var Ii = bi
var Fi = function () {
  function e(e, t, n) {
    if (undefined === n) {
      n = null
    }
    this._texture = e instanceof An ? e : null
    this.baseTexture = e instanceof Jt ? e : this._texture.baseTexture
    this.textures = {}
    this.animations = {}
    this.data = t
    var /* [auto-meaningful-name] */this$baseTexture$resource = this.baseTexture.resource
    this.resolution = this._updateResolution(n || (this$baseTexture$resource ? this$baseTexture$resource.url : null))
    this._frames = this.data.frames
    this._frameKeys = Object.keys(this._frames)
    this._batchIndex = 0
    this._callback = null
  }
  e.prototype._updateResolution = function (e) {
    if (undefined === e) {
      e = null
    }
    var /* [auto-meaningful-name] */this$data$meta$scale = this.data.meta.scale
    var n = rt(e, null)
    if (null === n) {
      n = undefined !== this$data$meta$scale ? parseFloat(this$data$meta$scale) : 1
    }
    if (1 !== n) {
      this.baseTexture.setResolution(n)
    }
    return n
  }
  e.prototype.parse = function (t) {
    this._batchIndex = 0
    this._callback = t
    if (this._frameKeys.length <= e.BATCH_SIZE) {
      this._processFrames(0)
      this._processAnimations()
      this._parseComplete()
    } else {
      this._nextBatch()
    }
  }
  e.prototype._processFrames = function (t) {
    for (var n = t, /* [auto-meaningful-name] */e$BATCH_SIZE = e.BATCH_SIZE; n - t < e$BATCH_SIZE && n < this._frameKeys.length;) {
      var i = this._frameKeys[n]
      var o = this._frames[i]
      var /* [auto-meaningful-name] */o$frame = o.frame
      if (o$frame) {
        var s = null
        var c = null
        var u = false !== o.trimmed && o.sourceSize ? o.sourceSize : o.frame
        var l = new ct(0, 0, Math.floor(u.w) / this.resolution, Math.floor(u.h) / this.resolution)
        s = o.rotated ? new ct(Math.floor(o$frame.x) / this.resolution, Math.floor(o$frame.y) / this.resolution, Math.floor(o$frame.h) / this.resolution, Math.floor(o$frame.w) / this.resolution) : new ct(Math.floor(o$frame.x) / this.resolution, Math.floor(o$frame.y) / this.resolution, Math.floor(o$frame.w) / this.resolution, Math.floor(o$frame.h) / this.resolution)
        if (false !== o.trimmed && o.spriteSourceSize) {
          c = new ct(Math.floor(o.spriteSourceSize.x) / this.resolution, Math.floor(o.spriteSourceSize.y) / this.resolution, Math.floor(o$frame.w) / this.resolution, Math.floor(o$frame.h) / this.resolution)
        }
        this.textures[i] = new An(this.baseTexture, s, l, c, o.rotated ? 2 : 0, o.anchor)
        An.addToCache(this.textures[i], i)
      }
      n++
    }
  }
  e.prototype._processAnimations = function () {
    var e = this.data.animations || {}
    for (var t in e) {
      this.animations[t] = []
      for (var n = 0; n < e[t].length; n++) {
        var r = e[t][n]
        this.animations[t].push(this.textures[r])
      }
    }
  }
  e.prototype._parseComplete = function () {
    var /* [auto-meaningful-name] */this$_callback = this._callback
    this._callback = null
    this._batchIndex = 0
    this$_callback.call(this, this.textures)
  }
  e.prototype._nextBatch = function () {
    var t = this
    this._processFrames(this._batchIndex * e.BATCH_SIZE)
    this._batchIndex++
    setTimeout(function () {
      if (t._batchIndex * e.BATCH_SIZE < t._frameKeys.length) {
        t._nextBatch()
      } else {
        t._processAnimations()
        t._parseComplete()
      }
    }, 0)
  }
  e.prototype.destroy = function (e) {
    var /* [auto-meaningful-name] */this$_texture
    for (var n in undefined === e && (e = false), this.textures) this.textures[n].destroy()
    this._frames = null
    this._frameKeys = null
    this.data = null
    this.textures = null
    if (e) {
      if (!(null === (this$_texture = this._texture) || undefined === this$_texture)) {
        this$_texture.destroy()
      }
      this.baseTexture.destroy()
    }
    this._texture = null
    this.baseTexture = null
  }
  e.BATCH_SIZE = 1e3
  return e
}()
var Ri = function () {
  function e() {}
  e.use = function (t, n) {
    var /* [auto-meaningful-name] */t$data
    var i
    var o = this
    var a = t.name + "_image"
    if (t.data && t.type === Ii.TYPE.JSON && t.data.frames && !o.resources[a]) {
      var s = null === (i = null === (t$data = t.data) || undefined === t$data ? undefined : t$data.meta) || undefined === i ? undefined : i.related_multi_packs
      if (Array.isArray(s)) {
        for (var c = function (e) {
            if ("string" !== typeof e) {
              return "continue"
            }
            var n = e.replace(".json", "")
            var r = ge.resolve(t.url.replace(o.baseUrl, ""), e)
            if (o.resources[n] || Object.values(o.resources).some(function (e) {
              return ge.format(ge.parse(e.url)) === r
            })) {
              return "continue"
            }
            var i = {
              crossOrigin: t.crossOrigin,
              loadType: Ii.LOAD_TYPE.XHR,
              xhrType: Ii.XHR_RESPONSE_TYPE.JSON,
              parentResource: t
            }
            o.add(n, r, i)
          }, u = 0, l = s; u < l.length; u++) {
          c(l[u])
        }
      }
      var f = {
        crossOrigin: t.crossOrigin,
        metadata: t.metadata.imageMetadata,
        parentResource: t
      }
      var d = e.getResourcePath(t, o.baseUrl)
      o.add(a, d, f, function (e) {
        if (e.error) {
          n(e.error)
        } else {
          var r = new Fi(e.texture, t.data, t.url)
          r.parse(function () {
            t.spritesheet = r
            t.textures = r.textures
            n()
          })
        }
      })
    } else {
      n()
    }
  }
  e.getResourcePath = function (e, t) {
    return e.isDataUrl ? e.data.meta.image : ge.resolve(e.url.replace(t, ""), e.data.meta.image)
  }
  return e
}()
var Pi = function (e, t) {
  return (Pi = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t
  } || function (e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) {
      e[n] = t[n]
    }
  })(e, t)
}
var Ni = new ht()
var Mi = new Uint16Array([0, 1, 2, 0, 2, 3])
var ji = function (e) {
  function t(t) {
    var n = e.call(this) || this
    n._anchor = new pt(n._onAnchorUpdate, n, t ? t.defaultAnchor.x : 0, t ? t.defaultAnchor.y : 0)
    n._texture = null
    n._width = 0
    n._height = 0
    n._tint = null
    n._tintRGB = null
    n.tint = 16777215
    n.blendMode = q.NORMAL
    n._cachedTint = 16777215
    n.uvs = null
    n.texture = t || An.EMPTY
    n.vertexData = new Float32Array(8)
    n.vertexTrimmedData = null
    n._transformID = -1
    n._textureID = -1
    n._transformTrimmedID = -1
    n._textureTrimmedID = -1
    n.indices = Mi
    n.pluginName = "batch"
    n.isSprite = true
    n._roundPixels = fe.ROUND_PIXELS
    return n
  }
  (function (e, t) {
    function n() {
      this.constructor = e
    }
    Pi(e, t)
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n())
  })(t, e)
  t.prototype._onTextureUpdate = function () {
    this._textureID = -1
    this._textureTrimmedID = -1
    this._cachedTint = 16777215
    if (this._width) {
      this.scale.x = He(this.scale.x) * this._width / this._texture.orig.width
    }
    if (this._height) {
      this.scale.y = He(this.scale.y) * this._height / this._texture.orig.height
    }
  }
  t.prototype._onAnchorUpdate = function () {
    this._transformID = -1
    this._transformTrimmedID = -1
  }
  t.prototype.calculateVertices = function () {
    var /* [auto-meaningful-name] */this$_texture = this._texture
    if (this._transformID !== this.transform._worldID || this._textureID !== this$_texture._updateID) {
      if (this._textureID !== this$_texture._updateID) {
        this.uvs = this._texture._uvs.uvsFloat32
      }
      this._transformID = this.transform._worldID
      this._textureID = this$_texture._updateID
      var /* [auto-meaningful-name] */this$transform$worldTransform = this.transform.worldTransform
      var /* [auto-meaningful-name] */this$transform$worldTransform$a = this$transform$worldTransform.a
      var /* [auto-meaningful-name] */this$transform$worldTransform$b = this$transform$worldTransform.b
      var /* [auto-meaningful-name] */this$transform$worldTransform$c = this$transform$worldTransform.c
      var /* [auto-meaningful-name] */this$transform$worldTransform$d = this$transform$worldTransform.d
      var /* [auto-meaningful-name] */this$transform$worldTransform$tx = this$transform$worldTransform.tx
      var /* [auto-meaningful-name] */this$transform$worldTransform$ty = this$transform$worldTransform.ty
      var /* [auto-meaningful-name] */this$vertexData = this.vertexData
      var /* [auto-meaningful-name] */this$_texture$trim = this$_texture.trim
      var /* [auto-meaningful-name] */this$_texture$orig = this$_texture.orig
      var /* [auto-meaningful-name] */this$_anchor = this._anchor
      var d = 0
      var h = 0
      var p = 0
      var _ = 0
      if (this$_texture$trim) {
        d = (h = this$_texture$trim.x - this$_anchor._x * this$_texture$orig.width) + this$_texture$trim.width
        p = (_ = this$_texture$trim.y - this$_anchor._y * this$_texture$orig.height) + this$_texture$trim.height
      } else {
        d = (h = -this$_anchor._x * this$_texture$orig.width) + this$_texture$orig.width
        p = (_ = -this$_anchor._y * this$_texture$orig.height) + this$_texture$orig.height
      }
      this$vertexData[0] = this$transform$worldTransform$a * h + this$transform$worldTransform$c * _ + this$transform$worldTransform$tx
      this$vertexData[1] = this$transform$worldTransform$d * _ + this$transform$worldTransform$b * h + this$transform$worldTransform$ty
      this$vertexData[2] = this$transform$worldTransform$a * d + this$transform$worldTransform$c * _ + this$transform$worldTransform$tx
      this$vertexData[3] = this$transform$worldTransform$d * _ + this$transform$worldTransform$b * d + this$transform$worldTransform$ty
      this$vertexData[4] = this$transform$worldTransform$a * d + this$transform$worldTransform$c * p + this$transform$worldTransform$tx
      this$vertexData[5] = this$transform$worldTransform$d * p + this$transform$worldTransform$b * d + this$transform$worldTransform$ty
      this$vertexData[6] = this$transform$worldTransform$a * h + this$transform$worldTransform$c * p + this$transform$worldTransform$tx
      this$vertexData[7] = this$transform$worldTransform$d * p + this$transform$worldTransform$b * h + this$transform$worldTransform$ty
      if (this._roundPixels) {
        for (var /* [auto-meaningful-name] */fe$RESOLUTION = fe.RESOLUTION, g = 0; g < this$vertexData.length; ++g) {
          this$vertexData[g] = Math.round((this$vertexData[g] * fe$RESOLUTION | 0) / fe$RESOLUTION)
        }
      }
    }
  }
  t.prototype.calculateTrimmedVertices = function () {
    if (this.vertexTrimmedData) {
      if (this._transformTrimmedID === this.transform._worldID && this._textureTrimmedID === this._texture._updateID) {
        return
      }
    } else {
      this.vertexTrimmedData = new Float32Array(8)
    }
    this._transformTrimmedID = this.transform._worldID
    this._textureTrimmedID = this._texture._updateID
    var /* [auto-meaningful-name] */this$_texture = this._texture
    var /* [auto-meaningful-name] */this$vertexTrimmedData = this.vertexTrimmedData
    var /* [auto-meaningful-name] */this$_texture$orig = this$_texture.orig
    var /* [auto-meaningful-name] */this$_anchor = this._anchor
    var /* [auto-meaningful-name] */this$transform$worldTransform = this.transform.worldTransform
    var /* [auto-meaningful-name] */this$transform$worldTransform$a = this$transform$worldTransform.a
    var /* [auto-meaningful-name] */this$transform$worldTransform$b = this$transform$worldTransform.b
    var /* [auto-meaningful-name] */this$transform$worldTransform$c = this$transform$worldTransform.c
    var /* [auto-meaningful-name] */this$transform$worldTransform$d = this$transform$worldTransform.d
    var /* [auto-meaningful-name] */this$transform$worldTransform$tx = this$transform$worldTransform.tx
    var /* [auto-meaningful-name] */this$transform$worldTransform$ty = this$transform$worldTransform.ty
    var f = -this$_anchor._x * this$_texture$orig.width
    var d = f + this$_texture$orig.width
    var h = -this$_anchor._y * this$_texture$orig.height
    var p = h + this$_texture$orig.height
    this$vertexTrimmedData[0] = this$transform$worldTransform$a * f + this$transform$worldTransform$c * h + this$transform$worldTransform$tx
    this$vertexTrimmedData[1] = this$transform$worldTransform$d * h + this$transform$worldTransform$b * f + this$transform$worldTransform$ty
    this$vertexTrimmedData[2] = this$transform$worldTransform$a * d + this$transform$worldTransform$c * h + this$transform$worldTransform$tx
    this$vertexTrimmedData[3] = this$transform$worldTransform$d * h + this$transform$worldTransform$b * d + this$transform$worldTransform$ty
    this$vertexTrimmedData[4] = this$transform$worldTransform$a * d + this$transform$worldTransform$c * p + this$transform$worldTransform$tx
    this$vertexTrimmedData[5] = this$transform$worldTransform$d * p + this$transform$worldTransform$b * d + this$transform$worldTransform$ty
    this$vertexTrimmedData[6] = this$transform$worldTransform$a * f + this$transform$worldTransform$c * p + this$transform$worldTransform$tx
    this$vertexTrimmedData[7] = this$transform$worldTransform$d * p + this$transform$worldTransform$b * f + this$transform$worldTransform$ty
  }
  t.prototype._render = function (e) {
    this.calculateVertices()
    e.batch.setObjectRenderer(e.plugins[this.pluginName])
    e.plugins[this.pluginName].render(this)
  }
  t.prototype._calculateBounds = function () {
    var /* [auto-meaningful-name] */this$_texture$trim = this._texture.trim
    var /* [auto-meaningful-name] */this$_texture$orig = this._texture.orig
    if (!this$_texture$trim || this$_texture$trim.width === this$_texture$orig.width && this$_texture$trim.height === this$_texture$orig.height) {
      this.calculateVertices()
      this._bounds.addQuad(this.vertexData)
    } else {
      this.calculateTrimmedVertices()
      this._bounds.addQuad(this.vertexTrimmedData)
    }
  }
  t.prototype.getLocalBounds = function (t) {
    return 0 === this.children.length ? (this._bounds.minX = this._texture.orig.width * -this._anchor._x, this._bounds.minY = this._texture.orig.height * -this._anchor._y, this._bounds.maxX = this._texture.orig.width * (1 - this._anchor._x), this._bounds.maxY = this._texture.orig.height * (1 - this._anchor._y), t || (this._localBoundsRect || (this._localBoundsRect = new ct()), t = this._localBoundsRect), this._bounds.getRectangle(t)) : e.prototype.getLocalBounds.call(this, t)
  }
  t.prototype.containsPoint = function (e) {
    this.worldTransform.applyInverse(e, Ni)
    var /* [auto-meaningful-name] */this$_texture$orig$width = this._texture.orig.width
    var /* [auto-meaningful-name] */this$_texture$orig$height = this._texture.orig.height
    var r = -this$_texture$orig$width * this.anchor.x
    var i = 0
    return Ni.x >= r && Ni.x < r + this$_texture$orig$width && (i = -this$_texture$orig$height * this.anchor.y, Ni.y >= i && Ni.y < i + this$_texture$orig$height)
  }
  t.prototype.destroy = function (t) {
    e.prototype.destroy.call(this, t)
    this._texture.off("update", this._onTextureUpdate, this)
    this._anchor = null
    if ("boolean" === typeof t ? t : t && t.texture) {
      var n = "boolean" === typeof t ? t : t && t.baseTexture
      this._texture.destroy(!!n)
    }
    this._texture = null
  }
  t.from = function (e, n) {
    return new t(e instanceof An ? e : An.from(e, n))
  }
  Object.defineProperty(t.prototype, "roundPixels", {
    get: function () {
      return this._roundPixels
    },
    set: function (e) {
      if (this._roundPixels !== e) {
        this._transformID = -1
      }
      this._roundPixels = e
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "width", {
    get: function () {
      return Math.abs(this.scale.x) * this._texture.orig.width
    },
    set: function (e) {
      var t = He(this.scale.x) || 1
      this.scale.x = t * e / this._texture.orig.width
      this._width = e
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "height", {
    get: function () {
      return Math.abs(this.scale.y) * this._texture.orig.height
    },
    set: function (e) {
      var t = He(this.scale.y) || 1
      this.scale.y = t * e / this._texture.orig.height
      this._height = e
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "anchor", {
    get: function () {
      return this._anchor
    },
    set: function (e) {
      this._anchor.copyFrom(e)
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "tint", {
    get: function () {
      return this._tint
    },
    set: function (e) {
      this._tint = e
      this._tintRGB = (e >> 16) + (65280 & e) + ((255 & e) << 16)
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "texture", {
    get: function () {
      return this._texture
    },
    set: function (e) {
      if (this._texture !== e) {
        if (this._texture) {
          this._texture.off("update", this._onTextureUpdate, this)
        }
        this._texture = e || An.EMPTY
        this._cachedTint = 16777215
        this._textureID = -1
        this._textureTrimmedID = -1
        if (e) {
          if (e.baseTexture.valid) {
            this._onTextureUpdate()
          } else {
            e.once("update", this._onTextureUpdate, this)
          }
        }
      }
    },
    enumerable: false,
    configurable: true
  })
  return t
}(Pt)
var Li = function (e, t) {
  return (Li = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t
  } || function (e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) {
      e[n] = t[n]
    }
  })(e, t)
}
function Ui(e, t) {
  function n() {
    this.constructor = e
  }
  Li(e, t)
  e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n())
}
var Hi = new ht()
var Vi = function (e) {
  function t(t, n, r) {
    if (undefined === n) {
      n = 100
    }
    if (undefined === r) {
      r = 100
    }
    var i = e.call(this, t) || this
    i.tileTransform = new Ct()
    i._width = n
    i._height = r
    i.uvMatrix = i.texture.uvMatrix || new br(t)
    i.pluginName = "tilingSprite"
    i.uvRespectAnchor = false
    return i
  }
  Ui(t, e)
  Object.defineProperty(t.prototype, "clampMargin", {
    get: function () {
      return this.uvMatrix.clampMargin
    },
    set: function (e) {
      this.uvMatrix.clampMargin = e
      this.uvMatrix.update(true)
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "tileScale", {
    get: function () {
      return this.tileTransform.scale
    },
    set: function (e) {
      this.tileTransform.scale.copyFrom(e)
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "tilePosition", {
    get: function () {
      return this.tileTransform.position
    },
    set: function (e) {
      this.tileTransform.position.copyFrom(e)
    },
    enumerable: false,
    configurable: true
  })
  t.prototype._onTextureUpdate = function () {
    if (this.uvMatrix) {
      this.uvMatrix.texture = this._texture
    }
    this._cachedTint = 16777215
  }
  t.prototype._render = function (e) {
    var /* [auto-meaningful-name] */this$_texture = this._texture
    if (this$_texture && this$_texture.valid) {
      this.tileTransform.updateLocalTransform()
      this.uvMatrix.update()
      e.batch.setObjectRenderer(e.plugins[this.pluginName])
      e.plugins[this.pluginName].render(this)
    }
  }
  t.prototype._calculateBounds = function () {
    var e = this._width * -this._anchor._x
    var t = this._height * -this._anchor._y
    var n = this._width * (1 - this._anchor._x)
    var r = this._height * (1 - this._anchor._y)
    this._bounds.addFrame(this.transform, e, t, n, r)
  }
  t.prototype.getLocalBounds = function (t) {
    return 0 === this.children.length ? (this._bounds.minX = this._width * -this._anchor._x, this._bounds.minY = this._height * -this._anchor._y, this._bounds.maxX = this._width * (1 - this._anchor._x), this._bounds.maxY = this._height * (1 - this._anchor._y), t || (this._localBoundsRect || (this._localBoundsRect = new ct()), t = this._localBoundsRect), this._bounds.getRectangle(t)) : e.prototype.getLocalBounds.call(this, t)
  }
  t.prototype.containsPoint = function (e) {
    this.worldTransform.applyInverse(e, Hi)
    var /* [auto-meaningful-name] */this$_width = this._width
    var /* [auto-meaningful-name] */this$_height = this._height
    var r = -this$_width * this.anchor._x
    if (Hi.x >= r && Hi.x < r + this$_width) {
      var i = -this$_height * this.anchor._y
      if (Hi.y >= i && Hi.y < i + this$_height) {
        return true
      }
    }
    return false
  }
  t.prototype.destroy = function (t) {
    e.prototype.destroy.call(this, t)
    this.tileTransform = null
    this.uvMatrix = null
  }
  t.from = function (e, n) {
    return new t(e instanceof An ? e : An.from(e, n), n.width, n.height)
  }
  Object.defineProperty(t.prototype, "width", {
    get: function () {
      return this._width
    },
    set: function (e) {
      this._width = e
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "height", {
    get: function () {
      return this._height
    },
    set: function (e) {
      this._height = e
    },
    enumerable: false,
    configurable: true
  })
  return t
}(ji)
var /* [auto-meaningful-name] */AttributeVec2AVertexPosition_nattributeVec2ATextureCoord_n_nuniformMat3ProjectionMatrix_nuniformMat3TranslationMatrix_nuniformMat3UTransform_n_nvaryingVec2VTextureCoord_n_nvoidMainVoid_n_nGl_PositionVec4ProjectionMatrixTranslationMatrixVec3AVertexPosition1$0$xy0$01$0_n_nVTextureCoordUTransformVec3ATextureCoord1$0$xy_n_n = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n"
var zi = new _t()
var Qi = function (e) {
  function t(t) {
    var n = e.call(this, t) || this
    var r = {
      globals: n.renderer.globalUniforms
    }
    n.shader = gr.from(AttributeVec2AVertexPosition_nattributeVec2ATextureCoord_n_nuniformMat3ProjectionMatrix_nuniformMat3TranslationMatrix_nuniformMat3UTransform_n_nvaryingVec2VTextureCoord_n_nvoidMainVoid_n_nGl_PositionVec4ProjectionMatrixTranslationMatrixVec3AVertexPosition1$0$xy0$01$0_n_nVTextureCoordUTransformVec3ATextureCoord1$0$xy_n_n, "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform mat3 uMapCoord;\nuniform vec4 uClampFrame;\nuniform vec2 uClampOffset;\n\nvoid main(void)\n{\n    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);\n    coord = (uMapCoord * vec3(coord, 1.0)).xy;\n    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);\n\n    vec4 texSample = texture2D(uSampler, coord);\n    gl_FragColor = texSample * uColor;\n}\n", r)
    n.simpleShader = gr.from(AttributeVec2AVertexPosition_nattributeVec2ATextureCoord_n_nuniformMat3ProjectionMatrix_nuniformMat3TranslationMatrix_nuniformMat3UTransform_n_nvaryingVec2VTextureCoord_n_nvoidMainVoid_n_nGl_PositionVec4ProjectionMatrixTranslationMatrixVec3AVertexPosition1$0$xy0$01$0_n_nVTextureCoordUTransformVec3ATextureCoord1$0$xy_n_n, "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\n\nvoid main(void)\n{\n    vec4 sample = texture2D(uSampler, vTextureCoord);\n    gl_FragColor = sample * uColor;\n}\n", r)
    n.quad = new Bn()
    n.state = vr.for2d()
    return n
  }
  Ui(t, e)
  t.prototype.render = function (e) {
    var /* [auto-meaningful-name] */this$renderer = this.renderer
    var /* [auto-meaningful-name] */this$quad = this.quad
    var /* [auto-meaningful-name] */this$quad$vertices = this$quad.vertices
    this$quad$vertices[0] = this$quad$vertices[6] = e._width * -e.anchor.x
    this$quad$vertices[1] = this$quad$vertices[3] = e._height * -e.anchor.y
    this$quad$vertices[2] = this$quad$vertices[4] = e._width * (1 - e.anchor.x)
    this$quad$vertices[5] = this$quad$vertices[7] = e._height * (1 - e.anchor.y)
    var i = e.uvRespectAnchor ? e.anchor.x : 0
    var o = e.uvRespectAnchor ? e.anchor.y : 0;
    (this$quad$vertices = this$quad.uvs)[0] = this$quad$vertices[6] = -i
    this$quad$vertices[1] = this$quad$vertices[3] = -o
    this$quad$vertices[2] = this$quad$vertices[4] = 1 - i
    this$quad$vertices[5] = this$quad$vertices[7] = 1 - o
    this$quad.invalidate()
    var /* [auto-meaningful-name] */e$_texture = e._texture
    var /* [auto-meaningful-name] */e$_texture$baseTexture = e$_texture.baseTexture
    var /* [auto-meaningful-name] */e$tileTransform$localTransform = e.tileTransform.localTransform
    var /* [auto-meaningful-name] */e$uvMatrix = e.uvMatrix
    var l = e$_texture$baseTexture.isPowerOfTwo && e$_texture.frame.width === e$_texture$baseTexture.width && e$_texture.frame.height === e$_texture$baseTexture.height
    if (l) {
      if (e$_texture$baseTexture._glTextures[this$renderer.CONTEXT_UID]) {
        l = e$_texture$baseTexture.wrapMode !== re.CLAMP
      } else {
        if (e$_texture$baseTexture.wrapMode === re.CLAMP) {
          e$_texture$baseTexture.wrapMode = re.REPEAT
        }
      }
    }
    var f = l ? this.simpleShader : this.shader
    var /* [auto-meaningful-name] */e$_texture$width = e$_texture.width
    var /* [auto-meaningful-name] */e$_texture$height = e$_texture.height
    var /* [auto-meaningful-name] */e$_width = e._width
    var /* [auto-meaningful-name] */e$_height = e._height
    zi.set(e$tileTransform$localTransform.a * e$_texture$width / e$_width, e$tileTransform$localTransform.b * e$_texture$width / e$_height, e$tileTransform$localTransform.c * e$_texture$height / e$_width, e$tileTransform$localTransform.d * e$_texture$height / e$_height, e$tileTransform$localTransform.tx / e$_width, e$tileTransform$localTransform.ty / e$_height)
    zi.invert()
    if (l) {
      zi.prepend(e$uvMatrix.mapCoord)
    } else {
      f.uniforms.uMapCoord = e$uvMatrix.mapCoord.toArray(true)
      f.uniforms.uClampFrame = e$uvMatrix.uClampFrame
      f.uniforms.uClampOffset = e$uvMatrix.uClampOffset
    }
    f.uniforms.uTransform = zi.toArray(true)
    f.uniforms.uColor = Ie(e.tint, e.worldAlpha, f.uniforms.uColor, e$_texture$baseTexture.alphaMode)
    f.uniforms.translationMatrix = e.transform.worldTransform.toArray(true)
    f.uniforms.uSampler = e$_texture
    this$renderer.shader.bind(f)
    this$renderer.geometry.bind(this$quad)
    this.state.blendMode = Te(e.blendMode, e$_texture$baseTexture.alphaMode)
    this$renderer.state.set(this.state)
    this$renderer.geometry.draw(this.renderer.gl.TRIANGLES, 6, 0)
  }
  return t
}(Mn)
var Wi = new _t()
It.prototype._cacheAsBitmap = false
It.prototype._cacheData = null
It.prototype._cacheAsBitmapResolution = null
var Ki = function () {
  this.textureCacheId = null
  this.originalRender = null
  this.originalRenderCanvas = null
  this.originalCalculateBounds = null
  this.originalGetLocalBounds = null
  this.originalUpdateTransform = null
  this.originalDestroy = null
  this.originalMask = null
  this.originalFilterArea = null
  this.originalContainsPoint = null
  this.sprite = null
}
Object.defineProperties(It.prototype, {
  cacheAsBitmapResolution: {
    get: function () {
      return this._cacheAsBitmapResolution
    },
    set: function (e) {
      if (e !== this._cacheAsBitmapResolution) {
        this._cacheAsBitmapResolution = e
        if (this.cacheAsBitmap) {
          this.cacheAsBitmap = false
          this.cacheAsBitmap = true
        }
      }
    }
  },
  cacheAsBitmap: {
    get: function () {
      return this._cacheAsBitmap
    },
    set: function (e) {
      var t
      if (this._cacheAsBitmap !== e) {
        this._cacheAsBitmap = e
        if (e) {
          if (!this._cacheData) {
            this._cacheData = new Ki()
          }
          (t = this._cacheData).originalRender = this.render
          t.originalRenderCanvas = this.renderCanvas
          t.originalUpdateTransform = this.updateTransform
          t.originalCalculateBounds = this.calculateBounds
          t.originalGetLocalBounds = this.getLocalBounds
          t.originalDestroy = this.destroy
          t.originalContainsPoint = this.containsPoint
          t.originalMask = this._mask
          t.originalFilterArea = this.filterArea
          this.render = this._renderCached
          this.renderCanvas = this._renderCachedCanvas
          this.destroy = this._cacheAsBitmapDestroy
        } else {
          if ((t = this._cacheData).sprite) {
            this._destroyCachedDisplayObject()
          }
          this.render = t.originalRender
          this.renderCanvas = t.originalRenderCanvas
          this.calculateBounds = t.originalCalculateBounds
          this.getLocalBounds = t.originalGetLocalBounds
          this.destroy = t.originalDestroy
          this.updateTransform = t.originalUpdateTransform
          this.containsPoint = t.originalContainsPoint
          this._mask = t.originalMask
          this.filterArea = t.originalFilterArea
        }
      }
    }
  }
})
It.prototype._renderCached = function (e) {
  if (!(!this.visible || this.worldAlpha <= 0 || !this.renderable)) {
    this._initCachedDisplayObject(e)
    this._cacheData.sprite.transform._worldID = this.transform._worldID
    this._cacheData.sprite.worldAlpha = this.worldAlpha
    this._cacheData.sprite._render(e)
  }
}
It.prototype._initCachedDisplayObject = function (e) {
  if (!this._cacheData || !this._cacheData.sprite) {
    var /* [auto-meaningful-name] */this$alpha = this.alpha
    this.alpha = 1
    e.batch.flush()
    var n = this.getLocalBounds(null, true).clone()
    if (this.filters) {
      var /* [auto-meaningful-name] */this$filters0$padding = this.filters[0].padding
      n.pad(this$filters0$padding)
    }
    n.ceil(fe.RESOLUTION)
    var /* [auto-meaningful-name] */e$renderTexture$current = e.renderTexture.current
    var o = e.renderTexture.sourceFrame.clone()
    var a = e.renderTexture.destinationFrame.clone()
    var /* [auto-meaningful-name] */e$projection$transform = e.projection.transform
    var c = vn.create({
      width: n.width,
      height: n.height,
      resolution: this.cacheAsBitmapResolution || e.resolution
    })
    var u = "cacheAsBitmap_" + Ge()
    this._cacheData.textureCacheId = u
    Jt.addToCache(c.baseTexture, u)
    An.addToCache(c, u)
    var l = this.transform.localTransform.copyTo(Wi).invert().translate(-n.x, -n.y)
    this.render = this._cacheData.originalRender
    e.render(this, {
      renderTexture: c,
      clear: true,
      transform: l,
      skipUpdateTransform: false
    })
    e.projection.transform = e$projection$transform
    e.renderTexture.bind(e$renderTexture$current, o, a)
    this.render = this._renderCached
    this.updateTransform = this.displayObjectUpdateTransform
    this.calculateBounds = this._calculateCachedBounds
    this.getLocalBounds = this._getCachedLocalBounds
    this._mask = null
    this.filterArea = null
    this.alpha = this$alpha
    var f = new ji(c)
    f.transform.worldTransform = this.transform.worldTransform
    f.anchor.x = -n.x / n.width
    f.anchor.y = -n.y / n.height
    f.alpha = this$alpha
    f._bounds = this._bounds
    this._cacheData.sprite = f
    this.transform._parentID = -1
    if (this.parent) {
      this.updateTransform()
    } else {
      this.enableTempParent()
      this.updateTransform()
      this.disableTempParent(null)
    }
    this.containsPoint = f.containsPoint.bind(f)
  }
}
It.prototype._renderCachedCanvas = function (e) {
  if (!(!this.visible || this.worldAlpha <= 0 || !this.renderable)) {
    this._initCachedDisplayObjectCanvas(e)
    this._cacheData.sprite.worldAlpha = this.worldAlpha
    this._cacheData.sprite._renderCanvas(e)
  }
}
It.prototype._initCachedDisplayObjectCanvas = function (e) {
  if (!this._cacheData || !this._cacheData.sprite) {
    var t = this.getLocalBounds(null, true)
    var /* [auto-meaningful-name] */this$alpha = this.alpha
    this.alpha = 1
    var /* [auto-meaningful-name] */e$context = e.context
    var /* [auto-meaningful-name] */e$_projTransform = e._projTransform
    t.ceil(fe.RESOLUTION)
    var o = vn.create({
      width: t.width,
      height: t.height
    })
    var a = "cacheAsBitmap_" + Ge()
    this._cacheData.textureCacheId = a
    Jt.addToCache(o.baseTexture, a)
    An.addToCache(o, a)
    var s = Wi
    this.transform.localTransform.copyTo(s)
    s.invert()
    s.tx -= t.x
    s.ty -= t.y
    this.renderCanvas = this._cacheData.originalRenderCanvas
    e.render(this, {
      renderTexture: o,
      clear: true,
      transform: s,
      skipUpdateTransform: false
    })
    e.context = e$context
    e._projTransform = e$_projTransform
    this.renderCanvas = this._renderCachedCanvas
    this.updateTransform = this.displayObjectUpdateTransform
    this.calculateBounds = this._calculateCachedBounds
    this.getLocalBounds = this._getCachedLocalBounds
    this._mask = null
    this.filterArea = null
    this.alpha = this$alpha
    var c = new ji(o)
    c.transform.worldTransform = this.transform.worldTransform
    c.anchor.x = -t.x / t.width
    c.anchor.y = -t.y / t.height
    c.alpha = this$alpha
    c._bounds = this._bounds
    this._cacheData.sprite = c
    this.transform._parentID = -1
    if (this.parent) {
      this.updateTransform()
    } else {
      this.parent = e._tempDisplayObjectParent
      this.updateTransform()
      this.parent = null
    }
    this.containsPoint = c.containsPoint.bind(c)
  }
}
It.prototype._calculateCachedBounds = function () {
  this._bounds.clear()
  this._cacheData.sprite.transform._worldID = this.transform._worldID
  this._cacheData.sprite._calculateBounds()
  this._bounds.updateID = this._boundsID
}
It.prototype._getCachedLocalBounds = function () {
  return this._cacheData.sprite.getLocalBounds(null)
}
It.prototype._destroyCachedDisplayObject = function () {
  this._cacheData.sprite._texture.destroy(true)
  this._cacheData.sprite = null
  Jt.removeFromCache(this._cacheData.textureCacheId)
  An.removeFromCache(this._cacheData.textureCacheId)
  this._cacheData.textureCacheId = null
}
It.prototype._cacheAsBitmapDestroy = function (e) {
  this.cacheAsBitmap = false
  this.destroy(e)
}
It.prototype.name = null
Pt.prototype.getChildByName = function (e, t) {
  for (var n = 0, /* [auto-meaningful-name] */this$children$length = this.children.length; n < this$children$length; n++) {
    if (this.children[n].name === e) {
      return this.children[n]
    }
  }
  if (t) {
    for (n = 0, this$children$length = this.children.length; n < this$children$length; n++) {
      if (this.children[n].getChildByName) {
        var i = this.children[n].getChildByName(e, true)
        if (i) {
          return i
        }
      }
    }
  }
  return null
}
It.prototype.getGlobalPosition = function (e, t) {
  if (undefined === e) {
    e = new ht()
  }
  if (undefined === t) {
    t = false
  }
  if (this.parent) {
    this.parent.toGlobal(this.position, e, t)
  } else {
    e.x = this.position.x
    e.y = this.position.y
  }
  return e
}
var Xi = function (e, t) {
  return (Xi = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t
  } || function (e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) {
      e[n] = t[n]
    }
  })(e, t)
}
var Yi = function () {
  function e(e) {
    this.renderer = e
    this._foundShapes = []
  }
  e.prototype.pushMask = function (e) {
    var /* [auto-meaningful-name] */this$renderer = this.renderer
    var n = e.maskObject || e
    this$renderer.context.save()
    var /* [auto-meaningful-name] */this$_foundShapes = this._foundShapes
    this.recursiveFindShapes(n, this$_foundShapes)
    if (this$_foundShapes.length > 0) {
      var /* [auto-meaningful-name] */this$renderer$context = this$renderer.context
      this$renderer$context.beginPath()
      for (var o = 0; o < this$_foundShapes.length; o++) {
        var a = this$_foundShapes[o]
        var /* [auto-meaningful-name] */a$transform$worldTransform = a.transform.worldTransform
        this.renderer.setContextTransform(a$transform$worldTransform)
        this.renderGraphicsShape(a)
      }
      this$_foundShapes.length = 0
      this$renderer$context.clip()
    }
  }
  e.prototype.recursiveFindShapes = function (e, t) {
    if (e.geometry && e.geometry.graphicsData) {
      t.push(e)
    }
    var /* [auto-meaningful-name] */e$children = e.children
    if (e$children) {
      for (var r = 0; r < e$children.length; r++) {
        this.recursiveFindShapes(e$children[r], t)
      }
    }
  }
  e.prototype.renderGraphicsShape = function (e) {
    e.finishPoly()
    var /* [auto-meaningful-name] */this$renderer$context = this.renderer.context
    var /* [auto-meaningful-name] */e$geometry$graphicsData = e.geometry.graphicsData
    var /* [auto-meaningful-name] */e$geometry$graphicsData$length = e$geometry$graphicsData.length
    if (0 !== e$geometry$graphicsData$length) {
      for (var i = 0; i < e$geometry$graphicsData$length; i++) {
        var /* [auto-meaningful-name] */e$geometry$graphicsDataI$shape = e$geometry$graphicsData[i].shape
        if (e$geometry$graphicsDataI$shape.type === it.POLY) {
          var /* [auto-meaningful-name] */e$geometry$graphicsDataI$shape$points = e$geometry$graphicsDataI$shape.points
          this$renderer$context.moveTo(e$geometry$graphicsDataI$shape$points[0], e$geometry$graphicsDataI$shape$points[1])
          for (var s = 1; s < e$geometry$graphicsDataI$shape$points.length / 2; s++) {
            this$renderer$context.lineTo(e$geometry$graphicsDataI$shape$points[2 * s], e$geometry$graphicsDataI$shape$points[2 * s + 1])
          }
          if (e$geometry$graphicsDataI$shape$points[0] === e$geometry$graphicsDataI$shape$points[e$geometry$graphicsDataI$shape$points.length - 2] && e$geometry$graphicsDataI$shape$points[1] === e$geometry$graphicsDataI$shape$points[e$geometry$graphicsDataI$shape$points.length - 1]) {
            this$renderer$context.closePath()
          }
        } else if (e$geometry$graphicsDataI$shape.type === it.RECT) {
          this$renderer$context.rect(e$geometry$graphicsDataI$shape.x, e$geometry$graphicsDataI$shape.y, e$geometry$graphicsDataI$shape.width, e$geometry$graphicsDataI$shape.height)
          this$renderer$context.closePath()
        } else if (e$geometry$graphicsDataI$shape.type === it.CIRC) {
          this$renderer$context.arc(e$geometry$graphicsDataI$shape.x, e$geometry$graphicsDataI$shape.y, e$geometry$graphicsDataI$shape.radius, 0, 2 * Math.PI)
          this$renderer$context.closePath()
        } else if (e$geometry$graphicsDataI$shape.type === it.ELIP) {
          var c = 2 * e$geometry$graphicsDataI$shape.width
          var u = 2 * e$geometry$graphicsDataI$shape.height
          var l = e$geometry$graphicsDataI$shape.x - c / 2
          var f = e$geometry$graphicsDataI$shape.y - u / 2
          var d = c / 2 * .5522848
          var h = u / 2 * .5522848
          var p = l + c
          var _ = f + u
          var A = l + c / 2
          var g = f + u / 2
          this$renderer$context.moveTo(l, g)
          this$renderer$context.bezierCurveTo(l, g - h, A - d, f, A, f)
          this$renderer$context.bezierCurveTo(A + d, f, p, g - h, p, g)
          this$renderer$context.bezierCurveTo(p, g + h, A + d, _, A, _)
          this$renderer$context.bezierCurveTo(A - d, _, l, g + h, l, g)
          this$renderer$context.closePath()
        } else if (e$geometry$graphicsDataI$shape.type === it.RREC) {
          var /* [auto-meaningful-name] */e$geometry$graphicsDataI$shape$x = e$geometry$graphicsDataI$shape.x
          var /* [auto-meaningful-name] */e$geometry$graphicsDataI$shape$y = e$geometry$graphicsDataI$shape.y
          var /* [auto-meaningful-name] */e$geometry$graphicsDataI$shape$width = e$geometry$graphicsDataI$shape.width
          var /* [auto-meaningful-name] */e$geometry$graphicsDataI$shape$height = e$geometry$graphicsDataI$shape.height
          var /* [auto-meaningful-name] */e$geometry$graphicsDataI$shape$radius = e$geometry$graphicsDataI$shape.radius
          var E = Math.min(e$geometry$graphicsDataI$shape$width, e$geometry$graphicsDataI$shape$height) / 2 | 0
          e$geometry$graphicsDataI$shape$radius = e$geometry$graphicsDataI$shape$radius > E ? E : e$geometry$graphicsDataI$shape$radius
          this$renderer$context.moveTo(e$geometry$graphicsDataI$shape$x, e$geometry$graphicsDataI$shape$y + e$geometry$graphicsDataI$shape$radius)
          this$renderer$context.lineTo(e$geometry$graphicsDataI$shape$x, e$geometry$graphicsDataI$shape$y + e$geometry$graphicsDataI$shape$height - e$geometry$graphicsDataI$shape$radius)
          this$renderer$context.quadraticCurveTo(e$geometry$graphicsDataI$shape$x, e$geometry$graphicsDataI$shape$y + e$geometry$graphicsDataI$shape$height, e$geometry$graphicsDataI$shape$x + e$geometry$graphicsDataI$shape$radius, e$geometry$graphicsDataI$shape$y + e$geometry$graphicsDataI$shape$height)
          this$renderer$context.lineTo(e$geometry$graphicsDataI$shape$x + e$geometry$graphicsDataI$shape$width - e$geometry$graphicsDataI$shape$radius, e$geometry$graphicsDataI$shape$y + e$geometry$graphicsDataI$shape$height)
          this$renderer$context.quadraticCurveTo(e$geometry$graphicsDataI$shape$x + e$geometry$graphicsDataI$shape$width, e$geometry$graphicsDataI$shape$y + e$geometry$graphicsDataI$shape$height, e$geometry$graphicsDataI$shape$x + e$geometry$graphicsDataI$shape$width, e$geometry$graphicsDataI$shape$y + e$geometry$graphicsDataI$shape$height - e$geometry$graphicsDataI$shape$radius)
          this$renderer$context.lineTo(e$geometry$graphicsDataI$shape$x + e$geometry$graphicsDataI$shape$width, e$geometry$graphicsDataI$shape$y + e$geometry$graphicsDataI$shape$radius)
          this$renderer$context.quadraticCurveTo(e$geometry$graphicsDataI$shape$x + e$geometry$graphicsDataI$shape$width, e$geometry$graphicsDataI$shape$y, e$geometry$graphicsDataI$shape$x + e$geometry$graphicsDataI$shape$width - e$geometry$graphicsDataI$shape$radius, e$geometry$graphicsDataI$shape$y)
          this$renderer$context.lineTo(e$geometry$graphicsDataI$shape$x + e$geometry$graphicsDataI$shape$radius, e$geometry$graphicsDataI$shape$y)
          this$renderer$context.quadraticCurveTo(e$geometry$graphicsDataI$shape$x, e$geometry$graphicsDataI$shape$y, e$geometry$graphicsDataI$shape$x, e$geometry$graphicsDataI$shape$y + e$geometry$graphicsDataI$shape$radius)
          this$renderer$context.closePath()
        }
      }
    }
  }
  e.prototype.popMask = function (e) {
    e.context.restore()
    e.invalidateBlendMode()
  }
  e.prototype.destroy = function () {}
  return e
}()
function qi(e) {
  var t = document.createElement("canvas")
  t.width = 6
  t.height = 1
  var n = t.getContext("2d")
  n.fillStyle = e
  n.fillRect(0, 0, 6, 1)
  return t
}
function $i() {
  if ("undefined" === typeof document) {
    return false
  }
  var e = qi("#ff00ff")
  var t = qi("#ffff00")
  var n = document.createElement("canvas")
  n.width = 6
  n.height = 1
  var r = n.getContext("2d")
  r.globalCompositeOperation = "multiply"
  r.drawImage(e, 0, 0)
  r.drawImage(t, 2, 0)
  var i = r.getImageData(2, 0, 1, 1)
  if (!i) {
    return false
  }
  var /* [auto-meaningful-name] */i$data = i.data
  return 255 === i$data[0] && 0 === i$data[1] && 0 === i$data[2]
}
var Ji = new _t()
var Zi = function (e) {
  function t(n) {
    var r
    var i = e.call(this, X.CANVAS, n) || this
    i.rootContext = i.view.getContext("2d", {
      alpha: i.useContextAlpha
    })
    i.context = i.rootContext
    i.refresh = true
    i.maskManager = new Yi(i)
    i.smoothProperty = "imageSmoothingEnabled"
    if (!i.rootContext.imageSmoothingEnabled) {
      var /* [auto-meaningful-name] */i$rootContext = i.rootContext
      if (i$rootContext.webkitImageSmoothingEnabled) {
        i.smoothProperty = "webkitImageSmoothingEnabled"
      } else {
        if (i$rootContext.mozImageSmoothingEnabled) {
          i.smoothProperty = "mozImageSmoothingEnabled"
        } else {
          if (i$rootContext.oImageSmoothingEnabled) {
            i.smoothProperty = "oImageSmoothingEnabled"
          } else {
            if (i$rootContext.msImageSmoothingEnabled) {
              i.smoothProperty = "msImageSmoothingEnabled"
            }
          }
        }
      }
    }
    i.initPlugins(t.__plugins)
    i.blendModes = (undefined === r && (r = []), $i() ? (r[q.NORMAL] = "source-over", r[q.ADD] = "lighter", r[q.MULTIPLY] = "multiply", r[q.SCREEN] = "screen", r[q.OVERLAY] = "overlay", r[q.DARKEN] = "darken", r[q.LIGHTEN] = "lighten", r[q.COLOR_DODGE] = "color-dodge", r[q.COLOR_BURN] = "color-burn", r[q.HARD_LIGHT] = "hard-light", r[q.SOFT_LIGHT] = "soft-light", r[q.DIFFERENCE] = "difference", r[q.EXCLUSION] = "exclusion", r[q.HUE] = "hue", r[q.SATURATION] = "saturate", r[q.COLOR] = "color", r[q.LUMINOSITY] = "luminosity") : (r[q.NORMAL] = "source-over", r[q.ADD] = "lighter", r[q.MULTIPLY] = "source-over", r[q.SCREEN] = "source-over", r[q.OVERLAY] = "source-over", r[q.DARKEN] = "source-over", r[q.LIGHTEN] = "source-over", r[q.COLOR_DODGE] = "source-over", r[q.COLOR_BURN] = "source-over", r[q.HARD_LIGHT] = "source-over", r[q.SOFT_LIGHT] = "source-over", r[q.DIFFERENCE] = "source-over", r[q.EXCLUSION] = "source-over", r[q.HUE] = "source-over", r[q.SATURATION] = "source-over", r[q.COLOR] = "source-over", r[q.LUMINOSITY] = "source-over"), r[q.NORMAL_NPM] = r[q.NORMAL], r[q.ADD_NPM] = r[q.ADD], r[q.SCREEN_NPM] = r[q.SCREEN], r[q.SRC_IN] = "source-in", r[q.SRC_OUT] = "source-out", r[q.SRC_ATOP] = "source-atop", r[q.DST_OVER] = "destination-over", r[q.DST_IN] = "destination-in", r[q.DST_OUT] = "destination-out", r[q.DST_ATOP] = "destination-atop", r[q.XOR] = "xor", r[q.SUBTRACT] = "source-over", r)
    i._activeBlendMode = null
    i._outerBlend = false
    i._projTransform = null
    i.renderingToScreen = false
    be("Canvas")
    i.resize(i.options.width, i.options.height)
    return i
  }
  (function (e, t) {
    function n() {
      this.constructor = e
    }
    Xi(e, t)
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n())
  })(t, e)
  t.prototype.render = function (e, t) {
    if (this.view) {
      var n
      var r
      var i
      var o
      if (t) {
        if (t instanceof vn || t instanceof hn) {
          Qe("6.0.0", "CanvasRenderer#render arguments changed, use options instead.")
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
      this.emit("prerender")
      var /* [auto-meaningful-name] */this$resolution = this.resolution
      if (n) {
        if (!(n = n.castToBaseTexture())._canvasRenderTarget) {
          n._canvasRenderTarget = new $e(n.width, n.height, n.resolution)
          n.resource = new nn(n._canvasRenderTarget.canvas)
          n.valid = true
        }
        this.context = n._canvasRenderTarget.context
        this.resolution = n._canvasRenderTarget.resolution
      } else {
        this.context = this.rootContext
      }
      var /* [auto-meaningful-name] */this$context = this.context
      this._projTransform = i || null
      if (!n) {
        this._lastObjectRendered = e
      }
      if (!o) {
        var c = e.enableTempParent()
        e.updateTransform()
        e.disableTempParent(c)
      }
      this$context.save()
      this$context.setTransform(1, 0, 0, 1, 0, 0)
      this$context.globalAlpha = 1
      this._activeBlendMode = q.NORMAL
      this._outerBlend = false
      this$context.globalCompositeOperation = this.blendModes[q.NORMAL]
      if (undefined !== r ? r : this.clearBeforeRender) {
        if (this.renderingToScreen) {
          this$context.clearRect(0, 0, this.width, this.height)
          if (this.backgroundAlpha > 0) {
            this$context.globalAlpha = this.useContextAlpha ? this.backgroundAlpha : 1
            this$context.fillStyle = this._backgroundColorString
            this$context.fillRect(0, 0, this.width, this.height)
            this$context.globalAlpha = 1
          }
        } else {
          (n = n)._canvasRenderTarget.clear()
          var /* [auto-meaningful-name] */n$clearColor = n.clearColor
          if (n$clearColor[3] > 0) {
            this$context.globalAlpha = this.useContextAlpha ? n$clearColor[3] : 1
            this$context.fillStyle = Ce(ke(n$clearColor))
            this$context.fillRect(0, 0, n.realWidth, n.realHeight)
            this$context.globalAlpha = 1
          }
        }
      }
      var /* [auto-meaningful-name] */_this$context = this.context
      this.context = this$context
      e.renderCanvas(this)
      this.context = _this$context
      this$context.restore()
      this.resolution = this$resolution
      this._projTransform = null
      this.emit("postrender")
    }
  }
  t.prototype.setContextTransform = function (e, t, n) {
    var r = e
    var /* [auto-meaningful-name] */this$_projTransform = this._projTransform
    var /* [auto-meaningful-name] */this$resolution = this.resolution
    n = n || this$resolution
    if (this$_projTransform) {
      (r = Ji).copyFrom(e)
      r.prepend(this$_projTransform)
    }
    if (t) {
      this.context.setTransform(r.a * n, r.b * n, r.c * n, r.d * n, r.tx * this$resolution | 0, r.ty * this$resolution | 0)
    } else {
      this.context.setTransform(r.a * n, r.b * n, r.c * n, r.d * n, r.tx * this$resolution, r.ty * this$resolution)
    }
  }
  t.prototype.clear = function (e, t) {
    if (undefined === e) {
      e = this._backgroundColorString
    }
    if (undefined === t) {
      t = this.backgroundAlpha
    }
    var /* [auto-meaningful-name] */this$context = this.context
    this$context.clearRect(0, 0, this.width, this.height)
    if (e) {
      this$context.globalAlpha = this.useContextAlpha ? t : 1
      this$context.fillStyle = e
      this$context.fillRect(0, 0, this.width, this.height)
      this$context.globalAlpha = 1
    }
  }
  t.prototype.setBlendMode = function (e, t) {
    var n = e === q.SRC_IN || e === q.SRC_OUT || e === q.DST_IN || e === q.DST_ATOP
    if (!t && n) {
      e = q.NORMAL
    }
    if (this._activeBlendMode !== e) {
      this._activeBlendMode = e
      this._outerBlend = n
      this.context.globalCompositeOperation = this.blendModes[e]
    }
  }
  t.prototype.destroy = function (t) {
    e.prototype.destroy.call(this, t)
    this.context = null
    this.refresh = true
    this.maskManager.destroy()
    this.maskManager = null
    this.smoothProperty = null
  }
  t.prototype.resize = function (t, n) {
    e.prototype.resize.call(this, t, n)
    if (this.smoothProperty) {
      this.rootContext[this.smoothProperty] = fe.SCALE_MODE === ne.LINEAR
    }
  }
  t.prototype.invalidateBlendMode = function () {
    this._activeBlendMode = this.blendModes.indexOf(this.context.globalCompositeOperation)
  }
  t.registerPlugin = function (e, n) {
    t.__plugins = t.__plugins || {}
    t.__plugins[e] = n
  }
  return t
}(Hr)
var eo = {
  canvas: null,
  getTintedCanvas: function (e, t) {
    var /* [auto-meaningful-name] */e$texture = e.texture
    var r = "#" + ("00000" + (0 | (t = eo.roundColor(t))).toString(16)).substr(-6)
    e$texture.tintCache = e$texture.tintCache || {}
    var i
    var o = e$texture.tintCache[r]
    if (o) {
      if (o.tintId === e$texture._updateID) {
        return e$texture.tintCache[r]
      }
      i = e$texture.tintCache[r]
    } else {
      i = document.createElement("canvas")
    }
    eo.tintMethod(e$texture, t, i)
    i.tintId = e$texture._updateID
    if (eo.convertTintToImage) {
      var a = new Image()
      a.src = i.toDataURL()
      e$texture.tintCache[r] = a
    } else {
      e$texture.tintCache[r] = i
    }
    return i
  },
  getTintedPattern: function (e, t) {
    var n = "#" + ("00000" + (0 | (t = eo.roundColor(t))).toString(16)).substr(-6)
    e.patternCache = e.patternCache || {}
    var r = e.patternCache[n]
    if (!(r && r.tintId === e._updateID)) {
      if (!eo.canvas) {
        eo.canvas = document.createElement("canvas")
      }
      eo.tintMethod(e, t, eo.canvas);
      (r = eo.canvas.getContext("2d").createPattern(eo.canvas, "repeat")).tintId = e._updateID
      e.patternCache[n] = r
    }
    return r
  },
  tintWithMultiply: function (e, t, n) {
    var r = n.getContext("2d")
    var i = e._frame.clone()
    var /* [auto-meaningful-name] */e$baseTexture$resolution = e.baseTexture.resolution
    i.x *= e$baseTexture$resolution
    i.y *= e$baseTexture$resolution
    i.width *= e$baseTexture$resolution
    i.height *= e$baseTexture$resolution
    n.width = Math.ceil(i.width)
    n.height = Math.ceil(i.height)
    r.save()
    r.fillStyle = "#" + ("00000" + (0 | t).toString(16)).substr(-6)
    r.fillRect(0, 0, i.width, i.height)
    r.globalCompositeOperation = "multiply"
    var a = e.baseTexture.getDrawableSource()
    r.drawImage(a, i.x, i.y, i.width, i.height, 0, 0, i.width, i.height)
    r.globalCompositeOperation = "destination-atop"
    r.drawImage(a, i.x, i.y, i.width, i.height, 0, 0, i.width, i.height)
    r.restore()
  },
  tintWithOverlay: function (e, t, n) {
    var r = n.getContext("2d")
    var i = e._frame.clone()
    var /* [auto-meaningful-name] */e$baseTexture$resolution = e.baseTexture.resolution
    i.x *= e$baseTexture$resolution
    i.y *= e$baseTexture$resolution
    i.width *= e$baseTexture$resolution
    i.height *= e$baseTexture$resolution
    n.width = Math.ceil(i.width)
    n.height = Math.ceil(i.height)
    r.save()
    r.globalCompositeOperation = "copy"
    r.fillStyle = "#" + ("00000" + (0 | t).toString(16)).substr(-6)
    r.fillRect(0, 0, i.width, i.height)
    r.globalCompositeOperation = "destination-atop"
    r.drawImage(e.baseTexture.getDrawableSource(), i.x, i.y, i.width, i.height, 0, 0, i.width, i.height)
    r.restore()
  },
  tintWithPerPixel: function (e, t, n) {
    var r = n.getContext("2d")
    var i = e._frame.clone()
    var /* [auto-meaningful-name] */e$baseTexture$resolution = e.baseTexture.resolution
    i.x *= e$baseTexture$resolution
    i.y *= e$baseTexture$resolution
    i.width *= e$baseTexture$resolution
    i.height *= e$baseTexture$resolution
    n.width = Math.ceil(i.width)
    n.height = Math.ceil(i.height)
    r.save()
    r.globalCompositeOperation = "copy"
    r.drawImage(e.baseTexture.getDrawableSource(), i.x, i.y, i.width, i.height, 0, 0, i.width, i.height)
    r.restore()
    for (var a = xe(t), s = a[0], c = a[1], u = a[2], l = r.getImageData(0, 0, i.width, i.height), /* [auto-meaningful-name] */l$data = l.data, d = 0; d < l$data.length; d += 4) {
      l$data[d + 0] *= s
      l$data[d + 1] *= c
      l$data[d + 2] *= u
    }
    r.putImageData(l, 0, 0)
  },
  roundColor: function (e) {
    var /* [auto-meaningful-name] */eo$cacheStepsPerColorChannel = eo.cacheStepsPerColorChannel
    var n = xe(e)
    n[0] = Math.min(255, n[0] / eo$cacheStepsPerColorChannel * eo$cacheStepsPerColorChannel)
    n[1] = Math.min(255, n[1] / eo$cacheStepsPerColorChannel * eo$cacheStepsPerColorChannel)
    n[2] = Math.min(255, n[2] / eo$cacheStepsPerColorChannel * eo$cacheStepsPerColorChannel)
    return ke(n)
  },
  cacheStepsPerColorChannel: 8,
  convertTintToImage: false,
  canUseMultiply: $i(),
  tintMethod: null
}
eo.tintMethod = eo.canUseMultiply ? eo.tintWithMultiply : eo.tintWithPerPixel
var to
var no
var /* [auto-meaningful-name] */Vr$create = Vr.create
Vr.create = function (e) {
  if (!(e && e.forceCanvas)) {
    try {
      return Vr$create(e)
    } catch (t) {}
  }
  return new Zi(e)
}
Jt.prototype.getDrawableSource = function () {
  var /* [auto-meaningful-name] */this$resource = this.resource
  return this$resource ? this$resource.bitmap || this$resource.source : null
}
hn.prototype._canvasRenderTarget = null
An.prototype.patternCache = null
An.prototype.tintCache = null;
(function (e) {
  e.MITER = "miter"
  e.BEVEL = "bevel"
  e.ROUND = "round"
})(to || (to = {}));
(function (e) {
  e.BUTT = "butt"
  e.ROUND = "round"
  e.SQUARE = "square"
})(no || (no = {}))
var io = {
  adaptive: true,
  maxLength: 10,
  minSegments: 8,
  maxSegments: 2048,
  epsilon: 1e-4,
  _segmentsCount: function (e, t) {
    if (undefined === t) {
      t = 20
    }
    if (!this.adaptive || !e || isNaN(e)) {
      return t
    }
    var n = Math.ceil(e / this.maxLength)
    if (n < this.minSegments) {
      n = this.minSegments
    } else {
      if (n > this.maxSegments) {
        n = this.maxSegments
      }
    }
    return n
  }
}
var oo = function () {
  function e() {
    this.color = 16777215
    this.alpha = 1
    this.texture = An.WHITE
    this.matrix = null
    this.visible = false
    this.reset()
  }
  e.prototype.clone = function () {
    var t = new e()
    t.color = this.color
    t.alpha = this.alpha
    t.texture = this.texture
    t.matrix = this.matrix
    t.visible = this.visible
    return t
  }
  e.prototype.reset = function () {
    this.color = 16777215
    this.alpha = 1
    this.texture = An.WHITE
    this.matrix = null
    this.visible = false
  }
  e.prototype.destroy = function () {
    this.texture = null
    this.matrix = null
  }
  return e
}()
var ao = function (e, t) {
  return (ao = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t
  } || function (e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) {
      e[n] = t[n]
    }
  })(e, t)
}
function so(e, t) {
  function n() {
    this.constructor = e
  }
  ao(e, t)
  e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n())
}
var co = {
  build: function (e) {
    e.points = e.shape.points.slice()
  },
  triangulate: function (e, t) {
    var /* [auto-meaningful-name] */e$points = e.points
    var /* [auto-meaningful-name] */e$holes = e.holes
    var /* [auto-meaningful-name] */t$points = t.points
    var /* [auto-meaningful-name] */t$indices = t.indices
    if (e$points.length >= 6) {
      for (var a = [], s = 0; s < e$holes.length; s++) {
        var c = e$holes[s]
        a.push(e$points.length / 2)
        e$points = e$points.concat(c.points)
      }
      var u = _e()(e$points, a, 2)
      if (!u) {
        return
      }
      var l = t$points.length / 2
      for (s = 0; s < u.length; s += 3) {
        t$indices.push(u[s] + l)
        t$indices.push(u[s + 1] + l)
        t$indices.push(u[s + 2] + l)
      }
      for (s = 0; s < e$points.length; s++) {
        t$points.push(e$points[s])
      }
    }
  }
}
var uo = {
  build: function (e) {
    var t
    var n
    var /* [auto-meaningful-name] */e$shape = e.shape
    var /* [auto-meaningful-name] */e$points = e.points
    var /* [auto-meaningful-name] */e$shape$x = e$shape.x
    var /* [auto-meaningful-name] */e$shape$y = e$shape.y
    e$points.length = 0
    if (e.type === it.CIRC) {
      t = e$shape.radius
      n = e$shape.radius
    } else {
      var /* [auto-meaningful-name] */_e$shape = e.shape
      t = _e$shape.width
      n = _e$shape.height
    }
    if (0 !== t && 0 !== n) {
      var c = Math.floor(30 * Math.sqrt(e$shape.radius)) || Math.floor(15 * Math.sqrt(t + n))
      c /= 2.3
      for (var u = 2 * Math.PI / c, l = 0; l < c - .5; l++) {
        e$points.push(e$shape$x + Math.sin(-u * l) * t, e$shape$y + Math.cos(-u * l) * n)
      }
      e$points.push(e$points[0], e$points[1])
    }
  },
  triangulate: function (e, t) {
    var /* [auto-meaningful-name] */e$points = e.points
    var /* [auto-meaningful-name] */t$points = t.points
    var /* [auto-meaningful-name] */t$indices = t.indices
    var o = t$points.length / 2
    var a = o
    var /* [auto-meaningful-name] */e$shape = e.shape
    var /* [auto-meaningful-name] */e$matrix = e.matrix
    var /* [auto-meaningful-name] */e$shape$x = e$shape.x
    var /* [auto-meaningful-name] */e$shape$y = e$shape.y
    t$points.push(e.matrix ? e$matrix.a * e$shape$x + e$matrix.c * e$shape$y + e$matrix.tx : e$shape$x, e.matrix ? e$matrix.b * e$shape$x + e$matrix.d * e$shape$y + e$matrix.ty : e$shape$y)
    for (var f = 0; f < e$points.length; f += 2) {
      t$points.push(e$points[f], e$points[f + 1])
      t$indices.push(o++, a, o)
    }
  }
}
var lo = {
  build: function (e) {
    var /* [auto-meaningful-name] */e$shape = e.shape
    var /* [auto-meaningful-name] */e$shape$x = e$shape.x
    var /* [auto-meaningful-name] */e$shape$y = e$shape.y
    var /* [auto-meaningful-name] */e$shape$width = e$shape.width
    var /* [auto-meaningful-name] */e$shape$height = e$shape.height
    var /* [auto-meaningful-name] */e$points = e.points
    e$points.length = 0
    e$points.push(e$shape$x, e$shape$y, e$shape$x + e$shape$width, e$shape$y, e$shape$x + e$shape$width, e$shape$y + e$shape$height, e$shape$x, e$shape$y + e$shape$height)
  },
  triangulate: function (e, t) {
    var /* [auto-meaningful-name] */e$points = e.points
    var /* [auto-meaningful-name] */t$points = t.points
    var i = t$points.length / 2
    t$points.push(e$points[0], e$points[1], e$points[2], e$points[3], e$points[6], e$points[7], e$points[4], e$points[5])
    t.indices.push(i, i + 1, i + 2, i + 1, i + 2, i + 3)
  }
}
function fo(e, t, n) {
  return e + (t - e) * n
}
function ho(e, t, n, r, i, o, a) {
  if (undefined === a) {
    a = []
  }
  for (var s = a, c = 0, u = 0, l = 0, f = 0, d = 0, h = 0, p = 0, _ = 0; p <= 20; ++p) {
    c = fo(e, n, _ = p / 20)
    u = fo(t, r, _)
    l = fo(n, i, _)
    f = fo(r, o, _)
    d = fo(c, l, _)
    h = fo(u, f, _)
    s.push(d, h)
  }
  return s
}
var po = {
  build: function (e) {
    var /* [auto-meaningful-name] */e$shape = e.shape
    var /* [auto-meaningful-name] */e$points = e.points
    var /* [auto-meaningful-name] */e$shape$x = e$shape.x
    var /* [auto-meaningful-name] */e$shape$y = e$shape.y
    var /* [auto-meaningful-name] */e$shape$width = e$shape.width
    var /* [auto-meaningful-name] */e$shape$height = e$shape.height
    var s = Math.max(0, Math.min(e$shape.radius, Math.min(e$shape$width, e$shape$height) / 2))
    e$points.length = 0
    if (s) {
      ho(e$shape$x, e$shape$y + s, e$shape$x, e$shape$y, e$shape$x + s, e$shape$y, e$points)
      ho(e$shape$x + e$shape$width - s, e$shape$y, e$shape$x + e$shape$width, e$shape$y, e$shape$x + e$shape$width, e$shape$y + s, e$points)
      ho(e$shape$x + e$shape$width, e$shape$y + e$shape$height - s, e$shape$x + e$shape$width, e$shape$y + e$shape$height, e$shape$x + e$shape$width - s, e$shape$y + e$shape$height, e$points)
      ho(e$shape$x + s, e$shape$y + e$shape$height, e$shape$x, e$shape$y + e$shape$height, e$shape$x, e$shape$y + e$shape$height - s, e$points)
    } else {
      e$points.push(e$shape$x, e$shape$y, e$shape$x + e$shape$width, e$shape$y, e$shape$x + e$shape$width, e$shape$y + e$shape$height, e$shape$x, e$shape$y + e$shape$height)
    }
  },
  triangulate: function (e, t) {
    for (var /* [auto-meaningful-name] */e$points = e.points, /* [auto-meaningful-name] */t$points = t.points, /* [auto-meaningful-name] */t$indices = t.indices, o = t$points.length / 2, a = _e()(e$points, null, 2), s = 0, /* [auto-meaningful-name] */a$length = a.length; s < a$length; s += 3) {
      t$indices.push(a[s] + o)
      t$indices.push(a[s + 1] + o)
      t$indices.push(a[s + 2] + o)
    }
    for (s = 0, a$length = e$points.length; s < a$length; s++) {
      t$points.push(e$points[s], e$points[++s])
    }
  }
}
function _o(e, t, n, r, i, o, a, s) {
  var c
  var u
  if (a) {
    c = r
    u = -n
  } else {
    c = -r
    u = n
  }
  var l = e - n * i + c
  var f = t - r * i + u
  var d = e + n * o + c
  var h = t + r * o + u
  s.push(l, f)
  s.push(d, h)
  return 2
}
function Ao(e, t, n, r, i, o, a, s) {
  var c = n - e
  var u = r - t
  var l = Math.atan2(c, u)
  var f = Math.atan2(i - e, o - t)
  if (s && l < f) {
    l += 2 * Math.PI
  } else {
    if (!s && l > f) {
      f += 2 * Math.PI
    }
  }
  var d = l
  var h = f - l
  var p = Math.abs(h)
  var _ = Math.sqrt(c * c + u * u)
  var A = 1 + (15 * p * Math.sqrt(_) / Math.PI >> 0)
  var g = h / A
  d += g
  if (s) {
    a.push(e, t)
    a.push(n, r)
    for (var v = 1, m = d; v < A; v++, m += g) {
      a.push(e, t)
      a.push(e + Math.sin(m) * _, t + Math.cos(m) * _)
    }
    a.push(e, t)
    a.push(i, o)
  } else {
    a.push(n, r)
    a.push(e, t)
    for (v = 1, m = d; v < A; v++, m += g) {
      a.push(e + Math.sin(m) * _, t + Math.cos(m) * _)
      a.push(e, t)
    }
    a.push(i, o)
    a.push(e, t)
  }
  return 2 * A
}
function go(e, t) {
  if (e.lineStyle.native) {
    (function (e, t) {
      var n = 0
      var /* [auto-meaningful-name] */e$shape = e.shape
      var i = e.points || e$shape.points
      var o = e$shape.type !== it.POLY || e$shape.closeStroke
      if (0 !== i.length) {
        var /* [auto-meaningful-name] */t$points = t.points
        var /* [auto-meaningful-name] */t$indices = t.indices
        var c = i.length / 2
        var u = t$points.length / 2
        var l = u
        for (t$points.push(i[0], i[1]), n = 1; n < c; n++) {
          t$points.push(i[2 * n], i[2 * n + 1])
          t$indices.push(l, l + 1)
          l++
        }
        if (o) {
          t$indices.push(l, u)
        }
      }
    })(e, t)
  } else {
    (function (e, t) {
      var /* [auto-meaningful-name] */e$shape = e.shape
      var r = e.points || e$shape.points.slice()
      var /* [auto-meaningful-name] */t$closePointEps = t.closePointEps
      if (0 !== r.length) {
        var /* [auto-meaningful-name] */e$lineStyle = e.lineStyle
        var a = new ht(r[0], r[1])
        var s = new ht(r[r.length - 2], r[r.length - 1])
        var c = e$shape.type !== it.POLY || e$shape.closeStroke
        var u = Math.abs(a.x - s.x) < t$closePointEps && Math.abs(a.y - s.y) < t$closePointEps
        if (c) {
          r = r.slice()
          if (u) {
            r.pop()
            r.pop()
            s.set(r[r.length - 2], r[r.length - 1])
          }
          var l = .5 * (a.x + s.x)
          var f = .5 * (s.y + a.y)
          r.unshift(l, f)
          r.push(l, f)
        }
        var /* [auto-meaningful-name] */t$points = t.points
        var h = r.length / 2
        var /* [auto-meaningful-name] */r$length = r.length
        var _ = t$points.length / 2
        var A = e$lineStyle.width / 2
        var g = A * A
        var v = e$lineStyle.miterLimit * e$lineStyle.miterLimit
        var m = r[0]
        var y = r[1]
        var b = r[2]
        var w = r[3]
        var E = 0
        var x = 0
        var C = -(y - w)
        var O = m - b
        var k = 0
        var S = 0
        var T = Math.sqrt(C * C + O * O)
        C /= T
        O /= T
        C *= A
        O *= A
        var /* [auto-meaningful-name] */e$lineStyle$alignment = e$lineStyle.alignment
        var D = 2 * (1 - e$lineStyle$alignment)
        var I = 2 * e$lineStyle$alignment
        if (!c) {
          if (e$lineStyle.cap === no.ROUND) {
            r$length += Ao(m - C * (D - I) * .5, y - O * (D - I) * .5, m - C * D, y - O * D, m + C * I, y + O * I, t$points, true) + 2
          } else {
            if (e$lineStyle.cap === no.SQUARE) {
              r$length += _o(m, y, C, O, D, I, true, t$points)
            }
          }
        }
        t$points.push(m - C * D, y - O * D)
        t$points.push(m + C * I, y + O * I)
        for (var F = 1; F < h - 1; ++F) {
          m = r[2 * (F - 1)]
          y = r[2 * (F - 1) + 1]
          b = r[2 * F]
          w = r[2 * F + 1]
          E = r[2 * (F + 1)]
          x = r[2 * (F + 1) + 1]
          C = -(y - w)
          O = m - b
          C /= T = Math.sqrt(C * C + O * O)
          O /= T
          C *= A
          O *= A
          k = -(w - x)
          S = b - E
          k /= T = Math.sqrt(k * k + S * S)
          S /= T
          k *= A
          S *= A
          var R = b - m
          var P = y - w
          var N = b - E
          var M = x - w
          var j = P * N - M * R
          var L = j < 0
          if (Math.abs(j) < .1) {
            t$points.push(b - C * D, w - O * D)
            t$points.push(b + C * I, w + O * I)
          } else {
            var U = (-C + m) * (-O + w) - (-C + b) * (-O + y)
            var H = (-k + E) * (-S + w) - (-k + b) * (-S + x)
            var V = (R * H - N * U) / j
            var G = (M * U - P * H) / j
            var z = (V - b) * (V - b) + (G - w) * (G - w)
            var Q = b + (V - b) * D
            var W = w + (G - w) * D
            var K = b - (V - b) * I
            var X = w - (G - w) * I
            var Y = L ? D : I
            if (z <= Math.min(R * R + P * P, N * N + M * M) + Y * Y * g) {
              if (e$lineStyle.join === to.BEVEL || z / g > v) {
                if (L) {
                  t$points.push(Q, W)
                  t$points.push(b + C * I, w + O * I)
                  t$points.push(Q, W)
                  t$points.push(b + k * I, w + S * I)
                } else {
                  t$points.push(b - C * D, w - O * D)
                  t$points.push(K, X)
                  t$points.push(b - k * D, w - S * D)
                  t$points.push(K, X)
                }
                r$length += 2
              } else {
                if (e$lineStyle.join === to.ROUND) {
                  if (L) {
                    t$points.push(Q, W)
                    t$points.push(b + C * I, w + O * I)
                    r$length += Ao(b, w, b + C * I, w + O * I, b + k * I, w + S * I, t$points, true) + 4
                    t$points.push(Q, W)
                    t$points.push(b + k * I, w + S * I)
                  } else {
                    t$points.push(b - C * D, w - O * D)
                    t$points.push(K, X)
                    r$length += Ao(b, w, b - C * D, w - O * D, b - k * D, w - S * D, t$points, false) + 4
                    t$points.push(b - k * D, w - S * D)
                    t$points.push(K, X)
                  }
                } else {
                  t$points.push(Q, W)
                  t$points.push(K, X)
                }
              }
            } else {
              t$points.push(b - C * D, w - O * D)
              t$points.push(b + C * I, w + O * I)
              if (!(e$lineStyle.join === to.BEVEL || z / g > v)) {
                if (e$lineStyle.join === to.ROUND) {
                  r$length += L ? Ao(b, w, b + C * I, w + O * I, b + k * I, w + S * I, t$points, true) + 2 : Ao(b, w, b - C * D, w - O * D, b - k * D, w - S * D, t$points, false) + 2
                } else {
                  if (L) {
                    t$points.push(K, X)
                    t$points.push(K, X)
                  } else {
                    t$points.push(Q, W)
                    t$points.push(Q, W)
                  }
                  r$length += 2
                }
              }
              t$points.push(b - k * D, w - S * D)
              t$points.push(b + k * I, w + S * I)
              r$length += 2
            }
          }
        }
        m = r[2 * (h - 2)]
        y = r[2 * (h - 2) + 1]
        b = r[2 * (h - 1)]
        C = -(y - (w = r[2 * (h - 1) + 1]))
        O = m - b
        C /= T = Math.sqrt(C * C + O * O)
        O /= T
        C *= A
        O *= A
        t$points.push(b - C * D, w - O * D)
        t$points.push(b + C * I, w + O * I)
        if (!c) {
          if (e$lineStyle.cap === no.ROUND) {
            r$length += Ao(b - C * (D - I) * .5, w - O * (D - I) * .5, b - C * D, w - O * D, b + C * I, w + O * I, t$points, false) + 2
          } else {
            if (e$lineStyle.cap === no.SQUARE) {
              r$length += _o(b, w, C, O, D, I, false, t$points)
            }
          }
        }
        var /* [auto-meaningful-name] */t$indices = t.indices
        var $ = io.epsilon * io.epsilon
        for (F = _; F < r$length + _ - 2; ++F) {
          m = t$points[2 * F]
          y = t$points[2 * F + 1]
          b = t$points[2 * (F + 1)]
          w = t$points[2 * (F + 1) + 1]
          E = t$points[2 * (F + 2)]
          x = t$points[2 * (F + 2) + 1]
          if (!(Math.abs(m * (w - x) + b * (x - y) + E * (y - w)) < $)) {
            t$indices.push(F, F + 1, F + 2)
          }
        }
      }
    })(e, t)
  }
}
var vo
var mo
var yo = function () {
  function e() {}
  e.curveTo = function (e, t, n, r, i, o) {
    var a = o[o.length - 2]
    var s = o[o.length - 1] - t
    var c = a - e
    var u = r - t
    var l = n - e
    var f = Math.abs(s * l - c * u)
    if (f < 1e-8 || 0 === i) {
      if (!(o[o.length - 2] === e && o[o.length - 1] === t)) {
        o.push(e, t)
      }
      return null
    }
    var d = s * s + c * c
    var h = u * u + l * l
    var p = s * u + c * l
    var _ = i * Math.sqrt(d) / f
    var A = i * Math.sqrt(h) / f
    var g = _ * p / d
    var v = A * p / h
    var m = _ * l + A * c
    var y = _ * u + A * s
    var b = c * (A + g)
    var w = s * (A + g)
    var E = l * (_ + v)
    var x = u * (_ + v)
    return {
      cx: m + e,
      cy: y + t,
      radius: i,
      startAngle: Math.atan2(w - y, b - m),
      endAngle: Math.atan2(x - y, E - m),
      anticlockwise: c * u > l * s
    }
  }
  e.arc = function (e, t, n, r, i, o, a, s, c) {
    for (var u = a - o, l = io._segmentsCount(Math.abs(u) * i, 40 * Math.ceil(Math.abs(u) / ot)), f = u / (2 * l), d = 2 * f, h = Math.cos(f), p = Math.sin(f), _ = l - 1, A = _ % 1 / _, g = 0; g <= _; ++g) {
      var v = f + o + d * (g + A * g)
      var m = Math.cos(v)
      var y = -Math.sin(v)
      c.push((h * m + p * y) * i + n, (h * -y + p * m) * i + r)
    }
  }
  return e
}()
var bo = function () {
  function e() {}
  e.curveLength = function (e, t, n, r, i, o, a, s) {
    for (var c = 0, u = 0, l = 0, f = 0, d = 0, h = 0, p = 0, _ = 0, A = 0, g = 0, v = 0, m = e, y = t, b = 1; b <= 10; ++b) {
      g = m - (_ = (p = (h = (d = 1 - (u = b / 10)) * d) * d) * e + 3 * h * u * n + 3 * d * (l = u * u) * i + (f = l * u) * a)
      v = y - (A = p * t + 3 * h * u * r + 3 * d * l * o + f * s)
      m = _
      y = A
      c += Math.sqrt(g * g + v * v)
    }
    return c
  }
  e.curveTo = function (t, n, r, i, o, a, s) {
    var c = s[s.length - 2]
    var u = s[s.length - 1]
    s.length -= 2
    var l = io._segmentsCount(e.curveLength(c, u, t, n, r, i, o, a))
    var f = 0
    var d = 0
    var h = 0
    var p = 0
    var _ = 0
    s.push(c, u)
    for (var A = 1, g = 0; A <= l; ++A) {
      h = (d = (f = 1 - (g = A / l)) * f) * f
      _ = (p = g * g) * g
      s.push(h * c + 3 * d * g * t + 3 * f * p * r + _ * o, h * u + 3 * d * g * n + 3 * f * p * i + _ * a)
    }
  }
  return e
}()
var wo = function () {
  function e() {}
  e.curveLength = function (e, t, n, r, i, o) {
    var a = e - 2 * n + i
    var s = t - 2 * r + o
    var c = 2 * n - 2 * e
    var u = 2 * r - 2 * t
    var l = 4 * (a * a + s * s)
    var f = 4 * (a * c + s * u)
    var d = c * c + u * u
    var h = 2 * Math.sqrt(l + f + d)
    var p = Math.sqrt(l)
    var _ = 2 * l * p
    var A = 2 * Math.sqrt(d)
    var g = f / p
    return (_ * h + p * f * (h - A) + (4 * d * l - f * f) * Math.log((2 * p + g + h) / (g + A))) / (4 * _)
  }
  e.curveTo = function (t, n, r, i, o) {
    for (var a = o[o.length - 2], s = o[o.length - 1], c = io._segmentsCount(e.curveLength(a, s, t, n, r, i)), u = 0, l = 0, f = 1; f <= c; ++f) {
      var d = f / c
      u = a + (t - a) * d
      l = s + (n - s) * d
      o.push(u + (t + (r - t) * d - u) * d, l + (n + (i - n) * d - l) * d)
    }
  }
  return e
}()
var Eo = function () {
  function e() {
    this.reset()
  }
  e.prototype.begin = function (e, t, n) {
    this.reset()
    this.style = e
    this.start = t
    this.attribStart = n
  }
  e.prototype.end = function (e, t) {
    this.attribSize = t - this.attribStart
    this.size = e - this.start
  }
  e.prototype.reset = function () {
    this.style = null
    this.size = 0
    this.start = 0
    this.attribStart = 0
    this.attribSize = 0
  }
  return e
}();
(vo = {})[it.POLY] = co
vo[it.CIRC] = uo
vo[it.ELIP] = uo
vo[it.RECT] = lo
vo[it.RREC] = po
var xo = vo
var Co = []
var Oo = []
var ko = function () {
  function e(e, t, n, r) {
    if (undefined === t) {
      t = null
    }
    if (undefined === n) {
      n = null
    }
    if (undefined === r) {
      r = null
    }
    this.shape = e
    this.lineStyle = n
    this.fillStyle = t
    this.matrix = r
    this.type = e.type
    this.points = []
    this.holes = []
  }
  e.prototype.clone = function () {
    return new e(this.shape, this.fillStyle, this.lineStyle, this.matrix)
  }
  e.prototype.destroy = function () {
    this.shape = null
    this.holes.length = 0
    this.holes = null
    this.points.length = 0
    this.points = null
    this.lineStyle = null
    this.fillStyle = null
  }
  return e
}()
var So = new ht()
var To = new Tt()
var Bo = function (e) {
  function t() {
    var t = e.call(this) || this
    t.uvsFloat32 = null
    t.indicesUint16 = null
    t.points = []
    t.colors = []
    t.uvs = []
    t.indices = []
    t.textureIds = []
    t.graphicsData = []
    t.dirty = 0
    t.batchDirty = -1
    t.cacheDirty = -1
    t.clearDirty = 0
    t.drawCalls = []
    t.batches = []
    t.shapeIndex = 0
    t._bounds = new Tt()
    t.boundsDirty = -1
    t.boundsPadding = 0
    t.batchable = false
    t.indicesUint16 = null
    t.uvsFloat32 = null
    t.closePointEps = 1e-4
    return t
  }
  so(t, e)
  Object.defineProperty(t.prototype, "bounds", {
    get: function () {
      if (this.boundsDirty !== this.dirty) {
        this.boundsDirty = this.dirty
        this.calculateBounds()
      }
      return this._bounds
    },
    enumerable: false,
    configurable: true
  })
  t.prototype.invalidate = function () {
    this.boundsDirty = -1
    this.dirty++
    this.batchDirty++
    this.shapeIndex = 0
    this.points.length = 0
    this.colors.length = 0
    this.uvs.length = 0
    this.indices.length = 0
    this.textureIds.length = 0
    for (var e = 0; e < this.drawCalls.length; e++) {
      this.drawCalls[e].texArray.clear()
      Oo.push(this.drawCalls[e])
    }
    this.drawCalls.length = 0
    for (e = 0; e < this.batches.length; e++) {
      var t = this.batches[e]
      t.reset()
      Co.push(t)
    }
    this.batches.length = 0
  }
  t.prototype.clear = function () {
    if (this.graphicsData.length > 0) {
      this.invalidate()
      this.clearDirty++
      this.graphicsData.length = 0
    }
    return this
  }
  t.prototype.drawShape = function (e, t, n, r) {
    if (undefined === t) {
      t = null
    }
    if (undefined === n) {
      n = null
    }
    if (undefined === r) {
      r = null
    }
    var i = new ko(e, t, n, r)
    this.graphicsData.push(i)
    this.dirty++
    return this
  }
  t.prototype.drawHole = function (e, t) {
    if (undefined === t) {
      t = null
    }
    if (!this.graphicsData.length) {
      return null
    }
    var n = new ko(e, null, null, t)
    var r = this.graphicsData[this.graphicsData.length - 1]
    n.lineStyle = r.lineStyle
    r.holes.push(n)
    this.dirty++
    return this
  }
  t.prototype.destroy = function () {
    e.prototype.destroy.call(this)
    for (var t = 0; t < this.graphicsData.length; ++t) {
      this.graphicsData[t].destroy()
    }
    this.points.length = 0
    this.points = null
    this.colors.length = 0
    this.colors = null
    this.uvs.length = 0
    this.uvs = null
    this.indices.length = 0
    this.indices = null
    this.indexBuffer.destroy()
    this.indexBuffer = null
    this.graphicsData.length = 0
    this.graphicsData = null
    this.drawCalls.length = 0
    this.drawCalls = null
    this.batches.length = 0
    this.batches = null
    this._bounds = null
  }
  t.prototype.containsPoint = function (e) {
    for (var /* [auto-meaningful-name] */this$graphicsData = this.graphicsData, n = 0; n < this$graphicsData.length; ++n) {
      var r = this$graphicsData[n]
      if (r.fillStyle.visible && r.shape && (r.matrix ? r.matrix.applyInverse(e, So) : So.copyFrom(e), r.shape.contains(So.x, So.y))) {
        var i = false
        if (r.holes) {
          for (var o = 0; o < r.holes.length; o++) {
            if (r.holes[o].shape.contains(So.x, So.y)) {
              i = true
              break
            }
          }
        }
        if (!i) {
          return true
        }
      }
    }
    return false
  }
  t.prototype.updateBatches = function (e) {
    if (this.graphicsData.length) {
      if (this.validateBatching()) {
        this.cacheDirty = this.dirty
        var /* [auto-meaningful-name] */this$uvs = this.uvs
        var /* [auto-meaningful-name] */this$graphicsData = this.graphicsData
        var r = null
        var i = null
        if (this.batches.length > 0) {
          i = (r = this.batches[this.batches.length - 1]).style
        }
        for (var /* [auto-meaningful-name] */this$shapeIndex = this.shapeIndex; this$shapeIndex < this$graphicsData.length; this$shapeIndex++) {
          this.shapeIndex++
          var a = this$graphicsData[this$shapeIndex]
          var /* [auto-meaningful-name] */a$fillStyle = a.fillStyle
          var /* [auto-meaningful-name] */a$lineStyle = a.lineStyle
          xo[a.type].build(a)
          if (a.matrix) {
            this.transformPoints(a.points, a.matrix)
          }
          for (var u = 0; u < 2; u++) {
            var l = 0 === u ? a$fillStyle : a$lineStyle
            if (l.visible) {
              var /* [auto-meaningful-name] */l$texture$baseTexture = l.texture.baseTexture
              var /* [auto-meaningful-name] */this$indices$length = this.indices.length
              var h = this.points.length / 2
              l$texture$baseTexture.wrapMode = re.REPEAT
              if (0 === u) {
                this.processFill(a)
              } else {
                this.processLine(a)
              }
              var p = this.points.length / 2 - h
              if (0 !== p) {
                if (r && !this._compareStyles(i, l)) {
                  r.end(this$indices$length, h)
                  r = null
                }
                if (!r) {
                  (r = Co.pop() || new Eo()).begin(l, this$indices$length, h)
                  this.batches.push(r)
                  i = l
                }
                this.addUvs(this.points, this$uvs, l.texture, h, p, l.matrix)
              }
            }
          }
        }
        var /* [auto-meaningful-name] */_this$indices$length = this.indices.length
        var A = this.points.length / 2
        if (r) {
          r.end(_this$indices$length, A)
        }
        if (0 !== this.batches.length) {
          if (this.indicesUint16 && this.indices.length === this.indicesUint16.length) {
            this.indicesUint16.set(this.indices)
          } else {
            var g = A > 65535 && e
            this.indicesUint16 = g ? new Uint32Array(this.indices) : new Uint16Array(this.indices)
          }
          this.batchable = this.isBatchable()
          if (this.batchable) {
            this.packBatches()
          } else {
            this.buildDrawCalls()
          }
        } else {
          this.batchable = true
        }
      }
    } else {
      this.batchable = true
    }
  }
  t.prototype._compareStyles = function (e, t) {
    return !(!e || !t) && e.texture.baseTexture === t.texture.baseTexture && e.color + e.alpha === t.color + t.alpha && !!e.native === !!t.native
  }
  t.prototype.validateBatching = function () {
    if (this.dirty === this.cacheDirty || !this.graphicsData.length) {
      return false
    }
    for (var e = 0, /* [auto-meaningful-name] */this$graphicsData$length = this.graphicsData.length; e < this$graphicsData$length; e++) {
      var n = this.graphicsData[e]
      var /* [auto-meaningful-name] */n$fillStyle = n.fillStyle
      var /* [auto-meaningful-name] */n$lineStyle = n.lineStyle
      if (n$fillStyle && !n$fillStyle.texture.baseTexture.valid) {
        return false
      }
      if (n$lineStyle && !n$lineStyle.texture.baseTexture.valid) {
        return false
      }
    }
    return true
  }
  t.prototype.packBatches = function () {
    this.batchDirty++
    this.uvsFloat32 = new Float32Array(this.uvs)
    for (var /* [auto-meaningful-name] */this$batches = this.batches, t = 0, /* [auto-meaningful-name] */this$batches$length = this$batches.length; t < this$batches$length; t++) {
      for (var r = this$batches[t], i = 0; i < r.size; i++) {
        var o = r.start + i
        this.indicesUint16[o] = this.indicesUint16[o] - r.attribStart
      }
    }
  }
  t.prototype.isBatchable = function () {
    if (this.points.length > 131070) {
      return false
    }
    for (var /* [auto-meaningful-name] */this$batches = this.batches, n = 0; n < this$batches.length; n++) {
      if (this$batches[n].style.native) {
        return false
      }
    }
    return this.points.length < 2 * t.BATCHABLE_SIZE
  }
  t.prototype.buildDrawCalls = function () {
    for (var e = ++Jt._globalBatch, t = 0; t < this.drawCalls.length; t++) {
      this.drawCalls[t].texArray.clear()
      Oo.push(this.drawCalls[t])
    }
    this.drawCalls.length = 0
    var /* [auto-meaningful-name] */this$colors = this.colors
    var /* [auto-meaningful-name] */this$textureIds = this.textureIds
    var i = Oo.pop()
    if (!i) {
      (i = new Gr()).texArray = new zr()
    }
    i.texArray.count = 0
    i.start = 0
    i.size = 0
    i.type = $.TRIANGLES
    var o = 0
    var a = null
    var s = 0
    var c = false
    var /* [auto-meaningful-name] */$$TRIANGLES = $.TRIANGLES
    var l = 0
    this.drawCalls.push(i)
    for (t = 0; t < this.batches.length; t++) {
      var f = this.batches[t]
      var /* [auto-meaningful-name] */f$style = f.style
      var /* [auto-meaningful-name] */f$style$texture$baseTexture = f$style.texture.baseTexture
      if (c !== !!f$style.native) {
        $$TRIANGLES = (c = !!f$style.native) ? $.LINES : $.TRIANGLES
        a = null
        o = 8
        e++
      }
      if (a !== f$style$texture$baseTexture) {
        a = f$style$texture$baseTexture
        if (f$style$texture$baseTexture._batchEnabled !== e) {
          if (8 === o) {
            e++
            o = 0
            if (i.size > 0) {
              if (!(i = Oo.pop())) {
                (i = new Gr()).texArray = new zr()
              }
              this.drawCalls.push(i)
            }
            i.start = l
            i.size = 0
            i.texArray.count = 0
            i.type = $$TRIANGLES
          }
          f$style$texture$baseTexture.touched = 1
          f$style$texture$baseTexture._batchEnabled = e
          f$style$texture$baseTexture._batchLocation = o
          f$style$texture$baseTexture.wrapMode = re.REPEAT
          i.texArray.elements[i.texArray.count++] = f$style$texture$baseTexture
          o++
        }
      }
      i.size += f.size
      l += f.size
      s = f$style$texture$baseTexture._batchLocation
      this.addColors(this$colors, f$style.color, f$style.alpha, f.attribSize)
      this.addTextureIds(this$textureIds, s, f.attribSize)
    }
    Jt._globalBatch = e
    this.packAttributes()
  }
  t.prototype.packAttributes = function () {
    for (var /* [auto-meaningful-name] */this$points = this.points, /* [auto-meaningful-name] */this$uvs = this.uvs, /* [auto-meaningful-name] */this$colors = this.colors, /* [auto-meaningful-name] */this$textureIds = this.textureIds, i = new ArrayBuffer(3 * this$points.length * 4), o = new Float32Array(i), a = new Uint32Array(i), s = 0, c = 0; c < this$points.length / 2; c++) {
      o[s++] = this$points[2 * c]
      o[s++] = this$points[2 * c + 1]
      o[s++] = this$uvs[2 * c]
      o[s++] = this$uvs[2 * c + 1]
      a[s++] = this$colors[c]
      o[s++] = this$textureIds[c]
    }
    this._buffer.update(i)
    this._indexBuffer.update(this.indicesUint16)
  }
  t.prototype.processFill = function (e) {
    if (e.holes.length) {
      this.processHoles(e.holes)
      co.triangulate(e, this)
    } else {
      xo[e.type].triangulate(e, this)
    }
  }
  t.prototype.processLine = function (e) {
    go(e, this)
    for (var t = 0; t < e.holes.length; t++) {
      go(e.holes[t], this)
    }
  }
  t.prototype.processHoles = function (e) {
    for (var t = 0; t < e.length; t++) {
      var n = e[t]
      xo[n.type].build(n)
      if (n.matrix) {
        this.transformPoints(n.points, n.matrix)
      }
    }
  }
  t.prototype.calculateBounds = function () {
    var /* [auto-meaningful-name] */this$_bounds = this._bounds
    var t = To
    var /* [auto-meaningful-name] */_t$IDENTITY = _t.IDENTITY
    this._bounds.clear()
    t.clear()
    for (var r = 0; r < this.graphicsData.length; r++) {
      var i = this.graphicsData[r]
      var /* [auto-meaningful-name] */i$shape = i.shape
      var /* [auto-meaningful-name] */i$type = i.type
      var /* [auto-meaningful-name] */i$lineStyle = i.lineStyle
      var c = i.matrix || _t.IDENTITY
      var u = 0
      if (i$lineStyle && i$lineStyle.visible) {
        var /* [auto-meaningful-name] */i$lineStyle$alignment = i$lineStyle.alignment
        u = i$lineStyle.width
        if (i$type === it.POLY) {
          u *= .5 + Math.abs(.5 - i$lineStyle$alignment)
        } else {
          u *= Math.max(0, i$lineStyle$alignment)
        }
      }
      if (_t$IDENTITY !== c) {
        if (!t.isEmpty()) {
          this$_bounds.addBoundsMatrix(t, _t$IDENTITY)
          t.clear()
        }
        _t$IDENTITY = c
      }
      if (i$type === it.RECT || i$type === it.RREC) {
        var f = i$shape
        t.addFramePad(f.x, f.y, f.x + f.width, f.y + f.height, u, u)
      } else if (i$type === it.CIRC) {
        var d = i$shape
        t.addFramePad(d.x, d.y, d.x, d.y, d.radius + u, d.radius + u)
      } else if (i$type === it.ELIP) {
        var h = i$shape
        t.addFramePad(h.x, h.y, h.x, h.y, h.width + u, h.height + u)
      } else {
        var p = i$shape
        this$_bounds.addVerticesMatrix(_t$IDENTITY, p.points, 0, p.points.length, u, u)
      }
    }
    if (!t.isEmpty()) {
      this$_bounds.addBoundsMatrix(t, _t$IDENTITY)
    }
    this$_bounds.pad(this.boundsPadding, this.boundsPadding)
  }
  t.prototype.transformPoints = function (e, t) {
    for (var n = 0; n < e.length / 2; n++) {
      var r = e[2 * n]
      var i = e[2 * n + 1]
      e[2 * n] = t.a * r + t.c * i + t.tx
      e[2 * n + 1] = t.b * r + t.d * i + t.ty
    }
  }
  t.prototype.addColors = function (e, t, n, r) {
    for (var i = De((t >> 16) + (65280 & t) + ((255 & t) << 16), n); r-- > 0;) {
      e.push(i)
    }
  }
  t.prototype.addTextureIds = function (e, t, n) {
    for (; n-- > 0;) {
      e.push(t)
    }
  }
  t.prototype.addUvs = function (e, t, n, r, i, o) {
    if (undefined === o) {
      o = null
    }
    for (var a = 0, /* [auto-meaningful-name] */t$length = t.length, /* [auto-meaningful-name] */n$frame = n.frame; a < i;) {
      var u = e[2 * (r + a)]
      var l = e[2 * (r + a) + 1]
      if (o) {
        var f = o.a * u + o.c * l + o.tx
        l = o.b * u + o.d * l + o.ty
        u = f
      }
      a++
      t.push(u / n$frame.width, l / n$frame.height)
    }
    var /* [auto-meaningful-name] */n$baseTexture = n.baseTexture
    if (n$frame.width < n$baseTexture.width || n$frame.height < n$baseTexture.height) {
      this.adjustUvs(t, n, t$length, i)
    }
  }
  t.prototype.adjustUvs = function (e, t, n, r) {
    for (var /* [auto-meaningful-name] */t$baseTexture = t.baseTexture, o = 1e-6, a = n + 2 * r, /* [auto-meaningful-name] */t$frame = t.frame, c = t$frame.width / t$baseTexture.width, u = t$frame.height / t$baseTexture.height, l = t$frame.x / t$frame.width, f = t$frame.y / t$frame.height, d = Math.floor(e[n] + o), h = Math.floor(e[n + 1] + o), p = n + 2; p < a; p += 2) {
      d = Math.min(d, Math.floor(e[p] + o))
      h = Math.min(h, Math.floor(e[p + 1] + o))
    }
    l -= d
    f -= h
    for (p = n; p < a; p += 2) {
      e[p] = (e[p] + l) * c
      e[p + 1] = (e[p + 1] + f) * u
    }
  }
  t.BATCHABLE_SIZE = 100
  return t
}(Xr)
var Do = function (e) {
  function t() {
    var t = null !== e && e.apply(this, arguments) || this
    t.width = 0
    t.alignment = .5
    t.native = false
    t.cap = no.BUTT
    t.join = to.MITER
    t.miterLimit = 10
    return t
  }
  so(t, e)
  t.prototype.clone = function () {
    var e = new t()
    e.color = this.color
    e.alpha = this.alpha
    e.texture = this.texture
    e.matrix = this.matrix
    e.visible = this.visible
    e.width = this.width
    e.alignment = this.alignment
    e.native = this.native
    e.cap = this.cap
    e.join = this.join
    e.miterLimit = this.miterLimit
    return e
  }
  t.prototype.reset = function () {
    e.prototype.reset.call(this)
    this.color = 0
    this.alignment = .5
    this.width = 0
    this.native = false
  }
  return t
}(oo)
var Io = new Float32Array(3)
var Fo = {}
var Ro = function (e) {
  function t(t) {
    if (undefined === t) {
      t = null
    }
    var n = e.call(this) || this
    n._geometry = t || new Bo()
    n._geometry.refCount++
    n.shader = null
    n.state = vr.for2d()
    n._fillStyle = new oo()
    n._lineStyle = new Do()
    n._matrix = null
    n._holeMode = false
    n.currentPath = null
    n.batches = []
    n.batchTint = -1
    n.batchDirty = -1
    n.vertexData = null
    n.pluginName = "batch"
    n._transformID = -1
    n.tint = 16777215
    n.blendMode = q.NORMAL
    return n
  }
  so(t, e)
  Object.defineProperty(t.prototype, "geometry", {
    get: function () {
      return this._geometry
    },
    enumerable: false,
    configurable: true
  })
  t.prototype.clone = function () {
    this.finishPoly()
    return new t(this._geometry)
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
  Object.defineProperty(t.prototype, "tint", {
    get: function () {
      return this._tint
    },
    set: function (e) {
      this._tint = e
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "fill", {
    get: function () {
      return this._fillStyle
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "line", {
    get: function () {
      return this._lineStyle
    },
    enumerable: false,
    configurable: true
  })
  t.prototype.lineStyle = function (e, t, n, r, i) {
    if (undefined === e) {
      e = null
    }
    if (undefined === t) {
      t = 0
    }
    if (undefined === n) {
      n = 1
    }
    if (undefined === r) {
      r = .5
    }
    if (undefined === i) {
      i = false
    }
    if ("number" === typeof e) {
      e = {
        width: e,
        color: t,
        alpha: n,
        alignment: r,
        native: i
      }
    }
    return this.lineTextureStyle(e)
  }
  t.prototype.lineTextureStyle = function (e) {
    e = Object.assign({
      width: 0,
      texture: An.WHITE,
      color: e && e.texture ? 16777215 : 0,
      alpha: 1,
      matrix: null,
      alignment: .5,
      native: false,
      cap: no.BUTT,
      join: to.MITER,
      miterLimit: 10
    }, e)
    if (this.currentPath) {
      this.startPoly()
    }
    var t = e.width > 0 && e.alpha > 0
    if (t) {
      if (e.matrix) {
        e.matrix = e.matrix.clone()
        e.matrix.invert()
      }
      Object.assign(this._lineStyle, {
        visible: t
      }, e)
    } else {
      this._lineStyle.reset()
    }
    return this
  }
  t.prototype.startPoly = function () {
    if (this.currentPath) {
      var /* [auto-meaningful-name] */this$currentPath$points = this.currentPath.points
      var /* [auto-meaningful-name] */this$currentPath$points$length = this.currentPath.points.length
      if (this$currentPath$points$length > 2) {
        this.drawShape(this.currentPath)
        this.currentPath = new ft()
        this.currentPath.closeStroke = false
        this.currentPath.points.push(this$currentPath$points[this$currentPath$points$length - 2], this$currentPath$points[this$currentPath$points$length - 1])
      }
    } else {
      this.currentPath = new ft()
      this.currentPath.closeStroke = false
    }
  }
  t.prototype.finishPoly = function () {
    if (this.currentPath) {
      if (this.currentPath.points.length > 2) {
        this.drawShape(this.currentPath)
        this.currentPath = null
      } else {
        this.currentPath.points.length = 0
      }
    }
  }
  t.prototype.moveTo = function (e, t) {
    this.startPoly()
    this.currentPath.points[0] = e
    this.currentPath.points[1] = t
    return this
  }
  t.prototype.lineTo = function (e, t) {
    if (!this.currentPath) {
      this.moveTo(0, 0)
    }
    var /* [auto-meaningful-name] */this$currentPath$points = this.currentPath.points
    var r = this$currentPath$points[this$currentPath$points.length - 2]
    var i = this$currentPath$points[this$currentPath$points.length - 1]
    if (!(r === e && i === t)) {
      this$currentPath$points.push(e, t)
    }
    return this
  }
  t.prototype._initCurve = function (e, t) {
    if (undefined === e) {
      e = 0
    }
    if (undefined === t) {
      t = 0
    }
    if (this.currentPath) {
      if (0 === this.currentPath.points.length) {
        this.currentPath.points = [e, t]
      }
    } else {
      this.moveTo(e, t)
    }
  }
  t.prototype.quadraticCurveTo = function (e, t, n, r) {
    this._initCurve()
    var /* [auto-meaningful-name] */this$currentPath$points = this.currentPath.points
    if (0 === this$currentPath$points.length) {
      this.moveTo(0, 0)
    }
    wo.curveTo(e, t, n, r, this$currentPath$points)
    return this
  }
  t.prototype.bezierCurveTo = function (e, t, n, r, i, o) {
    this._initCurve()
    bo.curveTo(e, t, n, r, i, o, this.currentPath.points)
    return this
  }
  t.prototype.arcTo = function (e, t, n, r, i) {
    this._initCurve(e, t)
    var /* [auto-meaningful-name] */this$currentPath$points = this.currentPath.points
    var a = yo.curveTo(e, t, n, r, i, this$currentPath$points)
    if (a) {
      var s = a.cx
      var c = a.cy
      var /* [auto-meaningful-name] */a$radius = a.radius
      var /* [auto-meaningful-name] */a$startAngle = a.startAngle
      var /* [auto-meaningful-name] */a$endAngle = a.endAngle
      var /* [auto-meaningful-name] */a$anticlockwise = a.anticlockwise
      this.arc(s, c, a$radius, a$startAngle, a$endAngle, a$anticlockwise)
    }
    return this
  }
  t.prototype.arc = function (e, t, n, r, i, o) {
    if (undefined === o) {
      o = false
    }
    if (r === i) {
      return this
    }
    if (!o && i <= r) {
      i += ot
    } else {
      if (o && r <= i) {
        r += ot
      }
    }
    if (0 === i - r) {
      return this
    }
    var a = e + Math.cos(r) * n
    var s = t + Math.sin(r) * n
    var /* [auto-meaningful-name] */this$_geometry$closePointEps = this._geometry.closePointEps
    var u = this.currentPath ? this.currentPath.points : null
    if (u) {
      var l = Math.abs(u[u.length - 2] - a)
      var f = Math.abs(u[u.length - 1] - s)
      if (!(l < this$_geometry$closePointEps && f < this$_geometry$closePointEps)) {
        u.push(a, s)
      }
    } else {
      this.moveTo(a, s)
      u = this.currentPath.points
    }
    yo.arc(a, s, e, t, n, r, i, o, u)
    return this
  }
  t.prototype.beginFill = function (e, t) {
    if (undefined === e) {
      e = 0
    }
    if (undefined === t) {
      t = 1
    }
    return this.beginTextureFill({
      texture: An.WHITE,
      color: e,
      alpha: t
    })
  }
  t.prototype.beginTextureFill = function (e) {
    e = Object.assign({
      texture: An.WHITE,
      color: 16777215,
      alpha: 1,
      matrix: null
    }, e)
    if (this.currentPath) {
      this.startPoly()
    }
    var t = e.alpha > 0
    if (t) {
      if (e.matrix) {
        e.matrix = e.matrix.clone()
        e.matrix.invert()
      }
      Object.assign(this._fillStyle, {
        visible: t
      }, e)
    } else {
      this._fillStyle.reset()
    }
    return this
  }
  t.prototype.endFill = function () {
    this.finishPoly()
    this._fillStyle.reset()
    return this
  }
  t.prototype.drawRect = function (e, t, n, r) {
    return this.drawShape(new ct(e, t, n, r))
  }
  t.prototype.drawRoundedRect = function (e, t, n, r, i) {
    return this.drawShape(new dt(e, t, n, r, i))
  }
  t.prototype.drawCircle = function (e, t, n) {
    return this.drawShape(new ut(e, t, n))
  }
  t.prototype.drawEllipse = function (e, t, n, r) {
    return this.drawShape(new lt(e, t, n, r))
  }
  t.prototype.drawPolygon = function () {
    for (var e, t = arguments, n = [], r = 0; r < arguments.length; r++) {
      n[r] = t[r]
    }
    var i = true
    var o = n[0]
    if (o.points) {
      i = o.closeStroke
      e = o.points
    } else {
      e = Array.isArray(n[0]) ? n[0] : n
    }
    var a = new ft(e)
    a.closeStroke = i
    this.drawShape(a)
    return this
  }
  t.prototype.drawShape = function (e) {
    if (this._holeMode) {
      this._geometry.drawHole(e, this._matrix)
    } else {
      this._geometry.drawShape(e, this._fillStyle.clone(), this._lineStyle.clone(), this._matrix)
    }
    return this
  }
  t.prototype.clear = function () {
    this._geometry.clear()
    this._lineStyle.reset()
    this._fillStyle.reset()
    this._boundsID++
    this._matrix = null
    this._holeMode = false
    this.currentPath = null
    return this
  }
  t.prototype.isFastRect = function () {
    var /* [auto-meaningful-name] */this$_geometry$graphicsData = this._geometry.graphicsData
    return 1 === this$_geometry$graphicsData.length && this$_geometry$graphicsData[0].shape.type === it.RECT && !this$_geometry$graphicsData[0].holes.length && !(this$_geometry$graphicsData[0].lineStyle.visible && this$_geometry$graphicsData[0].lineStyle.width)
  }
  t.prototype._render = function (e) {
    this.finishPoly()
    var /* [auto-meaningful-name] */this$_geometry = this._geometry
    var /* [auto-meaningful-name] */e$context$supports$uint32Indices = e.context.supports.uint32Indices
    this$_geometry.updateBatches(e$context$supports$uint32Indices)
    if (this$_geometry.batchable) {
      if (this.batchDirty !== this$_geometry.batchDirty) {
        this._populateBatches()
      }
      this._renderBatched(e)
    } else {
      e.batch.flush()
      this._renderDirect(e)
    }
  }
  t.prototype._populateBatches = function () {
    var /* [auto-meaningful-name] */this$_geometry = this._geometry
    var /* [auto-meaningful-name] */this$blendMode = this.blendMode
    var /* [auto-meaningful-name] */this$_geometry$batches$length = this$_geometry.batches.length
    this.batchTint = -1
    this._transformID = -1
    this.batchDirty = this$_geometry.batchDirty
    this.batches.length = this$_geometry$batches$length
    this.vertexData = new Float32Array(this$_geometry.points)
    for (var r = 0; r < this$_geometry$batches$length; r++) {
      var i = this$_geometry.batches[r]
      var /* [auto-meaningful-name] */i$style$color = i.style.color
      var a = new Float32Array(this.vertexData.buffer, 4 * i.attribStart * 2, 2 * i.attribSize)
      var s = new Float32Array(this$_geometry.uvsFloat32.buffer, 4 * i.attribStart * 2, 2 * i.attribSize)
      var c = {
        vertexData: a,
        blendMode: this$blendMode,
        indices: new Uint16Array(this$_geometry.indicesUint16.buffer, 2 * i.start, i.size),
        uvs: s,
        _batchRGB: xe(i$style$color),
        _tintRGB: i$style$color,
        _texture: i.style.texture,
        alpha: i.style.alpha,
        worldAlpha: 1
      }
      this.batches[r] = c
    }
  }
  t.prototype._renderBatched = function (e) {
    if (this.batches.length) {
      e.batch.setObjectRenderer(e.plugins[this.pluginName])
      this.calculateVertices()
      this.calculateTints()
      for (var t = 0, /* [auto-meaningful-name] */this$batches$length = this.batches.length; t < this$batches$length; t++) {
        var r = this.batches[t]
        r.worldAlpha = this.worldAlpha * r.alpha
        e.plugins[this.pluginName].render(r)
      }
    }
  }
  t.prototype._renderDirect = function (e) {
    var t = this._resolveDirectShader(e)
    var /* [auto-meaningful-name] */this$_geometry = this._geometry
    var /* [auto-meaningful-name] */this$tint = this.tint
    var /* [auto-meaningful-name] */this$worldAlpha = this.worldAlpha
    var /* [auto-meaningful-name] */t$uniforms = t.uniforms
    var /* [auto-meaningful-name] */this$_geometry$drawCalls = this$_geometry.drawCalls
    t$uniforms.translationMatrix = this.transform.worldTransform
    t$uniforms.tint[0] = (this$tint >> 16 & 255) / 255 * this$worldAlpha
    t$uniforms.tint[1] = (this$tint >> 8 & 255) / 255 * this$worldAlpha
    t$uniforms.tint[2] = (255 & this$tint) / 255 * this$worldAlpha
    t$uniforms.tint[3] = this$worldAlpha
    e.shader.bind(t)
    e.geometry.bind(this$_geometry, t)
    e.state.set(this.state)
    for (var s = 0, /* [auto-meaningful-name] */this$_geometry$drawCalls$length = this$_geometry$drawCalls.length; s < this$_geometry$drawCalls$length; s++) {
      this._renderDrawCallDirect(e, this$_geometry.drawCalls[s])
    }
  }
  t.prototype._renderDrawCallDirect = function (e, t) {
    for (var /* [auto-meaningful-name] */t$texArray = t.texArray, /* [auto-meaningful-name] */t$type = t.type, /* [auto-meaningful-name] */t$size = t.size, /* [auto-meaningful-name] */t$start = t.start, /* [auto-meaningful-name] */t$texArray$count = t$texArray.count, s = 0; s < t$texArray$count; s++) {
      e.texture.bind(t$texArray.elements[s], s)
    }
    e.geometry.draw(t$type, t$size, t$start)
  }
  t.prototype._resolveDirectShader = function (e) {
    var /* [auto-meaningful-name] */this$shader = this.shader
    var /* [auto-meaningful-name] */this$pluginName = this.pluginName
    if (!this$shader) {
      if (!Fo[this$pluginName]) {
        for (var /* [auto-meaningful-name] */e$plugins$batch$MAX_TEXTURES = e.plugins.batch.MAX_TEXTURES, i = new Int32Array(e$plugins$batch$MAX_TEXTURES), o = 0; o < e$plugins$batch$MAX_TEXTURES; o++) {
          i[o] = o
        }
        var a = {
          tint: new Float32Array([1, 1, 1, 1]),
          translationMatrix: new _t(),
          default: In.from({
            uSamplers: i
          }, true)
        }
        var /* [auto-meaningful-name] */e$pluginsThis$pluginName$_shader$program = e.plugins[this$pluginName]._shader.program
        Fo[this$pluginName] = new gr(e$pluginsThis$pluginName$_shader$program, a)
      }
      this$shader = Fo[this$pluginName]
    }
    return this$shader
  }
  t.prototype._calculateBounds = function () {
    this.finishPoly()
    var /* [auto-meaningful-name] */this$_geometry = this._geometry
    if (this$_geometry.graphicsData.length) {
      var /* [auto-meaningful-name] */this$_geometry$bounds = this$_geometry.bounds
      var /* [auto-meaningful-name] */this$_geometry$bounds$minX = this$_geometry$bounds.minX
      var /* [auto-meaningful-name] */this$_geometry$bounds$minY = this$_geometry$bounds.minY
      var /* [auto-meaningful-name] */this$_geometry$bounds$maxX = this$_geometry$bounds.maxX
      var /* [auto-meaningful-name] */this$_geometry$bounds$maxY = this$_geometry$bounds.maxY
      this._bounds.addFrame(this.transform, this$_geometry$bounds$minX, this$_geometry$bounds$minY, this$_geometry$bounds$maxX, this$_geometry$bounds$maxY)
    }
  }
  t.prototype.containsPoint = function (e) {
    this.worldTransform.applyInverse(e, t._TEMP_POINT)
    return this._geometry.containsPoint(t._TEMP_POINT)
  }
  t.prototype.calculateTints = function () {
    if (this.batchTint !== this.tint) {
      this.batchTint = this.tint
      for (var e = xe(this.tint, Io), t = 0; t < this.batches.length; t++) {
        var n = this.batches[t]
        var /* [auto-meaningful-name] */n$_batchRGB = n._batchRGB
        var i = (e[0] * n$_batchRGB[0] * 255 << 16) + (e[1] * n$_batchRGB[1] * 255 << 8) + (0 | e[2] * n$_batchRGB[2] * 255)
        n._tintRGB = (i >> 16) + (65280 & i) + ((255 & i) << 16)
      }
    }
  }
  t.prototype.calculateVertices = function () {
    var /* [auto-meaningful-name] */this$transform$_worldID = this.transform._worldID
    if (this._transformID !== this$transform$_worldID) {
      this._transformID = this$transform$_worldID
      for (var /* [auto-meaningful-name] */this$transform$worldTransform = this.transform.worldTransform, /* [auto-meaningful-name] */this$transform$worldTransform$a = this$transform$worldTransform.a, /* [auto-meaningful-name] */this$transform$worldTransform$b = this$transform$worldTransform.b, /* [auto-meaningful-name] */this$transform$worldTransform$c = this$transform$worldTransform.c, /* [auto-meaningful-name] */this$transform$worldTransform$d = this$transform$worldTransform.d, /* [auto-meaningful-name] */this$transform$worldTransform$tx = this$transform$worldTransform.tx, /* [auto-meaningful-name] */this$transform$worldTransform$ty = this$transform$worldTransform.ty, /* [auto-meaningful-name] */this$_geometry$points = this._geometry.points, /* [auto-meaningful-name] */this$vertexData = this.vertexData, l = 0, f = 0; f < this$_geometry$points.length; f += 2) {
        var d = this$_geometry$points[f]
        var h = this$_geometry$points[f + 1]
        this$vertexData[l++] = this$transform$worldTransform$a * d + this$transform$worldTransform$c * h + this$transform$worldTransform$tx
        this$vertexData[l++] = this$transform$worldTransform$d * h + this$transform$worldTransform$b * d + this$transform$worldTransform$ty
      }
    }
  }
  t.prototype.closePath = function () {
    var /* [auto-meaningful-name] */this$currentPath = this.currentPath
    if (this$currentPath) {
      this$currentPath.closeStroke = true
    }
    return this
  }
  t.prototype.setMatrix = function (e) {
    this._matrix = e
    return this
  }
  t.prototype.beginHole = function () {
    this.finishPoly()
    this._holeMode = true
    return this
  }
  t.prototype.endHole = function () {
    this.finishPoly()
    this._holeMode = false
    return this
  }
  t.prototype.destroy = function (t) {
    this._geometry.refCount--
    if (0 === this._geometry.refCount) {
      this._geometry.dispose()
    }
    this._matrix = null
    this.currentPath = null
    this._lineStyle.destroy()
    this._lineStyle = null
    this._fillStyle.destroy()
    this._fillStyle = null
    this._geometry = null
    this.shader = null
    this.vertexData = null
    this.batches.length = 0
    this.batches = null
    e.prototype.destroy.call(this, t)
  }
  t._TEMP_POINT = new ht()
  return t
}(Pt)
var Po = function () {
  function e(e) {
    this.renderer = e
    this._svgMatrix = null
    this._tempMatrix = new _t()
  }
  e.prototype._calcCanvasStyle = function (e, t) {
    var n
    if (e.texture && e.texture.baseTexture !== An.WHITE.baseTexture) {
      if (e.texture.valid) {
        n = eo.getTintedPattern(e.texture, t)
        this.setPatternTransform(n, e.matrix || _t.IDENTITY)
      } else {
        n = "#808080"
      }
    } else {
      n = "#" + ("00000" + (0 | t).toString(16)).substr(-6)
    }
    return n
  }
  e.prototype.render = function (e) {
    var /* [auto-meaningful-name] */this$renderer = this.renderer
    var /* [auto-meaningful-name] */this$renderer$context = this$renderer.context
    var /* [auto-meaningful-name] */e$worldAlpha = e.worldAlpha
    var /* [auto-meaningful-name] */e$transform$worldTransform = e.transform.worldTransform
    this$renderer.setContextTransform(e$transform$worldTransform)
    this$renderer.setBlendMode(e.blendMode)
    for (var o, a, /* [auto-meaningful-name] */e$geometry$graphicsData = e.geometry.graphicsData, c = (e.tint >> 16 & 255) / 255, u = (e.tint >> 8 & 255) / 255, l = (255 & e.tint) / 255, f = 0; f < e$geometry$graphicsData.length; f++) {
      var d = e$geometry$graphicsData[f]
      var /* [auto-meaningful-name] */d$shape = d.shape
      var /* [auto-meaningful-name] */d$fillStyle = d.fillStyle
      var /* [auto-meaningful-name] */d$lineStyle = d.lineStyle
      var A = 0 | d.fillStyle.color
      var g = 0 | d.lineStyle.color
      if (d.matrix) {
        this$renderer.setContextTransform(e$transform$worldTransform.copyTo(this._tempMatrix).append(d.matrix))
      }
      if (d$fillStyle.visible) {
        var v = ((A >> 16 & 255) / 255 * c * 255 << 16) + ((A >> 8 & 255) / 255 * u * 255 << 8) + (255 & A) / 255 * l * 255
        o = this._calcCanvasStyle(d$fillStyle, v)
      }
      if (d$lineStyle.visible) {
        var m = ((g >> 16 & 255) / 255 * c * 255 << 16) + ((g >> 8 & 255) / 255 * u * 255 << 8) + (255 & g) / 255 * l * 255
        a = this._calcCanvasStyle(d$lineStyle, m)
      }
      this$renderer$context.lineWidth = d$lineStyle.width
      this$renderer$context.lineCap = d$lineStyle.cap
      this$renderer$context.lineJoin = d$lineStyle.join
      this$renderer$context.miterLimit = d$lineStyle.miterLimit
      if (d.type === it.POLY) {
        this$renderer$context.beginPath()
        var /* [auto-meaningful-name] */SD$shape$points = (S = d$shape).points
        var /* [auto-meaningful-name] */d$holes = d.holes
        var w = undefined
        var E = undefined
        var x = undefined
        var C = undefined
        this$renderer$context.moveTo(SD$shape$points[0], SD$shape$points[1])
        for (var O = 2; O < SD$shape$points.length; O += 2) {
          this$renderer$context.lineTo(SD$shape$points[O], SD$shape$points[O + 1])
        }
        if (S.closeStroke) {
          this$renderer$context.closePath()
        }
        if (d$holes.length > 0) {
          w = 0
          x = SD$shape$points[0]
          C = SD$shape$points[1]
          for (O = 2; O + 2 < SD$shape$points.length; O += 2) {
            w += (SD$shape$points[O] - x) * (SD$shape$points[O + 3] - C) - (SD$shape$points[O + 2] - x) * (SD$shape$points[O + 1] - C)
          }
          for (var k = 0; k < d$holes.length; k++) {
            if (SD$shape$points = d$holes[k].shape.points) {
              E = 0
              x = SD$shape$points[0]
              C = SD$shape$points[1]
              for (O = 2; O + 2 < SD$shape$points.length; O += 2) {
                E += (SD$shape$points[O] - x) * (SD$shape$points[O + 3] - C) - (SD$shape$points[O + 2] - x) * (SD$shape$points[O + 1] - C)
              }
              if (E * w < 0) {
                this$renderer$context.moveTo(SD$shape$points[0], SD$shape$points[1])
                for (O = 2; O < SD$shape$points.length; O += 2) {
                  this$renderer$context.lineTo(SD$shape$points[O], SD$shape$points[O + 1])
                }
              } else {
                this$renderer$context.moveTo(SD$shape$points[SD$shape$points.length - 2], SD$shape$points[SD$shape$points.length - 1])
                for (O = SD$shape$points.length - 4; O >= 0; O -= 2) {
                  this$renderer$context.lineTo(SD$shape$points[O], SD$shape$points[O + 1])
                }
              }
              if (d$holes[k].shape.closeStroke) {
                this$renderer$context.closePath()
              }
            }
          }
        }
        if (d$fillStyle.visible) {
          this$renderer$context.globalAlpha = d$fillStyle.alpha * e$worldAlpha
          this$renderer$context.fillStyle = o
          this$renderer$context.fill()
        }
        if (d$lineStyle.visible) {
          this$renderer$context.globalAlpha = d$lineStyle.alpha * e$worldAlpha
          this$renderer$context.strokeStyle = a
          this$renderer$context.stroke()
        }
      } else if (d.type === it.RECT) {
        var S = d$shape
        if (d$fillStyle.visible) {
          this$renderer$context.globalAlpha = d$fillStyle.alpha * e$worldAlpha
          this$renderer$context.fillStyle = o
          this$renderer$context.fillRect(S.x, S.y, S.width, S.height)
        }
        if (d$lineStyle.visible) {
          this$renderer$context.globalAlpha = d$lineStyle.alpha * e$worldAlpha
          this$renderer$context.strokeStyle = a
          this$renderer$context.strokeRect(S.x, S.y, S.width, S.height)
        }
      } else if (d.type === it.CIRC) {
        S = d$shape
        this$renderer$context.beginPath()
        this$renderer$context.arc(S.x, S.y, S.radius, 0, 2 * Math.PI)
        this$renderer$context.closePath()
        if (d$fillStyle.visible) {
          this$renderer$context.globalAlpha = d$fillStyle.alpha * e$worldAlpha
          this$renderer$context.fillStyle = o
          this$renderer$context.fill()
        }
        if (d$lineStyle.visible) {
          this$renderer$context.globalAlpha = d$lineStyle.alpha * e$worldAlpha
          this$renderer$context.strokeStyle = a
          this$renderer$context.stroke()
        }
      } else if (d.type === it.ELIP) {
        var T = 2 * (S = d$shape).width
        var B = 2 * S.height
        var D = S.x - T / 2
        var I = S.y - B / 2
        this$renderer$context.beginPath()
        var F = T / 2 * .5522848
        var R = B / 2 * .5522848
        var P = D + T
        var N = I + B
        var M = D + T / 2
        var j = I + B / 2
        this$renderer$context.moveTo(D, j)
        this$renderer$context.bezierCurveTo(D, j - R, M - F, I, M, I)
        this$renderer$context.bezierCurveTo(M + F, I, P, j - R, P, j)
        this$renderer$context.bezierCurveTo(P, j + R, M + F, N, M, N)
        this$renderer$context.bezierCurveTo(M - F, N, D, j + R, D, j)
        this$renderer$context.closePath()
        if (d$fillStyle.visible) {
          this$renderer$context.globalAlpha = d$fillStyle.alpha * e$worldAlpha
          this$renderer$context.fillStyle = o
          this$renderer$context.fill()
        }
        if (d$lineStyle.visible) {
          this$renderer$context.globalAlpha = d$lineStyle.alpha * e$worldAlpha
          this$renderer$context.strokeStyle = a
          this$renderer$context.stroke()
        }
      } else if (d.type === it.RREC) {
        var /* [auto-meaningful-name] */SD$shape$x = (S = d$shape).x
        var U = S.y
        var /* [auto-meaningful-name] */S$width = S.width
        var /* [auto-meaningful-name] */S$height = S.height
        var /* [auto-meaningful-name] */S$radius = S.radius
        var z = Math.min(S$width, S$height) / 2 | 0
        S$radius = S$radius > z ? z : S$radius
        this$renderer$context.beginPath()
        this$renderer$context.moveTo(SD$shape$x, U + S$radius)
        this$renderer$context.lineTo(SD$shape$x, U + S$height - S$radius)
        this$renderer$context.quadraticCurveTo(SD$shape$x, U + S$height, SD$shape$x + S$radius, U + S$height)
        this$renderer$context.lineTo(SD$shape$x + S$width - S$radius, U + S$height)
        this$renderer$context.quadraticCurveTo(SD$shape$x + S$width, U + S$height, SD$shape$x + S$width, U + S$height - S$radius)
        this$renderer$context.lineTo(SD$shape$x + S$width, U + S$radius)
        this$renderer$context.quadraticCurveTo(SD$shape$x + S$width, U, SD$shape$x + S$width - S$radius, U)
        this$renderer$context.lineTo(SD$shape$x + S$radius, U)
        this$renderer$context.quadraticCurveTo(SD$shape$x, U, SD$shape$x, U + S$radius)
        this$renderer$context.closePath()
        if (d$fillStyle.visible) {
          this$renderer$context.globalAlpha = d$fillStyle.alpha * e$worldAlpha
          this$renderer$context.fillStyle = o
          this$renderer$context.fill()
        }
        if (d$lineStyle.visible) {
          this$renderer$context.globalAlpha = d$lineStyle.alpha * e$worldAlpha
          this$renderer$context.strokeStyle = a
          this$renderer$context.stroke()
        }
      }
    }
  }
  e.prototype.setPatternTransform = function (e, t) {
    if (false !== this._svgMatrix) {
      if (!this._svgMatrix) {
        var n = document.createElementNS("http://www.w3.org/2000/svg", "svg")
        if (n && n.createSVGMatrix) {
          this._svgMatrix = n.createSVGMatrix()
        }
        if (!this._svgMatrix || !e.setTransform) {
          return void (this._svgMatrix = false)
        }
      }
      this._svgMatrix.a = t.a
      this._svgMatrix.b = t.b
      this._svgMatrix.c = t.c
      this._svgMatrix.d = t.d
      this._svgMatrix.e = t.tx
      this._svgMatrix.f = t.ty
      e.setTransform(this._svgMatrix.inverse())
    }
  }
  e.prototype.destroy = function () {
    this.renderer = null
    this._svgMatrix = null
    this._tempMatrix = null
  }
  return e
}()
var No = new _t()
Ro.prototype.generateCanvasTexture = function (e, t) {
  if (undefined === t) {
    t = 1
  }
  var n = this.getLocalBounds()
  var r = vn.create({
    width: n.width,
    height: n.height,
    scaleMode: e,
    resolution: t
  })
  if (!mo) {
    mo = new Zi()
  }
  this.transform.updateLocalTransform()
  this.transform.localTransform.copyTo(No)
  No.invert()
  No.tx -= n.x
  No.ty -= n.y
  mo.render(this, {
    renderTexture: r,
    clear: true,
    transform: No
  })
  var i = An.from(r.baseTexture._canvasRenderTarget.canvas, {
    scaleMode: e
  })
  i.baseTexture.setResolution(t)
  return i
}
Ro.prototype.cachedGraphicsData = []
Ro.prototype._renderCanvas = function (e) {
  if (true !== this.isMask) {
    this.finishPoly()
    e.plugins.graphics.render(this)
  }
}
var Mo = new _t()
var jo = function () {
  function e(e) {
    this.renderer = e
  }
  e.prototype.render = function (e) {
    var /* [auto-meaningful-name] */e$_texture = e._texture
    var /* [auto-meaningful-name] */this$renderer = this.renderer
    var /* [auto-meaningful-name] */this$renderer$context = this$renderer.context
    var /* [auto-meaningful-name] */e$_texture$_frame$width = e$_texture._frame.width
    var /* [auto-meaningful-name] */e$_texture$_frame$height = e$_texture._frame.height
    var /* [auto-meaningful-name] */e$transform$worldTransform = e.transform.worldTransform
    var s = 0
    var c = 0
    var u = e$_texture.baseTexture.getDrawableSource()
    if (!(e$_texture.orig.width <= 0 || e$_texture.orig.height <= 0) && e$_texture.valid && u && e$_texture.valid) {
      this$renderer.setBlendMode(e.blendMode, true)
      this$renderer.context.globalAlpha = e.worldAlpha
      var l = e$_texture.baseTexture.scaleMode === ne.LINEAR
      if (this$renderer.smoothProperty && this$renderer.context[this$renderer.smoothProperty] !== l) {
        this$renderer$context[this$renderer.smoothProperty] = l
      }
      if (e$_texture.trim) {
        s = e$_texture.trim.width / 2 + e$_texture.trim.x - e.anchor.x * e$_texture.orig.width
        c = e$_texture.trim.height / 2 + e$_texture.trim.y - e.anchor.y * e$_texture.orig.height
      } else {
        s = (.5 - e.anchor.x) * e$_texture.orig.width
        c = (.5 - e.anchor.y) * e$_texture.orig.height
      }
      if (e$_texture.rotate) {
        e$transform$worldTransform.copyTo(Mo)
        e$transform$worldTransform = Mo
        xt.matrixAppendRotationInv(e$transform$worldTransform, e$_texture.rotate, s, c)
        s = 0
        c = 0
      }
      s -= e$_texture$_frame$width / 2
      c -= e$_texture$_frame$height / 2
      this$renderer.setContextTransform(e$transform$worldTransform, e.roundPixels, 1)
      if (e.roundPixels) {
        s |= 0
        c |= 0
      }
      var /* [auto-meaningful-name] */e$_texture$baseTexture$resolution = e$_texture.baseTexture.resolution
      var /* [auto-meaningful-name] */this$renderer$_outerBlend = this$renderer._outerBlend
      if (this$renderer$_outerBlend) {
        this$renderer$context.save()
        this$renderer$context.beginPath()
        this$renderer$context.rect(s * this$renderer.resolution, c * this$renderer.resolution, e$_texture$_frame$width * this$renderer.resolution, e$_texture$_frame$height * this$renderer.resolution)
        this$renderer$context.clip()
      }
      if (16777215 !== e.tint) {
        if (!(e._cachedTint === e.tint && e._tintedCanvas.tintId === e._texture._updateID)) {
          e._cachedTint = e.tint
          e._tintedCanvas = eo.getTintedCanvas(e, e.tint)
        }
        this$renderer$context.drawImage(e._tintedCanvas, 0, 0, Math.floor(e$_texture$_frame$width * e$_texture$baseTexture$resolution), Math.floor(e$_texture$_frame$height * e$_texture$baseTexture$resolution), Math.floor(s * this$renderer.resolution), Math.floor(c * this$renderer.resolution), Math.floor(e$_texture$_frame$width * this$renderer.resolution), Math.floor(e$_texture$_frame$height * this$renderer.resolution))
      } else {
        this$renderer$context.drawImage(u, e$_texture._frame.x * e$_texture$baseTexture$resolution, e$_texture._frame.y * e$_texture$baseTexture$resolution, Math.floor(e$_texture$_frame$width * e$_texture$baseTexture$resolution), Math.floor(e$_texture$_frame$height * e$_texture$baseTexture$resolution), Math.floor(s * this$renderer.resolution), Math.floor(c * this$renderer.resolution), Math.floor(e$_texture$_frame$width * this$renderer.resolution), Math.floor(e$_texture$_frame$height * this$renderer.resolution))
      }
      if (this$renderer$_outerBlend) {
        this$renderer$context.restore()
      }
      this$renderer.setBlendMode(q.NORMAL)
    }
  }
  e.prototype.destroy = function () {
    this.renderer = null
  }
  return e
}()
ji.prototype._tintedCanvas = null
ji.prototype._renderCanvas = function (e) {
  e.plugins.sprite.render(this)
}
var Lo = new ct()
var Uo = function () {
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
  e.prototype.canvas = function (e) {
    var t
    var n
    var r
    var i
    var /* [auto-meaningful-name] */this$renderer = this.renderer
    if (e) {
      i = e instanceof vn ? e : this$renderer.generateTexture(e)
    }
    if (i) {
      t = i.baseTexture._canvasRenderTarget.context
      n = i.baseTexture._canvasRenderTarget.resolution
      r = i.frame
    } else {
      t = this$renderer.rootContext
      n = this$renderer.resolution;
      (r = Lo).width = this.renderer.width
      r.height = this.renderer.height
    }
    var a = Math.floor(r.width * n + 1e-4)
    var s = Math.floor(r.height * n + 1e-4)
    var c = new $e(a, s, 1)
    var u = t.getImageData(r.x * n, r.y * n, a, s)
    c.context.putImageData(u, 0, 0)
    return c.canvas
  }
  e.prototype.pixels = function (e) {
    var t
    var /* [auto-meaningful-name] */i$baseTexture$_canvasRenderTarget$resolution
    var r
    var i
    var /* [auto-meaningful-name] */this$renderer = this.renderer
    if (e) {
      i = e instanceof vn ? e : this$renderer.generateTexture(e)
    }
    if (i) {
      t = i.baseTexture._canvasRenderTarget.context
      i$baseTexture$_canvasRenderTarget$resolution = i.baseTexture._canvasRenderTarget.resolution
      r = i.frame
    } else {
      t = this$renderer.rootContext;
      (r = Lo).width = this$renderer.width
      r.height = this$renderer.height
    }
    var a = r.x * i$baseTexture$_canvasRenderTarget$resolution
    var s = r.y * i$baseTexture$_canvasRenderTarget$resolution
    var c = r.width * i$baseTexture$_canvasRenderTarget$resolution
    var u = r.height * i$baseTexture$_canvasRenderTarget$resolution
    return t.getImageData(a, s, c, u).data
  }
  e.prototype.destroy = function () {
    this.renderer = null
  }
  return e
}()
var Ho = new _t()
var Vo = new _t()
var Go = [new ht(), new ht(), new ht(), new ht()]
Vi.prototype._renderCanvas = function (e) {
  var /* [auto-meaningful-name] */this$_texture = this._texture
  if (this$_texture.baseTexture.valid) {
    var /* [auto-meaningful-name] */e$context = e.context
    var /* [auto-meaningful-name] */this$worldTransform = this.worldTransform
    var /* [auto-meaningful-name] */this$_texture$baseTexture = this$_texture.baseTexture
    var o = this$_texture$baseTexture.getDrawableSource()
    var /* [auto-meaningful-name] */this$_texture$baseTexture$resolution = this$_texture$baseTexture.resolution
    if (this._textureID !== this._texture._updateID || this._cachedTint !== this.tint) {
      this._textureID = this._texture._updateID
      var s = new $e(this$_texture._frame.width, this$_texture._frame.height, this$_texture$baseTexture$resolution)
      if (16777215 !== this.tint) {
        this._tintedCanvas = eo.getTintedCanvas(this, this.tint)
        s.context.drawImage(this._tintedCanvas, 0, 0)
      } else {
        s.context.drawImage(o, -this$_texture._frame.x * this$_texture$baseTexture$resolution, -this$_texture._frame.y * this$_texture$baseTexture$resolution)
      }
      this._cachedTint = this.tint
      this._canvasPattern = s.context.createPattern(s.canvas, "repeat")
    }
    e$context.globalAlpha = this.worldAlpha
    e.setBlendMode(this.blendMode)
    this.tileTransform.updateLocalTransform()
    var /* [auto-meaningful-name] */this$tileTransform$localTransform = this.tileTransform.localTransform
    var /* [auto-meaningful-name] */this$_width = this._width
    var /* [auto-meaningful-name] */this$_height = this._height
    Ho.identity()
    Vo.copyFrom(this$tileTransform$localTransform)
    if (!this.uvRespectAnchor) {
      Vo.translate(-this.anchor.x * this$_width, -this.anchor.y * this$_height)
    }
    Ho.prepend(Vo)
    Ho.prepend(this$worldTransform)
    e.setContextTransform(Ho)
    e$context.fillStyle = this._canvasPattern
    var f = this.anchor.x * -this$_width
    var d = this.anchor.y * -this$_height
    Go[0].set(f, d)
    Go[1].set(f + this$_width, d)
    Go[2].set(f + this$_width, d + this$_height)
    Go[3].set(f, d + this$_height)
    for (var h = 0; h < 4; h++) {
      Vo.applyInverse(Go[h], Go[h])
    }
    e$context.beginPath()
    e$context.moveTo(Go[0].x, Go[0].y)
    for (h = 1; h < 4; h++) {
      e$context.lineTo(Go[h].x, Go[h].y)
    }
    e$context.closePath()
    e$context.fill()
  }
}
Pt.prototype._renderCanvas = function (e) {}
Pt.prototype.renderCanvas = function (e) {
  if (this.visible && !(this.worldAlpha <= 0) && this.renderable) {
    if (this._mask) {
      e.maskManager.pushMask(this._mask)
    }
    this._renderCanvas(e)
    for (var t = 0, /* [auto-meaningful-name] */this$children$length = this.children.length; t < this$children$length; ++t) {
      this.children[t].renderCanvas(e)
    }
    if (this._mask) {
      e.maskManager.popMask(e)
    }
  }
}
It.prototype.renderCanvas = function (e) {}
var zo
var Qo = function (e, t) {
  return (Qo = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t
  } || function (e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) {
      e[n] = t[n]
    }
  })(e, t)
}
!function (e) {
  e[e.LINEAR_VERTICAL = 0] = "LINEAR_VERTICAL"
  e[e.LINEAR_HORIZONTAL = 1] = "LINEAR_HORIZONTAL"
}(zo || (zo = {}))
var Wo = {
  align: "left",
  breakWords: false,
  dropShadow: false,
  dropShadowAlpha: 1,
  dropShadowAngle: Math.PI / 6,
  dropShadowBlur: 0,
  dropShadowColor: "black",
  dropShadowDistance: 5,
  fill: "black",
  fillGradientType: zo.LINEAR_VERTICAL,
  fillGradientStops: [],
  fontFamily: "Arial",
  fontSize: 26,
  fontStyle: "normal",
  fontVariant: "normal",
  fontWeight: "normal",
  letterSpacing: 0,
  lineHeight: 0,
  lineJoin: "miter",
  miterLimit: 10,
  padding: 0,
  stroke: "black",
  strokeThickness: 0,
  textBaseline: "alphabetic",
  trim: false,
  whiteSpace: "pre",
  wordWrap: false,
  wordWrapWidth: 100,
  leading: 0
}
var Ko = ["serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui"]
var Xo = function () {
  function e(e) {
    this.styleID = 0
    this.reset()
    $o(this, e, e)
  }
  e.prototype.clone = function () {
    var t = {}
    $o(t, this, Wo)
    return new e(t)
  }
  e.prototype.reset = function () {
    $o(this, Wo, Wo)
  }
  Object.defineProperty(e.prototype, "align", {
    get: function () {
      return this._align
    },
    set: function (e) {
      if (this._align !== e) {
        this._align = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "breakWords", {
    get: function () {
      return this._breakWords
    },
    set: function (e) {
      if (this._breakWords !== e) {
        this._breakWords = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "dropShadow", {
    get: function () {
      return this._dropShadow
    },
    set: function (e) {
      if (this._dropShadow !== e) {
        this._dropShadow = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "dropShadowAlpha", {
    get: function () {
      return this._dropShadowAlpha
    },
    set: function (e) {
      if (this._dropShadowAlpha !== e) {
        this._dropShadowAlpha = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "dropShadowAngle", {
    get: function () {
      return this._dropShadowAngle
    },
    set: function (e) {
      if (this._dropShadowAngle !== e) {
        this._dropShadowAngle = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "dropShadowBlur", {
    get: function () {
      return this._dropShadowBlur
    },
    set: function (e) {
      if (this._dropShadowBlur !== e) {
        this._dropShadowBlur = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "dropShadowColor", {
    get: function () {
      return this._dropShadowColor
    },
    set: function (e) {
      var t = qo(e)
      if (this._dropShadowColor !== t) {
        this._dropShadowColor = t
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "dropShadowDistance", {
    get: function () {
      return this._dropShadowDistance
    },
    set: function (e) {
      if (this._dropShadowDistance !== e) {
        this._dropShadowDistance = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "fill", {
    get: function () {
      return this._fill
    },
    set: function (e) {
      var t = qo(e)
      if (this._fill !== t) {
        this._fill = t
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "fillGradientType", {
    get: function () {
      return this._fillGradientType
    },
    set: function (e) {
      if (this._fillGradientType !== e) {
        this._fillGradientType = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "fillGradientStops", {
    get: function () {
      return this._fillGradientStops
    },
    set: function (e) {
      if (!function (e, t) {
        if (!Array.isArray(e) || !Array.isArray(t)) {
          return false
        }
        if (e.length !== t.length) {
          return false
        }
        for (var n = 0; n < e.length; ++n) {
          if (e[n] !== t[n]) {
            return false
          }
        }
        return true
      }(this._fillGradientStops, e)) {
        this._fillGradientStops = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "fontFamily", {
    get: function () {
      return this._fontFamily
    },
    set: function (e) {
      if (this.fontFamily !== e) {
        this._fontFamily = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "fontSize", {
    get: function () {
      return this._fontSize
    },
    set: function (e) {
      if (this._fontSize !== e) {
        this._fontSize = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "fontStyle", {
    get: function () {
      return this._fontStyle
    },
    set: function (e) {
      if (this._fontStyle !== e) {
        this._fontStyle = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "fontVariant", {
    get: function () {
      return this._fontVariant
    },
    set: function (e) {
      if (this._fontVariant !== e) {
        this._fontVariant = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "fontWeight", {
    get: function () {
      return this._fontWeight
    },
    set: function (e) {
      if (this._fontWeight !== e) {
        this._fontWeight = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "letterSpacing", {
    get: function () {
      return this._letterSpacing
    },
    set: function (e) {
      if (this._letterSpacing !== e) {
        this._letterSpacing = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "lineHeight", {
    get: function () {
      return this._lineHeight
    },
    set: function (e) {
      if (this._lineHeight !== e) {
        this._lineHeight = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "leading", {
    get: function () {
      return this._leading
    },
    set: function (e) {
      if (this._leading !== e) {
        this._leading = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "lineJoin", {
    get: function () {
      return this._lineJoin
    },
    set: function (e) {
      if (this._lineJoin !== e) {
        this._lineJoin = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "miterLimit", {
    get: function () {
      return this._miterLimit
    },
    set: function (e) {
      if (this._miterLimit !== e) {
        this._miterLimit = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "padding", {
    get: function () {
      return this._padding
    },
    set: function (e) {
      if (this._padding !== e) {
        this._padding = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "stroke", {
    get: function () {
      return this._stroke
    },
    set: function (e) {
      var t = qo(e)
      if (this._stroke !== t) {
        this._stroke = t
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "strokeThickness", {
    get: function () {
      return this._strokeThickness
    },
    set: function (e) {
      if (this._strokeThickness !== e) {
        this._strokeThickness = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "textBaseline", {
    get: function () {
      return this._textBaseline
    },
    set: function (e) {
      if (this._textBaseline !== e) {
        this._textBaseline = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "trim", {
    get: function () {
      return this._trim
    },
    set: function (e) {
      if (this._trim !== e) {
        this._trim = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "whiteSpace", {
    get: function () {
      return this._whiteSpace
    },
    set: function (e) {
      if (this._whiteSpace !== e) {
        this._whiteSpace = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "wordWrap", {
    get: function () {
      return this._wordWrap
    },
    set: function (e) {
      if (this._wordWrap !== e) {
        this._wordWrap = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "wordWrapWidth", {
    get: function () {
      return this._wordWrapWidth
    },
    set: function (e) {
      if (this._wordWrapWidth !== e) {
        this._wordWrapWidth = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  e.prototype.toFontString = function () {
    var e = "number" === typeof this.fontSize ? this.fontSize + "px" : this.fontSize
    var /* [auto-meaningful-name] */this$fontFamily = this.fontFamily
    if (!Array.isArray(this.fontFamily)) {
      this$fontFamily = this.fontFamily.split(",")
    }
    for (var n = this$fontFamily.length - 1; n >= 0; n--) {
      var r = this$fontFamily[n].trim()
      if (!/([\"\'])[^\'\"]+\1/.test(r) && Ko.indexOf(r) < 0) {
        r = "\"" + r + "\""
      }
      this$fontFamily[n] = r
    }
    return this.fontStyle + " " + this.fontVariant + " " + this.fontWeight + " " + e + " " + this$fontFamily.join(",")
  }
  return e
}()
function Yo(e) {
  return "number" === typeof e ? Ce(e) : ("string" === typeof e && 0 === e.indexOf("0x") && (e = e.replace("0x", "#")), e)
}
function qo(e) {
  if (Array.isArray(e)) {
    for (var t = 0; t < e.length; ++t) {
      e[t] = Yo(e[t])
    }
    return e
  }
  return Yo(e)
}
function $o(e, t, n) {
  for (var r in n) if (Array.isArray(t[r])) {
    e[r] = t[r].slice()
  } else {
    e[r] = t[r]
  }
}
var Jo = function () {
  function e(e, t, n, r, i, o, a, s, c) {
    this.text = e
    this.style = t
    this.width = n
    this.height = r
    this.lines = i
    this.lineWidths = o
    this.lineHeight = a
    this.maxLineWidth = s
    this.fontProperties = c
  }
  e.measureText = function (t, n, r, i) {
    if (undefined === i) {
      i = e._canvas
    }
    r = undefined === r || null === r ? n.wordWrap : r
    var o = n.toFontString()
    var a = e.measureFont(o)
    if (0 === a.fontSize) {
      a.fontSize = n.fontSize
      a.ascent = n.fontSize
    }
    var s = i.getContext("2d")
    s.font = o
    for (var c = (r ? e.wordWrap(t, n, i) : t).split(/(?:\r\n|\r|\n)/), u = new Array(c.length), l = 0, f = 0; f < c.length; f++) {
      var d = s.measureText(c[f]).width + (c[f].length - 1) * n.letterSpacing
      u[f] = d
      l = Math.max(l, d)
    }
    var h = l + n.strokeThickness
    if (n.dropShadow) {
      h += n.dropShadowDistance
    }
    var p = n.lineHeight || a.fontSize + n.strokeThickness
    var _ = Math.max(p, a.fontSize + n.strokeThickness) + (c.length - 1) * (p + n.leading)
    if (n.dropShadow) {
      _ += n.dropShadowDistance
    }
    return new e(t, n, h, _, c, u, p + n.leading, l, a)
  }
  e.wordWrap = function (t, n, r) {
    if (undefined === r) {
      r = e._canvas
    }
    for (var i = r.getContext("2d"), o = 0, a = "", s = "", c = Object.create(null), /* [auto-meaningful-name] */n$letterSpacing = n.letterSpacing, /* [auto-meaningful-name] */n$whiteSpace = n.whiteSpace, f = e.collapseSpaces(n$whiteSpace), d = e.collapseNewlines(n$whiteSpace), h = !f, p = n.wordWrapWidth + n$letterSpacing, _ = e.tokenize(t), A = 0; A < _.length; A++) {
      var g = _[A]
      if (e.isNewline(g)) {
        if (!d) {
          s += e.addLine(a)
          h = !f
          a = ""
          o = 0
          continue
        }
        g = " "
      }
      if (f) {
        var v = e.isBreakingSpace(g)
        var m = e.isBreakingSpace(a[a.length - 1])
        if (v && m) {
          continue
        }
      }
      var y = e.getFromCache(g, n$letterSpacing, c, i)
      if (y > p) {
        if ("" !== a) {
          s += e.addLine(a)
          a = ""
          o = 0
        }
        if (e.canBreakWords(g, n.breakWords)) {
          for (var b = e.wordWrapSplit(g), w = 0; w < b.length; w++) {
            for (var E = b[w], x = 1; b[w + x];) {
              var C = b[w + x]
              var O = E[E.length - 1]
              if (e.canBreakChars(O, C, g, w, n.breakWords)) {
                break
              }
              E += C
              x++
            }
            w += E.length - 1
            var k = e.getFromCache(E, n$letterSpacing, c, i)
            if (k + o > p) {
              s += e.addLine(a)
              h = false
              a = ""
              o = 0
            }
            a += E
            o += k
          }
        } else {
          if (a.length > 0) {
            s += e.addLine(a)
            a = ""
            o = 0
          }
          var S = A === _.length - 1
          s += e.addLine(g, !S)
          h = false
          a = ""
          o = 0
        }
      } else {
        if (y + o > p) {
          h = false
          s += e.addLine(a)
          a = ""
          o = 0
        }
        if (a.length > 0 || !e.isBreakingSpace(g) || h) {
          a += g
          o += y
        }
      }
    }
    return s += e.addLine(a, false)
  }
  e.addLine = function (t, n) {
    if (undefined === n) {
      n = true
    }
    t = e.trimRight(t)
    return t = n ? t + "\n" : t
  }
  e.getFromCache = function (e, t, n, r) {
    var i = n[e]
    if ("number" !== typeof i) {
      var o = e.length * t
      i = r.measureText(e).width + o
      n[e] = i
    }
    return i
  }
  e.collapseSpaces = function (e) {
    return "normal" === e || "pre-line" === e
  }
  e.collapseNewlines = function (e) {
    return "normal" === e
  }
  e.trimRight = function (t) {
    if ("string" !== typeof t) {
      return ""
    }
    for (var n = t.length - 1; n >= 0; n--) {
      var r = t[n]
      if (!e.isBreakingSpace(r)) {
        break
      }
      t = t.slice(0, -1)
    }
    return t
  }
  e.isNewline = function (t) {
    return "string" === typeof t && e._newlines.indexOf(t.charCodeAt(0)) >= 0
  }
  e.isBreakingSpace = function (t, n) {
    return "string" === typeof t && e._breakingSpaces.indexOf(t.charCodeAt(0)) >= 0
  }
  e.tokenize = function (t) {
    var n = []
    var r = ""
    if ("string" !== typeof t) {
      return n
    }
    for (var i = 0; i < t.length; i++) {
      var o = t[i]
      var a = t[i + 1]
      if (e.isBreakingSpace(o, a) || e.isNewline(o)) {
        if ("" !== r) {
          n.push(r)
          r = ""
        }
        n.push(o)
      } else {
        r += o
      }
    }
    if ("" !== r) {
      n.push(r)
    }
    return n
  }
  e.canBreakWords = function (e, t) {
    return t
  }
  e.canBreakChars = function (e, t, n, r, i) {
    return true
  }
  e.wordWrapSplit = function (e) {
    return e.split("")
  }
  e.measureFont = function (t) {
    if (e._fonts[t]) {
      return e._fonts[t]
    }
    var n = {
      ascent: 0,
      descent: 0,
      fontSize: 0
    }
    var /* [auto-meaningful-name] */e$_canvas = e._canvas
    var /* [auto-meaningful-name] */e$_context = e._context
    e$_context.font = t
    var o = e.METRICS_STRING + e.BASELINE_SYMBOL
    var a = Math.ceil(e$_context.measureText(o).width)
    var s = Math.ceil(e$_context.measureText(e.BASELINE_SYMBOL).width)
    var c = Math.ceil(e.HEIGHT_MULTIPLIER * s)
    s = s * e.BASELINE_MULTIPLIER | 0
    e$_canvas.width = a
    e$_canvas.height = c
    e$_context.fillStyle = "#f00"
    e$_context.fillRect(0, 0, a, c)
    e$_context.font = t
    e$_context.textBaseline = "alphabetic"
    e$_context.fillStyle = "#000"
    e$_context.fillText(o, 0, s)
    var /* [auto-meaningful-name] */e$_context$getImageData00AC$data = e$_context.getImageData(0, 0, a, c).data
    var /* [auto-meaningful-name] */e$_context$getImageData00AC$data$length = e$_context$getImageData00AC$data.length
    var f = 4 * a
    var d = 0
    var h = 0
    var p = false
    for (d = 0; d < s; ++d) {
      for (var _ = 0; _ < f; _ += 4) {
        if (255 !== e$_context$getImageData00AC$data[h + _]) {
          p = true
          break
        }
      }
      if (p) {
        break
      }
      h += f
    }
    for (n.ascent = s - d, h = e$_context$getImageData00AC$data$length - f, p = false, d = c; d > s; --d) {
      for (_ = 0; _ < f; _ += 4) {
        if (255 !== e$_context$getImageData00AC$data[h + _]) {
          p = true
          break
        }
      }
      if (p) {
        break
      }
      h -= f
    }
    n.descent = d - s
    n.fontSize = n.ascent + n.descent
    e._fonts[t] = n
    return n
  }
  e.clearMetrics = function (t) {
    if (undefined === t) {
      t = ""
    }
    if (t) {
      delete e._fonts[t]
    } else {
      e._fonts = {}
    }
  }
  return e
}()
var Zo = function () {
  try {
    var e = new OffscreenCanvas(0, 0)
    var t = e.getContext("2d")
    return t && t.measureText ? e : document.createElement("canvas")
  } catch (n) {
    return document.createElement("canvas")
  }
}()
Zo.width = Zo.height = 10
Jo._canvas = Zo
Jo._context = Zo.getContext("2d")
Jo._fonts = {}
Jo.METRICS_STRING = "|ÉqÅ"
Jo.BASELINE_SYMBOL = "M"
Jo.BASELINE_MULTIPLIER = 1.4
Jo.HEIGHT_MULTIPLIER = 2
Jo._newlines = [10, 13]
Jo._breakingSpaces = [9, 32, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8200, 8201, 8202, 8287, 12288]
var ea = {
  texture: true,
  children: false,
  baseTexture: true
}
var ta = function (e) {
  function t(t, n, r) {
    var i = this
    var o = false
    if (!r) {
      r = document.createElement("canvas")
      o = true
    }
    r.width = 3
    r.height = 3
    var a = An.from(r)
    a.orig = new ct()
    a.trim = new ct();
    (i = e.call(this, a) || this)._ownCanvas = o
    i.canvas = r
    i.context = i.canvas.getContext("2d")
    i._resolution = fe.RESOLUTION
    i._autoResolution = true
    i._text = null
    i._style = null
    i._styleListener = null
    i._font = ""
    i.text = t
    i.style = n
    i.localStyleID = -1
    return i
  }
  (function (e, t) {
    function n() {
      this.constructor = e
    }
    Qo(e, t)
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n())
  })(t, e)
  t.prototype.updateText = function (e) {
    var /* [auto-meaningful-name] */this$_style = this._style
    if (this.localStyleID !== this$_style.styleID) {
      this.dirty = true
      this.localStyleID = this$_style.styleID
    }
    if (this.dirty || !e) {
      this._font = this._style.toFontString()
      var r
      var i
      var /* [auto-meaningful-name] */this$context = this.context
      var a = Jo.measureText(this._text || " ", this._style, this._style.wordWrap, this.canvas)
      var /* [auto-meaningful-name] */a$width = a.width
      var /* [auto-meaningful-name] */a$height = a.height
      var /* [auto-meaningful-name] */a$lines = a.lines
      var /* [auto-meaningful-name] */a$lineHeight = a.lineHeight
      var /* [auto-meaningful-name] */a$lineWidths = a.lineWidths
      var /* [auto-meaningful-name] */a$maxLineWidth = a.maxLineWidth
      var /* [auto-meaningful-name] */a$fontProperties = a.fontProperties
      this.canvas.width = Math.ceil((Math.max(1, a$width) + 2 * this$_style.padding) * this._resolution)
      this.canvas.height = Math.ceil((Math.max(1, a$height) + 2 * this$_style.padding) * this._resolution)
      this$context.scale(this._resolution, this._resolution)
      this$context.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this$context.font = this._font
      this$context.lineWidth = this$_style.strokeThickness
      this$context.textBaseline = this$_style.textBaseline
      this$context.lineJoin = this$_style.lineJoin
      this$context.miterLimit = this$_style.miterLimit
      for (var p = this$_style.dropShadow ? 2 : 1, _ = 0; _ < p; ++_) {
        var A = this$_style.dropShadow && 0 === _
        var g = A ? Math.ceil(Math.max(1, a$height) + 2 * this$_style.padding) : 0
        var v = g * this._resolution
        if (A) {
          this$context.fillStyle = "black"
          this$context.strokeStyle = "black"
          var /* [auto-meaningful-name] */this$_style$dropShadowColor = this$_style.dropShadowColor
          var y = xe("number" === typeof this$_style$dropShadowColor ? this$_style$dropShadowColor : Oe(this$_style$dropShadowColor))
          this$context.shadowColor = "rgba(" + 255 * y[0] + "," + 255 * y[1] + "," + 255 * y[2] + "," + this$_style.dropShadowAlpha + ")"
          this$context.shadowBlur = this$_style.dropShadowBlur
          this$context.shadowOffsetX = Math.cos(this$_style.dropShadowAngle) * this$_style.dropShadowDistance
          this$context.shadowOffsetY = Math.sin(this$_style.dropShadowAngle) * this$_style.dropShadowDistance + v
        } else {
          this$context.fillStyle = this._generateFillStyle(this$_style, a$lines, a)
          this$context.strokeStyle = this$_style.stroke
          this$context.shadowColor = "black"
          this$context.shadowBlur = 0
          this$context.shadowOffsetX = 0
          this$context.shadowOffsetY = 0
        }
        var b = (a$lineHeight - a$fontProperties.fontSize) / 2
        if (!t.nextLineHeightBehavior || a$lineHeight - a$fontProperties.fontSize < 0) {
          b = 0
        }
        for (var w = 0; w < a$lines.length; w++) {
          r = this$_style.strokeThickness / 2
          i = this$_style.strokeThickness / 2 + w * a$lineHeight + a$fontProperties.ascent + b
          if ("right" === this$_style.align) {
            r += a$maxLineWidth - a$lineWidths[w]
          } else {
            if ("center" === this$_style.align) {
              r += (a$maxLineWidth - a$lineWidths[w]) / 2
            }
          }
          if (this$_style.stroke && this$_style.strokeThickness) {
            this.drawLetterSpacing(a$lines[w], r + this$_style.padding, i + this$_style.padding - g, true)
          }
          if (this$_style.fill) {
            this.drawLetterSpacing(a$lines[w], r + this$_style.padding, i + this$_style.padding - g)
          }
        }
      }
      this.updateTexture()
    }
  }
  t.prototype.drawLetterSpacing = function (e, t, n, r) {
    if (undefined === r) {
      r = false
    }
    var /* [auto-meaningful-name] */this$_style$letterSpacing = this._style.letterSpacing
    if (0 !== this$_style$letterSpacing) {
      for (var o = t, a = Array.from ? Array.from(e) : e.split(""), /* [auto-meaningful-name] */this$context$measureTextE$width = this.context.measureText(e).width, c = 0, u = 0; u < a.length; ++u) {
        var l = a[u]
        if (r) {
          this.context.strokeText(l, o, n)
        } else {
          this.context.fillText(l, o, n)
        }
        o += this$context$measureTextE$width - (c = this.context.measureText(e.substring(u + 1)).width) + this$_style$letterSpacing
        this$context$measureTextE$width = c
      }
    } else if (r) {
      this.context.strokeText(e, t, n)
    } else {
      this.context.fillText(e, t, n)
    }
  }
  t.prototype.updateTexture = function () {
    var /* [auto-meaningful-name] */this$canvas = this.canvas
    if (this._style.trim) {
      var t = Je(this$canvas)
      if (t.data) {
        this$canvas.width = t.width
        this$canvas.height = t.height
        this.context.putImageData(t.data, 0, 0)
      }
    }
    var /* [auto-meaningful-name] */this$_texture = this._texture
    var /* [auto-meaningful-name] */this$_style = this._style
    var i = this$_style.trim ? 0 : this$_style.padding
    var /* [auto-meaningful-name] */this$_texture$baseTexture = this$_texture.baseTexture
    this$_texture.trim.width = this$_texture._frame.width = Math.ceil(this$canvas.width / this._resolution)
    this$_texture.trim.height = this$_texture._frame.height = Math.ceil(this$canvas.height / this._resolution)
    this$_texture.trim.x = -i
    this$_texture.trim.y = -i
    this$_texture.orig.width = this$_texture._frame.width - 2 * i
    this$_texture.orig.height = this$_texture._frame.height - 2 * i
    this._onTextureUpdate()
    this$_texture$baseTexture.setRealSize(this$canvas.width, this$canvas.height, this._resolution)
    this._recursivePostUpdateTransform()
    this.dirty = false
  }
  t.prototype._render = function (t) {
    if (this._autoResolution && this._resolution !== t.resolution) {
      this._resolution = t.resolution
      this.dirty = true
    }
    this.updateText(true)
    e.prototype._render.call(this, t)
  }
  t.prototype.getLocalBounds = function (t) {
    this.updateText(true)
    return e.prototype.getLocalBounds.call(this, t)
  }
  t.prototype._calculateBounds = function () {
    this.updateText(true)
    this.calculateVertices()
    this._bounds.addQuad(this.vertexData)
  }
  t.prototype._generateFillStyle = function (e, t, n) {
    var r
    var /* [auto-meaningful-name] */e$fill = e.fill
    if (!Array.isArray(e$fill)) {
      return e$fill
    }
    if (1 === e$fill.length) {
      return e$fill[0]
    }
    var o = e.dropShadow ? e.dropShadowDistance : 0
    var a = e.padding || 0
    var s = Math.ceil(this.canvas.width / this._resolution) - o - 2 * a
    var c = Math.ceil(this.canvas.height / this._resolution) - o - 2 * a
    var u = e$fill.slice()
    var l = e.fillGradientStops.slice()
    if (!l.length) {
      for (var f = u.length + 1, d = 1; d < f; ++d) {
        l.push(d / f)
      }
    }
    u.unshift(e$fill[0])
    l.unshift(0)
    u.push(e$fill[e$fill.length - 1])
    l.push(1)
    if (e.fillGradientType === zo.LINEAR_VERTICAL) {
      r = this.context.createLinearGradient(s / 2, a, s / 2, c + a)
      var h = (n.fontProperties.fontSize + e.strokeThickness) / c
      for (d = 0; d < t.length; d++) {
        for (var p = n.lineHeight * d, _ = 0; _ < u.length; _++) {
          var A = 0
          A = "number" === typeof l[_] ? l[_] : _ / u.length
          var g = Math.min(1, Math.max(0, p / c + A * h))
          g = Number(g.toFixed(5))
          r.addColorStop(g, u[_])
        }
      }
    } else {
      r = this.context.createLinearGradient(a, c / 2, s + a, c / 2)
      var v = u.length + 1
      var m = 1
      for (d = 0; d < u.length; d++) {
        var y = undefined
        y = "number" === typeof l[d] ? l[d] : m / v
        r.addColorStop(y, u[d])
        m++
      }
    }
    return r
  }
  t.prototype.destroy = function (t) {
    if ("boolean" === typeof t) {
      t = {
        children: t
      }
    }
    t = Object.assign({}, ea, t)
    e.prototype.destroy.call(this, t)
    if (this._ownCanvas) {
      this.canvas.height = this.canvas.width = 0
    }
    this.context = null
    this.canvas = null
    this._style = null
  }
  Object.defineProperty(t.prototype, "width", {
    get: function () {
      this.updateText(true)
      return Math.abs(this.scale.x) * this._texture.orig.width
    },
    set: function (e) {
      this.updateText(true)
      var t = He(this.scale.x) || 1
      this.scale.x = t * e / this._texture.orig.width
      this._width = e
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "height", {
    get: function () {
      this.updateText(true)
      return Math.abs(this.scale.y) * this._texture.orig.height
    },
    set: function (e) {
      this.updateText(true)
      var t = He(this.scale.y) || 1
      this.scale.y = t * e / this._texture.orig.height
      this._height = e
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "style", {
    get: function () {
      return this._style
    },
    set: function (e) {
      e = e || {}
      this._style = e instanceof Xo ? e : new Xo(e)
      this.localStyleID = -1
      this.dirty = true
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "text", {
    get: function () {
      return this._text
    },
    set: function (e) {
      e = String(null === e || undefined === e ? "" : e)
      if (this._text !== e) {
        this._text = e
        this.dirty = true
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "resolution", {
    get: function () {
      return this._resolution
    },
    set: function (e) {
      this._autoResolution = false
      if (this._resolution !== e) {
        this._resolution = e
        this.dirty = true
      }
    },
    enumerable: false,
    configurable: true
  })
  t.nextLineHeightBehavior = false
  return t
}(ji)
ta.prototype._renderCanvas = function (e) {
  if (this._autoResolution && this._resolution !== e.resolution) {
    this._resolution = e.resolution
    this.dirty = true
  }
  this.updateText(true)
  ji.prototype._renderCanvas.call(this, e)
}
var na = function (e, t) {
  return (na = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t
  } || function (e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) {
      e[n] = t[n]
    }
  })(e, t)
}
var ra = function (e) {
  function t(t, n) {
    if (undefined === n) {
      n = true
    }
    var r = e.call(this, t[0] instanceof An ? t[0] : t[0].texture) || this
    r._textures = null
    r._durations = null
    r._autoUpdate = n
    r._isConnectedToTicker = false
    r.animationSpeed = 1
    r.loop = true
    r.updateAnchor = false
    r.onComplete = null
    r.onFrameChange = null
    r.onLoop = null
    r._currentTime = 0
    r._playing = false
    r._previousFrame = null
    r.textures = t
    return r
  }
  (function (e, t) {
    function n() {
      this.constructor = e
    }
    na(e, t)
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n())
  })(t, e)
  t.prototype.stop = function () {
    if (this._playing) {
      this._playing = false
      if (this._autoUpdate && this._isConnectedToTicker) {
        kt.shared.remove(this.update, this)
        this._isConnectedToTicker = false
      }
    }
  }
  t.prototype.play = function () {
    if (!this._playing) {
      this._playing = true
      if (this._autoUpdate && !this._isConnectedToTicker) {
        kt.shared.add(this.update, this, Et.HIGH)
        this._isConnectedToTicker = true
      }
    }
  }
  t.prototype.gotoAndStop = function (e) {
    this.stop()
    var /* [auto-meaningful-name] */this$currentFrame = this.currentFrame
    this._currentTime = e
    if (this$currentFrame !== this.currentFrame) {
      this.updateTexture()
    }
  }
  t.prototype.gotoAndPlay = function (e) {
    var /* [auto-meaningful-name] */this$currentFrame = this.currentFrame
    this._currentTime = e
    if (this$currentFrame !== this.currentFrame) {
      this.updateTexture()
    }
    this.play()
  }
  t.prototype.update = function (e) {
    if (this._playing) {
      var t = this.animationSpeed * e
      var /* [auto-meaningful-name] */this$currentFrame = this.currentFrame
      if (null !== this._durations) {
        var r = this._currentTime % 1 * this._durations[this.currentFrame]
        for (r += t / 60 * 1e3; r < 0;) {
          this._currentTime--
          r += this._durations[this.currentFrame]
        }
        var i = Math.sign(this.animationSpeed * e)
        for (this._currentTime = Math.floor(this._currentTime); r >= this._durations[this.currentFrame];) {
          r -= this._durations[this.currentFrame] * i
          this._currentTime += i
        }
        this._currentTime += r / this._durations[this.currentFrame]
      } else {
        this._currentTime += t
      }
      if (this._currentTime < 0 && !this.loop) {
        this.gotoAndStop(0)
        if (this.onComplete) {
          this.onComplete()
        }
      } else {
        if (this._currentTime >= this._textures.length && !this.loop) {
          this.gotoAndStop(this._textures.length - 1)
          if (this.onComplete) {
            this.onComplete()
          }
        } else {
          if (this$currentFrame !== this.currentFrame) {
            if (this.loop && this.onLoop && (this.animationSpeed > 0 && this.currentFrame < this$currentFrame || this.animationSpeed < 0 && this.currentFrame > this$currentFrame)) {
              this.onLoop()
            }
            this.updateTexture()
          }
        }
      }
    }
  }
  t.prototype.updateTexture = function () {
    var /* [auto-meaningful-name] */this$currentFrame = this.currentFrame
    if (this._previousFrame !== this$currentFrame) {
      this._previousFrame = this$currentFrame
      this._texture = this._textures[this$currentFrame]
      this._textureID = -1
      this._textureTrimmedID = -1
      this._cachedTint = 16777215
      this.uvs = this._texture._uvs.uvsFloat32
      if (this.updateAnchor) {
        this._anchor.copyFrom(this._texture.defaultAnchor)
      }
      if (this.onFrameChange) {
        this.onFrameChange(this.currentFrame)
      }
    }
  }
  t.prototype.destroy = function (t) {
    this.stop()
    e.prototype.destroy.call(this, t)
    this.onComplete = null
    this.onFrameChange = null
    this.onLoop = null
  }
  t.fromFrames = function (e) {
    for (var n = [], r = 0; r < e.length; ++r) {
      n.push(An.from(e[r]))
    }
    return new t(n)
  }
  t.fromImages = function (e) {
    for (var n = [], r = 0; r < e.length; ++r) {
      n.push(An.from(e[r]))
    }
    return new t(n)
  }
  Object.defineProperty(t.prototype, "totalFrames", {
    get: function () {
      return this._textures.length
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "textures", {
    get: function () {
      return this._textures
    },
    set: function (e) {
      if (e[0] instanceof An) {
        this._textures = e
        this._durations = null
      } else {
        this._textures = []
        this._durations = []
        for (var t = 0; t < e.length; t++) {
          this._textures.push(e[t].texture)
          this._durations.push(e[t].time)
        }
      }
      this._previousFrame = null
      this.gotoAndStop(0)
      this.updateTexture()
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "currentFrame", {
    get: function () {
      var e = Math.floor(this._currentTime) % this._textures.length
      if (e < 0) {
        e += this._textures.length
      }
      return e
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "playing", {
    get: function () {
      return this._playing
    },
    enumerable: false,
    configurable: true
  })
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
          if (this._autoUpdate && !this._isConnectedToTicker && this._playing) {
            kt.shared.add(this.update, this)
            this._isConnectedToTicker = true
          }
        }
      }
    },
    enumerable: false,
    configurable: true
  })
  return t
}(ji)
var ia = function (e, t) {
  return (ia = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t
  } || function (e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) {
      e[n] = t[n]
    }
  })(e, t)
}
var oa = function (e) {
  function t() {
    var t = this
    var n = {
      m: new Float32Array([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]),
      uAlpha: 1
    };
    (t = e.call(this, "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n", "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float m[20];\nuniform float uAlpha;\n\nvoid main(void)\n{\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    if (uAlpha == 0.0) {\n        gl_FragColor = c;\n        return;\n    }\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (c.a > 0.0) {\n      c.rgb /= c.a;\n    }\n\n    vec4 result;\n\n    result.r = (m[0] * c.r);\n        result.r += (m[1] * c.g);\n        result.r += (m[2] * c.b);\n        result.r += (m[3] * c.a);\n        result.r += m[4];\n\n    result.g = (m[5] * c.r);\n        result.g += (m[6] * c.g);\n        result.g += (m[7] * c.b);\n        result.g += (m[8] * c.a);\n        result.g += m[9];\n\n    result.b = (m[10] * c.r);\n       result.b += (m[11] * c.g);\n       result.b += (m[12] * c.b);\n       result.b += (m[13] * c.a);\n       result.b += m[14];\n\n    result.a = (m[15] * c.r);\n       result.a += (m[16] * c.g);\n       result.a += (m[17] * c.b);\n       result.a += (m[18] * c.a);\n       result.a += m[19];\n\n    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);\n\n    // Premultiply alpha again.\n    rgb *= result.a;\n\n    gl_FragColor = vec4(rgb, result.a);\n}\n", n) || this).alpha = 1
    return t
  }
  (function (e, t) {
    function n() {
      this.constructor = e
    }
    ia(e, t)
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n())
  })(t, e)
  t.prototype._loadMatrix = function (e, t) {
    if (undefined === t) {
      t = false
    }
    var n = e
    if (t) {
      this._multiply(n, this.uniforms.m, e)
      n = this._colorMatrix(n)
    }
    this.uniforms.m = n
  }
  t.prototype._multiply = function (e, t, n) {
    e[0] = t[0] * n[0] + t[1] * n[5] + t[2] * n[10] + t[3] * n[15]
    e[1] = t[0] * n[1] + t[1] * n[6] + t[2] * n[11] + t[3] * n[16]
    e[2] = t[0] * n[2] + t[1] * n[7] + t[2] * n[12] + t[3] * n[17]
    e[3] = t[0] * n[3] + t[1] * n[8] + t[2] * n[13] + t[3] * n[18]
    e[4] = t[0] * n[4] + t[1] * n[9] + t[2] * n[14] + t[3] * n[19] + t[4]
    e[5] = t[5] * n[0] + t[6] * n[5] + t[7] * n[10] + t[8] * n[15]
    e[6] = t[5] * n[1] + t[6] * n[6] + t[7] * n[11] + t[8] * n[16]
    e[7] = t[5] * n[2] + t[6] * n[7] + t[7] * n[12] + t[8] * n[17]
    e[8] = t[5] * n[3] + t[6] * n[8] + t[7] * n[13] + t[8] * n[18]
    e[9] = t[5] * n[4] + t[6] * n[9] + t[7] * n[14] + t[8] * n[19] + t[9]
    e[10] = t[10] * n[0] + t[11] * n[5] + t[12] * n[10] + t[13] * n[15]
    e[11] = t[10] * n[1] + t[11] * n[6] + t[12] * n[11] + t[13] * n[16]
    e[12] = t[10] * n[2] + t[11] * n[7] + t[12] * n[12] + t[13] * n[17]
    e[13] = t[10] * n[3] + t[11] * n[8] + t[12] * n[13] + t[13] * n[18]
    e[14] = t[10] * n[4] + t[11] * n[9] + t[12] * n[14] + t[13] * n[19] + t[14]
    e[15] = t[15] * n[0] + t[16] * n[5] + t[17] * n[10] + t[18] * n[15]
    e[16] = t[15] * n[1] + t[16] * n[6] + t[17] * n[11] + t[18] * n[16]
    e[17] = t[15] * n[2] + t[16] * n[7] + t[17] * n[12] + t[18] * n[17]
    e[18] = t[15] * n[3] + t[16] * n[8] + t[17] * n[13] + t[18] * n[18]
    e[19] = t[15] * n[4] + t[16] * n[9] + t[17] * n[14] + t[18] * n[19] + t[19]
    return e
  }
  t.prototype._colorMatrix = function (e) {
    var t = new Float32Array(e)
    t[4] /= 255
    t[9] /= 255
    t[14] /= 255
    t[19] /= 255
    return t
  }
  t.prototype.brightness = function (e, t) {
    var n = [e, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 1, 0]
    this._loadMatrix(n, t)
  }
  t.prototype.greyscale = function (e, t) {
    var n = [e, e, e, 0, 0, e, e, e, 0, 0, e, e, e, 0, 0, 0, 0, 0, 1, 0]
    this._loadMatrix(n, t)
  }
  t.prototype.blackAndWhite = function (e) {
    this._loadMatrix([.3, .6, .1, 0, 0, .3, .6, .1, 0, 0, .3, .6, .1, 0, 0, 0, 0, 0, 1, 0], e)
  }
  t.prototype.hue = function (e, t) {
    e = (e || 0) / 180 * Math.PI
    var n = Math.cos(e)
    var r = Math.sin(e)
    var i = 1 / 3
    var o = (0, Math.sqrt)(i)
    var a = [n + (1 - n) * i, i * (1 - n) - o * r, i * (1 - n) + o * r, 0, 0, i * (1 - n) + o * r, n + i * (1 - n), i * (1 - n) - o * r, 0, 0, i * (1 - n) - o * r, i * (1 - n) + o * r, n + i * (1 - n), 0, 0, 0, 0, 0, 1, 0]
    this._loadMatrix(a, t)
  }
  t.prototype.contrast = function (e, t) {
    var n = (e || 0) + 1
    var r = -.5 * (n - 1)
    var i = [n, 0, 0, 0, r, 0, n, 0, 0, r, 0, 0, n, 0, r, 0, 0, 0, 1, 0]
    this._loadMatrix(i, t)
  }
  t.prototype.saturate = function (e, t) {
    if (undefined === e) {
      e = 0
    }
    var n = 2 * e / 3 + 1
    var r = -.5 * (n - 1)
    var i = [n, r, r, 0, 0, r, n, r, 0, 0, r, r, n, 0, 0, 0, 0, 0, 1, 0]
    this._loadMatrix(i, t)
  }
  t.prototype.desaturate = function () {
    this.saturate(-1)
  }
  t.prototype.negative = function (e) {
    this._loadMatrix([-1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 0, 1, 0], e)
  }
  t.prototype.sepia = function (e) {
    this._loadMatrix([.393, .7689999, .18899999, 0, 0, .349, .6859999, .16799999, 0, 0, .272, .5339999, .13099999, 0, 0, 0, 0, 0, 1, 0], e)
  }
  t.prototype.technicolor = function (e) {
    this._loadMatrix([1.9125277891456083, -.8545344976951645, -.09155508482755585, 0, 11.793603434377337, -.3087833385928097, 1.7658908555458428, -.10601743074722245, 0, -70.35205161461398, -.231103377548616, -.7501899197440212, 1.847597816108189, 0, 30.950940869491138, 0, 0, 0, 1, 0], e)
  }
  t.prototype.polaroid = function (e) {
    this._loadMatrix([1.438, -.062, -.062, 0, 0, -.122, 1.378, -.122, 0, 0, -.016, -.016, 1.483, 0, 0, 0, 0, 0, 1, 0], e)
  }
  t.prototype.toBGR = function (e) {
    this._loadMatrix([0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0], e)
  }
  t.prototype.kodachrome = function (e) {
    this._loadMatrix([1.1285582396593525, -.3967382283601348, -.03992559172921793, 0, 63.72958762196502, -.16404339962244616, 1.0835251566291304, -.05498805115633132, 0, 24.732407896706203, -.16786010706155763, -.5603416277695248, 1.6014850761964943, 0, 35.62982807460946, 0, 0, 0, 1, 0], e)
  }
  t.prototype.browni = function (e) {
    this._loadMatrix([.5997023498159715, .34553243048391263, -.2708298674538042, 0, 47.43192855600873, -.037703249837783157, .8609577587992641, .15059552388459913, 0, -36.96841498319127, .24113635128153335, -.07441037908422492, .44972182064877153, 0, -7.562075277591283, 0, 0, 0, 1, 0], e)
  }
  t.prototype.vintage = function (e) {
    this._loadMatrix([.6279345635605994, .3202183420819367, -.03965408211312453, 0, 9.651285835294123, .02578397704808868, .6441188644374771, .03259127616149294, 0, 7.462829176470591, .0466055556782719, -.0851232987247891, .5241648018700465, 0, 5.159190588235296, 0, 0, 0, 1, 0], e)
  }
  t.prototype.colorTone = function (e, t, n, r, i) {
    var o = ((n = n || 16770432) >> 16 & 255) / 255
    var a = (n >> 8 & 255) / 255
    var s = (255 & n) / 255
    var c = ((r = r || 3375104) >> 16 & 255) / 255
    var u = (r >> 8 & 255) / 255
    var l = (255 & r) / 255
    var f = [.3, .59, .11, 0, 0, o, a, s, e = e || .2, 0, c, u, l, t = t || .15, 0, o - c, a - u, s - l, 0, 0]
    this._loadMatrix(f, i)
  }
  t.prototype.night = function (e, t) {
    var n = [-2 * (e = e || .1), -e, 0, 0, 0, -e, 0, e, 0, 0, 0, e, 2 * e, 0, 0, 0, 0, 0, 1, 0]
    this._loadMatrix(n, t)
  }
  t.prototype.predator = function (e, t) {
    var n = [11.224130630493164 * e, -4.794486999511719 * e, -2.8746118545532227 * e, 0 * e, .40342438220977783 * e, -3.6330697536468506 * e, 9.193157196044922 * e, -2.951810836791992 * e, 0 * e, -1.316135048866272 * e, -3.2184197902679443 * e, -4.2375030517578125 * e, 7.476448059082031 * e, 0 * e, .8044459223747253 * e, 0, 0, 0, 1, 0]
    this._loadMatrix(n, t)
  }
  t.prototype.lsd = function (e) {
    this._loadMatrix([2, -.4, .5, 0, 0, -.5, 2, -.4, 0, 0, -.4, -.5, 3, 0, 0, 0, 0, 0, 1, 0], e)
  }
  t.prototype.reset = function () {
    this._loadMatrix([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], false)
  }
  Object.defineProperty(t.prototype, "matrix", {
    get: function () {
      return this.uniforms.m
    },
    set: function (e) {
      this.uniforms.m = e
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "alpha", {
    get: function () {
      return this.uniforms.uAlpha
    },
    set: function (e) {
      this.uniforms.uAlpha = e
    },
    enumerable: false,
    configurable: true
  })
  return t
}(mr)
oa.prototype.grayscale = oa.prototype.greyscale
var aa = function (e, t) {
  return (aa = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t
  } || function (e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) {
      e[n] = t[n]
    }
  })(e, t)
}
var sa = function (e) {
  function t(t, n) {
    var r = this
    var i = new _t()
    t.renderable = false;
    (r = e.call(this, "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\nuniform mat3 filterMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n\tgl_Position = filterVertexPosition();\n\tvTextureCoord = filterTextureCoord();\n\tvFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;\n}\n", "varying vec2 vFilterCoord;\nvarying vec2 vTextureCoord;\n\nuniform vec2 scale;\nuniform mat2 rotation;\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nuniform highp vec4 inputSize;\nuniform vec4 inputClamp;\n\nvoid main(void)\n{\n  vec4 map =  texture2D(mapSampler, vFilterCoord);\n\n  map -= 0.5;\n  map.xy = scale * inputSize.zw * (rotation * map.xy);\n\n  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));\n}\n", {
      mapSampler: t._texture,
      filterMatrix: i,
      scale: {
        x: 1,
        y: 1
      },
      rotation: new Float32Array([1, 0, 0, 1])
    }) || this).maskSprite = t
    r.maskMatrix = i
    if (!(null !== n && undefined !== n)) {
      n = 20
    }
    r.scale = new ht(n, n)
    return r
  }
  (function (e, t) {
    function n() {
      this.constructor = e
    }
    aa(e, t)
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n())
  })(t, e)
  t.prototype.apply = function (e, t, n, r) {
    this.uniforms.filterMatrix = e.calculateSpriteMatrix(this.maskMatrix, this.maskSprite)
    this.uniforms.scale.x = this.scale.x
    this.uniforms.scale.y = this.scale.y
    var /* [auto-meaningful-name] */this$maskSprite$worldTransform = this.maskSprite.worldTransform
    var o = Math.sqrt(this$maskSprite$worldTransform.a * this$maskSprite$worldTransform.a + this$maskSprite$worldTransform.b * this$maskSprite$worldTransform.b)
    var a = Math.sqrt(this$maskSprite$worldTransform.c * this$maskSprite$worldTransform.c + this$maskSprite$worldTransform.d * this$maskSprite$worldTransform.d)
    if (0 !== o && 0 !== a) {
      this.uniforms.rotation[0] = this$maskSprite$worldTransform.a / o
      this.uniforms.rotation[1] = this$maskSprite$worldTransform.b / o
      this.uniforms.rotation[2] = this$maskSprite$worldTransform.c / a
      this.uniforms.rotation[3] = this$maskSprite$worldTransform.d / a
    }
    e.applyFilter(this, t, n, r)
  }
  Object.defineProperty(t.prototype, "map", {
    get: function () {
      return this.uniforms.mapSampler
    },
    set: function (e) {
      this.uniforms.mapSampler = e
    },
    enumerable: false,
    configurable: true
  })
  return t
}(mr)
var ca = function (e, t) {
  return (ca = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t
  } || function (e, t) {
    for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
      e[n] = t[n]
    }
  })(e, t)
}
var ua = function (e) {
  function t(t, n, r) {
    if (undefined === t) {
      t = 4
    }
    if (undefined === n) {
      n = 3
    }
    if (undefined === r) {
      r = false
    }
    var i = e.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", r ? "\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 uOffset;\nuniform vec4 filterClamp;\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n\n    // Sample top left pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample top right pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample bottom right pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample bottom left pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Average\n    color *= 0.25;\n\n    gl_FragColor = color;\n}\n" : "\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 uOffset;\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n\n    // Sample top left pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));\n\n    // Sample top right pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));\n\n    // Sample bottom right pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));\n\n    // Sample bottom left pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));\n\n    // Average\n    color *= 0.25;\n\n    gl_FragColor = color;\n}") || this
    i._kernels = []
    i._blur = 4
    i._quality = 3
    i.uniforms.uOffset = new Float32Array(2)
    i._pixelSize = new ht()
    i.pixelSize = 1
    i._clamp = r
    if (Array.isArray(t)) {
      i.kernels = t
    } else {
      i._blur = t
      i.quality = n
    }
    return i
  }
  (function (e, t) {
    function n() {
      this.constructor = e
    }
    ca(e, t)
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n())
  })(t, e)
  t.prototype.apply = function (e, t, n, r) {
    var i
    var o = this._pixelSize.x / t._frame.width
    var a = this._pixelSize.y / t._frame.height
    if (1 === this._quality || 0 === this._blur) {
      i = this._kernels[0] + .5
      this.uniforms.uOffset[0] = i * o
      this.uniforms.uOffset[1] = i * a
      e.applyFilter(this, t, n, r)
    } else {
      for (var s = e.getFilterTexture(), c = t, u = s, l = undefined, f = this._quality - 1, d = 0; d < f; d++) {
        i = this._kernels[d] + .5
        this.uniforms.uOffset[0] = i * o
        this.uniforms.uOffset[1] = i * a
        e.applyFilter(this, c, u, 1)
        l = c
        c = u
        u = l
      }
      i = this._kernels[f] + .5
      this.uniforms.uOffset[0] = i * o
      this.uniforms.uOffset[1] = i * a
      e.applyFilter(this, c, n, r)
      e.returnFilterTexture(s)
    }
  }
  t.prototype._updatePadding = function () {
    this.padding = Math.ceil(this._kernels.reduce(function (e, t) {
      return e + t + .5
    }, 0))
  }
  t.prototype._generateKernels = function () {
    var /* [auto-meaningful-name] */this$_blur = this._blur
    var /* [auto-meaningful-name] */this$_quality = this._quality
    var n = [this$_blur]
    if (this$_blur > 0) {
      for (var r = this$_blur, i = this$_blur / this$_quality, o = 1; o < this$_quality; o++) {
        r -= i
        n.push(r)
      }
    }
    this._kernels = n
    this._updatePadding()
  }
  Object.defineProperty(t.prototype, "kernels", {
    get: function () {
      return this._kernels
    },
    set: function (e) {
      if (Array.isArray(e) && e.length > 0) {
        this._kernels = e
        this._quality = e.length
        this._blur = Math.max.apply(Math, e)
      } else {
        this._kernels = [0]
        this._quality = 1
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "clamp", {
    get: function () {
      return this._clamp
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "pixelSize", {
    get: function () {
      return this._pixelSize
    },
    set: function (e) {
      if ("number" === typeof e) {
        this._pixelSize.x = e
        this._pixelSize.y = e
      } else {
        if (Array.isArray(e)) {
          this._pixelSize.x = e[0]
          this._pixelSize.y = e[1]
        } else {
          if (e instanceof ht) {
            this._pixelSize.x = e.x
            this._pixelSize.y = e.y
          } else {
            this._pixelSize.x = 1
            this._pixelSize.y = 1
          }
        }
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "quality", {
    get: function () {
      return this._quality
    },
    set: function (e) {
      this._quality = Math.max(1, Math.round(e))
      this._generateKernels()
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "blur", {
    get: function () {
      return this._blur
    },
    set: function (e) {
      this._blur = e
      this._generateKernels()
    },
    enumerable: false,
    configurable: true
  })
  return t
}(mr)
var la = function (e, t) {
  return (la = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t
  } || function (e, t) {
    for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
      e[n] = t[n]
    }
  })(e, t)
}
var fa = function (e) {
  function t(n) {
    var r = e.call(this) || this
    r.angle = 45
    r._distance = 5
    r._resolution = fe.FILTER_RESOLUTION
    var i = Object.assign(t.defaults, n)
    var /* [auto-meaningful-name] */i$kernels = i.kernels
    var /* [auto-meaningful-name] */i$blur = i.blur
    var /* [auto-meaningful-name] */i$quality = i.quality
    var /* [auto-meaningful-name] */i$pixelSize = i.pixelSize
    var /* [auto-meaningful-name] */i$resolution = i.resolution
    r._tintFilter = new mr("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float alpha;\nuniform vec3 color;\n\nuniform vec2 shift;\nuniform vec4 inputSize;\n\nvoid main(void){\n    vec4 sample = texture2D(uSampler, vTextureCoord - shift * inputSize.zw);\n\n    // Premultiply alpha\n    sample.rgb = color.rgb * sample.a;\n\n    // alpha user alpha\n    sample *= alpha;\n\n    gl_FragColor = sample;\n}")
    r._tintFilter.uniforms.color = new Float32Array(4)
    r._tintFilter.uniforms.shift = new ht()
    r._tintFilter.resolution = i$resolution
    r._blurFilter = i$kernels ? new ua(i$kernels) : new ua(i$blur, i$quality)
    r.pixelSize = i$pixelSize
    r.resolution = i$resolution
    var /* [auto-meaningful-name] */i$shadowOnly = i.shadowOnly
    var /* [auto-meaningful-name] */i$rotation = i.rotation
    var /* [auto-meaningful-name] */i$distance = i.distance
    var /* [auto-meaningful-name] */i$alpha = i.alpha
    var /* [auto-meaningful-name] */i$color = i.color
    r.shadowOnly = i$shadowOnly
    r.rotation = i$rotation
    r.distance = i$distance
    r.alpha = i$alpha
    r.color = i$color
    r._updatePadding()
    return r
  }
  (function (e, t) {
    function n() {
      this.constructor = e
    }
    la(e, t)
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n())
  })(t, e)
  t.prototype.apply = function (e, t, n, r) {
    var i = e.getFilterTexture()
    this._tintFilter.apply(e, t, i, 1)
    this._blurFilter.apply(e, i, n, r)
    if (true !== this.shadowOnly) {
      e.applyFilter(this, t, n, 0)
    }
    e.returnFilterTexture(i)
  }
  t.prototype._updatePadding = function () {
    this.padding = this.distance + 2 * this.blur
  }
  t.prototype._updateShift = function () {
    this._tintFilter.uniforms.shift.set(this.distance * Math.cos(this.angle), this.distance * Math.sin(this.angle))
  }
  Object.defineProperty(t.prototype, "resolution", {
    get: function () {
      return this._resolution
    },
    set: function (e) {
      this._resolution = e
      if (this._tintFilter) {
        this._tintFilter.resolution = e
      }
      if (this._blurFilter) {
        this._blurFilter.resolution = e
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "distance", {
    get: function () {
      return this._distance
    },
    set: function (e) {
      this._distance = e
      this._updatePadding()
      this._updateShift()
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "rotation", {
    get: function () {
      return this.angle / st
    },
    set: function (e) {
      this.angle = e * st
      this._updateShift()
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "alpha", {
    get: function () {
      return this._tintFilter.uniforms.alpha
    },
    set: function (e) {
      this._tintFilter.uniforms.alpha = e
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "color", {
    get: function () {
      return ke(this._tintFilter.uniforms.color)
    },
    set: function (e) {
      xe(e, this._tintFilter.uniforms.color)
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "kernels", {
    get: function () {
      return this._blurFilter.kernels
    },
    set: function (e) {
      this._blurFilter.kernels = e
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "blur", {
    get: function () {
      return this._blurFilter.blur
    },
    set: function (e) {
      this._blurFilter.blur = e
      this._updatePadding()
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "quality", {
    get: function () {
      return this._blurFilter.quality
    },
    set: function (e) {
      this._blurFilter.quality = e
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "pixelSize", {
    get: function () {
      return this._blurFilter.pixelSize
    },
    set: function (e) {
      this._blurFilter.pixelSize = e
    },
    enumerable: false,
    configurable: true
  })
  t.defaults = {
    rotation: 45,
    distance: 5,
    color: 0,
    alpha: .5,
    shadowOnly: false,
    kernels: null,
    blur: 2,
    quality: 3,
    pixelSize: 1,
    resolution: fe.FILTER_RESOLUTION
  }
  return t
}(mr)
var da = function (e, t) {
  return (da = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t
  } || function (e, t) {
    for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
      e[n] = t[n]
    }
  })(e, t)
}
var ha = function (e) {
  function t(t) {
    if (undefined === t) {
      t = 10
    }
    var n = e.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform vec2 size;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 pixelate(vec2 coord, vec2 size)\n{\n\treturn floor( coord / size ) * size;\n}\n\nvoid main(void)\n{\n    vec2 coord = mapCoord(vTextureCoord);\n\n    coord = pixelate(coord, size);\n\n    coord = unmapCoord(coord);\n\n    gl_FragColor = texture2D(uSampler, coord);\n}\n") || this
    n.size = t
    return n
  }
  (function (e, t) {
    function n() {
      this.constructor = e
    }
    da(e, t)
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n())
  })(t, e)
  Object.defineProperty(t.prototype, "size", {
    get: function () {
      return this.uniforms.size
    },
    set: function (e) {
      if ("number" === typeof e) {
        e = [e, e]
      }
      this.uniforms.size = e
    },
    enumerable: false,
    configurable: true
  })
  return t
}(mr)
var pa = function (e, t) {
  return (pa = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t
  } || function (e, t) {
    for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
      e[n] = t[n]
    }
  })(e, t)
}
var _a = function (e) {
  function t(n) {
    var r = e.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float radius;\nuniform float angle;\nuniform vec2 offset;\nuniform vec4 filterArea;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 twist(vec2 coord)\n{\n    coord -= offset;\n\n    float dist = length(coord);\n\n    if (dist < radius)\n    {\n        float ratioDist = (radius - dist) / radius;\n        float angleMod = ratioDist * ratioDist * angle;\n        float s = sin(angleMod);\n        float c = cos(angleMod);\n        coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);\n    }\n\n    coord += offset;\n\n    return coord;\n}\n\nvoid main(void)\n{\n\n    vec2 coord = mapCoord(vTextureCoord);\n\n    coord = twist(coord);\n\n    coord = unmapCoord(coord);\n\n    gl_FragColor = texture2D(uSampler, coord );\n\n}\n") || this
    Object.assign(r, t.defaults, n)
    return r
  }
  (function (e, t) {
    function n() {
      this.constructor = e
    }
    pa(e, t)
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n())
  })(t, e)
  Object.defineProperty(t.prototype, "offset", {
    get: function () {
      return this.uniforms.offset
    },
    set: function (e) {
      this.uniforms.offset = e
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "radius", {
    get: function () {
      return this.uniforms.radius
    },
    set: function (e) {
      this.uniforms.radius = e
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "angle", {
    get: function () {
      return this.uniforms.angle
    },
    set: function (e) {
      this.uniforms.angle = e
    },
    enumerable: false,
    configurable: true
  })
  t.defaults = {
    radius: 200,
    angle: 4,
    padding: 20,
    offset: new ht()
  }
  return t
}(mr)
var Aa = function (e, t) {
  return (Aa = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t
  } || function (e, t) {
    for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
      e[n] = t[n]
    }
  })(e, t)
}
var ga = function (e) {
  function t(t) {
    if (undefined === t) {
      t = 8
    }
    var n = e.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\n\nuniform vec4 filterArea;\nuniform float pixelSize;\nuniform sampler2D uSampler;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 pixelate(vec2 coord, vec2 size)\n{\n    return floor( coord / size ) * size;\n}\n\nvec2 getMod(vec2 coord, vec2 size)\n{\n    return mod( coord , size) / size;\n}\n\nfloat character(float n, vec2 p)\n{\n    p = floor(p*vec2(4.0, -4.0) + 2.5);\n\n    if (clamp(p.x, 0.0, 4.0) == p.x)\n    {\n        if (clamp(p.y, 0.0, 4.0) == p.y)\n        {\n            if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;\n        }\n    }\n    return 0.0;\n}\n\nvoid main()\n{\n    vec2 coord = mapCoord(vTextureCoord);\n\n    // get the rounded color..\n    vec2 pixCoord = pixelate(coord, vec2(pixelSize));\n    pixCoord = unmapCoord(pixCoord);\n\n    vec4 color = texture2D(uSampler, pixCoord);\n\n    // determine the character to use\n    float gray = (color.r + color.g + color.b) / 3.0;\n\n    float n =  65536.0;             // .\n    if (gray > 0.2) n = 65600.0;    // :\n    if (gray > 0.3) n = 332772.0;   // *\n    if (gray > 0.4) n = 15255086.0; // o\n    if (gray > 0.5) n = 23385164.0; // &\n    if (gray > 0.6) n = 15252014.0; // 8\n    if (gray > 0.7) n = 13199452.0; // @\n    if (gray > 0.8) n = 11512810.0; // #\n\n    // get the mod..\n    vec2 modd = getMod(coord, vec2(pixelSize));\n\n    gl_FragColor = color * character( n, vec2(-1.0) + modd * 2.0);\n\n}\n") || this
    n.size = t
    return n
  }
  (function (e, t) {
    function n() {
      this.constructor = e
    }
    Aa(e, t)
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n())
  })(t, e)
  Object.defineProperty(t.prototype, "size", {
    get: function () {
      return this.uniforms.pixelSize
    },
    set: function (e) {
      this.uniforms.pixelSize = e
    },
    enumerable: false,
    configurable: true
  })
  return t
}(mr)
require("../985")
var va = function () {
  var e = function (t, n) {
    return (e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t
    } || function (e, t) {
      for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
        e[n] = t[n]
      }
    })(t, n)
  }
  return function (t, n) {
    function r() {
      this.constructor = t
    }
    e(t, n)
    t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r())
  }
}()
var ma = function (e) {
  function t(t, n) {
    return e.call(this, t ? Math.floor(t) : t, n ? Math.floor(n) : n) || this
  }
  va(t, e)
  t.prototype.clone = function () {
    return new t(this.x, this.y)
  }
  t.prototype.set = function (t, n) {
    return e.prototype.set.call(this, t ? Math.floor(t) : t, n ? Math.floor(n) : n)
  }
  return t
}(ht)
Zi.registerPlugin("extract", Uo)
Zi.registerPlugin("graphics", Po)
Zi.registerPlugin("interaction", Gt)
Zi.registerPlugin("sprite", jo)
Vr.registerPlugin("extract", ai)
Vr.registerPlugin("interaction", Gt)
Vr.registerPlugin("tilingSprite", Qi)
Vr.registerPlugin("batch", $r)
Bi.registerPlugin(Ri)
ri.registerPlugin(St)
ri.registerPlugin(Di)
var ya = new _t()
Nn.prototype.push = function (e, t) {
  for (var /* [auto-meaningful-name] */this$renderer = this.renderer, /* [auto-meaningful-name] */this$defaultFilterStack = this.defaultFilterStack, i = this.statePool.pop() || new Fn(), /* [auto-meaningful-name] */this$renderer$renderTexture = this.renderer.renderTexture, /* [auto-meaningful-name] */t0$resolution = t[0].resolution, /* [auto-meaningful-name] */t0$padding = t[0].padding, /* [auto-meaningful-name] */t0$autoFit = t[0].autoFit, /* [auto-meaningful-name] */t0$legacy = t[0].legacy, l = 1; l < t.length; l++) {
    var f = t[l]
    t0$resolution = Math.min(t0$resolution, f.resolution)
    t0$padding = Math.max(t0$padding, f.padding)
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
    var d = new ct(this$renderer$renderTexture.sourceFrame.x - this$renderer$renderTexture.sourceFrame.width / 2, this$renderer$renderTexture.sourceFrame.y - this$renderer$renderTexture.sourceFrame.height / 2, 2 * this$renderer$renderTexture.sourceFrame.width, 2 * this$renderer$renderTexture.sourceFrame.height)
    if (this$renderer.projection.transform) {
      this.transformAABB(ya.copyFrom(this$renderer.projection.transform).invert(), d)
    }
    i.sourceFrame.fit(d)
  }
  this.roundFrame(i.sourceFrame, this$renderer$renderTexture.current ? this$renderer$renderTexture.current.resolution : this$renderer.resolution, this$renderer$renderTexture.sourceFrame, this$renderer$renderTexture.destinationFrame, this$renderer.projection.transform)
  i.renderTexture = this.getOptimalFilterTexture(i.sourceFrame.width, i.sourceFrame.height, t0$resolution)
  i.filters = t
  i.destinationFrame.width = i.renderTexture.width
  i.destinationFrame.height = i.renderTexture.height
  var h = new ct(0, 0, i.sourceFrame.width, i.sourceFrame.height)
  i.renderTexture.filterFrame = i.sourceFrame
  i.bindingSourceFrame.copyFrom(this$renderer$renderTexture.sourceFrame)
  i.bindingDestinationFrame.copyFrom(this$renderer$renderTexture.destinationFrame)
  i.transform = this$renderer.projection.transform
  this$renderer.projection.transform = null
  this$renderer$renderTexture.bind(i.renderTexture, i.sourceFrame, h)
  this$renderer.framebuffer.clear(0, 0, 0, 0)
}
export default ra
