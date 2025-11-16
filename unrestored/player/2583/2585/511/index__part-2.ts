/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：511__part-2
 */

"use strict"

import { "511__part-1__M" as M } from "./index__part-1"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_28_index from "../../../../shared/1531/2584/28/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_58_index from "../../../../shared/1531/2584/58/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_57_index from "../../../../shared/1531/2584/57/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_40 from "../../../../shared/1531/2584/40"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_27 from "../../../../shared/1531/2584/27"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_widget_custom_load from "../../../../../src/shared/widget/custom/load"
var i
var r
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_48_72 from "../../../../shared/1531/2584/48/72"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_48_index from "../../../../shared/1531/2584/48/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_38_217_index from "../../../../shared/1531/2584/38/217/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_48_70 from "../../../../shared/1531/2584/48/70"
var D = function (t) {
  $$_$$_$$_$$_shared_1531_2584_57_index.a(n, t)
  var e = $$_$$_$$_$$_shared_1531_2584_58_index.a(n)
  function n(t) {
    var o
    $$_$$_$$_$$_shared_1531_2584_27.a(this, n);
    (o = e.call(this, t)).phoneNumber = undefined
    o.oldState = ""
    o.isIncomingCall = false
    o.phoneNumber = t.phoneNumber
    M.onCall(function (t) {
      switch (t) {
        case $$_$$_$$_$$_shared_1531_2584_48_70.b.RINGING:
          o.emit("onReceivePhoneCall")
          break
        case $$_$$_$$_$$_shared_1531_2584_48_70.b.OFFHOOK:
          if (o.oldState === $$_$$_$$_$$_shared_1531_2584_48_70.b.RINGING) {
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
          if (o.oldState === $$_$$_$$_$$_shared_1531_2584_48_70.b.RINGING) {
            o.emit("onPhoneCallEnd", $$_$$_$$_$$_shared_1531_2584_48_70.a.INCOMING_CALL_REFUSE_END)
          } else {
            if (o.isIncomingCall && o.oldState === $$_$$_$$_$$_shared_1531_2584_48_70.b.OFFHOOK) {
              o.emit("onPhoneCallEnd", $$_$$_$$_$$_shared_1531_2584_48_70.a.INCOMING_CALL_CONNECT_END)
            } else {
              if (!(o.isIncomingCall || o.oldState !== $$_$$_$$_$$_shared_1531_2584_48_70.b.OFFHOOK)) {
                o.emit("onPhoneCallEnd", $$_$$_$$_$$_shared_1531_2584_48_70.a.DIAL_OUT_CALL_END)
                i = false
              }
            }
          }
      }
      o.oldState = t
    })
    return o
  }
  $$_$$_$$_$$_shared_1531_2584_40.a(n, [{
    key: "callNumber",
    value: function () {
      if (this.phoneNumber) {
        if ($$_$$_$$_$$_shared_1531_2584_28_index.g()) {
          if ($$_$$_$$_$$_shared_1531_2584_48_index.a().getState().emulatorPhoneInfo.callingPageVisible) {
            this.widgetWarn("callNumberRepeat")
          } else {
            $$_$$_$$_$$_shared_1531_2584_48_index.a().dispatch($$_$$_$$_$$_shared_1531_2584_48_72.s({
              phoneDialWidgetId: this.__widgetId,
              callingPageVisible: true,
              phoneNumber: this.phoneNumber,
              callType: "dialOutCall",
              callStatus: $$_$$_$$_$$_shared_1531_2584_48_70.b.RINGING
            }))
            this.emit("onPhoneCallStart")
            $$_$$_$$_$$_shared_1531_2584_38_217_index.b({
              phoneCallInfo: {
                callType: "dialOutCall",
                dialOutPhoneNumber: this.phoneNumber,
                callStatus: $$_$$_$$_$$_shared_1531_2584_48_70.b.RINGING
              }
            })
          }
        } else {
          if (!$$_$$_$$_$$_shared_1531_2584_28_index.d()) {
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
      if ($$_$$_$$_$$_shared_1531_2584_28_index.g()) {
        if ($$_$$_$$_$$_shared_1531_2584_48_index.a().getState().emulatorPhoneInfo.dialPageVisible) {
          this.widgetWarn("dialNumberRepeat")
        }
        return void $$_$$_$$_$$_shared_1531_2584_48_index.a().dispatch($$_$$_$$_$$_shared_1531_2584_48_72.s({
          phoneDialWidgetId: this.__widgetId,
          dialPageVisible: true,
          phoneNumber: this.phoneNumber
        }))
      }
      r = this.__widgetId
      M.dialNumber(this.phoneNumber)
    }
  }])
  return n
}($$_$$_$$_$$_$$_src_shared_widget_custom_load.c)
export { D as "511__part-2__D" }
