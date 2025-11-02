/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1503
 */

"use strict"

import r = require("../../19");
import i = require("../../108");
import o = require("../../20");
import a = require("../../54");
import React = require("react");
import c = require("../../95");
import u = require("../../96");
import l = require("../../103");
import f = require("../../120");
import d = require("../../140");
import h = require("../../75/index");
var p = function __importDefault(module) {
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
}(h)
import _ = require("../../1026/413");
function A(e, t) {
  return !!e && e.contains(t)
}
import g = require("./1009");
import v = require("../../1026/690");
import m = require("./916");
import y = require("../../2627/462");
var b = React.forwardRef(function (e, t) {
  var e$didUpdate = e.didUpdate
  var e$getContainer = e.getContainer
  var e$children = e.children
  var o = React.useRef()
  React.useImperativeHandle(t, function () {
    return {}
  })
  var a = React.useRef(false)
  if (!a.current && y.a()) {
    o.current = e$getContainer()
    a.current = true
  }
  React.useEffect(function () {
    if (!(null === e$didUpdate || undefined === e$didUpdate)) {
      e$didUpdate(e)
    }
  })
  React.useEffect(function () {
    return function () {
      var /* [auto-meaningful-name] */o$current
      var /* [auto-meaningful-name] */o$current$parentNode
      if (!(null === (o$current = o.current) || undefined === o$current || null === (o$current$parentNode = o$current.parentNode) || undefined === o$current$parentNode)) {
        o$current$parentNode.removeChild(o.current)
      }
    }
  }, [])
  return o.current ? p.a.createPortal(e$children, o.current) : null
})
import w = require("../../8");
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
}(w)
function x(e, t, n) {
  return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1]
}
import C = require("../../33/index");
import O = require("../../2627/790/684");
function k(e) {
  var e$prefixCls = e.prefixCls
  var e$motion = e.motion
  var e$animation = e.animation
  var e$transitionName = e.transitionName
  return e$motion || (e$animation ? {
    motionName: "".concat(e$prefixCls, "-").concat(e$animation)
  } : e$transitionName ? {
    motionName: e$transitionName
  } : null)
}
function S(e) {
  var e$prefixCls = e.prefixCls
  var e$visible = e.visible
  var e$zIndex = e.zIndex
  var e$mask = e.mask
  var e$maskMotion = e.maskMotion
  var e$maskAnimation = e.maskAnimation
  var e$maskTransitionName = e.maskTransitionName
  if (!e$mask) {
    return null
  }
  var f = {}
  if (e$maskMotion || e$maskTransitionName || e$maskAnimation) {
    f = o.a({
      motionAppear: true
    }, k({
      motion: e$maskMotion,
      prefixCls: e$prefixCls,
      transitionName: e$maskTransitionName,
      animation: e$maskAnimation
    }))
  }
  return React.createElement(O.a, r.a({}, f, {
    visible: e$visible,
    removeOnLeave: true
  }), function (e) {
    var e$className = e.className
    return React.createElement("div", {
      style: {
        zIndex: e$zIndex
      },
      className: E()("".concat(e$prefixCls, "-mask"), e$className)
    })
  })
}
import T = require("../../1500/555/index");
import B = require("../../110");
var D = function __importDefault(module) {
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
}(B)
import I = require("../../171");
var F = ["measure", "align", null, "motion"]
var R = React.forwardRef(function (e, t) {
  var e$visible = e.visible
  var e$prefixCls = e.prefixCls
  var _e$className = e.className
  var _e$style = e.style
  var e$children = e.children
  var e$zIndex = e.zIndex
  var e$stretch = e.stretch
  var e$destroyPopupOnHide = e.destroyPopupOnHide
  var e$forceRender = e.forceRender
  var e$align = e.align
  var e$point = e.point
  var e$getRootDomNode = e.getRootDomNode
  var e$getClassNameFromAlign = e.getClassNameFromAlign
  var e$onAlign = e.onAlign
  var e$onMouseEnter = e.onMouseEnter
  var e$onMouseLeave = e.onMouseLeave
  var e$onMouseDown = e.onMouseDown
  var e$onTouchStart = e.onTouchStart
  var S = React.useRef()
  var B = React.useRef()
  var R = React.useState()
  var P = C.a(R, 2)
  var N = P[0]
  var M = P[1]
  var j = function (e) {
    var t = React.useState({
      width: 0,
      height: 0
    })
    var n = C.a(t, 2)
    var r = n[0]
    var i = n[1]
    return [React.useMemo(function () {
      var t = {}
      if (e) {
        var r$width = r.width
        var r$height = r.height
        if (-1 !== e.indexOf("height") && r$height) {
          t.height = r$height
        } else {
          if (-1 !== e.indexOf("minHeight") && r$height) {
            t.minHeight = r$height
          }
        }
        if (-1 !== e.indexOf("width") && r$width) {
          t.width = r$width
        } else {
          if (-1 !== e.indexOf("minWidth") && r$width) {
            t.minWidth = r$width
          }
        }
      }
      return t
    }, [e, r]), function (e) {
      i({
        width: e.offsetWidth,
        height: e.offsetHeight
      })
    }]
  }(e$stretch)
  var L = C.a(j, 2)
  var U = L[0]
  var H = L[1]
  var V = function (e, t) {
    var n = React.useState(null)
    var r = C.a(n, 2)
    var i = r[0]
    var o = r[1]
    var a = React.useRef()
    var c = React.useRef(false)
    function u(e) {
      if (!c.current) {
        o(e)
      }
    }
    function l() {
      _.a.cancel(a.current)
    }
    React.useEffect(function () {
      u("measure")
    }, [e])
    React.useEffect(function () {
      switch (i) {
        case "measure":
          t()
      }
      if (i) {
        a.current = _.a(I.a(D.a.mark(function e() {
          var t
          var n
          return D.a.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  t = F.indexOf(i)
                  if ((n = F[t + 1]) && -1 !== t) {
                    u(n)
                  }
                case 3:
                case "end":
                  return e.stop()
              }
            }
          }, e)
        })))
      }
    }, [i])
    React.useEffect(function () {
      return function () {
        c.current = true
        l()
      }
    }, [])
    return [i, function (e) {
      l()
      a.current = _.a(function () {
        u(function (e) {
          switch (i) {
            case "align":
              return "motion"
            case "motion":
              return "stable"
          }
          return e
        })
        if (!(null === e || undefined === e)) {
          e()
        }
      })
    }]
  }(e$visible, function () {
    if (e$stretch) {
      H(e$getRootDomNode())
    }
  })
  var G = C.a(V, 2)
  var z = G[0]
  var Q = G[1]
  var W = React.useRef()
  function K() {
    var /* [auto-meaningful-name] */s$current
    if (!(null === (s$current = S.current) || undefined === s$current)) {
      s$current.forceAlign()
    }
  }
  function X(e, t) {
    var n = e$getClassNameFromAlign(t)
    if (N !== n) {
      M(n)
    }
    if ("align" === z) {
      if (N !== n) {
        Promise.resolve().then(function () {
          K()
        })
      } else {
        Q(function () {
          var /* [auto-meaningful-name] */w$current
          if (!(null === (w$current = W.current) || undefined === w$current)) {
            w$current.call(W)
          }
        })
      }
      if (!(null === e$onAlign || undefined === e$onAlign)) {
        e$onAlign(e, t)
      }
    }
  }
  var Y = o.a({}, k(e))
  function q() {
    return new Promise(function (e) {
      W.current = e
    })
  }
  ["onAppearEnd", "onEnterEnd", "onLeaveEnd"].forEach(function (e) {
    var t = Y[e]
    Y[e] = function (e, n) {
      Q()
      return null === t || undefined === t ? undefined : t(e, n)
    }
  })
  React.useEffect(function () {
    if (!(Y.motionName || "motion" !== z)) {
      Q()
    }
  }, [Y.motionName, z])
  React.useImperativeHandle(t, function () {
    return {
      forceAlign: K,
      getElement: function () {
        return B.current
      }
    }
  })
  var $ = o.a(o.a({}, U), {}, {
    zIndex: e$zIndex,
    opacity: "motion" !== z && "stable" !== z && e$visible ? 0 : undefined,
    pointerEvents: "stable" === z ? undefined : "none"
  }, _e$style)
  var J = true
  if (!(!(null === e$align || undefined === e$align ? undefined : e$align.points) || "align" !== z && "stable" !== z)) {
    J = false
  }
  var Z = e$children
  if (React.Children.count(e$children) > 1) {
    Z = React.createElement("div", {
      className: "".concat(e$prefixCls, "-content")
    }, e$children)
  }
  return React.createElement(O.a, r.a({
    visible: e$visible,
    ref: B,
    leavedClassName: "".concat(e$prefixCls, "-hidden")
  }, Y, {
    onAppearPrepare: q,
    onEnterPrepare: q,
    removeOnLeave: e$destroyPopupOnHide,
    forceRender: e$forceRender
  }), function (e, t) {
    var e$className = e.className
    var e$style = e.style
    var c = E()(e$prefixCls, _e$className, N, e$className)
    return React.createElement(T.a, {
      target: e$point || e$getRootDomNode,
      key: "popup",
      ref: S,
      monitorWindowResize: true,
      disabled: J,
      align: e$align,
      onAlign: X
    }, React.createElement("div", {
      ref: t,
      className: c,
      onMouseEnter: e$onMouseEnter,
      onMouseLeave: e$onMouseLeave,
      onMouseDownCapture: e$onMouseDown,
      onTouchStartCapture: e$onTouchStart,
      style: o.a(o.a({}, e$style), $)
    }, Z))
  })
})
R.displayName = "PopupInner"
var P = R
var N = React.forwardRef(function (e, t) {
  var e$prefixCls = e.prefixCls
  var e$visible = e.visible
  var e$zIndex = e.zIndex
  var e$children = e.children
  var e$mobile = e.mobile
  var e$mobileUndefinedE$mobileE$mobile$popupClassName = (e$mobile = undefined === e$mobile ? {} : e$mobile).popupClassName
  var e$mobile$popupStyle = e$mobile.popupStyle
  var e$mobile$popupMotion = e$mobile.popupMotion
  var h = undefined === e$mobile$popupMotion ? {} : e$mobile$popupMotion
  var e$mobile$popupRender = e$mobile.popupRender
  var _ = React.useRef()
  React.useImperativeHandle(t, function () {
    return {
      forceAlign: function () {},
      getElement: function () {
        return _.current
      }
    }
  })
  var A = o.a({
    zIndex: e$zIndex
  }, e$mobile$popupStyle)
  var g = e$children
  if (React.Children.count(e$children) > 1) {
    g = React.createElement("div", {
      className: "".concat(e$prefixCls, "-content")
    }, e$children)
  }
  if (e$mobile$popupRender) {
    g = e$mobile$popupRender(g)
  }
  return React.createElement(O.a, r.a({
    visible: e$visible,
    ref: _,
    removeOnLeave: true
  }, h), function (e, t) {
    var e$className = e.className
    var e$style = e.style
    var a = E()(e$prefixCls, e$mobileUndefinedE$mobileE$mobile$popupClassName, e$className)
    return React.createElement("div", {
      ref: t,
      className: a,
      style: o.a(o.a({}, e$style), A)
    }, g)
  })
})
N.displayName = "MobilePopupInner"
var M = N
var j = ["visible", "mobile"]
var L = React.forwardRef(function (e, t) {
  var e$visible = e.visible
  var e$mobile = e.mobile
  var c = a.a(e, j)
  var u = React.useState(e$visible)
  var l = C.a(u, 2)
  var f = l[0]
  var d = l[1]
  var h = React.useState(false)
  var p = C.a(h, 2)
  var _ = p[0]
  var A = p[1]
  var g = o.a(o.a({}, c), {}, {
    visible: f
  })
  React.useEffect(function () {
    d(e$visible)
    if (e$visible && e$mobile) {
      A(function () {
        if ("undefined" === typeof navigator || "undefined" === typeof window) {
          return false
        }
        var e = navigator.userAgent || navigator.vendor || window.opera
        return !(!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(null === e || undefined === e ? undefined : e.substr(0, 4)))
      }())
    }
  }, [e$visible, e$mobile])
  var v = _ ? React.createElement(M, r.a({}, g, {
    mobile: e$mobile,
    ref: t
  })) : React.createElement(P, r.a({}, g, {
    ref: t
  }))
  return React.createElement("div", null, React.createElement(S, g), v)
})
L.displayName = "Popup"
var U = L
var H = React.createContext(null)
function V() {}
function G() {
  return ""
}
function z(e) {
  return e ? e.ownerDocument : window.document
}
var Q = ["onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur", "onContextMenu"]
var W = function (e) {
  var t = function (t) {
    f.a(i, t)
    var n = d.a(i)
    function i(e) {
      var t
      var o
      c.a(this, i);
      (t = n.call(this, e)).popupRef = React.createRef()
      t.triggerRef = React.createRef()
      t.attachId = undefined
      t.clickOutsideHandler = undefined
      t.touchOutsideHandler = undefined
      t.contextMenuOutsideHandler1 = undefined
      t.contextMenuOutsideHandler2 = undefined
      t.mouseDownTimeout = undefined
      t.focusTime = undefined
      t.preClickTime = undefined
      t.preTouchTime = undefined
      t.delayTimer = undefined
      t.hasPopupMouseDown = undefined
      t.onMouseEnter = function (e) {
        var t$props$mouseEnterDelay = t.props.mouseEnterDelay
        t.fireEvents("onMouseEnter", e)
        t.delaySetPopupVisible(true, t$props$mouseEnterDelay, t$props$mouseEnterDelay ? null : e)
      }
      t.onMouseMove = function (e) {
        t.fireEvents("onMouseMove", e)
        t.setPoint(e)
      }
      t.onMouseLeave = function (e) {
        t.fireEvents("onMouseLeave", e)
        t.delaySetPopupVisible(false, t.props.mouseLeaveDelay)
      }
      t.onPopupMouseEnter = function () {
        t.clearDelayTimer()
      }
      t.onPopupMouseLeave = function (e) {
        var /* [auto-meaningful-name] */t$popupRef$current
        if (!(e.relatedTarget && !e.relatedTarget.setTimeout && A(null === (t$popupRef$current = t.popupRef.current) || undefined === t$popupRef$current ? undefined : t$popupRef$current.getElement(), e.relatedTarget))) {
          t.delaySetPopupVisible(false, t.props.mouseLeaveDelay)
        }
      }
      t.onFocus = function (e) {
        t.fireEvents("onFocus", e)
        t.clearDelayTimer()
        if (t.isFocusToShow()) {
          t.focusTime = Date.now()
          t.delaySetPopupVisible(true, t.props.focusDelay)
        }
      }
      t.onMouseDown = function (e) {
        t.fireEvents("onMouseDown", e)
        t.preClickTime = Date.now()
      }
      t.onTouchStart = function (e) {
        t.fireEvents("onTouchStart", e)
        t.preTouchTime = Date.now()
      }
      t.onBlur = function (e) {
        t.fireEvents("onBlur", e)
        t.clearDelayTimer()
        if (t.isBlurToHide()) {
          t.delaySetPopupVisible(false, t.props.blurDelay)
        }
      }
      t.onContextMenu = function (e) {
        e.preventDefault()
        t.fireEvents("onContextMenu", e)
        t.setPopupVisible(true, e)
      }
      t.onContextMenuClose = function () {
        if (t.isContextMenuToShow()) {
          t.close()
        }
      }
      t.onClick = function (e) {
        t.fireEvents("onClick", e)
        if (t.focusTime) {
          var n
          if (t.preClickTime && t.preTouchTime) {
            n = Math.min(t.preClickTime, t.preTouchTime)
          } else {
            if (t.preClickTime) {
              n = t.preClickTime
            } else {
              if (t.preTouchTime) {
                n = t.preTouchTime
              }
            }
          }
          if (Math.abs(n - t.focusTime) < 20) {
            return
          }
          t.focusTime = 0
        }
        t.preClickTime = 0
        t.preTouchTime = 0
        if (t.isClickToShow() && (t.isClickToHide() || t.isBlurToHide()) && e && e.preventDefault) {
          e.preventDefault()
        }
        var r = !t.state.popupVisible
        if (t.isClickToHide() && !r || r && t.isClickToShow()) {
          t.setPopupVisible(!t.state.popupVisible, e)
        }
      }
      t.onPopupMouseDown = function () {
        var /* [auto-meaningful-name] */t$context
        t.hasPopupMouseDown = true
        clearTimeout(t.mouseDownTimeout)
        t.mouseDownTimeout = window.setTimeout(function () {
          t.hasPopupMouseDown = false
        }, 0)
        if (t.context) {
          (t$context = t.context).onPopupMouseDown.apply(t$context, arguments)
        }
      }
      t.onDocumentClick = function (e) {
        if (!t.props.mask || t.props.maskClosable) {
          var e$target = e.target
          var r = t.getRootDomNode()
          var i = t.getPopupDomNode()
          if (!(A(r, e$target) && !t.isContextMenuOnly() || A(i, e$target) || t.hasPopupMouseDown)) {
            t.close()
          }
        }
      }
      t.getRootDomNode = function () {
        var t$props$getTriggerDOMNode = t.props.getTriggerDOMNode
        if (t$props$getTriggerDOMNode) {
          return t$props$getTriggerDOMNode(t.triggerRef.current)
        }
        try {
          var n = g.a(t.triggerRef.current)
          if (n) {
            return n
          }
        } catch (r) {}
        return p.a.findDOMNode(l.a(t))
      }
      t.getPopupClassNameFromAlign = function (e) {
        var n = []
        var t$props = t.props
        var t$props$popupPlacement = t$props.popupPlacement
        var t$props$builtinPlacements = t$props.builtinPlacements
        var t$props$prefixCls = t$props.prefixCls
        var t$props$alignPoint = t$props.alignPoint
        var t$props$getPopupClassNameFromAlign = t$props.getPopupClassNameFromAlign
        if (t$props$popupPlacement && t$props$builtinPlacements) {
          n.push(function (e, t, n, r) {
            for (var n$points = n.points, o = Object.keys(e), a = 0; a < o.length; a += 1) {
              var s = o[a]
              if (x(e[s].points, n$points, r)) {
                return "".concat(t, "-placement-").concat(s)
              }
            }
            return ""
          }(t$props$builtinPlacements, t$props$prefixCls, e, t$props$alignPoint))
        }
        if (t$props$getPopupClassNameFromAlign) {
          n.push(t$props$getPopupClassNameFromAlign(e))
        }
        return n.join(" ")
      }
      t.getComponent = function () {
        var t$props = t.props
        var t$props$prefixCls = t$props.prefixCls
        var t$props$destroyPopupOnHide = t$props.destroyPopupOnHide
        var t$props$popupClassName = t$props.popupClassName
        var t$props$onPopupAlign = t$props.onPopupAlign
        var t$props$popupMotion = t$props.popupMotion
        var t$props$popupAnimation = t$props.popupAnimation
        var t$props$popupTransitionName = t$props.popupTransitionName
        var t$props$popupStyle = t$props.popupStyle
        var t$props$mask = t$props.mask
        var t$props$maskAnimation = t$props.maskAnimation
        var t$props$maskTransitionName = t$props.maskTransitionName
        var t$props$maskMotion = t$props.maskMotion
        var t$props$zIndex = t$props.zIndex
        var t$props$popup = t$props.popup
        var t$props$stretch = t$props.stretch
        var t$props$alignPoint = t$props.alignPoint
        var t$props$mobile = t$props.mobile
        var t$props$forceRender = t$props.forceRender
        var t$state = t.state
        var t$state$popupVisible = t$state.popupVisible
        var t$state$point = t$state.point
        var C = t.getPopupAlign()
        var O = {}
        if (t.isMouseEnterToShow()) {
          O.onMouseEnter = t.onPopupMouseEnter
        }
        if (t.isMouseLeaveToHide()) {
          O.onMouseLeave = t.onPopupMouseLeave
        }
        O.onMouseDown = t.onPopupMouseDown
        O.onTouchStart = t.onPopupMouseDown
        return React.createElement(U, r.a({
          prefixCls: t$props$prefixCls,
          destroyPopupOnHide: t$props$destroyPopupOnHide,
          visible: t$state$popupVisible,
          point: t$props$alignPoint && t$state$point,
          className: t$props$popupClassName,
          align: C,
          onAlign: t$props$onPopupAlign,
          animation: t$props$popupAnimation,
          getClassNameFromAlign: t.getPopupClassNameFromAlign
        }, O, {
          stretch: t$props$stretch,
          getRootDomNode: t.getRootDomNode,
          style: t$props$popupStyle,
          mask: t$props$mask,
          zIndex: t$props$zIndex,
          transitionName: t$props$popupTransitionName,
          maskAnimation: t$props$maskAnimation,
          maskTransitionName: t$props$maskTransitionName,
          maskMotion: t$props$maskMotion,
          ref: t.popupRef,
          motion: t$props$popupMotion,
          mobile: t$props$mobile,
          forceRender: t$props$forceRender
        }), "function" === typeof t$props$popup ? t$props$popup() : t$props$popup)
      }
      t.attachParent = function (e) {
        _.a.cancel(t.attachId)
        var n
        var t$props = t.props
        var t$props$getPopupContainer = t$props.getPopupContainer
        var t$props$getDocument = t$props.getDocument
        var a = t.getRootDomNode()
        if (t$props$getPopupContainer) {
          if (a || 0 === t$props$getPopupContainer.length) {
            n = t$props$getPopupContainer(a)
          }
        } else {
          n = t$props$getDocument(t.getRootDomNode()).body
        }
        if (n) {
          n.appendChild(e)
        } else {
          t.attachId = _.a(function () {
            t.attachParent(e)
          })
        }
      }
      t.getContainer = function () {
        var e = (0, t.props.getDocument)(t.getRootDomNode()).createElement("div")
        e.style.position = "absolute"
        e.style.top = "0"
        e.style.left = "0"
        e.style.width = "100%"
        t.attachParent(e)
        return e
      }
      t.setPoint = function (e) {
        if (t.props.alignPoint && e) {
          t.setState({
            point: {
              pageX: e.pageX,
              pageY: e.pageY
            }
          })
        }
      }
      t.handlePortalUpdate = function () {
        if (t.state.prevPopupVisible !== t.state.popupVisible) {
          t.props.afterPopupVisibleChange(t.state.popupVisible)
        }
      }
      t.triggerContextValue = {
        onPopupMouseDown: t.onPopupMouseDown
      }
      o = "popupVisible" in e ? !!e.popupVisible : !!e.defaultPopupVisible
      t.state = {
        prevPopupVisible: o,
        popupVisible: o
      }
      Q.forEach(function (e) {
        t["fire".concat(e)] = function (n) {
          t.fireEvents(e, n)
        }
      })
      return t
    }
    u.a(i, [{
      key: "componentDidMount",
      value: function () {
        this.componentDidUpdate()
      }
    }, {
      key: "componentDidUpdate",
      value: function () {
        var e
        var this$props = this.props
        if (this.state.popupVisible) {
          if (!(this.clickOutsideHandler || !this.isClickToHide() && !this.isContextMenuToShow())) {
            e = this$props.getDocument(this.getRootDomNode())
            this.clickOutsideHandler = m.a(e, "mousedown", this.onDocumentClick)
          }
          if (!this.touchOutsideHandler) {
            e = e || this$props.getDocument(this.getRootDomNode())
            this.touchOutsideHandler = m.a(e, "touchstart", this.onDocumentClick)
          }
          if (!this.contextMenuOutsideHandler1 && this.isContextMenuToShow()) {
            e = e || this$props.getDocument(this.getRootDomNode())
            this.contextMenuOutsideHandler1 = m.a(e, "scroll", this.onContextMenuClose)
          }
          return void (!this.contextMenuOutsideHandler2 && this.isContextMenuToShow() && (this.contextMenuOutsideHandler2 = m.a(window, "blur", this.onContextMenuClose)))
        }
        this.clearOutsideHandler()
      }
    }, {
      key: "componentWillUnmount",
      value: function () {
        this.clearDelayTimer()
        this.clearOutsideHandler()
        clearTimeout(this.mouseDownTimeout)
        _.a.cancel(this.attachId)
      }
    }, {
      key: "getPopupDomNode",
      value: function () {
        var /* [auto-meaningful-name] */this$popupRef$current
        return (null === (this$popupRef$current = this.popupRef.current) || undefined === this$popupRef$current ? undefined : this$popupRef$current.getElement()) || null
      }
    }, {
      key: "getPopupAlign",
      value: function () {
        var this$props = this.props
        var this$props$popupPlacement = this$props.popupPlacement
        var this$props$popupAlign = this$props.popupAlign
        var this$props$builtinPlacements = this$props.builtinPlacements
        return this$props$popupPlacement && this$props$builtinPlacements ? function (e, t, n) {
          var r = e[t] || {}
          return o.a(o.a({}, r), n)
        }(this$props$builtinPlacements, this$props$popupPlacement, this$props$popupAlign) : this$props$popupAlign
      }
    }, {
      key: "setPopupVisible",
      value: function (e, t) {
        var this$props$alignPoint = this.props.alignPoint
        var this$state$popupVisible = this.state.popupVisible
        this.clearDelayTimer()
        if (this$state$popupVisible !== e) {
          if (!("popupVisible" in this.props)) {
            this.setState({
              popupVisible: e,
              prevPopupVisible: this$state$popupVisible
            })
          }
          this.props.onPopupVisibleChange(e)
        }
        if (this$props$alignPoint && t && e) {
          this.setPoint(t)
        }
      }
    }, {
      key: "delaySetPopupVisible",
      value: function (e, t, n) {
        var r = this
        var i = 1e3 * t
        this.clearDelayTimer()
        if (i) {
          var o = n ? {
            pageX: n.pageX,
            pageY: n.pageY
          } : null
          this.delayTimer = window.setTimeout(function () {
            r.setPopupVisible(e, o)
            r.clearDelayTimer()
          }, i)
        } else {
          this.setPopupVisible(e, n)
        }
      }
    }, {
      key: "clearDelayTimer",
      value: function () {
        if (this.delayTimer) {
          clearTimeout(this.delayTimer)
          this.delayTimer = null
        }
      }
    }, {
      key: "clearOutsideHandler",
      value: function () {
        if (this.clickOutsideHandler) {
          this.clickOutsideHandler.remove()
          this.clickOutsideHandler = null
        }
        if (this.contextMenuOutsideHandler1) {
          this.contextMenuOutsideHandler1.remove()
          this.contextMenuOutsideHandler1 = null
        }
        if (this.contextMenuOutsideHandler2) {
          this.contextMenuOutsideHandler2.remove()
          this.contextMenuOutsideHandler2 = null
        }
        if (this.touchOutsideHandler) {
          this.touchOutsideHandler.remove()
          this.touchOutsideHandler = null
        }
      }
    }, {
      key: "createTwoChains",
      value: function (e) {
        var this$props$children$props = this.props.children.props
        var this$props = this.props
        return this$props$children$props[e] && this$props[e] ? this["fire".concat(e)] : this$props$children$props[e] || this$props[e]
      }
    }, {
      key: "isClickToShow",
      value: function () {
        var this$props = this.props
        var this$props$action = this$props.action
        var this$props$showAction = this$props.showAction
        return -1 !== this$props$action.indexOf("click") || -1 !== this$props$showAction.indexOf("click")
      }
    }, {
      key: "isContextMenuOnly",
      value: function () {
        var this$props$action = this.props.action
        return "contextMenu" === this$props$action || 1 === this$props$action.length && "contextMenu" === this$props$action[0]
      }
    }, {
      key: "isContextMenuToShow",
      value: function () {
        var this$props = this.props
        var this$props$action = this$props.action
        var this$props$showAction = this$props.showAction
        return -1 !== this$props$action.indexOf("contextMenu") || -1 !== this$props$showAction.indexOf("contextMenu")
      }
    }, {
      key: "isClickToHide",
      value: function () {
        var this$props = this.props
        var this$props$action = this$props.action
        var this$props$hideAction = this$props.hideAction
        return -1 !== this$props$action.indexOf("click") || -1 !== this$props$hideAction.indexOf("click")
      }
    }, {
      key: "isMouseEnterToShow",
      value: function () {
        var this$props = this.props
        var this$props$action = this$props.action
        var this$props$showAction = this$props.showAction
        return -1 !== this$props$action.indexOf("hover") || -1 !== this$props$showAction.indexOf("mouseEnter")
      }
    }, {
      key: "isMouseLeaveToHide",
      value: function () {
        var this$props = this.props
        var this$props$action = this$props.action
        var this$props$hideAction = this$props.hideAction
        return -1 !== this$props$action.indexOf("hover") || -1 !== this$props$hideAction.indexOf("mouseLeave")
      }
    }, {
      key: "isFocusToShow",
      value: function () {
        var this$props = this.props
        var this$props$action = this$props.action
        var this$props$showAction = this$props.showAction
        return -1 !== this$props$action.indexOf("focus") || -1 !== this$props$showAction.indexOf("focus")
      }
    }, {
      key: "isBlurToHide",
      value: function () {
        var this$props = this.props
        var this$props$action = this$props.action
        var this$props$hideAction = this$props.hideAction
        return -1 !== this$props$action.indexOf("focus") || -1 !== this$props$hideAction.indexOf("blur")
      }
    }, {
      key: "forcePopupAlign",
      value: function () {
        var /* [auto-meaningful-name] */this$popupRef$current
        if (this.state.popupVisible) {
          if (!(null === (this$popupRef$current = this.popupRef.current) || undefined === this$popupRef$current)) {
            this$popupRef$current.forceAlign()
          }
        }
      }
    }, {
      key: "fireEvents",
      value: function (e, t) {
        var n = this.props.children.props[e]
        if (n) {
          n(t)
        }
        var r = this.props[e]
        if (r) {
          r(t)
        }
      }
    }, {
      key: "close",
      value: function () {
        this.setPopupVisible(false)
      }
    }, {
      key: "render",
      value: function () {
        var this$state$popupVisible = this.state.popupVisible
        var this$props = this.props
        var this$props$children = this$props.children
        var this$props$forceRender = this$props.forceRender
        var this$props$alignPoint = this$props.alignPoint
        var this$props$className = this$props.className
        var this$props$autoDestroy = this$props.autoDestroy
        var l = React.Children.only(this$props$children)
        var f = {
          key: "trigger"
        }
        if (this.isContextMenuToShow()) {
          f.onContextMenu = this.onContextMenu
        } else {
          f.onContextMenu = this.createTwoChains("onContextMenu")
        }
        if (this.isClickToHide() || this.isClickToShow()) {
          f.onClick = this.onClick
          f.onMouseDown = this.onMouseDown
          f.onTouchStart = this.onTouchStart
        } else {
          f.onClick = this.createTwoChains("onClick")
          f.onMouseDown = this.createTwoChains("onMouseDown")
          f.onTouchStart = this.createTwoChains("onTouchStart")
        }
        if (this.isMouseEnterToShow()) {
          f.onMouseEnter = this.onMouseEnter
          if (this$props$alignPoint) {
            f.onMouseMove = this.onMouseMove
          }
        } else {
          f.onMouseEnter = this.createTwoChains("onMouseEnter")
        }
        if (this.isMouseLeaveToHide()) {
          f.onMouseLeave = this.onMouseLeave
        } else {
          f.onMouseLeave = this.createTwoChains("onMouseLeave")
        }
        if (this.isFocusToShow() || this.isBlurToHide()) {
          f.onFocus = this.onFocus
          f.onBlur = this.onBlur
        } else {
          f.onFocus = this.createTwoChains("onFocus")
          f.onBlur = this.createTwoChains("onBlur")
        }
        var d = E()(l && l.props && l.props.className, this$props$className)
        if (d) {
          f.className = d
        }
        var h = o.a({}, f)
        if (v.c(l)) {
          h.ref = v.a(this.triggerRef, l.ref)
        }
        var p
        var _ = React.cloneElement(l, h)
        if (this$state$popupVisible || this.popupRef.current || this$props$forceRender) {
          p = React.createElement(e, {
            key: "portal",
            getContainer: this.getContainer,
            didUpdate: this.handlePortalUpdate
          }, this.getComponent())
        }
        if (!this$state$popupVisible && this$props$autoDestroy) {
          p = null
        }
        return React.createElement(H.Provider, {
          value: this.triggerContextValue
        }, _, p)
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function (e, t) {
        var e$popupVisible = e.popupVisible
        var r = {}
        if (undefined !== e$popupVisible && t.popupVisible !== e$popupVisible) {
          r.popupVisible = e$popupVisible
          r.prevPopupVisible = t.popupVisible
        }
        return r
      }
    }])
    return i
  }(React.Component)
  t.contextType = H
  t.defaultProps = {
    prefixCls: "rc-trigger-popup",
    getPopupClassNameFromAlign: G,
    getDocument: z,
    onPopupVisibleChange: V,
    afterPopupVisibleChange: V,
    onPopupAlign: V,
    popupClassName: "",
    mouseEnterDelay: 0,
    mouseLeaveDelay: .1,
    focusDelay: 0,
    blurDelay: .15,
    popupStyle: {},
    destroyPopupOnHide: false,
    popupAlign: {},
    defaultPopupVisible: false,
    mask: false,
    maskClosable: true,
    action: [],
    showAction: [],
    hideAction: [],
    autoDestroy: false
  }
  return t
}(b)
import K = require("../1010");
var X = function (e) {
  var e$overlay = e.overlay
  var e$prefixCls = e.prefixCls
  var r = e.id
  var e$overlayInnerStyle = e.overlayInnerStyle
  return React.createElement("div", {
    className: "".concat(e$prefixCls, "-inner"),
    id: r,
    role: "tooltip",
    style: e$overlayInnerStyle
  }, "function" === typeof e$overlay ? e$overlay() : e$overlay)
}
var Y = function (e, t) {
  var e$overlayClassName = e.overlayClassName
  var e$trigger = e.trigger
  var u = undefined === e$trigger ? ["hover"] : e$trigger
  var e$mouseEnterDelay = e.mouseEnterDelay
  var f = undefined === e$mouseEnterDelay ? 0 : e$mouseEnterDelay
  var e$mouseLeaveDelay = e.mouseLeaveDelay
  var h = undefined === e$mouseLeaveDelay ? .1 : e$mouseLeaveDelay
  var e$overlayStyle = e.overlayStyle
  var e$prefixCls = e.prefixCls
  var A = undefined === e$prefixCls ? "rc-tooltip" : e$prefixCls
  var e$children = e.children
  var e$onVisibleChange = e.onVisibleChange
  var e$afterVisibleChange = e.afterVisibleChange
  var e$transitionName = e.transitionName
  var e$animation = e.animation
  var e$motion = e.motion
  var e$placement = e.placement
  var x = undefined === e$placement ? "right" : e$placement
  var e$align = e.align
  var O = undefined === e$align ? {} : e$align
  var e$destroyTooltipOnHide = e.destroyTooltipOnHide
  var S = undefined !== e$destroyTooltipOnHide && e$destroyTooltipOnHide
  var e$defaultVisible = e.defaultVisible
  var e$getTooltipContainer = e.getTooltipContainer
  var e$overlayInnerStyle = e.overlayInnerStyle
  var I = a.a(e, ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle"])
  var F = React.useRef(null)
  React.useImperativeHandle(t, function () {
    return F.current
  })
  var R = o.a({}, I)
  if ("visible" in e) {
    R.popupVisible = e.visible
  }
  var P = false
  var N = false
  if ("boolean" === typeof S) {
    P = S
  } else if (S && "object" === i.a(S)) {
    var s$keepParent = S.keepParent
    P = true === s$keepParent
    N = false === s$keepParent
  }
  return React.createElement(W, r.a({
    popupClassName: e$overlayClassName,
    prefixCls: A,
    popup: function () {
      var e$arrowContent = e.arrowContent
      var n = undefined === e$arrowContent ? null : e$arrowContent
      var e$overlay = e.overlay
      var i = e.id
      return [React.createElement("div", {
        className: "".concat(A, "-arrow"),
        key: "arrow"
      }, n), React.createElement(X, {
        key: "content",
        prefixCls: A,
        id: i,
        overlay: e$overlay,
        overlayInnerStyle: e$overlayInnerStyle
      })]
    },
    action: u,
    builtinPlacements: K.a,
    popupPlacement: x,
    ref: F,
    popupAlign: O,
    getPopupContainer: e$getTooltipContainer,
    onPopupVisibleChange: e$onVisibleChange,
    afterPopupVisibleChange: e$afterVisibleChange,
    popupTransitionName: e$transitionName,
    popupAnimation: e$animation,
    popupMotion: e$motion,
    defaultPopupVisible: e$defaultVisible,
    destroyPopupOnHide: P,
    autoDestroy: N,
    mouseLeaveDelay: h,
    popupStyle: e$overlayStyle,
    mouseEnterDelay: f
  }, R), e$children)
}
var q = React.forwardRef(Y)
export { q as a }
export default q
