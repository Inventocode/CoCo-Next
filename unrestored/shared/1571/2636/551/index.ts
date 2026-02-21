/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：551
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_11 from "../11"
import { memo, useRef } from "react"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Color from "color"
import /* [auto-meaningful-name] */Color1 from "color"
import * as /* [auto-meaningful-name] */Classnames from "classnames"
import /* [auto-meaningful-name] */Classnames1 from "classnames"
import * as /* [auto-meaningful-name] */$_487_index from "./487/index"
import * as /* [auto-meaningful-name] */$_488 from "./488"
import * as /* [auto-meaningful-name] */$_278 from "./278"
import * as /* [auto-meaningful-name] */$_1211_index from "./1211/index"
import { useSelector } from "react-redux"
import * as /* [auto-meaningful-name] */$$_90 from "../90"
import * as /* [auto-meaningful-name] */$$_234 from "../234"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_editor_widget_builtIn_types from "../../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */$$_53 from "../53"
import * as /* [auto-meaningful-name] */$_437 from "./437"
import /* [auto-meaningful-name] */$_4371 from "./437"
var _a
_a = memo(function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$position = e.position
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$size = e.size
  var /* [auto-meaningful-name] */e$onDatePickerChange = e.onDatePickerChange
  var /* [auto-meaningful-name] */e$attributes$backgroundColor = e$attributes.backgroundColor
  var /* [auto-meaningful-name] */e$attributes$color = e$attributes.color
  var /* [auto-meaningful-name] */e$attributes$fontSize = e$attributes.fontSize
  var /* [auto-meaningful-name] */e$attributes$timeStamp = e$attributes.timeStamp
  var S = useRef(null)
  var A = new Date(e$attributes$timeStamp)
  var I = useSelector(function (e) {
    var /* [auto-meaningful-name] */e$project
    return null === e || undefined === e || null === (e$project = e.project) || undefined === e$project ? undefined : e$project.playing
  })
  return React1.createElement("div", {
    id: t,
    "data-role": $$_$$_$$_$$_$$_src_editor_widget_builtIn_types.M,
    "data-widget-type": $$_$$_$$_$$_$$_src_editor_widget_builtIn_types.n,
    "data-min-width": $$_234.l,
    "data-max-width": $$_234.j,
    "data-min-height": $$_234.k,
    "data-max-height": $$_234.i,
    className: Classnames1($$_90.b, $$_11.a({}, $_4371.hide, !e$visible), $_4371.dataPicker),
    style: {
      top: e$position.y,
      left: e$position.x,
      width: e$size.width,
      height: e$size.height,
      textAlign: "center",
      fontSize: e$attributes$fontSize,
      color: Color1(e$attributes$color).toString(),
      backgroundColor: Color1(e$attributes$backgroundColor).toString(),
      borderRadius: "18px"
    },
    ref: S
  }, React1.createElement($_278.a, {
    utils: $_487_index.a,
    locale: $_488.a
  }, React1.createElement($_1211_index.a, {
    format: "yyyy年MM月dd日",
    value: A,
    onChange: function (e) {
      if (e && e$onDatePickerChange) {
        e$onDatePickerChange(e)
      }
    },
    TextFieldComponent: function (e) {
      return React1.createElement("div", {
        style: {
          textAlign: "center",
          fontSize: e$attributes$fontSize,
          color: e$attributes$color,
          backgroundColor: e$attributes$backgroundColor,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "18px"
        },
        id: "date-picker-".concat(t),
        onClick: function () {
          if (null === e || undefined === e ? undefined : e.onClick) {
            e.onClick()
          }
        }
      }, (null === e || undefined === e ? undefined : e.value) || "")
    },
    cancelLabel: "取消",
    okLabel: "确定"
  })), undefined !== I && !I && React1.createElement("div", {
    className: Classnames1($_4371.mask),
    onClick: function () {
      var e
      var /* [auto-meaningful-name] */S$current = S.current
      if (S$current) {
        if (S$current.dataset.clickType === $$_53.h.CLICK) {
          if (!(null === (e = document.getElementById("date-picker-".concat(t))) || undefined === e)) {
            e.click()
          }
        }
      }
    }
  }))
})
export { _a as a }
export default _a
