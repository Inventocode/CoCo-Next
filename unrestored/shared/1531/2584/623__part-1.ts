/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：623__part-1
 */

"use strict"

var i
var r
import * as o from "./19"
import * as /* [auto-meaningful-name] */$_171 from "./171"
import * as /* [auto-meaningful-name] */$_110 from "./110"
import /* [auto-meaningful-name] */_$_ from "./110"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_75_index from "./75/index"
import /* [auto-meaningful-name] */_$_75_index from "./75/index"
var h = false
var p = {
  load: function () {
    var e = $_171.a(_$_.mark(function e(t) {
      var a
      return _$_.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (!h) {
                e.next = 2
                break
              }
              return e.abrupt("return")
            case 2:
              a = _React.lazy(function () {
                return Promise.reject(new Error("module (key: 2594) not found!")).then(function (e) {
                  return {
                    default: e.KittenVideoPlayer
                  }
                })
              });
              (r = document.createElement("div")).id = "CUI-kitten-video-player-container"
              document.body.appendChild(r)
              _$_75_index.render(_React.createElement(_React.Suspense, {
                fallback: null
              }, _React.createElement(a, o.a({
                getPlayerRef: function (e) {
                  return i = e
                }
              }, t))), r)
              h = true
            case 8:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))
    return function (t) {
      return e.apply(this, arguments)
    }
  }(),
  close: function (e) {
    return new Promise(function (t, n) {
      var i
      var o
      var a = document.getElementsByClassName("CUI-kitten-video-player-draggable")[0]
      if (a) {
        var s = a.getBoundingClientRect()
        var /* [auto-meaningful-name] */s$width = s.width
        var /* [auto-meaningful-name] */s$height = s.height
        a.style.transform += " scale(1)"
        var l = {
          x: 0,
          y: 0
        }
        if (null !== e && undefined !== e && e.closeAnimationPos) {
          l = e.closeAnimationPos
        }
        var f = {
          transition: "transform 0.5s cubic-bezier(0.2, 0, 0.2, 1)",
          transform: "translate(".concat(((null === (i = l) || undefined === i ? undefined : i.x) || 0) - s$width / 2, "px, ").concat(((null === (o = l) || undefined === o ? undefined : o.y) || 0) - s$height / 2, "px) scale(0)")
        }
        a.style.transition = f.transition
        a.style.transform = f.transform
        a.addEventListener("transitionend", function () {
          if (r) {
            _$_75_index.unmountComponentAtNode(r)
            document.body.removeChild(r)
            r = undefined
            t(undefined)
            h = false
          }
        })
      }
    })
  },
  hide: function () {
    var e
    if (r) {
      if (!(null === (e = i) || undefined === e)) {
        e.pause()
      }
      r.children[0].style.display = "none"
    }
  },
  show: function () {
    if (r) {
      r.children[0].style.display = "block"
    }
  },
  isLoaded: function () {
    return h
  },
  getPlayer: function () {
    return i
  }
}
export { p as "623__part-1__p" }
