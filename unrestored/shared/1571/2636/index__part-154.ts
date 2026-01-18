/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-154
 */

"use strict"

import * as /* [auto-meaningful-name] */$_224_index from "./224/index"
import * as /* [auto-meaningful-name] */$_801_index from "./801/index"
import * as yb from "./21"
import * as /* [auto-meaningful-name] */$_486 from "./486"
import * as /* [auto-meaningful-name] */$_79_index from "./79/index"
import * as Ln from "./35"
import * as /* [auto-meaningful-name] */$_40_index from "./40/index"
import * as Dn from "./19"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_812 from "./812"
import /* [auto-meaningful-name] */$_8121 from "./812"
var $T = React.memo(function (e) {
  var /* [auto-meaningful-name] */e$onToggle = e.onToggle
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var r = $_16_index.e(function (e) {
    return e.common.consoleMessages
  })
  var o = $_16_index.e(function (e) {
    return e.common.consoleHeight
  })
  var i = React1.useMemo(function () {
    return {
      errorCount: r.filter(function (e) {
        return "error" === e.get("type") || "lintError" === e.get("type") || "customError" === e.get("type")
      }).size,
      warningCount: r.filter(function (e) {
        return "warning" === e.get("type") || "customWarning" === e.get("type")
      }).size
    }
  }, [r])
  var /* [auto-meaningful-name] */i$errorCount = i.errorCount
  var /* [auto-meaningful-name] */i$warningCount = i.warningCount
  return React.createElement("div", {
    onClick: e$onToggle,
    className: N($_8121.wrapper, (i$errorCount > 0 || i$warningCount > 0) && $_8121.errorWarning),
    style: {
      bottom: o + 18
    }
  }, i$errorCount > 0 || i$warningCount > 0 ? React.createElement(React.Fragment, null, React.createElement("div", {
    className: $_8121.errorBox
  }, React.createElement($_13_index.j, {
    type: "icon-console-error"
  }), i$errorCount), React.createElement("div", {
    className: $_8121.warningBox
  }, React.createElement($_13_index.j, {
    type: "icon-warning"
  }), i$warningCount)) : React.createElement(React.Fragment, null, React.createElement($_13_index.j, {
    type: "icon-console",
    className: $_8121.iconConsole
  }), $_710_index$a$formatMessage({
    id: "consolePanel"
  })))
})
var eS = function (e, t) {
  var n = {}
  for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
    n[r] = e[r]
  }
  if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
    var o = 0
    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) {
      if (t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o])) {
        n[r[o]] = e[r[o]]
      }
    }
  }
  return n
}
var tS = React1.createContext({
  siderHook: {
    addSider: function () {
      return null
    },
    removeSider: function () {
      return null
    }
  }
})
function nS(e) {
  var /* [auto-meaningful-name] */e$suffixCls = e.suffixCls
  var /* [auto-meaningful-name] */e$tagName = e.tagName
  var /* [auto-meaningful-name] */e$displayName = e.displayName
  return function (e) {
    var o = function (r) {
      var /* [auto-meaningful-name] */React1$useContext$_801_index$b$getPrefixCls = React1.useContext($_801_index.b).getPrefixCls
      var /* [auto-meaningful-name] */r$prefixCls = r.prefixCls
      var a = React1$useContext$_801_index$b$getPrefixCls(e$suffixCls, r$prefixCls)
      return React1.createElement(e, Dn.a({
        prefixCls: a,
        tagName: e$tagName
      }, r))
    }
    o.displayName = e$displayName
    return o
  }
}
var rS = function (e) {
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$tagName = e.tagName
  var i = eS(e, ["prefixCls", "className", "children", "tagName"])
  var a = N(e$prefixCls, e$className)
  return React1.createElement(e$tagName, Dn.a({
    className: a
  }, i), e$children)
}
var oS = nS({
  suffixCls: "layout",
  tagName: "section",
  displayName: "Layout"
})(function (e) {
  var t
  var /* [auto-meaningful-name] */React1$useContext$_801_index$b$direction = React1.useContext($_801_index.b).direction
  var r = React1.useState([])
  var o = $_40_index.a(r, 2)
  var i = o[0]
  var a = o[1]
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$hasSider = e.hasSider
  var /* [auto-meaningful-name] */e$tagName = e.tagName
  var p = eS(e, ["prefixCls", "className", "children", "hasSider", "tagName"])
  var h = N(e$prefixCls, (t = {}, Ln.a(t, "".concat(e$prefixCls, "-has-sider"), "boolean" === typeof e$hasSider ? e$hasSider : i.length > 0), Ln.a(t, "".concat(e$prefixCls, "-rtl"), "rtl" === React1$useContext$_801_index$b$direction), t), e$className)
  var m = React1.useMemo(function () {
    return {
      siderHook: {
        addSider: function (e) {
          a(function (t) {
            return [].concat($_79_index.a(t), [e])
          })
        },
        removeSider: function (e) {
          a(function (t) {
            return t.filter(function (t) {
              return t !== e
            })
          })
        }
      }
    }
  }, [])
  return React1.createElement(tS.Provider, {
    value: m
  }, React1.createElement(e$tagName, Dn.a({
    className: h
  }, p), e$children))
})
var iS = nS({
  suffixCls: "layout-header",
  tagName: "header",
  displayName: "Header"
})(rS)
var aS = nS({
  suffixCls: "layout-footer",
  tagName: "footer",
  displayName: "Footer"
})(rS)
var sS = nS({
  suffixCls: "layout-content",
  tagName: "main",
  displayName: "Content"
})(rS)
var cS = oS
var lS = {
  icon: {
    tag: "svg",
    attrs: {
      viewBox: "0 0 1024 1024",
      focusable: "false"
    },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"
        }
      }
    ]
  },
  name: "bars",
  theme: "outlined"
}
var uS = function (e, t) {
  return React1.createElement($_224_index.a, yb.a(yb.a({}, e), {}, {
    ref: t,
    icon: lS
  }))
}
uS.displayName = "BarsOutlined"
var dS = React1.forwardRef(uS)
var pS = {
  icon: {
    tag: "svg",
    attrs: {
      viewBox: "64 64 896 896",
      focusable: "false"
    },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"
        }
      }
    ]
  },
  name: "right",
  theme: "outlined"
}
var fS = function (e, t) {
  return React1.createElement($_224_index.a, yb.a(yb.a({}, e), {}, {
    ref: t,
    icon: pS
  }))
}
fS.displayName = "RightOutlined"
var hS = React1.forwardRef(fS)
var mS = {
  icon: {
    tag: "svg",
    attrs: {
      viewBox: "64 64 896 896",
      focusable: "false"
    },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"
        }
      }
    ]
  },
  name: "left",
  theme: "outlined"
}
var gS = function (e, t) {
  return React1.createElement($_224_index.a, yb.a(yb.a({}, e), {}, {
    ref: t,
    icon: mS
  }))
}
gS.displayName = "LeftOutlined"
var _S = React1.forwardRef(gS)
var vS = function (e) {
  return !isNaN(parseFloat(e)) && isFinite(e)
}
var bS = function (e, t) {
  var n = {}
  for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
    n[r] = e[r]
  }
  if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
    var o = 0
    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) {
      if (t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o])) {
        n[r[o]] = e[r[o]]
      }
    }
  }
  return n
}
var yS = {
  xs: "479.98px",
  sm: "575.98px",
  md: "767.98px",
  lg: "991.98px",
  xl: "1199.98px",
  xxl: "1599.98px"
}
var ES = React1.createContext({})
var OS = function () {
  var e = 0
  return function () {
    var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : ""
    e += 1
    return "".concat(t).concat(e)
  }
}()
var wS = React1.forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$trigger = e.trigger
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$defaultCollapsed = e.defaultCollapsed
  var s = undefined !== e$defaultCollapsed && e$defaultCollapsed
  var /* [auto-meaningful-name] */e$theme = e.theme
  var l = undefined === e$theme ? "dark" : e$theme
  var /* [auto-meaningful-name] */e$style = e.style
  var d = undefined === e$style ? {} : e$style
  var /* [auto-meaningful-name] */e$collapsible = e.collapsible
  var h = undefined !== e$collapsible && e$collapsible
  var /* [auto-meaningful-name] */e$reverseArrow = e.reverseArrow
  var g = undefined !== e$reverseArrow && e$reverseArrow
  var /* [auto-meaningful-name] */e$width = e.width
  var v = undefined === e$width ? 200 : e$width
  var /* [auto-meaningful-name] */e$collapsedWidth = e.collapsedWidth
  var y = undefined === e$collapsedWidth ? 80 : e$collapsedWidth
  var /* [auto-meaningful-name] */e$zeroWidthTriggerStyle = e.zeroWidthTriggerStyle
  var /* [auto-meaningful-name] */e$breakpoint = e.breakpoint
  var /* [auto-meaningful-name] */e$onCollapse = e.onCollapse
  var /* [auto-meaningful-name] */e$onBreakpoint = e.onBreakpoint
  var T = bS(e, ["prefixCls", "className", "trigger", "children", "defaultCollapsed", "theme", "style", "collapsible", "reverseArrow", "width", "collapsedWidth", "zeroWidthTriggerStyle", "breakpoint", "onCollapse", "onBreakpoint"])
  var /* [auto-meaningful-name] */React1$useContextTS$siderHook = React1.useContext(tS).siderHook
  var A = React1.useState("collapsed" in T ? T.collapsed : s)
  var I = $_40_index.a(A, 2)
  var j = I[0]
  var R = I[1]
  var k = React1.useState(false)
  var x = $_40_index.a(k, 2)
  var D = x[0]
  var M = x[1]
  React1.useEffect(function () {
    if ("collapsed" in T) {
      R(T.collapsed)
    }
  }, [T.collapsed])
  var L = function (e, t) {
    if (!("collapsed" in T)) {
      R(e)
    }
    if (!(null === e$onCollapse || undefined === e$onCollapse)) {
      e$onCollapse(e, t)
    }
  }
  var P = React1.useRef()
  P.current = function (e) {
    M(e.matches)
    if (!(null === e$onBreakpoint || undefined === e$onBreakpoint)) {
      e$onBreakpoint(e.matches)
    }
    if (j !== e.matches) {
      L(e.matches, "responsive")
    }
  }
  React1.useEffect(function () {
    function e(e) {
      return P.current(e)
    }
    var t
    if ("undefined" !== typeof window) {
      var /* [auto-meaningful-name] */window$matchMedia = window.matchMedia
      if (window$matchMedia && e$breakpoint && e$breakpoint in yS) {
        t = window$matchMedia("(max-width: ".concat(yS[e$breakpoint], ")"))
        try {
          t.addEventListener("change", e)
        } catch (r) {
          t.addListener(e)
        }
        e(t)
      }
    }
    return function () {
      try {
        if (!(null === t || undefined === t)) {
          t.removeEventListener("change", e)
        }
      } catch (r) {
        if (!(null === t || undefined === t)) {
          t.removeListener(e)
        }
      }
    }
  }, [])
  React1.useEffect(function () {
    var e = OS("ant-sider-")
    React1$useContextTS$siderHook.addSider(e)
    return function () {
      return React1$useContextTS$siderHook.removeSider(e)
    }
  }, [])
  var B = function () {
    L(!j, "clickTrigger")
  }
  var /* [auto-meaningful-name] */React1$useContext$_801_index$b$getPrefixCls = React1.useContext($_801_index.b).getPrefixCls
  var G = React1.useMemo(function () {
    return {
      siderCollapsed: j
    }
  }, [j])
  return React1.createElement(ES.Provider, {
    value: G
  }, function () {
    var e
    var a = React1$useContext$_801_index$b$getPrefixCls("layout-sider", e$prefixCls)
    var s = $_486.a(T, ["collapsed"])
    var c = j ? y : v
    var u = vS(c) ? "".concat(c, "px") : String(c)
    var p = 0 === parseFloat(String(y || 0)) ? React1.createElement("span", {
      onClick: B,
      className: N("".concat(a, "-zero-width-trigger"), "".concat(a, "-zero-width-trigger-").concat(g ? "right" : "left")),
      style: e$zeroWidthTriggerStyle
    }, e$trigger || React1.createElement(dS, null)) : null
    var m = {
      expanded: g ? React1.createElement(hS, null) : React1.createElement(_S, null),
      collapsed: g ? React1.createElement(_S, null) : React1.createElement(hS, null)
    }[j ? "collapsed" : "expanded"]
    var _ = null !== e$trigger ? p || React1.createElement("div", {
      className: "".concat(a, "-trigger"),
      onClick: B,
      style: {
        width: u
      }
    }, e$trigger || m) : null
    var b = Dn.a(Dn.a({}, d), {
      flex: "0 0 ".concat(u),
      maxWidth: u,
      minWidth: u,
      width: u
    })
    var O = N(a, "".concat(a, "-").concat(l), (e = {}, Ln.a(e, "".concat(a, "-collapsed"), !!j), Ln.a(e, "".concat(a, "-has-trigger"), h && null !== e$trigger && !p), Ln.a(e, "".concat(a, "-below"), !!D), Ln.a(e, "".concat(a, "-zero-width"), 0 === parseFloat(u)), e), e$className)
    return React1.createElement("aside", Dn.a({
      className: O
    }, s, {
      style: b,
      ref: t
    }), React1.createElement("div", {
      className: "".concat(a, "-children")
    }, e$children), h || D && p ? _ : null)
  }())
})
wS.displayName = "Sider"
var CS = wS
var TS = cS
TS.Header = iS
TS.Footer = aS
TS.Content = sS
TS.Sider = CS
var SS = TS
export { $T }
export { hS }
export { ES }
export { SS }
