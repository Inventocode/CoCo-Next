/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-206
 */

"use strict"

import { LL, PL } from "../download-apk/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_53 from "../../../../../unrestored/shared/1571/2636/53"
import * as /* [auto-meaningful-name] */$$_$$_$$_redux_common_actions from "../../../redux/common/actions"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index from "../../../../../unrestored/shared/1571/2636/13/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index from "../../../../../unrestored/shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index from "../../../../../unrestored/shared/1571/2636/16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$ from "../../../../../."
import /* [auto-meaningful-name] */_$$_$$_$$_$$_$$_$ from "../../../../../."
import * as /* [auto-meaningful-name] */$_styles$module$css from "./styles.module.css"
import /* [auto-meaningful-name] */_$_styles$module$css from "./styles.module.css"
var UL = _React.memo(function () {
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
  var r = _React.useState(false)
  var o = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(r, 2)
  var i = o[0]
  var a = o[1]
  var s = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index.d()
  _React.useEffect(function () {
    if (n) {
      if (!i) {
        if (localStorage.getItem("ReleaseVersion") !== $$_$$_$$_$$_$$_unrestored_shared_1571_2636_53.f) {
          s($$_$$_$$_redux_common_actions.vj(true))
          localStorage.setItem("ReleaseVersion", $$_$$_$$_$$_$$_unrestored_shared_1571_2636_53.f)
        }
        a(true)
      }
    }
  }, [i, s, t, n])
  return React.createElement($$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.f, {
    visible: e,
    className: _$_styles$module$css.ReleaseInfoDialog,
    onClose: function () {
      s($$_$$_$$_redux_common_actions.vj(false))
    }
  }, React.createElement("div", {
    className: _$_styles$module$css.left
  }, React.createElement("img", {
    src: _$$_$$_$$_$$_$$_$,
    alt: ""
  })), React.createElement("div", {
    className: _$_styles$module$css.right
  }, React.createElement("div", {
    className: _$_styles$module$css.content
  }, React.createElement("div", {
    className: _$_styles$module$css.updateInfo
  }, React.createElement("header", null, "版本v", $$_$$_$$_$$_$$_unrestored_shared_1571_2636_53.f, "更新"), LL.map(function (e) {
    return React.createElement("p", {
      key: e
    }, e)
  }), React.createElement("div", {
    className: _$_styles$module$css.link
  }, PL.map(function (e) {
    return React.createElement("div", {
      key: e.label
    }, React.createElement("a", {
      href: e.url,
      target: "_blank",
      rel: "noopener noreferrer"
    }, e.label))
  }))), React.createElement("div", {
    className: _$_styles$module$css.overViewInfo
  }, React.createElement("a", {
    href: "https://codemao-guide.yuque.com/bfiekm/sbo5kh/update",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "往期功能更新回顾", React.createElement($$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.j, {
    className: _$_styles$module$css.iconLink,
    type: "icon-dropdown-down"
  }))))))
})
export { UL }
