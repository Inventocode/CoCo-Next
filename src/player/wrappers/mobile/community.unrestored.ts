/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2637__part-4
 */

"use strict"

import { y, w, E, O, T } from "../../../../unrestored/player/2635/2637/index__part-0"
import * as /* [auto-meaningful-name] */Shared_player_audit from /* 288 */"../../../shared/player/audit"
import * as /* [auto-meaningful-name] */Module_177 from /* 177 */"../../../../unrestored/shared/1571/2636/177"
import * as /* [auto-meaningful-name] */Module_514 from /* 514 */"../../../../unrestored/player/2635/2637/514/index"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../../../../unrestored/shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../../../../unrestored/shared/1571/2636/7"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"../../../../unrestored/shared/1571/2636/6"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_1210 from /* 1210 */"../../../../unrestored/player/2635/2637/1210"
import /* [auto-meaningful-name] */Module_12101 from /* 1210 */"../../../../unrestored/player/2635/2637/1210"
var F = React.memo(function () {
  var t = React1.useState()
  var e = Module_10.a(t, 2)
  var n = e[0]
  var o = e[1]
  var a = React1.useState(true)
  var s = Module_10.a(a, 2)
  var u = s[0]
  var c = s[1]
  var l = React1.useState("")
  var m = Module_10.a(l, 2)
  var b = m[0]
  var _ = m[1]
  var A = React1.useRef()
  function S() {
    return I.apply(this, arguments)
  }
  function I() {
    return (I = Module_7.a(RegeneratorRuntime.mark(function t() {
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
              return Module_177.g(n, 1)
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
              A.current = o
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
    y()
    S()
    T(S)
    window.addEventListener("message", function (t) {
      if ("PLAYER_BLOCK_CODE" === t.data.type) {
        _(t.data.payload)
        c(false)
        var e = document.getElementById("editor-iframe")
        if (e) {
          document.body.removeChild(e)
        }
      }
    }, false)
  }, [])
  React1.useEffect(function () {
    if (!u && A.current) {
      if (A.current.blockCode) {
        A.current.blockCode = b
      }
      o(Module_6.a({}, A.current))
      w()
      O()
    }
  }, [b, u])
  return n ? React.createElement("div", {
    className: Module_12101.community
  }, React.createElement("input", {
    type: "file",
    accept: "image/*",
    capture: "camera",
    id: "appcraft-camera-input",
    className: Module_12101.camera
  }), React.createElement(Module_514.a, n)) : React.createElement(React.Fragment, null)
})
export { F }
