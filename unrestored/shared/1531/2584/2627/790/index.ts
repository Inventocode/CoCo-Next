/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：790
 */

"use strict"

export { I as a }
import r = require("../../19");
import i = require("../../29");
import o = require("../../33/index");
import a = require("../../108");
import React = require("react");
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
import u = require("../../8");
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
import f = require("../../482");
import d = require("../../789");
import h = require("../../95");
var p = function e(t) {
  h.a(this, e)
  this.error = new Error("unreachable case: ".concat(JSON.stringify(t)))
}
var _ = function (e, t) {
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
var A = function (e) {
  return React.createElement(d.a, null, function (t) {
    var n
    var t$getPrefixCls = t.getPrefixCls
    var t$direction = t.direction
    var e$prefixCls = e.prefixCls
    var e$size = e.size
    var e$className = e.className
    var d = _(e, ["prefixCls", "size", "className"])
    var h = t$getPrefixCls("btn-group", e$prefixCls)
    var A = ""
    switch (e$size) {
      case "large":
        A = "lg"
        break
      case "small":
        A = "sm"
        break
      case "middle":
      case undefined:
        break
      default:
        console.warn(new p(e$size).error)
    }
    var g = l()(h, (n = {}, i.a(n, "".concat(h, "-").concat(A), A), i.a(n, "".concat(h, "-rtl"), "rtl" === t$direction), n), e$className)
    return React.createElement("div", r.a({}, d, {
      className: g
    }))
  })
}
import g = require("../../1026/index");
import v = require("../../610");
import m = require("../../363/index");
import y = require("../../514");
import b = require("./684");
import w = require("../../606");
var E = function () {
  return {
    width: 0,
    opacity: 0,
    transform: "scale(0)"
  }
}
var x = function (e) {
  return {
    width: e.scrollWidth,
    opacity: 1,
    transform: "scale(1)"
  }
}
var C = function (e) {
  var e$prefixCls = e.prefixCls
  var n = !!e.loading
  return e.existIcon ? c.a.createElement("span", {
    className: "".concat(e$prefixCls, "-loading-icon")
  }, c.a.createElement(w.a, null)) : c.a.createElement(b.a, {
    visible: n,
    motionName: "".concat(e$prefixCls, "-loading-icon-motion"),
    removeOnLeave: true,
    onAppearStart: E,
    onAppearActive: x,
    onEnterStart: E,
    onEnterActive: x,
    onLeaveStart: x,
    onLeaveActive: E
  }, function (e, n) {
    var e$className = e.className
    var e$style = e.style
    return c.a.createElement("span", {
      className: "".concat(e$prefixCls, "-loading-icon"),
      style: e$style,
      ref: n
    }, c.a.createElement(w.a, {
      className: e$className
    }))
  })
}
import O = require("../../314");
var k = function (e, t) {
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
var S = /^[\u4e00-\u9fa5]{2}$/
var T = S.test.bind(S)
function B(e) {
  return "text" === e || "link" === e
}
function D(e, t) {
  if (null != e) {
    var n
    var r = t ? " " : ""
    return "string" !== typeof e && "number" !== typeof e && "string" === typeof e.type && T(e.props.children) ? O.a(e, {
      children: e.props.children.split("").join(r)
    }) : "string" === typeof e ? T(e) ? React.createElement("span", null, e.split("").join(r)) : React.createElement("span", null, e) : (n = e, React.isValidElement(n) && n.type === React.Fragment ? React.createElement("span", null, e) : e)
  }
}
v.a("default", "primary", "ghost", "dashed", "link", "text")
v.a("default", "circle", "round")
v.a("submit", "button", "reset")
function I(e) {
  return "danger" === e ? {
    danger: true
  } : {
    type: e
  }
}
var F = function (e, t) {
  var n
  var c
  var e$loading = e.loading
  var h = undefined !== e$loading && e$loading
  var e$prefixCls = e.prefixCls
  var e$type = e.type
  var e$danger = e.danger
  var e$shape = e.shape
  var b = undefined === e$shape ? "default" : e$shape
  var e$size = e.size
  var e$className = e.className
  var e$children = e.children
  var e$icon = e.icon
  var e$ghost = e.ghost
  var I = undefined !== e$ghost && e$ghost
  var e$block = e.block
  var R = undefined !== e$block && e$block
  var e$htmlType = e.htmlType
  var N = undefined === e$htmlType ? "button" : e$htmlType
  var M = k(e, ["loading", "prefixCls", "type", "danger", "shape", "size", "className", "children", "icon", "ghost", "block", "htmlType"])
  var j = React.useContext(y.b)
  var L = React.useState(!!h)
  var U = o.a(L, 2)
  var H = U[0]
  var V = U[1]
  var G = React.useState(false)
  var z = o.a(G, 2)
  var Q = z[0]
  var W = z[1]
  var K = React.useContext(d.b)
  var k$getPrefixCls = K.getPrefixCls
  var k$autoInsertSpaceInButton = K.autoInsertSpaceInButton
  var k$direction = K.direction
  var $ = t || React.createRef()
  var J = React.useRef()
  var Z = function () {
    return 1 === React.Children.count(e$children) && !e$icon && !B(e$type)
  }
  c = "object" === a.a(h) && h.delay ? h.delay || true : !!h
  React.useEffect(function () {
    clearTimeout(J.current)
    if ("number" === typeof c) {
      J.current = window.setTimeout(function () {
        V(c)
      }, c)
    } else {
      V(c)
    }
  }, [c])
  React.useEffect(function () {
    if ($ && $.current && false !== k$autoInsertSpaceInButton) {
      var $$current$textContent = $.current.textContent
      if (Z() && T($$current$textContent)) {
        if (!Q) {
          W(true)
        }
      } else {
        if (Q) {
          W(false)
        }
      }
    }
  }, [$])
  var ee = function (t) {
    var n
    var e$onClick = e.onClick
    var e$disabled = e.disabled
    if (H || e$disabled) {
      t.preventDefault()
    } else {
      if (!(null === (n = e$onClick) || undefined === n)) {
        n(t)
      }
    }
  }
  m.a(!("string" === typeof e$icon && e$icon.length > 2), "Button", "`icon` is using ReactNode instead of string naming in v4. Please check `".concat(e$icon, "` at https://ant.design/components/icon"))
  m.a(!(I && B(e$type)), "Button", "`link` or `text` button can't be a `ghost` button.")
  var te = k$getPrefixCls("btn", e$prefixCls)
  var ne = false !== k$autoInsertSpaceInButton
  var re = ""
  switch (e$size || j) {
    case "large":
      re = "lg"
      break
    case "small":
      re = "sm"
  }
  var ie = H ? "loading" : e$icon
  var oe = l()(te, (n = {}, i.a(n, "".concat(te, "-").concat(e$type), e$type), i.a(n, "".concat(te, "-").concat(b), "default" !== b && b), i.a(n, "".concat(te, "-").concat(re), re), i.a(n, "".concat(te, "-icon-only"), !e$children && 0 !== e$children && !!ie), i.a(n, "".concat(te, "-background-ghost"), I && !B(e$type)), i.a(n, "".concat(te, "-loading"), H), i.a(n, "".concat(te, "-two-chinese-chars"), Q && ne), i.a(n, "".concat(te, "-block"), R), i.a(n, "".concat(te, "-dangerous"), !!e$danger), i.a(n, "".concat(te, "-rtl"), "rtl" === k$direction), n), e$className)
  var ae = e$icon && !H ? e$icon : React.createElement(C, {
    existIcon: !!e$icon,
    prefixCls: te,
    loading: !!H
  })
  var se = e$children || 0 === e$children ? function (e, t) {
    var n = false
    var r = []
    React.Children.forEach(e, function (e) {
      var t = a.a(e)
      var i = "string" === t || "number" === t
      if (n && i) {
        var o = r.length - 1
        var s = r[o]
        r[o] = "".concat(s).concat(e)
      } else {
        r.push(e)
      }
      n = i
    })
    return React.Children.map(r, function (e) {
      return D(e, t)
    })
  }(e$children, Z() && ne) : null
  var ce = f.a(M, ["navigate"])
  if (undefined !== ce.href) {
    return React.createElement("a", r.a({}, ce, {
      className: oe,
      onClick: ee,
      ref: $
    }), ae, se)
  }
  var ue = React.createElement("button", r.a({}, M, {
    type: N,
    className: oe,
    onClick: ee,
    ref: $
  }), ae, se)
  return B(e$type) ? ue : React.createElement(g.a, {
    disabled: !!H
  }, ue)
}
var R = React.forwardRef(F)
R.displayName = "Button"
R.Group = A
R.__ANT_BUTTON = true
export { R as b }
export default I
