/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：738__part-4
 */

"use strict"

import { h, g, _ } from "./index__part-0"
import { P } from "./index__part-1"
import { V } from "./index__part-2"
import { q } from "./index__part-3"
import * as /* [auto-meaningful-name] */$$_710 from "../710"
import * as /* [auto-meaningful-name] */$$_13_index from "../13/index"
import * as /* [auto-meaningful-name] */$$_10_index from "../10/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_ui_language from "../../../../../src/shared/ui/language"
import * as /* [auto-meaningful-name] */$$_2681_index from "../2681/index"
import N from "../8"
import * as u from "./70"
import { useDispatch, useSelector } from "react-redux"
import /* [auto-meaningful-name] */React from "react"
import { useState, useRef, useEffect } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_302 from "./302"
import * as /* [auto-meaningful-name] */$_113 from "./113"
import /* [auto-meaningful-name] */$_1131 from "./113"
var J = function () {
  var e = useDispatch()
  var /* [auto-meaningful-name] */$$_710$a$formatMessage = $$_710.a().formatMessage
  var n = useSelector(function (e) {
    return e.phoneCallInfo
  })
  return React.createElement("div", {
    className: $_1131.dialCall
  }, React.createElement("div", {
    className: $_1131.deviceBox
  }, n.callStatus === u.b.IDEL && React.createElement("div", {
    className: $_1131.callStatus
  }, React.createElement($$_13_index.j, {
    type: "icon-phone-call-idle",
    className: $_1131.noCallIcon
  }), React.createElement("div", null, $$_710$a$formatMessage({
    id: "emulator.noCall"
  }))), n.callStatus !== u.b.IDEL && React.createElement("div", {
    className: $_1131.callStatus
  }, React.createElement("div", {
    className: $_1131.phoneNumber
  }, n.dialOutPhoneNumber), n.callStatus === u.b.RINGING && React.createElement("div", null, $$_710$a$formatMessage({
    id: "emulator.incomingNumber"
  })), n.callStatus === u.b.OFFHOOK && React.createElement("div", null, $$_710$a$formatMessage({
    id: "emulator.onCalling"
  })))), React.createElement("div", {
    className: N($_1131.callBtnBox, $_1131.flexSC)
  }, React.createElement("div", {
    className: "dialOutCall" === n.callType && n.callStatus !== u.b.IDEL ? $_1131.active : ""
  }, React.createElement("div", {
    id: "emulatorDialCallEnd",
    className: N($_1131.callBtnItem, $_1131.callEnd),
    onClick: function () {
      if ("dialOutCall" === n.callType && n.callStatus !== u.b.IDEL) {
        $_302.press("emulatorDialCallEnd")
        e(h({
          onPhoneCallEnd: {
            callingPageVisible: false,
            callType: "dialOutCall",
            callStatus: u.b.IDEL
          }
        }))
        e(_({
          callStatus: u.b.IDEL
        }))
      }
    }
  }, React.createElement($$_13_index.j, {
    type: "icon-phone-call-disconnect"
  })), React.createElement("span", {
    className: $_1131.callBtnText
  }, $$_710$a$formatMessage({
    id: "emulator.callEndByOtherSide"
  }))), React.createElement("div", {
    className: "dialOutCall" === n.callType && n.callStatus === u.b.RINGING ? $_1131.active : ""
  }, React.createElement("div", {
    id: "emulatorDialCallConnect",
    className: N($_1131.callBtnItem, $_1131.callConnect),
    onClick: function () {
      if ("dialOutCall" === n.callType && n.callStatus === u.b.RINGING) {
        $_302.press("emulatorDialCallConnect")
        e(h({
          onPhoneCallConnect: {
            callType: "dialOutCall",
            callStatus: u.b.OFFHOOK
          }
        }))
        e(_({
          callStatus: u.b.OFFHOOK
        }))
      }
    }
  }, React.createElement($$_13_index.j, {
    type: "icon-phone-call-dial"
  })), React.createElement("span", {
    className: $_1131.callBtnText
  }, $$_710$a$formatMessage({
    id: "emulator.callConnectByOtherSide"
  })))))
}
var $ = function () {
  var e = useDispatch()
  var /* [auto-meaningful-name] */$$_710$a$formatMessage = $$_710.a().formatMessage
  var n = useSelector(function (e) {
    return e.phoneCallInfo
  })
  var a = useState(n.incomingPhoneNumber)
  var s = $$_10_index.a(a, 2)
  var c = s[0]
  var l = s[1]
  return React.createElement("div", {
    className: $_1131.receiveCall
  }, React.createElement("div", {
    className: $_1131.deviceBox
  }, React.createElement("div", {
    className: $_1131.callStatus
  }, React.createElement("div", {
    className: $_1131.phoneNumber
  }, c), n.callStatus === u.b.IDEL && React.createElement("div", null, $$_710$a$formatMessage({
    id: "emulator.callNumber"
  })), n.callStatus === u.b.RINGING && React.createElement("div", null, $$_710$a$formatMessage({
    id: "emulator.onRinging"
  })), n.callStatus === u.b.OFFHOOK && React.createElement("div", null, $$_710$a$formatMessage({
    id: "emulator.onCalling"
  })))), React.createElement("div", {
    className: $_1131.phoneNumberBox
  }, React.createElement("div", {
    className: $_1131.phoneNumber
  }, $$_710$a$formatMessage({
    id: "emulator.incomingNumber"
  })), React.createElement($$_13_index.k, {
    warning: !c,
    defaultValue: c,
    placeholder: $$_710$a$formatMessage({
      id: "emulator.incomingNumberPlaceHolder"
    }),
    onChange: function (e) {
      l(e)
    }
  }), React.createElement("div", {
    className: $_1131.warning
  }, !c && React.createElement("span", null, $$_710$a$formatMessage({
    id: "emulator.incomingNumberPlaceHolder"
  })))), React.createElement("div", {
    className: N($_1131.callBtnBox, $_1131.flexSC)
  }, React.createElement("div", {
    className: "incomingCall" === n.callType && n.callStatus !== u.b.IDEL ? $_1131.active : ""
  }, React.createElement("div", {
    id: "emulatorReceiveCallEnd",
    className: N($_1131.callBtnItem, $_1131.callEnd),
    onClick: function () {
      if ("incomingCall" === n.callType && n.callStatus !== u.b.IDEL) {
        $_302.press("emulatorReceiveCallEnd")
        e(h({
          onPhoneCallEnd: {
            callingPageVisible: false,
            callType: "incomingCall",
            callStatus: u.b.IDEL
          }
        }))
        e(_({
          callStatus: u.b.IDEL
        }))
      }
    }
  }, React.createElement($$_13_index.j, {
    type: "icon-phone-call-disconnect"
  })), React.createElement("span", {
    className: $_1131.callBtnText
  }, $$_710$a$formatMessage({
    id: "emulator.callEndByOtherSide"
  }))), React.createElement("div", {
    className: n.callStatus === u.b.IDEL && c ? $_1131.active : ""
  }, React.createElement("div", {
    id: "emulatorReceiveCallConnect",
    className: N($_1131.callBtnItem, $_1131.callConnect),
    onClick: function () {
      if (n.callStatus === u.b.IDEL && c) {
        $_302.press("emulatorReceiveCallConnect")
        e(h({
          onReceivePhoneCall: {
            callingPageVisible: true,
            phoneNumber: c,
            callType: "incomingCall",
            callStatus: u.b.RINGING
          }
        }))
        e(_({
          incomingPhoneNumber: c,
          callType: "incomingCall",
          callStatus: u.b.RINGING
        }))
      }
    }
  }, React.createElement($$_13_index.j, {
    type: "icon-phone-call-dial"
  })), React.createElement("span", {
    className: $_1131.callBtnText
  }, $$_710$a$formatMessage({
    id: "emulator.callByOtherSide"
  })))))
}
var ee = function () {
  var e = useDispatch()
  var /* [auto-meaningful-name] */$$_710$a$formatMessage = $$_710.a().formatMessage
  var n = useState("123 4567 8901")
  var a = $$_10_index.a(n, 2)
  var s = a[0]
  var c = a[1]
  var l = useState($$_710$a$formatMessage({
    id: "emulator.smsContentDefault"
  }))
  var u = $$_10_index.a(l, 2)
  var d = u[0]
  var p = u[1]
  return React.createElement("div", {
    className: $_1131.ReceiveSms
  }, React.createElement("div", {
    className: $_1131.phoneNumberBox
  }, React.createElement("div", {
    className: $_1131.phoneNumber
  }, $$_710$a$formatMessage({
    id: "emulator.smsNumber"
  })), React.createElement($$_13_index.k, {
    defaultValue: s,
    warning: !s,
    placeholder: $$_710$a$formatMessage({
      id: "emulator.smsNumberPlaceHolder"
    }),
    onChange: function (e) {
      c(e)
    },
    maxLength: 20
  }), React.createElement("div", {
    className: $_1131.warning
  }, !s && React.createElement("span", null, $$_710$a$formatMessage({
    id: "emulator.smsNumberPlaceHolder"
  })))), React.createElement("div", {
    className: $_1131.phoneNumberBox
  }, React.createElement("div", {
    className: $_1131.phoneNumber
  }, $$_710$a$formatMessage({
    id: "emulator.smsContent"
  })), React.createElement($$_13_index.A, {
    defaultValue: d,
    rows: 10,
    maxLength: 200,
    placeholder: $$_710$a$formatMessage({
      id: "emulator.smsContentPlaceHolder"
    }),
    onChange: function (e) {
      p(e.target.value)
    }
  }), React.createElement("div", {
    className: $_1131.textAreaWarning
  }, !d && React.createElement("span", null, $$_710$a$formatMessage({
    id: "emulator.smsContentPlaceHolder"
  })))), React.createElement("div", {
    id: "emulatorReceiveSms",
    onClick: function () {
      if (s && d) {
        $_302.press("emulatorReceiveSms")
        e(h({
          onReceiveSms: {
            receiveSmsPageVisible: true,
            receiveSmsNumber: s,
            receiveSmsContent: d
          }
        }))
      }
    },
    className: N($_1131.receiveSmsBtn, (!s || !d) && $_1131.disabled)
  }, $$_710$a$formatMessage({
    id: "emulator.receiveSms"
  })))
}
var te = ["SHAKE", "ROTATION", "POSITION"]
var ne = function (e) {
  var /* [auto-meaningful-name] */e$messageWindow = e.messageWindow
  var n = useDispatch()
  var a = useSelector(function (e) {
    return e.visiblePanel
  })
  var s = useSelector(function (e) {
    return e.language
  })
  var c = useRef(null)
  useEffect(function () {
    if (e$messageWindow) {
      n(function (e) {
        return {
          type: "SET_EMIT_EVENT",
          payload: e
        }
      }(e$messageWindow))
    }
  }, [n, e$messageWindow])
  useEffect(function () {
    var e = function (e) {
      var /* [auto-meaningful-name] */e$data = e.data
      var /* [auto-meaningful-name] */e$data$type = e$data.type
      var /* [auto-meaningful-name] */e$data$data = e$data.data
      if ("EMULATOR" === e$data$type) {
        Object.keys(e$data$data).forEach(function (e) {
          !function (e, t) {
            switch (e) {
              case "ready":
                n({
                  type: "PUSH_ALL_DATA",
                  payload: undefined
                })
            }
          }(e, e$data$data[e])
        })
      }
      if ("TO_EMULATOR" === e$data$type) {
        Object.keys(e$data$data).forEach(function (e) {
          if ("playing" === e) {
            n(_({
              callStatus: u.b.IDEL
            }))
          }
          if ("phoneCallInfo" === e) {
            n(_(e$data$data[e]))
          }
        })
      }
    }
    var t = function (e) {
      n(g(""))
      n(h({
        visiblePanel: ""
      }))
    }
    window.addEventListener("click", t)
    window.addEventListener("message", e)
    return function () {
      window.removeEventListener("message", e)
      window.removeEventListener("click", t)
    }
  }, [n])
  return React.createElement($$_2681_index.b, {
    locale: s,
    messages: $$_$$_$$_$$_$$_src_shared_ui_language.e[s] || $$_$$_$$_$$_$$_src_shared_ui_language.e[$$_$$_$$_$$_$$_src_shared_ui_language.b]
  }, React.createElement("div", {
    className: "emulator-wrapper",
    ref: c,
    onClick: function (e) {
      if (e.target !== c.current) {
        e.stopPropagation()
      }
    }
  }, React.createElement(q, null), React.createElement("div", {
    className: N("emulator-panel-wrapper", a && "visible")
  }, React.createElement("div", {
    className: "emulator-contentWrapper"
  }, a && te.includes(a) && React.createElement(P, null), React.createElement(V, null), "DIAL_CALL" === a && React.createElement(J, null), "RECEIVE_CALL" === a && React.createElement($, null), "RECEIVE_SMS" === a && React.createElement(ee, null)))))
}
export { ne }
