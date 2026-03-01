/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：413
 */

import { ze, Ye } from "./413__part-19"
import * as /* [auto-meaningful-name] */Module_313 from /* 313 */"../313"
import * as /* [auto-meaningful-name] */Module_67 from /* 67 */"./index"
import * as /* [auto-meaningful-name] */Module_55 from /* 55 */"../../../55"
import * as /* [auto-meaningful-name] */Module_20 from /* 20 */"../../index"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../../../9"
import * as /* [auto-meaningful-name] */Module_206 from /* 206 */"../../../206"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../../../../src/editor/widget/built-in/types"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from /* 0 */"react"
import { useSelector } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */Color from /* 51 */"color"
export { ze as c }
export { Ye as b }
var _a
_a = React1.memo(function (e) {
  var t = e.id
  var n = useSelector(function (e) {
    return e.widgetMap
  })
  var r = React1.useRef({
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
    if (t && t.type === Src_editor_widget_builtIn_types.f) {
      m++
    }
  })
  var v = React1.useCallback(function (e) {
    Module_20.emitScreenOpen(e, h)
  }, [h])
  React1.useEffect(function () {
    if (0 === m) {
      v(t)
    }
    var e = function () {
      Module_20.emitGyroscopePhoneShake(t)
      Module_55.b.playerWidgetLog({
        widgetId: "",
        widgetType: Src_editor_widget_builtIn_types.t,
        message: "onGyroscopeShake"
      })
    }
    Module_20.onDeviceShake(e)
    return function () {
      Module_20.offDeviceShake(e)
    }
  }, [m, t, v])
  var b = React1.useCallback(function (e) {
    if (++g >= m) {
      v(t)
    }
  }, [m, t, g, v])
  if (p && p.type === Src_editor_widget_builtIn_types.D) {
    var /* [auto-meaningful-name] */p$backgroundColor = p.backgroundColor
    var /* [auto-meaningful-name] */p$backgroundImageResizeMode = p.backgroundImageResizeMode
    var /* [auto-meaningful-name] */p$backgroundImage = p.backgroundImage
    var T = f.get(p$backgroundImage)
    var S = T ? Module_9.lb(T) : ""
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
        if (null === e$target$dataset$screenId || undefined === e$target$dataset$screenId ? undefined : e$target$dataset$screenId.startsWith(Src_editor_widget_builtIn_types.D)) {
          Module_313.n(t)
          Module_20.emitScreenPress(t, e.nativeEvent.offsetX, e.nativeEvent.offsetY)
        }
      },
      onMouseDown: function (e) {
        var /* [auto-meaningful-name] */e$target$dataset$screenId = e.target.dataset.screenId
        if (null === e$target$dataset$screenId || undefined === e$target$dataset$screenId ? undefined : e$target$dataset$screenId.startsWith(Src_editor_widget_builtIn_types.D)) {
          Module_313.k(t)
          document.addEventListener("mouseup", function () {
            return Module_313.b()
          }, {
            once: true
          })
          Module_20.emitScreenPressIn(t, e.nativeEvent.offsetX, e.nativeEvent.offsetY)
          Module_67.a(function () {
            return Module_20.emitScreenPressHoldAndWait(t, r.current.x || 0, r.current.y || 0)
          })
        }
      },
      onMouseUp: function (e) {
        var /* [auto-meaningful-name] */e$target$dataset$screenId = e.target.dataset.screenId
        if (null === e$target$dataset$screenId || undefined === e$target$dataset$screenId ? undefined : e$target$dataset$screenId.startsWith(Src_editor_widget_builtIn_types.D)) {
          Module_313.n(t)
          Module_20.emitScreenPressOut(t, e.nativeEvent.offsetX, e.nativeEvent.offsetY)
        }
      },
      onMouseMove: function (e) {
        var /* [auto-meaningful-name] */e$target$dataset$screenId = e.target.dataset.screenId
        if (null === e$target$dataset$screenId || undefined === e$target$dataset$screenId ? undefined : e$target$dataset$screenId.startsWith(Src_editor_widget_builtIn_types.D)) {
          r.current.x = e.nativeEvent.offsetX
          r.current.y = e.nativeEvent.offsetY
        }
      },
      onTouchStart: function (e) {
        if (Src_shared_tools_index.W()) {
          var /* [auto-meaningful-name] */e$target$dataset$screenId = e.target.dataset.screenId
          if (null === e$target$dataset$screenId || undefined === e$target$dataset$screenId ? undefined : e$target$dataset$screenId.startsWith(Src_editor_widget_builtIn_types.D)) {
            Module_20.emitScreenPressIn(t, e.targetTouches[0].clientX, e.targetTouches[0].clientY)
            Module_67.a(function () {
              return Module_20.emitScreenPressHoldAndWait(t, r.current.x || 0, r.current.y || 0)
            })
          }
        }
      },
      onTouchMove: function (e) {
        if (Src_shared_tools_index.W()) {
          var /* [auto-meaningful-name] */e$target$dataset$screenId = e.target.dataset.screenId
          if (null === e$target$dataset$screenId || undefined === e$target$dataset$screenId ? undefined : e$target$dataset$screenId.startsWith(Src_editor_widget_builtIn_types.D)) {
            r.current.x = e.targetTouches[0].clientX
            r.current.y = e.targetTouches[0].clientX
          }
        }
      },
      onTouchEnd: function (e) {
        if (Src_shared_tools_index.W()) {
          var /* [auto-meaningful-name] */e$target$dataset$screenId = e.target.dataset.screenId
          if (null === e$target$dataset$screenId || undefined === e$target$dataset$screenId ? undefined : e$target$dataset$screenId.startsWith(Src_editor_widget_builtIn_types.D)) {
            Module_20.emitScreenPressOut(t, e.targetTouches[0].clientX, e.targetTouches[0].clientY)
          }
        }
      },
      style: {
        backgroundColor: Color(p$backgroundColor).toString(),
        backgroundImage: S ? "url(".concat(S, ")") : "none",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: p$backgroundImageResizeMode === Module_206.a.STRETCH ? "100% 100%" : p$backgroundImageResizeMode
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
