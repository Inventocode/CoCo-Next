/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2637__part-2
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_288 from "../../../../unrestored/shared/1571/2636/288"
import /* [auto-meaningful-name] */$_1042 from "../../../../unrestored/player/2635/2637/1042"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_13_index from "../../../../unrestored/shared/1571/2636/13/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_738_index from "../../../../unrestored/shared/1571/2636/738/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_177 from "../../../../unrestored/shared/1571/2636/177"
import * as /* [auto-meaningful-name] */$_514_index from "../../../../unrestored/player/2635/2637/514/index"
import /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_8 from "../../../../unrestored/shared/1571/2636/8"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_10_index from "../../../../unrestored/shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_7 from "../../../../unrestored/shared/1571/2636/7"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_6 from "../../../../unrestored/shared/1571/2636/6"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_68 from "../../../../unrestored/shared/1571/2636/68"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_15 from "../../../../unrestored/shared/1571/2636/15"
import /* [auto-meaningful-name] */React from "react"
import { useState, useRef, useEffect } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_531 from "../../../../unrestored/player/2635/2637/531"
import /* [auto-meaningful-name] */$_5311 from "../../../../unrestored/player/2635/2637/531"
function D(t) {
  return "translate(-50%, -50%) " + "scale(".concat(t, ")")
}
var L = React.memo(function () {
  var t = useState()
  var e = $$_$$_$$_shared_1571_2636_10_index.a(t, 2)
  var n = e[0]
  var o = e[1]
  var a = useState(1)
  var s = $$_$$_$$_shared_1571_2636_10_index.a(a, 2)
  var l = s[0]
  var m = s[1]
  var y = useState(false)
  var w = $$_$$_$$_shared_1571_2636_10_index.a(y, 2)
  var E = w[0]
  var O = w[1]
  var T = useState(false)
  var S = $$_$$_$$_shared_1571_2636_10_index.a(T, 2)
  var j = S[0]
  var M = S[1]
  var k = useState(true)
  var R = $$_$$_$$_shared_1571_2636_10_index.a(k, 2)
  var N = R[0]
  var L = R[1]
  var B = useState("")
  var P = $$_$$_$$_shared_1571_2636_10_index.a(B, 2)
  var U = P[0]
  var F = P[1]
  var W = useRef()
  var H = useRef()
  var V = useRef()
  function G() {
    return (G = $$_$$_$$_shared_1571_2636_7.a(RegeneratorRuntime.mark(function t() {
      var e
      var n
      var r
      var /* [auto-meaningful-name] */t$sent$data$bcmc_url
      var /* [auto-meaningful-name] */t$sent
      var a
      return RegeneratorRuntime.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {
            case 0:
              if (n = null === (e = window.location.pathname.match(/\/player\/([^/]*)/)) || undefined === e ? undefined : e[1], (r = $$_$$_$$_shared_1571_2636_15.N(window.location.href)).workId && (n = r.workId), !n) {
                t.next = 22
                break
              }
              t.next = 6
              return $$_$$_$$_shared_1571_2636_177.g(n, 0)
            case 6:
              t$sent$data$bcmc_url = t.sent.data.bcmc_url
              $$_$$_$$_shared_1571_2636_288.a(t$sent$data$bcmc_url)
              t.next = 10
              return fetch(t$sent$data$bcmc_url)
            case 10:
              t$sent = t.sent
              t.next = 13
              return t$sent.json()
            case 13:
              a = t.sent
              t.next = 16
              return $$_$$_$$_shared_1571_2636_288.b()
            case 16:
              if (t.sent.includes(Number(n))) {
                t.next = 21
                break
              }
              t.next = 20
              return $$_$$_$$_shared_1571_2636_288.c(a)
            case 20:
              a = t.sent
            case 21:
              V.current = a
            case 22:
            case "end":
              return t.stop()
          }
        }
      }, t)
    }))).apply(this, arguments)
  }
  var z = function (t) {
    var /* [auto-meaningful-name] */t$data = t.data
    if (t$data.type === $$_$$_$$_shared_1571_2636_68.b.DEVICE_VIBRATE) {
      var n = Date.now() + t$data.data.duration
      if (H.current && H.current >= n) {
        return
      }
      O(true)
      window.clearTimeout(W.current)
      W.current = window.setTimeout(function () {
        return O(false)
      }, t$data.data.duration)
      return void (H.current = n)
    }
    if (t$data.type === $$_$$_$$_shared_1571_2636_68.b.DEVICE_NOT_VIBRATE) {
      window.clearTimeout(W.current)
      H.current = 0
      O(false)
    } else {
      if (t$data.type === $$_$$_$$_shared_1571_2636_68.b.EMULATOR && "string" === typeof t$data.data.visiblePanel) {
        M(!!t$data.data.visiblePanel)
      }
    }
  }
  useEffect(function () {
    !function () {
      G.apply(this, arguments)
    }()
    document.body.click()
    window.addEventListener("message", function (t) {
      if ("PLAYER_BLOCK_CODE" === t.data.type) {
        F(t.data.payload)
        L(false)
        var e = document.getElementById("editor-iframe")
        if (e) {
          document.body.removeChild(e)
        }
      }
    }, false)
  }, [])
  useEffect(function () {
    if (!N && V.current) {
      if (V.current.blockCode) {
        V.current.blockCode = U
      }
      o($$_$$_$$_shared_1571_2636_6.a($$_$$_$$_shared_1571_2636_6.a({}, V.current), {}, {
        shouldOpenEmulator: true
      }))
    }
  }, [U, N])
  useEffect(function () {
    window.addEventListener("message", z)
    return function () {
      window.removeEventListener("message", z)
    }
  }, [])
  useEffect(function () {
    function t() {
      var /* [auto-meaningful-name] */window$innerWidth = window.innerWidth
      m(window$innerWidth > 1366 ? 1 : window$innerWidth > 992 ? .9 : window$innerWidth > 700 ? .83 : .57)
    }
    t()
    window.onresize = t
  }, [])
  return React.createElement("div", {
    className: $_5311.community
  }, React.createElement("div", {
    id: "webPlayer",
    className: $$_$$_$$_shared_1571_2636_8($_5311.main),
    style: {
      transform: D(l),
      left: j ? "35%" : "50%"
    }
  }, React.createElement("div", {
    className: $$_$$_$$_shared_1571_2636_8(E && $_5311.vibrate, $_5311.playerWrapper)
  }, n && React.createElement($_514_index.a, n)), React.createElement("div", {
    className: $$_$$_$$_shared_1571_2636_8(E && $_5311.vibrate, $_5311.deviceFrame)
  }), React.createElement("div", {
    className: $_5311.emulatorWrapper
  }, React.createElement($$_$$_$$_shared_1571_2636_738_index.a, {
    messageWindow: window
  }))), React.createElement("div", {
    className: $_5311.appUrlBtn,
    onClick: function () {
      window.open(window.location.origin.replace(/\d+/g, ""), "_blank")
    }
  }, React.createElement("img", {
    src: $_1042,
    className: $_5311.appUrlBtnImg,
    alt: ""
  }), React.createElement("span", null, "去CoCo制作"), React.createElement($$_$$_$$_shared_1571_2636_13_index.j, {
    type: "icon-fold-left",
    className: $_5311.appUrlBtnIcon
  })))
})
export { L }
