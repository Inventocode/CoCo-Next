/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：32__part-1
 */

"use strict"

import * as /* [auto-meaningful-name] */$_1500_index from "./1500/index"
import * as /* [auto-meaningful-name] */$$_$$_80_1573_774 from "../../80/1573/774"
import /* [auto-meaningful-name] */$$_$$_80_1573_7741 from "../../80/1573/774"
if (!self.Promise) {
  self.Promise = $_1500_index.a
}
if (!Object.assign) {
  Object.assign = $$_$$_80_1573_7741
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
var R
var F
var P
var N
var M
var L
var j
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
})(R || (R = {}));
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
})(F || (F = {}));
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
})(L || (L = {}));
(function (e) {
  e[e.OFF = 0] = "OFF"
  e[e.POW2 = 1] = "POW2"
  e[e.ON = 2] = "ON"
  e[e.ON_MANUAL = 3] = "ON_MANUAL"
})(j || (j = {}));
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
var fe = {
  MIPMAP_TEXTURES: j.POW2,
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
  WRAP_MODE: L.CLAMP,
  SCALE_MODE: M.LINEAR,
  PRECISION_VERTEX: G.HIGH,
  PRECISION_FRAGMENT: W.apple.device ? G.HIGH : G.MEDIUM,
  CAN_UPLOAD_SAME_BUFFER: !W.apple.device,
  CREATE_IMAGE_BITMAP: false,
  ROUND_PIXELS: false
}
export { W }
export { fe }
