/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-96
 */

"use strict"

import * as yb from "./21"
import * as vb from "./54"
import /* [auto-meaningful-name] */React from "react"
import { isValidElement } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_241_index from "./241/index"
function Db(e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {}
  var n = []
  React.Children.forEach(e, function (e) {
    if (undefined !== e && null !== e || t.keepEmpty) {
      if (Array.isArray(e)) {
        n = n.concat(Db(e))
      } else {
        if ($_241_index.isFragment(e) && e.props) {
          n = n.concat(Db(e.props.children, t))
        } else {
          n.push(e)
        }
      }
    }
  })
  return n
}
var Mb = ["children", "value"]
var Lb = ["children"]
function Pb(e) {
  var /* [auto-meaningful-name] */e$key = e.key
  var /* [auto-meaningful-name] */e$props = e.props
  var /* [auto-meaningful-name] */e$props$children = e$props.children
  var /* [auto-meaningful-name] */e$props$value = e$props.value
  var i = vb.a(e$props, Mb)
  return yb.a({
    key: e$key,
    value: undefined !== e$props$value ? e$props$value : e$key,
    children: e$props$children
  }, i)
}
function Bb(e) {
  var t = arguments.length > 1 && undefined !== arguments[1] && arguments[1]
  return Db(e).map(function (e, n) {
    if (!isValidElement(e) || !e.type) {
      return null
    }
    var /* [auto-meaningful-name] */e$type$isSelectOptGroup = e.type.isSelectOptGroup
    var /* [auto-meaningful-name] */e$key = e.key
    var /* [auto-meaningful-name] */e$props = e.props
    var /* [auto-meaningful-name] */e$props$children = e$props.children
    var s = vb.a(e$props, Lb)
    return t || !e$type$isSelectOptGroup ? Pb(e) : yb.a(yb.a({
      key: "__RC_SELECT_GRP__".concat(null === e$key ? n : e$key, "__"),
      label: e$key
    }, s), {}, {
      options: Bb(e$props$children)
    })
  }).filter(function (e) {
    return e
  })
}
export { Db }
export { Bb }
