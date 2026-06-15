/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：554
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"../11"
import { useRef } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from /* 0 */"react"
import * as /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import /* [auto-meaningful-name] */Classnames1 from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Color from /* 51 */"color"
import /* [auto-meaningful-name] */Color1 from /* 51 */"color"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_90 from /* 90 */"../90"
import * as /* [auto-meaningful-name] */Module_148 from /* 148 */"../148"
import * as /* [auto-meaningful-name] */Module_245 from /* 245 */"./245"
import /* [auto-meaningful-name] */Module_2451 from /* 245 */"./245"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"../6"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_379 from /* 379 */"../379"
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
    return t ? React1.createElement(Src_shared_ui_components_index.j, {
      type: t
    }) : null
  }(e$state)
  var O = function () {
    var e = function (e, t) {
      return t === Module_379.a.BUTTON ? {
        default: {
          borderColor: Src_shared_tools_index.hb(e, .8),
          backgroundColor: Src_shared_tools_index.hb(e, .2),
          color: "inherit"
        },
        selected: {
          borderColor: Src_shared_tools_index.v(e),
          backgroundColor: Src_shared_tools_index.hb(e, .4),
          color: "inherit"
        },
        correct: {
          color: Module_148.c,
          borderColor: Src_shared_tools_index.hb(Module_148.c, .8),
          backgroundColor: Src_shared_tools_index.hb(Module_148.c, .1)
        },
        inCorrect: {
          color: Module_148.f,
          borderColor: Src_shared_tools_index.hb(Module_148.f, .8),
          backgroundColor: Src_shared_tools_index.hb(Module_148.f, .1)
        },
        disabled: {
          borderColor: "#e6e6e6",
          backgroundColor: "#e6e6e6",
          color: "inherit"
        }
      } : {
        default: {
          color: "inherit",
          borderColor: Src_shared_tools_index.v(e),
          borderWidth: 1
        },
        selected: {
          color: "inherit",
          borderColor: Src_shared_tools_index.v(e),
          borderWidth: 5
        },
        correct: {
          borderColor: Src_shared_tools_index.v(Module_148.c),
          color: Src_shared_tools_index.v(Module_148.c),
          backgroundColor: Src_shared_tools_index.v(Module_148.c),
          borderWidth: 1
        },
        inCorrect: {
          borderColor: Src_shared_tools_index.v(Module_148.f),
          color: Src_shared_tools_index.v(Module_148.f),
          backgroundColor: Src_shared_tools_index.v(Module_148.f),
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
  var C = Module_148.g[e$sizeType]
  return e$mode === Module_379.a.BUTTON ? React1.createElement("button", {
    style: Module_6.a(Module_6.a({}, O), {}, {
      padding: C.optionPadding
    }),
    className: Classnames1(Module_2451.buttonRadio, "radio-widget-button"),
    onClick: w
  }, React1.createElement("p", {
    ref: y,
    style: {
      fontSize: C.optionFontSize
    }
  }, e$text), React1.createElement("div", {
    className: Module_2451.buttonRadioInner,
    style: {
      color: null === O || undefined === O ? undefined : O.color,
      fontSize: C.iconFontSize
    }
  }, E)) : React1.createElement("div", {
    style: {
      color: null === O || undefined === O ? undefined : O.color
    },
    className: Module_2451.defaultRadio,
    onClick: w
  }, React1.createElement("div", {
    style: {
      backgroundColor: null === O || undefined === O ? undefined : O.backgroundColor,
      borderColor: null === O || undefined === O ? undefined : O.borderColor,
      borderWidth: null === O || undefined === O ? undefined : O.borderWidth,
      width: C.innerSize,
      height: C.innerSize
    },
    className: Classnames1(Module_2451.inner, Module_11.a({}, Module_2451.selected, e$isSelected))
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
  var S = Module_148.g[e$attributes$sizeType]
  return React1.createElement("div", {
    id: t,
    "data-role": Src_editor_widget_builtIn_types.M,
    "data-widget-type": Src_editor_widget_builtIn_types.C,
    "data-min-width": S.minWidth,
    "data-max-width": S.maxWidth,
    className: Classnames1(Module_2451.radioWidget, Module_90.b, Module_11.a({}, Module_2451.hide, !e$visible)),
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
    className: Module_2451.headline,
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
