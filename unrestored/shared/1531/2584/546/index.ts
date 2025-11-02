/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：546
 */

"use strict"

var r
import o = require("../11");
import i = require("../10/index");
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
import Color = require("color");
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
import u = require("../8");
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
import p = require("../5");
import f = require("../90");
import h = require("../15");
import m = require("../28/index");
import g = require("../78");
import _ = require("./158");
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
!function (e) {
  e[e.DOWN = 0] = "DOWN"
  e[e.UP = 1] = "UP"
}(r || (r = {}))
var b = false
if (m.b() && m.h()) {
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
  var e$position = e.position
  var e$visible = e.visible
  var e$opacity = e.opacity
  var e$attributes = e.attributes
  var e$onSliderChange = e.onSliderChange
  var e$size = e.size
  var e$onEndToSlid = e.onEndToSlid
  var e$onStartToSlid = e.onStartToSlid
  var e$isEditState = e.isEditState
  var e$selected = e.selected
  var S = undefined !== e$selected && e$selected
  var e$handleImageUrl = e.handleImageUrl
  var e$backgroundImageUrl = e.backgroundImageUrl
  var e$trackImageUrl = e.trackImageUrl
  var e$attributes$maxValue = e$attributes.maxValue
  var e$attributes$step = e$attributes.step
  var e$attributes$minValue = e$attributes.minValue
  var e$attributes$direction = e$attributes.direction
  var D = undefined === e$attributes$direction ? g.b.HORIZONTAL : e$attributes$direction
  var e$attributes$sliderType = e$attributes.sliderType
  var L = undefined === e$attributes$sliderType ? g.d.TEMPLATE : e$attributes$sliderType
  var e$attributes$handleImageRatio = e$attributes.handleImageRatio
  var B = undefined === e$attributes$handleImageRatio ? 2 : e$attributes$handleImageRatio
  var e$attributes$backgroundImageDirection = e$attributes.backgroundImageDirection
  var G = undefined === e$attributes$backgroundImageDirection ? g.b.HORIZONTAL : e$attributes$backgroundImageDirection
  var e$attributes$trackImageDirection = e$attributes.trackImageDirection
  var W = undefined === e$attributes$trackImageDirection ? g.b.HORIZONTAL : e$attributes$trackImageDirection
  var H = e$attributes.handleImageDirection || g.b.HORIZONTAL
  var e$attributes$mode = e$attributes.mode
  var e$attributes$color = e$attributes.color
  var e$attributes$disabled = e$attributes.disabled
  var e$attributes$value = e$attributes.value
  var q = React.useRef(null)
  var X = React.useRef(null)
  var Q = React.useRef(r.UP)
  var Z = React.useState(false)
  var J = i.a(Z, 2)
  var $ = J[0]
  var ee = J[1]
  var te = React.useState(0)
  var ne = i.a(te, 2)
  var re = ne[0]
  var oe = ne[1]
  var ie = React.useState(0)
  var ae = i.a(ie, 2)
  var se = ae[0]
  var ce = ae[1]
  var le = React.useState(0)
  var ue = i.a(le, 2)
  var de = ue[0]
  var pe = ue[1]
  var fe = React.useState(0)
  var he = i.a(fe, 2)
  var me = he[0]
  var ge = he[1]
  var _e = React.useState("")
  var ve = i.a(_e, 2)
  var be = ve[0]
  var ye = ve[1]
  var Ee = React.useState("")
  var Oe = i.a(Ee, 2)
  var we = Oe[0]
  var Ce = Oe[1]
  var Te = React.useRef(1)
  var Se = React.useRef(1)
  React.useEffect(function () {
    if (e$trackImageUrl) {
      Te.current = Te.current + 1
      var te$current = Te.current
      h.gb(e$trackImageUrl, W === g.b.HORIZONTAL ? -90 : 90).then(function (t) {
        if (!(Te.current > te$current)) {
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
      var se$current = Se.current
      h.gb(e$backgroundImageUrl, G === g.b.HORIZONTAL ? -90 : 90).then(function (t) {
        if (!(Se.current > se$current)) {
          Ce(t)
        }
      }).catch(function () {
        return Ce("")
      })
    }
  }, [e$backgroundImageUrl, G])
  React.useEffect(function () {
    if (L === g.d.IMAGE) {
      ee(true)
    } else {
      ee(false)
    }
  }, [L])
  React.useEffect(function () {
    var e$size$height = e$size.height
    if (D === g.b.VERTICAL) {
      e$size$height = e$size.width
    }
    if (L === g.d.IMAGE) {
      oe(e$size$height * B)
      ce(e$size$height * B)
      pe(0)
      return void ge(0)
    }
    if (e$attributes$mode === g.c.DEFAULT) {
      oe(1.4 * e$size$height)
      ce(1.4 * e$size$height)
      pe(e$size$height / 3.2)
      ge(1.4 * e$size$height / 2)
    } else {
      if (e$attributes$mode === g.c.PRIMARY) {
        if (D === g.b.VERTICAL) {
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
          stepBackgroundColor: h.hb(t, .2),
          handleBorderColor: t,
          trackBackgroundColor: t
        },
        disabled: {
          stepBackgroundColor: h.hb("#ccc", .2),
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
    var q$current = q.current
    var x$current = X.current
    var _t$current = t.current
    var s = null === (t$current = t.current) || undefined === t$current ? undefined : t$current.getClientRects()[0]
    if (!s) {
      return e$attributes$value
    }
    var c = Math.max(e$attributes$maxValue - e$attributes$minValue, 1)
    if (q$current && x$current && _t$current) {
      if (D === g.b.HORIZONTAL) {
        var t$current$getClientRects0$width = _t$current.getClientRects()[0].width
        var q$current$offsetWidth = q$current.offsetWidth
        var d = t$current$getClientRects0$width / (c / e$attributes$step)
        var p = Math.max(Math.min(e - s.left, t$current$getClientRects0$width), 0)
        var f = p / d >= c / e$attributes$step ? Math.ceil(p / d) : Math.round(p / d)
        p = f * d
        var h = Math.min(e$attributes$step * f + e$attributes$minValue, e$attributes$maxValue)
        var m = Ae(t$current$getClientRects0$width, p = Math.min(p, t$current$getClientRects0$width))
        q$current.style.left = "calc(".concat(m, " - ").concat(q$current$offsetWidth / 2, "px)")
        x$current.style.width = m
        return h
      }
      var t$current$getClientRects0$height = _t$current.getClientRects()[0].height
      var q$current$offsetHeight = q$current.offsetHeight
      var b = t$current$getClientRects0$height / (c / e$attributes$step)
      var y = Math.max(Math.min(s.bottom - n, t$current$getClientRects0$height), 0)
      var E = y / b >= c / e$attributes$step ? Math.ceil(y / b) : Math.round(y / b)
      y = E * b
      var O = Math.min(e$attributes$step * E + e$attributes$minValue, e$attributes$maxValue)
      var w = Ae(t$current$getClientRects0$height, y = Math.min(y, t$current$getClientRects0$height))
      q$current.style.bottom = "calc(".concat(w, " - ").concat(q$current$offsetHeight / 2, "px)")
      x$current.style.height = w
      return O
    }
    return e$attributes$value
  }, [D, e$attributes$maxValue, e$attributes$minValue, e$attributes$step, e$attributes$value])
  var Ne = React.useCallback(function (e) {
    if (h.W()) {
      b = true
      if (!e$attributes$disabled) {
        if (e$onStartToSlid) {
          e$onStartToSlid(e$attributes$value)
        }
      }
    }
  }, [e$attributes$disabled, e$onStartToSlid, e$attributes$value])
  var Re = React.useCallback(function (e) {
    if (h.W() && !e$attributes$disabled) {
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
    var x$current = X.current
    var q$current = q.current
    var t$current = t.current
    var o = Math.max(e$attributes$maxValue - e$attributes$minValue, 1)
    if (x$current && q$current && t$current) {
      if (D === g.b.HORIZONTAL) {
        var t$current$offsetWidth = t$current.offsetWidth
        var q$current$offsetWidth = q$current.offsetWidth
        var s = (e$attributes$value - e$attributes$minValue) / o * t$current$offsetWidth
        if (e$attributes$value === e$attributes$maxValue && e$attributes$minValue === e$attributes$maxValue) {
          s = 1 / o * t$current$offsetWidth
        }
        var c = Ae(t$current$offsetWidth, s)
        q$current.style.left = "calc(".concat(c, " - ").concat(q$current$offsetWidth / 2, "px)")
        q$current.style.bottom = "auto"
        x$current.style.width = c
        x$current.style.height = "100%"
      } else {
        var t$current$offsetHeight = t$current.offsetHeight
        var q$current$offsetHeight = q$current.offsetHeight
        var d = (e$attributes$value - e$attributes$minValue) / o * t$current$offsetHeight
        if (e$attributes$value === e$attributes$maxValue && e$attributes$minValue === e$attributes$maxValue) {
          d = 1 / o * t$current$offsetHeight
        }
        var p = Ae(t$current$offsetHeight, d)
        q$current.style.bottom = "calc(".concat(p, " - ").concat(q$current$offsetHeight / 2, "px)")
        q$current.style.left = "auto"
        x$current.style.width = "100%"
        x$current.style.height = p
      }
    }
  }, [re, se, e$attributes$maxValue, e$attributes$minValue, e$attributes$value, D, $, e$size])
  React.useEffect(function () {
    if (!h.W()) {
      var e = e$attributes$value
      var t = e$attributes$value
      var n = h.p(function () {
        if (e$onSliderChange) {
          e$onSliderChange(e)
        }
      }, 60)
      var q$current = q.current
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
    className: d()(f.b, o.a({}, v.a.hide, !e$visible)),
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
      borderRadius: $ ? 0 : D === g.b.HORIZONTAL ? e$size.height / 2 : e$size.width / 2,
      backgroundColor: $ ? "transparent" : "#fff"
    }
  }, s.a.createElement("div", {
    className: d()(v.a.step, D === g.b.VERTICAL && v.a.vertical),
    style: {
      width: "100%",
      height: "100%",
      borderRadius: $ ? 0 : D === g.b.HORIZONTAL ? e$size.height / 2 : e$size.width / 2,
      backgroundColor: $ ? undefined : Ie.stepBackgroundColor,
      backgroundImage: $ ? "url(".concat(G === D ? e$backgroundImageUrl : we, ")") : undefined
    }
  }, s.a.createElement("div", {
    className: d()(v.a.trackBox, D === g.b.HORIZONTAL ? v.a.horizontalTrackBox : v.a.verticalTrackBox),
    ref: X,
    style: {
      backgroundColor: $ ? undefined : Ie.trackBackgroundColor
    }
  }, s.a.createElement("div", {
    className: v.a.track,
    style: {
      width: D === g.b.HORIZONTAL ? e$size.width : "100%",
      height: D === g.b.HORIZONTAL ? "100%" : e$size.height,
      backgroundImage: $ ? "url(".concat(W === D ? e$trackImageUrl : be, ")") : undefined
    }
  }))), s.a.createElement("div", {
    onTouchStart: Ne,
    onTouchMove: Re,
    onTouchEnd: ke,
    ref: q,
    className: d()(v.a.handle, $ ? v.a.imageHandle : v.a.templateHandle, H === D ? v.a.horizontalHandle : v.a.verticalHandle, H === g.b.HORIZONTAL && D === g.b.VERTICAL ? v.a.verticalRotate : v.a.horizontalRotate, e$isEditState && !S && v.a.handleNotSelected),
    style: {
      width: re,
      height: se,
      borderWidth: de,
      borderRadius: me,
      borderColor: Ie.handleBorderColor,
      color: h.hb(Ie.handleBorderColor, .3),
      backgroundImage: $ ? "url(".concat(e$handleImageUrl, ")") : undefined
    }
  }, !$ && e$attributes$mode === g.c.PRIMARY && s.a.createElement("div", {
    className: v.a.handleInner,
    style: {
      color: Ie.handleBorderColor
    }
  })))))
}
export { _a as a }
export default _a
