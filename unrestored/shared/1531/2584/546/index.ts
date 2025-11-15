/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：546
 */

"use strict"

var r
import /* [auto-meaningful-name] */$$_11 = require("../11")
import /* [auto-meaningful-name] */$$_10_index = require("../10/index")
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
import /* [auto-meaningful-name] */Color = require("color")
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
}(Color)
import u = require("../8")
var d = function __importDefault(module) {
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
}(u)
import p = require("../5")
import /* [auto-meaningful-name] */$$_90 = require("../90")
import /* [auto-meaningful-name] */$$_15 = require("../15")
import /* [auto-meaningful-name] */$$_28_index = require("../28/index")
import /* [auto-meaningful-name] */$$_78 = require("../78")
import /* [auto-meaningful-name] */$_158 = require("./158")
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
}($_158)
!function (e) {
  e[e.DOWN = 0] = "DOWN"
  e[e.UP = 1] = "UP"
}(r || (r = {}))
var b = false
if ($$_28_index.b() && $$_28_index.h()) {
  document.body.addEventListener("touchmove", function (e) {
    if (b) {
      e.preventDefault()
    }
  }, {
    passive: false
  })
}
var _a
_a = function (e) {
  var t = React.useRef(null)
  var n = e.id
  var /* [auto-meaningful-name] */e$position = e.position
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$opacity = e.opacity
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$onSliderChange = e.onSliderChange
  var /* [auto-meaningful-name] */e$size = e.size
  var /* [auto-meaningful-name] */e$onEndToSlid = e.onEndToSlid
  var /* [auto-meaningful-name] */e$onStartToSlid = e.onStartToSlid
  var /* [auto-meaningful-name] */e$isEditState = e.isEditState
  var /* [auto-meaningful-name] */e$selected = e.selected
  var S = undefined !== e$selected && e$selected
  var /* [auto-meaningful-name] */e$handleImageUrl = e.handleImageUrl
  var /* [auto-meaningful-name] */e$backgroundImageUrl = e.backgroundImageUrl
  var /* [auto-meaningful-name] */e$trackImageUrl = e.trackImageUrl
  var /* [auto-meaningful-name] */e$attributes$maxValue = e$attributes.maxValue
  var /* [auto-meaningful-name] */e$attributes$step = e$attributes.step
  var /* [auto-meaningful-name] */e$attributes$minValue = e$attributes.minValue
  var /* [auto-meaningful-name] */e$attributes$direction = e$attributes.direction
  var D = undefined === e$attributes$direction ? $$_78.b.HORIZONTAL : e$attributes$direction
  var /* [auto-meaningful-name] */e$attributes$sliderType = e$attributes.sliderType
  var L = undefined === e$attributes$sliderType ? $$_78.d.TEMPLATE : e$attributes$sliderType
  var /* [auto-meaningful-name] */e$attributes$handleImageRatio = e$attributes.handleImageRatio
  var B = undefined === e$attributes$handleImageRatio ? 2 : e$attributes$handleImageRatio
  var /* [auto-meaningful-name] */e$attributes$backgroundImageDirection = e$attributes.backgroundImageDirection
  var G = undefined === e$attributes$backgroundImageDirection ? $$_78.b.HORIZONTAL : e$attributes$backgroundImageDirection
  var /* [auto-meaningful-name] */e$attributes$trackImageDirection = e$attributes.trackImageDirection
  var W = undefined === e$attributes$trackImageDirection ? $$_78.b.HORIZONTAL : e$attributes$trackImageDirection
  var H = e$attributes.handleImageDirection || $$_78.b.HORIZONTAL
  var /* [auto-meaningful-name] */e$attributes$mode = e$attributes.mode
  var /* [auto-meaningful-name] */e$attributes$color = e$attributes.color
  var /* [auto-meaningful-name] */e$attributes$disabled = e$attributes.disabled
  var /* [auto-meaningful-name] */e$attributes$value = e$attributes.value
  var q = React.useRef(null)
  var X = React.useRef(null)
  var Q = React.useRef(r.UP)
  var Z = React.useState(false)
  var J = $$_10_index.a(Z, 2)
  var $ = J[0]
  var ee = J[1]
  var te = React.useState(0)
  var ne = $$_10_index.a(te, 2)
  var re = ne[0]
  var oe = ne[1]
  var ie = React.useState(0)
  var ae = $$_10_index.a(ie, 2)
  var se = ae[0]
  var ce = ae[1]
  var le = React.useState(0)
  var ue = $$_10_index.a(le, 2)
  var de = ue[0]
  var pe = ue[1]
  var fe = React.useState(0)
  var he = $$_10_index.a(fe, 2)
  var me = he[0]
  var ge = he[1]
  var _e = React.useState("")
  var ve = $$_10_index.a(_e, 2)
  var be = ve[0]
  var ye = ve[1]
  var Ee = React.useState("")
  var Oe = $$_10_index.a(Ee, 2)
  var we = Oe[0]
  var Ce = Oe[1]
  var Te = React.useRef(1)
  var Se = React.useRef(1)
  React.useEffect(function () {
    if (e$trackImageUrl) {
      Te.current = Te.current + 1
      var /* [auto-meaningful-name] */Te$current = Te.current
      $$_15.gb(e$trackImageUrl, W === $$_78.b.HORIZONTAL ? -90 : 90).then(function (t) {
        if (!(Te.current > Te$current)) {
          ye(t)
        }
      }).catch(function () {
        return ye("")
      })
    }
  }, [e$trackImageUrl, W])
  React.useEffect(function () {
    if (e$backgroundImageUrl) {
      Se.current = Se.current + 1
      var /* [auto-meaningful-name] */Se$current = Se.current
      $$_15.gb(e$backgroundImageUrl, G === $$_78.b.HORIZONTAL ? -90 : 90).then(function (t) {
        if (!(Se.current > Se$current)) {
          Ce(t)
        }
      }).catch(function () {
        return Ce("")
      })
    }
  }, [e$backgroundImageUrl, G])
  React.useEffect(function () {
    if (L === $$_78.d.IMAGE) {
      ee(true)
    } else {
      ee(false)
    }
  }, [L])
  React.useEffect(function () {
    var /* [auto-meaningful-name] */e$size$height = e$size.height
    if (D === $$_78.b.VERTICAL) {
      e$size$height = e$size.width
    }
    if (L === $$_78.d.IMAGE) {
      oe(e$size$height * B)
      ce(e$size$height * B)
      pe(0)
      return void ge(0)
    }
    if (e$attributes$mode === $$_78.c.DEFAULT) {
      oe(1.4 * e$size$height)
      ce(1.4 * e$size$height)
      pe(e$size$height / 3.2)
      ge(1.4 * e$size$height / 2)
    } else {
      if (e$attributes$mode === $$_78.c.PRIMARY) {
        if (D === $$_78.b.VERTICAL) {
          oe(e$size$height)
          ce(1.6 * e$size$height)
        } else {
          oe(1.6 * e$size$height)
          ce(e$size$height)
        }
        pe(e$size$height / 10)
        ge(e$size$height / 2.5)
      }
    }
  }, [L, e$attributes$mode, e$size, B, D])
  var Ie = function (e) {
    var t = function (e) {
      var t = l()(e).toString()
      return {
        default: {
          stepBackgroundColor: $$_15.hb(t, .2),
          handleBorderColor: t,
          trackBackgroundColor: t
        },
        disabled: {
          stepBackgroundColor: $$_15.hb("#ccc", .2),
          handleBorderColor: "#ccc",
          trackBackgroundColor: "#ccc"
        }
      }
    }(e$attributes$color)
    return e ? t.disabled : t.default
  }(e$attributes$disabled)
  function Ae(e, t) {
    return t / e * 100 + "%"
  }
  var je = React.useCallback(function (e, n) {
    var /* [auto-meaningful-name] */t$current
    var /* [auto-meaningful-name] */q$current = q.current
    var /* [auto-meaningful-name] */X$current = X.current
    var /* [auto-meaningful-name] */_t$current = t.current
    var s = null === (t$current = t.current) || undefined === t$current ? undefined : t$current.getClientRects()[0]
    if (!s) {
      return e$attributes$value
    }
    var c = Math.max(e$attributes$maxValue - e$attributes$minValue, 1)
    if (q$current && X$current && _t$current) {
      if (D === $$_78.b.HORIZONTAL) {
        var /* [auto-meaningful-name] */_t$current$getClientRects0$width = _t$current.getClientRects()[0].width
        var /* [auto-meaningful-name] */q$current$offsetWidth = q$current.offsetWidth
        var d = _t$current$getClientRects0$width / (c / e$attributes$step)
        var p = Math.max(Math.min(e - s.left, _t$current$getClientRects0$width), 0)
        var f = p / d >= c / e$attributes$step ? Math.ceil(p / d) : Math.round(p / d)
        p = f * d
        var h = Math.min(e$attributes$step * f + e$attributes$minValue, e$attributes$maxValue)
        var m = Ae(_t$current$getClientRects0$width, p = Math.min(p, _t$current$getClientRects0$width))
        q$current.style.left = "calc(".concat(m, " - ").concat(q$current$offsetWidth / 2, "px)")
        X$current.style.width = m
        return h
      }
      var /* [auto-meaningful-name] */_t$current$getClientRects0$height = _t$current.getClientRects()[0].height
      var /* [auto-meaningful-name] */q$current$offsetHeight = q$current.offsetHeight
      var b = _t$current$getClientRects0$height / (c / e$attributes$step)
      var y = Math.max(Math.min(s.bottom - n, _t$current$getClientRects0$height), 0)
      var E = y / b >= c / e$attributes$step ? Math.ceil(y / b) : Math.round(y / b)
      y = E * b
      var O = Math.min(e$attributes$step * E + e$attributes$minValue, e$attributes$maxValue)
      var w = Ae(_t$current$getClientRects0$height, y = Math.min(y, _t$current$getClientRects0$height))
      q$current.style.bottom = "calc(".concat(w, " - ").concat(q$current$offsetHeight / 2, "px)")
      X$current.style.height = w
      return O
    }
    return e$attributes$value
  }, [D, e$attributes$maxValue, e$attributes$minValue, e$attributes$step, e$attributes$value])
  var Ne = React.useCallback(function (e) {
    if ($$_15.W()) {
      b = true
      if (!e$attributes$disabled) {
        if (e$onStartToSlid) {
          e$onStartToSlid(e$attributes$value)
        }
      }
    }
  }, [e$attributes$disabled, e$onStartToSlid, e$attributes$value])
  var Re = React.useCallback(function (e) {
    if ($$_15.W() && !e$attributes$disabled) {
      b = true
      var t = je(e.changedTouches[0].clientX, e.changedTouches[0].clientY)
      if (e$onSliderChange) {
        e$onSliderChange(t)
      }
    }
  }, [e$attributes$disabled, je, e$onSliderChange])
  var ke = React.useCallback(function () {
    b = false
    if (!e$attributes$disabled) {
      if (e$onEndToSlid) {
        e$onEndToSlid(e$attributes$value)
      }
    }
  }, [e$attributes$disabled, e$onEndToSlid, e$attributes$value])
  React.useLayoutEffect(function () {
    var /* [auto-meaningful-name] */X$current = X.current
    var /* [auto-meaningful-name] */q$current = q.current
    var /* [auto-meaningful-name] */t$current = t.current
    var o = Math.max(e$attributes$maxValue - e$attributes$minValue, 1)
    if (X$current && q$current && t$current) {
      if (D === $$_78.b.HORIZONTAL) {
        var /* [auto-meaningful-name] */t$current$offsetWidth = t$current.offsetWidth
        var /* [auto-meaningful-name] */q$current$offsetWidth = q$current.offsetWidth
        var s = (e$attributes$value - e$attributes$minValue) / o * t$current$offsetWidth
        if (e$attributes$value === e$attributes$maxValue && e$attributes$minValue === e$attributes$maxValue) {
          s = 1 / o * t$current$offsetWidth
        }
        var c = Ae(t$current$offsetWidth, s)
        q$current.style.left = "calc(".concat(c, " - ").concat(q$current$offsetWidth / 2, "px)")
        q$current.style.bottom = "auto"
        X$current.style.width = c
        X$current.style.height = "100%"
      } else {
        var /* [auto-meaningful-name] */t$current$offsetHeight = t$current.offsetHeight
        var /* [auto-meaningful-name] */q$current$offsetHeight = q$current.offsetHeight
        var d = (e$attributes$value - e$attributes$minValue) / o * t$current$offsetHeight
        if (e$attributes$value === e$attributes$maxValue && e$attributes$minValue === e$attributes$maxValue) {
          d = 1 / o * t$current$offsetHeight
        }
        var p = Ae(t$current$offsetHeight, d)
        q$current.style.bottom = "calc(".concat(p, " - ").concat(q$current$offsetHeight / 2, "px)")
        q$current.style.left = "auto"
        X$current.style.width = "100%"
        X$current.style.height = p
      }
    }
  }, [re, se, e$attributes$maxValue, e$attributes$minValue, e$attributes$value, D, $, e$size])
  React.useEffect(function () {
    if (!$$_15.W()) {
      var e = e$attributes$value
      var t = e$attributes$value
      var n = $$_15.p(function () {
        if (e$onSliderChange) {
          e$onSliderChange(e)
        }
      }, 60)
      var /* [auto-meaningful-name] */q$current = q.current
      if (q$current) {
        if (!(null === q$current || undefined === q$current)) {
          q$current.addEventListener("mousedown", a, {
            passive: false
          })
        }
      }
      return function () {
        if (!(null === q$current || undefined === q$current)) {
          q$current.removeEventListener("mousedown", a)
        }
      }
    }
    function i(o) {
      if (Q.current === r.DOWN) {
        e = je(o.clientX, o.clientY)
        if (t !== e) {
          t = e
          if (e$onSliderChange) {
            if (e$isEditState) {
              n()
            } else {
              e$onSliderChange(e)
            }
          }
        }
      }
    }
    function a(e) {
      if (!(e$attributes$disabled || e$isEditState && !S)) {
        e.preventDefault()
        e.stopPropagation()
        Q.current = r.DOWN
        if (e$onStartToSlid) {
          e$onStartToSlid(e$attributes$value)
        }
        document.addEventListener("mousemove", i, {
          passive: false
        })
        document.addEventListener("mouseup", s, {
          passive: false
        })
        document.addEventListener("mouseleave", s, {
          passive: false
        })
      }
    }
    function s(t) {
      t.stopPropagation()
      Q.current = r.UP
      if (e$onEndToSlid) {
        e$onEndToSlid(e)
      }
      document.removeEventListener("mousemove", i)
      document.removeEventListener("mouseup", s)
      document.removeEventListener("mouseleave", s)
    }
  }, [e$attributes$disabled, je, n, e$isEditState, e$onEndToSlid, e$onSliderChange, e$onStartToSlid, S, e$attributes$value])
  return s.a.createElement("div", {
    id: n,
    "data-role": p.M,
    "data-widget-type": p.E,
    className: d()($$_90.b, $$_11.a({}, v.a.hide, !e$visible)),
    style: {
      top: e$position.y,
      left: e$position.x,
      height: e$size.height,
      width: e$size.width,
      opacity: undefined === e$opacity ? undefined : e$opacity / 100,
      filter: e$attributes$disabled && $ ? "saturate(0)" : undefined
    }
  }, s.a.createElement("div", {
    className: v.a.sliderBox
  }, s.a.createElement("div", {
    className: v.a.main,
    ref: t,
    style: {
      borderRadius: $ ? 0 : D === $$_78.b.HORIZONTAL ? e$size.height / 2 : e$size.width / 2,
      backgroundColor: $ ? "transparent" : "#fff"
    }
  }, s.a.createElement("div", {
    className: d()(v.a.step, D === $$_78.b.VERTICAL && v.a.vertical),
    style: {
      width: "100%",
      height: "100%",
      borderRadius: $ ? 0 : D === $$_78.b.HORIZONTAL ? e$size.height / 2 : e$size.width / 2,
      backgroundColor: $ ? undefined : Ie.stepBackgroundColor,
      backgroundImage: $ ? "url(".concat(G === D ? e$backgroundImageUrl : we, ")") : undefined
    }
  }, s.a.createElement("div", {
    className: d()(v.a.trackBox, D === $$_78.b.HORIZONTAL ? v.a.horizontalTrackBox : v.a.verticalTrackBox),
    ref: X,
    style: {
      backgroundColor: $ ? undefined : Ie.trackBackgroundColor
    }
  }, s.a.createElement("div", {
    className: v.a.track,
    style: {
      width: D === $$_78.b.HORIZONTAL ? e$size.width : "100%",
      height: D === $$_78.b.HORIZONTAL ? "100%" : e$size.height,
      backgroundImage: $ ? "url(".concat(W === D ? e$trackImageUrl : be, ")") : undefined
    }
  }))), s.a.createElement("div", {
    onTouchStart: Ne,
    onTouchMove: Re,
    onTouchEnd: ke,
    ref: q,
    className: d()(v.a.handle, $ ? v.a.imageHandle : v.a.templateHandle, H === D ? v.a.horizontalHandle : v.a.verticalHandle, H === $$_78.b.HORIZONTAL && D === $$_78.b.VERTICAL ? v.a.verticalRotate : v.a.horizontalRotate, e$isEditState && !S && v.a.handleNotSelected),
    style: {
      width: re,
      height: se,
      borderWidth: de,
      borderRadius: me,
      borderColor: Ie.handleBorderColor,
      color: $$_15.hb(Ie.handleBorderColor, .3),
      backgroundImage: $ ? "url(".concat(e$handleImageUrl, ")") : undefined
    }
  }, !$ && e$attributes$mode === $$_78.c.PRIMARY && s.a.createElement("div", {
    className: v.a.handleInner,
    style: {
      color: Ie.handleBorderColor
    }
  })))))
}
export { _a as a }
export default _a
