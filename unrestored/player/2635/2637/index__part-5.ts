/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2637__part-5
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_7 from "../../../shared/1571/2636/7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials from "../../../../src/shared/utils/network/axios-with-credentials"
import * as /* [auto-meaningful-name] */$$_$$_$$_shared_1571_2636_57_index from "../../../shared/1571/2636/57/index"
function V() {
  var t = $$_$$_$$_shared_1571_2636_57_index.b()
  var e = "https://".concat({
    development: "backend-dev",
    test: "backend-test",
    staging: "staging-api",
    production: "api"
  }[t] || "api", ".codemao.cn/tiger/wechat/config/js_sdk")
  var n = {
    url: window.location.href
  }
  return $$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.post(e, n).then(function () {
    var t = $$_$$_$$_shared_1571_2636_7.a(RegeneratorRuntime.mark(function t(e) {
      return RegeneratorRuntime.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {
            case 0:
              if (200 !== e.status) {
                t.next = 4
                break
              }
              return t.abrupt("return", Promise.resolve(e.data))
            case 4:
              return t.abrupt("return", Promise.reject("error"))
            case 5:
            case "end":
              return t.stop()
          }
        }
      }, t)
    }))
    return function (e) {
      return t.apply(this, arguments)
    }
  }()).catch(function (t) {
    return Promise.reject(t)
  })
}
export { V }
