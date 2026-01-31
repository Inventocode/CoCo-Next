/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2638
 */

"use strict"

import { useState, useEffect } from "react"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from "react"
import "../../../shared/1571/2636/719"
import * as /* [auto-meaningful-name] */ReactDom from "react-dom"
import /* [auto-meaningful-name] */ReactDom1 from "react-dom"
import * as /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import /* [auto-meaningful-name] */RegeneratorRuntime1 from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_6 from "../../../shared/1571/2636/6"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_7 from "../../../shared/1571/2636/7"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_10_index from "../../../shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */$_514_index from "./514/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_177 from "../../../shared/1571/2636/177"
var p = React1.memo(function () {
  var t = useState()
  var e = $$_$$_$$_shared_1571_2636_10_index.a(t, 2)
  var n = e[0]
  var o = e[1]
  function a() {
    return (a = $$_$$_$$_shared_1571_2636_7.a(RegeneratorRuntime1.mark(function t() {
      var e
      var n
      var r
      return RegeneratorRuntime1.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {
            case 0:
              if (e = new URLSearchParams(window.location.hash.replace("#", "?")), n = e.get("id")) {
                t.next = 4
                break
              }
              return t.abrupt("return")
            case 4:
              t.t0 = JSON
              t.next = 7
              return $$_$$_$$_shared_1571_2636_177.h(n)
            case 7:
              t.t1 = t.sent
              r = t.t0.parse.call(t.t0, t.t1)
              o($$_$$_$$_shared_1571_2636_6.a($$_$$_$$_shared_1571_2636_6.a({}, r), {}, {
                shouldOpenEmulator: true
              }))
            case 10:
            case "end":
              return t.stop()
          }
        }
      }, t)
    }))).apply(this, arguments)
  }
  useEffect(function () {
    !function () {
      a.apply(this, arguments)
    }()
  }, [])
  return n ? React1.createElement($_514_index.a, n) : React1.createElement(React1.Fragment, null)
})
ReactDom1.render(React1.createElement(p, null), document.getElementById("root"))
