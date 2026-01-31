/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：552
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_11 from "../11"
import { memo, useRef, useEffect } from "react"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Color from "color"
import /* [auto-meaningful-name] */Color1 from "color"
import * as c from "../8"
import l from "../8"
import * as /* [auto-meaningful-name] */$$_551_487_index from "../551/487/index"
import * as /* [auto-meaningful-name] */$$_551_488 from "../551/488"
import * as /* [auto-meaningful-name] */$$_551_278 from "../551/278"
import * as /* [auto-meaningful-name] */$_1214_index from "./1214/index"
import { useSelector } from "react-redux"
import * as /* [auto-meaningful-name] */$$_90 from "../90"
import * as /* [auto-meaningful-name] */$$_235 from "../235"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_editor_widget_builtIn_types from "../../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */$$_28_index from "../28/index"
import * as /* [auto-meaningful-name] */$$_53 from "../53"
import * as /* [auto-meaningful-name] */$_438 from "./438"
import /* [auto-meaningful-name] */$_4381 from "./438"
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
  var A = useRef(null)
  var I = new Date(e$attributes$timeStamp)
  var j = useSelector(function (e) {
    var /* [auto-meaningful-name] */e$project
    return null === e || undefined === e || null === (e$project = e.project) || undefined === e$project ? undefined : e$project.playing
  })
  var N = useRef(false)
  var R = function (e) {
    if (N.current) {
      e.preventDefault()
    }
  }
  useEffect(function () {
    if ($$_28_index.b() && $$_28_index.h()) {
      document.body.addEventListener("touchmove", R, {
        passive: false
      })
    }
    return function () {
      if ($$_28_index.b() && $$_28_index.h()) {
        document.body.removeEventListener("touchmove", R)
      }
    }
  })
  return React1.createElement("div", {
    id: t,
    "data-role": $$_$$_$$_$$_$$_src_editor_widget_builtIn_types.M,
    "data-widget-type": $$_$$_$$_$$_$$_src_editor_widget_builtIn_types.J,
    "data-min-width": $$_235.l,
    "data-max-width": $$_235.j,
    "data-min-height": $$_235.k,
    "data-max-height": $$_235.i,
    className: l($$_90.b, $$_11.a({}, $_4381.hide, !e$visible), $_4381.timePicker),
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
    ref: A
  }, React1.createElement($$_551_278.a, {
    utils: $$_551_487_index.a,
    locale: $$_551_488.a
  }, React1.createElement($_1214_index.a, {
    value: I,
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
        id: "time-picker-".concat(t),
        onClick: function () {
          if (null === e || undefined === e ? undefined : e.onClick) {
            e.onClick()
          }
        }
      }, (null === e || undefined === e ? undefined : e.value) || "")
    },
    cancelLabel: "取消",
    okLabel: "确定",
    onOpen: function () {
      N.current = true
    },
    onClose: function () {
      N.current = false
    }
  })), undefined !== j && !j && React1.createElement("div", {
    className: l($_4381.mask),
    onClick: function () {
      var e
      var /* [auto-meaningful-name] */A$current = A.current
      if (A$current) {
        if (A$current.dataset.clickType === $$_53.h.CLICK) {
          if (!(null === (e = document.getElementById("time-picker-".concat(t))) || undefined === e)) {
            e.click()
          }
        }
      }
    }
  }))
})
export { _a as a }
export default _a
