/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：543
 */

"use strict"

import r = require("../6")
import /* [auto-meaningful-name] */$$_11 = require("../11")
import /* [auto-meaningful-name] */React = require("react")
var a = function __importDefault(module) {
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
import /* [auto-meaningful-name] */Color = require("color")
var c = function __importDefault(module) {
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
import l = require("../8")
var u = function __importDefault(module) {
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
}(l)
import d = require("../5")
import /* [auto-meaningful-name] */$$_15 = require("../15")
import /* [auto-meaningful-name] */$$_35 = require("../35")
import /* [auto-meaningful-name] */$$_90 = require("../90")
import /* [auto-meaningful-name] */$$_321 = require("../321")
import /* [auto-meaningful-name] */$$_83 = require("../83")
import /* [auto-meaningful-name] */$_380 = require("./380")
var v = function __importDefault(module) {
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
}($_380)
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
  var k = $$_35.O(e$attributes$mode) === $$_83.a.ICON
  var x = React.useMemo(function () {
    var e = function (e, t) {
      var n
      var r = c()(t).toString()
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
    return $$_35.Q(e$attributes$sizeType, e$attributes$mode)
  }, [e$attributes$mode, e$attributes$sizeType])
  var /* [auto-meaningful-name] */D$height = D.height
  var /* [auto-meaningful-name] */D$fontSize = D.fontSize
  var /* [auto-meaningful-name] */D$minWidth = D.minWidth
  var /* [auto-meaningful-name] */D$maxWidth = D.maxWidth
  return a.a.createElement("button", {
    id: s,
    className: u()($$_90.b, v.a.buttonWidget, $$_11.a({}, v.a.hide, !e$visible)),
    "data-role": d.M,
    "data-widget-type": d.d,
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
  }, k ? a.a.createElement($$_321.a, {
    icon: e$iconFile || $$_35.fb(e$attributes$iconId)
  }) : a.a.createElement("div", {
    className: u()(v.a.inputWrapper)
  }, a.a.createElement("div", {
    className: v.a.text,
    ref: R
  }, e$attributes$text)))
}
export { _a as a }
export default _a
