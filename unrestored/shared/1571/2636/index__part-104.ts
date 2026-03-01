/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-104
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_68 from /* 68 */"./68"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"./9"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import { useDispatch, useSelector } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_1055 from /* 1055 */"./1055"
import /* [auto-meaningful-name] */Module_10551 from /* 1055 */"./1055"
var yy = React1.memo(function (e) {
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$iconId = e.iconId
  var /* [auto-meaningful-name] */e$color = e.color
  var o = useDispatch()
  var i = React1.useState()
  var a = Module_10.a(i, 2)
  var s = a[0]
  var c = a[1]
  var l = useSelector(function (e) {
    return e.resource.resourceLibraryUpdateAt
  })
  React1.useEffect(function () {
    var e = Module_9.fb(e$iconId)
    c(e)
  }, [e$iconId, l])
  return React.createElement(React.Fragment, null, React.createElement("div", {
    onClick: function () {
      o(Src_editor_redux_common_actions.wj(Module_68.c.IconLibrary, function (e) {
        if (e && e.length > 0) {
          e$onChange("iconId", e[0].id)
        }
      }))
    },
    className: Module_10551.buttonTypeIconBox
  }, React.createElement("div", {
    className: Module_10551.svgIcon,
    style: {
      color: e$color
    }
  }, React.createElement(Src_shared_ui_components_index.z, {
    icon: s
  })), React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-dropdown-down",
    className: Module_10551.iconDropdown
  })))
})
export { yy }
