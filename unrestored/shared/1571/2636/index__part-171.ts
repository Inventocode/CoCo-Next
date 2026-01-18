/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-171
 */

"use strict"

var rI
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_1526 from "./1526"
import /* [auto-meaningful-name] */$_15261 from "./1526"
var lI = React1.memo(function () {
  var e = $_16_index.e(function (e) {
    return e.common.commonToastInfo
  })
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$message = e.message
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$duration = e.duration
  var i = undefined === e$duration ? 2e3 : e$duration
  var /* [auto-meaningful-name] */e$onClose = e.onClose
  var s = $_16_index.d()
  var c = React1.useCallback(function () {
    if (e$onClose) {
      e$onClose()
    }
    s($$_$$_$$_$$_src_editor_redux_common_actions.kh())
  }, [e$onClose, s])
  React1.useEffect(function () {
    if (e$visible && i) {
      if (rI) {
        window.clearTimeout(rI)
      }
      rI = setTimeout(function () {
        c()
      }, i)
    }
  }, [e$visible, s, i, c])
  return React.createElement($_13_index.b, {
    visible: e$visible,
    type: e$type,
    message: e$message,
    onClose: c,
    showPrefixIcon: e.showPrefixIcon,
    className: $_15261.wrapper,
    showCloseIcon: e.showCloseIcon
  })
})
export { lI }
