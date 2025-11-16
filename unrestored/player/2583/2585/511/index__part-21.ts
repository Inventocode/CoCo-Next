/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：511__part-21
 */

"use strict"

import { "511__part-18__ve" as ve } from "./index__part-18"
import { "511__part-19__ye" as ye } from "./index__part-19"
import { "511__part-20__Oe" as Oe } from "./index__part-20"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_702 from "../../../../shared/1531/2584/702"
import be from "./71"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_13_index from "../../../../shared/1531/2584/13/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_2628_index from "../../../../shared/1531/2584/2628/index"
var de
var le
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_ui_language from "../../../../../src/shared/ui/language"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_21_index from "../../../../shared/1531/2584/21/index"
import /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_8 from "../../../../shared/1531/2584/8"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_48_72 from "../../../../shared/1531/2584/48/72"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_16_index from "../../../../shared/1531/2584/16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_10_index from "../../../../shared/1531/2584/10/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_678_360 from "../../../../shared/1531/2584/678/360"
var Ae = _React.memo(function () {
  var t = $$_$$_$$_$$_shared_1531_2584_16_index.d()
  var /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_702$a$formatMessage = $$_$$_$$_$$_shared_1531_2584_702.a().formatMessage
  var n = $$_$$_$$_$$_shared_1531_2584_16_index.e(function (t) {
    return t.emulatorPhoneInfo
  })
  var r = _React.useState(n.sendSmsNumber)
  var i = $$_$$_$$_$$_shared_1531_2584_10_index.a(r, 2)
  var o = i[0]
  var a = i[1]
  var s = _React.useState(n.sendSmsContent)
  var u = $$_$$_$$_$$_shared_1531_2584_10_index.a(s, 2)
  var l = u[0]
  var d = u[1]
  var m = _React.useState([])
  var b = $$_$$_$$_$$_shared_1531_2584_10_index.a(m, 2)
  var g = b[0]
  var v = b[1]
  var _ = _React.useState(1)
  var y = $$_$$_$$_$$_shared_1531_2584_10_index.a(_, 2)
  var w = y[0]
  var E = y[1]
  var O = _React.useRef(null)
  var T = _React.useRef(null)
  _React.useEffect(function () {
    if (n.sendSmsPageVisible) {
      a(n.sendSmsNumber)
      d(n.sendSmsContent)
      v([])
    }
  }, [n.sendSmsPageVisible, n.sendSmsNumber, n.sendSmsContent])
  return React.createElement("div", {
    className: $$_$$_$$_$$_shared_1531_2584_8(be.sendSmsBox, !n.sendSmsPageVisible && be.sendSmsBoxHide)
  }, React.createElement("div", {
    className: be.backBox
  }, React.createElement("div", {
    onClick: function () {
      t($$_$$_$$_$$_shared_1531_2584_48_72.s({
        sendSmsPageVisible: false
      }))
    }
  }, React.createElement($$_$$_$$_$$_shared_1531_2584_13_index.j, {
    type: "icon-phone-nav-back"
  })), React.createElement("span", {
    className: be.receiveUser
  }, $$_$$_$$_$$_shared_1531_2584_702$a$formatMessage({
    id: "emulator.smsReceiver"
  }))), React.createElement("div", {
    className: be.numberBox
  }, React.createElement($$_$$_$$_$$_shared_1531_2584_13_index.k, {
    className: be.inputNumber,
    defaultValue: o,
    placeholder: $$_$$_$$_$$_shared_1531_2584_702$a$formatMessage({
      id: "emulator.smsSendNumberPlaceHolder"
    }),
    onChange: function (t) {
      a(t)
    },
    maxLength: 20
  })), React.createElement("div", {
    className: be.smsBox
  }, g.map(function (t, e) {
    return React.createElement("div", {
      key: e,
      className: be.smsItem
    }, t)
  }), React.createElement("div", {
    className: be.scrollToView,
    ref: T
  })), React.createElement("div", {
    className: be.contentBox
  }, React.createElement($$_$$_$$_$$_shared_1531_2584_13_index.A, {
    ref: O,
    rows: w,
    maxLength: 200,
    className: be.contentTextArea,
    defaultValue: l,
    placeholder: $$_$$_$$_$$_shared_1531_2584_702$a$formatMessage({
      id: "emulator.smsContentPlaceHolder"
    }),
    onChange: function (t) {
      d(t.target.value)
      if (O.current) {
        E(Math.min(O.current.getRowCount(), 7))
      }
    }
  }), React.createElement("div", {
    onClick: function () {
      if (o && l) {
        v(g.concat(l))
        $$_$$_$$_$$_shared_1531_2584_21_index.emitWidgetEvent($$_$$_$$_$$_shared_1531_2584_678_360.a, "onSendSmsSuccess", n.smsWidgetId, l, o)
        d("")
        E(1)
        var t = $$_$$_$$_$$_shared_1531_2584_21_index.getWidgetInstance(n.smsWidgetId)
        if (t) {
          t.widgetLog("sendSmsLog", {
            phoneNumber: o
          })
        }
        if (le) {
          clearTimeout(le)
        }
        le = setTimeout(function () {
          var /* [auto-meaningful-name] */T$current
          if (!(null === (T$current = T.current) || undefined === T$current)) {
            T$current.scrollIntoView({
              behavior: "smooth",
              block: "end"
            })
          }
        }, 10)
      }
    },
    className: $$_$$_$$_$$_shared_1531_2584_8(be.sendSmsBtn, (!o || !l) && be.disable)
  }, React.createElement($$_$$_$$_$$_shared_1531_2584_13_index.j, {
    type: "icon-phone-send-sms"
  }))))
})
var Se = _React.memo(function () {
  var t = $$_$$_$$_$$_shared_1531_2584_16_index.d()
  var /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_702$a$formatMessage = $$_$$_$$_$$_shared_1531_2584_702.a().formatMessage
  var n = $$_$$_$$_$$_shared_1531_2584_16_index.e(function (t) {
    return t.emulatorPhoneInfo
  })
  _React.useEffect(function () {
    if (de) {
      clearTimeout(de)
    }
    if (n.receiveSmsPageVisible) {
      de = setTimeout(function () {
        t($$_$$_$$_$$_shared_1531_2584_48_72.s({
          receiveSmsPageVisible: false
        }))
      }, 2e3)
    }
    return function () {
      return de && clearTimeout(de)
    }
  }, [n.receiveSmsPageVisible, n.receiveSmsNumber, n.receiveSmsContent, t])
  return React.createElement("div", {
    className: $$_$$_$$_$$_shared_1531_2584_8(be.receiveSms, !n.receiveSmsPageVisible && be.receiveSmsHide)
  }, React.createElement("div", {
    className: be.flexSC
  }, React.createElement("div", {
    className: be.smsIconBox
  }, React.createElement("div", {
    className: be.smsIcon
  }, React.createElement($$_$$_$$_$$_shared_1531_2584_13_index.j, {
    type: "icon-widget-sms-service"
  })), React.createElement("span", null, $$_$$_$$_$$_shared_1531_2584_702$a$formatMessage({
    id: "emulator.sms"
  }))), React.createElement("div", {
    className: be.smsTime
  }, $$_$$_$$_$$_shared_1531_2584_702$a$formatMessage({
    id: "emulator.now"
  }))), React.createElement("div", {
    className: be.smsNumber
  }, n.receiveSmsNumber), React.createElement("div", {
    className: be.smsContent
  }, n.receiveSmsContent))
})
var Ie = _React.memo(function () {
  return React.createElement("div", {
    className: be.screenMask,
    id: "cocoScreenMask"
  })
})
var Ce = _React.memo(function () {
  var t = $$_$$_$$_$$_shared_1531_2584_16_index.e(function (t) {
    return t.language
  })
  return React.createElement($$_$$_$$_$$_shared_1531_2584_2628_index.b, {
    locale: t,
    messages: $$_$$_$$_$$_$$_src_shared_ui_language.e[t] || $$_$$_$$_$$_$$_src_shared_ui_language.e[$$_$$_$$_$$_$$_src_shared_ui_language.b]
  }, React.createElement(ve, null), React.createElement(Oe, null), React.createElement(Ae, null), React.createElement(Se, null), React.createElement(ye, null), React.createElement(Ie, null))
})
export { Ce as "511__part-21__Ce" }
