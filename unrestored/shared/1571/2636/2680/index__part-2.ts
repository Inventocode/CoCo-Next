/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2680__part-2
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_616_802_index from "../616/802/index"
import * as /* [auto-meaningful-name] */$$_616_index from "../616/index"
import * as /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_19 from "../19"
import * as /* [auto-meaningful-name] */$$_80_index from "../80/index"
import * as /* [auto-meaningful-name] */$_1046 from "./1046"
import * as /* [auto-meaningful-name] */$_1045 from "./1045"
import * as /* [auto-meaningful-name] */$_1047 from "./1047"
import * as /* [auto-meaningful-name] */$_927 from "./927"
import * as /* [auto-meaningful-name] */$$_40_index from "../40/index"
function S(e) {
  return !(!e || !e.then)
}
var T = function (e) {
  var t = React.useRef(false)
  var n = React.useRef()
  var r = React.useState(false)
  var a = $$_40_index.a(r, 2)
  var s = a[0]
  var c = a[1]
  React.useEffect(function () {
    var t
    if (e.autoFocus) {
      var /* [auto-meaningful-name] */n$current = n.current
      t = setTimeout(function () {
        return n$current.focus()
      })
    }
    return function () {
      if (t) {
        clearTimeout(t)
      }
    }
  }, [])
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$buttonProps = e.buttonProps
  return React.createElement($$_616_index.a, $$_19.a({}, $$_616_802_index.a(e$type), {
    onClick: function (n) {
      var /* [auto-meaningful-name] */e$actionFn = e.actionFn
      var /* [auto-meaningful-name] */e$close = e.close
      if (!t.current) {
        t.current = true
        if (e$actionFn) {
          var o
          if (e.emitEvent) {
            o = e$actionFn(n)
            if (e.quitOnNullishReturnValue && !S(o)) {
              t.current = false
              return void e$close(n)
            }
          } else if (e$actionFn.length) {
            o = e$actionFn(e$close)
            t.current = false
          } else if (!(o = e$actionFn())) {
            return void e$close()
          }
          !function (n) {
            var /* [auto-meaningful-name] */e$close1 = e.close
            if (S(n)) {
              c(true)
              n.then(function () {
                c(false)
                e$close1.apply(undefined, arguments)
                t.current = false
              }, function (e) {
                console.error(e)
                c(false)
                t.current = false
              })
            }
          }(o)
        } else {
          e$close()
        }
      }
    },
    loading: s,
    prefixCls: e$prefixCls
  }, e$buttonProps, {
    ref: n
  }), e$children)
}
export { T }
