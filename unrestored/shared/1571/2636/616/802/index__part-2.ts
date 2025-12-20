/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：802__part-2
 */

"use strict"

import { A } from "./index__part-0"
import { C } from "./index__part-1"
import * as /* [auto-meaningful-name] */$$_$$_517 from "../../517"
import * as /* [auto-meaningful-name] */$$_$$_364_index from "../../364/index"
import * as /* [auto-meaningful-name] */$$_$$_614 from "../../614"
import * as /* [auto-meaningful-name] */$$_$$_1048_index from "../../1048/index"
import * as /* [auto-meaningful-name] */$$_$$_801_index from "../../801/index"
import * as /* [auto-meaningful-name] */$$_$$_486 from "../../486"
import /* [auto-meaningful-name] */$$_$$_8 from "../../8"
import * as /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_$$_107 from "../../107"
import * as /* [auto-meaningful-name] */$$_$$_40_index from "../../40/index"
import * as /* [auto-meaningful-name] */$$_$$_35 from "../../35"
import * as /* [auto-meaningful-name] */$$_$$_19 from "../../19"
import * as /* [auto-meaningful-name] */$$_$$_315 from "../../315"
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
    return "string" !== typeof e && "number" !== typeof e && "string" === typeof e.type && T(e.props.children) ? $$_$$_315.a(e, {
      children: e.props.children.split("").join(r)
    }) : "string" === typeof e ? T(e) ? React.createElement("span", null, e.split("").join(r)) : React.createElement("span", null, e) : (n = e, React.isValidElement(n) && n.type === React.Fragment ? React.createElement("span", null, e) : e)
  }
}
$$_$$_614.a("default", "primary", "ghost", "dashed", "link", "text")
$$_$$_614.a("default", "circle", "round")
$$_$$_614.a("submit", "button", "reset")
function I(e) {
  return "danger" === e ? {
    danger: true
  } : {
    type: e
  }
}
var R = function (e, t) {
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
  var F = undefined !== e$block && e$block
  var /* [auto-meaningful-name] */e$htmlType = e.htmlType
  var N = undefined === e$htmlType ? "button" : e$htmlType
  var M = k(e, ["loading", "prefixCls", "type", "danger", "shape", "size", "className", "children", "icon", "ghost", "block", "htmlType"])
  var L = React.useContext($$_$$_517.b)
  var j = React.useState(!!h)
  var U = $$_$$_40_index.a(j, 2)
  var H = U[0]
  var V = U[1]
  var G = React.useState(false)
  var z = $$_$$_40_index.a(G, 2)
  var Q = z[0]
  var W = z[1]
  var K = React.useContext($$_$$_801_index.b)
  var /* [auto-meaningful-name] */K$getPrefixCls = K.getPrefixCls
  var /* [auto-meaningful-name] */K$autoInsertSpaceInButton = K.autoInsertSpaceInButton
  var /* [auto-meaningful-name] */K$direction = K.direction
  var $ = t || React.createRef()
  var J = React.useRef()
  var Z = function () {
    return 1 === React.Children.count(e$children) && !e$icon && !B(e$type)
  }
  c = "object" === $$_$$_107.a(h) && h.delay ? h.delay || true : !!h
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
  $$_$$_364_index.a(!("string" === typeof e$icon && e$icon.length > 2), "Button", "`icon` is using ReactNode instead of string naming in v4. Please check `".concat(e$icon, "` at https://ant.design/components/icon"))
  $$_$$_364_index.a(!(I && B(e$type)), "Button", "`link` or `text` button can't be a `ghost` button.")
  var te = K$getPrefixCls("btn", e$prefixCls)
  var ne = false !== K$autoInsertSpaceInButton
  var re = ""
  switch (e$size || L) {
    case "large":
      re = "lg"
      break
    case "small":
      re = "sm"
  }
  var ie = H ? "loading" : e$icon
  var oe = $$_$$_8(te, (n = {}, $$_$$_35.a(n, "".concat(te, "-").concat(e$type), e$type), $$_$$_35.a(n, "".concat(te, "-").concat(b), "default" !== b && b), $$_$$_35.a(n, "".concat(te, "-").concat(re), re), $$_$$_35.a(n, "".concat(te, "-icon-only"), !e$children && 0 !== e$children && !!ie), $$_$$_35.a(n, "".concat(te, "-background-ghost"), I && !B(e$type)), $$_$$_35.a(n, "".concat(te, "-loading"), H), $$_$$_35.a(n, "".concat(te, "-two-chinese-chars"), Q && ne), $$_$$_35.a(n, "".concat(te, "-block"), F), $$_$$_35.a(n, "".concat(te, "-dangerous"), !!e$danger), $$_$$_35.a(n, "".concat(te, "-rtl"), "rtl" === K$direction), n), e$className)
  var ae = e$icon && !H ? e$icon : React.createElement(C, {
    existIcon: !!e$icon,
    prefixCls: te,
    loading: !!H
  })
  var se = e$children || 0 === e$children ? function (e, t) {
    var n = false
    var r = []
    React.Children.forEach(e, function (e) {
      var t = $$_$$_107.a(e)
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
  var ce = $$_$$_486.a(M, ["navigate"])
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
  return B(e$type) ? ue : React.createElement($$_$$_1048_index.a, {
    disabled: !!H
  }, ue)
}
var F = React.forwardRef(R)
F.displayName = "Button"
F.Group = A
F.__ANT_BUTTON = true
export { I }
export { F }
