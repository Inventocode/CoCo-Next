/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：413__part-14
 */

"use strict"

import { Ye } from "./413__part-19"
import * as /* [auto-meaningful-name] */$_index from "./index"
import * as /* [auto-meaningful-name] */$$_12 from "../12"
import * as /* [auto-meaningful-name] */$$_$$_$$_10_index from "../../../10/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_55 from "../../../55"
import * as /* [auto-meaningful-name] */$$_$$_index from "../../index"
import * as /* [auto-meaningful-name] */$$_$$_$$_9 from "../../../9"
import * as /* [auto-meaningful-name] */$$_$$_$$_5 from "../../../../../../../src/editor/widget/built-in/types"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$$_$$_$$_16_index from "../../../16/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_691_index from "../../../691/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_145 from "../../../145"
import "../../../768"
function Se(e, t) {
  var n
  return (null === (n = $$_12.b(t)) || undefined === n ? undefined : n.parentId) === e
}
function Ae(e, t) {
  var n = _React.useMemo(function () {
    return function (e, t) {
      return {
        handleActorClick: function (t) {
          var /* [auto-meaningful-name] */t$target_id = t.target_id
          if (Se(e, t$target_id)) {
            $$_$$_index.unsetPressedActorId(t$target_id)
            $$_$$_index.emitActorPress(t$target_id, t.data.position)
            $$_$$_$$_55.b.playerWidgetLog({
              widgetId: t$target_id,
              widgetType: $$_$$_$$_5.a,
              message: "onWidgetPress"
            })
          }
        },
        handleActorMouseDown: function (n) {
          var /* [auto-meaningful-name] */n$target_id = n.target_id
          if (Se(e, n$target_id)) {
            $$_$$_index.setPressedActorId(n$target_id)
            document.addEventListener("mouseup", function () {
              return $$_$$_index.clearPressedActorIds()
            }, {
              once: true
            })
            $$_$$_index.emitActorPressIn(n$target_id, n.data.position)
            $$_$$_$$_55.b.playerWidgetLog({
              widgetId: n$target_id,
              widgetType: $$_$$_$$_5.a,
              message: "onWidgetPressIn"
            })
            if (t) {
              $$_$$_index.setStageMouse(t, n.data.position)
              $_index.a(function () {
                var e = $$_$$_index.getStageMouse(t)
                return $$_$$_index.emitActorPressHoldAndWait(n$target_id, e || {
                  x: 0,
                  y: 0
                })
              })
              $$_$$_$$_55.b.playerWidgetLog({
                widgetId: n$target_id,
                widgetType: $$_$$_$$_5.a,
                message: "onWidgetPressHold"
              })
            }
          }
        },
        handleActorMouseUp: function (t) {
          var /* [auto-meaningful-name] */t$target_id = t.target_id
          if (Se(e, t$target_id)) {
            $$_$$_index.unsetPressedActorId(t$target_id)
            $$_$$_index.emitActorPressOut(t$target_id, t.data.position)
            $$_$$_$$_55.b.playerWidgetLog({
              widgetId: t$target_id,
              widgetType: $$_$$_$$_5.a,
              message: "onWidgetPressOut"
            })
          }
        }
      }
    }(e, t)
  }, [e, t])
  var /* [auto-meaningful-name] */n$handleActorClick = n.handleActorClick
  var /* [auto-meaningful-name] */n$handleActorMouseDown = n.handleActorMouseDown
  var /* [auto-meaningful-name] */n$handleActorMouseUp = n.handleActorMouseUp
  _React.useEffect(function () {
    if (t) {
      var /* [auto-meaningful-name] */t$events = t.events
      t$events.add_listener("actor:click", n$handleActorClick)
      t$events.add_listener("actor:mousedown", n$handleActorMouseDown)
      t$events.add_listener("actor:touchstart", n$handleActorMouseDown)
      t$events.add_listener("actor:mouseup", n$handleActorMouseUp)
      t$events.add_listener("actor:touchend", n$handleActorMouseUp)
      return function () {
        t$events.remove_listener("actor:click", n$handleActorClick)
        t$events.remove_listener("actor:mousedown", n$handleActorMouseDown)
        t$events.remove_listener("actor:touchstart", n$handleActorMouseDown)
        t$events.remove_listener("actor:mouseup", n$handleActorMouseUp)
        t$events.remove_listener("actor:touchend", n$handleActorMouseUp)
      }
    }
  }, [t, n$handleActorClick, n$handleActorMouseDown, n$handleActorMouseUp])
}
var Ie = _React.memo(function (e) {
  var t = _React.useRef(null)
  var n = _React.useRef(null)
  var r = _React.useRef(null)
  var o = _React.useState(false)
  var l = $$_$$_$$_10_index.a(o, 2)
  var u = l[0]
  var p = l[1]
  var f = _React.useState()
  var h = $$_$$_$$_10_index.a(f, 2)
  var m = h[0]
  var g = h[1]
  var _ = e.id
  var /* [auto-meaningful-name] */e$position = e.position
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$size = e.size
  var /* [auto-meaningful-name] */e$onload = e.onload
  var /* [auto-meaningful-name] */e$widgetIds = e.widgetIds
  var /* [auto-meaningful-name] */e$opacity = e.opacity
  var S = undefined === e$opacity ? 100 : e$opacity
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$attributes$backgroundColor = e$attributes.backgroundColor
  var /* [auto-meaningful-name] */e$attributes$backgroundImage = e$attributes.backgroundImage
  var /* [auto-meaningful-name] */e$attributes$resizeMode = e$attributes.resizeMode
  var /* [auto-meaningful-name] */e$attributes$coordinateRatio = e$attributes.coordinateRatio
  var k = undefined === e$attributes$coordinateRatio ? 2 : e$attributes$coordinateRatio
  var /* [auto-meaningful-name] */e$size$width = e$size.width
  var /* [auto-meaningful-name] */e$size$height = e$size.height
  var M = _
  var L = _
  var P = $$_$$_$$_16_index.e(function (e) {
    return e.imageFileMap
  })
  !function (e, t) {
    _React.useEffect(function () {
      if (t) {
        var n = function (n) {
          var /* [auto-meaningful-name] */n$target_id = n.target_id
          var /* [auto-meaningful-name] */n$data = n.data
          if (n$target_id === e) {
            $$_$$_index.setStageMouse(t, n$data.position)
            $$_$$_index.unsetPressedCanvasId(e)
            $$_$$_index.emitCanvasPress(e, n$data.position)
            $$_$$_$$_55.b.playerWidgetLog({
              widgetId: e,
              widgetType: $$_$$_$$_5.f,
              message: "onWidgetPress"
            })
          }
        }
        var r = function (n) {
          var /* [auto-meaningful-name] */n$target_id = n.target_id
          var /* [auto-meaningful-name] */n$data = n.data
          if (n$target_id === e) {
            $$_$$_index.setPressedCanvasId(e)
            document.addEventListener("mouseup", function () {
              return $$_$$_index.clearPressedCanvasIds()
            }, {
              once: true
            })
            $$_$$_index.setStageMouse(t, n$data.position)
            $$_$$_index.emitCanvasPressIn(e, n$data.position)
            $$_$$_$$_55.b.playerWidgetLog({
              widgetId: e,
              widgetType: $$_$$_$$_5.f,
              message: "onWidgetPressIn"
            })
            $_index.a(function () {
              var n = $$_$$_index.getStageMouse(t)
              return $$_$$_index.emitCanvasPressHoldAndWait(e, n || {
                x: 0,
                y: 0
              })
            })
            $$_$$_$$_55.b.playerWidgetLog({
              widgetId: e,
              widgetType: $$_$$_$$_5.f,
              message: "onWidgetPressHold"
            })
          }
        }
        var o = function (n) {
          var /* [auto-meaningful-name] */n$target_id = n.target_id
          var /* [auto-meaningful-name] */n$data = n.data
          if (n$target_id === e) {
            $$_$$_index.unsetPressedCanvasId(e)
            $$_$$_index.setStageMouse(t, n$data.position)
            $$_$$_index.emitCanvasPressOut(e, n$data.position)
            $$_$$_$$_55.b.playerWidgetLog({
              widgetId: e,
              widgetType: $$_$$_$$_5.f,
              message: "onWidgetPressOut"
            })
          }
        }
        var i = function (e) {}
        var a = function (n) {
          var /* [auto-meaningful-name] */n$target_id = n.target_id
          var /* [auto-meaningful-name] */n$data = n.data
          if (n$target_id === e) {
            $$_$$_index.setStageMouse(t, n$data.position)
          }
        }
        var /* [auto-meaningful-name] */t$events = t.events
        t$events.add_listener("stage:click", n)
        t$events.add_listener("stage:mousedown", r)
        t$events.add_listener("stage:mouseup", o)
        t$events.add_listener("stage:touchstart", r)
        t$events.add_listener("stage:touchend", o)
        t$events.add_listener("stage:swipe", i)
        t$events.add_listener("stage:mousemove", a)
        t$events.add_listener("stage:touchmove", a)
        return function () {
          t$events.remove_listener("stage:click", n)
          t$events.remove_listener("stage:mousedown", r)
          t$events.remove_listener("stage:mouseup", o)
          t$events.remove_listener("stage:touchstart", r)
          t$events.remove_listener("stage:touchend", o)
          t$events.remove_listener("stage:swipe", i)
          t$events.remove_listener("stage:mousemove", a)
          t$events.remove_listener("stage:touchmove", a)
        }
      }
    }, [t, e])
  }(M, m)
  Ae(M, m)
  _React.useEffect(function () {
    if (null === n || undefined === n ? undefined : n.current) {
      var e = $$_$$_$$_691_index.a()
      r.current = e
      e.init({
        renderer: {
          width: e$size$width * k,
          height: e$size$height * k,
          view: n.current,
          preserveDrawingBuffer: true,
          resolution: 2 / k,
          forceCanvas: true
        },
        id: M
      })
      e.components.init({
        actor_dialog_manager: true
      })
      e.scenes.load_scene(L, "")
      e.scenes.set_current_scene(L)
      g(e)
      $$_$$_index.setStage(M, e)
      e.start_rendering()
      e.stage_animation.init().finally(function () {
        p(true)
      })
      return function () {
        $$_$$_index.deleteStage(M)
      }
    }
  }, [])
  _React.useEffect(function () {
    var /* [auto-meaningful-name] */r$current = r.current
    if (r$current) {
      $$_$$_$$_145.q(r$current, e$size$width * k, e$size$height * k)
    }
  }, [k, e$size$width, e$size$height])
  _React.useEffect(function () {
    var /* [auto-meaningful-name] */r$current = r.current
    if (r$current) {
      $$_$$_$$_145.n(r$current, e$attributes$backgroundColor)
    }
  }, [e$attributes$backgroundColor])
  _React.useEffect(function () {
    var /* [auto-meaningful-name] */r$current = r.current
    if (r$current) {
      var t
      if (e$attributes$backgroundImage) {
        var n = P.get(e$attributes$backgroundImage)
        if (n) {
          t = $$_$$_$$_9.lb(n)
        } else {
          if (e$attributes$backgroundImage.includes("://") || e$attributes$backgroundImage.includes("data:image/")) {
            t = e$attributes$backgroundImage
          }
        }
      }
      $$_$$_$$_145.o(r$current, t, e$attributes$resizeMode)
    }
  }, [e$attributes$backgroundImage, P, e$attributes$resizeMode])
  var /* [auto-meaningful-name] */e$widgetIds$length = e$widgetIds.length
  var F = 0
  _React.useEffect(function () {
    if (0 === e$widgetIds$length && e$onload) {
      e$onload(M)
    }
  }, [e$widgetIds$length, e$onload, M])
  var G = function (e) {
    if (++F >= e$widgetIds$length && e$onload) {
      e$onload(M)
    }
  }
  return React.createElement(React.Fragment, null, React.createElement("div", {
    id: _,
    "data-role": $$_$$_$$_5.M,
    "data-widget-type": $$_$$_$$_5.f,
    ref: t,
    style: {
      top: e$position.y,
      left: e$position.x,
      height: e$size.height,
      width: e$size.width,
      visibility: e$visible ? undefined : "hidden",
      pointerEvents: e$visible ? undefined : "none",
      opacity: S / 100
    }
  }, React.createElement("canvas", {
    ref: n,
    style: {
      width: "100%",
      height: "100%"
    }
  })), u && e$widgetIds.map(function (e) {
    if (r.current) {
      $$_$$_index.setStage(e, r.current)
    }
    return Ye({
      widgetId: e,
      onload: G
    })
  }))
})
export { Ie }
