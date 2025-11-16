/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：511__part-9
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_28_index from "../../../../shared/1531/2584/28/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_58_index from "../../../../shared/1531/2584/58/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_57_index from "../../../../shared/1531/2584/57/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_40 from "../../../../shared/1531/2584/40"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_27 from "../../../../shared/1531/2584/27"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_widget_custom_load from "../../../../../src/shared/widget/custom/load"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_680 from "../../../../shared/1531/2584/680"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_36_345_392 from "../../../../shared/1531/2584/36/345/392"
var vt = function (t) {
  $$_$$_$$_$$_shared_1531_2584_57_index.a(n, t)
  var e = $$_$$_$$_$$_shared_1531_2584_58_index.a(n)
  function n(t) {
    var r
    $$_$$_$$_$$_shared_1531_2584_27.a(this, n);
    (r = e.call(this, t)).stride = undefined
    r.stepCount = undefined
    r.isStopStep = undefined
    r.stepInStopTime = 0
    r.stride = t.stride
    r.stepCount = t.stepCount
    r.resetStepCount()
    return r
  }
  $$_$$_$$_$$_shared_1531_2584_40.a(n, [{
    key: "startStepUpdate",
    value: function () {
      var t = this
      if (!$$_$$_$$_$$_shared_1531_2584_28_index.g()) {
        var e = 0
        $$_$$_$$_$$_shared_1531_2584_36_345_392.default.start(function (n) {
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
      if (!$$_$$_$$_$$_shared_1531_2584_28_index.g()) {
        $$_$$_$$_$$_shared_1531_2584_36_345_392.default.stop()
        this.isStopStep = true
      }
    }
  }, {
    key: "resetStepCount",
    value: function () {
      var t = this
      if (!$$_$$_$$_$$_shared_1531_2584_28_index.g()) {
        this.stepCount = 0
        this.stepInStopTime = 0
        this.emit("onStepCountChange", 0)
        $$_$$_$$_$$_shared_1531_2584_36_345_392.default.reset(function () {
          if (false === t.isStopStep) {
            t.startStepUpdate()
          }
        })
      }
    }
  }])
  return n
}($$_$$_$$_$$_$$_src_shared_widget_custom_load.c)
export { vt as "511__part-9__vt" }
