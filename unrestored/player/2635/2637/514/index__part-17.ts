/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：514__part-17
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_59 from /* 59 */"../../../../shared/1571/2636/59/index"
import * as /* [auto-meaningful-name] */Module_58 from /* 58 */"../../../../shared/1571/2636/58/index"
import * as /* [auto-meaningful-name] */Module_39 from /* 39 */"../../../../shared/1571/2636/39"
import * as /* [auto-meaningful-name] */Module_27 from /* 27 */"../../../../shared/1571/2636/27"
import * as /* [auto-meaningful-name] */Module_679 from /* 679 */"../../../../shared/1571/2636/679"
import * as /* [auto-meaningful-name] */Module_681 from /* 681 */"../../../../shared/1571/2636/681"
import * as /* [auto-meaningful-name] */Module_693 from /* 693 */"../../../../shared/1571/2636/59/693"
var /* [auto-meaningful-name] */window$WebSocket = window.WebSocket
var /* [auto-meaningful-name] */window$XMLHttpRequest = window.XMLHttpRequest
var /* [auto-meaningful-name] */window$XMLHttpRequest$prototype$open = window$XMLHttpRequest.prototype.open
var /* [auto-meaningful-name] */window$fetch = window.fetch
var oe = function (t) {
  Module_58.a(n, t)
  var e = Module_59.a(n)
  function n(t, r) {
    var i
    Module_27.a(this, n)
    return new URL(t).hostname.includes("codemao") ? (i = e.call(this, "wss://websocket.com", r), Module_693.a(i)) : e.call(this, t, r)
  }
  return n
}(window$WebSocket)
var ae = function (t) {
  Module_58.a(n, t)
  var e = Module_59.a(n)
  function n() {
    Module_27.a(this, n)
    return e.apply(this, arguments)
  }
  Module_39.a(n, [
    {
      key: "open",
      value: function (t, e, n, r, i) {
        return window$XMLHttpRequest$prototype$open.apply(this, [t, e, null === n || undefined === n || n, r, i])
      }
    }
  ])
  return n
}(window$XMLHttpRequest)
var se = function (t, e) {
  return window$fetch.call(window, t, e)
}
function ue() {
  try {
    Object.defineProperty(window, "WebSocket", {
      value: oe,
      writable: false,
      configurable: false
    })
    Object.defineProperty(window, "XMLHttpRequest", {
      value: ae,
      writable: false,
      configurable: false
    })
    Object.defineProperty(window, "fetch", {
      value: se,
      writable: false,
      configurable: false
    })
    Object.freeze(oe.prototype)
    Object.freeze(oe)
    Object.freeze(ae.prototype)
    Object.freeze(ae)
    Object.freeze(se.prototype)
    Object.freeze(se)
  } catch (t) {
    console.error("defineProperty error:", t)
  }
}
export { ue }
