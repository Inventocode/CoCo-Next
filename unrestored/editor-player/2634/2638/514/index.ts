/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：514
 */

import "./index__part-0"
import { ue } from "./index__part-17"
import { xe } from "./index__part-22"
import { Ye } from "./index__part-23"
import * as /* [auto-meaningful-name] */Module_48 from /* 48 */"../../../../shared/1571/2636/48/index"
import { Provider } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../../../../shared/1571/2636/7"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../../../../shared/1571/2636/10/index"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
var _a
_a = React.memo(function (t) {
  var e = React1.useState(false)
  var n = Module_10.a(e, 2)
  var r = n[0]
  var i = n[1]
  var o = function () {
    var e = Module_7.a(RegeneratorRuntime.mark(function e() {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              ue()
              e.next = 3
              return Ye(t)
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
  return r ? React.createElement(Provider, {
    store: Module_48.a()
  }, React.createElement(xe, null)) : null
})
export { _a as a }
export default _a
