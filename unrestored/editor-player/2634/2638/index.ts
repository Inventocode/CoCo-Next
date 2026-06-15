/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2638
 */

"use strict"

import { useState, useEffect } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from /* 0 */"react"
import /* 719 */"../../../shared/1571/2636/719"
import * as /* [auto-meaningful-name] */ReactDom from /* 80 */"react-dom"
import /* [auto-meaningful-name] */ReactDom1 from /* 80 */"react-dom"
import * as /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import /* [auto-meaningful-name] */RegeneratorRuntime1 from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"../../../shared/1571/2636/6"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../../../shared/1571/2636/7"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../../../shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */Module_514 from /* 514 */"./514/index"
import * as /* [auto-meaningful-name] */Module_177 from /* 177 */"../../../shared/1571/2636/177"
var p = React1.memo(function () {
  var t = useState()
  var e = Module_10.a(t, 2)
  var n = e[0]
  var o = e[1]
  function a() {
    return (a = Module_7.a(RegeneratorRuntime1.mark(function t() {
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
              return Module_177.h(n)
            case 7:
              t.t1 = t.sent
              r = t.t0.parse.call(t.t0, t.t1)
              o(Module_6.a(Module_6.a({}, r), {}, {
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
  return n ? React1.createElement(Module_514.a, n) : React1.createElement(React1.Fragment, null)
})
ReactDom1.render(React1.createElement(p, null), document.getElementById("root"))
