/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：514__part-20
 */

"use strict"

import be from "./71"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_ui_components_index from "../../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_20_index from "../../../../shared/1571/2636/20/index"
import /* [auto-meaningful-name] */Classnames from "classnames"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_48_72 from "../../../../shared/1571/2636/48/72"
import { useDispatch, useSelector } from "react-redux"
import /* [auto-meaningful-name] */React from "react"
import { memo } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_684_480 from "../../../../shared/1571/2636/684/480"
var Ee = [
  {
    avatar: "https://static.bcmcdn.com/crc-uploader/2021/12/bbc05b5084214ba6a0c164be0e557364.jpeg",
    name: "编程猫",
    number: "123 4567 8901"
  }, {
    avatar: "https://static.bcmcdn.com/crc-uploader/2021/12/35488fb77f963585880c80b956250b5f.jpeg",
    name: "大黄鸡",
    number: "123 4567 8902"
  }, {
    avatar: "https://static.bcmcdn.com/crc-uploader/2021/12/ecee961d68c6b11db9a2275cf92ac602.jpeg",
    name: "活动喵",
    number: "123 4567 8903"
  }, {
    avatar: "https://static.bcmcdn.com/crc-uploader/2021/12/5bcc344dfd6d8833cd78fec568b95471.jpeg",
    name: "迷你雀",
    number: "123 4567 8904"
  }, {
    avatar: "https://static.bcmcdn.com/crc-uploader/2021/12/c36d182c24a52f1b94120c6abf1becaa.jpeg",
    name: "星能兔",
    number: "123 4567 8905"
  }
]
var Oe = memo(function () {
  var t = useDispatch()
  var e = useSelector(function (t) {
    return t.emulatorPhoneInfo
  })
  var n = function (n, r, i) {
    t($$_$$_$$_$$_shared_1571_2636_48_72.s({
      contactPageVisible: false
    }))
    $$_$$_$$_$$_shared_1571_2636_20_index.setProperties(e.contactWidgetId, {
      contactName: n,
      phoneNumber: r,
      phoneNumberList: [r],
      contactAvatar: i
    })
    $$_$$_$$_$$_shared_1571_2636_20_index.emitWidgetEvent($$_$$_$$_$$_shared_1571_2636_684_480.a, "onContactPickerSelected", e.contactWidgetId, n, r)
  }
  return React.createElement("div", {
    className: Classnames(be.contactBox, !e.contactPageVisible && be.contactBoxHide)
  }, React.createElement("div", {
    className: be.backBox,
    onClick: function () {
      t($$_$$_$$_$$_shared_1571_2636_48_72.s({
        contactPageVisible: false
      }))
    }
  }, React.createElement($$_$$_$$_$$_$$_src_shared_ui_components_index.j, {
    type: "icon-phone-nav-back"
  })), React.createElement("div", {
    className: be.contactList
  }, Ee.map(function (t) {
    return React.createElement("div", {
      onClick: n.bind(null, t.name, t.number, t.avatar),
      key: t.name,
      className: Classnames(be.contactItem, be.flexSC)
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
    }, t.number))), React.createElement($$_$$_$$_$$_$$_src_shared_ui_components_index.j, {
      type: "icon-fold-left"
    }))
  })))
})
export { Oe }
