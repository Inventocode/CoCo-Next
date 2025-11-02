/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：545
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
import p = require("../131");
import f = require("../15");
import h = require("../9");
import m = require("../53");
import g = require("../162");
import _ = require("./201");
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
  var t = e.id
  var e$position = e.position
  var e$visible = e.visible
  var e$opacity = e.opacity
  var e$attributes = e.attributes
  var e$onSwitch = e.onSwitch
  var e$size = e.size
  var e$isEditState = e.isEditState
  var e$attributes$mode = e$attributes.mode
  var e$attributes$color = e$attributes.color
  var e$attributes$disabled = e$attributes.disabled
  var e$attributes$value = e$attributes.value
  var e$attributes$backgroundMode = e$attributes.backgroundMode
  var e$attributes$backgroundOpenImage = e$attributes.backgroundOpenImage
  var e$attributes$backgroundCloseImage = e$attributes.backgroundCloseImage
  var e$attributes$imageResizeMode = e$attributes.imageResizeMode
  var N = i.a.useRef(null)
  var R = i.a.useRef(null)
  var k = i.a.useRef(false)
  var x = function () {
    var e = function (e, t) {
      var n
      var o = s()(t).toString()
      return (n = {}, r.a(n, g.c.DEFAULT, {
        turnOn: {
          backgroundColor: f.hb(o, .3),
          handleColor: o
        },
        turnOff: {
          backgroundColor: f.hb("#000", .2),
          handleColor: "#ffffff"
        },
        disabled: {
          backgroundColor: f.hb("#000", .1),
          handleColor: "#ffffff"
        }
      }), r.a(n, g.c.PRIMARY, {
        turnOn: {
          backgroundColor: o,
          handleColor: "#ffffff"
        },
        turnOff: {
          backgroundColor: f.hb("#000", .2),
          handleColor: "#ffffff"
        },
        disabled: {
          backgroundColor: f.hb("#000", .1),
          handleColor: "#ffffff"
        }
      }), n)[e]
    }(e$attributes$mode, e$attributes$color)
    return e$attributes$disabled ? e.disabled : e$attributes$value ? e.turnOn : e.turnOff
  }()
  var D = h.hb(e$attributes$backgroundOpenImage)
  var M = f.U(e$attributes$backgroundOpenImage) ? e$attributes$backgroundOpenImage : D ? (null === D || undefined === D ? undefined : D.source) || (null === D || undefined === D ? undefined : D.cdnUrl) : p.b
  var L = h.hb(e$attributes$backgroundCloseImage)
  var P = f.U(e$attributes$backgroundCloseImage) ? e$attributes$backgroundCloseImage : L ? (null === L || undefined === L ? undefined : L.source) || (null === L || undefined === L ? undefined : L.cdnUrl) : p.a
  var B = i.a.createElement("div", {
    ref: R,
    style: {
      backgroundSize: "contain" === e$attributes$imageResizeMode ? "contain" : "100% 100%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: e$size.height,
      width: e$size.width
    }
  })
  React.useEffect(function () {
    if (e$attributes$backgroundMode === g.a.IMAGE && !k.current) {
      var r$current = R.current
      if (!r$current) {
        return
      }
      r$current.style.backgroundImage = "url(".concat(e$attributes$value ? M : P, ")")
      return function () {
        r$current.style.backgroundImage = "none"
      }
    }
  }, [M, P, e$attributes$backgroundMode, e$attributes$value])
  return i.a.createElement("div", {
    id: t,
    "data-role": u.M,
    "data-widget-type": u.F,
    "data-min-width": p.j,
    "data-max-width": m.o,
    "data-min-height": p.i,
    "data-max-height": m.m,
    className: l()(v.a.switchWidget, d.b, r.a({}, v.a.hide, !e$visible)),
    style: {
      top: e$position.y,
      left: e$position.x,
      height: e$size.height,
      width: e$size.width,
      minWidth: "".concat(p.j, "px"),
      minHeight: "".concat(p.i, "px"),
      maxWidth: "".concat(m.o, "px"),
      maxHeight: "".concat(m.m, "px"),
      opacity: undefined === e$opacity ? undefined : e$opacity / 100,
      filter: e$attributes$disabled && e$attributes$backgroundMode === g.a.IMAGE ? "saturate(0) brightness(1.1)" : undefined
    },
    onClick: function (t) {
      if (!e$attributes$disabled) {
        if (e$onSwitch) {
          e$onSwitch(!e$attributes$value)
        }
        if (e$attributes$backgroundMode === g.a.TEMPLATE) {
          var /* [auto-meaningful-name] */_n$current
          if (!(null === (_n$current = N.current) || undefined === _n$current)) {
            _n$current.classList.add(v.a.leftAnimation)
          }
          setTimeout(function () {
            var /* [auto-meaningful-name] */n$current
            if (!(null === (n$current = N.current) || undefined === n$current)) {
              n$current.classList.remove(v.a.leftAnimation)
            }
          }, 100)
        } else {
          var r$current = R.current
          if (!h.s(e.id) && e$isEditState || !r$current) {
            return
          }
          r$current.classList.add(v.a.imageAnimationFirstHalf)
          k.current = true
          setTimeout(function () {
            r$current.classList.remove(v.a.imageAnimationFirstHalf)
            r$current.classList.add(v.a.imageAnimationSecondHalf)
            r$current.style.backgroundImage = "url(".concat(e$attributes$value ? P : M, ")")
            setTimeout(function () {
              r$current.classList.remove(v.a.imageAnimationSecondHalf)
              k.current = false
            }, 100)
          }, 100)
        }
      }
    }
  }, e$attributes$backgroundMode === g.a.IMAGE ? B : function () {
    var e$size$width = e$size.width
    var e$size$height = e$size.height
    e$size$height = (e$size$width = Math.min(e$size$width, e$size$height * p.k)) / p.k
    return i.a.createElement("div", {
      className: v.a.templateWrapper,
      style: {
        width: e$size$width,
        height: e$size$height
      }
    }, e$attributes$mode === g.c.DEFAULT ? i.a.createElement("div", {
      className: v.a.default,
      style: {
        backgroundColor: x.backgroundColor,
        borderRadius: e$size$height / 2
      }
    }, i.a.createElement("div", {
      ref: N,
      className: l()(v.a.handle),
      style: {
        height: e$size$height,
        width: e$size$height,
        backgroundColor: x.handleColor,
        left: e$attributes$value ? "calc(100% - ".concat(e$size$height, "px)") : 0
      }
    })) : i.a.createElement("div", {
      className: v.a.primary,
      style: {
        borderRadius: e$size$height / 2,
        backgroundColor: x.backgroundColor,
        height: e$size$height,
        width: e$size$width
      }
    }, i.a.createElement("div", {
      className: l()(v.a.handle),
      style: {
        backgroundColor: x.handleColor,
        height: e$size$height,
        width: e$size$height,
        left: e$attributes$value ? "calc(100% - ".concat(e$size$height, "px)") : 0
      }
    })))
  }())
}
export { _a as a }
export default _a
