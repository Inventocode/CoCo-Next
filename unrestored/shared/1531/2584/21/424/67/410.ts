/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：410
 */

"use strict"

export { ze as c }
export { Ye as b }
import Color = require("color");
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
import i = require("../../../16/index");
import React = require("react");
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
import c = require("../../../5");
import l = require("../../../15");
import u = require("../../../205");
import d = require("../../../9");
import p = require("../../../../../../../src/shared/widget/custom/storage");
import f = require("../../../../../../../src/shared/widget/custom/load");
import h = require("../../../11");
import m = require("../../../8");
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
}(m)
import _ = require("../../../90");
import v = require("../../../145");
import b = require("../../../240");
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
var E = function (e) {
  var t = e.id
  var e$position = e.position
  var e$visible = e.visible
  var e$attributes = e.attributes
  var e$size = e.size
  var e$opacity = e.opacity
  var e$onClick = e.onClick
  var e$attributes$backgroundColor = e$attributes.backgroundColor
  var e$attributes$content = e$attributes.content
  var e$attributes$color = e$attributes.color
  var e$attributes$fontFamily = e$attributes.fontFamily
  var e$attributes$fontSize = e$attributes.fontSize
  var e$attributes$justifyContent = e$attributes.justifyContent
  var e$attributes$textAlign = e$attributes.textAlign
  var e$attributes$overflow = e$attributes.overflow
  var C = undefined === e$attributes$overflow ? "hidden" : e$attributes$overflow
  var T = {
    width: e$size.width,
    height: e$size.height,
    minWidth: "".concat(v.m, "px"),
    minHeight: "".concat(v.l, "px"),
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
    "data-widget-type": c.H,
    "data-role": c.M,
    className: g()(_.b, y.a.textWidget, h.a({}, y.a.hide, !e$visible)),
    onClick: function () {
      e$onClick()
    },
    style: T
  }, s.a.createElement("span", {
    className: y.a.content
  }, e$attributes$content))
}
import O = require("../../../542");
import w = require("../../index");
import C = require("../../../55");
var T = function (e) {
  var t = e.id
  var e$type = e.type
  var e$parentId = e.parentId
  function o() {
    w.emitWidgetEvent(e$type, "onTextPress", t)
    w.emitTextPress(t)
    C.b.playerWidgetLog({
      widgetId: e$parentId ? t.replace(/_\d+$/, "") : t,
      widgetType: e$type,
      message: "onWidgetPress"
    })
  }
  return e$parentId ? s.a.createElement(O.a, Object.assign({}, e, {
    onClick: o
  })) : s.a.createElement(E, Object.assign({}, e, {
    onClick: o
  }))
}
import S = require("../../../543/index");
import I = require("../243");
import A = require("../../../28/index");
var j = function (e) {
  var t = e.id
  var e$type = e.type
  var e$attributes = e.attributes
  var e$animationRecord = e.animationRecord
  var e$attributes$disabled = e$attributes.disabled
  var l = i.e(function (e) {
    return e.iconFileMap
  }).get(e$attributes.iconId)
  return s.a.createElement(S.a, Object.assign({}, e, {
    iconFile: l,
    onClick: function () {
      if (!e$attributes$disabled) {
        w.emitButtonPress(t)
      }
      if (!e$attributes$disabled) {
        w.emitWidgetEvent(e$type, "onButtonPressPress", t)
      }
      I.b(t, c.d, A.m("click", e$animationRecord))
      C.b.playerWidgetLog({
        widgetId: t,
        widgetType: e$type,
        message: "onWidgetPress"
      })
    },
    onMouseDown: function () {
      if (!e$attributes$disabled) {
        w.emitButtonPressIn(t)
      }
      if (!e$attributes$disabled) {
        w.emitWidgetEvent(e$type, "onButtonPressPressIn", t)
      }
    },
    onMouseUp: function () {
      if (!e$attributes$disabled) {
        w.emitButtonPressOut(t)
      }
      if (!e$attributes$disabled) {
        w.emitWidgetEvent(e$type, "onButtonPressPressOut", t)
      }
    }
  }))
}
import N = require("../../../6");
import R = require("../../../321");
import k = require("../../../82");
import x = require("../../../60");
import D = require("../../../116");
import M = require("../../../216");
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
}(M)
var P = function (e) {
  var e$position = e.position
  var e$size = e.size
  var r = e.id
  var e$visible = e.visible
  var e$opacity = e.opacity
  var e$attributes = e.attributes
  var e$iconFileOrUrl = e.iconFileOrUrl
  var e$onClick = e.onClick
  var e$onMouseDown = e.onMouseDown
  var e$onMouseUp = e.onMouseUp
  var e$attributes$textVisible = e$attributes.textVisible
  var e$attributes$text = e$attributes.text
  var e$attributes$fontFamily = e$attributes.fontFamily
  var e$attributes$maxFontSize = e$attributes.maxFontSize
  var e$attributes$textColor = e$attributes.textColor
  var e$attributes$textAlign = e$attributes.textAlign
  var e$attributes$iconVisible = e$attributes.iconVisible
  var e$attributes$iconColor = e$attributes.iconColor
  var e$attributes$backgroundMode = e$attributes.backgroundMode
  var e$attributes$templateMode = e$attributes.templateMode
  var e$attributes$backgroundColor = e$attributes.backgroundColor
  var e$attributes$backgroundImage = e$attributes.backgroundImage
  var e$attributes$imageResizeMode = e$attributes.imageResizeMode
  var e$attributes$disabled = e$attributes.disabled
  var P = "true" === e$attributes$textVisible.toString()
  var B = "true" === e$attributes$iconVisible.toString()
  var F = P ? e$attributes$textAlign : x.a.CENTER
  var G = e$attributes$maxFontSize
  if (!P) {
    G = k.l
  }
  var U = 2 * k.r
  var W = 2 * k.q
  if (e$attributes$backgroundMode === D.a.IMAGE) {
    U = 2 * k.j
    W = 2 * k.i
  }
  var H = (e$size.width - U) / 1.5
  var V = (e$size.height - W) / 1.5
  var z = Math.min(H, V, G)
  z = Math.max(z, k.o)
  z = Math.floor(z)
  var Y = React.useMemo(function () {
    return function (e, t, n, r) {
      var o
      o = {}
      h.a(o, D.b.RECTANGLE_FILL, {
        color: r ? "#e6e6e6" : t,
        backgroundColor: r ? "#cccccc" : n,
        borderRadius: e / 4
      })
      h.a(o, D.b.RECTANGLE_OUTLINE, {
        color: r ? "#e9e9e9" : t,
        border: "2px solid ".concat(r ? "#e9e9e9" : n),
        backgroundColor: "white",
        borderRadius: e / 4,
        padding: "0 10px"
      })
      h.a(o, D.b.CIRCLE_FILL, {
        color: r ? "#e6e6e6" : t,
        backgroundColor: r ? "#cccccc" : n,
        borderRadius: e / 2
      })
      h.a(o, D.b.CIRCLE_OUTLINE, {
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
  K = e$attributes$backgroundMode === D.a.IMAGE ? {
    color: e$attributes$disabled ? "#7E7E7E" : e$attributes$textColor,
    backgroundImage: "url(".concat(e$attributes$backgroundImage, ")"),
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "contain" === e$attributes$imageResizeMode ? "contain" : "100% 100%"
  } : Y[e$attributes$templateMode]
  var q = N.a({
    top: e$position.y,
    left: e$position.x,
    height: e$size.height,
    width: e$size.width,
    fontSize: z,
    fontFamily: e$attributes$fontFamily,
    justifyContent: F,
    opacity: undefined === e$opacity ? undefined : e$opacity / 100,
    filter: e$attributes$disabled && e$attributes$backgroundMode === D.a.IMAGE ? "saturate(0) brightness(1.1)" : undefined,
    padding: e$attributes$backgroundMode === D.a.TEMPLATE || e$size.width < 2 * k.j ? "0 ".concat(k.r, "px") : "0 ".concat(k.j, "px")
  }, K)
  return s.a.createElement("button", {
    id: r,
    className: g()(_.b, L.a.buttonWidget, !e$attributes$disabled && L.a.transform, h.a({}, L.a.hide, !e$visible)),
    "data-role": c.M,
    "data-widget-type": c.z,
    "data-min-width": k.p,
    "data-max-width": k.m,
    "data-min-height": k.n,
    "data-max-height": k.k,
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
    style: N.a(N.a({}, q), {}, {
      flexDirection: F === x.a.RIGHT ? "row-reverse" : "row"
    })
  }, B && s.a.createElement("div", {
    className: L.a.iconWrapper,
    style: {
      color: e$attributes$disabled ? e$attributes$backgroundMode === D.a.TEMPLATE ? K.color : "#7E7E7E" : e$attributes$iconColor
    }
  }, "string" === typeof e$iconFileOrUrl ? s.a.createElement("img", {
    style: {
      width: z,
      height: z
    },
    src: e$iconFileOrUrl,
    alt: ""
  }) : e$iconFileOrUrl && s.a.createElement(R.a, {
    icon: e$iconFileOrUrl
  })), P && s.a.createElement("div", {
    className: g()(L.a.textWrapper, B && e$attributes$text && (F === x.a.RIGHT ? L.a.iconToTextRightSpacing : L.a.iconToTextLeftSpacing))
  }, s.a.createElement("div", {
    className: L.a.text,
    style: {
      display: "flex",
      textAlign: F
    }
  }, s.a.createElement("span", null, e$attributes$text))))
}
import B = require("../../../36/345/114");
var F = function (e) {
  var t = e.id
  var e$type = e.type
  var e$attributes = e.attributes
  var e$animationRecord = e.animationRecord
  var e$attributes$disabled = e$attributes.disabled
  var e$attributes$textColor = e$attributes.textColor
  var e$attributes$iconColor = e$attributes.iconColor
  var e$attributes$backgroundColor = e$attributes.backgroundColor
  var e$attributes$iconId = e$attributes.iconId
  var e$attributes$backgroundImage = e$attributes.backgroundImage
  var m = B.a(e$attributes$iconId) || k.c
  var g = B.b(e$attributes$backgroundImage) || k.f
  var _ = React.useMemo(function () {
    try {
      return o()(e$attributes$textColor.toString()).toString()
    } catch (e) {
      C.b.widgetError({
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
      C.b.widgetError({
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
      C.b.widgetError({
        widgetId: t,
        widgetType: e$type,
        message: "player/colorError"
      })
      return e$attributes$backgroundColor
    }
  }, [e$attributes$backgroundColor, t, e$type])
  return s.a.createElement(P, Object.assign({}, e, {
    iconFileOrUrl: m,
    attributes: N.a(N.a({}, e.attributes), {}, {
      textColor: _,
      iconColor: v,
      backgroundColor: b,
      backgroundImage: g
    }),
    onClick: function () {
      if (!e$attributes$disabled) {
        w.emitButtonPress(t)
      }
      if (!e$attributes$disabled) {
        w.emitWidgetEvent(e$type, "onButtonPressPress", t)
      }
      I.b(t, c.z, A.m("click", e$animationRecord))
      C.b.playerWidgetLog({
        widgetId: t,
        widgetType: e$type,
        message: "onWidgetPress"
      })
    },
    onMouseDown: function () {
      if (!e$attributes$disabled) {
        w.emitButtonPressIn(t)
      }
      if (!e$attributes$disabled) {
        w.emitWidgetEvent(e$type, "onButtonPressPressIn", t)
      }
    },
    onMouseUp: function () {
      if (!e$attributes$disabled) {
        w.emitButtonPressOut(t)
      }
      if (!e$attributes$disabled) {
        w.emitWidgetEvent(e$type, "onButtonPressPressOut", t)
      }
    }
  }))
}
import G = require("../../../510");
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
}(G)
import W = require("../../../429");
import H = require("../../../133/index");
var V = React.memo(function (e) {
  var t = e.id
  var e$type = e.type
  var e$position = e.position
  var e$visible = e.visible
  var e$opacity = e.opacity
  var e$size = e.size
  var e$parentId = e.parentId
  var e$attributes = e.attributes
  var e$attributes$backgroundColor = e$attributes.backgroundColor
  var e$attributes$resizeMode = e$attributes.resizeMode
  var e$attributes$borderRadius = e$attributes.borderRadius
  var e$attributes$fileId = e$attributes.fileId
  var b = React.useRef(null)
  var y = B.b(e$attributes$fileId)
  if (!y) {
    y = e$parentId ? H.i : H.m
  }
  return s.a.createElement("div", {
    id: t,
    className: g()(U.a.imageWidget, _.b),
    "data-role": c.M,
    "data-type": c.v,
    "data-scale-mode": c.p.PROPORTIONAL,
    ref: b,
    onClick: function () {
      w.emitWidgetEvent(e$type, "onImagePress", t)
      w.emitImagePress(t)
      C.b.playerWidgetLog({
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
      backgroundSize: W.a(e$attributes$resizeMode),
      borderRadius: e$attributes$borderRadius,
      opacity: undefined === e$opacity ? undefined : e$opacity / 100
    }
  }, s.a.createElement("img", {
    src: y,
    alt: "",
    style: {
      visibility: "hidden",
      borderRadius: e$attributes$borderRadius,
      objectFit: W.b(e$attributes$resizeMode)
    }
  }))
})
import z = require("../../../10/index");
import Y = require("../../../77");
import K = require("../../../291");
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
}(K)
import X = require("../../../97");
import Q = require("../index");
function Z(e, t) {
  try {
    return o()(e.toString()).alpha(t).toString()
  } catch (n) {
    return ""
  }
}
import J = require("../../../551/index");
var $ = function (e) {
  var t = e.id
  var e$type = e.type
  var e$animationRecord = e.animationRecord
  var e$attributes = e.attributes
  var e$attributes$options = e$attributes.options
  var e$attributes$disabled = e$attributes.disabled
  var e$attributes$mode = e$attributes.mode
  return s.a.createElement(J.a, Object.assign({}, e, {
    onOptionClick: function (e) {
      if (!e$attributes$disabled && "disabled" !== e$attributes$options[e].state && e$attributes$options.findIndex(function (e) {
        return e.isSelected
      }) !== e) {
        var o = e + 1
        w.setRadioWidgetOptionSelectedOrDisabled(t, o, "selected")
        I.b(t, c.C, A.m("click", e$animationRecord, e$attributes$mode), e)
        C.b.playerWidgetLog({
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
import ee = require("../../../552/index");
var te = function (e) {
  var t = e.id
  var e$type = e.type
  var e$attributes = e.attributes
  var e$attributes$options = e$attributes.options
  var e$attributes$disabled = e$attributes.disabled
  return s.a.createElement(ee.a, Object.assign({}, e, {
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
          w.setCheckboxWidgetOptionUnselected(t, a)
          C.b.playerWidgetLog({
            widgetId: t,
            widgetType: e$type,
            message: "onCheckboxUnselected",
            values: {
              index: a,
              content: e$attributes$options[e].content
            }
          })
        } else {
          w.setCheckboxWidgetOptionSelected(t, a)
          C.b.playerWidgetLog({
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
import ne = require("../../../544/index");
var re = function (e) {
  var t = e.id
  var e$type = e.type
  return s.a.createElement(ne.a, Object.assign({}, e, {
    onLoad: function () {
      w.emitWebViewWidgetLoaded(t)
      C.b.playerWidgetLog({
        widgetId: t,
        widgetType: e$type,
        message: "onWebViewUrlLoaded"
      })
    },
    onLoading: function () {
      w.emitWebViewWidgetStartLoad(t)
      C.b.playerWidgetLog({
        widgetId: t,
        widgetType: e$type,
        message: "onWebViewUrlStartLoad"
      })
    },
    onError: function () {
      w.emitWebViewWidgetLoadError(t)
      C.b.playerWidgetLog({
        widgetId: t,
        widgetType: e$type,
        message: "onWebViewUrlLoadError"
      })
    }
  }))
}
import oe = require("../../../545/index");
import ie = require("../../../131");
var ae = function (e) {
  var e$attributes = e.attributes
  var e$attributes$backgroundOpenImage = e$attributes.backgroundOpenImage
  var r = undefined === e$attributes$backgroundOpenImage ? ie.b : e$attributes$backgroundOpenImage
  var e$attributes$backgroundCloseImage = e$attributes.backgroundCloseImage
  var i = undefined === e$attributes$backgroundCloseImage ? ie.a : e$attributes$backgroundCloseImage
  var a = B.b(r) || ie.b
  var c = B.b(i) || ie.a
  return s.a.createElement(oe.a, Object.assign({}, e, {
    attributes: N.a(N.a({}, e.attributes), {}, {
      backgroundCloseImage: c,
      backgroundOpenImage: a
    }),
    onSwitch: function (t) {
      var n = e.id
      var e$type = e.type
      w.setSwitchWidgetState(n, t)
      C.b.playerWidgetLog({
        widgetId: n,
        widgetType: e$type,
        message: t ? "onSwitchChangeTrue" : "onSwitchChangeFalse"
      })
    }
  }))
}
import se = require("../../../546/index");
import ce = require("../../../148");
var le = function (e) {
  var t = e.id
  var e$type = e.type
  var e$attributes = e.attributes
  var e$attributes$handleImageFileId = e$attributes.handleImageFileId
  var i = undefined === e$attributes$handleImageFileId ? ce.c : e$attributes$handleImageFileId
  var e$attributes$backgroundImageFileId = e$attributes.backgroundImageFileId
  var c = undefined === e$attributes$backgroundImageFileId ? ce.a : e$attributes$backgroundImageFileId
  var e$attributes$trackImageFileId = e$attributes.trackImageFileId
  var u = undefined === e$attributes$trackImageFileId ? ce.g : e$attributes$trackImageFileId
  var d = B.b(c) || ce.a
  var p = B.b(i) || ce.c
  var f = B.b(u) || ce.g
  return s.a.createElement(se.a, Object.assign({}, e, {
    onSliderChange: function (e) {
      w.setSliderWidgetValue(t, e, false)
      w.emitSliderWidgetChange(t, e)
    },
    onEndToSlid: function (e) {
      w.emitSliderWidgetEndToSlide(t, e)
      C.b.playerWidgetLog({
        widgetId: t,
        widgetType: e$type,
        message: "onSliderEndSlide",
        values: {
          value: e
        }
      })
    },
    onStartToSlid: function (e) {
      w.emitSliderWidgetStartToSlide(t, e)
      C.b.playerWidgetLog({
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
import ue = require("../../../129");
import de = require("../../../30");
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
}(de)
import fe = require("../../../13/index");
import he = require("../89");
import me = require("../12");
import ge = require("./index");
var _e = {}
var ve = React.memo(function (e) {
  var t = e.id
  var e$type = e.type
  var e$position = e.position
  var e$visible = e.visible
  var e$opacity = e.opacity
  var e$size = e.size
  var e$attributes = e.attributes
  var e$attributes$backgroundColor = e$attributes.backgroundColor
  var e$attributes$dataSource = e$attributes.dataSource
  var e$attributes$templateType = e$attributes.templateType
  var e$attributes$templateRenderType = e$attributes.templateRenderType
  var e$attributes$templateSlotMap = e$attributes.templateSlotMap
  var e$attributes$disabled = e$attributes.disabled
  for (var b in e$attributes$templateSlotMap) {
    var y = me.b(e$attributes$templateSlotMap[b].widgetId)
    _e[b] = false !== (null === y || undefined === y ? undefined : y.visible)
  }
  function E(e, t) {
    return s.a.createElement(s.a.Fragment, null, e$attributes$templateType === c.o.ONLY_TITLE && function (e, t) {
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
      }, ge.c(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)) : s.a.createElement("div", null), s.a.createElement("div", {
        className: pe.a.iconBox
      }, s.a.createElement(fe.j, {
        type: "icon-fold-left",
        className: pe.a.icon
      })))
    }(e, t), e$attributes$templateType === c.o.TITLE_AND_SUBTITLE && function (e, t) {
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
      }, ge.c(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)) : s.a.createElement("div", null), s.a.createElement("div", {
        className: g()(pe.a.flexSC, pe.a.subTitleBox)
      }, _e.subTitleSlot && s.a.createElement("div", {
        className: pe.a.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, ge.c(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId, "subTitleSlot", e, t)), s.a.createElement(fe.j, {
        type: "icon-fold-left",
        className: pe.a.icon
      })))
    }(e, t), e$attributes$templateType === c.o.IMAGE_TITLE_AND_SUBTITLE && function (e, t) {
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
      }, ge.c(null === (e$attributes$templateSlotMap$imageSlot = e$attributes$templateSlotMap.imageSlot) || undefined === e$attributes$templateSlotMap$imageSlot ? undefined : e$attributes$templateSlotMap$imageSlot.widgetId, "imageSlot", e, t)), _e.titleSlot && s.a.createElement("div", {
        onClick: O.bind(null, "titleSlot", e)
      }, ge.c(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t))), s.a.createElement("div", {
        className: g()(pe.a.flexSC, pe.a.subTitleBox)
      }, _e.subTitleSlot && s.a.createElement("div", {
        className: pe.a.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, ge.c(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId, "subTitleSlot", e, t)), s.a.createElement(fe.j, {
        type: "icon-fold-left",
        className: pe.a.icon
      })))
    }(e, t), e$attributes$templateType === c.o.AVATAR_AND_TITLE_SUBTITLE && function (e, t) {
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
      }, ge.c(null === (e$attributes$templateSlotMap$avatarSlot = e$attributes$templateSlotMap.avatarSlot) || undefined === e$attributes$templateSlotMap$avatarSlot ? undefined : e$attributes$templateSlotMap$avatarSlot.widgetId, "avatarSlot", e, t)), s.a.createElement("div", {
        className: pe.a.titleBox
      }, _e.titleSlot && s.a.createElement("div", {
        className: pe.a.title,
        onClick: O.bind(null, "titleSlot", e)
      }, ge.c(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)), _e.subTitleSlot && s.a.createElement("div", {
        className: pe.a.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, ge.c(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId, "subTitleSlot", e, t)))), s.a.createElement("div", {
        className: pe.a.iconBox
      }, s.a.createElement(fe.j, {
        type: "icon-fold-left",
        className: pe.a.icon
      })))
    }(e, t), e$attributes$templateType === c.o.IMAGE_AND_TITLE_DESC && function (e, t) {
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
      }, ge.c(null === (e$attributes$templateSlotMap$imageSlot = e$attributes$templateSlotMap.imageSlot) || undefined === e$attributes$templateSlotMap$imageSlot ? undefined : e$attributes$templateSlotMap$imageSlot.widgetId, "imageSlot", e, t)), s.a.createElement("div", null, _e.titleSlot && s.a.createElement("div", {
        className: pe.a.title,
        onClick: O.bind(null, "titleSlot", e)
      }, ge.c(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)), _e.descSlot && s.a.createElement("div", {
        className: pe.a.desc,
        onClick: O.bind(null, "descSlot", e)
      }, ge.c(null === (e$attributes$templateSlotMap$descSlot = e$attributes$templateSlotMap.descSlot) || undefined === e$attributes$templateSlotMap$descSlot ? undefined : e$attributes$templateSlotMap$descSlot.widgetId, "descSlot", e, t)))), s.a.createElement("div", {
        className: pe.a.iconBox
      }, s.a.createElement(fe.j, {
        type: "icon-fold-left",
        className: pe.a.icon
      })))
    }(e, t), e$attributes$templateType === c.o.AVATAR_TITLE_SUBTITLE_AND_IMAGE_DESC && function (e, t) {
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
      }, ge.c(null === (e$attributes$templateSlotMap$avatarSlot = e$attributes$templateSlotMap.avatarSlot) || undefined === e$attributes$templateSlotMap$avatarSlot ? undefined : e$attributes$templateSlotMap$avatarSlot.widgetId, "avatarSlot", e, t)), s.a.createElement("div", {
        className: pe.a.titleBox
      }, _e.titleSlot && s.a.createElement("div", {
        className: pe.a.title,
        onClick: O.bind(null, "titleSlot", e)
      }, ge.c(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)), _e.subTitleSlot && s.a.createElement("div", {
        className: pe.a.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, ge.c(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId, "subTitleSlot", e, t)))), _e.bannerSlot && s.a.createElement("div", {
        className: pe.a.bannerImgBox,
        onClick: O.bind(null, "bannerSlot", e)
      }, ge.c(null === (e$attributes$templateSlotMap$bannerSlot = e$attributes$templateSlotMap.bannerSlot) || undefined === e$attributes$templateSlotMap$bannerSlot ? undefined : e$attributes$templateSlotMap$bannerSlot.widgetId, "bannerSlot", e, t)), _e.descSlot && s.a.createElement("div", {
        className: pe.a.desc,
        onClick: O.bind(null, "descSlot", e)
      }, ge.c(null === (e$attributes$templateSlotMap$descSlot = e$attributes$templateSlotMap.descSlot) || undefined === e$attributes$templateSlotMap$descSlot ? undefined : e$attributes$templateSlotMap$descSlot.widgetId, "descSlot", e, t)))
    }(e, t), e$attributes$templateType === c.o.IMAGE_AND_AVATAR_TITLE_SUBTITLE_AND_DESC && function (e, t) {
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
      }, ge.c(null === (e$attributes$templateSlotMap$bannerSlot = e$attributes$templateSlotMap.bannerSlot) || undefined === e$attributes$templateSlotMap$bannerSlot ? undefined : e$attributes$templateSlotMap$bannerSlot.widgetId, "bannerSlot", e, t)), s.a.createElement("div", {
        className: pe.a.avatarAndTitle
      }, _e.avatarSlot && s.a.createElement("div", {
        className: pe.a.avatarImgBox,
        onClick: O.bind(null, "avatarSlot", e)
      }, ge.c(null === (e$attributes$templateSlotMap$avatarSlot = e$attributes$templateSlotMap.avatarSlot) || undefined === e$attributes$templateSlotMap$avatarSlot ? undefined : e$attributes$templateSlotMap$avatarSlot.widgetId, "avatarSlot", e, t)), s.a.createElement("div", {
        className: pe.a.titleBox
      }, _e.titleSlot && s.a.createElement("div", {
        className: pe.a.title,
        onClick: O.bind(null, "titleSlot", e)
      }, ge.c(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)), _e.subTitleSlot && s.a.createElement("div", {
        className: pe.a.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, ge.c(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId, "subTitleSlot", e, t)))), _e.descSlot && s.a.createElement("div", {
        className: pe.a.desc,
        onClick: O.bind(null, "descSlot", e)
      }, ge.c(null === (e$attributes$templateSlotMap$descSlot = e$attributes$templateSlotMap.descSlot) || undefined === e$attributes$templateSlotMap$descSlot ? undefined : e$attributes$templateSlotMap$descSlot.widgetId, "descSlot", e, t)))
    }(e, t))
  }
  function O(e, n) {
    if (!e$attributes$disabled) {
      w.emitListViewerChildWidgetPress("".concat(t, "_").concat(e), n + 1)
    }
  }
  function T(e) {
    if (!e$attributes$disabled) {
      w.emitListViewerPress(t, e)
      C.b.playerWidgetLog({
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
    "data-role": c.M,
    "data-widget-type": c.x,
    "data-min-width": ue.m,
    "data-max-width": ue.k,
    "data-min-height": ue.l,
    "data-max-height": ue.j,
    className: g()(_.b, pe.a.listViewerBox, h.a({}, pe.a.hide, !e$visible)),
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
      var e = he.b.get(e$attributes$dataSource)
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
import be = require("../../../172");
import ye = require("../../../45");
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
}(ye)
var Oe = {}
var we = React.memo(function (e) {
  var t = e.id
  var e$type = e.type
  var e$position = e.position
  var e$visible = e.visible
  var e$opacity = e.opacity
  var e$size = e.size
  var e$attributes = e.attributes
  var e$attributes$backgroundColor = e$attributes.backgroundColor
  var e$attributes$dataSource = e$attributes.dataSource
  var e$attributes$templateType = e$attributes.templateType
  var e$attributes$templateRenderType = e$attributes.templateRenderType
  var e$attributes$templateSlotMap = e$attributes.templateSlotMap
  var e$attributes$disabled = e$attributes.disabled
  for (var b in e$attributes$templateSlotMap) {
    var y = me.b(e$attributes$templateSlotMap[b].widgetId)
    Oe[b] = false !== (null === y || undefined === y ? undefined : y.visible)
  }
  function E(e, t) {
    return s.a.createElement(s.a.Fragment, null, e$attributes$templateType === c.o.ONLY_TITLE && function (e, t) {
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
      }, ge.c(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)) : s.a.createElement("div", null), s.a.createElement("div", {
        className: Ee.a.iconBox
      }, s.a.createElement(fe.j, {
        type: "icon-fold-left",
        className: Ee.a.icon
      })))
    }(e, t), e$attributes$templateType === c.o.TITLE_AND_SUBTITLE && function (e, t) {
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
      }, ge.c(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)) : s.a.createElement("div", null), s.a.createElement("div", {
        className: g()(Ee.a.flexSC, Ee.a.subTitleBox)
      }, Oe.subTitleSlot && s.a.createElement("div", {
        className: Ee.a.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, ge.c(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId, "subTitleSlot", e, t)), s.a.createElement(fe.j, {
        type: "icon-fold-left",
        className: Ee.a.icon
      })))
    }(e, t), e$attributes$templateType === c.o.IMAGE_TITLE_AND_SUBTITLE && function (e, t) {
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
      }, ge.c(null === (e$attributes$templateSlotMap$imageSlot = e$attributes$templateSlotMap.imageSlot) || undefined === e$attributes$templateSlotMap$imageSlot ? undefined : e$attributes$templateSlotMap$imageSlot.widgetId, "imageSlot", e, t)), Oe.titleSlot && s.a.createElement("div", {
        onClick: O.bind(null, "titleSlot", e)
      }, ge.c(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t))), s.a.createElement("div", {
        className: g()(Ee.a.flexSC, Ee.a.subTitleBox)
      }, Oe.subTitleSlot && s.a.createElement("div", {
        className: Ee.a.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, ge.c(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId, "subTitleSlot", e, t)), s.a.createElement(fe.j, {
        type: "icon-fold-left",
        className: Ee.a.icon
      })))
    }(e, t), e$attributes$templateType === c.o.AVATAR_AND_TITLE_SUBTITLE && function (e, t) {
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
      }, ge.c(null === (e$attributes$templateSlotMap$avatarSlot = e$attributes$templateSlotMap.avatarSlot) || undefined === e$attributes$templateSlotMap$avatarSlot ? undefined : e$attributes$templateSlotMap$avatarSlot.widgetId, "avatarSlot", e, t)), s.a.createElement("div", {
        className: Ee.a.titleBox
      }, Oe.titleSlot && s.a.createElement("div", {
        className: Ee.a.title,
        onClick: O.bind(null, "titleSlot", e)
      }, ge.c(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)), Oe.subTitleSlot && s.a.createElement("div", {
        className: Ee.a.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, ge.c(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId, "subTitleSlot", e, t)))), s.a.createElement("div", {
        className: Ee.a.iconBox
      }, s.a.createElement(fe.j, {
        type: "icon-fold-left",
        className: Ee.a.icon
      })))
    }(e, t), e$attributes$templateType === c.o.IMAGE_AND_TITLE_DESC && function (e, t) {
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
      }, ge.c(null === (e$attributes$templateSlotMap$imageSlot = e$attributes$templateSlotMap.imageSlot) || undefined === e$attributes$templateSlotMap$imageSlot ? undefined : e$attributes$templateSlotMap$imageSlot.widgetId, "imageSlot", e, t)), s.a.createElement("div", null, Oe.titleSlot && s.a.createElement("div", {
        className: Ee.a.title,
        onClick: O.bind(null, "titleSlot", e)
      }, ge.c(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)), Oe.descSlot && s.a.createElement("div", {
        className: Ee.a.desc,
        onClick: O.bind(null, "descSlot", e)
      }, ge.c(null === (e$attributes$templateSlotMap$descSlot = e$attributes$templateSlotMap.descSlot) || undefined === e$attributes$templateSlotMap$descSlot ? undefined : e$attributes$templateSlotMap$descSlot.widgetId, "descSlot", e, t)))), s.a.createElement("div", {
        className: Ee.a.iconBox
      }, s.a.createElement(fe.j, {
        type: "icon-fold-left",
        className: Ee.a.icon
      })))
    }(e, t), e$attributes$templateType === c.o.AVATAR_TITLE_SUBTITLE_AND_IMAGE_DESC && function (e, t) {
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
      }, ge.c(null === (e$attributes$templateSlotMap$avatarSlot = e$attributes$templateSlotMap.avatarSlot) || undefined === e$attributes$templateSlotMap$avatarSlot ? undefined : e$attributes$templateSlotMap$avatarSlot.widgetId, "avatarSlot", e, t)), s.a.createElement("div", {
        className: Ee.a.titleBox
      }, Oe.titleSlot && s.a.createElement("div", {
        className: Ee.a.title,
        onClick: O.bind(null, "titleSlot", e)
      }, ge.c(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)), Oe.subTitleSlot && s.a.createElement("div", {
        className: Ee.a.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, ge.c(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId, "subTitleSlot", e, t)))), Oe.bannerSlot && s.a.createElement("div", {
        className: Ee.a.bannerImgBox,
        onClick: O.bind(null, "bannerSlot", e)
      }, ge.c(null === (e$attributes$templateSlotMap$bannerSlot = e$attributes$templateSlotMap.bannerSlot) || undefined === e$attributes$templateSlotMap$bannerSlot ? undefined : e$attributes$templateSlotMap$bannerSlot.widgetId, "bannerSlot", e, t)), Oe.descSlot && s.a.createElement("div", {
        className: Ee.a.desc,
        onClick: O.bind(null, "descSlot", e)
      }, ge.c(null === (e$attributes$templateSlotMap$descSlot = e$attributes$templateSlotMap.descSlot) || undefined === e$attributes$templateSlotMap$descSlot ? undefined : e$attributes$templateSlotMap$descSlot.widgetId, "descSlot", e, t)))
    }(e, t), e$attributes$templateType === c.o.IMAGE_AND_AVATAR_TITLE_SUBTITLE_AND_DESC && function (e, t) {
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
      }, ge.c(null === (e$attributes$templateSlotMap$bannerSlot = e$attributes$templateSlotMap.bannerSlot) || undefined === e$attributes$templateSlotMap$bannerSlot ? undefined : e$attributes$templateSlotMap$bannerSlot.widgetId, "bannerSlot", e, t)), s.a.createElement("div", {
        className: Ee.a.avatarAndTitle
      }, Oe.avatarSlot && s.a.createElement("div", {
        className: Ee.a.avatarImgBox,
        onClick: O.bind(null, "avatarSlot", e)
      }, ge.c(null === (e$attributes$templateSlotMap$avatarSlot = e$attributes$templateSlotMap.avatarSlot) || undefined === e$attributes$templateSlotMap$avatarSlot ? undefined : e$attributes$templateSlotMap$avatarSlot.widgetId, "avatarSlot", e, t)), s.a.createElement("div", {
        className: Ee.a.titleBox
      }, Oe.titleSlot && s.a.createElement("div", {
        className: Ee.a.title,
        onClick: O.bind(null, "titleSlot", e)
      }, ge.c(null === (e$attributes$templateSlotMap$titleSlot = e$attributes$templateSlotMap.titleSlot) || undefined === e$attributes$templateSlotMap$titleSlot ? undefined : e$attributes$templateSlotMap$titleSlot.widgetId, "titleSlot", e, t)), Oe.subTitleSlot && s.a.createElement("div", {
        className: Ee.a.subTitle,
        onClick: O.bind(null, "subTitleSlot", e)
      }, ge.c(null === (e$attributes$templateSlotMap$subTitleSlot = e$attributes$templateSlotMap.subTitleSlot) || undefined === e$attributes$templateSlotMap$subTitleSlot ? undefined : e$attributes$templateSlotMap$subTitleSlot.widgetId, "subTitleSlot", e, t)))), Oe.descSlot && s.a.createElement("div", {
        className: Ee.a.desc,
        onClick: O.bind(null, "descSlot", e)
      }, ge.c(null === (e$attributes$templateSlotMap$descSlot = e$attributes$templateSlotMap.descSlot) || undefined === e$attributes$templateSlotMap$descSlot ? undefined : e$attributes$templateSlotMap$descSlot.widgetId, "descSlot", e, t)))
    }(e, t))
  }
  function O(e, n) {
    if (undefined === n) {
      n = 0
    }
    if (!e$attributes$disabled) {
      w.emitListViewerChildWidgetPress("".concat(t, "_").concat(e), n + 1)
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
      w.emitListViewerPress(t, e)
      C.b.playerWidgetLog({
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
    "data-role": c.M,
    "data-widget-type": c.A,
    "data-min-width": be.k,
    "data-max-width": be.i,
    "data-min-height": be.j,
    "data-max-height": be.h,
    className: g()(_.b, Ee.a.listViewerBox, h.a({}, Ee.a.hide, !e$visible)),
    style: {
      top: e$position.y,
      left: e$position.x,
      width: e$size.width,
      height: e$size.height,
      background: e$attributes$disabled ? be.f : e$attributes$backgroundColor,
      opacity: undefined === e$opacity ? undefined : e$opacity / 100,
      filter: e$attributes$disabled ? "saturate(0)" : undefined,
      overflowY: "auto"
    }
  }, function () {
    if (e$attributes$dataSource) {
      var e
      var t
      if ("string" === typeof e$attributes$dataSource) {
        e = null === (t = he.b.get(e$attributes$dataSource)) || undefined === t ? undefined : t.data
      } else {
        e = he.a.get(e$attributes$dataSource)
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
import Ce = require("../../../683/index");
import Te = require("../../../144");
require("../../../760")
function Se(e, t) {
  var n
  return (null === (n = me.b(t)) || undefined === n ? undefined : n.parentId) === e
}
function Ie(e, t) {
  var n = React.useMemo(function () {
    return function (e, t) {
      return {
        handleActorClick: function (t) {
          var t$target_id = t.target_id
          if (Se(e, t$target_id)) {
            w.unsetPressedActorId(t$target_id)
            w.emitActorPress(t$target_id, t.data.position)
            C.b.playerWidgetLog({
              widgetId: t$target_id,
              widgetType: c.a,
              message: "onWidgetPress"
            })
          }
        },
        handleActorMouseDown: function (n) {
          var n$target_id = n.target_id
          if (Se(e, n$target_id)) {
            w.setPressedActorId(n$target_id)
            document.addEventListener("mouseup", function () {
              return w.clearPressedActorIds()
            }, {
              once: true
            })
            w.emitActorPressIn(n$target_id, n.data.position)
            C.b.playerWidgetLog({
              widgetId: n$target_id,
              widgetType: c.a,
              message: "onWidgetPressIn"
            })
            if (t) {
              w.setStageMouse(t, n.data.position)
              ge.a(function () {
                var e = w.getStageMouse(t)
                return w.emitActorPressHoldAndWait(n$target_id, e || {
                  x: 0,
                  y: 0
                })
              })
              C.b.playerWidgetLog({
                widgetId: n$target_id,
                widgetType: c.a,
                message: "onWidgetPressHold"
              })
            }
          }
        },
        handleActorMouseUp: function (t) {
          var t$target_id = t.target_id
          if (Se(e, t$target_id)) {
            w.unsetPressedActorId(t$target_id)
            w.emitActorPressOut(t$target_id, t.data.position)
            C.b.playerWidgetLog({
              widgetId: t$target_id,
              widgetType: c.a,
              message: "onWidgetPressOut"
            })
          }
        }
      }
    }(e, t)
  }, [e, t])
  var n$handleActorClick = n.handleActorClick
  var n$handleActorMouseDown = n.handleActorMouseDown
  var n$handleActorMouseUp = n.handleActorMouseUp
  React.useEffect(function () {
    if (t) {
      var t$events = t.events
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
  var l = z.a(o, 2)
  var u = l[0]
  var p = l[1]
  var f = React.useState()
  var h = z.a(f, 2)
  var m = h[0]
  var g = h[1]
  var _ = e.id
  var e$position = e.position
  var e$visible = e.visible
  var e$size = e.size
  var e$onload = e.onload
  var e$widgetIds = e.widgetIds
  var e$opacity = e.opacity
  var S = undefined === e$opacity ? 100 : e$opacity
  var e$attributes = e.attributes
  var e$attributes$backgroundColor = e$attributes.backgroundColor
  var e$attributes$backgroundImage = e$attributes.backgroundImage
  var e$attributes$resizeMode = e$attributes.resizeMode
  var e$attributes$coordinateRatio = e$attributes.coordinateRatio
  var k = undefined === e$attributes$coordinateRatio ? 2 : e$attributes$coordinateRatio
  var e$size$width = e$size.width
  var e$size$height = e$size.height
  var M = _
  var L = _
  var P = i.e(function (e) {
    return e.imageFileMap
  })
  !function (e, t) {
    React.useEffect(function () {
      if (t) {
        var n = function (n) {
          var n$target_id = n.target_id
          var n$data = n.data
          if (n$target_id === e) {
            w.setStageMouse(t, n$data.position)
            w.unsetPressedCanvasId(e)
            w.emitCanvasPress(e, n$data.position)
            C.b.playerWidgetLog({
              widgetId: e,
              widgetType: c.f,
              message: "onWidgetPress"
            })
          }
        }
        var r = function (n) {
          var n$target_id = n.target_id
          var n$data = n.data
          if (n$target_id === e) {
            w.setPressedCanvasId(e)
            document.addEventListener("mouseup", function () {
              return w.clearPressedCanvasIds()
            }, {
              once: true
            })
            w.setStageMouse(t, n$data.position)
            w.emitCanvasPressIn(e, n$data.position)
            C.b.playerWidgetLog({
              widgetId: e,
              widgetType: c.f,
              message: "onWidgetPressIn"
            })
            ge.a(function () {
              var n = w.getStageMouse(t)
              return w.emitCanvasPressHoldAndWait(e, n || {
                x: 0,
                y: 0
              })
            })
            C.b.playerWidgetLog({
              widgetId: e,
              widgetType: c.f,
              message: "onWidgetPressHold"
            })
          }
        }
        var o = function (n) {
          var n$target_id = n.target_id
          var n$data = n.data
          if (n$target_id === e) {
            w.unsetPressedCanvasId(e)
            w.setStageMouse(t, n$data.position)
            w.emitCanvasPressOut(e, n$data.position)
            C.b.playerWidgetLog({
              widgetId: e,
              widgetType: c.f,
              message: "onWidgetPressOut"
            })
          }
        }
        var i = function (e) {}
        var a = function (n) {
          var n$target_id = n.target_id
          var n$data = n.data
          if (n$target_id === e) {
            w.setStageMouse(t, n$data.position)
          }
        }
        var t$events = t.events
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
      var e = Ce.a()
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
      w.setStage(M, e)
      e.start_rendering()
      e.stage_animation.init().finally(function () {
        p(true)
      })
      return function () {
        w.deleteStage(M)
      }
    }
  }, [])
  React.useEffect(function () {
    var r$current = r.current
    if (r$current) {
      Te.q(r$current, e$size$width * k, e$size$height * k)
    }
  }, [k, e$size$width, e$size$height])
  React.useEffect(function () {
    var r$current = r.current
    if (r$current) {
      Te.n(r$current, e$attributes$backgroundColor)
    }
  }, [e$attributes$backgroundColor])
  React.useEffect(function () {
    var r$current = r.current
    if (r$current) {
      var t
      if (e$attributes$backgroundImage) {
        var n = P.get(e$attributes$backgroundImage)
        if (n) {
          t = d.lb(n)
        } else {
          if (e$attributes$backgroundImage.includes("://") || e$attributes$backgroundImage.includes("data:image/")) {
            t = e$attributes$backgroundImage
          }
        }
      }
      Te.o(r$current, t, e$attributes$resizeMode)
    }
  }, [e$attributes$backgroundImage, P, e$attributes$resizeMode])
  var e$widgetIds$length = e$widgetIds.length
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
    "data-role": c.M,
    "data-widget-type": c.f,
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
      w.setStage(e, r.current)
    }
    return Ye({
      widgetId: e,
      onload: G
    })
  }))
})
import RegeneratorRuntime = require("regenerator-runtime");
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
import Re = require("../../../7");
import ke = require("../../../287");
var xe = function (e) {
  var t = e.id
  var e$parentId = e.parentId
  var e$onload = e.onload
  var o = i.e(function (e) {
    return e.widgetMap
  }).get(t)
  var o$position = o.position
  var o$attributes = o.attributes
  var o$attributes$color = o$attributes.color
  var o$attributes$penSize = o$attributes.penSize
  var o$attributes$rotation = o$attributes.rotation
  var p = undefined === o$attributes$rotation ? 0 : o$attributes$rotation
  var o$attributes$cursorShape = o$attributes.cursorShape
  var h = undefined === o$attributes$cursorShape ? ke.a.NONE : o$attributes$cursorShape
  var m = t
  var g = React.useState(true)
  var _ = z.a(g, 2)
  var v = _[0]
  var b = _[1]
  var y = React.useCallback(Re.a(Ne.a.mark(function e() {
    var n
    return Ne.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (n = w.getStage(m)) {
              e.next = 4
              break
            }
            console.error("Brush widget get stage error")
            return e.abrupt("return")
          case 4:
            e.next = 6
            return Te.d(n, m, o$position, true)
          case 6:
            if (e$onload) {
              e$onload(t)
            }
            Te.l(n, m, o$attributes$color)
            Te.m(n, m, o$attributes$penSize)
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
  var E = React.useCallback(Re.a(Ne.a.mark(function e() {
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
            if (t = me.b(e$parentId)) {
              e.next = 5
              break
            }
            return e.abrupt("return")
          case 5:
            if (t$attributes$coordinateRatio = t.attributes.coordinateRatio, o = undefined === t$attributes$coordinateRatio ? 2 : t$attributes$coordinateRatio, i = w.getStage(m)) {
              e.next = 10
              break
            }
            console.error("Brush widget get stage error")
            return e.abrupt("return")
          case 10:
            e.next = 12
            return Te.r(i, m, o$attributes$penSize, o$attributes$color, h, o, true)
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
      var e = w.getActor(t)
      if (e) {
        e.set_rotation(p)
      }
    }
  }, [t, v, p])
  React.useLayoutEffect(function () {
    if (!v) {
      var e = w.getActor(t)
      if (e) {
        e.set_position(o$position.x, o$position.y)
      }
    }
  }, [t, v, o$position])
  return null
}
import De = require("../../../143");
var Me = function () {
  var e = Re.a(Ne.a.mark(function e(t, n, r) {
    return Ne.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            return e.abrupt("return", Promise.all(r.map(function (e) {
              return Te.a(t, n, e)
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
  var e$onload = e.onload
  var r = i.e(function (e) {
    return e.widgetMap
  }).get(t)
  var r$opacity = r.opacity
  var r$position = r.position
  var r$parentId = r.parentId
  var r$visible = r.visible
  var r$attributes = r.attributes
  var r$attributes$selectedStyleId = r$attributes.selectedStyleId
  var r$attributes$flipped = r$attributes.flipped
  var r$attributes$scaleAndLock = r$attributes.scaleAndLock
  var r$attributes$scale = r$attributes.scale
  var r$attributes$rotation = r$attributes.rotation
  var r$attributes$actionList = r$attributes.actionList
  var r$attributes$pivotToCenter = r$attributes.pivotToCenter
  var v = React.useState(false)
  var b = z.a(v, 2)
  var y = b[0]
  var E = b[1]
  var O = t
  var C = i.e(function (e) {
    return e.imageFileMap
  })
  React.useEffect(function () {
    if (y) {
      var e = w.getActor(t)
      if (!e) {
        return
      }
      e.set_position(r$position.x, r$position.y)
    }
  }, [t, y, r$position.x, r$position.y])
  React.useEffect(function () {
    if (y) {
      var e = w.getActor(t)
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
      var e = w.getActor(t)
      if (!e) {
        return
      }
      e.set_visible(r$visible)
    }
  }, [t, y, r$visible])
  React.useEffect(function () {
    if (y) {
      var e = w.getActor(t)
      if (e) {
        e.set_current_style(r$attributes$selectedStyleId)
      }
    }
  }, [O, t, y, r$attributes$selectedStyleId])
  React.useEffect(function () {
    if (y) {
      var e = w.getActor(t)
      if (!e) {
        return
      }
      e.set_rotation(r$attributes$rotation)
    }
  }, [t, y, r$attributes$rotation])
  React.useEffect(function () {
    if (y) {
      var e = w.getActor(t)
      if (!e) {
        return
      }
      e.set_alpha((undefined === r$opacity ? 100 : r$opacity) / 100)
    }
  }, [t, y, r$opacity])
  React.useEffect(function () {
    if (y) {
      var e = w.getActor(t)
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
    var e = Re.a(Ne.a.mark(function e(t) {
      var r
      var /* [auto-meaningful-name] */rR$attributes$scaleAndLockR$attributes$scaleXR$attributes$scaleYR$attributes$scaleX1Y1$x
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
              if (rR$attributes$scaleAndLockR$attributes$scaleXR$attributes$scaleYR$attributes$scaleX1Y1$x = (r = r$attributes$scaleAndLock || (r$attributes$scale ? {
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
                  x: rR$attributes$scaleAndLockR$attributes$scaleXR$attributes$scaleYR$attributes$scaleX1Y1$x,
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
              return Me(t, a$value, [].concat(b, [De.h]))
            case 11:
              if (r$attributes$selectedStyleId) {
                a$value.set_current_style(r$attributes$selectedStyleId)
              } else {
                a$value.set_current_style(De.h.id)
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
              a$value.set_scale(rR$attributes$scaleAndLockR$attributes$scaleXR$attributes$scaleYR$attributes$scaleX1Y1$x, i)
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
    var e = w.getStage(O)
    if (e) {
      T(e)
    } else {
      console.error("ActorWidget get Stage error")
    }
  }, [O, T])
  return null
}
import Pe = require("../../../548/index");
var Be = function (e) {
  var t = e.id
  var e$type = e.type
  var r = React.useCallback(function (e) {
    var r = A.k(e)
    w.emitDatePickerSelectDone(t, r.date, r.y, r.m, r.d)
    w.setWidgetAttribute(t, "timeStamp", new Date(e).getTime())
    C.b.playerWidgetLog({
      widgetId: t,
      widgetType: e$type,
      message: "onWidgetSelected"
    })
  }, [t, e$type])
  return s.a.createElement(Pe.a, Object.assign({}, e, {
    onDatePickerChange: r
  }))
}
import Fe = require("../../../549/index");
var Ge = function (e) {
  var t = e.id
  var e$type = e.type
  var r = React.useCallback(function (e) {
    var r = A.k(e)
    w.emitTimePickerSelectDone(t, r.time, r.h, r.min, r.s)
    w.setWidgetAttribute(t, "timeStamp", new Date(e).getTime())
    C.b.playerWidgetLog({
      widgetId: t,
      widgetType: e$type,
      message: "onWidgetSelected"
    })
  }, [t, e$type])
  return s.a.createElement(Fe.a, Object.assign({}, e, {
    onDatePickerChange: r
  }))
}
var Ue
var We = function () {
  return null
}
Ue = {}
h.a(Ue, c.H, T)
h.a(Ue, c.d, j)
h.a(Ue, c.z, F)
h.a(Ue, c.v, V)
h.a(Ue, c.w, function (e) {
  var t = e.id
  var e$type = e.type
  var e$position = e.position
  var e$visible = e.visible
  var e$opacity = e.opacity
  var e$size = e.size
  var e$attributes = e.attributes
  var e$attributes$disabled = e$attributes.disabled
  var e$attributes$placeholder = e$attributes.placeholder
  var e$attributes$errorMessage = e$attributes.errorMessage
  var e$attributes$value = e$attributes.value
  var e$attributes$textAlign = e$attributes.textAlign
  var b = undefined === e$attributes$textAlign ? "left" : e$attributes$textAlign
  var e$attributes$placeholderColor = e$attributes.placeholderColor
  var e$attributes$valueColor = e$attributes.valueColor
  var e$attributes$fontFamily = e$attributes.fontFamily
  var e$attributes$fontSize = e$attributes.fontSize
  var e$attributes$backgroundMode = e$attributes.backgroundMode
  var e$attributes$templateMode = e$attributes.templateMode
  var e$attributes$backgroundColor = e$attributes.backgroundColor
  var e$attributes$backgroundImage = e$attributes.backgroundImage
  var e$attributes$imageResizeMode = e$attributes.imageResizeMode
  var e$size$width = e$size.width
  var e$size$height = e$size.height
  var M = React.useState(e$attributes$placeholder)
  var L = z.a(M, 2)
  var P = L[0]
  var F = L[1]
  var G = React.useState(false)
  var U = z.a(G, 2)
  var W = U[0]
  var H = U[1]
  var V = React.useMemo(function () {
    var e = e$attributes$errorMessage ? X.d : e$attributes$backgroundColor
    try {
      return o()(e.toString()).toString()
    } catch (r) {
      C.b.widgetError({
        widgetId: t,
        widgetType: e$type,
        message: "player/colorError"
      })
      return ""
    }
  }, [e$attributes$backgroundColor, e$attributes$errorMessage, t, e$type])
  var K = B.b(e$attributes$backgroundImage) || X.a
  var J = React.useMemo(function () {
    if (!W || e$attributes$backgroundMode === Y.a.IMAGE) {
      return {}
    }
    var e = undefined !== e$attributes$errorMessage ? X.d : V
    return function (e, t) {
      var n
      return (n = {}, h.a(n, Y.c.OUTLINED_NORMAL, {
        borderColor: t
      }), h.a(n, Y.c.CONTAINED_NORMAL, {
        background: Z(t, .3)
      }), h.a(n, Y.c.CONTAINED_ROUND, {
        background: Z(t, .3)
      }), h.a(n, Y.c.OUTLINED_FLAT, {
        borderBottomColor: t
      }), n)[e]
    }(e$attributes$templateMode, e)
  }, [W, e$attributes$backgroundMode, e$attributes$errorMessage, V, e$attributes$templateMode])
  var $ = undefined
  var ee = React.useMemo(function () {
    return function (e, t, n) {
      var r
      return (r = {}, h.a(r, Y.c.OUTLINED_NORMAL, {
        background: "rgba(255, 255, 255)",
        borderRadius: "4px",
        border: "2px solid ".concat(Z(t, .5)),
        borderColor: Z(t, .5)
      }), h.a(r, Y.c.CONTAINED_NORMAL, {
        background: Z(t, .14),
        borderRadius: "4px"
      }), h.a(r, Y.c.CONTAINED_ROUND, {
        background: Z(t, .14),
        borderRadius: "".concat(n / 2, "px")
      }), h.a(r, Y.c.OUTLINED_FLAT, {
        borderBottom: "2px solid ".concat(Z(t, .5)),
        borderBottomColor: Z(t, .5)
      }), r)[e]
    }(e$attributes$templateMode, V, e$size$height)
  }, [V, e$size$height, e$attributes$templateMode])
  if (e$attributes$backgroundMode === Y.a.IMAGE) {
    $ = {
      backgroundImage: "url(".concat(K, ")"),
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundSize: "contain" === e$attributes$imageResizeMode ? "contain" : "100% 100%",
      padding: "6px ".concat(20, "px")
    }
  } else {
    $ = N.a(N.a({}, ee), {}, {
      padding: "6px ".concat(14, "px")
    })
  }
  var te = React.useMemo(function () {
    if (e$attributes$disabled) {
      return function (e) {
        var t
        return (t = {}, h.a(t, Y.c.OUTLINED_NORMAL, {
          color: "#CCCCCC",
          borderColor: "#E9E9E9"
        }), h.a(t, Y.c.CONTAINED_NORMAL, {
          background: "#E7E7E7",
          color: "#FFFFFF"
        }), h.a(t, Y.c.CONTAINED_ROUND, {
          background: "#E7E7E7",
          color: "#FFFFFF"
        }), h.a(t, Y.c.OUTLINED_FLAT, {
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
    className: g()(q.a.inputWidget, e$attributes$backgroundMode === Y.a.TEMPLATE && e$attributes$templateMode !== Y.c.OUTLINED_FLAT && q.a.inputWidgetUnderpainting),
    "data-role": c.M,
    "data-type": c.w,
    style: N.a(N.a(N.a({
      top: e$position.y,
      left: e$position.x,
      height: e$size$height,
      width: e$size$width,
      visibility: e$visible ? undefined : "hidden",
      pointerEvents: e$visible ? undefined : "none",
      fontSize: e$attributes$fontSize,
      opacity: undefined === e$opacity ? undefined : e$opacity / 100,
      filter: e$attributes$disabled && e$attributes$backgroundMode === Y.a.IMAGE ? "saturate(0) brightness(1.1)" : undefined,
      fontFamily: e$attributes$fontFamily,
      color: e$attributes$valueColor
    }, $), J), te)
  }, s.a.createElement("div", {
    className: g()(q.a.inputWidgetInputWrapper)
  }, s.a.createElement("input", {
    placeholder: P,
    value: e$attributes$value,
    onChange: function (e) {
      var e$target$value = e.target.value
      Q.Yh(t, e$target$value)
      w.emitInputChange(t)
    },
    onBlur: function () {
      if (!e$attributes$disabled) {
        H(false)
        F(e$attributes$placeholder)
        I.a(t)
        w.emitInputBlur(t)
        C.b.playerWidgetLog({
          widgetId: t,
          widgetType: e$type,
          message: "onInputBlur"
        })
      }
    },
    onFocus: function () {
      if (!e$attributes$disabled) {
        F("")
        w.emitInputFocus(t)
        H(true)
        C.b.playerWidgetLog({
          widgetId: t,
          widgetType: e$type,
          message: "onInputFocus"
        })
      }
    },
    disabled: e$attributes$disabled,
    style: {
      textAlign: b,
      color: e$attributes$disabled ? X.o : e$attributes$valueColor,
      fontFamily: e$attributes$fontFamily
    }
  }), undefined !== e$attributes$errorMessage && s.a.createElement("span", {
    className: q.a.errorMessage,
    style: {
      color: X.d
    }
  }, e$attributes$errorMessage), e$attributes$disabled && s.a.createElement("div", {
    className: q.a.mask
  })))
})
h.a(Ue, c.C, $)
h.a(Ue, c.g, te)
h.a(Ue, c.L, re)
h.a(Ue, c.F, ae)
h.a(Ue, c.E, le)
h.a(Ue, c.x, ve)
h.a(Ue, c.A, we)
h.a(Ue, c.f, Ae)
h.a(Ue, c.c, xe)
h.a(Ue, c.a, Le)
h.a(Ue, c.b, Audio)
h.a(Ue, c.n, Be)
h.a(Ue, c.J, Ge)
h.a(Ue, c.e, We)
h.a(Ue, c.t, We)
h.a(Ue, c.K, We)
h.a(Ue, c.I, We)
h.a(Ue, c.u, We)
h.a(Ue, c.i, We)
h.a(Ue, c.y, We)
h.a(Ue, c.B, We)
h.a(Ue, c.l, We)
h.a(Ue, c.m, We)
h.a(Ue, c.h, We)
h.a(Ue, c.G, We)
h.a(Ue, c.j, We)
h.a(Ue, c.k, We)
var He = Ue
import Ve = require("../312");
function ze(e) {
  var e$widget = e.widget
  var e$forceRender = e.forceRender
  var e$onload = e.onload
  var e$widget$type = e$widget.type
  if (!e$widget.parentId || e$forceRender) {
    var i = ""
    if (e$widget.parentId) {
      var a = me.b(e$widget.parentId)
      if ((null === a || undefined === a ? undefined : a.type) && [c.x, c.A].includes(a.type) && e$widget$type === c.v) {
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
    var u = p.f(e$widget$type)
    if (!u) {
      console.error("getWidget error", e$widget$type)
      return null
    }
    var u$types = u.types
    if (f.q(e$widget$type) && false === u$types.isInvisibleWidget) {
      var h = w.getWidgetInstance(e$widget.id)
      return h ? s.a.createElement("div", {
        key: e$widget.id,
        id: e$widget.id,
        "data-role": c.M,
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
  var e$widgetId = e.widgetId
  var e$onload = e.onload
  var r = me.b(e$widgetId)
  return r ? ze({
    widget: r,
    forceRender: true,
    onload: e$onload
  }) : (console.error("getWidget error"), null)
}
var _a
_a = React.memo(function (e) {
  var t = e.id
  var n = i.e(function (e) {
    return e.widgetMap
  })
  var r = React.useRef({
    x: 0,
    y: 0
  })
  var p = i.e(function (e) {
    return e.screenList.find(function (e) {
      return e.id === t
    })
  })
  var f = i.e(function (e) {
    return e.imageFileMap
  })
  var h = i.e(function (e) {
    return e.currentScreenParam
  })
  var m = 0
  var g = 0
  var _ = (null === p || undefined === p ? undefined : p.widgetIds) || []
  _.forEach(function (e) {
    var t = n.get(e)
    if (t && t.type === c.f) {
      m++
    }
  })
  var v = React.useCallback(function (e) {
    w.emitScreenOpen(e, h)
  }, [h])
  React.useEffect(function () {
    if (0 === m) {
      v(t)
    }
    var e = function () {
      w.emitGyroscopePhoneShake(t)
      C.b.playerWidgetLog({
        widgetId: "",
        widgetType: c.t,
        message: "onGyroscopeShake"
      })
    }
    w.onDeviceShake(e)
    return function () {
      w.offDeviceShake(e)
    }
  }, [m, t, v])
  var b = React.useCallback(function (e) {
    if (++g >= m) {
      v(t)
    }
  }, [m, t, g, v])
  if (p && p.type === c.D) {
    var p$backgroundColor = p.backgroundColor
    var p$backgroundImageResizeMode = p.backgroundImageResizeMode
    var p$backgroundImage = p.backgroundImage
    var T = f.get(p$backgroundImage)
    var S = T ? d.lb(T) : ""
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
        var e$target$dataset$screenId = e.target.dataset.screenId
        if (null === e$target$dataset$screenId || undefined === e$target$dataset$screenId ? undefined : e$target$dataset$screenId.startsWith(c.D)) {
          Ve.n(t)
          w.emitScreenPress(t, e.nativeEvent.offsetX, e.nativeEvent.offsetY)
        }
      },
      onMouseDown: function (e) {
        var e$target$dataset$screenId = e.target.dataset.screenId
        if (null === e$target$dataset$screenId || undefined === e$target$dataset$screenId ? undefined : e$target$dataset$screenId.startsWith(c.D)) {
          Ve.k(t)
          document.addEventListener("mouseup", function () {
            return Ve.b()
          }, {
            once: true
          })
          w.emitScreenPressIn(t, e.nativeEvent.offsetX, e.nativeEvent.offsetY)
          ge.a(function () {
            return w.emitScreenPressHoldAndWait(t, r.current.x || 0, r.current.y || 0)
          })
        }
      },
      onMouseUp: function (e) {
        var e$target$dataset$screenId = e.target.dataset.screenId
        if (null === e$target$dataset$screenId || undefined === e$target$dataset$screenId ? undefined : e$target$dataset$screenId.startsWith(c.D)) {
          Ve.n(t)
          w.emitScreenPressOut(t, e.nativeEvent.offsetX, e.nativeEvent.offsetY)
        }
      },
      onMouseMove: function (e) {
        var e$target$dataset$screenId = e.target.dataset.screenId
        if (null === e$target$dataset$screenId || undefined === e$target$dataset$screenId ? undefined : e$target$dataset$screenId.startsWith(c.D)) {
          r.current.x = e.nativeEvent.offsetX
          r.current.y = e.nativeEvent.offsetY
        }
      },
      onTouchStart: function (e) {
        if (l.W()) {
          var e$target$dataset$screenId = e.target.dataset.screenId
          if (null === e$target$dataset$screenId || undefined === e$target$dataset$screenId ? undefined : e$target$dataset$screenId.startsWith(c.D)) {
            w.emitScreenPressIn(t, e.targetTouches[0].clientX, e.targetTouches[0].clientY)
            ge.a(function () {
              return w.emitScreenPressHoldAndWait(t, r.current.x || 0, r.current.y || 0)
            })
          }
        }
      },
      onTouchMove: function (e) {
        if (l.W()) {
          var e$target$dataset$screenId = e.target.dataset.screenId
          if (null === e$target$dataset$screenId || undefined === e$target$dataset$screenId ? undefined : e$target$dataset$screenId.startsWith(c.D)) {
            r.current.x = e.targetTouches[0].clientX
            r.current.y = e.targetTouches[0].clientX
          }
        }
      },
      onTouchEnd: function (e) {
        if (l.W()) {
          var e$target$dataset$screenId = e.target.dataset.screenId
          if (null === e$target$dataset$screenId || undefined === e$target$dataset$screenId ? undefined : e$target$dataset$screenId.startsWith(c.D)) {
            w.emitScreenPressOut(t, e.targetTouches[0].clientX, e.targetTouches[0].clientY)
          }
        }
      },
      style: {
        backgroundColor: o()(p$backgroundColor).toString(),
        backgroundImage: S ? "url(".concat(S, ")") : "none",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: p$backgroundImageResizeMode === u.a.STRETCH ? "100% 100%" : p$backgroundImageResizeMode
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
