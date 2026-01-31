/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1212__part-3
 */

"use strict"

import * as /* [auto-meaningful-name] */$_395 from "./395"
import * as /* [auto-meaningful-name] */$_918 from "./918"
import * as /* [auto-meaningful-name] */$$_799_38 from "../799/38"
import * as /* [auto-meaningful-name] */$_928 from "./928"
import * as /* [auto-meaningful-name] */$_306 from "./306"
import * as /* [auto-meaningful-name] */$_564_index from "./564/index"
import * as /* [auto-meaningful-name] */$_1008 from "./1008"
function v() {
  if (!("fetch" in $_395.e())) {
    return false
  }
  try {
    new Headers()
    new Request("")
    new Response()
    return true
  } catch (e) {
    return false
  }
}
function m(e) {
  return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
}
function y() {
  if (!v()) {
    return false
  }
  try {
    new Request("_", {
      referrerPolicy: "origin"
    })
    return true
  } catch (e) {
    return false
  }
}
var b
var w = $_395.e()
var E = {}
var x = {}
function C(e) {
  if (!x[e]) {
    switch (x[e] = true, e) {
      case "console":
        !function () {
          if (!("console" in w)) {
            return
          }
          ["debug", "info", "warn", "error", "log", "assert"].forEach(function (e) {
            if (e in w.console) {
              $_564_index.c(w.console, e, function (t) {
                return function () {
                  for (var n = [], r = 0; r < arguments.length; r++) {
                    n[r] = arguments[r]
                  }
                  k("console", {
                    args: n,
                    level: e
                  })
                  if (t) {
                    Function.prototype.apply.call(t, w.console, n)
                  }
                }
              })
            }
          })
        }()
        break
      case "dom":
        !function () {
          if (!("document" in w)) {
            return
          }
          var e = k.bind(null, "dom")
          var t = I(e, true)
          w.document.addEventListener("click", t, false)
          w.document.addEventListener("keypress", t, false);
          ["EventTarget", "Node"].forEach(function (t) {
            var n = w[t] && w[t].prototype
            if (n && n.hasOwnProperty && n.hasOwnProperty("addEventListener")) {
              $_564_index.c(n, "addEventListener", function (t) {
                return function (n, r, i) {
                  if ("click" === n || "keypress" == n) {
                    try {
                      var o = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {}
                      var a = o[n] = o[n] || {
                        refCount: 0
                      }
                      if (!a.handler) {
                        var s = I(e)
                        a.handler = s
                        t.call(this, n, s, i)
                      }
                      a.refCount += 1
                    } catch (c) {}
                  }
                  return t.call(this, n, r, i)
                }
              })
              $_564_index.c(n, "removeEventListener", function (e) {
                return function (t, n, r) {
                  if ("click" === t || "keypress" == t) {
                    try {
                      var i = this.__sentry_instrumentation_handlers__ || {}
                      var o = i[t]
                      if (o) {
                        o.refCount -= 1
                        if (o.refCount <= 0) {
                          e.call(this, t, o.handler, r)
                          o.handler = undefined
                          delete i[t]
                        }
                        if (0 === Object.keys(i).length) {
                          delete this.__sentry_instrumentation_handlers__
                        }
                      }
                    } catch (a) {}
                  }
                  return e.call(this, t, n, r)
                }
              })
            }
          })
        }()
        break
      case "xhr":
        !function () {
          if (!("XMLHttpRequest" in w)) {
            return
          }
          var e = []
          var t = []
          var /* [auto-meaningful-name] */XMLHttpRequest$prototype = XMLHttpRequest.prototype
          $_564_index.c(XMLHttpRequest$prototype, "open", function (n) {
            return function () {
              for (var r = [], i = 0; i < arguments.length; i++) {
                r[i] = arguments[i]
              }
              var o = this
              var a = r[1]
              o.__sentry_xhr__ = {
                method: $_306.k(r[0]) ? r[0].toUpperCase() : r[0],
                url: r[1]
              }
              if ($_306.k(a) && "POST" === o.__sentry_xhr__.method && a.match(/sentry_key/)) {
                o.__sentry_own_request__ = true
              }
              var s = function () {
                if (4 === o.readyState) {
                  try {
                    if (o.__sentry_xhr__) {
                      o.__sentry_xhr__.status_code = o.status
                    }
                  } catch (a) {}
                  try {
                    var n = e.indexOf(o)
                    if (-1 !== n) {
                      e.splice(n)
                      var i = t.splice(n)[0]
                      if (o.__sentry_xhr__ && undefined !== i[0]) {
                        o.__sentry_xhr__.body = i[0]
                      }
                    }
                  } catch (a) {}
                  k("xhr", {
                    args: r,
                    endTimestamp: Date.now(),
                    startTimestamp: Date.now(),
                    xhr: o
                  })
                }
              }
              if ("onreadystatechange" in o && "function" === typeof o.onreadystatechange) {
                $_564_index.c(o, "onreadystatechange", function (e) {
                  return function () {
                    for (var t = [], n = 0; n < arguments.length; n++) {
                      t[n] = arguments[n]
                    }
                    s()
                    return e.apply(o, t)
                  }
                })
              } else {
                o.addEventListener("readystatechange", s)
              }
              return n.apply(o, r)
            }
          })
          $_564_index.c(XMLHttpRequest$prototype, "send", function (n) {
            return function () {
              for (var r = [], i = 0; i < arguments.length; i++) {
                r[i] = arguments[i]
              }
              e.push(this)
              t.push(r)
              k("xhr", {
                args: r,
                startTimestamp: Date.now(),
                xhr: this
              })
              return n.apply(this, r)
            }
          })
        }()
        break
      case "fetch":
        !function () {
          if (!function () {
            if (!v()) {
              return false
            }
            var e = $_395.e()
            if (m(e.fetch)) {
              return true
            }
            var t = false
            var /* [auto-meaningful-name] */e$document = e.document
            if (e$document && "function" === typeof e$document.createElement) {
              try {
                var r = e$document.createElement("iframe")
                r.hidden = true
                e$document.head.appendChild(r)
                if (r.contentWindow && r.contentWindow.fetch) {
                  t = m(r.contentWindow.fetch)
                }
                e$document.head.removeChild(r)
              } catch (i) {
                $_918.a.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", i)
              }
            }
            return t
          }()) {
            return
          }
          $_564_index.c(w, "fetch", function (e) {
            return function () {
              for (var t = [], n = 0; n < arguments.length; n++) {
                t[n] = arguments[n]
              }
              var r = {
                args: t,
                fetchData: {
                  method: S(t),
                  url: T(t)
                },
                startTimestamp: Date.now()
              }
              k("fetch", $$_799_38.a({}, r))
              return e.apply(w, t).then(function (e) {
                k("fetch", $$_799_38.a($$_799_38.a({}, r), {
                  endTimestamp: Date.now(),
                  response: e
                }))
                return e
              }, function (e) {
                k("fetch", $$_799_38.a($$_799_38.a({}, r), {
                  endTimestamp: Date.now(),
                  error: e
                }))
                throw e
              })
            }
          })
        }()
        break
      case "history":
        !function () {
          if (!function () {
            var e = $_395.e()
            var /* [auto-meaningful-name] */e$chrome = e.chrome
            var n = e$chrome && e$chrome.app && e$chrome.app.runtime
            var r = "history" in e && !!e.history.pushState && !!e.history.replaceState
            return !n && r
          }()) {
            return
          }
          var /* [auto-meaningful-name] */w$onpopstate = w.onpopstate
          function t(e) {
            return function () {
              for (var t = [], n = 0; n < arguments.length; n++) {
                t[n] = arguments[n]
              }
              var r = t.length > 2 ? t[2] : undefined
              if (r) {
                var i = b
                var o = String(r)
                b = o
                k("history", {
                  from: i,
                  to: o
                })
              }
              return e.apply(this, t)
            }
          }
          w.onpopstate = function () {
            for (var t = [], n = 0; n < arguments.length; n++) {
              t[n] = arguments[n]
            }
            var /* [auto-meaningful-name] */w$location$href = w.location.href
            var i = b
            b = w$location$href
            k("history", {
              from: i,
              to: w$location$href
            })
            if (w$onpopstate) {
              try {
                return w$onpopstate.apply(this, t)
              } catch (o) {}
            }
          }
          $_564_index.c(w.history, "pushState", t)
          $_564_index.c(w.history, "replaceState", t)
        }()
        break
      case "error":
        R = w.onerror
        w.onerror = function (e, t, n, r, i) {
          k("error", {
            column: r,
            error: i,
            line: n,
            msg: e,
            url: t
          })
          return !!R && R.apply(this, arguments)
        }
        break
      case "unhandledrejection":
        F = w.onunhandledrejection
        w.onunhandledrejection = function (e) {
          k("unhandledrejection", e)
          return !F || F.apply(this, arguments)
        }
        break
      default:
        $_918.a.warn("unknown instrumentation type:", e)
    }
  }
}
function O(e) {
  if (e && "string" === typeof e.type && "function" === typeof e.callback) {
    E[e.type] = E[e.type] || []
    E[e.type].push(e.callback)
    C(e.type)
  }
}
function k(e, t) {
  var n
  var /* [auto-meaningful-name] */i$return
  if (e && E[e]) {
    try {
      for (var i = $$_799_38.g(E[e] || []), a = i.next(); !a.done; a = i.next()) {
        var /* [auto-meaningful-name] */a$value = a.value
        try {
          a$value(t)
        } catch (c) {
          $_918.a.error("Error while triggering instrumentation handler.\nType: " + e + "\nName: " + $_1008.a(a$value) + "\nError: " + c)
        }
      }
    } catch (l) {
      n = {
        error: l
      }
    } finally {
      try {
        if (a && !a.done && (i$return = i.return)) {
          i$return.call(i)
        }
      } finally {
        if (n) {
          throw n.error
        }
      }
    }
  }
}
function S(e) {
  if (undefined === e) {
    e = []
  }
  return "Request" in w && $_306.g(e[0], Request) && e[0].method ? String(e[0].method).toUpperCase() : e[1] && e[1].method ? String(e[1].method).toUpperCase() : "GET"
}
function T(e) {
  if (undefined === e) {
    e = []
  }
  return "string" === typeof e[0] ? e[0] : "Request" in w && $_306.g(e[0], Request) ? e[0].url : String(e[0])
}
var B
var D
function I(e, t) {
  if (undefined === t) {
    t = false
  }
  return function (n) {
    if (n && D !== n && !function (e) {
      if ("keypress" !== e.type) {
        return false
      }
      try {
        var /* [auto-meaningful-name] */e$target = e.target
        if (!e$target || !e$target.tagName) {
          return true
        }
        if ("INPUT" === e$target.tagName || "TEXTAREA" === e$target.tagName || e$target.isContentEditable) {
          return false
        }
      } catch (n) {}
      return true
    }(n)) {
      var r = "keypress" === n.type ? "input" : n.type
      if (undefined === B || function (e, t) {
        if (!e) {
          return true
        }
        if (e.type !== t.type) {
          return true
        }
        try {
          if (e.target !== t.target) {
            return true
          }
        } catch (n) {}
        return false
      }(D, n)) {
        e({
          event: n,
          name: r,
          global: t
        })
        D = n
      }
      clearTimeout(B)
      B = w.setTimeout(function () {
        B = undefined
      }, 1e3)
    }
  }
}
var R = null
var F = null
export { v }
export { m }
export { y }
export { O }
