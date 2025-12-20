/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-37
 */

"use strict"

import * as Dn from "./19"
import * as /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$_545 from "./545"
import * as /* [auto-meaningful-name] */$_339 from "./339"
var /* [auto-meaningful-name] */React$useLayoutEffect = React.useLayoutEffect
var cp = function (e, t) {
  if ("function" !== typeof e) {
    e.current = t
  } else {
    e(t)
  }
}
var lp = function (e, t) {
  var n = React.useRef()
  return React.useCallback(function (r) {
    e.current = r
    if (n.current) {
      cp(n.current, null)
    }
    n.current = t
    if (t) {
      cp(t, r)
    }
  }, [t])
}
var up = {
  "min-height": "0",
  "max-height": "none",
  height: "0",
  visibility: "hidden",
  overflow: "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}
var dp = function (e) {
  Object.keys(up).forEach(function (t) {
    e.style.setProperty(t, up[t], "important")
  })
}
var pp = null
var fp = function () {}
var hp = ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "boxSizing", "fontFamily", "fontSize", "fontStyle", "fontWeight", "letterSpacing", "lineHeight", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "tabSize", "textIndent", "textRendering", "textTransform", "width", "wordBreak"]
var mp = !!document.documentElement.currentStyle
var gp = function (e) {
  var t = function (e) {
    var t = React.useRef(e)
    React$useLayoutEffect(function () {
      t.current = e
    })
    return t
  }(e)
  React.useLayoutEffect(function () {
    var e = function (e) {
      t.current(e)
    }
    window.addEventListener("resize", e)
    return function () {
      window.removeEventListener("resize", e)
    }
  }, [])
}
var _p = function (e, t) {
  var /* [auto-meaningful-name] */e$cacheMeasurements = e.cacheMeasurements
  var /* [auto-meaningful-name] */e$maxRows = e.maxRows
  var /* [auto-meaningful-name] */e$minRows = e.minRows
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var a = undefined === e$onChange ? fp : e$onChange
  var /* [auto-meaningful-name] */e$onHeightChange = e.onHeightChange
  var c = undefined === e$onHeightChange ? fp : e$onHeightChange
  var l = $_339.a(e, ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"])
  var u = undefined !== l.value
  var d = React.useRef(null)
  var p = lp(d, t)
  var h = React.useRef(0)
  var m = React.useRef()
  var g = function () {
    var /* [auto-meaningful-name] */d$current = d.current
    var t = e$cacheMeasurements && m.current ? m.current : function (e) {
      var t = window.getComputedStyle(e)
      if (null === t) {
        return null
      }
      var n
      n = t
      var r = hp.reduce(function (e, t) {
        e[t] = n[t]
        return e
      }, {})
      var /* [auto-meaningful-name] */r$boxSizing = r.boxSizing
      return "" === r$boxSizing ? null : (mp && "border-box" === r$boxSizing && (r.width = parseFloat(r.width) + parseFloat(r.borderRightWidth) + parseFloat(r.borderLeftWidth) + parseFloat(r.paddingRight) + parseFloat(r.paddingLeft) + "px"), {
        sizingStyle: r,
        paddingSize: parseFloat(r.paddingBottom) + parseFloat(r.paddingTop),
        borderSize: parseFloat(r.borderBottomWidth) + parseFloat(r.borderTopWidth)
      })
    }(d$current)
    if (t) {
      m.current = t
      var i = function (e, t, n, r) {
        if (undefined === n) {
          n = 1
        }
        if (undefined === r) {
          r = 1 / 0
        }
        if (!pp) {
          (pp = document.createElement("textarea")).setAttribute("tabindex", "-1")
          pp.setAttribute("aria-hidden", "true")
          dp(pp)
        }
        if (null === pp.parentNode) {
          document.body.appendChild(pp)
        }
        var /* [auto-meaningful-name] */e$paddingSize = e.paddingSize
        var /* [auto-meaningful-name] */e$borderSize = e.borderSize
        var /* [auto-meaningful-name] */e$sizingStyle = e.sizingStyle
        var /* [auto-meaningful-name] */e$sizingStyle$boxSizing = e$sizingStyle.boxSizing
        Object.keys(e$sizingStyle).forEach(function (e) {
          var t = e
          pp.style[t] = e$sizingStyle[t]
        })
        dp(pp)
        pp.value = t
        var c = function (e, t) {
          var /* [auto-meaningful-name] */e$scrollHeight = e.scrollHeight
          return "border-box" === t.sizingStyle.boxSizing ? e$scrollHeight + t.borderSize : e$scrollHeight - t.paddingSize
        }(pp, e)
        pp.value = "x"
        var l = pp.scrollHeight - e$paddingSize
        var u = l * n
        if ("border-box" === e$sizingStyle$boxSizing) {
          u = u + e$paddingSize + e$borderSize
        }
        c = Math.max(u, c)
        var d = l * r
        if ("border-box" === e$sizingStyle$boxSizing) {
          d = d + e$paddingSize + e$borderSize
        }
        return [c = Math.min(d, c), l]
      }(t, d$current.value || d$current.placeholder || "x", e$minRows, e$maxRows)
      var a = i[0]
      var s = i[1]
      if (h.current !== a) {
        h.current = a
        d$current.style.setProperty("height", a + "px", "important")
        c(a, {
          rowHeight: s
        })
      }
    }
  }
  React.useLayoutEffect(g)
  gp(g)
  return React.createElement("textarea", Dn.a({}, l, {
    onChange: function (e) {
      if (!u) {
        g()
      }
      a(e)
    },
    ref: p
  }))
}
var vp = React.forwardRef(_p)
export { vp }
