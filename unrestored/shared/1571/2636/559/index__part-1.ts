/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：559__part-1
 */

"use strict"

import { b } from "./index__part-0"
import /* [auto-meaningful-name] */$_1041 from "./1041"
import p from "../8"
import { createContext, useContext, useRef, createElement, useMemo, Component, useEffect } from "react"
import * as /* [auto-meaningful-name] */$$_54 from "../54"
import * as /* [auto-meaningful-name] */$$_79_index from "../79/index"
import * as /* [auto-meaningful-name] */$$_21 from "../21"
import * as /* [auto-meaningful-name] */$$_35 from "../35"
import * as /* [auto-meaningful-name] */$$_19 from "../19"
import * as /* [auto-meaningful-name] */$_560 from "./560"
import * as /* [auto-meaningful-name] */$$_103 from "../103"
import * as /* [auto-meaningful-name] */$$_106 from "../106"
import * as /* [auto-meaningful-name] */$$_120 from "../120"
import * as /* [auto-meaningful-name] */$$_140 from "../140"
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
    var /* [auto-meaningful-name] */e$keyCode = e.keyCode
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
function A(e, t) {
  var n = $$_21.a({}, e)
  if (Array.isArray(t)) {
    t.forEach(function (e) {
      delete n[e]
    })
  }
  return n
}
var I = ["children", "locked"]
var j = createContext(null)
function N(e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$locked = e.locked
  var r = $$_54.a(e, I)
  var o = useContext(j)
  var a = function (e, t, n) {
    var r = useRef({})
    if (!("value" in r.current && !n(r.current.condition, t))) {
      r.current.value = e()
      r.current.condition = t
    }
    return r.current.value
  }(function () {
    return function (e, t) {
      var n = $$_21.a({}, e)
      Object.keys(t).forEach(function (e) {
        var r = t[e]
        if (undefined !== r) {
          n[e] = r
        }
      })
      return n
    }(o, r)
  }, [o, r], function (e, t) {
    return !e$locked && (e[0] !== t[0] || !$_1041(e[1], t[1]))
  })
  return createElement(j.Provider, {
    value: a
  }, e$children)
}
function R(e, t, n, r) {
  var o = useContext(j)
  var /* [auto-meaningful-name] */o$activeKey = o.activeKey
  var /* [auto-meaningful-name] */o$onActive = o.onActive
  var /* [auto-meaningful-name] */o$onInactive = o.onInactive
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
  var /* [auto-meaningful-name] */e$item = e.item
  var n = $$_54.a(e, k)
  Object.defineProperty(n, "item", {
    get: function () {
      b(false, "`info.item` is deprecated since we will move to function component that not provides React Node instance in future.")
      return e$item
    }
  })
  return n
}
function D(e) {
  var /* [auto-meaningful-name] */e$icon = e.icon
  var /* [auto-meaningful-name] */e$props = e.props
  var /* [auto-meaningful-name] */e$children = e.children
  return ("function" === typeof e$icon ? createElement(e$icon, $$_21.a({}, e$props)) : e$icon) || e$children || null
}
function M(e) {
  var t = useContext(j)
  var /* [auto-meaningful-name] */t$mode = t.mode
  var /* [auto-meaningful-name] */t$rtl = t.rtl
  var /* [auto-meaningful-name] */t$inlineIndent = t.inlineIndent
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
var P = createContext(null)
function B() {
  return useContext(P)
}
var F = createContext(L)
function G(e) {
  var t = useContext(F)
  return useMemo(function () {
    return undefined !== e ? [].concat($$_79_index.a(t), [e]) : t
  }, [t, e])
}
var W = createContext(null)
var U = createContext(null)
function H(e, t) {
  return undefined === e ? null : "".concat(e, "-").concat(t)
}
function V(e) {
  return H(useContext(U), e)
}
var z = ["title", "attribute", "elementRef"]
var Y = ["style", "className", "eventKey", "warnKey", "disabled", "itemIcon", "children", "role", "onMouseEnter", "onMouseLeave", "onClick", "onKeyDown", "onFocus"]
var K = ["active"]
var q = function (e) {
  $$_120.a(n, e)
  var t = $$_140.a(n)
  function n() {
    $$_103.a(this, n)
    return t.apply(this, arguments)
  }
  $$_106.a(n, [
    {
      key: "render",
      value: function () {
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$title = this$props.title
        var /* [auto-meaningful-name] */this$props$attribute = this$props.attribute
        var /* [auto-meaningful-name] */this$props$elementRef = this$props.elementRef
        var i = A($$_54.a(this$props, z), ["eventKey"])
        b(!this$props$attribute, "`attribute` of Menu.Item is deprecated. Please pass attribute directly.")
        return createElement($_560.a.Item, $$_19.a({}, this$props$attribute, {
          title: "string" === typeof this$props$title ? this$props$title : undefined
        }, i, {
          ref: this$props$elementRef
        }))
      }
    }
  ])
  return n
}(Component)
var X = function (e) {
  var t
  var /* [auto-meaningful-name] */e$style = e.style
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$eventKey = e.eventKey
  e.warnKey
  var /* [auto-meaningful-name] */e$disabled = e.disabled
  var /* [auto-meaningful-name] */e$itemIcon = e.itemIcon
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$role = e.role
  var /* [auto-meaningful-name] */e$onMouseEnter = e.onMouseEnter
  var /* [auto-meaningful-name] */e$onMouseLeave = e.onMouseLeave
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var /* [auto-meaningful-name] */e$onKeyDown = e.onKeyDown
  var /* [auto-meaningful-name] */e$onFocus = e.onFocus
  var E = $$_54.a(e, Y)
  var O = V(e$eventKey)
  var w = useContext(j)
  var /* [auto-meaningful-name] */w$prefixCls = w.prefixCls
  var /* [auto-meaningful-name] */w$onItemClick = w.onItemClick
  var /* [auto-meaningful-name] */w$disabled = w.disabled
  var /* [auto-meaningful-name] */w$overflowDisabled = w.overflowDisabled
  var /* [auto-meaningful-name] */w$itemIcon = w.itemIcon
  var /* [auto-meaningful-name] */w$selectedKeys = w.selectedKeys
  var /* [auto-meaningful-name] */w$onActive = w.onActive
  var P = "".concat(w$prefixCls, "-item")
  var B = useRef()
  var F = useRef()
  var W = w$disabled || e$disabled
  var U = G(e$eventKey)
  var H = function (e) {
    return {
      key: e$eventKey,
      keyPath: $$_79_index.a(U).reverse(),
      item: B.current,
      domEvent: e
    }
  }
  var z = e$itemIcon || w$itemIcon
  var X = R(e$eventKey, W, e$onMouseEnter, e$onMouseLeave)
  var /* [auto-meaningful-name] */X$active = X.active
  var Z = $$_54.a(X, K)
  var J = w$selectedKeys.includes(e$eventKey)
  var $ = M(U.length)
  var ee = {}
  if ("option" === e.role) {
    ee["aria-selected"] = J
  }
  return createElement(q, $$_19.a({
    ref: B,
    elementRef: F,
    role: null === e$role ? "none" : e$role || "menuitem",
    tabIndex: e$disabled ? null : -1,
    "data-menu-id": w$overflowDisabled && O ? null : O
  }, E, Z, ee, {
    component: "li",
    "aria-disabled": e$disabled,
    style: $$_21.a($$_21.a({}, $), e$style),
    className: p(P, (t = {}, $$_35.a(t, "".concat(P, "-active"), X$active), $$_35.a(t, "".concat(P, "-selected"), J), $$_35.a(t, "".concat(P, "-disabled"), W), t), e$className),
    onClick: function (e) {
      if (!W) {
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
  }), e$children, createElement(D, {
    props: $$_21.a($$_21.a({}, e), {}, {
      isSelected: J
    }),
    icon: z
  }))
}
var Q = function (e) {
  var /* [auto-meaningful-name] */e$eventKey = e.eventKey
  var n = B()
  var r = G(e$eventKey)
  useEffect(function () {
    if (n) {
      n.registerPath(e$eventKey, r)
      return function () {
        n.unregisterPath(e$eventKey, r)
      }
    }
  }, [r])
  return n ? null : createElement(X, e)
}
export { S }
export { A }
export { j }
export { N }
export { R }
export { x }
export { D }
export { M }
export { P }
export { B }
export { F }
export { G }
export { W }
export { U }
export { H }
export { V }
export { Q }
