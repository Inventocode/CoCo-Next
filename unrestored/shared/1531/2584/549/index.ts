/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：549
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
import u = require("../548/484/index");
import d = require("../548/485");
import p = require("../548/280");
import f = require("./1186/index");
import h = require("../16/index");
import m = require("../90");
import g = require("../236");
import _ = require("../5");
import v = require("../28/index");
import b = require("../53");
import y = require("./434");
var E = function __importDefault(module) {
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
}(y)
var _a
_a = React.memo(function (e) {
  var t = e.id
  var e$position = e.position
  var e$visible = e.visible
  var e$attributes = e.attributes
  var e$size = e.size
  var e$onDatePickerChange = e.onDatePickerChange
  var e$attributes$backgroundColor = e$attributes.backgroundColor
  var e$attributes$color = e$attributes.color
  var e$attributes$fontSize = e$attributes.fontSize
  var e$attributes$timeStamp = e$attributes.timeStamp
  var I = React.useRef(null)
  var A = new Date(e$attributes$timeStamp)
  var j = h.e(function (e) {
    var /* [auto-meaningful-name] */e$project
    return null === e || undefined === e || null === (e$project = e.project) || undefined === e$project ? undefined : e$project.playing
  })
  var N = React.useRef(false)
  var R = function (e) {
    if (N.current) {
      e.preventDefault()
    }
  }
  React.useEffect(function () {
    if (v.b() && v.h()) {
      document.body.addEventListener("touchmove", R, {
        passive: false
      })
    }
    return function () {
      if (v.b() && v.h()) {
        document.body.removeEventListener("touchmove", R)
      }
    }
  })
  return i.a.createElement("div", {
    id: t,
    "data-role": _.M,
    "data-widget-type": _.J,
    "data-min-width": g.l,
    "data-max-width": g.j,
    "data-min-height": g.k,
    "data-max-height": g.i,
    className: l()(m.b, r.a({}, E.a.hide, !e$visible), E.a.timePicker),
    style: {
      top: e$position.y,
      left: e$position.x,
      width: e$size.width,
      height: e$size.height,
      textAlign: "center",
      fontSize: e$attributes$fontSize,
      color: s()(e$attributes$color).toString(),
      backgroundColor: s()(e$attributes$backgroundColor).toString(),
      borderRadius: "18px"
    },
    ref: I
  }, i.a.createElement(p.a, {
    utils: u.a,
    locale: d.a
  }, i.a.createElement(f.a, {
    value: A,
    onChange: function (e) {
      if (e && e$onDatePickerChange) {
        e$onDatePickerChange(e)
      }
    },
    TextFieldComponent: function (e) {
      return i.a.createElement("div", {
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
        id: "time-picker-".concat(t),
        onClick: function () {
          if (null === e || undefined === e ? undefined : e.onClick) {
            e.onClick()
          }
        }
      }, (null === e || undefined === e ? undefined : e.value) || "")
    },
    cancelLabel: "取消",
    okLabel: "确定",
    onOpen: function () {
      N.current = true
    },
    onClose: function () {
      N.current = false
    }
  })), undefined !== j && !j && i.a.createElement("div", {
    className: l()(E.a.mask),
    onClick: function () {
      var e
      var i$current = I.current
      if (i$current) {
        if (i$current.dataset.clickType === b.h.CLICK) {
          if (!(null === (e = document.getElementById("time-picker-".concat(t))) || undefined === e)) {
            e.click()
          }
        }
      }
    }
  }))
})
export { _a as a }
export default _a
