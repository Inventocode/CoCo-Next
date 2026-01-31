/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：514__part-21
 */

"use strict"

import { ve } from "./index__part-18"
import { ye } from "./index__part-19"
import { Oe } from "./index__part-20"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_710 from "../../../../shared/1571/2636/710"
import be from "./71"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_13_index from "../../../../shared/1571/2636/13/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_2681_index from "../../../../shared/1571/2636/2681/index"
var de
var le
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_ui_language from "../../../../../src/shared/ui/language"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_20_index from "../../../../shared/1571/2636/20/index"
import /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_8 from "../../../../shared/1571/2636/8"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_48_72 from "../../../../shared/1571/2636/48/72"
import { useDispatch, useSelector } from "react-redux"
import /* [auto-meaningful-name] */React from "react"
import { memo, useState, useRef, useEffect } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_10_index from "../../../../shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_685_360 from "../../../../shared/1571/2636/685/360"
var Ae = memo(function () {
  var t = useDispatch()
  var /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_710$a$formatMessage = $$_$$_$$_$$_shared_1571_2636_710.a().formatMessage
  var n = useSelector(function (t) {
    return t.emulatorPhoneInfo
  })
  var r = useState(n.sendSmsNumber)
  var i = $$_$$_$$_$$_shared_1571_2636_10_index.a(r, 2)
  var o = i[0]
  var a = i[1]
  var s = useState(n.sendSmsContent)
  var u = $$_$$_$$_$$_shared_1571_2636_10_index.a(s, 2)
  var l = u[0]
  var d = u[1]
  var m = useState([])
  var b = $$_$$_$$_$$_shared_1571_2636_10_index.a(m, 2)
  var g = b[0]
  var v = b[1]
  var _ = useState(1)
  var y = $$_$$_$$_$$_shared_1571_2636_10_index.a(_, 2)
  var w = y[0]
  var E = y[1]
  var O = useRef(null)
  var T = useRef(null)
  useEffect(function () {
    if (n.sendSmsPageVisible) {
      a(n.sendSmsNumber)
      d(n.sendSmsContent)
      v([])
    }
  }, [n.sendSmsPageVisible, n.sendSmsNumber, n.sendSmsContent])
  return React.createElement("div", {
    className: $$_$$_$$_$$_shared_1571_2636_8(be.sendSmsBox, !n.sendSmsPageVisible && be.sendSmsBoxHide)
  }, React.createElement("div", {
    className: be.backBox
  }, React.createElement("div", {
    onClick: function () {
      t($$_$$_$$_$$_shared_1571_2636_48_72.s({
        sendSmsPageVisible: false
      }))
    }
  }, React.createElement($$_$$_$$_$$_shared_1571_2636_13_index.j, {
    type: "icon-phone-nav-back"
  })), React.createElement("span", {
    className: be.receiveUser
  }, $$_$$_$$_$$_shared_1571_2636_710$a$formatMessage({
    id: "emulator.smsReceiver"
  }))), React.createElement("div", {
    className: be.numberBox
  }, React.createElement($$_$$_$$_$$_shared_1571_2636_13_index.k, {
    className: be.inputNumber,
    defaultValue: o,
    placeholder: $$_$$_$$_$$_shared_1571_2636_710$a$formatMessage({
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
  }, React.createElement($$_$$_$$_$$_shared_1571_2636_13_index.A, {
    ref: O,
    rows: w,
    maxLength: 200,
    className: be.contentTextArea,
    defaultValue: l,
    placeholder: $$_$$_$$_$$_shared_1571_2636_710$a$formatMessage({
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
        $$_$$_$$_$$_shared_1571_2636_20_index.emitWidgetEvent($$_$$_$$_$$_shared_1571_2636_685_360.a, "onSendSmsSuccess", n.smsWidgetId, l, o)
        d("")
        E(1)
        var t = $$_$$_$$_$$_shared_1571_2636_20_index.getWidgetInstance(n.smsWidgetId)
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
    className: $$_$$_$$_$$_shared_1571_2636_8(be.sendSmsBtn, (!o || !l) && be.disable)
  }, React.createElement($$_$$_$$_$$_shared_1571_2636_13_index.j, {
    type: "icon-phone-send-sms"
  }))))
})
var Se = memo(function () {
  var t = useDispatch()
  var /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_710$a$formatMessage = $$_$$_$$_$$_shared_1571_2636_710.a().formatMessage
  var n = useSelector(function (t) {
    return t.emulatorPhoneInfo
  })
  useEffect(function () {
    if (de) {
      clearTimeout(de)
    }
    if (n.receiveSmsPageVisible) {
      de = setTimeout(function () {
        t($$_$$_$$_$$_shared_1571_2636_48_72.s({
          receiveSmsPageVisible: false
        }))
      }, 2e3)
    }
    return function () {
      return de && clearTimeout(de)
    }
  }, [n.receiveSmsPageVisible, n.receiveSmsNumber, n.receiveSmsContent, t])
  return React.createElement("div", {
    className: $$_$$_$$_$$_shared_1571_2636_8(be.receiveSms, !n.receiveSmsPageVisible && be.receiveSmsHide)
  }, React.createElement("div", {
    className: be.flexSC
  }, React.createElement("div", {
    className: be.smsIconBox
  }, React.createElement("div", {
    className: be.smsIcon
  }, React.createElement($$_$$_$$_$$_shared_1571_2636_13_index.j, {
    type: "icon-widget-sms-service"
  })), React.createElement("span", null, $$_$$_$$_$$_shared_1571_2636_710$a$formatMessage({
    id: "emulator.sms"
  }))), React.createElement("div", {
    className: be.smsTime
  }, $$_$$_$$_$$_shared_1571_2636_710$a$formatMessage({
    id: "emulator.now"
  }))), React.createElement("div", {
    className: be.smsNumber
  }, n.receiveSmsNumber), React.createElement("div", {
    className: be.smsContent
  }, n.receiveSmsContent))
})
var Ie = memo(function () {
  return React.createElement("div", {
    className: be.screenMask,
    id: "cocoScreenMask"
  })
})
var Ce = memo(function () {
  var t = useSelector(function (t) {
    return t.language
  })
  return React.createElement($$_$$_$$_$$_shared_1571_2636_2681_index.b, {
    locale: t,
    messages: $$_$$_$$_$$_$$_src_shared_ui_language.e[t] || $$_$$_$$_$$_$$_src_shared_ui_language.e[$$_$$_$$_$$_$$_src_shared_ui_language.b]
  }, React.createElement(ve, null), React.createElement(Oe, null), React.createElement(Ae, null), React.createElement(Se, null), React.createElement(ye, null), React.createElement(Ie, null))
})
export { Ce }
