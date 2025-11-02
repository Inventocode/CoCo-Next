/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：556
 */

"use strict"

export { Ot as d }
export { Q as b }
export { Yt as c }
export { Kt as a }
export { qt as f }
import r = require("../19");
import o = require("../29");
import i = require("../20");
import a = require("../80/index");
import s = require("../33/index");
import c = require("../54");
import React = require("react");
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
}(React)
import d = require("../8");
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
}(d)
import f = require("./1019");
var h = function __importDefault(module) {
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
}(f)
function m(e, t) {
  var n = t || {}
  var n$defaultValue = n.defaultValue
  var n$value = n.value
  var n$onChange = n.onChange
  var n$postState = n.postState
  var c = React.useState(function () {
    return undefined !== n$value ? n$value : undefined !== n$defaultValue ? "function" === typeof n$defaultValue ? n$defaultValue() : n$defaultValue : "function" === typeof e ? e() : e
  })
  var u = s.a(c, 2)
  var d = u[0]
  var p = u[1]
  var f = undefined !== n$value ? n$value : d
  if (n$postState) {
    f = n$postState(f)
  }
  var h = React.useRef(true)
  React.useEffect(function () {
    if (h.current) {
      h.current = false
    } else {
      if (undefined === n$value) {
        p(n$value)
      }
    }
  }, [n$value])
  return [f, function (e) {
    p(e)
    if (f !== e && n$onChange) {
      n$onChange(e, f)
    }
  }]
}
var g = {}
function _(e, t) {
  0
}
function v(e, t, n) {
  if (!(t || g[n])) {
    e(false, n)
    g[n] = true
  }
}
var b = function (e, t) {
  v(_, e, t)
}
import y = require("../1500/557");
import E = require("../95");
import O = require("../96");
import w = require("../120");
import C = require("../140");
var T = {
  MAC_ENTER: 3,
  BACKSPACE: 8,
  TAB: 9,
  NUM_CENTER: 12,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  PAUSE: 19,
  CAPS_LOCK: 20,
  ESC: 27,
  SPACE: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  PRINT_SCREEN: 44,
  INSERT: 45,
  DELETE: 46,
  ZERO: 48,
  ONE: 49,
  TWO: 50,
  THREE: 51,
  FOUR: 52,
  FIVE: 53,
  SIX: 54,
  SEVEN: 55,
  EIGHT: 56,
  NINE: 57,
  QUESTION_MARK: 63,
  A: 65,
  B: 66,
  C: 67,
  D: 68,
  E: 69,
  F: 70,
  G: 71,
  H: 72,
  I: 73,
  J: 74,
  K: 75,
  L: 76,
  M: 77,
  N: 78,
  O: 79,
  P: 80,
  Q: 81,
  R: 82,
  S: 83,
  T: 84,
  U: 85,
  V: 86,
  W: 87,
  X: 88,
  Y: 89,
  Z: 90,
  META: 91,
  WIN_KEY_RIGHT: 92,
  CONTEXT_MENU: 93,
  NUM_ZERO: 96,
  NUM_ONE: 97,
  NUM_TWO: 98,
  NUM_THREE: 99,
  NUM_FOUR: 100,
  NUM_FIVE: 101,
  NUM_SIX: 102,
  NUM_SEVEN: 103,
  NUM_EIGHT: 104,
  NUM_NINE: 105,
  NUM_MULTIPLY: 106,
  NUM_PLUS: 107,
  NUM_MINUS: 109,
  NUM_PERIOD: 110,
  NUM_DIVISION: 111,
  F1: 112,
  F2: 113,
  F3: 114,
  F4: 115,
  F5: 116,
  F6: 117,
  F7: 118,
  F8: 119,
  F9: 120,
  F10: 121,
  F11: 122,
  F12: 123,
  NUMLOCK: 144,
  SEMICOLON: 186,
  DASH: 189,
  EQUALS: 187,
  COMMA: 188,
  PERIOD: 190,
  SLASH: 191,
  APOSTROPHE: 192,
  SINGLE_QUOTE: 222,
  OPEN_SQUARE_BRACKET: 219,
  BACKSLASH: 220,
  CLOSE_SQUARE_BRACKET: 221,
  WIN_KEY: 224,
  MAC_FF_META: 224,
  WIN_IME: 229,
  isTextModifyingKeyEvent: function (e) {
    var e$keyCode = e.keyCode
    if (e.altKey && !e.ctrlKey || e.metaKey || e$keyCode >= T.F1 && e$keyCode <= T.F12) {
      return false
    }
    switch (e$keyCode) {
      case T.ALT:
      case T.CAPS_LOCK:
      case T.CONTEXT_MENU:
      case T.CTRL:
      case T.DOWN:
      case T.END:
      case T.ESC:
      case T.HOME:
      case T.INSERT:
      case T.LEFT:
      case T.MAC_FF_META:
      case T.META:
      case T.NUMLOCK:
      case T.NUM_CENTER:
      case T.PAGE_DOWN:
      case T.PAGE_UP:
      case T.PAUSE:
      case T.PRINT_SCREEN:
      case T.RIGHT:
      case T.SHIFT:
      case T.UP:
      case T.WIN_KEY:
      case T.WIN_KEY_RIGHT:
        return false
      default:
        return true
    }
  },
  isCharacterKey: function (e) {
    if (e >= T.ZERO && e <= T.NINE) {
      return true
    }
    if (e >= T.NUM_ZERO && e <= T.NUM_MULTIPLY) {
      return true
    }
    if (e >= T.A && e <= T.Z) {
      return true
    }
    if (-1 !== window.navigator.userAgent.indexOf("WebKit") && 0 === e) {
      return true
    }
    switch (e) {
      case T.SPACE:
      case T.QUESTION_MARK:
      case T.NUM_PLUS:
      case T.NUM_MINUS:
      case T.NUM_PERIOD:
      case T.NUM_DIVISION:
      case T.SEMICOLON:
      case T.DASH:
      case T.EQUALS:
      case T.COMMA:
      case T.PERIOD:
      case T.SLASH:
      case T.APOSTROPHE:
      case T.SINGLE_QUOTE:
      case T.OPEN_SQUARE_BRACKET:
      case T.BACKSLASH:
      case T.CLOSE_SQUARE_BRACKET:
        return true
      default:
        return false
    }
  }
}
var S = T
function I(e, t) {
  var n = i.a({}, e)
  if (Array.isArray(t)) {
    t.forEach(function (e) {
      delete n[e]
    })
  }
  return n
}
var A = ["children", "locked"]
var j = React.createContext(null)
function N(e) {
  var e$children = e.children
  var e$locked = e.locked
  var r = c.a(e, A)
  var o = React.useContext(j)
  var a = function (e, t, n) {
    var r = React.useRef({})
    if (!("value" in r.current && !n(r.current.condition, t))) {
      r.current.value = e()
      r.current.condition = t
    }
    return r.current.value
  }(function () {
    return function (e, t) {
      var n = i.a({}, e)
      Object.keys(t).forEach(function (e) {
        var r = t[e]
        if (undefined !== r) {
          n[e] = r
        }
      })
      return n
    }(o, r)
  }, [o, r], function (e, t) {
    return !e$locked && (e[0] !== t[0] || !h()(e[1], t[1]))
  })
  return React.createElement(j.Provider, {
    value: a
  }, e$children)
}
function R(e, t, n, r) {
  var o = React.useContext(j)
  var o$activeKey = o.activeKey
  var o$onActive = o.onActive
  var o$onInactive = o.onInactive
  var c = {
    active: o$activeKey === e
  }
  if (!t) {
    c.onMouseEnter = function (t) {
      if (!(null === n || undefined === n)) {
        n({
          key: e,
          domEvent: t
        })
      }
      o$onActive(e)
    }
    c.onMouseLeave = function (t) {
      if (!(null === r || undefined === r)) {
        r({
          key: e,
          domEvent: t
        })
      }
      o$onInactive(e)
    }
  }
  return c
}
var k = ["item"]
function x(e) {
  var e$item = e.item
  var n = c.a(e, k)
  Object.defineProperty(n, "item", {
    get: function () {
      b(false, "`info.item` is deprecated since we will move to function component that not provides React Node instance in future.")
      return e$item
    }
  })
  return n
}
function D(e) {
  var e$icon = e.icon
  var e$props = e.props
  var e$children = e.children
  return ("function" === typeof e$icon ? React.createElement(e$icon, i.a({}, e$props)) : e$icon) || e$children || null
}
function M(e) {
  var t = React.useContext(j)
  var t$mode = t.mode
  var t$rtl = t.rtl
  var t$inlineIndent = t.inlineIndent
  if ("inline" !== t$mode) {
    return null
  }
  return t$rtl ? {
    paddingRight: e * t$inlineIndent
  } : {
    paddingLeft: e * t$inlineIndent
  }
}
var L = []
var P = React.createContext(null)
function B() {
  return React.useContext(P)
}
var F = React.createContext(L)
function G(e) {
  var t = React.useContext(F)
  return React.useMemo(function () {
    return undefined !== e ? [].concat(a.a(t), [e]) : t
  }, [t, e])
}
var U = React.createContext(null)
var W = React.createContext(null)
function H(e, t) {
  return undefined === e ? null : "".concat(e, "-").concat(t)
}
function V(e) {
  return H(React.useContext(W), e)
}
var z = ["title", "attribute", "elementRef"]
var Y = ["style", "className", "eventKey", "warnKey", "disabled", "itemIcon", "children", "role", "onMouseEnter", "onMouseLeave", "onClick", "onKeyDown", "onFocus"]
var K = ["active"]
var q = function (e) {
  w.a(n, e)
  var t = C.a(n)
  function n() {
    E.a(this, n)
    return t.apply(this, arguments)
  }
  O.a(n, [{
    key: "render",
    value: function () {
      var this$props = this.props
      var this$props$title = this$props.title
      var this$props$attribute = this$props.attribute
      var this$props$elementRef = this$props.elementRef
      var i = I(c.a(this$props, z), ["eventKey"])
      b(!this$props$attribute, "`attribute` of Menu.Item is deprecated. Please pass attribute directly.")
      return React.createElement(y.a.Item, r.a({}, this$props$attribute, {
        title: "string" === typeof this$props$title ? this$props$title : undefined
      }, i, {
        ref: this$props$elementRef
      }))
    }
  }])
  return n
}(React.Component)
var X = function (e) {
  var t
  var e$style = e.style
  var e$className = e.className
  var e$eventKey = e.eventKey
  e.warnKey
  var e$disabled = e.disabled
  var e$itemIcon = e.itemIcon
  var e$children = e.children
  var e$role = e.role
  var e$onMouseEnter = e.onMouseEnter
  var e$onMouseLeave = e.onMouseLeave
  var e$onClick = e.onClick
  var e$onKeyDown = e.onKeyDown
  var e$onFocus = e.onFocus
  var E = c.a(e, Y)
  var O = V(e$eventKey)
  var w = React.useContext(j)
  var w$prefixCls = w.prefixCls
  var w$onItemClick = w.onItemClick
  var w$disabled = w.disabled
  var w$overflowDisabled = w.overflowDisabled
  var w$itemIcon = w.itemIcon
  var w$selectedKeys = w.selectedKeys
  var w$onActive = w.onActive
  var P = "".concat(w$prefixCls, "-item")
  var B = React.useRef()
  var F = React.useRef()
  var U = w$disabled || e$disabled
  var W = G(e$eventKey)
  var H = function (e) {
    return {
      key: e$eventKey,
      keyPath: a.a(W).reverse(),
      item: B.current,
      domEvent: e
    }
  }
  var z = e$itemIcon || w$itemIcon
  var X = R(e$eventKey, U, e$onMouseEnter, e$onMouseLeave)
  var x$active = X.active
  var Z = c.a(X, K)
  var J = w$selectedKeys.includes(e$eventKey)
  var $ = M(W.length)
  var ee = {}
  if ("option" === e.role) {
    ee["aria-selected"] = J
  }
  return React.createElement(q, r.a({
    ref: B,
    elementRef: F,
    role: null === e$role ? "none" : e$role || "menuitem",
    tabIndex: e$disabled ? null : -1,
    "data-menu-id": w$overflowDisabled && O ? null : O
  }, E, Z, ee, {
    component: "li",
    "aria-disabled": e$disabled,
    style: i.a(i.a({}, $), e$style),
    className: p()(P, (t = {}, o.a(t, "".concat(P, "-active"), x$active), o.a(t, "".concat(P, "-selected"), J), o.a(t, "".concat(P, "-disabled"), U), t), e$className),
    onClick: function (e) {
      if (!U) {
        var t = H(e)
        if (!(null === e$onClick || undefined === e$onClick)) {
          e$onClick(x(t))
        }
        w$onItemClick(t)
      }
    },
    onKeyDown: function (e) {
      if (!(null === e$onKeyDown || undefined === e$onKeyDown)) {
        e$onKeyDown(e)
      }
      if (e.which === S.ENTER) {
        var t = H(e)
        if (!(null === e$onClick || undefined === e$onClick)) {
          e$onClick(x(t))
        }
        w$onItemClick(t)
      }
    },
    onFocus: function (e) {
      w$onActive(e$eventKey)
      if (!(null === e$onFocus || undefined === e$onFocus)) {
        e$onFocus(e)
      }
    }
  }), e$children, React.createElement(D, {
    props: i.a(i.a({}, e), {}, {
      isSelected: J
    }),
    icon: z
  }))
}
var Q = function (e) {
  var e$eventKey = e.eventKey
  var n = B()
  var r = G(e$eventKey)
  React.useEffect(function () {
    if (n) {
      n.registerPath(e$eventKey, r)
      return function () {
        n.unregisterPath(e$eventKey, r)
      }
    }
  }, [r])
  return n ? null : React.createElement(X, e)
}
import Z = require("../242/index");
function J(e, t) {
  return function e(t) {
    var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {}
    var r = []
    u.a.Children.forEach(t, function (t) {
      if (undefined !== t && null !== t || n.keepEmpty) {
        if (Array.isArray(t)) {
          r = r.concat(e(t))
        } else {
          if (Z.isFragment(t) && t.props) {
            r = r.concat(e(t.props.children, n))
          } else {
            r.push(t)
          }
        }
      }
    })
    return r
  }(e).map(function (e, n) {
    if (React.isValidElement(e)) {
      var r
      var /* [auto-meaningful-name] */e$props
      var e$key = e.key
      var s = null !== (r = null === (e$props = e.props) || undefined === e$props ? undefined : e$props.eventKey) && undefined !== r ? r : e$key
      if (null === s || undefined === s) {
        s = "tmp_key-".concat([].concat(a.a(t), [n]).join("-"))
      }
      var c = {
        key: s,
        eventKey: s
      }
      return React.cloneElement(e, c)
    }
    return e
  })
}
function $(e) {
  var t = React.useRef(e)
  t.current = e
  var n = React.useCallback(function () {
    for (var /* [auto-meaningful-name] */t$current, arguments$length = arguments.length, r = new Array(arguments$length), o = 0; o < arguments$length; o++) {
      r[o] = arguments[o]
    }
    return null === (t$current = t.current) || undefined === t$current ? undefined : t$current.call.apply(t$current, [t].concat(r))
  }, [])
  return e ? n : undefined
}
var ee = ["className", "children"]
var te = function (e, t) {
  var e$className = e.className
  var e$children = e.children
  var i = c.a(e, ee)
  var a = React.useContext(j)
  var a$prefixCls = a.prefixCls
  var a$mode = a.mode
  var a$rtl = a.rtl
  return React.createElement("ul", r.a({
    className: p()(a$prefixCls, a$rtl && "".concat(a$prefixCls, "-rtl"), "".concat(a$prefixCls, "-sub"), "".concat(a$prefixCls, "-").concat("inline" === a$mode ? "inline" : "vertical"), e$className)
  }, i, {
    "data-menu-list": true,
    ref: t
  }), e$children)
}
var ne = React.forwardRef(te)
ne.displayName = "SubMenuList"
var re = ne
import oe = require("../103");
import ie = require("../75/index");
var ae = function __importDefault(module) {
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
}(ie)
var se = function (e) {
  return +setTimeout(e, 16)
}
var ce = function (e) {
  return clearTimeout(e)
}
if ("undefined" !== typeof window && "requestAnimationFrame" in window) {
  se = function (e) {
    return window.requestAnimationFrame(e)
  }
  ce = function (e) {
    return window.cancelAnimationFrame(e)
  }
}
var le = 0
var ue = new Map()
function de(e) {
  ue.delete(e)
}
function pe(e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 1
  var n = le += 1
  function r(t) {
    if (0 === t) {
      de(n)
      e()
    } else {
      var o = se(function () {
        r(t - 1)
      })
      ue.set(n, o)
    }
  }
  r(t)
  return n
}
function fe(e, t) {
  return !!e && e.contains(t)
}
function he(e) {
  return e instanceof HTMLElement ? e : ae.a.findDOMNode(e)
}
pe.cancel = function (e) {
  var t = ue.get(e)
  de(t)
  return ce(t)
}
import me = require("../108");
function ge(e, t) {
  if ("function" === typeof e) {
    e(t)
  } else {
    if ("object" === me.a(e) && e && "current" in e) {
      e.current = t
    }
  }
}
function _e(e, t, n, r) {
  var o = ae.a.unstable_batchedUpdates ? function (e) {
    ae.a.unstable_batchedUpdates(n, e)
  } : n
  if (e.addEventListener) {
    e.addEventListener(t, o, r)
  }
  return {
    remove: function () {
      if (e.removeEventListener) {
        e.removeEventListener(t, o)
      }
    }
  }
}
function ve() {
  return !("undefined" === typeof window || !window.document || !window.document.createElement)
}
var be = React.forwardRef(function (e, t) {
  var e$didUpdate = e.didUpdate
  var e$getContainer = e.getContainer
  var e$children = e.children
  var i = React.useRef()
  React.useImperativeHandle(t, function () {
    return {}
  })
  var a = React.useRef(false)
  if (!a.current && ve()) {
    i.current = e$getContainer()
    a.current = true
  }
  React.useEffect(function () {
    if (!(null === e$didUpdate || undefined === e$didUpdate)) {
      e$didUpdate(e)
    }
  })
  React.useEffect(function () {
    return function () {
      var /* [auto-meaningful-name] */i$current
      var /* [auto-meaningful-name] */i$current$parentNode
      if (!(null === (i$current = i.current) || undefined === i$current || null === (i$current$parentNode = i$current.parentNode) || undefined === i$current$parentNode)) {
        i$current$parentNode.removeChild(i.current)
      }
    }
  }, [])
  return i.current ? ae.a.createPortal(e$children, i.current) : null
})
function ye(e, t, n) {
  return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1]
}
function Ee(e, t) {
  var n = {}
  n[e.toLowerCase()] = t.toLowerCase()
  n["Webkit".concat(e)] = "webkit".concat(t)
  n["Moz".concat(e)] = "moz".concat(t)
  n["ms".concat(e)] = "MS".concat(t)
  n["O".concat(e)] = "o".concat(t.toLowerCase())
  return n
}
var Oe = function (e, t) {
  var n = {
    animationend: Ee("Animation", "AnimationEnd"),
    transitionend: Ee("Transition", "TransitionEnd")
  }
  if (e) {
    if (!("AnimationEvent" in t)) {
      delete n.animationend.animation
    }
    if (!("TransitionEvent" in t)) {
      delete n.transitionend.transition
    }
  }
  return n
}(ve(), "undefined" !== typeof window ? window : {})
var we = {}
if (ve()) {
  var Ce = document.createElement("div")
  we = Ce.style
}
var Te = {}
function Se(e) {
  if (Te[e]) {
    return Te[e]
  }
  var t = Oe[e]
  if (t) {
    for (var n = Object.keys(t), n$length = n.length, o = 0; o < n$length; o += 1) {
      var i = n[o]
      if (Object.prototype.hasOwnProperty.call(t, i) && i in we) {
        Te[e] = t[i]
        return Te[e]
      }
    }
  }
  return ""
}
var Ie = Se("animationend")
var Ae = Se("transitionend")
var je = !(!Ie || !Ae)
var Ne = Ie || "animationend"
var Re = Ae || "transitionend"
function ke(e, t) {
  return e ? "object" === me.a(e) ? e[t.replace(/-\w/g, function (e) {
    return e[1].toUpperCase()
  })] : "".concat(e, "-").concat(t) : null
}
function xe(e) {
  var t = React.useRef(false)
  var n = React.useState(e)
  var r = s.a(n, 2)
  var o = r[0]
  var i = r[1]
  React.useEffect(function () {
    return function () {
      t.current = true
    }
  }, [])
  return [o, function (e) {
    if (!t.current) {
      i(e)
    }
  }]
}
var De = ve() ? React.useLayoutEffect : React.useEffect
var Me = ["prepare", "start", "active", "end"]
function Le(e) {
  return "active" === e || "end" === e
}
var Pe = function (e, t) {
  var n = React.useState("none")
  var r = s.a(n, 2)
  var o = r[0]
  var i = r[1]
  var a = function () {
    var e = React.useRef(null)
    function t() {
      pe.cancel(e.current)
    }
    React.useEffect(function () {
      return function () {
        t()
      }
    }, [])
    return [function n(r) {
      var o = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 2
      t()
      var i = pe(function () {
        if (o <= 1) {
          r({
            isCanceled: function () {
              return i !== e.current
            }
          })
        } else {
          n(r, o - 1)
        }
      })
      e.current = i
    }, t]
  }()
  var c = s.a(a, 2)
  var u = c[0]
  var d = c[1]
  De(function () {
    if ("none" !== o && "end" !== o) {
      var e = Me.indexOf(o)
      var n = Me[e + 1]
      var r = t(o)
      if (false === r) {
        i(n)
      } else {
        u(function (e) {
          function t() {
            if (!e.isCanceled()) {
              i(n)
            }
          }
          if (true === r) {
            t()
          } else {
            Promise.resolve(r).then(t)
          }
        })
      }
    }
  }, [e, o])
  React.useEffect(function () {
    return function () {
      d()
    }
  }, [])
  return [function () {
    i("prepare")
  }, o]
}
function Be(e, t, n, r) {
  var r$motionEnter = r.motionEnter
  var c = undefined === r$motionEnter || r$motionEnter
  var r$motionAppear = r.motionAppear
  var d = undefined === r$motionAppear || r$motionAppear
  var r$motionLeave = r.motionLeave
  var f = undefined === r$motionLeave || r$motionLeave
  var r$motionDeadline = r.motionDeadline
  var r$motionLeaveImmediately = r.motionLeaveImmediately
  var r$onAppearPrepare = r.onAppearPrepare
  var r$onEnterPrepare = r.onEnterPrepare
  var r$onLeavePrepare = r.onLeavePrepare
  var r$onAppearStart = r.onAppearStart
  var r$onEnterStart = r.onEnterStart
  var r$onLeaveStart = r.onLeaveStart
  var r$onAppearActive = r.onAppearActive
  var r$onEnterActive = r.onEnterActive
  var r$onLeaveActive = r.onLeaveActive
  var r$onAppearEnd = r.onAppearEnd
  var r$onEnterEnd = r.onEnterEnd
  var r$onLeaveEnd = r.onLeaveEnd
  var r$onVisibleChanged = r.onVisibleChanged
  var j = xe()
  var N = s.a(j, 2)
  var R = N[0]
  var k = N[1]
  var x = xe("none")
  var D = s.a(x, 2)
  var M = D[0]
  var L = D[1]
  var P = xe(null)
  var B = s.a(P, 2)
  var F = B[0]
  var G = B[1]
  var U = React.useRef(false)
  var W = React.useRef(null)
  var H = React.useRef(false)
  var V = React.useRef(null)
  function z() {
    return n() || V.current
  }
  var Y = React.useRef(false)
  function K(e) {
    var t
    var n = z()
    if (!(e && !e.deadline && e.target !== n)) {
      if ("appear" === M && Y.current) {
        t = null === r$onAppearEnd || undefined === r$onAppearEnd ? undefined : r$onAppearEnd(n, e)
      } else {
        if ("enter" === M && Y.current) {
          t = null === r$onEnterEnd || undefined === r$onEnterEnd ? undefined : r$onEnterEnd(n, e)
        } else {
          if ("leave" === M && Y.current) {
            t = null === r$onLeaveEnd || undefined === r$onLeaveEnd ? undefined : r$onLeaveEnd(n, e)
          }
        }
      }
      if (!(false === t || H.current)) {
        L("none")
        G(null)
      }
    }
  }
  var q = function (e) {
    var t = React.useRef()
    var n = React.useRef(e)
    n.current = e
    var r = React.useCallback(function (e) {
      n.current(e)
    }, [])
    function o(e) {
      if (e) {
        e.removeEventListener(Re, r)
        e.removeEventListener(Ne, r)
      }
    }
    React.useEffect(function () {
      return function () {
        o(t.current)
      }
    }, [])
    return [function (e) {
      if (t.current && t.current !== e) {
        o(t.current)
      }
      if (e && e !== t.current) {
        e.addEventListener(Re, r)
        e.addEventListener(Ne, r)
        t.current = e
      }
    }, o]
  }(K)
  var X = s.a(q, 1)[0]
  var Q = React.useMemo(function () {
    var e
    var t
    var n
    switch (M) {
      case "appear":
        e = {}
        o.a(e, "prepare", r$onAppearPrepare)
        o.a(e, "start", r$onAppearStart)
        o.a(e, "active", r$onAppearActive)
        return e
      case "enter":
        t = {}
        o.a(t, "prepare", r$onEnterPrepare)
        o.a(t, "start", r$onEnterStart)
        o.a(t, "active", r$onEnterActive)
        return t
      case "leave":
        n = {}
        o.a(n, "prepare", r$onLeavePrepare)
        o.a(n, "start", r$onLeaveStart)
        o.a(n, "active", r$onLeaveActive)
        return n
      default:
        return {}
    }
  }, [M])
  var Z = Pe(M, function (e) {
    if ("prepare" === e) {
      var q$prepare = Q.prepare
      return !!q$prepare && q$prepare(z())
    }
    var n
    if (ee in Q) {
      G((null === (n = Q[ee]) || undefined === n ? undefined : n.call(Q, z(), null)) || null)
    }
    if ("active" === ee) {
      X(z())
      if (r$motionDeadline > 0) {
        clearTimeout(W.current)
        W.current = setTimeout(function () {
          K({
            deadline: true
          })
        }, r$motionDeadline)
      }
    }
    return true
  })
  var J = s.a(Z, 2)
  var $ = J[0]
  var ee = J[1]
  var te = Le(ee)
  Y.current = te
  De(function () {
    k(t)
    var n
    var u$current = U.current
    U.current = true
    if (e) {
      if (!u$current && t && d) {
        n = "appear"
      }
      if (u$current && t && c) {
        n = "enter"
      }
      if (u$current && !t && f || !u$current && r$motionLeaveImmediately && !t && f) {
        n = "leave"
      }
      if (n) {
        L(n)
        $()
      }
    }
  }, [t])
  React.useEffect(function () {
    if ("appear" === M && !d || "enter" === M && !c || "leave" === M && !f) {
      L("none")
    }
  }, [d, c, f])
  React.useEffect(function () {
    return function () {
      clearTimeout(W.current)
      H.current = true
    }
  }, [])
  React.useEffect(function () {
    if (undefined !== R && "none" === M) {
      if (!(null === r$onVisibleChanged || undefined === r$onVisibleChanged)) {
        r$onVisibleChanged(R)
      }
    }
  }, [R, M])
  var ne = F
  if (Q.prepare && "start" === ee) {
    ne = i.a({
      transition: "none"
    }, ne)
  }
  return [M, ee, ne, null !== R && undefined !== R ? R : t]
}
var Fe = function (e) {
  w.a(n, e)
  var t = C.a(n)
  function n() {
    E.a(this, n)
    return t.apply(this, arguments)
  }
  O.a(n, [{
    key: "render",
    value: function () {
      return this.props.children
    }
  }])
  return n
}(React.Component)
var Ge = function (e) {
  var t = e
  function n(e) {
    return !(!e.motionName || !t)
  }
  if ("object" === me.a(e)) {
    t = e.transitionSupport
  }
  var r = React.forwardRef(function (e, t) {
    var e$visible = e.visible
    var a = undefined === e$visible || e$visible
    var e$removeOnLeave = e.removeOnLeave
    var u = undefined === e$removeOnLeave || e$removeOnLeave
    var e$forceRender = e.forceRender
    var e$children = e.children
    var e$motionName = e.motionName
    var e$leavedClassName = e.leavedClassName
    var e$eventProps = e.eventProps
    var _ = n(e)
    var v = React.useRef()
    var b = React.useRef()
    var y = Be(_, a, function () {
      try {
        return he(v.current || b.current)
      } catch (e) {
        return null
      }
    }, e)
    var E = s.a(y, 4)
    var O = E[0]
    var w = E[1]
    var C = E[2]
    var T = E[3]
    var S = React.useRef(T)
    if (T) {
      S.current = true
    }
    var I = React.useRef(t)
    I.current = t
    var A
    var j = React.useCallback(function (e) {
      v.current = e
      ge(I.current, e)
    }, [])
    var N = i.a(i.a({}, e$eventProps), {}, {
      visible: a
    })
    if (e$children) {
      if ("none" !== O && n(e)) {
        var R
        var k
        if ("prepare" === w) {
          k = "prepare"
        } else {
          if (Le(w)) {
            k = "active"
          } else {
            if ("start" === w) {
              k = "start"
            }
          }
        }
        A = e$children(i.a(i.a({}, N), {}, {
          className: p()(ke(e$motionName, O), (R = {}, o.a(R, ke(e$motionName, "".concat(O, "-").concat(k)), k), o.a(R, e$motionName, "string" === typeof e$motionName), R)),
          style: C
        }), j)
      } else {
        A = T ? e$children(i.a({}, N), j) : !u && S.current ? e$children(i.a(i.a({}, N), {}, {
          className: e$leavedClassName
        }), j) : e$forceRender ? e$children(i.a(i.a({}, N), {}, {
          style: {
            display: "none"
          }
        }), j) : null
      }
    } else {
      A = null
    }
    return React.createElement(Fe, {
      ref: b
    }, A)
  })
  r.displayName = "CSSMotion"
  return r
}(je)
function Ue(e) {
  var t
  t = e && "object" === me.a(e) && "key" in e ? e : {
    key: e
  }
  return i.a(i.a({}, t), {}, {
    key: String(t.key)
  })
}
function We() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : []
  return e.map(Ue)
}
function He() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : []
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : []
  var n = []
  var r = 0
  var t$length = t.length
  var a = We(e)
  var s = We(t)
  a.forEach(function (e) {
    for (var t = false, a = r; a < t$length; a += 1) {
      var c = s[a]
      if (c.key === e.key) {
        if (r < a) {
          n = n.concat(s.slice(r, a).map(function (e) {
            return i.a(i.a({}, e), {}, {
              status: "add"
            })
          }))
          r = a
        }
        n.push(i.a(i.a({}, c), {}, {
          status: "keep"
        }))
        r += 1
        t = true
        break
      }
    }
    if (!t) {
      n.push(i.a(i.a({}, e), {}, {
        status: "remove"
      }))
    }
  })
  if (r < t$length) {
    n = n.concat(s.slice(r).map(function (e) {
      return i.a(i.a({}, e), {}, {
        status: "add"
      })
    }))
  }
  var c = {}
  n.forEach(function (e) {
    var e$key = e.key
    c[e$key] = (c[e$key] || 0) + 1
  })
  var l = Object.keys(c).filter(function (e) {
    return c[e] > 1
  })
  l.forEach(function (e) {
    (n = n.filter(function (t) {
      var t$key = t.key
      var t$status = t.status
      return t$key !== e || "remove" !== t$status
    })).forEach(function (t) {
      if (t.key === e) {
        t.status = "keep"
      }
    })
  })
  return n
}
var Ve = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"]
!function (e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : Ge
  var n = function (e) {
    w.a(o, e)
    var n = C.a(o)
    function o() {
      var e
      E.a(this, o);
      (e = n.apply(this, arguments)).state = {
        keyEntities: []
      }
      e.removeKey = function (t) {
        e.setState(function (e) {
          return {
            keyEntities: e.keyEntities.map(function (e) {
              return e.key !== t ? e : i.a(i.a({}, e), {}, {
                status: "removed"
              })
            })
          }
        })
      }
      return e
    }
    O.a(o, [{
      key: "render",
      value: function () {
        var e = this
        var this$state$keyEntities = this.state.keyEntities
        var this$props = this.props
        var this$props$component = this$props.component
        var this$props$children = this$props.children
        var this$props$onVisibleChanged = this$props.onVisibleChanged
        var u = c.a(this$props, ["component", "children", "onVisibleChanged"])
        var d = this$props$component || React.Fragment
        var p = {}
        Ve.forEach(function (e) {
          p[e] = u[e]
          delete u[e]
        })
        delete u.keys
        return React.createElement(d, u, this$state$keyEntities.map(function (n) {
          var n$status = n.status
          var i = c.a(n, ["status"])
          var u = "add" === n$status || "keep" === n$status
          return React.createElement(t, r.a({}, p, {
            key: i.key,
            visible: u,
            eventProps: i,
            onVisibleChanged: function (t) {
              if (!(null === this$props$onVisibleChanged || undefined === this$props$onVisibleChanged)) {
                this$props$onVisibleChanged(t, {
                  key: i.key
                })
              }
              if (!t) {
                e.removeKey(i.key)
              }
            }
          }), this$props$children)
        }))
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function (e, t) {
        var e$keys = e.keys
        var t$keyEntities = t.keyEntities
        var o = We(e$keys)
        return {
          keyEntities: He(t$keyEntities, o).filter(function (e) {
            var t = t$keyEntities.find(function (t) {
              var t$key = t.key
              return e.key === t$key
            })
            return !t || "removed" !== t.status || "remove" !== e.status
          })
        }
      }
    }])
    return o
  }(React.Component)
  n.defaultProps = {
    component: "div"
  }
}(je)
var ze = Ge
function Ye(e) {
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
function Ke(e) {
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
  var d = {}
  if (e$maskMotion || e$maskTransitionName || e$maskAnimation) {
    d = i.a({
      motionAppear: true
    }, Ye({
      motion: e$maskMotion,
      prefixCls: e$prefixCls,
      transitionName: e$maskTransitionName,
      animation: e$maskAnimation
    }))
  }
  return React.createElement(ze, r.a({}, d, {
    visible: e$visible,
    removeOnLeave: true
  }), function (e) {
    var e$className = e.className
    return React.createElement("div", {
      style: {
        zIndex: e$zIndex
      },
      className: p()("".concat(e$prefixCls, "-mask"), e$className)
    })
  })
}
import qe = require("../1500/555/index");
import Xe = require("../110");
var Qe = function __importDefault(module) {
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
}(Xe)
import Ze = require("../171");
var Je = ["measure", "align", null, "motion"]
var $e = React.forwardRef(function (e, t) {
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
  var T = React.useRef()
  var S = React.useRef()
  var I = React.useState()
  var A = s.a(I, 2)
  var j = A[0]
  var N = A[1]
  var R = function (e) {
    var t = React.useState({
      width: 0,
      height: 0
    })
    var n = s.a(t, 2)
    var r = n[0]
    var o = n[1]
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
      o({
        width: e.offsetWidth,
        height: e.offsetHeight
      })
    }]
  }(e$stretch)
  var k = s.a(R, 2)
  var x = k[0]
  var D = k[1]
  var M = function (e, t) {
    var n = React.useState(null)
    var r = s.a(n, 2)
    var o = r[0]
    var i = r[1]
    var a = React.useRef()
    var c = React.useRef(false)
    function u(e) {
      if (!c.current) {
        i(e)
      }
    }
    function d() {
      pe.cancel(a.current)
    }
    React.useEffect(function () {
      u("measure")
    }, [e])
    React.useEffect(function () {
      switch (o) {
        case "measure":
          t()
      }
      if (o) {
        a.current = pe(Ze.a(Qe.a.mark(function e() {
          var t
          var n
          return Qe.a.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  t = Je.indexOf(o)
                  if ((n = Je[t + 1]) && -1 !== t) {
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
    }, [o])
    React.useEffect(function () {
      return function () {
        c.current = true
        d()
      }
    }, [])
    return [o, function (e) {
      d()
      a.current = pe(function () {
        u(function (e) {
          switch (o) {
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
      D(e$getRootDomNode())
    }
  })
  var L = s.a(M, 2)
  var P = L[0]
  var B = L[1]
  var F = React.useRef()
  function G() {
    var /* [auto-meaningful-name] */t$current
    if (!(null === (t$current = T.current) || undefined === t$current)) {
      t$current.forceAlign()
    }
  }
  function U(e, t) {
    var n = e$getClassNameFromAlign(t)
    if (j !== n) {
      N(n)
    }
    if ("align" === P) {
      if (j !== n) {
        Promise.resolve().then(function () {
          G()
        })
      } else {
        B(function () {
          var /* [auto-meaningful-name] */f$current
          if (!(null === (f$current = F.current) || undefined === f$current)) {
            f$current.call(F)
          }
        })
      }
      if (!(null === e$onAlign || undefined === e$onAlign)) {
        e$onAlign(e, t)
      }
    }
  }
  var W = i.a({}, Ye(e))
  function H() {
    return new Promise(function (e) {
      F.current = e
    })
  }
  ["onAppearEnd", "onEnterEnd", "onLeaveEnd"].forEach(function (e) {
    var t = W[e]
    W[e] = function (e, n) {
      B()
      return null === t || undefined === t ? undefined : t(e, n)
    }
  })
  React.useEffect(function () {
    if (!(W.motionName || "motion" !== P)) {
      B()
    }
  }, [W.motionName, P])
  React.useImperativeHandle(t, function () {
    return {
      forceAlign: G,
      getElement: function () {
        return S.current
      }
    }
  })
  var V = i.a(i.a({}, x), {}, {
    zIndex: e$zIndex,
    opacity: "motion" !== P && "stable" !== P && e$visible ? 0 : undefined,
    pointerEvents: "stable" === P ? undefined : "none"
  }, _e$style)
  var z = true
  if (!(!(null === e$align || undefined === e$align ? undefined : e$align.points) || "align" !== P && "stable" !== P)) {
    z = false
  }
  var Y = e$children
  if (React.Children.count(e$children) > 1) {
    Y = React.createElement("div", {
      className: "".concat(e$prefixCls, "-content")
    }, e$children)
  }
  return React.createElement(ze, r.a({
    visible: e$visible,
    ref: S,
    leavedClassName: "".concat(e$prefixCls, "-hidden")
  }, W, {
    onAppearPrepare: H,
    onEnterPrepare: H,
    removeOnLeave: e$destroyPopupOnHide,
    forceRender: e$forceRender
  }), function (e, t) {
    var e$className = e.className
    var e$style = e.style
    var s = p()(e$prefixCls, _e$className, j, e$className)
    return React.createElement(qe.a, {
      target: e$point || e$getRootDomNode,
      key: "popup",
      ref: T,
      monitorWindowResize: true,
      disabled: z,
      align: e$align,
      onAlign: U
    }, React.createElement("div", {
      ref: t,
      className: s,
      onMouseEnter: e$onMouseEnter,
      onMouseLeave: e$onMouseLeave,
      onMouseDownCapture: e$onMouseDown,
      onTouchStartCapture: e$onTouchStart,
      style: i.a(i.a({}, e$style), V)
    }, Y))
  })
})
$e.displayName = "PopupInner"
var et = $e
var tt = React.forwardRef(function (e, t) {
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
  var g = React.useRef()
  React.useImperativeHandle(t, function () {
    return {
      forceAlign: function () {},
      getElement: function () {
        return g.current
      }
    }
  })
  var _ = i.a({
    zIndex: e$zIndex
  }, e$mobile$popupStyle)
  var v = e$children
  if (React.Children.count(e$children) > 1) {
    v = React.createElement("div", {
      className: "".concat(e$prefixCls, "-content")
    }, e$children)
  }
  if (e$mobile$popupRender) {
    v = e$mobile$popupRender(v)
  }
  return React.createElement(ze, r.a({
    visible: e$visible,
    ref: g,
    removeOnLeave: true
  }, h), function (e, t) {
    var e$className = e.className
    var e$style = e.style
    var a = p()(e$prefixCls, e$mobileUndefinedE$mobileE$mobile$popupClassName, e$className)
    return React.createElement("div", {
      ref: t,
      className: a,
      style: i.a(i.a({}, e$style), _)
    }, v)
  })
})
tt.displayName = "MobilePopupInner"
var nt = tt
var rt = ["visible", "mobile"]
var ot = React.forwardRef(function (e, t) {
  var e$visible = e.visible
  var e$mobile = e.mobile
  var a = c.a(e, rt)
  var u = React.useState(e$visible)
  var d = s.a(u, 2)
  var p = d[0]
  var f = d[1]
  var h = React.useState(false)
  var m = s.a(h, 2)
  var g = m[0]
  var _ = m[1]
  var v = i.a(i.a({}, a), {}, {
    visible: p
  })
  React.useEffect(function () {
    f(e$visible)
    if (e$visible && e$mobile) {
      _(function () {
        if ("undefined" === typeof navigator || "undefined" === typeof window) {
          return false
        }
        var e = navigator.userAgent || navigator.vendor || window.opera
        return !(!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(null === e || undefined === e ? undefined : e.substr(0, 4)))
      }())
    }
  }, [e$visible, e$mobile])
  var b = g ? React.createElement(nt, r.a({}, v, {
    mobile: e$mobile,
    ref: t
  })) : React.createElement(et, r.a({}, v, {
    ref: t
  }))
  return React.createElement("div", null, React.createElement(Ke, v), b)
})
ot.displayName = "Popup"
var it = ot
var at = React.createContext(null)
function st() {}
function ct() {
  return ""
}
function lt(e) {
  return e ? e.ownerDocument : window.document
}
var ut = ["onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur", "onContextMenu"]
var dt = function (e) {
  var t = function (t) {
    w.a(o, t)
    var n = C.a(o)
    function o(e) {
      var t
      var i
      E.a(this, o);
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
        if (!(e.relatedTarget && !e.relatedTarget.setTimeout && fe(null === (t$popupRef$current = t.popupRef.current) || undefined === t$popupRef$current ? undefined : t$popupRef$current.getElement(), e.relatedTarget))) {
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
          var o = t.getPopupDomNode()
          if (!(fe(r, e$target) && !t.isContextMenuOnly() || fe(o, e$target) || t.hasPopupMouseDown)) {
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
          var n = he(t.triggerRef.current)
          if (n) {
            return n
          }
        } catch (r) {}
        return ae.a.findDOMNode(oe.a(t))
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
            for (var n$points = n.points, i = Object.keys(e), a = 0; a < i.length; a += 1) {
              var s = i[a]
              if (ye(e[s].points, n$points, r)) {
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
        var T = t.getPopupAlign()
        var S = {}
        if (t.isMouseEnterToShow()) {
          S.onMouseEnter = t.onPopupMouseEnter
        }
        if (t.isMouseLeaveToHide()) {
          S.onMouseLeave = t.onPopupMouseLeave
        }
        S.onMouseDown = t.onPopupMouseDown
        S.onTouchStart = t.onPopupMouseDown
        return React.createElement(it, r.a({
          prefixCls: t$props$prefixCls,
          destroyPopupOnHide: t$props$destroyPopupOnHide,
          visible: t$state$popupVisible,
          point: t$props$alignPoint && t$state$point,
          className: t$props$popupClassName,
          align: T,
          onAlign: t$props$onPopupAlign,
          animation: t$props$popupAnimation,
          getClassNameFromAlign: t.getPopupClassNameFromAlign
        }, S, {
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
        pe.cancel(t.attachId)
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
          t.attachId = pe(function () {
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
      i = "popupVisible" in e ? !!e.popupVisible : !!e.defaultPopupVisible
      t.state = {
        prevPopupVisible: i,
        popupVisible: i
      }
      ut.forEach(function (e) {
        t["fire".concat(e)] = function (n) {
          t.fireEvents(e, n)
        }
      })
      return t
    }
    O.a(o, [{
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
            this.clickOutsideHandler = _e(e, "mousedown", this.onDocumentClick)
          }
          if (!this.touchOutsideHandler) {
            e = e || this$props.getDocument(this.getRootDomNode())
            this.touchOutsideHandler = _e(e, "touchstart", this.onDocumentClick)
          }
          if (!this.contextMenuOutsideHandler1 && this.isContextMenuToShow()) {
            e = e || this$props.getDocument(this.getRootDomNode())
            this.contextMenuOutsideHandler1 = _e(e, "scroll", this.onContextMenuClose)
          }
          return void (!this.contextMenuOutsideHandler2 && this.isContextMenuToShow() && (this.contextMenuOutsideHandler2 = _e(window, "blur", this.onContextMenuClose)))
        }
        this.clearOutsideHandler()
      }
    }, {
      key: "componentWillUnmount",
      value: function () {
        this.clearDelayTimer()
        this.clearOutsideHandler()
        clearTimeout(this.mouseDownTimeout)
        pe.cancel(this.attachId)
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
          return i.a(i.a({}, r), n)
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
        var o = 1e3 * t
        this.clearDelayTimer()
        if (o) {
          var i = n ? {
            pageX: n.pageX,
            pageY: n.pageY
          } : null
          this.delayTimer = window.setTimeout(function () {
            r.setPopupVisible(e, i)
            r.clearDelayTimer()
          }, o)
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
        var u = React.Children.only(this$props$children)
        var d = {
          key: "trigger"
        }
        if (this.isContextMenuToShow()) {
          d.onContextMenu = this.onContextMenu
        } else {
          d.onContextMenu = this.createTwoChains("onContextMenu")
        }
        if (this.isClickToHide() || this.isClickToShow()) {
          d.onClick = this.onClick
          d.onMouseDown = this.onMouseDown
          d.onTouchStart = this.onTouchStart
        } else {
          d.onClick = this.createTwoChains("onClick")
          d.onMouseDown = this.createTwoChains("onMouseDown")
          d.onTouchStart = this.createTwoChains("onTouchStart")
        }
        if (this.isMouseEnterToShow()) {
          d.onMouseEnter = this.onMouseEnter
          if (this$props$alignPoint) {
            d.onMouseMove = this.onMouseMove
          }
        } else {
          d.onMouseEnter = this.createTwoChains("onMouseEnter")
        }
        if (this.isMouseLeaveToHide()) {
          d.onMouseLeave = this.onMouseLeave
        } else {
          d.onMouseLeave = this.createTwoChains("onMouseLeave")
        }
        if (this.isFocusToShow() || this.isBlurToHide()) {
          d.onFocus = this.onFocus
          d.onBlur = this.onBlur
        } else {
          d.onFocus = this.createTwoChains("onFocus")
          d.onBlur = this.createTwoChains("onBlur")
        }
        var f = p()(u && u.props && u.props.className, this$props$className)
        if (f) {
          d.className = f
        }
        var h = i.a({}, d)
        if (function (e) {
          var /* [auto-meaningful-name] */r$prototype
          var /* [auto-meaningful-name] */e$prototype
          var r = Z.isMemo(e) ? e.type.type : e.type
          return !("function" === typeof r && !(null === (r$prototype = r.prototype) || undefined === r$prototype ? undefined : r$prototype.render)) && !("function" === typeof e && !(null === (e$prototype = e.prototype) || undefined === e$prototype ? undefined : e$prototype.render))
        }(u)) {
          h.ref = function () {
            for (var arguments$length = arguments.length, t = new Array(arguments$length), n = 0; n < arguments$length; n++) {
              t[n] = arguments[n]
            }
            return function (e) {
              t.forEach(function (t) {
                ge(t, e)
              })
            }
          }(this.triggerRef, u.ref)
        }
        var m
        var g = React.cloneElement(u, h)
        if (this$state$popupVisible || this.popupRef.current || this$props$forceRender) {
          m = React.createElement(e, {
            key: "portal",
            getContainer: this.getContainer,
            didUpdate: this.handlePortalUpdate
          }, this.getComponent())
        }
        if (!this$state$popupVisible && this$props$autoDestroy) {
          m = null
        }
        return React.createElement(at.Provider, {
          value: this.triggerContextValue
        }, g, m)
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
    return o
  }(React.Component)
  t.contextType = at
  t.defaultProps = {
    prefixCls: "rc-trigger-popup",
    getPopupClassNameFromAlign: ct,
    getDocument: lt,
    onPopupVisibleChange: st,
    afterPopupVisibleChange: st,
    onPopupAlign: st,
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
}(be)
var pt = {
  adjustX: 1,
  adjustY: 1
}
var ft = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: pt,
    offset: [0, -7]
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: pt,
    offset: [0, 7]
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: pt,
    offset: [-4, 0]
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: pt,
    offset: [4, 0]
  }
}
var ht = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: pt,
    offset: [0, -7]
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: pt,
    offset: [0, 7]
  },
  rightTop: {
    points: ["tr", "tl"],
    overflow: pt,
    offset: [-4, 0]
  },
  leftTop: {
    points: ["tl", "tr"],
    overflow: pt,
    offset: [4, 0]
  }
}
function mt(e, t, n) {
  return t || (n ? n[e] || n.other : undefined)
}
var gt = {
  horizontal: "bottomLeft",
  vertical: "rightTop",
  "vertical-left": "rightTop",
  "vertical-right": "leftTop"
}
function _t(e) {
  var e$prefixCls = e.prefixCls
  var e$visible = e.visible
  var e$children = e.children
  var e$popup = e.popup
  var e$popupClassName = e.popupClassName
  var e$popupOffset = e.popupOffset
  var e$disabled = e.disabled
  var e$mode = e.mode
  var e$onVisibleChange = e.onVisibleChange
  var m = React.useContext(j)
  var m$getPopupContainer = m.getPopupContainer
  var m$rtl = m.rtl
  var m$subMenuOpenDelay = m.subMenuOpenDelay
  var m$subMenuCloseDelay = m.subMenuCloseDelay
  var m$builtinPlacements = m.builtinPlacements
  var m$triggerSubMenuAction = m.triggerSubMenuAction
  var m$forceSubMenuRender = m.forceSubMenuRender
  var m$motion = m.motion
  var m$defaultMotions = m.defaultMotions
  var T = React.useState(false)
  var S = s.a(T, 2)
  var I = S[0]
  var A = S[1]
  var N = m$rtl ? i.a(i.a({}, ht), m$builtinPlacements) : i.a(i.a({}, ft), m$builtinPlacements)
  var R = gt[e$mode]
  var k = mt(e$mode, m$motion, m$defaultMotions)
  var x = i.a(i.a({}, k), {}, {
    leavedClassName: "".concat(e$prefixCls, "-hidden"),
    removeOnLeave: false,
    motionAppear: true
  })
  var D = React.useRef()
  React.useEffect(function () {
    D.current = pe(function () {
      A(e$visible)
    })
    return function () {
      pe.cancel(D.current)
    }
  }, [e$visible])
  return React.createElement(dt, {
    prefixCls: e$prefixCls,
    popupClassName: p()("".concat(e$prefixCls, "-popup"), o.a({}, "".concat(e$prefixCls, "-rtl"), m$rtl), e$popupClassName),
    stretch: "horizontal" === e$mode ? "minWidth" : null,
    getPopupContainer: m$getPopupContainer,
    builtinPlacements: N,
    popupPlacement: R,
    popupVisible: I,
    popup: e$popup,
    popupAlign: e$popupOffset && {
      offset: e$popupOffset
    },
    action: e$disabled ? [] : [m$triggerSubMenuAction],
    mouseEnterDelay: m$subMenuOpenDelay,
    mouseLeaveDelay: m$subMenuCloseDelay,
    onPopupVisibleChange: e$onVisibleChange,
    forceRender: m$forceSubMenuRender,
    popupMotion: x
  }, e$children)
}
function vt(e) {
  var t = e.id
  var e$open = e.open
  var e$keyPath = e.keyPath
  var e$children = e.children
  var c = React.useContext(j)
  var c$prefixCls = c.prefixCls
  var c$forceSubMenuRender = c.forceSubMenuRender
  var c$motion = c.motion
  var c$defaultMotions = c.defaultMotions
  var c$mode = c.mode
  var m = React.useRef(false)
  m.current = "inline" === c$mode
  var g = React.useState(!m.current)
  var _ = s.a(g, 2)
  var v = _[0]
  var b = _[1]
  var y = !!m.current && e$open
  React.useEffect(function () {
    if (m.current) {
      b(false)
    }
  }, [c$mode])
  var E = i.a({}, mt("inline", c$motion, c$defaultMotions))
  if (e$keyPath.length > 1) {
    E.motionAppear = false
  }
  var e$onVisibleChanged = E.onVisibleChanged
  E.onVisibleChanged = function (e) {
    if (!(m.current || e)) {
      b(true)
    }
    return null === e$onVisibleChanged || undefined === e$onVisibleChanged ? undefined : e$onVisibleChanged(e)
  }
  return v ? null : React.createElement(N, {
    mode: "inline",
    locked: !m.current
  }, React.createElement(ze, r.a({
    visible: y
  }, E, {
    forceRender: c$forceSubMenuRender,
    removeOnLeave: false,
    leavedClassName: "".concat(c$prefixCls, "-hidden")
  }), function (e) {
    var e$className = e.className
    var e$style = e.style
    return React.createElement(re, {
      id: t,
      className: e$className,
      style: e$style
    }, e$children)
  }))
}
var bt = ["style", "className", "title", "eventKey", "warnKey", "disabled", "internalPopupClose", "children", "itemIcon", "expandIcon", "popupClassName", "popupOffset", "onClick", "onMouseEnter", "onMouseLeave", "onTitleClick", "onTitleMouseEnter", "onTitleMouseLeave"]
var yt = ["active"]
var Et = function (e) {
  var t
  var e$style = e.style
  var e$className = e.className
  var e$title = e.title
  var e$eventKey = e.eventKey
  e.warnKey
  var e$disabled = e.disabled
  var e$internalPopupClose = e.internalPopupClose
  var e$children = e.children
  var e$itemIcon = e.itemIcon
  var e$expandIcon = e.expandIcon
  var e$popupClassName = e.popupClassName
  var e$popupOffset = e.popupOffset
  var e$onClick = e.onClick
  var e$onMouseEnter = e.onMouseEnter
  var e$onMouseLeave = e.onMouseLeave
  var e$onTitleClick = e.onTitleClick
  var e$onTitleMouseEnter = e.onTitleMouseEnter
  var e$onTitleMouseLeave = e.onTitleMouseLeave
  var I = c.a(e, bt)
  var A = V(e$eventKey)
  var k = React.useContext(j)
  var k$prefixCls = k.prefixCls
  var k$mode = k.mode
  var k$openKeys = k.openKeys
  var k$disabled = k.disabled
  var k$overflowDisabled = k.overflowDisabled
  var k$activeKey = k.activeKey
  var k$selectedKeys = k.selectedKeys
  var k$itemIcon = k.itemIcon
  var k$expandIcon = k.expandIcon
  var k$onItemClick = k.onItemClick
  var k$onOpenChange = k.onOpenChange
  var k$onActive = k.onActive
  var react$useContextU$isSubPathKey = React.useContext(U).isSubPathKey
  var J = G()
  var ee = "".concat(k$prefixCls, "-submenu")
  var te = k$disabled || e$disabled
  var ne = React.useRef()
  var oe = React.useRef()
  var ie = e$itemIcon || k$itemIcon
  var ae = e$expandIcon || k$expandIcon
  var se = k$openKeys.includes(e$eventKey)
  var ce = !k$overflowDisabled && se
  var le = react$useContextU$isSubPathKey(k$selectedKeys, e$eventKey)
  var ue = R(e$eventKey, te, e$onTitleMouseEnter, e$onTitleMouseLeave)
  var ue$active = ue.active
  var pe = c.a(ue, yt)
  var fe = React.useState(false)
  var he = s.a(fe, 2)
  var me = he[0]
  var ge = he[1]
  var _e = function (e) {
    if (!te) {
      ge(e)
    }
  }
  var ve = React.useMemo(function () {
    return ue$active || "inline" !== k$mode && (me || react$useContextU$isSubPathKey([k$activeKey], e$eventKey))
  }, [k$mode, ue$active, k$activeKey, me, e$eventKey, react$useContextU$isSubPathKey])
  var be = M(J.length)
  var ye = $(function (e) {
    if (!(null === e$onClick || undefined === e$onClick)) {
      e$onClick(x(e))
    }
    k$onItemClick(e)
  })
  var Ee = A && "".concat(A, "-popup")
  var Oe = React.createElement("div", r.a({
    role: "menuitem",
    style: be,
    className: "".concat(ee, "-title"),
    tabIndex: te ? null : -1,
    ref: ne,
    title: "string" === typeof e$title ? e$title : null,
    "data-menu-id": k$overflowDisabled && A ? null : A,
    "aria-expanded": ce,
    "aria-haspopup": true,
    "aria-controls": Ee,
    "aria-disabled": te,
    onClick: function (e) {
      if (!te) {
        if (!(null === e$onTitleClick || undefined === e$onTitleClick)) {
          e$onTitleClick({
            key: e$eventKey,
            domEvent: e
          })
        }
        if ("inline" === k$mode) {
          k$onOpenChange(e$eventKey, !se)
        }
      }
    },
    onFocus: function () {
      k$onActive(e$eventKey)
    }
  }, pe), e$title, React.createElement(D, {
    icon: "horizontal" !== k$mode ? ae : null,
    props: i.a(i.a({}, e), {}, {
      isOpen: ce,
      isSubMenu: true
    })
  }, React.createElement("i", {
    className: "".concat(ee, "-arrow")
  })))
  var we = React.useRef(k$mode)
  if ("inline" !== k$mode) {
    we.current = J.length > 1 ? "vertical" : k$mode
  }
  if (!k$overflowDisabled) {
    var we$current = we.current
    Oe = React.createElement(_t, {
      mode: we$current,
      prefixCls: ee,
      visible: !e$internalPopupClose && ce && "inline" !== k$mode,
      popupClassName: e$popupClassName,
      popupOffset: e$popupOffset,
      popup: React.createElement(N, {
        mode: "horizontal" === we$current ? "vertical" : we$current
      }, React.createElement(re, {
        id: Ee,
        ref: oe
      }, e$children)),
      disabled: te,
      onVisibleChange: function (e) {
        if ("inline" !== k$mode) {
          k$onOpenChange(e$eventKey, e)
        }
      }
    }, Oe)
  }
  return React.createElement(N, {
    onItemClick: ye,
    mode: "horizontal" === k$mode ? "vertical" : k$mode,
    itemIcon: ie,
    expandIcon: ae
  }, React.createElement(y.a.Item, r.a({
    role: "none"
  }, I, {
    component: "li",
    style: e$style,
    className: p()(ee, "".concat(ee, "-").concat(k$mode), e$className, (t = {}, o.a(t, "".concat(ee, "-open"), ce), o.a(t, "".concat(ee, "-active"), ve), o.a(t, "".concat(ee, "-selected"), le), o.a(t, "".concat(ee, "-disabled"), te), t)),
    onMouseEnter: function (e) {
      _e(true)
      if (!(null === e$onMouseEnter || undefined === e$onMouseEnter)) {
        e$onMouseEnter({
          key: e$eventKey,
          domEvent: e
        })
      }
    },
    onMouseLeave: function (e) {
      _e(false)
      if (!(null === e$onMouseLeave || undefined === e$onMouseLeave)) {
        e$onMouseLeave({
          key: e$eventKey,
          domEvent: e
        })
      }
    }
  }), Oe, !k$overflowDisabled && React.createElement(vt, {
    id: Ee,
    open: ce,
    keyPath: J
  }, e$children)))
}
function Ot(e) {
  var t
  var e$eventKey = e.eventKey
  var e$children = e.children
  var o = G(e$eventKey)
  var i = J(e$children, o)
  var a = B()
  React.useEffect(function () {
    if (a) {
      a.registerPath(e$eventKey, o)
      return function () {
        a.unregisterPath(e$eventKey, o)
      }
    }
  }, [o])
  t = a ? i : React.createElement(Et, e, i)
  return React.createElement(F.Provider, {
    value: o
  }, t)
}
var wt = function (e) {
  if (!e) {
    return false
  }
  if (e.offsetParent) {
    return true
  }
  if (e.getBBox) {
    var t = e.getBBox()
    if (t.width || t.height) {
      return true
    }
  }
  if (e.getBoundingClientRect) {
    var n = e.getBoundingClientRect()
    if (n.width || n.height) {
      return true
    }
  }
  return false
}
function Ct(e) {
  var t = arguments.length > 1 && undefined !== arguments[1] && arguments[1]
  if (wt(e)) {
    var n = e.nodeName.toLowerCase()
    var r = ["input", "select", "textarea", "button"].includes(n) || e.isContentEditable || "a" === n && !!e.getAttribute("href")
    var o = e.getAttribute("tabindex")
    var i = Number(o)
    var a = null
    if (o && !Number.isNaN(i)) {
      a = i
    } else {
      if (r && null === a) {
        a = 0
      }
    }
    if (r && e.disabled) {
      a = null
    }
    return null !== a && (a >= 0 || t && a < 0)
  }
  return false
}
function Tt(e) {
  var t = arguments.length > 1 && undefined !== arguments[1] && arguments[1]
  var n = a.a(e.querySelectorAll("*")).filter(function (e) {
    return Ct(e, t)
  })
  if (Ct(e, t)) {
    n.unshift(e)
  }
  return n
}
var s$LEFT = S.LEFT
var s$RIGHT = S.RIGHT
var At = S.UP
var s$DOWN = S.DOWN
var s$ENTER = S.ENTER
var s$ESC = S.ESC
var kt = [At, s$DOWN, s$LEFT, s$RIGHT]
function xt(e, t) {
  return Tt(e, true).filter(function (e) {
    return t.has(e)
  })
}
function Dt(e, t, n) {
  var r = arguments.length > 3 && undefined !== arguments[3] ? arguments[3] : 1
  if (!e) {
    return null
  }
  var o = xt(e, t)
  var o$length = o.length
  var a = o.findIndex(function (e) {
    return n === e
  })
  if (r < 0) {
    if (-1 === a) {
      a = o$length - 1
    } else {
      a -= 1
    }
  } else {
    if (r > 0) {
      a += 1
    }
  }
  return o[a = (a + o$length) % o$length]
}
function Mt(e, t, n, r, i, a, s, c, u, d) {
  var p = React.useRef()
  var f = React.useRef()
  f.current = t
  var h = function () {
    pe.cancel(p.current)
  }
  React.useEffect(function () {
    return function () {
      h()
    }
  }, [])
  return function (l) {
    var l$which = l.which
    if ([].concat(kt, [s$ENTER, s$ESC]).includes(l$which)) {
      var g
      var _
      var v
      var b = function () {
        g = new Set()
        _ = new Map()
        v = new Map()
        a().forEach(function (e) {
          var t = document.querySelector("[data-menu-id='".concat(H(r, e), "']"))
          if (t) {
            g.add(t)
            v.set(t, e)
            _.set(e, t)
          }
        })
        return g
      }
      b()
      var y = function (e, t) {
        for (var n = e || document.activeElement; n;) {
          if (t.has(n)) {
            return n
          }
          n = n.parentElement
        }
        return null
      }(_.get(t), g)
      var E = v.get(y)
      var O = function (e, t, n, r) {
        var i
        var a
        var s
        var c
        if ("inline" === e && r === s$ENTER) {
          return {
            inlineTrigger: true
          }
        }
        i = {}
        o.a(i, At, "prev")
        o.a(i, s$DOWN, "next")
        var l = i
        a = {}
        o.a(a, s$LEFT, n ? "next" : "prev")
        o.a(a, s$RIGHT, n ? "prev" : "next")
        o.a(a, s$DOWN, "children")
        o.a(a, s$ENTER, "children")
        var u = a
        s = {}
        o.a(s, At, "prev")
        o.a(s, s$DOWN, "next")
        o.a(s, s$ENTER, "children")
        o.a(s, s$ESC, "parent")
        o.a(s, s$LEFT, n ? "children" : "parent")
        o.a(s, s$RIGHT, n ? "parent" : "children")
        var d = s
        switch (null === (c = {
          inline: l,
          horizontal: u,
          vertical: d,
          inlineSub: l,
          horizontalSub: d,
          verticalSub: d
        }["".concat(e).concat(t ? "" : "Sub")]) || undefined === c ? undefined : c[r]) {
          case "prev":
            return {
              offset: -1,
              sibling: true
            }
          case "next":
            return {
              offset: 1,
              sibling: true
            }
          case "parent":
            return {
              offset: -1,
              sibling: false
            }
          case "children":
            return {
              offset: 1,
              sibling: false
            }
          default:
            return null
        }
      }(e, 1 === s(E, true).length, n, l$which)
      if (!O) {
        return
      }
      if (kt.includes(l$which)) {
        l.preventDefault()
      }
      var w = function (e) {
        if (e) {
          var t = e
          var n = e.querySelector("a")
          if (null === n || undefined === n ? undefined : n.getAttribute("href")) {
            t = n
          }
          var r = v.get(e)
          c(r)
          h()
          p.current = pe(function () {
            if (f.current === r) {
              t.focus()
            }
          })
        }
      }
      if (O.sibling || !y) {
        var C = Dt(y && "inline" !== e ? function (e) {
          for (var t = e; t;) {
            if (t.getAttribute("data-menu-list")) {
              return t
            }
            t = t.parentElement
          }
          return null
        }(y) : i.current, g, y, O.offset)
        w(C)
      } else if (O.inlineTrigger) {
        u(E)
      } else if (O.offset > 0) {
        u(E, true)
        h()
        p.current = pe(function () {
          b()
          var e = y.getAttribute("aria-controls")
          var t = Dt(document.getElementById(e), g)
          w(t)
        }, 5)
      } else if (O.offset < 0) {
        var T = s(E, true)
        var S = T[T.length - 2]
        var I = _.get(S)
        u(S, false)
        w(I)
      }
    }
    if (!(null === d || undefined === d)) {
      d(l)
    }
  }
}
var Lt = Math.random().toFixed(5).toString().slice(2)
var Pt = 0
var Bt = "__RC_UTIL_PATH_SPLIT__"
var Ft = function (e) {
  return e.join(Bt)
}
function Gt() {
  var e = React.useState({})
  var t = s.a(e, 2)[1]
  var n = React.useRef(new Map())
  var r = React.useRef(new Map())
  var o = React.useState([])
  var i = s.a(o, 2)
  var c = i[0]
  var u = i[1]
  var d = React.useRef(0)
  var p = React.useRef(false)
  var f = React.useCallback(function (e, o) {
    var i = Ft(o)
    r.current.set(i, e)
    n.current.set(e, i)
    d.current += 1
    var a
    var d$current = d.current
    a = function () {
      if (d$current === d.current) {
        if (!p.current) {
          t({})
        }
      }
    }
    Promise.resolve().then(a)
  }, [])
  var h = React.useCallback(function (e, t) {
    var o = Ft(t)
    r.current.delete(o)
    n.current.delete(e)
  }, [])
  var m = React.useCallback(function (e) {
    u(e)
  }, [])
  var g = React.useCallback(function (e, t) {
    var r = n.current.get(e) || ""
    var o = r.split(Bt)
    if (t && c.includes(o[0])) {
      o.unshift("rc-menu-more")
    }
    return o
  }, [c])
  var _ = React.useCallback(function (e, t) {
    return e.some(function (e) {
      return g(e, true).includes(t)
    })
  }, [g])
  var v = React.useCallback(function (e) {
    var t = "".concat(n.current.get(e)).concat(Bt)
    var o = new Set()
    a.a(r.current.keys()).forEach(function (e) {
      if (e.startsWith(t)) {
        o.add(r.current.get(e))
      }
    })
    return o
  }, [])
  React.useEffect(function () {
    return function () {
      p.current = true
    }
  }, [])
  return {
    registerPath: f,
    unregisterPath: h,
    refreshOverflowKeys: m,
    isSubPathKey: _,
    getKeyPath: g,
    getKeys: function () {
      var e = a.a(n.current.keys())
      if (c.length) {
        e.push("rc-menu-more")
      }
      return e
    },
    getSubPathKeys: v
  }
}
var Ut = ["prefixCls", "style", "className", "tabIndex", "children", "direction", "id", "mode", "inlineCollapsed", "disabled", "disabledOverflow", "subMenuOpenDelay", "subMenuCloseDelay", "forceSubMenuRender", "defaultOpenKeys", "openKeys", "activeKey", "defaultActiveFirst", "selectable", "multiple", "defaultSelectedKeys", "selectedKeys", "onSelect", "onDeselect", "inlineIndent", "motion", "defaultMotions", "triggerSubMenuAction", "builtinPlacements", "itemIcon", "expandIcon", "overflowedIndicator", "overflowedIndicatorPopupClassName", "getPopupContainer", "onClick", "onOpenChange", "onKeyDown", "openAnimation", "openTransitionName"]
var Wt = []
var Ht = ["className", "title", "eventKey", "children"]
var Vt = ["children"]
var zt = function (e) {
  var e$className = e.className
  var e$title = e.title
  e.eventKey
  var e$children = e.children
  var i = c.a(e, Ht)
  var react$useContextJ$prefixCls = React.useContext(j).prefixCls
  var s = "".concat(react$useContextJ$prefixCls, "-item-group")
  return React.createElement("li", r.a({}, i, {
    onClick: function (e) {
      return e.stopPropagation()
    },
    className: p()(s, e$className)
  }), React.createElement("div", {
    className: "".concat(s, "-title"),
    title: "string" === typeof e$title ? e$title : undefined
  }, e$title), React.createElement("ul", {
    className: "".concat(s, "-list")
  }, e$children))
}
function Yt(e) {
  var e$children = e.children
  var n = c.a(e, Vt)
  var r = J(e$children, G(n.eventKey))
  return B() ? r : React.createElement(zt, I(n, ["warnKey"]), r)
}
function Kt(e) {
  var e$className = e.className
  var e$style = e.style
  var react$useContextJ$prefixCls = React.useContext(j).prefixCls
  return B() ? null : React.createElement("li", {
    className: p()("".concat(react$useContextJ$prefixCls, "-item-divider"), e$className),
    style: e$style
  })
}
var qt = G
var Xt = function (e) {
  var t
  var n
  var e$prefixCls = e.prefixCls
  var d = undefined === e$prefixCls ? "rc-menu" : e$prefixCls
  var e$style = e.style
  var e$className = e.className
  var e$tabIndex = e.tabIndex
  var v = undefined === e$tabIndex ? 0 : e$tabIndex
  var e$children = e.children
  var e$direction = e.direction
  var O = e.id
  var e$mode = e.mode
  var C = undefined === e$mode ? "vertical" : e$mode
  var e$inlineCollapsed = e.inlineCollapsed
  var e$disabled = e.disabled
  var e$disabledOverflow = e.disabledOverflow
  var e$subMenuOpenDelay = e.subMenuOpenDelay
  var j = undefined === e$subMenuOpenDelay ? .1 : e$subMenuOpenDelay
  var e$subMenuCloseDelay = e.subMenuCloseDelay
  var k = undefined === e$subMenuCloseDelay ? .1 : e$subMenuCloseDelay
  var e$forceSubMenuRender = e.forceSubMenuRender
  var e$defaultOpenKeys = e.defaultOpenKeys
  var e$openKeys = e.openKeys
  var e$activeKey = e.activeKey
  var e$defaultActiveFirst = e.defaultActiveFirst
  var e$selectable = e.selectable
  var H = undefined === e$selectable || e$selectable
  var e$multiple = e.multiple
  var z = undefined !== e$multiple && e$multiple
  var e$defaultSelectedKeys = e.defaultSelectedKeys
  var e$selectedKeys = e.selectedKeys
  var e$onSelect = e.onSelect
  var e$onDeselect = e.onDeselect
  var e$inlineIndent = e.inlineIndent
  var ee = undefined === e$inlineIndent ? 24 : e$inlineIndent
  var e$motion = e.motion
  var e$defaultMotions = e.defaultMotions
  var e$triggerSubMenuAction = e.triggerSubMenuAction
  var oe = undefined === e$triggerSubMenuAction ? "hover" : e$triggerSubMenuAction
  var e$builtinPlacements = e.builtinPlacements
  var e$itemIcon = e.itemIcon
  var e$expandIcon = e.expandIcon
  var e$overflowedIndicator = e.overflowedIndicator
  var le = undefined === e$overflowedIndicator ? "..." : e$overflowedIndicator
  var e$overflowedIndicatorPopupClassName = e.overflowedIndicatorPopupClassName
  var e$getPopupContainer = e.getPopupContainer
  var e$onClick = e.onClick
  var e$onOpenChange = e.onOpenChange
  var e$onKeyDown = e.onKeyDown
  e.openAnimation
  e.openTransitionName
  var me = c.a(e, Ut)
  var ge = J(e$children, Wt)
  var _e = React.useState(false)
  var ve = s.a(_e, 2)
  var be = ve[0]
  var ye = ve[1]
  var Ee = React.useRef()
  var Oe = function (e) {
    var t = m(e, {
      value: e
    })
    var n = s.a(t, 2)
    var r = n[0]
    var o = n[1]
    React.useEffect(function () {
      Pt += 1
      var e = "".concat(Lt, "-").concat(Pt)
      o("rc-menu-uuid-".concat(e))
    }, [])
    return r
  }(O)
  var we = "rtl" === e$direction
  var Ce = React.useMemo(function () {
    return "inline" !== C && "vertical" !== C || !e$inlineCollapsed ? [C, false] : ["vertical", e$inlineCollapsed]
  }, [C, e$inlineCollapsed])
  var Te = s.a(Ce, 2)
  var Se = Te[0]
  var Ie = Te[1]
  var Ae = React.useState(0)
  var je = s.a(Ae, 2)
  var Ne = je[0]
  var Re = je[1]
  var ke = Ne >= ge.length - 1 || "horizontal" !== Se || e$disabledOverflow
  var xe = m(e$defaultOpenKeys, {
    value: e$openKeys,
    postState: function (e) {
      return e || Wt
    }
  })
  var De = s.a(xe, 2)
  var Me = De[0]
  var Le = De[1]
  var Pe = function (e) {
    Le(e)
    if (!(null === e$onOpenChange || undefined === e$onOpenChange)) {
      e$onOpenChange(e)
    }
  }
  var Be = React.useState(Me)
  var Fe = s.a(Be, 2)
  var Ge = Fe[0]
  var Ue = Fe[1]
  var We = "inline" === Se
  var He = React.useRef(false)
  React.useEffect(function () {
    if (We) {
      Ue(Me)
    }
  }, [Me])
  React.useEffect(function () {
    if (He.current) {
      if (We) {
        Le(Ge)
      } else {
        Pe(Wt)
      }
    } else {
      He.current = true
    }
  }, [We])
  var Ve = Gt()
  var ve$registerPath = Ve.registerPath
  var ve$unregisterPath = Ve.unregisterPath
  var ve$refreshOverflowKeys = Ve.refreshOverflowKeys
  var ve$isSubPathKey = Ve.isSubPathKey
  var ve$getKeyPath = Ve.getKeyPath
  var ve$getKeys = Ve.getKeys
  var ve$getSubPathKeys = Ve.getSubPathKeys
  var Je = React.useMemo(function () {
    return {
      registerPath: ve$registerPath,
      unregisterPath: ve$unregisterPath
    }
  }, [ve$registerPath, ve$unregisterPath])
  var $e = React.useMemo(function () {
    return {
      isSubPathKey: ve$isSubPathKey
    }
  }, [ve$isSubPathKey])
  React.useEffect(function () {
    ve$refreshOverflowKeys(ke ? Wt : ge.slice(Ne + 1).map(function (e) {
      return e.key
    }))
  }, [Ne, ke])
  var et = m(e$activeKey || e$defaultActiveFirst && (null === (t = ge[0]) || undefined === t ? undefined : t.key), {
    value: e$activeKey
  })
  var tt = s.a(et, 2)
  var nt = tt[0]
  var rt = tt[1]
  var ot = $(function (e) {
    rt(e)
  })
  var it = $(function () {
    rt(undefined)
  })
  var at = m(e$defaultSelectedKeys || [], {
    value: e$selectedKeys,
    postState: function (e) {
      return Array.isArray(e) ? e : null === e || undefined === e ? Wt : [e]
    }
  })
  var st = s.a(at, 2)
  var ct = st[0]
  var lt = st[1]
  var ut = $(function (e) {
    if (!(null === e$onClick || undefined === e$onClick)) {
      e$onClick(x(e))
    }
    (function (e) {
      if (H) {
        var t
        var e$key = e.key
        var r = ct.includes(e$key)
        t = z ? r ? ct.filter(function (e) {
          return e !== e$key
        }) : [].concat(a.a(ct), [e$key]) : [e$key]
        lt(t)
        var o = i.a(i.a({}, e), {}, {
          selectedKeys: t
        })
        if (r) {
          if (!(null === e$onDeselect || undefined === e$onDeselect)) {
            e$onDeselect(o)
          }
        } else {
          if (!(null === e$onSelect || undefined === e$onSelect)) {
            e$onSelect(o)
          }
        }
      }
      if (!z && Me.length && "inline" !== Se) {
        Pe(Wt)
      }
    })(e)
  })
  var dt = $(function (e, t) {
    var n = Me.filter(function (t) {
      return t !== e
    })
    if (t) {
      n.push(e)
    } else if ("inline" !== Se) {
      var r = ve$getSubPathKeys(e)
      n = n.filter(function (e) {
        return !r.has(e)
      })
    }
    if (!h()(Me, n)) {
      Pe(n)
    }
  })
  var pt = $(e$getPopupContainer)
  var ft = Mt(Se, nt, we, Oe, Ee, ve$getKeys, ve$getKeyPath, rt, function (e, t) {
    var n = null !== t && undefined !== t ? t : !Me.includes(e)
    dt(e, n)
  }, e$onKeyDown)
  React.useEffect(function () {
    ye(true)
  }, [])
  var ht = "horizontal" !== Se || e$disabledOverflow ? ge : ge.map(function (e, t) {
    return React.createElement(N, {
      key: e.key,
      overflowDisabled: t > Ne
    }, e)
  })
  var mt = React.createElement(y.a, r.a({
    id: O,
    ref: Ee,
    prefixCls: "".concat(d, "-overflow"),
    component: "ul",
    itemComponent: Q,
    className: p()(d, "".concat(d, "-root"), "".concat(d, "-").concat(Se), e$className, (n = {}, o.a(n, "".concat(d, "-inline-collapsed"), Ie), o.a(n, "".concat(d, "-rtl"), we), n)),
    dir: e$direction,
    style: e$style,
    role: "menu",
    tabIndex: v,
    data: ht,
    renderRawItem: function (e) {
      return e
    },
    renderRawRest: function (e) {
      var e$length = e.length
      var n = e$length ? ge.slice(-e$length) : null
      return React.createElement(Ot, {
        eventKey: "rc-menu-more",
        title: le,
        disabled: ke,
        internalPopupClose: 0 === e$length,
        popupClassName: e$overflowedIndicatorPopupClassName
      }, n)
    },
    maxCount: "horizontal" !== Se || e$disabledOverflow ? y.a.INVALIDATE : y.a.RESPONSIVE,
    ssr: "full",
    "data-menu-list": true,
    onVisibleChange: function (e) {
      Re(e)
    },
    onKeyDown: ft
  }, me))
  return React.createElement(W.Provider, {
    value: Oe
  }, React.createElement(N, {
    prefixCls: d,
    mode: Se,
    openKeys: Me,
    rtl: we,
    disabled: e$disabled,
    motion: be ? e$motion : null,
    defaultMotions: be ? e$defaultMotions : null,
    activeKey: nt,
    onActive: ot,
    onInactive: it,
    selectedKeys: ct,
    inlineIndent: ee,
    subMenuOpenDelay: j,
    subMenuCloseDelay: k,
    forceSubMenuRender: e$forceSubMenuRender,
    builtinPlacements: e$builtinPlacements,
    triggerSubMenuAction: oe,
    getPopupContainer: pt,
    itemIcon: e$itemIcon,
    expandIcon: e$expandIcon,
    onItemClick: ut,
    onOpenChange: dt
  }, React.createElement(U.Provider, {
    value: $e
  }, mt), React.createElement("div", {
    style: {
      display: "none"
    },
    "aria-hidden": true
  }, React.createElement(P.Provider, {
    value: Je
  }, ge))))
}
Xt.Item = Q
Xt.SubMenu = Ot
Xt.ItemGroup = Yt
Xt.Divider = Kt
export { Xt as e }
export default Kt
