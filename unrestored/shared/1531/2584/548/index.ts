/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：548
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
import /* [auto-meaningful-name] */Color = require("color")
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
import c = require("../8")
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
import /* [auto-meaningful-name] */$_484_index = require("./484/index")
import /* [auto-meaningful-name] */$_485_index = require("./485/index")
import /* [auto-meaningful-name] */$_280 = require("./280")
import /* [auto-meaningful-name] */$_1183_index = require("./1183/index")
import /* [auto-meaningful-name] */$$_16_index = require("../16/index")
import /* [auto-meaningful-name] */$$_90 = require("../90")
import /* [auto-meaningful-name] */$$_235 = require("../235")
import _ = require("../5")
import /* [auto-meaningful-name] */$$_53 = require("../53")
import /* [auto-meaningful-name] */$_433 = require("./433")
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
}($_433)
var _a
_a = React.memo(function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$position = e.position
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$size = e.size
  var /* [auto-meaningful-name] */e$onDatePickerChange = e.onDatePickerChange
  var /* [auto-meaningful-name] */e$attributes$backgroundColor = e$attributes.backgroundColor
  var /* [auto-meaningful-name] */e$attributes$color = e$attributes.color
  var /* [auto-meaningful-name] */e$attributes$fontSize = e$attributes.fontSize
  var /* [auto-meaningful-name] */e$attributes$timeStamp = e$attributes.timeStamp
  var S = React.useRef(null)
  var I = new Date(e$attributes$timeStamp)
  var A = $$_16_index.e(function (e) {
    var /* [auto-meaningful-name] */e$project
    return null === e || undefined === e || null === (e$project = e.project) || undefined === e$project ? undefined : e$project.playing
  })
  return i.a.createElement("div", {
    id: t,
    "data-role": _.M,
    "data-widget-type": _.n,
    "data-min-width": $$_235.l,
    "data-max-width": $$_235.j,
    "data-min-height": $$_235.k,
    "data-max-height": $$_235.i,
    className: l()($$_90.b, $$_11.a({}, y.a.hide, !e$visible), y.a.dataPicker),
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
  }, i.a.createElement($_280.a, {
    utils: $_484_index.a,
    locale: $_485_index.a
  }, i.a.createElement($_1183_index.a, {
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
      var /* [auto-meaningful-name] */S$current = S.current
      if (S$current) {
        if (S$current.dataset.clickType === $$_53.h.CLICK) {
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
