/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：543
 */

"use strict"

import r = require("../6");
import o = require("../11");
import React = require("react");
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
import Color = require("color");
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
import l = require("../8");
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
import d = require("../5");
import p = require("../15");
import f = require("../35");
import h = require("../90");
import m = require("../321");
import g = require("../83");
import _ = require("./380");
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
}(_)
var _a
_a = function (e) {
  var e$position = e.position
  var e$size = e.size
  var s = e.id
  var e$visible = e.visible
  var e$opacity = e.opacity
  var e$attributes = e.attributes
  var e$iconFile = e.iconFile
  var e$onClick = e.onClick
  var e$onMouseDown = e.onMouseDown
  var e$onMouseUp = e.onMouseUp
  var e$attributes$color = e$attributes.color
  var e$attributes$mode = e$attributes.mode
  var e$attributes$disabled = e$attributes.disabled
  var e$attributes$text = e$attributes.text
  var e$attributes$sizeType = e$attributes.sizeType
  var e$attributes$iconId = e$attributes.iconId
  var N = React.useRef(null)
  var R = React.useRef(null)
  var k = f.O(e$attributes$mode) === g.a.ICON
  var x = React.useMemo(function () {
    var e = function (e, t) {
      var n
      var r = c()(t).toString()
      return (n = {}, o.a(n, g.b.CONTAINED_TEXT, {
        default: {
          backgroundColor: r,
          color: p.Z(r) ? p.a : "#ffffff"
        },
        disabled: {
          backgroundColor: "#cccccc",
          color: "#e6e6e6"
        }
      }), o.a(n, g.b.OUTLINED_TEXT, {
        default: {
          borderColor: r,
          color: r,
          background: p.Z(r) ? p.a : "#ffffff"
        },
        disabled: {
          background: "#ffffff",
          borderColor: "#e9e9e9",
          color: "#e9e9e9"
        }
      }), o.a(n, g.b.CONTAINED_ICON, {
        default: {
          backgroundColor: r,
          color: p.Z(r) ? p.a : "#ffffff"
        },
        disabled: {
          backgroundColor: "#cccccc",
          color: "#e6e6e6"
        }
      }), o.a(n, g.b.OUTLINED_ICON, {
        default: {
          borderColor: r,
          color: r,
          background: p.Z(r) ? p.a : "#ffffff"
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
    return f.Q(e$attributes$sizeType, e$attributes$mode)
  }, [e$attributes$mode, e$attributes$sizeType])
  var d$height = D.height
  var d$fontSize = D.fontSize
  var d$minWidth = D.minWidth
  var d$maxWidth = D.maxWidth
  return a.a.createElement("button", {
    id: s,
    className: u()(h.b, v.a.buttonWidget, o.a({}, v.a.hide, !e$visible)),
    "data-role": d.M,
    "data-widget-type": d.d,
    "data-lock-height": true,
    "data-min-width": d$minWidth,
    "data-max-width": d$maxWidth,
    ref: N,
    onClick: function () {
      var r$current = R.current
      if (e$onClick) {
        e$onClick(r$current)
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
      borderRadius: k ? d$height / 2 : d$height / 4,
      top: e$position.y,
      left: e$position.x,
      height: d$height,
      width: e$size.width,
      fontSize: d$fontSize,
      opacity: undefined === e$opacity ? undefined : e$opacity / 100
    }, x)
  }, k ? a.a.createElement(m.a, {
    icon: e$iconFile || f.fb(e$attributes$iconId)
  }) : a.a.createElement("div", {
    className: u()(v.a.inputWrapper)
  }, a.a.createElement("div", {
    className: v.a.text,
    ref: R
  }, e$attributes$text)))
}
export { _a as a }
export default _a
