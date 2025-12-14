/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-40
 */

"use strict"

import { Ap, Ip } from "./index__part-39"
import * as Sp from "./83"
import * as /* [auto-meaningful-name] */$_314 from "./314"
import * as Jd from "./33"
import * as An from "./5"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$_546_index from "./546/index"
var Np = function (e) {
  var /* [auto-meaningful-name] */e$onEdit = e.onEdit
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  return React.createElement($_546_index.a, Object.assign({}, e, {
    onClick: function (e) {
      if (e$onEdit && e) {
        e$onEdit(e, function (e) {
          if (e$onChange) {
            e$onChange("text", e)
          }
        }, {
          sizeAdaptive: An.q.FIXED,
          maxLength: 200,
          isMultipleRow: false
        })
      }
    }
  }))
}
var /* [auto-meaningful-name] */Sp$b$CONTAINED_TEXT = Sp.b.CONTAINED_TEXT
var /* [auto-meaningful-name] */Sp$c$MEDIUM = Sp.c.MEDIUM
var xp = Jd.Q(Sp$c$MEDIUM, Sp$b$CONTAINED_TEXT)
var /* [auto-meaningful-name] */xp$minWidth = xp.minWidth
var /* [auto-meaningful-name] */xp$height = xp.height
var Lp = {
  icon: $_314.d,
  title: "",
  previewAreaWidgetTitle: "ButtonWidget.widgetName",
  type: An.d,
  editConfig: Ip,
  contentTextField: "text",
  isInvisibleWidget: $_314.c,
  hasAnyWidget: true,
  widget: {
    isGlobalWidget: $_314.b,
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
      sizeType: Sp$c$MEDIUM,
      mode: Sp$b$CONTAINED_TEXT,
      text: "%{COCO_defaultButtonWidgetContent}",
      color: $_314.a
    }
  },
  component: Np,
  blockConfig: Ap,
  isDiscard: true
}
export { Lp }
