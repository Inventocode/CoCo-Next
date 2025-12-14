/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：13__part-13
 */

"use strict"

import { Q } from "./index__part-6"
import * as /* [auto-meaningful-name] */$$_94_index from "../94/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import i from "../8"
import * as /* [auto-meaningful-name] */$$_10_index from "../10/index"
import "./873"
var be = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$showDropdownIcon = e.showDropdownIcon
  var o = undefined === e$showDropdownIcon || e$showDropdownIcon
  var /* [auto-meaningful-name] */e$overlay = e.overlay
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var d = _React.useState(false)
  var p = $$_10_index.a(d, 2)
  var f = p[0]
  var h = p[1]
  var m = _React.useRef(null)
  function g(e) {
    var /* [auto-meaningful-name] */m$current
    var /* [auto-meaningful-name] */_m$current
    if (e) {
      if (!(null === (m$current = m.current) || undefined === m$current)) {
        m$current.showContent()
      }
    } else {
      if (!(null === (_m$current = m.current) || undefined === _m$current)) {
        _m$current.hideContent()
      }
    }
  }
  return React.createElement("div", {
    className: i("coco-dropdown", e$className),
    onClick: function () {
      var /* [auto-meaningful-name] */m$current
      if (e$onClick) {
        e$onClick(!!(null === (m$current = m.current) || undefined === m$current ? undefined : m$current.visible), g)
      }
    }
  }, React.createElement(Q, {
    ref: m,
    contentClassName: "coco-dropdown-overlay",
    content: React.createElement("div", {
      onClick: function () {
        var /* [auto-meaningful-name] */m$current
        if (!(null === (m$current = m.current) || undefined === m$current)) {
          m$current.hideContent()
        }
        h(false)
      }
    }, e$overlay),
    onOpen: function () {
      h(true)
    },
    onClose: function () {
      h(false)
    }
  }, React.createElement("div", {
    className: i("coco-dropdown-selector", {
      "coco-dropdown-active": f
    }),
    onClick: function () {
      var /* [auto-meaningful-name] */m$current
      var /* [auto-meaningful-name] */_m$current2
      if (null === (m$current = m.current) || undefined === m$current ? undefined : m$current.visible) {
        if (!(null === (_m$current2 = m.current) || undefined === _m$current2)) {
          _m$current2.hideContent()
        }
      }
    }
  }, e$children, o && React.createElement($$_94_index.a, {
    type: "icon-dropdown-down",
    className: i("coco-dropdown-down-icon")
  }))))
})
var ye = _React.createContext(null)
var /* [auto-meaningful-name] */ye$Provider = ye.Provider
var Oe = ye
export { be }
export { ye$Provider as Ee }
export { Oe }
