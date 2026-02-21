/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-9
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_env from "../../../../src/shared/env"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials from "../../../../src/shared/utils/network/axios-with-credentials"
import * as O from "./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import /* [auto-meaningful-name] */React from "react"
import { memo } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_1200 from "./1200"
import /* [auto-meaningful-name] */$_12001 from "./1200"
var Ge = memo(function (e) {
  var /* [auto-meaningful-name] */e$stroke = e.stroke
  var n = undefined === e$stroke ? "white" : e$stroke
  return React.createElement("svg", {
    className: $_12001.spinner,
    viewBox: "0 0 50 50"
  }, React.createElement("circle", {
    className: $_12001.spinnerPath,
    cx: "25",
    cy: "25",
    r: "20",
    fill: "none",
    strokeWidth: "6",
    stroke: n || "white"
  }))
})
var /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_env$a$backendHost = $$_$$_$$_$$_src_shared_env.a.backendHost
function Ue() {
  return He.apply(this, arguments)
}
function He() {
  return (He = O.a(RegeneratorRuntime.mark(function e() {
    var /* [auto-meaningful-name] */e$sent
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return $$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.get($$_$$_$$_$$_src_shared_env$a$backendHost + "/tiger/v3/web/accounts/profile")
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
  return (ze = O.a(RegeneratorRuntime.mark(function e() {
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return $$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.post($$_$$_$$_$$_src_shared_env$a$backendHost + "/tiger/v3/web/accounts/logout")
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
