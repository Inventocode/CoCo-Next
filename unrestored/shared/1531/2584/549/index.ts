/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：549
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
import /* [auto-meaningful-name] */$$_548_484_index = require("../548/484/index")
import /* [auto-meaningful-name] */$$_548_485_index = require("../548/485/index")
import /* [auto-meaningful-name] */$$_548_280 = require("../548/280")
import /* [auto-meaningful-name] */$_1186_index = require("./1186/index")
import /* [auto-meaningful-name] */$$_16_index = require("../16/index")
import /* [auto-meaningful-name] */$$_90 = require("../90")
import /* [auto-meaningful-name] */$$_236 = require("../236")
import _ = require("../5")
import /* [auto-meaningful-name] */$$_28_index = require("../28/index")
import /* [auto-meaningful-name] */$$_53 = require("../53")
import /* [auto-meaningful-name] */$_434 = require("./434")
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
}($_434)
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
  var I = React.useRef(null)
  var A = new Date(e$attributes$timeStamp)
  var j = $$_16_index.e(function (e) {
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
    if ($$_28_index.b() && $$_28_index.h()) {
      document.body.addEventListener("touchmove", R, {
        passive: false
      })
    }
    return function () {
      if ($$_28_index.b() && $$_28_index.h()) {
        document.body.removeEventListener("touchmove", R)
      }
    }
  })
  return i.a.createElement("div", {
    id: t,
    "data-role": _.M,
    "data-widget-type": _.J,
    "data-min-width": $$_236.l,
    "data-max-width": $$_236.j,
    "data-min-height": $$_236.k,
    "data-max-height": $$_236.i,
    className: l()($$_90.b, $$_11.a({}, E.a.hide, !e$visible), E.a.timePicker),
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
  }, i.a.createElement($$_548_280.a, {
    utils: $$_548_484_index.a,
    locale: $$_548_485_index.a
  }, i.a.createElement($_1186_index.a, {
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
      var /* [auto-meaningful-name] */I$current = I.current
      if (I$current) {
        if (I$current.dataset.clickType === $$_53.h.CLICK) {
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
