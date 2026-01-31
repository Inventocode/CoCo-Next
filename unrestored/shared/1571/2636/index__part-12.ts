/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-12
 */

"use strict"

import { useSelector } from "react-redux"
import /* [auto-meaningful-name] */React from "react"
import { useEffect } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_24_index from "./24/index"
import * as /* [auto-meaningful-name] */$_100 from "./100"
import * as /* [auto-meaningful-name] */$_26_index from "./26/index"
import * as /* [auto-meaningful-name] */$_390 from "./390"
var lt = function (e, t) {
  var n = {}
  e.forEach(function (e) {
    if (n[e.path.id]) {
      t[e.userId] = $_390.a
      t[n[e.path.id]] = $_390.a
    } else {
      n[e.path.id] = e.userId
    }
  })
  return t
}
function ut(e) {
  return "focusBlocklyFilter-".concat(e)
}
function dt(e) {
  var /* [auto-meaningful-name] */e$userId = e.userId
  var /* [auto-meaningful-name] */e$color = e.color
  return React.createElement("svg", null, React.createElement("filter", {
    id: ut(e$userId),
    height: "180%",
    width: "160%",
    y: "-40%",
    x: "-30%"
  }, React.createElement("feGaussianBlur", {
    stdDeviation: "1"
  }), React.createElement("feComponentTransfer", {
    result: "outBlur"
  }, React.createElement("feFuncA", {
    type: "table",
    tableValues: "0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1"
  })), React.createElement("feFlood", {
    floodColor: e$color,
    floodOpacity: "1",
    result: "outColor"
  }), React.createElement("feComposite", {
    in: "outColor",
    in2: "outBlur",
    operator: "in",
    result: "outGlow"
  }), React.createElement("feGaussianBlur", {
    in: "SourceAlpha",
    stdDeviation: "6"
  }), React.createElement("feOffset", {
    dx: "0",
    dy: "2"
  }), React.createElement("feComponentTransfer", {
    result: "outShadow"
  }, React.createElement("feFuncA", {
    type: "linear",
    slope: "0.4"
  })), React.createElement("feMerge", null, React.createElement("feMergeNode", {
    in: "outGlow"
  }), React.createElement("feMergeNode", {
    in: "SourceGraphic"
  }))))
}
var ft = React.memo(function (e) {
  var /* [auto-meaningful-name] */e$list = e.list
  var n = useSelector(function (e) {
    return e.oTState.onlineCooperationUserColorRecord
  })
  useEffect(function () {
    if (e$list) {
      document.querySelectorAll(".".concat("focusSvgClassName")).forEach(function (e) {
        return e.style.removeProperty("filter")
      })
      if (e$list.length > 0) {
        e$list.forEach(function (e) {
          var t = $_26_index.z.getBlockById(e.path.id)
          var n = (null === t || undefined === t ? undefined : t.get_top_parent()) || t
          var r = null === n || undefined === n ? undefined : n.get_svg_root()
          if (r) {
            r.style.filter = "url(#".concat(ut(e.userId), ")")
            r.classList.add("focusSvgClassName")
            r.dataset.focusId = e.path.id
          }
        })
      }
    }
  }, [n, e$list])
  if (!e$list) {
    return React.createElement(React.Fragment, null)
  }
  var r = lt(e$list, n.toJSON())
  return React.createElement("svg", {
    width: 0,
    height: 0
  }, e$list.filter(function (e) {
    return "block" === e.path.type
  }).map(function (e) {
    return React.createElement(dt, {
      userId: e.userId,
      key: e.userId,
      color: r[e.userId]
    })
  }))
})
export { lt }
export { ft }
