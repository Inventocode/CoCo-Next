/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：514__part-21
 */

"use strict"

import { ve } from "./index__part-18"
import { ye } from "./index__part-19"
import { Oe } from "./index__part-20"
import * as /* [auto-meaningful-name] */Module_710 from /* 710 */"../../../../shared/1571/2636/710"
import /* [auto-meaningful-name] */Module_71 from /* 71 */"./71"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_2681 from /* 2681 */"../../../../shared/1571/2636/2681/index"
var de
var le
import * as /* [auto-meaningful-name] */Src_shared_ui_language from /* 23 */"../../../../../src/shared/ui/language"
import * as /* [auto-meaningful-name] */Module_20 from /* 20 */"../../../../shared/1571/2636/20/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_72 from /* 72 */"../../../../shared/1571/2636/48/72"
import { useDispatch, useSelector } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../../../../shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */Module_360 from /* 360 */"../../../../shared/1571/2636/685/360"
var Ae = React1.memo(function () {
  var t = useDispatch()
  var /* [auto-meaningful-name] */Module_710$a$formatMessage = Module_710.a().formatMessage
  var n = useSelector(function (t) {
    return t.emulatorPhoneInfo
  })
  var r = React1.useState(n.sendSmsNumber)
  var i = Module_10.a(r, 2)
  var o = i[0]
  var a = i[1]
  var s = React1.useState(n.sendSmsContent)
  var u = Module_10.a(s, 2)
  var l = u[0]
  var d = u[1]
  var m = React1.useState([])
  var b = Module_10.a(m, 2)
  var g = b[0]
  var v = b[1]
  var _ = React1.useState(1)
  var y = Module_10.a(_, 2)
  var w = y[0]
  var E = y[1]
  var O = React1.useRef(null)
  var T = React1.useRef(null)
  React1.useEffect(function () {
    if (n.sendSmsPageVisible) {
      a(n.sendSmsNumber)
      d(n.sendSmsContent)
      v([])
    }
  }, [n.sendSmsPageVisible, n.sendSmsNumber, n.sendSmsContent])
  return React.createElement("div", {
    className: Classnames(Module_71.sendSmsBox, !n.sendSmsPageVisible && Module_71.sendSmsBoxHide)
  }, React.createElement("div", {
    className: Module_71.backBox
  }, React.createElement("div", {
    onClick: function () {
      t(Module_72.s({
        sendSmsPageVisible: false
      }))
    }
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-phone-nav-back"
  })), React.createElement("span", {
    className: Module_71.receiveUser
  }, Module_710$a$formatMessage({
    id: "emulator.smsReceiver"
  }))), React.createElement("div", {
    className: Module_71.numberBox
  }, React.createElement(Src_shared_ui_components_index.k, {
    className: Module_71.inputNumber,
    defaultValue: o,
    placeholder: Module_710$a$formatMessage({
      id: "emulator.smsSendNumberPlaceHolder"
    }),
    onChange: function (t) {
      a(t)
    },
    maxLength: 20
  })), React.createElement("div", {
    className: Module_71.smsBox
  }, g.map(function (t, e) {
    return React.createElement("div", {
      key: e,
      className: Module_71.smsItem
    }, t)
  }), React.createElement("div", {
    className: Module_71.scrollToView,
    ref: T
  })), React.createElement("div", {
    className: Module_71.contentBox
  }, React.createElement(Src_shared_ui_components_index.A, {
    ref: O,
    rows: w,
    maxLength: 200,
    className: Module_71.contentTextArea,
    defaultValue: l,
    placeholder: Module_710$a$formatMessage({
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
        Module_20.emitWidgetEvent(Module_360.a, "onSendSmsSuccess", n.smsWidgetId, l, o)
        d("")
        E(1)
        var t = Module_20.getWidgetInstance(n.smsWidgetId)
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
    className: Classnames(Module_71.sendSmsBtn, (!o || !l) && Module_71.disable)
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-phone-send-sms"
  }))))
})
var Se = React1.memo(function () {
  var t = useDispatch()
  var /* [auto-meaningful-name] */Module_710$a$formatMessage = Module_710.a().formatMessage
  var n = useSelector(function (t) {
    return t.emulatorPhoneInfo
  })
  React1.useEffect(function () {
    if (de) {
      clearTimeout(de)
    }
    if (n.receiveSmsPageVisible) {
      de = setTimeout(function () {
        t(Module_72.s({
          receiveSmsPageVisible: false
        }))
      }, 2e3)
    }
    return function () {
      return de && clearTimeout(de)
    }
  }, [n.receiveSmsPageVisible, n.receiveSmsNumber, n.receiveSmsContent, t])
  return React.createElement("div", {
    className: Classnames(Module_71.receiveSms, !n.receiveSmsPageVisible && Module_71.receiveSmsHide)
  }, React.createElement("div", {
    className: Module_71.flexSC
  }, React.createElement("div", {
    className: Module_71.smsIconBox
  }, React.createElement("div", {
    className: Module_71.smsIcon
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-widget-sms-service"
  })), React.createElement("span", null, Module_710$a$formatMessage({
    id: "emulator.sms"
  }))), React.createElement("div", {
    className: Module_71.smsTime
  }, Module_710$a$formatMessage({
    id: "emulator.now"
  }))), React.createElement("div", {
    className: Module_71.smsNumber
  }, n.receiveSmsNumber), React.createElement("div", {
    className: Module_71.smsContent
  }, n.receiveSmsContent))
})
var Ie = React1.memo(function () {
  return React.createElement("div", {
    className: Module_71.screenMask,
    id: "cocoScreenMask"
  })
})
var Ce = React1.memo(function () {
  var t = useSelector(function (t) {
    return t.language
  })
  return React.createElement(Module_2681.b, {
    locale: t,
    messages: Src_shared_ui_language.e[t] || Src_shared_ui_language.e[Src_shared_ui_language.b]
  }, React.createElement(ve, null), React.createElement(Oe, null), React.createElement(Ae, null), React.createElement(Se, null), React.createElement(ye, null), React.createElement(Ie, null))
})
export { Ce }
