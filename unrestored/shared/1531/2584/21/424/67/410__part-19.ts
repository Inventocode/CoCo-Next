/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：410__part-19
 */

"use strict"

import { "410__part-18__He" as He } from "./410__part-18"
import * as /* [auto-meaningful-name] */$_index from "./index"
import * as /* [auto-meaningful-name] */$$_12 from "../12"
import * as /* [auto-meaningful-name] */$$_$$_$$_55 from "../../../55"
import * as /* [auto-meaningful-name] */$$_$$_index from "../../index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_$$_src_shared_widget_custom_load from "../../../../../../../src/shared/widget/custom/load"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_$$_src_shared_widget_custom_storage from "../../../../../../../src/shared/widget/custom/storage"
import * as /* [auto-meaningful-name] */$$_$$_$$_9 from "../../../9"
import * as /* [auto-meaningful-name] */$$_$$_$$_205 from "../../../205"
import * as /* [auto-meaningful-name] */$$_$$_$$_15 from "../../../15"
import * as /* [auto-meaningful-name] */$$_$$_$$_5 from "../../../5"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$$_$$_$$_16_index from "../../../16/index"
import /* [auto-meaningful-name] */Color from "color"
import * as /* [auto-meaningful-name] */$$_312 from "../312"
function ze(e) {
  var /* [auto-meaningful-name] */e$widget = e.widget
  var /* [auto-meaningful-name] */e$forceRender = e.forceRender
  var /* [auto-meaningful-name] */e$onload = e.onload
  var /* [auto-meaningful-name] */e$widget$type = e$widget.type
  if (!e$widget.parentId || e$forceRender) {
    var i = ""
    if (e$widget.parentId) {
      var a = $$_12.b(e$widget.parentId)
      if ((null === a || undefined === a ? undefined : a.type) && [$$_$$_$$_5.x, $$_$$_$$_5.A].includes(a.type) && e$widget$type === $$_$$_$$_5.v) {
        i += "coco-child-widget-full"
      }
    }
    if (e$widget$type in He) {
      var l = He[e$widget$type]
      return React.createElement("div", {
        key: e$widget.id,
        className: i
      }, React.createElement(l, Object.assign({}, e$widget, {
        onload: e$onload
      })))
    }
    var u = $$_$$_$$_$$_$$_$$_$$_src_shared_widget_custom_storage.f(e$widget$type)
    if (!u) {
      console.error("getWidget error", e$widget$type)
      return null
    }
    var /* [auto-meaningful-name] */u$types = u.types
    if ($$_$$_$$_$$_$$_$$_$$_src_shared_widget_custom_load.q(e$widget$type) && false === u$types.isInvisibleWidget) {
      var h = $$_$$_index.getWidgetInstance(e$widget.id)
      return h ? React.createElement("div", {
        key: e$widget.id,
        id: e$widget.id,
        "data-role": $$_$$_$$_5.M,
        "data-widget-type": e$widget.type,
        style: {
          position: "absolute",
          left: e$widget.position.x,
          top: e$widget.position.y,
          display: e$widget.visible ? "block" : "none",
          width: e$widget.size.width,
          height: e$widget.size.height,
          opacity: undefined === e$widget.opacity ? undefined : e$widget.opacity / 100
        }
      }, h.render()) : (console.error("getWidgetInstance error", e$widget$type, e$widget.id), null)
    }
  }
}
function Ye(e) {
  var /* [auto-meaningful-name] */e$widgetId = e.widgetId
  var /* [auto-meaningful-name] */e$onload = e.onload
  var r = $$_12.b(e$widgetId)
  return r ? ze({
    widget: r,
    forceRender: true,
    onload: e$onload
  }) : (console.error("getWidget error"), null)
}
var _a
_a = _React.memo(function (e) {
  var t = e.id
  var n = $$_$$_$$_16_index.e(function (e) {
    return e.widgetMap
  })
  var r = _React.useRef({
    x: 0,
    y: 0
  })
  var p = $$_$$_$$_16_index.e(function (e) {
    return e.screenList.find(function (e) {
      return e.id === t
    })
  })
  var f = $$_$$_$$_16_index.e(function (e) {
    return e.imageFileMap
  })
  var h = $$_$$_$$_16_index.e(function (e) {
    return e.currentScreenParam
  })
  var m = 0
  var g = 0
  var _ = (null === p || undefined === p ? undefined : p.widgetIds) || []
  _.forEach(function (e) {
    var t = n.get(e)
    if (t && t.type === $$_$$_$$_5.f) {
      m++
    }
  })
  var v = _React.useCallback(function (e) {
    $$_$$_index.emitScreenOpen(e, h)
  }, [h])
  _React.useEffect(function () {
    if (0 === m) {
      v(t)
    }
    var e = function () {
      $$_$$_index.emitGyroscopePhoneShake(t)
      $$_$$_$$_55.b.playerWidgetLog({
        widgetId: "",
        widgetType: $$_$$_$$_5.t,
        message: "onGyroscopeShake"
      })
    }
    $$_$$_index.onDeviceShake(e)
    return function () {
      $$_$$_index.offDeviceShake(e)
    }
  }, [m, t, v])
  var b = _React.useCallback(function (e) {
    if (++g >= m) {
      v(t)
    }
  }, [m, t, g, v])
  if (p && p.type === $$_$$_$$_5.D) {
    var /* [auto-meaningful-name] */p$backgroundColor = p.backgroundColor
    var /* [auto-meaningful-name] */p$backgroundImageResizeMode = p.backgroundImageResizeMode
    var /* [auto-meaningful-name] */p$backgroundImage = p.backgroundImage
    var T = f.get(p$backgroundImage)
    var S = T ? $$_$$_$$_9.lb(T) : ""
    if (!(S || !p$backgroundImage.includes("://") && !p$backgroundImage.includes("data:image/"))) {
      S = p$backgroundImage
    }
    var I = []
    _.forEach(function (e) {
      var t = n.get(e)
      if (t) {
        I.push(t)
      }
    })
    return React.createElement("div", {
      id: p.id,
      "data-screen-id": p.id,
      className: "screen-view",
      onClick: function (e) {
        var /* [auto-meaningful-name] */e$target$dataset$screenId = e.target.dataset.screenId
        if (null === e$target$dataset$screenId || undefined === e$target$dataset$screenId ? undefined : e$target$dataset$screenId.startsWith($$_$$_$$_5.D)) {
          $$_312.n(t)
          $$_$$_index.emitScreenPress(t, e.nativeEvent.offsetX, e.nativeEvent.offsetY)
        }
      },
      onMouseDown: function (e) {
        var /* [auto-meaningful-name] */e$target$dataset$screenId = e.target.dataset.screenId
        if (null === e$target$dataset$screenId || undefined === e$target$dataset$screenId ? undefined : e$target$dataset$screenId.startsWith($$_$$_$$_5.D)) {
          $$_312.k(t)
          document.addEventListener("mouseup", function () {
            return $$_312.b()
          }, {
            once: true
          })
          $$_$$_index.emitScreenPressIn(t, e.nativeEvent.offsetX, e.nativeEvent.offsetY)
          $_index.a(function () {
            return $$_$$_index.emitScreenPressHoldAndWait(t, r.current.x || 0, r.current.y || 0)
          })
        }
      },
      onMouseUp: function (e) {
        var /* [auto-meaningful-name] */e$target$dataset$screenId = e.target.dataset.screenId
        if (null === e$target$dataset$screenId || undefined === e$target$dataset$screenId ? undefined : e$target$dataset$screenId.startsWith($$_$$_$$_5.D)) {
          $$_312.n(t)
          $$_$$_index.emitScreenPressOut(t, e.nativeEvent.offsetX, e.nativeEvent.offsetY)
        }
      },
      onMouseMove: function (e) {
        var /* [auto-meaningful-name] */e$target$dataset$screenId = e.target.dataset.screenId
        if (null === e$target$dataset$screenId || undefined === e$target$dataset$screenId ? undefined : e$target$dataset$screenId.startsWith($$_$$_$$_5.D)) {
          r.current.x = e.nativeEvent.offsetX
          r.current.y = e.nativeEvent.offsetY
        }
      },
      onTouchStart: function (e) {
        if ($$_$$_$$_15.W()) {
          var /* [auto-meaningful-name] */e$target$dataset$screenId = e.target.dataset.screenId
          if (null === e$target$dataset$screenId || undefined === e$target$dataset$screenId ? undefined : e$target$dataset$screenId.startsWith($$_$$_$$_5.D)) {
            $$_$$_index.emitScreenPressIn(t, e.targetTouches[0].clientX, e.targetTouches[0].clientY)
            $_index.a(function () {
              return $$_$$_index.emitScreenPressHoldAndWait(t, r.current.x || 0, r.current.y || 0)
            })
          }
        }
      },
      onTouchMove: function (e) {
        if ($$_$$_$$_15.W()) {
          var /* [auto-meaningful-name] */e$target$dataset$screenId = e.target.dataset.screenId
          if (null === e$target$dataset$screenId || undefined === e$target$dataset$screenId ? undefined : e$target$dataset$screenId.startsWith($$_$$_$$_5.D)) {
            r.current.x = e.targetTouches[0].clientX
            r.current.y = e.targetTouches[0].clientX
          }
        }
      },
      onTouchEnd: function (e) {
        if ($$_$$_$$_15.W()) {
          var /* [auto-meaningful-name] */e$target$dataset$screenId = e.target.dataset.screenId
          if (null === e$target$dataset$screenId || undefined === e$target$dataset$screenId ? undefined : e$target$dataset$screenId.startsWith($$_$$_$$_5.D)) {
            $$_$$_index.emitScreenPressOut(t, e.targetTouches[0].clientX, e.targetTouches[0].clientY)
          }
        }
      },
      style: {
        backgroundColor: Color(p$backgroundColor).toString(),
        backgroundImage: S ? "url(".concat(S, ")") : "none",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: p$backgroundImageResizeMode === $$_$$_$$_205.a.STRETCH ? "100% 100%" : p$backgroundImageResizeMode
      }
    }, React.createElement("div", {
      className: "screen-view-inner",
      "data-screen-id": p.id
    }, I.map(function (e) {
      return ze({
        widget: e,
        onload: b
      })
    })))
  }
  return null
})
export { ze as "410__part-19__ze" }
export { Ye as "410__part-19__Ye" }
export { _a as "410__part-19___a" }
