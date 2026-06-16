/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：546
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"../6"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"../11"
import { useRef, useMemo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from /* 0 */"react"
import * as /* [auto-meaningful-name] */Color from /* 51 */"color"
import /* [auto-meaningful-name] */Color1 from /* 51 */"color"
import * as /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import /* [auto-meaningful-name] */Classnames1 from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Module_33 from /* 33 */"../33"
import * as /* [auto-meaningful-name] */Module_90 from /* 90 */"../90"
import * as /* [auto-meaningful-name] */Module_322 from /* 322 */"../322"
import * as /* [auto-meaningful-name] */Module_83 from /* 83 */"../83"
import * as /* [auto-meaningful-name] */Module_380 from /* 380 */"./380"
import /* [auto-meaningful-name] */Module_3801 from /* 380 */"./380"
var _a
_a = function (e) {
  var /* [auto-meaningful-name] */e$position = e.position
  var /* [auto-meaningful-name] */e$size = e.size
  var s = e.id
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$opacity = e.opacity
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$iconFile = e.iconFile
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var /* [auto-meaningful-name] */e$onMouseDown = e.onMouseDown
  var /* [auto-meaningful-name] */e$onMouseUp = e.onMouseUp
  var /* [auto-meaningful-name] */e$attributes$color = e$attributes.color
  var /* [auto-meaningful-name] */e$attributes$mode = e$attributes.mode
  var /* [auto-meaningful-name] */e$attributes$disabled = e$attributes.disabled
  var /* [auto-meaningful-name] */e$attributes$text = e$attributes.text
  var /* [auto-meaningful-name] */e$attributes$sizeType = e$attributes.sizeType
  var /* [auto-meaningful-name] */e$attributes$iconId = e$attributes.iconId
  var N = useRef(null)
  var R = useRef(null)
  var k = Module_33.O(e$attributes$mode) === Module_83.a.ICON
  var x = useMemo(function () {
    var e = function (e, t) {
      var n
      var r = Color1(t).toString()
      return (n = {}, Module_11.a(n, Module_83.b.CONTAINED_TEXT, {
        default: {
          backgroundColor: r,
          color: Src_shared_tools_index.Z(r) ? Src_shared_tools_index.a : "#ffffff"
        },
        disabled: {
          backgroundColor: "#cccccc",
          color: "#e6e6e6"
        }
      }), Module_11.a(n, Module_83.b.OUTLINED_TEXT, {
        default: {
          borderColor: r,
          color: r,
          background: Src_shared_tools_index.Z(r) ? Src_shared_tools_index.a : "#ffffff"
        },
        disabled: {
          background: "#ffffff",
          borderColor: "#e9e9e9",
          color: "#e9e9e9"
        }
      }), Module_11.a(n, Module_83.b.CONTAINED_ICON, {
        default: {
          backgroundColor: r,
          color: Src_shared_tools_index.Z(r) ? Src_shared_tools_index.a : "#ffffff"
        },
        disabled: {
          backgroundColor: "#cccccc",
          color: "#e6e6e6"
        }
      }), Module_11.a(n, Module_83.b.OUTLINED_ICON, {
        default: {
          borderColor: r,
          color: r,
          background: Src_shared_tools_index.Z(r) ? Src_shared_tools_index.a : "#ffffff"
        },
        disabled: {
          background: "#ffffff",
          borderColor: "#e9e9e9",
          color: "#e9e9e9"
        }
      }), n)[e]
    }(e$attributes$mode, e$attributes$color)
    return e$attributes$disabled ? e.disabled : e.default
  }, [e$attributes$mode, e$attributes$color, e$attributes$disabled])
  var D = useMemo(function () {
    return Module_33.Q(e$attributes$sizeType, e$attributes$mode)
  }, [e$attributes$mode, e$attributes$sizeType])
  var /* [auto-meaningful-name] */D$height = D.height
  var /* [auto-meaningful-name] */D$fontSize = D.fontSize
  var /* [auto-meaningful-name] */D$minWidth = D.minWidth
  var /* [auto-meaningful-name] */D$maxWidth = D.maxWidth
  return React1.createElement("button", {
    id: s,
    className: Classnames1(Module_90.b, Module_3801.buttonWidget, Module_11.a({}, Module_3801.hide, !e$visible)),
    "data-role": Src_editor_widget_builtIn_types.M,
    "data-widget-type": Src_editor_widget_builtIn_types.d,
    "data-lock-height": true,
    "data-min-width": D$minWidth,
    "data-max-width": D$maxWidth,
    ref: N,
    onClick: function () {
      var /* [auto-meaningful-name] */R$current = R.current
      if (e$onClick) {
        e$onClick(R$current)
      }
    },
    onMouseDown: function () {
      if (e$onMouseDown) {
        e$onMouseDown()
      }
    },
    onMouseUp: function () {
      if (e$onMouseUp) {
        e$onMouseUp()
      }
    },
    style: Module_6.a({
      borderRadius: k ? D$height / 2 : D$height / 4,
      top: e$position.y,
      left: e$position.x,
      height: D$height,
      width: e$size.width,
      fontSize: D$fontSize,
      opacity: undefined === e$opacity ? undefined : e$opacity / 100
    }, x)
  }, k ? React1.createElement(Module_322.a, {
    icon: e$iconFile || Module_33.fb(e$attributes$iconId)
  }) : React1.createElement("div", {
    className: Classnames1(Module_3801.inputWrapper)
  }, React1.createElement("div", {
    className: Module_3801.text,
    ref: R
  }, e$attributes$text)))
}
export { _a as a }
export default _a
