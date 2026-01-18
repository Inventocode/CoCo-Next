/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1522
 */

"use strict"

import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import * as c from "./8"
import l from "./8"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as p from "./99"
import f from "./99"
import * as /* [auto-meaningful-name] */$_188 from "./188"
var _a
_a = React.memo(function () {
  var t = $_16_index.e(function (e) {
    return e.block.get("commonInputDialog")
  })
  var /* [auto-meaningful-name] */t$visible = t.visible
  var /* [auto-meaningful-name] */t$title = t.title
  var /* [auto-meaningful-name] */t$placeholder = t.placeholder
  var /* [auto-meaningful-name] */t$defaultValue = t.defaultValue
  var /* [auto-meaningful-name] */t$maxLength = t.maxLength
  var _ = undefined === t$maxLength ? 1 / 0 : t$maxLength
  var /* [auto-meaningful-name] */t$validator = t.validator
  var /* [auto-meaningful-name] */t$confirmCallback = t.confirmCallback
  var /* [auto-meaningful-name] */t$cancelCallback = t.cancelCallback
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var O = React.useRef(null)
  var w = $_16_index.d()
  var C = React.useState("")
  var T = $_10_index.a(C, 2)
  var S = T[0]
  var A = T[1]
  var I = React.useState(t$defaultValue || "")
  var j = $_10_index.a(I, 2)
  var N = j[0]
  var R = j[1]
  React.useEffect(function () {
    var /* [auto-meaningful-name] */O$current
    R(t$defaultValue || "")
    if (t$visible) {
      if (!(null === (O$current = O.current) || undefined === O$current)) {
        O$current.focus()
      }
      setImmediate(function () {
        var /* [auto-meaningful-name] */O$current1
        if (!(null === (O$current1 = O.current) || undefined === O$current1)) {
          O$current1.select()
        }
      })
      A("")
    }
  }, [t$visible, t$defaultValue])
  var k = function () {
    if (!(null === t$cancelCallback || undefined === t$cancelCallback)) {
      t$cancelCallback.call(null)
    }
    w($$_$$_$$_$$_src_editor_redux_common_actions.jh())
  }
  var x = function () {
    if (!S && N) {
      if (!(null === t$confirmCallback || undefined === t$confirmCallback)) {
        t$confirmCallback.call(null, N)
      }
      w($$_$$_$$_$$_src_editor_redux_common_actions.jh())
    }
  }
  return React1.createElement($_13_index.f, {
    visible: t$visible,
    className: l(f.nameDialog),
    onClose: k,
    withPortal: true
  }, React1.createElement($_188.a, {
    useCapture: true
  }, React1.createElement($_188.b, {
    keys: "enter",
    callback: x
  })), React1.createElement("p", {
    className: f.dialogTitle
  }, t$title && $_710_index$a$formatMessage({
    id: t$title
  }) || ""), React1.createElement("div", {
    className: f.inputWrapper
  }, React1.createElement("span", null, $_710_index$a$formatMessage({
    id: "name"
  })), React1.createElement($_13_index.k, {
    ref: O,
    warning: !!S,
    placeholder: t$placeholder && $_710_index$a$formatMessage({
      id: t$placeholder
    }),
    onChange: function (e) {
      var t = null === t$validator || undefined === t$validator ? undefined : t$validator.call(null, e)
      R(e)
      A(t || "")
    },
    maxLength: _,
    value: N
  }), S && React1.createElement("div", {
    className: f.warningTips
  }, " ", $_710_index$a$formatMessage({
    id: S
  }))), React1.createElement("div", {
    className: f.confirmBox
  }, React1.createElement($_13_index.d, {
    onClick: k
  }, $_710_index$a$formatMessage({
    id: "cancel"
  })), React1.createElement($_13_index.d, {
    onClick: x,
    type: "primary",
    disabled: !!S || !N
  }, $_710_index$a$formatMessage({
    id: "confirm"
  }))))
})
export { _a as a }
export default _a
