/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-173
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../src/editor/events/main/messages-wrapper"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_188 from "./188"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_937 from "./937"
import /* [auto-meaningful-name] */_$_ from "./937"
import * as /* [auto-meaningful-name] */$_266 from "./266"
import /* [auto-meaningful-name] */_$_2 from "./266"
var bI = _React.memo(function () {
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var t = $_16_index.e(function (e) {
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
  var p = undefined === t$cancelText ? $_710_index$a$formatMessage({
    id: "cancel"
  }) : t$cancelText
  var /* [auto-meaningful-name] */t$allowText = t.allowText
  var m = undefined === t$allowText ? $_710_index$a$formatMessage({
    id: "confirm"
  }) : t$allowText
  var /* [auto-meaningful-name] */t$denyText = t.denyText
  var /* [auto-meaningful-name] */t$cancelBtnVisible = t.cancelBtnVisible
  var b = undefined === t$cancelBtnVisible || t$cancelBtnVisible
  var /* [auto-meaningful-name] */t$confirmBtnVisible = t.confirmBtnVisible
  var E = undefined === t$confirmBtnVisible || t$confirmBtnVisible
  var O = $_16_index.d()
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
    O($$_$$_$$_$$_src_shared_events_messagesWrapper.Vg())
  }
  return React.createElement($_13_index.f, {
    visible: t$visible,
    showCloseButton: false,
    onClose: T,
    withPortal: true,
    maskClosable: false,
    className: N(_$_2.dialog, t$className, t$denyText && _$_2.dialogSecondary)
  }, React.createElement($_188.a, null, React.createElement($_188.b, {
    keys: "enter",
    callback: w
  })), React.createElement("h3", null, t$title), React.createElement("span", null, t$content), React.createElement("div", {
    className: N(_$_2.dialogButtons)
  }, b && React.createElement($_13_index.d, {
    type: "light",
    onClick: function () {
      if (t$onCancel) {
        t$onCancel()
      }
      T()
    }
  }, p), t$denyText && React.createElement($_13_index.d, {
    onClick: function () {
      if (t$onDeny) {
        t$onDeny()
      }
      T()
    },
    className: _$_2.denyButton
  }, t$denyText), E && React.createElement($_13_index.d, {
    type: "primary",
    danger: t$isDangerous,
    onClick: w
  }, m)))
})
export { bI }
