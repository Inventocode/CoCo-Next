/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：556__part-2
 */

"use strict"

import { "556__part-1__j" as j } from "./index__part-1"
import p from "../8"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$$_54 from "../54"
import * as /* [auto-meaningful-name] */$$_80_index from "../80/index"
import * as /* [auto-meaningful-name] */$$_19 from "../19"
import * as /* [auto-meaningful-name] */$$_242_index from "../242/index"
function J(e, t) {
  return function e(t) {
    var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {}
    var r = []
    React.Children.forEach(t, function (t) {
      if (undefined !== t && null !== t || n.keepEmpty) {
        if (Array.isArray(t)) {
          r = r.concat(e(t))
        } else {
          if ($$_242_index.isFragment(t) && t.props) {
            r = r.concat(e(t.props.children, n))
          } else {
            r.push(t)
          }
        }
      }
    })
    return r
  }(e).map(function (e, n) {
    if (_React.isValidElement(e)) {
      var r
      var /* [auto-meaningful-name] */e$props
      var /* [auto-meaningful-name] */e$key = e.key
      var s = null !== (r = null === (e$props = e.props) || undefined === e$props ? undefined : e$props.eventKey) && undefined !== r ? r : e$key
      if (null === s || undefined === s) {
        s = "tmp_key-".concat([].concat($$_80_index.a(t), [n]).join("-"))
      }
      var c = {
        key: s,
        eventKey: s
      }
      return _React.cloneElement(e, c)
    }
    return e
  })
}
function $(e) {
  var t = _React.useRef(e)
  t.current = e
  var n = _React.useCallback(function () {
    for (var /* [auto-meaningful-name] */t$current, /* [auto-meaningful-name] */arguments$length = arguments.length, r = new Array(arguments$length), o = 0; o < arguments$length; o++) {
      r[o] = arguments[o]
    }
    return null === (t$current = t.current) || undefined === t$current ? undefined : t$current.call.apply(t$current, [t].concat(r))
  }, [])
  return e ? n : undefined
}
var ee = ["className", "children"]
var te = function (e, t) {
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$children = e.children
  var i = $$_54.a(e, ee)
  var a = _React.useContext(j)
  var /* [auto-meaningful-name] */a$prefixCls = a.prefixCls
  var /* [auto-meaningful-name] */a$mode = a.mode
  var /* [auto-meaningful-name] */a$rtl = a.rtl
  return _React.createElement("ul", $$_19.a({
    className: p(a$prefixCls, a$rtl && "".concat(a$prefixCls, "-rtl"), "".concat(a$prefixCls, "-sub"), "".concat(a$prefixCls, "-").concat("inline" === a$mode ? "inline" : "vertical"), e$className)
  }, i, {
    "data-menu-list": true,
    ref: t
  }), e$children)
}
var ne = _React.forwardRef(te)
ne.displayName = "SubMenuList"
var re = ne
export { J as "556__part-2__J" }
export { $ as "556__part-2__$" }
export { re as "556__part-2__re" }
