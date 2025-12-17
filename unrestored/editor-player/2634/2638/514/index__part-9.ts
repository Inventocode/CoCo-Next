/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：514__part-9
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_28_index from "../../../../shared/1571/2636/28/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_59_index from "../../../../shared/1571/2636/59/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_58_index from "../../../../shared/1571/2636/58/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_39 from "../../../../shared/1571/2636/39"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_27 from "../../../../shared/1571/2636/27"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_widget_custom_load from "../../../../../src/shared/widget/custom/load"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_687 from "../../../../shared/1571/2636/687"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_34_347_393 from "../../../../shared/1571/2636/34/347/393"
var vt = function (t) {
  $$_$$_$$_$$_shared_1571_2636_58_index.a(n, t)
  var e = $$_$$_$$_$$_shared_1571_2636_59_index.a(n)
  function n(t) {
    var r
    $$_$$_$$_$$_shared_1571_2636_27.a(this, n);
    (r = e.call(this, t)).stride = undefined
    r.stepCount = undefined
    r.isStopStep = undefined
    r.stepInStopTime = 0
    r.stride = t.stride
    r.stepCount = t.stepCount
    r.resetStepCount()
    return r
  }
  $$_$$_$$_$$_shared_1571_2636_39.a(n, [
    {
      key: "startStepUpdate",
      value: function () {
        var t = this
        if (!$$_$$_$$_$$_shared_1571_2636_28_index.g()) {
          var e = 0
          $$_$$_$$_$$_shared_1571_2636_34_347_393.default.start(function (n) {
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
        if (!$$_$$_$$_$$_shared_1571_2636_28_index.g()) {
          $$_$$_$$_$$_shared_1571_2636_34_347_393.default.stop()
          this.isStopStep = true
        }
      }
    }, {
      key: "resetStepCount",
      value: function () {
        var t = this
        if (!$$_$$_$$_$$_shared_1571_2636_28_index.g()) {
          this.stepCount = 0
          this.stepInStopTime = 0
          this.emit("onStepCountChange", 0)
          $$_$$_$$_$$_shared_1571_2636_34_347_393.default.reset(function () {
            if (false === t.isStopStep) {
              t.startStepUpdate()
            }
          })
        }
      }
    }
  ])
  return n
}($$_$$_$$_$$_$$_src_shared_widget_custom_load.c)
export { vt }
