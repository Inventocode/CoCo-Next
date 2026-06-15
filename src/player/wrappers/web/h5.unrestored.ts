/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2637__part-2
 */

"use strict"

import * as /* [auto-meaningful-name] */Shared_player_audit from /* 288 */"../../../shared/player/audit"
import /* [auto-meaningful-name] */Module_1042 from /* 1042 */"../../../../unrestored/player/2635/2637/1042"
import * as /* [auto-meaningful-name] */Shared_ui_components_index from /* 13 */"../../../shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_738 from /* 738 */"../../../../unrestored/shared/1571/2636/738/index"
import * as /* [auto-meaningful-name] */Module_177 from /* 177 */"../../../../unrestored/shared/1571/2636/177"
import * as /* [auto-meaningful-name] */Module_514 from /* 514 */"../../../../unrestored/player/2635/2637/514/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../../../../unrestored/shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../../../../unrestored/shared/1571/2636/7"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"../../../../unrestored/shared/1571/2636/6"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_68 from /* 68 */"../../../../unrestored/shared/1571/2636/68"
import * as /* [auto-meaningful-name] */Shared_tools_index from /* 15 */"../../../shared/tools/index"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { useState, useRef, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_531 from /* 531 */"../../../../unrestored/player/2635/2637/531"
import /* [auto-meaningful-name] */Module_5311 from /* 531 */"../../../../unrestored/player/2635/2637/531"
function D(t) {
  return "translate(-50%, -50%) " + "scale(".concat(t, ")")
}
var L = React.memo(function () {
  var t = useState()
  var e = Module_10.a(t, 2)
  var n = e[0]
  var o = e[1]
  var a = useState(1)
  var s = Module_10.a(a, 2)
  var l = s[0]
  var m = s[1]
  var y = useState(false)
  var w = Module_10.a(y, 2)
  var E = w[0]
  var O = w[1]
  var T = useState(false)
  var S = Module_10.a(T, 2)
  var j = S[0]
  var M = S[1]
  var k = useState(true)
  var R = Module_10.a(k, 2)
  var N = R[0]
  var L = R[1]
  var B = useState("")
  var P = Module_10.a(B, 2)
  var U = P[0]
  var F = P[1]
  var W = useRef()
  var H = useRef()
  var V = useRef()
  function G() {
    return (G = Module_7.a(RegeneratorRuntime.mark(function t() {
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
              if (n = null === (e = window.location.pathname.match(/\/player\/([^/]*)/)) || undefined === e ? undefined : e[1], (r = Shared_tools_index.N(window.location.href)).workId && (n = r.workId), !n) {
                t.next = 22
                break
              }
              t.next = 6
              return Module_177.g(n, 0)
            case 6:
              t$sent$data$bcmc_url = t.sent.data.bcmc_url
              Shared_player_audit.a(t$sent$data$bcmc_url)
              t.next = 10
              return fetch(t$sent$data$bcmc_url)
            case 10:
              t$sent = t.sent
              t.next = 13
              return t$sent.json()
            case 13:
              a = t.sent
              t.next = 16
              return Shared_player_audit.b()
            case 16:
              if (t.sent.includes(Number(n))) {
                t.next = 21
                break
              }
              t.next = 20
              return Shared_player_audit.c(a)
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
    if (t$data.type === Module_68.b.DEVICE_VIBRATE) {
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
    if (t$data.type === Module_68.b.DEVICE_NOT_VIBRATE) {
      window.clearTimeout(W.current)
      H.current = 0
      O(false)
    } else {
      if (t$data.type === Module_68.b.EMULATOR && "string" === typeof t$data.data.visiblePanel) {
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
      o(Module_6.a(Module_6.a({}, V.current), {}, {
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
    className: Module_5311.community
  }, React.createElement("div", {
    id: "webPlayer",
    className: Classnames(Module_5311.main),
    style: {
      transform: D(l),
      left: j ? "35%" : "50%"
    }
  }, React.createElement("div", {
    className: Classnames(E && Module_5311.vibrate, Module_5311.playerWrapper)
  }, n && React.createElement(Module_514.a, n)), React.createElement("div", {
    className: Classnames(E && Module_5311.vibrate, Module_5311.deviceFrame)
  }), React.createElement("div", {
    className: Module_5311.emulatorWrapper
  }, React.createElement(Module_738.a, {
    messageWindow: window
  }))), React.createElement("div", {
    className: Module_5311.appUrlBtn,
    onClick: function () {
      window.open(window.location.origin.replace(/\d+/g, ""), "_blank")
    }
  }, React.createElement("img", {
    src: Module_1042,
    className: Module_5311.appUrlBtnImg,
    alt: ""
  }), React.createElement("span", null, "去CoCo制作"), React.createElement(Shared_ui_components_index.j, {
    type: "icon-fold-left",
    className: Module_5311.appUrlBtnIcon
  })))
})
export { L }
