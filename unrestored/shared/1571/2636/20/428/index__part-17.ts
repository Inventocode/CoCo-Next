/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：428__part-17
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_57_index from "../../../../../../src/shared/env"
import * as /* [auto-meaningful-name] */$$_$$_48_87 from "../../48/87"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials from "../../../../../../src/shared/utils/network/axios-with-credentials"
import * as /* [auto-meaningful-name] */$$_$$_6 from "../../6"
import * as /* [auto-meaningful-name] */$$_$$_7 from "../../7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$$_$$_431_index from "../../431/index"
var /* [auto-meaningful-name] */$$_$$_57_index$a$serverHost = $$_$$_57_index.a.serverHost
function cu(e) {
  return lu.apply(this, arguments)
}
function lu() {
  return (lu = $$_$$_7.a(RegeneratorRuntime.mark(function e(t) {
    var /* [auto-meaningful-name] */e$sent
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            e.next = 3
            return $$_$$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.post($$_$$_57_index$a$serverHost + "/public-api/baidu-openapi/text2audio", $$_$$_6.a({}, t), {
              headers: $$_$$_48_87.a()
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
