/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：42__part-0
 */

"use strict"

import * as r from "../6"
import { useState, useCallback } from "react"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from "react"
import * as a from "../8"
import s from "../8"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_widget_custom_load from "../../../../../src/shared/widget/custom/load"
import * as /* [auto-meaningful-name] */$$_15 from "../15"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_editor_widget_builtIn_types from "../../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */$$_10_index from "../10/index"
import { useDispatch, useSelector } from "react-redux"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../../src/editor/redux/common/actions"
import "./859"
import * as h from "../9"
import * as /* [auto-meaningful-name] */$_676_index from "./676/index"
import * as /* [auto-meaningful-name] */$$_33 from "../33"
var _ = function (e) {
  var /* [auto-meaningful-name] */e$render = e.render
  var /* [auto-meaningful-name] */e$widgetId = e.widgetId
  var /* [auto-meaningful-name] */e$widgetType = e.widgetType
  var a = useState()
  var s = $$_10_index.a(a, 2)
  var c = s[0]
  var l = s[1]
  var _ = useDispatch()
  var v = useSelector(function (e) {
    return e.project.selectedWidgetId
  })
  var b = v === e$widgetId
  var y = useCallback(function (e, t, r, o) {
    _($$_$$_$$_$$_$$_src_editor_redux_common_actions.Lg(e$widgetId, e, t, r, o))
  }, [_, e$widgetId])
  var /* [auto-meaningful-name] */CocoWidgetWrapper = "coco-widget-wrapper"
  if (!(e$widgetType !== $$_$$_$$_$$_$$_src_editor_widget_builtIn_types.a && e$widgetType !== $$_$$_$$_$$_$$_src_editor_widget_builtIn_types.c)) {
    CocoWidgetWrapper = ""
  }
  var O = h.qb(e$widgetId)
  if ((null === O || undefined === O ? undefined : O.type) && [$$_$$_$$_$$_$$_src_editor_widget_builtIn_types.x, $$_$$_$$_$$_$$_src_editor_widget_builtIn_types.A].includes(O.type)) {
    CocoWidgetWrapper += " coco-child-widget"
    if (e$widgetType === $$_$$_$$_$$_$$_src_editor_widget_builtIn_types.v) {
      CocoWidgetWrapper += " coco-child-widget-full"
    }
    if (e$widgetId === v) {
      CocoWidgetWrapper += " coco-child-widget-selected"
    }
  }
  return React1.createElement("div", {
    className: CocoWidgetWrapper
  }, c && React1.createElement($_676_index.a, c), e$render(y, function (e, t, r) {
    if ($$_33.r(e$widgetId)) {
      l({
        target: e,
        callback: t,
        options: r
      })
    }
  }, b))
}
export { _ }
