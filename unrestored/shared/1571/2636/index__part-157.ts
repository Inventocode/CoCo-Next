/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-157
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_tools_index from "../../../../src/shared/tools/index"
import * as K from "./18"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_ui_components_index from "../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */$_748_index from "./748/index"
import { useSelector, useDispatch } from "react-redux"
import /* [auto-meaningful-name] */React from "react"
import { memo, useEffect } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_813 from "./813"
import /* [auto-meaningful-name] */$_8131 from "./813"
var PS = memo(function () {
  var e = undefined !== $$_$$_$$_$$_src_shared_tools_index.N(window.location.href).archiveId
  var t = useSelector(function (e) {
    return e.common.floatMiniIcons
  })
  var /* [auto-meaningful-name] */t$fixedIcons = t.fixedIcons
  var /* [auto-meaningful-name] */t$temporaryIcons = t.temporaryIcons
  var o = useDispatch()
  useEffect(function () {
    o($$_$$_$$_$$_src_editor_redux_common_actions.cf({
      name: "debugIcon",
      icon: "icon-data",
      tooltip: "数据面板",
      visible: true,
      onClick: function () {
        o($$_$$_$$_$$_src_editor_redux_common_actions.Vi(K.h.DevTools))
      }
    }))
    o($$_$$_$$_$$_src_editor_redux_common_actions.cf({
      name: "resourceIcon",
      icon: "icon-box",
      tooltip: "项目资源",
      visible: true,
      onClick: function () {
        o($$_$$_$$_$$_src_editor_redux_common_actions.Vi(K.h.ResourceLayout))
      }
    }))
  }, [o])
  if (e) {
    return null
  }
  var i = function (e) {
    if (e.visible) {
      var t = React.createElement("div", null, e.icon ? React.createElement($$_$$_$$_$$_src_shared_ui_components_index.j, {
        type: e.icon
      }) : "", e.withClose ? React.createElement("div", {
        className: $_8131.close,
        onClick: e.onClose
      }, React.createElement($$_$$_$$_$$_src_shared_ui_components_index.j, {
        type: "icon-close"
      })) : "")
      var n = e.content ? e.content : t
      if (e.tooltip) {
        n = React.createElement($_748_index.a, {
          placement: "left",
          title: e.tooltip
        }, n)
      }
      return React.createElement("div", {
        className: $_8131.floatIcon,
        onClick: e.onClick,
        key: e.name
      }, n)
    }
  }
  return React.createElement("div", {
    className: $_8131.floatPanel
  }, React.createElement("div", {
    className: $_8131.fixedBox
  }, t$fixedIcons.map(function (e) {
    return i(e)
  })), React.createElement("div", {
    className: $_8131.temporaryBox
  }, t$temporaryIcons.map(function (e) {
    return i(e)
  })))
})
export { PS }
