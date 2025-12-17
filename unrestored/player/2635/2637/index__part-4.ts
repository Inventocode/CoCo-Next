/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2637__part-4
 */

"use strict"

import { y, w, E, O, T } from "./index__part-0"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_288 from "../../../shared/1571/2636/288"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_177 from "../../../shared/1571/2636/177"
import * as /* [auto-meaningful-name] */$_514_index from "./514/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_10_index from "../../../shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_7 from "../../../shared/1571/2636/7"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_6 from "../../../shared/1571/2636/6"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_1210 from "./1210"
import /* [auto-meaningful-name] */_$_ from "./1210"
var F = React.memo(function () {
  var t = _React.useState()
  var e = $$_$$_$$_shared_1571_2636_10_index.a(t, 2)
  var n = e[0]
  var o = e[1]
  var a = _React.useState(true)
  var s = $$_$$_$$_shared_1571_2636_10_index.a(a, 2)
  var u = s[0]
  var c = s[1]
  var l = _React.useState("")
  var m = $$_$$_$$_shared_1571_2636_10_index.a(l, 2)
  var b = m[0]
  var _ = m[1]
  var A = _React.useRef()
  function S() {
    return I.apply(this, arguments)
  }
  function I() {
    return (I = $$_$$_$$_shared_1571_2636_7.a(RegeneratorRuntime.mark(function t() {
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
              return $$_$$_$$_shared_1571_2636_177.g(n, 1)
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
  _React.useEffect(function () {
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
  _React.useEffect(function () {
    if (!u && A.current) {
      if (A.current.blockCode) {
        A.current.blockCode = b
      }
      o($$_$$_$$_shared_1571_2636_6.a({}, A.current))
      w()
      O()
    }
  }, [b, u])
  return n ? React.createElement("div", {
    className: _$_.community
  }, React.createElement("input", {
    type: "file",
    accept: "image/*",
    capture: "camera",
    id: "appcraft-camera-input",
    className: _$_.camera
  }), React.createElement($_514_index.a, n)) : React.createElement(React.Fragment, null)
})
export { F }
