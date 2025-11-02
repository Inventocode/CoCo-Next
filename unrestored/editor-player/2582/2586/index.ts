/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2586
 */

"use strict"

import * as _React from "react"
import React from "react"
import "../../../shared/1531/2584/710/index"
import * as o from "../../../shared/1531/2584/75/index"
import a from "../../../shared/1531/2584/75/index"
import * as _RegeneratorRuntime from "regenerator-runtime"
import RegeneratorRuntime from "regenerator-runtime"
import * as c from "../../../shared/1531/2584/6"
import * as l from "../../../shared/1531/2584/7"
import * as d from "../../../shared/1531/2584/10/index"
import * as f from "./511/index"
import * as h from "../../../shared/1531/2584/177"
var p = React.memo(function () {
  var t = _React.useState()
  var e = d.a(t, 2)
  var n = e[0]
  var o = e[1]
  function a() {
    return (a = l.a(RegeneratorRuntime.mark(function t() {
      var e
      var n
      var r
      return RegeneratorRuntime.wrap(function (t) {
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
              return h.h(n)
            case 7:
              t.t1 = t.sent
              r = t.t0.parse.call(t.t0, t.t1)
              o(c.a(c.a({}, r), {}, {
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
  _React.useEffect(function () {
    !function () {
      a.apply(this, arguments)
    }()
  }, [])
  return n ? React.createElement(f.a, n) : React.createElement(React.Fragment, null)
})
a.render(React.createElement(p, null), document.getElementById("root"))
