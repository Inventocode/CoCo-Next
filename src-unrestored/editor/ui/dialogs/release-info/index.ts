/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-206
 */

"use strict"

import { LL, PL } from "../download-apk"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_53 from "../../../../../unrestored/shared/1571/2636/53"
import * as /* [auto-meaningful-name] */$$_$$_$$_events_main_messagesWrapper from "../../../events/main/messages-wrapper"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index from "../../../../../unrestored/shared/1571/2636/13/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index from "../../../../../unrestored/shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index from "../../../../../unrestored/shared/1571/2636/16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1532 from "../../../../../unrestored/shared/1571/2636/1532"
import /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_15321 from "../../../../../unrestored/shared/1571/2636/1532"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_editor_ui_dialogs_releaseInfo_626 from "../../../../../src/editor/ui/dialogs/release-info/626"
import /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_editor_ui_dialogs_releaseInfo_6261 from "../../../../../src/editor/ui/dialogs/release-info/626"
var UL = React1.memo(function () {
  var e = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.common.releaseInfoDialogVisible
  })
  var t = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    var /* [auto-meaningful-name] */e$common$userInfo
    return null === (e$common$userInfo = e.common.userInfo) || undefined === e$common$userInfo ? undefined : e$common$userInfo.id
  })
  var n = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.common.userInfoFetchDone
  })
  var r = React1.useState(false)
  var o = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(r, 2)
  var i = o[0]
  var a = o[1]
  var s = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index.d()
  React1.useEffect(function () {
    if (n) {
      if (!i) {
        if (localStorage.getItem("ReleaseVersion") !== $$_$$_$$_$$_$$_unrestored_shared_1571_2636_53.f) {
          s($$_$$_$$_events_main_messagesWrapper.vj(true))
          localStorage.setItem("ReleaseVersion", $$_$$_$$_$$_$$_unrestored_shared_1571_2636_53.f)
        }
        a(true)
      }
    }
  }, [i, s, t, n])
  return React.createElement($$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.f, {
    visible: e,
    className: $$_$$_$$_$$_$$_src_editor_ui_dialogs_releaseInfo_6261.ReleaseInfoDialog,
    onClose: function () {
      s($$_$$_$$_events_main_messagesWrapper.vj(false))
    }
  }, React.createElement("div", {
    className: $$_$$_$$_$$_$$_src_editor_ui_dialogs_releaseInfo_6261.left
  }, React.createElement("img", {
    src: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_15321,
    alt: ""
  })), React.createElement("div", {
    className: $$_$$_$$_$$_$$_src_editor_ui_dialogs_releaseInfo_6261.right
  }, React.createElement("div", {
    className: $$_$$_$$_$$_$$_src_editor_ui_dialogs_releaseInfo_6261.content
  }, React.createElement("div", {
    className: $$_$$_$$_$$_$$_src_editor_ui_dialogs_releaseInfo_6261.updateInfo
  }, React.createElement("header", null, "版本v", $$_$$_$$_$$_$$_unrestored_shared_1571_2636_53.f, "更新"), LL.map(function (e) {
    return React.createElement("p", {
      key: e
    }, e)
  }), React.createElement("div", {
    className: $$_$$_$$_$$_$$_src_editor_ui_dialogs_releaseInfo_6261.link
  }, PL.map(function (e) {
    return React.createElement("div", {
      key: e.label
    }, React.createElement("a", {
      href: e.url,
      target: "_blank",
      rel: "noopener noreferrer"
    }, e.label))
  }))), React.createElement("div", {
    className: $$_$$_$$_$$_$$_src_editor_ui_dialogs_releaseInfo_6261.overViewInfo
  }, React.createElement("a", {
    href: "https://codemao-guide.yuque.com/bfiekm/sbo5kh/update",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "往期功能更新回顾", React.createElement($$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.j, {
    className: $$_$$_$$_$$_$$_src_editor_ui_dialogs_releaseInfo_6261.iconLink,
    type: "icon-dropdown-down"
  }))))))
})
export { UL }
