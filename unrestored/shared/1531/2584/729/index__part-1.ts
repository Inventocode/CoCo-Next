/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：729__part-1
 */

"use strict"

import { "729__part-0__f" as f, "729__part-0__m" as m } from "./index__part-0"
import * as l from "./62"
import * as /* [auto-meaningful-name] */$$_16_index from "../16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as j from "../8"
import N from "../8"
import * as /* [auto-meaningful-name] */$$_2628_index from "../2628/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_ui_language from "../../../../../src/shared/ui/language"
import * as /* [auto-meaningful-name] */$$_10_index from "../10/index"
import * as /* [auto-meaningful-name] */$_1021 from "./1021"
var M = function (e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : .001
  return Math.abs(e.x) <= t && Math.abs(e.y) <= t && Math.abs(e.z) <= t
}
var L = new l.g("#f6f4fd")
function P() {
  var e = _React.useRef()
  var t = _React.useRef(0)
  var n = _React.useRef()
  var a = _React.useState(false)
  var s = $$_10_index.a(a, 2)
  var c = s[0]
  var u = s[1]
  var d = $$_16_index.d()
  var p = $$_16_index.e(function (e) {
    return e
  })
  n.current = p
  _React.useEffect(function () {
    var t
    var n = {
      width: (null === (t = document.getElementById("emulatorCanvasWrapper")) || undefined === t ? undefined : t.clientWidth) || 340,
      height: 300
    }
    var r = new l.H()
    var o = new l.B(75, n.width / n.height, .1, 1e3)
    var i = new l.R({
      antialias: true,
      alpha: false
    })
    var a = new l.C()
    a.position.set(10, 10, 50)
    a.intensity = .2
    r.add(new l.a())
    r.add(a)
    r.background = null
    o.position.z = 6
    i.setSize(n.width, n.height)
    i.setClearColor(L)
    i.autoClear = false
    var s = new $_1021.a()
    var c = new l.M().load("/editor/model/background.png")
    r.background = c
    s.loadAsync("/editor/model/phone.fbx").then(function (t) {
      r.add(t)
      e.current = {
        scene: r,
        renderer: i,
        camera: o,
        phone: t
      }
      u(true)
    })
    return function () {
      i.dispose()
      e.current = undefined
    }
  }, [])
  var h = new l.O()
  var g = new l.O()
  !function (e, t) {
    var n = React.useRef()
    var i = React.useRef()
    var a = _React.useCallback(function (t) {
      if (undefined !== i.current) {
        var r = t - i.current
        e(r / 1e3)
      }
      i.current = t
      n.current = requestAnimationFrame(a)
    }, [e])
    React.useEffect(function () {
      n.current = requestAnimationFrame(a)
      return function () {
        if (n.current) {
          cancelAnimationFrame(n.current)
        }
      }
    }, [a])
  }(function (r) {
    var /* [auto-meaningful-name] */e$current = e.current
    var /* [auto-meaningful-name] */n$current = n.current
    if (e$current && n$current) {
      var /* [auto-meaningful-name] */e$current$renderer = e$current.renderer
      var /* [auto-meaningful-name] */e$current$scene = e$current.scene
      var /* [auto-meaningful-name] */e$current$camera = e$current.camera
      var /* [auto-meaningful-name] */e$current$phone = e$current.phone
      var p = 8 * r
      e$current$phone.rotation.toVector3(h)
      g.copy(e$current$phone.position)
      var /* [auto-meaningful-name] */e$current$phone$rotation = e$current$phone.rotation
      var /* [auto-meaningful-name] */e$current$phone$rotation$x = e$current$phone$rotation.x
      var /* [auto-meaningful-name] */e$current$phone$rotation$y = e$current$phone$rotation.y
      var /* [auto-meaningful-name] */e$current$phone$rotation$z = e$current$phone$rotation.z
      var /* [auto-meaningful-name] */n$current$rotation = n$current.rotation
      var /* [auto-meaningful-name] */n$current$rotation$x = n$current$rotation.x
      var /* [auto-meaningful-name] */n$current$rotation$y = n$current$rotation.y
      var /* [auto-meaningful-name] */n$current$rotation$z = n$current$rotation.z
      e$current$phone.rotation.set(l.s.lerp(e$current$phone$rotation$x, n$current$rotation$x * l.s.DEG2RAD, p), l.s.lerp(e$current$phone$rotation$y, n$current$rotation$y * l.s.DEG2RAD, p), l.s.lerp(e$current$phone$rotation$z, n$current$rotation$z * l.s.DEG2RAD, p))
      var /* [auto-meaningful-name] */e$current$phone$position = e$current$phone.position
      var /* [auto-meaningful-name] */e$current$phone$position$x = e$current$phone$position.x
      var /* [auto-meaningful-name] */e$current$phone$position$y = e$current$phone$position.y
      var /* [auto-meaningful-name] */e$current$phone$position$z = e$current$phone$position.z
      var /* [auto-meaningful-name] */n$current$position = n$current.position
      var /* [auto-meaningful-name] */n$current$position$x = n$current$position.x
      var /* [auto-meaningful-name] */n$current$position$y = n$current$position.y
      var /* [auto-meaningful-name] */n$current$position$z = n$current$position.z
      e$current$phone.position.set(l.s.lerp(e$current$phone$position$x, n$current$position$x, p), l.s.lerp(e$current$phone$position$y, n$current$position$y, p), l.s.lerp(e$current$phone$position$z, n$current$position$z, p))
      e$current$renderer.clear(true, true, true)
      e$current$renderer.render(e$current$scene, e$current$camera)
      t.current -= r
      if (t.current < 0) {
        var x = g.subVectors(e$current$phone.position, g).divideScalar(r * r)
        if (M(x)) {
          if (!M(n$current.additionalAcceleration, 0)) {
            d(f({
              x: 0,
              y: 0,
              z: 0
            }))
          }
        } else {
          var D = x.x
          var L = x.y
          var P = x.z
          d(f({
            x: D,
            y: L,
            z: P
          }))
        }
        var B = h.subVectors(e$current$phone.rotation.toVector3(), h).divideScalar(r)
        if (M(B)) {
          if (!M(n$current.angularVelocity, 0)) {
            d(m({
              x: 0,
              y: 0,
              z: 0
            }))
          }
        } else {
          var F = B.x
          var G = B.y
          var U = B.z
          d(m({
            x: F,
            y: G,
            z: U
          }))
        }
        t.current = .33
      }
    }
  })
  var _ = _React.useCallback(function (t) {
    if (t && e.current) {
      t.appendChild(e.current.renderer.domElement)
    }
  }, [c])
  return React.createElement("div", {
    ref: _,
    id: "emulatorCanvasWrapper"
  })
}
export { P as "729__part-1__P" }
