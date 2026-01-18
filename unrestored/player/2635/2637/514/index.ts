/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：514
 */

import "./index__part-0"
import { ue } from "./index__part-17"
import { ke } from "./index__part-22"
import { ze } from "./index__part-23"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_48_index from "../../../../shared/1571/2636/48/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_16_index from "../../../../shared/1571/2636/16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_7 from "../../../../shared/1571/2636/7"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_10_index from "../../../../shared/1571/2636/10/index"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
var _a
_a = React.memo(function (t) {
  var e = React1.useState(false)
  var n = $$_$$_$$_$$_shared_1571_2636_10_index.a(e, 2)
  var r = n[0]
  var i = n[1]
  var o = function () {
    var e = $$_$$_$$_$$_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e() {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              ue()
              e.next = 3
              return ze(t)
            case 3:
              i(true)
            case 4:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))
    return function () {
      return e.apply(this, arguments)
    }
  }()
  React1.useEffect(function () {
    o()
  }, [])
  return r ? React.createElement($$_$$_$$_$$_shared_1571_2636_16_index.a, {
    store: $$_$$_$$_$$_shared_1571_2636_48_index.a()
  }, React.createElement(ke, null)) : null
})
export { _a as a }
export default _a
