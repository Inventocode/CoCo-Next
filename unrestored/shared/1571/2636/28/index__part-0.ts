/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：28__part-0
 */

"use strict"

import * as /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import /* [auto-meaningful-name] */RegeneratorRuntime1 from "regenerator-runtime"
import * as i from "../7"
import "color"
import * as /* [auto-meaningful-name] */$_784_index from "./784/index"
import * as /* [auto-meaningful-name] */Lodash from "lodash"
import * as /* [auto-meaningful-name] */$_303_index from "./303/index"
import /* [auto-meaningful-name] */$_303_index1 from "./303/index"
import * as /* [auto-meaningful-name] */AntdMobile from "antd-mobile"
import * as /* [auto-meaningful-name] */$_657 from "./657"
import * as /* [auto-meaningful-name] */Axios from "axios"
import /* [auto-meaningful-name] */Axios1 from "axios"
import * as /* [auto-meaningful-name] */$_128 from "./128"
function m() {
  return g.apply(this, arguments)
}
function g() {
  return (g = i.a(RegeneratorRuntime1.mark(function e() {
    var /* [auto-meaningful-name] */e$sent
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return Axios1.get("".concat($_128.a.tigerHost, "/tiger/v3/web/accounts/profile"), {
              withCredentials: true
            })
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
export { m }
