/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-62
 */

"use strict"

import * as Jd from "./33"
import * as D from "./6"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_691_index from "./691/index"
import * as /* [auto-meaningful-name] */$_145 from "./145"
import * as /* [auto-meaningful-name] */$_215 from "./215"
import * as /* [auto-meaningful-name] */$_741 from "./741"
import /* [auto-meaningful-name] */_$_ from "./741"
var gh = _React.memo(function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$stage = e.stage
  var /* [auto-meaningful-name] */e$updateTimes = e.updateTimes
  var /* [auto-meaningful-name] */e$coordinateRatio = e.coordinateRatio
  var i = _React.useState()
  var a = $_10_index.a(i, 2)
  var s = a[0]
  var c = a[1]
  var l = $_16_index.e(function (e) {
    return e.project.selectedWidgetId
  })
  _React.useEffect(function () {
    if (l === t && e$stage && t) {
      var e = Jd.Cb(t)
      c(D.a({}, e))
    } else {
      c(undefined)
    }
  }, [t, l, e$stage, e$updateTimes])
  var u = (null === s || undefined === s ? undefined : s.parentId) ? Jd.Cb(s.parentId) : undefined
  var d = (null === e$stage || undefined === e$stage ? undefined : e$stage.actors.get_actor(t)) || {}
  var /* [auto-meaningful-name] */d$value = d.value
  var /* [auto-meaningful-name] */d$is_error = d.is_error
  if (!s || !u || !d$is_error || !d$value || d$is_error(d$value)) {
    return null
  }
  var g = d$value
  var v = Math.max(g.get_width(), 54) / e$coordinateRatio
  var b = Math.max(g.get_height(), 54) / e$coordinateRatio
  var y = g.get_position()
  var E = g.get_center_position()
  var O = u.position.x + u.size.width / 2
  var w = u.position.y + u.size.height / 2
  var C = O + y.x / e$coordinateRatio
  var T = w - y.y / e$coordinateRatio
  var A = C - u.position.x
  var I = T - u.position.y
  var j = (E.x - y.x) / e$coordinateRatio
  var N = (y.y - E.y) / e$coordinateRatio
  var R = 3 / e$coordinateRatio
  var k = g.get_rotation()
  var x = Math.round(-180 * k / Math.PI)
  return React.createElement("div", {
    className: _$_.actorSelectedBox,
    style: {
      display: s.visible ? undefined : "none",
      position: "absolute",
      width: v,
      height: b,
      left: A,
      top: I,
      transformOrigin: "".concat(j, "px ").concat(N, "px"),
      transform: "rotate(".concat(x, "deg)"),
      zIndex: -1
    }
  }, React.createElement("div", {
    style: {
      position: "absolute",
      width: v,
      height: b,
      left: j,
      top: N,
      boxSizing: "content-box",
      pointerEvents: "none",
      borderWidth: R,
      borderColor: "white",
      borderStyle: "solid",
      transform: "translate(-50%, -50%)",
      filter: "drop-shadow(#7d7d7d 0px 0px 0.8px)"
    }
  }))
})
export { gh }
