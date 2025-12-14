/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-10
 */

"use strict"

import { Ve } from "./index__part-9"
var Ye
import * as /* [auto-meaningful-name] */$_141_index from "./141/index"
import * as te from "./15"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../src/shared/events/messages-wrapper"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as O from "./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_1051 from "./1051"
import /* [auto-meaningful-name] */_$_ from "./1051"
!function (e) {
  e.LOGOUT = "LOGOUT"
  e.ACCOUNT_SETTING = "ACCOUNT_SETTING"
  e.USER_AGREEMENT = "USER_AGREEMENT"
}(Ye || (Ye = {}))
var Qe = [
  {
    label: "用户协议",
    link: "https://static-platform.codemao.cn/926/protocols/7KeVbBdw_userserviceProtocol.html"
  }, {
    label: "隐私协议",
    link: "https://static-platform.codemao.cn/926/protocols/7KeVbBdw_privacyProtocol.html"
  }, {
    label: "儿童隐私保护协议",
    link: "https://static-platform.codemao.cn/926/protocols/7KeVbBdw_childrenPrivacyProtectProtocol.html"
  }, {
    label: "个人信息保护政策摘要",
    link: "https://static-platform.codemao.cn/926/protocols/7KeVbBdw_informationProtectionPolicySummary.html"
  }, {
    label: "个人信息收集清单",
    link: "https://static-platform.codemao.cn/926/protocols/7KeVbBdw_informationCollectionList.html"
  }, {
    label: "个人信息共享清单",
    link: "https://static-platform.codemao.cn/926/protocols/7KeVbBdw_informationSharingList.html"
  }
]
var Ze = _React.memo(function (e) {
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var n = $_16_index.d()
  var r = $_16_index.e(function (e) {
    return e.common.userInfo
  })
  var o = function () {
    var e = O.a(RegeneratorRuntime.mark(function e(t) {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              e.t0 = t
              e.next = e.t0 === Ye.LOGOUT ? 3 : e.t0 === Ye.ACCOUNT_SETTING ? 14 : 16
              break
            case 3:
              e.prev = 3
              e.next = 6
              return Ve()
            case 6:
              e.next = 8
              return n($$_$$_$$_$$_src_shared_events_messagesWrapper.wg(null))
            case 8:
              e.next = 13
              break
            case 10:
              e.prev = 10
              e.t1 = e.catch(3)
              console.error(e.t1)
            case 13:
              return e.abrupt("break", 16)
            case 14:
              window.open(te.D(), "_blank")
              return e.abrupt("break", 16)
            case 16:
            case "end":
              return e.stop()
          }
        }
      }, e, null, [[3, 10]])
    }))
    return function (t) {
      return e.apply(this, arguments)
    }
  }()
  var i = React.createElement($_13_index.l, null, Qe.map(function (e, t) {
    return React.createElement($_13_index.m, {
      key: t
    }, React.createElement("div", {
      onClick: function () {
        return window.open(e.link, "_blank")
      }
    }, e.label))
  }))
  return r ? React.createElement("div", {
    className: _$_.wrapper
  }, React.createElement($_13_index.g, {
    overlay: React.createElement($_13_index.l, {
      onClick: o
    }, React.createElement($_13_index.m, {
      value: Ye.ACCOUNT_SETTING
    }, React.createElement("div", null, $_710_index$a$formatMessage({
      id: "accountSetting"
    }))), React.createElement($_13_index.y, {
      subMenu: i
    }, React.createElement("div", null, $_710_index$a$formatMessage({
      id: "serviceAgreement"
    }))), React.createElement($_13_index.m, {
      value: Ye.LOGOUT
    }, React.createElement("div", null, $_710_index$a$formatMessage({
      id: "logout"
    }))))
  }, React.createElement("div", {
    className: _$_.image,
    style: {
      backgroundImage: "url(".concat(r.avatar_url, ")")
    }
  }))) : React.createElement("div", {
    className: _$_.loginButton,
    onClick: function () {
      n($$_$$_$$_$$_src_shared_events_messagesWrapper.Ch())
      $_141_index.a("LoginButtonClick")
    }
  }, $_710_index$a$formatMessage({
    id: "login"
  }))
})
export { Ze }
