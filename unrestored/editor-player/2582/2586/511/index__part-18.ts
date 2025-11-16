/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：511__part-18
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_21_index from "../../../../shared/1531/2584/21/index"
import /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_8 from "../../../../shared/1531/2584/8"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_48_70 from "../../../../shared/1531/2584/48/70"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_38_217_index from "../../../../shared/1531/2584/38/217/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_48_72 from "../../../../shared/1531/2584/48/72"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_16_index from "../../../../shared/1531/2584/16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_10_index from "../../../../shared/1531/2584/10/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_widget_custom_externalModule from "../../../../../src/shared/widget/custom/external-module"
import "./1161"
import "./1162"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_2628_index from "../../../../shared/1531/2584/2628/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_13_index from "../../../../shared/1531/2584/13/index"
import * as me from "./71"
import be from "./71"
var ge = [{
  number: 1,
  letter: ""
}, {
  number: 2,
  letter: "ABC"
}, {
  number: 3,
  letter: "DEF"
}, {
  number: 4,
  letter: "GHI"
}, {
  number: 5,
  letter: "JKL"
}, {
  number: 6,
  letter: "MNO"
}, {
  number: 7,
  letter: "PQRS"
}, {
  number: 8,
  letter: "TUV"
}, {
  number: 9,
  letter: "XYZ"
}, {
  number: "*",
  letter: ""
}, {
  number: 0,
  letter: "+"
}, {
  number: "#",
  letter: ""
}]
var ve = _React.memo(function () {
  var t = $$_$$_$$_$$_shared_1531_2584_16_index.d()
  var e = $$_$$_$$_$$_shared_1531_2584_16_index.e(function (t) {
    return t.emulatorPhoneInfo
  })
  var n = _React.useState("")
  var r = $$_$$_$$_$$_shared_1531_2584_10_index.a(n, 2)
  var i = r[0]
  var o = r[1]
  _React.useEffect(function () {
    o(e.phoneNumber)
  }, [e.phoneNumber])
  var a = function (t) {
    o(i + "" + t)
  }
  return React.createElement("div", {
    className: $$_$$_$$_$$_shared_1531_2584_8(be.dialerBox, !e.dialPageVisible && be.dialerBoxHide)
  }, React.createElement("div", {
    className: be.backBox,
    onClick: function () {
      t($$_$$_$$_$$_shared_1531_2584_48_72.s({
        dialPageVisible: false
      }))
    }
  }, React.createElement($$_$$_$$_$$_shared_1531_2584_13_index.j, {
    type: "icon-phone-nav-back"
  })), React.createElement("div", {
    className: be.dialNumber
  }, i), React.createElement("div", {
    className: be.numberBox
  }, ge.map(function (t) {
    return React.createElement("div", {
      key: t.number,
      className: $$_$$_$$_$$_shared_1531_2584_8(be.keyItem, be.numberKey),
      onClick: a.bind(null, t.number)
    }, React.createElement("div", {
      className: be.number
    }, t.number), React.createElement("div", {
      className: be.letter
    }, t.letter))
  }), React.createElement("div", {
    className: $$_$$_$$_$$_shared_1531_2584_8(be.keyItem, be.white)
  }), React.createElement("div", {
    className: $$_$$_$$_$$_shared_1531_2584_8(be.keyItem, be.callBtn),
    onClick: function () {
      if (i) {
        t($$_$$_$$_$$_shared_1531_2584_48_72.s({
          dialPageVisible: false,
          callingPageVisible: true,
          callType: "dialOutCall",
          phoneNumber: i,
          callStatus: $$_$$_$$_$$_shared_1531_2584_48_70.b.RINGING
        }))
        $$_$$_$$_$$_shared_1531_2584_21_index.emitWidgetEvent($$_$$_$$_$$_shared_1531_2584_48_70.c, "onPhoneCallStart", e.phoneDialWidgetId)
        $$_$$_$$_$$_shared_1531_2584_38_217_index.b({
          phoneCallInfo: {
            callType: "dialOutCall",
            dialOutPhoneNumber: i,
            callStatus: $$_$$_$$_$$_shared_1531_2584_48_70.b.RINGING
          }
        })
      }
    }
  }, React.createElement($$_$$_$$_$$_shared_1531_2584_13_index.j, {
    type: "icon-phone-call-dial"
  })), React.createElement("div", {
    className: $$_$$_$$_$$_shared_1531_2584_8(be.keyItem, be.white)
  }, React.createElement("div", {
    className: be.deleteBtn,
    onClick: function () {
      if (i) {
        o(i.substr(0, i.length - 1))
      }
    }
  }, "x"))))
})
export { ve as "511__part-18__ve" }
