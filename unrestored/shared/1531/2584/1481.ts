/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1481
 */

"use strict"

import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_702 from "./702"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import * as c from "./8"
import l from "./8"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../src/shared/events/messages-wrapper"
import * as /* [auto-meaningful-name] */$_101 from "./101"
import /* [auto-meaningful-name] */_$_ from "./101"
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
  var /* [auto-meaningful-name] */$_702$a$formatMessage = $_702.a().formatMessage
  var O = React.useRef(null)
  var w = $_16_index.d()
  var C = React.useState("")
  var T = $_10_index.a(C, 2)
  var S = T[0]
  var I = T[1]
  var A = React.useState(t$defaultValue || "")
  var j = $_10_index.a(A, 2)
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
        var /* [auto-meaningful-name] */_O$current
        if (!(null === (_O$current = O.current) || undefined === _O$current)) {
          _O$current.select()
        }
      })
      I("")
    }
  }, [t$visible, t$defaultValue])
  var k = function () {
    if (!(null === t$cancelCallback || undefined === t$cancelCallback)) {
      t$cancelCallback.call(null)
    }
    w($$_$$_$$_$$_src_shared_events_messagesWrapper.jh())
  }
  var x = function () {
    if (!S && N) {
      if (!(null === t$confirmCallback || undefined === t$confirmCallback)) {
        t$confirmCallback.call(null, N)
      }
      w($$_$$_$$_$$_src_shared_events_messagesWrapper.jh())
    }
  }
  return _React.createElement($_13_index.f, {
    visible: t$visible,
    className: l(_$_.nameDialog),
    onClose: k,
    withPortal: true
  }, _React.createElement($_188.a, {
    useCapture: true
  }, _React.createElement($_188.b, {
    keys: "enter",
    callback: x
  })), _React.createElement("p", {
    className: _$_.dialogTitle
  }, t$title && $_702$a$formatMessage({
    id: t$title
  }) || ""), _React.createElement("div", {
    className: _$_.inputWrapper
  }, _React.createElement("span", null, $_702$a$formatMessage({
    id: "name"
  })), _React.createElement($_13_index.k, {
    ref: O,
    warning: !!S,
    placeholder: t$placeholder && $_702$a$formatMessage({
      id: t$placeholder
    }),
    onChange: function (e) {
      var t = null === t$validator || undefined === t$validator ? undefined : t$validator.call(null, e)
      R(e)
      I(t || "")
    },
    maxLength: _,
    value: N
  }), S && _React.createElement("div", {
    className: _$_.warningTips
  }, " ", $_702$a$formatMessage({
    id: S
  }))), _React.createElement("div", {
    className: _$_.confirmBox
  }, _React.createElement($_13_index.d, {
    onClick: k
  }, $_702$a$formatMessage({
    id: "cancel"
  })), _React.createElement($_13_index.d, {
    onClick: x,
    type: "primary",
    disabled: !!S || !N
  }, $_702$a$formatMessage({
    id: "confirm"
  }))))
})
export { _a as a }
export default _a
