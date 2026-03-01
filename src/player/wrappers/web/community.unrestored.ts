/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2637__part-1
 */

"use strict"

import { y, w, E, O, T } from "../../../../unrestored/player/2635/2637/index__part-0"
import * as /* [auto-meaningful-name] */Module_738 from /* 738 */"../../../../unrestored/shared/1571/2636/738/index"
import * as /* [auto-meaningful-name] */Module_177 from /* 177 */"../../../../unrestored/shared/1571/2636/177"
import * as /* [auto-meaningful-name] */Module_514 from /* 514 */"../../../../unrestored/player/2635/2637/514/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../../../../unrestored/shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../../../../unrestored/shared/1571/2636/7"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"../../../../unrestored/shared/1571/2636/6"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_68 from /* 68 */"../../../../unrestored/shared/1571/2636/68"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from /* 0 */"react"
import * as /* [auto-meaningful-name] */Shared_ui_components_index from /* 13 */"../../../shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_1042 from /* 1042 */"../../../../unrestored/player/2635/2637/1042"
import /* [auto-meaningful-name] */Module_10421 from /* 1042 */"../../../../unrestored/player/2635/2637/1042"
import * as /* [auto-meaningful-name] */Shared_player_audit from /* 288 */"../../../shared/player/audit"
import * as /* [auto-meaningful-name] */Module_530 from /* 530 */"../../../../unrestored/player/2635/2637/530"
import /* [auto-meaningful-name] */Module_5301 from /* 530 */"../../../../unrestored/player/2635/2637/530"
function k(t) {
  return "translate(-50%, -50%) " + "scale(".concat(t, ")")
}
var R = React.memo(function () {
  var t = React1.useState()
  var e = Module_10.a(t, 2)
  var n = e[0]
  var o = e[1]
  var a = React1.useState(1)
  var s = Module_10.a(a, 2)
  var u = s[0]
  var l = s[1]
  var m = React1.useState(false)
  var S = Module_10.a(m, 2)
  var j = S[0]
  var R = S[1]
  var N = React1.useState(false)
  var x = Module_10.a(N, 2)
  var D = x[0]
  var L = x[1]
  var B = React1.useState(true)
  var P = Module_10.a(B, 2)
  var U = P[0]
  var F = P[1]
  var W = React1.useState("")
  var H = Module_10.a(W, 2)
  var V = H[0]
  var G = H[1]
  var z = React1.useRef()
  var Y = React1.useRef()
  var K = React1.useRef()
  function X() {
    return (X = Module_7.a(RegeneratorRuntime.mark(function t() {
      var e
      var n
      var /* [auto-meaningful-name] */t$sent$data$bcmc_url
      var /* [auto-meaningful-name] */t$sent
      var o
      return RegeneratorRuntime.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {
            case 0:
              if (!(n = null === (e = window.location.pathname.match(/\/player\/([^/]*)/)) || undefined === e ? undefined : e[1])) {
                t.next = 22
                break
              }
              t.next = 4
              return Module_177.g(n)
            case 4:
              t$sent$data$bcmc_url = t.sent.data.bcmc_url
              Shared_player_audit.a(t$sent$data$bcmc_url)
              t.next = 8
              return fetch(t$sent$data$bcmc_url)
            case 8:
              t$sent = t.sent
              t.next = 11
              return t$sent.json()
            case 11:
              o = t.sent
              t.next = 14
              return Shared_player_audit.b()
            case 14:
              if (t.sent.includes(Number(n))) {
                t.next = 19
                break
              }
              t.next = 18
              return Shared_player_audit.c(o)
            case 18:
              o = t.sent
            case 19:
              K.current = o
              t.next = 23
              break
            case 22:
              E()
            case 23:
            case "end":
              return t.stop()
          }
        }
      }, t)
    }))).apply(this, arguments)
  }
  React1.useEffect(function () {
    y();
    (function () {
      X.apply(this, arguments)
    })()
    T(function () {
      window.location.reload()
    })
    document.body.click()
    window.addEventListener("message", function (t) {
      if ("PLAYER_BLOCK_CODE" === t.data.type) {
        G(t.data.payload)
        F(false)
        var e = document.getElementById("editor-iframe")
        if (e) {
          document.body.removeChild(e)
        }
      }
    }, false)
  }, [])
  React1.useEffect(function () {
    if (!U && K.current) {
      if (K.current.blockCode) {
        K.current.blockCode = V
      }
      o(Module_6.a(Module_6.a({}, K.current), {}, {
        shouldOpenEmulator: true
      }))
      w()
      O()
    }
  }, [V, U])
  React1.useEffect(function () {
    function t() {
      var /* [auto-meaningful-name] */window$innerWidth = window.innerWidth
      l(window$innerWidth > 1366 ? 1 : window$innerWidth > 992 ? .9 : window$innerWidth > 700 ? .83 : .57)
    }
    t()
    window.onresize = t
  }, [])
  var q = function (t) {
    var /* [auto-meaningful-name] */t$data = t.data
    if (t$data.type === Module_68.b.DEVICE_VIBRATE) {
      var n = Date.now() + t$data.data.duration
      if (Y.current && Y.current >= n) {
        return
      }
      R(true)
      window.clearTimeout(z.current)
      z.current = window.setTimeout(function () {
        return R(false)
      }, t$data.data.duration)
      return void (Y.current = n)
    }
    if (t$data.type === Module_68.b.DEVICE_NOT_VIBRATE) {
      window.clearTimeout(z.current)
      Y.current = 0
      R(false)
    } else {
      if (t$data.type === Module_68.b.EMULATOR && "string" === typeof t$data.data.visiblePanel) {
        L(!!t$data.data.visiblePanel)
      }
    }
  }
  React1.useEffect(function () {
    window.addEventListener("message", q)
    return function () {
      window.removeEventListener("message", q)
    }
  }, [])
  return React.createElement("div", {
    className: Module_5301.community
  }, React.createElement("div", {
    id: "webPlayer",
    className: Classnames(Module_5301.main),
    style: {
      transform: k(u),
      left: D ? "35%" : "50%"
    }
  }, React.createElement("div", {
    className: Classnames(j && Module_5301.vibrate, Module_5301.playerWrapper)
  }, n && React.createElement(Module_514.a, n)), React.createElement("div", {
    className: Classnames(j && Module_5301.vibrate, Module_5301.deviceFrame)
  }), React.createElement("div", {
    className: Module_5301.emulatorWrapper
  }, React.createElement(Module_738.a, {
    messageWindow: window
  }))), React.createElement("div", {
    className: Module_5301.appUrlBtn,
    onClick: function () {
      window.open(window.location.origin.replace(/\d+/g, ""), "_blank")
    }
  }, React.createElement("img", {
    src: Module_10421,
    className: Module_5301.appUrlBtnImg,
    alt: ""
  }), React.createElement("span", null, "去CoCo制作"), React.createElement(Shared_ui_components_index.j, {
    type: "icon-fold-left",
    className: Module_5301.appUrlBtnIcon
  })))
})
export { R }
