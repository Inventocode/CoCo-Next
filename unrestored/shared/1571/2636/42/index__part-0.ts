/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：42__part-0
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"../6"
import * as /* [auto-meaningful-name] */React from /* 0 */"react"
import /* [auto-meaningful-name] */React1 from /* 0 */"react"
import * as /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import /* [auto-meaningful-name] */Classnames1 from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Src_shared_widget_custom_load from /* 34 */"../../../../../src/shared/widget/custom/load"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../10/index"
import { useDispatch, useSelector } from /* 16 */"react-redux"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../../src/editor/redux/common/actions"
import /* 859 */"./859"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../9"
import * as /* [auto-meaningful-name] */Module_676 from /* 676 */"./676/index"
import * as /* [auto-meaningful-name] */Module_33 from /* 33 */"../33"
var _ = function (e) {
  var /* [auto-meaningful-name] */e$render = e.render
  var /* [auto-meaningful-name] */e$widgetId = e.widgetId
  var /* [auto-meaningful-name] */e$widgetType = e.widgetType
  var a = React.useState()
  var s = Module_10.a(a, 2)
  var c = s[0]
  var l = s[1]
  var _ = useDispatch()
  var v = useSelector(function (e) {
    return e.project.selectedWidgetId
  })
  var b = v === e$widgetId
  var y = React.useCallback(function (e, t, r, o) {
    _(Src_editor_redux_common_actions.Lg(e$widgetId, e, t, r, o))
  }, [_, e$widgetId])
  var /* [auto-meaningful-name] */CocoWidgetWrapper = "coco-widget-wrapper"
  if (!(e$widgetType !== Src_editor_widget_builtIn_types.a && e$widgetType !== Src_editor_widget_builtIn_types.c)) {
    CocoWidgetWrapper = ""
  }
  var O = Module_9.qb(e$widgetId)
  if ((null === O || undefined === O ? undefined : O.type) && [Src_editor_widget_builtIn_types.x, Src_editor_widget_builtIn_types.A].includes(O.type)) {
    CocoWidgetWrapper += " coco-child-widget"
    if (e$widgetType === Src_editor_widget_builtIn_types.v) {
      CocoWidgetWrapper += " coco-child-widget-full"
    }
    if (e$widgetId === v) {
      CocoWidgetWrapper += " coco-child-widget-selected"
    }
  }
  return React1.createElement("div", {
    className: CocoWidgetWrapper
  }, c && React1.createElement(Module_676.a, c), e$render(y, function (e, t, r) {
    if (Module_33.r(e$widgetId)) {
      l({
        target: e,
        callback: t,
        options: r
      })
    }
  }, b))
}
export { _ }
