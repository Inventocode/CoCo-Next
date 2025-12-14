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
import * as /* [auto-meaningful-name] */_React from "react"
import i from "../8"
import * as /* [auto-meaningful-name] */$$_10_index from "../10/index"
import * as /* [auto-meaningful-name] */$_318 from "./318"
import /* [auto-meaningful-name] */_$_ from "./318"
var Ae = _React.memo(function (e) {
  var t
  var /* [auto-meaningful-name] */e$value = e.value
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$subMenu = e.subMenu
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var u = _React.useRef(null)
  var d = _React.useState("right")
  var p = $$_10_index.a(d, 2)
  var f = p[0]
  var h = p[1]
  var m = _React.useState(false)
  var g = $$_10_index.a(m, 2)
  var _ = g[0]
  var v = g[1]
  var b = _React.useMemo(function () {
    return $$_15.p(v, 100)
  }, [])
  return React.createElement("div", {
    ref: u,
    className: _$_.subMenuItemWrapper,
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
    className: _$_.subMenuArrow
  }, React.createElement($$_94_index.a, {
    type: "icon-arrow-down"
  })))), e$subMenu && React.createElement("div", {
    className: i(_$_.subMenuOverlay, (t = {}, $$_11.a(t, _$_.visible, _), $$_11.a(t, _$_.placementLeft, "left" === f), $$_11.a(t, _$_.placementRight, "right" === f), t))
  }, e$subMenu))
})
export { Ae }
