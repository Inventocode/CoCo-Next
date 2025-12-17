/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1549
 */

"use strict"

export { A as a }
import * as /* [auto-meaningful-name] */$$_$$_1212_38 from "../../1212/38"
import * as /* [auto-meaningful-name] */$$_317 from "../317"
import * as /* [auto-meaningful-name] */$$_264 from "../264"
import * as /* [auto-meaningful-name] */$$_365 from "../365"
import * as /* [auto-meaningful-name] */$$_439_index from "../439/index"
import * as /* [auto-meaningful-name] */$_1007 from "./1007"
function u() {
  if (!("fetch" in $$_365.b())) {
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
function l(e) {
  return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
}
var f
var d = $$_365.b()
var h = {}
var p = {}
function _(e) {
  if (!p[e]) {
    switch (p[e] = true, e) {
      case "console":
        !function () {
          if (!("console" in d)) {
            return
          }
          ["debug", "info", "warn", "error", "log", "assert"].forEach(function (e) {
            if (e in d.console) {
              $$_439_index.b(d.console, e, function (t) {
                return function () {
                  for (var n = [], r = 0; r < arguments.length; r++) {
                    n[r] = arguments[r]
                  }
                  g("console", {
                    args: n,
                    level: e
                  })
                  if (t) {
                    Function.prototype.apply.call(t, d.console, n)
                  }
                }
              })
            }
          })
        }()
        break
      case "dom":
        !function () {
          if (!("document" in d)) {
            return
          }
          var e = g.bind(null, "dom")
          var t = w(e, true)
          d.document.addEventListener("click", t, false)
          d.document.addEventListener("keypress", t, false);
          ["EventTarget", "Node"].forEach(function (t) {
            var n = d[t] && d[t].prototype
            if (n && n.hasOwnProperty && n.hasOwnProperty("addEventListener")) {
              $$_439_index.b(n, "addEventListener", function (t) {
                return function (n, r, i) {
                  if ("click" === n || "keypress" == n) {
                    try {
                      var o = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {}
                      var a = o[n] = o[n] || {
                        refCount: 0
                      }
                      if (!a.handler) {
                        var s = w(e)
                        a.handler = s
                        t.call(this, n, s, i)
                      }
                      a.refCount += 1
                    } catch (c) {}
                  }
                  return t.call(this, n, r, i)
                }
              })
              $$_439_index.b(n, "removeEventListener", function (e) {
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
          if (!("XMLHttpRequest" in d)) {
            return
          }
          var e = []
          var t = []
          var /* [auto-meaningful-name] */XMLHttpRequest$prototype = XMLHttpRequest.prototype
          $$_439_index.b(XMLHttpRequest$prototype, "open", function (n) {
            return function () {
              for (var r = [], o = 0; o < arguments.length; o++) {
                r[o] = arguments[o]
              }
              var a = this
              var c = r[1]
              a.__sentry_xhr__ = {
                method: $$_317.h(r[0]) ? r[0].toUpperCase() : r[0],
                url: r[1]
              }
              if ($$_317.h(c) && "POST" === a.__sentry_xhr__.method && c.match(/sentry_key/)) {
                a.__sentry_own_request__ = true
              }
              var u = function () {
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
                  g("xhr", {
                    args: r,
                    endTimestamp: Date.now(),
                    startTimestamp: Date.now(),
                    xhr: a
                  })
                }
              }
              if ("onreadystatechange" in a && "function" === typeof a.onreadystatechange) {
                $$_439_index.b(a, "onreadystatechange", function (e) {
                  return function () {
                    for (var t = [], n = 0; n < arguments.length; n++) {
                      t[n] = arguments[n]
                    }
                    u()
                    return e.apply(a, t)
                  }
                })
              } else {
                a.addEventListener("readystatechange", u)
              }
              return n.apply(a, r)
            }
          })
          $$_439_index.b(XMLHttpRequest$prototype, "send", function (n) {
            return function () {
              for (var r = [], i = 0; i < arguments.length; i++) {
                r[i] = arguments[i]
              }
              e.push(this)
              t.push(r)
              g("xhr", {
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
            if (!u()) {
              return false
            }
            var e = $$_365.b()
            if (l(e.fetch)) {
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
                  t = l(r.contentWindow.fetch)
                }
                e$document.head.removeChild(r)
              } catch (i) {
                $$_264.a.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", i)
              }
            }
            return t
          }()) {
            return
          }
          $$_439_index.b(d, "fetch", function (e) {
            return function () {
              for (var t = [], n = 0; n < arguments.length; n++) {
                t[n] = arguments[n]
              }
              var i = {
                args: t,
                fetchData: {
                  method: v(t),
                  url: m(t)
                },
                startTimestamp: Date.now()
              }
              g("fetch", $$_$$_1212_38.a({}, i))
              return e.apply(d, t).then(function (e) {
                g("fetch", $$_$$_1212_38.a($$_$$_1212_38.a({}, i), {
                  endTimestamp: Date.now(),
                  response: e
                }))
                return e
              }, function (e) {
                g("fetch", $$_$$_1212_38.a($$_$$_1212_38.a({}, i), {
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
            var e = $$_365.b()
            var /* [auto-meaningful-name] */e$chrome = e.chrome
            var n = e$chrome && e$chrome.app && e$chrome.app.runtime
            var r = "history" in e && !!e.history.pushState && !!e.history.replaceState
            return !n && r
          }()) {
            return
          }
          var /* [auto-meaningful-name] */d$onpopstate = d.onpopstate
          function t(e) {
            return function () {
              for (var t = [], n = 0; n < arguments.length; n++) {
                t[n] = arguments[n]
              }
              var r = t.length > 2 ? t[2] : undefined
              if (r) {
                var i = f
                var o = String(r)
                f = o
                g("history", {
                  from: i,
                  to: o
                })
              }
              return e.apply(this, t)
            }
          }
          d.onpopstate = function () {
            for (var t = [], n = 0; n < arguments.length; n++) {
              t[n] = arguments[n]
            }
            var /* [auto-meaningful-name] */d$location$href = d.location.href
            var i = f
            f = d$location$href
            g("history", {
              from: i,
              to: d$location$href
            })
            if (d$onpopstate) {
              try {
                return d$onpopstate.apply(this, t)
              } catch (o) {}
            }
          }
          $$_439_index.b(d.history, "pushState", t)
          $$_439_index.b(d.history, "replaceState", t)
        }()
        break
      case "error":
        E = d.onerror
        d.onerror = function (e, t, n, r, i) {
          g("error", {
            column: r,
            error: i,
            line: n,
            msg: e,
            url: t
          })
          return !!E && E.apply(this, arguments)
        }
        break
      case "unhandledrejection":
        x = d.onunhandledrejection
        d.onunhandledrejection = function (e) {
          g("unhandledrejection", e)
          return !x || x.apply(this, arguments)
        }
        break
      default:
        $$_264.a.warn("unknown instrumentation type:", e)
    }
  }
}
function A(e) {
  if (e && "string" === typeof e.type && "function" === typeof e.callback) {
    h[e.type] = h[e.type] || []
    h[e.type].push(e.callback)
    _(e.type)
  }
}
function g(e, t) {
  var n
  var /* [auto-meaningful-name] */a$return
  if (e && h[e]) {
    try {
      for (var a = $$_$$_1212_38.g(h[e] || []), s = a.next(); !s.done; s = a.next()) {
        var /* [auto-meaningful-name] */s$value = s.value
        try {
          s$value(t)
        } catch (l) {
          $$_264.a.error("Error while triggering instrumentation handler.\nType: " + e + "\nName: " + $_1007.a(s$value) + "\nError: " + l)
        }
      }
    } catch (f) {
      n = {
        error: f
      }
    } finally {
      try {
        if (s && !s.done && (a$return = a.return)) {
          a$return.call(a)
        }
      } finally {
        if (n) {
          throw n.error
        }
      }
    }
  }
}
function v(e) {
  if (undefined === e) {
    e = []
  }
  return "Request" in d && $$_317.d(e[0], Request) && e[0].method ? String(e[0].method).toUpperCase() : e[1] && e[1].method ? String(e[1].method).toUpperCase() : "GET"
}
function m(e) {
  if (undefined === e) {
    e = []
  }
  return "string" === typeof e[0] ? e[0] : "Request" in d && $$_317.d(e[0], Request) ? e[0].url : String(e[0])
}
var y
var b
function w(e, t) {
  if (undefined === t) {
    t = false
  }
  return function (n) {
    if (n && b !== n && !function (e) {
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
      if (undefined === y || function (e, t) {
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
      }(b, n)) {
        e({
          event: n,
          name: r,
          global: t
        })
        b = n
      }
      clearTimeout(y)
      y = d.setTimeout(function () {
        y = undefined
      }, 1e3)
    }
  }
}
var E = null
var x = null
export default A
