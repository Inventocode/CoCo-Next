/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：514__part-20
 */

"use strict"

import /* [auto-meaningful-name] */Module_71 from /* 71 */"./71"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_20 from /* 20 */"../../../../shared/1571/2636/20/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_72 from /* 72 */"../../../../shared/1571/2636/48/72"
import { useDispatch, useSelector } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_480 from /* 480 */"../../../../shared/1571/2636/684/480"
var we = [
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
var Ee = memo(function () {
  var t = useDispatch()
  var e = useSelector(function (t) {
    return t.emulatorPhoneInfo
  })
  var n = function (n, r, i) {
    t(Module_72.s({
      contactPageVisible: false
    }))
    Module_20.setProperties(e.contactWidgetId, {
      contactName: n,
      phoneNumber: r,
      phoneNumberList: [r],
      contactAvatar: i
    })
    Module_20.emitWidgetEvent(Module_480.a, "onContactPickerSelected", e.contactWidgetId, n, r)
  }
  return React.createElement("div", {
    className: Classnames(Module_71.contactBox, !e.contactPageVisible && Module_71.contactBoxHide)
  }, React.createElement("div", {
    className: Module_71.backBox,
    onClick: function () {
      t(Module_72.s({
        contactPageVisible: false
      }))
    }
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-phone-nav-back"
  })), React.createElement("div", {
    className: Module_71.contactList
  }, we.map(function (t) {
    return React.createElement("div", {
      onClick: n.bind(null, t.name, t.number, t.avatar),
      key: t.name,
      className: Classnames(Module_71.contactItem, Module_71.flexSC)
    }, React.createElement("div", {
      className: Module_71.flexCC
    }, React.createElement("img", {
      src: t.avatar,
      className: Module_71.itemAvatar,
      alt: ""
    }), React.createElement("div", null, React.createElement("div", {
      className: Module_71.itemName
    }, t.name), React.createElement("div", {
      className: Module_71.itemNumber
    }, t.number))), React.createElement(Src_shared_ui_components_index.j, {
      type: "icon-fold-left"
    }))
  })))
})
export { Ee }
