/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：699__part-1
 */

"use strict"

import { C } from "./index__part-0"
import * as /* [auto-meaningful-name] */$$_$$_$$_434 from "../../../434"
import * as /* [auto-meaningful-name] */$$_$$_$$_339 from "../../../339"
import * as /* [auto-meaningful-name] */$$_$$_$$_19 from "../../../19"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$_1546 from "./1546"
var k = function (e, t) {
  return e && t && t.split(" ").forEach(function (t) {
    r = t
    return void ((n = e).classList ? n.classList.remove(r) : "string" === typeof n.className ? n.className = C(n.className, r) : n.setAttribute("class", C(n.className && n.className.baseVal || "", r)))
    var n
    var r
  })
}
var S = function (e) {
  function t() {
    for (var t, /* [auto-meaningful-name] */arguments$length = arguments.length, r = new Array(arguments$length), i = 0; i < arguments$length; i++) {
      r[i] = arguments[i]
    }
    (t = e.call.apply(e, [this].concat(r)) || this).appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    }
    t.onEnter = function (e, n) {
      var r = t.resolveArguments(e, n)
      var i = r[0]
      var o = r[1]
      t.removeClasses(i, "exit")
      t.addClass(i, o ? "appear" : "enter", "base")
      if (t.props.onEnter) {
        t.props.onEnter(e, n)
      }
    }
    t.onEntering = function (e, n) {
      var r = t.resolveArguments(e, n)
      var i = r[0]
      var o = r[1] ? "appear" : "enter"
      t.addClass(i, o, "active")
      if (t.props.onEntering) {
        t.props.onEntering(e, n)
      }
    }
    t.onEntered = function (e, n) {
      var r = t.resolveArguments(e, n)
      var i = r[0]
      var o = r[1] ? "appear" : "enter"
      t.removeClasses(i, o)
      t.addClass(i, o, "done")
      if (t.props.onEntered) {
        t.props.onEntered(e, n)
      }
    }
    t.onExit = function (e) {
      var n = t.resolveArguments(e)[0]
      t.removeClasses(n, "appear")
      t.removeClasses(n, "enter")
      t.addClass(n, "exit", "base")
      if (t.props.onExit) {
        t.props.onExit(e)
      }
    }
    t.onExiting = function (e) {
      var n = t.resolveArguments(e)[0]
      t.addClass(n, "exit", "active")
      if (t.props.onExiting) {
        t.props.onExiting(e)
      }
    }
    t.onExited = function (e) {
      var n = t.resolveArguments(e)[0]
      t.removeClasses(n, "exit")
      t.addClass(n, "exit", "done")
      if (t.props.onExited) {
        t.props.onExited(e)
      }
    }
    t.resolveArguments = function (e, n) {
      return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, n]
    }
    t.getClassNames = function (e) {
      var /* [auto-meaningful-name] */t$props$classNames = t.props.classNames
      var r = "string" === typeof t$props$classNames
      var i = r ? "" + (r && t$props$classNames ? t$props$classNames + "-" : "") + e : t$props$classNames[e]
      return {
        baseClassName: i,
        activeClassName: r ? i + "-active" : t$props$classNames[e + "Active"],
        doneClassName: r ? i + "-done" : t$props$classNames[e + "Done"]
      }
    }
    return t
  }
  $$_$$_$$_434.a(t, e)
  var /* [auto-meaningful-name] */t$prototype = t.prototype
  t$prototype.addClass = function (e, t, n) {
    var r = this.getClassNames(t)[n + "ClassName"]
    var /* [auto-meaningful-name] */this$getClassNamesEnter$doneClassName = this.getClassNames("enter").doneClassName
    if ("appear" === t && "done" === n && this$getClassNamesEnter$doneClassName) {
      r += " " + this$getClassNamesEnter$doneClassName
    }
    if ("active" === n && e) {
      e.scrollTop
    }
    if (r) {
      this.appliedClasses[t][n] = r;
      (function (e, t) {
        if (e && t) {
          t.split(" ").forEach(function (t) {
            r = t
            return void ((n = e).classList ? n.classList.add(r) : function (e, t) {
              return e.classList ? !!t && e.classList.contains(t) : -1 !== (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ")
            }(n, r) || ("string" === typeof n.className ? n.className = n.className + " " + r : n.setAttribute("class", (n.className && n.className.baseVal || "") + " " + r)))
            var n
            var r
          })
        }
      })(e, r)
    }
  }
  t$prototype.removeClasses = function (e, t) {
    var n = this.appliedClasses[t]
    var /* [auto-meaningful-name] */n$base = n.base
    var /* [auto-meaningful-name] */n$active = n.active
    var /* [auto-meaningful-name] */n$done = n.done
    this.appliedClasses[t] = {}
    if (n$base) {
      k(e, n$base)
    }
    if (n$active) {
      k(e, n$active)
    }
    if (n$done) {
      k(e, n$done)
    }
  }
  t$prototype.render = function () {
    var /* [auto-meaningful-name] */this$props = this.props
    this$props.classNames
    var t = $$_$$_$$_339.a(this$props, ["classNames"])
    return React.createElement($_1546.a, $$_$$_$$_19.a({}, t, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }))
  }
  return t
}(React.Component)
S.defaultProps = {
  classNames: ""
}
S.propTypes = {}
var T = S
export { T }
