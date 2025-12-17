/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：413__part-16
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_$$_7 from "../../../7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$$_$$_$$_145 from "../../../145"
import * as /* [auto-meaningful-name] */$$_$$_$$_10_index from "../../../10/index"
import * as /* [auto-meaningful-name] */$$_$$_index from "../../index"
import * as /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_$$_$$_16_index from "../../../16/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_144 from "../../../144"
var Me = function () {
  var e = $$_$$_$$_7.a(RegeneratorRuntime.mark(function e(t, n, r) {
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            return e.abrupt("return", Promise.all(r.map(function (e) {
              return $$_$$_$$_145.a(t, n, e)
            })))
          case 1:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))
  return function (t, n, r) {
    return e.apply(this, arguments)
  }
}()
var Le = function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$onload = e.onload
  var r = $$_$$_$$_16_index.e(function (e) {
    return e.widgetMap
  }).get(t)
  var /* [auto-meaningful-name] */r$opacity = r.opacity
  var /* [auto-meaningful-name] */r$position = r.position
  var /* [auto-meaningful-name] */r$parentId = r.parentId
  var /* [auto-meaningful-name] */r$visible = r.visible
  var /* [auto-meaningful-name] */r$attributes = r.attributes
  var /* [auto-meaningful-name] */r$attributes$selectedStyleId = r$attributes.selectedStyleId
  var /* [auto-meaningful-name] */r$attributes$flipped = r$attributes.flipped
  var /* [auto-meaningful-name] */r$attributes$scaleAndLock = r$attributes.scaleAndLock
  var /* [auto-meaningful-name] */r$attributes$scale = r$attributes.scale
  var /* [auto-meaningful-name] */r$attributes$rotation = r$attributes.rotation
  var /* [auto-meaningful-name] */r$attributes$actionList = r$attributes.actionList
  var /* [auto-meaningful-name] */r$attributes$pivotToCenter = r$attributes.pivotToCenter
  var v = React.useState(false)
  var b = $$_$$_$$_10_index.a(v, 2)
  var y = b[0]
  var E = b[1]
  var O = t
  var C = $$_$$_$$_16_index.e(function (e) {
    return e.imageFileMap
  })
  React.useEffect(function () {
    if (y) {
      var e = $$_$$_index.getActor(t)
      if (!e) {
        return
      }
      e.set_position(r$position.x, r$position.y)
    }
  }, [t, y, r$position.x, r$position.y])
  React.useEffect(function () {
    if (y) {
      var e = $$_$$_index.getActor(t)
      if (!e) {
        return
      }
      if (!r$attributes$scaleAndLock) {
        return
      }
      e.set_scale(r$attributes$scaleAndLock.x, r$attributes$scaleAndLock.y)
    }
  }, [t, y, r$attributes$scaleAndLock])
  React.useEffect(function () {
    if (y) {
      var e = $$_$$_index.getActor(t)
      if (!e) {
        return
      }
      e.set_visible(r$visible)
    }
  }, [t, y, r$visible])
  React.useEffect(function () {
    if (y) {
      var e = $$_$$_index.getActor(t)
      if (e) {
        e.set_current_style(r$attributes$selectedStyleId)
      }
    }
  }, [O, t, y, r$attributes$selectedStyleId])
  React.useEffect(function () {
    if (y) {
      var e = $$_$$_index.getActor(t)
      if (!e) {
        return
      }
      e.set_rotation(r$attributes$rotation)
    }
  }, [t, y, r$attributes$rotation])
  React.useEffect(function () {
    if (y) {
      var e = $$_$$_index.getActor(t)
      if (!e) {
        return
      }
      e.set_alpha((undefined === r$opacity ? 100 : r$opacity) / 100)
    }
  }, [t, y, r$opacity])
  React.useEffect(function () {
    if (y) {
      var e = $$_$$_index.getActor(t)
      if (!e || !r$attributes$flipped) {
        return
      }
      if (r$attributes$flipped.horizontal !== e.get_horizontal_flipped()) {
        e.set_flipped("horizontal")
      }
      if (r$attributes$flipped.vertical !== e.get_vertical_flipped()) {
        e.set_flipped("vertical")
      }
    }
  }, [t, y, r$attributes$flipped])
  var T = React.useCallback(function () {
    var e = $$_$$_$$_7.a(RegeneratorRuntime.mark(function e(t) {
      var r
      var /* [auto-meaningful-name] */RR$attributes$scaleAndLockR$attributes$scaleXR$attributes$scaleYR$attributes$scaleX1Y1$x
      var i
      var a
      var /* [auto-meaningful-name] */a$is_error
      var /* [auto-meaningful-name] */a$value
      var b
      var y
      var w
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (r$parentId) {
                e.next = 2
                break
              }
              return e.abrupt("return")
            case 2:
              if (RR$attributes$scaleAndLockR$attributes$scaleXR$attributes$scaleYR$attributes$scaleX1Y1$x = (r = r$attributes$scaleAndLock || (r$attributes$scale ? {
                x: r$attributes$scale,
                y: r$attributes$scale
              } : {
                x: 1,
                y: 1
              })).x, i = r.y, a = t.actors.load_actor({
                actor_id: O,
                parent_scene_id: r$parentId,
                position: r$position,
                scale: {
                  x: RR$attributes$scaleAndLockR$attributes$scaleXR$attributes$scaleYR$attributes$scaleX1Y1$x,
                  y: i
                },
                rotation: r$attributes$rotation
              }), a$is_error = a.is_error, a$value = a.value, !a$is_error(a$value)) {
                e.next = 7
                break
              }
              console.error("load_actor error")
              return e.abrupt("return")
            case 7:
              b = []
              r$attributes$actionList.forEach(function (e) {
                e.styleList.forEach(function (e) {
                  var t = C.get(e.source)
                  var n = (null === t || undefined === t ? undefined : t.cdnUrl) || (null === t || undefined === t ? undefined : t.source) || ""
                  var r = {
                    id: e.id,
                    source: n
                  }
                  b.push(r)
                })
              })
              e.next = 11
              return Me(t, a$value, [].concat(b, [$$_$$_$$_144.h]))
            case 11:
              if (r$attributes$selectedStyleId) {
                a$value.set_current_style(r$attributes$selectedStyleId)
              } else {
                a$value.set_current_style($$_$$_$$_144.h.id)
              }
              a$value.set_visible(r$visible)
              a$value.set_draggable(false)
              y = r$position.x + ((null === r$attributes$pivotToCenter || undefined === r$attributes$pivotToCenter ? undefined : r$attributes$pivotToCenter.x) || 0)
              w = r$position.y + ((null === r$attributes$pivotToCenter || undefined === r$attributes$pivotToCenter ? undefined : r$attributes$pivotToCenter.y) || 0)
              a$value.set_position(y, w)
              if (r$attributes$flipped) {
                if (r$attributes$flipped.horizontal !== a$value.get_horizontal_flipped()) {
                  a$value.set_flipped("horizontal")
                }
                if (r$attributes$flipped.vertical !== a$value.get_vertical_flipped()) {
                  a$value.set_flipped("vertical")
                }
              }
              a$value.set_scale(RR$attributes$scaleAndLockR$attributes$scaleXR$attributes$scaleYR$attributes$scaleX1Y1$x, i)
              a$value.set_rotation(r$attributes$rotation)
              a$value.set_pivot_by_stage_point(r$position.x, r$position.y)
              E(true)
              if (e$onload) {
                e$onload(O)
              }
            case 23:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))
    return function (t) {
      return e.apply(this, arguments)
    }
  }(), [])
  React.useEffect(function () {
    var e = $$_$$_index.getStage(O)
    if (e) {
      T(e)
    } else {
      console.error("ActorWidget get Stage error")
    }
  }, [O, T])
  return null
}
export { Le }
