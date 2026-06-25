/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：13__part-15
 */

"use strict"

import { Ce } from "../../../../../unrestored/shared/1571/2636/13/index__part-14"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"../../../../../unrestored/shared/1571/2636/11"
import * as /* [auto-meaningful-name] */Tools_index from /* 15 */"../../../tools/index"
import * as /* [auto-meaningful-name] */Iconfont_index from /* 94 */"../Iconfont/index"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useRef, useState, useMemo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../../../../../unrestored/shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */Module_318 from /* 318 */"../../../../../unrestored/shared/1571/2636/13/318"
import /* [auto-meaningful-name] */Module_3181 from /* 318 */"../../../../../unrestored/shared/1571/2636/13/318"
var Ae = memo(function (e) {
  var t
  var /* [auto-meaningful-name] */e$value = e.value
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$subMenu = e.subMenu
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var u = useRef(null)
  var d = useState("right")
  var p = Module_10.a(d, 2)
  var f = p[0]
  var h = p[1]
  var m = useState(false)
  var g = Module_10.a(m, 2)
  var _ = g[0]
  var v = g[1]
  var b = useMemo(function () {
    return Tools_index.p(v, 100)
  }, [])
  return React.createElement("div", {
    ref: u,
    className: Module_3181.subMenuItemWrapper,
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
    className: Module_3181.subMenuArrow
  }, React.createElement(Iconfont_index.a, {
    type: "icon-arrow-down"
  })))), e$subMenu && React.createElement("div", {
    className: Classnames(Module_3181.subMenuOverlay, (t = {}, Module_11.a(t, Module_3181.visible, _), Module_11.a(t, Module_3181.placementLeft, "left" === f), Module_11.a(t, Module_3181.placementRight, "right" === f), t))
  }, e$subMenu))
})
export { Ae }
