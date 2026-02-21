/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：13
 */

"use strict"

export { p as s }
export { d as t }
export { a as k } from "../../../../unrestored/shared/1571/2636/294/index"
export { g as n }
export { a as o } from "../../../../unrestored/shared/1571/2636/539"
export { y as x }
export { a as j } from "./iconfont/index"
export { w }
export { C as p }
export { X as q }
export { Q as r }
export { a as f } from "./dialog/index"
export { J as d }
export { oe as b }
export { ae as u }
export { se as e }
export { be as g }
export { we as l }
export { Ce as m }
export { Ae as y }
export { je as B }
export { Ne as h }
export { Re as i }
export { ke as A }
export { Pe as a }
export { Fe as v }
export { Ue as c }
export { a as z } from "../../../../unrestored/shared/1571/2636/322"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_10_index from "../../../../unrestored/shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */Classnames from "classnames"
import /* [auto-meaningful-name] */Classnames1 from "classnames"
import { createContext, memo, useContext, useCallback, useState, useEffect, useRef, useMemo, forwardRef, useImperativeHandle, useLayoutEffect, createRef } from "react"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from "react"
import "../../../../unrestored/shared/1571/2636/13/839"
var c = createContext(null)
var /* [auto-meaningful-name] */c$Provider = c.Provider
var u = c
var d = memo(function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$value = e.value
  var /* [auto-meaningful-name] */e$disabled = e.disabled
  var /* [auto-meaningful-name] */e$className = e.className
  var c = useContext(u)
  var l = useCallback(function () {
    if (c) {
      c.value = e$value
      c.onChange(e$value)
    }
  }, [c, e$value])
  return React1.createElement("button", {
    disabled: e$disabled,
    onClick: l,
    className: Classnames1("coco-radio-item", e$className, {
      selected: (null === c || undefined === c ? undefined : c.value) === e$value
    })
  }, e$children || e$value)
})
var p = memo(function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$value = e.value
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$style = e.style
  var /* [auto-meaningful-name] */e$defaultValue = e.defaultValue
  var d = useState(e$defaultValue)
  var p = $$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(d, 2)
  var f = p[0]
  var h = p[1]
  useEffect(function () {
    if (undefined !== e$value) {
      h(e$value)
    }
  }, [e$value])
  var m = useCallback(function (e) {
    if (undefined === e$value) {
      h(e)
    }
  }, [e$value])
  var g = useCallback(function (e) {
    if (undefined !== e) {
      m(e)
      if (e$onChange) {
        e$onChange(e)
      }
    }
  }, [m, e$onChange])
  return React1.createElement(c$Provider, {
    value: {
      value: f,
      onChange: g
    }
  }, React1.createElement("div", {
    className: Classnames1("coco-radio", e.className, {
      "disabled-all": false
    }),
    style: e$style
  }, e$children))
})
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_294_index from "../../../../unrestored/shared/1571/2636/294/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_295 from "../../../../unrestored/shared/1571/2636/295"
import * as /* [auto-meaningful-name] */Lodash from "lodash"
import "../../../../unrestored/shared/1571/2636/13/640"
var g = memo(function (e) {
  var /* [auto-meaningful-name] */e$onStep = e.onStep
  var /* [auto-meaningful-name] */e$max = e.max
  var /* [auto-meaningful-name] */e$min = e.min
  var /* [auto-meaningful-name] */e$defaultValue = e.defaultValue
  var /* [auto-meaningful-name] */e$disabled = e.disabled
  var c = $$_$$_$$_$$_unrestored_shared_1571_2636_295.a(e, ["onStep", "max", "min", "defaultValue", "disabled"])
  var l = Number(e$max) <= Number(e$defaultValue)
  var u = Number(e$min) >= Number(e$defaultValue)
  var d = Number(e$defaultValue)
  var p = useCallback(function (e) {
    if (!l && Lodash.isFunction(e$onStep)) {
      e$onStep("".concat(d + 1), e, "up")
    }
  }, [l, e$onStep, d])
  var g = useCallback(function (e) {
    if (!u && Lodash.isFunction(e$onStep)) {
      e$onStep("".concat(d - 1), e, "down")
    }
  }, [u, e$onStep, d])
  return React1.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_294_index.a, Object.assign({}, c, {
    defaultValue: e$defaultValue,
    min: e$min,
    max: e$max,
    disabled: e$disabled,
    after: React1.createElement("div", {
      className: "coco-number-input"
    }, React1.createElement("span", {
      className: l || e$disabled ? "disable" : "",
      onClick: p
    }, React1.createElement($_iconfont_index.a, {
      type: "icon-up"
    })), React1.createElement("span", {
      className: u || e$disabled ? "disable" : "",
      onClick: g
    }, React1.createElement($_iconfont_index.a, {
      type: "icon-down"
    })))
  }))
})
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_539 from "../../../../unrestored/shared/1571/2636/539"
import "../../../../unrestored/shared/1571/2636/13/1101"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_13_780_index from "../../../../unrestored/shared/1571/2636/13/780/index"
import /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_13_780_index1 from "../../../../unrestored/shared/1571/2636/13/780/index"
import "../../../../unrestored/shared/1571/2636/13/842"
var y = memo(function (e) {
  var /* [auto-meaningful-name] */e$step = e.step
  var n = undefined === e$step ? 1 : e$step
  var /* [auto-meaningful-name] */e$max = e.max
  var c = undefined === e$max ? 100 : e$max
  var /* [auto-meaningful-name] */e$min = e.min
  var u = undefined === e$min ? 1 : e$min
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$value = e.value
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$isShowLeftInput = e.isShowLeftInput
  var /* [auto-meaningful-name] */e$isShowRightInput = e.isShowRightInput
  var /* [auto-meaningful-name] */e$inputAfter = e.inputAfter
  var v = useRef(null)
  var y = useState(e$value || u)
  var E = $$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(y, 2)
  var O = E[0]
  var w = E[1]
  useEffect(function () {
    if (undefined !== e$value) {
      T(e$value.toString())
      w(e$value)
    }
  }, [e$value])
  var C = useCallback(function (e) {
    T(e.toString())
    w(e)
    if (e$onChange) {
      e$onChange(e)
    }
  }, [e$onChange])
  var T = function (e) {
    var /* [auto-meaningful-name] */v$current
    var n = null === (v$current = v.current) || undefined === v$current ? undefined : v$current.input
    if (n) {
      n.value = e.toString()
    }
  }
  var S = function (e) {
    w(Number(e))
    if (e$onChange) {
      e$onChange(Number(e))
    }
  }
  return React1.createElement("div", {
    className: Classnames1("coco-slider", e$className)
  }, e$isShowLeftInput && React1.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_294_index.a, {
    defaultValue: O,
    className: Classnames1("coco-slider-input", "coco-slider-left-input"),
    type: "number",
    max: c,
    min: u,
    onChange: S,
    ref: v,
    after: e$inputAfter
  }), React1.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_780_index1, {
    value: O,
    step: n,
    min: u,
    max: c,
    onChange: C
  }), e$isShowRightInput && React1.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_294_index.a, {
    defaultValue: O,
    className: Classnames1("coco-slider-input", "coco-slider-right-input"),
    type: "number",
    max: c,
    min: u,
    onChange: S,
    ref: v,
    after: e$inputAfter
  }))
})
import * as /* [auto-meaningful-name] */$_iconfont_index from "./iconfont/index"
import "../../../../unrestored/shared/1571/2636/13/641"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_361 from "../../../../unrestored/shared/1571/2636/361"
var w = memo(function (e) {
  var /* [auto-meaningful-name] */e$style = e.style
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$value = e.value
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$defaultValue = e.defaultValue
  var /* [auto-meaningful-name] */e$open = e.open
  var /* [auto-meaningful-name] */e$autoCloseWhenChanged = e.autoCloseWhenChanged
  var f = undefined === e$autoCloseWhenChanged || e$autoCloseWhenChanged
  var h = useState(e$value || e$defaultValue)
  var m = $$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(h, 2)
  var g = m[0]
  var _ = m[1]
  var v = useState(e$open)
  var b = $$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(v, 2)
  var y = b[0]
  var w = b[1]
  var C = useRef(null)
  var T = useState(null)
  var S = $$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(T, 2)
  var A = S[0]
  var I = S[1]
  useEffect(function () {
    if (undefined !== e$value) {
      _(e$value)
    }
  }, [e$value])
  useEffect(function () {
    w(e$open)
  }, [e$open])
  var j = useCallback(function (e) {
    if (undefined === e$value) {
      _(e)
    }
  }, [e$value])
  var N = useCallback(function (e) {
    if (e) {
      I(e)
    }
  }, [])
  var R = useCallback(function () {
    w(!y)
  }, [y])
  useEffect(function () {
    var e = function e(t) {
      var /* [auto-meaningful-name] */t$target = t.target
      if (C.current && !C.current.contains(t$target)) {
        w(false)
        document.body.removeEventListener("click", e)
      }
    }
    if (y) {
      document.body.addEventListener("click", e)
    } else {
      document.body.removeEventListener("click", e)
    }
  }, [y])
  return React1.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_361.a, {
    value: {
      value: g,
      onChange: function (e) {
        j(e)
        if (e$onChange) {
          e$onChange(e)
        }
        if (f) {
          w(false)
        }
      },
      onChangeSelectorContent: N
    }
  }, React1.createElement("div", {
    className: Classnames1("coco-select", e$className),
    style: e$style,
    ref: C
  }, React1.createElement("div", {
    className: Classnames1("coco-select-selector", {
      active: y
    }),
    onClick: R
  }, React1.createElement("div", {
    className: Classnames1("coco-select-label")
  }, A), React1.createElement($_iconfont_index.a, {
    type: "icon-up",
    className: Classnames1("coco-select-arrow", {
      active: y
    })
  })), React1.createElement("div", {
    className: Classnames1("coco-select-options", [y ? "show" : "hide"])
  }, e$children)))
})
var C = memo(function (e) {
  var /* [auto-meaningful-name] */e$value = e.value
  var /* [auto-meaningful-name] */e$suffix = e.suffix
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$className = e.className
  var c = useContext($$_$$_$$_$$_unrestored_shared_1571_2636_361.b)
  useEffect(function () {
    if ((null === c || undefined === c ? undefined : c.value) === e$value) {
      c.onChangeSelectorContent(e$children || e$value)
    }
  }, [c, e$children, e$value])
  return React1.createElement("div", {
    onClick: function () {
      if (!(null === c || undefined === c)) {
        c.onChange(e$value)
      }
    },
    className: Classnames1({
      selected: (null === c || undefined === c ? undefined : c.value) === e$value
    }, e$className, "coco-option")
  }, e$children || React1.createElement("div", {
    className: "coco-option-content"
  }, React1.createElement("p", null, e$value), e$suffix))
})
import * as /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import /* [auto-meaningful-name] */RegeneratorRuntime1 from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_7 from "../../../../unrestored/shared/1571/2636/7"
import { useDispatch } from "react-redux"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_710 from "../../../../unrestored/shared/1571/2636/710"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_1213 from "../../../../unrestored/shared/1571/2636/1213"
import * as /* [auto-meaningful-name] */Color from "color"
import /* [auto-meaningful-name] */Color1 from "color"
import * as /* [auto-meaningful-name] */$$_$$_$$_editor_redux_common_actions from "../../../editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_13_344 from "../../../../unrestored/shared/1571/2636/13/344"
import * as /* [auto-meaningful-name] */$$_$$_tools_index from "../../tools/index"
import "../../../../unrestored/shared/1571/2636/13/651"
function L(e) {
  return "#ffffff" === Color1(e).hex().toLocaleLowerCase()
}
var P
var B = memo(function (e) {
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var /* [auto-meaningful-name] */e$color = e.color
  var /* [auto-meaningful-name] */e$selected = e.selected
  var /* [auto-meaningful-name] */e$className = e.className
  var a = $$_$$_tools_index.i(e$color)
  return React1.createElement("div", {
    onClick: function () {
      if (e$onClick) {
        e$onClick(e$color)
      }
    },
    style: {
      background: e$color
    },
    className: Classnames1("color-palette-block", {
      selected: e$selected
    }, e$className, a && "color-palette-transparent-block", !a && L(e$color) && "color-palette-white-block")
  }, a && React1.createElement("div", {
    className: "coco-palette-bias"
  }), e$selected && !a && React1.createElement($_iconfont_index.a, {
    className: "coco-palette-icon-selected",
    type: "icon-selected"
  }))
})
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_13_797_index from "../../../../unrestored/shared/1571/2636/13/797/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_13_253_index from "../../../../unrestored/shared/1571/2636/13/253/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_13_226 from "../../../../unrestored/shared/1571/2636/13/226"
import /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_13_2261 from "../../../../unrestored/shared/1571/2636/13/226"
!function (e) {
  e.HEX = "HEX"
  e.HSVA = "HSVA"
  e.RGBA = "RGBA"
}(P || (P = {}))
var H
var V = [P.HEX, P.HSVA, P.RGBA]
var z = memo(function (e) {
  var /* [auto-meaningful-name] */e$color = e.color
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var o = useState(P.HEX)
  var i = $$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(o, 2)
  var c = i[0]
  var l = i[1]
  var u = useMemo(function () {
    var e = $$_$$_$$_$$_unrestored_shared_1571_2636_13_2261(e$color).toHex8()
    var n = $$_$$_$$_$$_unrestored_shared_1571_2636_13_2261(e$color).toHsv()
    n.a = Math.round(100 * n.a)
    var r = $$_$$_$$_$$_unrestored_shared_1571_2636_13_2261(e$color).toHsl()
    r.a = Math.round(100 * r.a)
    var o = $$_$$_$$_$$_unrestored_shared_1571_2636_13_2261(e$color).toRgb()
    o.a = Math.round(100 * o.a)
    return {
      hex: "#".concat(e),
      hsl: r,
      hsv: n,
      rgb: o
    }
  }, [e$color])
  var /* [auto-meaningful-name] */u$hex = u.hex
  var /* [auto-meaningful-name] */u$hsl = u.hsl
  var /* [auto-meaningful-name] */u$hsv = u.hsv
  var /* [auto-meaningful-name] */u$rgb = u.rgb
  var g = function (e) {
    var t
    if (e.HEX) {
      if ($$_$$_$$_$$_unrestored_shared_1571_2636_13_2261(e.HEX).isValid()) {
        return void e$onChange({
          hex: $$_$$_$$_$$_unrestored_shared_1571_2636_13_2261(e.HEX).toHexString(),
          hsl: u$hsl,
          rgb: u$rgb
        })
      }
    } else if (e.R || e.G || e.B) {
      t = {
        r: e.R || u$rgb.r,
        g: e.G || u$rgb.g,
        b: e.B || u$rgb.b,
        source: "rgb"
      }
    } else {
      if (e.A) {
        if (e.A < 0) {
          e.A = 0
        } else {
          if (e.A > 100) {
            e.A = 100
          }
        }
        t = {
          h: u$hsv.h,
          s: u$hsv.s,
          v: u$hsv.v,
          a: e.A / 100,
          source: "hsv"
        }
      } else {
        if (e.H || e.S || e.V) {
          if (1 === Number(e.S)) {
            e.S = .01
          } else {
            if (1 === Number(e.V)) {
              e.V = .01
            }
          }
          t = {
            h: e.H || u$hsl.h,
            s: Number(Lodash.isUndefined(e.S) ? u$hsv.s : e.S),
            v: Number(Lodash.isUndefined(e.V) ? u$hsv.v : e.V),
            source: "hsv"
          }
        }
      }
    }
    if (t && $$_$$_tools_index.kb(t)) {
      var r = $$_$$_tools_index.C(t, e.H || u$hsv.h)
      e$onChange(r)
    }
  }
  return React1.createElement("div", {
    className: "coco-platte-custom-input"
  }, React1.createElement("div", {
    className: "coco-platte-input-box"
  }, c === P.HEX && React1.createElement("div", {
    className: "coco-platte-hex-box"
  }, React1.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_253_index.EditableInput, {
    label: "HEX",
    value: u$hex,
    onChange: g
  })), c === P.HSVA && React1.createElement("div", {
    className: "coco-platte-flex-box"
  }, React1.createElement("div", {
    className: "coco-platte-field"
  }, React1.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_253_index.EditableInput, {
    label: "H",
    value: Math.round(u$hsv.h),
    onChange: g
  })), React1.createElement("div", {
    className: "coco-platte-field"
  }, React1.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_253_index.EditableInput, {
    label: "S",
    value: Math.round(100 * u$hsv.s),
    onChange: g
  })), React1.createElement("div", {
    className: "coco-platte-field"
  }, React1.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_253_index.EditableInput, {
    label: "V",
    value: Math.round(100 * u$hsv.v),
    onChange: g
  })), React1.createElement("div", {
    className: "coco-platte-field"
  }, React1.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_253_index.EditableInput, {
    label: "A",
    value: u$hsl.a,
    onChange: g
  }))), c === P.RGBA && React1.createElement("div", {
    className: "coco-platte-flex-box"
  }, React1.createElement("div", {
    className: "coco-platte-field"
  }, React1.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_253_index.EditableInput, {
    label: "R",
    value: u$rgb.r,
    onChange: g
  })), React1.createElement("div", {
    className: "coco-platte-field"
  }, React1.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_253_index.EditableInput, {
    label: "G",
    value: u$rgb.g,
    onChange: g
  })), React1.createElement("div", {
    className: "coco-platte-field"
  }, React1.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_253_index.EditableInput, {
    label: "B",
    value: u$rgb.b,
    onChange: g
  })), React1.createElement("div", {
    className: "coco-platte-field"
  }, React1.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_253_index.EditableInput, {
    label: "A",
    value: u$rgb.a,
    onChange: g
  })))), React1.createElement("div", {
    className: "coco-platte-toggle-color-type"
  }, React1.createElement("div", {
    className: "coco-platte-arrow-box",
    onClick: function () {
      var e = V.indexOf(c) - 1
      l(V[e = e < 0 ? 2 : e])
    }
  }, React1.createElement($_iconfont_index.a, {
    className: "coco-palette-arrow-up",
    type: "icon-fold"
  })), React1.createElement("div", {
    className: "coco-platte-arrow-box",
    onClick: function () {
      var e = V.indexOf(c) + 1
      e = e >= V.length ? 0 : e
      l(V[e])
    }
  }, React1.createElement($_iconfont_index.a, {
    className: "coco-palette-arrow-down",
    type: "icon-fold"
  }))))
})
var Y = {
  default: {
    picker: {
      width: 248,
      padding: 0,
      background: "#fff",
      borderRadius: 0,
      boxShadow: "none",
      color: "#534C59"
    },
    saturation: {
      width: "100%",
      borderRadius: 4
    },
    sliders: {
      padding: 0
    },
    hue: {
      background: "linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)"
    },
    controls: {
      width: 216,
      marginLeft: 32,
      marginTop: 15,
      marginBottom: 15
    },
    alpha: {
      marginTop: 8
    },
    color: {
      width: 30,
      height: 30,
      marginTop: -1,
      marginLeft: 10,
      border: "none"
    },
    activeColor: {
      width: 30,
      height: 30,
      borderRadius: 4
    }
  }
}
var K = memo(function (e) {
  var /* [auto-meaningful-name] */e$color = e.color
  var /* [auto-meaningful-name] */e$handleColorChange = e.handleColorChange
  var r = function (e) {
    var /* [auto-meaningful-name] */e$hex = e.hex
    if (!$$_$$_tools_index.i(e$hex)) {
      e$hex = undefined !== e.rgb.a ? "".concat(e.hex).concat(function (e) {
        var t = Math.round(255 * Lodash.clamp(e, 0, 1))
        var n = t.toString(16)
        return t <= 15 ? "0".concat(n) : n
      }(e.rgb.a)) : "".concat(e.hex, "FF")
    }
    e$handleColorChange(e$hex)
  }
  return React1.createElement(React1.Fragment, null, React1.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_797_index.a, {
    onChange: r,
    color: e$color,
    presetColors: [],
    disableAlpha: false,
    styles: Y
  }), React1.createElement(z, {
    color: e$color,
    onChange: r
  }))
})
var q = []
var X = memo(forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$value = e.value
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$onClose = e.onClose
  var /* [auto-meaningful-name] */e$defaultValue = e.defaultValue
  var d = undefined === e$defaultValue ? "#000000ff" : e$defaultValue
  var /* [auto-meaningful-name] */e$style = e.style
  var f = undefined === e$style ? {} : e$style
  var h = useRef(null)
  var m = useRef(null)
  var g = useRef(false)
  var _ = useDispatch()
  var /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage = $$_$$_$$_$$_unrestored_shared_1571_2636_710.a().formatMessage
  var b = useState(e$value || d)
  var y = $$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(b, 2)
  var O = y[0]
  var w = y[1]
  var C = useRef(O)
  if (0 === q.length) {
    q.push(O)
  }
  var T = function (e) {
    if (e !== O) {
      w(e)
      if (e$onChange) {
        e$onChange(e, g.current)
      }
      H = e
    }
  }
  var R = function (e) {
    T(e)
  }
  useImperativeHandle(t, function () {
    return {
      setRGBA: w
    }
  })
  useEffect(function () {
    var e = function (e) {
      var /* [auto-meaningful-name] */e$target = e.target
      var /* [auto-meaningful-name] */h$current = h.current
      var /* [auto-meaningful-name] */m$current = m.current
      if ((!h$current || !h$current.contains(e$target)) && (!m$current || !m$current.contains(e$target))) {
        if (e$onClose) {
          e$onClose(O)
        }
        _($$_$$_$$_editor_redux_common_actions.hh())
        if (H) {
          var i = q.indexOf(H)
          if (i > -1) {
            q.splice(i, 1)
          }
          q.unshift(H)
        }
        if (q.length > 9) {
          q.splice(9)
        }
        t()
      }
    }
    var t = function () {
      document.body.removeEventListener("mousedown", e, {
        capture: true
      })
      document.body.removeEventListener("touchstart", e, {
        capture: true
      })
      document.body.removeEventListener("mousewheel", e, {
        capture: true
      })
    }
    document.body.addEventListener("mousedown", e, {
      capture: true
    })
    document.body.addEventListener("touchstart", e, {
      capture: true
    })
    document.body.addEventListener("mousewheel", e, {
      capture: true
    })
    return t
  })
  useEffect(function () {
    C.current = O
  }, [O])
  useEffect(function () {
    var e = function () {
      g.current = true
      document.addEventListener("mouseup", function () {
        g.current = false
      }, {
        once: true
      })
    }
    document.addEventListener("mousedown", e)
    return function () {
      return document.removeEventListener("mousedown", e)
    }
  })
  var L = useCallback(function () {
    if (e$onChange) {
      e$onChange(C.current, g.current)
    }
  }, [e$onChange])
  var P = useCallback(function (e) {
    if (false === e && e$onChange) {
      e$onChange(C.current, g.current)
    }
  }, [e$onChange])
  var F = function () {
    var e = $$_$$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime1.mark(function e() {
      var t
      var /* [auto-meaningful-name] */e$sent
      var r
      return RegeneratorRuntime1.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (window.EyeDropper) {
                e.next = 3
                break
              }
              _($$_$$_$$_editor_redux_common_actions.mj({
                message: $$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
                  id: "colorPicker.eyeDropperTips"
                })
              }))
              return e.abrupt("return", false)
            case 3:
              e.prev = 3
              t = new window.EyeDropper()
              e.next = 7
              return t.open().catch(function (e) {
                return console.info(e)
              })
            case 7:
              if (null === (e$sent = e.sent) || undefined === e$sent ? undefined : e$sent.sRGBHex) {
                r = Color1(e$sent.sRGBHex).hex()
                T(r)
              }
              e.next = 14
              break
            case 11:
              e.prev = 11
              e.t0 = e.catch(3)
              console.error("handleDrawColor", e.t0)
            case 14:
            case "end":
              return e.stop()
          }
        }
      }, e, null, [[3, 11]])
    }))
    return function () {
      return e.apply(this, arguments)
    }
  }()
  return React1.createElement("div", {
    className: Classnames1("coco-palette"),
    style: f,
    ref: h
  }, React1.createElement("div", {
    className: "coco-palette-body"
  }, $$_$$_$$_$$_unrestored_shared_1571_2636_13_344.b.map(function (e, t) {
    return React1.createElement(B, {
      onClick: R,
      key: t,
      color: e,
      selected: O === e,
      className: $$_$$_tools_index.V(e) ? "coco-palette-light-color-selected" : "coco-palette-dark-color-selected"
    })
  })), React1.createElement("div", {
    className: "coco-palette-history-color"
  }, React1.createElement("span", {
    className: "coco-palette-history-title"
  }, $$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
    id: "colorPicker.history"
  })), React1.createElement("div", {
    className: "coco-palette-history-color-list"
  }, q.map(function (e, t) {
    return React1.createElement(B, {
      onClick: R,
      key: t,
      color: e
    })
  }))), React1.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_1213.a, {
    placement: "rightBottom",
    overlayClassName: "coco-palette-picker",
    onVisibleChange: P,
    trigger: "click",
    content: React1.createElement("div", {
      className: "coco-palette-picker-popover",
      ref: m,
      onBlur: L
    }, React1.createElement("div", {
      className: "coco-palette-icon-picker-box",
      onClick: F
    }, React1.createElement($_iconfont_index.a, {
      type: "icon-picker-color"
    })), React1.createElement(K, {
      color: O,
      handleColorChange: T
    }))
  }, React1.createElement("div", {
    className: "coco-palette-more-color-box"
  }, React1.createElement("div", {
    className: "coco-palette-more-color"
  }, React1.createElement("div", {
    className: "coco-palette-more-title-box"
  }, React1.createElement("img", {
    alt: "",
    className: "coco-palette-more-image",
    src: require("../../../../unrestored/shared/1571/2636/13/866")
  }), React1.createElement("span", {
    className: "coco-palette-more-title"
  }, $$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
    id: "colorPicker.more"
  }))), React1.createElement($_iconfont_index.a, {
    className: "coco-palette-more-arrow",
    type: "icon-fold"
  })))))
}))
import "../../../../unrestored/shared/1571/2636/13/867"
var Q = memo(forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$defaultVisible = e.defaultVisible
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$style = e.style
  var /* [auto-meaningful-name] */e$content = e.content
  var /* [auto-meaningful-name] */e$onOpen = e.onOpen
  var /* [auto-meaningful-name] */e$onClose = e.onClose
  var /* [auto-meaningful-name] */e$onHide = e.onHide
  var /* [auto-meaningful-name] */e$contentClassName = e.contentClassName
  var /* [auto-meaningful-name] */e$autoClose = e.autoClose
  var g = undefined === e$autoClose || e$autoClose
  var /* [auto-meaningful-name] */e$disabled = e.disabled
  var v = undefined !== e$disabled && e$disabled
  var b = useState(!!e$defaultVisible)
  var y = $$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(b, 2)
  var E = y[0]
  var O = y[1]
  var w = useRef(null)
  useEffect(function () {
    if (E && e$onOpen) {
      e$onOpen()
    }
  }, [E])
  useLayoutEffect(function () {
    var e = function e(t) {
      var /* [auto-meaningful-name] */t$target = t.target
      if (w.current && !w.current.contains(t$target)) {
        O(false)
        document.body.removeEventListener("click", e)
      }
    }
    if (E && g) {
      document.body.addEventListener("click", e)
    } else {
      if (e$onClose) {
        e$onClose()
      }
    }
    return function () {
      document.body.removeEventListener("click", e)
    }
  }, [E, e$onClose, g])
  useImperativeHandle(t, function () {
    return {
      target: w.current,
      visible: E,
      showContent: function () {
        O(true)
        if (e$onOpen) {
          e$onOpen()
        }
      },
      hideContent: function () {
        O(false)
        if (e$onHide) {
          e$onHide()
        }
      }
    }
  })
  return React1.createElement("div", {
    style: e$style,
    className: Classnames1("coco-popover", e$className),
    ref: w
  }, React1.createElement("div", {
    className: "coco-popover-children",
    onClick: function () {
      O(true)
    }
  }, e$children), React1.createElement("div", {
    className: Classnames1("coco-popover-content", e$contentClassName, [E ? "show" : "hide"])
  }, e$content), v && React1.createElement("div", {
    className: "coco-popover-disabled-mask"
  }))
}))
import * as /* [auto-meaningful-name] */$_dialog_index from "./dialog/index"
import "../../../../unrestored/shared/1571/2636/13/869"
var J = memo(React1.forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$icon = e.icon
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var /* [auto-meaningful-name] */e$disabled = e.disabled
  var /* [auto-meaningful-name] */e$style = e.style
  var u = undefined === e$style ? {} : e$style
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$danger = e.danger
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$shape = e.shape
  var m = undefined === e$shape ? "circle" : e$shape
  var g = useRef(null)
  useImperativeHandle(t, function () {
    return {
      button: g.current
    }
  })
  return React1.createElement("button", {
    ref: g,
    className: Classnames1("coco-button", function () {
      var /* [auto-meaningful-name] */CocoButton = "coco-button-"
      return (e$type ? CocoButton + e$type : "") + " " + (e$danger ? CocoButton + "dangerous" : "") + " " + (m ? CocoButton + m : "")
    }(), e$className),
    disabled: e$disabled,
    style: u,
    onClick: e$onClick
  }, e$icon && React1.createElement($_iconfont_index.a, {
    type: e$icon
  }), e$children)
}))
import "../../../../unrestored/shared/1571/2636/13/870"
var $ = createContext(null)
var /* [auto-meaningful-name] */$$Provider = $.Provider
var te = $
memo(function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$onSelect = e.onSelect
  var /* [auto-meaningful-name] */e$value = e.value
  var /* [auto-meaningful-name] */e$defaultValue = e.defaultValue
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$style = e.style
  var d = undefined === e$style ? {} : e$style
  var /* [auto-meaningful-name] */e$open = e.open
  var /* [auto-meaningful-name] */e$onBlur = e.onBlur
  var h = useState(e$value || e$defaultValue)
  var m = $$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(h, 2)
  var g = m[0]
  var _ = m[1]
  var v = useState(false)
  var b = $$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(v, 2)
  var y = b[0]
  var O = b[1]
  useEffect(function () {
    _(e$value)
  }, [e$value])
  useEffect(function () {
    if (undefined !== e$open) {
      O(e$open)
    }
  }, [e$open])
  useEffect(function () {
    var /* [auto-meaningful-name] */S$current
    if (!(null === (S$current = S.current) || undefined === S$current)) {
      S$current.setAttribute("tabindex", "-1")
    }
  }, [])
  var w = useCallback(function (e) {
    if (undefined === e$open) {
      O(e)
    }
  }, [e$open])
  var C = useCallback(function (e) {
    _(e)
    w(false)
    if (e$onSelect) {
      e$onSelect(e)
    }
  }, [e$onSelect, w])
  var T = useCallback(function () {
    w(!y)
  }, [y, w])
  var S = useRef(null)
  var A = useCallback(function () {
    w(false)
    if (e$onBlur) {
      e$onBlur()
    }
  }, [e$onBlur, w])
  return React1.createElement($$Provider, {
    value: {
      onSelect: C,
      selectedValue: g
    }
  }, React1.createElement("div", {
    style: d,
    className: Classnames1(e$className, "coco-tree-select"),
    onBlur: A,
    ref: S
  }, React1.createElement("div", {
    className: "coco-tree-selector",
    onClick: T
  }, g, React1.createElement("i", {
    className: Classnames1("coco-tree-select-arrow", {
      active: y
    })
  }, React1.createElement($_iconfont_index.a, {
    type: "icon-up"
  }))), React1.createElement("div", {
    className: Classnames1("coco-tree-select-list", {
      hide: !y
    })
  }, e$children)))
})
var ne = memo(function (e) {
  var /* [auto-meaningful-name] */e$title = e.title
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$disabled = e.disabled
  var c = useState(false)
  var l = $$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(c, 2)
  var u = l[0]
  var d = l[1]
  var p = useCallback(function () {
    if (!e$disabled) {
      d(true)
    }
  }, [d, e$disabled])
  var f = useCallback(function () {
    if (!e$disabled) {
      d(false)
    }
  }, [d, e$disabled])
  return React1.createElement("div", {
    className: Classnames1("coco-tree-node"),
    onMouseEnter: p,
    onMouseLeave: f
  }, React1.createElement("div", {
    className: Classnames1("coco-tree-group-header", {
      disabled: e$disabled
    })
  }, React1.createElement("span", null, e$title), React1.createElement("i", {
    className: "coco-tree-node-arrows"
  }, React1.createElement($_iconfont_index.a, {
    type: "icon-right"
  }))), React1.createElement("div", {
    className: Classnames1("coco-tree-group-main", {
      hide: !u
    })
  }, e$children))
})
var re = memo(function (e) {
  var /* [auto-meaningful-name] */e$value = e.value
  var /* [auto-meaningful-name] */e$title = e.title
  var /* [auto-meaningful-name] */e$content = e.content
  var /* [auto-meaningful-name] */e$disabled = e.disabled
  var c = useContext(te)
  var l = useCallback(function () {
    if (null === c || undefined === c ? undefined : c.onSelect) {
      c.onSelect(e$value)
    }
  }, [e$value, c])
  return React1.createElement("div", {
    className: Classnames1("coco-tree-node-item", {
      selected: (null === c || undefined === c ? undefined : c.selectedValue) === e$value,
      disabled: e$disabled
    }),
    onClick: l,
    key: e$value
  }, e$content || React1.createElement("span", null, e$title))
})
memo(function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$className = e.className
  return React1.createElement("div", {
    className: Classnames1(e$className, "coco-tree-node")
  }, e$children ? React1.createElement(ne, e) : React1.createElement(re, e))
})
import "../../../../unrestored/shared/1571/2636/13/871"
var oe = memo(function (e) {
  var /* [auto-meaningful-name] */e$type = e.type
  var n = undefined === e$type ? "info" : e$type
  var /* [auto-meaningful-name] */e$message = e.message
  var /* [auto-meaningful-name] */e$showPrefixIcon = e.showPrefixIcon
  var l = undefined === e$showPrefixIcon || e$showPrefixIcon
  var /* [auto-meaningful-name] */e$showCloseIcon = e.showCloseIcon
  var d = undefined !== e$showCloseIcon && e$showCloseIcon
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$onClose = e.onClose
  var /* [auto-meaningful-name] */e$icon = e.icon
  var /* [auto-meaningful-name] */e$className = e.className
  var g = useState(true)
  var _ = $$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(g, 2)
  var v = _[0]
  var b = _[1]
  useLayoutEffect(function () {
    if (undefined !== e$visible) {
      b(e$visible)
    }
  }, [e$visible])
  var y = useCallback(function (e) {
    if (undefined === e$visible) {
      b(e)
    }
  }, [e$visible])
  var O = useMemo(function () {
    var e = ""
    var t = ""
    switch (n) {
      case "success":
        e = "icon-alert-success"
        t = "coco-alert-success"
        break
      case "error":
        e = "icon-alert-error"
        t = "coco-alert-error"
        break
      case "info":
        e = "icon-alert-info"
        t = "coco-alert-info"
    }
    return {
      icon: React1.createElement($_iconfont_index.a, {
        type: e
      }),
      className: t
    }
  }, [n])
  var w = useCallback(function () {
    y(false)
    if (e$onClose) {
      e$onClose()
    }
  }, [e$onClose, y])
  return React1.createElement("div", {
    className: Classnames1("coco-alert", O.className, e$className, {
      hide: !v
    })
  }, React1.createElement("div", {
    className: "coco-alert-content"
  }, React1.createElement("div", {
    className: "coco-alert-icon"
  }, l && (e$icon || O.icon)), React1.createElement("span", null, e$message)), d && React1.createElement("div", {
    className: "coco-alert-close",
    onClick: w
  }, React1.createElement($_iconfont_index.a, {
    type: "icon-close"
  })))
})
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_11 from "../../../../unrestored/shared/1571/2636/11"
import "../../../../unrestored/shared/1571/2636/13/652"
var ae = memo(function (e) {
  var t
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$justify = e.justify
  var /* [auto-meaningful-name] */e$align = e.align
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$label = e.label
  return React1.createElement("div", {
    "data-row-label": e$label,
    className: Classnames1("coco-row", e$className, (t = {}, $$_$$_$$_$$_unrestored_shared_1571_2636_11.a(t, "coco-row-".concat(e$align), e$align), $$_$$_$$_$$_unrestored_shared_1571_2636_11.a(t, "coco-row-".concat(e$justify), e$justify), t))
  }, e$children)
})
var se = memo(function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$span = e.span
  if ("string" === typeof e$span) {
    var r = parseInt(e$span)
    e$span = isNaN(r) ? undefined : 48 * r / 100
  }
  return React1.createElement("div", {
    className: Classnames1("coco-col", $$_$$_$$_$$_unrestored_shared_1571_2636_11.a({}, "coco-col-".concat(e$span), undefined !== e$span))
  }, e$children)
})
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_27 from "../../../../unrestored/shared/1571/2636/27"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_39 from "../../../../unrestored/shared/1571/2636/39"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_58_index from "../../../../unrestored/shared/1571/2636/58/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_59_index from "../../../../unrestored/shared/1571/2636/59/index"
var pe = createContext({
  draggedItemIndex: -1
})
var /* [auto-meaningful-name] */pe$Consumer = pe.Consumer
var /* [auto-meaningful-name] */pe$Provider = pe.Provider
import "../../../../unrestored/shared/1571/2636/13/872"
function me(e) {
  return e.target.closest("[data-coco-draggable-index]")
}
function ge(e, t, n) {
  var /* [auto-meaningful-name] */n$offsetTop = n.offsetTop
  var o = n.getBoundingClientRect()
  var /* [auto-meaningful-name] */o$height = o.height
  var /* [auto-meaningful-name] */o$top = o.top
  var s = e.y < o$top + o$height / 2 ? 0 : 1
  t.style.top = n$offsetTop + s * o$height + "px"
  return s
}
var _e = function (e) {
  $$_$$_$$_$$_unrestored_shared_1571_2636_58_index.a(n, e)
  var t = $$_$$_$$_$$_unrestored_shared_1571_2636_59_index.a(n)
  function n(e) {
    var r
    $$_$$_$$_$$_unrestored_shared_1571_2636_27.a(this, n);
    (r = t.call(this, e)).separationLineRef = createRef()
    r.dragContentRef = createRef()
    r.dragWrapperRef = createRef()
    r._dragResult = undefined
    r._mousedownTimeId = undefined
    r._mousemoveTimeId = undefined
    r.handleMouseDown = function (e) {
      if (0 === e.button) {
        var /* [auto-meaningful-name] */r$props = r.props
        var /* [auto-meaningful-name] */r$props$onDragStart = r$props.onDragStart
        var /* [auto-meaningful-name] */r$props$children = r$props.children
        if (r$props$children && React1.Children.count(r$props$children) > 1) {
          var a = me(e)
          var /* [auto-meaningful-name] */r$separationLineRef$current = r.separationLineRef.current
          var l = {
            x: e.clientX,
            y: e.clientY
          }
          if (r._mousedownTimeId) {
            clearTimeout(r._mousedownTimeId)
          }
          r._mousedownTimeId = setTimeout(function () {
            if (a && r$separationLineRef$current) {
              var e = Number(a.dataset.cocoDraggableIndex)
              ge(l, r$separationLineRef$current, a)
              r._dragResult.sourceIndex = e
              r._dragResult.destinationIndex = e
              r._setMouseCursor("grab")
              r.setState({
                draggedItemIndex: e
              })
              if (r$props$onDragStart) {
                r$props$onDragStart()
              }
            }
            document.addEventListener("mousemove", r.handleMouseMove)
          }, n.DELAY)
          document.addEventListener("mouseup", r.handleMouseUp)
        }
      }
    }
    r.handleMouseUp = function () {
      var /* [auto-meaningful-name] */r$props$onDragEnd = r.props.onDragEnd
      if (r._mousedownTimeId) {
        clearTimeout(r._mousedownTimeId)
      }
      if (r.state.isDragging && r$props$onDragEnd) {
        r$props$onDragEnd(r._dragResult)
      }
      r._initializeState()
      document.removeEventListener("mouseup", r.handleMouseUp)
      document.removeEventListener("mousemove", r.handleMouseMove)
    }
    r._initializeState = function () {
      r._dragResult.destinationIndex = -1
      r._dragResult.sourceIndex = -1
      r.setState({
        isDragging: false,
        draggedItemIndex: -1
      })
      r._setMouseCursor("initial")
    }
    r.handleMouseMove = function (e) {
      r._setScrollOffset()
      if (!r._mousemoveTimeId) {
        r._mousemoveTimeId = setTimeout(function () {
          r._mousemoveTimeId = null
        }, 60)
        r.setState({
          isDragging: true
        })
        var t = me(e)
        var /* [auto-meaningful-name] */r$separationLineRef$current = r.separationLineRef.current
        if (t && r$separationLineRef$current) {
          var o = ge({
            x: e.clientX,
            y: e.clientY
          }, r$separationLineRef$current, t)
          var i = Number(t.dataset.cocoDraggableIndex) + o
          if (r._dragResult.sourceIndex !== i && r._dragResult.sourceIndex + 1 !== i) {
            r._dragResult.destinationIndex = r._dragResult.sourceIndex < i ? i - 1 : i
          } else {
            r._dragResult.destinationIndex = r._dragResult.sourceIndex
          }
        }
      }
    }
    r._setScrollOffset = function () {
      var e = React1.Children.count(r.props.children)
      var /* [auto-meaningful-name] */r$dragWrapperRef$current = r.dragWrapperRef.current
      var /* [auto-meaningful-name] */r$separationLineRef$current = r.separationLineRef.current
      var /* [auto-meaningful-name] */r$dragContentRef$current = r.dragContentRef.current
      if (r$dragWrapperRef$current && r$separationLineRef$current && r$dragContentRef$current) {
        var i = r$dragContentRef$current.getBoundingClientRect().height / e
        var /* [auto-meaningful-name] */r$dragWrapperRef$current$getBoundingClientRect$height = r$dragWrapperRef$current.getBoundingClientRect().height
        var /* [auto-meaningful-name] */r$separationLineRef$current$offsetTop = r$separationLineRef$current.offsetTop
        var /* [auto-meaningful-name] */r$dragWrapperRef$current$scrollTop = r$dragWrapperRef$current.scrollTop
        if (0 !== r$separationLineRef$current$offsetTop) {
          if (r$dragWrapperRef$current$getBoundingClientRect$height + r$dragWrapperRef$current$scrollTop - i < r$separationLineRef$current$offsetTop) {
            r$dragWrapperRef$current.scrollTop += 10
          } else {
            if (r$separationLineRef$current$offsetTop - i < r$dragWrapperRef$current$scrollTop) {
              r$dragWrapperRef$current.scrollTop -= 10
            }
          }
        }
      }
    }
    r._setMouseCursor = function (e) {
      document.body.style.cursor = e
    }
    r.separationLineRef = React1.createRef()
    r._dragResult = {
      sourceIndex: -1,
      destinationIndex: -1
    }
    r.state = {
      isDragging: false,
      draggedItemIndex: -1
    }
    return r
  }
  $$_$$_$$_$$_unrestored_shared_1571_2636_39.a(n, [
    {
      key: "render",
      value: function () {
        var /* [auto-meaningful-name] */this$state = this.state
        var /* [auto-meaningful-name] */this$state$isDragging = this$state.isDragging
        var /* [auto-meaningful-name] */this$state$draggedItemIndex = this$state.draggedItemIndex
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$children = this$props.children
        var /* [auto-meaningful-name] */this$props$className = this$props.className
        return React1.createElement(pe$Provider, {
          value: {
            draggedItemIndex: this$state$draggedItemIndex
          }
        }, React1.createElement("div", {
          className: Classnames1("coco-drag-context", this$props$className),
          ref: this.dragWrapperRef
        }, React1.createElement("div", {
          onMouseDown: this.handleMouseDown,
          ref: this.dragContentRef
        }, this$props$children, React1.createElement("div", {
          className: "coco-drag-context-line",
          ref: this.separationLineRef,
          style: {
            display: this$state$isDragging ? "block" : "none"
          }
        }))))
      }
    }
  ])
  return n
}(React1.PureComponent)
_e.DELAY = 200
memo(_e)
memo(function (e) {
  var /* [auto-meaningful-name] */e$index = e.index
  var /* [auto-meaningful-name] */e$children = e.children
  return React1.createElement(pe$Consumer, null, function (e) {
    var /* [auto-meaningful-name] */e$draggedItemIndex = e.draggedItemIndex
    return React1.createElement("div", {
      className: Classnames1("coco-draggable", {
        dragged: e$draggedItemIndex === e$index
      }),
      "data-coco-draggable-index": e$index
    }, e$children)
  })
})
import "../../../../unrestored/shared/1571/2636/13/873"
var ve
var be = memo(function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$showDropdownIcon = e.showDropdownIcon
  var o = undefined === e$showDropdownIcon || e$showDropdownIcon
  var /* [auto-meaningful-name] */e$overlay = e.overlay
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var d = useState(false)
  var p = $$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(d, 2)
  var f = p[0]
  var h = p[1]
  var m = useRef(null)
  function g(e) {
    var /* [auto-meaningful-name] */m$current
    var /* [auto-meaningful-name] */m$current1
    if (e) {
      if (!(null === (m$current = m.current) || undefined === m$current)) {
        m$current.showContent()
      }
    } else {
      if (!(null === (m$current1 = m.current) || undefined === m$current1)) {
        m$current1.hideContent()
      }
    }
  }
  return React1.createElement("div", {
    className: Classnames1("coco-dropdown", e$className),
    onClick: function () {
      var /* [auto-meaningful-name] */m$current
      if (e$onClick) {
        e$onClick(!!(null === (m$current = m.current) || undefined === m$current ? undefined : m$current.visible), g)
      }
    }
  }, React1.createElement(Q, {
    ref: m,
    contentClassName: "coco-dropdown-overlay",
    content: React1.createElement("div", {
      onClick: function () {
        var /* [auto-meaningful-name] */m$current
        if (!(null === (m$current = m.current) || undefined === m$current)) {
          m$current.hideContent()
        }
        h(false)
      }
    }, e$overlay),
    onOpen: function () {
      h(true)
    },
    onClose: function () {
      h(false)
    }
  }, React1.createElement("div", {
    className: Classnames1("coco-dropdown-selector", {
      "coco-dropdown-active": f
    }),
    onClick: function () {
      var /* [auto-meaningful-name] */m$current
      var /* [auto-meaningful-name] */m$current1
      if (null === (m$current = m.current) || undefined === m$current ? undefined : m$current.visible) {
        if (!(null === (m$current1 = m.current) || undefined === m$current1)) {
          m$current1.hideContent()
        }
      }
    }
  }, e$children, o && React1.createElement($_iconfont_index.a, {
    type: "icon-dropdown-down",
    className: Classnames1("coco-dropdown-down-icon")
  }))))
})
var ye = createContext(null)
var /* [auto-meaningful-name] */ye$Provider = ye.Provider
var Oe = ye
import "../../../../unrestored/shared/1571/2636/13/874"
var we = memo(function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  return React1.createElement(ye$Provider, {
    value: {
      onClick: function (e) {
        if (e$onClick) {
          e$onClick(e)
        }
      }
    }
  }, React1.createElement("div", {
    className: "coco-menu"
  }, e$children))
})
var Ce = memo(function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$value = e.value
  var r = useContext(Oe)
  return React1.createElement("div", {
    className: "coco-menu-item",
    onClick: function () {
      if (undefined !== e$value && r) {
        r.onClick(e$value)
      }
    }
  }, e$children)
})
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_13_318 from "../../../../unrestored/shared/1571/2636/13/318"
import /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_13_3181 from "../../../../unrestored/shared/1571/2636/13/318"
var Ae = memo(function (e) {
  var t
  var /* [auto-meaningful-name] */e$value = e.value
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$subMenu = e.subMenu
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var u = useRef(null)
  var d = useState("right")
  var p = $$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(d, 2)
  var f = p[0]
  var h = p[1]
  var m = useState(false)
  var g = $$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(m, 2)
  var _ = g[0]
  var v = g[1]
  var b = useMemo(function () {
    return $$_$$_tools_index.p(v, 100)
  }, [])
  return React1.createElement("div", {
    ref: u,
    className: $$_$$_$$_$$_unrestored_shared_1571_2636_13_3181.subMenuItemWrapper,
    onMouseEnter: function () {
      if (e$subMenu) {
        b(function () {
          return true
        })
        var /* [auto-meaningful-name] */u$current = u.current
        if (u$current) {
          var t = u$current.getClientRects()[0]
          if (t.x + t.width + t.width < window.innerWidth) {
            h("right")
          } else {
            h("left")
          }
        }
      }
    },
    onMouseLeave: function () {
      if (e$subMenu) {
        b(function () {
          return false
        })
      }
    },
    onClick: function () {
      if (!e$subMenu && e$value && e$onClick) {
        e$onClick(e$value)
      }
    }
  }, React1.createElement(Ce, {
    value: e$value
  }, React1.createElement("div", null, e$children, e$subMenu && React1.createElement("span", {
    className: $$_$$_$$_$$_unrestored_shared_1571_2636_13_3181.subMenuArrow
  }, React1.createElement($_iconfont_index.a, {
    type: "icon-arrow-down"
  })))), e$subMenu && React1.createElement("div", {
    className: Classnames1($$_$$_$$_$$_unrestored_shared_1571_2636_13_3181.subMenuOverlay, (t = {}, $$_$$_$$_$$_unrestored_shared_1571_2636_11.a(t, $$_$$_$$_$$_unrestored_shared_1571_2636_13_3181.visible, _), $$_$$_$$_$$_unrestored_shared_1571_2636_11.a(t, $$_$$_$$_$$_unrestored_shared_1571_2636_13_3181.placementLeft, "left" === f), $$_$$_$$_$$_unrestored_shared_1571_2636_11.a(t, $$_$$_$$_$$_unrestored_shared_1571_2636_13_3181.placementRight, "right" === f), t))
  }, e$subMenu))
})
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_748_index from "../../../../unrestored/shared/1571/2636/748/index"
import "../../../../unrestored/shared/1571/2636/13/875"
var je = memo(function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$onCancel = e.onCancel
  var /* [auto-meaningful-name] */e$multiple = e.multiple
  var l = undefined !== e$multiple && e$multiple
  var /* [auto-meaningful-name] */e$accept = e.accept
  var d = undefined === e$accept ? "" : e$accept
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$tooltip = e.tooltip
  var h = undefined === e$tooltip ? "" : e$tooltip
  var /* [auto-meaningful-name] */e$style = e.style
  var g = undefined === e$style ? {} : e$style
  var _ = useRef(null)
  var v = useState(false)
  var b = $$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(v, 2)
  var y = b[0]
  var E = b[1]
  useEffect(function () {
    var e = function (e) {
      var /* [auto-meaningful-name] */_$current$files
      if (y) {
        if (_.current && 0 === (null === (_$current$files = _.current.files) || undefined === _$current$files ? undefined : _$current$files.length) && e$onCancel) {
          e$onCancel()
        }
        E(false)
      }
    }
    window.addEventListener("focus", e)
    return function () {
      window.removeEventListener("focus", e)
    }
  }, [y, e$onCancel])
  return React1.createElement("div", {
    onClick: function () {
      var /* [auto-meaningful-name] */_$current = _.current
      if (_$current) {
        E(true)
        _$current.click()
      }
    },
    className: Classnames1("coco-upload-button", e$className),
    style: g
  }, React1.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_748_index.a, {
    placement: "right",
    title: h
  }, React1.createElement("input", {
    type: "file",
    style: {
      display: "none"
    },
    onChange: function (e) {
      var /* [auto-meaningful-name] */e$target = e.target
      if (e$target && e$onChange) {
        e$onChange(e$target.files)
        e$target.value = ""
      }
    },
    ref: _,
    multiple: l,
    accept: d
  }), React1.createElement("div", {
    className: "coco-upload-button-content"
  }, e$children)))
})
var Ne = memo(function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$className = e.className
  return React1.createElement("div", {
    className: Classnames1(e$className, "coco-form")
  }, e$children)
})
import "../../../../unrestored/shared/1571/2636/13/876"
var Re = memo(function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$label = e.label
  var /* [auto-meaningful-name] */e$labelWidth = e.labelWidth
  var /* [auto-meaningful-name] */e$align = e.align
  var c = undefined === e$align ? "horizontal" : e$align
  return React1.createElement("div", {
    className: Classnames1(e$className, "coco-form-item", ["horizontal" === c ? "coco-form-item-horizontal" : "coco-form-item-vertical"])
  }, e$label && React1.createElement("p", {
    className: "coco-form-item-label",
    style: {
      width: e$labelWidth
    }
  }, e$label), React1.createElement("div", {
    className: Classnames1("coco-form-item-content")
  }, e$children))
})
import "../../../../unrestored/shared/1571/2636/13/877"
var ke = memo(React1.forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$defaultValue = e.defaultValue
  var /* [auto-meaningful-name] */e$value = e.value
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$placeholder = e.placeholder
  var u = undefined === e$placeholder ? "" : e$placeholder
  var /* [auto-meaningful-name] */e$rows = e.rows
  var p = undefined === e$rows ? 1 : e$rows
  var /* [auto-meaningful-name] */e$cols = e.cols
  var /* [auto-meaningful-name] */e$maxLength = e.maxLength
  var /* [auto-meaningful-name] */e$minLength = e.minLength
  var /* [auto-meaningful-name] */e$autoComplete = e.autoComplete
  var _ = undefined === e$autoComplete ? "on" : e$autoComplete
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$onFocus = e.onFocus
  var /* [auto-meaningful-name] */e$onBlur = e.onBlur
  var /* [auto-meaningful-name] */e$dependency = e.dependency
  var /* [auto-meaningful-name] */e$disabled = e.disabled
  var w = useRef(null)
  var C = useRef(null)
  var T = useRef(null)
  var S = useState(false)
  var A = $$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(S, 2)
  var I = A[0]
  var j = A[1]
  var N = useCallback(function (e) {
    var /* [auto-meaningful-name] */C$current = C.current
    if (C$current) {
      C$current.innerHTML = e + "/" + e$maxLength
    }
  }, [e$maxLength])
  useEffect(function () {
    var /* [auto-meaningful-name] */w$current = w.current
    if (w$current && undefined === e$value) {
      w$current.value = undefined === e$defaultValue ? "" : e$defaultValue.toString()
      N(w$current.value.length)
    }
  }, [w, N, e$dependency, e$value, e$defaultValue])
  useEffect(function () {
    var /* [auto-meaningful-name] */w$current = w.current
    if (undefined !== e$value && w$current) {
      w$current.value = e$value
      N(e$value.toString().length)
    }
  }, [w, N, e$value])
  var R = function () {
    var /* [auto-meaningful-name] */w$current = w.current
    var /* [auto-meaningful-name] */T$current = T.current
    if (w$current && T$current) {
      T$current.style.display = "block"
      var n = w$current.value.replace(/'\n'/g, "<br>")
      var r = getComputedStyle(w$current)
      T$current.innerHTML = $$_$$_tools_index.t(n)
      T$current.style.width = r.width
      T$current.style.lineHeight = r.lineHeight
      T$current.style.minHeight = r.lineHeight
      var /* [auto-meaningful-name] */T$current$clientHeight = T$current.clientHeight
      T$current.style.display = "none"
      var i = T$current$clientHeight / parseInt(r.lineHeight)
      var /* [auto-meaningful-name] */w$current$value$split_n$length = w$current.value.split("\n").length
      return Math.max(i, w$current$value$split_n$length)
    }
    return 1
  }
  useImperativeHandle(t, function () {
    return {
      getRowCount: function () {
        return R()
      },
      setRows: function (e) {
        if (w.current) {
          w.current.rows = e
        }
      }
    }
  })
  var k = {
    placeholder: u,
    rows: p,
    cols: e$cols,
    maxLength: e$maxLength,
    minLength: e$minLength,
    autoComplete: _,
    disabled: e$disabled,
    value: e$value
  }
  return React1.createElement("div", {
    className: Classnames1("coco-textarea", e$className)
  }, React1.createElement("textarea", Object.assign({
    ref: w,
    onChange: function (e) {
      N(e.target.value.length)
      if (e$onChange) {
        e$onChange(e)
      }
    },
    onBlur: function (e) {
      var t = R()
      if (e$onBlur) {
        e$onBlur(e, t)
      }
      j(false)
    },
    onFocus: function (e) {
      if (e$onFocus) {
        e$onFocus(e)
      }
      j(true)
    }
  }, k)), React1.createElement("div", {
    className: "coco-textarea-textCounter",
    ref: C,
    style: {
      display: I && e$maxLength ? "block" : "none"
    }
  }), React1.createElement("div", {
    className: "coco-textarea-rowCounter",
    ref: T
  }))
}))
import "../../../../unrestored/shared/1571/2636/541/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_13_303_index from "../../../../unrestored/shared/1571/2636/13/303/index"
import /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_13_303_index1 from "../../../../unrestored/shared/1571/2636/13/303/index"
import "../../../../unrestored/shared/1571/2636/13/879"
var /* [auto-meaningful-name] */__EMPTY_ADVANCE_TEXT_TIP_ID__ = "@__EMPTY_ADVANCE_TEXT_TIP_ID__@"
var Le = function () {
  var e
  if (!(null === (e = document.getElementById(__EMPTY_ADVANCE_TEXT_TIP_ID__)) || undefined === e)) {
    e.remove()
  }
}
var Pe = function (e) {
  var /* [auto-meaningful-name] */e$text = e.text
  var /* [auto-meaningful-name] */e$duration = e.duration
  var r = undefined === e$duration ? 500 : e$duration
  var /* [auto-meaningful-name] */e$className = e.className
  var c = useRef(null)
  useEffect(function () {
    return function () {
      Le()
    }
  })
  return React1.createElement("div", {
    ref: c,
    onMouseMove: function (e) {
      var /* [auto-meaningful-name] */e$clientX = e.clientX
      var /* [auto-meaningful-name] */e$clientY = e.clientY
      function i(e) {
        var /* [auto-meaningful-name] */c$current = c.current
        var /* [auto-meaningful-name] */e$target = e.target
        if (!(c$current && e$target && c$current.contains(e$target))) {
          Le()
          clearTimeout(ve)
          document.removeEventListener("mousemove", i)
        }
      }
      if (ve) {
        clearTimeout(ve)
      }
      ve = setTimeout(function () {
        !function (e, t, n) {
          Le()
          __EMPTY_ADVANCE_TEXT_TIP_ID__ = "coco-advanced-text-tip—" + $$_$$_$$_$$_unrestored_shared_1571_2636_13_303_index1()
          var r = document.createElement("div")
          r.innerHTML = e
          r.className = "coco-advanced-text-tip"
          r.id = __EMPTY_ADVANCE_TEXT_TIP_ID__
          r.style.top = n + 10 + "px"
          r.style.left = t + 10 + "px"
          document.body.appendChild(r)
        }(e$text, e$clientX, e$clientY)
        document.addEventListener("mousemove", i)
      }, r)
    },
    className: Classnames1("icon-advanced-text", e$className)
  }, e$text)
}
import "../../../../unrestored/shared/1571/2636/13/880"
var Be = $$_$$_tools_index.p(function (e) {
  if (e) {
    e()
  }
}, 30, true)
var Fe = function (e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$onScrollBottom = e.onScrollBottom
  var /* [auto-meaningful-name] */e$height = e.height
  var /* [auto-meaningful-name] */e$classnames = e.classnames
  var /* [auto-meaningful-name] */e$offsetY = e.offsetY
  var c = undefined === e$offsetY ? 10 : e$offsetY
  return React1.createElement("div", {
    style: {
      height: e$height
    },
    className: Classnames1("coco-scroll-paginate", e$classnames),
    onScroll: function (e) {
      var /* [auto-meaningful-name] */e$currentTarget = e.currentTarget
      if (e$currentTarget.scrollTop + e$height > e$currentTarget.scrollHeight - c && e$onScrollBottom) {
        Be(e$onScrollBottom)
      }
    }
  }, e$children)
}
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_13_794 from "../../../../unrestored/shared/1571/2636/13/794"
import /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_13_7941 from "../../../../unrestored/shared/1571/2636/13/794"
import "../../../../unrestored/shared/1571/2636/13/881"
var Ue = memo(forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$sourceImage = e.sourceImage
  var /* [auto-meaningful-name] */e$defaultScale = e.defaultScale
  var l = undefined === e$defaultScale ? 1 : e$defaultScale
  var /* [auto-meaningful-name] */e$width = e.width
  var /* [auto-meaningful-name] */e$height = e.height
  var /* [auto-meaningful-name] */e$border = e.border
  var f = undefined === e$border ? 0 : e$border
  var /* [auto-meaningful-name] */e$rotate = e.rotate
  var m = undefined === e$rotate ? 0 : e$rotate
  var /* [auto-meaningful-name] */e$step = e.step
  var _ = undefined === e$step ? .01 : e$step
  var /* [auto-meaningful-name] */e$minScale = e.minScale
  var b = undefined === e$minScale ? 1 : e$minScale
  var /* [auto-meaningful-name] */e$maxScale = e.maxScale
  var E = undefined === e$maxScale ? 2 : e$maxScale
  var O = useRef(null)
  var w = useState(l)
  var C = $$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(w, 2)
  var T = C[0]
  var S = C[1]
  var A = function (e) {
    var t = T + ("in" === e ? 1 / 8 : -1 / 8)
    if (t < 1) {
      t = 1
    }
    if (t > 2) {
      t = 2
    }
    S(t)
  }
  useImperativeHandle(t, function () {
    return {
      target: O.current,
      setScale: function (e) {
        S(e)
      }
    }
  })
  return React1.createElement("div", {
    className: "coco-avatar-editor"
  }, React1.createElement($$_$$_$$_$$_unrestored_shared_1571_2636_13_7941, {
    ref: O,
    crossOrigin: "anonymous",
    image: e$sourceImage,
    width: e$width,
    height: e$height,
    border: f,
    rotate: m,
    scale: T,
    onLoadSuccess: function (e) {
      var t = Math.max(e$width / e.width, e$height / e.height)
      t = Math.min(t, E)
      t = Math.max(t, b)
      S(t)
    }
  }), React1.createElement("div", {
    className: "coco-avatar-editor-scaleBar"
  }, React1.createElement("span", {
    className: Classnames1("coco-avatar-editor-zoomButton", "coco-avatar-editor-zoomOut"),
    onClick: function () {
      A("out")
    }
  }, React1.createElement("img", {
    src: require("../../../../unrestored/shared/1571/2636/13/882"),
    alt: "",
    className: "coco-avatar-editor-zoomOutIcon"
  })), React1.createElement("input", {
    type: "range",
    step: _,
    min: b,
    max: E,
    value: T,
    onChange: function (e) {
      S(parseFloat(e.target.value))
    }
  }), React1.createElement("span", {
    className: Classnames1("coco-avatar-editor-zoomButton", "coco-avatar-editor-zoomIn"),
    onClick: function () {
      A("in")
    }
  }, React1.createElement("img", {
    src: require("../../../../unrestored/shared/1571/2636/13/883"),
    alt: "",
    className: "coco-avatar-editor-zoomInIcon"
  }))))
}))
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_322 from "../../../../unrestored/shared/1571/2636/322"
export default Pe
