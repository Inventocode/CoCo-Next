/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：219
 */

"use strict"

export { m as a }
export { g as b }
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"../../11"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"../../6"
import * as /* [auto-meaningful-name] */Module_27 from /* 27 */"../../27"
import * as /* [auto-meaningful-name] */Module_39 from /* 39 */"../../39"
import * as /* [auto-meaningful-name] */Module_58 from /* 58 */"../../58/index"
import * as /* [auto-meaningful-name] */Module_59 from /* 59 */"../../59/index"
import * as /* [auto-meaningful-name] */Module_28 from /* 28 */"../../28/index"
import * as /* [auto-meaningful-name] */Module_72 from /* 72 */"../../48/72"
import * as /* [auto-meaningful-name] */Module_48 from /* 48 */"../../48/index"
import * as /* [auto-meaningful-name] */Module_70 from /* 70 */"../../738/70"
import * as /* [auto-meaningful-name] */Module_360 from /* 360 */"../../685/360"
import * as /* [auto-meaningful-name] */Module_20 from /* 20 */"../../20/index"
var m = function (e) {
  Module_58.a(n, e)
  var t = Module_59.a(n)
  function n() {
    var e
    Module_27.a(this, n)
    e = t.call(this)
    window.addEventListener("message", function (t) {
      var /* [auto-meaningful-name] */t$data = t.data
      var /* [auto-meaningful-name] */t$data$type = t$data.type
      var /* [auto-meaningful-name] */t$data$data = t$data.data
      if ("EMULATOR" === t$data$type) {
        Object.keys(t$data$data).forEach(function (t) {
          e.emit(t, t$data$data[t])
          if (!("onPhoneCallConnect" !== t && "onReceivePhoneCall" !== t && "onPhoneCallEnd" !== t && "onReceiveSms" !== t)) {
            Module_48.a().dispatch(Module_72.s(Module_6.a({}, t$data$data[t])))
          }
          if ("onReceivePhoneCall" === t) {
            Module_20.emitWidgetEventType(Module_70.c, t)
          }
          if ("onPhoneCallEnd" === t) {
            var n
            var /* [auto-meaningful-name] */Module_70$a$DIAL_OUT_CALL_END = Module_70.a.DIAL_OUT_CALL_END
            if ("incomingCall" === (null === (n = t$data$data[t]) || undefined === n ? undefined : n.callType)) {
              Module_70$a$DIAL_OUT_CALL_END = Module_70.a.INCOMING_CALL_REFUSE_END
            }
            Module_20.emitWidgetEventType(Module_70.c, t, Module_70$a$DIAL_OUT_CALL_END)
          }
          var a
          var s
          if ("onReceiveSms" === t) {
            Module_20.emitWidgetEventType(Module_360.a, t, null === (a = t$data$data[t]) || undefined === a ? undefined : a.receiveSmsContent, null === (s = t$data$data[t]) || undefined === s ? undefined : s.receiveSmsNumber)
          }
        })
      }
    })
    return e
  }
  Module_39.a(n, [
    {
      key: "emitToParent",
      value: function (e, t) {
        var n = window
        if (Module_28.e() && window.parent) {
          n = window.parent
        }
        n.postMessage({
          type: "EMULATOR",
          data: Module_11.a({}, e, t)
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
}(require(/* 389 */"./389").a)
function g(e) {
  (Module_28.e() ? window.parent : window).postMessage({
    type: "TO_EMULATOR",
    data: e
  }, "*")
}
m._instance = undefined
export default m
