/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：790
 */

"use strict"

export { I as a }
import /* [auto-meaningful-name] */$$_$$_19 = require("../../19")
import /* [auto-meaningful-name] */$$_$$_29 = require("../../29")
import /* [auto-meaningful-name] */$$_$$_33_index = require("../../33/index")
import /* [auto-meaningful-name] */$$_$$_108 = require("../../108")
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
import /* [auto-meaningful-name] */$$_$$_8 = require("../../8")
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
}($$_$$_8)
import /* [auto-meaningful-name] */$$_$$_482 = require("../../482")
import /* [auto-meaningful-name] */$$_$$_789 = require("../../789")
import /* [auto-meaningful-name] */$$_$$_95 = require("../../95")
var p = function e(t) {
  $$_$$_95.a(this, e)
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
  return React.createElement($$_$$_789.a, null, function (t) {
    var n
    var /* [auto-meaningful-name] */t$getPrefixCls = t.getPrefixCls
    var /* [auto-meaningful-name] */t$direction = t.direction
    var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
    var /* [auto-meaningful-name] */e$size = e.size
    var /* [auto-meaningful-name] */e$className = e.className
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
    var g = l()(h, (n = {}, $$_$$_29.a(n, "".concat(h, "-").concat(A), A), $$_$$_29.a(n, "".concat(h, "-rtl"), "rtl" === t$direction), n), e$className)
    return React.createElement("div", $$_$$_19.a({}, d, {
      className: g
    }))
  })
}
import /* [auto-meaningful-name] */$$_$$_1026_index = require("../../1026/index")
import /* [auto-meaningful-name] */$$_$$_610 = require("../../610")
import /* [auto-meaningful-name] */$$_$$_363_index = require("../../363/index")
import /* [auto-meaningful-name] */$$_$$_514 = require("../../514")
import /* [auto-meaningful-name] */$_684 = require("./684")
import /* [auto-meaningful-name] */$$_$$_606 = require("../../606")
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
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var n = !!e.loading
  return e.existIcon ? c.a.createElement("span", {
    className: "".concat(e$prefixCls, "-loading-icon")
  }, c.a.createElement($$_$$_606.a, null)) : c.a.createElement($_684.a, {
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
    var /* [auto-meaningful-name] */e$className = e.className
    var /* [auto-meaningful-name] */e$style = e.style
    return c.a.createElement("span", {
      className: "".concat(e$prefixCls, "-loading-icon"),
      style: e$style,
      ref: n
    }, c.a.createElement($$_$$_606.a, {
      className: e$className
    }))
  })
}
import /* [auto-meaningful-name] */$$_$$_314 = require("../../314")
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
    return "string" !== typeof e && "number" !== typeof e && "string" === typeof e.type && T(e.props.children) ? $$_$$_314.a(e, {
      children: e.props.children.split("").join(r)
    }) : "string" === typeof e ? T(e) ? React.createElement("span", null, e.split("").join(r)) : React.createElement("span", null, e) : (n = e, React.isValidElement(n) && n.type === React.Fragment ? React.createElement("span", null, e) : e)
  }
}
$$_$$_610.a("default", "primary", "ghost", "dashed", "link", "text")
$$_$$_610.a("default", "circle", "round")
$$_$$_610.a("submit", "button", "reset")
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
  var /* [auto-meaningful-name] */e$loading = e.loading
  var h = undefined !== e$loading && e$loading
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$danger = e.danger
  var /* [auto-meaningful-name] */e$shape = e.shape
  var b = undefined === e$shape ? "default" : e$shape
  var /* [auto-meaningful-name] */e$size = e.size
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$icon = e.icon
  var /* [auto-meaningful-name] */e$ghost = e.ghost
  var I = undefined !== e$ghost && e$ghost
  var /* [auto-meaningful-name] */e$block = e.block
  var R = undefined !== e$block && e$block
  var /* [auto-meaningful-name] */e$htmlType = e.htmlType
  var N = undefined === e$htmlType ? "button" : e$htmlType
  var M = k(e, ["loading", "prefixCls", "type", "danger", "shape", "size", "className", "children", "icon", "ghost", "block", "htmlType"])
  var j = React.useContext($$_$$_514.b)
  var L = React.useState(!!h)
  var U = $$_$$_33_index.a(L, 2)
  var H = U[0]
  var V = U[1]
  var G = React.useState(false)
  var z = $$_$$_33_index.a(G, 2)
  var Q = z[0]
  var W = z[1]
  var K = React.useContext($$_$$_789.b)
  var /* [auto-meaningful-name] */K$getPrefixCls = K.getPrefixCls
  var /* [auto-meaningful-name] */K$autoInsertSpaceInButton = K.autoInsertSpaceInButton
  var /* [auto-meaningful-name] */K$direction = K.direction
  var $ = t || React.createRef()
  var J = React.useRef()
  var Z = function () {
    return 1 === React.Children.count(e$children) && !e$icon && !B(e$type)
  }
  c = "object" === $$_$$_108.a(h) && h.delay ? h.delay || true : !!h
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
    if ($ && $.current && false !== K$autoInsertSpaceInButton) {
      var /* [auto-meaningful-name] */$$current$textContent = $.current.textContent
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
    var /* [auto-meaningful-name] */e$onClick = e.onClick
    var /* [auto-meaningful-name] */e$disabled = e.disabled
    if (H || e$disabled) {
      t.preventDefault()
    } else {
      if (!(null === (n = e$onClick) || undefined === n)) {
        n(t)
      }
    }
  }
  $$_$$_363_index.a(!("string" === typeof e$icon && e$icon.length > 2), "Button", "`icon` is using ReactNode instead of string naming in v4. Please check `".concat(e$icon, "` at https://ant.design/components/icon"))
  $$_$$_363_index.a(!(I && B(e$type)), "Button", "`link` or `text` button can't be a `ghost` button.")
  var te = K$getPrefixCls("btn", e$prefixCls)
  var ne = false !== K$autoInsertSpaceInButton
  var re = ""
  switch (e$size || j) {
    case "large":
      re = "lg"
      break
    case "small":
      re = "sm"
  }
  var ie = H ? "loading" : e$icon
  var oe = l()(te, (n = {}, $$_$$_29.a(n, "".concat(te, "-").concat(e$type), e$type), $$_$$_29.a(n, "".concat(te, "-").concat(b), "default" !== b && b), $$_$$_29.a(n, "".concat(te, "-").concat(re), re), $$_$$_29.a(n, "".concat(te, "-icon-only"), !e$children && 0 !== e$children && !!ie), $$_$$_29.a(n, "".concat(te, "-background-ghost"), I && !B(e$type)), $$_$$_29.a(n, "".concat(te, "-loading"), H), $$_$$_29.a(n, "".concat(te, "-two-chinese-chars"), Q && ne), $$_$$_29.a(n, "".concat(te, "-block"), R), $$_$$_29.a(n, "".concat(te, "-dangerous"), !!e$danger), $$_$$_29.a(n, "".concat(te, "-rtl"), "rtl" === K$direction), n), e$className)
  var ae = e$icon && !H ? e$icon : React.createElement(C, {
    existIcon: !!e$icon,
    prefixCls: te,
    loading: !!H
  })
  var se = e$children || 0 === e$children ? function (e, t) {
    var n = false
    var r = []
    React.Children.forEach(e, function (e) {
      var t = $$_$$_108.a(e)
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
  var ce = $$_$$_482.a(M, ["navigate"])
  if (undefined !== ce.href) {
    return React.createElement("a", $$_$$_19.a({}, ce, {
      className: oe,
      onClick: ee,
      ref: $
    }), ae, se)
  }
  var ue = React.createElement("button", $$_$$_19.a({}, M, {
    type: N,
    className: oe,
    onClick: ee,
    ref: $
  }), ae, se)
  return B(e$type) ? ue : React.createElement($$_$$_1026_index.a, {
    disabled: !!H
  }, ue)
}
var R = React.forwardRef(F)
R.displayName = "Button"
R.Group = A
R.__ANT_BUTTON = true
export { R as b }
export default I
