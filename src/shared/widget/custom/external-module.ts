/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：347
 */

export { callMethod } from "../../../../unrestored/shared/1571/2636/20/index"
export { getProperty } from "../../../../unrestored/shared/1571/2636/20/index"
export { onWidgetEvent } from "../../../../unrestored/shared/1571/2636/20/index"
export { setProperty } from "../../../../unrestored/shared/1571/2636/20/index"

var HTTP = {}
Object.defineProperty(HTTP, "setHeader", {
  get: function () {
    return v
  }
})
Object.defineProperty(HTTP, "setDataSerializer", {
  get: function () {
    return b
  }
})
Object.defineProperty(HTTP, "setRequestTimeout", {
  get: function () {
    return y
  }
})
Object.defineProperty(HTTP, "getCookieString", {
  get: function () {
    return E
  }
})
Object.defineProperty(HTTP, "setCookie", {
  get: function () {
    return O
  }
})
Object.defineProperty(HTTP, "clearCookies", {
  get: function () {
    return w
  }
})
Object.defineProperty(HTTP, "removeCookies", {
  get: function () {
    return C
  }
})
Object.defineProperty(HTTP, "post", {
  get: function () {
    return S
  }
})
Object.defineProperty(HTTP, "get", {
  get: function () {
    return A
  }
})
Object.defineProperty(HTTP, "put", {
  get: function () {
    return I
  }
})
Object.defineProperty(HTTP, "patch", {
  get: function () {
    return j
  }
})
Object.defineProperty(HTTP, "head", {
  get: function () {
    return N
  }
})
Object.defineProperty(HTTP, "options", {
  get: function () {
    return R
  }
})
Object.defineProperty(HTTP, "downloadFile", {
  get: function () {
    return k
  }
})
Object.defineProperty(HTTP, "uploadFile", {
  get: function () {
    return x
  }
})
Object.defineProperty(HTTP, "abort", {
  get: function () {
    return D
  }
})
var CordovaWebsocket = {}
Object.defineProperty(CordovaWebsocket, "wsConnect", {
  get: function () {
    return G
  }
})
Object.defineProperty(CordovaWebsocket, "wsSend", {
  get: function () {
    return W
  }
})
Object.defineProperty(CordovaWebsocket, "wsClose", {
  get: function () {
    return U
  }
})
var Stepper = {}
Object.defineProperty(Stepper, "isStepCountingAvailable", {
  get: function () {
    return V
  }
})
Object.defineProperty(Stepper, "requestPermission", {
  get: function () {
    return z
  }
})
Object.defineProperty(Stepper, "startStepperUpdates", {
  get: function () {
    return Y
  }
})
Object.defineProperty(Stepper, "stopStepperUpdates", {
  get: function () {
    return K
  }
})
import LoDash from "lodash"
import QRCode from "qrcode"
import { Vika } from "@vikadata/vika"
import Color from "color"
import HTML2Canvas from "html2canvas"
import * as AntdMobile from "antd-mobile"
import * as Pedometer from "../../../../unrestored/shared/1571/2636/34/347/393"
var _ = window.cordova && window.cordova.plugin && window.cordova.plugin.http || {}
function v(e, t, n) {
  _.setHeader(e, t, n)
}
function b(e) {
  _.setDataSerializer(e)
}
function y(e) {
  _.setRequestTimeout(e)
}
function E(e) {
  return _.getCookieString(e)
}
function O(e, t, n) {
  _.setCookie(e, t, n || {})
}
function w() {
  _.clearCookies()
}
function C(e, t) {
  _.removeCookies(e, t)
}
function T() {}
function S(e, t, n, r, o) {
  return _.post(e, t, n, r || T, o || T)
}
function A(e, t, n, r, o) {
  return _.get(e, t || {}, n || {}, r || T, o || T)
}
function I(e, t, n, r, o) {
  return _.put(e, t, n, r || T, o || T)
}
function j(e, t, n, r, o) {
  return _.patch(e, t, n, r || T, o || T)
}
function N(e, t, n, r, o) {
  return _.head(e, t, n, r || T, o || T)
}
function R(e, t, n, r, o) {
  return _.options(e, t, n, r || T, o || T)
}
function k(e, t, n, r, o, i) {
  return _.downloadFile(e, t, n, r, o || T, i || T)
}
function x(e, t, n, r, o, i, a) {
  return _.uploadFile(e, t, n, r, o, i || T, a || T)
}
function D(e) {
  return _.abort(e)
}
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_28_index from "../../../../unrestored/shared/1571/2636/28/index"
if (!$$_$$_$$_$$_unrestored_shared_1571_2636_28_index.d()) {
  var L = {}
  var P = function (e) {
    var t = L[e]
    t.onmessage = undefined
    t.onclose = undefined
    L[e] = undefined
  }
  var B = {
    wsConnect: function (e, t, n, r) {
      var o
      var i = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
      var a = new WebSocket(e.url)
      if (e.timeout && e.timeout > 0) {
        o = setTimeout(function () {
          a.close()
        }, e.timeout)
      }
      a.onopen = function () {
        if (o) {
          clearTimeout(o)
        }
        L[i] = a;
        (function (e, t, n) {
          var r = L[e]
          r.onmessage = function (n) {
            t({
              webSocketId: e,
              message: n.data,
              callbackMethod: "onMessage"
            })
          }
          r.onclose = function (t) {
            n({
              webSocketId: e,
              code: t.code,
              reason: t.reason,
              callbackMethod: "onClose"
            })
            P(e)
          }
        })(i, t, t)
        n({
          webSocketId: i,
          code: 0
        })
      }
      a.onerror = function () {
        r({
          webSocketId: i,
          code: 1006,
          reason: "Error connecting to " + e.url,
          callbackMethod: "onFail"
        })
      }
    },
    wsSend: function (e, t) {
      var n = L[e]
      if (n) {
        n.send(t)
      }
    },
    wsClose: function (e, t, n) {
      var r = L[e]
      if (r) {
        r.close(t, n)
        P(e)
      }
    }
  }
  window.CordovaWebsocketPlugin = B
}
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_15 from "../../tools"
function G(e, t, n, r) {
  var /* [auto-meaningful-name] */e$url
  if (!((null === (e$url = e.url) || undefined === e$url ? undefined : e$url.includes("codemao.cn")) || $$_$$_$$_$$_unrestored_shared_1571_2636_15.O(e.url || ""))) {
    window.CordovaWebsocketPlugin.wsConnect(e, function (e) {
      t(e)
    }, function (e) {
      n(e)
    }, function (e) {
      r(e)
    })
  }
}
function W(e, t) {
  window.CordovaWebsocketPlugin.wsSend(e, t)
}
function U(e, t, n) {
  t = t || 1e3
  n = n || "bye"
  window.CordovaWebsocketPlugin.wsClose(e, t, n)
}
import * as Brightness from "../../../../unrestored/shared/1571/2636/20/428/346"
function V() {
  return new Promise(function (e) {
    window.stepper.isStepCountingAvailable().then(function (t) {
      if (t) {
        console.log("isStepCountingAvailable Available !")
        e(true)
      } else {
        console.log("isStepCountingAvailable Not available :-S")
        e(false)
      }
    }).catch(function (t) {
      console.error("isStepCountingAvailable error", t)
      e(false)
    })
  })
}
function z() {
  return new Promise(function (e) {
    window.stepper.requestPermission().then(function (t) {
      if (t) {
        console.log("requestPermission Authorized !")
        e(true)
      } else {
        console.log("requestPermission Denied :-S")
        e(false)
      }
    }).catch(function (t) {
      console.error("requestPermission error", t)
      e(false)
    })
  })
}
function Y(e, t, n) {
  window.stepper.startStepperUpdates(e, t, n, {})
}
function K() {
  window.stepper.stopStepperUpdates()
}
import Axios from "axios"
Axios.interceptors.request.use(function (e) {
  var t = e.url || ""
  if (e.baseURL) {
    t = e.baseURL + t.slice(1)
  }
  return $$_$$_$$_$$_unrestored_shared_1571_2636_15.Y(t) ? e : Promise.reject(new Error("auth failed"))
}, function (e) {
  return Promise.reject(e)
})
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_20_428_112 from "../../../../unrestored/shared/1571/2636/20/428/112"
var Utils = {
  isNative: $$_$$_$$_$$_unrestored_shared_1571_2636_28_index.d,
  filterXss: $$_$$_$$_$$_unrestored_shared_1571_2636_28_index.i,
  getWidgetImageUrl: $$_$$_$$_$$_unrestored_shared_1571_2636_20_428_112.b,
  openLoginPage: $$_$$_$$_$$_unrestored_shared_1571_2636_28_index.q
}
export var modules: Map<string, string> = new Map()
const MODULES_INFO: Record<string, {
  url: string
  ref: string
}> = {
  "crypto-js": {
    url: "https://static.bcmcdn.com/appcraft/modules/crypto-js/4.1.1/crypto-js.js",
    ref: "CryptoJS"
  }
}

/**
 * 自定义控件用于获取模块的 require 方法
 *
 * @param id 模块的 id
 * @returns 模块
 */
export function require(id: string): unknown {
  if (MODULES_INFO[id]) {
    const { ref } = MODULES_INFO[id]
    return window[ref as keyof typeof window]
  }
  switch (id) {
    case "http":
      return HTTP
    case "lodash":
      return LoDash
    case "qrcode":
      return QRCode
    case "pedometer":
      return Pedometer
    case "websocket":
      return CordovaWebsocket
    case "brightness":
      return Brightness
    case "stepper":
      return Stepper
    case "axios":
      return Axios
    case "utils":
      return Utils
    case "vika":
      return Vika
    case "antd-mobile":
      return AntdMobile
    case "color":
      return Color
    case "html2canvas":
      return HTML2Canvas
    default:
      return {}
  }
}

/**
 * 用于收集自定义控件依赖的 require 方法，该方法不会返回模块
 *
 * @param id 依赖模块的 id
 */
export function requireExternalModule(id: string): void {
  if (MODULES_INFO[id]) {
    modules.set(id, MODULES_INFO[id].url)
  }
}

/**
 * 获取所有使用到的模块的链接
 *
 * @returns 所有使用到的模块的链接
 */
export function getExternalModules(): string[] {
  return Array.from(modules.values())
}

/**
 * 清理掉已有的依赖模块信息
 */
export function clearExternalModules(): void {
  modules.clear()
}
