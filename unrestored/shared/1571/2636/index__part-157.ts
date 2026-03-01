/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-157
 */

"use strict"

import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Module_18 from /* 18 */"./18"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_748 from /* 748 */"./748/index"
import { useSelector, useDispatch } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_813 from /* 813 */"./813"
import /* [auto-meaningful-name] */Module_8131 from /* 813 */"./813"
var PS = React1.memo(function () {
  var e = undefined !== Src_shared_tools_index.N(window.location.href).archiveId
  var t = useSelector(function (e) {
    return e.common.floatMiniIcons
  })
  var /* [auto-meaningful-name] */t$fixedIcons = t.fixedIcons
  var /* [auto-meaningful-name] */t$temporaryIcons = t.temporaryIcons
  var o = useDispatch()
  React1.useEffect(function () {
    o(Src_editor_redux_common_actions.cf({
      name: "debugIcon",
      icon: "icon-data",
      tooltip: "数据面板",
      visible: true,
      onClick: function () {
        o(Src_editor_redux_common_actions.Vi(Module_18.h.DevTools))
      }
    }))
    o(Src_editor_redux_common_actions.cf({
      name: "resourceIcon",
      icon: "icon-box",
      tooltip: "项目资源",
      visible: true,
      onClick: function () {
        o(Src_editor_redux_common_actions.Vi(Module_18.h.ResourceLayout))
      }
    }))
  }, [o])
  if (e) {
    return null
  }
  var i = function (e) {
    if (e.visible) {
      var t = React.createElement("div", null, e.icon ? React.createElement(Src_shared_ui_components_index.j, {
        type: e.icon
      }) : "", e.withClose ? React.createElement("div", {
        className: Module_8131.close,
        onClick: e.onClose
      }, React.createElement(Src_shared_ui_components_index.j, {
        type: "icon-close"
      })) : "")
      var n = e.content ? e.content : t
      if (e.tooltip) {
        n = React.createElement(Module_748.a, {
          placement: "left",
          title: e.tooltip
        }, n)
      }
      return React.createElement("div", {
        className: Module_8131.floatIcon,
        onClick: e.onClick,
        key: e.name
      }, n)
    }
  }
  return React.createElement("div", {
    className: Module_8131.floatPanel
  }, React.createElement("div", {
    className: Module_8131.fixedBox
  }, t$fixedIcons.map(function (e) {
    return i(e)
  })), React.createElement("div", {
    className: Module_8131.temporaryBox
  }, t$temporaryIcons.map(function (e) {
    return i(e)
  })))
})
export { PS }
