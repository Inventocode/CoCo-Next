/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：739
 */

"use strict"

import r = require("../29");
import i = require("../33/index");
import o = require("../19");
import React = require("react");
import s = require("./1503/index");
import c = require("../8");
var u = function __importDefault(module) {
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
import l = require("./1010");
var f = {
  adjustX: 1,
  adjustY: 1
}
var d = {
  adjustX: 0,
  adjustY: 0
}
var h = [0, 0]
function p(e) {
  return "boolean" === typeof e ? e ? f : d : o.a(o.a({}, d), e)
}
import _ = require("../314");
import A = require("../789");
import g = require("../610");
g.a("success", "processing", "error", "default", "warning")
var v = g.a("pink", "red", "yellow", "orange", "cyan", "green", "blue", "purple", "geekblue", "magenta", "volcano", "gold", "lime")
import m = require("../431");
var y = function (e, t) {
  var n = {}
  for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
    n[r] = e[r]
  }
  if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
    var i = 0
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) {
      if (t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i])) {
        n[r[i]] = e[r[i]]
      }
    }
  }
  return n
}
var b = new RegExp("^(".concat(v.join("|"), ")(-inverse)?$"))
function w(e, t) {
  var e$type = e.type
  if ((true === e$type.__ANT_BUTTON || true === e$type.__ANT_SWITCH || true === e$type.__ANT_CHECKBOX || "button" === e.type) && e.props.disabled) {
    var r = function (e, t) {
      var n = {}
      var r = o.a({}, e)
      t.forEach(function (t) {
        if (e && t in e) {
          n[t] = e[t]
          delete r[t]
        }
      })
      return {
        picked: n,
        omitted: r
      }
    }(e.props.style, ["position", "left", "right", "top", "bottom", "float", "display", "zIndex"])
    var r$picked = r.picked
    var r$omitted = r.omitted
    var c = o.a(o.a({
      display: "inline-block"
    }, r$picked), {
      cursor: "not-allowed",
      width: e.props.block ? "100%" : null
    })
    var l = o.a(o.a({}, r$omitted), {
      pointerEvents: "none"
    })
    var f = _.a(e, {
      style: l,
      className: null
    })
    return React.createElement("span", {
      style: c,
      className: u()(e.props.className, "".concat(t, "-disabled-compatible-wrapper"))
    }, f)
  }
  return e
}
var E = React.forwardRef(function (e, t) {
  var n
  var c = React.useContext(A.b)
  var c$getPopupContainer = c.getPopupContainer
  var c$getPrefixCls = c.getPrefixCls
  var c$direction = c.direction
  var v = function (e, t) {
    var n = t || {}
    var n$defaultValue = n.defaultValue
    var n$value = n.value
    var n$onChange = n.onChange
    var n$postState = n.postState
    var u = React.useState(function () {
      return undefined !== n$value ? n$value : undefined !== n$defaultValue ? "function" === typeof n$defaultValue ? n$defaultValue() : n$defaultValue : "function" === typeof e ? e() : e
    })
    var l = i.a(u, 2)
    var f = l[0]
    var d = l[1]
    var h = undefined !== n$value ? n$value : f
    if (n$postState) {
      h = n$postState(h)
    }
    var p = React.useRef(true)
    React.useEffect(function () {
      if (p.current) {
        p.current = false
      } else {
        if (undefined === n$value) {
          d(n$value)
        }
      }
    }, [n$value])
    return [h, function (e) {
      d(e)
      if (h !== e && n$onChange) {
        n$onChange(e, h)
      }
    }]
  }(false, {
    value: e.visible,
    defaultValue: e.defaultVisible
  })
  var E = i.a(v, 2)
  var x = E[0]
  var C = E[1]
  var O = function () {
    var e$title = e.title
    var e$overlay = e.overlay
    return !e$title && !e$overlay && 0 !== e$title
  }
  var k = function () {
    var e$builtinPlacements = e.builtinPlacements
    var e$arrowPointAtCenter = e.arrowPointAtCenter
    var _e$autoAdjustOverflow = e.autoAdjustOverflow
    return e$builtinPlacements || function (e) {
      var e$arrowWidth = e.arrowWidth
      var n = undefined === e$arrowWidth ? 4 : e$arrowWidth
      var e$horizontalArrowShift = e.horizontalArrowShift
      var i = undefined === e$horizontalArrowShift ? 16 : e$horizontalArrowShift
      var e$verticalArrowShift = e.verticalArrowShift
      var s = undefined === e$verticalArrowShift ? 8 : e$verticalArrowShift
      var e$autoAdjustOverflow = e.autoAdjustOverflow
      var u = {
        left: {
          points: ["cr", "cl"],
          offset: [-4, 0]
        },
        right: {
          points: ["cl", "cr"],
          offset: [4, 0]
        },
        top: {
          points: ["bc", "tc"],
          offset: [0, -4]
        },
        bottom: {
          points: ["tc", "bc"],
          offset: [0, 4]
        },
        topLeft: {
          points: ["bl", "tc"],
          offset: [-(i + n), -4]
        },
        leftTop: {
          points: ["tr", "cl"],
          offset: [-4, -(s + n)]
        },
        topRight: {
          points: ["br", "tc"],
          offset: [i + n, -4]
        },
        rightTop: {
          points: ["tl", "cr"],
          offset: [4, -(s + n)]
        },
        bottomRight: {
          points: ["tr", "bc"],
          offset: [i + n, 4]
        },
        rightBottom: {
          points: ["bl", "cr"],
          offset: [4, s + n]
        },
        bottomLeft: {
          points: ["tl", "bc"],
          offset: [-(i + n), 4]
        },
        leftBottom: {
          points: ["br", "cl"],
          offset: [-4, s + n]
        }
      }
      Object.keys(u).forEach(function (t) {
        u[t] = e.arrowPointAtCenter ? o.a(o.a({}, u[t]), {
          overflow: p(e$autoAdjustOverflow),
          targetOffset: h
        }) : o.a(o.a({}, l.a[t]), {
          overflow: p(e$autoAdjustOverflow)
        })
        u[t].ignoreShake = true
      })
      return u
    }({
      arrowPointAtCenter: e$arrowPointAtCenter,
      autoAdjustOverflow: _e$autoAdjustOverflow
    })
  }
  var e$getPopupContainer = e.getPopupContainer
  var T = y(e, ["getPopupContainer"])
  var e$prefixCls = e.prefixCls
  var e$openClassName = e.openClassName
  var e$getTooltipContainer = e.getTooltipContainer
  var e$overlayClassName = e.overlayClassName
  var e$color = e.color
  var e$overlayInnerStyle = e.overlayInnerStyle
  var e$children = e.children
  var M = c$getPrefixCls("tooltip", e$prefixCls)
  var j = c$getPrefixCls()
  var L = x
  if (!("visible" in e) && O()) {
    L = false
  }
  var U
  var H = w(_.b(e$children) ? e$children : React.createElement("span", null, e$children), M)
  var h$props = H.props
  var G = u()(h$props.className, r.a({}, e$openClassName || "".concat(M, "-open"), true))
  var z = u()(e$overlayClassName, (n = {}, r.a(n, "".concat(M, "-rtl"), "rtl" === c$direction), r.a(n, "".concat(M, "-").concat(e$color), e$color && b.test(e$color)), n))
  var Q = e$overlayInnerStyle
  if (e$color && !b.test(e$color)) {
    Q = o.a(o.a({}, e$overlayInnerStyle), {
      background: e$color
    })
    U = {
      background: e$color
    }
  }
  return React.createElement(s.a, o.a({}, T, {
    prefixCls: M,
    overlayClassName: z,
    getTooltipContainer: e$getPopupContainer || e$getTooltipContainer || c$getPopupContainer,
    ref: t,
    builtinPlacements: k(),
    overlay: function () {
      var e$title = e.title
      var e$overlay = e.overlay
      return 0 === e$title ? e$title : e$overlay || e$title || ""
    }(),
    visible: L,
    onVisibleChange: function (t) {
      var /* [auto-meaningful-name] */e$onVisibleChange
      C(!O() && t)
      if (!(O() || null === (e$onVisibleChange = e.onVisibleChange) || undefined === e$onVisibleChange)) {
        e$onVisibleChange.call(e, t)
      }
    },
    onPopupAlign: function (e, t) {
      var n = k()
      var r = Object.keys(n).filter(function (e) {
        return n[e].points[0] === t.points[0] && n[e].points[1] === t.points[1]
      })[0]
      if (r) {
        var i = e.getBoundingClientRect()
        var o = {
          top: "50%",
          left: "50%"
        }
        if (r.indexOf("top") >= 0 || r.indexOf("Bottom") >= 0) {
          o.top = "".concat(i.height - t.offset[1], "px")
        } else {
          if (r.indexOf("Top") >= 0 || r.indexOf("bottom") >= 0) {
            o.top = "".concat(-t.offset[1], "px")
          }
        }
        if (r.indexOf("left") >= 0 || r.indexOf("Right") >= 0) {
          o.left = "".concat(i.width - t.offset[0], "px")
        } else {
          if (r.indexOf("right") >= 0 || r.indexOf("Left") >= 0) {
            o.left = "".concat(-t.offset[0], "px")
          }
        }
        e.style.transformOrigin = "".concat(o.left, " ").concat(o.top)
      }
    },
    overlayInnerStyle: Q,
    arrowContent: React.createElement("span", {
      className: "".concat(M, "-arrow-content"),
      style: U
    }),
    motion: {
      motionName: m.b(j, "zoom-big-fast", e.transitionName),
      motionDeadline: 1e3
    }
  }), L ? _.a(H, {
    className: G
  }) : H)
})
E.displayName = "Tooltip"
E.defaultProps = {
  placement: "top",
  mouseEnterDelay: .1,
  mouseLeaveDelay: .1,
  arrowPointAtCenter: false,
  autoAdjustOverflow: true
}
export { E as a }
export default E
