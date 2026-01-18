/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-10
 */

"use strict"

import { Ve } from "../../../../../unrestored/shared/1571/2636/index__part-9"
var Ye
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_141_index from "../../../../../unrestored/shared/1571/2636/141/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_15 from "../../../../../unrestored/shared/1571/2636/15"
import * as /* [auto-meaningful-name] */$$_$$_$$_redux_common_actions from "../../../redux/common/actions"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index from "../../../../../unrestored/shared/1571/2636/13/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710_index from "../../../../../unrestored/shared/1571/2636/710/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_7 from "../../../../../unrestored/shared/1571/2636/7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index from "../../../../../unrestored/shared/1571/2636/16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1051 from "../../../../../unrestored/shared/1571/2636/1051"
import /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_10511 from "../../../../../unrestored/shared/1571/2636/1051"
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
var Ze = React1.memo(function (e) {
  var /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710_index.a().formatMessage
  var n = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index.d()
  var r = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.common.userInfo
  })
  var o = function () {
    var e = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e(t) {
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
              return n($$_$$_$$_redux_common_actions.wg(null))
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
              window.open($$_$$_$$_$$_$$_unrestored_shared_1571_2636_15.D(), "_blank")
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
  var i = React.createElement($$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.l, null, Qe.map(function (e, t) {
    return React.createElement($$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m, {
      key: t
    }, React.createElement("div", {
      onClick: function () {
        return window.open(e.link, "_blank")
      }
    }, e.label))
  }))
  return r ? React.createElement("div", {
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_10511.wrapper
  }, React.createElement($$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.g, {
    overlay: React.createElement($$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.l, {
      onClick: o
    }, React.createElement($$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m, {
      value: Ye.ACCOUNT_SETTING
    }, React.createElement("div", null, $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
      id: "accountSetting"
    }))), React.createElement($$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.y, {
      subMenu: i
    }, React.createElement("div", null, $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
      id: "serviceAgreement"
    }))), React.createElement($$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.m, {
      value: Ye.LOGOUT
    }, React.createElement("div", null, $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
      id: "logout"
    }))))
  }, React.createElement("div", {
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_10511.image,
    style: {
      backgroundImage: "url(".concat(r.avatar_url, ")")
    }
  }))) : React.createElement("div", {
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_10511.loginButton,
    onClick: function () {
      n($$_$$_$$_redux_common_actions.Ch())
      $$_$$_$$_$$_$$_unrestored_shared_1571_2636_141_index.a("LoginButtonClick")
    }
  }, $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710_index$a$formatMessage({
    id: "login"
  }))
})
export { Ze }
