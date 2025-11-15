/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：551
 */

"use strict"

import /* [auto-meaningful-name] */$$_11 = require("../11")
import /* [auto-meaningful-name] */React = require("react")
var i = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}(React)
import a = require("../8")
var s = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}(a)
import /* [auto-meaningful-name] */Color = require("color")
var l = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}(Color)
import u = require("../5")
import /* [auto-meaningful-name] */$$_90 = require("../90")
import /* [auto-meaningful-name] */$$_147 = require("../147")
import /* [auto-meaningful-name] */$_246 = require("./246")
var h = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}($_246)
import m = require("../6")
import /* [auto-meaningful-name] */$$_15 = require("../15")
import /* [auto-meaningful-name] */$$_13_index = require("../13/index")
import /* [auto-meaningful-name] */$$_379 = require("../379")
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
  var y = React.useRef(null)
  var E = function (e) {
    var t = ""
    if ("correct" === e) {
      t = "icon-radio-correct"
    } else {
      if ("incorrect" === e) {
        t = "icon-radio-incorrect"
      }
    }
    return t ? i.a.createElement($$_13_index.j, {
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
          color: $$_147.c,
          borderColor: $$_15.hb($$_147.c, .8),
          backgroundColor: $$_15.hb($$_147.c, .1)
        },
        inCorrect: {
          color: $$_147.f,
          borderColor: $$_15.hb($$_147.f, .8),
          backgroundColor: $$_15.hb($$_147.f, .1)
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
          borderColor: $$_15.v($$_147.c),
          color: $$_15.v($$_147.c),
          backgroundColor: $$_15.v($$_147.c),
          borderWidth: 1
        },
        inCorrect: {
          borderColor: $$_15.v($$_147.f),
          color: $$_15.v($$_147.f),
          backgroundColor: $$_15.v($$_147.f),
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
  var C = $$_147.g[e$sizeType]
  return e$mode === $$_379.a.BUTTON ? i.a.createElement("button", {
    style: m.a(m.a({}, O), {}, {
      padding: C.optionPadding
    }),
    className: s()(h.a.buttonRadio, "radio-widget-button"),
    onClick: w
  }, i.a.createElement("p", {
    ref: y,
    style: {
      fontSize: C.optionFontSize
    }
  }, e$text), i.a.createElement("div", {
    className: h.a.buttonRadioInner,
    style: {
      color: null === O || undefined === O ? undefined : O.color,
      fontSize: C.iconFontSize
    }
  }, E)) : i.a.createElement("div", {
    style: {
      color: null === O || undefined === O ? undefined : O.color
    },
    className: h.a.defaultRadio,
    onClick: w
  }, i.a.createElement("div", {
    style: {
      backgroundColor: null === O || undefined === O ? undefined : O.backgroundColor,
      borderColor: null === O || undefined === O ? undefined : O.borderColor,
      borderWidth: null === O || undefined === O ? undefined : O.borderWidth,
      width: C.innerSize,
      height: C.innerSize
    },
    className: s()(h.a.inner, $$_11.a({}, h.a.selected, e$isSelected))
  }, E), i.a.createElement("p", {
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
  var S = $$_147.g[e$attributes$sizeType]
  return i.a.createElement("div", {
    id: t,
    "data-role": u.M,
    "data-widget-type": u.C,
    "data-min-width": S.minWidth,
    "data-max-width": S.maxWidth,
    className: s()(h.a.radioWidget, $$_90.b, $$_11.a({}, h.a.hide, !e$visible)),
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
  }, e$attributes$headlineVisible && i.a.createElement("div", {
    className: h.a.headline,
    onClick: function (e) {
      if (e$onHeadlineClick) {
        e$onHeadlineClick(e)
      }
    },
    style: {
      fontSize: S.headlineFontSize
    }
  }, e$attributes$headline), i.a.createElement("ul", null, e$attributes$options.map(function (e, t) {
    return i.a.createElement("li", {
      key: t
    }, i.a.createElement(b, {
      sizeType: e$attributes$sizeType,
      color: l()(e$attributes$color).toString(),
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
