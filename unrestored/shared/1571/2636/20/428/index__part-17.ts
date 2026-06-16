/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：428__part-17
 */

"use strict"

import * as /* [auto-meaningful-name] */Src_shared_env from /* 57 */"../../../../../../src/shared/env"
import * as /* [auto-meaningful-name] */Module_87 from /* 87 */"../../48/87"
import * as /* [auto-meaningful-name] */Src_shared_utils_network_axiosWithCredentials from /* 41 */"../../../../../../src/shared/utils/network/axios-with-credentials"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"../../6"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../../7"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_431 from /* 431 */"../../431/index"
var /* [auto-meaningful-name] */Src_shared_env$a$serverHost = Src_shared_env.a.serverHost
function cu(e) {
  return lu.apply(this, arguments)
}
function lu() {
  return (lu = Module_7.a(RegeneratorRuntime.mark(function e(t) {
    var /* [auto-meaningful-name] */e$sent
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            e.next = 3
            return Src_shared_utils_network_axiosWithCredentials.a.post(Src_shared_env$a$serverHost + "/public-api/baidu-openapi/text2audio", Module_6.a({}, t), {
              headers: Module_87.a()
            })
          case 3:
            e$sent = e.sent
            return e.abrupt("return", e$sent)
          case 7:
            e.prev = 7
            e.t0 = e.catch(0)
            return e.abrupt("return", e.t0)
          case 10:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 7]])
  }))).apply(this, arguments)
}
export { cu }
