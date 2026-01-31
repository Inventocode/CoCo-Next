/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-33
 */

"use strict"

import { fd, hd, md, gd, _d } from "./index__part-31"
import { Wd } from "./index__part-32"
import * as Qu from "./60"
import * as po from "./49"
import * as /* [auto-meaningful-name] */$_452_index from "./452/index"
import /* [auto-meaningful-name] */$_279 from "./279"
import * as /* [auto-meaningful-name] */$_238 from "./238"
import * as kn from "./75"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_widget_builtIn_types from "../../../../src/editor/widget/built-in/types"
import * as wn from "./90"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_widget_custom_type from "../../../../src/shared/widget/custom/type"
import * as Et from "./9"
import * as /* [auto-meaningful-name] */$_26_index from "./26/index"
import * as /* [auto-meaningful-name] */$_190 from "./190"
import * as K from "./18"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as D from "./6"
import * as k from "./11"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710 from "./710"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as /* [auto-meaningful-name] */$_188 from "./188"
import * as O from "./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import { useSelector, useDispatch } from "react-redux"
import /* [auto-meaningful-name] */React from "react"
import { useRef, useState, useEffect } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_932 from "./932"
import /* [auto-meaningful-name] */$_9321 from "./932"
var Vd = function (e) {
  var t
  var /* [auto-meaningful-name] */e$position = e.position
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var o = useSelector(function (e) {
    return e.project.selectedWidgetId
  })
  var i = $_238.d()
  if (!o) {
    return i ? React.createElement("div", {
      className: $_9321.container
    }, React.createElement("div", null, i.get("title"))) : null
  }
  var a = Et.Bb(o)
  if (!a) {
    return null
  }
  var s = Et.Fb(o)
  if (null === (t = Et.Db(a.type)) || undefined === t ? undefined : t.isInvisibleWidget) {
    return null
  }
  if (a.type === $$_$$_$$_$$_src_editor_widget_builtIn_types.a || a.type === $$_$$_$$_$$_src_editor_widget_builtIn_types.c) {
    return React.createElement("div", {
      className: $_9321.container
    }, React.createElement("div", null, s), React.createElement("div", null, $_710$a$formatMessage({
      id: "relativeCoordinate"
    }), " X:", e$position.x, " Y:", e$position.y))
  }
  var c = a.parentId ? Et.Bb(a.parentId) : undefined
  return (null === c || undefined === c ? undefined : c.type) && [$$_$$_$$_$$_src_editor_widget_builtIn_types.x, $$_$$_$$_$$_src_editor_widget_builtIn_types.A].includes(c.type) ? React.createElement("div", {
    className: $_9321.container
  }, React.createElement("div", null, s), React.createElement("div", null, "X: - Y: -")) : React.createElement("div", {
    className: $_9321.container
  }, React.createElement("div", null, s), React.createElement("div", null, "X:", e$position.x, " Y:", e$position.y))
}
var zd = React.memo(function () {
  var e
  var t = useRef(null)
  var n = useRef(null)
  var r = null === (e = $_238.d()) || undefined === e ? undefined : e.id
  var o = useRef(Qu.d.NONE)
  var i = useDispatch()
  var a = useSelector(function (e) {
    return e.project.selectedWidgetId
  })
  var s = useSelector(function (e) {
    return e.common.previewAreaUpdatedAt
  })
  var c = useSelector(function (e) {
    return e.common.stageState.isActorDragging
  })
  var l = useSelector(function (e) {
    return e.common.stageScale
  })
  var u = useSelector(function (e) {
    return e.project.focusedWorkspaceArea
  })
  var d = useState({
    x: 0,
    y: 0
  })
  var p = $_10_index.a(d, 2)
  var m = p[0]
  var g = p[1]
  var v = $_238.d()
  var b = a ? Et.Bb(a) : undefined
  var y = null === b || undefined === b ? undefined : b.type
  var w = y ? Et.Db(y) : null
  var T = null === b || undefined === b ? undefined : b.position
  useEffect(function () {
    if (T) {
      g(T)
    }
  }, [T])
  var A = useState(undefined)
  var j = $_10_index.a(A, 2)
  var R = j[0]
  var x = j[1]
  var M = useState([])
  var L = $_10_index.a(M, 2)
  var P = L[0]
  var B = L[1]
  var F = useState([])
  var G = $_10_index.a(F, 2)
  var W = G[0]
  var U = G[1]
  var H = useRef([])
  var V = useSelector(function (e) {
    return e.uiConfig.stage
  }) === K.j.ReadOnly
  var z = function () {
    var e = O.a(RegeneratorRuntime.mark(function e(t) {
      var /* [auto-meaningful-name] */n$current
      var o
      var /* [auto-meaningful-name] */t$dataTransfer
      var s
      var c
      var u
      var d
      var p
      var f
      var h
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (t.persist(), n$current = n.current, o = null === n$current || undefined === n$current ? undefined : n$current.getClientRects()[0], t$dataTransfer = t.dataTransfer, !o || !v) {
                e.next = 20
                break
              }
              if (s = t$dataTransfer.getData("widget/action"), c = t$dataTransfer.getData("widget/type"), u = t$dataTransfer.getData("widget/dragging-offset-x"), d = t$dataTransfer.getData("widget/dragging-offset-y"), p = Math.ceil((t.clientX - o.x - parseInt(u)) / l), f = Math.ceil((t.clientY - o.y - parseInt(d)) / l), h = {
                x: p,
                y: f
              }, c !== $$_$$_$$_$$_src_editor_widget_builtIn_types.c && c !== $$_$$_$$_$$_src_editor_widget_builtIn_types.a) {
                e.next = 14
                break
              }
              return e.abrupt("return")
            case 14:
              if (s !== $$_$$_$$_$$_src_editor_widget_builtIn_types.r.CREATE) {
                e.next = 20
                break
              }
              if (i($$_$$_$$_$$_src_editor_redux_common_actions.ki("screen")), !$$_$$_$$_$$_src_shared_widget_custom_type.e(c)) {
                e.next = 19
                break
              }
              e.next = 19
              return $$_$$_$$_$$_src_editor_redux_common_actions.Nf(i, $$_$$_$$_$$_src_editor_redux_common_actions.lg(c))
            case 19:
              i($$_$$_$$_$$_src_editor_redux_common_actions.hg(v.id, c, h))
            case 20:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))
    return function (t) {
      return e.apply(this, arguments)
    }
  }()
  useEffect(function () {
    x(v ? $_452_index.b(v.toJSON()) : undefined)
  }, [v, s])
  var q = useRef()
  var X = function () {
    if (a && r) {
      i($$_$$_$$_$$_src_editor_redux_common_actions.Mf(a, r))
    }
  }
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  return React.createElement("div", {
    ref: t,
    className: N($_279.stage, k.a({}, $_279.isActorDragging, c)),
    onDrop: z,
    onDragOver: function (e) {
      e.preventDefault()
    }
  }, React.createElement(Wd, null), V && React.createElement(md, null), React.createElement($_188.a, {
    useCapture: true
  }, React.createElement($_188.b, {
    keys: {
      osx: "command+c",
      windows: "control+c"
    },
    callback: function () {
      if (a) {
        var e = Et.Bb(a)
        var t = Et.Db((null === e || undefined === e ? undefined : e.type) || "")
        var n = Et.qb(a)
        if (!(!t || t.isInvisibleWidget || (null === n || undefined === n ? undefined : n.type) && [$$_$$_$$_$$_src_editor_widget_builtIn_types.x, $$_$$_$$_$$_src_editor_widget_builtIn_types.A].includes(n.type))) {
          q.current = a
        }
      }
    },
    disabled: "screen" !== u
  }), React.createElement($_188.b, {
    keys: {
      osx: "command+v",
      windows: "control+v"
    },
    callback: function () {
      if (q.current) {
        var e = undefined
        if (q.current.startsWith($$_$$_$$_$$_src_editor_widget_builtIn_types.a) || q.current.startsWith($$_$$_$$_$$_src_editor_widget_builtIn_types.c)) {
          var t
          if (!a) {
            return
          }
          var n = Et.Bb(a)
          if (!n) {
            return
          }
          if (n.type === $$_$$_$$_$$_src_editor_widget_builtIn_types.f) {
            e = n.id
          } else {
            if (!n.parentId || (null === (t = Et.Bb(n.parentId)) || undefined === t ? undefined : t.type) !== $$_$$_$$_$$_src_editor_widget_builtIn_types.f) {
              return
            }
            var r
            e = null === (r = Et.Bb(n.parentId)) || undefined === r ? undefined : r.id
          }
        }
        i($$_$$_$$_$$_src_editor_redux_common_actions.Ef(Et.w(q.current, true, e), null === v || undefined === v ? undefined : v.id))
      }
    },
    disabled: "screen" !== u
  }), React.createElement($_188.b, {
    keys: ["backspace", "del", "delete"],
    callback: function () {
      if (a) {
        var e = Et.qb(a)
        if ((null === e || undefined === e ? undefined : e.type) && [$$_$$_$$_$$_src_editor_widget_builtIn_types.x, $$_$$_$$_$$_src_editor_widget_builtIn_types.A].includes(e.type)) {
          return
        }
        var t = Et.Fb(a)
        var n = $_710$a$formatMessage({
          id: "deleteWidget"
        }) + "“" + $_190.f(t, 10) + "”?"
        var o = $_26_index.z.checkFieldValueIsSelected("WIDGET_ID", a)
        var s = $_26_index.z.checkSomeFieldValueIsSelected("WIDGET_ID", Et.U(a))
        if (o || s) {
          i($$_$$_$$_$$_src_editor_redux_common_actions.zh({
            onConfirm: X,
            allowText: $_710$a$formatMessage({
              id: "delete"
            }),
            title: n,
            isDangerous: true,
            content: $_710$a$formatMessage({
              id: s ? "deleteParentWidgetTips" : "deleteWidgetTips"
            })
          }))
        } else {
          if (r) {
            i($$_$$_$$_$$_src_editor_redux_common_actions.Mf(a, r))
          }
        }
      }
    },
    disabled: "screen" !== u
  })), React.createElement("div", {
    ref: n,
    className: $_279.appZone,
    id: "COCO_APP_ZONE",
    onMouseDown: function (e) {
      o.current = Qu.d.NONE
      var /* [auto-meaningful-name] */e$target = e.target
      var n = e$target.closest("." + wn.b)
      var r = e$target.closest(".coco-widget-editor")
      var s = e$target.closest(".select-box")
      i($$_$$_$$_$$_src_editor_redux_common_actions.ki("screen"))
      if (!(s || r)) {
        setTimeout(function () {
          var /* [auto-meaningful-name] */po$oTHelper$customEvent
          var /* [auto-meaningful-name] */po$oTHelper$customEvent$emit
          if (n) {
            if (n.id !== a) {
              i($$_$$_$$_$$_src_editor_redux_common_actions.ug(n.id))
              o.current = Qu.d.DRAG
            } else {
              o.current = Qu.d.CLICK
            }
          } else {
            i($$_$$_$$_$$_src_editor_redux_common_actions.ug(undefined))
          }
          if (!(null === (po$oTHelper$customEvent = po.oTHelper.customEvent) || undefined === po$oTHelper$customEvent || null === (po$oTHelper$customEvent$emit = po$oTHelper$customEvent.emit) || undefined === po$oTHelper$customEvent$emit)) {
            po$oTHelper$customEvent$emit.focusItem("widget", null === n || undefined === n ? undefined : n.id)
          }
        }, 0)
      }
    },
    onMouseUp: function (e) {
      if (0 === e.button) {
        var t = e.target instanceof HTMLElement && a ? e.target.closest("#".concat(a)) : null
        if (t instanceof HTMLElement) {
          if (o.current === Qu.d.CLICK) {
            t.dataset.clickType = Qu.d.CLICK
          } else {
            t.dataset.clickType = Qu.d.NONE
          }
        }
      }
    },
    onMouseMove: function () {
      if (o.current === Qu.d.CLICK) {
        o.current = Qu.d.DRAG
      }
    },
    style: {
      transform: "scale(".concat(l, ")")
    }
  }, React.createElement(Vd, {
    position: m
  }), c && React.createElement(hd, null), R, React.createElement(fd, {
    onMoveStart: function () {
      if (v) {
        var /* [auto-meaningful-name] */v$widgetIds = v.widgetIds
        var t = []
        v$widgetIds.forEach(function (e) {
          var n = Et.Bb(e)
          if (n && !n.parentId) {
            var /* [auto-meaningful-name] */n$position = n.position
            var /* [auto-meaningful-name] */n$size = n.size
            var /* [auto-meaningful-name] */n$position$x = n$position.x
            var /* [auto-meaningful-name] */n$position$y = n$position.y
            var /* [auto-meaningful-name] */n$size$width = n$size.width
            var /* [auto-meaningful-name] */n$size$height = n$size.height
            var l = {
              id: n.id,
              width: n$size$width,
              height: n$size$height,
              left: n$position$x,
              top: n$position$y,
              right: n$position$x + n$size$width,
              bottom: n$position$y + n$size$height,
              center: n$position$x + n$size$width / 2,
              middle: n$position$y + n$size$height / 2
            }
            t.push(l)
          }
        })
        var n = kn.e
        var r = kn.d
        t.push({
          id: v.id,
          width: n,
          height: r,
          left: 0,
          top: 0,
          right: 0 + n,
          bottom: 0 + r,
          center: 0 + n / 2,
          middle: 0 + r / 2
        })
        H.current = t
      }
    },
    onMouseMove: function (e, t) {
      var n = H.current.find(function (t) {
        return t.id === e
      })
      if (!n) {
        return t
      }
      g(D.a({}, t))
      var r = H.current.filter(function (t) {
        return t.id !== e
      })
      var o = function (e, t, n) {
        var r = _d(e, t, n, "x")
        var o = r.v
        var /* [auto-meaningful-name] */r$lines = r.lines
        var a = _d(e, t, n, "y")
        var s = a.v
        var /* [auto-meaningful-name] */a$lines = a.lines
        if (r$lines.length && a$lines.length) {
          r$lines.forEach(function (e) {
            var r = n.find(function (t) {
              return t.id === e.id
            })
            if (r) {
              var i = gd({
                x: o,
                y: s
              }, t, r, "x")
              var /* [auto-meaningful-name] */i$length = i.length
              var /* [auto-meaningful-name] */i$origin = i.origin
              e.length = i$length
              e.origin = i$origin
            }
          })
          a$lines.forEach(function (e) {
            var r = n.find(function (t) {
              return t.id === e.id
            })
            if (r) {
              var i = gd({
                x: o,
                y: s
              }, t, r, "y")
              var /* [auto-meaningful-name] */i$length = i.length
              var /* [auto-meaningful-name] */i$origin = i.origin
              e.length = i$length
              e.origin = i$origin
            }
          })
        }
        return {
          position: {
            x: o,
            y: s
          },
          lines: {
            hLines: a$lines,
            vLines: r$lines
          }
        }
      }(D.a({}, t), n, r)
      var /* [auto-meaningful-name] */o$position = o.position
      var /* [auto-meaningful-name] */o$lines = o.lines
      var /* [auto-meaningful-name] */o$lines$vLines = o$lines.vLines
      var /* [auto-meaningful-name] */o$lines$hLines = o$lines.hLines
      U(o$lines$vLines)
      B(o$lines$hLines)
      return o$position
    },
    onMoveEnd: function () {
      o.current = Qu.d.DRAG
      U([])
      B([])
    },
    hidden: !a || !(null === b || undefined === b ? undefined : b.visible) || !!(null === b || undefined === b ? undefined : b.parentId) || (null === w || undefined === w ? undefined : w.isInvisibleWidget) || c && y === $$_$$_$$_$$_src_editor_widget_builtIn_types.f
  }), React.createElement(React.Fragment, null, W.map(function (e, t) {
    var /* [auto-meaningful-name] */e$length = e.length
    var /* [auto-meaningful-name] */e$value = e.value
    var /* [auto-meaningful-name] */e$origin = e.origin
    return React.createElement("span", {
      className: $_279.guideLine,
      key: "v-".concat(t),
      style: {
        left: e$value,
        top: e$origin,
        height: e$length,
        width: 1
      }
    })
  }), P.map(function (e, t) {
    var /* [auto-meaningful-name] */e$length = e.length
    var /* [auto-meaningful-name] */e$value = e.value
    var /* [auto-meaningful-name] */e$origin = e.origin
    return React.createElement("span", {
      className: $_279.guideLine,
      key: "h-".concat(t),
      style: {
        top: e$value,
        left: e$origin,
        width: e$length,
        height: 1
      }
    })
  }))))
})
export { zd }
