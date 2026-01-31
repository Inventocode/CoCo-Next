/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：554
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_11 from "../11"
import { useRef } from "react"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from "react"
import * as a from "../8"
import s from "../8"
import * as /* [auto-meaningful-name] */Color from "color"
import /* [auto-meaningful-name] */Color1 from "color"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_editor_widget_builtIn_types from "../../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */$$_90 from "../90"
import * as /* [auto-meaningful-name] */$$_148 from "../148"
import * as /* [auto-meaningful-name] */$_245 from "./245"
import /* [auto-meaningful-name] */$_2451 from "./245"
import * as m from "../6"
import * as /* [auto-meaningful-name] */$$_15 from "../15"
import * as /* [auto-meaningful-name] */$$_13_index from "../13/index"
import * as /* [auto-meaningful-name] */$$_379 from "../379"
var b = function (e) {
  var /* [auto-meaningful-name] */e$mode = e.mode
  var /* [auto-meaningful-name] */e$text = e.text
  var /* [auto-meaningful-name] */e$isSelected = e.isSelected
  var /* [auto-meaningful-name] */e$state = e.state
  var /* [auto-meaningful-name] */e$color = e.color
  var /* [auto-meaningful-name] */e$index = e.index
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var /* [auto-meaningful-name] */e$sizeType = e.sizeType
  var /* [auto-meaningful-name] */e$disabled = e.disabled
  var y = useRef(null)
  var E = function (e) {
    var t = ""
    if ("correct" === e) {
      t = "icon-radio-correct"
    } else {
      if ("incorrect" === e) {
        t = "icon-radio-incorrect"
      }
    }
    return t ? React1.createElement($$_13_index.j, {
      type: t
    }) : null
  }(e$state)
  var O = function () {
    var e = function (e, t) {
      return t === $$_379.a.BUTTON ? {
        default: {
          borderColor: $$_15.hb(e, .8),
          backgroundColor: $$_15.hb(e, .2),
          color: "inherit"
        },
        selected: {
          borderColor: $$_15.v(e),
          backgroundColor: $$_15.hb(e, .4),
          color: "inherit"
        },
        correct: {
          color: $$_148.c,
          borderColor: $$_15.hb($$_148.c, .8),
          backgroundColor: $$_15.hb($$_148.c, .1)
        },
        inCorrect: {
          color: $$_148.f,
          borderColor: $$_15.hb($$_148.f, .8),
          backgroundColor: $$_15.hb($$_148.f, .1)
        },
        disabled: {
          borderColor: "#e6e6e6",
          backgroundColor: "#e6e6e6",
          color: "inherit"
        }
      } : {
        default: {
          color: "inherit",
          borderColor: $$_15.v(e),
          borderWidth: 1
        },
        selected: {
          color: "inherit",
          borderColor: $$_15.v(e),
          borderWidth: 5
        },
        correct: {
          borderColor: $$_15.v($$_148.c),
          color: $$_15.v($$_148.c),
          backgroundColor: $$_15.v($$_148.c),
          borderWidth: 1
        },
        inCorrect: {
          borderColor: $$_15.v($$_148.f),
          color: $$_15.v($$_148.f),
          backgroundColor: $$_15.v($$_148.f),
          borderWidth: 1
        },
        disabled: {
          color: "#d9d9d9",
          borderColor: "#e6e6e6",
          borderWidth: 1
        }
      }
    }(e$color, e$mode)
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
  function w(e) {
    var /* [auto-meaningful-name] */y$current = y.current
    if (y$current && e$onClick) {
      e$onClick(e$index, y$current)
    }
  }
  var C = $$_148.g[e$sizeType]
  return e$mode === $$_379.a.BUTTON ? React1.createElement("button", {
    style: m.a(m.a({}, O), {}, {
      padding: C.optionPadding
    }),
    className: s($_2451.buttonRadio, "radio-widget-button"),
    onClick: w
  }, React1.createElement("p", {
    ref: y,
    style: {
      fontSize: C.optionFontSize
    }
  }, e$text), React1.createElement("div", {
    className: $_2451.buttonRadioInner,
    style: {
      color: null === O || undefined === O ? undefined : O.color,
      fontSize: C.iconFontSize
    }
  }, E)) : React1.createElement("div", {
    style: {
      color: null === O || undefined === O ? undefined : O.color
    },
    className: $_2451.defaultRadio,
    onClick: w
  }, React1.createElement("div", {
    style: {
      backgroundColor: null === O || undefined === O ? undefined : O.backgroundColor,
      borderColor: null === O || undefined === O ? undefined : O.borderColor,
      borderWidth: null === O || undefined === O ? undefined : O.borderWidth,
      width: C.innerSize,
      height: C.innerSize
    },
    className: s($_2451.inner, $$_11.a({}, $_2451.selected, e$isSelected))
  }, E), React1.createElement("p", {
    ref: y,
    style: {
      fontSize: C.optionFontSize
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
  var /* [auto-meaningful-name] */e$attributes$mode = e$attributes.mode
  var /* [auto-meaningful-name] */e$attributes$headline = e$attributes.headline
  var /* [auto-meaningful-name] */e$attributes$sizeType = e$attributes.sizeType
  var /* [auto-meaningful-name] */e$attributes$headlineVisible = e$attributes.headlineVisible
  var /* [auto-meaningful-name] */e$attributes$disabled = e$attributes.disabled
  var T = function (e, t) {
    if (e$onOptionClick) {
      e$onOptionClick(e, t)
    }
  }
  var S = $$_148.g[e$attributes$sizeType]
  return React1.createElement("div", {
    id: t,
    "data-role": $$_$$_$$_$$_$$_src_editor_widget_builtIn_types.M,
    "data-widget-type": $$_$$_$$_$$_$$_src_editor_widget_builtIn_types.C,
    "data-min-width": S.minWidth,
    "data-max-width": S.maxWidth,
    className: s($_2451.radioWidget, $$_90.b, $$_11.a({}, $_2451.hide, !e$visible)),
    style: {
      top: e$position.y,
      left: e$position.x,
      height: "auto",
      width: e$size.width,
      minWidth: "".concat(S.minWidth, "px"),
      maxWidth: "".concat(S.maxWidth, "px"),
      opacity: undefined === e$opacity ? undefined : e$opacity / 100
    },
    "data-lock-height": true
  }, e$attributes$headlineVisible && React1.createElement("div", {
    className: $_2451.headline,
    onClick: function (e) {
      if (e$onHeadlineClick) {
        e$onHeadlineClick(e)
      }
    },
    style: {
      fontSize: S.headlineFontSize
    }
  }, e$attributes$headline), React1.createElement("ul", null, e$attributes$options.map(function (e, t) {
    return React1.createElement("li", {
      key: t
    }, React1.createElement(b, {
      sizeType: e$attributes$sizeType,
      color: Color1(e$attributes$color).toString(),
      text: e.content,
      mode: e$attributes$mode,
      isSelected: !!e.isSelected,
      state: e.state,
      onClick: T,
      index: t,
      disabled: e$attributes$disabled
    }))
  })))
}
export { _a as a }
export default _a
