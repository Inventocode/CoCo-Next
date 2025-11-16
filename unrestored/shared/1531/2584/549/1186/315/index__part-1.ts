/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：315__part-1
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_$$_548_1183_691_153 from "../../../548/1183/691/153"
import * as /* [auto-meaningful-name] */$$_$$_$$_54 from "../../../54"
import * as /* [auto-meaningful-name] */$$_$$_$$_19 from "../../../19"
import * as /* [auto-meaningful-name] */$$_$$_$$_548_1183_100 from "../../../548/1183/100"
import * as /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_$$_$$_29 from "../../../29"
import * as /* [auto-meaningful-name] */$$_$$_$$_548_1183_691_234 from "../../../548/1183/691/234"
import * as /* [auto-meaningful-name] */$_2630_index from "./2630/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_33_index from "../../../33/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_548_1183_691_1505 from "../../../548/1183/691/1505"
import * as /* [auto-meaningful-name] */$_688 from "./688"
import * as /* [auto-meaningful-name] */$$_682_index from "../682/index"
import * as /* [auto-meaningful-name] */$_693 from "./693"
import * as /* [auto-meaningful-name] */$_288 from "./288"
var x = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}
var C = {
  enter: $_688.b.enteringScreen,
  exit: $_688.b.leavingScreen
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
  var g = undefined === e$TransitionComponent ? $$_$$_$$_548_1183_691_1505.a : e$TransitionComponent
  var /* [auto-meaningful-name] */e$timeout = e.timeout
  var O = undefined === e$timeout ? C : e$timeout
  var k = $$_$$_$$_54.a(e, ["children", "disableStrictModeCompat", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "TransitionComponent", "timeout"])
  var S = $$_682_index.a()
  var T = S.unstable_strictMode && !s
  var B = React.useRef(null)
  var D = $_288.a(e$children.ref, t)
  var I = $_288.a(T ? B : undefined, D)
  var F = function (e) {
    return function (t, n) {
      if (e) {
        var r = T ? [B.current, t] : [t, n]
        var i = $$_$$_$$_33_index.a(r, 2)
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
  var R = F(e$onEntering)
  var P = F(function (e, t) {
    $_693.b(e)
    var n = $_693.a({
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
  var N = F(e$onEntered)
  var M = F(e$onExiting)
  var j = F(function (e) {
    var t = $_693.a({
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
  var L = F(e$onExited)
  return React.createElement(g, $$_$$_$$_19.a({
    appear: true,
    in: c,
    nodeRef: T ? B : undefined,
    onEnter: P,
    onEntered: N,
    onEntering: R,
    onExit: j,
    onExited: L,
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
    className: $$_$$_$$_548_1183_100.a(e$classes.root, e$className, l && e$classes.invisible),
    "aria-hidden": true,
    ref: t
  }, e$children))
})
var S = $$_$$_$$_548_1183_691_153.a({
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
export { O as "315__part-1__O" }
export { S as "315__part-1__S" }
