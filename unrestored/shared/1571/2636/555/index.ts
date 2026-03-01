/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：555
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"../11"
import * as /* [auto-meaningful-name] */React from /* 0 */"react"
import /* [auto-meaningful-name] */React1 from /* 0 */"react"
import * as /* [auto-meaningful-name] */Color from /* 51 */"color"
import /* [auto-meaningful-name] */Color1 from /* 51 */"color"
import * as /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import /* [auto-meaningful-name] */Classnames1 from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_90 from /* 90 */"../90"
import * as /* [auto-meaningful-name] */Module_200 from /* 200 */"../200"
import * as /* [auto-meaningful-name] */Module_289 from /* 289 */"./289"
import /* [auto-meaningful-name] */Module_2891 from /* 289 */"./289"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../../src/shared/tools/index"
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
    return n ? React1.createElement(Src_shared_ui_components_index.j, {
      type: n,
      className: Module_2891.selected
    }) : null
  }(e$state, e$isSelected)
  var v = function () {
    var e = function (e) {
      return {
        default: {
          color: "inherit",
          borderColor: Src_shared_tools_index.v(e),
          borderWidth: 1
        },
        selected: {
          color: "inherit",
          borderColor: Src_shared_tools_index.v(e),
          backgroundColor: Src_shared_tools_index.v(e),
          borderWidth: 1
        },
        correct: {
          borderColor: Src_shared_tools_index.v(Module_200.a),
          color: Src_shared_tools_index.v(Module_200.a),
          backgroundColor: Src_shared_tools_index.v(Module_200.a),
          borderWidth: 1
        },
        inCorrect: {
          borderColor: Src_shared_tools_index.v(Module_200.d),
          color: Src_shared_tools_index.v(Module_200.d),
          backgroundColor: Src_shared_tools_index.v(Module_200.d),
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
  var b = Module_200.g[e$sizeType]
  return React1.createElement("div", {
    style: {
      color: null === v || undefined === v ? undefined : v.color,
      backgroundColor: (null === v || undefined === v ? undefined : v.backgroundColor) && Src_shared_tools_index.hb(null === v || undefined === v ? undefined : v.backgroundColor, .1)
    },
    className: Classnames1(Module_2891.defaultCheckbox, "checkbox-widget-box"),
    onClick: function (e) {
      var /* [auto-meaningful-name] */f$current = f.current
      if (f$current && e$onClick) {
        e$onClick(e$index, f$current)
      }
    }
  }, React1.createElement("div", {
    style: {
      backgroundColor: null === v || undefined === v ? undefined : v.backgroundColor,
      borderColor: null === v || undefined === v ? undefined : v.borderColor,
      borderWidth: null === v || undefined === v ? undefined : v.borderWidth,
      width: b.innerSize,
      height: b.innerSize,
      fontSize: b.innerSize - 4
    },
    className: Module_2891.inner
  }, _), React1.createElement("p", {
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
  var T = Module_200.g[e$attributes$sizeType]
  return React1.createElement("div", {
    id: t,
    "data-role": Src_editor_widget_builtIn_types.M,
    "data-widget-type": Src_editor_widget_builtIn_types.C,
    "data-min-width": T.minWidth,
    "data-max-width": T.maxWidth,
    className: Classnames1(Module_2891.checkboxWidget, Module_90.b, Module_11.a({}, Module_2891.hide, !e$visible)),
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
  }, e$attributes$headlineVisible && React1.createElement("div", {
    className: Module_2891.headline,
    onClick: function (e) {
      if (e$onHeadlineClick) {
        e$onHeadlineClick(e)
      }
    },
    style: {
      fontSize: T.headlineFontSize
    }
  }, e$attributes$headline), React1.createElement("ul", null, e$attributes$options.map(function (e, t) {
    return React1.createElement("li", {
      key: t
    }, React1.createElement(_, {
      sizeType: e$attributes$sizeType,
      color: Color1(e$attributes$color).toString(),
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
