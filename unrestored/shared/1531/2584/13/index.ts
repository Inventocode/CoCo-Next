/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：13
 */

"use strict"

export { p as s }
export { d as t }
export { a as k } from "../295/index"
export { g as n }
export { a as o } from "../536"
export { y as x }
export { a as j } from "../94/index"
export { w }
export { C as p }
export { X as q }
export { Q as r }
export { a as f } from "../537/index"
export { J as d }
export { oe as b }
export { ae as u }
export { se as e }
export { be as g }
export { we as l }
export { Ce as m }
export { Ie as y }
export { je as B }
export { Ne as h }
export { Re as i }
export { ke as A }
export { Pe as a }
export { Fe as v }
export { We as c }
export { a as z } from "../321"
import r = require("../10/index");
import o = require("../8");
var i = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}(o)
import React = require("react");
var s = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}(React)
require("./828")
var c = React.createContext(null)
var c$Provider = c.Provider
var u = c
var d = React.memo(function (e) {
  var e$children = e.children
  var e$value = e.value
  var e$disabled = e.disabled
  var e$className = e.className
  var c = React.useContext(u)
  var l = React.useCallback(function () {
    if (c) {
      c.value = e$value
      c.onChange(e$value)
    }
  }, [c, e$value])
  return s.a.createElement("button", {
    disabled: e$disabled,
    onClick: l,
    className: i()("coco-radio-item", e$className, {
      selected: (null === c || undefined === c ? undefined : c.value) === e$value
    })
  }, e$children || e$value)
})
var p = React.memo(function (e) {
  var e$children = e.children
  var e$value = e.value
  var e$onChange = e.onChange
  var e$style = e.style
  var e$defaultValue = e.defaultValue
  var d = React.useState(e$defaultValue)
  var p = r.a(d, 2)
  var f = p[0]
  var h = p[1]
  React.useEffect(function () {
    if (undefined !== e$value) {
      h(e$value)
    }
  }, [e$value])
  var m = React.useCallback(function (e) {
    if (undefined === e$value) {
      h(e)
    }
  }, [e$value])
  var g = React.useCallback(function (e) {
    if (undefined !== e) {
      m(e)
      if (e$onChange) {
        e$onChange(e)
      }
    }
  }, [m, e$onChange])
  return s.a.createElement(c$Provider, {
    value: {
      value: f,
      onChange: g
    }
  }, s.a.createElement("div", {
    className: i()("coco-radio", e.className, {
      "disabled-all": false
    }),
    style: e$style
  }, e$children))
})
import f = require("../295/index");
import h = require("../296");
import Lodash = require("lodash");
require("./636")
var g = React.memo(function (e) {
  var e$onStep = e.onStep
  var e$max = e.max
  var e$min = e.min
  var e$defaultValue = e.defaultValue
  var e$disabled = e.disabled
  var c = h.a(e, ["onStep", "max", "min", "defaultValue", "disabled"])
  var l = Number(e$max) <= Number(e$defaultValue)
  var u = Number(e$min) >= Number(e$defaultValue)
  var d = Number(e$defaultValue)
  var p = React.useCallback(function (e) {
    if (!l && Lodash.isFunction(e$onStep)) {
      e$onStep("".concat(d + 1), e, "up")
    }
  }, [l, e$onStep, d])
  var g = React.useCallback(function (e) {
    if (!u && Lodash.isFunction(e$onStep)) {
      e$onStep("".concat(d - 1), e, "down")
    }
  }, [u, e$onStep, d])
  return s.a.createElement(f.a, Object.assign({}, c, {
    defaultValue: e$defaultValue,
    min: e$min,
    max: e$max,
    disabled: e$disabled,
    after: s.a.createElement("div", {
      className: "coco-number-input"
    }, s.a.createElement("span", {
      className: l || e$disabled ? "disable" : "",
      onClick: p
    }, s.a.createElement(E.a, {
      type: "icon-up"
    })), s.a.createElement("span", {
      className: u || e$disabled ? "disable" : "",
      onClick: g
    }, s.a.createElement(E.a, {
      type: "icon-down"
    })))
  }))
})
import _ = require("../536");
require("./1080")
import v = require("./769/index");
var b = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}(v)
require("./831")
var y = React.memo(function (e) {
  var e$step = e.step
  var n = undefined === e$step ? 1 : e$step
  var e$max = e.max
  var c = undefined === e$max ? 100 : e$max
  var e$min = e.min
  var u = undefined === e$min ? 1 : e$min
  var e$onChange = e.onChange
  var e$value = e.value
  var e$className = e.className
  var e$isShowLeftInput = e.isShowLeftInput
  var e$isShowRightInput = e.isShowRightInput
  var e$inputAfter = e.inputAfter
  var v = React.useRef(null)
  var y = React.useState(e$value || u)
  var E = r.a(y, 2)
  var O = E[0]
  var w = E[1]
  React.useEffect(function () {
    if (undefined !== e$value) {
      T(e$value.toString())
      w(e$value)
    }
  }, [e$value])
  var C = React.useCallback(function (e) {
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
  return s.a.createElement("div", {
    className: i()("coco-slider", e$className)
  }, e$isShowLeftInput && s.a.createElement(f.a, {
    defaultValue: O,
    className: i()("coco-slider-input", "coco-slider-left-input"),
    type: "number",
    max: c,
    min: u,
    onChange: S,
    ref: v,
    after: e$inputAfter
  }), s.a.createElement(b.a, {
    value: O,
    step: n,
    min: u,
    max: c,
    onChange: C
  }), e$isShowRightInput && s.a.createElement(f.a, {
    defaultValue: O,
    className: i()("coco-slider-input", "coco-slider-right-input"),
    type: "number",
    max: c,
    min: u,
    onChange: S,
    ref: v,
    after: e$inputAfter
  }))
})
import E = require("../94/index");
require("./637")
import O = require("../361");
var w = React.memo(function (e) {
  var e$style = e.style
  var e$children = e.children
  var e$value = e.value
  var e$onChange = e.onChange
  var e$className = e.className
  var e$defaultValue = e.defaultValue
  var e$open = e.open
  var e$autoCloseWhenChanged = e.autoCloseWhenChanged
  var f = undefined === e$autoCloseWhenChanged || e$autoCloseWhenChanged
  var h = React.useState(e$value || e$defaultValue)
  var m = r.a(h, 2)
  var g = m[0]
  var _ = m[1]
  var v = React.useState(e$open)
  var b = r.a(v, 2)
  var y = b[0]
  var w = b[1]
  var C = React.useRef(null)
  var T = React.useState(null)
  var S = r.a(T, 2)
  var I = S[0]
  var A = S[1]
  React.useEffect(function () {
    if (undefined !== e$value) {
      _(e$value)
    }
  }, [e$value])
  React.useEffect(function () {
    w(e$open)
  }, [e$open])
  var j = React.useCallback(function (e) {
    if (undefined === e$value) {
      _(e)
    }
  }, [e$value])
  var N = React.useCallback(function (e) {
    if (e) {
      A(e)
    }
  }, [])
  var R = React.useCallback(function () {
    w(!y)
  }, [y])
  React.useEffect(function () {
    var e = function e(t) {
      var t$target = t.target
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
  return s.a.createElement(O.a, {
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
  }, s.a.createElement("div", {
    className: i()("coco-select", e$className),
    style: e$style,
    ref: C
  }, s.a.createElement("div", {
    className: i()("coco-select-selector", {
      active: y
    }),
    onClick: R
  }, s.a.createElement("div", {
    className: i()("coco-select-label")
  }, I), s.a.createElement(E.a, {
    type: "icon-up",
    className: i()("coco-select-arrow", {
      active: y
    })
  })), s.a.createElement("div", {
    className: i()("coco-select-options", [y ? "show" : "hide"])
  }, e$children)))
})
var C = React.memo(function (e) {
  var e$value = e.value
  var e$suffix = e.suffix
  var e$children = e.children
  var e$className = e.className
  var c = React.useContext(O.b)
  React.useEffect(function () {
    if ((null === c || undefined === c ? undefined : c.value) === e$value) {
      c.onChangeSelectorContent(e$children || e$value)
    }
  }, [c, e$children, e$value])
  return s.a.createElement("div", {
    onClick: function () {
      if (!(null === c || undefined === c)) {
        c.onChange(e$value)
      }
    },
    className: i()({
      selected: (null === c || undefined === c ? undefined : c.value) === e$value
    }, e$className, "coco-option")
  }, e$children || s.a.createElement("div", {
    className: "coco-option-content"
  }, s.a.createElement("p", null, e$value), e$suffix))
})
import RegeneratorRuntime = require("regenerator-runtime");
var S = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}(RegeneratorRuntime)
import I = require("../7");
import A = require("../16/index");
import j = require("../702");
import N = require("../1185");
import Color = require("color");
var k = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}(Color)
import x = require("../../../../../src/shared/events/messages-wrapper");
import D = require("../133/342");
import M = require("../15");
require("./646")
function L(e) {
  return "#ffffff" === k()(e).hex().toLocaleLowerCase()
}
var P
var B = React.memo(function (e) {
  var e$onClick = e.onClick
  var e$color = e.color
  var e$selected = e.selected
  var e$className = e.className
  var a = M.i(e$color)
  return s.a.createElement("div", {
    onClick: function () {
      if (e$onClick) {
        e$onClick(e$color)
      }
    },
    style: {
      background: e$color
    },
    className: i()("color-palette-block", {
      selected: e$selected
    }, e$className, a && "color-palette-transparent-block", !a && L(e$color) && "color-palette-white-block")
  }, a && s.a.createElement("div", {
    className: "coco-palette-bias"
  }), e$selected && !a && s.a.createElement(E.a, {
    className: "coco-palette-icon-selected",
    type: "icon-selected"
  }))
})
import F = require("./785/index");
import G = require("./254/index");
import U = require("./225");
var W = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}(U)
!function (e) {
  e.HEX = "HEX"
  e.HSVA = "HSVA"
  e.RGBA = "RGBA"
}(P || (P = {}))
var H
var V = [P.HEX, P.HSVA, P.RGBA]
var z = React.memo(function (e) {
  var e$color = e.color
  var e$onChange = e.onChange
  var o = React.useState(P.HEX)
  var i = r.a(o, 2)
  var c = i[0]
  var l = i[1]
  var u = React.useMemo(function () {
    var e = W()(e$color).toHex8()
    var n = W()(e$color).toHsv()
    n.a = Math.round(100 * n.a)
    var r = W()(e$color).toHsl()
    r.a = Math.round(100 * r.a)
    var o = W()(e$color).toRgb()
    o.a = Math.round(100 * o.a)
    return {
      hex: "#".concat(e),
      hsl: r,
      hsv: n,
      rgb: o
    }
  }, [e$color])
  var u$hex = u.hex
  var u$hsl = u.hsl
  var u$hsv = u.hsv
  var u$rgb = u.rgb
  var g = function (e) {
    var t
    if (e.HEX) {
      if (W()(e.HEX).isValid()) {
        return void e$onChange({
          hex: W()(e.HEX).toHexString(),
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
    if (t && M.kb(t)) {
      var r = M.C(t, e.H || u$hsv.h)
      e$onChange(r)
    }
  }
  return s.a.createElement("div", {
    className: "coco-platte-custom-input"
  }, s.a.createElement("div", {
    className: "coco-platte-input-box"
  }, c === P.HEX && s.a.createElement("div", {
    className: "coco-platte-hex-box"
  }, s.a.createElement(G.EditableInput, {
    label: "HEX",
    value: u$hex,
    onChange: g
  })), c === P.HSVA && s.a.createElement("div", {
    className: "coco-platte-flex-box"
  }, s.a.createElement("div", {
    className: "coco-platte-field"
  }, s.a.createElement(G.EditableInput, {
    label: "H",
    value: Math.round(u$hsv.h),
    onChange: g
  })), s.a.createElement("div", {
    className: "coco-platte-field"
  }, s.a.createElement(G.EditableInput, {
    label: "S",
    value: Math.round(100 * u$hsv.s),
    onChange: g
  })), s.a.createElement("div", {
    className: "coco-platte-field"
  }, s.a.createElement(G.EditableInput, {
    label: "V",
    value: Math.round(100 * u$hsv.v),
    onChange: g
  })), s.a.createElement("div", {
    className: "coco-platte-field"
  }, s.a.createElement(G.EditableInput, {
    label: "A",
    value: u$hsl.a,
    onChange: g
  }))), c === P.RGBA && s.a.createElement("div", {
    className: "coco-platte-flex-box"
  }, s.a.createElement("div", {
    className: "coco-platte-field"
  }, s.a.createElement(G.EditableInput, {
    label: "R",
    value: u$rgb.r,
    onChange: g
  })), s.a.createElement("div", {
    className: "coco-platte-field"
  }, s.a.createElement(G.EditableInput, {
    label: "G",
    value: u$rgb.g,
    onChange: g
  })), s.a.createElement("div", {
    className: "coco-platte-field"
  }, s.a.createElement(G.EditableInput, {
    label: "B",
    value: u$rgb.b,
    onChange: g
  })), s.a.createElement("div", {
    className: "coco-platte-field"
  }, s.a.createElement(G.EditableInput, {
    label: "A",
    value: u$rgb.a,
    onChange: g
  })))), s.a.createElement("div", {
    className: "coco-platte-toggle-color-type"
  }, s.a.createElement("div", {
    className: "coco-platte-arrow-box",
    onClick: function () {
      var e = V.indexOf(c) - 1
      l(V[e = e < 0 ? 2 : e])
    }
  }, s.a.createElement(E.a, {
    className: "coco-palette-arrow-up",
    type: "icon-fold"
  })), s.a.createElement("div", {
    className: "coco-platte-arrow-box",
    onClick: function () {
      var e = V.indexOf(c) + 1
      e = e >= V.length ? 0 : e
      l(V[e])
    }
  }, s.a.createElement(E.a, {
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
var K = React.memo(function (e) {
  var e$color = e.color
  var e$handleColorChange = e.handleColorChange
  var r = function (e) {
    var e$hex = e.hex
    if (!M.i(e$hex)) {
      e$hex = undefined !== e.rgb.a ? "".concat(e.hex).concat(function (e) {
        var t = Math.round(255 * Lodash.clamp(e, 0, 1))
        var n = t.toString(16)
        return t <= 15 ? "0".concat(n) : n
      }(e.rgb.a)) : "".concat(e.hex, "FF")
    }
    e$handleColorChange(e$hex)
  }
  return s.a.createElement(s.a.Fragment, null, s.a.createElement(F.a, {
    onChange: r,
    color: e$color,
    presetColors: [],
    disableAlpha: false,
    styles: Y
  }), s.a.createElement(z, {
    color: e$color,
    onChange: r
  }))
})
var q = []
var X = React.memo(React.forwardRef(function (e, t) {
  var e$value = e.value
  var e$onChange = e.onChange
  var e$onClose = e.onClose
  var e$defaultValue = e.defaultValue
  var d = undefined === e$defaultValue ? "#000000ff" : e$defaultValue
  var e$style = e.style
  var f = undefined === e$style ? {} : e$style
  var h = React.useRef(null)
  var m = React.useRef(null)
  var g = React.useRef(false)
  var _ = A.d()
  var j$a$formatMessage = j.a().formatMessage
  var b = React.useState(e$value || d)
  var y = r.a(b, 2)
  var O = y[0]
  var w = y[1]
  var C = React.useRef(O)
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
  React.useImperativeHandle(t, function () {
    return {
      setRGBA: w
    }
  })
  React.useEffect(function () {
    var e = function (e) {
      var e$target = e.target
      var h$current = h.current
      var m$current = m.current
      if ((!h$current || !h$current.contains(e$target)) && (!m$current || !m$current.contains(e$target))) {
        if (e$onClose) {
          e$onClose(O)
        }
        _(x.hh())
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
  React.useEffect(function () {
    C.current = O
  }, [O])
  React.useEffect(function () {
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
  var L = React.useCallback(function () {
    if (e$onChange) {
      e$onChange(C.current, g.current)
    }
  }, [e$onChange])
  var P = React.useCallback(function (e) {
    if (false === e && e$onChange) {
      e$onChange(C.current, g.current)
    }
  }, [e$onChange])
  var F = function () {
    var e = I.a(S.a.mark(function e() {
      var t
      var /* [auto-meaningful-name] */e$sent
      var r
      return S.a.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (window.EyeDropper) {
                e.next = 3
                break
              }
              _(x.mj({
                message: j$a$formatMessage({
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
                r = k()(e$sent.sRGBHex).hex()
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
  return s.a.createElement("div", {
    className: i()("coco-palette"),
    style: f,
    ref: h
  }, s.a.createElement("div", {
    className: "coco-palette-body"
  }, D.b.map(function (e, t) {
    return s.a.createElement(B, {
      onClick: R,
      key: t,
      color: e,
      selected: O === e,
      className: M.V(e) ? "coco-palette-light-color-selected" : "coco-palette-dark-color-selected"
    })
  })), s.a.createElement("div", {
    className: "coco-palette-history-color"
  }, s.a.createElement("span", {
    className: "coco-palette-history-title"
  }, j$a$formatMessage({
    id: "colorPicker.history"
  })), s.a.createElement("div", {
    className: "coco-palette-history-color-list"
  }, q.map(function (e, t) {
    return s.a.createElement(B, {
      onClick: R,
      key: t,
      color: e
    })
  }))), s.a.createElement(N.a, {
    placement: "rightBottom",
    overlayClassName: "coco-palette-picker",
    onVisibleChange: P,
    trigger: "click",
    content: s.a.createElement("div", {
      className: "coco-palette-picker-popover",
      ref: m,
      onBlur: L
    }, s.a.createElement("div", {
      className: "coco-palette-icon-picker-box",
      onClick: F
    }, s.a.createElement(E.a, {
      type: "icon-picker-color"
    })), s.a.createElement(K, {
      color: O,
      handleColorChange: T
    }))
  }, s.a.createElement("div", {
    className: "coco-palette-more-color-box"
  }, s.a.createElement("div", {
    className: "coco-palette-more-color"
  }, s.a.createElement("div", {
    className: "coco-palette-more-title-box"
  }, s.a.createElement("img", {
    alt: "",
    className: "coco-palette-more-image",
    src: require("./854")
  }), s.a.createElement("span", {
    className: "coco-palette-more-title"
  }, j$a$formatMessage({
    id: "colorPicker.more"
  }))), s.a.createElement(E.a, {
    className: "coco-palette-more-arrow",
    type: "icon-fold"
  })))))
}))
require("./855")
var Q = React.memo(React.forwardRef(function (e, t) {
  var e$children = e.children
  var e$defaultVisible = e.defaultVisible
  var e$className = e.className
  var e$style = e.style
  var e$content = e.content
  var e$onOpen = e.onOpen
  var e$onClose = e.onClose
  var e$onHide = e.onHide
  var e$contentClassName = e.contentClassName
  var e$autoClose = e.autoClose
  var g = undefined === e$autoClose || e$autoClose
  var e$disabled = e.disabled
  var v = undefined !== e$disabled && e$disabled
  var b = React.useState(!!e$defaultVisible)
  var y = r.a(b, 2)
  var E = y[0]
  var O = y[1]
  var w = React.useRef(null)
  React.useEffect(function () {
    if (E && e$onOpen) {
      e$onOpen()
    }
  }, [E])
  React.useLayoutEffect(function () {
    var e = function e(t) {
      var t$target = t.target
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
  React.useImperativeHandle(t, function () {
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
  return s.a.createElement("div", {
    style: e$style,
    className: i()("coco-popover", e$className),
    ref: w
  }, s.a.createElement("div", {
    className: "coco-popover-children",
    onClick: function () {
      O(true)
    }
  }, e$children), s.a.createElement("div", {
    className: i()("coco-popover-content", e$contentClassName, [E ? "show" : "hide"])
  }, e$content), v && s.a.createElement("div", {
    className: "coco-popover-disabled-mask"
  }))
}))
import Z = require("../537/index");
require("./857")
var J = React.memo(s.a.forwardRef(function (e, t) {
  var e$type = e.type
  var e$icon = e.icon
  var e$onClick = e.onClick
  var e$disabled = e.disabled
  var e$style = e.style
  var u = undefined === e$style ? {} : e$style
  var e$className = e.className
  var e$danger = e.danger
  var e$children = e.children
  var e$shape = e.shape
  var m = undefined === e$shape ? "circle" : e$shape
  var g = React.useRef(null)
  React.useImperativeHandle(t, function () {
    return {
      button: g.current
    }
  })
  return s.a.createElement("button", {
    ref: g,
    className: i()("coco-button", function () {
      var e = "coco-button-"
      return (e$type ? e + e$type : "") + " " + (e$danger ? e + "dangerous" : "") + " " + (m ? e + m : "")
    }(), e$className),
    disabled: e$disabled,
    style: u,
    onClick: e$onClick
  }, e$icon && s.a.createElement(E.a, {
    type: e$icon
  }), e$children)
}))
require("./858")
var $ = React.createContext(null)
var $$Provider = $.Provider
var te = $
React.memo(function (e) {
  var e$children = e.children
  var e$onSelect = e.onSelect
  var e$value = e.value
  var e$defaultValue = e.defaultValue
  var e$className = e.className
  var e$style = e.style
  var d = undefined === e$style ? {} : e$style
  var e$open = e.open
  var e$onBlur = e.onBlur
  var h = React.useState(e$value || e$defaultValue)
  var m = r.a(h, 2)
  var g = m[0]
  var _ = m[1]
  var v = React.useState(false)
  var b = r.a(v, 2)
  var y = b[0]
  var O = b[1]
  React.useEffect(function () {
    _(e$value)
  }, [e$value])
  React.useEffect(function () {
    if (undefined !== e$open) {
      O(e$open)
    }
  }, [e$open])
  React.useEffect(function () {
    var /* [auto-meaningful-name] */s$current
    if (!(null === (s$current = S.current) || undefined === s$current)) {
      s$current.setAttribute("tabindex", "-1")
    }
  }, [])
  var w = React.useCallback(function (e) {
    if (undefined === e$open) {
      O(e)
    }
  }, [e$open])
  var C = React.useCallback(function (e) {
    _(e)
    w(false)
    if (e$onSelect) {
      e$onSelect(e)
    }
  }, [e$onSelect, w])
  var T = React.useCallback(function () {
    w(!y)
  }, [y, w])
  var S = React.useRef(null)
  var I = React.useCallback(function () {
    w(false)
    if (e$onBlur) {
      e$onBlur()
    }
  }, [e$onBlur, w])
  return s.a.createElement($$Provider, {
    value: {
      onSelect: C,
      selectedValue: g
    }
  }, s.a.createElement("div", {
    style: d,
    className: i()(e$className, "coco-tree-select"),
    onBlur: I,
    ref: S
  }, s.a.createElement("div", {
    className: "coco-tree-selector",
    onClick: T
  }, g, s.a.createElement("i", {
    className: i()("coco-tree-select-arrow", {
      active: y
    })
  }, s.a.createElement(E.a, {
    type: "icon-up"
  }))), s.a.createElement("div", {
    className: i()("coco-tree-select-list", {
      hide: !y
    })
  }, e$children)))
})
var ne = React.memo(function (e) {
  var e$title = e.title
  var e$children = e.children
  var e$disabled = e.disabled
  var c = React.useState(false)
  var l = r.a(c, 2)
  var u = l[0]
  var d = l[1]
  var p = React.useCallback(function () {
    if (!e$disabled) {
      d(true)
    }
  }, [d, e$disabled])
  var f = React.useCallback(function () {
    if (!e$disabled) {
      d(false)
    }
  }, [d, e$disabled])
  return s.a.createElement("div", {
    className: i()("coco-tree-node"),
    onMouseEnter: p,
    onMouseLeave: f
  }, s.a.createElement("div", {
    className: i()("coco-tree-group-header", {
      disabled: e$disabled
    })
  }, s.a.createElement("span", null, e$title), s.a.createElement("i", {
    className: "coco-tree-node-arrows"
  }, s.a.createElement(E.a, {
    type: "icon-right"
  }))), s.a.createElement("div", {
    className: i()("coco-tree-group-main", {
      hide: !u
    })
  }, e$children))
})
var re = React.memo(function (e) {
  var e$value = e.value
  var e$title = e.title
  var e$content = e.content
  var e$disabled = e.disabled
  var c = React.useContext(te)
  var l = React.useCallback(function () {
    if (null === c || undefined === c ? undefined : c.onSelect) {
      c.onSelect(e$value)
    }
  }, [e$value, c])
  return s.a.createElement("div", {
    className: i()("coco-tree-node-item", {
      selected: (null === c || undefined === c ? undefined : c.selectedValue) === e$value,
      disabled: e$disabled
    }),
    onClick: l,
    key: e$value
  }, e$content || s.a.createElement("span", null, e$title))
})
React.memo(function (e) {
  var e$children = e.children
  var e$className = e.className
  return s.a.createElement("div", {
    className: i()(e$className, "coco-tree-node")
  }, e$children ? s.a.createElement(ne, e) : s.a.createElement(re, e))
})
require("./859")
var oe = React.memo(function (e) {
  var e$type = e.type
  var n = undefined === e$type ? "info" : e$type
  var e$message = e.message
  var e$showPrefixIcon = e.showPrefixIcon
  var l = undefined === e$showPrefixIcon || e$showPrefixIcon
  var e$showCloseIcon = e.showCloseIcon
  var d = undefined !== e$showCloseIcon && e$showCloseIcon
  var e$visible = e.visible
  var e$onClose = e.onClose
  var e$icon = e.icon
  var e$className = e.className
  var g = React.useState(true)
  var _ = r.a(g, 2)
  var v = _[0]
  var b = _[1]
  React.useLayoutEffect(function () {
    if (undefined !== e$visible) {
      b(e$visible)
    }
  }, [e$visible])
  var y = React.useCallback(function (e) {
    if (undefined === e$visible) {
      b(e)
    }
  }, [e$visible])
  var O = React.useMemo(function () {
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
      icon: s.a.createElement(E.a, {
        type: e
      }),
      className: t
    }
  }, [n])
  var w = React.useCallback(function () {
    y(false)
    if (e$onClose) {
      e$onClose()
    }
  }, [e$onClose, y])
  return s.a.createElement("div", {
    className: i()("coco-alert", O.className, e$className, {
      hide: !v
    })
  }, s.a.createElement("div", {
    className: "coco-alert-content"
  }, s.a.createElement("div", {
    className: "coco-alert-icon"
  }, l && (e$icon || O.icon)), s.a.createElement("span", null, e$message)), d && s.a.createElement("div", {
    className: "coco-alert-close",
    onClick: w
  }, s.a.createElement(E.a, {
    type: "icon-close"
  })))
})
import ie = require("../11");
require("./647")
var ae = React.memo(function (e) {
  var t
  var e$children = e.children
  var e$justify = e.justify
  var e$align = e.align
  var e$className = e.className
  var e$label = e.label
  return s.a.createElement("div", {
    "data-row-label": e$label,
    className: i()("coco-row", e$className, (t = {}, ie.a(t, "coco-row-".concat(e$align), e$align), ie.a(t, "coco-row-".concat(e$justify), e$justify), t))
  }, e$children)
})
var se = React.memo(function (e) {
  var e$children = e.children
  var e$span = e.span
  if ("string" === typeof e$span) {
    var r = parseInt(e$span)
    e$span = isNaN(r) ? undefined : 48 * r / 100
  }
  return s.a.createElement("div", {
    className: i()("coco-col", ie.a({}, "coco-col-".concat(e$span), undefined !== e$span))
  }, e$children)
})
import ce = require("../27");
import le = require("../40");
import ue = require("../57/index");
import de = require("../58/index");
var pe = React.createContext({
  draggedItemIndex: -1
})
var pe$Consumer = pe.Consumer
var pe$Provider = pe.Provider
require("./860")
function me(e) {
  return e.target.closest("[data-coco-draggable-index]")
}
function ge(e, t, n) {
  var n$offsetTop = n.offsetTop
  var o = n.getBoundingClientRect()
  var o$height = o.height
  var o$top = o.top
  var s = e.y < o$top + o$height / 2 ? 0 : 1
  t.style.top = n$offsetTop + s * o$height + "px"
  return s
}
var _e = function (e) {
  ue.a(n, e)
  var t = de.a(n)
  function n(e) {
    var r
    ce.a(this, n);
    (r = t.call(this, e)).separationLineRef = React.createRef()
    r.dragContentRef = React.createRef()
    r.dragWrapperRef = React.createRef()
    r._dragResult = undefined
    r._mousedownTimeId = undefined
    r._mousemoveTimeId = undefined
    r.handleMouseDown = function (e) {
      if (0 === e.button) {
        var r$props = r.props
        var r$props$onDragStart = r$props.onDragStart
        var r$props$children = r$props.children
        if (r$props$children && s.a.Children.count(r$props$children) > 1) {
          var a = me(e)
          var r$separationLineRef$current = r.separationLineRef.current
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
      var r$props$onDragEnd = r.props.onDragEnd
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
        var r$separationLineRef$current = r.separationLineRef.current
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
      var e = s.a.Children.count(r.props.children)
      var r$dragWrapperRef$current = r.dragWrapperRef.current
      var r$separationLineRef$current = r.separationLineRef.current
      var r$dragContentRef$current = r.dragContentRef.current
      if (r$dragWrapperRef$current && r$separationLineRef$current && r$dragContentRef$current) {
        var i = r$dragContentRef$current.getBoundingClientRect().height / e
        var r$dragWrapperRef$current$getBoundingClientRect$height = r$dragWrapperRef$current.getBoundingClientRect().height
        var r$separationLineRef$current$offsetTop = r$separationLineRef$current.offsetTop
        var r$dragWrapperRef$current$scrollTop = r$dragWrapperRef$current.scrollTop
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
    r.separationLineRef = s.a.createRef()
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
  le.a(n, [{
    key: "render",
    value: function () {
      var this$state = this.state
      var this$state$isDragging = this$state.isDragging
      var this$state$draggedItemIndex = this$state.draggedItemIndex
      var this$props = this.props
      var this$props$children = this$props.children
      var this$props$className = this$props.className
      return s.a.createElement(pe$Provider, {
        value: {
          draggedItemIndex: this$state$draggedItemIndex
        }
      }, s.a.createElement("div", {
        className: i()("coco-drag-context", this$props$className),
        ref: this.dragWrapperRef
      }, s.a.createElement("div", {
        onMouseDown: this.handleMouseDown,
        ref: this.dragContentRef
      }, this$props$children, s.a.createElement("div", {
        className: "coco-drag-context-line",
        ref: this.separationLineRef,
        style: {
          display: this$state$isDragging ? "block" : "none"
        }
      }))))
    }
  }])
  return n
}(s.a.PureComponent)
_e.DELAY = 200
React.memo(_e)
React.memo(function (e) {
  var e$index = e.index
  var e$children = e.children
  return s.a.createElement(pe$Consumer, null, function (e) {
    var e$draggedItemIndex = e.draggedItemIndex
    return s.a.createElement("div", {
      className: i()("coco-draggable", {
        dragged: e$draggedItemIndex === e$index
      }),
      "data-coco-draggable-index": e$index
    }, e$children)
  })
})
require("./861")
var ve
var be = React.memo(function (e) {
  var e$children = e.children
  var e$showDropdownIcon = e.showDropdownIcon
  var o = undefined === e$showDropdownIcon || e$showDropdownIcon
  var e$overlay = e.overlay
  var e$className = e.className
  var e$onClick = e.onClick
  var d = React.useState(false)
  var p = r.a(d, 2)
  var f = p[0]
  var h = p[1]
  var m = React.useRef(null)
  function g(e) {
    var /* [auto-meaningful-name] */_m$current2
    var /* [auto-meaningful-name] */m$current
    if (e) {
      if (!(null === (_m$current2 = m.current) || undefined === _m$current2)) {
        _m$current2.showContent()
      }
    } else {
      if (!(null === (m$current = m.current) || undefined === m$current)) {
        m$current.hideContent()
      }
    }
  }
  return s.a.createElement("div", {
    className: i()("coco-dropdown", e$className),
    onClick: function () {
      var /* [auto-meaningful-name] */m$current
      if (e$onClick) {
        e$onClick(!!(null === (m$current = m.current) || undefined === m$current ? undefined : m$current.visible), g)
      }
    }
  }, s.a.createElement(Q, {
    ref: m,
    contentClassName: "coco-dropdown-overlay",
    content: s.a.createElement("div", {
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
  }, s.a.createElement("div", {
    className: i()("coco-dropdown-selector", {
      "coco-dropdown-active": f
    }),
    onClick: function () {
      var /* [auto-meaningful-name] */_m$current7
      var /* [auto-meaningful-name] */m$current
      if (null === (_m$current7 = m.current) || undefined === _m$current7 ? undefined : _m$current7.visible) {
        if (!(null === (m$current = m.current) || undefined === m$current)) {
          m$current.hideContent()
        }
      }
    }
  }, e$children, o && s.a.createElement(E.a, {
    type: "icon-dropdown-down",
    className: i()("coco-dropdown-down-icon")
  }))))
})
var ye = React.createContext(null)
var ye$Provider = ye.Provider
var Oe = ye
require("./862")
var we = React.memo(function (e) {
  var e$children = e.children
  var e$onClick = e.onClick
  return s.a.createElement(ye$Provider, {
    value: {
      onClick: function (e) {
        if (e$onClick) {
          e$onClick(e)
        }
      }
    }
  }, s.a.createElement("div", {
    className: "coco-menu"
  }, e$children))
})
var Ce = React.memo(function (e) {
  var e$children = e.children
  var e$value = e.value
  var r = React.useContext(Oe)
  return s.a.createElement("div", {
    className: "coco-menu-item",
    onClick: function () {
      if (undefined !== e$value && r) {
        r.onClick(e$value)
      }
    }
  }, e$children)
})
import Te = require("./317");
var Se = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}(Te)
var Ie = React.memo(function (e) {
  var t
  var e$value = e.value
  var e$children = e.children
  var e$subMenu = e.subMenu
  var e$onClick = e.onClick
  var u = React.useRef(null)
  var d = React.useState("right")
  var p = r.a(d, 2)
  var f = p[0]
  var h = p[1]
  var m = React.useState(false)
  var g = r.a(m, 2)
  var _ = g[0]
  var v = g[1]
  var b = React.useMemo(function () {
    return M.p(v, 100)
  }, [])
  return s.a.createElement("div", {
    ref: u,
    className: Se.a.subMenuItemWrapper,
    onMouseEnter: function () {
      if (e$subMenu) {
        b(function () {
          return true
        })
        var u$current = u.current
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
  }, s.a.createElement(Ce, {
    value: e$value
  }, s.a.createElement("div", null, e$children, e$subMenu && s.a.createElement("span", {
    className: Se.a.subMenuArrow
  }, s.a.createElement(E.a, {
    type: "icon-arrow-down"
  })))), e$subMenu && s.a.createElement("div", {
    className: i()(Se.a.subMenuOverlay, (t = {}, ie.a(t, Se.a.visible, _), ie.a(t, Se.a.placementLeft, "left" === f), ie.a(t, Se.a.placementRight, "right" === f), t))
  }, e$subMenu))
})
import Ae = require("../739/index");
require("./863")
var je = React.memo(function (e) {
  var e$children = e.children
  var e$onChange = e.onChange
  var e$onCancel = e.onCancel
  var e$multiple = e.multiple
  var l = undefined !== e$multiple && e$multiple
  var e$accept = e.accept
  var d = undefined === e$accept ? "" : e$accept
  var e$className = e.className
  var e$tooltip = e.tooltip
  var h = undefined === e$tooltip ? "" : e$tooltip
  var e$style = e.style
  var g = undefined === e$style ? {} : e$style
  var _ = React.useRef(null)
  var v = React.useState(false)
  var b = r.a(v, 2)
  var y = b[0]
  var E = b[1]
  React.useEffect(function () {
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
  return s.a.createElement("div", {
    onClick: function () {
      var _$current = _.current
      if (_$current) {
        E(true)
        _$current.click()
      }
    },
    className: i()("coco-upload-button", e$className),
    style: g
  }, s.a.createElement(Ae.a, {
    placement: "right",
    title: h
  }, s.a.createElement("input", {
    type: "file",
    style: {
      display: "none"
    },
    onChange: function (e) {
      var e$target = e.target
      if (e$target && e$onChange) {
        e$onChange(e$target.files)
        e$target.value = ""
      }
    },
    ref: _,
    multiple: l,
    accept: d
  }), s.a.createElement("div", {
    className: "coco-upload-button-content"
  }, e$children)))
})
var Ne = React.memo(function (e) {
  var e$children = e.children
  var e$className = e.className
  return s.a.createElement("div", {
    className: i()(e$className, "coco-form")
  }, e$children)
})
require("./864")
var Re = React.memo(function (e) {
  var e$children = e.children
  var e$className = e.className
  var e$label = e.label
  var e$labelWidth = e.labelWidth
  var e$align = e.align
  var c = undefined === e$align ? "horizontal" : e$align
  return s.a.createElement("div", {
    className: i()(e$className, "coco-form-item", ["horizontal" === c ? "coco-form-item-horizontal" : "coco-form-item-vertical"])
  }, e$label && s.a.createElement("p", {
    className: "coco-form-item-label",
    style: {
      width: e$labelWidth
    }
  }, e$label), s.a.createElement("div", {
    className: i()("coco-form-item-content")
  }, e$children))
})
require("./865")
var ke = React.memo(s.a.forwardRef(function (e, t) {
  var e$defaultValue = e.defaultValue
  var e$value = e.value
  var e$className = e.className
  var e$placeholder = e.placeholder
  var u = undefined === e$placeholder ? "" : e$placeholder
  var e$rows = e.rows
  var p = undefined === e$rows ? 1 : e$rows
  var e$cols = e.cols
  var e$maxLength = e.maxLength
  var e$minLength = e.minLength
  var e$autoComplete = e.autoComplete
  var _ = undefined === e$autoComplete ? "on" : e$autoComplete
  var e$onChange = e.onChange
  var e$onFocus = e.onFocus
  var e$onBlur = e.onBlur
  var e$dependency = e.dependency
  var e$disabled = e.disabled
  var w = React.useRef(null)
  var C = React.useRef(null)
  var T = React.useRef(null)
  var S = React.useState(false)
  var I = r.a(S, 2)
  var A = I[0]
  var j = I[1]
  var N = React.useCallback(function (e) {
    var c$current = C.current
    if (c$current) {
      c$current.innerHTML = e + "/" + e$maxLength
    }
  }, [e$maxLength])
  React.useEffect(function () {
    var w$current = w.current
    if (w$current && undefined === e$value) {
      w$current.value = undefined === e$defaultValue ? "" : e$defaultValue.toString()
      N(w$current.value.length)
    }
  }, [w, N, e$dependency, e$value, e$defaultValue])
  React.useEffect(function () {
    var w$current = w.current
    if (undefined !== e$value && w$current) {
      w$current.value = e$value
      N(e$value.toString().length)
    }
  }, [w, N, e$value])
  var R = function () {
    var w$current = w.current
    var t$current = T.current
    if (w$current && t$current) {
      t$current.style.display = "block"
      var n = w$current.value.replace(/'\n'/g, "<br>")
      var r = getComputedStyle(w$current)
      t$current.innerHTML = M.t(n)
      t$current.style.width = r.width
      t$current.style.lineHeight = r.lineHeight
      t$current.style.minHeight = r.lineHeight
      var t$current$clientHeight = t$current.clientHeight
      t$current.style.display = "none"
      var i = t$current$clientHeight / parseInt(r.lineHeight)
      var w$current$value$splitN$length = w$current.value.split("\n").length
      return Math.max(i, w$current$value$splitN$length)
    }
    return 1
  }
  React.useImperativeHandle(t, function () {
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
  return s.a.createElement("div", {
    className: i()("coco-textarea", e$className)
  }, s.a.createElement("textarea", Object.assign({
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
  }, k)), s.a.createElement("div", {
    className: "coco-textarea-textCounter",
    ref: C,
    style: {
      display: A && e$maxLength ? "block" : "none"
    }
  }), s.a.createElement("div", {
    className: "coco-textarea-rowCounter",
    ref: T
  }))
}))
require("../538/index")
import xe = require("./303/index");
var De = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}(xe)
require("./867")
var Me = "@__EMPTY_ADVANCE_TEXT_TIP_ID__@"
var Le = function () {
  var e
  if (!(null === (e = document.getElementById(Me)) || undefined === e)) {
    e.remove()
  }
}
var Pe = function (e) {
  var e$text = e.text
  var e$duration = e.duration
  var r = undefined === e$duration ? 500 : e$duration
  var e$className = e.className
  var c = React.useRef(null)
  React.useEffect(function () {
    return function () {
      Le()
    }
  })
  return s.a.createElement("div", {
    ref: c,
    onMouseMove: function (e) {
      var e$clientX = e.clientX
      var e$clientY = e.clientY
      function i(e) {
        var c$current = c.current
        var e$target = e.target
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
          Me = "coco-advanced-text-tip—" + De()()
          var r = document.createElement("div")
          r.innerHTML = e
          r.className = "coco-advanced-text-tip"
          r.id = Me
          r.style.top = n + 10 + "px"
          r.style.left = t + 10 + "px"
          document.body.appendChild(r)
        }(e$text, e$clientX, e$clientY)
        document.addEventListener("mousemove", i)
      }, r)
    },
    className: i()("icon-advanced-text", e$className)
  }, e$text)
}
require("./868")
var Be = M.p(function (e) {
  if (e) {
    e()
  }
}, 30, true)
var Fe = function (e) {
  var e$children = e.children
  var e$onScrollBottom = e.onScrollBottom
  var e$height = e.height
  var e$classnames = e.classnames
  var e$offsetY = e.offsetY
  var c = undefined === e$offsetY ? 10 : e$offsetY
  return s.a.createElement("div", {
    style: {
      height: e$height
    },
    className: i()("coco-scroll-paginate", e$classnames),
    onScroll: function (e) {
      var e$currentTarget = e.currentTarget
      if (e$currentTarget.scrollTop + e$height > e$currentTarget.scrollHeight - c && e$onScrollBottom) {
        Be(e$onScrollBottom)
      }
    }
  }, e$children)
}
import Ge = require("./782");
var Ue = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}(Ge)
require("./869")
var We = React.memo(React.forwardRef(function (e, t) {
  var e$sourceImage = e.sourceImage
  var e$defaultScale = e.defaultScale
  var l = undefined === e$defaultScale ? 1 : e$defaultScale
  var e$width = e.width
  var e$height = e.height
  var e$border = e.border
  var f = undefined === e$border ? 0 : e$border
  var e$rotate = e.rotate
  var m = undefined === e$rotate ? 0 : e$rotate
  var e$step = e.step
  var _ = undefined === e$step ? .01 : e$step
  var e$minScale = e.minScale
  var b = undefined === e$minScale ? 1 : e$minScale
  var e$maxScale = e.maxScale
  var E = undefined === e$maxScale ? 2 : e$maxScale
  var O = React.useRef(null)
  var w = React.useState(l)
  var C = r.a(w, 2)
  var T = C[0]
  var S = C[1]
  var I = function (e) {
    var t = T + ("in" === e ? 1 / 8 : -1 / 8)
    if (t < 1) {
      t = 1
    }
    if (t > 2) {
      t = 2
    }
    S(t)
  }
  React.useImperativeHandle(t, function () {
    return {
      target: O.current,
      setScale: function (e) {
        S(e)
      }
    }
  })
  return s.a.createElement("div", {
    className: "coco-avatar-editor"
  }, s.a.createElement(Ue.a, {
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
  }), s.a.createElement("div", {
    className: "coco-avatar-editor-scaleBar"
  }, s.a.createElement("span", {
    className: i()("coco-avatar-editor-zoomButton", "coco-avatar-editor-zoomOut"),
    onClick: function () {
      I("out")
    }
  }, s.a.createElement("img", {
    src: require("./870"),
    alt: "",
    className: "coco-avatar-editor-zoomOutIcon"
  })), s.a.createElement("input", {
    type: "range",
    step: _,
    min: b,
    max: E,
    value: T,
    onChange: function (e) {
      S(parseFloat(e.target.value))
    }
  }), s.a.createElement("span", {
    className: i()("coco-avatar-editor-zoomButton", "coco-avatar-editor-zoomIn"),
    onClick: function () {
      I("in")
    }
  }, s.a.createElement("img", {
    src: require("./871"),
    alt: "",
    className: "coco-avatar-editor-zoomInIcon"
  }))))
}))
import He = require("../321");
export default Pe
