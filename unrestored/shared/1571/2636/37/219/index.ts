/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：219
 */

"use strict"

export { m as a }
export { g as b }
import * as /* [auto-meaningful-name] */$$_$$_11 from "../../11"
import * as /* [auto-meaningful-name] */$$_$$_6 from "../../6"
import * as /* [auto-meaningful-name] */$$_$$_27 from "../../27"
import * as /* [auto-meaningful-name] */$$_$$_39 from "../../39"
import * as /* [auto-meaningful-name] */$$_$$_58_index from "../../58/index"
import * as /* [auto-meaningful-name] */$$_$$_59_index from "../../59/index"
import * as /* [auto-meaningful-name] */$$_$$_28_index from "../../28/index"
import * as /* [auto-meaningful-name] */$$_$$_48_72 from "../../48/72"
import * as /* [auto-meaningful-name] */$$_$$_48_index from "../../48/index"
import * as /* [auto-meaningful-name] */$$_$$_738_70 from "../../738/70"
import * as /* [auto-meaningful-name] */$$_$$_685_360 from "../../685/360"
import * as /* [auto-meaningful-name] */$$_$$_20_index from "../../20/index"
var m = function (e) {
  $$_$$_58_index.a(n, e)
  var t = $$_$$_59_index.a(n)
  function n() {
    var e
    $$_$$_27.a(this, n)
    e = t.call(this)
    window.addEventListener("message", function (t) {
      var /* [auto-meaningful-name] */t$data = t.data
      var /* [auto-meaningful-name] */t$data$type = t$data.type
      var /* [auto-meaningful-name] */t$data$data = t$data.data
      if ("EMULATOR" === t$data$type) {
        Object.keys(t$data$data).forEach(function (t) {
          e.emit(t, t$data$data[t])
          if (!("onPhoneCallConnect" !== t && "onReceivePhoneCall" !== t && "onPhoneCallEnd" !== t && "onReceiveSms" !== t)) {
            $$_$$_48_index.a().dispatch($$_$$_48_72.s($$_$$_6.a({}, t$data$data[t])))
          }
          if ("onReceivePhoneCall" === t) {
            $$_$$_20_index.emitWidgetEventType($$_$$_738_70.c, t)
          }
          if ("onPhoneCallEnd" === t) {
            var n
            var /* [auto-meaningful-name] */$$_$$_738_70$a$DIAL_OUT_CALL_END = $$_$$_738_70.a.DIAL_OUT_CALL_END
            if ("incomingCall" === (null === (n = t$data$data[t]) || undefined === n ? undefined : n.callType)) {
              $$_$$_738_70$a$DIAL_OUT_CALL_END = $$_$$_738_70.a.INCOMING_CALL_REFUSE_END
            }
            $$_$$_20_index.emitWidgetEventType($$_$$_738_70.c, t, $$_$$_738_70$a$DIAL_OUT_CALL_END)
          }
          var a
          var s
          if ("onReceiveSms" === t) {
            $$_$$_20_index.emitWidgetEventType($$_$$_685_360.a, t, null === (a = t$data$data[t]) || undefined === a ? undefined : a.receiveSmsContent, null === (s = t$data$data[t]) || undefined === s ? undefined : s.receiveSmsNumber)
          }
        })
      }
    })
    return e
  }
  $$_$$_39.a(n, [
    {
      key: "emitToParent",
      value: function (e, t) {
        var n = window
        if ($$_$$_28_index.e() && window.parent) {
          n = window.parent
        }
        n.postMessage({
          type: "EMULATOR",
          data: $$_$$_11.a({}, e, t)
        }, "*")
      }
    }
  ], [
    {
      key: "instance",
      get: function () {
        if (!n._instance) {
          n._instance = new n()
        }
        return n._instance
      }
    }
  ])
  return n
}(require("./389").a)
function g(e) {
  ($$_$$_28_index.e() ? window.parent : window).postMessage({
    type: "TO_EMULATOR",
    data: e
  }, "*")
}
m._instance = undefined
export default m
