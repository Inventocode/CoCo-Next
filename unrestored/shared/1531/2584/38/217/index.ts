/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：217
 */

"use strict"

export { m as a }
export { g as b }
import r = require("../../11");
import o = require("../../6");
import i = require("../../27");
import a = require("../../40");
import s = require("../../57/index");
import c = require("../../58/index");
import l = require("../../28/index");
import u = require("../../48/72");
import d = require("../../48/index");
import p = require("../../676/70");
import f = require("../../678/360");
import h = require("../../21/index");
var m = function (e) {
  s.a(n, e)
  var t = c.a(n)
  function n() {
    var e
    i.a(this, n)
    e = t.call(this)
    window.addEventListener("message", function (t) {
      var t$data = t.data
      var t$data$type = t$data.type
      var t$data$data = t$data.data
      if ("EMULATOR" === t$data$type) {
        Object.keys(t$data$data).forEach(function (t) {
          e.emit(t, t$data$data[t])
          if (!("onPhoneCallConnect" !== t && "onReceivePhoneCall" !== t && "onPhoneCallEnd" !== t && "onReceiveSms" !== t)) {
            d.a().dispatch(u.s(o.a({}, t$data$data[t])))
          }
          if ("onReceivePhoneCall" === t) {
            h.emitWidgetEventType(p.c, t)
          }
          if ("onPhoneCallEnd" === t) {
            var n
            var p$a$DIAL_OUT_CALL_END = p.a.DIAL_OUT_CALL_END
            if ("incomingCall" === (null === (n = t$data$data[t]) || undefined === n ? undefined : n.callType)) {
              p$a$DIAL_OUT_CALL_END = p.a.INCOMING_CALL_REFUSE_END
            }
            h.emitWidgetEventType(p.c, t, p$a$DIAL_OUT_CALL_END)
          }
          var a
          var s
          if ("onReceiveSms" === t) {
            h.emitWidgetEventType(f.a, t, null === (a = t$data$data[t]) || undefined === a ? undefined : a.receiveSmsContent, null === (s = t$data$data[t]) || undefined === s ? undefined : s.receiveSmsNumber)
          }
        })
      }
    })
    return e
  }
  a.a(n, [{
    key: "emitToParent",
    value: function (e, t) {
      var n = window
      if (l.e() && window.parent) {
        n = window.parent
      }
      n.postMessage({
        type: "EMULATOR",
        data: r.a({}, e, t)
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
  (l.e() ? window.parent : window).postMessage({
    type: "TO_EMULATOR",
    data: e
  }, "*")
}
m._instance = undefined
export default m
