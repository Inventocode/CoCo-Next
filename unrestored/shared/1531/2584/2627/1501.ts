/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1501
 */

"use strict"

import /* [auto-meaningful-name] */$$_19 = require("../19")
import /* [auto-meaningful-name] */$$_33_index = require("../33/index")
import /* [auto-meaningful-name] */React = require("react")
import /* [auto-meaningful-name] */$$_95 = require("../95")
import /* [auto-meaningful-name] */$$_96 = require("../96")
import /* [auto-meaningful-name] */$$_120 = require("../120")
import /* [auto-meaningful-name] */$$_140 = require("../140")
import /* [auto-meaningful-name] */$$_108 = require("../108")
var f = function (e) {
  return +setTimeout(e, 16)
}
var d = function (e) {
  return clearTimeout(e)
}
if ("undefined" !== typeof window && "requestAnimationFrame" in window) {
  f = function (e) {
    return window.requestAnimationFrame(e)
  }
  d = function (e) {
    return window.cancelAnimationFrame(e)
  }
}
var h = 0
var p = new Map()
function _(e) {
  p.delete(e)
}
function A(e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 1
  var n = h += 1
  function r(t) {
    if (0 === t) {
      _(n)
      e()
    } else {
      var i = f(function () {
        r(t - 1)
      })
      p.set(n, i)
    }
  }
  r(t)
  return n
}
A.cancel = function (e) {
  var t = p.get(e)
  _(t)
  return d(t)
}
import /* [auto-meaningful-name] */$$_75_index = require("../75/index")
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
}($$_75_index)
function m() {
  return !("undefined" === typeof window || !window.document || !window.document.createElement)
}
var y
var b = React.forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$didUpdate = e.didUpdate
  var /* [auto-meaningful-name] */e$getContainer = e.getContainer
  var /* [auto-meaningful-name] */e$children = e.children
  var a = React.useRef()
  React.useImperativeHandle(t, function () {
    return {}
  })
  var s = React.useRef(false)
  if (!s.current && m()) {
    a.current = e$getContainer()
    s.current = true
  }
  React.useEffect(function () {
    if (!(null === e$didUpdate || undefined === e$didUpdate)) {
      e$didUpdate(e)
    }
  })
  React.useEffect(function () {
    return function () {
      var /* [auto-meaningful-name] */a$current
      var /* [auto-meaningful-name] */a$current$parentNode
      if (!(null === (a$current = a.current) || undefined === a$current || null === (a$current$parentNode = a$current.parentNode) || undefined === a$current$parentNode)) {
        a$current$parentNode.removeChild(a.current)
      }
    }
  }, [])
  return a.current ? v.a.createPortal(e$children, a.current) : null
})
function w(e) {
  if ("undefined" === typeof document) {
    return 0
  }
  if (e || undefined === y) {
    var t = document.createElement("div")
    t.style.width = "100%"
    t.style.height = "200px"
    var n = document.createElement("div")
    var /* [auto-meaningful-name] */n$style = n.style
    n$style.position = "absolute"
    n$style.top = "0"
    n$style.left = "0"
    n$style.pointerEvents = "none"
    n$style.visibility = "hidden"
    n$style.width = "200px"
    n$style.height = "150px"
    n$style.overflow = "hidden"
    n.appendChild(t)
    document.body.appendChild(n)
    var /* [auto-meaningful-name] */t$offsetWidth = t.offsetWidth
    n.style.overflow = "scroll"
    var /* [auto-meaningful-name] */_t$offsetWidth = t.offsetWidth
    if (t$offsetWidth === _t$offsetWidth) {
      _t$offsetWidth = n.clientWidth
    }
    document.body.removeChild(n)
    y = t$offsetWidth - _t$offsetWidth
  }
  return y
}
var E = function (e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {}
  if (!e) {
    return {}
  }
  var /* [auto-meaningful-name] */t$element = t.element
  var r = undefined === t$element ? document.body : t$element
  var i = {}
  var o = Object.keys(e)
  o.forEach(function (e) {
    i[e] = r.style[e]
  })
  o.forEach(function (t) {
    r.style[t] = e[t]
  })
  return i
}
var x = {}
var C = function (e) {
  if (document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth || e) {
    var t = new RegExp("".concat("ant-scrolling-effect"), "g")
    var /* [auto-meaningful-name] */document$body$className = document.body.className
    if (e) {
      if (!t.test(document$body$className)) {
        return
      }
      E(x)
      x = {}
      return void (document.body.className = document$body$className.replace(t, "").trim())
    }
    var r = w()
    if (r && (x = E({
      position: "relative",
      width: "calc(100% - ".concat(r, "px)")
    }), !t.test(document$body$className))) {
      var i = "".concat(document$body$className, " ").concat("ant-scrolling-effect")
      document.body.className = i.trim()
    }
  }
}
import /* [auto-meaningful-name] */$$_80_index = require("../80/index")
var k = []
var S = new RegExp("".concat("ant-scrolling-effect"), "g")
var T = 0
var B = new Map()
var D = function e(t) {
  var n = this
  $$_95.a(this, e)
  this.lockTarget = undefined
  this.options = undefined
  this.getContainer = function () {
    var /* [auto-meaningful-name] */n$options
    return null === (n$options = n.options) || undefined === n$options ? undefined : n$options.container
  }
  this.reLock = function (e) {
    var t = k.find(function (e) {
      return e.target === n.lockTarget
    })
    if (t) {
      n.unLock()
    }
    n.options = e
    if (t) {
      t.options = e
      n.lock()
    }
  }
  this.lock = function () {
    var /* [auto-meaningful-name] */n$options
    if (!k.some(function (e) {
      return e.target === n.lockTarget
    })) {
      if (k.some(function (e) {
        var /* [auto-meaningful-name] */_n$options
        var /* [auto-meaningful-name] */e$options = e.options
        return (null === e$options || undefined === e$options ? undefined : e$options.container) === (null === (_n$options = n.options) || undefined === _n$options ? undefined : _n$options.container)
      })) {
        k = [].concat($$_80_index.a(k), [{
          target: n.lockTarget,
          options: n.options
        }])
      } else {
        var t = 0
        var r = (null === (n$options = n.options) || undefined === n$options ? undefined : n$options.container) || document.body
        if (r === document.body && window.innerWidth - document.documentElement.clientWidth > 0 || r.scrollHeight > r.clientHeight) {
          t = w()
        }
        var /* [auto-meaningful-name] */r$className = r.className
        if (0 === k.filter(function (e) {
          var /* [auto-meaningful-name] */_n$options2
          var /* [auto-meaningful-name] */e$options = e.options
          return (null === e$options || undefined === e$options ? undefined : e$options.container) === (null === (_n$options2 = n.options) || undefined === _n$options2 ? undefined : _n$options2.container)
        }).length) {
          B.set(r, E({
            width: 0 !== t ? "calc(100% - ".concat(t, "px)") : undefined,
            overflow: "hidden",
            overflowX: "hidden",
            overflowY: "hidden"
          }, {
            element: r
          }))
        }
        if (!S.test(r$className)) {
          var o = "".concat(r$className, " ").concat("ant-scrolling-effect")
          r.className = o.trim()
        }
        k = [].concat($$_80_index.a(k), [{
          target: n.lockTarget,
          options: n.options
        }])
      }
    }
  }
  this.unLock = function () {
    var /* [auto-meaningful-name] */n$options
    var t = k.find(function (e) {
      return e.target === n.lockTarget
    })
    k = k.filter(function (e) {
      return e.target !== n.lockTarget
    })
    if (t && !k.some(function (e) {
      var /* [auto-meaningful-name] */t$options
      var /* [auto-meaningful-name] */e$options = e.options
      return (null === e$options || undefined === e$options ? undefined : e$options.container) === (null === (t$options = t.options) || undefined === t$options ? undefined : t$options.container)
    })) {
      var r = (null === (n$options = n.options) || undefined === n$options ? undefined : n$options.container) || document.body
      var /* [auto-meaningful-name] */r$className = r.className
      if (S.test(r$className)) {
        E(B.get(r), {
          element: r
        })
        B.delete(r)
        r.className = r.className.replace(S, "").trim()
      }
    }
  }
  this.lockTarget = T++
  this.options = t
}
var I = 0
var F = m()
var R = {}
var P = function (e) {
  if (!F) {
    return null
  }
  if (e) {
    if ("string" === typeof e) {
      return document.querySelectorAll(e)[0]
    }
    if ("function" === typeof e) {
      return e()
    }
    if ("object" === $$_108.a(e) && e instanceof window.HTMLElement) {
      return e
    }
  }
  return document.body
}
var N = function (e) {
  $$_120.a(n, e)
  var t = $$_140.a(n)
  function n(e) {
    var r
    $$_95.a(this, n);
    (r = t.call(this, e)).container = undefined
    r.componentRef = React.createRef()
    r.rafId = undefined
    r.scrollLocker = undefined
    r.renderComponent = undefined
    r.updateScrollLocker = function (e) {
      var /* [auto-meaningful-name] */E$visible = (e || {}).visible
      var /* [auto-meaningful-name] */r$props = r.props
      var /* [auto-meaningful-name] */r$props$getContainer = r$props.getContainer
      var /* [auto-meaningful-name] */r$props$visible = r$props.visible
      if (r$props$visible && r$props$visible !== E$visible && F && P(r$props$getContainer) !== r.scrollLocker.getContainer()) {
        r.scrollLocker.reLock({
          container: P(r$props$getContainer)
        })
      }
    }
    r.updateOpenCount = function (e) {
      var t = e || {}
      var /* [auto-meaningful-name] */t$visible = t.visible
      var /* [auto-meaningful-name] */t$getContainer = t.getContainer
      var /* [auto-meaningful-name] */r$props = r.props
      var /* [auto-meaningful-name] */r$props$visible = r$props.visible
      var /* [auto-meaningful-name] */r$props$getContainer = r$props.getContainer
      if (r$props$visible !== t$visible && F && P(r$props$getContainer) === document.body) {
        if (r$props$visible && !t$visible) {
          I += 1
        } else {
          if (e) {
            I -= 1
          }
        }
      }
      if ("function" === typeof r$props$getContainer && "function" === typeof t$getContainer ? r$props$getContainer.toString() !== t$getContainer.toString() : r$props$getContainer !== t$getContainer) {
        r.removeCurrentContainer()
      }
    }
    r.attachToParent = function () {
      var e = arguments.length > 0 && undefined !== arguments[0] && arguments[0]
      if (e || r.container && !r.container.parentNode) {
        var t = P(r.props.getContainer)
        return !!t && (t.appendChild(r.container), true)
      }
      return true
    }
    r.getContainer = function () {
      return F ? (r.container || (r.container = document.createElement("div"), r.attachToParent(true)), r.setWrapperClassName(), r.container) : null
    }
    r.setWrapperClassName = function () {
      var /* [auto-meaningful-name] */r$props$wrapperClassName = r.props.wrapperClassName
      if (r.container && r$props$wrapperClassName && r$props$wrapperClassName !== r.container.className) {
        r.container.className = r$props$wrapperClassName
      }
    }
    r.removeCurrentContainer = function () {
      var /* [auto-meaningful-name] */r$container
      var /* [auto-meaningful-name] */r$container$parentNode
      if (!(null === (r$container = r.container) || undefined === r$container || null === (r$container$parentNode = r$container.parentNode) || undefined === r$container$parentNode)) {
        r$container$parentNode.removeChild(r.container)
      }
    }
    r.switchScrollingEffect = function () {
      if (1 !== I || Object.keys(R).length) {
        if (!I) {
          E(R)
          R = {}
          C(true)
        }
      } else {
        C()
        R = E({
          overflow: "hidden",
          overflowX: "hidden",
          overflowY: "hidden"
        })
      }
    }
    r.scrollLocker = new D({
      container: P(e.getContainer)
    })
    return r
  }
  $$_96.a(n, [{
    key: "componentDidMount",
    value: function () {
      var e = this
      this.updateOpenCount()
      if (!this.attachToParent()) {
        this.rafId = A(function () {
          e.forceUpdate()
        })
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function (e) {
      this.updateOpenCount(e)
      this.updateScrollLocker(e)
      this.setWrapperClassName()
      this.attachToParent()
    }
  }, {
    key: "componentWillUnmount",
    value: function () {
      var /* [auto-meaningful-name] */this$props = this.props
      var /* [auto-meaningful-name] */this$props$visible = this$props.visible
      var /* [auto-meaningful-name] */this$props$getContainer = this$props.getContainer
      if (F && P(this$props$getContainer) === document.body) {
        I = this$props$visible && I ? I - 1 : I
      }
      this.removeCurrentContainer()
      A.cancel(this.rafId)
    }
  }, {
    key: "render",
    value: function () {
      var /* [auto-meaningful-name] */this$props = this.props
      var /* [auto-meaningful-name] */this$props$children = this$props.children
      var /* [auto-meaningful-name] */this$props$forceRender = this$props.forceRender
      var /* [auto-meaningful-name] */this$props$visible = this$props.visible
      var i = null
      var a = {
        getOpenCount: function () {
          return I
        },
        getContainer: this.getContainer,
        switchScrollingEffect: this.switchScrollingEffect,
        scrollLocker: this.scrollLocker
      }
      if (this$props$forceRender || this$props$visible || this.componentRef.current) {
        i = React.createElement(b, {
          getContainer: this.getContainer,
          ref: this.componentRef
        }, this$props$children(a))
      }
      return i
    }
  }])
  return n
}(React.Component)
import /* [auto-meaningful-name] */$$_20 = require("../20")
import j = require("../8")
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
}(j)
var U = {
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
    if (e.altKey && !e.ctrlKey || e.metaKey || e$keyCode >= U.F1 && e$keyCode <= U.F12) {
      return false
    }
    switch (e$keyCode) {
      case U.ALT:
      case U.CAPS_LOCK:
      case U.CONTEXT_MENU:
      case U.CTRL:
      case U.DOWN:
      case U.END:
      case U.ESC:
      case U.HOME:
      case U.INSERT:
      case U.LEFT:
      case U.MAC_FF_META:
      case U.META:
      case U.NUMLOCK:
      case U.NUM_CENTER:
      case U.PAGE_DOWN:
      case U.PAGE_UP:
      case U.PAUSE:
      case U.PRINT_SCREEN:
      case U.RIGHT:
      case U.SHIFT:
      case U.UP:
      case U.WIN_KEY:
      case U.WIN_KEY_RIGHT:
        return false
      default:
        return true
    }
  },
  isCharacterKey: function (e) {
    if (e >= U.ZERO && e <= U.NINE) {
      return true
    }
    if (e >= U.NUM_ZERO && e <= U.NUM_MULTIPLY) {
      return true
    }
    if (e >= U.A && e <= U.Z) {
      return true
    }
    if (-1 !== window.navigator.userAgent.indexOf("WebKit") && 0 === e) {
      return true
    }
    switch (e) {
      case U.SPACE:
      case U.QUESTION_MARK:
      case U.NUM_PLUS:
      case U.NUM_MINUS:
      case U.NUM_PERIOD:
      case U.NUM_DIVISION:
      case U.SEMICOLON:
      case U.DASH:
      case U.EQUALS:
      case U.COMMA:
      case U.PERIOD:
      case U.SLASH:
      case U.APOSTROPHE:
      case U.SINGLE_QUOTE:
      case U.OPEN_SQUARE_BRACKET:
      case U.BACKSLASH:
      case U.CLOSE_SQUARE_BRACKET:
        return true
      default:
        return false
    }
  }
}
var H = U
var V = "".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap", " ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/)
function G(e, t) {
  return 0 === e.indexOf(t)
}
import /* [auto-meaningful-name] */$$_29 = require("../29")
require("../242/index")
function Q(e, t) {
  if ("function" === typeof e) {
    e(t)
  } else {
    if ("object" === $$_108.a(e) && e && "current" in e) {
      e.current = t
    }
  }
}
function W(e, t) {
  var n = {}
  n[e.toLowerCase()] = t.toLowerCase()
  n["Webkit".concat(e)] = "webkit".concat(t)
  n["Moz".concat(e)] = "moz".concat(t)
  n["ms".concat(e)] = "MS".concat(t)
  n["O".concat(e)] = "o".concat(t.toLowerCase())
  return n
}
var K = function (e, t) {
  var n = {
    animationend: W("Animation", "AnimationEnd"),
    transitionend: W("Transition", "TransitionEnd")
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
}(m(), "undefined" !== typeof window ? window : {})
var X = {}
if (m()) {
  var Y = document.createElement("div")
  X = Y.style
}
var q = {}
function $(e) {
  if (q[e]) {
    return q[e]
  }
  var t = K[e]
  if (t) {
    for (var n = Object.keys(t), /* [auto-meaningful-name] */n$length = n.length, i = 0; i < n$length; i += 1) {
      var o = n[i]
      if (Object.prototype.hasOwnProperty.call(t, o) && o in X) {
        q[e] = t[o]
        return q[e]
      }
    }
  }
  return ""
}
var J = $("animationend")
var Z = $("transitionend")
var ee = !(!J || !Z)
var te = J || "animationend"
var ne = Z || "transitionend"
function re(e, t) {
  return e ? "object" === $$_108.a(e) ? e[t.replace(/-\w/g, function (e) {
    return e[1].toUpperCase()
  })] : "".concat(e, "-").concat(t) : null
}
function ie(e) {
  var t = React.useRef(false)
  var n = React.useState(e)
  var r = $$_33_index.a(n, 2)
  var a = r[0]
  var s = r[1]
  React.useEffect(function () {
    return function () {
      t.current = true
    }
  }, [])
  return [a, function (e) {
    if (!t.current) {
      s(e)
    }
  }]
}
var oe = m() ? React.useLayoutEffect : React.useEffect
var ae = ["prepare", "start", "active", "end"]
function se(e) {
  return "active" === e || "end" === e
}
var ce = function (e, t) {
  var n = React.useState("none")
  var r = $$_33_index.a(n, 2)
  var a = r[0]
  var s = r[1]
  var c = function () {
    var e = React.useRef(null)
    function t() {
      A.cancel(e.current)
    }
    React.useEffect(function () {
      return function () {
        t()
      }
    }, [])
    return [function n(r) {
      var i = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 2
      t()
      var o = A(function () {
        if (i <= 1) {
          r({
            isCanceled: function () {
              return o !== e.current
            }
          })
        } else {
          n(r, i - 1)
        }
      })
      e.current = o
    }, t]
  }()
  var u = $$_33_index.a(c, 2)
  var l = u[0]
  var f = u[1]
  oe(function () {
    if ("none" !== a && "end" !== a) {
      var e = ae.indexOf(a)
      var n = ae[e + 1]
      var r = t(a)
      if (false === r) {
        s(n)
      } else {
        l(function (e) {
          function t() {
            if (!e.isCanceled()) {
              s(n)
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
  }, [e, a])
  React.useEffect(function () {
    return function () {
      f()
    }
  }, [])
  return [function () {
    s("prepare")
  }, a]
}
function ue(e, t, n, r) {
  var /* [auto-meaningful-name] */r$motionEnter = r.motionEnter
  var s = undefined === r$motionEnter || r$motionEnter
  var /* [auto-meaningful-name] */r$motionAppear = r.motionAppear
  var u = undefined === r$motionAppear || r$motionAppear
  var /* [auto-meaningful-name] */r$motionLeave = r.motionLeave
  var f = undefined === r$motionLeave || r$motionLeave
  var /* [auto-meaningful-name] */r$motionDeadline = r.motionDeadline
  var /* [auto-meaningful-name] */r$motionLeaveImmediately = r.motionLeaveImmediately
  var /* [auto-meaningful-name] */r$onAppearPrepare = r.onAppearPrepare
  var /* [auto-meaningful-name] */r$onEnterPrepare = r.onEnterPrepare
  var /* [auto-meaningful-name] */r$onLeavePrepare = r.onLeavePrepare
  var /* [auto-meaningful-name] */r$onAppearStart = r.onAppearStart
  var /* [auto-meaningful-name] */r$onEnterStart = r.onEnterStart
  var /* [auto-meaningful-name] */r$onLeaveStart = r.onLeaveStart
  var /* [auto-meaningful-name] */r$onAppearActive = r.onAppearActive
  var /* [auto-meaningful-name] */r$onEnterActive = r.onEnterActive
  var /* [auto-meaningful-name] */r$onLeaveActive = r.onLeaveActive
  var /* [auto-meaningful-name] */r$onAppearEnd = r.onAppearEnd
  var /* [auto-meaningful-name] */r$onEnterEnd = r.onEnterEnd
  var /* [auto-meaningful-name] */r$onLeaveEnd = r.onLeaveEnd
  var /* [auto-meaningful-name] */r$onVisibleChanged = r.onVisibleChanged
  var k = ie()
  var S = $$_33_index.a(k, 2)
  var T = S[0]
  var B = S[1]
  var D = ie("none")
  var I = $$_33_index.a(D, 2)
  var F = I[0]
  var R = I[1]
  var P = ie(null)
  var N = $$_33_index.a(P, 2)
  var j = N[0]
  var L = N[1]
  var U = React.useRef(false)
  var H = React.useRef(null)
  var V = React.useRef(false)
  var G = React.useRef(null)
  function Q() {
    return n() || G.current
  }
  var W = React.useRef(false)
  function K(e) {
    var t
    var n = Q()
    if (!(e && !e.deadline && e.target !== n)) {
      if ("appear" === F && W.current) {
        t = null === r$onAppearEnd || undefined === r$onAppearEnd ? undefined : r$onAppearEnd(n, e)
      } else {
        if ("enter" === F && W.current) {
          t = null === r$onEnterEnd || undefined === r$onEnterEnd ? undefined : r$onEnterEnd(n, e)
        } else {
          if ("leave" === F && W.current) {
            t = null === r$onLeaveEnd || undefined === r$onLeaveEnd ? undefined : r$onLeaveEnd(n, e)
          }
        }
      }
      if (!(false === t || V.current)) {
        R("none")
        L(null)
      }
    }
  }
  var X = function (e) {
    var t = React.useRef()
    var n = React.useRef(e)
    n.current = e
    var r = React.useCallback(function (e) {
      n.current(e)
    }, [])
    function i(e) {
      if (e) {
        e.removeEventListener(ne, r)
        e.removeEventListener(te, r)
      }
    }
    React.useEffect(function () {
      return function () {
        i(t.current)
      }
    }, [])
    return [function (e) {
      if (t.current && t.current !== e) {
        i(t.current)
      }
      if (e && e !== t.current) {
        e.addEventListener(ne, r)
        e.addEventListener(te, r)
        t.current = e
      }
    }, i]
  }(K)
  var Y = $$_33_index.a(X, 1)[0]
  var q = React.useMemo(function () {
    var e
    var t
    var n
    switch (F) {
      case "appear":
        e = {}
        $$_29.a(e, "prepare", r$onAppearPrepare)
        $$_29.a(e, "start", r$onAppearStart)
        $$_29.a(e, "active", r$onAppearActive)
        return e
      case "enter":
        t = {}
        $$_29.a(t, "prepare", r$onEnterPrepare)
        $$_29.a(t, "start", r$onEnterStart)
        $$_29.a(t, "active", r$onEnterActive)
        return t
      case "leave":
        n = {}
        $$_29.a(n, "prepare", r$onLeavePrepare)
        $$_29.a(n, "start", r$onLeaveStart)
        $$_29.a(n, "active", r$onLeaveActive)
        return n
      default:
        return {}
    }
  }, [F])
  var $ = ce(F, function (e) {
    if ("prepare" === e) {
      var /* [auto-meaningful-name] */q$prepare = q.prepare
      return !!q$prepare && q$prepare(Q())
    }
    var n
    if (ee in q) {
      L((null === (n = q[ee]) || undefined === n ? undefined : n.call(q, Q(), null)) || null)
    }
    if ("active" === ee) {
      Y(Q())
      if (r$motionDeadline > 0) {
        clearTimeout(H.current)
        H.current = setTimeout(function () {
          K({
            deadline: true
          })
        }, r$motionDeadline)
      }
    }
    return true
  })
  var J = $$_33_index.a($, 2)
  var Z = J[0]
  var ee = J[1]
  var re = se(ee)
  W.current = re
  oe(function () {
    B(t)
    var n
    var /* [auto-meaningful-name] */U$current = U.current
    U.current = true
    if (e) {
      if (!U$current && t && u) {
        n = "appear"
      }
      if (U$current && t && s) {
        n = "enter"
      }
      if (U$current && !t && f || !U$current && r$motionLeaveImmediately && !t && f) {
        n = "leave"
      }
      if (n) {
        R(n)
        Z()
      }
    }
  }, [t])
  React.useEffect(function () {
    if ("appear" === F && !u || "enter" === F && !s || "leave" === F && !f) {
      R("none")
    }
  }, [u, s, f])
  React.useEffect(function () {
    return function () {
      clearTimeout(H.current)
      V.current = true
    }
  }, [])
  React.useEffect(function () {
    if (undefined !== T && "none" === F) {
      if (!(null === r$onVisibleChanged || undefined === r$onVisibleChanged)) {
        r$onVisibleChanged(T)
      }
    }
  }, [T, F])
  var ae = j
  if (q.prepare && "start" === ee) {
    ae = $$_20.a({
      transition: "none"
    }, ae)
  }
  return [F, ee, ae, null !== T && undefined !== T ? T : t]
}
var le = function (e) {
  $$_120.a(n, e)
  var t = $$_140.a(n)
  function n() {
    $$_95.a(this, n)
    return t.apply(this, arguments)
  }
  $$_96.a(n, [{
    key: "render",
    value: function () {
      return this.props.children
    }
  }])
  return n
}(React.Component)
var fe = function (e) {
  var t = e
  function n(e) {
    return !(!e.motionName || !t)
  }
  if ("object" === $$_108.a(e)) {
    t = e.transitionSupport
  }
  var r = React.forwardRef(function (e, t) {
    var /* [auto-meaningful-name] */e$visible = e.visible
    var a = undefined === e$visible || e$visible
    var /* [auto-meaningful-name] */e$removeOnLeave = e.removeOnLeave
    var c = undefined === e$removeOnLeave || e$removeOnLeave
    var /* [auto-meaningful-name] */e$forceRender = e.forceRender
    var /* [auto-meaningful-name] */e$children = e.children
    var /* [auto-meaningful-name] */e$motionName = e.motionName
    var /* [auto-meaningful-name] */e$leavedClassName = e.leavedClassName
    var /* [auto-meaningful-name] */e$eventProps = e.eventProps
    var p = n(e)
    var _ = React.useRef()
    var A = React.useRef()
    var g = ue(p, a, function () {
      try {
        return (e = _.current || A.current) instanceof HTMLElement ? e : v.a.findDOMNode(e)
      } catch (t) {
        return null
      }
      var e
    }, e)
    var m = $$_33_index.a(g, 4)
    var y = m[0]
    var b = m[1]
    var w = m[2]
    var E = m[3]
    var x = React.useRef(E)
    if (E) {
      x.current = true
    }
    var C = React.useRef(t)
    C.current = t
    var O
    var k = React.useCallback(function (e) {
      _.current = e
      Q(C.current, e)
    }, [])
    var S = $$_20.a($$_20.a({}, e$eventProps), {}, {
      visible: a
    })
    if (e$children) {
      if ("none" !== y && n(e)) {
        var T
        var B
        if ("prepare" === b) {
          B = "prepare"
        } else {
          if (se(b)) {
            B = "active"
          } else {
            if ("start" === b) {
              B = "start"
            }
          }
        }
        O = e$children($$_20.a($$_20.a({}, S), {}, {
          className: L()(re(e$motionName, y), (T = {}, $$_29.a(T, re(e$motionName, "".concat(y, "-").concat(B)), B), $$_29.a(T, e$motionName, "string" === typeof e$motionName), T)),
          style: w
        }), k)
      } else {
        O = E ? e$children($$_20.a({}, S), k) : !c && x.current ? e$children($$_20.a($$_20.a({}, S), {}, {
          className: e$leavedClassName
        }), k) : e$forceRender ? e$children($$_20.a($$_20.a({}, S), {}, {
          style: {
            display: "none"
          }
        }), k) : null
      }
    } else {
      O = null
    }
    return React.createElement(le, {
      ref: A
    }, O)
  })
  r.displayName = "CSSMotion"
  return r
}(ee)
import /* [auto-meaningful-name] */$$_54 = require("../54")
function he(e) {
  var t
  t = e && "object" === $$_108.a(e) && "key" in e ? e : {
    key: e
  }
  return $$_20.a($$_20.a({}, t), {}, {
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
            return $$_20.a($$_20.a({}, e), {}, {
              status: "add"
            })
          }))
          r = o
        }
        n.push($$_20.a($$_20.a({}, s), {}, {
          status: "keep"
        }))
        r += 1
        t = true
        break
      }
    }
    if (!t) {
      n.push($$_20.a($$_20.a({}, e), {}, {
        status: "remove"
      }))
    }
  })
  if (r < t$length) {
    n = n.concat(a.slice(r).map(function (e) {
      return $$_20.a($$_20.a({}, e), {}, {
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
      $$_95.a(this, i);
      (e = n.apply(this, arguments)).state = {
        keyEntities: []
      }
      e.removeKey = function (t) {
        e.setState(function (e) {
          return {
            keyEntities: e.keyEntities.map(function (e) {
              return e.key !== t ? e : $$_20.a($$_20.a({}, e), {}, {
                status: "removed"
              })
            })
          }
        })
      }
      return e
    }
    $$_96.a(i, [{
      key: "render",
      value: function () {
        var e = this
        var /* [auto-meaningful-name] */this$state$keyEntities = this.state.keyEntities
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$component = this$props.component
        var /* [auto-meaningful-name] */this$props$children = this$props.children
        var /* [auto-meaningful-name] */this$props$onVisibleChanged = this$props.onVisibleChanged
        var u = $$_54.a(this$props, ["component", "children", "onVisibleChanged"])
        var l = this$props$component || React.Fragment
        var f = {}
        Ae.forEach(function (e) {
          f[e] = u[e]
          delete u[e]
        })
        delete u.keys
        return React.createElement(l, u, this$state$keyEntities.map(function (n) {
          var /* [auto-meaningful-name] */n$status = n.status
          var a = $$_54.a(n, ["status"])
          var u = "add" === n$status || "keep" === n$status
          return React.createElement(t, $$_19.a({}, f, {
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
    }], [{
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
    }])
    return i
  }(React.Component)
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
  return React.createElement(ge, {
    key: "mask",
    visible: e$visible,
    motionName: e$motionName,
    leavedClassName: "".concat(e$prefixCls, "-mask-hidden")
  }, function (e) {
    var /* [auto-meaningful-name] */e$className = e.className
    var /* [auto-meaningful-name] */_e$style = e.style
    return React.createElement("div", $$_19.a({
      style: $$_20.a($$_20.a({}, _e$style), e$style),
      className: L()("".concat(e$prefixCls, "-mask"), e$className)
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
var we = React.memo(function (e) {
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
var xe = React.forwardRef(function (e, t) {
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
  var S = React.useRef()
  var T = React.useRef()
  var B = React.useRef()
  React.useImperativeHandle(t, function () {
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
  var F
  var R = React.useState()
  var P = $$_33_index.a(R, 2)
  var N = P[0]
  var j = P[1]
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
    j(e$mousePosition ? "".concat(e$mousePosition.x - e.left, "px ").concat(e$mousePosition.y - e.top, "px") : "")
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
    D = React.createElement("div", {
      className: "".concat(e$prefixCls, "-footer")
    }, e$footer)
  }
  if (e$title) {
    I = React.createElement("div", {
      className: "".concat(e$prefixCls, "-header")
    }, React.createElement("div", {
      className: "".concat(e$prefixCls, "-title"),
      id: e$ariaId
    }, e$title))
  }
  if (e$closable) {
    F = React.createElement("button", {
      type: "button",
      onClick: e$onClose,
      "aria-label": "Close",
      className: "".concat(e$prefixCls, "-close")
    }, e$closeIcon || React.createElement("span", {
      className: "".concat(e$prefixCls, "-close-x")
    }))
  }
  var V = React.createElement("div", {
    className: "".concat(e$prefixCls, "-content")
  }, F, I, React.createElement("div", $$_19.a({
    className: "".concat(e$prefixCls, "-body"),
    style: e$bodyStyle
  }, e$bodyProps), e$children), D)
  return React.createElement(ge, {
    visible: e$visible,
    onVisibleChanged: e$onVisibleChanged,
    onAppearPrepare: H,
    onEnterPrepare: H,
    forceRender: e$forceRender,
    motionName: e$motionName,
    removeOnLeave: e$destroyOnClose,
    ref: B
  }, function (e, t) {
    var /* [auto-meaningful-name] */_e$className = e.className
    var /* [auto-meaningful-name] */_e$style2 = e.style
    return React.createElement("div", {
      key: "dialog-element",
      role: "document",
      ref: t,
      style: $$_20.a($$_20.a($$_20.a({}, _e$style2), e$style), U),
      className: L()(e$prefixCls, e$className, _e$className),
      onMouseDown: e$onMouseDown,
      onMouseUp: e$onMouseUp
    }, React.createElement("div", {
      tabIndex: 0,
      ref: S,
      style: Ee,
      "aria-hidden": "true"
    }), React.createElement(we, {
      shouldUpdate: e$visible || e$forceRender
    }, e$modalRender ? e$modalRender(V) : V), React.createElement("div", {
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
  var I = React.useRef()
  var F = React.useRef()
  var R = React.useRef()
  var P = React.useState(c)
  var N = $$_33_index.a(P, 2)
  var j = N[0]
  var U = N[1]
  var z = React.useRef()
  function Q(e) {
    if (!(null === e$onClose || undefined === e$onClose)) {
      e$onClose(e)
    }
  }
  if (!z.current) {
    z.current = "rcDialogTitle".concat(ye += 1)
  }
  var W = React.useRef(false)
  var K = React.useRef()
  var X = null
  if (T) {
    X = function (e) {
      if (W.current) {
        W.current = false
      } else {
        if (F.current === e.target) {
          Q(e)
        }
      }
    }
  }
  React.useEffect(function () {
    if (c) {
      U(true)
    }
    return function () {}
  }, [c])
  React.useEffect(function () {
    return function () {
      clearTimeout(K.current)
    }
  }, [])
  React.useEffect(function () {
    return j ? (null === e$scrollLocker || undefined === e$scrollLocker || e$scrollLocker.lock(), null === e$scrollLocker || undefined === e$scrollLocker ? undefined : e$scrollLocker.unLock) : function () {}
  }, [j, e$scrollLocker])
  return React.createElement("div", $$_19.a({
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
    } : $$_20.a({}, n)
    var r = {}
    Object.keys(e).forEach(function (n) {
      if (t.aria && ("role" === n || G(n, "aria-")) || t.data && G(n, "data-") || t.attr && V.includes(n)) {
        r[n] = e[n]
      }
    })
    return r
  }(e, {
    data: true
  })), React.createElement(ve, {
    prefixCls: n,
    visible: C && c,
    motionName: me(n, e$maskTransitionName, e$maskAnimation),
    style: $$_20.a({
      zIndex: e$zIndex
    }, e$maskStyle),
    maskProps: e$maskProps
  }), React.createElement("div", $$_19.a({
    tabIndex: -1,
    onKeyDown: function (e) {
      if (l && e.keyCode === H.ESC) {
        e.stopPropagation()
        return void Q(e)
      }
      if (c && e.keyCode === H.TAB) {
        R.current.changeActive(!e.shiftKey)
      }
    },
    className: L()("".concat(n, "-wrap"), e$wrapClassName),
    ref: F,
    onClick: X,
    role: "dialog",
    "aria-labelledby": e$title ? z.current : null,
    style: $$_20.a($$_20.a({
      zIndex: e$zIndex
    }, e$wrapStyle), {}, {
      display: j ? null : "none"
    })
  }, e$wrapProps), React.createElement(Ce, $$_19.a({}, e, {
    onMouseDown: function () {
      clearTimeout(K.current)
      W.current = true
    },
    onMouseUp: function () {
      K.current = setTimeout(function () {
        W.current = false
      })
    },
    ref: R,
    closable: E,
    ariaId: z.current,
    prefixCls: n,
    visible: c,
    onClose: Q,
    onVisibleChanged: function (e) {
      if (e) {
        var /* [auto-meaningful-name] */R$current
        if (!function (e, t) {
          return !!e && e.contains(t)
        }(F.current, document.activeElement)) {
          I.current = document.activeElement
          if (!(null === (R$current = R.current) || undefined === R$current)) {
            R$current.focus()
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
        if (j) {
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
  var l = React.useState(e$visible)
  var f = $$_33_index.a(l, 2)
  var d = f[0]
  var h = f[1]
  React.useEffect(function () {
    if (e$visible) {
      h(true)
    }
  }, [e$visible])
  return false === e$getContainer ? React.createElement(Oe, $$_19.a({}, e, {
    getOpenCount: function () {
      return 2
    }
  })) : e$forceRender || !c || d ? React.createElement(N, {
    visible: e$visible,
    forceRender: e$forceRender,
    getContainer: e$getContainer
  }, function (t) {
    return React.createElement(Oe, $$_19.a({}, e, {
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
export { Se as a }
export default Se
