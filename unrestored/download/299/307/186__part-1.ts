/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：186__part-1
 */

"use strict"

var r
import * as /* [auto-meaningful-name] */Module_5 from /* 5 */"./5"
import * as /* [auto-meaningful-name] */Module_37 from /* 37 */"./37"
import * as /* [auto-meaningful-name] */Module_22 from /* 22 */"./22"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"./11"
import * as /* [auto-meaningful-name] */Module_12 from /* 12 */"./12"
import * as /* [auto-meaningful-name] */Module_23 from /* 23 */"./23"
import * as /* [auto-meaningful-name] */Module_88 from /* 88 */"./88"
import * as /* [auto-meaningful-name] */Module_127 from /* 127 */"./127"
var p = Module_22.a()
var d = {}
var h = {}
function g(e) {
  if (!h[e]) {
    switch (h[e] = true, e) {
      case "console":
        !function () {
          if (!("console" in p)) {
            return
          }
          Module_12.a.forEach(function (e) {
            if (e in p.console) {
              Module_23.e(p.console, e, function (t) {
                return function () {
                  for (var n = [], r = 0; r < arguments.length; r++) {
                    n[r] = arguments[r]
                  }
                  v("console", {
                    args: n,
                    level: e
                  })
                  if (t) {
                    t.apply(p.console, n)
                  }
                }
              })
            }
          })
        }()
        break
      case "dom":
        !function () {
          if (!("document" in p)) {
            return
          }
          var e = v.bind(null, "dom")
          var t = k(e, true)
          p.document.addEventListener("click", t, false)
          p.document.addEventListener("keypress", t, false);
          ["EventTarget", "Node"].forEach(function (t) {
            var n = p[t] && p[t].prototype
            if (n && n.hasOwnProperty && n.hasOwnProperty("addEventListener")) {
              Module_23.e(n, "addEventListener", function (t) {
                return function (n, r, i) {
                  if ("click" === n || "keypress" == n) {
                    try {
                      var o = this
                      var a = o.__sentry_instrumentation_handlers__ = o.__sentry_instrumentation_handlers__ || {}
                      var s = a[n] = a[n] || {
                        refCount: 0
                      }
                      if (!s.handler) {
                        var u = k(e)
                        s.handler = u
                        t.call(this, n, u, i)
                      }
                      s.refCount += 1
                    } catch (c) {}
                  }
                  return t.call(this, n, r, i)
                }
              })
              Module_23.e(n, "removeEventListener", function (e) {
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
          if (!("XMLHttpRequest" in p)) {
            return
          }
          var /* [auto-meaningful-name] */XMLHttpRequest$prototype = XMLHttpRequest.prototype
          Module_23.e(XMLHttpRequest$prototype, "open", function (e) {
            return function () {
              for (var t = [], n = 0; n < arguments.length; n++) {
                t[n] = arguments[n]
              }
              var r = this
              var i = t[1]
              var o = r.__sentry_xhr__ = {
                method: Module_11.l(t[0]) ? t[0].toUpperCase() : t[0],
                url: t[1]
              }
              if (Module_11.l(i) && "POST" === o.method && i.match(/sentry_key/)) {
                r.__sentry_own_request__ = true
              }
              var a = function () {
                if (4 === r.readyState) {
                  try {
                    o.status_code = r.status
                  } catch (e) {}
                  v("xhr", {
                    args: t,
                    endTimestamp: Date.now(),
                    startTimestamp: Date.now(),
                    xhr: r
                  })
                }
              }
              if ("onreadystatechange" in r && "function" === typeof r.onreadystatechange) {
                Module_23.e(r, "onreadystatechange", function (e) {
                  return function () {
                    for (var t = [], n = 0; n < arguments.length; n++) {
                      t[n] = arguments[n]
                    }
                    a()
                    return e.apply(r, t)
                  }
                })
              } else {
                r.addEventListener("readystatechange", a)
              }
              return e.apply(r, t)
            }
          })
          Module_23.e(XMLHttpRequest$prototype, "send", function (e) {
            return function () {
              for (var t = [], n = 0; n < arguments.length; n++) {
                t[n] = arguments[n]
              }
              if (this.__sentry_xhr__ && undefined !== t[0]) {
                this.__sentry_xhr__.body = t[0]
              }
              v("xhr", {
                args: t,
                startTimestamp: Date.now(),
                xhr: this
              })
              return e.apply(this, t)
            }
          })
        }()
        break
      case "fetch":
        !function () {
          if (!Module_127.d()) {
            return
          }
          Module_23.e(p, "fetch", function (e) {
            return function () {
              for (var t = [], n = 0; n < arguments.length; n++) {
                t[n] = arguments[n]
              }
              var r = {
                args: t,
                fetchData: {
                  method: y(t),
                  url: _(t)
                },
                startTimestamp: Date.now()
              }
              v("fetch", Module_5.a({}, r))
              return e.apply(p, t).then(function (e) {
                v("fetch", Module_5.a(Module_5.a({}, r), {
                  endTimestamp: Date.now(),
                  response: e
                }))
                return e
              }, function (e) {
                v("fetch", Module_5.a(Module_5.a({}, r), {
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
          if (!Module_127.c()) {
            return
          }
          var /* [auto-meaningful-name] */p$onpopstate = p.onpopstate
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
          p.onpopstate = function () {
            for (var t = [], n = 0; n < arguments.length; n++) {
              t[n] = arguments[n]
            }
            var /* [auto-meaningful-name] */p$location$href = p.location.href
            var o = r
            r = p$location$href
            v("history", {
              from: o,
              to: p$location$href
            })
            if (p$onpopstate) {
              try {
                return p$onpopstate.apply(this, t)
              } catch (a) {}
            }
          }
          Module_23.e(p.history, "pushState", t)
          Module_23.e(p.history, "replaceState", t)
        }()
        break
      case "error":
        O = p.onerror
        p.onerror = function (e, t, n, r, i) {
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
        E = p.onunhandledrejection
        p.onunhandledrejection = function (e) {
          v("unhandledrejection", e)
          return !E || E.apply(this, arguments)
        }
        break
      default:
        return void (Module_37.a && Module_12.c.warn("unknown instrumentation type:", e))
    }
  }
}
function m(e, t) {
  d[e] = d[e] || []
  d[e].push(t)
  g(e)
}
function v(e, t) {
  var n
  var /* [auto-meaningful-name] */a$return
  if (e && d[e]) {
    try {
      for (var a = Module_5.e(d[e] || []), s = a.next(); !s.done; s = a.next()) {
        var /* [auto-meaningful-name] */s$value = s.value
        try {
          s$value(t)
        } catch (f) {
          if (Module_37.a) {
            Module_12.c.error("Error while triggering instrumentation handler.\nType: " + e + "\nName: " + Module_88.b(s$value) + "\nError:", f)
          }
        }
      }
    } catch (p) {
      n = {
        error: p
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
function y(e) {
  if (undefined === e) {
    e = []
  }
  return "Request" in p && Module_11.g(e[0], Request) && e[0].method ? String(e[0].method).toUpperCase() : e[1] && e[1].method ? String(e[1].method).toUpperCase() : "GET"
}
function _(e) {
  if (undefined === e) {
    e = []
  }
  return "string" === typeof e[0] ? e[0] : "Request" in p && Module_11.g(e[0], Request) ? e[0].url : String(e[0])
}
var b
var w
var S = 1e3
function k(e, t) {
  if (undefined === t) {
    t = false
  }
  return function (n) {
    if (n && w !== n && !function (e) {
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
      }(w, n)) {
        e({
          event: n,
          name: r,
          global: t
        })
        w = n
      }
      clearTimeout(b)
      b = p.setTimeout(function () {
        b = undefined
      }, S)
    }
  }
}
var O = null
var E = null
export { m }
