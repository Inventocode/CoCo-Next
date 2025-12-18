/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-206
 */

"use strict"

import { LL, PL } from "../download-apk"
import * as Yr from "../../../../../unrestored/shared/1571/2636/53"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../events/main/messages-wrapper"
import * as /* [auto-meaningful-name] */$_13_index from "../../../../../unrestored/shared/1571/2636/13/index"
import * as /* [auto-meaningful-name] */$_10_index from "../../../../../unrestored/shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */$_16_index from "../../../../../unrestored/shared/1571/2636/16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_1532 from "../../../../../unrestored/shared/1571/2636/1532"
import /* [auto-meaningful-name] */_$_ from "../../../../../unrestored/shared/1571/2636/1532"
import * as /* [auto-meaningful-name] */$_626 from "../../../../../src/editor/ui/dialogs/release-info/626"
import /* [auto-meaningful-name] */_$_2 from "../../../../../src/editor/ui/dialogs/release-info/626"
var UL = _React.memo(function () {
  var e = $_16_index.e(function (e) {
    return e.common.releaseInfoDialogVisible
  })
  var t = $_16_index.e(function (e) {
    var /* [auto-meaningful-name] */e$common$userInfo
    return null === (e$common$userInfo = e.common.userInfo) || undefined === e$common$userInfo ? undefined : e$common$userInfo.id
  })
  var n = $_16_index.e(function (e) {
    return e.common.userInfoFetchDone
  })
  var r = _React.useState(false)
  var o = $_10_index.a(r, 2)
  var i = o[0]
  var a = o[1]
  var s = $_16_index.d()
  _React.useEffect(function () {
    if (n) {
      if (!i) {
        if (localStorage.getItem("ReleaseVersion") !== Yr.f) {
          s($$_$$_$$_$$_src_shared_events_messagesWrapper.vj(true))
          localStorage.setItem("ReleaseVersion", Yr.f)
        }
        a(true)
      }
    }
  }, [i, s, t, n])
  return React.createElement($_13_index.f, {
    visible: e,
    className: _$_2.ReleaseInfoDialog,
    onClose: function () {
      s($$_$$_$$_$$_src_shared_events_messagesWrapper.vj(false))
    }
  }, React.createElement("div", {
    className: _$_2.left
  }, React.createElement("img", {
    src: _$_,
    alt: ""
  })), React.createElement("div", {
    className: _$_2.right
  }, React.createElement("div", {
    className: _$_2.content
  }, React.createElement("div", {
    className: _$_2.updateInfo
  }, React.createElement("header", null, "版本v", Yr.f, "更新"), LL.map(function (e) {
    return React.createElement("p", {
      key: e
    }, e)
  }), React.createElement("div", {
    className: _$_2.link
  }, PL.map(function (e) {
    return React.createElement("div", {
      key: e.label
    }, React.createElement("a", {
      href: e.url,
      target: "_blank",
      rel: "noopener noreferrer"
    }, e.label))
  }))), React.createElement("div", {
    className: _$_2.overViewInfo
  }, React.createElement("a", {
    href: "https://codemao-guide.yuque.com/bfiekm/sbo5kh/update",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "往期功能更新回顾", React.createElement($_13_index.j, {
    className: _$_2.iconLink,
    type: "icon-dropdown-down"
  }))))))
})
export { UL }
