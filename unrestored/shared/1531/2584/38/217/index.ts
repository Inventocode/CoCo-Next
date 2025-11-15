/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：217
 */

"use strict"

export { m as a }
export { g as b }
import /* [auto-meaningful-name] */$$_$$_11 = require("../../11")
import /* [auto-meaningful-name] */$$_$$_6 = require("../../6")
import /* [auto-meaningful-name] */$$_$$_27 = require("../../27")
import /* [auto-meaningful-name] */$$_$$_40 = require("../../40")
import /* [auto-meaningful-name] */$$_$$_57_index = require("../../57/index")
import /* [auto-meaningful-name] */$$_$$_58_index = require("../../58/index")
import /* [auto-meaningful-name] */$$_$$_28_index = require("../../28/index")
import /* [auto-meaningful-name] */$$_$$_48_72 = require("../../48/72")
import /* [auto-meaningful-name] */$$_$$_48_index = require("../../48/index")
import /* [auto-meaningful-name] */$$_$$_48_70 = require("../../48/70")
import /* [auto-meaningful-name] */$$_$$_678_360 = require("../../678/360")
import /* [auto-meaningful-name] */$$_$$_21_index = require("../../21/index")
var m = function (e) {
  $$_$$_57_index.a(n, e)
  var t = $$_$$_58_index.a(n)
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
            $$_$$_21_index.emitWidgetEventType($$_$$_48_70.c, t)
          }
          if ("onPhoneCallEnd" === t) {
            var n
            var /* [auto-meaningful-name] */$$_$$_48_70$a$DIAL_OUT_CALL_END = $$_$$_48_70.a.DIAL_OUT_CALL_END
            if ("incomingCall" === (null === (n = t$data$data[t]) || undefined === n ? undefined : n.callType)) {
              $$_$$_48_70$a$DIAL_OUT_CALL_END = $$_$$_48_70.a.INCOMING_CALL_REFUSE_END
            }
            $$_$$_21_index.emitWidgetEventType($$_$$_48_70.c, t, $$_$$_48_70$a$DIAL_OUT_CALL_END)
          }
          var a
          var s
          if ("onReceiveSms" === t) {
            $$_$$_21_index.emitWidgetEventType($$_$$_678_360.a, t, null === (a = t$data$data[t]) || undefined === a ? undefined : a.receiveSmsContent, null === (s = t$data$data[t]) || undefined === s ? undefined : s.receiveSmsNumber)
          }
        })
      }
    })
    return e
  }
  $$_$$_40.a(n, [{
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
  }], [{
    key: "instance",
    get: function () {
      if (!n._instance) {
        n._instance = new n()
      }
      return n._instance
    }
  }])
  return n
}(require("./388").a)
function g(e) {
  ($$_$$_28_index.e() ? window.parent : window).postMessage({
    type: "TO_EMULATOR",
    data: e
  }, "*")
}
m._instance = undefined
export default m
