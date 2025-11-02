/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：552
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
import Color = require("color");
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
}(Color)
import c = require("../8");
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
}(c)
import u = require("../5");
import d = require("../90");
import p = require("../199");
import f = require("./290");
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
import m = require("../13/index");
import g = require("../15");
var _ = function (e) {
  var e$text = e.text
  var e$isSelected = e.isSelected
  var e$state = e.state
  var e$color = e.color
  var e$index = e.index
  var e$onClick = e.onClick
  var e$sizeType = e.sizeType
  var e$disabled = e.disabled
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
    return n ? i.a.createElement(m.j, {
      type: n,
      className: h.a.selected
    }) : null
  }(e$state, e$isSelected)
  var v = function () {
    var e = function (e) {
      return {
        default: {
          color: "inherit",
          borderColor: g.v(e),
          borderWidth: 1
        },
        selected: {
          color: "inherit",
          borderColor: g.v(e),
          backgroundColor: g.v(e),
          borderWidth: 1
        },
        correct: {
          borderColor: g.v(p.a),
          color: g.v(p.a),
          backgroundColor: g.v(p.a),
          borderWidth: 1
        },
        inCorrect: {
          borderColor: g.v(p.d),
          color: g.v(p.d),
          backgroundColor: g.v(p.d),
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
  var b = p.g[e$sizeType]
  return i.a.createElement("div", {
    style: {
      color: null === v || undefined === v ? undefined : v.color,
      backgroundColor: (null === v || undefined === v ? undefined : v.backgroundColor) && g.hb(null === v || undefined === v ? undefined : v.backgroundColor, .1)
    },
    className: l()(h.a.defaultCheckbox, "checkbox-widget-box"),
    onClick: function (e) {
      var f$current = f.current
      if (f$current && e$onClick) {
        e$onClick(e$index, f$current)
      }
    }
  }, i.a.createElement("div", {
    style: {
      backgroundColor: null === v || undefined === v ? undefined : v.backgroundColor,
      borderColor: null === v || undefined === v ? undefined : v.borderColor,
      borderWidth: null === v || undefined === v ? undefined : v.borderWidth,
      width: b.innerSize,
      height: b.innerSize,
      fontSize: b.innerSize - 4
    },
    className: h.a.inner
  }, _), i.a.createElement("p", {
    ref: f,
    style: {
      fontSize: b.optionFontSize
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
  var e$attributes$headline = e$attributes.headline
  var e$attributes$sizeType = e$attributes.sizeType
  var e$attributes$headlineVisible = e$attributes.headlineVisible
  var e$attributes$disabled = e$attributes.disabled
  var C = function (e, t) {
    if (e$onOptionClick) {
      e$onOptionClick(e, t)
    }
  }
  var T = p.g[e$attributes$sizeType]
  return i.a.createElement("div", {
    id: t,
    "data-role": u.M,
    "data-widget-type": u.C,
    "data-min-width": T.minWidth,
    "data-max-width": T.maxWidth,
    className: l()(h.a.checkboxWidget, d.b, r.a({}, h.a.hide, !e$visible)),
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
  }, e$attributes$headlineVisible && i.a.createElement("div", {
    className: h.a.headline,
    onClick: function (e) {
      if (e$onHeadlineClick) {
        e$onHeadlineClick(e)
      }
    },
    style: {
      fontSize: T.headlineFontSize
    }
  }, e$attributes$headline), i.a.createElement("ul", null, e$attributes$options.map(function (e, t) {
    return i.a.createElement("li", {
      key: t
    }, i.a.createElement(_, {
      sizeType: e$attributes$sizeType,
      color: s()(e$attributes$color).toString(),
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
