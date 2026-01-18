/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：13__part-15
 */

"use strict"

import { Ce } from "./index__part-14"
import * as /* [auto-meaningful-name] */$$_11 from "../11"
import * as /* [auto-meaningful-name] */$$_15 from "../15"
import * as /* [auto-meaningful-name] */$$_94_index from "../94/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import i from "../8"
import * as /* [auto-meaningful-name] */$$_10_index from "../10/index"
import * as /* [auto-meaningful-name] */$_318 from "./318"
import /* [auto-meaningful-name] */$_3181 from "./318"
var Ae = React1.memo(function (e) {
  var t
  var /* [auto-meaningful-name] */e$value = e.value
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$subMenu = e.subMenu
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var u = React1.useRef(null)
  var d = React1.useState("right")
  var p = $$_10_index.a(d, 2)
  var f = p[0]
  var h = p[1]
  var m = React1.useState(false)
  var g = $$_10_index.a(m, 2)
  var _ = g[0]
  var v = g[1]
  var b = React1.useMemo(function () {
    return $$_15.p(v, 100)
  }, [])
  return React.createElement("div", {
    ref: u,
    className: $_3181.subMenuItemWrapper,
    onMouseEnter: function () {
      if (e$subMenu) {
        b(function () {
          return true
        })
        var /* [auto-meaningful-name] */u$current = u.current
        if (u$current) {
          var t = u$current.getClientRects()[0]
          if (t.x + t.width + t.width < window.innerWidth) {
            h("right")
          } else {
            h("left")
          }
        }
      }
    },
    onMouseLeave: function () {
      if (e$subMenu) {
        b(function () {
          return false
        })
      }
    },
    onClick: function () {
      if (!e$subMenu && e$value && e$onClick) {
        e$onClick(e$value)
      }
    }
  }, React.createElement(Ce, {
    value: e$value
  }, React.createElement("div", null, e$children, e$subMenu && React.createElement("span", {
    className: $_3181.subMenuArrow
  }, React.createElement($$_94_index.a, {
    type: "icon-arrow-down"
  })))), e$subMenu && React.createElement("div", {
    className: i($_3181.subMenuOverlay, (t = {}, $$_11.a(t, $_3181.visible, _), $$_11.a(t, $_3181.placementLeft, "left" === f), $$_11.a(t, $_3181.placementRight, "right" === f), t))
  }, e$subMenu))
})
export { Ae }
