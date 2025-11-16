/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：188__part-1
 */

"use strict"

var r
import * as o from "./27"
import * as i from "./40"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */_React from "react"
if (navigator.platform.match("Mac")) {
  r = "osx"
} else {
  if (navigator.platform.match("Windows")) {
    r = "windows"
  } else {
    if (navigator.platform.match("Linux")) {
      r = "linux"
    }
  }
}
var c = function () {
  function e() {
    o.a(this, e)
    this.handlers = new Array()
  }
  i.a(e, [{
    key: "addHandler",
    value: function (e) {
      this.handlers.push(e)
    }
  }, {
    key: "removeHandler",
    value: function (e) {
      var t = this.handlers.indexOf(e)
      if (-1 !== t) {
        this.handlers.splice(t, 1)
      }
    }
  }, {
    key: "dispatch",
    value: function (e) {
      var t = false
      this.handlers.forEach(function (n) {
        if (u(e, n.keys)) {
          t = t || false !== n.callback()
        }
      })
      return t
    }
  }])
  return e
}()
var l = _React.createContext(new c())
var u = function e(t, n) {
  if ("string" === typeof n) {
    return t === n
  }
  if (Array.isArray(n)) {
    return n.includes(t)
  }
  if ("object" === typeof n) {
    var o = n[r || "windows"]
    return !!o && e(t, o)
  }
  return false
}
function d(e) {
  var /* [auto-meaningful-name] */e$keys = e.keys
  var /* [auto-meaningful-name] */e$callback = e.callback
  var /* [auto-meaningful-name] */e$disabled = e.disabled
  var o = React.useContext(l)
  React.useEffect(function () {
    if (!e$disabled) {
      var e = {
        keys: e$keys,
        callback: e$callback
      }
      o.addHandler(e)
      return function () {
        return o.removeHandler(e)
      }
    }
  }, [e$keys, e$callback, e$disabled, o])
  return null
}
function p(e) {
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$useCapture = e.useCapture
  var /* [auto-meaningful-name] */e$emitter = e.emitter
  var o = React.useRef(new c())
  React.useEffect(function () {
    var e = function (e) {
      var /* [auto-meaningful-name] */document$activeElement = document.activeElement
      if (document$activeElement) {
        var /* [auto-meaningful-name] */document$activeElement$tagName = document$activeElement.tagName
        if ("INPUT" === document$activeElement$tagName || "TEXTAREA" === document$activeElement$tagName) {
          return
        }
        if (document$activeElement.getAttribute("contenteditable")) {
          return
        }
      }
      var r = []
      if (e.altKey) {
        r.push("alt")
      }
      if (e.ctrlKey) {
        r.push("control")
      }
      if (e.metaKey) {
        r.push("command")
      }
      if (e.key) {
        r.push(e.key.toLowerCase())
      }
      var i = r.join("+")
      if (false !== o.current.dispatch(i)) {
        e.stopImmediatePropagation()
        e.preventDefault()
      }
    }
    var t = e$emitter || document
    t.addEventListener("keydown", e, e$useCapture)
    return function () {
      return t.removeEventListener("keydown", e, e$useCapture)
    }
  }, [e$useCapture, e$emitter])
  return _React.createElement(l.Provider, {
    value: o.current
  }, e$children)
}
export { d as "188__part-1__d" }
export { p as "188__part-1__p" }
