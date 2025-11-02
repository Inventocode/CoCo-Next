/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1988
 */

(function (e, t) {
  !function (e, n) {
    "use strict"

    if (!e.setImmediate) {
      var r
      var i = 1
      var o = {}
      var a = false
      var e$document = e.document
      var c = Object.getPrototypeOf && Object.getPrototypeOf(e)
      c = c && c.setTimeout ? c : e
      if ("[object process]" === {}.toString.call(e.process)) {
        r = function (e) {
          t.nextTick(function () {
            l(e)
          })
        }
      } else {
        if (function () {
          if (e.postMessage && !e.importScripts) {
            var t = true
            var e$onmessage = e.onmessage
            e.onmessage = function () {
              t = false
            }
            e.postMessage("", "*")
            e.onmessage = e$onmessage
            return t
          }
        }()) {
          (function () {
            var t = "setImmediate$" + Math.random() + "$"
            var n = function (n) {
              if (n.source === e && "string" === typeof n.data && 0 === n.data.indexOf(t)) {
                l(+n.data.slice(t.length))
              }
            }
            if (e.addEventListener) {
              e.addEventListener("message", n, false)
            } else {
              e.attachEvent("onmessage", n)
            }
            r = function (n) {
              e.postMessage(t + n, "*")
            }
          })()
        } else {
          if (e.MessageChannel) {
            (function () {
              var e = new MessageChannel()
              e.port1.onmessage = function (e) {
                l(e.data)
              }
              r = function (t) {
                e.port2.postMessage(t)
              }
            })()
          } else {
            if (e$document && "onreadystatechange" in e$document.createElement("script")) {
              (function () {
                var e$document$documentElement = e$document.documentElement
                r = function (t) {
                  var n = e$document.createElement("script")
                  n.onreadystatechange = function () {
                    l(t)
                    n.onreadystatechange = null
                    e$document$documentElement.removeChild(n)
                    n = null
                  }
                  e$document$documentElement.appendChild(n)
                }
              })()
            } else {
              r = function (e) {
                setTimeout(l, 0, e)
              }
            }
          }
        }
      }
      c.setImmediate = function (e) {
        if ("function" !== typeof e) {
          e = new Function("" + e)
        }
        for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) {
          t[n] = arguments[n + 1]
        }
        var a = {
          callback: e,
          args: t
        }
        o[i] = a
        r(i)
        return i++
      }
      c.clearImmediate = u
    }
    function u(e) {
      delete o[e]
    }
    function l(e) {
      if (a) {
        setTimeout(l, 0, e)
      } else {
        var t = o[e]
        if (t) {
          a = true
          try {
            !function (e) {
              var e$callback = e.callback
              var e$args = e.args
              switch (e$args.length) {
                case 0:
                  e$callback()
                  break
                case 1:
                  e$callback(e$args[0])
                  break
                case 2:
                  e$callback(e$args[0], e$args[1])
                  break
                case 3:
                  e$callback(e$args[0], e$args[1], e$args[2])
                  break
                default:
                  e$callback.apply(undefined, e$args)
              }
            }(t)
          } finally {
            u(e)
            a = false
          }
        }
      }
    }
  }("undefined" === typeof self ? "undefined" === typeof e ? this : e : self)
}).call(this, require("../../710/251"), require("../../710/368"))
