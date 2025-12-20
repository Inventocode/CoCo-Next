/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2637__part-1
 */

"use strict"

import { y, w, E, O, T } from "./index__part-0"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_738_index from "../../../shared/1571/2636/738/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_177 from "../../../shared/1571/2636/177"
import * as /* [auto-meaningful-name] */$_514_index from "./514/index"
import /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_8 from "../../../shared/1571/2636/8"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_10_index from "../../../shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_7 from "../../../shared/1571/2636/7"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_6 from "../../../shared/1571/2636/6"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_68 from "../../../shared/1571/2636/68"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_13_index from "../../../shared/1571/2636/13/index"
import * as /* [auto-meaningful-name] */$_1042 from "./1042"
import /* [auto-meaningful-name] */_$_ from "./1042"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_288 from "../../../shared/1571/2636/288"
import * as /* [auto-meaningful-name] */$_530 from "./530"
import /* [auto-meaningful-name] */_$_2 from "./530"
function k(t) {
  return "translate(-50%, -50%) " + "scale(".concat(t, ")")
}
var R = React.memo(function () {
  var t = _React.useState()
  var e = $$_$$_$$_shared_1571_2636_10_index.a(t, 2)
  var n = e[0]
  var o = e[1]
  var a = _React.useState(1)
  var s = $$_$$_$$_shared_1571_2636_10_index.a(a, 2)
  var u = s[0]
  var l = s[1]
  var m = _React.useState(false)
  var S = $$_$$_$$_shared_1571_2636_10_index.a(m, 2)
  var j = S[0]
  var R = S[1]
  var N = _React.useState(false)
  var x = $$_$$_$$_shared_1571_2636_10_index.a(N, 2)
  var D = x[0]
  var L = x[1]
  var B = _React.useState(true)
  var P = $$_$$_$$_shared_1571_2636_10_index.a(B, 2)
  var U = P[0]
  var F = P[1]
  var W = _React.useState("")
  var H = $$_$$_$$_shared_1571_2636_10_index.a(W, 2)
  var V = H[0]
  var G = H[1]
  var z = _React.useRef()
  var Y = _React.useRef()
  var K = _React.useRef()
  function X() {
    return (X = $$_$$_$$_shared_1571_2636_7.a(RegeneratorRuntime.mark(function t() {
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
              return $$_$$_$$_shared_1571_2636_177.g(n)
            case 4:
              t$sent$data$bcmc_url = t.sent.data.bcmc_url
              $$_$$_$$_shared_1571_2636_288.a(t$sent$data$bcmc_url)
              t.next = 8
              return fetch(t$sent$data$bcmc_url)
            case 8:
              t$sent = t.sent
              t.next = 11
              return t$sent.json()
            case 11:
              o = t.sent
              t.next = 14
              return $$_$$_$$_shared_1571_2636_288.b()
            case 14:
              if (t.sent.includes(Number(n))) {
                t.next = 19
                break
              }
              t.next = 18
              return $$_$$_$$_shared_1571_2636_288.c(o)
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
  _React.useEffect(function () {
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
  _React.useEffect(function () {
    if (!U && K.current) {
      if (K.current.blockCode) {
        K.current.blockCode = V
      }
      o($$_$$_$$_shared_1571_2636_6.a($$_$$_$$_shared_1571_2636_6.a({}, K.current), {}, {
        shouldOpenEmulator: true
      }))
      w()
      O()
    }
  }, [V, U])
  _React.useEffect(function () {
    function t() {
      var /* [auto-meaningful-name] */window$innerWidth = window.innerWidth
      l(window$innerWidth > 1366 ? 1 : window$innerWidth > 992 ? .9 : window$innerWidth > 700 ? .83 : .57)
    }
    t()
    window.onresize = t
  }, [])
  var q = function (t) {
    var /* [auto-meaningful-name] */t$data = t.data
    if (t$data.type === $$_$$_$$_shared_1571_2636_68.b.DEVICE_VIBRATE) {
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
    if (t$data.type === $$_$$_$$_shared_1571_2636_68.b.DEVICE_NOT_VIBRATE) {
      window.clearTimeout(z.current)
      Y.current = 0
      R(false)
    } else {
      if (t$data.type === $$_$$_$$_shared_1571_2636_68.b.EMULATOR && "string" === typeof t$data.data.visiblePanel) {
        L(!!t$data.data.visiblePanel)
      }
    }
  }
  _React.useEffect(function () {
    window.addEventListener("message", q)
    return function () {
      window.removeEventListener("message", q)
    }
  }, [])
  return React.createElement("div", {
    className: _$_2.community
  }, React.createElement("div", {
    id: "webPlayer",
    className: $$_$$_$$_shared_1571_2636_8(_$_2.main),
    style: {
      transform: k(u),
      left: D ? "35%" : "50%"
    }
  }, React.createElement("div", {
    className: $$_$$_$$_shared_1571_2636_8(j && _$_2.vibrate, _$_2.playerWrapper)
  }, n && React.createElement($_514_index.a, n)), React.createElement("div", {
    className: $$_$$_$$_shared_1571_2636_8(j && _$_2.vibrate, _$_2.deviceFrame)
  }), React.createElement("div", {
    className: _$_2.emulatorWrapper
  }, React.createElement($$_$$_$$_shared_1571_2636_738_index.a, {
    messageWindow: window
  }))), React.createElement("div", {
    className: _$_2.appUrlBtn,
    onClick: function () {
      window.open(window.location.origin.replace(/\d+/g, ""), "_blank")
    }
  }, React.createElement("img", {
    src: _$_,
    className: _$_2.appUrlBtnImg,
    alt: ""
  }), React.createElement("span", null, "去CoCo制作"), React.createElement($$_$$_$$_shared_1571_2636_13_index.j, {
    type: "icon-fold-left",
    className: _$_2.appUrlBtnIcon
  })))
})
export { R }
