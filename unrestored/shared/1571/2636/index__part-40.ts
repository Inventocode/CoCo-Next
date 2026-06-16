/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-40
 */

"use strict"

import { Ap, Ip } from "./index__part-39"
import * as /* [auto-meaningful-name] */Module_83 from /* 83 */"./83"
import * as /* [auto-meaningful-name] */Module_314 from /* 314 */"./314"
import * as /* [auto-meaningful-name] */Module_33 from /* 33 */"./33"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../src/editor/widget/built-in/types"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_546 from /* 546 */"./546/index"
var Np = function (e) {
  var /* [auto-meaningful-name] */e$onEdit = e.onEdit
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  return React.createElement(Module_546.a, Object.assign({}, e, {
    onClick: function (e) {
      if (e$onEdit && e) {
        e$onEdit(e, function (e) {
          if (e$onChange) {
            e$onChange("text", e)
          }
        }, {
          sizeAdaptive: Src_editor_widget_builtIn_types.q.FIXED,
          maxLength: 200,
          isMultipleRow: false
        })
      }
    }
  }))
}
var /* [auto-meaningful-name] */Module_83$b$CONTAINED_TEXT = Module_83.b.CONTAINED_TEXT
var /* [auto-meaningful-name] */Module_83$c$MEDIUM = Module_83.c.MEDIUM
var xp = Module_33.Q(Module_83$c$MEDIUM, Module_83$b$CONTAINED_TEXT)
var /* [auto-meaningful-name] */xp$minWidth = xp.minWidth
var /* [auto-meaningful-name] */xp$height = xp.height
var Lp = {
  icon: Module_314.d,
  title: "",
  previewAreaWidgetTitle: "ButtonWidget.widgetName",
  type: Src_editor_widget_builtIn_types.d,
  editConfig: Ip,
  contentTextField: "text",
  isInvisibleWidget: Module_314.c,
  hasAnyWidget: true,
  widget: {
    isGlobalWidget: Module_314.b,
    size: {
      width: xp$minWidth,
      height: xp$height
    },
    animationRecord: {
      defaultMode: {
        click: "press"
      }
    },
    attributes: {
      disabled: false,
      iconId: "default",
      sizeType: Module_83$c$MEDIUM,
      mode: Module_83$b$CONTAINED_TEXT,
      text: "%{COCO_defaultButtonWidgetContent}",
      color: Module_314.a
    }
  },
  component: Np,
  blockConfig: Ap,
  isDiscard: true
}
export { Lp }
