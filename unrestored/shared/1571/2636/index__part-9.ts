/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-9
 */

"use strict"

import * as /* [auto-meaningful-name] */Src_shared_env from /* 57 */"../../../../src/shared/env"
import * as /* [auto-meaningful-name] */Src_shared_utils_network_axiosWithCredentials from /* 41 */"../../../../src/shared/utils/network/axios-with-credentials"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_1200 from /* 1200 */"./1200"
import /* [auto-meaningful-name] */Module_12001 from /* 1200 */"./1200"
var Ge = React1.memo(function (e) {
  var /* [auto-meaningful-name] */e$stroke = e.stroke
  var n = undefined === e$stroke ? "white" : e$stroke
  return React.createElement("svg", {
    className: Module_12001.spinner,
    viewBox: "0 0 50 50"
  }, React.createElement("circle", {
    className: Module_12001.spinnerPath,
    cx: "25",
    cy: "25",
    r: "20",
    fill: "none",
    strokeWidth: "6",
    stroke: n || "white"
  }))
})
var /* [auto-meaningful-name] */Src_shared_env$a$backendHost = Src_shared_env.a.backendHost
function Ue() {
  return He.apply(this, arguments)
}
function He() {
  return (He = Module_7.a(RegeneratorRuntime.mark(function e() {
    var /* [auto-meaningful-name] */e$sent
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return Src_shared_utils_network_axiosWithCredentials.a.get(Src_shared_env$a$backendHost + "/tiger/v3/web/accounts/profile")
          case 2:
            e$sent = e.sent
            return e.abrupt("return", e$sent.data)
          case 4:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function Ve() {
  return ze.apply(this, arguments)
}
function ze() {
  return (ze = Module_7.a(RegeneratorRuntime.mark(function e() {
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return Src_shared_utils_network_axiosWithCredentials.a.post(Src_shared_env$a$backendHost + "/tiger/v3/web/accounts/logout")
          case 2:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
export { Ge }
export { Ue }
export { Ve }
