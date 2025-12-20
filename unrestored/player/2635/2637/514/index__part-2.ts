/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：514__part-2
 */

"use strict"

import { M } from "./index__part-1"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_28_index from "../../../../shared/1571/2636/28/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_59_index from "../../../../shared/1571/2636/59/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_58_index from "../../../../shared/1571/2636/58/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_39 from "../../../../shared/1571/2636/39"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_27 from "../../../../shared/1571/2636/27"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_widget_custom_load from "../../../../../src/shared/widget/custom/load"
var i
var r
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_48_72 from "../../../../shared/1571/2636/48/72"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_48_index from "../../../../shared/1571/2636/48/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_37_219_index from "../../../../shared/1571/2636/37/219/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_738_70 from "../../../../shared/1571/2636/738/70"
var D = function (t) {
  $$_$$_$$_$$_shared_1571_2636_58_index.a(n, t)
  var e = $$_$$_$$_$$_shared_1571_2636_59_index.a(n)
  function n(t) {
    var o
    $$_$$_$$_$$_shared_1571_2636_27.a(this, n);
    (o = e.call(this, t)).phoneNumber = undefined
    o.oldState = ""
    o.isIncomingCall = false
    o.phoneNumber = t.phoneNumber
    M.onCall(function (t) {
      switch (t) {
        case $$_$$_$$_$$_shared_1571_2636_738_70.b.RINGING:
          o.emit("onReceivePhoneCall")
          break
        case $$_$$_$$_$$_shared_1571_2636_738_70.b.OFFHOOK:
          if (o.oldState === $$_$$_$$_$$_shared_1571_2636_738_70.b.RINGING) {
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
          if (o.oldState === $$_$$_$$_$$_shared_1571_2636_738_70.b.RINGING) {
            o.emit("onPhoneCallEnd", $$_$$_$$_$$_shared_1571_2636_738_70.a.INCOMING_CALL_REFUSE_END)
          } else {
            if (o.isIncomingCall && o.oldState === $$_$$_$$_$$_shared_1571_2636_738_70.b.OFFHOOK) {
              o.emit("onPhoneCallEnd", $$_$$_$$_$$_shared_1571_2636_738_70.a.INCOMING_CALL_CONNECT_END)
            } else {
              if (!(o.isIncomingCall || o.oldState !== $$_$$_$$_$$_shared_1571_2636_738_70.b.OFFHOOK)) {
                o.emit("onPhoneCallEnd", $$_$$_$$_$$_shared_1571_2636_738_70.a.DIAL_OUT_CALL_END)
                i = false
              }
            }
          }
      }
      o.oldState = t
    })
    return o
  }
  $$_$$_$$_$$_shared_1571_2636_39.a(n, [
    {
      key: "callNumber",
      value: function () {
        if (this.phoneNumber) {
          if ($$_$$_$$_$$_shared_1571_2636_28_index.g()) {
            if ($$_$$_$$_$$_shared_1571_2636_48_index.a().getState().emulatorPhoneInfo.callingPageVisible) {
              this.widgetWarn("callNumberRepeat")
            } else {
              $$_$$_$$_$$_shared_1571_2636_48_index.a().dispatch($$_$$_$$_$$_shared_1571_2636_48_72.s({
                phoneDialWidgetId: this.__widgetId,
                callingPageVisible: true,
                phoneNumber: this.phoneNumber,
                callType: "dialOutCall",
                callStatus: $$_$$_$$_$$_shared_1571_2636_738_70.b.RINGING
              }))
              this.emit("onPhoneCallStart")
              $$_$$_$$_$$_shared_1571_2636_37_219_index.b({
                phoneCallInfo: {
                  callType: "dialOutCall",
                  dialOutPhoneNumber: this.phoneNumber,
                  callStatus: $$_$$_$$_$$_shared_1571_2636_738_70.b.RINGING
                }
              })
            }
          } else {
            if (!$$_$$_$$_$$_shared_1571_2636_28_index.d()) {
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
        if ($$_$$_$$_$$_shared_1571_2636_28_index.g()) {
          if ($$_$$_$$_$$_shared_1571_2636_48_index.a().getState().emulatorPhoneInfo.dialPageVisible) {
            this.widgetWarn("dialNumberRepeat")
          }
          return void $$_$$_$$_$$_shared_1571_2636_48_index.a().dispatch($$_$$_$$_$$_shared_1571_2636_48_72.s({
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
}($$_$$_$$_$$_$$_src_shared_widget_custom_load.c)
export { D }
