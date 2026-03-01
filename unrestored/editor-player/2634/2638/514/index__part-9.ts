/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：514__part-9
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_28 from /* 28 */"../../../../shared/1571/2636/28/index"
import * as /* [auto-meaningful-name] */Module_59 from /* 59 */"../../../../shared/1571/2636/59/index"
import * as /* [auto-meaningful-name] */Module_58 from /* 58 */"../../../../shared/1571/2636/58/index"
import * as /* [auto-meaningful-name] */Module_39 from /* 39 */"../../../../shared/1571/2636/39"
import * as /* [auto-meaningful-name] */Module_27 from /* 27 */"../../../../shared/1571/2636/27"
import * as /* [auto-meaningful-name] */Src_shared_widget_custom_load from /* 34 */"../../../../../src/shared/widget/custom/load"
import * as /* [auto-meaningful-name] */Module_687 from /* 687 */"../../../../shared/1571/2636/687"
import * as /* [auto-meaningful-name] */Module_393 from /* 393 */"../../../../shared/1571/2636/34/347/393"
var vt = function (t) {
  Module_58.a(n, t)
  var e = Module_59.a(n)
  function n(t) {
    var r
    Module_27.a(this, n);
    (r = e.call(this, t)).stride = undefined
    r.stepCount = undefined
    r.isStopStep = undefined
    r.stepInStopTime = 0
    r.stride = t.stride
    r.stepCount = t.stepCount
    r.resetStepCount()
    return r
  }
  Module_39.a(n, [
    {
      key: "startStepUpdate",
      value: function () {
        var t = this
        if (!Module_28.g()) {
          var e = 0
          Module_393.default.start(function (n) {
            if (t.isStopStep && ++e % 2 === 0) {
              t.isStopStep = false
              t.stepInStopTime = n - t.stepCount
              e = 0
            }
            if (t.stepCount !== n - t.stepInStopTime) {
              t.emit("onStepCountChange", n - t.stepInStopTime)
              t.stepCount = n - t.stepInStopTime
            }
            if (undefined === t.isStopStep) {
              t.isStopStep = false
            }
          }, function () {
            return t.emit("onPedometerNotAvailable")
          }, function () {
            return t.emit("onPedometerPermissionFail")
          })
        }
      }
    }, {
      key: "stopStepUpdate",
      value: function () {
        if (!Module_28.g()) {
          Module_393.default.stop()
          this.isStopStep = true
        }
      }
    }, {
      key: "resetStepCount",
      value: function () {
        var t = this
        if (!Module_28.g()) {
          this.stepCount = 0
          this.stepInStopTime = 0
          this.emit("onStepCountChange", 0)
          Module_393.default.reset(function () {
            if (false === t.isStopStep) {
              t.startStepUpdate()
            }
          })
        }
      }
    }
  ])
  return n
}(Src_shared_widget_custom_load.c)
export { vt }
