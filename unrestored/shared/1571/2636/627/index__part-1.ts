/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：627__part-1
 */

"use strict"

var i
var r
import * as /* [auto-meaningful-name] */$$_19 from "../19"
import * as /* [auto-meaningful-name] */$$_1543_326 from "../1543/326"
import * as /* [auto-meaningful-name] */$$_1543_216 from "../1543/216"
import /* [auto-meaningful-name] */$$_1543_2161 from "../1543/216"
import "react"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */ReactDom from "react-dom"
import /* [auto-meaningful-name] */ReactDom1 from "react-dom"
var h = false
var p = {
  load: function () {
    var e = $$_1543_326.a($$_1543_2161.mark(function e(t) {
      var a
      return $$_1543_2161.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (!h) {
                e.next = 2
                break
              }
              return e.abrupt("return")
            case 2:
              a = React1.lazy(function () {
                return import("./2647/index").then(function (e) {
                  return {
                    default: e.KittenVideoPlayer
                  }
                })
              });
              (r = document.createElement("div")).id = "CUI-kitten-video-player-container"
              document.body.appendChild(r)
              ReactDom1.render(React1.createElement(React1.Suspense, {
                fallback: null
              }, React1.createElement(a, $$_19.a({
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
            ReactDom1.unmountComponentAtNode(r)
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
export { p }
