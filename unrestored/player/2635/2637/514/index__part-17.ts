/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：514__part-17
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_59_index from "../../../../shared/1571/2636/59/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_58_index from "../../../../shared/1571/2636/58/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_39 from "../../../../shared/1571/2636/39"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_27 from "../../../../shared/1571/2636/27"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_679 from "../../../../shared/1571/2636/679"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_681 from "../../../../shared/1571/2636/681"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_59_693 from "../../../../shared/1571/2636/59/693"
var /* [auto-meaningful-name] */window$WebSocket = window.WebSocket
var /* [auto-meaningful-name] */window$XMLHttpRequest = window.XMLHttpRequest
var /* [auto-meaningful-name] */window$XMLHttpRequest$prototype$open = window$XMLHttpRequest.prototype.open
var /* [auto-meaningful-name] */window$fetch = window.fetch
var oe = function (t) {
  $$_$$_$$_$$_shared_1571_2636_58_index.a(n, t)
  var e = $$_$$_$$_$$_shared_1571_2636_59_index.a(n)
  function n(t, r) {
    var i
    $$_$$_$$_$$_shared_1571_2636_27.a(this, n)
    return new URL(t).hostname.includes("codemao") ? (i = e.call(this, "wss://websocket.com", r), $$_$$_$$_$$_shared_1571_2636_59_693.a(i)) : e.call(this, t, r)
  }
  return n
}(window$WebSocket)
var ae = function (t) {
  $$_$$_$$_$$_shared_1571_2636_58_index.a(n, t)
  var e = $$_$$_$$_$$_shared_1571_2636_59_index.a(n)
  function n() {
    $$_$$_$$_$$_shared_1571_2636_27.a(this, n)
    return e.apply(this, arguments)
  }
  $$_$$_$$_$$_shared_1571_2636_39.a(n, [
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
