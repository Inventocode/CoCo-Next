/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：552
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_11 from "../11"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */Color from "color"
import /* [auto-meaningful-name] */_Color from "color"
import * as c from "../8"
import l from "../8"
import * as u from "../5"
import * as /* [auto-meaningful-name] */$$_90 from "../90"
import * as /* [auto-meaningful-name] */$$_199 from "../199"
import * as /* [auto-meaningful-name] */$_290 from "./290"
import /* [auto-meaningful-name] */_$_ from "./290"
import * as /* [auto-meaningful-name] */$$_13_index from "../13/index"
import * as /* [auto-meaningful-name] */$$_15 from "../15"
var _ = function (e) {
  var /* [auto-meaningful-name] */e$text = e.text
  var /* [auto-meaningful-name] */e$isSelected = e.isSelected
  var /* [auto-meaningful-name] */e$state = e.state
  var /* [auto-meaningful-name] */e$color = e.color
  var /* [auto-meaningful-name] */e$index = e.index
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var /* [auto-meaningful-name] */e$sizeType = e.sizeType
  var /* [auto-meaningful-name] */e$disabled = e.disabled
  var f = React.useRef(null)
  var _ = function (e, t) {
    var n = ""
    if ("correct" === e) {
      n = "icon-radio-correct"
    } else {
      if ("incorrect" === e) {
        n = "icon-radio-incorrect"
      } else {
        if (t) {
          n = "icon-radio-correct"
        }
      }
    }
    return n ? _React.createElement($$_13_index.j, {
      type: n,
      className: _$_.selected
    }) : null
  }(e$state, e$isSelected)
  var v = function () {
    var e = function (e) {
      return {
        default: {
          color: "inherit",
          borderColor: $$_15.v(e),
          borderWidth: 1
        },
        selected: {
          color: "inherit",
          borderColor: $$_15.v(e),
          backgroundColor: $$_15.v(e),
          borderWidth: 1
        },
        correct: {
          borderColor: $$_15.v($$_199.a),
          color: $$_15.v($$_199.a),
          backgroundColor: $$_15.v($$_199.a),
          borderWidth: 1
        },
        inCorrect: {
          borderColor: $$_15.v($$_199.d),
          color: $$_15.v($$_199.d),
          backgroundColor: $$_15.v($$_199.d),
          borderWidth: 1
        },
        disabled: {
          color: "#d9d9d9",
          borderColor: "#e6e6e6",
          borderWidth: 1
        }
      }
    }(e$color)
    switch (e$state) {
      case "correct":
        return e.correct
      case "incorrect":
        return e.inCorrect
      case "disabled":
        return e.disabled
    }
    return e$disabled ? e.disabled : e$isSelected ? e.selected : e.default
  }()
  var b = $$_199.g[e$sizeType]
  return _React.createElement("div", {
    style: {
      color: null === v || undefined === v ? undefined : v.color,
      backgroundColor: (null === v || undefined === v ? undefined : v.backgroundColor) && $$_15.hb(null === v || undefined === v ? undefined : v.backgroundColor, .1)
    },
    className: l(_$_.defaultCheckbox, "checkbox-widget-box"),
    onClick: function (e) {
      var /* [auto-meaningful-name] */f$current = f.current
      if (f$current && e$onClick) {
        e$onClick(e$index, f$current)
      }
    }
  }, _React.createElement("div", {
    style: {
      backgroundColor: null === v || undefined === v ? undefined : v.backgroundColor,
      borderColor: null === v || undefined === v ? undefined : v.borderColor,
      borderWidth: null === v || undefined === v ? undefined : v.borderWidth,
      width: b.innerSize,
      height: b.innerSize,
      fontSize: b.innerSize - 4
    },
    className: _$_.inner
  }, _), _React.createElement("p", {
    ref: f,
    style: {
      fontSize: b.optionFontSize
    }
  }, e$text))
}
var _a
_a = function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$position = e.position
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$opacity = e.opacity
  var /* [auto-meaningful-name] */e$onHeadlineClick = e.onHeadlineClick
  var /* [auto-meaningful-name] */e$onOptionClick = e.onOptionClick
  var /* [auto-meaningful-name] */e$size = e.size
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$attributes$options = e$attributes.options
  var /* [auto-meaningful-name] */e$attributes$color = e$attributes.color
  var /* [auto-meaningful-name] */e$attributes$headline = e$attributes.headline
  var /* [auto-meaningful-name] */e$attributes$sizeType = e$attributes.sizeType
  var /* [auto-meaningful-name] */e$attributes$headlineVisible = e$attributes.headlineVisible
  var /* [auto-meaningful-name] */e$attributes$disabled = e$attributes.disabled
  var C = function (e, t) {
    if (e$onOptionClick) {
      e$onOptionClick(e, t)
    }
  }
  var T = $$_199.g[e$attributes$sizeType]
  return _React.createElement("div", {
    id: t,
    "data-role": u.M,
    "data-widget-type": u.C,
    "data-min-width": T.minWidth,
    "data-max-width": T.maxWidth,
    className: l(_$_.checkboxWidget, $$_90.b, $$_11.a({}, _$_.hide, !e$visible)),
    style: {
      top: e$position.y,
      left: e$position.x,
      height: "auto",
      width: e$size.width,
      minWidth: "".concat(T.minWidth, "px"),
      maxWidth: "".concat(T.maxWidth, "px"),
      opacity: undefined === e$opacity ? undefined : e$opacity / 100
    },
    "data-lock-height": true
  }, e$attributes$headlineVisible && _React.createElement("div", {
    className: _$_.headline,
    onClick: function (e) {
      if (e$onHeadlineClick) {
        e$onHeadlineClick(e)
      }
    },
    style: {
      fontSize: T.headlineFontSize
    }
  }, e$attributes$headline), _React.createElement("ul", null, e$attributes$options.map(function (e, t) {
    return _React.createElement("li", {
      key: t
    }, _React.createElement(_, {
      sizeType: e$attributes$sizeType,
      color: _Color(e$attributes$color).toString(),
      text: e.content,
      isSelected: !!e.isSelected,
      state: e.state,
      onClick: C,
      index: t,
      disabled: e$attributes$disabled
    }))
  })))
}
export { _a as a }
export default _a
