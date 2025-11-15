/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1184
 */

"use strict"

export { je as a }
var r = {}
Object.defineProperty(r, "FunctionToString", {
  get: function () {
    return a
  }
})
Object.defineProperty(r, "InboundFilters", {
  get: function () {
    return h
  }
})
var /* [auto-meaningful-name] */Function$prototype$toString
import /* [auto-meaningful-name] */$$_787_39 = require("../787/39")
var a = function () {
  function e() {
    this.name = e.id
  }
  e.prototype.setupOnce = function () {
    Function$prototype$toString = Function.prototype.toString
    Function.prototype.toString = function () {
      for (var e = [], t = 0; t < arguments.length; t++) {
        e[t] = arguments[t]
      }
      var n = this.__sentry_original__ || this
      return Function$prototype$toString.apply(n, e)
    }
  }
  e.id = "FunctionToString"
  return e
}()
import /* [auto-meaningful-name] */$_1027 = require("./1027")
import /* [auto-meaningful-name] */$$_340_2592_index = require("../340/2592/index")
import /* [auto-meaningful-name] */$_905 = require("./905")
import /* [auto-meaningful-name] */$_394 = require("./394")
import /* [auto-meaningful-name] */$_737 = require("./737")
var d = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/]
var h = function () {
  function e(t) {
    if (undefined === t) {
      t = {}
    }
    this._options = t
    this.name = e.id
  }
  e.prototype.setupOnce = function () {
    $_1027.b(function (t) {
      var n = $$_340_2592_index.a()
      if (!n) {
        return t
      }
      var r = n.getIntegration(e)
      if (r) {
        var i = n.getClient()
        var o = i ? i.getOptions() : {}
        var a = "function" === typeof r._mergeOptions ? r._mergeOptions(o) : {}
        return "function" !== typeof r._shouldDropEvent ? t : r._shouldDropEvent(t, a) ? null : t
      }
      return t
    })
  }
  e.prototype._shouldDropEvent = function (e, t) {
    return this._isSentryError(e, t) ? ($_905.a.warn("Event dropped due to being internal Sentry Error.\nEvent: " + $_394.d(e)), true) : this._isIgnoredError(e, t) ? ($_905.a.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + $_394.d(e)), true) : this._isDeniedUrl(e, t) ? ($_905.a.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: " + $_394.d(e) + ".\nUrl: " + this._getEventFilterUrl(e)), true) : !this._isAllowedUrl(e, t) && ($_905.a.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: " + $_394.d(e) + ".\nUrl: " + this._getEventFilterUrl(e)), true)
  }
  e.prototype._isSentryError = function (e, t) {
    if (!t.ignoreInternal) {
      return false
    }
    try {
      return e && e.exception && e.exception.values && e.exception.values[0] && "SentryError" === e.exception.values[0].type || false
    } catch (n) {
      return false
    }
  }
  e.prototype._isIgnoredError = function (e, t) {
    return !(!t.ignoreErrors || !t.ignoreErrors.length) && this._getPossibleEventMessages(e).some(function (e) {
      return t.ignoreErrors.some(function (t) {
        return $_737.a(e, t)
      })
    })
  }
  e.prototype._isDeniedUrl = function (e, t) {
    if (!t.denyUrls || !t.denyUrls.length) {
      return false
    }
    var n = this._getEventFilterUrl(e)
    return !!n && t.denyUrls.some(function (e) {
      return $_737.a(n, e)
    })
  }
  e.prototype._isAllowedUrl = function (e, t) {
    if (!t.allowUrls || !t.allowUrls.length) {
      return true
    }
    var n = this._getEventFilterUrl(e)
    return !n || t.allowUrls.some(function (e) {
      return $_737.a(n, e)
    })
  }
  e.prototype._mergeOptions = function (e) {
    if (undefined === e) {
      e = {}
    }
    return {
      allowUrls: $$_787_39.f(this._options.whitelistUrls || [], this._options.allowUrls || [], e.whitelistUrls || [], e.allowUrls || []),
      denyUrls: $$_787_39.f(this._options.blacklistUrls || [], this._options.denyUrls || [], e.blacklistUrls || [], e.denyUrls || []),
      ignoreErrors: $$_787_39.f(this._options.ignoreErrors || [], e.ignoreErrors || [], d),
      ignoreInternal: "undefined" === typeof this._options.ignoreInternal || this._options.ignoreInternal
    }
  }
  e.prototype._getPossibleEventMessages = function (e) {
    if (e.message) {
      return [e.message]
    }
    if (e.exception) {
      try {
        var t = e.exception.values && e.exception.values[0] || {}
        var /* [auto-meaningful-name] */t$type = t.type
        var r = undefined === t$type ? "" : t$type
        var /* [auto-meaningful-name] */t$value = t.value
        var o = undefined === t$value ? "" : t$value
        return ["" + o, r + ": " + o]
      } catch (a) {
        $_905.a.error("Cannot extract message for event " + $_394.d(e))
        return []
      }
    }
    return []
  }
  e.prototype._getLastValidUrl = function (e) {
    var t
    var n
    if (undefined === e) {
      e = []
    }
    for (var r = e.length - 1; r >= 0; r--) {
      var i = e[r]
      if ("<anonymous>" !== (null === (t = i) || undefined === t ? undefined : t.filename) && "[native code]" !== (null === (n = i) || undefined === n ? undefined : n.filename)) {
        return i.filename || null
      }
    }
    return null
  }
  e.prototype._getEventFilterUrl = function (e) {
    try {
      if (e.stacktrace) {
        var /* [auto-meaningful-name] */e$stacktrace$frames = e.stacktrace.frames
        return this._getLastValidUrl(e$stacktrace$frames)
      }
      if (e.exception) {
        var n = e.exception.values && e.exception.values[0].stacktrace && e.exception.values[0].stacktrace.frames
        return this._getLastValidUrl(n)
      }
      return null
    } catch (r) {
      $_905.a.error("Cannot extract url for event " + $_394.d(e))
      return null
    }
  }
  e.id = "InboundFilters"
  return e
}()
import /* [auto-meaningful-name] */$_915 = require("./915")
import /* [auto-meaningful-name] */$_306 = require("./306")
import /* [auto-meaningful-name] */$_561_index = require("./561/index")
import /* [auto-meaningful-name] */$_987 = require("./987")
function v() {
  if (!("fetch" in $_394.e())) {
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
var w = $_394.e()
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
              $_561_index.c(w.console, e, function (t) {
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
              $_561_index.c(n, "addEventListener", function (t) {
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
              $_561_index.c(n, "removeEventListener", function (e) {
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
          $_561_index.c(XMLHttpRequest$prototype, "open", function (n) {
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
                $_561_index.c(o, "onreadystatechange", function (e) {
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
          $_561_index.c(XMLHttpRequest$prototype, "send", function (n) {
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
            var e = $_394.e()
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
                $_905.a.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", i)
              }
            }
            return t
          }()) {
            return
          }
          $_561_index.c(w, "fetch", function (e) {
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
              k("fetch", $$_787_39.a({}, r))
              return e.apply(w, t).then(function (e) {
                k("fetch", $$_787_39.a($$_787_39.a({}, r), {
                  endTimestamp: Date.now(),
                  response: e
                }))
                return e
              }, function (e) {
                k("fetch", $$_787_39.a($$_787_39.a({}, r), {
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
            var e = $_394.e()
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
          $_561_index.c(w.history, "pushState", t)
          $_561_index.c(w.history, "replaceState", t)
        }()
        break
      case "error":
        F = w.onerror
        w.onerror = function (e, t, n, r, i) {
          k("error", {
            column: r,
            error: i,
            line: n,
            msg: e,
            url: t
          })
          return !!F && F.apply(this, arguments)
        }
        break
      case "unhandledrejection":
        R = w.onunhandledrejection
        w.onunhandledrejection = function (e) {
          k("unhandledrejection", e)
          return !R || R.apply(this, arguments)
        }
        break
      default:
        $_905.a.warn("unknown instrumentation type:", e)
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
      for (var i = $$_787_39.g(E[e] || []), a = i.next(); !a.done; a = i.next()) {
        var /* [auto-meaningful-name] */a$value = a.value
        try {
          a$value(t)
        } catch (c) {
          $_905.a.error("Error while triggering instrumentation handler.\nType: " + e + "\nName: " + $_987.a(a$value) + "\nError: " + c)
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
var F = null
var R = null
import /* [auto-meaningful-name] */$_2620 = require("./2620")
var N = Object.setPrototypeOf || ({
  __proto__: []
} instanceof Array ? function (e, t) {
  e.__proto__ = t
  return e
} : function (e, t) {
  for (var n in t) if (!e.hasOwnProperty(n)) {
    e[n] = t[n]
  }
  return e
})
var M = function (e) {
  function t(t) {
    var /* [auto-meaningful-name] */this$constructor = this.constructor
    var r = e.call(this, t) || this
    r.message = t
    r.name = this$constructor.prototype.constructor.name
    N(r, this$constructor.prototype)
    return r
  }
  $$_787_39.c(t, e)
  return t
}(Error)
var j = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/
var L = function () {
  function e(e) {
    if ("string" === typeof e) {
      this._fromString(e)
    } else {
      this._fromComponents(e)
    }
    this._validate()
  }
  e.prototype.toString = function (e) {
    if (undefined === e) {
      e = false
    }
    var t = this
    var /* [auto-meaningful-name] */t$host = t.host
    var /* [auto-meaningful-name] */t$path = t.path
    var /* [auto-meaningful-name] */t$pass = t.pass
    var /* [auto-meaningful-name] */t$port = t.port
    var /* [auto-meaningful-name] */t$projectId = t.projectId
    return t.protocol + "://" + t.publicKey + (e && t$pass ? ":" + t$pass : "") + "@" + t$host + (t$port ? ":" + t$port : "") + "/" + (t$path ? t$path + "/" : t$path) + t$projectId
  }
  e.prototype._fromString = function (e) {
    var t = j.exec(e)
    if (!t) {
      throw new M("Invalid Dsn")
    }
    var n = $$_787_39.d(t.slice(1), 6)
    var r = n[0]
    var i = n[1]
    var a = n[2]
    var s = undefined === a ? "" : a
    var c = n[3]
    var u = n[4]
    var l = undefined === u ? "" : u
    var f = ""
    var d = n[5]
    var h = d.split("/")
    if (h.length > 1) {
      f = h.slice(0, -1).join("/")
      d = h.pop()
    }
    if (d) {
      var p = d.match(/^\d+/)
      if (p) {
        d = p[0]
      }
    }
    this._fromComponents({
      host: c,
      pass: s,
      path: f,
      projectId: d,
      port: l,
      protocol: r,
      publicKey: i
    })
  }
  e.prototype._fromComponents = function (e) {
    if ("user" in e && !("publicKey" in e)) {
      e.publicKey = e.user
    }
    this.user = e.publicKey || ""
    this.protocol = e.protocol
    this.publicKey = e.publicKey || ""
    this.pass = e.pass || ""
    this.host = e.host
    this.port = e.port || ""
    this.path = e.path || ""
    this.projectId = e.projectId
  }
  e.prototype._validate = function () {
    var e = this;
    ["protocol", "publicKey", "host", "projectId"].forEach(function (t) {
      if (!e[t]) {
        throw new M("Invalid Dsn: " + t + " missing")
      }
    })
    if (!this.projectId.match(/^\d+$/)) {
      throw new M("Invalid Dsn: Invalid projectId " + this.projectId)
    }
    if ("http" !== this.protocol && "https" !== this.protocol) {
      throw new M("Invalid Dsn: Invalid protocol " + this.protocol)
    }
    if (this.port && isNaN(parseInt(this.port, 10))) {
      throw new M("Invalid Dsn: Invalid port " + this.port)
    }
  }
  return e
}()
import /* [auto-meaningful-name] */$_2587 = require("./2587")
var H = []
function V(e) {
  return e.reduce(function (e, t) {
    if (e.every(function (e) {
      return t.name !== e.name
    })) {
      e.push(t)
    }
    return e
  }, [])
}
function G(e) {
  var t = {};
  (function (e) {
    var t = e.defaultIntegrations && $$_787_39.f(e.defaultIntegrations) || []
    var /* [auto-meaningful-name] */e$integrations = e.integrations
    var r = $$_787_39.f(V(t))
    if (Array.isArray(e$integrations)) {
      r = $$_787_39.f(r.filter(function (e) {
        return e$integrations.every(function (t) {
          return t.name !== e.name
        })
      }), V(e$integrations))
    } else {
      if ("function" === typeof e$integrations) {
        r = e$integrations(r)
        r = Array.isArray(r) ? r : [r]
      }
    }
    var i = r.map(function (e) {
      return e.name
    })
    if (-1 !== i.indexOf("Debug")) {
      r.push.apply(r, $$_787_39.f(r.splice(i.indexOf("Debug"), 1)))
    }
    return r
  })(e).forEach(function (e) {
    t[e.name] = e;
    (function (e) {
      if (-1 === H.indexOf(e.name)) {
        e.setupOnce($_1027.b, $$_340_2592_index.a)
        H.push(e.name)
        $_905.a.log("Integration installed: " + e.name)
      }
    })(e)
  })
  Object.defineProperty(t, "initialized", {
    value: true
  })
  return t
}
var z
var Q = function () {
  function e(e, t) {
    this._integrations = {}
    this._numProcessing = 0
    this._backend = new e(t)
    this._options = t
    if (t.dsn) {
      this._dsn = new L(t.dsn)
    }
  }
  e.prototype.captureException = function (e, t, n) {
    var r = this
    var i = t && t.event_id
    this._process(this._getBackend().eventFromException(e, t).then(function (e) {
      return r._captureEvent(e, t, n)
    }).then(function (e) {
      i = e
    }))
    return i
  }
  e.prototype.captureMessage = function (e, t, n, r) {
    var i = this
    var o = n && n.event_id
    var a = $_306.i(e) ? this._getBackend().eventFromMessage(String(e), t, n) : this._getBackend().eventFromException(e, n)
    this._process(a.then(function (e) {
      return i._captureEvent(e, n, r)
    }).then(function (e) {
      o = e
    }))
    return o
  }
  e.prototype.captureEvent = function (e, t, n) {
    var r = t && t.event_id
    this._process(this._captureEvent(e, t, n).then(function (e) {
      r = e
    }))
    return r
  }
  e.prototype.captureSession = function (e) {
    if (this._isEnabled()) {
      if ("string" !== typeof e.release) {
        $_905.a.warn("Discarded session because of missing or non-string release")
      } else {
        this._sendSession(e)
        e.update({
          init: false
        })
      }
    } else {
      $_905.a.warn("SDK not enabled, will not capture session.")
    }
  }
  e.prototype.getDsn = function () {
    return this._dsn
  }
  e.prototype.getOptions = function () {
    return this._options
  }
  e.prototype.flush = function (e) {
    var t = this
    return this._isClientDoneProcessing(e).then(function (n) {
      return t._getBackend().getTransport().close(e).then(function (e) {
        return n && e
      })
    })
  }
  e.prototype.close = function (e) {
    var t = this
    return this.flush(e).then(function (e) {
      t.getOptions().enabled = false
      return e
    })
  }
  e.prototype.setupIntegrations = function () {
    if (this._isEnabled() && !this._integrations.initialized) {
      this._integrations = G(this._options)
    }
  }
  e.prototype.getIntegration = function (e) {
    try {
      return this._integrations[e.id] || null
    } catch (t) {
      $_905.a.warn("Cannot retrieve integration " + e.id + " from the current Client")
      return null
    }
  }
  e.prototype._updateSessionFromEvent = function (e, t) {
    var n
    var /* [auto-meaningful-name] */c$return
    var i = false
    var a = false
    var s = t.exception && t.exception.values
    if (s) {
      a = true
      try {
        for (var c = $$_787_39.g(s), u = c.next(); !u.done; u = c.next()) {
          var /* [auto-meaningful-name] */u$value$mechanism = u.value.mechanism
          if (u$value$mechanism && false === u$value$mechanism.handled) {
            i = true
            break
          }
        }
      } catch (d) {
        n = {
          error: d
        }
      } finally {
        try {
          if (u && !u.done && (c$return = c.return)) {
            c$return.call(c)
          }
        } finally {
          if (n) {
            throw n.error
          }
        }
      }
    }
    var f = e.status === $_2620.a.Ok
    if (f && 0 === e.errors || f && i) {
      e.update($$_787_39.a($$_787_39.a({}, i && {
        status: $_2620.a.Crashed
      }), {
        errors: e.errors || Number(a || i)
      }))
      this.captureSession(e)
    }
  }
  e.prototype._sendSession = function (e) {
    this._getBackend().sendSession(e)
  }
  e.prototype._isClientDoneProcessing = function (e) {
    var t = this
    return new $_915.a(function (n) {
      var r = 0
      var i = setInterval(function () {
        if (0 == t._numProcessing) {
          clearInterval(i)
          n(true)
        } else {
          r += 1
          if (e && r >= e) {
            clearInterval(i)
            n(false)
          }
        }
      }, 1)
    })
  }
  e.prototype._getBackend = function () {
    return this._backend
  }
  e.prototype._isEnabled = function () {
    return false !== this.getOptions().enabled && undefined !== this._dsn
  }
  e.prototype._prepareEvent = function (e, t, n) {
    var r = this
    var /* [auto-meaningful-name] */this$getOptions$normalizeDepth = this.getOptions().normalizeDepth
    var a = undefined === this$getOptions$normalizeDepth ? 3 : this$getOptions$normalizeDepth
    var c = $$_787_39.a($$_787_39.a({}, e), {
      event_id: e.event_id || (n && n.event_id ? n.event_id : $_394.i()),
      timestamp: e.timestamp || $_2587.a()
    })
    this._applyClientOptions(c)
    this._applyIntegrationsMetadata(c)
    var u = t
    if (n && n.captureContext) {
      u = $_1027.a.clone(u).update(n.captureContext)
    }
    var f = $_915.a.resolve(c)
    if (u) {
      f = u.applyToEvent(c, n)
    }
    return f.then(function (e) {
      return "number" === typeof a && a > 0 ? r._normalizeEvent(e, a) : e
    })
  }
  e.prototype._normalizeEvent = function (e, t) {
    if (!e) {
      return null
    }
    var n = $$_787_39.a($$_787_39.a($$_787_39.a($$_787_39.a($$_787_39.a({}, e), e.breadcrumbs && {
      breadcrumbs: e.breadcrumbs.map(function (e) {
        return $$_787_39.a($$_787_39.a({}, e), e.data && {
          data: $_561_index.d(e.data, t)
        })
      })
    }), e.user && {
      user: $_561_index.d(e.user, t)
    }), e.contexts && {
      contexts: $_561_index.d(e.contexts, t)
    }), e.extra && {
      extra: $_561_index.d(e.extra, t)
    })
    if (e.contexts && e.contexts.trace) {
      n.contexts.trace = e.contexts.trace
    }
    var /* [auto-meaningful-name] */this$getOptions$_experiments = this.getOptions()._experiments
    return (undefined === this$getOptions$_experiments ? {} : this$getOptions$_experiments).ensureNoCircularStructures ? $_561_index.d(n) : n
  }
  e.prototype._applyClientOptions = function (e) {
    var t = this.getOptions()
    var /* [auto-meaningful-name] */t$environment = t.environment
    var /* [auto-meaningful-name] */t$release = t.release
    var /* [auto-meaningful-name] */t$dist = t.dist
    var /* [auto-meaningful-name] */t$maxValueLength = t.maxValueLength
    var a = undefined === t$maxValueLength ? 250 : t$maxValueLength
    if (!("environment" in e)) {
      e.environment = "environment" in t ? t$environment : "production"
    }
    if (undefined === e.release && undefined !== t$release) {
      e.release = t$release
    }
    if (undefined === e.dist && undefined !== t$dist) {
      e.dist = t$dist
    }
    if (e.message) {
      e.message = $_737.d(e.message, a)
    }
    var s = e.exception && e.exception.values && e.exception.values[0]
    if (s && s.value) {
      s.value = $_737.d(s.value, a)
    }
    var /* [auto-meaningful-name] */e$request = e.request
    if (e$request && e$request.url) {
      e$request.url = $_737.d(e$request.url, a)
    }
  }
  e.prototype._applyIntegrationsMetadata = function (e) {
    var t = Object.keys(this._integrations)
    if (t.length > 0) {
      e.sdk = e.sdk || {}
      e.sdk.integrations = $$_787_39.f(e.sdk.integrations || [], t)
    }
  }
  e.prototype._sendEvent = function (e) {
    this._getBackend().sendEvent(e)
  }
  e.prototype._captureEvent = function (e, t, n) {
    return this._processEvent(e, t, n).then(function (e) {
      return e.event_id
    }, function (e) {
      $_905.a.error(e)
    })
  }
  e.prototype._processEvent = function (e, t, n) {
    var r = this
    var i = this.getOptions()
    var /* [auto-meaningful-name] */i$beforeSend = i.beforeSend
    var /* [auto-meaningful-name] */i$sampleRate = i.sampleRate
    if (!this._isEnabled()) {
      return $_915.a.reject(new M("SDK not enabled, will not capture event."))
    }
    var s = "transaction" === e.type
    return !s && "number" === typeof i$sampleRate && Math.random() > i$sampleRate ? $_915.a.reject(new M("Discarding event because it's not included in the random sample (sampling rate = " + i$sampleRate + ")")) : this._prepareEvent(e, n, t).then(function (e) {
      if (null === e) {
        throw new M("An event processor returned null, will not send event.")
      }
      if (t && t.data && true === t.data.__sentry__ || s || !i$beforeSend) {
        return e
      }
      var n = i$beforeSend(e, t)
      return r._ensureBeforeSendRv(n)
    }).then(function (e) {
      if (null === e) {
        throw new M("`beforeSend` returned `null`, will not send event.")
      }
      var t = n && n.getSession && n.getSession()
      if (!s && t) {
        r._updateSessionFromEvent(t, e)
      }
      r._sendEvent(e)
      return e
    }).then(null, function (e) {
      if (e instanceof M) {
        throw e
      }
      r.captureException(e, {
        data: {
          __sentry__: true
        },
        originalException: e
      })
      throw new M("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + e)
    })
  }
  e.prototype._process = function (e) {
    var t = this
    this._numProcessing += 1
    e.then(function (e) {
      t._numProcessing -= 1
      return e
    }, function (e) {
      t._numProcessing -= 1
      return e
    })
  }
  e.prototype._ensureBeforeSendRv = function (e) {
    var /* [auto-meaningful-name] */BeforeSendMethodHasToReturnNullOrAValidEvent$ = "`beforeSend` method has to return `null` or a valid event."
    if ($_306.m(e)) {
      return e.then(function (e) {
        if (!$_306.h(e) && null !== e) {
          throw new M(BeforeSendMethodHasToReturnNullOrAValidEvent$)
        }
        return e
      }, function (e) {
        throw new M("beforeSend rejected with " + e)
      })
    }
    if (!$_306.h(e) && null !== e) {
      throw new M(BeforeSendMethodHasToReturnNullOrAValidEvent$)
    }
    return e
  }
  return e
}()
!function (e) {
  e.Unknown = "unknown"
  e.Skipped = "skipped"
  e.Success = "success"
  e.RateLimit = "rate_limit"
  e.Invalid = "invalid"
  e.Failed = "failed"
}(z || (z = {}));
(function (e) {
  e.fromHttpCode = function (t) {
    return t >= 200 && t < 300 ? e.Success : 429 === t ? e.RateLimit : t >= 400 && t < 500 ? e.Invalid : t >= 500 ? e.Failed : e.Unknown
  }
})(z || (z = {}))
var W
var K = function () {
  function e() {}
  e.prototype.sendEvent = function (e) {
    return $_915.a.resolve({
      reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
      status: z.Skipped
    })
  }
  e.prototype.close = function (e) {
    return $_915.a.resolve(true)
  }
  return e
}()
var X = function () {
  function e(e) {
    this._options = e
    if (!this._options.dsn) {
      $_905.a.warn("No DSN provided, backend will not do anything.")
    }
    this._transport = this._setupTransport()
  }
  e.prototype.eventFromException = function (e, t) {
    throw new M("Backend has to implement `eventFromException` method")
  }
  e.prototype.eventFromMessage = function (e, t, n) {
    throw new M("Backend has to implement `eventFromMessage` method")
  }
  e.prototype.sendEvent = function (e) {
    this._transport.sendEvent(e).then(null, function (e) {
      $_905.a.error("Error while sending event: " + e)
    })
  }
  e.prototype.sendSession = function (e) {
    if (this._transport.sendSession) {
      this._transport.sendSession(e).then(null, function (e) {
        $_905.a.error("Error while sending session: " + e)
      })
    } else {
      $_905.a.warn("Dropping session because custom transport doesn't implement sendSession")
    }
  }
  e.prototype.getTransport = function () {
    return this._transport
  }
  e.prototype._setupTransport = function () {
    return new K()
  }
  return e
}()
!function (e) {
  e.Fatal = "fatal"
  e.Error = "error"
  e.Warning = "warning"
  e.Log = "log"
  e.Info = "info"
  e.Debug = "debug"
  e.Critical = "critical"
}(W || (W = {}));
(function (e) {
  e.fromString = function (t) {
    switch (t) {
      case "debug":
        return e.Debug
      case "info":
        return e.Info
      case "warn":
      case "warning":
        return e.Warning
      case "error":
        return e.Error
      case "fatal":
        return e.Fatal
      case "critical":
        return e.Critical
      case "log":
      default:
        return e.Log
    }
  }
})(W || (W = {}))
var Y = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i
var q = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i
var $ = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i
var J = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i
var Z = /\((\S*)(?::(\d+))(?::(\d+))\)/
var ee = /Minified React error #\d+;/i
function te(e) {
  var t = null
  var n = 0
  if (e) {
    if ("number" === typeof e.framesToPop) {
      n = e.framesToPop
    } else {
      if (ee.test(e.message)) {
        n = 1
      }
    }
  }
  try {
    if (t = function (e) {
      if (!e || !e.stacktrace) {
        return null
      }
      for (var t, /* [auto-meaningful-name] */e$stacktrace = e.stacktrace, r = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, i = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i, o = e$stacktrace.split("\n"), a = [], s = 0; s < o.length; s += 2) {
        var c = null
        if (t = r.exec(o[s])) {
          c = {
            url: t[2],
            func: t[3],
            args: [],
            line: +t[1],
            column: null
          }
        } else {
          if (t = i.exec(o[s])) {
            c = {
              url: t[6],
              func: t[3] || t[4],
              args: t[5] ? t[5].split(",") : [],
              line: +t[1],
              column: +t[2]
            }
          }
        }
        if (c) {
          if (!c.func && c.line) {
            c.func = "?"
          }
          a.push(c)
        }
      }
      if (!a.length) {
        return null
      }
      return {
        message: re(e),
        name: e.name,
        stack: a
      }
    }(e)) {
      return ne(t, n)
    }
  } catch (r) {}
  try {
    if (t = function (e) {
      if (!e || !e.stack) {
        return null
      }
      for (var t, n, r, i = [], o = e.stack.split("\n"), a = 0; a < o.length; ++a) {
        if (n = Y.exec(o[a])) {
          var s = n[2] && 0 === n[2].indexOf("native")
          if (n[2] && 0 === n[2].indexOf("eval") && (t = Z.exec(n[2]))) {
            n[2] = t[1]
            n[3] = t[2]
            n[4] = t[3]
          }
          var c = n[2] && 0 === n[2].indexOf("address at ") ? n[2].substr("address at ".length) : n[2]
          var u = n[1] || "?"
          var l = -1 !== u.indexOf("safari-extension")
          var f = -1 !== u.indexOf("safari-web-extension")
          if (l || f) {
            u = -1 !== u.indexOf("@") ? u.split("@")[0] : "?"
            c = l ? "safari-extension:" + c : "safari-web-extension:" + c
          }
          r = {
            url: c,
            func: u,
            args: s ? [n[2]] : [],
            line: n[3] ? +n[3] : null,
            column: n[4] ? +n[4] : null
          }
        } else if (n = $.exec(o[a])) {
          r = {
            url: n[2],
            func: n[1] || "?",
            args: [],
            line: +n[3],
            column: n[4] ? +n[4] : null
          }
        } else {
          if (!(n = q.exec(o[a]))) {
            continue
          }
          if (n[3] && n[3].indexOf(" > eval") > -1 && (t = J.exec(n[3]))) {
            n[1] = n[1] || "eval"
            n[3] = t[1]
            n[4] = t[2]
            n[5] = ""
          } else {
            if (!(0 !== a || n[5] || undefined === e.columnNumber)) {
              i[0].column = e.columnNumber + 1
            }
          }
          r = {
            url: n[3],
            func: n[1] || "?",
            args: n[2] ? n[2].split(",") : [],
            line: n[4] ? +n[4] : null,
            column: n[5] ? +n[5] : null
          }
        }
        if (!r.func && r.line) {
          r.func = "?"
        }
        i.push(r)
      }
      if (!i.length) {
        return null
      }
      return {
        message: re(e),
        name: e.name,
        stack: i
      }
    }(e)) {
      return ne(t, n)
    }
  } catch (r) {}
  return {
    message: re(e),
    name: e && e.name,
    stack: [],
    failed: true
  }
}
function ne(e, t) {
  try {
    return $$_787_39.a($$_787_39.a({}, e), {
      stack: e.stack.slice(t)
    })
  } catch (n) {
    return e
  }
}
function re(e) {
  var t = e && e.message
  return t ? t.error && "string" === typeof t.error.message ? t.error.message : t : "No error message"
}
function ie(e) {
  var t = ae(e.stack)
  var n = {
    type: e.name,
    value: e.message
  }
  if (t && t.length) {
    n.stacktrace = {
      frames: t
    }
  }
  if (undefined === n.type && "" === n.value) {
    n.value = "Unrecoverable error caught"
  }
  return n
}
function oe(e) {
  return {
    exception: {
      values: [ie(e)]
    }
  }
}
function ae(e) {
  if (!e || !e.length) {
    return []
  }
  var t = e
  var n = t[0].func || ""
  var r = t[t.length - 1].func || ""
  if (!(-1 === n.indexOf("captureMessage") && -1 === n.indexOf("captureException"))) {
    t = t.slice(1)
  }
  if (-1 !== r.indexOf("sentryWrapped")) {
    t = t.slice(0, -1)
  }
  return t.slice(0, 50).map(function (e) {
    return {
      colno: null === e.column ? undefined : e.column,
      filename: e.url || t[0].url,
      function: e.func || "?",
      in_app: true,
      lineno: null === e.line ? undefined : e.line
    }
  }).reverse()
}
function se(e, t, n) {
  var r
  if (undefined === n) {
    n = {}
  }
  if ($_306.e(e) && e.error) {
    return r = oe(te(e = e.error))
  }
  if ($_306.a(e) || $_306.b(e)) {
    var i = e
    var a = i.name || ($_306.a(i) ? "DOMError" : "DOMException")
    var s = i.message ? a + ": " + i.message : a
    r = ce(s, t, n)
    $_394.b(r, s)
    if ("code" in i) {
      r.tags = $$_787_39.a($$_787_39.a({}, r.tags), {
        "DOMException.code": "" + i.code
      })
    }
    return r
  }
  return $_306.d(e) ? r = oe(te(e)) : $_306.h(e) || $_306.f(e) ? (r = function (e, t, n) {
    var r = {
      exception: {
        values: [{
          type: $_306.f(e) ? e.constructor.name : n ? "UnhandledRejection" : "Error",
          value: "Non-Error " + (n ? "promise rejection" : "exception") + " captured with keys: " + $_561_index.b(e)
        }]
      },
      extra: {
        __serialized__: $_561_index.e(e)
      }
    }
    if (t) {
      var i = ae(te(t).stack)
      r.stacktrace = {
        frames: i
      }
    }
    return r
  }(e, t, n.rejection), $_394.a(r, {
    synthetic: true
  }), r) : (r = ce(e, t, n), $_394.b(r, "" + e, undefined), $_394.a(r, {
    synthetic: true
  }), r)
}
function ce(e, t, n) {
  if (undefined === n) {
    n = {}
  }
  var r = {
    message: e
  }
  if (n.attachStacktrace && t) {
    var i = ae(te(t).stack)
    r.stacktrace = {
      frames: i
    }
  }
  return r
}
function ue(e) {
  if (e.metadata && e.metadata.sdk) {
    var /* [auto-meaningful-name] */e$metadata$sdk = e.metadata.sdk
    return {
      name: e$metadata$sdk.name,
      version: e$metadata$sdk.version
    }
  }
}
function le(e, t) {
  return t ? (e.sdk = e.sdk || {}, e.sdk.name = e.sdk.name || t.name, e.sdk.version = e.sdk.version || t.version, e.sdk.integrations = $$_787_39.f(e.sdk.integrations || [], t.integrations || []), e.sdk.packages = $$_787_39.f(e.sdk.packages || [], t.packages || []), e) : e
}
function fe(e, t) {
  var n = ue(t)
  var r = "aggregates" in e ? "sessions" : "session"
  return {
    body: JSON.stringify($$_787_39.a($$_787_39.a({
      sent_at: new Date().toISOString()
    }, n && {
      sdk: n
    }), t.forceEnvelope() && {
      dsn: t.getDsn().toString()
    })) + "\n" + JSON.stringify({
      type: r
    }) + "\n" + JSON.stringify(e),
    type: r,
    url: t.getEnvelopeEndpointWithUrlEncodedAuth()
  }
}
function de(e, t) {
  var n = ue(t)
  var r = e.type || "event"
  var i = "transaction" === r || t.forceEnvelope()
  var a = e.debug_meta || {}
  var /* [auto-meaningful-name] */a$transactionSampling = a.transactionSampling
  var c = $$_787_39.e(a, ["transactionSampling"])
  var u = a$transactionSampling || {}
  var /* [auto-meaningful-name] */u$method = u.method
  var /* [auto-meaningful-name] */u$rate = u.rate
  if (0 === Object.keys(c).length) {
    delete e.debug_meta
  } else {
    e.debug_meta = c
  }
  var d = {
    body: JSON.stringify(n ? le(e, t.metadata.sdk) : e),
    type: r,
    url: i ? t.getEnvelopeEndpointWithUrlEncodedAuth() : t.getStoreEndpointWithUrlEncodedAuth()
  }
  if (i) {
    var h = JSON.stringify($$_787_39.a($$_787_39.a({
      event_id: e.event_id,
      sent_at: new Date().toISOString()
    }, n && {
      sdk: n
    }), t.forceEnvelope() && {
      dsn: t.getDsn().toString()
    })) + "\n" + JSON.stringify({
      type: r,
      sample_rates: [{
        id: u$method,
        rate: u$rate
      }]
    }) + "\n" + d.body
    d.body = h
  }
  return d
}
var he = function () {
  function e(e, t, n) {
    if (undefined === t) {
      t = {}
    }
    this.dsn = e
    this._dsnObject = new L(e)
    this.metadata = t
    this._tunnel = n
  }
  e.prototype.getDsn = function () {
    return this._dsnObject
  }
  e.prototype.forceEnvelope = function () {
    return !!this._tunnel
  }
  e.prototype.getBaseApiEndpoint = function () {
    var e = this.getDsn()
    var t = e.protocol ? e.protocol + ":" : ""
    var n = e.port ? ":" + e.port : ""
    return t + "//" + e.host + n + (e.path ? "/" + e.path : "") + "/api/"
  }
  e.prototype.getStoreEndpoint = function () {
    return this._getIngestEndpoint("store")
  }
  e.prototype.getStoreEndpointWithUrlEncodedAuth = function () {
    return this.getStoreEndpoint() + "?" + this._encodedAuth()
  }
  e.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function () {
    return this.forceEnvelope() ? this._tunnel : this._getEnvelopeEndpoint() + "?" + this._encodedAuth()
  }
  e.prototype.getStoreEndpointPath = function () {
    var e = this.getDsn()
    return (e.path ? "/" + e.path : "") + "/api/" + e.projectId + "/store/"
  }
  e.prototype.getRequestHeaders = function (e, t) {
    var n = this.getDsn()
    var r = ["Sentry sentry_version=7"]
    r.push("sentry_client=" + e + "/" + t)
    r.push("sentry_key=" + n.publicKey)
    if (n.pass) {
      r.push("sentry_secret=" + n.pass)
    }
    return {
      "Content-Type": "application/json",
      "X-Sentry-Auth": r.join(", ")
    }
  }
  e.prototype.getReportDialogEndpoint = function (e) {
    if (undefined === e) {
      e = {}
    }
    var t = this.getDsn()
    var n = this.getBaseApiEndpoint() + "embed/error-page/"
    var r = []
    for (var i in r.push("dsn=" + t.toString()), e) if ("dsn" !== i) {
      if ("user" === i) {
        if (!e.user) {
          continue
        }
        if (e.user.name) {
          r.push("name=" + encodeURIComponent(e.user.name))
        }
        if (e.user.email) {
          r.push("email=" + encodeURIComponent(e.user.email))
        }
      } else {
        r.push(encodeURIComponent(i) + "=" + encodeURIComponent(e[i]))
      }
    }
    return r.length ? n + "?" + r.join("&") : n
  }
  e.prototype._getEnvelopeEndpoint = function () {
    return this._getIngestEndpoint("envelope")
  }
  e.prototype._getIngestEndpoint = function (e) {
    return this._tunnel ? this._tunnel : "" + this.getBaseApiEndpoint() + this.getDsn().projectId + "/" + e + "/"
  }
  e.prototype._encodedAuth = function () {
    var e = {
      sentry_key: this.getDsn().publicKey,
      sentry_version: "7"
    }
    return $_561_index.f(e)
  }
  return e
}()
var pe = function () {
  function e(e) {
    this._limit = e
    this._buffer = []
  }
  e.prototype.isReady = function () {
    return undefined === this._limit || this.length() < this._limit
  }
  e.prototype.add = function (e) {
    var t = this
    if (!this.isReady()) {
      return $_915.a.reject(new M("Not adding Promise due to buffer limit reached."))
    }
    var n = e()
    if (-1 === this._buffer.indexOf(n)) {
      this._buffer.push(n)
    }
    n.then(function () {
      return t.remove(n)
    }).then(null, function () {
      return t.remove(n).then(null, function () {})
    })
    return n
  }
  e.prototype.remove = function (e) {
    return this._buffer.splice(this._buffer.indexOf(e), 1)[0]
  }
  e.prototype.length = function () {
    return this._buffer.length
  }
  e.prototype.drain = function (e) {
    var t = this
    return new $_915.a(function (n) {
      var r = setTimeout(function () {
        if (e && e > 0) {
          n(false)
        }
      }, e)
      $_915.a.all(t._buffer).then(function () {
        clearTimeout(r)
        n(true)
      }).then(null, function () {
        n(true)
      })
    })
  }
  return e
}()
var _e = {
  event: "error",
  transaction: "transaction",
  session: "session",
  attachment: "attachment"
}
var Ae = function () {
  function e(e) {
    this.options = e
    this._buffer = new pe(30)
    this._rateLimits = {}
    this._api = new he(e.dsn, e._metadata, e.tunnel)
    this.url = this._api.getStoreEndpointWithUrlEncodedAuth()
  }
  e.prototype.sendEvent = function (e) {
    throw new M("Transport Class has to implement `sendEvent` method")
  }
  e.prototype.close = function (e) {
    return this._buffer.drain(e)
  }
  e.prototype._handleResponse = function (e) {
    var /* [auto-meaningful-name] */e$requestType = e.requestType
    var /* [auto-meaningful-name] */e$response = e.response
    var /* [auto-meaningful-name] */e$headers = e.headers
    var /* [auto-meaningful-name] */e$resolve = e.resolve
    var /* [auto-meaningful-name] */e$reject = e.reject
    var a = z.fromHttpCode(e$response.status)
    if (this._handleRateLimit(e$headers)) {
      $_905.a.warn("Too many " + e$requestType + " requests, backing off until: " + this._disabledUntil(e$requestType))
    }
    if (a !== z.Success) {
      e$reject(e$response)
    } else {
      e$resolve({
        status: a
      })
    }
  }
  e.prototype._disabledUntil = function (e) {
    var t = _e[e]
    return this._rateLimits[t] || this._rateLimits.all
  }
  e.prototype._isRateLimited = function (e) {
    return this._disabledUntil(e) > new Date(Date.now())
  }
  e.prototype._handleRateLimit = function (e) {
    var t
    var /* [auto-meaningful-name] */u$return
    var r
    var /* [auto-meaningful-name] */_$return
    var a = Date.now()
    var s = e["x-sentry-rate-limits"]
    var c = e["retry-after"]
    if (s) {
      try {
        for (var u = $$_787_39.g(s.trim().split(",")), f = u.next(); !f.done; f = u.next()) {
          var d = f.value.split(":", 2)
          var h = parseInt(d[0], 10)
          var p = 1e3 * (isNaN(h) ? 60 : h)
          try {
            for (r = undefined, _ = $$_787_39.g(d[1].split(";")), A = _.next(), undefined; !A.done; A = _.next()) {
              var _
              var A
              var /* [auto-meaningful-name] */A$value = A.value
              this._rateLimits[A$value || "all"] = new Date(a + p)
            }
          } catch (v) {
            r = {
              error: v
            }
          } finally {
            try {
              if (A && !A.done && (_$return = _.return)) {
                _$return.call(_)
              }
            } finally {
              if (r) {
                throw r.error
              }
            }
          }
        }
      } catch (m) {
        t = {
          error: m
        }
      } finally {
        try {
          if (f && !f.done && (u$return = u.return)) {
            u$return.call(u)
          }
        } finally {
          if (t) {
            throw t.error
          }
        }
      }
      return true
    }
    return !!c && (this._rateLimits.all = new Date(a + $_394.g(a, c)), true)
  }
  return e
}()
var ge = function (e) {
  function t(t, n) {
    if (undefined === n) {
      n = function () {
        var e
        var /* [auto-meaningful-name] */o$contentWindow
        var n = $_394.e()
        if (m(n.fetch)) {
          return n.fetch.bind(n)
        }
        var /* [auto-meaningful-name] */n$document = n.document
        var /* [auto-meaningful-name] */n$fetch = n.fetch
        if ("function" === typeof (null === (e = n$document) || undefined === e ? undefined : e.createElement)) {
          try {
            var o = n$document.createElement("iframe")
            o.hidden = true
            n$document.head.appendChild(o)
            if (null === (o$contentWindow = o.contentWindow) || undefined === o$contentWindow ? undefined : o$contentWindow.fetch) {
              n$fetch = o.contentWindow.fetch
            }
            n$document.head.removeChild(o)
          } catch (a) {
            $_905.a.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", a)
          }
        }
        return n$fetch.bind(n)
      }()
    }
    var r = e.call(this, t) || this
    r._fetch = n
    return r
  }
  $$_787_39.c(t, e)
  t.prototype.sendEvent = function (e) {
    return this._sendRequest(de(e, this._api), e)
  }
  t.prototype.sendSession = function (e) {
    return this._sendRequest(fe(e, this._api), e)
  }
  t.prototype._sendRequest = function (e, t) {
    var n = this
    if (this._isRateLimited(e.type)) {
      return Promise.reject({
        event: t,
        type: e.type,
        reason: "Transport for " + e.type + " requests locked till " + this._disabledUntil(e.type) + " due to too many requests.",
        status: 429
      })
    }
    var r = {
      body: e.body,
      method: "POST",
      referrerPolicy: y() ? "origin" : ""
    }
    if (undefined !== this.options.fetchParameters) {
      Object.assign(r, this.options.fetchParameters)
    }
    if (undefined !== this.options.headers) {
      r.headers = this.options.headers
    }
    return this._buffer.add(function () {
      return new $_915.a(function (t, i) {
        n._fetch(e.url, r).then(function (r) {
          var o = {
            "x-sentry-rate-limits": r.headers.get("X-Sentry-Rate-Limits"),
            "retry-after": r.headers.get("Retry-After")
          }
          n._handleResponse({
            requestType: e.type,
            response: r,
            headers: o,
            resolve: t,
            reject: i
          })
        }).catch(i)
      })
    })
  }
  return t
}(Ae)
var ve = function (e) {
  function t() {
    return null !== e && e.apply(this, arguments) || this
  }
  $$_787_39.c(t, e)
  t.prototype.sendEvent = function (e) {
    return this._sendRequest(de(e, this._api), e)
  }
  t.prototype.sendSession = function (e) {
    return this._sendRequest(fe(e, this._api), e)
  }
  t.prototype._sendRequest = function (e, t) {
    var n = this
    return this._isRateLimited(e.type) ? Promise.reject({
      event: t,
      type: e.type,
      reason: "Transport for " + e.type + " requests locked till " + this._disabledUntil(e.type) + " due to too many requests.",
      status: 429
    }) : this._buffer.add(function () {
      return new $_915.a(function (t, r) {
        var i = new XMLHttpRequest()
        for (var o in i.onreadystatechange = function () {
          if (4 === i.readyState) {
            var o = {
              "x-sentry-rate-limits": i.getResponseHeader("X-Sentry-Rate-Limits"),
              "retry-after": i.getResponseHeader("Retry-After")
            }
            n._handleResponse({
              requestType: e.type,
              response: i,
              headers: o,
              resolve: t,
              reject: r
            })
          }
        }, i.open("POST", e.url), n.options.headers) if (n.options.headers.hasOwnProperty(o)) {
          i.setRequestHeader(o, n.options.headers[o])
        }
        i.send(e.body)
      })
    })
  }
  return t
}(Ae)
var me = function (e) {
  function t() {
    return null !== e && e.apply(this, arguments) || this
  }
  $$_787_39.c(t, e)
  t.prototype.eventFromException = function (e, t) {
    return function (e, t, n) {
      var r = se(t, n && n.syntheticException || undefined, {
        attachStacktrace: e.attachStacktrace
      })
      $_394.a(r, {
        handled: true,
        type: "generic"
      })
      r.level = W.Error
      if (n && n.event_id) {
        r.event_id = n.event_id
      }
      return $_915.a.resolve(r)
    }(this._options, e, t)
  }
  t.prototype.eventFromMessage = function (e, t, n) {
    if (undefined === t) {
      t = W.Info
    }
    return function (e, t, n, r) {
      if (undefined === n) {
        n = W.Info
      }
      var i = ce(t, r && r.syntheticException || undefined, {
        attachStacktrace: e.attachStacktrace
      })
      i.level = n
      if (r && r.event_id) {
        i.event_id = r.event_id
      }
      return $_915.a.resolve(i)
    }(this._options, e, t, n)
  }
  t.prototype._setupTransport = function () {
    if (!this._options.dsn) {
      return e.prototype._setupTransport.call(this)
    }
    var t = $$_787_39.a($$_787_39.a({}, this._options.transportOptions), {
      dsn: this._options.dsn,
      tunnel: this._options.tunnel,
      _metadata: this._options._metadata
    })
    return this._options.transport ? new this._options.transport(t) : v() ? new ge(t) : new ve(t)
  }
  return t
}(X)
import /* [auto-meaningful-name] */$$_340_index = require("../340/index")
var be = 0
function we() {
  return be > 0
}
function Ee() {
  be += 1
  setTimeout(function () {
    be -= 1
  })
}
function xe(e, t, n) {
  if (undefined === t) {
    t = {}
  }
  if ("function" !== typeof e) {
    return e
  }
  try {
    if (e.__sentry__) {
      return e
    }
    if (e.__sentry_wrapped__) {
      return e.__sentry_wrapped__
    }
  } catch (a) {
    return e
  }
  var r = function () {
    var r = Array.prototype.slice.call(arguments)
    try {
      if (n && "function" === typeof n) {
        n.apply(this, arguments)
      }
      var i = r.map(function (e) {
        return xe(e, t)
      })
      return e.handleEvent ? e.handleEvent.apply(this, i) : e.apply(this, i)
    } catch (a) {
      Ee()
      $$_340_index.c(function (e) {
        e.addEventProcessor(function (e) {
          var n = $$_787_39.a({}, e)
          if (t.mechanism) {
            $_394.b(n, undefined, undefined)
            $_394.a(n, t.mechanism)
          }
          n.extra = $$_787_39.a($$_787_39.a({}, n.extra), {
            arguments: r
          })
          return n
        })
        $$_340_index.a(a)
      })
      throw a
    }
  }
  try {
    for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i)) {
      r[i] = e[i]
    }
  } catch (s) {}
  e.prototype = e.prototype || {}
  r.prototype = e.prototype
  Object.defineProperty(e, "__sentry_wrapped__", {
    enumerable: false,
    value: r
  })
  Object.defineProperties(r, {
    __sentry__: {
      enumerable: false,
      value: true
    },
    __sentry_original__: {
      enumerable: false,
      value: e
    }
  })
  try {
    if (Object.getOwnPropertyDescriptor(r, "name").configurable) {
      Object.defineProperty(r, "name", {
        get: function () {
          return e.name
        }
      })
    }
  } catch (s) {}
  return r
}
function Ce(e) {
  if (undefined === e) {
    e = {}
  }
  if (e.eventId) {
    if (e.dsn) {
      var t = document.createElement("script")
      t.async = true
      t.src = new he(e.dsn).getReportDialogEndpoint(e)
      if (e.onLoad) {
        t.onload = e.onLoad
      }
      (document.head || document.body).appendChild(t)
    } else {
      $_905.a.error("Missing dsn option in showReportDialog call")
    }
  } else {
    $_905.a.error("Missing eventId option in showReportDialog call")
  }
}
import /* [auto-meaningful-name] */$_1169 = require("./1169")
var ke = function () {
  function e(t) {
    this.name = e.id
    this._options = $$_787_39.a({
      console: true,
      dom: true,
      fetch: true,
      history: true,
      sentry: true,
      xhr: true
    }, t)
  }
  e.prototype.addSentryBreadcrumb = function (e) {
    if (this._options.sentry) {
      $$_340_2592_index.a().addBreadcrumb({
        category: "sentry." + ("transaction" === e.type ? "transaction" : "event"),
        event_id: e.event_id,
        level: e.level,
        message: $_394.d(e)
      }, {
        event: e
      })
    }
  }
  e.prototype.setupOnce = function () {
    var e = this
    if (this._options.console) {
      O({
        callback: function () {
          for (var t = [], n = 0; n < arguments.length; n++) {
            t[n] = arguments[n]
          }
          e._consoleBreadcrumb.apply(e, $$_787_39.f(t))
        },
        type: "console"
      })
    }
    if (this._options.dom) {
      O({
        callback: function () {
          for (var t = [], n = 0; n < arguments.length; n++) {
            t[n] = arguments[n]
          }
          e._domBreadcrumb.apply(e, $$_787_39.f(t))
        },
        type: "dom"
      })
    }
    if (this._options.xhr) {
      O({
        callback: function () {
          for (var t = [], n = 0; n < arguments.length; n++) {
            t[n] = arguments[n]
          }
          e._xhrBreadcrumb.apply(e, $$_787_39.f(t))
        },
        type: "xhr"
      })
    }
    if (this._options.fetch) {
      O({
        callback: function () {
          for (var t = [], n = 0; n < arguments.length; n++) {
            t[n] = arguments[n]
          }
          e._fetchBreadcrumb.apply(e, $$_787_39.f(t))
        },
        type: "fetch"
      })
    }
    if (this._options.history) {
      O({
        callback: function () {
          for (var t = [], n = 0; n < arguments.length; n++) {
            t[n] = arguments[n]
          }
          e._historyBreadcrumb.apply(e, $$_787_39.f(t))
        },
        type: "history"
      })
    }
  }
  e.prototype._consoleBreadcrumb = function (e) {
    var t = {
      category: "console",
      data: {
        arguments: e.args,
        logger: "console"
      },
      level: W.fromString(e.level),
      message: $_737.b(e.args, " ")
    }
    if ("assert" === e.level) {
      if (false !== e.args[0]) {
        return
      }
      t.message = "Assertion failed: " + ($_737.b(e.args.slice(1), " ") || "console.assert")
      t.data.arguments = e.args.slice(1)
    }
    $$_340_2592_index.a().addBreadcrumb(t, {
      input: e.args,
      level: e.level
    })
  }
  e.prototype._domBreadcrumb = function (e) {
    var t
    var n = "object" === typeof this._options.dom ? this._options.dom.serializeAttribute : undefined
    if ("string" === typeof n) {
      n = [n]
    }
    try {
      t = e.event.target ? $_1169.a(e.event.target, n) : $_1169.a(e.event, n)
    } catch (r) {
      t = "<unknown>"
    }
    if (0 !== t.length) {
      $$_340_2592_index.a().addBreadcrumb({
        category: "ui." + e.name,
        message: t
      }, {
        event: e.event,
        name: e.name,
        global: e.global
      })
    }
  }
  e.prototype._xhrBreadcrumb = function (e) {
    if (e.endTimestamp) {
      if (e.xhr.__sentry_own_request__) {
        return
      }
      var t = e.xhr.__sentry_xhr__ || {}
      var /* [auto-meaningful-name] */t$method = t.method
      var /* [auto-meaningful-name] */t$url = t.url
      var /* [auto-meaningful-name] */t$status_code = t.status_code
      var /* [auto-meaningful-name] */t$body = t.body
      $$_340_2592_index.a().addBreadcrumb({
        category: "xhr",
        data: {
          method: t$method,
          url: t$url,
          status_code: t$status_code
        },
        type: "http"
      }, {
        xhr: e.xhr,
        input: t$body
      })
    } else {
      ;
    }
  }
  e.prototype._fetchBreadcrumb = function (e) {
    if (e.endTimestamp) {
      if (!(e.fetchData.url.match(/sentry_key/) && "POST" === e.fetchData.method)) {
        if (e.error) {
          $$_340_2592_index.a().addBreadcrumb({
            category: "fetch",
            data: e.fetchData,
            level: W.Error,
            type: "http"
          }, {
            data: e.error,
            input: e.args
          })
        } else {
          $$_340_2592_index.a().addBreadcrumb({
            category: "fetch",
            data: $$_787_39.a($$_787_39.a({}, e.fetchData), {
              status_code: e.response.status
            }),
            type: "http"
          }, {
            input: e.args,
            response: e.response
          })
        }
      }
    }
  }
  e.prototype._historyBreadcrumb = function (e) {
    var t = $_394.e()
    var /* [auto-meaningful-name] */e$from = e.from
    var r = e.to
    var i = $_394.h(t.location.href)
    var o = $_394.h(e$from)
    var a = $_394.h(r)
    if (!o.path) {
      o = i
    }
    if (i.protocol === a.protocol && i.host === a.host) {
      r = a.relative
    }
    if (i.protocol === o.protocol && i.host === o.host) {
      e$from = o.relative
    }
    $$_340_2592_index.a().addBreadcrumb({
      category: "navigation",
      data: {
        from: e$from,
        to: r
      }
    })
  }
  e.id = "Breadcrumbs"
  return e
}()
var Se = function (e) {
  function t(t) {
    if (undefined === t) {
      t = {}
    }
    t._metadata = t._metadata || {}
    t._metadata.sdk = t._metadata.sdk || {
      name: "sentry.javascript.browser",
      packages: [{
        name: "npm:@sentry/browser",
        version: "6.12.0"
      }],
      version: "6.12.0"
    }
    return e.call(this, me, t) || this
  }
  $$_787_39.c(t, e)
  t.prototype.showReportDialog = function (e) {
    if (undefined === e) {
      e = {}
    }
    if ($_394.e().document) {
      if (this._isEnabled()) {
        Ce($$_787_39.a($$_787_39.a({}, e), {
          dsn: e.dsn || this.getDsn()
        }))
      } else {
        $_905.a.error("Trying to call showReportDialog with Sentry Client disabled")
      }
    }
  }
  t.prototype._prepareEvent = function (t, n, r) {
    t.platform = t.platform || "javascript"
    return e.prototype._prepareEvent.call(this, t, n, r)
  }
  t.prototype._sendEvent = function (t) {
    var n = this.getIntegration(ke)
    if (n) {
      n.addSentryBreadcrumb(t)
    }
    e.prototype._sendEvent.call(this, t)
  }
  return t
}(Q)
var Te = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"]
var Be = function () {
  function e(t) {
    this.name = e.id
    this._options = $$_787_39.a({
      XMLHttpRequest: true,
      eventTarget: true,
      requestAnimationFrame: true,
      setInterval: true,
      setTimeout: true
    }, t)
  }
  e.prototype.setupOnce = function () {
    var e = $_394.e()
    if (this._options.setTimeout) {
      $_561_index.c(e, "setTimeout", this._wrapTimeFunction.bind(this))
    }
    if (this._options.setInterval) {
      $_561_index.c(e, "setInterval", this._wrapTimeFunction.bind(this))
    }
    if (this._options.requestAnimationFrame) {
      $_561_index.c(e, "requestAnimationFrame", this._wrapRAF.bind(this))
    }
    if (this._options.XMLHttpRequest && "XMLHttpRequest" in e) {
      $_561_index.c(XMLHttpRequest.prototype, "send", this._wrapXHR.bind(this))
    }
    if (this._options.eventTarget) {
      (Array.isArray(this._options.eventTarget) ? this._options.eventTarget : Te).forEach(this._wrapEventTarget.bind(this))
    }
  }
  e.prototype._wrapTimeFunction = function (e) {
    return function () {
      for (var t = [], n = 0; n < arguments.length; n++) {
        t[n] = arguments[n]
      }
      var r = t[0]
      t[0] = xe(r, {
        mechanism: {
          data: {
            function: $_987.a(e)
          },
          handled: true,
          type: "instrument"
        }
      })
      return e.apply(this, t)
    }
  }
  e.prototype._wrapRAF = function (e) {
    return function (t) {
      return e.call(this, xe(t, {
        mechanism: {
          data: {
            function: "requestAnimationFrame",
            handler: $_987.a(e)
          },
          handled: true,
          type: "instrument"
        }
      }))
    }
  }
  e.prototype._wrapEventTarget = function (e) {
    var t = $_394.e()
    var n = t[e] && t[e].prototype
    if (n && n.hasOwnProperty && n.hasOwnProperty("addEventListener")) {
      $_561_index.c(n, "addEventListener", function (t) {
        return function (n, r, i) {
          try {
            if ("function" === typeof r.handleEvent) {
              r.handleEvent = xe(r.handleEvent.bind(r), {
                mechanism: {
                  data: {
                    function: "handleEvent",
                    handler: $_987.a(r),
                    target: e
                  },
                  handled: true,
                  type: "instrument"
                }
              })
            }
          } catch (o) {}
          return t.call(this, n, xe(r, {
            mechanism: {
              data: {
                function: "addEventListener",
                handler: $_987.a(r),
                target: e
              },
              handled: true,
              type: "instrument"
            }
          }), i)
        }
      })
      $_561_index.c(n, "removeEventListener", function (e) {
        return function (t, n, r) {
          var i
          var o = n
          try {
            var a = null === (i = o) || undefined === i ? undefined : i.__sentry_wrapped__
            if (a) {
              e.call(this, t, a, r)
            }
          } catch (s) {}
          return e.call(this, t, o, r)
        }
      })
    }
  }
  e.prototype._wrapXHR = function (e) {
    return function () {
      for (var t = [], n = 0; n < arguments.length; n++) {
        t[n] = arguments[n]
      }
      var r = this
      var i = ["onload", "onerror", "onprogress", "onreadystatechange"]
      i.forEach(function (e) {
        if (e in r && "function" === typeof r[e]) {
          $_561_index.c(r, e, function (t) {
            var n = {
              mechanism: {
                data: {
                  function: e,
                  handler: $_987.a(t)
                },
                handled: true,
                type: "instrument"
              }
            }
            if (t.__sentry_original__) {
              n.mechanism.data.handler = $_987.a(t.__sentry_original__)
            }
            return xe(t, n)
          })
        }
      })
      return e.apply(this, t)
    }
  }
  e.id = "TryCatch"
  return e
}()
var De = function () {
  function e(t) {
    this.name = e.id
    this._onErrorHandlerInstalled = false
    this._onUnhandledRejectionHandlerInstalled = false
    this._options = $$_787_39.a({
      onerror: true,
      onunhandledrejection: true
    }, t)
  }
  e.prototype.setupOnce = function () {
    Error.stackTraceLimit = 50
    if (this._options.onerror) {
      $_905.a.log("Global Handler attached: onerror")
      this._installGlobalOnErrorHandler()
    }
    if (this._options.onunhandledrejection) {
      $_905.a.log("Global Handler attached: onunhandledrejection")
      this._installGlobalOnUnhandledRejectionHandler()
    }
  }
  e.prototype._installGlobalOnErrorHandler = function () {
    var t = this
    if (!this._onErrorHandlerInstalled) {
      O({
        callback: function (n) {
          var /* [auto-meaningful-name] */n$error = n.error
          var i = $$_340_2592_index.a()
          var o = i.getIntegration(e)
          var a = n$error && true === n$error.__sentry_own_request__
          if (o && !we() && !a) {
            var s = i.getClient()
            var u = undefined === n$error && $_306.k(n.msg) ? t._eventFromIncompleteOnError(n.msg, n.url, n.line, n.column) : t._enhanceEventWithInitialFrame(se(n$error || n.msg, undefined, {
              attachStacktrace: s && s.getOptions().attachStacktrace,
              rejection: false
            }), n.url, n.line, n.column)
            $_394.a(u, {
              handled: false,
              type: "onerror"
            })
            i.captureEvent(u, {
              originalException: n$error
            })
          }
        },
        type: "error"
      })
      this._onErrorHandlerInstalled = true
    }
  }
  e.prototype._installGlobalOnUnhandledRejectionHandler = function () {
    var t = this
    if (!this._onUnhandledRejectionHandlerInstalled) {
      O({
        callback: function (n) {
          var r = n
          try {
            if ("reason" in n) {
              r = n.reason
            } else {
              if ("detail" in n && "reason" in n.detail) {
                r = n.detail.reason
              }
            }
          } catch (f) {}
          var i = $$_340_2592_index.a()
          var o = i.getIntegration(e)
          var a = r && true === r.__sentry_own_request__
          if (!o || we() || a) {
            return true
          }
          var s = i.getClient()
          var u = $_306.i(r) ? t._eventFromRejectionWithPrimitive(r) : se(r, undefined, {
            attachStacktrace: s && s.getOptions().attachStacktrace,
            rejection: true
          })
          u.level = W.Error
          $_394.a(u, {
            handled: false,
            type: "onunhandledrejection"
          })
          i.captureEvent(u, {
            originalException: r
          })
        },
        type: "unhandledrejection"
      })
      this._onUnhandledRejectionHandlerInstalled = true
    }
  }
  e.prototype._eventFromIncompleteOnError = function (e, t, n, r) {
    var i
    var o = $_306.e(e) ? e.message : e
    var a = o.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i)
    if (a) {
      i = a[1]
      o = a[2]
    }
    var s = {
      exception: {
        values: [{
          type: i || "Error",
          value: o
        }]
      }
    }
    return this._enhanceEventWithInitialFrame(s, t, n, r)
  }
  e.prototype._eventFromRejectionWithPrimitive = function (e) {
    return {
      exception: {
        values: [{
          type: "UnhandledRejection",
          value: "Non-Error promise rejection captured with value: " + String(e)
        }]
      }
    }
  }
  e.prototype._enhanceEventWithInitialFrame = function (e, t, n, r) {
    e.exception = e.exception || {}
    e.exception.values = e.exception.values || []
    e.exception.values[0] = e.exception.values[0] || {}
    e.exception.values[0].stacktrace = e.exception.values[0].stacktrace || {}
    e.exception.values[0].stacktrace.frames = e.exception.values[0].stacktrace.frames || []
    var i = isNaN(parseInt(r, 10)) ? undefined : r
    var o = isNaN(parseInt(n, 10)) ? undefined : n
    var a = $_306.k(t) && t.length > 0 ? t : $_394.f()
    if (0 === e.exception.values[0].stacktrace.frames.length) {
      e.exception.values[0].stacktrace.frames.push({
        colno: i,
        filename: a,
        function: "?",
        in_app: true,
        lineno: o
      })
    }
    return e
  }
  e.id = "GlobalHandlers"
  return e
}()
var Ie = function () {
  function e(t) {
    if (undefined === t) {
      t = {}
    }
    this.name = e.id
    this._key = t.key || "cause"
    this._limit = t.limit || 5
  }
  e.prototype.setupOnce = function () {
    $_1027.b(function (t, n) {
      var r = $$_340_2592_index.a().getIntegration(e)
      if (r) {
        var i = r._handler && r._handler.bind(r)
        return "function" === typeof i ? i(t, n) : t
      }
      return t
    })
  }
  e.prototype._handler = function (e, t) {
    if (!e.exception || !e.exception.values || !t || !$_306.g(t.originalException, Error)) {
      return e
    }
    var n = this._walkErrorTree(t.originalException, this._key)
    e.exception.values = $$_787_39.f(n, e.exception.values)
    return e
  }
  e.prototype._walkErrorTree = function (e, t, n) {
    if (undefined === n) {
      n = []
    }
    if (!$_306.g(e[t], Error) || n.length + 1 >= this._limit) {
      return n
    }
    var r = ie(te(e[t]))
    return this._walkErrorTree(e[t], t, $$_787_39.f([r], n))
  }
  e.id = "LinkedErrors"
  return e
}()
var Fe = function () {
  function e() {
    this.name = e.id
  }
  e.prototype.setupOnce = function (t, n) {
    t(function (t) {
      var r = n().getIntegration(e)
      if (r) {
        try {
          if (r._shouldDropEvent(t, r._previousEvent)) {
            $_905.a.warn("Event dropped due to being a duplicate of previously captured event.")
            return null
          }
        } catch (i) {
          return r._previousEvent = t
        }
        return r._previousEvent = t
      }
      return t
    })
  }
  e.prototype._shouldDropEvent = function (e, t) {
    return !!t && (!!this._isSameMessageEvent(e, t) || !!this._isSameExceptionEvent(e, t))
  }
  e.prototype._isSameMessageEvent = function (e, t) {
    var /* [auto-meaningful-name] */e$message = e.message
    var /* [auto-meaningful-name] */t$message = t.message
    return !(!e$message && !t$message) && !(e$message && !t$message || !e$message && t$message) && e$message === t$message && !!this._isSameFingerprint(e, t) && !!this._isSameStacktrace(e, t)
  }
  e.prototype._getFramesFromEvent = function (e) {
    var /* [auto-meaningful-name] */e$exception = e.exception
    if (e$exception) {
      try {
        return e$exception.values[0].stacktrace.frames
      } catch (n) {
        return
      }
    } else if (e.stacktrace) {
      return e.stacktrace.frames
    }
  }
  e.prototype._isSameStacktrace = function (e, t) {
    var n = this._getFramesFromEvent(e)
    var r = this._getFramesFromEvent(t)
    if (!n && !r) {
      return true
    }
    if (n && !r || !n && r) {
      return false
    }
    n = n
    if ((r = r).length !== n.length) {
      return false
    }
    for (var i = 0; i < r.length; i++) {
      var o = r[i]
      var a = n[i]
      if (o.filename !== a.filename || o.lineno !== a.lineno || o.colno !== a.colno || o.function !== a.function) {
        return false
      }
    }
    return true
  }
  e.prototype._getExceptionFromEvent = function (e) {
    return e.exception && e.exception.values && e.exception.values[0]
  }
  e.prototype._isSameExceptionEvent = function (e, t) {
    var n = this._getExceptionFromEvent(t)
    var r = this._getExceptionFromEvent(e)
    return !(!n || !r) && n.type === r.type && n.value === r.value && !!this._isSameFingerprint(e, t) && !!this._isSameStacktrace(e, t)
  }
  e.prototype._isSameFingerprint = function (e, t) {
    var /* [auto-meaningful-name] */e$fingerprint = e.fingerprint
    var /* [auto-meaningful-name] */t$fingerprint = t.fingerprint
    if (!e$fingerprint && !t$fingerprint) {
      return true
    }
    if (e$fingerprint && !t$fingerprint || !e$fingerprint && t$fingerprint) {
      return false
    }
    e$fingerprint = e$fingerprint
    t$fingerprint = t$fingerprint
    try {
      return !(e$fingerprint.join("") !== t$fingerprint.join(""))
    } catch (i) {
      return false
    }
  }
  e.id = "Dedupe"
  return e
}()
var Re = $_394.e()
var Pe = function () {
  function e() {
    this.name = e.id
  }
  e.prototype.setupOnce = function () {
    $_1027.b(function (t) {
      var /* [auto-meaningful-name] */t$request
      var /* [auto-meaningful-name] */Re$location
      var /* [auto-meaningful-name] */_t$request
      if ($$_340_2592_index.a().getIntegration(e)) {
        if (!Re.navigator && !Re.location && !Re.document) {
          return t
        }
        var a = (null === (t$request = t.request) || undefined === t$request ? undefined : t$request.url) || (null === (Re$location = Re.location) || undefined === Re$location ? undefined : Re$location.href)
        var /* [auto-meaningful-name] */Re$document$referrer = (Re.document || {}).referrer
        var /* [auto-meaningful-name] */Re$navigator$userAgent = (Re.navigator || {}).userAgent
        var l = $$_787_39.a($$_787_39.a($$_787_39.a({}, null === (_t$request = t.request) || undefined === _t$request ? undefined : _t$request.headers), Re$document$referrer && {
          Referer: Re$document$referrer
        }), Re$navigator$userAgent && {
          "User-Agent": Re$navigator$userAgent
        })
        var f = $$_787_39.a($$_787_39.a({}, a && {
          url: a
        }), {
          headers: l
        })
        return $$_787_39.a($$_787_39.a({}, t), {
          request: f
        })
      }
      return t
    })
  }
  e.id = "UserAgent"
  return e
}()
var Ne = [new r.InboundFilters(), new r.FunctionToString(), new Be(), new ke(), new De(), new Ie(), new Fe(), new Pe()]
function Me(e) {
  if (undefined === e) {
    e = {}
  }
  if (undefined === e.defaultIntegrations) {
    e.defaultIntegrations = Ne
  }
  if (undefined === e.release) {
    var t = $_394.e()
    if (t.SENTRY_RELEASE && t.SENTRY_RELEASE.id) {
      e.release = t.SENTRY_RELEASE.id
    }
  }
  if (undefined === e.autoSessionTracking) {
    e.autoSessionTracking = true
  }
  (function (e, t) {
    var n
    if (true === t.debug) {
      $_905.a.enable()
    }
    var r = $$_340_2592_index.a()
    if (!(null === (n = r.getScope()) || undefined === n)) {
      n.update(t.initialScope)
    }
    var i = new e(t)
    r.bindClient(i)
  })(Se, e)
  if (e.autoSessionTracking) {
    (function () {
      if ("undefined" === typeof $_394.e().document) {
        return void $_905.a.warn("Session tracking in non-browser environment with @sentry/browser is not supported.")
      }
      var e = $$_340_2592_index.a()
      if ("function" !== typeof e.startSession || "function" !== typeof e.captureSession) {
        return
      }
      e.startSession({
        ignoreDuration: true
      })
      e.captureSession()
      O({
        callback: function (t) {
          var /* [auto-meaningful-name] */t$from = t.from
          var r = t.to
          if (undefined !== t$from && t$from !== r) {
            e.startSession({
              ignoreDuration: true
            })
            e.captureSession()
          }
        },
        type: "history"
      })
    })()
  }
}
function je(e) {
  e._metadata = e._metadata || {}
  e._metadata.sdk = e._metadata.sdk || {
    name: "sentry.javascript.react",
    packages: [{
      name: "npm:@sentry/react",
      version: "6.12.0"
    }],
    version: "6.12.0"
  }
  Me(e)
}
export default je
