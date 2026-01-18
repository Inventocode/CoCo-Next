/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：546
 */

"use strict"

import * as r from "../6"
import * as /* [auto-meaningful-name] */$$_11 from "../11"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Color from "color"
import /* [auto-meaningful-name] */Color1 from "color"
import * as l from "../8"
import u from "../8"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_editor_widget_builtIn_types from "../../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */$$_15 from "../15"
import * as /* [auto-meaningful-name] */$$_33 from "../33"
import * as /* [auto-meaningful-name] */$$_90 from "../90"
import * as /* [auto-meaningful-name] */$$_322 from "../322"
import * as /* [auto-meaningful-name] */$$_83 from "../83"
import * as /* [auto-meaningful-name] */$_380 from "./380"
import /* [auto-meaningful-name] */$_3801 from "./380"
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
  var N = React.useRef(null)
  var R = React.useRef(null)
  var k = $$_33.O(e$attributes$mode) === $$_83.a.ICON
  var x = React.useMemo(function () {
    var e = function (e, t) {
      var n
      var r = Color1(t).toString()
      return (n = {}, $$_11.a(n, $$_83.b.CONTAINED_TEXT, {
        default: {
          backgroundColor: r,
          color: $$_15.Z(r) ? $$_15.a : "#ffffff"
        },
        disabled: {
          backgroundColor: "#cccccc",
          color: "#e6e6e6"
        }
      }), $$_11.a(n, $$_83.b.OUTLINED_TEXT, {
        default: {
          borderColor: r,
          color: r,
          background: $$_15.Z(r) ? $$_15.a : "#ffffff"
        },
        disabled: {
          background: "#ffffff",
          borderColor: "#e9e9e9",
          color: "#e9e9e9"
        }
      }), $$_11.a(n, $$_83.b.CONTAINED_ICON, {
        default: {
          backgroundColor: r,
          color: $$_15.Z(r) ? $$_15.a : "#ffffff"
        },
        disabled: {
          backgroundColor: "#cccccc",
          color: "#e6e6e6"
        }
      }), $$_11.a(n, $$_83.b.OUTLINED_ICON, {
        default: {
          borderColor: r,
          color: r,
          background: $$_15.Z(r) ? $$_15.a : "#ffffff"
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
  var D = React.useMemo(function () {
    return $$_33.Q(e$attributes$sizeType, e$attributes$mode)
  }, [e$attributes$mode, e$attributes$sizeType])
  var /* [auto-meaningful-name] */D$height = D.height
  var /* [auto-meaningful-name] */D$fontSize = D.fontSize
  var /* [auto-meaningful-name] */D$minWidth = D.minWidth
  var /* [auto-meaningful-name] */D$maxWidth = D.maxWidth
  return React1.createElement("button", {
    id: s,
    className: u($$_90.b, $_3801.buttonWidget, $$_11.a({}, $_3801.hide, !e$visible)),
    "data-role": $$_$$_$$_$$_$$_src_editor_widget_builtIn_types.M,
    "data-widget-type": $$_$$_$$_$$_$$_src_editor_widget_builtIn_types.d,
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
    style: r.a({
      borderRadius: k ? D$height / 2 : D$height / 4,
      top: e$position.y,
      left: e$position.x,
      height: D$height,
      width: e$size.width,
      fontSize: D$fontSize,
      opacity: undefined === e$opacity ? undefined : e$opacity / 100
    }, x)
  }, k ? React1.createElement($$_322.a, {
    icon: e$iconFile || $$_33.fb(e$attributes$iconId)
  }) : React1.createElement("div", {
    className: u($_3801.inputWrapper)
  }, React1.createElement("div", {
    className: $_3801.text,
    ref: R
  }, e$attributes$text)))
}
export { _a as a }
export default _a
