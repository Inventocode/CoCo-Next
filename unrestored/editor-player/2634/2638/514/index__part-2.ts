/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：514__part-2
 */

"use strict"

import { M } from "./index__part-1"
import * as /* [auto-meaningful-name] */Module_28 from /* 28 */"../../../../shared/1571/2636/28/index"
import * as /* [auto-meaningful-name] */Module_59 from /* 59 */"../../../../shared/1571/2636/59/index"
import * as /* [auto-meaningful-name] */Module_58 from /* 58 */"../../../../shared/1571/2636/58/index"
import * as /* [auto-meaningful-name] */Module_39 from /* 39 */"../../../../shared/1571/2636/39"
import * as /* [auto-meaningful-name] */Module_27 from /* 27 */"../../../../shared/1571/2636/27"
import * as /* [auto-meaningful-name] */Src_shared_widget_custom_load from /* 34 */"../../../../../src/shared/widget/custom/load"
var i
var r
import * as /* [auto-meaningful-name] */Module_72 from /* 72 */"../../../../shared/1571/2636/48/72"
import * as /* [auto-meaningful-name] */Module_48 from /* 48 */"../../../../shared/1571/2636/48/index"
import * as /* [auto-meaningful-name] */Module_219 from /* 219 */"../../../../shared/1571/2636/37/219/index"
import * as /* [auto-meaningful-name] */Module_70 from /* 70 */"../../../../shared/1571/2636/738/70"
var L = function (t) {
  Module_58.a(n, t)
  var e = Module_59.a(n)
  function n(t) {
    var o
    Module_27.a(this, n);
    (o = e.call(this, t)).phoneNumber = undefined
    o.oldState = ""
    o.isIncomingCall = false
    o.phoneNumber = t.phoneNumber
    M.onCall(function (t) {
      switch (t) {
        case Module_70.b.RINGING:
          o.emit("onReceivePhoneCall")
          break
        case Module_70.b.OFFHOOK:
          if (o.oldState === Module_70.b.RINGING) {
            o.emit("onConnectReceivePhoneCall")
            o.isIncomingCall = true
          } else {
            if (o.__widgetId === r) {
              o.emit("onPhoneCallStart")
              o.isIncomingCall = false
            }
          }
          break
        case "IDLE":
          if (o.oldState === Module_70.b.RINGING) {
            o.emit("onPhoneCallEnd", Module_70.a.INCOMING_CALL_REFUSE_END)
          } else {
            if (o.isIncomingCall && o.oldState === Module_70.b.OFFHOOK) {
              o.emit("onPhoneCallEnd", Module_70.a.INCOMING_CALL_CONNECT_END)
            } else {
              if (!(o.isIncomingCall || o.oldState !== Module_70.b.OFFHOOK)) {
                o.emit("onPhoneCallEnd", Module_70.a.DIAL_OUT_CALL_END)
                i = false
              }
            }
          }
      }
      o.oldState = t
    })
    return o
  }
  Module_39.a(n, [
    {
      key: "callNumber",
      value: function () {
        if (this.phoneNumber) {
          if (Module_28.g()) {
            if (Module_48.a().getState().emulatorPhoneInfo.callingPageVisible) {
              this.widgetWarn("callNumberRepeat")
            } else {
              Module_48.a().dispatch(Module_72.s({
                phoneDialWidgetId: this.__widgetId,
                callingPageVisible: true,
                phoneNumber: this.phoneNumber,
                callType: "dialOutCall",
                callStatus: Module_70.b.RINGING
              }))
              this.emit("onPhoneCallStart")
              Module_219.b({
                phoneCallInfo: {
                  callType: "dialOutCall",
                  dialOutPhoneNumber: this.phoneNumber,
                  callStatus: Module_70.b.RINGING
                }
              })
            }
          } else {
            if (!Module_28.d()) {
              r = this.__widgetId
              M.callNumber(this.phoneNumber)
            }
            if (!i) {
              r = this.__widgetId
              M.callNumber(this.phoneNumber)
              i = true
            }
          }
        } else {
          this.widgetWarn("phoneNumberNotEmpty")
        }
      }
    }, {
      key: "dialNumber",
      value: function () {
        if (Module_28.g()) {
          if (Module_48.a().getState().emulatorPhoneInfo.dialPageVisible) {
            this.widgetWarn("dialNumberRepeat")
          }
          return void Module_48.a().dispatch(Module_72.s({
            phoneDialWidgetId: this.__widgetId,
            dialPageVisible: true,
            phoneNumber: this.phoneNumber
          }))
        }
        r = this.__widgetId
        M.dialNumber(this.phoneNumber)
      }
    }
  ])
  return n
}(Src_shared_widget_custom_load.c)
export { L }
