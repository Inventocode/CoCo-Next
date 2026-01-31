/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-25
 */

"use strict"

import * as Ln from "./35"
import * as /* [auto-meaningful-name] */$_40_index from "./40/index"
import { createContext } from "react"
import * as /* [auto-meaningful-name] */$_103 from "./103"
import * as /* [auto-meaningful-name] */$_106 from "./106"
import * as /* [auto-meaningful-name] */$_388 from "./388"
import * as /* [auto-meaningful-name] */$_362 from "./362"
import * as /* [auto-meaningful-name] */$_120 from "./120"
import * as /* [auto-meaningful-name] */$_142 from "./142"
import * as /* [auto-meaningful-name] */$_702 from "./702"
import /* [auto-meaningful-name] */$_7021 from "./702"
import * as /* [auto-meaningful-name] */$_79_index from "./79/index"
import * as /* [auto-meaningful-name] */$_50_index from "./50/index"
import /* [auto-meaningful-name] */$_50_index1 from "./50/index"
var Xn = function () {
  function e() {
    $_103.a(this, e)
    Ln.a(this, "refs", {})
  }
  $_106.a(e, [
    {
      key: "add",
      value: function (e, t) {
        if (!this.refs[e]) {
          this.refs[e] = []
        }
        this.refs[e].push(t)
      }
    }, {
      key: "remove",
      value: function (e, t) {
        var n = this.getIndex(e, t)
        if (-1 !== n) {
          this.refs[e].splice(n, 1)
        }
      }
    }, {
      key: "isActive",
      value: function () {
        return this.active
      }
    }, {
      key: "getActive",
      value: function () {
        var e = this
        return this.refs[this.active.collection].find(function (t) {
          return t.node.sortableInfo.index == e.active.index
        })
      }
    }, {
      key: "getIndex",
      value: function (e, t) {
        return this.refs[e].indexOf(t)
      }
    }, {
      key: "getOrderedRefs",
      value: function () {
        var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : this.active.collection
        return this.refs[e].sort(Qn)
      }
    }
  ])
  return e
}()
function Qn(e, t) {
  return e.node.sortableInfo.index - t.node.sortableInfo.index
}
function Zn(e, t) {
  return Object.keys(e).reduce(function (n, r) {
    if (-1 === t.indexOf(r)) {
      n[r] = e[r]
    }
    return n
  }, {})
}
var Jn = {
  end: ["touchend", "touchcancel", "mouseup"],
  move: ["touchmove", "mousemove"],
  start: ["touchstart", "mousedown"]
}
var $n = function () {
  if ("undefined" === typeof window || "undefined" === typeof document) {
    return ""
  }
  var e = window.getComputedStyle(document.documentElement, "") || ["-moz-hidden-iframe"]
  var t = (Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/) || "" === e.OLink && ["", "o"])[1]
  switch (t) {
    case "ms":
      return "ms"
    default:
      return t && t.length ? t[0].toUpperCase() + t.substr(1) : ""
  }
}()
function er(e, t) {
  Object.keys(t).forEach(function (n) {
    e.style[n] = t[n]
  })
}
function tr(e, t) {
  e.style["".concat($n, "Transform")] = null == t ? "" : "translate3d(".concat(t.x, "px,").concat(t.y, "px,0)")
}
function nr(e, t) {
  e.style["".concat($n, "TransitionDuration")] = null == t ? "" : "".concat(t, "ms")
}
function rr(e, t) {
  for (; e;) {
    if (t(e)) {
      return e
    }
    e = e.parentNode
  }
  return null
}
function or(e, t, n) {
  return Math.max(e, Math.min(n, t))
}
function ir(e) {
  return "px" === e.substr(-2) ? parseFloat(e) : 0
}
function ar(e) {
  var t = window.getComputedStyle(e)
  return {
    bottom: ir(t.marginBottom),
    left: ir(t.marginLeft),
    right: ir(t.marginRight),
    top: ir(t.marginTop)
  }
}
function sr(e, t) {
  var n = t.displayName || t.name
  return n ? "".concat(e, "(").concat(n, ")") : e
}
function cr(e, t) {
  var n = e.getBoundingClientRect()
  return {
    top: n.top + t.top,
    left: n.left + t.left
  }
}
function lr(e) {
  return e.touches && e.touches.length ? {
    x: e.touches[0].pageX,
    y: e.touches[0].pageY
  } : e.changedTouches && e.changedTouches.length ? {
    x: e.changedTouches[0].pageX,
    y: e.changedTouches[0].pageY
  } : {
    x: e.pageX,
    y: e.pageY
  }
}
function ur(e) {
  return e.touches && e.touches.length || e.changedTouches && e.changedTouches.length
}
function dr(e, t) {
  var n = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : {
    left: 0,
    top: 0
  }
  if (e) {
    var r = {
      left: n.left + e.offsetLeft,
      top: n.top + e.offsetTop
    }
    return e.parentNode === t ? r : dr(e.parentNode, t, r)
  }
}
function pr(e, t, n) {
  return e < n && e > t ? e - 1 : e > n && e < t ? e + 1 : e
}
function fr(e) {
  var /* [auto-meaningful-name] */e$lockOffset = e.lockOffset
  var /* [auto-meaningful-name] */e$width = e.width
  var /* [auto-meaningful-name] */e$height = e.height
  var o = e$lockOffset
  var i = e$lockOffset
  var a = "px"
  if ("string" === typeof e$lockOffset) {
    var s = /^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(e$lockOffset)
    $_7021(null !== s, "lockOffset value should be a number or a string of a number followed by \"px\" or \"%\". Given %s", e$lockOffset)
    o = parseFloat(e$lockOffset)
    i = parseFloat(e$lockOffset)
    a = s[1]
  }
  $_7021(isFinite(o) && isFinite(i), "lockOffset value should be a finite. Given %s", e$lockOffset)
  if ("%" === a) {
    o = o * e$width / 100
    i = i * e$height / 100
  }
  return {
    x: o,
    y: i
  }
}
function hr(e) {
  var /* [auto-meaningful-name] */e$height = e.height
  var /* [auto-meaningful-name] */e$width = e.width
  var /* [auto-meaningful-name] */e$lockOffset = e.lockOffset
  var o = Array.isArray(e$lockOffset) ? e$lockOffset : [e$lockOffset, e$lockOffset]
  $_7021(2 === o.length, "lockOffset prop of SortableContainer should be a single value or an array of exactly two values. Given %s", e$lockOffset)
  var i = $_40_index.a(o, 2)
  var a = i[0]
  var s = i[1]
  return [
    fr({
      height: e$height,
      lockOffset: a,
      width: e$width
    }), fr({
      height: e$height,
      lockOffset: s,
      width: e$width
    })
  ]
}
function mr(e) {
  return e instanceof HTMLElement ? function (e) {
    var t = window.getComputedStyle(e)
    var n = /(auto|scroll)/
    return ["overflow", "overflowX", "overflowY"].find(function (e) {
      return n.test(t[e])
    })
  }(e) ? e : mr(e.parentNode) : null
}
function gr(e) {
  var t = window.getComputedStyle(e)
  return "grid" === t.display ? {
    x: ir(t.gridColumnGap),
    y: ir(t.gridRowGap)
  } : {
    x: 0,
    y: 0
  }
}
var _r = 27
var vr = 32
var br = 37
var yr = 38
var Er = 39
var Or = 40
var wr = "A"
var /* [auto-meaningful-name] */BUTTON = "BUTTON"
var /* [auto-meaningful-name] */CANVAS = "CANVAS"
var /* [auto-meaningful-name] */INPUT = "INPUT"
var /* [auto-meaningful-name] */OPTION = "OPTION"
var /* [auto-meaningful-name] */TEXTAREA = "TEXTAREA"
var /* [auto-meaningful-name] */SELECT = "SELECT"
function Nr(e) {
  var /* [auto-meaningful-name] */InputTextareaSelectCanvasContenteditable = "input, textarea, select, canvas, [contenteditable]"
  var n = e.querySelectorAll(InputTextareaSelectCanvasContenteditable)
  var r = e.cloneNode(true)
  $_79_index.a(r.querySelectorAll(InputTextareaSelectCanvasContenteditable)).forEach(function (e, t) {
    if ("file" !== e.type) {
      e.value = n[t].value
    }
    if ("radio" === e.type && e.name) {
      e.name = "__sortableClone__".concat(e.name)
    }
    if (e.tagName === CANVAS && n[t].width > 0 && n[t].height > 0) {
      e.getContext("2d").drawImage(n[t], 0, 0)
    }
  })
  return r
}
function Rr(e) {
  return null != e.sortableHandle
}
var kr = function () {
  function e(t, n) {
    $_103.a(this, e)
    this.container = t
    this.onScrollCallback = n
  }
  $_106.a(e, [
    {
      key: "clear",
      value: function () {
        if (null != this.interval) {
          clearInterval(this.interval)
          this.interval = null
        }
      }
    }, {
      key: "update",
      value: function (e) {
        var t = this
        var /* [auto-meaningful-name] */e$translate = e.translate
        var /* [auto-meaningful-name] */e$minTranslate = e.minTranslate
        var /* [auto-meaningful-name] */e$maxTranslate = e.maxTranslate
        var /* [auto-meaningful-name] */e$width = e.width
        var /* [auto-meaningful-name] */e$height = e.height
        var s = {
          x: 0,
          y: 0
        }
        var c = {
          x: 1,
          y: 1
        }
        var l = 10
        var u = 10
        var /* [auto-meaningful-name] */this$container = this.container
        var /* [auto-meaningful-name] */this$container$scrollTop = this$container.scrollTop
        var /* [auto-meaningful-name] */this$container$scrollLeft = this$container.scrollLeft
        var /* [auto-meaningful-name] */this$container$scrollHeight = this$container.scrollHeight
        var /* [auto-meaningful-name] */this$container$scrollWidth = this$container.scrollWidth
        var g = 0 === this$container$scrollTop
        var _ = this$container$scrollHeight - this$container$scrollTop - this$container.clientHeight === 0
        var v = 0 === this$container$scrollLeft
        var b = this$container$scrollWidth - this$container$scrollLeft - this$container.clientWidth === 0
        if (e$translate.y >= e$maxTranslate.y - e$height / 2 && !_) {
          s.y = 1
          c.y = u * Math.abs((e$maxTranslate.y - e$height / 2 - e$translate.y) / e$height)
        } else {
          if (e$translate.x >= e$maxTranslate.x - e$width / 2 && !b) {
            s.x = 1
            c.x = l * Math.abs((e$maxTranslate.x - e$width / 2 - e$translate.x) / e$width)
          } else {
            if (e$translate.y <= e$minTranslate.y + e$height / 2 && !g) {
              s.y = -1
              c.y = u * Math.abs((e$translate.y - e$height / 2 - e$minTranslate.y) / e$height)
            } else {
              if (e$translate.x <= e$minTranslate.x + e$width / 2 && !v) {
                s.x = -1
                c.x = l * Math.abs((e$translate.x - e$width / 2 - e$minTranslate.x) / e$width)
              }
            }
          }
        }
        if (this.interval) {
          this.clear()
          this.isAutoScrolling = false
        }
        if (!(0 === s.x && 0 === s.y)) {
          this.interval = setInterval(function () {
            t.isAutoScrolling = true
            var e = {
              left: c.x * s.x,
              top: c.y * s.y
            }
            t.container.scrollTop += e.top
            t.container.scrollLeft += e.left
            t.onScrollCallback(e)
          }, 5)
        }
      }
    }
  ])
  return e
}()
var xr = {
  axis: $_50_index1.oneOf(["x", "y", "xy"]),
  contentWindow: $_50_index1.any,
  disableAutoscroll: $_50_index1.bool,
  distance: $_50_index1.number,
  getContainer: $_50_index1.func,
  getHelperDimensions: $_50_index1.func,
  helperClass: $_50_index1.string,
  helperContainer: $_50_index1.oneOfType([$_50_index1.func, "undefined" === typeof HTMLElement ? $_50_index1.any : $_50_index1.instanceOf(HTMLElement)]),
  hideSortableGhost: $_50_index1.bool,
  keyboardSortingTransitionDuration: $_50_index1.number,
  lockAxis: $_50_index1.string,
  lockOffset: $_50_index1.oneOfType([$_50_index1.number, $_50_index1.string, $_50_index1.arrayOf($_50_index1.oneOfType([$_50_index1.number, $_50_index1.string]))]),
  lockToContainerEdges: $_50_index1.bool,
  onSortEnd: $_50_index1.func,
  onSortMove: $_50_index1.func,
  onSortOver: $_50_index1.func,
  onSortStart: $_50_index1.func,
  pressDelay: $_50_index1.number,
  pressThreshold: $_50_index1.number,
  keyCodes: $_50_index1.shape({
    lift: $_50_index1.arrayOf($_50_index1.number),
    drop: $_50_index1.arrayOf($_50_index1.number),
    cancel: $_50_index1.arrayOf($_50_index1.number),
    up: $_50_index1.arrayOf($_50_index1.number),
    down: $_50_index1.arrayOf($_50_index1.number)
  }),
  shouldCancelStart: $_50_index1.func,
  transitionDuration: $_50_index1.number,
  updateBeforeSortStart: $_50_index1.func,
  useDragHandle: $_50_index1.bool,
  useWindowAsScrollContainer: $_50_index1.bool
}
var Dr = {
  lift: [vr],
  drop: [vr],
  cancel: [_r],
  up: [yr, br],
  down: [Or, Er]
}
var Mr = {
  axis: "y",
  disableAutoscroll: false,
  distance: 0,
  getHelperDimensions: function (e) {
    var /* [auto-meaningful-name] */e$node = e.node
    return {
      height: e$node.offsetHeight,
      width: e$node.offsetWidth
    }
  },
  hideSortableGhost: true,
  lockOffset: "50%",
  lockToContainerEdges: false,
  pressDelay: 0,
  pressThreshold: 5,
  keyCodes: Dr,
  shouldCancelStart: function (e) {
    return -1 !== [INPUT, TEXTAREA, SELECT, OPTION, BUTTON].indexOf(e.target.tagName) || !!rr(e.target, function (e) {
      return "true" === e.contentEditable
    })
  },
  transitionDuration: 300,
  useWindowAsScrollContainer: false
}
var Lr = Object.keys(xr)
function Pr(e) {
  $_7021(!(e.distance && e.pressDelay), "Attempted to set both `pressDelay` and `distance` on SortableContainer, you may only use one or the other, not both at the same time.")
}
function Br(e, t) {
  try {
    var n = e()
  } catch (r) {
    return t(true, r)
  }
  return n && n.then ? n.then(t.bind(null, false), t.bind(null, true)) : t(false, value)
}
var Fr = createContext({
  manager: {}
})
var Gr = {
  index: $_50_index1.number.isRequired,
  collection: $_50_index1.oneOfType([$_50_index1.number, $_50_index1.string]),
  disabled: $_50_index1.bool
}
var Wr = Object.keys(Gr)
export { Xn }
export { Zn }
export { Jn }
export { er }
export { tr }
export { nr }
export { rr }
export { or }
export { ar }
export { sr }
export { cr }
export { lr }
export { ur }
export { dr }
export { pr }
export { hr }
export { mr }
export { gr }
export { wr }
export { Nr }
export { Rr }
export { kr }
export { xr }
export { Dr }
export { Mr }
export { Lr }
export { Pr }
export { Br }
export { Fr }
export { Gr }
export { Wr }
