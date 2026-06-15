/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：307__part-8
 */

"use strict"

import { r, i, a, s, u, c } from "./index__part-0"
import { b } from "./index__part-2"
import { V, ie } from "./index__part-5"
import { Oe, Pe, Be, Ke } from "./index__part-6"
import { Qe, Ze, et } from "./index__part-7"
import * as /* [auto-meaningful-name] */Module_88 from /* 88 */"./88"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"./11"
import * as /* [auto-meaningful-name] */Module_90 from /* 90 */"./90"
import * as /* [auto-meaningful-name] */Module_186 from /* 186 */"./186"
import * as /* [auto-meaningful-name] */Module_22 from /* 22 */"./22"
import * as /* [auto-meaningful-name] */Module_69 from /* 69 */"./69/index"
import * as /* [auto-meaningful-name] */Module_57 from /* 57 */"./57"
import * as /* [auto-meaningful-name] */Module_76 from /* 76 */"./76"
import * as /* [auto-meaningful-name] */Module_12 from /* 12 */"./12"
import * as /* [auto-meaningful-name] */Module_23 from /* 23 */"./23"
import * as /* [auto-meaningful-name] */Module_179 from /* 179 */"./179"
var nt = ["fatal", "error", "warning", "log", "info", "debug", "critical"]
function rt(e) {
  return "warn" === e ? ie.Warning : function (e) {
    return -1 !== nt.indexOf(e)
  }(e) ? e : ie.Log
}
var it = function () {
  function e(t) {
    this.name = e.id
    this._options = s({
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
      Module_69.b().addBreadcrumb({
        category: "sentry." + ("transaction" === e.type ? "transaction" : "event"),
        event_id: e.event_id,
        level: e.level,
        message: Module_76.d(e)
      }, {
        event: e
      })
    }
  }
  e.prototype.setupOnce = function () {
    if (this._options.console) {
      Module_186.a("console", ot)
    }
    if (this._options.dom) {
      Module_186.a("dom", function (e) {
        function t(t) {
          var n
          var r = "object" === typeof e ? e.serializeAttribute : undefined
          if ("string" === typeof r) {
            r = [r]
          }
          try {
            n = t.event.target ? Module_179.b(t.event.target, r) : Module_179.b(t.event, r)
          } catch (i) {
            n = "<unknown>"
          }
          if (0 !== n.length) {
            Module_69.b().addBreadcrumb({
              category: "ui." + t.name,
              message: n
            }, {
              event: t.event,
              name: t.name,
              global: t.global
            })
          }
        }
        return t
      }(this._options.dom))
    }
    if (this._options.xhr) {
      Module_186.a("xhr", at)
    }
    if (this._options.fetch) {
      Module_186.a("fetch", st)
    }
    if (this._options.history) {
      Module_186.a("history", ut)
    }
  }
  e.id = "Breadcrumbs"
  return e
}()
function ot(e) {
  var t = {
    category: "console",
    data: {
      arguments: e.args,
      logger: "console"
    },
    level: rt(e.level),
    message: Module_57.b(e.args, " ")
  }
  if ("assert" === e.level) {
    if (false !== e.args[0]) {
      return
    }
    t.message = "Assertion failed: " + (Module_57.b(e.args.slice(1), " ") || "console.assert")
    t.data.arguments = e.args.slice(1)
  }
  Module_69.b().addBreadcrumb(t, {
    input: e.args,
    level: e.level
  })
}
function at(e) {
  if (e.endTimestamp) {
    if (e.xhr.__sentry_own_request__) {
      return
    }
    var t = e.xhr.__sentry_xhr__ || {}
    var /* [auto-meaningful-name] */t$method = t.method
    var /* [auto-meaningful-name] */t$url = t.url
    var /* [auto-meaningful-name] */t$status_code = t.status_code
    var /* [auto-meaningful-name] */t$body = t.body
    Module_69.b().addBreadcrumb({
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
function st(e) {
  if (e.endTimestamp) {
    if (!(e.fetchData.url.match(/sentry_key/) && "POST" === e.fetchData.method)) {
      if (e.error) {
        Module_69.b().addBreadcrumb({
          category: "fetch",
          data: e.fetchData,
          level: ie.Error,
          type: "http"
        }, {
          data: e.error,
          input: e.args
        })
      } else {
        Module_69.b().addBreadcrumb({
          category: "fetch",
          data: s(s({}, e.fetchData), {
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
function ut(e) {
  var t = Module_22.a()
  var /* [auto-meaningful-name] */e$from = e.from
  var r = e.to
  var i = Module_76.e(t.location.href)
  var o = Module_76.e(e$from)
  var a = Module_76.e(r)
  if (!o.path) {
    o = i
  }
  if (i.protocol === a.protocol && i.host === a.host) {
    r = a.relative
  }
  if (i.protocol === o.protocol && i.host === o.host) {
    e$from = o.relative
  }
  Module_69.b().addBreadcrumb({
    category: "navigation",
    data: {
      from: e$from,
      to: r
    }
  })
}
var ct = function (e) {
  function t(t) {
    if (undefined === t) {
      t = {}
    }
    t._metadata = t._metadata || {}
    t._metadata.sdk = t._metadata.sdk || {
      name: "sentry.javascript.browser",
      packages: [
        {
          name: "npm:@sentry/browser",
          version: i
        }
      ],
      version: i
    }
    return e.call(this, Ke, t) || this
  }
  a(t, e)
  t.prototype.showReportDialog = function (e) {
    if (undefined === e) {
      e = {}
    }
    if (Module_22.a().document) {
      if (this._isEnabled()) {
        et(s(s({}, e), {
          dsn: e.dsn || this.getDsn()
        }))
      } else {
        if (Be) {
          Module_12.c.error("Trying to call showReportDialog with Sentry Client disabled")
        }
      }
    }
  }
  t.prototype._prepareEvent = function (t, n, r) {
    t.platform = t.platform || "javascript"
    return e.prototype._prepareEvent.call(this, t, n, r)
  }
  t.prototype._sendEvent = function (t) {
    var n = this.getIntegration(it)
    if (n) {
      n.addSentryBreadcrumb(t)
    }
    e.prototype._sendEvent.call(this, t)
  }
  return t
}(V)
var lt = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"]
var ft = function () {
  function e(t) {
    this.name = e.id
    this._options = s({
      XMLHttpRequest: true,
      eventTarget: true,
      requestAnimationFrame: true,
      setInterval: true,
      setTimeout: true
    }, t)
  }
  e.prototype.setupOnce = function () {
    var e = Module_22.a()
    if (this._options.setTimeout) {
      Module_23.e(e, "setTimeout", pt)
    }
    if (this._options.setInterval) {
      Module_23.e(e, "setInterval", pt)
    }
    if (this._options.requestAnimationFrame) {
      Module_23.e(e, "requestAnimationFrame", dt)
    }
    if (this._options.XMLHttpRequest && "XMLHttpRequest" in e) {
      Module_23.e(XMLHttpRequest.prototype, "send", ht)
    }
    var /* [auto-meaningful-name] */this$_options$eventTarget = this._options.eventTarget
    if (this$_options$eventTarget) {
      (Array.isArray(this$_options$eventTarget) ? this$_options$eventTarget : lt).forEach(gt)
    }
  }
  e.id = "TryCatch"
  return e
}()
function pt(e) {
  return function () {
    for (var t = [], n = 0; n < arguments.length; n++) {
      t[n] = arguments[n]
    }
    var r = t[0]
    t[0] = Ze(r, {
      mechanism: {
        data: {
          function: Module_88.b(e)
        },
        handled: true,
        type: "instrument"
      }
    })
    return e.apply(this, t)
  }
}
function dt(e) {
  return function (t) {
    return e.apply(this, [
      Ze(t, {
        mechanism: {
          data: {
            function: "requestAnimationFrame",
            handler: Module_88.b(e)
          },
          handled: true,
          type: "instrument"
        }
      })
    ])
  }
}
function ht(e) {
  return function () {
    for (var t = [], n = 0; n < arguments.length; n++) {
      t[n] = arguments[n]
    }
    var r = this;
    ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(function (e) {
      if (e in r && "function" === typeof r[e]) {
        Module_23.e(r, e, function (t) {
          var n = {
            mechanism: {
              data: {
                function: e,
                handler: Module_88.b(t)
              },
              handled: true,
              type: "instrument"
            }
          }
          var r = Module_23.f(t)
          if (r) {
            n.mechanism.data.handler = Module_88.b(r)
          }
          return Ze(t, n)
        })
      }
    })
    return e.apply(this, t)
  }
}
function gt(e) {
  var t = Module_22.a()
  var n = t[e] && t[e].prototype
  if (n && n.hasOwnProperty && n.hasOwnProperty("addEventListener")) {
    Module_23.e(n, "addEventListener", function (t) {
      return function (n, r, i) {
        try {
          if ("function" === typeof r.handleEvent) {
            r.handleEvent = Ze(r.handleEvent.bind(r), {
              mechanism: {
                data: {
                  function: "handleEvent",
                  handler: Module_88.b(r),
                  target: e
                },
                handled: true,
                type: "instrument"
              }
            })
          }
        } catch (o) {}
        return t.apply(this, [
          n, Ze(r, {
            mechanism: {
              data: {
                function: "addEventListener",
                handler: Module_88.b(r),
                target: e
              },
              handled: true,
              type: "instrument"
            }
          }), i
        ])
      }
    })
    Module_23.e(n, "removeEventListener", function (e) {
      return function (t, n, r) {
        var i = n
        try {
          var o = i && i.__sentry_wrapped__
          if (o) {
            e.call(this, t, o, r)
          }
        } catch (a) {}
        return e.call(this, t, i, r)
      }
    })
  }
}
var mt = function () {
  function e(t) {
    this.name = e.id
    this._installFunc = {
      onerror: vt,
      onunhandledrejection: yt
    }
    this._options = s({
      onerror: true,
      onunhandledrejection: true
    }, t)
  }
  e.prototype.setupOnce = function () {
    Error.stackTraceLimit = 50
    var e
    var /* [auto-meaningful-name] */this$_options = this._options
    for (var n in this$_options) {
      var r = this._installFunc[n]
      if (r && this$_options[n]) {
        e = n
        if (Be) {
          Module_12.c.log("Global Handler attached: " + e)
        }
        r()
        this._installFunc[n] = undefined
      }
    }
  }
  e.id = "GlobalHandlers"
  return e
}()
function vt() {
  Module_186.a("error", function (e) {
    var t = u(wt(), 2)
    var n = t[0]
    var r = t[1]
    if (n.getIntegration(mt)) {
      var /* [auto-meaningful-name] */e$msg = e.msg
      var /* [auto-meaningful-name] */e$url = e.url
      var /* [auto-meaningful-name] */e$line = e.line
      var /* [auto-meaningful-name] */e$column = e.column
      var /* [auto-meaningful-name] */e$error = e.error
      if (!(Qe() || e$error && e$error.__sentry_own_request__)) {
        var l = undefined === e$error && Module_11.l(e$msg) ? function (e, t, n, r) {
          var i = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i
          var o = Module_11.e(e) ? e.message : e
          var /* [auto-meaningful-name] */_Error = "Error"
          var s = o.match(i)
          if (s) {
            _Error = s[1]
            o = s[2]
          }
          var u = {
            exception: {
              values: [
                {
                  type: _Error,
                  value: o
                }
              ]
            }
          }
          return _t(u, t, n, r)
        }(e$msg, e$url, e$line, e$column) : _t(Pe(e$error || e$msg, undefined, r, false), e$url, e$line, e$column)
        l.level = ie.Error
        bt(n, e$error, l, "onerror")
      }
    }
  })
}
function yt() {
  Module_186.a("unhandledrejection", function (e) {
    var t = u(wt(), 2)
    var n = t[0]
    var r = t[1]
    if (n.getIntegration(mt)) {
      var i = e
      try {
        if ("reason" in e) {
          i = e.reason
        } else {
          if ("detail" in e && "reason" in e.detail) {
            i = e.detail.reason
          }
        }
      } catch (a) {}
      if (Qe() || i && i.__sentry_own_request__) {
        return true
      }
      var o = Module_11.j(i) ? {
        exception: {
          values: [
            {
              type: "UnhandledRejection",
              value: "Non-Error promise rejection captured with value: " + String(i)
            }
          ]
        }
      } : Pe(i, undefined, r, true)
      o.level = ie.Error
      bt(n, i, o, "onunhandledrejection")
    }
  })
}
function _t(e, t, n, r) {
  var i = e.exception = e.exception || {}
  var o = i.values = i.values || []
  var a = o[0] = o[0] || {}
  var s = a.stacktrace = a.stacktrace || {}
  var u = s.frames = s.frames || []
  var c = isNaN(parseInt(r, 10)) ? undefined : r
  var l = isNaN(parseInt(n, 10)) ? undefined : n
  var f = Module_11.l(t) && t.length > 0 ? t : Module_179.a()
  if (0 === u.length) {
    u.push({
      colno: c,
      filename: f,
      function: "?",
      in_app: true,
      lineno: l
    })
  }
  return e
}
function bt(e, t, n, r) {
  Module_76.a(n, {
    handled: false,
    type: r
  })
  e.captureEvent(n, {
    originalException: t
  })
}
function wt() {
  var e = Module_69.b()
  var t = e.getClient()
  return [e, t && t.getOptions().attachStacktrace]
}
var St = function () {
  function e(t) {
    if (undefined === t) {
      t = {}
    }
    this.name = e.id
    this._key = t.key || "cause"
    this._limit = t.limit || 5
  }
  e.prototype.setupOnce = function () {
    Module_90.b(function (t, n) {
      var r = Module_69.b().getIntegration(e)
      return r ? function (e, t, n, r) {
        if (!n.exception || !n.exception.values || !r || !Module_11.g(r.originalException, Error)) {
          return n
        }
        var i = kt(t, r.originalException, e)
        n.exception.values = c(i, n.exception.values)
        return n
      }(r._key, r._limit, t, n) : t
    })
  }
  e.id = "LinkedErrors"
  return e
}()
function kt(e, t, n, r) {
  if (undefined === r) {
    r = []
  }
  if (!Module_11.g(t[n], Error) || r.length + 1 >= e) {
    return r
  }
  var i = Oe(t[n])
  return kt(e, t[n], n, c([i], r))
}
var Ot = function () {
  function e() {
    this.name = e.id
  }
  e.prototype.setupOnce = function (t, n) {
    t(function (t) {
      var r = n().getIntegration(e)
      if (r) {
        try {
          if (function (e, t) {
            if (!t) {
              return false
            }
            if (function (e, t) {
              var /* [auto-meaningful-name] */e$message = e.message
              var /* [auto-meaningful-name] */t$message = t.message
              if (!e$message && !t$message) {
                return false
              }
              if (e$message && !t$message || !e$message && t$message) {
                return false
              }
              if (e$message !== t$message) {
                return false
              }
              if (!Tt(e, t)) {
                return false
              }
              if (!Et(e, t)) {
                return false
              }
              return true
            }(e, t)) {
              return true
            }
            if (function (e, t) {
              var n = xt(t)
              var r = xt(e)
              if (!n || !r) {
                return false
              }
              if (n.type !== r.type || n.value !== r.value) {
                return false
              }
              if (!Tt(e, t)) {
                return false
              }
              if (!Et(e, t)) {
                return false
              }
              return true
            }(e, t)) {
              return true
            }
            return false
          }(t, r._previousEvent)) {
            if (Be) {
              Module_12.c.warn("Event dropped due to being a duplicate of previously captured event.")
            }
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
  e.id = "Dedupe"
  return e
}()
function Et(e, t) {
  var n = jt(e)
  var r = jt(t)
  if (!n && !r) {
    return true
  }
  if (n && !r || !n && r) {
    return false
  }
  if (r.length !== n.length) {
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
function Tt(e, t) {
  var /* [auto-meaningful-name] */e$fingerprint = e.fingerprint
  var /* [auto-meaningful-name] */t$fingerprint = t.fingerprint
  if (!e$fingerprint && !t$fingerprint) {
    return true
  }
  if (e$fingerprint && !t$fingerprint || !e$fingerprint && t$fingerprint) {
    return false
  }
  try {
    return !(e$fingerprint.join("") !== t$fingerprint.join(""))
  } catch (i) {
    return false
  }
}
function xt(e) {
  return e.exception && e.exception.values && e.exception.values[0]
}
function jt(e) {
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
var Pt = Module_22.a()
var Ct = function () {
  function e() {
    this.name = e.id
  }
  e.prototype.setupOnce = function () {
    Module_90.b(function (t) {
      if (Module_69.b().getIntegration(e)) {
        if (!Pt.navigator && !Pt.location && !Pt.document) {
          return t
        }
        var n = t.request && t.request.url || Pt.location && Pt.location.href
        var /* [auto-meaningful-name] */Pt$document$referrer = (Pt.document || {}).referrer
        var /* [auto-meaningful-name] */Pt$navigator$userAgent = (Pt.navigator || {}).userAgent
        var o = s(s(s({}, t.request && t.request.headers), Pt$document$referrer && {
          Referer: Pt$document$referrer
        }), Pt$navigator$userAgent && {
          "User-Agent": Pt$navigator$userAgent
        })
        var a = s(s({}, n && {
          url: n
        }), {
          headers: o
        })
        return s(s({}, t), {
          request: a
        })
      }
      return t
    })
  }
  e.id = "UserAgent"
  return e
}()
var It = [new r.InboundFilters(), new r.FunctionToString(), new ft(), new it(), new mt(), new St(), new Ot(), new Ct()]
function Nt(e) {
  if (undefined === e) {
    e = {}
  }
  if (undefined === e.defaultIntegrations) {
    e.defaultIntegrations = It
  }
  if (undefined === e.release) {
    var t = Module_22.a()
    if (t.SENTRY_RELEASE && t.SENTRY_RELEASE.id) {
      e.release = t.SENTRY_RELEASE.id
    }
  }
  if (undefined === e.autoSessionTracking) {
    e.autoSessionTracking = true
  }
  if (undefined === e.sendClientReports) {
    e.sendClientReports = true
  }
  (function (e, t) {
    if (true === t.debug) {
      if (b) {
        Module_12.c.enable()
      } else {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.")
      }
    }
    var n = Module_69.b()
    var r = n.getScope()
    if (r) {
      r.update(t.initialScope)
    }
    var i = new e(t)
    n.bindClient(i)
  })(ct, e)
  if (e.autoSessionTracking) {
    (function () {
      if ("undefined" === typeof Module_22.a().document) {
        return void (Be && Module_12.c.warn("Session tracking in non-browser environment with @sentry/browser is not supported."))
      }
      var e = Module_69.b()
      if (!e.captureSession) {
        return
      }
      At(e)
      Module_186.a("history", function (e) {
        var /* [auto-meaningful-name] */e$from = e.from
        var n = e.to
        if (undefined !== e$from && e$from !== n) {
          At(Module_69.b())
        }
      })
    })()
  }
}
function At(e) {
  e.startSession({
    ignoreDuration: true
  })
  e.captureSession()
}
function Rt(e) {
  e._metadata = e._metadata || {}
  e._metadata.sdk = e._metadata.sdk || {
    name: "sentry.javascript.react",
    packages: [
      {
        name: "npm:@sentry/react",
        version: i
      }
    ],
    version: i
  }
  Nt(e)
}
export { Rt }
