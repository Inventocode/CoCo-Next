/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：50
 */

"use strict"

export { m as a }
var r
import * as i from "./18"
import * as o from "./9"
import * as a from "./8"
import * as s from "./14"
import * as /* [auto-meaningful-name] */$_17_index from "./17/index"
import * as l from "./34"
import * as c from "./41"
var f = s.e()
var d = {}
var p = {}
function h(e) {
  if (!p[e]) {
    switch (p[e] = true, e) {
      case "console":
        !function () {
          if (!("console" in f)) {
            return
          }
          ["debug", "info", "warn", "error", "log", "assert"].forEach(function (e) {
            if (e in f.console) {
              $_17_index.c(f.console, e, function (t) {
                return function () {
                  for (var n = [], r = 0; r < arguments.length; r++) {
                    n[r] = arguments[r]
                  }
                  v("console", {
                    args: n,
                    level: e
                  })
                  if (t) {
                    Function.prototype.apply.call(t, f.console, n)
                  }
                }
              })
            }
          })
        }()
        break
      case "dom":
        !function () {
          if (!("document" in f)) {
            return
          }
          var e = v.bind(null, "dom")
          var t = E(e, true)
          f.document.addEventListener("click", t, false)
          f.document.addEventListener("keypress", t, false);
          ["EventTarget", "Node"].forEach(function (t) {
            var n = f[t] && f[t].prototype
            if (n && n.hasOwnProperty && n.hasOwnProperty("addEventListener")) {
              $_17_index.c(n, "addEventListener", function (t) {
                return function (n, r, i) {
                  if ("click" === n || "keypress" == n) {
                    try {
                      var o = this
                      var a = o.__sentry_instrumentation_handlers__ = o.__sentry_instrumentation_handlers__ || {}
                      var s = a[n] = a[n] || {
                        refCount: 0
                      }
                      if (!s.handler) {
                        var u = E(e)
                        s.handler = u
                        t.call(this, n, u, i)
                      }
                      s.refCount += 1
                    } catch (l) {}
                  }
                  return t.call(this, n, r, i)
                }
              })
              $_17_index.c(n, "removeEventListener", function (e) {
                return function (t, n, r) {
                  if ("click" === t || "keypress" == t) {
                    try {
                      var i = this
                      var o = i.__sentry_instrumentation_handlers__ || {}
                      var a = o[t]
                      if (a) {
                        a.refCount -= 1
                        if (a.refCount <= 0) {
                          e.call(this, t, a.handler, r)
                          a.handler = undefined
                          delete o[t]
                        }
                        if (0 === Object.keys(o).length) {
                          delete i.__sentry_instrumentation_handlers__
                        }
                      }
                    } catch (s) {}
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
          if (!("XMLHttpRequest" in f)) {
            return
          }
          var e = []
          var t = []
          var /* [auto-meaningful-name] */XMLHttpRequest$prototype = XMLHttpRequest.prototype
          $_17_index.c(XMLHttpRequest$prototype, "open", function (n) {
            return function () {
              for (var r = [], i = 0; i < arguments.length; i++) {
                r[i] = arguments[i]
              }
              var a = this
              var s = r[1]
              a.__sentry_xhr__ = {
                method: o.k(r[0]) ? r[0].toUpperCase() : r[0],
                url: r[1]
              }
              if (o.k(s) && "POST" === a.__sentry_xhr__.method && s.match(/sentry_key/)) {
                a.__sentry_own_request__ = true
              }
              var l = function () {
                if (4 === a.readyState) {
                  try {
                    if (a.__sentry_xhr__) {
                      a.__sentry_xhr__.status_code = a.status
                    }
                  } catch (o) {}
                  try {
                    var n = e.indexOf(a)
                    if (-1 !== n) {
                      e.splice(n)
                      var i = t.splice(n)[0]
                      if (a.__sentry_xhr__ && undefined !== i[0]) {
                        a.__sentry_xhr__.body = i[0]
                      }
                    }
                  } catch (o) {}
                  v("xhr", {
                    args: r,
                    endTimestamp: Date.now(),
                    startTimestamp: Date.now(),
                    xhr: a
                  })
                }
              }
              if ("onreadystatechange" in a && "function" === typeof a.onreadystatechange) {
                $_17_index.c(a, "onreadystatechange", function (e) {
                  return function () {
                    for (var t = [], n = 0; n < arguments.length; n++) {
                      t[n] = arguments[n]
                    }
                    l()
                    return e.apply(a, t)
                  }
                })
              } else {
                a.addEventListener("readystatechange", l)
              }
              return n.apply(a, r)
            }
          })
          $_17_index.c(XMLHttpRequest$prototype, "send", function (n) {
            return function () {
              for (var r = [], i = 0; i < arguments.length; i++) {
                r[i] = arguments[i]
              }
              e.push(this)
              t.push(r)
              v("xhr", {
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
          if (!c.d()) {
            return
          }
          $_17_index.c(f, "fetch", function (e) {
            return function () {
              for (var t = [], n = 0; n < arguments.length; n++) {
                t[n] = arguments[n]
              }
              var r = {
                args: t,
                fetchData: {
                  method: y(t),
                  url: g(t)
                },
                startTimestamp: Date.now()
              }
              v("fetch", i.a({}, r))
              return e.apply(f, t).then(function (e) {
                v("fetch", i.a(i.a({}, r), {
                  endTimestamp: Date.now(),
                  response: e
                }))
                return e
              }, function (e) {
                v("fetch", i.a(i.a({}, r), {
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
          if (!c.c()) {
            return
          }
          var /* [auto-meaningful-name] */f$onpopstate = f.onpopstate
          function t(e) {
            return function () {
              for (var t = [], n = 0; n < arguments.length; n++) {
                t[n] = arguments[n]
              }
              var i = t.length > 2 ? t[2] : undefined
              if (i) {
                var o = r
                var a = String(i)
                r = a
                v("history", {
                  from: o,
                  to: a
                })
              }
              return e.apply(this, t)
            }
          }
          f.onpopstate = function () {
            for (var t = [], n = 0; n < arguments.length; n++) {
              t[n] = arguments[n]
            }
            var /* [auto-meaningful-name] */f$location$href = f.location.href
            var o = r
            r = f$location$href
            v("history", {
              from: o,
              to: f$location$href
            })
            if (f$onpopstate) {
              try {
                return f$onpopstate.apply(this, t)
              } catch (a) {}
            }
          }
          $_17_index.c(f.history, "pushState", t)
          $_17_index.c(f.history, "replaceState", t)
        }()
        break
      case "error":
        O = f.onerror
        f.onerror = function (e, t, n, r, i) {
          v("error", {
            column: r,
            error: i,
            line: n,
            msg: e,
            url: t
          })
          return !!O && O.apply(this, arguments)
        }
        break
      case "unhandledrejection":
        w = f.onunhandledrejection
        f.onunhandledrejection = function (e) {
          v("unhandledrejection", e)
          return !w || w.apply(this, arguments)
        }
        break
      default:
        a.a.warn("unknown instrumentation type:", e)
    }
  }
}
function m(e) {
  if (e && "string" === typeof e.type && "function" === typeof e.callback) {
    d[e.type] = d[e.type] || []
    d[e.type].push(e.callback)
    h(e.type)
  }
}
function v(e, t) {
  var n
  var /* [auto-meaningful-name] */o$return
  if (e && d[e]) {
    try {
      for (var o = i.d(d[e] || []), s = o.next(); !s.done; s = o.next()) {
        var /* [auto-meaningful-name] */s$value = s.value
        try {
          s$value(t)
        } catch (c) {
          a.a.error("Error while triggering instrumentation handler.\nType: " + e + "\nName: " + l.a(s$value) + "\nError: " + c)
        }
      }
    } catch (f) {
      n = {
        error: f
      }
    } finally {
      try {
        if (s && !s.done && (o$return = o.return)) {
          o$return.call(o)
        }
      } finally {
        if (n) {
          throw n.error
        }
      }
    }
  }
}
function y(e) {
  if (undefined === e) {
    e = []
  }
  return "Request" in f && o.g(e[0], Request) && e[0].method ? String(e[0].method).toUpperCase() : e[1] && e[1].method ? String(e[1].method).toUpperCase() : "GET"
}
function g(e) {
  if (undefined === e) {
    e = []
  }
  return "string" === typeof e[0] ? e[0] : "Request" in f && o.g(e[0], Request) ? e[0].url : String(e[0])
}
var b
var _
function E(e, t) {
  if (undefined === t) {
    t = false
  }
  return function (n) {
    if (n && _ !== n && !function (e) {
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
      if (undefined === b || function (e, t) {
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
      }(_, n)) {
        e({
          event: n,
          name: r,
          global: t
        })
        _ = n
      }
      clearTimeout(b)
      b = f.setTimeout(function () {
        b = undefined
      }, 1e3)
    }
  }
}
var O = null
var w = null
export default m
