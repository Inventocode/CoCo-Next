/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：224
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_21 from "../21"
import * as /* [auto-meaningful-name] */$$_40_index from "../40/index"
import * as /* [auto-meaningful-name] */$$_35 from "../35"
import * as /* [auto-meaningful-name] */$$_54 from "../54"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from "react"
import * as u from "../8"
import l from "../8"
import * as /* [auto-meaningful-name] */$_792 from "./792"
import * as /* [auto-meaningful-name] */$$_107 from "../107"
import * as /* [auto-meaningful-name] */$_924_index from "./924/index"
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
  var /* [auto-meaningful-name] */n$csp1
  var i = document.createElement("style")
  if (null === (n$csp = n.csp) || undefined === n$csp ? undefined : n$csp.nonce) {
    i.nonce = null === (n$csp1 = n.csp) || undefined === n$csp1 ? undefined : n$csp1.nonce
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
    var /* [auto-meaningful-name] */n$csp1
    var /* [auto-meaningful-name] */n$csp2
    if ((null === (n$csp = n.csp) || undefined === n$csp ? undefined : n$csp.nonce) && a.nonce !== (null === (n$csp1 = n.csp) || undefined === n$csp1 ? undefined : n$csp1.nonce)) {
      a.nonce = null === (n$csp2 = n.csp) || undefined === n$csp2 ? undefined : n$csp2.nonce
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
  return "object" === $$_107.a(e) && "string" === typeof e.name && "string" === typeof e.theme && ("object" === $$_107.a(e.icon) || "function" === typeof e.icon)
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
  return $_924_index.a(e)[0]
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
    var t = React.useContext($_792.a)
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
    A = $$_21.a($$_21.a({}, A), {}, {
      icon: A.icon(_.primaryColor, _.secondaryColor)
    })
  }
  return function e(t, n, i) {
    return i ? React1.createElement(t.tag, $$_21.a($$_21.a({
      key: n
    }, x(t.attrs)), i), (t.children || []).map(function (r, i) {
      return e(r, "".concat(n, "-").concat(t.tag, "-").concat(i))
    })) : React1.createElement(t.tag, $$_21.a({
      key: n
    }, x(t.attrs)), (t.children || []).map(function (r, i) {
      return e(r, "".concat(n, "-").concat(t.tag, "-").concat(i))
    }))
  }(A.icon, "svg-".concat(A.name), $$_21.a({
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
  return $$_21.a({}, T)
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
  var n = $$_40_index.a(t, 2)
  var r = n[0]
  var o = n[1]
  return D.setTwoToneColors({
    primaryColor: r,
    secondaryColor: o
  })
}
var R = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"]
I("#1890ff")
var F = React.forwardRef(function (e, t) {
  var n
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$icon = e.icon
  var /* [auto-meaningful-name] */e$spin = e.spin
  var /* [auto-meaningful-name] */e$rotate = e.rotate
  var /* [auto-meaningful-name] */e$tabIndex = e.tabIndex
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var /* [auto-meaningful-name] */e$twoToneColor = e.twoToneColor
  var g = $$_54.a(e, R)
  var /* [auto-meaningful-name] */React$useContext$_792$a$prefixCls = React.useContext($_792.a).prefixCls
  var m = undefined === React$useContext$_792$a$prefixCls ? "anticon" : React$useContext$_792$a$prefixCls
  var y = l(m, (n = {}, $$_35.a(n, "".concat(m, "-").concat(e$icon.name), !!e$icon.name), $$_35.a(n, "".concat(m, "-spin"), !!e$spin || "loading" === e$icon.name), n), e$className)
  var b = e$tabIndex
  if (undefined === b && e$onClick) {
    b = -1
  }
  var w = e$rotate ? {
    msTransform: "rotate(".concat(e$rotate, "deg)"),
    transform: "rotate(".concat(e$rotate, "deg)")
  } : undefined
  var E = O(e$twoToneColor)
  var x = $$_40_index.a(E, 2)
  var C = x[0]
  var k = x[1]
  return React.createElement("span", $$_21.a($$_21.a({
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
F.displayName = "AntdIcon"
F.getTwoToneColor = function () {
  var e = D.getTwoToneColors()
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor
}
F.setTwoToneColor = I
export { F as a }
export default F
