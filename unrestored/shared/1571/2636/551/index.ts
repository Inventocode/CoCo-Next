/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：551
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_11 from "../11"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */Color from "color"
import /* [auto-meaningful-name] */_Color from "color"
import * as c from "../8"
import l from "../8"
import * as /* [auto-meaningful-name] */$_487_index from "./487/index"
import * as /* [auto-meaningful-name] */$_488 from "./488"
import * as /* [auto-meaningful-name] */$_278 from "./278"
import * as /* [auto-meaningful-name] */$_1211_index from "./1211/index"
import * as /* [auto-meaningful-name] */$$_16_index from "../16/index"
import * as /* [auto-meaningful-name] */$$_90 from "../90"
import * as /* [auto-meaningful-name] */$$_234 from "../234"
import * as _ from "../../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */$$_53 from "../53"
import * as /* [auto-meaningful-name] */$_437 from "./437"
import /* [auto-meaningful-name] */_$_ from "./437"
var _a
_a = React.memo(function (e) {
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
  var S = React.useRef(null)
  var A = new Date(e$attributes$timeStamp)
  var I = $$_16_index.e(function (e) {
    var /* [auto-meaningful-name] */e$project
    return null === e || undefined === e || null === (e$project = e.project) || undefined === e$project ? undefined : e$project.playing
  })
  return _React.createElement("div", {
    id: t,
    "data-role": _.M,
    "data-widget-type": _.n,
    "data-min-width": $$_234.l,
    "data-max-width": $$_234.j,
    "data-min-height": $$_234.k,
    "data-max-height": $$_234.i,
    className: l($$_90.b, $$_11.a({}, _$_.hide, !e$visible), _$_.dataPicker),
    style: {
      top: e$position.y,
      left: e$position.x,
      width: e$size.width,
      height: e$size.height,
      textAlign: "center",
      fontSize: e$attributes$fontSize,
      color: _Color(e$attributes$color).toString(),
      backgroundColor: _Color(e$attributes$backgroundColor).toString(),
      borderRadius: "18px"
    },
    ref: S
  }, _React.createElement($_278.a, {
    utils: $_487_index.a,
    locale: $_488.a
  }, _React.createElement($_1211_index.a, {
    format: "yyyy年MM月dd日",
    value: A,
    onChange: function (e) {
      if (e && e$onDatePickerChange) {
        e$onDatePickerChange(e)
      }
    },
    TextFieldComponent: function (e) {
      return _React.createElement("div", {
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
  })), undefined !== I && !I && _React.createElement("div", {
    className: l(_$_.mask),
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
