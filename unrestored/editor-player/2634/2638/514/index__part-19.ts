/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：514__part-19
 */

"use strict"

import be from "./71"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_13_index from "../../../../shared/1571/2636/13/index"
var ce
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_20_index from "../../../../shared/1571/2636/20/index"
import /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_8 from "../../../../shared/1571/2636/8"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_738_70 from "../../../../shared/1571/2636/738/70"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_37_219_index from "../../../../shared/1571/2636/37/219/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_48_72 from "../../../../shared/1571/2636/48/72"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_16_index from "../../../../shared/1571/2636/16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_10_index from "../../../../shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_710_index from "../../../../shared/1571/2636/710/index"
var ye = React1.memo(function () {
  var t = $$_$$_$$_$$_shared_1571_2636_16_index.d()
  var /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_710_index$a$formatMessage = $$_$$_$$_$$_shared_1571_2636_710_index.a().formatMessage
  var n = $$_$$_$$_$$_shared_1571_2636_16_index.e(function (t) {
    return t.emulatorPhoneInfo
  })
  var r = React1.useState(0)
  var i = $$_$$_$$_$$_shared_1571_2636_10_index.a(r, 2)
  var o = i[0]
  var a = i[1]
  React1.useEffect(function () {
    if (ce) {
      clearInterval(ce)
    }
    if (n.callingPageVisible && n.callStatus === $$_$$_$$_$$_shared_1571_2636_738_70.b.OFFHOOK) {
      var t = 0
      ce = setInterval(function () {
        t++
        a(t)
      }, 1e3)
    }
    return function () {
      if (ce) {
        clearInterval(ce)
      }
      a(0)
    }
  }, [n.callingPageVisible, n.callStatus])
  var s = function (t) {
    var e = Math.floor(t % 86400 % 3600 / 60)
    var n = Math.floor(t % 86400 % 3600 % 60)
    return "".concat(e < 10 ? "0" : "").concat(e, " : ").concat(n < 10 ? "0" : "").concat(n)
  }
  var u = function () {
    t($$_$$_$$_$$_shared_1571_2636_48_72.s({
      callingPageVisible: false,
      callStatus: $$_$$_$$_$$_shared_1571_2636_738_70.b.IDEL
    }))
    $$_$$_$$_$$_shared_1571_2636_20_index.emitWidgetEvent($$_$$_$$_$$_shared_1571_2636_738_70.c, "onPhoneCallEnd", n.phoneDialWidgetId, $$_$$_$$_$$_shared_1571_2636_738_70.a.DIAL_OUT_CALL_END)
    $$_$$_$$_$$_shared_1571_2636_37_219_index.b({
      phoneCallInfo: {
        callType: "dialOutCall",
        callStatus: $$_$$_$$_$$_shared_1571_2636_738_70.b.IDEL
      }
    })
  }
  var l = function () {
    $$_$$_$$_$$_shared_1571_2636_20_index.emitWidgetEventType($$_$$_$$_$$_shared_1571_2636_738_70.c, "onPhoneCallEnd", n.callStatus === $$_$$_$$_$$_shared_1571_2636_738_70.b.RINGING ? $$_$$_$$_$$_shared_1571_2636_738_70.a.INCOMING_CALL_REFUSE_END : $$_$$_$$_$$_shared_1571_2636_738_70.a.INCOMING_CALL_CONNECT_END)
    t($$_$$_$$_$$_shared_1571_2636_48_72.s({
      callingPageVisible: false,
      callStatus: $$_$$_$$_$$_shared_1571_2636_738_70.b.IDEL
    }))
    $$_$$_$$_$$_shared_1571_2636_37_219_index.b({
      phoneCallInfo: {
        callStatus: $$_$$_$$_$$_shared_1571_2636_738_70.b.IDEL
      }
    })
  }
  var d = function () {
    t($$_$$_$$_$$_shared_1571_2636_48_72.s({
      callStatus: $$_$$_$$_$$_shared_1571_2636_738_70.b.OFFHOOK
    }))
    $$_$$_$$_$$_shared_1571_2636_20_index.emitWidgetEventType($$_$$_$$_$$_shared_1571_2636_738_70.c, "onConnectReceivePhoneCall")
    $$_$$_$$_$$_shared_1571_2636_37_219_index.b({
      phoneCallInfo: {
        callStatus: $$_$$_$$_$$_shared_1571_2636_738_70.b.OFFHOOK
      }
    })
  }
  return React.createElement("div", {
    className: $$_$$_$$_$$_shared_1571_2636_8(be.callingBox, !n.callingPageVisible && be.callingBoxHide)
  }, "dialOutCall" === n.callType && React.createElement(React.Fragment, null, React.createElement("div", {
    className: be.phoneNumber
  }, n.phoneNumber), n.callStatus === $$_$$_$$_$$_shared_1571_2636_738_70.b.RINGING && React.createElement("div", {
    className: be.phoneStatus
  }, $$_$$_$$_$$_shared_1571_2636_710_index$a$formatMessage({
    id: "emulator.onRinging"
  })), n.callStatus === $$_$$_$$_$$_shared_1571_2636_738_70.b.OFFHOOK && React.createElement("div", {
    className: be.phoneStatus
  }, s(o)), React.createElement("div", {
    className: $$_$$_$$_$$_shared_1571_2636_8(be.callBtnBox, be.flexCC)
  }, React.createElement("div", {
    className: be.callBtnItemBox,
    onClick: u
  }, React.createElement("div", {
    className: $$_$$_$$_$$_shared_1571_2636_8(be.callBtnItem, be.callEnd)
  }, React.createElement($$_$$_$$_$$_shared_1571_2636_13_index.j, {
    type: "icon-phone-call-disconnect"
  })), React.createElement("span", {
    className: be.callBtnText
  }, $$_$$_$$_$$_shared_1571_2636_710_index$a$formatMessage({
    id: "emulator.callEnd"
  }))))), "incomingCall" === n.callType && React.createElement(React.Fragment, null, React.createElement("div", {
    className: be.phoneNumber
  }, n.phoneNumber), n.callStatus === $$_$$_$$_$$_shared_1571_2636_738_70.b.RINGING && React.createElement("div", {
    className: be.phoneStatus
  }, $$_$$_$$_$$_shared_1571_2636_710_index$a$formatMessage({
    id: "emulator.phoneNumber"
  })), n.callStatus === $$_$$_$$_$$_shared_1571_2636_738_70.b.OFFHOOK && React.createElement("div", {
    className: be.phoneStatus
  }, s(o)), React.createElement("div", {
    className: $$_$$_$$_$$_shared_1571_2636_8(be.callBtnBox, n.callStatus === $$_$$_$$_$$_shared_1571_2636_738_70.b.RINGING ? be.flexSC : be.flexCC)
  }, React.createElement("div", {
    className: be.callBtnItemBox,
    onClick: l
  }, React.createElement("div", {
    className: $$_$$_$$_$$_shared_1571_2636_8(be.callBtnItem, be.callEnd)
  }, React.createElement($$_$$_$$_$$_shared_1571_2636_13_index.j, {
    type: "icon-phone-call-disconnect"
  })), React.createElement("span", {
    className: be.callBtnText
  }, n.callStatus === $$_$$_$$_$$_shared_1571_2636_738_70.b.RINGING ? $$_$$_$$_$$_shared_1571_2636_710_index$a$formatMessage({
    id: "emulator.callRefuse"
  }) : $$_$$_$$_$$_shared_1571_2636_710_index$a$formatMessage({
    id: "emulator.callEnd"
  }))), n.callStatus === $$_$$_$$_$$_shared_1571_2636_738_70.b.RINGING && React.createElement("div", {
    className: be.callBtnItemBox,
    onClick: d
  }, React.createElement("div", {
    className: $$_$$_$$_$$_shared_1571_2636_8(be.callBtnItem, be.callConnect)
  }, React.createElement($$_$$_$$_$$_shared_1571_2636_13_index.j, {
    type: "icon-phone-call-dial"
  })), React.createElement("span", {
    className: be.callBtnText
  }, $$_$$_$$_$$_shared_1571_2636_710_index$a$formatMessage({
    id: "emulator.callConnect"
  }))))))
})
export { ye }
