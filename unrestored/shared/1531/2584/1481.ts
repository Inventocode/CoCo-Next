/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1481
 */

"use strict"

import /* [auto-meaningful-name] */$_10_index = require("./10/index")
import /* [auto-meaningful-name] */React = require("react")
var i = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}(React)
import /* [auto-meaningful-name] */$_702 = require("./702")
import /* [auto-meaningful-name] */$_16_index = require("./16/index")
import c = require("./8")
var l = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}(c)
import /* [auto-meaningful-name] */$_13_index = require("./13/index")
import /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper = require("../../../../src/shared/events/messages-wrapper")
import /* [auto-meaningful-name] */$_101 = require("./101")
var f = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}($_101)
import /* [auto-meaningful-name] */$_188 = require("./188")
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
  return i.a.createElement($_13_index.f, {
    visible: t$visible,
    className: l()(f.a.nameDialog),
    onClose: k,
    withPortal: true
  }, i.a.createElement($_188.a, {
    useCapture: true
  }, i.a.createElement($_188.b, {
    keys: "enter",
    callback: x
  })), i.a.createElement("p", {
    className: f.a.dialogTitle
  }, t$title && $_702$a$formatMessage({
    id: t$title
  }) || ""), i.a.createElement("div", {
    className: f.a.inputWrapper
  }, i.a.createElement("span", null, $_702$a$formatMessage({
    id: "name"
  })), i.a.createElement($_13_index.k, {
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
  }), S && i.a.createElement("div", {
    className: f.a.warningTips
  }, " ", $_702$a$formatMessage({
    id: S
  }))), i.a.createElement("div", {
    className: f.a.confirmBox
  }, i.a.createElement($_13_index.d, {
    onClick: k
  }, $_702$a$formatMessage({
    id: "cancel"
  })), i.a.createElement($_13_index.d, {
    onClick: x,
    type: "primary",
    disabled: !!S || !N
  }, $_702$a$formatMessage({
    id: "confirm"
  }))))
})
export { _a as a }
export default _a
