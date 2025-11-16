/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：511__part-20
 */

"use strict"

import be from "./71"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_13_index from "../../../../shared/1531/2584/13/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_21_index from "../../../../shared/1531/2584/21/index"
import /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_8 from "../../../../shared/1531/2584/8"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_48_72 from "../../../../shared/1531/2584/48/72"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_16_index from "../../../../shared/1531/2584/16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_677_476 from "../../../../shared/1531/2584/677/476"
var Ee = [{
  avatar: "https://static.codemao.cn/crc-uploader/2021/12/bbc05b5084214ba6a0c164be0e557364.jpeg",
  name: "编程猫",
  number: "123 4567 8901"
}, {
  avatar: "https://static.codemao.cn/crc-uploader/2021/12/35488fb77f963585880c80b956250b5f.jpeg",
  name: "大黄鸡",
  number: "123 4567 8902"
}, {
  avatar: "https://static.codemao.cn/crc-uploader/2021/12/ecee961d68c6b11db9a2275cf92ac602.jpeg",
  name: "活动喵",
  number: "123 4567 8903"
}, {
  avatar: "https://static.codemao.cn/crc-uploader/2021/12/5bcc344dfd6d8833cd78fec568b95471.jpeg",
  name: "迷你雀",
  number: "123 4567 8904"
}, {
  avatar: "https://static.codemao.cn/crc-uploader/2021/12/c36d182c24a52f1b94120c6abf1becaa.jpeg",
  name: "星能兔",
  number: "123 4567 8905"
}]
var Oe = _React.memo(function () {
  var t = $$_$$_$$_$$_shared_1531_2584_16_index.d()
  var e = $$_$$_$$_$$_shared_1531_2584_16_index.e(function (t) {
    return t.emulatorPhoneInfo
  })
  var n = function (n, r, i) {
    t($$_$$_$$_$$_shared_1531_2584_48_72.s({
      contactPageVisible: false
    }))
    $$_$$_$$_$$_shared_1531_2584_21_index.setProperties(e.contactWidgetId, {
      contactName: n,
      phoneNumber: r,
      phoneNumberList: [r],
      contactAvatar: i
    })
    $$_$$_$$_$$_shared_1531_2584_21_index.emitWidgetEvent($$_$$_$$_$$_shared_1531_2584_677_476.a, "onContactPickerSelected", e.contactWidgetId, n, r)
  }
  return React.createElement("div", {
    className: $$_$$_$$_$$_shared_1531_2584_8(be.contactBox, !e.contactPageVisible && be.contactBoxHide)
  }, React.createElement("div", {
    className: be.backBox,
    onClick: function () {
      t($$_$$_$$_$$_shared_1531_2584_48_72.s({
        contactPageVisible: false
      }))
    }
  }, React.createElement($$_$$_$$_$$_shared_1531_2584_13_index.j, {
    type: "icon-phone-nav-back"
  })), React.createElement("div", {
    className: be.contactList
  }, Ee.map(function (t) {
    return React.createElement("div", {
      onClick: n.bind(null, t.name, t.number, t.avatar),
      key: t.name,
      className: $$_$$_$$_$$_shared_1531_2584_8(be.contactItem, be.flexSC)
    }, React.createElement("div", {
      className: be.flexCC
    }, React.createElement("img", {
      src: t.avatar,
      className: be.itemAvatar,
      alt: ""
    }), React.createElement("div", null, React.createElement("div", {
      className: be.itemName
    }, t.name), React.createElement("div", {
      className: be.itemNumber
    }, t.number))), React.createElement($$_$$_$$_$$_shared_1531_2584_13_index.j, {
      type: "icon-fold-left"
    }))
  })))
})
export { Oe as "511__part-20__Oe" }
