/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：410
 */

"use strict"

export { ze as c }
export { Ye as b }
import /* [auto-meaningful-name] */Color = require("color")
var o = function __importDefault(module) {
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
import /* [auto-meaningful-name] */$$_$$_$$_16_index = require("../../../16/index")
import /* [auto-meaningful-name] */React = require("react")
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
}(React)
import /* [auto-meaningful-name] */$$_$$_$$_5 = require("../../../5")
import /* [auto-meaningful-name] */$$_$$_$$_15 = require("../../../15")
import /* [auto-meaningful-name] */$$_$$_$$_205 = require("../../../205")
import /* [auto-meaningful-name] */$$_$$_$$_9 = require("../../../9")
import /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_$$_src_shared_widget_custom_storage = require("../../../../../../../src/shared/widget/custom/storage")
import /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_$$_src_shared_widget_custom_load = require("../../../../../../../src/shared/widget/custom/load")
import /* [auto-meaningful-name] */$$_$$_$$_11 = require("../../../11")
import /* [auto-meaningful-name] */$$_$$_$$_8 = require("../../../8")
var g = function __importDefault(module) {
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
}($$_$$_$$_8)
import /* [auto-meaningful-name] */$$_$$_$$_90 = require("../../../90")
import /* [auto-meaningful-name] */$$_$$_$$_145 = require("../../../145")
import /* [auto-meaningful-name] */$$_$$_$$_240 = require("../../../240")
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
}($$_$$_$$_240)
var E = function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$position = e.position
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$size = e.size
  var /* [auto-meaningful-name] */e$opacity = e.opacity
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var /* [auto-meaningful-name] */e$attributes$backgroundColor = e$attributes.backgroundColor
  var /* [auto-meaningful-name] */e$attributes$content = e$attributes.content
  var /* [auto-meaningful-name] */e$attributes$color = e$attributes.color
  var /* [auto-meaningful-name] */e$attributes$fontFamily = e$attributes.fontFamily
  var /* [auto-meaningful-name] */e$attributes$fontSize = e$attributes.fontSize
  var /* [auto-meaningful-name] */e$attributes$justifyContent = e$attributes.justifyContent
  var /* [auto-meaningful-name] */e$attributes$textAlign = e$attributes.textAlign
  var /* [auto-meaningful-name] */e$attributes$overflow = e$attributes.overflow
  var C = undefined === e$attributes$overflow ? "hidden" : e$attributes$overflow
  var T = {
    width: e$size.width,
    height: e$size.height,
    minWidth: "".concat($$_$$_$$_145.m, "px"),
    minHeight: "".concat($$_$$_$$_145.l, "px"),
    backgroundColor: o()(e$attributes$backgroundColor).toString(),
    color: o()(e$attributes$color).toString(),
    fontFamily: e$attributes$fontFamily,
    fontSize: e$attributes$fontSize,
    justifyContent: e$attributes$justifyContent,
    textAlign: e$attributes$textAlign,
    top: e$position.y,
    left: e$position.x,
    opacity: undefined === e$opacity ? undefined : e$opacity / 100,
    overflow: C
  }
  return s.a.createElement("div", {
    id: t,
    "data-widget-type": $$_$$_$$_5.H,
    "data-role": $$_$$_$$_5.M,
    className: g()($$_$$_$$_90.b, y.a.textWidget, $$_$$_$$_11.a({}, y.a.hide, !e$visible)),
    onClick: function () {
      e$onClick()
    },
    style: T
  }, s.a.createElement("span", {
    className: y.a.content
  }, e$attributes$content))
}
import /* [auto-meaningful-name] */$$_$$_$$_542 = require("../../../542")
import /* [auto-meaningful-name] */$$_$$_index = require("../../index")
import /* [auto-meaningful-name] */$$_$$_$$_55 = require("../../../55")
var T = function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$parentId = e.parentId
  function o() {
    $$_$$_index.emitWidgetEvent(e$type, "onTextPress", t)
    $$_$$_index.emitTextPress(t)
    $$_$$_$$_55.b.playerWidgetLog({
      widgetId: e$parentId ? t.replace(/_\d+$/, "") : t,
      widgetType: e$type,
      message: "onWidgetPress"
    })
  }
  return e$parentId ? s.a.createElement($$_$$_$$_542.a, Object.assign({}, e, {
    onClick: o
  })) : s.a.createElement(E, Object.assign({}, e, {
    onClick: o
  }))
}
import /* [auto-meaningful-name] */$$_$$_$$_543_index = require("../../../543/index")
import /* [auto-meaningful-name] */$$_243 = require("../243")
import /* [auto-meaningful-name] */$$_$$_$$_28_index = require("../../../28/index")
var j = function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$animationRecord = e.animationRecord
  var /* [auto-meaningful-name] */e$attributes$disabled = e$attributes.disabled
  var l = $$_$$_$$_16_index.e(function (e) {
    return e.iconFileMap
  }).get(e$attributes.iconId)
  return s.a.createElement($$_$$_$$_543_index.a, Object.assign({}, e, {
    iconFile: l,
    onClick: function () {
      if (!e$attributes$disabled) {
        $$_$$_index.emitButtonPress(t)
      }
      if (!e$attributes$disabled) {
        $$_$$_index.emitWidgetEvent(e$type, "onButtonPressPress", t)
      }
      $$_243.b(t, $$_$$_$$_5.d, $$_$$_$$_28_index.m("click", e$animationRecord))
      $$_$$_$$_55.b.playerWidgetLog({
        widgetId: t,
        widgetType: e$type,
        message: "onWidgetPress"
      })
    },
    onMouseDown: function () {
      if (!e$attributes$disabled) {
        $$_$$_index.emitButtonPressIn(t)
      }
      if (!e$attributes$disabled) {
        $$_$$_index.emitWidgetEvent(e$type, "onButtonPressPressIn", t)
      }
    },
    onMouseUp: function () {
      if (!e$attributes$disabled) {
        $$_$$_index.emitButtonPressOut(t)
      }
      if (!e$attributes$disabled) {
        $$_$$_index.emitWidgetEvent(e$type, "onButtonPressPressOut", t)
      }
    }
  }))
}
import /* [auto-meaningful-name] */$$_$$_$$_6 = require("../../../6")
import /* [auto-meaningful-name] */$$_$$_$$_321 = require("../../../321")
import /* [auto-meaningful-name] */$$_$$_$$_82 = require("../../../82")
import /* [auto-meaningful-name] */$$_$$_$$_60 = require("../../../60")
import /* [auto-meaningful-name] */$$_$$_$$_116 = require("../../../116")
import /* [auto-meaningful-name] */$$_$$_$$_216 = require("../../../216")
var L = function __importDefault(module) {
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
}($$_$$_$$_216)
var P = function (e) {
  var /* [auto-meaningful-name] */e$position = e.position
  var /* [auto-meaningful-name] */e$size = e.size
  var r = e.id
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$opacity = e.opacity
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$iconFileOrUrl = e.iconFileOrUrl
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var /* [auto-meaningful-name] */e$onMouseDown = e.onMouseDown
  var /* [auto-meaningful-name] */e$onMouseUp = e.onMouseUp
  var /* [auto-meaningful-name] */e$attributes$textVisible = e$attributes.textVisible
  var /* [auto-meaningful-name] */e$attributes$text = e$attributes.text
  var /* [auto-meaningful-name] */e$attributes$fontFamily = e$attributes.fontFamily
  var /* [auto-meaningful-name] */e$attributes$maxFontSize = e$attributes.maxFontSize
  var /* [auto-meaningful-name] */e$attributes$textColor = e$attributes.textColor
  var /* [auto-meaningful-name] */e$attributes$textAlign = e$attributes.textAlign
  var /* [auto-meaningful-name] */e$attributes$iconVisible = e$attributes.iconVisible
  var /* [auto-meaningful-name] */e$attributes$iconColor = e$attributes.iconColor
  var /* [auto-meaningful-name] */e$attributes$backgroundMode = e$attributes.backgroundMode
  var /* [auto-meaningful-name] */e$attributes$templateMode = e$attributes.templateMode
  var /* [auto-meaningful-name] */e$attributes$backgroundColor = e$attributes.backgroundColor
  var /* [auto-meaningful-name] */e$attributes$backgroundImage = e$attributes.backgroundImage
  var /* [auto-meaningful-name] */e$attributes$imageResizeMode = e$attributes.imageResizeMode
  var /* [auto-meaningful-name] */e$attributes$disabled = e$attributes.disabled
  var P = "true" === e$attributes$textVisible.toString()
  var B = "true" === e$attributes$iconVisible.toString()
  var F = P ? e$attributes$textAlign : $$_$$_$$_60.a.CENTER
  var G = e$attributes$maxFontSize
  if (!P) {
    G = $$_$$_$$_82.l
  }
  var U = 2 * $$_$$_$$_82.r
  var W = 2 * $$_$$_$$_82.q
  if (e$attributes$backgroundMode === $$_$$_$$_116.a.IMAGE) {
    U = 2 * $$_$$_$$_82.j
    W = 2 * $$_$$_$$_82.i
  }
  var H = (e$size.width - U) / 1.5
  var V = (e$size.height - W) / 1.5
  var z = Math.min(H, V, G)
  z = Math.max(z, $$_$$_$$_82.o)
  z = Math.floor(z)
  var Y = React.useMemo(function () {
    return function (e, t, n, r) {
      var o
      o = {}
      $$_$$_$$_11.a(o, $$_$$_$$_116.b.RECTANGLE_FILL, {
        color: r ? "#e6e6e6" : t,
        backgroundColor: r ? "#cccccc" : n,
        borderRadius: e / 4
      })
      $$_$$_$$_11.a(o, $$_$$_$$_116.b.RECTANGLE_OUTLINE, {
        color: r ? "#e9e9e9" : t,
        border: "2px solid ".concat(r ? "#e9e9e9" : n),
        backgroundColor: "white",
        borderRadius: e / 4,
        padding: "0 10px"
      })
      $$_$$_$$_11.a(o, $$_$$_$$_116.b.CIRCLE_FILL, {
        color: r ? "#e6e6e6" : t,
        backgroundColor: r ? "#cccccc" : n,
        borderRadius: e / 2
      })
      $$_$$_$$_11.a(o, $$_$$_$$_116.b.CIRCLE_OUTLINE, {
        color: r ? "#e9e9e9" : t,
        border: "2px solid ".concat(r ? "#e9e9e9" : n),
        backgroundColor: "white",
        borderRadius: e / 2,
        padding: "0 10px"
      })
      return o
    }(e$size.height, e$attributes$textColor, e$attributes$backgroundColor, e$attributes$disabled)
  }, [e$attributes$backgroundColor, e$attributes$disabled, e$size.height, e$attributes$textColor])
  var K = undefined
  K = e$attributes$backgroundMode === $$_$$_$$_116.a.IMAGE ? {
    color: e$attributes$disabled ? "#7E7E7E" : e$attributes$textColor,
    backgroundImage: "url(".concat(e$attributes$backgroundImage, ")"),
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "contain" === e$attributes$imageResizeMode ? "contain" : "100% 100%"
  } : Y[e$attributes$templateMode]
  var q = $$_$$_$$_6.a({
    top: e$position.y,
    left: e$position.x,
    height: e$size.height,
    width: e$size.width,
    fontSize: z,
    fontFamily: e$attributes$fontFamily,
    justifyContent: F,
    opacity: undefined === e$opacity ? undefined : e$opacity / 100,
    filter: e$attributes$disabled && e$attributes$backgroundMode === $$_$$_$$_116.a.IMAGE ? "saturate(0) brightness(1.1)" : undefined,
    padding: e$attributes$backgroundMode === $$_$$_$$_116.a.TEMPLATE || e$size.width < 2 * $$_$$_$$_82.j ? "0 ".concat($$_$$_$$_82.r, "px") : "0 ".concat($$_$$_$$_82.j, "px")
  }, K)
  return s.a.createElement("button", {
    id: r,
    className: g()($$_$$_$$_90.b, L.a.buttonWidget, !e$attributes$disabled && L.a.transform, $$_$$_$$_11.a({}, L.a.hide, !e$visible)),
    "data-role": $$_$$_$$_5.M,
    "data-widget-type": $$_$$_$$_5.z,
    "data-min-width": $$_$$_$$_82.p,
    "data-max-width": $$_$$_$$_82.m,
    "data-min-height": $$_$$_$$_82.n,
    "data-max-height": $$_$$_$$_82.k,
    onClick: function () {
      if (e$onClick) {
        e$onClick()
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
    style: $$_$$_$$_6.a($$_$$_$$_6.a({}, q), {}, {
      flexDirection: F === $$_$$_$$_60.a.RIGHT ? "row-reverse" : "row"
    })
  }, B && s.a.createElement("div", {
    className: L.a.iconWrapper,
    style: {
      color: e$attributes$disabled ? e$attributes$backgroundMode === $$_$$_$$_116.a.TEMPLATE ? K.color : "#7E7E7E" : e$attributes$iconColor
    }
  }, "string" === typeof e$iconFileOrUrl ? s.a.createElement("img", {
    style: {
      width: z,
      height: z
    },
    src: e$iconFileOrUrl,
    alt: ""
  }) : e$iconFileOrUrl && s.a.createElement($$_$$_$$_321.a, {
    icon: e$iconFileOrUrl
  })), P && s.a.createElement("div", {
    className: g()(L.a.textWrapper, B && e$attributes$text && (F === $$_$$_$$_60.a.RIGHT ? L.a.iconToTextRightSpacing : L.a.iconToTextLeftSpacing))
  }, s.a.createElement("div", {
    className: L.a.text,
    style: {
      display: "flex",
      textAlign: F
    }
  }, s.a.createElement("span", null, e$attributes$text))))
}
import /* [auto-meaningful-name] */$$_114 = require("../114")
var F = function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$animationRecord = e.animationRecord
  var /* [auto-meaningful-name] */e$attributes$disabled = e$attributes.disabled
  var /* [auto-meaningful-name] */e$attributes$textColor = e$attributes.textColor
  var /* [auto-meaningful-name] */e$attributes$iconColor = e$attributes.iconColor
  var /* [auto-meaningful-name] */e$attributes$backgroundColor = e$attributes.backgroundColor
  var /* [auto-meaningful-name] */e$attributes$iconId = e$attributes.iconId
  var /* [auto-meaningful-name] */e$attributes$backgroundImage = e$attributes.backgroundImage
  var m = $$_114.a(e$attributes$iconId) || $$_$$_$$_82.c
  var g = $$_114.b(e$attributes$backgroundImage) || $$_$$_$$_82.f
  var _ = React.useMemo(function () {
    try {
      return o()(e$attributes$textColor.toString()).toString()
    } catch (e) {
      $$_$$_$$_55.b.widgetError({
        widgetId: t,
        widgetType: e$type,
        message: "player/colorError"
      })
      return e$attributes$textColor
    }
  }, [t, e$attributes$textColor, e$type])
  var v = React.useMemo(function () {
    try {
      return o()(e$attributes$iconColor.toString()).toString()
    } catch (e) {
      $$_$$_$$_55.b.widgetError({
        widgetId: t,
        widgetType: e$type,
        message: "player/colorError"
      })
      return e$attributes$iconColor
    }
  }, [t, e$attributes$iconColor, e$type])
  var b = React.useMemo(function () {
    try {
      return o()(e$attributes$backgroundColor.toString()).toString()
    } catch (e) {
      $$_$$_$$_55.b.widgetError({
        widgetId: t,
        widgetType: e$type,
        message: "player/colorError"
      })
      return e$attributes$backgroundColor
    }
  }, [e$attributes$backgroundColor, t, e$type])
  return s.a.createElement(P, Object.assign({}, e, {
    iconFileOrUrl: m,
    attributes: $$_$$_$$_6.a($$_$$_$$_6.a({}, e.attributes), {}, {
      textColor: _,
      iconColor: v,
      backgroundColor: b,
      backgroundImage: g
    }),
    onClick: function () {
      if (!e$attributes$disabled) {
        $$_$$_index.emitButtonPress(t)
      }
      if (!e$attributes$disabled) {
        $$_$$_index.emitWidgetEvent(e$type, "onButtonPressPress", t)
      }
      $$_243.b(t, $$_$$_$$_5.z, $$_$$_$$_28_index.m("click", e$animationRecord))
      $$_$$_$$_55.b.playerWidgetLog({
        widgetId: t,
        widgetType: e$type,
        message: "onWidgetPress"
      })
    },
    onMouseDown: function () {
      if (!e$attributes$disabled) {
        $$_$$_index.emitButtonPressIn(t)
      }
      if (!e$attributes$disabled) {
        $$_$$_index.emitWidgetEvent(e$type, "onButtonPressPressIn", t)
      }
    },
    onMouseUp: function () {
      if (!e$attributes$disabled) {
        $$_$$_index.emitButtonPressOut(t)
      }
      if (!e$attributes$disabled) {
        $$_$$_index.emitWidgetEvent(e$type, "onButtonPressPressOut", t)
      }
    }
  }))
}
import /* [auto-meaningful-name] */$$_$$_$$_510 = require("../../../510")
var U = function __importDefault(module) {
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
}($$_$$_$$_510)
import /* [auto-meaningful-name] */$$_$$_$$_429 = require("../../../429")
import /* [auto-meaningful-name] */$$_$$_$$_133 = require("../../../133")
var V = React.memo(function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$position = e.position
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$opacity = e.opacity
  var /* [auto-meaningful-name] */e$size = e.size
  var /* [auto-meaningful-name] */e$parentId = e.parentId
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$attributes$backgroundColor = e$attributes.backgroundColor
  var /* [auto-meaningful-name] */e$attributes$resizeMode = e$attributes.resizeMode
  var /* [auto-meaningful-name] */e$attributes$borderRadius = e$attributes.borderRadius
  var /* [auto-meaningful-name] */e$attributes$fileId = e$attributes.fileId
  var b = React.useRef(null)
  var y = $$_114.b(e$attributes$fileId)
  if (!y) {
    y = e$parentId ? $$_$$_$$_133.i : $$_$$_$$_133.m
  }
  return s.a.createElement("div", {
    id: t,
    className: g()(U.a.imageWidget, $$_$$_$$_90.b),
    "data-role": $$_$$_$$_5.M,
    "data-type": $$_$$_$$_5.v,
    "data-scale-mode": $$_$$_$$_5.p.PROPORTIONAL,
    ref: b,
    onClick: function () {
      $$_$$_index.emitWidgetEvent(e$type, "onImagePress", t)
      $$_$$_index.emitImagePress(t)
      $$_$$_$$_55.b.playerWidgetLog({
        widgetId: e$parentId ? t.replace(/_\d+$/, "") : t,
        widgetType: e$type,
        message: "onWidgetPress"
      })
    },
    style: {
      top: e$position.y,
      left: e$position.x,
      height: e$parentId ? "100%" : e$size.height,
      width: e$parentId ? "100%" : e$size.width,
      visibility: e$visible ? undefined : "hidden",
      pointerEvents: e$visible ? undefined : "none",
      position: e$parentId ? "static" : "absolute",
      backgroundColor: o()(e$attributes$backgroundColor).toString(),
      backgroundImage: "url(".concat(y, ")"),
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundSize: $$_$$_$$_429.a(e$attributes$resizeMode),
      borderRadius: e$attributes$borderRadius,
      opacity: undefined === e$opacity ? undefined : e$opacity / 100
    }
  }, s.a.createElement("img", {
    src: y,
    alt: "",
    style: {
      visibility: "hidden",
      borderRadius: e$attributes$borderRadius,
      objectFit: $$_$$_$$_429.b(e$attributes$resizeMode)
    }
  }))
})
import /* [auto-meaningful-name] */$$_$$_$$_10_index = require("../../../10/index")
import /* [auto-meaningful-name] */$$_$$_$$_77 = require("../../../77")
import /* [auto-meaningful-name] */$$_$$_$$_291 = require("../../../291")
var q = function __importDefault(module) {
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
}($$_$$_$$_291)
import /* [auto-meaningful-name] */$$_$$_$$_97 = require("../../../97")
import /* [auto-meaningful-name] */$$_index = require("../index")
function Z(e, t) {
  try {
    return o()(e.toString()).alpha(t).toString()
  } catch (n) {
    return ""
  }
}
import /* [auto-meaningful-name] */$$_$$_$$_551_index = require("../../../551/index")
var $ = function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$animationRecord = e.animationRecord
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$attributes$options = e$attributes.options
  var /* [auto-meaningful-name] */e$attributes$disabled = e$attributes.disabled
  var /* [auto-meaningful-name] */e$attributes$mode = e$attributes.mode
  return s.a.createElement($$_$$_$$_551_index.a, Object.assign({}, e, {
    onOptionClick: function (e) {
      if (!e$attributes$disabled && "disabled" !== e$attributes$options[e].state && e$attributes$options.findIndex(function (e) {
        return e.isSelected
      }) !== e) {
        var o = e + 1
        $$_$$_index.setRadioWidgetOptionSelectedOrDisabled(t, o, "selected")
        $$_243.b(t, $$_$$_$$_5.C, $$_$$_$$_28_index.m("click", e$animationRecord, e$attributes$mode), e)
        $$_$$_$$_55.b.playerWidgetLog({
          widgetId: t,
          widgetType: e$type,
          message: "onRadioSelected",
          values: {
            index: o
          }
        })
      }
    }
  }))
}
import /* [auto-meaningful-name] */$$_$$_$$_552_index = require("../../../552/index")
var te = function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$attributes$options = e$attributes.options
  var /* [auto-meaningful-name] */e$attributes$disabled = e$attributes.disabled
  return s.a.createElement($$_$$_$$_552_index.a, Object.assign({}, e, {
    onOptionClick: function (e) {
      if (!e$attributes$disabled && "disabled" !== e$attributes$options[e].state) {
        var r = []
        e$attributes$options.forEach(function (e, t) {
          if (e.isSelected) {
            r.push(t)
          }
        })
        var a = e + 1
        if (r.includes(e)) {
          $$_$$_index.setCheckboxWidgetOptionUnselected(t, a)
          $$_$$_$$_55.b.playerWidgetLog({
            widgetId: t,
            widgetType: e$type,
            message: "onCheckboxUnselected",
            values: {
              index: a,
              content: e$attributes$options[e].content
            }
          })
        } else {
          $$_$$_index.setCheckboxWidgetOptionSelected(t, a)
          $$_$$_$$_55.b.playerWidgetLog({
            widgetId: t,
            widgetType: e$type,
            message: "onCheckboxSelected",
            values: {
              index: a,
              content: e$attributes$options[e].content
            }
          })
        }
      }
    }
  }))
}
import /* [auto-meaningful-name] */$$_$$_$$_544_index = require("../../../544/index")
var re = function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$type = e.type
  return s.a.createElement($$_$$_$$_544_index.a, Object.assign({}, e, {
    onLoad: function () {
      $$_$$_index.emitWebViewWidgetLoaded(t)
      $$_$$_$$_55.b.playerWidgetLog({
        widgetId: t,
        widgetType: e$type,
        message: "onWebViewUrlLoaded"
      })
    },
    onLoading: function () {
      $$_$$_index.emitWebViewWidgetStartLoad(t)
      $$_$$_$$_55.b.playerWidgetLog({
        widgetId: t,
        widgetType: e$type,
        message: "onWebViewUrlStartLoad"
      })
    },
    onError: function () {
      $$_$$_index.emitWebViewWidgetLoadError(t)
      $$_$$_$$_55.b.playerWidgetLog({
        widgetId: t,
        widgetType: e$type,
        message: "onWebViewUrlLoadError"
      })
    }
  }))
}
import /* [auto-meaningful-name] */$$_$$_$$_545_index = require("../../../545/index")
import /* [auto-meaningful-name] */$$_$$_$$_131 = require("../../../131")
var ae = function (e) {
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$attributes$backgroundOpenImage = e$attributes.backgroundOpenImage
  var r = undefined === e$attributes$backgroundOpenImage ? $$_$$_$$_131.b : e$attributes$backgroundOpenImage
  var /* [auto-meaningful-name] */e$attributes$backgroundCloseImage = e$attributes.backgroundCloseImage
  var i = undefined === e$attributes$backgroundCloseImage ? $$_$$_$$_131.a : e$attributes$backgroundCloseImage
  var a = $$_114.b(r) || $$_$$_$$_131.b
  var c = $$_114.b(i) || $$_$$_$$_131.a
  return s.a.createElement($$_$$_$$_545_index.a, Object.assign({}, e, {
    attributes: $$_$$_$$_6.a($$_$$_$$_6.a({}, e.attributes), {}, {
      backgroundCloseImage: c,
      backgroundOpenImage: a
    }),
    onSwitch: function (t) {
      var n = e.id
      var /* [auto-meaningful-name] */e$type = e.type
      $$_$$_index.setSwitchWidgetState(n, t)
      $$_$$_$$_55.b.playerWidgetLog({
        widgetId: n,
        widgetType: e$type,
        message: t ? "onSwitchChangeTrue" : "onSwitchChangeFalse"
      })
    }
  }))
}
import /* [auto-meaningful-name] */$$_$$_$$_546_index = require("../../../546/index")
import /* [auto-meaningful-name] */$$_$$_$$_148 = require("../../../148")
var le = function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$attributes$handleImageFileId = e$attributes.handleImageFileId
  var i = undefined === e$attributes$handleImageFileId ? $$_$$_$$_148.c : e$attributes$handleImageFileId
  var /* [auto-meaningful-name] */e$attributes$backgroundImageFileId = e$attributes.backgroundImageFileId
  var c = undefined === e$attributes$backgroundImageFileId ? $$_$$_$$_148.a : e$attributes$backgroundImageFileId
  var /* [auto-meaningful-name] */e$attributes$trackImageFileId = e$attributes.trackImageFileId
  var u = undefined === e$attributes$trackImageFileId ? $$_$$_$$_148.g : e$attributes$trackImageFileId
  var d = $$_114.b(c) || $$_$$_$$_148.a
  var p = $$_114.b(i) || $$_$$_$$_148.c
  var f = $$_114.b(u) || $$_$$_$$_148.g
  return s.a.createElement($$_$$_$$_546_index.a, Object.assign({}, e, {
    onSliderChange: function (e) {
      $$_$$_index.setSliderWidgetValue(t, e, false)
      $$_$$_index.emitSliderWidgetChange(t, e)
    },
    onEndToSlid: function (e) {
      $$_$$_index.emitSliderWidgetEndToSlide(t, e)
      $$_$$_$$_55.b.playerWidgetLog({
        widgetId: t,
        widgetType: e$type,
        message: "onSliderEndSlide",
        values: {
          value: e
        }
      })
    },
    onStartToSlid: function (e) {
      $$_$$_index.emitSliderWidgetStartToSlide(t, e)
      $$_$$_$$_55.b.playerWidgetLog({
        widgetId: t,
        widgetType: e$type,
        message: "onSliderStartSlide",
        values: {
          value: e
        }
      })
    },
    handleImageUrl: p,
    backgroundImageUrl: d,
    trackImageUrl: f
  }))
}
import /* [auto-meaningful-name] */$$_$$_$$_129 = require("../../../129")
import /* [auto-meaningful-name] */$$_$$_$$_30 = require("../../../30")
var pe = function __importDefault(module) {
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
}($$_$$_$$_30)
import /* [auto-meaningful-name] */$$_$$_$$_13_index = require("../../../13/index")
import /* [auto-meaningful-name] */$$_89 = require("../89")
import /* [auto-meaningful-name] */$$_12 = require("../12")
import /* [auto-meaningful-name] */$_index = require("./index")
var _e = {}
var ve = React.memo(function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$position = e.position
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$opacity = e.opacity
  var /* [auto-meaningful-name] */e$size = e.size
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$attributes$backgroundColor = e$attributes.backgroundColor
  var /* [auto-meaningful-name] */e$attributes$dataSource = e$attributes.dataSource
  var /* [auto-meaningful-name] */e$attributes$templateType = e$attributes.templateType
  var /* [auto-meaningful-name] */e$attributes$templateRenderType = e$attributes.templateRenderType
  var /* [auto-meaningful-name] */e$attributes$templateSlotMap = e$attributes.templateSlotMap
  var /* [auto-meaningful-name] */e$attributes$disabled = e$attributes.disabled
  for (var b in e$attributes$templateSlotMap) {
    var y = $$_12.b(e$attributes$templateSlotMap[b].widgetId)
    _e[b] = false !== (null === y || undefined === y ? undefined : y.visible)
  }
  function E(e, t) {
    return s.a.createElement(s.a.Fragment, null, e$attributes$templateType === $$_$$_$$_5.o.ONLY_TITLE && function (e, t) {
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
      return s.a.createElement("div", {
        onClick: function (t) {
          t.stopPropagation()
          T(e + 1)
        },
        className: g()(pe.a.flexSC, pe.a.template1, "tiled" === e$attributes$templateRenderType ? pe.a.itemTiled : pe.a.itemCard)
      }, _e.titleSlot ? s.a.createElement("div", {
        className: pe.a.title,
        onClick: O.bind(null, "titleSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)) : s.a.createElement("div", null), s.a.createElement("div", {
        className: pe.a.iconBox
      }, s.a.createElement($$_$$_$$_13_index.j, {
        type: "icon-fold-left",
        className: pe.a.icon
      })))
    }(e, t), e$attributes$templateType === $$_$$_$$_5.o.TITLE_AND_SUBTITLE && function (e, t) {
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$subTitleSlot
      return s.a.createElement("div", {
        onClick: function (t) {
          t.stopPropagation()
          T(e + 1)
        },
        className: g()(pe.a.flexSC, pe.a.template2, "tiled" === e$attributes$templateRenderType ? pe.a.itemTiled : pe.a.itemCard)
      }, _e.titleSlot ? s.a.createElement("div", {
        className: pe.a.title,
        onClick: O.bind(null, "titleSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)) : s.a.createElement("div", null), s.a.createElement("div", {
        className: g()(pe.a.flexSC, pe.a.subTitleBox)
      }, _e.subTitleSlot && s.a.createElement("div", {
        className: pe.a.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId, "subTitleSlot", e, t)), s.a.createElement($$_$$_$$_13_index.j, {
        type: "icon-fold-left",
        className: pe.a.icon
      })))
    }(e, t), e$attributes$templateType === $$_$$_$$_5.o.IMAGE_TITLE_AND_SUBTITLE && function (e, t) {
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$imageSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$subTitleSlot
      return s.a.createElement("div", {
        onClick: function (t) {
          t.stopPropagation()
          T(e + 1)
        },
        className: g()(pe.a.flexSC, pe.a.template3, "tiled" === e$attributes$templateRenderType ? pe.a.itemTiled : pe.a.itemCard)
      }, s.a.createElement("div", {
        className: pe.a.title
      }, _e.imageSlot && s.a.createElement("div", {
        className: pe.a.smallImgBox,
        onClick: O.bind(null, "imageSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$imageSlot = e$attributes$templateSlotMap.imageSlot) || undefined === e$attributes$templateSlotMap$imageSlot ? undefined : e$attributes$templateSlotMap$imageSlot.widgetId, "imageSlot", e, t)), _e.titleSlot && s.a.createElement("div", {
        onClick: O.bind(null, "titleSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t))), s.a.createElement("div", {
        className: g()(pe.a.flexSC, pe.a.subTitleBox)
      }, _e.subTitleSlot && s.a.createElement("div", {
        className: pe.a.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId, "subTitleSlot", e, t)), s.a.createElement($$_$$_$$_13_index.j, {
        type: "icon-fold-left",
        className: pe.a.icon
      })))
    }(e, t), e$attributes$templateType === $$_$$_$$_5.o.AVATAR_AND_TITLE_SUBTITLE && function (e, t) {
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$avatarSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$subTitleSlot
      return s.a.createElement("div", {
        onClick: function (t) {
          t.stopPropagation()
          T(e + 1)
        },
        className: g()(pe.a.flexSC, pe.a.template4, "tiled" === e$attributes$templateRenderType ? pe.a.itemTiled : pe.a.itemCard)
      }, s.a.createElement("div", {
        className: pe.a.avatarAndTitle
      }, _e.avatarSlot && s.a.createElement("div", {
        className: pe.a.avatarImgBox,
        onClick: O.bind(null, "avatarSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$avatarSlot = e$attributes$templateSlotMap.avatarSlot) || undefined === e$attributes$templateSlotMap$avatarSlot ? undefined : e$attributes$templateSlotMap$avatarSlot.widgetId, "avatarSlot", e, t)), s.a.createElement("div", {
        className: pe.a.titleBox
      }, _e.titleSlot && s.a.createElement("div", {
        className: pe.a.title,
        onClick: O.bind(null, "titleSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)), _e.subTitleSlot && s.a.createElement("div", {
        className: pe.a.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId, "subTitleSlot", e, t)))), s.a.createElement("div", {
        className: pe.a.iconBox
      }, s.a.createElement($$_$$_$$_13_index.j, {
        type: "icon-fold-left",
        className: pe.a.icon
      })))
    }(e, t), e$attributes$templateType === $$_$$_$$_5.o.IMAGE_AND_TITLE_DESC && function (e, t) {
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$imageSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$descSlot
      return s.a.createElement("div", {
        onClick: function (t) {
          t.stopPropagation()
          T(e + 1)
        },
        className: g()(pe.a.flexSC, pe.a.template5, "tiled" === e$attributes$templateRenderType ? pe.a.itemTiled : pe.a.itemCard)
      }, s.a.createElement("div", {
        className: pe.a.imgAndTitleBox
      }, _e.imageSlot && s.a.createElement("div", {
        className: pe.a.smallImgBox,
        onClick: O.bind(null, "imageSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$imageSlot = e$attributes$templateSlotMap.imageSlot) || undefined === e$attributes$templateSlotMap$imageSlot ? undefined : e$attributes$templateSlotMap$imageSlot.widgetId, "imageSlot", e, t)), s.a.createElement("div", null, _e.titleSlot && s.a.createElement("div", {
        className: pe.a.title,
        onClick: O.bind(null, "titleSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)), _e.descSlot && s.a.createElement("div", {
        className: pe.a.desc,
        onClick: O.bind(null, "descSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$descSlot = e$attributes$templateSlotMap.descSlot) || undefined === e$attributes$templateSlotMap$descSlot ? undefined : e$attributes$templateSlotMap$descSlot.widgetId, "descSlot", e, t)))), s.a.createElement("div", {
        className: pe.a.iconBox
      }, s.a.createElement($$_$$_$$_13_index.j, {
        type: "icon-fold-left",
        className: pe.a.icon
      })))
    }(e, t), e$attributes$templateType === $$_$$_$$_5.o.AVATAR_TITLE_SUBTITLE_AND_IMAGE_DESC && function (e, t) {
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$avatarSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$subTitleSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$bannerSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$descSlot
      return s.a.createElement("div", {
        onClick: function (t) {
          t.stopPropagation()
          T(e + 1)
        },
        className: g()(pe.a.template6, "tiled" === e$attributes$templateRenderType ? pe.a.itemTiled : pe.a.itemCard)
      }, s.a.createElement("div", {
        className: pe.a.avatarAndTitle
      }, _e.avatarSlot && s.a.createElement("div", {
        className: pe.a.avatarImgBox,
        onClick: O.bind(null, "avatarSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$avatarSlot = e$attributes$templateSlotMap.avatarSlot) || undefined === e$attributes$templateSlotMap$avatarSlot ? undefined : e$attributes$templateSlotMap$avatarSlot.widgetId, "avatarSlot", e, t)), s.a.createElement("div", {
        className: pe.a.titleBox
      }, _e.titleSlot && s.a.createElement("div", {
        className: pe.a.title,
        onClick: O.bind(null, "titleSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)), _e.subTitleSlot && s.a.createElement("div", {
        className: pe.a.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId, "subTitleSlot", e, t)))), _e.bannerSlot && s.a.createElement("div", {
        className: pe.a.bannerImgBox,
        onClick: O.bind(null, "bannerSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$bannerSlot = e$attributes$templateSlotMap.bannerSlot) || undefined === e$attributes$templateSlotMap$bannerSlot ? undefined : e$attributes$templateSlotMap$bannerSlot.widgetId, "bannerSlot", e, t)), _e.descSlot && s.a.createElement("div", {
        className: pe.a.desc,
        onClick: O.bind(null, "descSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$descSlot = e$attributes$templateSlotMap.descSlot) || undefined === e$attributes$templateSlotMap$descSlot ? undefined : e$attributes$templateSlotMap$descSlot.widgetId, "descSlot", e, t)))
    }(e, t), e$attributes$templateType === $$_$$_$$_5.o.IMAGE_AND_AVATAR_TITLE_SUBTITLE_AND_DESC && function (e, t) {
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$bannerSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$avatarSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$subTitleSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$descSlot
      return s.a.createElement("div", {
        onClick: function (t) {
          t.stopPropagation()
          T(e + 1)
        },
        className: g()(pe.a.template6, "tiled" === e$attributes$templateRenderType ? pe.a.itemTiled : pe.a.itemCard)
      }, _e.bannerSlot && s.a.createElement("div", {
        className: pe.a.bannerImgBox,
        onClick: O.bind(null, "bannerSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$bannerSlot = e$attributes$templateSlotMap.bannerSlot) || undefined === e$attributes$templateSlotMap$bannerSlot ? undefined : e$attributes$templateSlotMap$bannerSlot.widgetId, "bannerSlot", e, t)), s.a.createElement("div", {
        className: pe.a.avatarAndTitle
      }, _e.avatarSlot && s.a.createElement("div", {
        className: pe.a.avatarImgBox,
        onClick: O.bind(null, "avatarSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$avatarSlot = e$attributes$templateSlotMap.avatarSlot) || undefined === e$attributes$templateSlotMap$avatarSlot ? undefined : e$attributes$templateSlotMap$avatarSlot.widgetId, "avatarSlot", e, t)), s.a.createElement("div", {
        className: pe.a.titleBox
      }, _e.titleSlot && s.a.createElement("div", {
        className: pe.a.title,
        onClick: O.bind(null, "titleSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)), _e.subTitleSlot && s.a.createElement("div", {
        className: pe.a.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId, "subTitleSlot", e, t)))), _e.descSlot && s.a.createElement("div", {
        className: pe.a.desc,
        onClick: O.bind(null, "descSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$descSlot = e$attributes$templateSlotMap.descSlot) || undefined === e$attributes$templateSlotMap$descSlot ? undefined : e$attributes$templateSlotMap$descSlot.widgetId, "descSlot", e, t)))
    }(e, t))
  }
  function O(e, n) {
    if (!e$attributes$disabled) {
      $$_$$_index.emitListViewerChildWidgetPress("".concat(t, "_").concat(e), n + 1)
    }
  }
  function T(e) {
    if (!e$attributes$disabled) {
      $$_$$_index.emitListViewerPress(t, e)
      $$_$$_$$_55.b.playerWidgetLog({
        widgetId: t,
        widgetType: e$type,
        message: e ? "onListViewerIndexPress" : "onWidgetPress",
        values: {
          index: e
        }
      })
    }
  }
  return s.a.createElement("div", {
    onClick: T.bind(null, ""),
    id: t,
    "data-role": $$_$$_$$_5.M,
    "data-widget-type": $$_$$_$$_5.x,
    "data-min-width": $$_$$_$$_129.m,
    "data-max-width": $$_$$_$$_129.k,
    "data-min-height": $$_$$_$$_129.l,
    "data-max-height": $$_$$_$$_129.j,
    className: g()($$_$$_$$_90.b, pe.a.listViewerBox, $$_$$_$$_11.a({}, pe.a.hide, !e$visible)),
    style: {
      top: e$position.y,
      left: e$position.x,
      width: e$size.width,
      height: e$size.height,
      background: e$attributes$backgroundColor,
      opacity: undefined === e$opacity ? undefined : e$opacity / 100,
      filter: e$attributes$disabled ? "saturate(0)" : undefined,
      overflowY: "auto"
    }
  }, function () {
    if (e$attributes$dataSource) {
      var e = $$_89.b.get(e$attributes$dataSource)
      if (e) {
        return s.a.createElement(s.a.Fragment, null, e.data.map(function (e, t) {
          return s.a.createElement("div", {
            key: t
          }, E(t, e))
        }))
      }
    }
    return null
  }())
})
import /* [auto-meaningful-name] */$$_$$_$$_172 = require("../../../172")
import /* [auto-meaningful-name] */$$_$$_$$_45 = require("../../../45")
var Ee = function __importDefault(module) {
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
}($$_$$_$$_45)
var Oe = {}
var we = React.memo(function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$position = e.position
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$opacity = e.opacity
  var /* [auto-meaningful-name] */e$size = e.size
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$attributes$backgroundColor = e$attributes.backgroundColor
  var /* [auto-meaningful-name] */e$attributes$dataSource = e$attributes.dataSource
  var /* [auto-meaningful-name] */e$attributes$templateType = e$attributes.templateType
  var /* [auto-meaningful-name] */e$attributes$templateRenderType = e$attributes.templateRenderType
  var /* [auto-meaningful-name] */e$attributes$templateSlotMap = e$attributes.templateSlotMap
  var /* [auto-meaningful-name] */e$attributes$disabled = e$attributes.disabled
  for (var b in e$attributes$templateSlotMap) {
    var y = $$_12.b(e$attributes$templateSlotMap[b].widgetId)
    Oe[b] = false !== (null === y || undefined === y ? undefined : y.visible)
  }
  function E(e, t) {
    return s.a.createElement(s.a.Fragment, null, e$attributes$templateType === $$_$$_$$_5.o.ONLY_TITLE && function (e, t) {
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
      return s.a.createElement("div", {
        onClick: function (t) {
          t.stopPropagation()
          T(e)
        },
        className: g()(Ee.a.flexSC, Ee.a.template1, "tiled" === e$attributes$templateRenderType ? Ee.a.itemTiled : Ee.a.itemCard)
      }, Oe.titleSlot ? s.a.createElement("div", {
        className: Ee.a.title,
        onClick: O.bind(null, "titleSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)) : s.a.createElement("div", null), s.a.createElement("div", {
        className: Ee.a.iconBox
      }, s.a.createElement($$_$$_$$_13_index.j, {
        type: "icon-fold-left",
        className: Ee.a.icon
      })))
    }(e, t), e$attributes$templateType === $$_$$_$$_5.o.TITLE_AND_SUBTITLE && function (e, t) {
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$subTitleSlot
      return s.a.createElement("div", {
        onClick: function (t) {
          t.stopPropagation()
          T(e)
        },
        className: g()(Ee.a.flexSC, Ee.a.template2, "tiled" === e$attributes$templateRenderType ? Ee.a.itemTiled : Ee.a.itemCard)
      }, Oe.titleSlot ? s.a.createElement("div", {
        className: Ee.a.title,
        onClick: O.bind(null, "titleSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)) : s.a.createElement("div", null), s.a.createElement("div", {
        className: g()(Ee.a.flexSC, Ee.a.subTitleBox)
      }, Oe.subTitleSlot && s.a.createElement("div", {
        className: Ee.a.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId, "subTitleSlot", e, t)), s.a.createElement($$_$$_$$_13_index.j, {
        type: "icon-fold-left",
        className: Ee.a.icon
      })))
    }(e, t), e$attributes$templateType === $$_$$_$$_5.o.IMAGE_TITLE_AND_SUBTITLE && function (e, t) {
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$imageSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$subTitleSlot
      return s.a.createElement("div", {
        onClick: function (t) {
          t.stopPropagation()
          T(e)
        },
        className: g()(Ee.a.flexSC, Ee.a.template3, "tiled" === e$attributes$templateRenderType ? Ee.a.itemTiled : Ee.a.itemCard)
      }, s.a.createElement("div", {
        className: Ee.a.title
      }, Oe.imageSlot && s.a.createElement("div", {
        className: Ee.a.smallImgBox,
        onClick: O.bind(null, "imageSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$imageSlot = e$attributes$templateSlotMap.imageSlot) || undefined === e$attributes$templateSlotMap$imageSlot ? undefined : e$attributes$templateSlotMap$imageSlot.widgetId, "imageSlot", e, t)), Oe.titleSlot && s.a.createElement("div", {
        onClick: O.bind(null, "titleSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t))), s.a.createElement("div", {
        className: g()(Ee.a.flexSC, Ee.a.subTitleBox)
      }, Oe.subTitleSlot && s.a.createElement("div", {
        className: Ee.a.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId, "subTitleSlot", e, t)), s.a.createElement($$_$$_$$_13_index.j, {
        type: "icon-fold-left",
        className: Ee.a.icon
      })))
    }(e, t), e$attributes$templateType === $$_$$_$$_5.o.AVATAR_AND_TITLE_SUBTITLE && function (e, t) {
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$avatarSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$subTitleSlot
      return s.a.createElement("div", {
        onClick: function (t) {
          t.stopPropagation()
          T(e)
        },
        className: g()(Ee.a.flexSC, Ee.a.template4, "tiled" === e$attributes$templateRenderType ? Ee.a.itemTiled : Ee.a.itemCard)
      }, s.a.createElement("div", {
        className: Ee.a.avatarAndTitle
      }, Oe.avatarSlot && s.a.createElement("div", {
        className: Ee.a.avatarImgBox,
        onClick: O.bind(null, "avatarSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$avatarSlot = e$attributes$templateSlotMap.avatarSlot) || undefined === e$attributes$templateSlotMap$avatarSlot ? undefined : e$attributes$templateSlotMap$avatarSlot.widgetId, "avatarSlot", e, t)), s.a.createElement("div", {
        className: Ee.a.titleBox
      }, Oe.titleSlot && s.a.createElement("div", {
        className: Ee.a.title,
        onClick: O.bind(null, "titleSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)), Oe.subTitleSlot && s.a.createElement("div", {
        className: Ee.a.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId, "subTitleSlot", e, t)))), s.a.createElement("div", {
        className: Ee.a.iconBox
      }, s.a.createElement($$_$$_$$_13_index.j, {
        type: "icon-fold-left",
        className: Ee.a.icon
      })))
    }(e, t), e$attributes$templateType === $$_$$_$$_5.o.IMAGE_AND_TITLE_DESC && function (e, t) {
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$imageSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$descSlot
      return s.a.createElement("div", {
        onClick: function (t) {
          t.stopPropagation()
          T(e)
        },
        className: g()(Ee.a.flexSC, Ee.a.template5, "tiled" === e$attributes$templateRenderType ? Ee.a.itemTiled : Ee.a.itemCard)
      }, s.a.createElement("div", {
        className: Ee.a.imgAndTitleBox
      }, Oe.imageSlot && s.a.createElement("div", {
        className: Ee.a.smallImgBox,
        onClick: O.bind(null, "imageSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$imageSlot = e$attributes$templateSlotMap.imageSlot) || undefined === e$attributes$templateSlotMap$imageSlot ? undefined : e$attributes$templateSlotMap$imageSlot.widgetId, "imageSlot", e, t)), s.a.createElement("div", null, Oe.titleSlot && s.a.createElement("div", {
        className: Ee.a.title,
        onClick: O.bind(null, "titleSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)), Oe.descSlot && s.a.createElement("div", {
        className: Ee.a.desc,
        onClick: O.bind(null, "descSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$descSlot = e$attributes$templateSlotMap.descSlot) || undefined === e$attributes$templateSlotMap$descSlot ? undefined : e$attributes$templateSlotMap$descSlot.widgetId, "descSlot", e, t)))), s.a.createElement("div", {
        className: Ee.a.iconBox
      }, s.a.createElement($$_$$_$$_13_index.j, {
        type: "icon-fold-left",
        className: Ee.a.icon
      })))
    }(e, t), e$attributes$templateType === $$_$$_$$_5.o.AVATAR_TITLE_SUBTITLE_AND_IMAGE_DESC && function (e, t) {
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$avatarSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$subTitleSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$bannerSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$descSlot
      return s.a.createElement("div", {
        onClick: function (t) {
          t.stopPropagation()
          T(e)
        },
        className: g()(Ee.a.template6, "tiled" === e$attributes$templateRenderType ? Ee.a.itemTiled : Ee.a.itemCard)
      }, s.a.createElement("div", {
        className: Ee.a.avatarAndTitle
      }, Oe.avatarSlot && s.a.createElement("div", {
        className: Ee.a.avatarImgBox,
        onClick: O.bind(null, "avatarSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$avatarSlot = e$attributes$templateSlotMap.avatarSlot) || undefined === e$attributes$templateSlotMap$avatarSlot ? undefined : e$attributes$templateSlotMap$avatarSlot.widgetId, "avatarSlot", e, t)), s.a.createElement("div", {
        className: Ee.a.titleBox
      }, Oe.titleSlot && s.a.createElement("div", {
        className: Ee.a.title,
        onClick: O.bind(null, "titleSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)), Oe.subTitleSlot && s.a.createElement("div", {
        className: Ee.a.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId, "subTitleSlot", e, t)))), Oe.bannerSlot && s.a.createElement("div", {
        className: Ee.a.bannerImgBox,
        onClick: O.bind(null, "bannerSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$bannerSlot = e$attributes$templateSlotMap.bannerSlot) || undefined === e$attributes$templateSlotMap$bannerSlot ? undefined : e$attributes$templateSlotMap$bannerSlot.widgetId, "bannerSlot", e, t)), Oe.descSlot && s.a.createElement("div", {
        className: Ee.a.desc,
        onClick: O.bind(null, "descSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$descSlot = e$attributes$templateSlotMap.descSlot) || undefined === e$attributes$templateSlotMap$descSlot ? undefined : e$attributes$templateSlotMap$descSlot.widgetId, "descSlot", e, t)))
    }(e, t), e$attributes$templateType === $$_$$_$$_5.o.IMAGE_AND_AVATAR_TITLE_SUBTITLE_AND_DESC && function (e, t) {
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$bannerSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$avatarSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$titleSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$subTitleSlot
      var /* [auto-meaningful-name] */e$attributes$templateSlotMap$descSlot
      return s.a.createElement("div", {
        onClick: function (t) {
          t.stopPropagation()
          T(e)
        },
        className: g()(Ee.a.template6, "tiled" === e$attributes$templateRenderType ? Ee.a.itemTiled : Ee.a.itemCard)
      }, Oe.bannerSlot && s.a.createElement("div", {
        className: Ee.a.bannerImgBox,
        onClick: O.bind(null, "bannerSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$bannerSlot = e$attributes$templateSlotMap.bannerSlot) || undefined === e$attributes$templateSlotMap$bannerSlot ? undefined : e$attributes$templateSlotMap$bannerSlot.widgetId, "bannerSlot", e, t)), s.a.createElement("div", {
        className: Ee.a.avatarAndTitle
      }, Oe.avatarSlot && s.a.createElement("div", {
        className: Ee.a.avatarImgBox,
        onClick: O.bind(null, "avatarSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$avatarSlot = e$attributes$templateSlotMap.avatarSlot) || undefined === e$attributes$templateSlotMap$avatarSlot ? undefined : e$attributes$templateSlotMap$avatarSlot.widgetId, "avatarSlot", e, t)), s.a.createElement("div", {
        className: Ee.a.titleBox
      }, Oe.titleSlot && s.a.createElement("div", {
        className: Ee.a.title,
        onClick: O.bind(null, "titleSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)), Oe.subTitleSlot && s.a.createElement("div", {
        className: Ee.a.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId, "subTitleSlot", e, t)))), Oe.descSlot && s.a.createElement("div", {
        className: Ee.a.desc,
        onClick: O.bind(null, "descSlot", e)
      }, $_index.c(null === (e$attributes$templateSlotMap$descSlot = e$attributes$templateSlotMap.descSlot) || undefined === e$attributes$templateSlotMap$descSlot ? undefined : e$attributes$templateSlotMap$descSlot.widgetId, "descSlot", e, t)))
    }(e, t))
  }
  function O(e, n) {
    if (undefined === n) {
      n = 0
    }
    if (!e$attributes$disabled) {
      $$_$$_index.emitListViewerChildWidgetPress("".concat(t, "_").concat(e), n + 1)
    }
  }
  function T(e) {
    if (undefined === e) {
      e = 0
    }
    if ("number" === typeof e) {
      e += 1
    }
    if (!e$attributes$disabled) {
      $$_$$_index.emitListViewerPress(t, e)
      $$_$$_$$_55.b.playerWidgetLog({
        widgetId: t,
        widgetType: e$type,
        message: e ? "onListViewerIndexPress" : "onWidgetPress",
        values: {
          index: e
        }
      })
    }
  }
  return s.a.createElement("div", {
    onClick: T.bind(null, ""),
    id: t,
    "data-role": $$_$$_$$_5.M,
    "data-widget-type": $$_$$_$$_5.A,
    "data-min-width": $$_$$_$$_172.k,
    "data-max-width": $$_$$_$$_172.i,
    "data-min-height": $$_$$_$$_172.j,
    "data-max-height": $$_$$_$$_172.h,
    className: g()($$_$$_$$_90.b, Ee.a.listViewerBox, $$_$$_$$_11.a({}, Ee.a.hide, !e$visible)),
    style: {
      top: e$position.y,
      left: e$position.x,
      width: e$size.width,
      height: e$size.height,
      background: e$attributes$disabled ? $$_$$_$$_172.f : e$attributes$backgroundColor,
      opacity: undefined === e$opacity ? undefined : e$opacity / 100,
      filter: e$attributes$disabled ? "saturate(0)" : undefined,
      overflowY: "auto"
    }
  }, function () {
    if (e$attributes$dataSource) {
      var e
      var t
      if ("string" === typeof e$attributes$dataSource) {
        e = null === (t = $$_89.b.get(e$attributes$dataSource)) || undefined === t ? undefined : t.data
      } else {
        e = $$_89.a.get(e$attributes$dataSource)
      }
      if (e && e.length > 0) {
        return s.a.createElement(s.a.Fragment, null, e.map(function (e, t) {
          return s.a.createElement("div", {
            key: t
          }, E(t, e))
        }))
      }
    }
    return s.a.createElement("div", null, E())
  }())
})
import /* [auto-meaningful-name] */$$_$$_$$_683_index = require("../../../683/index")
import /* [auto-meaningful-name] */$$_$$_$$_144 = require("../../../144")
require("../../../760")
function Se(e, t) {
  var n
  return (null === (n = $$_12.b(t)) || undefined === n ? undefined : n.parentId) === e
}
function Ie(e, t) {
  var n = React.useMemo(function () {
    return function (e, t) {
      return {
        handleActorClick: function (t) {
          var /* [auto-meaningful-name] */t$target_id = t.target_id
          if (Se(e, t$target_id)) {
            $$_$$_index.unsetPressedActorId(t$target_id)
            $$_$$_index.emitActorPress(t$target_id, t.data.position)
            $$_$$_$$_55.b.playerWidgetLog({
              widgetId: t$target_id,
              widgetType: $$_$$_$$_5.a,
              message: "onWidgetPress"
            })
          }
        },
        handleActorMouseDown: function (n) {
          var /* [auto-meaningful-name] */n$target_id = n.target_id
          if (Se(e, n$target_id)) {
            $$_$$_index.setPressedActorId(n$target_id)
            document.addEventListener("mouseup", function () {
              return $$_$$_index.clearPressedActorIds()
            }, {
              once: true
            })
            $$_$$_index.emitActorPressIn(n$target_id, n.data.position)
            $$_$$_$$_55.b.playerWidgetLog({
              widgetId: n$target_id,
              widgetType: $$_$$_$$_5.a,
              message: "onWidgetPressIn"
            })
            if (t) {
              $$_$$_index.setStageMouse(t, n.data.position)
              $_index.a(function () {
                var e = $$_$$_index.getStageMouse(t)
                return $$_$$_index.emitActorPressHoldAndWait(n$target_id, e || {
                  x: 0,
                  y: 0
                })
              })
              $$_$$_$$_55.b.playerWidgetLog({
                widgetId: n$target_id,
                widgetType: $$_$$_$$_5.a,
                message: "onWidgetPressHold"
              })
            }
          }
        },
        handleActorMouseUp: function (t) {
          var /* [auto-meaningful-name] */t$target_id = t.target_id
          if (Se(e, t$target_id)) {
            $$_$$_index.unsetPressedActorId(t$target_id)
            $$_$$_index.emitActorPressOut(t$target_id, t.data.position)
            $$_$$_$$_55.b.playerWidgetLog({
              widgetId: t$target_id,
              widgetType: $$_$$_$$_5.a,
              message: "onWidgetPressOut"
            })
          }
        }
      }
    }(e, t)
  }, [e, t])
  var /* [auto-meaningful-name] */n$handleActorClick = n.handleActorClick
  var /* [auto-meaningful-name] */n$handleActorMouseDown = n.handleActorMouseDown
  var /* [auto-meaningful-name] */n$handleActorMouseUp = n.handleActorMouseUp
  React.useEffect(function () {
    if (t) {
      var /* [auto-meaningful-name] */t$events = t.events
      t$events.add_listener("actor:click", n$handleActorClick)
      t$events.add_listener("actor:mousedown", n$handleActorMouseDown)
      t$events.add_listener("actor:touchstart", n$handleActorMouseDown)
      t$events.add_listener("actor:mouseup", n$handleActorMouseUp)
      t$events.add_listener("actor:touchend", n$handleActorMouseUp)
      return function () {
        t$events.remove_listener("actor:click", n$handleActorClick)
        t$events.remove_listener("actor:mousedown", n$handleActorMouseDown)
        t$events.remove_listener("actor:touchstart", n$handleActorMouseDown)
        t$events.remove_listener("actor:mouseup", n$handleActorMouseUp)
        t$events.remove_listener("actor:touchend", n$handleActorMouseUp)
      }
    }
  }, [t, n$handleActorClick, n$handleActorMouseDown, n$handleActorMouseUp])
}
var Ae = React.memo(function (e) {
  var t = React.useRef(null)
  var n = React.useRef(null)
  var r = React.useRef(null)
  var o = React.useState(false)
  var l = $$_$$_$$_10_index.a(o, 2)
  var u = l[0]
  var p = l[1]
  var f = React.useState()
  var h = $$_$$_$$_10_index.a(f, 2)
  var m = h[0]
  var g = h[1]
  var _ = e.id
  var /* [auto-meaningful-name] */e$position = e.position
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$size = e.size
  var /* [auto-meaningful-name] */e$onload = e.onload
  var /* [auto-meaningful-name] */e$widgetIds = e.widgetIds
  var /* [auto-meaningful-name] */e$opacity = e.opacity
  var S = undefined === e$opacity ? 100 : e$opacity
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$attributes$backgroundColor = e$attributes.backgroundColor
  var /* [auto-meaningful-name] */e$attributes$backgroundImage = e$attributes.backgroundImage
  var /* [auto-meaningful-name] */e$attributes$resizeMode = e$attributes.resizeMode
  var /* [auto-meaningful-name] */e$attributes$coordinateRatio = e$attributes.coordinateRatio
  var k = undefined === e$attributes$coordinateRatio ? 2 : e$attributes$coordinateRatio
  var /* [auto-meaningful-name] */e$size$width = e$size.width
  var /* [auto-meaningful-name] */e$size$height = e$size.height
  var M = _
  var L = _
  var P = $$_$$_$$_16_index.e(function (e) {
    return e.imageFileMap
  })
  !function (e, t) {
    React.useEffect(function () {
      if (t) {
        var n = function (n) {
          var /* [auto-meaningful-name] */n$target_id = n.target_id
          var /* [auto-meaningful-name] */n$data = n.data
          if (n$target_id === e) {
            $$_$$_index.setStageMouse(t, n$data.position)
            $$_$$_index.unsetPressedCanvasId(e)
            $$_$$_index.emitCanvasPress(e, n$data.position)
            $$_$$_$$_55.b.playerWidgetLog({
              widgetId: e,
              widgetType: $$_$$_$$_5.f,
              message: "onWidgetPress"
            })
          }
        }
        var r = function (n) {
          var /* [auto-meaningful-name] */n$target_id = n.target_id
          var /* [auto-meaningful-name] */n$data = n.data
          if (n$target_id === e) {
            $$_$$_index.setPressedCanvasId(e)
            document.addEventListener("mouseup", function () {
              return $$_$$_index.clearPressedCanvasIds()
            }, {
              once: true
            })
            $$_$$_index.setStageMouse(t, n$data.position)
            $$_$$_index.emitCanvasPressIn(e, n$data.position)
            $$_$$_$$_55.b.playerWidgetLog({
              widgetId: e,
              widgetType: $$_$$_$$_5.f,
              message: "onWidgetPressIn"
            })
            $_index.a(function () {
              var n = $$_$$_index.getStageMouse(t)
              return $$_$$_index.emitCanvasPressHoldAndWait(e, n || {
                x: 0,
                y: 0
              })
            })
            $$_$$_$$_55.b.playerWidgetLog({
              widgetId: e,
              widgetType: $$_$$_$$_5.f,
              message: "onWidgetPressHold"
            })
          }
        }
        var o = function (n) {
          var /* [auto-meaningful-name] */n$target_id = n.target_id
          var /* [auto-meaningful-name] */n$data = n.data
          if (n$target_id === e) {
            $$_$$_index.unsetPressedCanvasId(e)
            $$_$$_index.setStageMouse(t, n$data.position)
            $$_$$_index.emitCanvasPressOut(e, n$data.position)
            $$_$$_$$_55.b.playerWidgetLog({
              widgetId: e,
              widgetType: $$_$$_$$_5.f,
              message: "onWidgetPressOut"
            })
          }
        }
        var i = function (e) {}
        var a = function (n) {
          var /* [auto-meaningful-name] */n$target_id = n.target_id
          var /* [auto-meaningful-name] */n$data = n.data
          if (n$target_id === e) {
            $$_$$_index.setStageMouse(t, n$data.position)
          }
        }
        var /* [auto-meaningful-name] */t$events = t.events
        t$events.add_listener("stage:click", n)
        t$events.add_listener("stage:mousedown", r)
        t$events.add_listener("stage:mouseup", o)
        t$events.add_listener("stage:touchstart", r)
        t$events.add_listener("stage:touchend", o)
        t$events.add_listener("stage:swipe", i)
        t$events.add_listener("stage:mousemove", a)
        t$events.add_listener("stage:touchmove", a)
        return function () {
          t$events.remove_listener("stage:click", n)
          t$events.remove_listener("stage:mousedown", r)
          t$events.remove_listener("stage:mouseup", o)
          t$events.remove_listener("stage:touchstart", r)
          t$events.remove_listener("stage:touchend", o)
          t$events.remove_listener("stage:swipe", i)
          t$events.remove_listener("stage:mousemove", a)
          t$events.remove_listener("stage:touchmove", a)
        }
      }
    }, [t, e])
  }(M, m)
  Ie(M, m)
  React.useEffect(function () {
    if (null === n || undefined === n ? undefined : n.current) {
      var e = $$_$$_$$_683_index.a()
      r.current = e
      e.init({
        renderer: {
          width: e$size$width * k,
          height: e$size$height * k,
          view: n.current,
          preserveDrawingBuffer: true,
          resolution: 2 / k,
          forceCanvas: true
        },
        id: M
      })
      e.components.init({
        actor_dialog_manager: true
      })
      e.scenes.load_scene(L, "")
      e.scenes.set_current_scene(L)
      g(e)
      $$_$$_index.setStage(M, e)
      e.start_rendering()
      e.stage_animation.init().finally(function () {
        p(true)
      })
      return function () {
        $$_$$_index.deleteStage(M)
      }
    }
  }, [])
  React.useEffect(function () {
    var /* [auto-meaningful-name] */r$current = r.current
    if (r$current) {
      $$_$$_$$_144.q(r$current, e$size$width * k, e$size$height * k)
    }
  }, [k, e$size$width, e$size$height])
  React.useEffect(function () {
    var /* [auto-meaningful-name] */r$current = r.current
    if (r$current) {
      $$_$$_$$_144.n(r$current, e$attributes$backgroundColor)
    }
  }, [e$attributes$backgroundColor])
  React.useEffect(function () {
    var /* [auto-meaningful-name] */r$current = r.current
    if (r$current) {
      var t
      if (e$attributes$backgroundImage) {
        var n = P.get(e$attributes$backgroundImage)
        if (n) {
          t = $$_$$_$$_9.lb(n)
        } else {
          if (e$attributes$backgroundImage.includes("://") || e$attributes$backgroundImage.includes("data:image/")) {
            t = e$attributes$backgroundImage
          }
        }
      }
      $$_$$_$$_144.o(r$current, t, e$attributes$resizeMode)
    }
  }, [e$attributes$backgroundImage, P, e$attributes$resizeMode])
  var /* [auto-meaningful-name] */e$widgetIds$length = e$widgetIds.length
  var F = 0
  React.useEffect(function () {
    if (0 === e$widgetIds$length && e$onload) {
      e$onload(M)
    }
  }, [e$widgetIds$length, e$onload, M])
  var G = function (e) {
    if (++F >= e$widgetIds$length && e$onload) {
      e$onload(M)
    }
  }
  return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
    id: _,
    "data-role": $$_$$_$$_5.M,
    "data-widget-type": $$_$$_$$_5.f,
    ref: t,
    style: {
      top: e$position.y,
      left: e$position.x,
      height: e$size.height,
      width: e$size.width,
      visibility: e$visible ? undefined : "hidden",
      pointerEvents: e$visible ? undefined : "none",
      opacity: S / 100
    }
  }, s.a.createElement("canvas", {
    ref: n,
    style: {
      width: "100%",
      height: "100%"
    }
  })), u && e$widgetIds.map(function (e) {
    if (r.current) {
      $$_$$_index.setStage(e, r.current)
    }
    return Ye({
      widgetId: e,
      onload: G
    })
  }))
})
import /* [auto-meaningful-name] */RegeneratorRuntime = require("regenerator-runtime")
var Ne = function __importDefault(module) {
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
}(RegeneratorRuntime)
import /* [auto-meaningful-name] */$$_$$_$$_7 = require("../../../7")
import /* [auto-meaningful-name] */$$_$$_$$_287 = require("../../../287")
var xe = function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$parentId = e.parentId
  var /* [auto-meaningful-name] */e$onload = e.onload
  var o = $$_$$_$$_16_index.e(function (e) {
    return e.widgetMap
  }).get(t)
  var /* [auto-meaningful-name] */o$position = o.position
  var /* [auto-meaningful-name] */o$attributes = o.attributes
  var /* [auto-meaningful-name] */o$attributes$color = o$attributes.color
  var /* [auto-meaningful-name] */o$attributes$penSize = o$attributes.penSize
  var /* [auto-meaningful-name] */o$attributes$rotation = o$attributes.rotation
  var p = undefined === o$attributes$rotation ? 0 : o$attributes$rotation
  var /* [auto-meaningful-name] */o$attributes$cursorShape = o$attributes.cursorShape
  var h = undefined === o$attributes$cursorShape ? $$_$$_$$_287.a.NONE : o$attributes$cursorShape
  var m = t
  var g = React.useState(true)
  var _ = $$_$$_$$_10_index.a(g, 2)
  var v = _[0]
  var b = _[1]
  var y = React.useCallback($$_$$_$$_7.a(Ne.a.mark(function e() {
    var n
    return Ne.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (n = $$_$$_index.getStage(m)) {
              e.next = 4
              break
            }
            console.error("Brush widget get stage error")
            return e.abrupt("return")
          case 4:
            e.next = 6
            return $$_$$_$$_144.d(n, m, o$position, true)
          case 6:
            if (e$onload) {
              e$onload(t)
            }
            $$_$$_$$_144.l(n, m, o$attributes$color)
            $$_$$_$$_144.m(n, m, o$attributes$penSize)
            b(false)
          case 10:
          case "end":
            return e.stop()
        }
      }
    }, e)
  })), [])
  React.useEffect(function () {
    y()
  }, [y])
  var E = React.useCallback($$_$$_$$_7.a(Ne.a.mark(function e() {
    var t
    var /* [auto-meaningful-name] */t$attributes$coordinateRatio
    var o
    var i
    return Ne.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (e$parentId) {
              e.next = 2
              break
            }
            return e.abrupt("return")
          case 2:
            if (t = $$_12.b(e$parentId)) {
              e.next = 5
              break
            }
            return e.abrupt("return")
          case 5:
            if (t$attributes$coordinateRatio = t.attributes.coordinateRatio, o = undefined === t$attributes$coordinateRatio ? 2 : t$attributes$coordinateRatio, i = $$_$$_index.getStage(m)) {
              e.next = 10
              break
            }
            console.error("Brush widget get stage error")
            return e.abrupt("return")
          case 10:
            e.next = 12
            return $$_$$_$$_144.r(i, m, o$attributes$penSize, o$attributes$color, h, o, true)
          case 12:
          case "end":
            return e.stop()
        }
      }
    }, e)
  })), [m, o$attributes$color, h, e$parentId, o$attributes$penSize])
  React.useEffect(function () {
    if (!v) {
      E()
    }
  }, [v, E])
  React.useLayoutEffect(function () {
    if (!v) {
      var e = $$_$$_index.getActor(t)
      if (e) {
        e.set_rotation(p)
      }
    }
  }, [t, v, p])
  React.useLayoutEffect(function () {
    if (!v) {
      var e = $$_$$_index.getActor(t)
      if (e) {
        e.set_position(o$position.x, o$position.y)
      }
    }
  }, [t, v, o$position])
  return null
}
import /* [auto-meaningful-name] */$$_$$_$$_143 = require("../../../143")
var Me = function () {
  var e = $$_$$_$$_7.a(Ne.a.mark(function e(t, n, r) {
    return Ne.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            return e.abrupt("return", Promise.all(r.map(function (e) {
              return $$_$$_$$_144.a(t, n, e)
            })))
          case 1:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))
  return function (t, n, r) {
    return e.apply(this, arguments)
  }
}()
var Le = function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$onload = e.onload
  var r = $$_$$_$$_16_index.e(function (e) {
    return e.widgetMap
  }).get(t)
  var /* [auto-meaningful-name] */r$opacity = r.opacity
  var /* [auto-meaningful-name] */r$position = r.position
  var /* [auto-meaningful-name] */r$parentId = r.parentId
  var /* [auto-meaningful-name] */r$visible = r.visible
  var /* [auto-meaningful-name] */r$attributes = r.attributes
  var /* [auto-meaningful-name] */r$attributes$selectedStyleId = r$attributes.selectedStyleId
  var /* [auto-meaningful-name] */r$attributes$flipped = r$attributes.flipped
  var /* [auto-meaningful-name] */r$attributes$scaleAndLock = r$attributes.scaleAndLock
  var /* [auto-meaningful-name] */r$attributes$scale = r$attributes.scale
  var /* [auto-meaningful-name] */r$attributes$rotation = r$attributes.rotation
  var /* [auto-meaningful-name] */r$attributes$actionList = r$attributes.actionList
  var /* [auto-meaningful-name] */r$attributes$pivotToCenter = r$attributes.pivotToCenter
  var v = React.useState(false)
  var b = $$_$$_$$_10_index.a(v, 2)
  var y = b[0]
  var E = b[1]
  var O = t
  var C = $$_$$_$$_16_index.e(function (e) {
    return e.imageFileMap
  })
  React.useEffect(function () {
    if (y) {
      var e = $$_$$_index.getActor(t)
      if (!e) {
        return
      }
      e.set_position(r$position.x, r$position.y)
    }
  }, [t, y, r$position.x, r$position.y])
  React.useEffect(function () {
    if (y) {
      var e = $$_$$_index.getActor(t)
      if (!e) {
        return
      }
      if (!r$attributes$scaleAndLock) {
        return
      }
      e.set_scale(r$attributes$scaleAndLock.x, r$attributes$scaleAndLock.y)
    }
  }, [t, y, r$attributes$scaleAndLock])
  React.useEffect(function () {
    if (y) {
      var e = $$_$$_index.getActor(t)
      if (!e) {
        return
      }
      e.set_visible(r$visible)
    }
  }, [t, y, r$visible])
  React.useEffect(function () {
    if (y) {
      var e = $$_$$_index.getActor(t)
      if (e) {
        e.set_current_style(r$attributes$selectedStyleId)
      }
    }
  }, [O, t, y, r$attributes$selectedStyleId])
  React.useEffect(function () {
    if (y) {
      var e = $$_$$_index.getActor(t)
      if (!e) {
        return
      }
      e.set_rotation(r$attributes$rotation)
    }
  }, [t, y, r$attributes$rotation])
  React.useEffect(function () {
    if (y) {
      var e = $$_$$_index.getActor(t)
      if (!e) {
        return
      }
      e.set_alpha((undefined === r$opacity ? 100 : r$opacity) / 100)
    }
  }, [t, y, r$opacity])
  React.useEffect(function () {
    if (y) {
      var e = $$_$$_index.getActor(t)
      if (!e || !r$attributes$flipped) {
        return
      }
      if (r$attributes$flipped.horizontal !== e.get_horizontal_flipped()) {
        e.set_flipped("horizontal")
      }
      if (r$attributes$flipped.vertical !== e.get_vertical_flipped()) {
        e.set_flipped("vertical")
      }
    }
  }, [t, y, r$attributes$flipped])
  var T = React.useCallback(function () {
    var e = $$_$$_$$_7.a(Ne.a.mark(function e(t) {
      var r
      var /* [auto-meaningful-name] */RR$attributes$scaleAndLockR$attributes$scaleXR$attributes$scaleYR$attributes$scaleX1Y1$x
      var i
      var a
      var /* [auto-meaningful-name] */a$is_error
      var /* [auto-meaningful-name] */a$value
      var b
      var y
      var w
      return Ne.a.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (r$parentId) {
                e.next = 2
                break
              }
              return e.abrupt("return")
            case 2:
              if (RR$attributes$scaleAndLockR$attributes$scaleXR$attributes$scaleYR$attributes$scaleX1Y1$x = (r = r$attributes$scaleAndLock || (r$attributes$scale ? {
                x: r$attributes$scale,
                y: r$attributes$scale
              } : {
                x: 1,
                y: 1
              })).x, i = r.y, a = t.actors.load_actor({
                actor_id: O,
                parent_scene_id: r$parentId,
                position: r$position,
                scale: {
                  x: RR$attributes$scaleAndLockR$attributes$scaleXR$attributes$scaleYR$attributes$scaleX1Y1$x,
                  y: i
                },
                rotation: r$attributes$rotation
              }), a$is_error = a.is_error, a$value = a.value, !a$is_error(a$value)) {
                e.next = 7
                break
              }
              console.error("load_actor error")
              return e.abrupt("return")
            case 7:
              b = []
              r$attributes$actionList.forEach(function (e) {
                e.styleList.forEach(function (e) {
                  var t = C.get(e.source)
                  var n = (null === t || undefined === t ? undefined : t.cdnUrl) || (null === t || undefined === t ? undefined : t.source) || ""
                  var r = {
                    id: e.id,
                    source: n
                  }
                  b.push(r)
                })
              })
              e.next = 11
              return Me(t, a$value, [].concat(b, [$$_$$_$$_143.h]))
            case 11:
              if (r$attributes$selectedStyleId) {
                a$value.set_current_style(r$attributes$selectedStyleId)
              } else {
                a$value.set_current_style($$_$$_$$_143.h.id)
              }
              a$value.set_visible(r$visible)
              a$value.set_draggable(false)
              y = r$position.x + ((null === r$attributes$pivotToCenter || undefined === r$attributes$pivotToCenter ? undefined : r$attributes$pivotToCenter.x) || 0)
              w = r$position.y + ((null === r$attributes$pivotToCenter || undefined === r$attributes$pivotToCenter ? undefined : r$attributes$pivotToCenter.y) || 0)
              a$value.set_position(y, w)
              if (r$attributes$flipped) {
                if (r$attributes$flipped.horizontal !== a$value.get_horizontal_flipped()) {
                  a$value.set_flipped("horizontal")
                }
                if (r$attributes$flipped.vertical !== a$value.get_vertical_flipped()) {
                  a$value.set_flipped("vertical")
                }
              }
              a$value.set_scale(RR$attributes$scaleAndLockR$attributes$scaleXR$attributes$scaleYR$attributes$scaleX1Y1$x, i)
              a$value.set_rotation(r$attributes$rotation)
              a$value.set_pivot_by_stage_point(r$position.x, r$position.y)
              E(true)
              if (e$onload) {
                e$onload(O)
              }
            case 23:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))
    return function (t) {
      return e.apply(this, arguments)
    }
  }(), [])
  React.useEffect(function () {
    var e = $$_$$_index.getStage(O)
    if (e) {
      T(e)
    } else {
      console.error("ActorWidget get Stage error")
    }
  }, [O, T])
  return null
}
import /* [auto-meaningful-name] */$$_$$_$$_548_index = require("../../../548/index")
var Be = function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$type = e.type
  var r = React.useCallback(function (e) {
    var r = $$_$$_$$_28_index.k(e)
    $$_$$_index.emitDatePickerSelectDone(t, r.date, r.y, r.m, r.d)
    $$_$$_index.setWidgetAttribute(t, "timeStamp", new Date(e).getTime())
    $$_$$_$$_55.b.playerWidgetLog({
      widgetId: t,
      widgetType: e$type,
      message: "onWidgetSelected"
    })
  }, [t, e$type])
  return s.a.createElement($$_$$_$$_548_index.a, Object.assign({}, e, {
    onDatePickerChange: r
  }))
}
import /* [auto-meaningful-name] */$$_$$_$$_549_index = require("../../../549/index")
var Ge = function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$type = e.type
  var r = React.useCallback(function (e) {
    var r = $$_$$_$$_28_index.k(e)
    $$_$$_index.emitTimePickerSelectDone(t, r.time, r.h, r.min, r.s)
    $$_$$_index.setWidgetAttribute(t, "timeStamp", new Date(e).getTime())
    $$_$$_$$_55.b.playerWidgetLog({
      widgetId: t,
      widgetType: e$type,
      message: "onWidgetSelected"
    })
  }, [t, e$type])
  return s.a.createElement($$_$$_$$_549_index.a, Object.assign({}, e, {
    onDatePickerChange: r
  }))
}
var Ue
var We = function () {
  return null
}
Ue = {}
$$_$$_$$_11.a(Ue, $$_$$_$$_5.H, T)
$$_$$_$$_11.a(Ue, $$_$$_$$_5.d, j)
$$_$$_$$_11.a(Ue, $$_$$_$$_5.z, F)
$$_$$_$$_11.a(Ue, $$_$$_$$_5.v, V)
$$_$$_$$_11.a(Ue, $$_$$_$$_5.w, function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$position = e.position
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$opacity = e.opacity
  var /* [auto-meaningful-name] */e$size = e.size
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$attributes$disabled = e$attributes.disabled
  var /* [auto-meaningful-name] */e$attributes$placeholder = e$attributes.placeholder
  var /* [auto-meaningful-name] */e$attributes$errorMessage = e$attributes.errorMessage
  var /* [auto-meaningful-name] */e$attributes$value = e$attributes.value
  var /* [auto-meaningful-name] */e$attributes$textAlign = e$attributes.textAlign
  var b = undefined === e$attributes$textAlign ? "left" : e$attributes$textAlign
  var /* [auto-meaningful-name] */e$attributes$placeholderColor = e$attributes.placeholderColor
  var /* [auto-meaningful-name] */e$attributes$valueColor = e$attributes.valueColor
  var /* [auto-meaningful-name] */e$attributes$fontFamily = e$attributes.fontFamily
  var /* [auto-meaningful-name] */e$attributes$fontSize = e$attributes.fontSize
  var /* [auto-meaningful-name] */e$attributes$backgroundMode = e$attributes.backgroundMode
  var /* [auto-meaningful-name] */e$attributes$templateMode = e$attributes.templateMode
  var /* [auto-meaningful-name] */e$attributes$backgroundColor = e$attributes.backgroundColor
  var /* [auto-meaningful-name] */e$attributes$backgroundImage = e$attributes.backgroundImage
  var /* [auto-meaningful-name] */e$attributes$imageResizeMode = e$attributes.imageResizeMode
  var /* [auto-meaningful-name] */e$size$width = e$size.width
  var /* [auto-meaningful-name] */e$size$height = e$size.height
  var M = React.useState(e$attributes$placeholder)
  var L = $$_$$_$$_10_index.a(M, 2)
  var P = L[0]
  var F = L[1]
  var G = React.useState(false)
  var U = $$_$$_$$_10_index.a(G, 2)
  var W = U[0]
  var H = U[1]
  var V = React.useMemo(function () {
    var e = e$attributes$errorMessage ? $$_$$_$$_97.d : e$attributes$backgroundColor
    try {
      return o()(e.toString()).toString()
    } catch (r) {
      $$_$$_$$_55.b.widgetError({
        widgetId: t,
        widgetType: e$type,
        message: "player/colorError"
      })
      return ""
    }
  }, [e$attributes$backgroundColor, e$attributes$errorMessage, t, e$type])
  var K = $$_114.b(e$attributes$backgroundImage) || $$_$$_$$_97.a
  var J = React.useMemo(function () {
    if (!W || e$attributes$backgroundMode === $$_$$_$$_77.a.IMAGE) {
      return {}
    }
    var e = undefined !== e$attributes$errorMessage ? $$_$$_$$_97.d : V
    return function (e, t) {
      var n
      return (n = {}, $$_$$_$$_11.a(n, $$_$$_$$_77.c.OUTLINED_NORMAL, {
        borderColor: t
      }), $$_$$_$$_11.a(n, $$_$$_$$_77.c.CONTAINED_NORMAL, {
        background: Z(t, .3)
      }), $$_$$_$$_11.a(n, $$_$$_$$_77.c.CONTAINED_ROUND, {
        background: Z(t, .3)
      }), $$_$$_$$_11.a(n, $$_$$_$$_77.c.OUTLINED_FLAT, {
        borderBottomColor: t
      }), n)[e]
    }(e$attributes$templateMode, e)
  }, [W, e$attributes$backgroundMode, e$attributes$errorMessage, V, e$attributes$templateMode])
  var $ = undefined
  var ee = React.useMemo(function () {
    return function (e, t, n) {
      var r
      return (r = {}, $$_$$_$$_11.a(r, $$_$$_$$_77.c.OUTLINED_NORMAL, {
        background: "rgba(255, 255, 255)",
        borderRadius: "4px",
        border: "2px solid ".concat(Z(t, .5)),
        borderColor: Z(t, .5)
      }), $$_$$_$$_11.a(r, $$_$$_$$_77.c.CONTAINED_NORMAL, {
        background: Z(t, .14),
        borderRadius: "4px"
      }), $$_$$_$$_11.a(r, $$_$$_$$_77.c.CONTAINED_ROUND, {
        background: Z(t, .14),
        borderRadius: "".concat(n / 2, "px")
      }), $$_$$_$$_11.a(r, $$_$$_$$_77.c.OUTLINED_FLAT, {
        borderBottom: "2px solid ".concat(Z(t, .5)),
        borderBottomColor: Z(t, .5)
      }), r)[e]
    }(e$attributes$templateMode, V, e$size$height)
  }, [V, e$size$height, e$attributes$templateMode])
  if (e$attributes$backgroundMode === $$_$$_$$_77.a.IMAGE) {
    $ = {
      backgroundImage: "url(".concat(K, ")"),
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundSize: "contain" === e$attributes$imageResizeMode ? "contain" : "100% 100%",
      padding: "6px ".concat(20, "px")
    }
  } else {
    $ = $$_$$_$$_6.a($$_$$_$$_6.a({}, ee), {}, {
      padding: "6px ".concat(14, "px")
    })
  }
  var te = React.useMemo(function () {
    if (e$attributes$disabled) {
      return function (e) {
        var t
        return (t = {}, $$_$$_$$_11.a(t, $$_$$_$$_77.c.OUTLINED_NORMAL, {
          color: "#CCCCCC",
          borderColor: "#E9E9E9"
        }), $$_$$_$$_11.a(t, $$_$$_$$_77.c.CONTAINED_NORMAL, {
          background: "#E7E7E7",
          color: "#FFFFFF"
        }), $$_$$_$$_11.a(t, $$_$$_$$_77.c.CONTAINED_ROUND, {
          background: "#E7E7E7",
          color: "#FFFFFF"
        }), $$_$$_$$_11.a(t, $$_$$_$$_77.c.OUTLINED_FLAT, {
          color: "#CCCCCC",
          borderBottomColor: "#E9E9E9"
        }), t)[e]
      }(e$attributes$templateMode)
    }
  }, [e$attributes$templateMode, e$attributes$disabled])
  React.useEffect(function () {
    F(e$attributes$placeholder)
  }, [e$attributes$placeholder])
  React.useEffect(function () {
    var e
    if (!(null === (e = document.getElementById(t)) || undefined === e)) {
      e.style.setProperty("--input-placeholder-color", e$attributes$placeholderColor)
    }
  }, [t, e$attributes$placeholderColor])
  return s.a.createElement("div", {
    id: t,
    className: g()(q.a.inputWidget, e$attributes$backgroundMode === $$_$$_$$_77.a.TEMPLATE && e$attributes$templateMode !== $$_$$_$$_77.c.OUTLINED_FLAT && q.a.inputWidgetUnderpainting),
    "data-role": $$_$$_$$_5.M,
    "data-type": $$_$$_$$_5.w,
    style: $$_$$_$$_6.a($$_$$_$$_6.a($$_$$_$$_6.a({
      top: e$position.y,
      left: e$position.x,
      height: e$size$height,
      width: e$size$width,
      visibility: e$visible ? undefined : "hidden",
      pointerEvents: e$visible ? undefined : "none",
      fontSize: e$attributes$fontSize,
      opacity: undefined === e$opacity ? undefined : e$opacity / 100,
      filter: e$attributes$disabled && e$attributes$backgroundMode === $$_$$_$$_77.a.IMAGE ? "saturate(0) brightness(1.1)" : undefined,
      fontFamily: e$attributes$fontFamily,
      color: e$attributes$valueColor
    }, $), J), te)
  }, s.a.createElement("div", {
    className: g()(q.a.inputWidgetInputWrapper)
  }, s.a.createElement("input", {
    placeholder: P,
    value: e$attributes$value,
    onChange: function (e) {
      var /* [auto-meaningful-name] */e$target$value = e.target.value
      $$_index.Yh(t, e$target$value)
      $$_$$_index.emitInputChange(t)
    },
    onBlur: function () {
      if (!e$attributes$disabled) {
        H(false)
        F(e$attributes$placeholder)
        $$_243.a(t)
        $$_$$_index.emitInputBlur(t)
        $$_$$_$$_55.b.playerWidgetLog({
          widgetId: t,
          widgetType: e$type,
          message: "onInputBlur"
        })
      }
    },
    onFocus: function () {
      if (!e$attributes$disabled) {
        F("")
        $$_$$_index.emitInputFocus(t)
        H(true)
        $$_$$_$$_55.b.playerWidgetLog({
          widgetId: t,
          widgetType: e$type,
          message: "onInputFocus"
        })
      }
    },
    disabled: e$attributes$disabled,
    style: {
      textAlign: b,
      color: e$attributes$disabled ? $$_$$_$$_97.o : e$attributes$valueColor,
      fontFamily: e$attributes$fontFamily
    }
  }), undefined !== e$attributes$errorMessage && s.a.createElement("span", {
    className: q.a.errorMessage,
    style: {
      color: $$_$$_$$_97.d
    }
  }, e$attributes$errorMessage), e$attributes$disabled && s.a.createElement("div", {
    className: q.a.mask
  })))
})
$$_$$_$$_11.a(Ue, $$_$$_$$_5.C, $)
$$_$$_$$_11.a(Ue, $$_$$_$$_5.g, te)
$$_$$_$$_11.a(Ue, $$_$$_$$_5.L, re)
$$_$$_$$_11.a(Ue, $$_$$_$$_5.F, ae)
$$_$$_$$_11.a(Ue, $$_$$_$$_5.E, le)
$$_$$_$$_11.a(Ue, $$_$$_$$_5.x, ve)
$$_$$_$$_11.a(Ue, $$_$$_$$_5.A, we)
$$_$$_$$_11.a(Ue, $$_$$_$$_5.f, Ae)
$$_$$_$$_11.a(Ue, $$_$$_$$_5.c, xe)
$$_$$_$$_11.a(Ue, $$_$$_$$_5.a, Le)
$$_$$_$$_11.a(Ue, $$_$$_$$_5.b, Audio)
$$_$$_$$_11.a(Ue, $$_$$_$$_5.n, Be)
$$_$$_$$_11.a(Ue, $$_$$_$$_5.J, Ge)
$$_$$_$$_11.a(Ue, $$_$$_$$_5.e, We)
$$_$$_$$_11.a(Ue, $$_$$_$$_5.t, We)
$$_$$_$$_11.a(Ue, $$_$$_$$_5.K, We)
$$_$$_$$_11.a(Ue, $$_$$_$$_5.I, We)
$$_$$_$$_11.a(Ue, $$_$$_$$_5.u, We)
$$_$$_$$_11.a(Ue, $$_$$_$$_5.i, We)
$$_$$_$$_11.a(Ue, $$_$$_$$_5.y, We)
$$_$$_$$_11.a(Ue, $$_$$_$$_5.B, We)
$$_$$_$$_11.a(Ue, $$_$$_$$_5.l, We)
$$_$$_$$_11.a(Ue, $$_$$_$$_5.m, We)
$$_$$_$$_11.a(Ue, $$_$$_$$_5.h, We)
$$_$$_$$_11.a(Ue, $$_$$_$$_5.G, We)
$$_$$_$$_11.a(Ue, $$_$$_$$_5.j, We)
$$_$$_$$_11.a(Ue, $$_$$_$$_5.k, We)
var He = Ue
import /* [auto-meaningful-name] */$$_312 = require("../312")
function ze(e) {
  var /* [auto-meaningful-name] */e$widget = e.widget
  var /* [auto-meaningful-name] */e$forceRender = e.forceRender
  var /* [auto-meaningful-name] */e$onload = e.onload
  var /* [auto-meaningful-name] */e$widget$type = e$widget.type
  if (!e$widget.parentId || e$forceRender) {
    var i = ""
    if (e$widget.parentId) {
      var a = $$_12.b(e$widget.parentId)
      if ((null === a || undefined === a ? undefined : a.type) && [$$_$$_$$_5.x, $$_$$_$$_5.A].includes(a.type) && e$widget$type === $$_$$_$$_5.v) {
        i += "coco-child-widget-full"
      }
    }
    if (e$widget$type in He) {
      var l = He[e$widget$type]
      return s.a.createElement("div", {
        key: e$widget.id,
        className: i
      }, s.a.createElement(l, Object.assign({}, e$widget, {
        onload: e$onload
      })))
    }
    var u = $$_$$_$$_$$_$$_$$_$$_src_shared_widget_custom_storage.f(e$widget$type)
    if (!u) {
      console.error("getWidget error", e$widget$type)
      return null
    }
    var /* [auto-meaningful-name] */u$types = u.types
    if ($$_$$_$$_$$_$$_$$_$$_src_shared_widget_custom_load.q(e$widget$type) && false === u$types.isInvisibleWidget) {
      var h = $$_$$_index.getWidgetInstance(e$widget.id)
      return h ? s.a.createElement("div", {
        key: e$widget.id,
        id: e$widget.id,
        "data-role": $$_$$_$$_5.M,
        "data-widget-type": e$widget.type,
        style: {
          position: "absolute",
          left: e$widget.position.x,
          top: e$widget.position.y,
          display: e$widget.visible ? "block" : "none",
          width: e$widget.size.width,
          height: e$widget.size.height,
          opacity: undefined === e$widget.opacity ? undefined : e$widget.opacity / 100
        }
      }, h.render()) : (console.error("getWidgetInstance error", e$widget$type, e$widget.id), null)
    }
  }
}
function Ye(e) {
  var /* [auto-meaningful-name] */e$widgetId = e.widgetId
  var /* [auto-meaningful-name] */e$onload = e.onload
  var r = $$_12.b(e$widgetId)
  return r ? ze({
    widget: r,
    forceRender: true,
    onload: e$onload
  }) : (console.error("getWidget error"), null)
}
var _a
_a = React.memo(function (e) {
  var t = e.id
  var n = $$_$$_$$_16_index.e(function (e) {
    return e.widgetMap
  })
  var r = React.useRef({
    x: 0,
    y: 0
  })
  var p = $$_$$_$$_16_index.e(function (e) {
    return e.screenList.find(function (e) {
      return e.id === t
    })
  })
  var f = $$_$$_$$_16_index.e(function (e) {
    return e.imageFileMap
  })
  var h = $$_$$_$$_16_index.e(function (e) {
    return e.currentScreenParam
  })
  var m = 0
  var g = 0
  var _ = (null === p || undefined === p ? undefined : p.widgetIds) || []
  _.forEach(function (e) {
    var t = n.get(e)
    if (t && t.type === $$_$$_$$_5.f) {
      m++
    }
  })
  var v = React.useCallback(function (e) {
    $$_$$_index.emitScreenOpen(e, h)
  }, [h])
  React.useEffect(function () {
    if (0 === m) {
      v(t)
    }
    var e = function () {
      $$_$$_index.emitGyroscopePhoneShake(t)
      $$_$$_$$_55.b.playerWidgetLog({
        widgetId: "",
        widgetType: $$_$$_$$_5.t,
        message: "onGyroscopeShake"
      })
    }
    $$_$$_index.onDeviceShake(e)
    return function () {
      $$_$$_index.offDeviceShake(e)
    }
  }, [m, t, v])
  var b = React.useCallback(function (e) {
    if (++g >= m) {
      v(t)
    }
  }, [m, t, g, v])
  if (p && p.type === $$_$$_$$_5.D) {
    var /* [auto-meaningful-name] */p$backgroundColor = p.backgroundColor
    var /* [auto-meaningful-name] */p$backgroundImageResizeMode = p.backgroundImageResizeMode
    var /* [auto-meaningful-name] */p$backgroundImage = p.backgroundImage
    var T = f.get(p$backgroundImage)
    var S = T ? $$_$$_$$_9.lb(T) : ""
    if (!(S || !p$backgroundImage.includes("://") && !p$backgroundImage.includes("data:image/"))) {
      S = p$backgroundImage
    }
    var I = []
    _.forEach(function (e) {
      var t = n.get(e)
      if (t) {
        I.push(t)
      }
    })
    return s.a.createElement("div", {
      id: p.id,
      "data-screen-id": p.id,
      className: "screen-view",
      onClick: function (e) {
        var /* [auto-meaningful-name] */e$target$dataset$screenId = e.target.dataset.screenId
        if (null === e$target$dataset$screenId || undefined === e$target$dataset$screenId ? undefined : e$target$dataset$screenId.startsWith($$_$$_$$_5.D)) {
          $$_312.n(t)
          $$_$$_index.emitScreenPress(t, e.nativeEvent.offsetX, e.nativeEvent.offsetY)
        }
      },
      onMouseDown: function (e) {
        var /* [auto-meaningful-name] */e$target$dataset$screenId = e.target.dataset.screenId
        if (null === e$target$dataset$screenId || undefined === e$target$dataset$screenId ? undefined : e$target$dataset$screenId.startsWith($$_$$_$$_5.D)) {
          $$_312.k(t)
          document.addEventListener("mouseup", function () {
            return $$_312.b()
          }, {
            once: true
          })
          $$_$$_index.emitScreenPressIn(t, e.nativeEvent.offsetX, e.nativeEvent.offsetY)
          $_index.a(function () {
            return $$_$$_index.emitScreenPressHoldAndWait(t, r.current.x || 0, r.current.y || 0)
          })
        }
      },
      onMouseUp: function (e) {
        var /* [auto-meaningful-name] */e$target$dataset$screenId = e.target.dataset.screenId
        if (null === e$target$dataset$screenId || undefined === e$target$dataset$screenId ? undefined : e$target$dataset$screenId.startsWith($$_$$_$$_5.D)) {
          $$_312.n(t)
          $$_$$_index.emitScreenPressOut(t, e.nativeEvent.offsetX, e.nativeEvent.offsetY)
        }
      },
      onMouseMove: function (e) {
        var /* [auto-meaningful-name] */e$target$dataset$screenId = e.target.dataset.screenId
        if (null === e$target$dataset$screenId || undefined === e$target$dataset$screenId ? undefined : e$target$dataset$screenId.startsWith($$_$$_$$_5.D)) {
          r.current.x = e.nativeEvent.offsetX
          r.current.y = e.nativeEvent.offsetY
        }
      },
      onTouchStart: function (e) {
        if ($$_$$_$$_15.W()) {
          var /* [auto-meaningful-name] */e$target$dataset$screenId = e.target.dataset.screenId
          if (null === e$target$dataset$screenId || undefined === e$target$dataset$screenId ? undefined : e$target$dataset$screenId.startsWith($$_$$_$$_5.D)) {
            $$_$$_index.emitScreenPressIn(t, e.targetTouches[0].clientX, e.targetTouches[0].clientY)
            $_index.a(function () {
              return $$_$$_index.emitScreenPressHoldAndWait(t, r.current.x || 0, r.current.y || 0)
            })
          }
        }
      },
      onTouchMove: function (e) {
        if ($$_$$_$$_15.W()) {
          var /* [auto-meaningful-name] */e$target$dataset$screenId = e.target.dataset.screenId
          if (null === e$target$dataset$screenId || undefined === e$target$dataset$screenId ? undefined : e$target$dataset$screenId.startsWith($$_$$_$$_5.D)) {
            r.current.x = e.targetTouches[0].clientX
            r.current.y = e.targetTouches[0].clientX
          }
        }
      },
      onTouchEnd: function (e) {
        if ($$_$$_$$_15.W()) {
          var /* [auto-meaningful-name] */e$target$dataset$screenId = e.target.dataset.screenId
          if (null === e$target$dataset$screenId || undefined === e$target$dataset$screenId ? undefined : e$target$dataset$screenId.startsWith($$_$$_$$_5.D)) {
            $$_$$_index.emitScreenPressOut(t, e.targetTouches[0].clientX, e.targetTouches[0].clientY)
          }
        }
      },
      style: {
        backgroundColor: o()(p$backgroundColor).toString(),
        backgroundImage: S ? "url(".concat(S, ")") : "none",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: p$backgroundImageResizeMode === $$_$$_$$_205.a.STRETCH ? "100% 100%" : p$backgroundImageResizeMode
      }
    }, s.a.createElement("div", {
      className: "screen-view-inner",
      "data-screen-id": p.id
    }, I.map(function (e) {
      return ze({
        widget: e,
        onload: b
      })
    })))
  }
  return null
})
export { _a as a }
export default _a
