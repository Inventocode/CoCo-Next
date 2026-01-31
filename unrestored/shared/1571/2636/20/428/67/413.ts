/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：413
 */

import { ze, Ye } from "./413__part-19"
import * as /* [auto-meaningful-name] */$$_313 from "../313"
import * as /* [auto-meaningful-name] */$_index from "./index"
import * as /* [auto-meaningful-name] */$$_$$_$$_55 from "../../../55"
import * as /* [auto-meaningful-name] */$$_$$_index from "../../index"
import * as /* [auto-meaningful-name] */$$_$$_$$_9 from "../../../9"
import * as /* [auto-meaningful-name] */$$_$$_$$_206 from "../../../206"
import * as /* [auto-meaningful-name] */$$_$$_$$_15 from "../../../15"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_$$_src_editor_widget_builtIn_types from "../../../../../../../src/editor/widget/built-in/types"
import /* [auto-meaningful-name] */React from "react"
import { memo, useRef, useCallback, useEffect } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import { useSelector } from "react-redux"
import /* [auto-meaningful-name] */Color from "color"
export { ze as c }
export { Ye as b }
var _a
_a = memo(function (e) {
  var t = e.id
  var n = useSelector(function (e) {
    return e.widgetMap
  })
  var r = useRef({
    x: 0,
    y: 0
  })
  var p = useSelector(function (e) {
    return e.screenList.find(function (e) {
      return e.id === t
    })
  })
  var f = useSelector(function (e) {
    return e.imageFileMap
  })
  var h = useSelector(function (e) {
    return e.currentScreenParam
  })
  var m = 0
  var g = 0
  var _ = (null === p || undefined === p ? undefined : p.widgetIds) || []
  _.forEach(function (e) {
    var t = n.get(e)
    if (t && t.type === $$_$$_$$_$$_$$_$$_$$_src_editor_widget_builtIn_types.f) {
      m++
    }
  })
  var v = useCallback(function (e) {
    $$_$$_index.emitScreenOpen(e, h)
  }, [h])
  useEffect(function () {
    if (0 === m) {
      v(t)
    }
    var e = function () {
      $$_$$_index.emitGyroscopePhoneShake(t)
      $$_$$_$$_55.b.playerWidgetLog({
        widgetId: "",
        widgetType: $$_$$_$$_$$_$$_$$_$$_src_editor_widget_builtIn_types.t,
        message: "onGyroscopeShake"
      })
    }
    $$_$$_index.onDeviceShake(e)
    return function () {
      $$_$$_index.offDeviceShake(e)
    }
  }, [m, t, v])
  var b = useCallback(function (e) {
    if (++g >= m) {
      v(t)
    }
  }, [m, t, g, v])
  if (p && p.type === $$_$$_$$_$$_$$_$$_$$_src_editor_widget_builtIn_types.D) {
    var /* [auto-meaningful-name] */p$backgroundColor = p.backgroundColor
    var /* [auto-meaningful-name] */p$backgroundImageResizeMode = p.backgroundImageResizeMode
    var /* [auto-meaningful-name] */p$backgroundImage = p.backgroundImage
    var T = f.get(p$backgroundImage)
    var S = T ? $$_$$_$$_9.lb(T) : ""
    if (!(S || !p$backgroundImage.includes("://") && !p$backgroundImage.includes("data:image/"))) {
      S = p$backgroundImage
    }
    var A = []
    _.forEach(function (e) {
      var t = n.get(e)
      if (t) {
        A.push(t)
      }
    })
    return React.createElement("div", {
      id: p.id,
      "data-screen-id": p.id,
      className: "screen-view",
      onClick: function (e) {
        var /* [auto-meaningful-name] */e$target$dataset$screenId = e.target.dataset.screenId
        if (null === e$target$dataset$screenId || undefined === e$target$dataset$screenId ? undefined : e$target$dataset$screenId.startsWith($$_$$_$$_$$_$$_$$_$$_src_editor_widget_builtIn_types.D)) {
          $$_313.n(t)
          $$_$$_index.emitScreenPress(t, e.nativeEvent.offsetX, e.nativeEvent.offsetY)
        }
      },
      onMouseDown: function (e) {
        var /* [auto-meaningful-name] */e$target$dataset$screenId = e.target.dataset.screenId
        if (null === e$target$dataset$screenId || undefined === e$target$dataset$screenId ? undefined : e$target$dataset$screenId.startsWith($$_$$_$$_$$_$$_$$_$$_src_editor_widget_builtIn_types.D)) {
          $$_313.k(t)
          document.addEventListener("mouseup", function () {
            return $$_313.b()
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
        if (null === e$target$dataset$screenId || undefined === e$target$dataset$screenId ? undefined : e$target$dataset$screenId.startsWith($$_$$_$$_$$_$$_$$_$$_src_editor_widget_builtIn_types.D)) {
          $$_313.n(t)
          $$_$$_index.emitScreenPressOut(t, e.nativeEvent.offsetX, e.nativeEvent.offsetY)
        }
      },
      onMouseMove: function (e) {
        var /* [auto-meaningful-name] */e$target$dataset$screenId = e.target.dataset.screenId
        if (null === e$target$dataset$screenId || undefined === e$target$dataset$screenId ? undefined : e$target$dataset$screenId.startsWith($$_$$_$$_$$_$$_$$_$$_src_editor_widget_builtIn_types.D)) {
          r.current.x = e.nativeEvent.offsetX
          r.current.y = e.nativeEvent.offsetY
        }
      },
      onTouchStart: function (e) {
        if ($$_$$_$$_15.W()) {
          var /* [auto-meaningful-name] */e$target$dataset$screenId = e.target.dataset.screenId
          if (null === e$target$dataset$screenId || undefined === e$target$dataset$screenId ? undefined : e$target$dataset$screenId.startsWith($$_$$_$$_$$_$$_$$_$$_src_editor_widget_builtIn_types.D)) {
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
          if (null === e$target$dataset$screenId || undefined === e$target$dataset$screenId ? undefined : e$target$dataset$screenId.startsWith($$_$$_$$_$$_$$_$$_$$_src_editor_widget_builtIn_types.D)) {
            r.current.x = e.targetTouches[0].clientX
            r.current.y = e.targetTouches[0].clientX
          }
        }
      },
      onTouchEnd: function (e) {
        if ($$_$$_$$_15.W()) {
          var /* [auto-meaningful-name] */e$target$dataset$screenId = e.target.dataset.screenId
          if (null === e$target$dataset$screenId || undefined === e$target$dataset$screenId ? undefined : e$target$dataset$screenId.startsWith($$_$$_$$_$$_$$_$$_$$_src_editor_widget_builtIn_types.D)) {
            $$_$$_index.emitScreenPressOut(t, e.targetTouches[0].clientX, e.targetTouches[0].clientY)
          }
        }
      },
      style: {
        backgroundColor: Color(p$backgroundColor).toString(),
        backgroundImage: S ? "url(".concat(S, ")") : "none",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: p$backgroundImageResizeMode === $$_$$_$$_206.a.STRETCH ? "100% 100%" : p$backgroundImageResizeMode
      }
    }, React.createElement("div", {
      className: "screen-view-inner",
      "data-screen-id": p.id
    }, A.map(function (e) {
      return ze({
        widget: e,
        onload: b
      })
    })))
  }
  return null
})
export { _a as a }
export default _a
