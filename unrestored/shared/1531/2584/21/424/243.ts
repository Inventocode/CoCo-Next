/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：243
 */

"use strict"

export { O as b }
export { w as a }
var r = {}
Object.defineProperty(r, "borderColorEnhance", {
  get: function () {
    return p
  }
})
Object.defineProperty(r, "backgroundColorEnhance", {
  get: function () {
    return f
  }
})
Object.defineProperty(r, "defaultContainedError", {
  get: function () {
    return h
  }
})
Object.defineProperty(r, "defaultOutlineError", {
  get: function () {
    return m
  }
})
var o = {}
Object.defineProperty(o, "buttonPress", {
  get: function () {
    return v
  }
})
var i = {}
Object.defineProperty(i, "checkNormal", {
  get: function () {
    return b
  }
})
import /* [auto-meaningful-name] */$$_$$_25_index = require("../../25/index")
import /* [auto-meaningful-name] */$$_$$_11 = require("../../11")
import /* [auto-meaningful-name] */$$_$$_5 = require("../../5")
import /* [auto-meaningful-name] */Animejs = require("animejs")
import /* [auto-meaningful-name] */Color = require("color")
var d = function __importDefault(module) {
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
function p(e, t) {
  return [Animejs.default({
    targets: "#".concat(e),
    borderColor: d()(t).darken(.3).hex(),
    duration: 2e3
  })]
}
function f(e, t) {
  return [Animejs.default({
    targets: "#".concat(e),
    backgroundColor: d()(t).darken(.3).alpha(.1).rgb().string(),
    duration: 2e3
  })]
}
function h(e) {
  return [Animejs.default({
    targets: "#".concat(e, " input"),
    translateX: [-4, 4, -2, 2, -1, 1, 0],
    duration: 300,
    easing: "linear"
  })]
}
function m(e) {
  return [Animejs.default({
    targets: "#".concat(e, " input"),
    translateX: [-4, 4, -2, 2, -1, 1, 0],
    duration: 300,
    easing: "linear"
  })]
}
var g
import /* [auto-meaningful-name] */$$_$$_729_302 = require("../../729/302")
function v(e, t) {
  var n = document.querySelectorAll("#".concat(e, " .radio-widget-button"))[t]
  return n ? [Animejs.default({
    targets: n,
    scale: [{
      value: .95,
      duration: 100
    }, {
      value: 1,
      duration: 200
    }]
  })] : []
}
function b(e, t) {
  var n = document.querySelectorAll("#".concat(e, " .checkbox-widget-box "))[t]
  return n ? [Animejs.default({
    targets: n.querySelector("svg"),
    scale: [.8, 1.2],
    duration: 500
  })] : []
}
g = {}
$$_$$_11.a(g, $$_$$_5.w, r)
$$_$$_11.a(g, $$_$$_5.d, $$_$$_729_302)
$$_$$_11.a(g, $$_$$_5.C, o)
$$_$$_11.a(g, $$_$$_5.g, i)
var y = g
var E = new Map()
function O(e, t, n) {
  w(e)
  var r = y[t]
  if (n && r && n in r) {
    for (var /* [auto-meaningful-name] */arguments$length = arguments.length, i = new Array(arguments$length > 3 ? arguments$length - 3 : 0), s = 3; s < arguments$length; s++) {
      i[s - 3] = arguments[s]
    }
    var c = r[n].apply(r, [e].concat(i))
    E.set(e, [].concat($$_$$_25_index.a(E.get(e) || []), $$_$$_25_index.a(c)))
  }
}
function w(e) {
  var t = E.get(e)
  if (t) {
    t.reverse().forEach(function (e) {
      return e.reset()
    })
  }
  E.set(e, [])
}
export default w
