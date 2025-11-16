/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：555__part-2
 */

"use strict"

import { "555__part-1__ce" as ce, "555__part-1__ue" as ue } from "./index__part-1"
import * as /* [auto-meaningful-name] */$_1456 from "./1456"
import * as /* [auto-meaningful-name] */$$_$$_1502_428 from "../../1502/428"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_$$_108 from "../../108"
import * as /* [auto-meaningful-name] */$$_$$_33_index from "../../33/index"
import * as /* [auto-meaningful-name] */$$_$$_1502_488 from "../../1502/488"
import * as /* [auto-meaningful-name] */ResizeObserverPolyfill from "resize-observer-polyfill"
import * as /* [auto-meaningful-name] */$$_$$_1502_558 from "../../1502/558"
function he(e, t) {
  var n = null
  var r = null
  var o = new ResizeObserverPolyfill.default(function (e) {
    var /* [auto-meaningful-name] */$$_$$_33_index$aE10$target = $$_$$_33_index.a(e, 1)[0].target
    if (document.documentElement.contains($$_$$_33_index$aE10$target)) {
      var a = $$_$$_33_index$aE10$target.getBoundingClientRect()
      var /* [auto-meaningful-name] */a$width = a.width
      var /* [auto-meaningful-name] */a$height = a.height
      var u = Math.floor(a$width)
      var l = Math.floor(a$height)
      if (!(n === u && r === l)) {
        Promise.resolve().then(function () {
          t({
            width: u,
            height: l
          })
        })
      }
      n = u
      r = l
    }
  })
  if (e) {
    o.observe(e)
  }
  return function () {
    o.disconnect()
  }
}
function pe(e) {
  return "function" !== typeof e ? null : e()
}
function _e(e) {
  return "object" === $$_$$_108.a(e) && e ? e : null
}
var Ae = React.forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$disabled = e.disabled
  var /* [auto-meaningful-name] */e$target = e.target
  var /* [auto-meaningful-name] */e$align = e.align
  var /* [auto-meaningful-name] */e$onAlign = e.onAlign
  var /* [auto-meaningful-name] */e$monitorWindowResize = e.monitorWindowResize
  var /* [auto-meaningful-name] */e$monitorBufferTime = e.monitorBufferTime
  var h = undefined === e$monitorBufferTime ? 0 : e$monitorBufferTime
  var p = React.useRef({})
  var _ = React.useRef()
  var A = React.Children.only(e$children)
  var g = React.useRef({})
  g.current.disabled = e$disabled
  g.current.target = e$target
  g.current.onAlign = e$onAlign
  var v = function (e, t) {
    var n = React.useRef(false)
    var r = React.useRef(null)
    function i() {
      window.clearTimeout(r.current)
    }
    return [function o(a) {
      if (n.current && true !== a) {
        i()
        r.current = window.setTimeout(function () {
          n.current = false
          o()
        }, t)
      } else {
        if (false === e()) {
          return
        }
        n.current = true
        i()
        r.current = window.setTimeout(function () {
          n.current = false
        }, t)
      }
    }, function () {
      n.current = false
      i()
    }]
  }(function () {
    var /* [auto-meaningful-name] */g$current = g.current
    var /* [auto-meaningful-name] */g$current$disabled = g$current.disabled
    var /* [auto-meaningful-name] */g$current$target = g$current.target
    var /* [auto-meaningful-name] */g$current$onAlign = g$current.onAlign
    if (!g$current$disabled && g$current$target) {
      var i
      var /* [auto-meaningful-name] */_$current = _.current
      var s = pe(g$current$target)
      var c = _e(g$current$target)
      p.current.element = s
      p.current.point = c
      var /* [auto-meaningful-name] */document$activeElement = document.activeElement
      if (s && $_1456.a(s)) {
        i = ce(_$current, s, e$align)
      } else {
        if (c) {
          i = ue(_$current, c, e$align)
        }
      }
      (function (e, t) {
        if (e !== document.activeElement && $$_$$_1502_558.a(t, e) && "function" === typeof e.focus) {
          e.focus()
        }
      })(document$activeElement, _$current)
      if (g$current$onAlign && i) {
        g$current$onAlign(_$current, i)
      }
      return true
    }
    return false
  }, h)
  var m = $$_$$_33_index.a(v, 2)
  var y = m[0]
  var b = m[1]
  var w = React.useRef({
    cancel: function () {}
  })
  var E = React.useRef({
    cancel: function () {}
  })
  React.useEffect(function () {
    var /* [auto-meaningful-name] */p$current$point
    var t
    var n = pe(e$target)
    var r = _e(e$target)
    if (_.current !== E.current.element) {
      E.current.cancel()
      E.current.element = _.current
      E.current.cancel = he(_.current, y)
    }
    if (!(p.current.element === n && ((p$current$point = p.current.point) === (t = r) || p$current$point && t && ("pageX" in t && "pageY" in t ? p$current$point.pageX === t.pageX && p$current$point.pageY === t.pageY : "clientX" in t && "clientY" in t && p$current$point.clientX === t.clientX && p$current$point.clientY === t.clientY)))) {
      y()
      if (w.current.element !== n) {
        w.current.cancel()
        w.current.element = n
        w.current.cancel = he(n, y)
      }
    }
  })
  React.useEffect(function () {
    if (e$disabled) {
      b()
    } else {
      y()
    }
  }, [e$disabled])
  var x = React.useRef(null)
  React.useEffect(function () {
    if (e$monitorWindowResize) {
      if (!x.current) {
        x.current = $$_$$_1502_488.a(window, "resize", y)
      }
    } else {
      if (x.current) {
        x.current.remove()
        x.current = null
      }
    }
  }, [e$monitorWindowResize])
  React.useEffect(function () {
    return function () {
      w.current.cancel()
      E.current.cancel()
      if (x.current) {
        x.current.remove()
      }
      b()
    }
  }, [])
  React.useImperativeHandle(t, function () {
    return {
      forceAlign: function () {
        return y(true)
      }
    }
  })
  if (React.isValidElement(A)) {
    A = React.cloneElement(A, {
      ref: $$_$$_1502_428.a(A.ref, _)
    })
  }
  return A
})
Ae.displayName = "Align"
var ge = Ae
export { ge as "555__part-2__ge" }
