/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：413__part-15
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_$$_145 from "../../../145"
import * as /* [auto-meaningful-name] */$$_12 from "../12"
import * as /* [auto-meaningful-name] */$$_$$_$$_10_index from "../../../10/index"
import * as /* [auto-meaningful-name] */$$_$$_index from "../../index"
import * as /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_$$_$$_16_index from "../../../16/index"
import * as /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import /* [auto-meaningful-name] */_RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$$_$$_$$_7 from "../../../7"
import * as /* [auto-meaningful-name] */$$_$$_$$_286 from "../../../286"
var xe = function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$parentId = e.parentId
  var /* [auto-meaningful-name] */e$onload = e.onload
  var o = $$_$$_$$_16_index.e(function (e) {
    return e.widgetMap
  }).get(t)
  var /* [auto-meaningful-name] */o$position = o.position
  var /* [auto-meaningful-name] */o$attributes = o.attributes
  var /* [auto-meaningful-name] */o$attributes$color = o$attributes.color
  var /* [auto-meaningful-name] */o$attributes$penSize = o$attributes.penSize
  var /* [auto-meaningful-name] */o$attributes$rotation = o$attributes.rotation
  var p = undefined === o$attributes$rotation ? 0 : o$attributes$rotation
  var /* [auto-meaningful-name] */o$attributes$cursorShape = o$attributes.cursorShape
  var h = undefined === o$attributes$cursorShape ? $$_$$_$$_286.a.NONE : o$attributes$cursorShape
  var m = t
  var g = React.useState(true)
  var _ = $$_$$_$$_10_index.a(g, 2)
  var v = _[0]
  var b = _[1]
  var y = React.useCallback($$_$$_$$_7.a(_RegeneratorRuntime.mark(function e() {
    var n
    return _RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (n = $$_$$_index.getStage(m)) {
              e.next = 4
              break
            }
            console.error("Brush widget get stage error")
            return e.abrupt("return")
          case 4:
            e.next = 6
            return $$_$$_$$_145.d(n, m, o$position, true)
          case 6:
            if (e$onload) {
              e$onload(t)
            }
            $$_$$_$$_145.l(n, m, o$attributes$color)
            $$_$$_$$_145.m(n, m, o$attributes$penSize)
            b(false)
          case 10:
          case "end":
            return e.stop()
        }
      }
    }, e)
  })), [])
  React.useEffect(function () {
    y()
  }, [y])
  var E = React.useCallback($$_$$_$$_7.a(_RegeneratorRuntime.mark(function e() {
    var t
    var /* [auto-meaningful-name] */t$attributes$coordinateRatio
    var o
    var i
    return _RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (e$parentId) {
              e.next = 2
              break
            }
            return e.abrupt("return")
          case 2:
            if (t = $$_12.b(e$parentId)) {
              e.next = 5
              break
            }
            return e.abrupt("return")
          case 5:
            if (t$attributes$coordinateRatio = t.attributes.coordinateRatio, o = undefined === t$attributes$coordinateRatio ? 2 : t$attributes$coordinateRatio, i = $$_$$_index.getStage(m)) {
              e.next = 10
              break
            }
            console.error("Brush widget get stage error")
            return e.abrupt("return")
          case 10:
            e.next = 12
            return $$_$$_$$_145.r(i, m, o$attributes$penSize, o$attributes$color, h, o, true)
          case 12:
          case "end":
            return e.stop()
        }
      }
    }, e)
  })), [m, o$attributes$color, h, e$parentId, o$attributes$penSize])
  React.useEffect(function () {
    if (!v) {
      E()
    }
  }, [v, E])
  React.useLayoutEffect(function () {
    if (!v) {
      var e = $$_$$_index.getActor(t)
      if (e) {
        e.set_rotation(p)
      }
    }
  }, [t, v, p])
  React.useLayoutEffect(function () {
    if (!v) {
      var e = $$_$$_index.getActor(t)
      if (e) {
        e.set_position(o$position.x, o$position.y)
      }
    }
  }, [t, v, o$position])
  return null
}
export { xe }
