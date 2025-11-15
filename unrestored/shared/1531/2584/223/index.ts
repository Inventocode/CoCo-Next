/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：223
 */

"use strict"

import /* [auto-meaningful-name] */$$_20 = require("../20")
import /* [auto-meaningful-name] */$$_33_index = require("../33/index")
import /* [auto-meaningful-name] */$$_29 = require("../29")
import /* [auto-meaningful-name] */$$_54 = require("../54")
import /* [auto-meaningful-name] */React = require("react")
var c = function __importDefault(module) {
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
import u = require("../8")
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
}(u)
import /* [auto-meaningful-name] */$_780 = require("./780")
import /* [auto-meaningful-name] */$$_108 = require("../108")
import /* [auto-meaningful-name] */$_911 = require("./911")
var p = {}
function _(e, t) {
  0
}
function A(e, t, n) {
  if (!(t || p[n])) {
    e(false, n)
    p[n] = true
  }
}
var g = function (e, t) {
  A(_, e, t)
}
function v() {
  return !("undefined" === typeof window || !window.document || !window.document.createElement)
}
function m(e) {
  return e.attachTo ? e.attachTo : document.querySelector("head") || document.body
}
function y(e) {
  var /* [auto-meaningful-name] */n$csp
  var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {}
  if (!v()) {
    return null
  }
  var /* [auto-meaningful-name] */_n$csp
  var i = document.createElement("style")
  if (null === (n$csp = n.csp) || undefined === n$csp ? undefined : n$csp.nonce) {
    i.nonce = null === (_n$csp = n.csp) || undefined === _n$csp ? undefined : _n$csp.nonce
  }
  i.innerHTML = e
  var o = m(n)
  var /* [auto-meaningful-name] */o$firstChild = o.firstChild
  if (n.prepend && o.prepend) {
    o.prepend(i)
  } else {
    if (n.prepend && o$firstChild) {
      o.insertBefore(i, o$firstChild)
    } else {
      o.appendChild(i)
    }
  }
  return i
}
var b = new Map()
function w(e, t) {
  var n = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : {}
  var r = m(n)
  if (!b.has(r)) {
    var i = y("", n)
    var /* [auto-meaningful-name] */i$parentNode = i.parentNode
    b.set(r, i$parentNode)
    i$parentNode.removeChild(i)
  }
  var a = Array.from(b.get(r).children).find(function (e) {
    return "STYLE" === e.tagName && e["rc-util-key"] === t
  })
  if (a) {
    var /* [auto-meaningful-name] */n$csp
    var /* [auto-meaningful-name] */_n$csp2
    var /* [auto-meaningful-name] */_n$csp3
    if ((null === (n$csp = n.csp) || undefined === n$csp ? undefined : n$csp.nonce) && a.nonce !== (null === (_n$csp2 = n.csp) || undefined === _n$csp2 ? undefined : _n$csp2.nonce)) {
      a.nonce = null === (_n$csp3 = n.csp) || undefined === _n$csp3 ? undefined : _n$csp3.nonce
    }
    if (a.innerHTML !== e) {
      a.innerHTML = e
    }
    return a
  }
  var l = y(e, n)
  l["rc-util-key"] = t
  return l
}
function E(e) {
  return "object" === $$_108.a(e) && "string" === typeof e.name && "string" === typeof e.theme && ("object" === $$_108.a(e.icon) || "function" === typeof e.icon)
}
function x() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {}
  return Object.keys(e).reduce(function (t, n) {
    var r = e[n]
    switch (n) {
      case "class":
        t.className = r
        delete t.class
        break
      default:
        t[n] = r
    }
    return t
  }, {})
}
function C(e) {
  return $_911.a(e)[0]
}
function O(e) {
  return e ? Array.isArray(e) ? e : [e] : []
}
var /* [auto-meaningful-name] */_n$anticon_nDisplayInlineBlock_nColorInherit_nFontStyleNormal_nLineHeight0_nTextAlignCenter_nTextTransformNone_nVerticalAlign0$125em_nTextRenderingOptimizeLegibility_nWebkitFontSmoothingAntialiased_nMozOsxFontSmoothingGrayscale_n_n_n$anticon_nLineHeight1_n_n_n$anticonSvg_nDisplayInlineBlock_n_n_n$anticonBefore_nDisplayNone_n_n_n$anticon$anticonIcon_nDisplayBlock_n_n_n$anticonTabindex_nCursorPointer_n_n_n$anticonSpinBefore_n$anticonSpin_nDisplayInlineBlock_nWebkitAnimationLoadingCircle1sInfiniteLinear_nAnimationLoadingCircle1sInfiniteLinear_n_n_nWebkitKeyframesLoadingCircle_n100_nWebkitTransformRotate360deg_nTransformRotate360deg_n_n_n_nKeyframesLoadingCircle_n100_nWebkitTransformRotate360deg_nTransformRotate360deg_n_n_n = "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n"
var S = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"]
var T = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: false
}
var B = function (e) {
  var t
  var n
  var /* [auto-meaningful-name] */e$icon = e.icon
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var /* [auto-meaningful-name] */e$style = e.style
  var /* [auto-meaningful-name] */e$primaryColor = e.primaryColor
  var /* [auto-meaningful-name] */e$secondaryColor = e.secondaryColor
  var p = $$_54.a(e, S)
  var _ = T
  if (e$primaryColor) {
    _ = {
      primaryColor: e$primaryColor,
      secondaryColor: e$secondaryColor || C(e$primaryColor)
    }
  }
  (function () {
    var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : _n$anticon_nDisplayInlineBlock_nColorInherit_nFontStyleNormal_nLineHeight0_nTextAlignCenter_nTextTransformNone_nVerticalAlign0$125em_nTextRenderingOptimizeLegibility_nWebkitFontSmoothingAntialiased_nMozOsxFontSmoothingGrayscale_n_n_n$anticon_nLineHeight1_n_n_n$anticonSvg_nDisplayInlineBlock_n_n_n$anticonBefore_nDisplayNone_n_n_n$anticon$anticonIcon_nDisplayBlock_n_n_n$anticonTabindex_nCursorPointer_n_n_n$anticonSpinBefore_n$anticonSpin_nDisplayInlineBlock_nWebkitAnimationLoadingCircle1sInfiniteLinear_nAnimationLoadingCircle1sInfiniteLinear_n_n_nWebkitKeyframesLoadingCircle_n100_nWebkitTransformRotate360deg_nTransformRotate360deg_n_n_n_nKeyframesLoadingCircle_n100_nWebkitTransformRotate360deg_nTransformRotate360deg_n_n_n
    var t = React.useContext($_780.a)
    var /* [auto-meaningful-name] */t$csp = t.csp
    React.useEffect(function () {
      w(e, "@ant-design-icons", {
        prepend: true,
        csp: t$csp
      })
    }, [])
  })()
  t = E(e$icon)
  n = "icon should be icon definiton, but got ".concat(e$icon)
  g(t, "[@ant-design/icons] ".concat(n))
  if (!E(e$icon)) {
    return null
  }
  var A = e$icon
  if (A && "function" === typeof A.icon) {
    A = $$_20.a($$_20.a({}, A), {}, {
      icon: A.icon(_.primaryColor, _.secondaryColor)
    })
  }
  return function e(t, n, i) {
    return i ? c.a.createElement(t.tag, $$_20.a($$_20.a({
      key: n
    }, x(t.attrs)), i), (t.children || []).map(function (r, i) {
      return e(r, "".concat(n, "-").concat(t.tag, "-").concat(i))
    })) : c.a.createElement(t.tag, $$_20.a({
      key: n
    }, x(t.attrs)), (t.children || []).map(function (r, i) {
      return e(r, "".concat(n, "-").concat(t.tag, "-").concat(i))
    }))
  }(A.icon, "svg-".concat(A.name), $$_20.a({
    className: e$className,
    onClick: e$onClick,
    style: e$style,
    "data-icon": A.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, p))
}
B.displayName = "IconReact"
B.getTwoToneColors = function () {
  return $$_20.a({}, T)
}
B.setTwoToneColors = function (e) {
  var /* [auto-meaningful-name] */e$primaryColor = e.primaryColor
  var /* [auto-meaningful-name] */e$secondaryColor = e.secondaryColor
  T.primaryColor = e$primaryColor
  T.secondaryColor = e$secondaryColor || C(e$primaryColor)
  T.calculated = !!e$secondaryColor
}
var D = B
function I(e) {
  var t = O(e)
  var n = $$_33_index.a(t, 2)
  var r = n[0]
  var o = n[1]
  return D.setTwoToneColors({
    primaryColor: r,
    secondaryColor: o
  })
}
var F = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"]
I("#1890ff")
var R = React.forwardRef(function (e, t) {
  var n
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$icon = e.icon
  var /* [auto-meaningful-name] */e$spin = e.spin
  var /* [auto-meaningful-name] */e$rotate = e.rotate
  var /* [auto-meaningful-name] */e$tabIndex = e.tabIndex
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var /* [auto-meaningful-name] */e$twoToneColor = e.twoToneColor
  var g = $$_54.a(e, F)
  var /* [auto-meaningful-name] */React$useContext$_780$a$prefixCls = React.useContext($_780.a).prefixCls
  var m = undefined === React$useContext$_780$a$prefixCls ? "anticon" : React$useContext$_780$a$prefixCls
  var y = l()(m, (n = {}, $$_29.a(n, "".concat(m, "-").concat(e$icon.name), !!e$icon.name), $$_29.a(n, "".concat(m, "-spin"), !!e$spin || "loading" === e$icon.name), n), e$className)
  var b = e$tabIndex
  if (undefined === b && e$onClick) {
    b = -1
  }
  var w = e$rotate ? {
    msTransform: "rotate(".concat(e$rotate, "deg)"),
    transform: "rotate(".concat(e$rotate, "deg)")
  } : undefined
  var E = O(e$twoToneColor)
  var x = $$_33_index.a(E, 2)
  var C = x[0]
  var k = x[1]
  return React.createElement("span", $$_20.a($$_20.a({
    role: "img",
    "aria-label": e$icon.name
  }, g), {}, {
    ref: t,
    tabIndex: b,
    onClick: e$onClick,
    className: y
  }), React.createElement(D, {
    icon: e$icon,
    primaryColor: C,
    secondaryColor: k,
    style: w
  }))
})
R.displayName = "AntdIcon"
R.getTwoToneColor = function () {
  var e = D.getTwoToneColors()
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor
}
R.setTwoToneColor = I
export { R as a }
export default R
