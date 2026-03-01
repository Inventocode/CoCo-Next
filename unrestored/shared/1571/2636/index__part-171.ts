/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-171
 */

"use strict"

var rI
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import { useSelector, useDispatch } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_1526 from /* 1526 */"./1526"
import /* [auto-meaningful-name] */Module_15261 from /* 1526 */"./1526"
var lI = React1.memo(function () {
  var e = useSelector(function (e) {
    return e.common.commonToastInfo
  })
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$message = e.message
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$duration = e.duration
  var i = undefined === e$duration ? 2e3 : e$duration
  var /* [auto-meaningful-name] */e$onClose = e.onClose
  var s = useDispatch()
  var c = React1.useCallback(function () {
    if (e$onClose) {
      e$onClose()
    }
    s(Src_editor_redux_common_actions.kh())
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
  return React.createElement(Src_shared_ui_components_index.b, {
    visible: e$visible,
    type: e$type,
    message: e$message,
    onClose: c,
    showPrefixIcon: e.showPrefixIcon,
    className: Module_15261.wrapper,
    showCloseIcon: e.showCloseIcon
  })
})
export { lI }
