/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-66
 */

"use strict"

import { ad } from "./index__part-29"
import { Ch } from "./index__part-64"
import { Nh } from "./index__part-65"
import * as /* [auto-meaningful-name] */$_277 from "./277"
import * as /* [auto-meaningful-name] */$_215 from "./215"
import * as /* [auto-meaningful-name] */$_145 from "./145"
import * as Jd from "./33"
import * as An from "./5"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as O from "./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_286 from "./286"
var kh = function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$position = e.position
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$parentId = e.parentId
  var /* [auto-meaningful-name] */e$zIndex = e.zIndex
  var a = undefined === e$zIndex ? 0 : e$zIndex
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$attributes$color = e$attributes.color
  var /* [auto-meaningful-name] */e$attributes$penSize = e$attributes.penSize
  var /* [auto-meaningful-name] */e$attributes$rotation = e$attributes.rotation
  var /* [auto-meaningful-name] */e$attributes$cursorShape = e$attributes.cursorShape
  var p = undefined === e$attributes$cursorShape ? $_286.a.NONE : e$attributes$cursorShape
  var m = _React.useState(true)
  var g = $_10_index.a(m, 2)
  var v = g[0]
  var b = g[1]
  var y = _React.useState({
    x: 0,
    y: 0
  })
  var w = $_10_index.a(y, 2)
  var C = w[0]
  var T = w[1]
  var A = _React.useState({
    translateX: 0,
    translateY: 0,
    angle: 0
  })
  var I = $_10_index.a(A, 2)
  var j = I[0]
  var N = I[1]
  var R = _React.useState(false)
  var k = $_10_index.a(R, 2)
  var x = k[0]
  var D = k[1]
  var M = $_16_index.e(function (e) {
    return e.project.selectedWidgetId
  })
  var L = t
  var P = M === L
  var B = _React.useCallback(O.a(RegeneratorRuntime.mark(function e() {
    var t
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (t = $_215.b(L)) {
              e.next = 4
              break
            }
            console.error("Brush widget get stage error")
            return e.abrupt("return")
          case 4:
            e.next = 6
            return $_145.d(t, L, e$position, false)
          case 6:
            b(false)
          case 7:
          case "end":
            return e.stop()
        }
      }
    }, e)
  })), [])
  _React.useEffect(function () {
    B()
  }, [B])
  var F = _React.useCallback(O.a(RegeneratorRuntime.mark(function e() {
    var t
    var /* [auto-meaningful-name] */t$attributes$coordinateRatio
    var r
    var i
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (e$parentId) {
              e.next = 2
              break
            }
            return e.abrupt("return")
          case 2:
            if (t = Jd.Cb(e$parentId)) {
              e.next = 5
              break
            }
            return e.abrupt("return")
          case 5:
            if (t$attributes$coordinateRatio = t.attributes.coordinateRatio, r = undefined === t$attributes$coordinateRatio ? 2 : t$attributes$coordinateRatio, i = $_215.b(L)) {
              e.next = 10
              break
            }
            console.error("Brush widget get stage error")
            return e.abrupt("return")
          case 10:
            e.next = 12
            return $_145.r(i, L, e$attributes$penSize, e$attributes$color, p, r, false)
          case 12:
          case "end":
            return e.stop()
        }
      }
    }, e)
  })), [L, e$attributes$color, p, e$parentId, e$attributes$penSize])
  _React.useEffect(function () {
    var e = $_215.b(L)
    if (e) {
      var t = function (e) {
        if (e.target_id === L) {
          D(false)
        }
      }
      var n = function (e) {
        if (e.target_id === L) {
          D(true)
        }
      }
      var /* [auto-meaningful-name] */e$events = e.events
      e$events.add_listener("actor:drag_start", n)
      e$events.add_listener("actor:drag_end", t)
      return function () {
        e$events.remove_listener("actor:drag_start", n)
        e$events.remove_listener("actor:drag_end", t)
      }
    }
  }, [L, e$parentId, e$position.x])
  _React.useEffect(function () {
    if (e$parentId) {
      var e = Jd.Cb(e$parentId)
      if (e) {
        var /* [auto-meaningful-name] */e$size = e.size
        var /* [auto-meaningful-name] */e$size$width = e$size.width
        var /* [auto-meaningful-name] */e$size$height = e$size.height
        var /* [auto-meaningful-name] */e$attributes$coordinateRatio = e.attributes.coordinateRatio
        var s = undefined === e$attributes$coordinateRatio ? 2 : e$attributes$coordinateRatio
        var c = e$size$width / 2 + e$position.x / s
        var l = e$size$height / 2 - e$position.y / s
        T({
          x: c,
          y: l
        })
      }
    }
  }, [e$position, e$parentId])
  _React.useEffect(function () {
    if (!v) {
      var e = $_215.b(L)
      if (e) {
        var t = e.actors.get_actor(L)
        var /* [auto-meaningful-name] */t$is_error = t.is_error
        var /* [auto-meaningful-name] */t$value = t.value
        if (!t$is_error(t$value)) {
          t$value.set_z_index(a)
          e.render()
        }
      }
    }
  }, [L, v, a])
  _React.useEffect(function () {
    if (!v) {
      var e = $_215.b(L)
      if (e) {
        $_145.i(e, L, e$attributes$rotation)
        var t = e.actors.get_actor(L)
        var /* [auto-meaningful-name] */t$is_error = t.is_error
        var /* [auto-meaningful-name] */t$value = t.value
        if (t$is_error(t$value)) {
          console.error("Get actor error")
        } else {
          var o = t$value
          var i = o.get_position()
          var a = o.get_center_position()
          var s = o.get_rotation()
          var c = (a.x - i.x) / 2
          var l = (i.y - a.y) / 2
          var d = Math.round(-180 * s / Math.PI)
          N({
            translateX: c,
            translateY: l,
            angle: d
          })
        }
      }
    }
  }, [v, L, e$attributes$rotation])
  _React.useEffect(function () {
    if (!v) {
      F()
    }
  }, [v, F])
  _React.useEffect(function () {
    if (!v) {
      var e = $_215.b(L)
      if (e) {
        $_145.h(e, L, e$position)
      } else {
        console.error("Brush widget get stage error")
      }
    }
  }, [e$position, L, v])
  _React.useEffect(function () {
    if (!v) {
      var e = $_215.b(L)
      if (e) {
        $_145.k(e, L, e$visible)
      } else {
        console.error("Brush widget get stage error")
      }
    }
  }, [e$visible, L, v])
  _React.useEffect(function () {
    if (M === t) {
      var e = $_215.b(t)
      var n = null === e || undefined === e ? undefined : e.components.get_editor()
      if (!(null === n || undefined === n)) {
        n.set_btns_visible(false)
      }
      if (!(null === n || undefined === n)) {
        n.set_target_actor(t)
      }
    }
  }, [t, M, v])
  _React.useEffect(function () {
    var e = document.querySelector("#".concat(e$parentId, "[data-role=\"WIDGET\"]"))
    if (e instanceof HTMLDivElement) {
      if (x) {
        e.classList.add("actor-moving")
      } else {
        e.classList.remove("actor-moving")
      }
    }
  }, [x, e$parentId])
  return P && !x && e$visible ? React.createElement("div", {
    style: {
      position: "absolute",
      left: C.x,
      top: C.y,
      transformOrigin: "".concat(j.translateX, "px ").concat(j.translateY, "px"),
      transform: "rotate(".concat(j.angle, "deg)")
    },
    id: L
  }, React.createElement("div", {
    style: {
      position: "absolute",
      left: j.translateX + 25,
      top: j.translateY - 18
    }
  }, React.createElement(ad, null))) : null
}
var xh = {
  icon: "icon-widget-brush",
  title: "defaultBrushWidgetTitle",
  previewAreaWidgetTitle: "brush",
  type: An.c,
  editConfig: Ch,
  isInvisibleWidget: $_277.i,
  widget: {
    isGlobalWidget: $_277.h,
    size: {
      width: 0,
      height: 0
    },
    attributes: {
      color: $_277.a,
      penSize: $_277.c,
      rotation: 0,
      cursorShape: $_286.a.NONE
    }
  },
  blockConfig: Nh,
  component: kh
}
var Dh = [
  {
    type: "WidgetTitle",
    hasDisableOrVisible: true
  }, {
    type: "VisibleSwitch"
  }, {
    type: "StyleEditorSwitch"
  }, {
    type: "ScaleInputRow",
    key: "scaleAndLock",
    label: "actorScale",
    multiple: 100
  }, {
    type: "DegreeInputRow",
    key: "rotation",
    label: "rotation"
  }, {
    type: "FlipInputRow",
    key: "flipped",
    label: "flip"
  }, {
    type: "WidgetOpacity"
  }, {
    type: "Coordinate",
    label: "relativeCoordinate"
  }
]
export { xh }
export { Dh }
