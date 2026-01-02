/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-64
 */

"use strict"

import { lh, uh } from "./index__part-61"
import { gh } from "./index__part-62"
import { bh } from "./index__part-63"
import /* [auto-meaningful-name] */$_741 from "./741"
import * as /* [auto-meaningful-name] */$_215 from "./215"
import * as /* [auto-meaningful-name] */$_145 from "./145"
import * as /* [auto-meaningful-name] */$_691_index from "./691/index"
import * as /* [auto-meaningful-name] */$_244 from "./244"
import * as /* [auto-meaningful-name] */$_105 from "./105"
import * as /* [auto-meaningful-name] */$_42_index from "./42/index"
import * as Jd from "./33"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_widget_builtIn_types from "../../../../src/editor/widget/built-in/types"
import * as wn from "./90"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as D from "./6"
import * as k from "./11"
import N from "./8"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as O from "./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import "./768"
var yh = _React.memo(function (e) {
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
  var v = g.get_width() / e$coordinateRatio
  var b = g.get_height() / e$coordinateRatio
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
  var R = g.get_rotation()
  var k = Math.round(-180 * R / Math.PI)
  return React.createElement("div", {
    className: $_741.actorStar,
    style: {
      pointerEvents: "none",
      display: s.visible ? undefined : "none",
      position: "absolute",
      width: v,
      height: b,
      left: A,
      top: I,
      transformOrigin: "".concat(j, "px ").concat(N, "px"),
      transform: "rotate(".concat(k, "deg)"),
      zIndex: 9
    }
  }, React.createElement("div", {
    style: {
      position: "absolute",
      width: 0,
      height: 0,
      left: j,
      top: N,
      boxSizing: "content-box",
      transform: "translate(-50%, -50%)",
      filter: "drop-shadow(#ababab 0px 0px 0.8px)"
    }
  }))
})
var Eh = 0
var Oh = _React.memo(function (e) {
  var t
  var n = _React.useRef(null)
  var r = _React.useRef(null)
  var o = _React.useRef(null)
  var i = _React.useState(false)
  var a = $_10_index.a(i, 2)
  var s = a[0]
  var c = a[1]
  var l = _React.useState(false)
  var u = $_10_index.a(l, 2)
  var d = u[0]
  var p = u[1]
  var m = _React.useState("")
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
  var A = $_16_index.e(function (e) {
    return e.common.stageState.isActorDragging
  })
  var I = _React.useMemo(function () {
    return new Set()
  }, [])
  var j = _React.useCallback(function () {
    return b("")
  }, [])
  var R = _React.useRef(true)
  var x = _React.useRef(false)
  var M = e.id
  var /* [auto-meaningful-name] */e$position = e.position
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$size = e.size
  var /* [auto-meaningful-name] */e$widgetIds = e.widgetIds
  var /* [auto-meaningful-name] */e$opacity = e.opacity
  var W = undefined === e$opacity ? 100 : e$opacity
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$attributes$backgroundColor = e$attributes.backgroundColor
  var /* [auto-meaningful-name] */e$attributes$backgroundImage = e$attributes.backgroundImage
  var /* [auto-meaningful-name] */e$attributes$resizeMode = e$attributes.resizeMode
  var /* [auto-meaningful-name] */e$attributes$coordinateRatio = e$attributes.coordinateRatio
  var q = undefined === e$attributes$coordinateRatio ? 2 : e$attributes$coordinateRatio
  var /* [auto-meaningful-name] */e$size$width = e$size.width
  var /* [auto-meaningful-name] */e$size$height = e$size.height
  var Z = M
  var J = M
  var $ = $_16_index.d()
  var ee = $_16_index.e(function (e) {
    return e.project.selectedWidgetId
  })
  var te = $_16_index.e(function (e) {
    return e.common.stageScale
  })
  var ne = _React.useCallback(function (e) {
    var /* [auto-meaningful-name] */e$events = e.events
    var n = function (t) {
      var n
      var r = e.actors.get_actor(t)
      var /* [auto-meaningful-name] */r$value = r.value
      if (!(0, r.is_error)(r$value)) {
        $($$_$$_$$_$$_src_editor_redux_common_actions.ug(t))
        j()
        if (!(null === (n = e.components.get_editor()) || undefined === n)) {
          n.set_target_actor(t)
        }
        var i = r$value.get_center_position()
        var a = e.get_view()
        var s = a.getClientRects()[0]
        if (s) {
          var c = s.x + s.width / 2 + i.x * s.width / a.clientWidth
          var l = s.y + s.height / 2 - i.y * s.height / a.clientHeight
          setTimeout(function () {
            $($$_$$_$$_$$_src_editor_redux_common_actions.Og({
              position: {
                x: c,
                y: l
              },
              visible: true,
              widgetId: t
            }))
          }, 20)
        }
      }
    }
    e$events.add_listener("actor:update", function (e) {
      var /* [auto-meaningful-name] */e$target_id = e.target_id
      if (e.data.position && e$target_id) {
        I.add(e$target_id)
      }
    })
    e$events.add_listener("actor:mousedown", function (e) {
      R.current = false
      j()
    })
    e$events.add_listener("actor:selected", function (e) {
      var /* [auto-meaningful-name] */e$target_id = e.target_id
      $($$_$$_$$_$$_src_editor_redux_common_actions.ug(e$target_id))
      $($$_$$_$$_$$_src_editor_redux_common_actions.ki("screen"))
      j()
    })
    e$events.add_listener("actor:drag_start", function (e) {
      R.current = false
      j()
    })
    e$events.add_listener("actor:drag_end", function (e) {
      var /* [auto-meaningful-name] */e$target_id = e.target_id
      var /* [auto-meaningful-name] */e$data$position = e.data.position
      var /* [auto-meaningful-name] */e$data$position$x = e$data$position.x
      var /* [auto-meaningful-name] */e$data$position$y = e$data$position.y
      var i = {
        x: Math.round(e$data$position$x),
        y: Math.round(e$data$position$y)
      }
      $($$_$$_$$_$$_src_editor_redux_common_actions.Lg(e$target_id, "position", i))
    })
    e$events.add_listener("actor:rightclick", function (e) {
      x.current = true
      n(e.target_id)
    })
    e$events.add_listener("editor:rightclick", function (e) {
      x.current = true
      var /* [auto-meaningful-name] */e$target_id = e.target_id
      if (e$target_id) {
        n(e$target_id)
      }
    })
    e$events.add_listener("stage:rightclick", function (e) {
      var /* [auto-meaningful-name] */e$target_id = e.target_id
      var /* [auto-meaningful-name] */e$data = e.data
      if (e$target_id === Z) {
        if (x.current) {
          x.current = false
        } else if ($($$_$$_$$_$$_src_editor_redux_common_actions.ug(Z)), r.current) {
          var o = r.current.getBoundingClientRect()
          var i = (e$data.position.x + o.width) / 2 + o.left
          var a = (o.height - e$data.position.y) / 2 + o.top
          setTimeout(function () {
            $($$_$$_$$_$$_src_editor_redux_common_actions.Og({
              position: {
                x: i,
                y: a
              },
              visible: true,
              widgetId: Z
            }))
          }, 20)
        }
      }
    })
  }, [I, j, $, Z])
  var re = _React.useCallback(function () {
    if (n.current) {
      n.current.addEventListener("mousedown", function (e) {
        var /* [auto-meaningful-name] */o$current
        var i
        if (R.current) {
          if (e.target === r.current) {
            var /* [auto-meaningful-name] */n$current
            var s = null === (o$current = o.current) || undefined === o$current ? undefined : o$current.components.get_editor()
            if (null === (i = s) || undefined === i ? undefined : i.is_dragging_rotate_center) {
              e.stopPropagation()
            } else if (null === s || undefined === s ? undefined : s.get_is_in_pivot_mode()) {
              s.toggle_pivot_mode(false)
              if (!(null === (n$current = n.current) || undefined === n$current)) {
                n$current.classList.remove("actor-changing")
              }
            }
          } else {
            e.stopPropagation()
          }
        } else {
          e.stopPropagation()
        }
      })
      n.current.addEventListener("mousemove", function (e) {
        if (!R.current) {
          e.stopPropagation()
        }
        if (!(e.target === r.current)) {
          e.stopPropagation()
        }
      })
      n.current.addEventListener("mouseup", function (e) {
        if (!R.current) {
          e.stopPropagation()
        }
        R.current = true
        if (!(e.target === r.current)) {
          e.stopPropagation()
        }
      })
      if (r.current) {
        r.current.addEventListener("contextmenu", function (e) {
          e.stopPropagation()
          e.preventDefault()
        }, false)
        r.current.addEventListener("mousedown", function (e) {
          if (2 === e.button) {
            e.stopPropagation()
            e.preventDefault()
          }
        }, false)
      }
    }
  }, [])
  _React.useEffect(function () {
    if (null === r || undefined === r ? undefined : r.current) {
      var e = $_691_index.a()
      e.init({
        renderer: {
          width: e$size$width * q,
          height: e$size$height * q,
          view: r.current,
          preserveDrawingBuffer: true,
          resolution: 2 / q,
          forceCanvas: true
        },
        id: Z
      })
      e.components.init({
        editor: {
          url: "https://static.bcmcdn.com/appcraft/stage/assets/editor-1577087990235.json",
          cursor_move_url: "https://static.bcmcdn.com/appcraft/stage/assets/cursor_move.svg",
          texture_name: {
            scale_btn: "scale_btn_.png",
            rotation_btn: "rotation_btn.png",
            menu_btn: "menu_btn.png",
            cursor_scale: "cursor_scale.svg",
            cursor_rotate: "cursor_rotate.svg"
          }
        }
      })
      e.scenes.load_scene(J, "")
      e.scenes.set_current_scene(J)
      o.current = e
      $_215.c(Z, e)
      ne(e);
      (function (e) {
        var /* [auto-meaningful-name] */e$events = e.events
        e$events.add_listener("editor_scale_btn:drag_start", function () {
          R.current = false
          j()
        })
        e$events.add_listener("editor_scale_btn:drag_end", function (t) {
          var /* [auto-meaningful-name] */t$target_id = t.target_id
          var r = e.actors.get_actor(t$target_id)
          var /* [auto-meaningful-name] */r$is_error = r.is_error
          var /* [auto-meaningful-name] */r$value = r.value
          if (!r$is_error(r$value)) {
            var a = Jd.Cb(t$target_id)
            if (a) {
              var /* [auto-meaningful-name] */a$attributes$scaleAndLock = a.attributes.scaleAndLock
              var c = r$value.get_scale()
              $($$_$$_$$_$$_src_editor_redux_common_actions.Lg(t$target_id, "scaleAndLock", D.a(D.a({}, a$attributes$scaleAndLock), c)))
            }
          }
        })
        e$events.add_listener("editor_rotate_btn:drag_start", function () {
          R.current = false
          j()
        })
        e$events.add_listener("editor_rotate_btn:drag_end", function (t) {
          var /* [auto-meaningful-name] */t$target_id = t.target_id
          var r = e.actors.get_actor(t$target_id)
          var /* [auto-meaningful-name] */r$is_error = r.is_error
          var /* [auto-meaningful-name] */r$value = r.value
          if (!r$is_error(r$value)) {
            var a = r$value.get_rotation()
            $($$_$$_$$_$$_src_editor_redux_common_actions.Lg(t$target_id, "rotation", a))
          }
        })
        e$events.add_listener("editor_menu_btn:selected", function (t) {
          var /* [auto-meaningful-name] */t$data
          R.current = false
          var /* [auto-meaningful-name] */t$target_id = t.target_id
          var /* [auto-meaningful-name] */r$current = r.current
          var a = e.actors.get_actor(t$target_id)
          if (!(0, a.is_error)(a.value) && (null === t || undefined === t || null === (t$data = t.data) || undefined === t$data ? undefined : t$data.position) && r$current) {
            var /* [auto-meaningful-name] */t$data$position = t.data.position
            var /* [auto-meaningful-name] */t$data$position$x = t$data$position.x
            var /* [auto-meaningful-name] */t$data$position$y = t$data$position.y
            var u = r$current.clientWidth / 2 + t$data$position$x / q
            var d = r$current.clientHeight / 2 - t$data$position$y / q
            b(t$target_id)
            T({
              x: u + 10,
              y: d + 10
            })
          }
        })
      })(e)
      re()
      e.render()
      c(true)
      return function () {
        $_215.a(Z)
      }
    }
  }, [])
  _React.useEffect(function () {
    var /* [auto-meaningful-name] */o$current = o.current
    if (o$current) {
      $_145.q(o$current, e$size$width * q, e$size$height * q)
    }
  }, [q, e$size$width, e$size$height])
  _React.useEffect(function () {
    var /* [auto-meaningful-name] */o$current = o.current
    if (o$current) {
      $_145.n(o$current, e$attributes$backgroundColor)
    }
  }, [e$attributes$backgroundColor])
  var oe = ""
  if (e$attributes$backgroundImage) {
    var ie = Jd.hb(e$attributes$backgroundImage)
    if (ie) {
      oe = ie.source || ie.cdnUrl
    } else {
      if (e$attributes$backgroundImage.includes("://") || e$attributes$backgroundImage.includes("data:image/")) {
        oe = e$attributes$backgroundImage
      }
    }
  }
  _React.useEffect(function () {
    var /* [auto-meaningful-name] */o$current = o.current
    if (o$current) {
      $_145.o(o$current, oe, e$attributes$resizeMode)
    }
  }, [oe, e$attributes$resizeMode])
  _React.useEffect(function () {
    var /* [auto-meaningful-name] */o$current = o.current
    if (o$current) {
      $_145.p(o$current, e$attributes$resizeMode)
    }
  }, [e$attributes$resizeMode])
  _React.useEffect(function () {
    if (!ee || !e$widgetIds.includes(ee)) {
      var e = null === o || undefined === o ? undefined : o.current
      var t = null === e || undefined === e ? undefined : e.components.get_editor()
      if (!(null === t || undefined === t)) {
        t.hide()
      }
    }
  }, [ee, e$widgetIds])
  var ae = _React.useCallback(function () {
    var e = O.a(RegeneratorRuntime.mark(function e(t) {
      var /* [auto-meaningful-name] */t$dataTransfer
      var i
      var /* [auto-meaningful-name] */n$current
      var s
      var c
      var l
      var u
      var d
      var f
      var h
      var m
      var g
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (p(false), t$dataTransfer = t.dataTransfer, (i = t$dataTransfer.getData("widget/type")) === $$_$$_$$_$$_src_editor_widget_builtIn_types.a || i === $$_$$_$$_$$_src_editor_widget_builtIn_types.c) {
                e.next = 5
                break
              }
              return e.abrupt("return")
            case 5:
              if (t.stopPropagation(), n$current = n.current, s = null === n$current || undefined === n$current ? undefined : n$current.getClientRects()[0]) {
                e.next = 10
                break
              }
              return e.abrupt("return")
            case 10:
              if (c = Math.ceil((t.clientX - s.x) / te), l = Math.ceil((t.clientY - s.y) / te), o.current) {
                e.next = 15
                break
              }
              return e.abrupt("return")
            case 15:
              if (i === $$_$$_$$_$$_src_editor_widget_builtIn_types.a) {
                u = (c - e$size.width / 2) * q
                d = (e$size.height / 2 - l) * q
                f = {
                  x: u,
                  y: d
                }
                $($$_$$_$$_$$_src_editor_redux_common_actions.fg(Z, f))
              } else {
                if (i === $$_$$_$$_$$_src_editor_widget_builtIn_types.c) {
                  h = (c - e$size.width / 2) * q
                  m = (e$size.height / 2 - l) * q
                  g = {
                    x: h,
                    y: m
                  }
                  $($$_$$_$$_$$_src_editor_redux_common_actions.gg(Z, g))
                }
              }
            case 16:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))
    return function (t) {
      return e.apply(this, arguments)
    }
  }(), [q, $, e$size.height, e$size.width, te, Z])
  _React.useEffect(function () {
    var e = function () {
      var e = Array.from(I.values())
      I.clear()
      var /* [auto-meaningful-name] */o$current = o.current
      e.forEach(function (e) {
        var n = (null === o$current || undefined === o$current ? undefined : o$current.actors.get_actor(e)) || {}
        var /* [auto-meaningful-name] */n$is_error = n.is_error
        var /* [auto-meaningful-name] */n$value = n.value
        if (n$is_error && n$value && !n$is_error(n$value)) {
          var i = n$value.get_position()
          var a = n$value.get_center_position()
          var s = {
            x: Math.round(i.x),
            y: Math.round(i.y)
          }
          var c = {
            x: Math.round(a.x - i.x),
            y: Math.round(a.y - i.y)
          }
          $($$_$$_$$_$$_src_editor_redux_common_actions.Lg(e, "position", s))
          $($$_$$_$$_$$_src_editor_redux_common_actions.Lg(e, "pivotToCenter", c))
        }
      })
    }
    document.addEventListener("mouseup", e, {
      capture: true
    })
    return function () {
      return document.removeEventListener("mouseup", e, {
        capture: true
      })
    }
  }, [I, $])
  return React.createElement("div", {
    id: M,
    className: N(wn.b, (t = {}, k.a(t, $_741.highlight, d), k.a(t, $_741.outline, Z !== ee), t)),
    "data-role": $$_$$_$$_$$_src_editor_widget_builtIn_types.M,
    "data-widget-type": $$_$$_$$_$$_src_editor_widget_builtIn_types.f,
    "data-min-width": $_244.i,
    "data-min-height": $_244.h,
    "data-max-width": $_244.g,
    "data-max-height": $_244.f,
    ref: n,
    onDrop: ae,
    onDragEnter: function (e) {
      if (A) {
        p(true)
      }
    },
    onDragLeave: function () {
      p(false)
    },
    style: {
      top: e$position.y,
      left: e$position.x,
      height: e$size.height,
      width: e$size.width,
      visibility: e$visible ? undefined : "hidden",
      pointerEvents: e$visible ? undefined : "none",
      opacity: W / 100
    }
  }, s && e$widgetIds.map(function (e) {
    return React.createElement(gh, {
      key: e,
      id: e,
      stage: o.current,
      updateTimes: Eh++,
      coordinateRatio: q
    })
  }), s && e$widgetIds.map(function (e) {
    return React.createElement(yh, {
      key: e,
      id: e,
      stage: o.current,
      updateTimes: Eh++,
      coordinateRatio: q
    })
  }), React.createElement("canvas", {
    ref: r,
    style: {
      width: "100%",
      height: "100%"
    }
  }), s && e$widgetIds.map(function (e, t) {
    if (o.current) {
      $_215.c(e, o.current)
    }
    return $_42_index.c(e, t)
  }), v && React.createElement(bh, {
    actorId: v,
    left: C.x,
    top: C.y,
    stage: o.current,
    onClose: j
  }))
})
var wh = {
  icon: "icon-widget-canvas",
  title: "defaultCanvasWidgetTitle",
  previewAreaWidgetTitle: "canvas",
  type: $$_$$_$$_$$_src_editor_widget_builtIn_types.f,
  editConfig: uh,
  isInvisibleWidget: $_244.e,
  widget: {
    isGlobalWidget: $_244.d,
    size: {
      width: $_244.c,
      height: $_244.b
    },
    widgetIds: [],
    attributes: {
      coordinateRatio: 1,
      backgroundColor: $_244.a,
      resizeMode: $_105.a.COVER,
      backgroundImage: ""
    }
  },
  component: Oh,
  blockConfig: lh
}
var Ch = [
  {
    type: "WidgetTitle"
  }, {
    type: "Color"
  }, {
    type: "NumberSlider",
    key: "penSize",
    label: "brushPenSize",
    min: 1,
    max: 50
  }, {
    type: "DegreeInputRow",
    key: "rotation",
    label: "rotation"
  }, {
    type: "Coordinate",
    label: "relativeCoordinate"
  }
]
export { wh }
export { Ch }
