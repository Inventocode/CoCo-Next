/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：545
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
import u = require("../5")
import /* [auto-meaningful-name] */$$_90 = require("../90")
import /* [auto-meaningful-name] */$$_131 = require("../131")
import /* [auto-meaningful-name] */$$_15 = require("../15")
import h = require("../9")
import /* [auto-meaningful-name] */$$_53 = require("../53")
import /* [auto-meaningful-name] */$$_162 = require("../162")
import /* [auto-meaningful-name] */$_201 = require("./201")
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
}($_201)
var _a
_a = function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$position = e.position
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$opacity = e.opacity
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$onSwitch = e.onSwitch
  var /* [auto-meaningful-name] */e$size = e.size
  var /* [auto-meaningful-name] */e$isEditState = e.isEditState
  var /* [auto-meaningful-name] */e$attributes$mode = e$attributes.mode
  var /* [auto-meaningful-name] */e$attributes$color = e$attributes.color
  var /* [auto-meaningful-name] */e$attributes$disabled = e$attributes.disabled
  var /* [auto-meaningful-name] */e$attributes$value = e$attributes.value
  var /* [auto-meaningful-name] */e$attributes$backgroundMode = e$attributes.backgroundMode
  var /* [auto-meaningful-name] */e$attributes$backgroundOpenImage = e$attributes.backgroundOpenImage
  var /* [auto-meaningful-name] */e$attributes$backgroundCloseImage = e$attributes.backgroundCloseImage
  var /* [auto-meaningful-name] */e$attributes$imageResizeMode = e$attributes.imageResizeMode
  var N = i.a.useRef(null)
  var R = i.a.useRef(null)
  var k = i.a.useRef(false)
  var x = function () {
    var e = function (e, t) {
      var n
      var o = s()(t).toString()
      return (n = {}, $$_11.a(n, $$_162.c.DEFAULT, {
        turnOn: {
          backgroundColor: $$_15.hb(o, .3),
          handleColor: o
        },
        turnOff: {
          backgroundColor: $$_15.hb("#000", .2),
          handleColor: "#ffffff"
        },
        disabled: {
          backgroundColor: $$_15.hb("#000", .1),
          handleColor: "#ffffff"
        }
      }), $$_11.a(n, $$_162.c.PRIMARY, {
        turnOn: {
          backgroundColor: o,
          handleColor: "#ffffff"
        },
        turnOff: {
          backgroundColor: $$_15.hb("#000", .2),
          handleColor: "#ffffff"
        },
        disabled: {
          backgroundColor: $$_15.hb("#000", .1),
          handleColor: "#ffffff"
        }
      }), n)[e]
    }(e$attributes$mode, e$attributes$color)
    return e$attributes$disabled ? e.disabled : e$attributes$value ? e.turnOn : e.turnOff
  }()
  var D = h.hb(e$attributes$backgroundOpenImage)
  var M = $$_15.U(e$attributes$backgroundOpenImage) ? e$attributes$backgroundOpenImage : D ? (null === D || undefined === D ? undefined : D.source) || (null === D || undefined === D ? undefined : D.cdnUrl) : $$_131.b
  var L = h.hb(e$attributes$backgroundCloseImage)
  var P = $$_15.U(e$attributes$backgroundCloseImage) ? e$attributes$backgroundCloseImage : L ? (null === L || undefined === L ? undefined : L.source) || (null === L || undefined === L ? undefined : L.cdnUrl) : $$_131.a
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
    if (e$attributes$backgroundMode === $$_162.a.IMAGE && !k.current) {
      var /* [auto-meaningful-name] */R$current = R.current
      if (!R$current) {
        return
      }
      R$current.style.backgroundImage = "url(".concat(e$attributes$value ? M : P, ")")
      return function () {
        R$current.style.backgroundImage = "none"
      }
    }
  }, [M, P, e$attributes$backgroundMode, e$attributes$value])
  return i.a.createElement("div", {
    id: t,
    "data-role": u.M,
    "data-widget-type": u.F,
    "data-min-width": $$_131.j,
    "data-max-width": $$_53.o,
    "data-min-height": $$_131.i,
    "data-max-height": $$_53.m,
    className: l()(v.a.switchWidget, $$_90.b, $$_11.a({}, v.a.hide, !e$visible)),
    style: {
      top: e$position.y,
      left: e$position.x,
      height: e$size.height,
      width: e$size.width,
      minWidth: "".concat($$_131.j, "px"),
      minHeight: "".concat($$_131.i, "px"),
      maxWidth: "".concat($$_53.o, "px"),
      maxHeight: "".concat($$_53.m, "px"),
      opacity: undefined === e$opacity ? undefined : e$opacity / 100,
      filter: e$attributes$disabled && e$attributes$backgroundMode === $$_162.a.IMAGE ? "saturate(0) brightness(1.1)" : undefined
    },
    onClick: function (t) {
      if (!e$attributes$disabled) {
        if (e$onSwitch) {
          e$onSwitch(!e$attributes$value)
        }
        if (e$attributes$backgroundMode === $$_162.a.TEMPLATE) {
          var /* [auto-meaningful-name] */N$current
          if (!(null === (N$current = N.current) || undefined === N$current)) {
            N$current.classList.add(v.a.leftAnimation)
          }
          setTimeout(function () {
            var /* [auto-meaningful-name] */_N$current
            if (!(null === (_N$current = N.current) || undefined === _N$current)) {
              _N$current.classList.remove(v.a.leftAnimation)
            }
          }, 100)
        } else {
          var /* [auto-meaningful-name] */R$current = R.current
          if (!h.s(e.id) && e$isEditState || !R$current) {
            return
          }
          R$current.classList.add(v.a.imageAnimationFirstHalf)
          k.current = true
          setTimeout(function () {
            R$current.classList.remove(v.a.imageAnimationFirstHalf)
            R$current.classList.add(v.a.imageAnimationSecondHalf)
            R$current.style.backgroundImage = "url(".concat(e$attributes$value ? P : M, ")")
            setTimeout(function () {
              R$current.classList.remove(v.a.imageAnimationSecondHalf)
              k.current = false
            }, 100)
          }, 100)
        }
      }
    }
  }, e$attributes$backgroundMode === $$_162.a.IMAGE ? B : function () {
    var /* [auto-meaningful-name] */e$size$width = e$size.width
    var /* [auto-meaningful-name] */e$size$height = e$size.height
    e$size$height = (e$size$width = Math.min(e$size$width, e$size$height * $$_131.k)) / $$_131.k
    return i.a.createElement("div", {
      className: v.a.templateWrapper,
      style: {
        width: e$size$width,
        height: e$size$height
      }
    }, e$attributes$mode === $$_162.c.DEFAULT ? i.a.createElement("div", {
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
