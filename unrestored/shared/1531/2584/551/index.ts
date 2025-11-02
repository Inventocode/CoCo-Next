/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：551
 */

"use strict"

import r = require("../11");
import React = require("react");
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
import a = require("../8");
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
import Color = require("color");
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
import u = require("../5");
import d = require("../90");
import p = require("../147");
import f = require("./246");
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
}(f)
import m = require("../6");
import g = require("../15");
import _ = require("../13/index");
import v = require("../379");
var b = function (e) {
  var e$mode = e.mode
  var e$text = e.text
  var e$isSelected = e.isSelected
  var e$state = e.state
  var e$color = e.color
  var e$index = e.index
  var e$onClick = e.onClick
  var e$sizeType = e.sizeType
  var e$disabled = e.disabled
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
    return t ? i.a.createElement(_.j, {
      type: t
    }) : null
  }(e$state)
  var O = function () {
    var e = function (e, t) {
      return t === v.a.BUTTON ? {
        default: {
          borderColor: g.hb(e, .8),
          backgroundColor: g.hb(e, .2),
          color: "inherit"
        },
        selected: {
          borderColor: g.v(e),
          backgroundColor: g.hb(e, .4),
          color: "inherit"
        },
        correct: {
          color: p.c,
          borderColor: g.hb(p.c, .8),
          backgroundColor: g.hb(p.c, .1)
        },
        inCorrect: {
          color: p.f,
          borderColor: g.hb(p.f, .8),
          backgroundColor: g.hb(p.f, .1)
        },
        disabled: {
          borderColor: "#e6e6e6",
          backgroundColor: "#e6e6e6",
          color: "inherit"
        }
      } : {
        default: {
          color: "inherit",
          borderColor: g.v(e),
          borderWidth: 1
        },
        selected: {
          color: "inherit",
          borderColor: g.v(e),
          borderWidth: 5
        },
        correct: {
          borderColor: g.v(p.c),
          color: g.v(p.c),
          backgroundColor: g.v(p.c),
          borderWidth: 1
        },
        inCorrect: {
          borderColor: g.v(p.f),
          color: g.v(p.f),
          backgroundColor: g.v(p.f),
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
    var y$current = y.current
    if (y$current && e$onClick) {
      e$onClick(e$index, y$current)
    }
  }
  var C = p.g[e$sizeType]
  return e$mode === v.a.BUTTON ? i.a.createElement("button", {
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
    className: s()(h.a.inner, r.a({}, h.a.selected, e$isSelected))
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
  var e$position = e.position
  var e$visible = e.visible
  var e$opacity = e.opacity
  var e$onHeadlineClick = e.onHeadlineClick
  var e$onOptionClick = e.onOptionClick
  var e$size = e.size
  var e$attributes = e.attributes
  var e$attributes$options = e$attributes.options
  var e$attributes$color = e$attributes.color
  var e$attributes$mode = e$attributes.mode
  var e$attributes$headline = e$attributes.headline
  var e$attributes$sizeType = e$attributes.sizeType
  var e$attributes$headlineVisible = e$attributes.headlineVisible
  var e$attributes$disabled = e$attributes.disabled
  var T = function (e, t) {
    if (e$onOptionClick) {
      e$onOptionClick(e, t)
    }
  }
  var S = p.g[e$attributes$sizeType]
  return i.a.createElement("div", {
    id: t,
    "data-role": u.M,
    "data-widget-type": u.C,
    "data-min-width": S.minWidth,
    "data-max-width": S.maxWidth,
    className: s()(h.a.radioWidget, d.b, r.a({}, h.a.hide, !e$visible)),
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
