/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：548
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
import u = require("./484/index");
import d = require("./485");
import p = require("./280");
import f = require("./1183/index");
import h = require("../16/index");
import m = require("../90");
import g = require("../235");
import _ = require("../5");
import v = require("../53");
import b = require("./433");
var y = function __importDefault(module) {
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
}(b)
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
  var S = React.useRef(null)
  var I = new Date(e$attributes$timeStamp)
  var A = h.e(function (e) {
    var /* [auto-meaningful-name] */e$project
    return null === e || undefined === e || null === (e$project = e.project) || undefined === e$project ? undefined : e$project.playing
  })
  return i.a.createElement("div", {
    id: t,
    "data-role": _.M,
    "data-widget-type": _.n,
    "data-min-width": g.l,
    "data-max-width": g.j,
    "data-min-height": g.k,
    "data-max-height": g.i,
    className: l()(m.b, r.a({}, y.a.hide, !e$visible), y.a.dataPicker),
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
    ref: S
  }, i.a.createElement(p.a, {
    utils: u.a,
    locale: d.a
  }, i.a.createElement(f.a, {
    format: "yyyy年MM月dd日",
    value: I,
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
        id: "date-picker-".concat(t),
        onClick: function () {
          if (null === e || undefined === e ? undefined : e.onClick) {
            e.onClick()
          }
        }
      }, (null === e || undefined === e ? undefined : e.value) || "")
    },
    cancelLabel: "取消",
    okLabel: "确定"
  })), undefined !== A && !A && i.a.createElement("div", {
    className: l()(y.a.mask),
    onClick: function () {
      var e
      var s$current = S.current
      if (s$current) {
        if (s$current.dataset.clickType === v.h.CLICK) {
          if (!(null === (e = document.getElementById("date-picker-".concat(t))) || undefined === e)) {
            e.click()
          }
        }
      }
    }
  }))
})
export { _a as a }
export default _a
