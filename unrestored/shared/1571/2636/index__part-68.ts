/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-68
 */

"use strict"

import { Dh } from "./index__part-66"
import { Wh } from "./index__part-67"
import * as /* [auto-meaningful-name] */$_144 from "./144"
import * as /* [auto-meaningful-name] */$_215 from "./215"
import * as /* [auto-meaningful-name] */$_145 from "./145"
import * as ep from "./4"
import * as Jd from "./33"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_widget_builtIn_types from "../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_ui_components_index from "../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from "classnames"
import * as /* [auto-meaningful-name] */$_710 from "./710"
import * as /* [auto-meaningful-name] */$_748_index from "./748/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as O from "./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import { useSelector, useDispatch, batch } from "react-redux"
import /* [auto-meaningful-name] */React from "react"
import { useRef, useState, useCallback, useEffect } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_810 from "./810"
import /* [auto-meaningful-name] */$_8101 from "./810"
var Vh = function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$opacity = e.opacity
  var /* [auto-meaningful-name] */e$position = e.position
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$parentId = e.parentId
  var /* [auto-meaningful-name] */e$zIndex = e.zIndex
  var s = undefined === e$zIndex ? 0 : e$zIndex
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$attributes$actionList = e$attributes.actionList
  var /* [auto-meaningful-name] */e$attributes$scale = e$attributes.scale
  var /* [auto-meaningful-name] */e$attributes$flipped = e$attributes.flipped
  var /* [auto-meaningful-name] */e$attributes$scaleAndLock = e$attributes.scaleAndLock
  var /* [auto-meaningful-name] */e$attributes$rotation = e$attributes.rotation
  var /* [auto-meaningful-name] */e$attributes$selectedStyleId = e$attributes.selectedStyleId
  var /* [auto-meaningful-name] */e$attributes$pivotToCenter = e$attributes.pivotToCenter
  var b = useRef(false)
  var y = useRef(e$attributes$scaleAndLock)
  var w = useState(true)
  var C = $_10_index.a(w, 2)
  var T = C[0]
  var j = C[1]
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var k = t
  var x = useSelector(function (e) {
    return e.project.selectedWidgetId
  })
  var D = useDispatch()
  var M = x === t
  var L = useState(2)
  var P = $_10_index.a(L, 2)
  var B = P[0]
  var F = P[1]
  var G = useState({
    x: 0,
    y: 0
  })
  var W = $_10_index.a(G, 2)
  var U = W[0]
  var H = W[1]
  var V = useState({
    width: 0,
    height: 0,
    translateX: 0,
    translateY: 0,
    angle: 0
  })
  var K = $_10_index.a(V, 2)
  var q = K[0]
  var X = K[1]
  var Q = useState(false)
  var Z = $_10_index.a(Q, 2)
  var J = Z[0]
  var $ = Z[1]
  var ee = useCallback(function () {
    var e = O.a(RegeneratorRuntime.mark(function e(t, n) {
      var r
      var o
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              r = []
              o = []
              e$attributes$actionList.forEach(function (e) {
                e.styleList.forEach(function (e) {
                  var t = e.id
                  var n = {
                    id: t,
                    source: Jd.mb(e.source) || ""
                  }
                  o.push(t)
                  r.push(n)
                })
              })
              r.unshift($_144.h)
              n.get_style_ids().forEach(function (e) {
                if (!o.includes(e)) {
                  n.remove_style(e)
                }
              })
              return e.abrupt("return", Promise.all(r.map(function (e) {
                return $_145.a(t, n, e)
              })))
            case 7:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))
    return function (t, n) {
      return e.apply(this, arguments)
    }
  }(), [e$attributes$actionList])
  var te = useCallback(function () {
    var e = O.a(RegeneratorRuntime.mark(function e(t) {
      var n
      var o
      var /* [auto-meaningful-name] */o$is_error
      var /* [auto-meaningful-name] */o$value
      var c
      var /* [auto-meaningful-name] */c$is_error
      var /* [auto-meaningful-name] */c$value
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
              if (o = t.actors.get_actor(k), o$is_error = o.is_error, o$value = o.value, !o$is_error(o$value)) {
                e.next = 11
                break
              }
              if (c = t.actors.load_actor({
                actor_id: k,
                parent_scene_id: e$parentId
              }), c$is_error = c.is_error, c$value = c.value, !c$is_error(c$value)) {
                e.next = 8
                break
              }
              console.error("ActorWidget load_actor error")
              return e.abrupt("return")
            case 8:
              n = c$value
              e.next = 12
              break
            case 11:
              n = o$value
            case 12:
              j(true)
              e.next = 15
              return ee(t, n)
            case 15:
              $_145.c(t, k, e$position, e$attributes$pivotToCenter, e$attributes$scale, e$attributes$rotation, e$attributes$flipped, e$attributes$scaleAndLock)
              t.render()
              j(false)
            case 18:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))
    return function (t) {
      return e.apply(this, arguments)
    }
  }(), [e$parentId, k, ee])
  useEffect(function () {
    y.current = e$attributes$scaleAndLock
  }, [e$attributes$scaleAndLock])
  useEffect(function () {
    var e = $_215.b(k)
    if (e) {
      te(e)
    }
  }, [k, te])
  useEffect(function () {
    if (!T) {
      var e = $_215.b(k)
      if (e) {
        var t = e.actors.get_actor(k)
        var /* [auto-meaningful-name] */t$is_error = t.is_error
        var /* [auto-meaningful-name] */t$value = t.value
        if (!t$is_error(t$value)) {
          var o = e$attributes$selectedStyleId || $_144.i
          t$value.set_current_style(o)
          e.render()
          if (o !== $_144.i && b.current) {
            setTimeout(function () {
              var t = t$value.get_width()
              var n = t$value.get_height()
              var o = (e.get_view_size().width - 20 / B) / t
              var i = (e.get_view_size().height - 20 / B) / n
              if (o < 1 || i < 1) {
                var a = Math.min(o, i)
                var /* [auto-meaningful-name] */y$current = y.current
                if (y$current) {
                  D($$_$$_$$_$$_src_editor_redux_common_actions.Lg(k, "scaleAndLock", {
                    x: y$current.x * a,
                    y: y$current.x * a,
                    ratio: y$current.ratio
                  }))
                }
              }
            }, 80)
            b.current = false
          }
          if (o === $_144.i) {
            b.current = true
          }
        }
      }
    }
  }, [D, k, T, e$attributes$selectedStyleId, B])
  useEffect(function () {
    if (!T) {
      var e = $_215.b(k)
      if (e) {
        $_145.k(e, k, e$visible)
      }
    }
  }, [k, T, e$visible])
  useEffect(function () {
    if (!T) {
      var e = $_215.b(k)
      if (e) {
        $_145.i(e, k, e$attributes$rotation)
      }
    }
  }, [k, T, e$attributes$rotation])
  useEffect(function () {
    if (!T) {
      var e = $_215.b(k)
      if (e) {
        $_145.h(e, k, e$position)
      }
    }
  }, [k, T, e$position])
  useEffect(function () {
    if (!T) {
      var e = $_215.b(k)
      if (e) {
        $_145.e(e, k, e$attributes$pivotToCenter)
      }
    }
  }, [k, T, e$attributes$pivotToCenter])
  useEffect(function () {
    if (!T) {
      var e = $_215.b(k)
      if (e) {
        if (e$attributes$scaleAndLock) {
          $_145.j(e, k, e$attributes$scaleAndLock.x, e$attributes$scaleAndLock.y)
        } else {
          D($$_$$_$$_$$_src_editor_redux_common_actions.Lg(k, "scaleAndLock", {
            x: e$attributes$scale || 1,
            y: e$attributes$scale || 1,
            ratio: 1
          }))
        }
      }
    }
  }, [k, T, e$attributes$scaleAndLock])
  useEffect(function () {
    if (!T) {
      var e = $_215.b(k)
      if (e) {
        $_145.g(e, k, e$opacity)
      }
    }
  }, [k, T, e$opacity])
  useEffect(function () {
    if (!T) {
      var e = $_215.b(k)
      if (e && e$attributes$flipped) {
        $_145.f(e, k, e$attributes$flipped)
      }
    }
  }, [k, T, e$attributes$flipped])
  useEffect(function () {
    if (!T) {
      var e = $_215.b(k)
      if (e) {
        var t = e.actors.get_actor(k)
        var /* [auto-meaningful-name] */t$is_error = t.is_error
        var /* [auto-meaningful-name] */t$value = t.value
        if (!t$is_error(t$value)) {
          t$value.set_z_index(s)
          e.render()
        }
      }
    }
  }, [k, T, s])
  useEffect(function () {
    if (x === t) {
      var e = $_215.b(t)
      var n = null === e || undefined === e ? undefined : e.components.get_editor()
      if (!(null === n || undefined === n)) {
        n.set_btns_visible(true)
      }
      if (!(null === n || undefined === n)) {
        n.set_target_actor(t)
      }
    }
  }, [t, x, T])
  useEffect(function () {
    var e = $_215.b(k)
    if (e) {
      var t = function (e) {
        if (k === e.target_id) {
          $(false)
        }
      }
      var n = function (e) {
        if (k === e.target_id) {
          $(true)
        }
      }
      var r = function (e) {
        if (k === e.target_id) {
          $(true)
        }
      }
      var o = function (e) {
        if (k === e.target_id) {
          $(false)
        }
      }
      var i = function (e) {
        if (k === e.target_id) {
          $(true)
        }
      }
      var a = function (e) {
        if (k === e.target_id) {
          $(false)
        }
      }
      var /* [auto-meaningful-name] */e$events = e.events
      e$events.add_listener("actor:drag_start", n)
      e$events.add_listener("actor:drag_end", t)
      e$events.add_listener("editor_scale_btn:drag_start", r)
      e$events.add_listener("editor_scale_btn:drag_end", o)
      e$events.add_listener("editor_rotate_btn:drag_start", i)
      e$events.add_listener("editor_rotate_btn:drag_end", a)
      return function () {
        e$events.remove_listener("actor:drag_start", n)
        e$events.remove_listener("actor:drag_end", t)
        e$events.remove_listener("editor_scale_btn:drag_start", r)
        e$events.remove_listener("editor_scale_btn:drag_end", o)
        e$events.remove_listener("editor_rotate_btn:drag_start", i)
        e$events.remove_listener("editor_rotate_btn:drag_end", a)
      }
    }
  }, [k, D])
  useEffect(function () {
    if (e$parentId) {
      var e = Jd.Cb(e$parentId)
      if (e) {
        var t = $_215.b(k)
        if (t) {
          var n = t.actors.get_actor(k)
          var /* [auto-meaningful-name] */n$is_error = n.is_error
          var /* [auto-meaningful-name] */n$value = n.value
          if (n$is_error(n$value)) {
            console.error("Get actor error")
          } else {
            var /* [auto-meaningful-name] */e$size = e.size
            var /* [auto-meaningful-name] */e$size$width = e$size.width
            var /* [auto-meaningful-name] */e$size$height = e$size.height
            var /* [auto-meaningful-name] */e$attributes$coordinateRatio = e.attributes.coordinateRatio
            var d = undefined === e$attributes$coordinateRatio ? 2 : e$attributes$coordinateRatio
            var p = e$size$width / 2 + e$position.x / d
            var f = e$size$height / 2 - e$position.y / d
            H({
              x: p,
              y: f
            })
            F(d)
            var h = n$value
            var m = Math.max(h.get_width(), 54) / d
            var g = Math.max(h.get_height(), 54) / d
            var _ = h.get_position()
            var v = h.get_center_position()
            var b = h.get_rotation()
            var y = (v.x - _.x) / d
            var E = (_.y - v.y) / d
            var O = Math.round(-180 * b / Math.PI)
            X({
              width: m,
              height: g,
              translateX: y,
              translateY: E,
              angle: O
            })
          }
        }
      }
    }
  }, [e$position, e$attributes$pivotToCenter, e$attributes$rotation, e$attributes$scale, e$attributes$selectedStyleId, T, e$parentId, k])
  useEffect(function () {
    var e = document.querySelector("#".concat(e$parentId, "[data-role=\"WIDGET\"]"))
    if (e instanceof HTMLDivElement) {
      if (J) {
        e.classList.add("actor-moving")
      } else {
        e.classList.remove("actor-moving")
      }
    }
  }, [J, e$parentId])
  var ne = useSelector(function (e) {
    return e.common.widgetAttributeVisible
  })
  return M && !J && e$visible ? React.createElement("div", {
    className: "actor-addon",
    style: {
      position: "absolute",
      left: U.x,
      top: U.y,
      transformOrigin: "".concat(q.translateX, "px ").concat(q.translateY, "px"),
      transform: "rotate(".concat(q.angle, "deg)")
    },
    id: k
  }, React.createElement("div", {
    style: {
      position: "absolute",
      left: q.translateX,
      top: q.translateY
    }
  }, React.createElement("div", {
    className: $_8101.iconWrapper,
    style: {
      position: "absolute",
      left: q.width / 2 + 28 / B,
      top: -q.height / 2 - 8 / B
    }
  }, React.createElement($_748_index.a, {
    placement: "right",
    title: $_710$a$formatMessage({
      id: "actor.editProperty"
    }),
    trigger: ["hover", "click"]
  }, React.createElement("div", {
    onClick: function () {
      var e = !ne
      batch(function () {
        D($$_$$_$$_$$_src_editor_redux_common_actions.fj(e))
        if (e) {
          D($$_$$_$$_$$_src_editor_redux_common_actions.Fj(false))
        }
      })
    }
  }, React.createElement($$_$$_$$_$$_src_shared_ui_components_index.j, {
    type: "icon-attribute",
    className: Classnames($_8101.iconButton, $_8101.editIcon)
  }))), React.createElement($_748_index.a, {
    placement: "right",
    title: $_710$a$formatMessage({
      id: "actor.editActionStyle"
    }),
    trigger: ["hover", "click"]
  }, React.createElement("div", {
    onClick: function () {
      D($$_$$_$$_$$_src_editor_redux_common_actions.Dh(k))
    }
  }, React.createElement($$_$$_$$_$$_src_shared_ui_components_index.j, {
    type: "icon-edit-round",
    className: Classnames($_8101.iconButton, $_8101.editStyleIcon)
  })))))) : null
}
var zh = {
  icon: "icon-widget-actor",
  title: "defaultActorWidgetTitle",
  previewAreaWidgetTitle: "actor",
  type: $$_$$_$$_$$_src_editor_widget_builtIn_types.a,
  editConfig: Dh,
  isInvisibleWidget: $_144.g,
  widget: {
    isGlobalWidget: $_144.f,
    attributes: {
      scale: 1,
      scaleAndLock: {
        x: 1,
        y: 1,
        ratio: 1
      },
      selectedStyleId: "",
      rotation: 0,
      flipped: {
        vertical: false,
        horizontal: false
      },
      actionList: [],
      pivotToCenter: {
        x: 0,
        y: 0
      }
    }
  },
  blockConfig: Wh,
  component: Vh
}
var Yh = function () {
  return null
}
var Kh = [
  {
    type: "WidgetTitle"
  }
]
var qh = {
  type: $$_$$_$$_$$_src_editor_widget_builtIn_types.e,
  category: {
    iconId: "icon-widget-camera",
    blocks: $$_$$_$$_$$_src_editor_widget_builtIn_types.e
  },
  getTemplate: function (e) {
    var t = "<field name=\"WIDGET_ID\">".concat(e, "</field>")
    return ["<block type=\"camera_get_camera_take_photo\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"camera_get_camera_take_video\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"camera_get_camera_choose_photo\" uncache=\"true\">\n      ".concat(t, "\n    </block>")]
  },
  blockDeclareGroup: {
    setBlockGroupSnippet: function (e) {
      e.insertBlockSnippetGenerator("camera_get_camera_take_photo", function (t, n) {
        var r = t.blocks[n]
        var o = ep.o(r.id)
        var i = e.valueToCode(t, n, "PHOTO", e.ORDER_FUNCTION_CALL)
        var a = e.statementToCode(t, n, "DO")
        return ep.j("getCameraTakePhoto", [ep.k([i], a), o])
      })
      e.insertBlockSnippetGenerator("camera_get_camera_take_video_value", function () {
        return "video"
      })
      e.insertBlockSnippetGenerator("camera_get_camera_take_photo_value", function () {
        return "photo"
      })
      e.insertBlockSnippetGenerator("camera_get_camera_choose_photo_value", function () {
        return "photo"
      })
      e.insertBlockSnippetGenerator("camera_get_camera_take_video", function (t, n) {
        var r = t.blocks[n]
        var o = ep.o(r.id)
        var i = e.valueToCode(t, n, "VIDEO", e.ORDER_FUNCTION_CALL)
        var a = e.statementToCode(t, n, "DO")
        return ep.n("getCameraTakeVideo", [ep.k([i], a), o])
      })
      e.insertBlockSnippetGenerator("camera_get_camera_choose_photo", function (t, n) {
        var r = t.blocks[n]
        var o = ep.o(r.id)
        var i = e.valueToCode(t, n, "PHOTO", e.ORDER_FUNCTION_CALL)
        var a = e.statementToCode(t, n, "DO")
        return ep.j("getCameraChoosePhoto", [ep.k([i], a), o])
      })
    },
    setBlockGroupProfile: function (e, t) {
      e.insertBlockProfile("camera_get_camera_take_photo", {
        type: "camera_get_camera_take_photo",
        message0: "%{BKY_CAMERA_GET_CAMERA_TAKE_PHOTO}",
        args0: [
          {
            type: "input_value",
            name: "PHOTO",
            check: "String",
            align: "CENTRE",
            default_shadow: "<shadow type=\"camera_get_camera_take_photo_value\" />"
          }, {
            type: "input_statement",
            name: "DO",
            provided_context: "camera_get_camera_take_photo_DO"
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_SOUND_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("camera_get_camera_take_photo_value", {
        type: "camera_get_camera_take_photo_value",
        message0: "".concat(t.Msg.CAMERA_PHOTO),
        output: "String",
        required_context: "camera_get_camera_take_photo_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("camera_get_camera_take_video", {
        type: "camera_get_camera_take_video",
        message0: "%{BKY_CAMERA_GET_CAMERA_TAKE_VIDEO}",
        args0: [
          {
            type: "input_value",
            name: "VIDEO",
            check: "String",
            align: "CENTRE",
            default_shadow: "<shadow type=\"camera_get_camera_take_video_value\" />"
          }, {
            type: "input_statement",
            name: "DO",
            provided_context: "camera_get_camera_take_video_DO"
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_SOUND_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("camera_get_camera_take_video_value", {
        type: "camera_get_camera_take_video_value",
        message0: "".concat(t.Msg.CAMERA_VIDEO),
        output: "String",
        required_context: "camera_get_camera_take_video_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("camera_get_camera_choose_photo", {
        type: "camera_get_camera_choose_photo",
        message0: "%{BKY_CAMERA_GET_CAMERA_CHOOSE_PHOTO}",
        args0: [
          {
            type: "input_value",
            name: "PHOTO",
            check: "String",
            align: "CENTRE",
            default_shadow: "<shadow type=\"camera_get_camera_choose_photo_value\" />"
          }, {
            type: "input_statement",
            name: "DO",
            provided_context: "camera_get_camera_choose_photo_value_DO"
          }
        ],
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_SOUND_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("camera_get_camera_choose_photo_value", {
        type: "camera_get_camera_choose_photo_value",
        message0: "".concat(t.Msg.CAMERA_PHOTO),
        output: "String",
        required_context: "camera_get_camera_choose_photo_value_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
    }
  },
  categoryClass: {
    text: "",
    iconId: "icon-widget-camera",
    blocks: []
  },
  renameBlocksInfo: {
    blocksList: ["camera_get_camera_take_photo", "camera_get_camera_take_video", "camera_get_camera_choose_photo"],
    fieldName: "WIDGET_ID"
  },
  topBlocks: []
}
var Xh = {
  icon: "icon-widget-camera",
  title: "CameraWidget.widgetName",
  type: $$_$$_$$_$$_src_editor_widget_builtIn_types.e,
  previewAreaWidgetTitle: "CameraWidget.widgetName",
  component: Yh,
  editConfig: Kh,
  blockConfig: qh,
  isInvisibleWidget: true,
  widget: {
    isGlobalWidget: false,
    size: {
      width: 0,
      height: 0
    },
    attributes: {}
  }
}
var Qh = [
  {
    type: "WidgetTitle"
  }, {
    type: "AudioChangeSoundFile"
  }, {
    type: "AudioVolume"
  }, {
    type: "AudioRate"
  }
]
export { zh }
export { Yh }
export { Xh }
export { Qh }
