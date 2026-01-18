/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：316__part-1
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_$$_551_1211_269_154_index from "../../../551/1211/269/154/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_54 from "../../../54"
import * as /* [auto-meaningful-name] */$$_$$_$$_19 from "../../../19"
import * as /* [auto-meaningful-name] */$$_$$_$$_551_1211_98 from "../../../551/1211/98"
import * as /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_$$_$$_35 from "../../../35"
import * as /* [auto-meaningful-name] */$$_$$_$$_551_1211_269_233 from "../../../551/1211/269/233"
import * as /* [auto-meaningful-name] */$_2682_index from "./2682/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_40_index from "../../../40/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_551_1211_699_1546_index from "../../../551/1211/699/1546/index"
import * as /* [auto-meaningful-name] */$_696 from "./696"
import * as /* [auto-meaningful-name] */$$_690_index from "../690/index"
import * as /* [auto-meaningful-name] */$_701 from "./701"
import * as /* [auto-meaningful-name] */$$_$$_$$_551_1211_269_287 from "../../../551/1211/269/287"
var x = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}
var C = {
  enter: $_696.b.enteringScreen,
  exit: $_696.b.leavingScreen
}
var O = React.forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$disableStrictModeCompat = e.disableStrictModeCompat
  var s = undefined !== e$disableStrictModeCompat && e$disableStrictModeCompat
  var c = e.in
  var /* [auto-meaningful-name] */e$onEnter = e.onEnter
  var /* [auto-meaningful-name] */e$onEntered = e.onEntered
  var /* [auto-meaningful-name] */e$onEntering = e.onEntering
  var /* [auto-meaningful-name] */e$onExit = e.onExit
  var /* [auto-meaningful-name] */e$onExited = e.onExited
  var /* [auto-meaningful-name] */e$onExiting = e.onExiting
  var /* [auto-meaningful-name] */e$style = e.style
  var /* [auto-meaningful-name] */e$TransitionComponent = e.TransitionComponent
  var g = undefined === e$TransitionComponent ? $$_$$_$$_551_1211_699_1546_index.a : e$TransitionComponent
  var /* [auto-meaningful-name] */e$timeout = e.timeout
  var O = undefined === e$timeout ? C : e$timeout
  var k = $$_$$_$$_54.a(e, ["children", "disableStrictModeCompat", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "TransitionComponent", "timeout"])
  var S = $$_690_index.a()
  var T = S.unstable_strictMode && !s
  var B = React.useRef(null)
  var D = $$_$$_$$_551_1211_269_287.a(e$children.ref, t)
  var I = $$_$$_$$_551_1211_269_287.a(T ? B : undefined, D)
  var R = function (e) {
    return function (t, n) {
      if (e) {
        var r = T ? [B.current, t] : [t, n]
        var i = $$_$$_$$_40_index.a(r, 2)
        var o = i[0]
        var a = i[1]
        if (undefined === a) {
          e(o)
        } else {
          e(o, a)
        }
      }
    }
  }
  var F = R(e$onEntering)
  var P = R(function (e, t) {
    $_701.b(e)
    var n = $_701.a({
      style: e$style,
      timeout: O
    }, {
      mode: "enter"
    })
    e.style.webkitTransition = S.transitions.create("opacity", n)
    e.style.transition = S.transitions.create("opacity", n)
    if (e$onEnter) {
      e$onEnter(e, t)
    }
  })
  var N = R(e$onEntered)
  var M = R(e$onExiting)
  var L = R(function (e) {
    var t = $_701.a({
      style: e$style,
      timeout: O
    }, {
      mode: "exit"
    })
    e.style.webkitTransition = S.transitions.create("opacity", t)
    e.style.transition = S.transitions.create("opacity", t)
    if (e$onExit) {
      e$onExit(e)
    }
  })
  var j = R(e$onExited)
  return React.createElement(g, $$_$$_$$_19.a({
    appear: true,
    in: c,
    nodeRef: T ? B : undefined,
    onEnter: P,
    onEntered: N,
    onEntering: F,
    onExit: L,
    onExited: j,
    onExiting: M,
    timeout: O
  }, k), function (e, t) {
    return React.cloneElement(e$children, $$_$$_$$_19.a({
      style: $$_$$_$$_19.a({
        opacity: 0,
        visibility: "exited" !== e || c ? undefined : "hidden"
      }, x[e], e$style, e$children.props.style),
      ref: I
    }, t))
  })
})
var k = React.forwardRef(function (e, t) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$classes = e.classes
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$invisible = e.invisible
  var l = undefined !== e$invisible && e$invisible
  var /* [auto-meaningful-name] */e$open = e.open
  var /* [auto-meaningful-name] */e$transitionDuration = e.transitionDuration
  var /* [auto-meaningful-name] */e$TransitionComponent = e.TransitionComponent
  var p = undefined === e$TransitionComponent ? O : e$TransitionComponent
  var _ = $$_$$_$$_54.a(e, ["children", "classes", "className", "invisible", "open", "transitionDuration", "TransitionComponent"])
  return React.createElement(p, $$_$$_$$_19.a({
    in: e$open,
    timeout: e$transitionDuration
  }, _), React.createElement("div", {
    className: $$_$$_$$_551_1211_98.a(e$classes.root, e$className, l && e$classes.invisible),
    "aria-hidden": true,
    ref: t
  }, e$children))
})
var S = $$_$$_$$_551_1211_269_154_index.a({
  root: {
    zIndex: -1,
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    WebkitTapHighlightColor: "transparent"
  },
  invisible: {
    backgroundColor: "transparent"
  }
}, {
  name: "MuiBackdrop"
})(k)
export { O }
export { S }
