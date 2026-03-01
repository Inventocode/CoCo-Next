/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：559__part-2
 */

"use strict"

import { j } from "./index__part-1"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_54 from /* 54 */"../54"
import * as /* [auto-meaningful-name] */Module_79 from /* 79 */"../79/index"
import * as /* [auto-meaningful-name] */Module_19 from /* 19 */"../19"
import * as /* [auto-meaningful-name] */Module_241 from /* 241 */"../241/index"
function J(e, t) {
  return function e(t) {
    var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {}
    var r = []
    React.Children.forEach(t, function (t) {
      if (undefined !== t && null !== t || n.keepEmpty) {
        if (Array.isArray(t)) {
          r = r.concat(e(t))
        } else {
          if (Module_241.isFragment(t) && t.props) {
            r = r.concat(e(t.props.children, n))
          } else {
            r.push(t)
          }
        }
      }
    })
    return r
  }(e).map(function (e, n) {
    if (React1.isValidElement(e)) {
      var r
      var /* [auto-meaningful-name] */e$props
      var /* [auto-meaningful-name] */e$key = e.key
      var s = null !== (r = null === (e$props = e.props) || undefined === e$props ? undefined : e$props.eventKey) && undefined !== r ? r : e$key
      if (null === s || undefined === s) {
        s = "tmp_key-".concat([].concat(Module_79.a(t), [n]).join("-"))
      }
      var c = {
        key: s,
        eventKey: s
      }
      return React1.cloneElement(e, c)
    }
    return e
  })
}
function $(e) {
  var t = React1.useRef(e)
  t.current = e
  var n = React1.useCallback(function () {
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
  var i = Module_54.a(e, ee)
  var a = React1.useContext(j)
  var /* [auto-meaningful-name] */a$prefixCls = a.prefixCls
  var /* [auto-meaningful-name] */a$mode = a.mode
  var /* [auto-meaningful-name] */a$rtl = a.rtl
  return React1.createElement("ul", Module_19.a({
    className: Classnames(a$prefixCls, a$rtl && "".concat(a$prefixCls, "-rtl"), "".concat(a$prefixCls, "-sub"), "".concat(a$prefixCls, "-").concat("inline" === a$mode ? "inline" : "vertical"), e$className)
  }, i, {
    "data-menu-list": true,
    ref: t
  }), e$children)
}
var ne = React1.forwardRef(te)
ne.displayName = "SubMenuList"
var re = ne
export { J }
export { $ }
export { re }
