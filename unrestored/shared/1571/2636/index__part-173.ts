/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-173
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_ui_components_index from "../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from "classnames"
import * as /* [auto-meaningful-name] */$_710 from "./710"
import * as /* [auto-meaningful-name] */$_188 from "./188"
import { useSelector, useDispatch } from "react-redux"
import /* [auto-meaningful-name] */React from "react"
import { memo } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_937 from "./937"
import /* [auto-meaningful-name] */$_9371 from "./937"
import * as /* [auto-meaningful-name] */$_266 from "./266"
import /* [auto-meaningful-name] */$_2661 from "./266"
var bI = memo(function () {
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var t = useSelector(function (e) {
    return e.common.confirmDialogInfo
  })
  var /* [auto-meaningful-name] */t$visible = t.visible
  var /* [auto-meaningful-name] */t$onClose = t.onClose
  var /* [auto-meaningful-name] */t$title = t.title
  var /* [auto-meaningful-name] */t$onConfirm = t.onConfirm
  var /* [auto-meaningful-name] */t$content = t.content
  var /* [auto-meaningful-name] */t$onDeny = t.onDeny
  var /* [auto-meaningful-name] */t$className = t.className
  var /* [auto-meaningful-name] */t$onCancel = t.onCancel
  var /* [auto-meaningful-name] */t$isDangerous = t.isDangerous
  var /* [auto-meaningful-name] */t$cancelText = t.cancelText
  var p = undefined === t$cancelText ? $_710$a$formatMessage({
    id: "cancel"
  }) : t$cancelText
  var /* [auto-meaningful-name] */t$allowText = t.allowText
  var m = undefined === t$allowText ? $_710$a$formatMessage({
    id: "confirm"
  }) : t$allowText
  var /* [auto-meaningful-name] */t$denyText = t.denyText
  var /* [auto-meaningful-name] */t$cancelBtnVisible = t.cancelBtnVisible
  var b = undefined === t$cancelBtnVisible || t$cancelBtnVisible
  var /* [auto-meaningful-name] */t$confirmBtnVisible = t.confirmBtnVisible
  var E = undefined === t$confirmBtnVisible || t$confirmBtnVisible
  var O = useDispatch()
  var w = function () {
    if (t$onConfirm) {
      t$onConfirm()
    }
    T()
  }
  var T = function () {
    if (t$onClose) {
      t$onClose()
    }
    O($$_$$_$$_$$_src_editor_redux_common_actions.Vg())
  }
  return React.createElement($$_$$_$$_$$_src_shared_ui_components_index.f, {
    visible: t$visible,
    showCloseButton: false,
    onClose: T,
    withPortal: true,
    maskClosable: false,
    className: Classnames($_2661.dialog, t$className, t$denyText && $_2661.dialogSecondary)
  }, React.createElement($_188.a, null, React.createElement($_188.b, {
    keys: "enter",
    callback: w
  })), React.createElement("h3", null, t$title), React.createElement("span", null, t$content), React.createElement("div", {
    className: Classnames($_2661.dialogButtons)
  }, b && React.createElement($$_$$_$$_$$_src_shared_ui_components_index.d, {
    type: "light",
    onClick: function () {
      if (t$onCancel) {
        t$onCancel()
      }
      T()
    }
  }, p), t$denyText && React.createElement($$_$$_$$_$$_src_shared_ui_components_index.d, {
    onClick: function () {
      if (t$onDeny) {
        t$onDeny()
      }
      T()
    },
    className: $_2661.denyButton
  }, t$denyText), E && React.createElement($$_$$_$$_$$_src_shared_ui_components_index.d, {
    type: "primary",
    danger: t$isDangerous,
    onClick: w
  }, m)))
})
export { bI }
