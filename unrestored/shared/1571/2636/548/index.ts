/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：548
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"../11"
import * as /* [auto-meaningful-name] */React from /* 0 */"react"
import /* [auto-meaningful-name] */React1 from /* 0 */"react"
import * as /* [auto-meaningful-name] */Color from /* 51 */"color"
import /* [auto-meaningful-name] */Color1 from /* 51 */"color"
import * as /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import /* [auto-meaningful-name] */Classnames1 from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_90 from /* 90 */"../90"
import * as /* [auto-meaningful-name] */Module_131 from /* 131 */"../131"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../9"
import * as /* [auto-meaningful-name] */Module_53 from /* 53 */"../53"
import * as /* [auto-meaningful-name] */Module_163 from /* 163 */"../163"
import * as /* [auto-meaningful-name] */Module_201 from /* 201 */"./201"
import /* [auto-meaningful-name] */Module_2011 from /* 201 */"./201"
var _a
_a = function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$position = e.position
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$opacity = e.opacity
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$onSwitch = e.onSwitch
  var /* [auto-meaningful-name] */e$size = e.size
  var /* [auto-meaningful-name] */e$isEditState = e.isEditState
  var /* [auto-meaningful-name] */e$attributes$mode = e$attributes.mode
  var /* [auto-meaningful-name] */e$attributes$color = e$attributes.color
  var /* [auto-meaningful-name] */e$attributes$disabled = e$attributes.disabled
  var /* [auto-meaningful-name] */e$attributes$value = e$attributes.value
  var /* [auto-meaningful-name] */e$attributes$backgroundMode = e$attributes.backgroundMode
  var /* [auto-meaningful-name] */e$attributes$backgroundOpenImage = e$attributes.backgroundOpenImage
  var /* [auto-meaningful-name] */e$attributes$backgroundCloseImage = e$attributes.backgroundCloseImage
  var /* [auto-meaningful-name] */e$attributes$imageResizeMode = e$attributes.imageResizeMode
  var N = React1.useRef(null)
  var R = React1.useRef(null)
  var k = React1.useRef(false)
  var x = function () {
    var e = function (e, t) {
      var n
      var o = Color1(t).toString()
      return (n = {}, Module_11.a(n, Module_163.c.DEFAULT, {
        turnOn: {
          backgroundColor: Src_shared_tools_index.hb(o, .3),
          handleColor: o
        },
        turnOff: {
          backgroundColor: Src_shared_tools_index.hb("#000", .2),
          handleColor: "#ffffff"
        },
        disabled: {
          backgroundColor: Src_shared_tools_index.hb("#000", .1),
          handleColor: "#ffffff"
        }
      }), Module_11.a(n, Module_163.c.PRIMARY, {
        turnOn: {
          backgroundColor: o,
          handleColor: "#ffffff"
        },
        turnOff: {
          backgroundColor: Src_shared_tools_index.hb("#000", .2),
          handleColor: "#ffffff"
        },
        disabled: {
          backgroundColor: Src_shared_tools_index.hb("#000", .1),
          handleColor: "#ffffff"
        }
      }), n)[e]
    }(e$attributes$mode, e$attributes$color)
    return e$attributes$disabled ? e.disabled : e$attributes$value ? e.turnOn : e.turnOff
  }()
  var D = Module_9.hb(e$attributes$backgroundOpenImage)
  var M = Src_shared_tools_index.U(e$attributes$backgroundOpenImage) ? e$attributes$backgroundOpenImage : D ? (null === D || undefined === D ? undefined : D.source) || (null === D || undefined === D ? undefined : D.cdnUrl) : Module_131.b
  var L = Module_9.hb(e$attributes$backgroundCloseImage)
  var P = Src_shared_tools_index.U(e$attributes$backgroundCloseImage) ? e$attributes$backgroundCloseImage : L ? (null === L || undefined === L ? undefined : L.source) || (null === L || undefined === L ? undefined : L.cdnUrl) : Module_131.a
  var B = React1.createElement("div", {
    ref: R,
    style: {
      backgroundSize: "contain" === e$attributes$imageResizeMode ? "contain" : "100% 100%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: e$size.height,
      width: e$size.width
    }
  })
  React.useEffect(function () {
    if (e$attributes$backgroundMode === Module_163.a.IMAGE && !k.current) {
      var /* [auto-meaningful-name] */R$current = R.current
      if (!R$current) {
        return
      }
      R$current.style.backgroundImage = "url(".concat(e$attributes$value ? M : P, ")")
      return function () {
        R$current.style.backgroundImage = "none"
      }
    }
  }, [M, P, e$attributes$backgroundMode, e$attributes$value])
  return React1.createElement("div", {
    id: t,
    "data-role": Src_editor_widget_builtIn_types.M,
    "data-widget-type": Src_editor_widget_builtIn_types.F,
    "data-min-width": Module_131.j,
    "data-max-width": Module_53.o,
    "data-min-height": Module_131.i,
    "data-max-height": Module_53.m,
    className: Classnames1(Module_2011.switchWidget, Module_90.b, Module_11.a({}, Module_2011.hide, !e$visible)),
    style: {
      top: e$position.y,
      left: e$position.x,
      height: e$size.height,
      width: e$size.width,
      minWidth: "".concat(Module_131.j, "px"),
      minHeight: "".concat(Module_131.i, "px"),
      maxWidth: "".concat(Module_53.o, "px"),
      maxHeight: "".concat(Module_53.m, "px"),
      opacity: undefined === e$opacity ? undefined : e$opacity / 100,
      filter: e$attributes$disabled && e$attributes$backgroundMode === Module_163.a.IMAGE ? "saturate(0) brightness(1.1)" : undefined
    },
    onClick: function (t) {
      if (!e$attributes$disabled) {
        if (e$onSwitch) {
          e$onSwitch(!e$attributes$value)
        }
        if (e$attributes$backgroundMode === Module_163.a.TEMPLATE) {
          var /* [auto-meaningful-name] */N$current
          if (!(null === (N$current = N.current) || undefined === N$current)) {
            N$current.classList.add(Module_2011.leftAnimation)
          }
          setTimeout(function () {
            var /* [auto-meaningful-name] */N$current1
            if (!(null === (N$current1 = N.current) || undefined === N$current1)) {
              N$current1.classList.remove(Module_2011.leftAnimation)
            }
          }, 100)
        } else {
          var /* [auto-meaningful-name] */R$current = R.current
          if (!Module_9.s(e.id) && e$isEditState || !R$current) {
            return
          }
          R$current.classList.add(Module_2011.imageAnimationFirstHalf)
          k.current = true
          setTimeout(function () {
            R$current.classList.remove(Module_2011.imageAnimationFirstHalf)
            R$current.classList.add(Module_2011.imageAnimationSecondHalf)
            R$current.style.backgroundImage = "url(".concat(e$attributes$value ? P : M, ")")
            setTimeout(function () {
              R$current.classList.remove(Module_2011.imageAnimationSecondHalf)
              k.current = false
            }, 100)
          }, 100)
        }
      }
    }
  }, e$attributes$backgroundMode === Module_163.a.IMAGE ? B : function () {
    var /* [auto-meaningful-name] */e$size$width = e$size.width
    var /* [auto-meaningful-name] */e$size$height = e$size.height
    e$size$height = (e$size$width = Math.min(e$size$width, e$size$height * Module_131.k)) / Module_131.k
    return React1.createElement("div", {
      className: Module_2011.templateWrapper,
      style: {
        width: e$size$width,
        height: e$size$height
      }
    }, e$attributes$mode === Module_163.c.DEFAULT ? React1.createElement("div", {
      className: Module_2011.default,
      style: {
        backgroundColor: x.backgroundColor,
        borderRadius: e$size$height / 2
      }
    }, React1.createElement("div", {
      ref: N,
      className: Classnames1(Module_2011.handle),
      style: {
        height: e$size$height,
        width: e$size$height,
        backgroundColor: x.handleColor,
        left: e$attributes$value ? "calc(100% - ".concat(e$size$height, "px)") : 0
      }
    })) : React1.createElement("div", {
      className: Module_2011.primary,
      style: {
        borderRadius: e$size$height / 2,
        backgroundColor: x.backgroundColor,
        height: e$size$height,
        width: e$size$width
      }
    }, React1.createElement("div", {
      className: Classnames1(Module_2011.handle),
      style: {
        backgroundColor: x.handleColor,
        height: e$size$height,
        width: e$size$height,
        left: e$attributes$value ? "calc(100% - ".concat(e$size$height, "px)") : 0
      }
    })))
  }())
}
export { _a as a }
export default _a
