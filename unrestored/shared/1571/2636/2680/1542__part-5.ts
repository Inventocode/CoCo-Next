/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1542__part-5
 */

"use strict"

import { N } from "./1542__part-2"
import { H, V, G } from "./1542__part-3"
import { ee, fe } from "./1542__part-4"
import /* [auto-meaningful-name] */Classnames from "classnames"
import * as /* [auto-meaningful-name] */$$_21 from "../21"
import * as /* [auto-meaningful-name] */$$_107 from "../107"
import * as /* [auto-meaningful-name] */$$_140 from "../140"
import * as /* [auto-meaningful-name] */$$_120 from "../120"
import * as /* [auto-meaningful-name] */$$_106 from "../106"
import * as /* [auto-meaningful-name] */$$_103 from "../103"
import { Fragment, createElement, Component, memo, forwardRef, useRef, useImperativeHandle, useState, useEffect } from "react"
import * as /* [auto-meaningful-name] */$$_40_index from "../40/index"
import * as /* [auto-meaningful-name] */$$_19 from "../19"
import * as /* [auto-meaningful-name] */$$_54 from "../54"
function he(e) {
  var t
  t = e && "object" === $$_107.a(e) && "key" in e ? e : {
    key: e
  }
  return $$_21.a($$_21.a({}, t), {}, {
    key: String(t.key)
  })
}
function pe() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : []
  return e.map(he)
}
function _e() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : []
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : []
  var n = []
  var r = 0
  var /* [auto-meaningful-name] */t$length = t.length
  var o = pe(e)
  var a = pe(t)
  o.forEach(function (e) {
    for (var t = false, o = r; o < t$length; o += 1) {
      var s = a[o]
      if (s.key === e.key) {
        if (r < o) {
          n = n.concat(a.slice(r, o).map(function (e) {
            return $$_21.a($$_21.a({}, e), {}, {
              status: "add"
            })
          }))
          r = o
        }
        n.push($$_21.a($$_21.a({}, s), {}, {
          status: "keep"
        }))
        r += 1
        t = true
        break
      }
    }
    if (!t) {
      n.push($$_21.a($$_21.a({}, e), {}, {
        status: "remove"
      }))
    }
  })
  if (r < t$length) {
    n = n.concat(a.slice(r).map(function (e) {
      return $$_21.a($$_21.a({}, e), {}, {
        status: "add"
      })
    }))
  }
  var s = {}
  n.forEach(function (e) {
    var /* [auto-meaningful-name] */e$key = e.key
    s[e$key] = (s[e$key] || 0) + 1
  })
  var c = Object.keys(s).filter(function (e) {
    return s[e] > 1
  })
  c.forEach(function (e) {
    (n = n.filter(function (t) {
      var /* [auto-meaningful-name] */t$key = t.key
      var /* [auto-meaningful-name] */t$status = t.status
      return t$key !== e || "remove" !== t$status
    })).forEach(function (t) {
      if (t.key === e) {
        t.status = "keep"
      }
    })
  })
  return n
}
var Ae = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"]
!function (e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : fe
  var n = function (e) {
    $$_120.a(i, e)
    var n = $$_140.a(i)
    function i() {
      var e
      $$_103.a(this, i);
      (e = n.apply(this, arguments)).state = {
        keyEntities: []
      }
      e.removeKey = function (t) {
        e.setState(function (e) {
          return {
            keyEntities: e.keyEntities.map(function (e) {
              return e.key !== t ? e : $$_21.a($$_21.a({}, e), {}, {
                status: "removed"
              })
            })
          }
        })
      }
      return e
    }
    $$_106.a(i, [
      {
        key: "render",
        value: function () {
          var e = this
          var /* [auto-meaningful-name] */this$state$keyEntities = this.state.keyEntities
          var /* [auto-meaningful-name] */this$props = this.props
          var /* [auto-meaningful-name] */this$props$component = this$props.component
          var /* [auto-meaningful-name] */this$props$children = this$props.children
          var /* [auto-meaningful-name] */this$props$onVisibleChanged = this$props.onVisibleChanged
          var u = $$_54.a(this$props, ["component", "children", "onVisibleChanged"])
          var l = this$props$component || Fragment
          var f = {}
          Ae.forEach(function (e) {
            f[e] = u[e]
            delete u[e]
          })
          delete u.keys
          return createElement(l, u, this$state$keyEntities.map(function (n) {
            var /* [auto-meaningful-name] */n$status = n.status
            var a = $$_54.a(n, ["status"])
            var u = "add" === n$status || "keep" === n$status
            return createElement(t, $$_19.a({}, f, {
              key: a.key,
              visible: u,
              eventProps: a,
              onVisibleChanged: function (t) {
                if (!(null === this$props$onVisibleChanged || undefined === this$props$onVisibleChanged)) {
                  this$props$onVisibleChanged(t, {
                    key: a.key
                  })
                }
                if (!t) {
                  e.removeKey(a.key)
                }
              }
            }), this$props$children)
          }))
        }
      }
    ], [
      {
        key: "getDerivedStateFromProps",
        value: function (e, t) {
          var /* [auto-meaningful-name] */e$keys = e.keys
          var /* [auto-meaningful-name] */t$keyEntities = t.keyEntities
          var i = pe(e$keys)
          return {
            keyEntities: _e(t$keyEntities, i).filter(function (e) {
              var t = t$keyEntities.find(function (t) {
                var /* [auto-meaningful-name] */t$key = t.key
                return e.key === t$key
              })
              return !t || "removed" !== t.status || "remove" !== e.status
            })
          }
        }
      }
    ])
    return i
  }(Component)
  n.defaultProps = {
    component: "div"
  }
}(ee)
var ge = fe
function ve(e) {
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$style = e.style
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$maskProps = e.maskProps
  var /* [auto-meaningful-name] */e$motionName = e.motionName
  return createElement(ge, {
    key: "mask",
    visible: e$visible,
    motionName: e$motionName,
    leavedClassName: "".concat(e$prefixCls, "-mask-hidden")
  }, function (e) {
    var /* [auto-meaningful-name] */e$className = e.className
    var /* [auto-meaningful-name] */e$style1 = e.style
    return createElement("div", $$_19.a({
      style: $$_21.a($$_21.a({}, e$style1), e$style),
      className: Classnames("".concat(e$prefixCls, "-mask"), e$className)
    }, e$maskProps))
  })
}
function me(e, t, n) {
  var r = t
  if (!r && n) {
    r = "".concat(e, "-").concat(n)
  }
  return r
}
var ye = -1
function be(e, t) {
  var n = e["page".concat(t ? "Y" : "X", "Offset")]
  var r = "scroll".concat(t ? "Top" : "Left")
  if ("number" !== typeof n) {
    var /* [auto-meaningful-name] */e$document = e.document
    if ("number" !== typeof (n = e$document.documentElement[r])) {
      n = e$document.body[r]
    }
  }
  return n
}
var we = memo(function (e) {
  return e.children
}, function (e, t) {
  return !t.shouldUpdate
})
var Ee = {
  width: 0,
  height: 0,
  overflow: "hidden",
  outline: "none"
}
var xe = forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$closable = e.closable
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$width = e.width
  var /* [auto-meaningful-name] */e$height = e.height
  var /* [auto-meaningful-name] */e$footer = e.footer
  var /* [auto-meaningful-name] */e$title = e.title
  var /* [auto-meaningful-name] */e$closeIcon = e.closeIcon
  var /* [auto-meaningful-name] */e$style = e.style
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$forceRender = e.forceRender
  var /* [auto-meaningful-name] */e$bodyStyle = e.bodyStyle
  var /* [auto-meaningful-name] */e$bodyProps = e.bodyProps
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$destroyOnClose = e.destroyOnClose
  var /* [auto-meaningful-name] */e$modalRender = e.modalRender
  var /* [auto-meaningful-name] */e$motionName = e.motionName
  var /* [auto-meaningful-name] */e$ariaId = e.ariaId
  var /* [auto-meaningful-name] */e$onClose = e.onClose
  var /* [auto-meaningful-name] */e$onVisibleChanged = e.onVisibleChanged
  var /* [auto-meaningful-name] */e$onMouseDown = e.onMouseDown
  var /* [auto-meaningful-name] */e$onMouseUp = e.onMouseUp
  var /* [auto-meaningful-name] */e$mousePosition = e.mousePosition
  var S = useRef()
  var T = useRef()
  var B = useRef()
  useImperativeHandle(t, function () {
    return {
      focus: function () {
        var /* [auto-meaningful-name] */S$current
        if (!(null === (S$current = S.current) || undefined === S$current)) {
          S$current.focus()
        }
      },
      changeActive: function (e) {
        var /* [auto-meaningful-name] */document$activeElement = document.activeElement
        if (e && document$activeElement === T.current) {
          S.current.focus()
        } else {
          if (!(e || document$activeElement !== S.current)) {
            T.current.focus()
          }
        }
      }
    }
  })
  var D
  var I
  var R
  var F = useState()
  var P = $$_40_index.a(F, 2)
  var N = P[0]
  var L = P[1]
  var U = {}
  function H() {
    var e = function (e) {
      var t = e.getBoundingClientRect()
      var n = {
        left: t.left,
        top: t.top
      }
      var /* [auto-meaningful-name] */e$ownerDocument = e.ownerDocument
      var i = e$ownerDocument.defaultView || e$ownerDocument.parentWindow
      n.left += be(i)
      n.top += be(i, true)
      return n
    }(B.current)
    L(e$mousePosition ? "".concat(e$mousePosition.x - e.left, "px ").concat(e$mousePosition.y - e.top, "px") : "")
  }
  if (undefined !== e$width) {
    U.width = e$width
  }
  if (undefined !== e$height) {
    U.height = e$height
  }
  if (N) {
    U.transformOrigin = N
  }
  if (e$footer) {
    D = createElement("div", {
      className: "".concat(e$prefixCls, "-footer")
    }, e$footer)
  }
  if (e$title) {
    I = createElement("div", {
      className: "".concat(e$prefixCls, "-header")
    }, createElement("div", {
      className: "".concat(e$prefixCls, "-title"),
      id: e$ariaId
    }, e$title))
  }
  if (e$closable) {
    R = createElement("button", {
      type: "button",
      onClick: e$onClose,
      "aria-label": "Close",
      className: "".concat(e$prefixCls, "-close")
    }, e$closeIcon || createElement("span", {
      className: "".concat(e$prefixCls, "-close-x")
    }))
  }
  var V = createElement("div", {
    className: "".concat(e$prefixCls, "-content")
  }, R, I, createElement("div", $$_19.a({
    className: "".concat(e$prefixCls, "-body"),
    style: e$bodyStyle
  }, e$bodyProps), e$children), D)
  return createElement(ge, {
    visible: e$visible,
    onVisibleChanged: e$onVisibleChanged,
    onAppearPrepare: H,
    onEnterPrepare: H,
    forceRender: e$forceRender,
    motionName: e$motionName,
    removeOnLeave: e$destroyOnClose,
    ref: B
  }, function (e, t) {
    var /* [auto-meaningful-name] */e$className1 = e.className
    var /* [auto-meaningful-name] */e$style1 = e.style
    return createElement("div", {
      key: "dialog-element",
      role: "document",
      ref: t,
      style: $$_21.a($$_21.a($$_21.a({}, e$style1), e$style), U),
      className: Classnames(e$prefixCls, e$className, e$className1),
      onMouseDown: e$onMouseDown,
      onMouseUp: e$onMouseUp
    }, createElement("div", {
      tabIndex: 0,
      ref: S,
      style: Ee,
      "aria-hidden": "true"
    }), createElement(we, {
      shouldUpdate: e$visible || e$forceRender
    }, e$modalRender ? e$modalRender(V) : V), createElement("div", {
      tabIndex: 0,
      ref: T,
      style: Ee,
      "aria-hidden": "true"
    }))
  })
})
xe.displayName = "Content"
var Ce = xe
function Oe(e) {
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var n = undefined === e$prefixCls ? "rc-dialog" : e$prefixCls
  var /* [auto-meaningful-name] */e$zIndex = e.zIndex
  var /* [auto-meaningful-name] */e$visible = e.visible
  var c = undefined !== e$visible && e$visible
  var /* [auto-meaningful-name] */e$keyboard = e.keyboard
  var l = undefined === e$keyboard || e$keyboard
  var /* [auto-meaningful-name] */e$focusTriggerAfterClose = e.focusTriggerAfterClose
  var d = undefined === e$focusTriggerAfterClose || e$focusTriggerAfterClose
  var /* [auto-meaningful-name] */e$scrollLocker = e.scrollLocker
  var /* [auto-meaningful-name] */e$title = e.title
  var /* [auto-meaningful-name] */e$wrapStyle = e.wrapStyle
  var /* [auto-meaningful-name] */e$wrapClassName = e.wrapClassName
  var /* [auto-meaningful-name] */e$wrapProps = e.wrapProps
  var /* [auto-meaningful-name] */e$onClose = e.onClose
  var /* [auto-meaningful-name] */e$afterClose = e.afterClose
  var /* [auto-meaningful-name] */e$transitionName = e.transitionName
  var /* [auto-meaningful-name] */e$animation = e.animation
  var /* [auto-meaningful-name] */e$closable = e.closable
  var E = undefined === e$closable || e$closable
  var /* [auto-meaningful-name] */e$mask = e.mask
  var C = undefined === e$mask || e$mask
  var /* [auto-meaningful-name] */e$maskTransitionName = e.maskTransitionName
  var /* [auto-meaningful-name] */e$maskAnimation = e.maskAnimation
  var /* [auto-meaningful-name] */e$maskClosable = e.maskClosable
  var T = undefined === e$maskClosable || e$maskClosable
  var /* [auto-meaningful-name] */e$maskStyle = e.maskStyle
  var /* [auto-meaningful-name] */e$maskProps = e.maskProps
  var I = useRef()
  var R = useRef()
  var F = useRef()
  var P = useState(c)
  var N = $$_40_index.a(P, 2)
  var L = N[0]
  var U = N[1]
  var z = useRef()
  function Q(e) {
    if (!(null === e$onClose || undefined === e$onClose)) {
      e$onClose(e)
    }
  }
  if (!z.current) {
    z.current = "rcDialogTitle".concat(ye += 1)
  }
  var W = useRef(false)
  var K = useRef()
  var X = null
  if (T) {
    X = function (e) {
      if (W.current) {
        W.current = false
      } else {
        if (R.current === e.target) {
          Q(e)
        }
      }
    }
  }
  useEffect(function () {
    if (c) {
      U(true)
    }
    return function () {}
  }, [c])
  useEffect(function () {
    return function () {
      clearTimeout(K.current)
    }
  }, [])
  useEffect(function () {
    return L ? (null === e$scrollLocker || undefined === e$scrollLocker || e$scrollLocker.lock(), null === e$scrollLocker || undefined === e$scrollLocker ? undefined : e$scrollLocker.unLock) : function () {}
  }, [L, e$scrollLocker])
  return createElement("div", $$_19.a({
    className: "".concat(n, "-root")
  }, function (e) {
    var t
    var n = arguments.length > 1 && undefined !== arguments[1] && arguments[1]
    t = false === n ? {
      aria: true,
      data: true,
      attr: true
    } : true === n ? {
      aria: true
    } : $$_21.a({}, n)
    var r = {}
    Object.keys(e).forEach(function (n) {
      if (t.aria && ("role" === n || G(n, "aria-")) || t.data && G(n, "data-") || t.attr && V.includes(n)) {
        r[n] = e[n]
      }
    })
    return r
  }(e, {
    data: true
  })), createElement(ve, {
    prefixCls: n,
    visible: C && c,
    motionName: me(n, e$maskTransitionName, e$maskAnimation),
    style: $$_21.a({
      zIndex: e$zIndex
    }, e$maskStyle),
    maskProps: e$maskProps
  }), createElement("div", $$_19.a({
    tabIndex: -1,
    onKeyDown: function (e) {
      if (l && e.keyCode === H.ESC) {
        e.stopPropagation()
        return void Q(e)
      }
      if (c && e.keyCode === H.TAB) {
        F.current.changeActive(!e.shiftKey)
      }
    },
    className: Classnames("".concat(n, "-wrap"), e$wrapClassName),
    ref: R,
    onClick: X,
    role: "dialog",
    "aria-labelledby": e$title ? z.current : null,
    style: $$_21.a($$_21.a({
      zIndex: e$zIndex
    }, e$wrapStyle), {}, {
      display: L ? null : "none"
    })
  }, e$wrapProps), createElement(Ce, $$_19.a({}, e, {
    onMouseDown: function () {
      clearTimeout(K.current)
      W.current = true
    },
    onMouseUp: function () {
      K.current = setTimeout(function () {
        W.current = false
      })
    },
    ref: F,
    closable: E,
    ariaId: z.current,
    prefixCls: n,
    visible: c,
    onClose: Q,
    onVisibleChanged: function (e) {
      if (e) {
        var /* [auto-meaningful-name] */F$current
        if (!function (e, t) {
          return !!e && e.contains(t)
        }(R.current, document.activeElement)) {
          I.current = document.activeElement
          if (!(null === (F$current = F.current) || undefined === F$current)) {
            F$current.focus()
          }
        }
      } else {
        U(false)
        if (C && I.current && d) {
          try {
            I.current.focus({
              preventScroll: true
            })
          } catch (n) {}
          I.current = null
        }
        if (L) {
          if (!(null === e$afterClose || undefined === e$afterClose)) {
            e$afterClose()
          }
        }
      }
    },
    motionName: me(n, e$transitionName, e$animation)
  }))))
}
var ke = function (e) {
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$getContainer = e.getContainer
  var /* [auto-meaningful-name] */e$forceRender = e.forceRender
  var /* [auto-meaningful-name] */e$destroyOnClose = e.destroyOnClose
  var c = undefined !== e$destroyOnClose && e$destroyOnClose
  var /* [auto-meaningful-name] */e$afterClose = e.afterClose
  var l = useState(e$visible)
  var f = $$_40_index.a(l, 2)
  var d = f[0]
  var h = f[1]
  useEffect(function () {
    if (e$visible) {
      h(true)
    }
  }, [e$visible])
  return false === e$getContainer ? createElement(Oe, $$_19.a({}, e, {
    getOpenCount: function () {
      return 2
    }
  })) : e$forceRender || !c || d ? createElement(N, {
    visible: e$visible,
    forceRender: e$forceRender,
    getContainer: e$getContainer
  }, function (t) {
    return createElement(Oe, $$_19.a({}, e, {
      destroyOnClose: c,
      afterClose: function () {
        if (!(null === e$afterClose || undefined === e$afterClose)) {
          e$afterClose()
        }
        h(false)
      }
    }, t))
  }) : null
}
ke.displayName = "Dialog"
var Se = ke
export { Se }
